import bots.interactive as interactive
import numpy as np
import os

from utils import module_path
from replay import State, Input, Team
from joblib import load
from bots.lgbm.preprocessing import game_state_to_numpy, Encoder
from bots.lgbm.preprocessing import transform_state_around_pivot
from bots.lgbm.preprocessing import transform_actions_around_pivot
from bots.lgbm.preprocessing import STACK_FRAMES, TRANSFORM_AROUND_PIVOT


def is_in_gameplay(game_state) -> bool:
    return game_state != State.Pause and game_state != State.Menu


class LGBMBot(interactive.Interactive):
    def __init__(self, channel_id):
        super().__init__(channel_id)

        # Load pre-trained model and set-up the bot
        self.REPEAT_FRAMES = 1
        self.model = load(os.path.join(
            module_path(__file__), "imitator1.joblib"))
        self.recent_frames = []
        self.frames_passed = 0

    def can_act(self) -> bool:
        return self.player is not None and is_in_gameplay(self.game.state)

    def prepare_observation(self) -> np.array:
        # Transform around the pivot
        if TRANSFORM_AROUND_PIVOT:
            transform_state_around_pivot(self.game, self.player.team)

        # Etract current frame and put it to recent ones
        cur_frame, _ = game_state_to_numpy(self.game, self.player.team)
        i = 0
        if len(self.recent_frames) == 0:
            self.recent_frames = [cur_frame] * STACK_FRAMES
        else:
            for i in range(1, STACK_FRAMES):
                self.recent_frames[i] = self.recent_frames[i - 1]
            self.recent_frames[0] = cur_frame

        return np.concatenate(self.recent_frames).ravel()

    def onUpdate(self):
        if self.can_act():
            if self.frames_passed % self.REPEAT_FRAMES == 0:
                obs = self.prepare_observation()
                self.action = self.act(obs)

            print(self.action)
            self.send_action(self.action)
            self.frames_passed += 1

    def act(self, obs: np.array) -> int:
        action = self.model.predict(obs.reshape(1, -1))
        return action

    def send_action(self, action) -> None:
        if TRANSFORM_AROUND_PIVOT:
            inputs_booleans = Encoder.dirstate_to_boolarr(
                Encoder.class_to_dirstate(self.action))
            inputs_booleans = transform_actions_around_pivot(
                inputs_booleans, self.player.team)

            inputs = Encoder.dirstate_to_enumarr(
                Encoder.boolarr_to_dirstate(inputs_booleans))
        else:
            inputs = Encoder.class_to_enumarr(action)

        self.setInput(*inputs)

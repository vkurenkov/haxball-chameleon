import bots.interactive  as interactive
import numpy as np
import os

from utils                   import module_path
from replay                  import State, Input, Team
from joblib                  import load
from bots.lgbm.preprocessing import game_state_to_numpy, Encoder


def is_in_gameplay(game_state) -> bool:
  return game_state != State.Pause and game_state != State.Menu


def transform_blue_pivotal(frame):
    """
    Inplace transformation of disk positions and velocities based on the pivotal team side.
    Inverse x-axis basically.
    
    frames: a list of replay frames
    """
    if frame.players is None:
        return
        
    for player in frame.players:
        # Inverse position and velocity along x-axis
        player.disc.x  = -player.disc.x
        player.disc.vx = -player.disc.vx
        
        # Swap left and right actions
        #temp            = player.input[2]
        #player.input[2] = player.input[3]
        #player.input[3] = temp
        
    # Inverse position and velocity of the ball along x-axis
    frame.ball.x  = -frame.ball.x
    frame.ball.vx = -frame.ball.vx


class LGBMBot(interactive.Interactive):
  def __init__(self, channel_id):
    super().__init__(channel_id)
    
    # Load pre-trained model and set-up the bot
    self.STACK_FRAMES  = 1
    self.model         = load(os.path.join(module_path(__file__), "imitator1.joblib"))
    self.recent_frames = []

  def onUpdate(self):
    if self.player and is_in_gameplay(self.game.state):
      # Reverse sides
      #if self.player.team == Team.Blue:
      #  transform_blue_pivotal(self.game)

      # Etract current frame and put it to recent ones
      cur_frame, _ = game_state_to_numpy(self.game, self.player.team)
      #print(cur_frame)
      cur_frame    = np.concatenate(cur_frame).ravel().astype(np.float32)
      i = 0
      if len(self.recent_frames) == 0:
        self.recent_frames = [cur_frame] * self.STACK_FRAMES
      else:
        for i in range(1, self.STACK_FRAMES):
          self.recent_frames[i] = self.recent_frames[i - 1]
        self.recent_frames[0] = cur_frame

      # Predict what actions to proceed with
      obs = np.concatenate(self.recent_frames).ravel()
      act = self.model.predict(obs.reshape(1, -1))

      # Convert them to interactor input
      inputs = Encoder.class_to_enumarr(act)
      self.setInput(*inputs)

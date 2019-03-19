import os
import numpy as np

from connector.replay import Replay, State, Team, Game, Disc
from typing           import Optional, Tuple

def remove_menu_and_pause(replay, debug=False):
    episodes    = []
    cur_episode = []
    prev_state  = replay[0].state
    for frame in replay:
        # Last frame was added, start new episode
        if (frame.state != State.Goal and prev_state == State.Goal) \
                or (frame.state == State.Menu and prev_state != State.Menu):
            episodes.append(cur_episode)
            cur_episode = []
            
        if debug:
            if frame.state != prev_state:
                print("Cur: {}; Prev: {}".format(frame.state, prev_state))
                print(frame.score)
            
            
        # Add only warm-up, game, and goal state
        if frame.state != State.Menu and frame.state != State.Pause:
            cur_episode.append(frame)
            
        prev_state = frame.state
        
    return episodes

def who_scored(episode) -> Optional[Team]:
    if episode[0].score == episode[-1].score:
        return None
    if episode[0].score[0] != episode[-1].score[0]:
        return Team.Red
    return Team.Blue

def game_state_to_numpy(game_state: Game, player_id: int) -> Tuple[np.array, np.array]:
    def disc_to_numpy(disc : Disc):
        return np.array([disc.x, disc.y, disc.vx, disc.vy])
    
    X = [] 
    for player in game_state.players:
        if player.id == player_id:
            y = player.input
            X.append(disc_to_numpy(player.disc))
        else:
            X.append(disc_to_numpy(player.disc))
    X.append(disc_to_numpy(game_state.ball))
    X.append(np.array([game_state.score[0] - game_state.score[1]]))

    return np.array(X), np.array(y)
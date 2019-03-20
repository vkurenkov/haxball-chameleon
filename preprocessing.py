import os
import numpy as np

from connector.replay import Replay, State, Team, Game, Disc, Input
from typing           import Optional, Tuple

class Encoder(object):
    state_to_class = {
        tuple([0,0,0]):0,
        tuple([0,0,1]):1,
        
        tuple([-1,0,0]):2,
        tuple([-1,0,1]):3,
        
        tuple([0,-1,0]):4,
        tuple([0,-1,1]):5,
        
        tuple([1,0,0]):6,
        tuple([1,0,1]):7,
        
        tuple([0,1,0]):8,
        tuple([0,1,1]):9,
        
        tuple([1,1,0]):10,
        tuple([1,1,1]):11,
        
        tuple([-1,-1,0]):12,
        tuple([-1,-1,1]):13,
        
        tuple([-1,1,0]):14,
        tuple([-1,1,1]):15,
        
        tuple([1,-1,0]):16,
        tuple([1,-1,1]):17,
    }
    
    @staticmethod
    def boolarr_to_class(y : [bool]) -> int:
        def boolarr_to_dirstate(y : [bool]) -> np.array:
            result = [0,0,0]
            if y[0]: #UP key pressed
                result[0] += 1
            if y[1]: #down key pressed
                result[0] -= 1

            if y[2]: #left
                result[1] += 1
            if y[3]: #right
                result[1] -= 1

            if y[4]:
                result[2] += 1

            return np.array(result)

        return Encoder.state_to_class[tuple(boolarr_to_dirstate(y))]
    
    @staticmethod
    def class_to_boolarr(result : int) -> [bool]:
        assert(result<=17)
        def dirstate_to_boolarr(result : np.array) -> [bool]:
            y = [False for x in range(0,5)]
            if result[0] == 1:
                y[0] = True #UP key pressed
            if result[0] == -1:
                y[1] = True #down key pressed
                
            if result[1] == 1: #left
                y[2] = True
            if result[1] == -1: #right
                y[3] = True
            if result[2] == 1:
                y[4] = True
            return y
        
        for dirstate, cls in Encoder.state_to_class.items():    
            if result == cls:
                return dirstate
        raise ValueError("Class not found")
        
    @staticmethod
    def boolarr_to_enumarr(y: [bool]) -> [Input]:
        output = []
        if y[0] == 1:
            output.append(Input.Down)
        elif y[0] == -1:
            output.append(Input.Up)
            
        if y[1] == 1:
            output.append(Input.Left)
        elif y[1] == -1:
            output.append(Input.Right)
            
        if y[2] == 1:
            output.append(Input.Kick)
            
        return output

    @staticmethod
    def class_to_enumarr(result: int) -> [Input]:
        return Encoder.boolarr_to_enumarr(Encoder.class_to_boolarr(result))


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

def game_state_to_numpy(game_state: Game, team: Team) -> Tuple[np.array, np.array]:
    def disc_to_numpy(disc : Disc):
        return np.array([disc.x, disc.y, disc.vx, disc.vy])
    
    X = [None, None, None, None]
    y = None
    for player in game_state.players:
        if player.team == team:
            y = player.input
            X[0] = disc_to_numpy(player.disc)
        else:
            X[1] = disc_to_numpy(player.disc)
    X[2] = disc_to_numpy(game_state.ball)

    if team == Team.Red:
        score_diff = game_state.score[0] - game_state.score[1]
    else:
        score_diff = game_state.score[1] - game_state.score[0]

    X[3] = np.array([score_diff])

    return np.array(X), np.array(y)
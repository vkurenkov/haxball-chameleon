import os
import numpy as np

from replay import Replay, State, Team, Game, Disc, Input
from typing import Optional, Tuple, List

# We're sorry for this.
# It does a mapping between pressed buttons to a class and vice-verse
class Encoder(object):
    # 0 dimension for up/down (0 - not pressed, 1 - up, -1 - down)
    # 1 dimension for left/right (0 - not pressed, 1 - left, -1 - right)
    # 2 dimension for kick (0 - not pressed, 1 - pressed)
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

    @staticmethod
    def boolarr_to_class(y : [bool]) -> int:
        return Encoder.state_to_class[tuple(Encoder.boolarr_to_dirstate(y))]
    
    @staticmethod
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

    @staticmethod
    def class_to_dirstate(result : int) -> [bool]:
        assert(result<=17)
        for dirstate, cls in Encoder.state_to_class.items():    
            if result == cls:
                return dirstate
        raise ValueError("Class not found")
        
    @staticmethod
    def dirstate_to_enumarr(y: [bool]) -> [Input]:
        output = []
        if y[0] == 1:
            output.append(Input.Up)
        elif y[0] == -1:
            output.append(Input.Down)
            
        if y[1] == 1:
            output.append(Input.Left)
        elif y[1] == -1:
            output.append(Input.Right)
            
        if y[2] == 1:
            output.append(Input.Kick)
            
        return output

    @staticmethod
    def class_to_enumarr(result: int) -> [Input]:
        return Encoder.dirstate_to_enumarr(Encoder.class_to_dirstate(result))

STACK_FRAMES           = 4
TRANSFORM_AROUND_PIVOT = False

def transform_episode_around_pivot(episode, team: Team) -> None:
    for state in episode:
        transform_state_around_pivot(state, team)

def transform_state_around_pivot(state: Game, team: Team) -> None:
    """
    Red team is assumed to be pivotal.
    """
    if team == Team.Blue:
        if state.players is None:
            return

        for player in state.players:
            # Inverse position and velocity along x-axis
            player.disc.x  = -player.disc.x
            player.disc.vx = -player.disc.vx

            # Swap left and right actions
            temp            = player.input[2]
            player.input[2] = player.input[3]
            player.input[3] = temp

        # Inverse position and velocity of the ball along x-axis
        state.ball.x  = -state.ball.x
        state.ball.vx = -state.ball.vx

def transform_actions_around_pivot(boolarr: List[bool], team: Team) -> List[bool]:
    """
    Red team is assumed to be pivotal.
    """
    if team == Team.Blue:
        # Swap left and right actions
        temp       = boolarr[2]
        boolarr[2] = boolarr[3]
        boolarr[3] = temp

    return boolarr

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

def decompose_norm_unit(pos: np.array) -> Tuple[float, np.array]:
    norm_pos = np.linalg.norm(pos)
    if norm_pos == 0:
        unit_pos = pos
    else:
        unit_pos = pos / norm_pos

    return norm_pos, unit_pos

def distance_and_angle(pos1: np.array, pos2: np.array) -> Tuple[float, float]:
    _, pos1_u = decompose_norm_unit(pos1)
    _, pos2_u = decompose_norm_unit(pos2)

    dist  = np.linalg.norm(pos1 - pos2)
    angle = np.arccos(np.clip(np.dot(pos1_u, pos2_u), -1.0, 1.0))

    return dist, angle

def game_state_to_numpy(game_state: Game, team: Team) -> Tuple[np.array, np.array]:
    X = []
    y = None

    player = None
    enemy  = None
    for actor in game_state.players:
        if actor.team == team:
            player = actor
        else:
            enemy = actor

    if player is None or enemy is None:
        return None, None

    # Player's input bitmask
    y = player.input

    # Score difference
    if team == Team.Red:
        score_diff = game_state.score[0] - game_state.score[1]
    else:
        score_diff = game_state.score[1] - game_state.score[0]

    # Distances and angles between moving objects
    player_pos = np.array([player.disc.x, player.disc.y])
    enemy_pos  = np.array([enemy.disc.x, enemy.disc.y])
    ball_pos   = np.array([game_state.ball.x, game_state.ball.y])

    dist_player_enemy, dir_player_enemy = decompose_norm_unit(player_pos - enemy_pos)
    dist_player_ball,  dir_player_ball  = decompose_norm_unit(player_pos - ball_pos)
    dist_enemy_ball,   dir_enemy_ball   = decompose_norm_unit(enemy_pos  - ball_pos)

    # Speed and angle differences between moving objects
    player_v = np.array([player.disc.vx, player.disc.vy])
    enemy_v  = np.array([enemy.disc.vx, enemy.disc.vy])
    ball_v   = np.array([game_state.ball.vx, game_state.ball.vy])

    player_speed, player_speed_dir = decompose_norm_unit(player_v)
    enemy_speed,  enemy_speed_dir  = decompose_norm_unit(enemy_v)
    ball_speed,   ball_speed_dir   = decompose_norm_unit(ball_v)

    if team == Team.Red:
        enemy_gate_pos = np.array([380, 0])
    else:
        enemy_gate_pos = np.array([-380, 0])
    dist_enemy_gate, dir_enemy_gate = decompose_norm_unit(player_pos - enemy_gate_pos)

    enemy_kick = enemy.input[-1] == Input.Kick

    # Gamestate
    gamestate = 0
    if game_state.state == State.Game:
        gamestate = 0
    elif game_state.state == State.Warmup:
        gamestate = 1
    elif game_state.state == State.Goal:
        gamestate = 2
    else:
        raise NotImplementedError("Can't handle other states.")

    X.append(np.array([
                dist_player_enemy, dist_player_ball, dist_enemy_ball,
                *dir_player_enemy, *dir_player_ball, *dir_enemy_ball,
                *player_pos, *enemy_pos, *ball_pos,
                #dist_player_enemy_v, dist_player_ball_v, dist_enemy_ball_v,
                #angle_player_enemy_v, angle_player_ball_v, angle_enemy_ball_v,
                gamestate, team.value
            ]).ravel())

    return np.concatenate(X), np.array(y)
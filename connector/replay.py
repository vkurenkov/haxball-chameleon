from enum import Enum
from collections import namedtuple
import struct

class Team(Enum):
  Red = 0
  Blue = 1

class State(Enum):
  Menu = 0
  Pause = 1
  Warmup = 2
  Game = 3
  Goal = 4

class Input(Enum):
  Up = 1
  Down = 2
  Left = 4
  Right = 8
  Kick = 16

  def test(self, input_):
    return input_ & self.value == self.value

class Game:
    def __init__(self, replayTime, state, gameTime, score, overtime, players, ball):
        self.replayTime = replayTime
        self.state      = state
        self.gameTime   = gameTime
        self.score      = score
        self.overtime   = overtime
        self.players    = players
        self.ball       = ball
        
class Disc:
    def __init__(self, x, y, vx, vy):
        self.x  = x
        self.y  = y
        self.vx = vx
        self.vy = vy
        
class Player:
    def __init__(self, id, input, kick, team, disc):
        self.id    = id
        self.input = input
        self.kick  = kick
        self.team  = team
        self.disc  = disc

def unpack2(struct_, buffer, offset):
  return struct_.unpack_from(buffer, offset), offset + struct_.size

def int_to_bool_list(num):
    return [bool(num & (1<<n)) for n in range(5)]

_Disc_s = struct.Struct('>dddd')
def make_disc(buffer, offset):
  (x, y, vx, vy), offset = unpack2(_Disc_s, buffer, offset)
  return Disc(x, y, vx, vy), offset

_Player_s = struct.Struct('>BBBB')
def make_player(buffer, offset):
  (id_, input_, kick_, team_), offset = unpack2(_Player_s, buffer, offset)
  input_ = int_to_bool_list(input_)
    
  disc, offset = make_disc(buffer, offset)
  return Player(id_, input_, bool(kick_), Team(team_), disc), offset

_Game_s1 = struct.Struct('>dB')
_Game_s2 = struct.Struct('>dBBBB')

def make_game(buffer, offset):
  (replayTime, state_), offset = unpack2(_Game_s1, buffer, offset)
  state = State(state_)
  if state == State.Menu:
    gameTime, score, overtime, ball, players = None, None, None, None, None
  else:
    (gameTime, redScore, blueScore, overtime_, playersCount), offset = unpack2(_Game_s2, buffer, offset)
    overtime = bool(overtime_)
    score = (redScore, blueScore)
    players = []
    for _ in range(playersCount):
      player, offset = make_player(buffer, offset)
      players.append(player)
    ball, offset = make_disc(buffer, offset)
  return Game(replayTime, state, gameTime, score, overtime, players, ball), offset

def Replay(buffer):
  offset = 0
  games = []
  while offset < len(buffer):
    game, offset = make_game(buffer, offset)
    games.append(game)
  return games

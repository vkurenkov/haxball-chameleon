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

def unpack2(struct_, buffer, offset):
  return struct_.unpack_from(buffer, offset), offset + struct_.size

_Disc_s = struct.Struct('>dddd')
_Disc = namedtuple('Disc', ('x y vx vy'))
def Disc(buffer, offset):
  disc, offset = unpack2(_Disc_s, buffer, offset)
  return _Disc(*disc), offset

_Player_s = struct.Struct('>BBBB')
_Player = namedtuple('Player', ('id input kick team disc'))
def Player(buffer, offset):
  (id_, input_, kick_, team_), offset = unpack2(_Player_s, buffer, offset)
  disc, offset = Disc(buffer, offset)
  return _Player(id_, input_, bool(kick_), Team(team_), disc), offset

_Game_s1 = struct.Struct('>dB')
_Game_s2 = struct.Struct('>dBBBB')
_Game = namedtuple('Game', ('replayTime state gameTime score overtime players ball'))
def Game(buffer, offset):
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
      player, offset = Player(buffer, offset)
      players.append(player)
    ball, offset = Disc(buffer, offset)
  return _Game(replayTime, state, gameTime, score, overtime, players, ball), offset

def Replay(buffer):
  offset = 0
  games = []
  while offset < len(buffer):
    game, offset = Game(buffer, offset)
    games.append(game)
  return games

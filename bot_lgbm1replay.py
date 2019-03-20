import connector.async_common as async_common
import connector.interactive  as interactive
import connector.replay       as replay
import numpy as np

from connector.replay import State, Input, Team
from joblib           import load
from preprocessing    import game_state_to_numpy, Encoder

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


class Interactive2(interactive.Interactive):
  def onUpdate(self):
    global imitator
    global recent_frames

    if self.player and is_in_gameplay(self.game.state):
      # Reverse sides
      #if self.player.team == Team.Blue:
      #  transform_blue_pivotal(self.game)

      # Etract current frame and put it to recent ones
      cur_frame, _ = game_state_to_numpy(self.game, self.player.team)
      #print(cur_frame)
      cur_frame    = np.concatenate(cur_frame).ravel().astype(np.float32)
      i = 0
      if len(recent_frames) == 0:
        recent_frames = [cur_frame] * STACK_FRAMES
      else:
        for i in range(1, STACK_FRAMES):
          recent_frames[i] = recent_frames[i - 1]
        recent_frames[0] = cur_frame

      # Predict what actions to proceed with
      obs = np.concatenate(recent_frames).ravel()
      act = imitator.predict(obs.reshape(1, -1))

      # Convert them to interactor input
      inputs = Encoder.class_to_enumarr(act)
      self.setInput(*inputs)

if __name__ == '__main__':
  STACK_FRAMES  = 1
  imitator      = load("imitator1.joblib")
  recent_frames = []

  try:
    async_common.run(Interactive2('0').play())
  except KeyboardInterrupt:
    pass

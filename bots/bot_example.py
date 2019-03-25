import replay

from bots import interactive

class ChasingBot(interactive.Interactive):
  def onUpdate(self):
    if self.player:
      t = 40
      px = self.player.disc.x
      py = self.player.disc.y

      bx = self.game.ball.x
      by = self.game.ball.y
      
      inputs = []
      if abs(px - bx) > t:
        inputs.append(replay.Input.Right if px < bx else replay.Input.Left)
      if abs(py - by) > t:
        inputs.append(replay.Input.Down if py < by else replay.Input.Up)
      self.setInput(*inputs)

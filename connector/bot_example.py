import async_common
import interactive
import replay

class Interactive2(interactive.Interactive):
  def onUpdate(self):
    if self.player:
      t = 40
      px, py, _, _ = self.player.disc
      bx, by, _, _ = self.game.ball
      inputs = []
      if abs(px - bx) > t:
        inputs.append(replay.Input.Right if px < bx else replay.Input.Left)
      if abs(py - by) > t:
        inputs.append(replay.Input.Down if py < by else replay.Input.Up)
      self.setInput(*inputs)

if __name__ == '__main__':
  try:
    async_common.run(Interactive2().play())
  except KeyboardInterrupt:
    pass

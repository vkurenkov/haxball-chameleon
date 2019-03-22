# https://gist.github.com/lambdalisue/05d5654bd1ec04992ad316d50924137c

import asyncio
import sys

if sys.platform.startswith('win'):
  def hotfix(loop: asyncio.AbstractEventLoop) -> asyncio.AbstractEventLoop:
    loop.call_soon(_wakeup, loop, 1.0)
    return loop
  def _wakeup(loop: asyncio.AbstractEventLoop, delay: float=1.0) -> None:
    loop.call_later(delay, _wakeup, loop, delay)
else:
  def hotfix(loop: asyncio.AbstractEventLoop) -> asyncio.AbstractEventLoop:
    return loop

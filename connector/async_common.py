import asyncio

from . import asyncio_sigint

loop = asyncio.get_event_loop()

asyncio_sigint.hotfix(loop)

def run(awaitable):
  try:
    task = asyncio.ensure_future(awaitable)
    loop.run_until_complete(task)
  except KeyboardInterrupt as e:
    task.cancel()
    try:
      loop.run_until_complete(task)
    except asyncio.CancelledError:
      raise e

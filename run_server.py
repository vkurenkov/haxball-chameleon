import aiohttp
import haxball.async_common as async_common

from aiohttp import web

routes = web.RouteTableDef()

def route_ws(path):
  def decorator(fn):
    @routes.get(path)
    async def wrap(request):
      ws = web.WebSocketResponse(compress=False)
      await ws.prepare(request)
      await fn(ws, request)
      return ws
  return decorator

class Channel:
  def __init__(self, id_):
    self.id = id_
    self.game = None
    self.user = None
  def print(self, *a):
    print('channel %s:' % self.id, *a)

channels = dict()

def with_channel(fn):
  async def wrap(ws, request):
    channel_id = request.query.get('channel_id', None)
    if channel_id != None:
      channel = channels.get(channel_id, None)
      if channel == None:
        channel = channels[channel_id] = Channel(channel_id)
      await fn(ws, channel)
    else:
      await ws.send_str('channel_id missing')
      await ws.close()
  return wrap

@route_ws('/game')
@with_channel
async def ws_game(ws, channel):
  if channel.game != None:
    channel.print('game reconnected')
    await channel.game.close()
  channel.print('game connected')
  channel.game = ws
  if channel.user != None:
    await channel.game.send_str('+')
  async for msg in ws:
    if msg.type == aiohttp.WSMsgType.BINARY:
      if channel.user != None:
        await channel.user.send_bytes(msg.data)
    else:
      break
  channel.print('game disconnected')
  channel.game = None

@route_ws('/user')
@with_channel
async def ws_user(ws, channel):
  if channel.user != None:
    channel.print('user reconnected')
    await channel.user.close()
  else:
    channel.print('user connected')
  channel.user = ws
  if channel.game != None:
    await channel.game.send_str('+')
  async for msg in ws:
    if msg.type == aiohttp.WSMsgType.TEXT:
      if channel.game != None:
        await channel.game.send_str(msg.data)
    else:
      break
  channel.print('user disconnected')
  channel.user = None
  if channel.game != None:
    await channel.game.send_str('0')
    await channel.game.send_str('-')

@routes.get('/')
async def root(_):
  return web.FileResponse('haxball/static/index.html')

routes.static('/', 'haxball/static')

app = web.Application()
app.add_routes(routes)

if __name__ == '__main__':
  web.run_app(app, port=8080)
import aiohttp
from aiohttp import web

import async_common

routes = web.RouteTableDef()

def route_ws(path):
  def decorator(fn):
    @routes.get(path)
    async def wrap(request):
      ws = web.WebSocketResponse(compress=False)
      await ws.prepare(request)
      await fn(ws)
      return ws
  return decorator

game = None
user = None

@route_ws('/game')
async def ws_game(ws):
  global game
  if game != None:
    print('game reconnected')
    await game.close()
  print('game connected')
  game = ws
  if user != None:
    await game.send_str('+')
  async for msg in ws:
    if msg.type == aiohttp.WSMsgType.BINARY:
      if user != None:
        await user.send_bytes(msg.data)
    else:
      break
  print('game disconnected')
  game = None

@route_ws('/user')
async def ws_user(ws):
  global user
  if user != None:
    print('user reconnected')
    await user.close()
  else:
    print('user connected')
  user = ws
  if game != None:
    await game.send_str('+')
  async for msg in ws:
    if msg.type == aiohttp.WSMsgType.TEXT:
      if game != None:
        await game.send_str(msg.data)
    else:
      break
  print('user disconnected')
  user = None
  if game != None:
    await game.send_str('0')
    await game.send_str('-')

@routes.get('/')
async def root(_):
  return web.FileResponse('static/index.html')

routes.static('/', 'static')

app = web.Application()
app.add_routes(routes)

if __name__ == '__main__':
  web.run_app(app, port=8080)

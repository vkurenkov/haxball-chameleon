
let ws = null;
interactiveReconnect();
window.addEventListener('hashchange', interactiveReconnect);

const Input = {
  Up: 1,
  Down: 2,
  Left: 4,
  Right: 8,
  Kick: 16,
};

let interactiveBotInput = 0;

function interactiveGetInput() {
  const user = exposed.Qa.instance.Yd;
  const bot = interactiveBotInput;
  const ignore = (user & Input.Up ? Input.Down : 0)
    | (user & Input.Down ? Input.Up : 0)
    | (user & Input.Left ? Input.Right : 0)
    | (user & Input.Right ? Input.Left : 0);
  return user | (bot & ~ignore);
}

function interactiveReconnect() {
  if (!location.hash) {
    return;
  }
  const channel_id = location.hash.slice(1);
  ws = new WebSocket(`ws://${location.host}/game?channel_id=${channel_id}`);
  ws.binaryType = 'arraybuffer';
  ws.onmessage = (e) => {
    const msg = e.data;
    switch (msg) {
      case '-':
        exposed.$_BaseNetGameController.TICK = null;
        break;
      case '+':
        exposed.$_BaseNetGameController.TICK = interactiveTick;
        break;
      default:
        interactiveBotInput = +msg;
    }
  };
}

function interactiveTick(controller) {
  if (ws.readyState !== ws.OPEN) {
    return;
  }
  const writer = new Writer();
  writer.writeUint8(controller.uc);
  writer.writePython(controller);
  writer.compact();
  ws.send(writer.view.buffer);
}


exposed.Qa.prototype.qk = exposed.Qa.prototype.nd = exposed.Qa.prototype.od = () => null;

let ws = null;
interactiveReconnect();

function interactiveReconnect() {
  ws = new WebSocket(`ws://${location.host}/game`);
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
        exposed.Qa.instance.Id = +msg;
    }
  };
}

function interactiveTick(controller) {
  if (ws.readyState !== ws.OPEN) {
    return;
  }
  const writer = new Writer();
  writer.writeUint8(controller.nc);
  writer.writePython(controller);
  writer.compact();
  ws.send(writer.view.buffer);
}

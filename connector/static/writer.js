
// haxball build FFuuq69i

class Writer {
  constructor() {
    this.pos = 0;
    this.view = new DataView(new ArrayBuffer());
  }

  resize(size) {
    if (size !== undefined || this.view.byteLength < this.pos) {
      if (size === undefined) {
        size = Math.max(this.pos, 2 * this.view.byteLength);
      }
      const buffer = new ArrayBuffer(size);
      (new Uint8Array(buffer)).set(new Uint8Array(this.view.buffer.slice(0, size)));
      this.view = new DataView(buffer);
    }
  }
  compact() {
    this.resize(this.pos);
  }
  writeUint8(value) {
    const pos = this.pos;
    this.pos += 1;
    this.resize();
    this.view.setUint8(pos, value);
  }
  writeFloat64(value) {
    const pos = this.pos;
    this.pos += 8;
    this.resize();
    this.view.setFloat64(pos, value, false)
  }
  writeBool(value) {
    this.writeUint8(value ? 1 : 0);
  }
  writeDisc(disc) {
    this.writeFloat64(disc.a.x);
    this.writeFloat64(disc.a.y);
    this.writeFloat64(disc.M.x);
    this.writeFloat64(disc.M.y);
  }

  writePython(controller) {
    const L = controller.L;
    this.writeFloat64(controller.S * controller.vc); // replay time
    if (!L.H) {
      this.writeUint8(0); // 0: menu
    } else {
      this.writeUint8(L.H.Ga > 0 ? 1 : L.H.zb == 0 ? 2 : L.H.zb == 1 ? 3 : 4); // 1: pause, 2: warmup, 3: game, 4: goal
      this.writeFloat64(L.H.Ac); // game time
      this.writeUint8(L.H.Kb); // red score
      this.writeUint8(L.H.Cb); // blue score
      this.writeBool(L.H.xa > 0 && L.H.Ac > L.H.xa); // overtime
      const players = L.D.filter(x => x.$.P !== 0);
      this.writeUint8(players.length); // player count
      for (const player of players) {
        this.writeUint8(player.T); // id
        this.writeUint8(player.mb); // input
        this.writeBool(player.bc); // kick
        this.writeUint8(player.$.P - 1); // team, 0: red, 1: blue
        this.writeDisc(player.F); // player disc
      }
      this.writeDisc(L.H.wa.K[0]); // ball disc
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports.Writer = Writer;
}


if (self.document) {
  window.timer = new class {
    constructor() {
      this._map = {};
      this._worker = new Worker(document.currentScript.src);
      this._worker.onmessage = () => {
        for (const [id, fn] of Object.entries(this._map)) {
          fn();
          this.cancelAnimationFrame(id);
        }
      };
    }
    requestAnimationFrame(fn) {
      const id = window.requestAnimationFrame(() => {
        if (id in this._map) {
          fn();
          this.cancelAnimationFrame(id);
        }
      });
      this._map[id] = fn;
      return id;
    }
    cancelAnimationFrame(id) {
      delete this._map[id];
      window.cancelAnimationFrame(id);
    }
  };
} else {
  const FPS = 16;
  self.setInterval(() => {
    self.postMessage(null);
  }, 1000 / FPS);
}

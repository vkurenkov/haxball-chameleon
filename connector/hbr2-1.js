
function closure() {
  const pako = {
    inflateRaw: require('zlib').inflateRawSync,
  };

  function C() {
    this.bf = 0;
    this.G = 32;
    this.h = -1;
    this.l = 1;
    this.a = new O(0, 0)
  }
  function D() {
    this.aa = this.Y = null;
    this.l = 1;
    this.h = -1;
    this.G = 32;
    this.Nc = 1 / 0;
    this.Xa = !0;
    this.ea = 0
  }
  function I() {
    this.G = 32;
    this.h = -1;
    this.l = 1;
    this.Ka = 0;
    this.Aa = new O(0, 0)
  }
  function Aa() {
    this.Hb = -1;
    this.Gb = null;
    this.K = []
  }
  function X() {
    this.Hb = -1;
    this.Gb = null;
    this.Aj = 0;
    this.h = this.G = -1;
    this.oi = 0;
    this.ea = 16777215;
    this.Ea = .99;
    this.qa = 1;
    this.l = .5;
    this.ga = 10;
    this.M = new O(0, 0);
    this.a = new O(0, 0)
  }
  function ia() {
    this.ha = 0
  }
  function Ja() {
    this.ha = 0
  }
  function Ka() {
    this.ha =
      0
  }
  function Y() {
    this.Qf = !1;
    this.ha = 0
  }
  function Zb() {}
  function Ba() {
    this.ha = 0
  }
  function La() {
    this.ha = 0
  }
  function Ma() {
    this.ha = 0
  }
  function ja() {
    this.ha = 0
  }
  function ka() {
    this.ha = 0
  }
  function Na() {
    this.ha = 0
  }
  function la() {
    this.ha = 0
  }
  function P() {
    this.ha = 0
  }
  function ma() {
    this.ha = 0
  }
  function na() {
    this.ha = 0
  }
  function Z() {
    this.ha = 0
  }
  function Ca() {
    this.ha = 0
  }
  function oa() {
    this.ha = 0
  }
  function ca() {
    this.$b = -1;
    this.al = null;
    this.W = q.ya;
    this.D = null;
    this.Kb = !1;
    this.bb = this.S = 0;
    this.o = "Player";
    this.Uf = this.Fb = 0;
    this.ed = null;
    this.fd = !1;
    this.Ya = null;
    this.sb = 0;
    this.oa = !1
  }
  function da() {
    this.Hb = -1;
    this.U = this.Gb = null;
    this.Va = this.sa = 3;
    this.mc = !1;
    this.A = null;
    this.F = [];
    this.Ib = "";
    this.U = n.Gg()[0];
    this.Wa = [null, new ha, new ha];
    this.Wa[1].Ua.push(q.$.ea);
    this.Wa[2].Ua.push(q.la.ea)
  }
  function q(a, b, c, d, e, f, g, k) {
    this.wf = null;
    this.ka = a;
    this.ea = b;
    this.zg = c;
    this.Lm = d;
    this.o = e;
    this.bm = f;
    this.G = k;
    this.xk = new ha;
    this.xk.Ua.push(b)
  }
  function ha() {
    this.Bc = 16777215;
    this.Ua = []
  }
  function n() {
    this.C = [];
    this.O = [];
    this.fa = [];
    this.bc = [];
    this.K = [];
    this.le =
      new xb;
    this.Oe = this.jj();
    this.yg = 255;
    this.pf = 0
  }
  function xb() {
    this.qa = this.l = .5;
    this.Ea = .96;
    this.Le = .1;
    this.ff = .07;
    this.gf = .96;
    this.Zd = 5
  }
  function lb() {
    this.xe = q.ya;
    this.aa = new O(0, 0);
    this.Y = new O(0, 0)
  }
  function pa() {
    this.Hb = -1;
    this.Gb = null;
    this.yb = this.tb = this.fc = this.Fa = 0;
    this.Sc = new O(0, 0);
    this.pd = q.$;
    this.Nb = this.Xb = this.ob = 0;
    this.ra = new Aa;
    this.sa = 0;
    this.Va = 5;
    this.U = null
  }
  function Da() {
    this.h = this.G = -1;
    this.ea = 16777215;
    this.Ea = .99;
    this.qa = 1;
    this.l = .5;
    this.ga = 10;
    this.M = new O(0, 0);
    this.a = new O(0, 0)
  }
  function bc() {}
  function ub() {}
  function Ia() {}
  function O(a, b) {
    this.x = a;
    this.y = b
  }
  function Db(a, b, c) {
    this.Gj = 5;
    this.ad = -1;
    this.rf = this.zb = this.Og = this.Ri = 0;
    U.call(this, b);
    a = new G(new DataView(a.buffer), !1);
    if (1212305970 != a.Sa()) throw new u("");
    b = a.Sa();
    if (c != b) throw new u(new Eb(b));
    this.Cf = a.Sa();
    c = pako.inflateRaw(a.Ac());
    this.xd = new G(new DataView(c.buffer, c.byteOffset, c.byteLength));
    this.jh();
    this.Og = 0; // EDIT
    this.gc = -1
  }
  function U(a) {
    this.Dh = new Ga;
    this.Gd = this.Cb = 0;
    this.zd = new Ga;
    this.gc = this.tc = 0;
    this.pc = .06;
    this.kg = 16.666666666666668;
    this.Je = 120;
    rb.call(this, a)
  }
  function Sa() {
    this.ha =
      0
  }
  function rb(a) {
    this.P = 0;
    this.B = a
  }
  function Ga() {
    this.list = []
  }
  function l() {
    this.ha = 0
  }
  function G(a, b) {
    null == b && (b = !1);
    this.m = a;
    this.La = b;
    this.a = 0
  }
  function ra() {}
  function H() {}
  function E(a, b) {
    function c() {}
    c.prototype = a;
    var d = new c,
      e;
    for (e in b) d[e] = b[e];
    b.toString !== Object.prototype.toString && (d.toString = b.toString);
    return d
  }
  H.remove = function (a, b) {
    var c = a.indexOf(b);
    if (-1 == c) return !1;
    a.splice(c, 1);
    return !0
  };
  ra.dd = function (a, b) {
    return a.length <= b ? a : H.substr(a, 0, b)
  };
  G.cm = function (a, b) {
    var c = a.getUint8(b),
      d, e, f, g, k, h = b;
    if (0 == (c & 128)) ++b;
    else if (192 == (c & 224)) d = a.getUint8(b + 1), c = (c & 31) << 6 | d & 63, b += 2;
    else if (224 == (c & 240)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), c = (c & 15) << 12 | (d & 63) << 6 | e & 63, b += 3;
    else if (240 == (c & 248)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b + 3), c = (c & 7) << 18 | (d & 63) << 12 | (e &
      63) << 6 | f & 63, b += 4;
    else if (248 == (c & 252)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b + 3), g = a.getUint8(b + 4), c = (c & 3) << 24 | (d & 63) << 18 | (e & 63) << 12 | (f & 63) << 6 | g & 63, b += 5;
    else if (252 == (c & 254)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b + 3), g = a.getUint8(b + 4), k = a.getUint8(b + 5), c = (c & 1) << 30 | (d & 63) << 24 | (e & 63) << 18 | (f & 63) << 12 | (g & 63) << 6 | k & 63, b += 6;
    else throw new u("Cannot decode UTF8 character at offset " + b + ": charCode (" + c + ") is invalid");
    return {
      "char": c,
      length: b - h
    }
  };
  G.prototype = {
    Ac: function (a) {
      null == a && (a =
        this.m.byteLength - this.a);
      if (this.a + a > this.m.byteLength) throw new u("Read too much");
      var b = new Uint8Array(this.m.buffer, this.m.byteOffset + this.a, a);
      this.a += a;
      return b
    },
    dh: function (a) {
      var b = this.Ac(a);
      a = new ArrayBuffer(a);
      (new Uint8Array(a)).set(b);
      return a
    },
    ne: function () {
      return this.m.getInt8(this.a++)
    },
    I: function () {
      return this.m.getUint8(this.a++)
    },
    $n: function () {
      var a = this.m.getInt16(this.a, this.La);
      this.a += 2;
      return a
    },
    wb: function () {
      var a = this.m.getUint16(this.a, this.La);
      this.a += 2;
      return a
    },
    R: function () {
      var a =
        this.m.getInt32(this.a, this.La);
      this.a += 4;
      return a
    },
    Sa: function () {
      var a = this.m.getUint32(this.a, this.La);
      this.a += 4;
      return a
    },
    Af: function () {
      var a = this.m.getFloat32(this.a, this.La);
      this.a += 4;
      return a
    },
    u: function () {
      var a = this.m.getFloat64(this.a, this.La);
      this.a += 8;
      return a
    },
    Wb: function () {
      for (var a = this.a, b = 0, c, d = 0; c = this.m.getUint8(a + b), 5 > b && (d |= (c & 127) << 7 * b >>> 0), ++b, 0 != (c & 128););
      this.a += b;
      return d | 0
    },
    Yc: function (a) {
      var b = this.a,
        c, d = "";
      for (a = b + a; b < a;) c = G.cm(this.m, b), b += c.length, d += String.fromCharCode(c["char"]);
      if (b != a) throw new u("Actual string length differs from the specified: " + (b - a) + " bytes");
      this.a = b;
      return d
    },
    xb: function () {
      var a = this.Wb();
      return 0 >= a ? null : this.Yc(a - 1)
    },
    Zc: function () {
      return this.Yc(this.Wb())
    },
    Rj: function () {
      return this.Yc(this.I())
    },
    Bf: function () {
      var a = this.Zc();
      return JSON.parse(a)
    },
    f: G
  };
  l.Oa = function (a) {
    null == a.Ia && (a.Ia = !0);
    null == a.Ja && (a.Ja = !0);
    return a
  };
  l.Pa = function (a) {
    a.nl = l.ze;
    if (null == a.Ha) throw new u("Class doesn't have a config");
    a.prototype.Ce = a.Ha;
    l.Sk[l.ze] = a;
    l.ze++
  };
  l.ai = function (a) {
    var b = a.I(),
      b = Object.create(l.Sk[b].prototype);
    b.ha = 0;
    b.Za = 0;
    b.Ca(a);
    return b
  };
  Db.prototype = E(U.prototype, {
    Qj: function () {
      var a = this.xd;
      0 < a.m.byteLength - a.a ? (a = this.xd.Wb(), this.rf += a, a = this.xd.wb(), this.qf = l.ai(this.xd), this.qf.pa =
        a) : this.qf = null
    },
    tm: function () {
      return this.P / this.Cf
    },
    ia: function () {},
    Xe: function () {
      this.s();
      ta.$b++;
      var a = this.B.Sb();
      a.s(this.Ri);
      return a
    },
    s: function () {
      var a = 0, // EDIT
        b = a - this.Og;
      this.Og = a;
      0 < this.ad ? (this.zb += 1E4, this.zb > this.ad && (this.zb = this.ad, this.ad = -1)) : this.zb += b * this.Gj;
      a = this.Cf * this.kg;
      this.zb > a && (this.zb = a);
      b = this.zb * this.pc;
      a = b | 0;
      for (this.Ri = b - a; this.P < a;) {
        for (; null != this.qf && this.rf == this.P;) b = this.qf, b.apply(this.B), null != this.hc && this.hc(b), this.Qj();
        this.P++;
        this.B.s(1)
        this.onTick && this.onTick();
      }
    },
    zo: function (a) {
      this.ad = a;
      a < this.zb && this.jh()
    },
    jh: function () {
      this.rf = 0;
      this.zb = this.P = this.xd.a = 0;
      this.B.ba(this.xd);
      this.Qj()
    },
    f: Db
  });
  Ia.i = function (a, b, c) {
    null != a && a(b, c)
  };
  ub.i = function (a, b, c, d) {
    null != a && a(b, c, d)
  };
  bc.i = function (a, b, c, d, e) {
    null != a && a(b, c, d, e)
  };
  Da.prototype = {
    X: function (a) {
      var b = this.a;
      a.v(b.x);
      a.v(b.y);
      b = this.M;
      a.v(b.x);
      a.v(b.y);
      a.v(this.ga);
      a.v(this.l);
      a.v(this.qa);
      a.v(this.Ea);
      a.ib(this.ea);
      a.V(this.h);
      a.V(this.G)
    },
    ba: function (a) {
      var b = this.a;
      b.x = a.u();
      b.y = a.u();
      b = this.M;
      b.x = a.u();
      b.y = a.u();
      this.ga = a.u();
      this.l = a.u();
      this.qa = a.u();
      this.Ea = a.u();
      this.ea = a.Sa();
      this.h = a.R();
      this.G = a.R()
    },
    Xm: function () {
      var a = new X;
      this.Zi(a);
      return a
    },
    Zi: function (a) {
      var b = a.a,
        c = this.a;
      b.x = c.x;
      b.y = c.y;
      b =
        a.M;
      c = this.M;
      b.x = c.x;
      b.y = c.y;
      a.ga = this.ga;
      a.l = this.l;
      a.qa = this.qa;
      a.Ea = this.Ea;
      a.ea = this.ea;
      a.h = this.h;
      a.G = this.G
    },
    f: Da
  };
  pa.prototype = {
    Fm: function (a) {
      this.nb = a;
      this.Wm();
      this.Va = a.Va;
      this.sa = a.sa;
      this.U = a.U;
      this.ra.C = this.U.C;
      this.ra.fa = this.U.fa;
      this.ra.O = this.U.O;
      a = 0;
      for (var b = this.U.K; a <
        b.length;) this.ra.K.push(b[a++].Xm());
      this.cj()
    },
    Wm: function () {
      var a = new X;
      this.Nb = this.ra.K.length;
      this.ra.K.push(a)
    },
    $i: function (a) {
      if (a.W == q.ya) a.D = null;
      else {
        a.bb = 0;
        var b = a.D;
        null == b && (b = new X, a.D = b, this.ra.K.push(b));
        var c = this.U.le;
        b.ea = 0;
        b.ga = 15;
        b.qa = c.qa;
        b.Ea = c.Ea;
        b.l = c.l;
        b.h = 39;
        b.G = a.W.G;
        b.a.x = a.W.zg * this.U.Pb;
        b.a.y = 0;
        a = b.M;
        a.x = 0;
        a.y = 0
      }
    },
    s: function (a) {
      if (0 < this.Fa) 120 > this.Fa && this.Fa--;
      else {
        for (var b = this.nb.F, c = this.ra.K[this.Nb], d = 0; d < b.length;) {
          var e = b[d];
          ++d;
          if (null != e.D) {
            var f = c.a,
              g =
              e.D.a,
              k = f.x - g.x,
              g = f.y - g.y,
              h = Math.sqrt(k * k + g * g) - c.ga - e.D.ga;
            0 == (e.bb & 16) && (e.Kb = !1);
            f = this.U.le;
            if (e.Kb && 4 > h) {
              if (0 != f.Zd) {
                var h = Math.sqrt(k * k + g * g),
                  m = f.Zd,
                  l = c.M,
                  n = c.M,
                  p = c.qa;
                l.x = n.x + k / h * m * p;
                l.y = n.y + g / h * m * p;
                null != this.nb.$g && this.nb.$g()
              }
              e.Kb = !1
            }
            h = e.bb;
            g = k = 0;
            0 != (h & 1) && --g;
            0 != (h & 2) && ++g;
            0 != (h & 4) && --k;
            0 != (h & 8) && ++k;
            0 != k && 0 != g && (h = Math.sqrt(k * k + g * g), k /= h, g /= h);
            h = e.D.M;
            m = e.Kb ? f.ff : f.Le;
            h.x += k * m;
            h.y += g * m;
            e.D.Ea = e.Kb ? f.gf : f.Ea
          }
        }
        this.ra.s(a);
        if (0 == this.ob) {
          for (a = 0; a < b.length;) d = b[a], ++a, null != d.D && (d.D.h = 39 |
            this.pd.Lm);
          b = c.M;
          0 < b.x * b.x + b.y * b.y && (this.ob = 1, b = this.Sc, c = c.a, b.x = c.x, b.y = c.y)
        } else if (1 == this.ob) {
          this.fc += .016666666666666666;
          for (a = 0; a < b.length;) d = b[a], ++a, null != d.D && (d.D.h = 39);
          b = this.U.Hl(c.a, this.Sc);
          b != q.ya ? (this.ob = 2, this.Xb = 150, this.pd = b, b == q.$ ? this.tb++ : this.yb++, null != this.nb.yh && this.nb.yh(b.wf)) : 0 < this.sa && this.fc >= 60 * this.sa && this.yb != this.tb && (null != this.nb.Ah && this.nb.Ah(), this.vk());
          b = this.Sc;
          c = c.a;
          b.x = c.x;
          b.y = c.y
        } else if (2 == this.ob) this.Xb--, 0 >= this.Xb && (0 < this.Va && (this.yb >= this.Va ||
          this.tb >= this.Va) || 0 < this.sa && this.fc >= 60 * this.sa && this.yb != this.tb ? this.vk() : this.cj());
        else if (3 == this.ob && (this.Xb--, 0 >= this.Xb && (c = this.nb, null != c.A))) {
          c.A = null;
          b = 0;
          for (a = c.F; b < a.length;) d = a[b], ++b, d.D = null, d.sb = 0;
          null != c.we && c.we(null)
        }
      }
    },
    vk: function () {
      this.Xb = 300;
      this.ob = 3;
      null != this.nb.zh && this.nb.zh(this.yb > this.tb ? q.$ : q.la)
    },
    cj: function () {
      var a = this.nb.F;
      this.ob = 0;
      this.U.Oe.Zi(this.ra.K[this.Nb]);
      for (var b = [0, 0, 0], c = 0; c < a.length;) {
        var d = a[c];
        ++c;
        this.$i(d);
        var e = d.W;
        if (e != q.ya) {
          var f = d.D.a,
            g = b[e.ka],
            k = g + 1 >> 1;
          0 == (g & 1) && (k = -k);
          f.x = this.U.Yb * e.zg;
          f.y = 55 * k;
          b[e.ka]++;
          d.sb = b[e.ka]
        }
      }
    },
    X: function (a) {
      this.ra.X(a);
      a.V(this.Nb);
      a.V(this.Xb);
      a.V(this.ob);
      var b = this.Sc;
      a.v(b.x);
      a.v(b.y);
      a.V(this.yb);
      a.V(this.tb);
      a.v(this.fc);
      a.V(this.Fa);
      a.w(this.pd.ka)
    },
    ba: function (a, b) {
      this.ra.ba(a);
      this.Nb = a.R();
      this.Xb = a.R();
      this.ob = a.R();
      var c = this.Sc;
      c.x = a.u();
      c.y = a.u();
      this.yb = a.R();
      this.tb = a.R();
      this.fc = a.u();
      this.Fa = a.R();
      c = a.ne();
      this.pd = 1 == c ? q.$ : 2 == c ? q.la : q.ya;
      this.nb = b;
      this.Va = b.Va;
      this.sa = b.sa;
      this.U =
        b.U;
      this.ra.C = this.U.C;
      this.ra.O = this.U.O;
      this.ra.fa = this.U.fa
    },
    Sb: function () {
      var a = ta.$b,
        b = this.Gb;
      this.Hb != a && (null == b && (this.Gb = b = new pa), this.Hb = a, pa.Mc(b, this));
      return b
    },
    f: pa
  };
  n.ba = function (a) {
    var b = a.I();
    return 255 == b ? (b = new n, b.$o(a), b) : n.Gg()[b]
  };
  n.Gg = function () {
    if (null == n.mb) {
      n.mb = [];
      var a = new n;
      a.xc("Classic", 420, 200, 370, 170, 64, 75);
      n.mb.push(a);
      a = new n;
      a.xc("Easy", 420, 200, 370, 170, 90, 75);
      n.mb.push(a);
      a = new n;
      a.xc("Small", 420, 200, 320, 130, 55, 70);
      n.mb.push(a);
      a = new n;
      a.xc("Big", 600, 270, 550, 240, 80, 80);
      n.mb.push(a);
      a = new n;
      a.xc("Rounded", 420, 200, 370, 170, 64, 75, 75);
      n.mb.push(a);
      a = new n;
      a.kj("Hockey", 420, 204, 398, 182, 68, 120, 75, 100);
      n.mb.push(a);
      a = new n;
      a.kj("Big Hockey", 600, 270, 550, 240, 90, 160, 75, 150);
      n.mb.push(a);
      a = new n;
      a.xc("Big Easy", 600, 270, 550, 240, 95, 80);
      n.mb.push(a);
      a = new n;
      a.xc("Big Rounded", 600, 270, 550, 240, 80, 75, 100);
      n.mb.push(a);
      a = new n;
      a.xc("Huge", 750, 350, 700, 320, 100, 80);
      n.mb.push(a);
      for (var a = 0, b = n.mb.length; a < b;) {
        var c = a++;
        n.mb[c].yg = c
      }
    }
    return n.mb
  };
  n.prototype = {
    jj: function () {
      var a = new Da;
      a.ea = 16777215;
      a.h = -1;
      a.G = 1;
      a.ga = 10;
      a.Ea = .99;
      a.qa = 1;
      a.l = .5;
      return a
    },
    X: function (a) {
      a.w(this.yg);
      if (!this.cf()) {
        a.Ab(this.o);
        a.V(this.ld);
        a.v(this.Sd);
        a.v(this.Rd);
        a.v(this.kd);
        a.v(this.Jc);
        a.v(this.Qe);
        a.V(this.Qd);
        a.v(this.Pb);
        a.v(this.ac);
        a.v(this.Yb);
        this.le.X(a);
        this.Oe.X(a);
        a.Dc(this.pf);
        a.w(this.C.length);
        for (var b =
            0, c = this.C.length; b < c;) {
          var d = b++,
            e = this.C[d];
          e.bf = d;
          e.X(a)
        }
        a.w(this.O.length);
        b = 0;
        for (c = this.O; b < c.length;) c[b++].X(a);
        a.w(this.fa.length);
        b = 0;
        for (c = this.fa; b < c.length;) c[b++].X(a);
        a.w(this.bc.length);
        b = 0;
        for (c = this.bc; b < c.length;) c[b++].X(a);
        a.w(this.K.length);
        b = 0;
        for (c = this.K; b < c.length;) c[b++].X(a)
      }
    },
    $o: function (a) {
      this.o = a.xb();
      this.ld = a.R();
      this.Sd = a.u();
      this.Rd = a.u();
      this.kd = a.u();
      this.Jc = a.u();
      this.Qe = a.u();
      this.Qd = a.R();
      this.Pb = a.u();
      this.ac = a.u();
      this.Yb = a.u();
      this.le.ba(a);
      this.Oe.ba(a);
      this.pf = a.wb();
      this.C = [];
      for (var b = a.I(), c = 0; c < b;) {
        var d = new C;
        d.ba(a);
        d.bf = c++;
        this.C.push(d)
      }
      this.O = [];
      b = a.I();
      for (c = 0; c < b;) ++c, d = new D, d.ba(a, this.C), this.O.push(d);
      this.fa = [];
      b = a.I();
      for (c = 0; c < b;) ++c, d = new I, d.ba(a), this.fa.push(d);
      this.bc = [];
      b = a.I();
      for (c = 0; c < b;) ++c, d = new lb, d.ba(a), this.bc.push(d);
      this.K = [];
      b = a.I();
      for (c = 0; c < b;) ++c, d = new Da, d.ba(a), this.K.push(d)
    },
    cf: function () {
      return 255 != this.yg
    },
    qd: function (a, b, c) {
      a = a[b];
      return null != a ? r.L(a, F) : c
    },
    Pm: function (a) {
      a = JSON5.parse(a);
      this.C = [];
      this.O = [];
      this.fa = [];
      this.bc = [];
      this.K = [];
      this.o = r.L(a.name, String);
      this.Pb = r.L(a.width, F);
      this.ac = r.L(a.height, F);
      this.pf = this.qd(a, "maxViewWidth", 0) | 0;
      this.Yb = 200;
      var b = a.spawnDistance;
      null != b && (this.Yb = r.L(b, F));
      var b = a.bg,
        c;
      switch (b.type) {
        case "grass":
          c = 1;
          break;
        case "hockey":
          c = 2;
          break;
        default:
          c = 0
      }
      this.ld = c;
      this.Sd = this.qd(b, "width", 0);
      this.Rd = this.qd(b, "height", 0);
      this.kd = this.qd(b, "kickOffRadius", 0);
      this.Jc = this.qd(b, "cornerRadius", 0);
      this.Qd = 7441498;
      this.Qe = this.qd(b, "goalLine", 0);
      b = a.traits;
      c = r.L(a.vertexes, Array);
      if (null != c)
        for (var d = 0; d < c.length;) {
          var e = c[d];
          ++d;
          n.Pd(e, b);
          this.C.push(n.Um(e))
        }
      c = r.L(a.segments, Array);
      if (null != c)
        for (d = 0; d < c.length;) e = c[d], ++d, n.Pd(e, b), this.O.push(n.Tm(e, this.C));
      c = r.L(a.goals, Array);
      if (null != c)
        for (d = 0; d < c.length;) e = c[d], ++d, n.Pd(e, b), this.bc.push(n.Qm(e));
      c = r.L(a.discs, Array);
      if (null != c)
        for (d = 0; d < c.length;) e = c[d], ++d, n.Pd(e, b), this.K.push(n.gj(e, new Da));
      c = r.L(a.planes, Array);
      if (null != c)
        for (d = 0; d < c.length;) e = c[d], ++d, n.Pd(e, b), this.fa.push(n.Rm(e));
      b = a.playerPhysics;
      null != b && (this.le = n.Sm(b));
      a = a.ballPhysics;
      null != a && (this.Oe = n.gj(a, this.jj()));
      if (255 < this.C.length || 255 < this.O.length || 255 < this.fa.length || 255 < this.bc.length || 255 < this.K.length) throw new u("Error");
    },
    ti: function () {
      var a = n.Wo;
      a.a = 0;
      this.X(a);
      var b = new Xb;
      b.lp(a.oc());
      b.hash = (b.hash += b.hash << 3) ^ b.hash >>> 11;
      b.hash += b.hash << 15;
      return b.hash | 0
    },
    Hl: function (a, b) {
      for (var c = 0, d = this.bc; c < d.length;) {
        var e = d[c];
        ++c;
        var f = e.Y,
          g = e.aa,
          k = b.x - a.x,
          h = b.y - a.y;
        0 < -(f.y - a.y) * k + (f.x - a.x) * h == 0 < -(g.y -
          a.y) * k + (g.x - a.x) * h ? f = !1 : (k = g.x - f.x, g = g.y - f.y, f = 0 < -(a.y - f.y) * k + (a.x - f.x) * g == 0 < -(b.y - f.y) * k + (b.x - f.x) * g ? !1 : !0);
        if (f) return e.xe
      }
      return q.ya
    },
    xc: function (a, b, c, d, e, f, g, k) {
      null == k && (k = 0);
      this.o = a;
      this.Pb = b;
      this.ac = c;
      this.ld = 1;
      this.Qd = 7441498;
      this.Sd = d;
      this.Rd = e;
      this.kd = g;
      this.Jc = k;
      this.Yb = .75 * d;
      400 < this.Yb && (this.Yb = 400);
      a = new I;
      var h = a.Aa;
      h.x = 0;
      h.y = 1;
      a.Ka = -c;
      a.l = 0;
      this.fa.push(a);
      a = new I;
      h = a.Aa;
      h.x = 0;
      h.y = -1;
      a.Ka = -c;
      a.l = 0;
      this.fa.push(a);
      a = new I;
      h = a.Aa;
      h.x = 1;
      h.y = 0;
      a.Ka = -b;
      a.l = 0;
      this.fa.push(a);
      a = new I;
      h = a.Aa;
      h.x = -1;
      h.y = 0;
      a.Ka = -b;
      a.l = 0;
      this.fa.push(a);
      this.mf(d, 1, f, 13421823, q.la);
      this.mf(-d, -1, f, 16764108, q.$);
      this.lj(g, c);
      b = new I;
      c = b.Aa;
      c.x = 0;
      c.y = 1;
      b.Ka = -e;
      b.h = 1;
      this.fa.push(b);
      b = new I;
      c = b.Aa;
      c.x = 0;
      c.y = -1;
      b.Ka = -e;
      b.h = 1;
      this.fa.push(b);
      b = new C;
      c = b.a;
      c.x = -d;
      c.y = -e;
      b.h = 0;
      c = new C;
      g = c.a;
      g.x = d;
      g.y = -e;
      c.h = 0;
      g = new C;
      a = g.a;
      a.x = d;
      a.y = -f;
      g.h = 0;
      a = new C;
      h = a.a;
      h.x = d;
      h.y = f;
      a.h = 0;
      var h = new C,
        m = h.a;
      m.x = d;
      m.y = e;
      h.h = 0;
      var m = new C,
        l = m.a;
      l.x = -d;
      l.y = e;
      m.h = 0;
      var l = new C,
        n = l.a;
      n.x = -d;
      n.y = f;
      l.h = 0;
      var n = new C,
        p = n.a;
      p.x = -d;
      p.y = -f;
      n.h = 0;
      f = new D;
      f.Y = c;
      f.aa = g;
      f.h = 1;
      f.Xa = !1;
      p = new D;
      p.Y = a;
      p.aa = h;
      p.h = 1;
      p.Xa = !1;
      var r = new D;
      r.Y = m;
      r.aa = l;
      r.h = 1;
      r.Xa = !1;
      var t = new D;
      t.Y = n;
      t.aa = b;
      t.h = 1;
      t.Xa = !1;
      this.C.push(b);
      this.C.push(c);
      this.C.push(g);
      this.C.push(a);
      this.C.push(h);
      this.C.push(m);
      this.C.push(l);
      this.C.push(n);
      this.O.push(f);
      this.O.push(p);
      this.O.push(r);
      this.O.push(t);
      this.ij(d, e, k)
    },
    kj: function (a, b, c, d, e, f, g, k, h) {
      this.o = a;
      this.Pb = b;
      this.ac = c;
      this.ld = 2;
      this.Sd = d;
      this.Rd = e;
      this.kd = k;
      this.Jc = h;
      this.Qe = g;
      this.Yb = .75 * (d - g);
      400 <
        this.Yb && (this.Yb = 400);
      a = new I;
      var m = a.Aa;
      m.x = 0;
      m.y = 1;
      a.Ka = -c;
      a.l = 0;
      this.fa.push(a);
      a = new I;
      m = a.Aa;
      m.x = 0;
      m.y = -1;
      a.Ka = -c;
      a.l = 0;
      this.fa.push(a);
      a = new I;
      m = a.Aa;
      m.x = 1;
      m.y = 0;
      a.Ka = -b;
      a.l = 0;
      this.fa.push(a);
      a = new I;
      m = a.Aa;
      m.x = -1;
      m.y = 0;
      a.Ka = -b;
      a.l = 0;
      this.fa.push(a);
      this.mf(d - g, 1, f, 13421823, q.la, -1);
      this.mf(-d + g, -1, f, 16764108, q.$, -1);
      this.lj(k, c);
      b = new I;
      c = b.Aa;
      c.x = 0;
      c.y = 1;
      b.Ka = -e;
      b.h = 1;
      this.fa.push(b);
      b = new I;
      c = b.Aa;
      c.x = 0;
      c.y = -1;
      b.Ka = -e;
      b.h = 1;
      this.fa.push(b);
      b = new I;
      c = b.Aa;
      c.x = 1;
      c.y = 0;
      b.Ka = -d;
      b.h = 1;
      this.fa.push(b);
      b = new I;
      c = b.Aa;
      c.x = -1;
      c.y = 0;
      b.Ka = -d;
      b.h = 1;
      this.fa.push(b);
      this.ij(d, e, h)
    },
    mf: function (a, b, c, d, e, f, g) {
      null == g && (g = 32);
      null == f && (f = 1);
      var k = new C,
        h = k.a;
      h.x = a + 8 * b;
      h.y = -c;
      var h = new C,
        m = h.a;
      m.x = a + 8 * b;
      m.y = c;
      var l = new C,
        m = l.a;
      m.x = k.a.x + 22 * b;
      m.y = k.a.y + 22;
      var n = new C,
        m = n.a;
      m.x = h.a.x + 22 * b;
      m.y = h.a.y - 22;
      m = new D;
      m.Y = k;
      m.aa = l;
      m.lc(90 * b);
      var p = new D;
      p.Y = n;
      p.aa = l;
      var q = new D;
      q.Y = n;
      q.aa = h;
      q.lc(90 * b);
      b = this.C.length;
      this.C.push(k);
      this.C.push(h);
      this.C.push(l);
      this.C.push(n);
      k = b;
      for (b = this.C.length; k < b;) h = k++, this.C[h].h =
        f, this.C[h].G = g, this.C[h].l = .1;
      b = this.O.length;
      this.O.push(m);
      this.O.push(p);
      this.O.push(q);
      k = b;
      for (b = this.O.length; k < b;) h = k++, this.O[h].h = f, this.O[h].G = g, this.O[h].l = .1;
      f = new Da;
      g = f.a;
      g.x = a;
      g.y = -c;
      f.qa = 0;
      f.ga = 8;
      f.ea = d;
      this.K.push(f);
      f = new Da;
      g = f.a;
      g.x = a;
      g.y = c;
      f.qa = 0;
      f.ga = 8;
      f.ea = d;
      this.K.push(f);
      d = new lb;
      f = d.Y;
      f.x = a;
      f.y = -c;
      f = d.aa;
      f.x = a;
      f.y = c;
      d.xe = e;
      this.bc.push(d)
    },
    lj: function (a, b) {
      var c = new C,
        d = c.a;
      d.x = 0;
      d.y = -b;
      c.l = .1;
      c.G = 24;
      c.h = 6;
      var d = new C,
        e = d.a;
      e.x = 0;
      e.y = -a;
      d.l = .1;
      d.G = 24;
      d.h = 6;
      var e = new C,
        f =
        e.a;
      f.x = 0;
      f.y = a;
      e.l = .1;
      e.G = 24;
      e.h = 6;
      var f = new C,
        g = f.a;
      g.x = 0;
      g.y = b;
      f.l = .1;
      f.G = 24;
      f.h = 6;
      g = new D;
      g.Y = c;
      g.aa = d;
      g.G = 24;
      g.h = 6;
      g.Xa = !1;
      g.l = .1;
      var k = new D;
      k.Y = e;
      k.aa = f;
      k.G = 24;
      k.h = 6;
      k.Xa = !1;
      k.l = .1;
      var h = new D;
      h.Y = d;
      h.aa = e;
      h.G = 8;
      h.h = 6;
      h.Xa = !1;
      h.lc(180);
      h.l = .1;
      var m = new D;
      m.Y = e;
      m.aa = d;
      m.G = 16;
      m.h = 6;
      m.Xa = !1;
      m.lc(180);
      m.l = .1;
      this.C.push(c);
      this.C.push(d);
      this.C.push(e);
      this.C.push(f);
      this.O.push(g);
      this.O.push(k);
      this.O.push(h);
      this.O.push(m)
    },
    ij: function (a, b, c) {
      if (!(0 >= c)) {
        var d = new C,
          e = d.a;
        e.x = -a + c;
        e.y = -b;
        d.h =
          0;
        var e = new C,
          f = e.a;
        f.x = -a;
        f.y = -b + c;
        e.h = 0;
        var f = new C,
          g = f.a;
        g.x = -a + c;
        g.y = b;
        f.h = 0;
        var g = new C,
          k = g.a;
        k.x = -a;
        k.y = b - c;
        g.h = 0;
        var k = new C,
          h = k.a;
        h.x = a - c;
        h.y = b;
        k.h = 0;
        var h = new C,
          m = h.a;
        m.x = a;
        m.y = b - c;
        h.h = 0;
        var m = new C,
          l = m.a;
        l.x = a - c;
        l.y = -b;
        m.h = 0;
        var l = new C,
          n = l.a;
        n.x = a;
        n.y = -b + c;
        l.h = 0;
        a = new D;
        a.Y = d;
        a.aa = e;
        a.h = 1;
        a.Xa = !1;
        a.l = 1;
        a.lc(-90);
        b = new D;
        b.Y = f;
        b.aa = g;
        b.h = 1;
        b.Xa = !1;
        b.l = 1;
        b.lc(90);
        c = new D;
        c.Y = k;
        c.aa = h;
        c.h = 1;
        c.Xa = !1;
        c.l = 1;
        c.lc(-90);
        n = new D;
        n.Y = m;
        n.aa = l;
        n.h = 1;
        n.Xa = !1;
        n.l = 1;
        n.lc(90);
        this.C.push(d);
        this.C.push(e);
        this.C.push(f);
        this.C.push(g);
        this.C.push(k);
        this.C.push(h);
        this.C.push(m);
        this.C.push(l);
        this.O.push(a);
        this.O.push(b);
        this.O.push(c);
        this.O.push(n)
      }
    },
    f: n
  };
  ha.prototype = {
    X: function (a) {
      a.w(this.Ic);
      a.V(this.Bc);
      a.w(this.Ua.length);
      for (var b = 0, c = this.Ua; b < c.length;) a.V(c[b++])
    },
    ba: function (a) {
      this.Ic = a.I();
      this.Bc = a.R();
      var b = a.I();
      this.Ua = [];
      for (var c = 0; c < b;) ++c, this.Ua.push(a.R())
    },
    f: ha
  };
  da.prototype = {
    Qo: function (a) {
      if (null == this.A) {
        this.A = new pa;
        for (var b = 0, c = this.F; b < c.length;) {
          var d = c[b];
          ++b;
          d.D = null;
          d.sb = 0
        }
        this.A.Fm(this);
        null != this.vh && this.vh(a)
      }
    },
    Te: function (a, b, c) {
      if (b.W != c) {
        b.W = c;
        H.remove(this.F, b);
        this.F.push(b);
        if (null != this.A) {
          null != b.D && (H.remove(this.A.ra.K, b.D), b.D = null);
          this.A.$i(b);
          for (var d = 0, e = !1; !e;) {
            ++d;
            for (var e = !0, f = 0, g = this.F; f < g.length;) {
              var k = g[f];
              ++f;
              if (k != b && k.W == b.W && k.sb == d) {
                e = !1;
                break
              }
            }
          }
          b.sb = d
        }
        ub.i(this.Nj, a, b, c)
      }
    },
    na: function (a) {
      for (var b = 0, c = this.F; b < c.length;) {
        var d = c[b];
        ++b;
        if (d.S == a) return d
      }
      return null
    },
    s: function (a) {
      null != this.A && this.A.s(a)
    },
    X: function (a) {
      a.Ab(this.Ib);
      a.w(this.mc ? 1 : 0);
      a.V(this.Va);
      a.V(this.sa);
      this.U.X(a);
      a.w(null != this.A ? 1 : 0);
      null != this.A && this.A.X(a);
      a.w(this.F.length);
      for (var b = 0, c = this.F; b < c.length;) c[b++].Ba(a);
      this.Wa[1].X(a);
      this.Wa[2].X(a)
    },
    ba: function (a) {
      this.Ib = a.xb();
      this.mc = 0 != a.I();
      this.Va = a.R();
      this.sa = a.R();
      this.U = n.ba(a);
      var b = 0 != a.I();
      this.A = null;
      b && (this.A = new pa, this.A.ba(a, this));
      for (var b = null == this.A ? null : this.A.ra.K, c = a.I(), d = this.F; d.length > c;) d.pop();
      for (d = 0; d < c;) {
        var e = new ca;
        e.Ca(a, b);
        this.F[d++] = e
      }
      this.Wa[1].ba(a);
      this.Wa[2].ba(a)
    },
    Vi: function () {
      var a = 0,
        b = x.ca();
      this.X(b);
      for (b = b.Xo(); 4 <= b.m.byteLength - b.a;) a ^= b.R();
      return a
    },
    om: function () {
      var a = x.ca(4);
      a.V(this.Vi());
      return a.Mf()
    },
    Nl: function (a) {
      a =
        (new G(new DataView(a))).R();
      y.i(this.dm, this.Vi() != a)
    },
    Sb: function () {
      var a = ta.$b,
        b = this.Gb;
      this.Hb != a && (null == b && (this.Gb = b = new da), this.Hb = a, da.Mc(b, this));
      return b
    },
    f: da
  };
  ca.prototype = {
    Ba: function (a) {
      a.w(this.oa ? 1 : 0);
      a.V(this.sb);
      a.Ab(this.Ya);
      a.w(this.fd ? 1 : 0);
      a.Ab(this.ed);
      a.V(this.Uf);
      a.Ab(this.o);
      a.V(this.bb);
      a.Jb(this.S);
      a.w(this.Kb ? 1 : 0);
      a.w(this.W.ka);
      a.ip(null == this.D ? -1 : this.D.Aj)
    },
    Ca: function (a, b) {
      this.oa = 0 != a.I();
      this.sb = a.R();
      this.Ya = a.xb();
      this.fd = 0 != a.I();
      this.ed = a.xb();
      this.Uf = a.R();
      this.o = a.xb();
      this.bb = a.R();
      this.S = a.Wb();
      this.Kb = 0 != a.I();
      var c = a.ne();
      this.W = 1 == c ? q.$ : 2 == c ? q.la : q.ya;
      c = a.$n();
      this.D = 0 > c ? null : b[c]
    },
    yp: function () {
      var a = ta.$b,
        b = this.al;
      this.$b != a && (null == b && (this.al = b = new ca), this.$b = a, ca.mp(b, this));
      return b
    },
    f: ca
  };
  ma.prototype = E(l.prototype, {
    apply: function (a) {
      a = a.na(this.pa);
      null != a && (a.Ya = this.Id)
    },
    Ba: function (a) {
      a.Ab(this.Id)
    },
    Ca: function (a) {
      this.Id =
        a.xb();
      null != this.Id && (this.Id = ra.dd(this.Id, 2))
    },
    f: ma
  });
  P.prototype = E(l.prototype, {
    apply: function (a) {
      var b = a.na(this.pa),
        c = a.na(this.Gc);
      if (null != b && null != c) {
        var d = b.oa;
        (d = d || c == b && !a.mc && null == a.A) && a.Te(b, c, this.Xf)
      }
    },
    Ba: function (a) {
      a.V(this.Gc);
      a.w(this.Xf.ka)
    },
    Ca: function (a) {
      this.Gc = a.R();
      a = a.ne();
      this.Xf = 1 == a ? q.$ : 2 == a ? q.la : q.ya
    },
    f: P
  });
  La.prototype = E(l.prototype, {
    apply: function (a) {
      var b = a.na(this.pa);
      null != b && Ia.i(a.Ij, b, this.Vf)
    },
    Ba: function (a) {
      a.cd(ra.dd(this.Vf, 140))
    },
    Ca: function (a) {
      this.Vf = a.Zc();
      if (140 < this.Vf.length) throw new u("message too long");
    },
    f: La
  });
  Ba.prototype = E(l.prototype, {
    apply: function (a) {
      a = a.na(this.pa);
      if (null != a) {
        var b = this.input;
        0 == (a.bb & 16) && 0 != (b & 16) && (a.Kb = !0);
        a.bb = b
      }
    },
    Ba: function (a) {
      a.ib(this.input)
    },
    Ca: function (a) {
      this.input = a.Sa()
    },
    f: Ba
  });
  Zb.Mh = function () {
    l.Pa(Sa);
    l.Pa(Ba);
    l.Pa(La);
    l.Pa(ja);
    l.Pa(Y);
    l.Pa(Ka);
    l.Pa(Ja);
    l.Pa(Ma);
    l.Pa(Z);
    l.Pa(la);
    l.Pa(P);
    l.Pa(ka);
    l.Pa(na);
    l.Pa(Ca);
    l.Pa(oa);
    l.Pa(ia);
    l.Pa(ma);
    l.Pa(Na)
  };
  Y.prototype = E(l.prototype, {
    apply: function (a) {
      if (0 != this.S) {
        var b = a.na(this.pa);
        if (null != b && b.oa) {
          var c = a.na(this.S);
          null != c && (H.remove(a.F, c), null != a.A && H.remove(a.A.ra.K, c.D), bc.i(a.Lj, c, this.Fc, this.Qf, b))
        }
      }
    },
    Ba: function (a) {
      null != this.Fc && (this.Fc = ra.dd(this.Fc, 100));
      a.V(this.S);
      a.Ab(this.Fc);
      a.w(this.Qf ? 1 : 0)
    },
    Ca: function (a) {
      this.S = a.R();
      this.Fc = a.xb();
      this.Qf = 0 != a.I();
      if (null != this.Fc && 100 < this.Fc.length) throw new u("string too long");
    },
    f: Y
  });
  Ka.prototype = E(l.prototype, {
    apply: function (a) {
      var b = a.na(this.pa);
      null != b && b.oa && a.Qo(b, 0)
    },
    Ba: function () {},
    Ca: function () {},
    f: Ka
  });
  Ja.prototype = E(l.prototype, {
    apply: function (a) {
      var b = a.na(this.pa);
      if (null != b && b.oa && null != a.A) {
        a.A = null;
        for (var c = 0, d = a.F; c < d.length;) {
          var e = d[c];
          ++c;
          e.D = null;
          e.sb = 0
        }
        null !=
          a.we && a.we(b)
      }
    },
    Ba: function () {},
    Ca: function () {},
    f: Ja
  });
  ia.prototype = E(l.prototype, {
    apply: function (a) {
      if (0 == this.pa) {
        a = a.F;
        for (var b = 0, c = a.length; b < c;) {
          var d = b++;
          if (d >= this.Jd.length) break;
          a[d].Fb = this.Jd[d]
        }
      }
    },
    Ba: function (a) {
      a.Jb(this.Jd.length);
      for (var b = 0, c = this.Jd; b < c.length;) a.Jb(c[b++])
    },
    Ca: function (a) {
      this.Jd = [];
      for (var b = a.Wb(), c = 0; c < b;) ++c, this.Jd.push(a.Wb())
    },
    f: ia
  });
  X.prototype = {
    X: function (a) {
      var b = this.a;
      a.v(b.x);
      a.v(b.y);
      b = this.M;
      a.v(b.x);
      a.v(b.y);
      a.v(this.ga);
      a.v(this.l);
      a.v(this.qa);
      a.v(this.Ea);
      a.ib(this.ea);
      a.V(this.h);
      a.V(this.G)
    },
    ba: function (a) {
      var b = this.a;
      b.x = a.u();
      b.y = a.u();
      b = this.M;
      b.x = a.u();
      b.y = a.u();
      this.ga = a.u();
      this.l = a.u();
      this.qa = a.u();
      this.Ea = a.u();
      this.ea = a.Sa();
      this.h = a.R();
      this.G = a.R()
    },
    Ml: function (a) {
      var b = this.a,
        c = a.a,
        d = b.x - c.x,
        b = b.y - c.y,
        e = a.ga + this.ga,
        f = d * d + b * b;
      if (0 < f && f <= e * e) {
        var f = Math.sqrt(f),
          d = d / f,
          b = b / f,
          c = this.qa / (this.qa + a.qa),
          e = e - f,
          f = e * c,
          g = this.a,
          k = this.a;
        g.x = k.x + d * f;
        g.y = k.y + b * f;
        k = g = a.a;
        e -= f;
        g.x = k.x - d * e;
        g.y = k.y - b * e;
        e = this.M;
        f = a.M;
        e = d * (e.x - f.x) + b * (e.y - f.y);
        0 > e && (e *= this.l * a.l + 1, c *= e, g = f = this.M, f.x = g.x - d * c, f.y = g.y - b * c, a = f = a.M, c = e - c, f.x = a.x + d * c, f.y = a.y + b * c)
      }
    },
    Sb: function () {
      var a = ta.$b,
        b = this.Gb;
      this.Hb !=
        a && (null == b && (this.Gb = b = new X), this.Hb = a, X.Mc(b, this));
      return b
    },
    f: X
  };
  Aa.prototype = {
    X: function (a) {
      a.w(this.K.length);
      for (var b = 0, c = this.K.length; b < c;) {
        var d = b++,
          e = this.K[d];
        e.Aj = d;
        e.X(a)
      }
    },
    ba: function (a) {
      this.K = [];
      for (var b = a.I(), c = 0; c < b;) {
        ++c;
        var d = new X;
        d.ba(a);
        this.K.push(d)
      }
    },
    s: function (a) {
      for (var b =
          0, c = this.K; b < c.length;) {
        var d = c[b];
        ++b;
        var e = d.a,
          f = d.a,
          g = d.M;
        e.x = f.x + g.x * a;
        e.y = f.y + g.y * a;
        f = e = d.M;
        d = d.Ea;
        e.x = f.x * d;
        e.y = f.y * d
      }
      a = 0;
      for (b = this.K.length; a < b;) {
        d = a++;
        c = this.K[d];
        d += 1;
        for (e = this.K.length; d < e;) f = this.K[d++], 0 != (f.h & c.G) && 0 != (f.G & c.h) && c.Ml(f);
        if (0 != c.qa) {
          d = 0;
          for (e = this.fa; d < e.length;)
            if (f = e[d], ++d, 0 != (f.h & c.G) && 0 != (f.G & c.h)) {
              var g = f.Aa,
                k = c.a,
                g = f.Ka - (g.x * k.x + g.y * k.y) + c.ga;
              if (0 < g) {
                var h = k = c.a,
                  m = f.Aa;
                k.x = h.x + m.x * g;
                k.y = h.y + m.y * g;
                g = c.M;
                k = f.Aa;
                g = g.x * k.x + g.y * k.y;
                0 > g && (g *= c.l * f.l + 1, h = k = c.M, f = f.Aa,
                  k.x = h.x - f.x * g, k.y = h.y - f.y * g)
              }
            } d = 0;
          for (e = this.O; d < e.length;)
            if (f = e[d], ++d, 0 != (f.h & c.G) && 0 != (f.G & c.h))
              if (0 != 0 * f.Nc) {
                var l = f.Y.a,
                  m = f.aa.a,
                  k = m.x - l.x,
                  g = m.y - l.y,
                  n = c.a,
                  h = n.x - m.x,
                  m = n.y - m.y,
                  n = c.a;
                0 < (n.x - l.x) * k + (n.y - l.y) * g && 0 > h * k + m * g && (l = Math.sqrt(k * k + g * g), g = -(g / l), k /= l, h = g * h + k * m, 0 > h && (h = -h, g = -g, k = -k), h < c.ga && (h = c.ga - h, l = m = c.a, m.x = l.x + g * h, m.y = l.y + k * h, h = c.M, h = g * h.x + k * h.y, 0 > h && (h *= c.l * f.l + 1, m = f = c.M, f.x = m.x - g * h, f.y = m.y - k * h)))
              } else {
                f.Ti(D.Lf);
                var g = D.Lf,
                  l = g.x,
                  n = g.y,
                  p = f.Y.a,
                  q = f.aa.a,
                  g = c.a,
                  k = g.x - l,
                  m = g.y - n,
                  h = k,
                  g =
                  m,
                  p = 0 < -(p.y - n) * k + (p.x - l) * m,
                  l = q.x - l,
                  n = q.y - n,
                  q = 0 < -n * k + l * m;
                if (0 < f.Nc ? p && !q : p || !q) l = Math.sqrt(k * k + m * m) - Math.sqrt(l * l + n * n), 0 > l && (l = -l, h = -k, g = -m), l < c.ga && (m = Math.sqrt(h * h + g * g), k = h / m, g /= m, m = h = c.a, l = c.ga - l, h.x = m.x + k * l, h.y = m.y + g * l, h = c.M, h = k * h.x + g * h.y, 0 > h && (h *= c.l * f.l + 1, m = f = c.M, f.x = m.x - k * h, f.y = m.y - g * h))
              } d = 0;
          for (e = this.C; d < e.length;) f = e[d], ++d, 0 != (f.h & c.G) && 0 != (f.G & c.h) && (k = c.a, h = f.a, g = k.x - h.x, k = k.y - h.y, h = g * g + k * k, 0 < h && h <= c.ga * c.ga && (h = Math.sqrt(h), g /= h, k /= h, h = c.ga - h, l = m = c.a, m.x = l.x + g * h, m.y = l.y + k * h, h = c.M, h = g *
            h.x + k * h.y, 0 > h && (h *= c.l * f.l + 1, m = f = c.M, f.x = m.x - g * h, f.y = m.y - k * h)))
        }
      }
    },
    Sb: function () {
      var a = ta.$b,
        b = this.Gb;
      this.Hb != a && (null == b && (this.Gb = b = new Aa), this.Hb = a, Aa.Mc(b, this));
      return b
    },
    f: Aa
  };
  D.prototype = {
    X: function (a) {
      a.w(this.Y.bf);
      a.w(this.aa.bf);
      a.v(this.l);
      a.V(this.h);
      a.V(this.G);
      a.v(this.Nc);
      a.w(this.Xa ? 1 : 0);
      a.V(this.ea)
    },
    ba: function (a, b) {
      this.Y = b[a.I()];
      this.aa = b[a.I()];
      this.l = a.u();
      this.h = a.R();
      this.G = a.R();
      this.Nc = a.u();
      this.Xa = 0 != a.I();
      this.ea = a.R()
    },
    lc: function (a) {
      a *= .017453292519943295;
      if (0 > a) {
        a = -a;
        var b = this.Y;
        this.Y = this.aa;
        this.aa = b
      }
      a > D.ll && a < D.kl && (this.Nc = 1 / Math.tan(a / 2))
    },
    Ti: function (a) {
      var b = this.aa.a,
        c = this.Y.a,
        d = .5 * (b.x - c.x),
        b = .5 * (b.y - c.y),
        c = this.Y.a,
        e = this.Nc;
      a.x = c.x + d + -b * e;
      a.y = c.y + b + d * e
    },
    f: D
  };
  q.ya = new q(0, 16777215, 0, -1, "Spectators", "t-spec", 0, 0);
  q.$ = new q(1, 15035990, -1, 8, "Red", "t-red", 0, 2);
  q.la = new q(2, 5671397, 1, 16, "Blue", "t-blue", 0, 4);
  l.Sk = Object.create(null);
  l.ze = 0;
  Sa.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  oa.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  Ca.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  Z.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  na.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  ma.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  P.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  la.Ha = l.Oa({
    Ja: !1,
    Ia: !1,
    cl: {
      Lk: 10,
      gl: 2E3
    }
  });
  Na.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  ka.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  ja.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  Ma.Ha = l.Oa({});
  La.Ha = l.Oa({
    Ja: !1,
    Ia: !1,
    cl: {
      Lk: 10,
      gl: 900
    }
  });
  Ba.Ha = l.Oa({});
  Y.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  Ka.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  Ja.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  ia.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  D.Lf = new O(0, 0);

  Zb.Mh();

  return (function() {
    const $_ReplayController = Db;
    const $_GameState = da;
    const $_Player = ca;
    const $_Team = q;
    const $_DiscF = X;
    const $_TestSimFloat = Aa;
    const ta = pa;

    function forward(class_, key, to) {
      Object.defineProperty(class_.prototype, key, {
        get() {if (typeof this[to] === 'undefined') throw new Error(`${key}:${to}`); return this[to]},
        set(x) {return this[to] = x},
      })
    }

    forward($_ReplayController, '_td', 'ad');
    forward($_ReplayController, '_Mg', 'kg');
    forward($_ReplayController, '_Te', 'Cf');
    forward($_ReplayController, '_v', 's');

    forward($_ReplayController, '_L', 'B');
    forward($_ReplayController, '_vc', 'pc');
    forward($_ReplayController, '_S', 'P');

    forward($_GameState, '_H', 'A');
    forward($_GameState, '_D', 'F');

    forward(ta, '_zb', 'ob');
    forward(ta, '_Ac', 'fc');
    forward(ta, '_Kb', 'yb');
    forward(ta, '_Cb', 'tb');
    forward(ta, '_xa', 'sa');
    forward(ta, '_wa', 'ra');

    forward($_TestSimFloat, '_K', 'K');

    forward($_Player, '_T', 'S');
    forward($_Player, '_mb', 'bb');
    forward($_Player, '_bc', 'Kb');
    forward($_Player, '_$', 'W');
    forward($_Player, '_F', 'D');

    forward($_Team, '_P', 'ka');

    forward($_DiscF, '_a', 'a');
    forward($_DiscF, '_M', 'M');

    return {
      $_GameState,
      $_ReplayController,
      v: 1,
    };
  })();
}

module.exports.closure = closure;

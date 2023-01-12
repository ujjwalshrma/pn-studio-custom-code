var __vite_style__ = document.createElement('style');
__vite_style__.innerHTML = `html,body{scroll-behavior:auto!important}.contact__form__field::placeholder{color:#a3813a}.items__wrapper{overflow-x:hidden}.top__images.view{position:fixed;transform:translate(-50%)}.intro{pointer-events:none}.drag-proxy{visibility:hidden;position:absolute}.featured__projects__div:active{cursor:grabbing}.glide__arrows{width:95%;display:flex;align-items:center;justify-content:space-between;margin:0 auto}.glide__arrow{background:none;background-position-y:50%;background:url(https://uploads-ssl.webflow.com/63771c62eadb5c6192ec63f7/637f8d2ee92e67552dea8eb6_Path%201577.svg) no-repeat;width:10px;height:20px;transition:all .3s ease;padding:10px}.glide__arrow:hover{opacity:.7}.glide__arrow--left{transform:rotate(180deg)}.glide__bullets{display:flex;align-items:center;width:100%;justify-content:center;gap:6px;margin-top:40px}.glide__bullet--active{background-color:#a3813a}.hero__heading{height:90px}.projects__page__heading{text-transform:uppercase;max-width:700px;margin:165px auto;text-align:center}.projects__page__heading__div{min-width:100%}@media screen and (max-width: 500px){.hero__heading{height:auto}.projects__page__heading{max-width:345px}.blog__info__para p{font-size:14px;line-height:21px;letter-spacing:.5px}.project__item__2{width:100%!important;height:auto!important}.project__item__2:nth-child(3){width:100%!important;height:auto!important}}
`;
document.head.appendChild(__vite_style__);
(function (Cn, Tn) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? Tn(require('jquery'))
    : typeof define == 'function' && define.amd
    ? define(['jquery'], Tn)
    : ((Cn = typeof globalThis != 'undefined' ? globalThis : Cn || self),
      Tn(Cn.$));
})(this, function (Cn) {
  'use strict';
  function Tn(o) {
    return o && typeof o == 'object' && 'default' in o ? o : { default: o };
  }
  var Bc = Tn(Cn),
    r_ = '';
  function Mi(o) {
    if (o === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return o;
  }
  function _a(o, e) {
    (o.prototype = Object.create(e.prototype)),
      (o.prototype.constructor = o),
      (o.__proto__ = e);
  }
  /*!
   * GSAP 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var $t = {
      autoSleep: 120,
      force3D: 'auto',
      nullTargetWarn: 1,
      units: { lineHeight: '' },
    },
    Yr = { duration: 0.5, overwrite: !1, delay: 0 },
    ws,
    At,
    nt,
    Gt = 1e8,
    Pe = 1 / Gt,
    bs = Math.PI * 2,
    Lc = bs / 4,
    Nc = 0,
    ga = Math.sqrt,
    Ic = Math.cos,
    $c = Math.sin,
    dt = function (e) {
      return typeof e == 'string';
    },
    Qe = function (e) {
      return typeof e == 'function';
    },
    Oi = function (e) {
      return typeof e == 'number';
    },
    Cs = function (e) {
      return typeof e == 'undefined';
    },
    yi = function (e) {
      return typeof e == 'object';
    },
    Mt = function (e) {
      return e !== !1;
    },
    Da = function () {
      return typeof window != 'undefined';
    },
    mo = function (e) {
      return Qe(e) || dt(e);
    },
    ma =
      (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) ||
      function () {},
    vt = Array.isArray,
    Ts = /(?:-?\.?\d|\.)+/gi,
    ya = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Hr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Ss = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    va = /[+-]=-?[.\d]+/,
    xa = /[^,'"\[\]\s]+/gi,
    zc = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    We,
    Qt,
    Es,
    Fs,
    zt = {},
    yo = {},
    wa,
    ba = function (e) {
      return (yo = dr(e, zt)) && Xt;
    },
    ks = function (e, i) {
      return console.warn(
        'Invalid property',
        e,
        'set to',
        i,
        'Missing plugin? gsap.registerPlugin()'
      );
    },
    vo = function (e, i) {
      return !i && console.warn(e);
    },
    Ca = function (e, i) {
      return (e && (zt[e] = i) && yo && (yo[e] = i)) || zt;
    },
    Sn = function () {
      return 0;
    },
    Yc = { suppressEvents: !0, isStart: !0, kill: !1 },
    xo = { suppressEvents: !0, kill: !1 },
    Hc = { suppressEvents: !0 },
    Ps = {},
    Vi = [],
    As = {},
    Ta,
    Yt = {},
    Ms = {},
    Sa = 30,
    wo = [],
    Os = '',
    Rs = function (e) {
      var i = e[0],
        t,
        r;
      if ((yi(i) || Qe(i) || (e = [e]), !(t = (i._gsap || {}).harness))) {
        for (r = wo.length; r-- && !wo[r].targetTest(i); );
        t = wo[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new Ja(e[r], t)))) ||
          e.splice(r, 1);
      return e;
    },
    cr = function (e) {
      return e._gsap || Rs(ei(e))[0]._gsap;
    },
    Ea = function (e, i, t) {
      return (t = e[i]) && Qe(t)
        ? e[i]()
        : (Cs(t) && e.getAttribute && e.getAttribute(i)) || t;
    },
    Ot = function (e, i) {
      return (e = e.split(',')).forEach(i) || e;
    },
    et = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    _t = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    Xr = function (e, i) {
      var t = i.charAt(0),
        r = parseFloat(i.substr(2));
      return (
        (e = parseFloat(e)),
        t === '+' ? e + r : t === '-' ? e - r : t === '*' ? e * r : e / r
      );
    },
    Xc = function (e, i) {
      for (var t = i.length, r = 0; e.indexOf(i[r]) < 0 && ++r < t; );
      return r < t;
    },
    bo = function () {
      var e = Vi.length,
        i = Vi.slice(0),
        t,
        r;
      for (As = {}, Vi.length = 0, t = 0; t < e; t++)
        (r = i[t]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    Fa = function (e, i, t, r) {
      Vi.length && bo(),
        e.render(i, t, r || (At && i < 0 && (e._initted || e._startAt))),
        Vi.length && bo();
    },
    ka = function (e) {
      var i = parseFloat(e);
      return (i || i === 0) && (e + '').match(xa).length < 2
        ? i
        : dt(e)
        ? e.trim()
        : e;
    },
    Pa = function (e) {
      return e;
    },
    Zt = function (e, i) {
      for (var t in i) t in e || (e[t] = i[t]);
      return e;
    },
    Vc = function (e) {
      return function (i, t) {
        for (var r in t)
          r in i || (r === 'duration' && e) || r === 'ease' || (i[r] = t[r]);
      };
    },
    dr = function (e, i) {
      for (var t in i) e[t] = i[t];
      return e;
    },
    Aa = function o(e, i) {
      for (var t in i)
        t !== '__proto__' &&
          t !== 'constructor' &&
          t !== 'prototype' &&
          (e[t] = yi(i[t]) ? o(e[t] || (e[t] = {}), i[t]) : i[t]);
      return e;
    },
    Co = function (e, i) {
      var t = {},
        r;
      for (r in e) r in i || (t[r] = e[r]);
      return t;
    },
    En = function (e) {
      var i = e.parent || We,
        t = e.keyframes ? Vc(vt(e.keyframes)) : Zt;
      if (Mt(e.inherit))
        for (; i; ) t(e, i.vars.defaults), (i = i.parent || i._dp);
      return e;
    },
    Wc = function (e, i) {
      for (var t = e.length, r = t === i.length; r && t-- && e[t] === i[t]; );
      return t < 0;
    },
    Ma = function (e, i, t, r, n) {
      t === void 0 && (t = '_first'), r === void 0 && (r = '_last');
      var s = e[r],
        u;
      if (n) for (u = i[n]; s && s[n] > u; ) s = s._prev;
      return (
        s
          ? ((i._next = s._next), (s._next = i))
          : ((i._next = e[t]), (e[t] = i)),
        i._next ? (i._next._prev = i) : (e[r] = i),
        (i._prev = s),
        (i.parent = i._dp = e),
        i
      );
    },
    To = function (e, i, t, r) {
      t === void 0 && (t = '_first'), r === void 0 && (r = '_last');
      var n = i._prev,
        s = i._next;
      n ? (n._next = s) : e[t] === i && (e[t] = s),
        s ? (s._prev = n) : e[r] === i && (e[r] = n),
        (i._next = i._prev = i.parent = null);
    },
    Wi = function (e, i) {
      e.parent && (!i || e.parent.autoRemoveChildren) && e.parent.remove(e),
        (e._act = 0);
    },
    hr = function (e, i) {
      if (e && (!i || i._end > e._dur || i._start < 0))
        for (var t = e; t; ) (t._dirty = 1), (t = t.parent);
      return e;
    },
    qc = function (e) {
      for (var i = e.parent; i && i.parent; )
        (i._dirty = 1), i.totalDuration(), (i = i.parent);
      return e;
    },
    Bs = function (e, i, t, r) {
      return (
        e._startAt &&
        (At
          ? e._startAt.revert(xo)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(i, !0, r))
      );
    },
    Uc = function o(e) {
      return !e || (e._ts && o(e.parent));
    },
    Oa = function (e) {
      return e._repeat ? Vr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Vr = function (e, i) {
      var t = Math.floor((e /= i));
      return e && t === e ? t - 1 : t;
    },
    So = function (e, i) {
      return (
        (e - i._start) * i._ts +
        (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur)
      );
    },
    Eo = function (e) {
      return (e._end = _t(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || Pe) || 0)
      ));
    },
    Fo = function (e, i) {
      var t = e._dp;
      return (
        t &&
          t.smoothChildTiming &&
          e._ts &&
          ((e._start = _t(
            t._time -
              (e._ts > 0
                ? i / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - i) / -e._ts)
          )),
          Eo(e),
          t._dirty || hr(t, e)),
        e
      );
    },
    Ra = function (e, i) {
      var t;
      if (
        ((i._time || (i._initted && !i._dur)) &&
          ((t = So(e.rawTime(), i)),
          (!i._dur || kn(0, i.totalDuration(), t) - i._tTime > Pe) &&
            i.render(t, !0)),
        hr(e, i)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (t = e; t._dp; )
            t.rawTime() >= 0 && t.totalTime(t._tTime), (t = t._dp);
        e._zTime = -Pe;
      }
    },
    vi = function (e, i, t, r) {
      return (
        i.parent && Wi(i),
        (i._start = _t(
          (Oi(t) ? t : t || e !== We ? Jt(e, t, i) : e._time) + i._delay
        )),
        (i._end = _t(
          i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)
        )),
        Ma(e, i, '_first', '_last', e._sort ? '_start' : 0),
        Ls(i) || (e._recent = i),
        r || Ra(e, i),
        e._ts < 0 && Fo(e, e._tTime),
        e
      );
    },
    Ba = function (e, i) {
      return (
        (zt.ScrollTrigger || ks('scrollTrigger', i)) &&
        zt.ScrollTrigger.create(i, e)
      );
    },
    La = function (e, i, t, r, n) {
      if ((Ws(e, i, n), !e._initted)) return 1;
      if (
        !t &&
        e._pt &&
        !At &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Ta !== Ht.frame
      )
        return Vi.push(e), (e._lazy = [n, r]), 1;
    },
    jc = function o(e) {
      var i = e.parent;
      return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || o(i));
    },
    Ls = function (e) {
      var i = e.data;
      return i === 'isFromStart' || i === 'isStart';
    },
    Kc = function (e, i, t, r) {
      var n = e.ratio,
        s =
          i < 0 ||
          (!i &&
            ((!e._start && jc(e) && !(!e._initted && Ls(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !Ls(e))))
            ? 0
            : 1,
        u = e._rDelay,
        a = 0,
        f,
        c,
        h;
      if (
        (u &&
          e._repeat &&
          ((a = kn(0, e._tDur, i)),
          (c = Vr(a, u)),
          e._yoyo && c & 1 && (s = 1 - s),
          c !== Vr(e._tTime, u) &&
            ((n = 1 - s),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        s !== n || At || r || e._zTime === Pe || (!i && e._zTime))
      ) {
        if (!e._initted && La(e, i, r, t, a)) return;
        for (
          h = e._zTime,
            e._zTime = i || (t ? Pe : 0),
            t || (t = i && !h),
            e.ratio = s,
            e._from && (s = 1 - s),
            e._time = 0,
            e._tTime = a,
            f = e._pt;
          f;

        )
          f.r(s, f.d), (f = f._next);
        i < 0 && Bs(e, i, t, !0),
          e._onUpdate && !t && ti(e, 'onUpdate'),
          a && e._repeat && !t && e.parent && ti(e, 'onRepeat'),
          (i >= e._tDur || i < 0) &&
            e.ratio === s &&
            (s && Wi(e, 1),
            !t &&
              !At &&
              (ti(e, s ? 'onComplete' : 'onReverseComplete', !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = i);
    },
    Gc = function (e, i, t) {
      var r;
      if (t > i)
        for (r = e._first; r && r._start <= t; ) {
          if (r.data === 'isPause' && r._start > i) return r;
          r = r._next;
        }
      else
        for (r = e._last; r && r._start >= t; ) {
          if (r.data === 'isPause' && r._start < i) return r;
          r = r._prev;
        }
    },
    Wr = function (e, i, t, r) {
      var n = e._repeat,
        s = _t(i) || 0,
        u = e._tTime / e._tDur;
      return (
        u && !r && (e._time *= s / e._dur),
        (e._dur = s),
        (e._tDur = n ? (n < 0 ? 1e10 : _t(s * (n + 1) + e._rDelay * n)) : s),
        u > 0 && !r && Fo(e, (e._tTime = e._tDur * u)),
        e.parent && Eo(e),
        t || hr(e.parent, e),
        e
      );
    },
    Na = function (e) {
      return e instanceof Rt ? hr(e) : Wr(e, e._dur);
    },
    Qc = { _start: 0, endTime: Sn, totalDuration: Sn },
    Jt = function o(e, i, t) {
      var r = e.labels,
        n = e._recent || Qc,
        s = e.duration() >= Gt ? n.endTime(!1) : e._dur,
        u,
        a,
        f;
      return dt(i) && (isNaN(i) || i in r)
        ? ((a = i.charAt(0)),
          (f = i.substr(-1) === '%'),
          (u = i.indexOf('=')),
          a === '<' || a === '>'
            ? (u >= 0 && (i = i.replace(/=/, '')),
              (a === '<' ? n._start : n.endTime(n._repeat >= 0)) +
                (parseFloat(i.substr(1)) || 0) *
                  (f ? (u < 0 ? n : t).totalDuration() / 100 : 1))
            : u < 0
            ? (i in r || (r[i] = s), r[i])
            : ((a = parseFloat(i.charAt(u - 1) + i.substr(u + 1))),
              f && t && (a = (a / 100) * (vt(t) ? t[0] : t).totalDuration()),
              u > 1 ? o(e, i.substr(0, u - 1), t) + a : s + a))
        : i == null
        ? s
        : +i;
    },
    Fn = function (e, i, t) {
      var r = Oi(i[1]),
        n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        s = i[n],
        u,
        a;
      if ((r && (s.duration = i[1]), (s.parent = t), e)) {
        for (u = s, a = t; a && !('immediateRender' in u); )
          (u = a.vars.defaults || {}), (a = Mt(a.vars.inherit) && a.parent);
        (s.immediateRender = Mt(u.immediateRender)),
          e < 2 ? (s.runBackwards = 1) : (s.startAt = i[n - 1]);
      }
      return new at(i[0], s, i[n + 1]);
    },
    qi = function (e, i) {
      return e || e === 0 ? i(e) : i;
    },
    kn = function (e, i, t) {
      return t < e ? e : t > i ? i : t;
    },
    xt = function (e, i) {
      return !dt(e) || !(i = zc.exec(e)) ? '' : i[1];
    },
    Zc = function (e, i, t) {
      return qi(t, function (r) {
        return kn(e, i, r);
      });
    },
    Ns = [].slice,
    Ia = function (e, i) {
      return (
        e &&
        yi(e) &&
        'length' in e &&
        ((!i && !e.length) || (e.length - 1 in e && yi(e[0]))) &&
        !e.nodeType &&
        e !== Qt
      );
    },
    Jc = function (e, i, t) {
      return (
        t === void 0 && (t = []),
        e.forEach(function (r) {
          var n;
          return (dt(r) && !i) || Ia(r, 1)
            ? (n = t).push.apply(n, ei(r))
            : t.push(r);
        }) || t
      );
    },
    ei = function (e, i, t) {
      return nt && !i && nt.selector
        ? nt.selector(e)
        : dt(e) && !t && (Es || !Ur())
        ? Ns.call((i || Fs).querySelectorAll(e), 0)
        : vt(e)
        ? Jc(e, t)
        : Ia(e)
        ? Ns.call(e, 0)
        : e
        ? [e]
        : [];
    },
    Is = function (e) {
      return (
        (e = ei(e)[0] || vo('Invalid scope') || {}),
        function (i) {
          var t = e.current || e.nativeElement || e;
          return ei(
            i,
            t.querySelectorAll
              ? t
              : t === e
              ? vo('Invalid scope') || Fs.createElement('div')
              : e
          );
        }
      );
    },
    $a = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    za = function (e) {
      if (Qe(e)) return e;
      var i = yi(e) ? e : { each: e },
        t = pr(i.ease),
        r = i.from || 0,
        n = parseFloat(i.base) || 0,
        s = {},
        u = r > 0 && r < 1,
        a = isNaN(r) || u,
        f = i.axis,
        c = r,
        h = r;
      return (
        dt(r)
          ? (c = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !u && a && ((c = r[0]), (h = r[1])),
        function (d, l, _) {
          var p = (_ || i).length,
            D = s[p],
            y,
            T,
            v,
            b,
            C,
            M,
            E,
            k,
            R;
          if (!D) {
            if (((R = i.grid === 'auto' ? 0 : (i.grid || [1, Gt])[1]), !R)) {
              for (
                E = -Gt;
                E < (E = _[R++].getBoundingClientRect().left) && R < p;

              );
              R--;
            }
            for (
              D = s[p] = [],
                y = a ? Math.min(R, p) * c - 0.5 : r % R,
                T = R === Gt ? 0 : a ? (p * h) / R - 0.5 : (r / R) | 0,
                E = 0,
                k = Gt,
                M = 0;
              M < p;
              M++
            )
              (v = (M % R) - y),
                (b = T - ((M / R) | 0)),
                (D[M] = C =
                  f ? Math.abs(f === 'y' ? b : v) : ga(v * v + b * b)),
                C > E && (E = C),
                C < k && (k = C);
            r === 'random' && $a(D),
              (D.max = E - k),
              (D.min = k),
              (D.v = p =
                (parseFloat(i.amount) ||
                  parseFloat(i.each) *
                    (R > p
                      ? p - 1
                      : f
                      ? f === 'y'
                        ? p / R
                        : R
                      : Math.max(R, p / R)) ||
                  0) * (r === 'edges' ? -1 : 1)),
              (D.b = p < 0 ? n - p : n),
              (D.u = xt(i.amount || i.each) || 0),
              (t = t && p < 0 ? Ga(t) : t);
          }
          return (
            (p = (D[d] - D.min) / D.max || 0),
            _t(D.b + (t ? t(p) : p) * D.v) + D.u
          );
        }
      );
    },
    $s = function (e) {
      var i = Math.pow(10, ((e + '').split('.')[1] || '').length);
      return function (t) {
        var r = _t(Math.round(parseFloat(t) / e) * e * i);
        return (r - (r % 1)) / i + (Oi(t) ? 0 : xt(t));
      };
    },
    Ya = function (e, i) {
      var t = vt(e),
        r,
        n;
      return (
        !t &&
          yi(e) &&
          ((r = t = e.radius || Gt),
          e.values
            ? ((e = ei(e.values)), (n = !Oi(e[0])) && (r *= r))
            : (e = $s(e.increment))),
        qi(
          i,
          t
            ? Qe(e)
              ? function (s) {
                  return (n = e(s)), Math.abs(n - s) <= r ? n : s;
                }
              : function (s) {
                  for (
                    var u = parseFloat(n ? s.x : s),
                      a = parseFloat(n ? s.y : 0),
                      f = Gt,
                      c = 0,
                      h = e.length,
                      d,
                      l;
                    h--;

                  )
                    n
                      ? ((d = e[h].x - u),
                        (l = e[h].y - a),
                        (d = d * d + l * l))
                      : (d = Math.abs(e[h] - u)),
                      d < f && ((f = d), (c = h));
                  return (
                    (c = !r || f <= r ? e[c] : s),
                    n || c === s || Oi(s) ? c : c + xt(s)
                  );
                }
            : $s(e)
        )
      );
    },
    Ha = function (e, i, t, r) {
      return qi(vt(e) ? !i : t === !0 ? !!(t = 0) : !r, function () {
        return vt(e)
          ? e[~~(Math.random() * e.length)]
          : (t = t || 1e-5) &&
              (r = t < 1 ? Math.pow(10, (t + '').length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - t / 2 + Math.random() * (i - e + t * 0.99)) / t
                ) *
                  t *
                  r
              ) / r;
      });
    },
    ed = function () {
      for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++)
        i[t] = arguments[t];
      return function (r) {
        return i.reduce(function (n, s) {
          return s(n);
        }, r);
      };
    },
    td = function (e, i) {
      return function (t) {
        return e(parseFloat(t)) + (i || xt(t));
      };
    },
    id = function (e, i, t) {
      return Va(e, i, 0, 1, t);
    },
    Xa = function (e, i, t) {
      return qi(t, function (r) {
        return e[~~i(r)];
      });
    },
    rd = function o(e, i, t) {
      var r = i - e;
      return vt(e)
        ? Xa(e, o(0, e.length), i)
        : qi(t, function (n) {
            return ((r + ((n - e) % r)) % r) + e;
          });
    },
    nd = function o(e, i, t) {
      var r = i - e,
        n = r * 2;
      return vt(e)
        ? Xa(e, o(0, e.length - 1), i)
        : qi(t, function (s) {
            return (s = (n + ((s - e) % n)) % n || 0), e + (s > r ? n - s : s);
          });
    },
    Pn = function (e) {
      for (var i = 0, t = '', r, n, s, u; ~(r = e.indexOf('random(', i)); )
        (s = e.indexOf(')', r)),
          (u = e.charAt(r + 7) === '['),
          (n = e.substr(r + 7, s - r - 7).match(u ? xa : Ts)),
          (t +=
            e.substr(i, r - i) +
            Ha(u ? n : +n[0], u ? 0 : +n[1], +n[2] || 1e-5)),
          (i = s + 1);
      return t + e.substr(i, e.length - i);
    },
    Va = function (e, i, t, r, n) {
      var s = i - e,
        u = r - t;
      return qi(n, function (a) {
        return t + (((a - e) / s) * u || 0);
      });
    },
    od = function o(e, i, t, r) {
      var n = isNaN(e + i)
        ? 0
        : function (l) {
            return (1 - l) * e + l * i;
          };
      if (!n) {
        var s = dt(e),
          u = {},
          a,
          f,
          c,
          h,
          d;
        if ((t === !0 && (r = 1) && (t = null), s))
          (e = { p: e }), (i = { p: i });
        else if (vt(e) && !vt(i)) {
          for (c = [], h = e.length, d = h - 2, f = 1; f < h; f++)
            c.push(o(e[f - 1], e[f]));
          h--,
            (n = function (_) {
              _ *= h;
              var p = Math.min(d, ~~_);
              return c[p](_ - p);
            }),
            (t = i);
        } else r || (e = dr(vt(e) ? [] : {}, e));
        if (!c) {
          for (a in i) Xs.call(u, e, a, 'get', i[a]);
          n = function (_) {
            return js(_, u) || (s ? e.p : e);
          };
        }
      }
      return qi(t, n);
    },
    Wa = function (e, i, t) {
      var r = e.labels,
        n = Gt,
        s,
        u,
        a;
      for (s in r)
        (u = r[s] - i),
          u < 0 == !!t && u && n > (u = Math.abs(u)) && ((a = s), (n = u));
      return a;
    },
    ti = function (e, i, t) {
      var r = e.vars,
        n = r[i],
        s = nt,
        u = e._ctx,
        a,
        f,
        c;
      if (!!n)
        return (
          (a = r[i + 'Params']),
          (f = r.callbackScope || e),
          t && Vi.length && bo(),
          u && (nt = u),
          (c = a ? n.apply(f, a) : n.call(f)),
          (nt = s),
          c
        );
    },
    An = function (e) {
      return (
        Wi(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!At),
        e.progress() < 1 && ti(e, 'onInterrupt'),
        e
      );
    },
    qr,
    sd = function (e) {
      e = (!e.name && e.default) || e;
      var i = e.name,
        t = Qe(e),
        r =
          i && !t && e.init
            ? function () {
                this._props = [];
              }
            : e,
        n = {
          init: Sn,
          render: js,
          add: Xs,
          kill: wd,
          modifier: xd,
          rawVars: 0,
        },
        s = { targetTest: 0, get: 0, getSetter: Us, aliases: {}, register: 0 };
      if ((Ur(), e !== r)) {
        if (Yt[i]) return;
        Zt(r, Zt(Co(e, n), s)),
          dr(r.prototype, dr(n, Co(e, s))),
          (Yt[(r.prop = i)] = r),
          e.targetTest && (wo.push(r), (Ps[i] = 1)),
          (i =
            (i === 'css' ? 'CSS' : i.charAt(0).toUpperCase() + i.substr(1)) +
            'Plugin');
      }
      Ca(i, r), e.register && e.register(Xt, r, Bt);
    },
    Oe = 255,
    Mn = {
      aqua: [0, Oe, Oe],
      lime: [0, Oe, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Oe],
      navy: [0, 0, 128],
      white: [Oe, Oe, Oe],
      olive: [128, 128, 0],
      yellow: [Oe, Oe, 0],
      orange: [Oe, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Oe, 0, 0],
      pink: [Oe, 192, 203],
      cyan: [0, Oe, Oe],
      transparent: [Oe, Oe, Oe, 0],
    },
    zs = function (e, i, t) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? i + (t - i) * e * 6
          : e < 0.5
          ? t
          : e * 3 < 2
          ? i + (t - i) * (2 / 3 - e) * 6
          : i) *
          Oe +
          0.5) |
          0
      );
    },
    qa = function (e, i, t) {
      var r = e ? (Oi(e) ? [e >> 16, (e >> 8) & Oe, e & Oe] : 0) : Mn.black,
        n,
        s,
        u,
        a,
        f,
        c,
        h,
        d,
        l,
        _;
      if (!r) {
        if ((e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), Mn[e]))
          r = Mn[e];
        else if (e.charAt(0) === '#') {
          if (
            (e.length < 6 &&
              ((n = e.charAt(1)),
              (s = e.charAt(2)),
              (u = e.charAt(3)),
              (e =
                '#' +
                n +
                n +
                s +
                s +
                u +
                u +
                (e.length === 5 ? e.charAt(4) + e.charAt(4) : ''))),
            e.length === 9)
          )
            return (
              (r = parseInt(e.substr(1, 6), 16)),
              [r >> 16, (r >> 8) & Oe, r & Oe, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (r = [e >> 16, (e >> 8) & Oe, e & Oe]);
        } else if (e.substr(0, 3) === 'hsl') {
          if (((r = _ = e.match(Ts)), !i))
            (a = (+r[0] % 360) / 360),
              (f = +r[1] / 100),
              (c = +r[2] / 100),
              (s = c <= 0.5 ? c * (f + 1) : c + f - c * f),
              (n = c * 2 - s),
              r.length > 3 && (r[3] *= 1),
              (r[0] = zs(a + 1 / 3, n, s)),
              (r[1] = zs(a, n, s)),
              (r[2] = zs(a - 1 / 3, n, s));
          else if (~e.indexOf('='))
            return (r = e.match(ya)), t && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(Ts) || Mn.transparent;
        r = r.map(Number);
      }
      return (
        i &&
          !_ &&
          ((n = r[0] / Oe),
          (s = r[1] / Oe),
          (u = r[2] / Oe),
          (h = Math.max(n, s, u)),
          (d = Math.min(n, s, u)),
          (c = (h + d) / 2),
          h === d
            ? (a = f = 0)
            : ((l = h - d),
              (f = c > 0.5 ? l / (2 - h - d) : l / (h + d)),
              (a =
                h === n
                  ? (s - u) / l + (s < u ? 6 : 0)
                  : h === s
                  ? (u - n) / l + 2
                  : (n - s) / l + 4),
              (a *= 60)),
          (r[0] = ~~(a + 0.5)),
          (r[1] = ~~(f * 100 + 0.5)),
          (r[2] = ~~(c * 100 + 0.5))),
        t && r.length < 4 && (r[3] = 1),
        r
      );
    },
    Ua = function (e) {
      var i = [],
        t = [],
        r = -1;
      return (
        e.split(Ui).forEach(function (n) {
          var s = n.match(Hr) || [];
          i.push.apply(i, s), t.push((r += s.length + 1));
        }),
        (i.c = t),
        i
      );
    },
    ja = function (e, i, t) {
      var r = '',
        n = (e + r).match(Ui),
        s = i ? 'hsla(' : 'rgba(',
        u = 0,
        a,
        f,
        c,
        h;
      if (!n) return e;
      if (
        ((n = n.map(function (d) {
          return (
            (d = qa(d, i, 1)) &&
            s +
              (i
                ? d[0] + ',' + d[1] + '%,' + d[2] + '%,' + d[3]
                : d.join(',')) +
              ')'
          );
        })),
        t && ((c = Ua(e)), (a = t.c), a.join(r) !== c.c.join(r)))
      )
        for (f = e.replace(Ui, '1').split(Hr), h = f.length - 1; u < h; u++)
          r +=
            f[u] +
            (~a.indexOf(u)
              ? n.shift() || s + '0,0,0,0)'
              : (c.length ? c : n.length ? n : t).shift());
      if (!f)
        for (f = e.split(Ui), h = f.length - 1; u < h; u++) r += f[u] + n[u];
      return r + f[h];
    },
    Ui = (function () {
      var o =
          '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
        e;
      for (e in Mn) o += '|' + e + '\\b';
      return new RegExp(o + ')', 'gi');
    })(),
    ud = /hsl[a]?\(/,
    Ka = function (e) {
      var i = e.join(' '),
        t;
      if (((Ui.lastIndex = 0), Ui.test(i)))
        return (
          (t = ud.test(i)),
          (e[1] = ja(e[1], t)),
          (e[0] = ja(e[0], t, Ua(e[1]))),
          !0
        );
    },
    On,
    Ht = (function () {
      var o = Date.now,
        e = 500,
        i = 33,
        t = o(),
        r = t,
        n = 1e3 / 240,
        s = n,
        u = [],
        a,
        f,
        c,
        h,
        d,
        l,
        _ = function p(D) {
          var y = o() - r,
            T = D === !0,
            v,
            b,
            C,
            M;
          if (
            (y > e && (t += y - i),
            (r += y),
            (C = r - t),
            (v = C - s),
            (v > 0 || T) &&
              ((M = ++h.frame),
              (d = C - h.time * 1e3),
              (h.time = C = C / 1e3),
              (s += v + (v >= n ? 4 : n - v)),
              (b = 1)),
            T || (a = f(p)),
            b)
          )
            for (l = 0; l < u.length; l++) u[l](C, d, M, D);
        };
      return (
        (h = {
          time: 0,
          frame: 0,
          tick: function () {
            _(!0);
          },
          deltaRatio: function (D) {
            return d / (1e3 / (D || 60));
          },
          wake: function () {
            wa &&
              (!Es &&
                Da() &&
                ((Qt = Es = window),
                (Fs = Qt.document || {}),
                (zt.gsap = Xt),
                (Qt.gsapVersions || (Qt.gsapVersions = [])).push(Xt.version),
                ba(yo || Qt.GreenSockGlobals || (!Qt.gsap && Qt) || {}),
                (c = Qt.requestAnimationFrame)),
              a && h.sleep(),
              (f =
                c ||
                function (D) {
                  return setTimeout(D, (s - h.time * 1e3 + 1) | 0);
                }),
              (On = 1),
              _(2));
          },
          sleep: function () {
            (c ? Qt.cancelAnimationFrame : clearTimeout)(a), (On = 0), (f = Sn);
          },
          lagSmoothing: function (D, y) {
            (e = D || 1 / Pe), (i = Math.min(y, e, 0));
          },
          fps: function (D) {
            (n = 1e3 / (D || 240)), (s = h.time * 1e3 + n);
          },
          add: function (D, y, T) {
            var v = y
              ? function (b, C, M, E) {
                  D(b, C, M, E), h.remove(v);
                }
              : D;
            return h.remove(D), u[T ? 'unshift' : 'push'](v), Ur(), v;
          },
          remove: function (D, y) {
            ~(y = u.indexOf(D)) && u.splice(y, 1) && l >= y && l--;
          },
          _listeners: u,
        }),
        h
      );
    })(),
    Ur = function () {
      return !On && Ht.wake();
    },
    ve = {},
    ad = /^[\d.\-M][\d.\-,\s]/,
    ld = /["']/g,
    fd = function (e) {
      for (
        var i = {},
          t = e.substr(1, e.length - 3).split(':'),
          r = t[0],
          n = 1,
          s = t.length,
          u,
          a,
          f;
        n < s;
        n++
      )
        (a = t[n]),
          (u = n !== s - 1 ? a.lastIndexOf(',') : a.length),
          (f = a.substr(0, u)),
          (i[r] = isNaN(f) ? f.replace(ld, '').trim() : +f),
          (r = a.substr(u + 1).trim());
      return i;
    },
    cd = function (e) {
      var i = e.indexOf('(') + 1,
        t = e.indexOf(')'),
        r = e.indexOf('(', i);
      return e.substring(i, ~r && r < t ? e.indexOf(')', t + 1) : t);
    },
    dd = function (e) {
      var i = (e + '').split('('),
        t = ve[i[0]];
      return t && i.length > 1 && t.config
        ? t.config.apply(
            null,
            ~e.indexOf('{') ? [fd(i[1])] : cd(e).split(',').map(ka)
          )
        : ve._CE && ad.test(e)
        ? ve._CE('', e)
        : t;
    },
    Ga = function (e) {
      return function (i) {
        return 1 - e(1 - i);
      };
    },
    Qa = function o(e, i) {
      for (var t = e._first, r; t; )
        t instanceof Rt
          ? o(t, i)
          : t.vars.yoyoEase &&
            (!t._yoyo || !t._repeat) &&
            t._yoyo !== i &&
            (t.timeline
              ? o(t.timeline, i)
              : ((r = t._ease),
                (t._ease = t._yEase),
                (t._yEase = r),
                (t._yoyo = i))),
          (t = t._next);
    },
    pr = function (e, i) {
      return (e && (Qe(e) ? e : ve[e] || dd(e))) || i;
    },
    _r = function (e, i, t, r) {
      t === void 0 &&
        (t = function (a) {
          return 1 - i(1 - a);
        }),
        r === void 0 &&
          (r = function (a) {
            return a < 0.5 ? i(a * 2) / 2 : 1 - i((1 - a) * 2) / 2;
          });
      var n = { easeIn: i, easeOut: t, easeInOut: r },
        s;
      return (
        Ot(e, function (u) {
          (ve[u] = zt[u] = n), (ve[(s = u.toLowerCase())] = t);
          for (var a in n)
            ve[
              s + (a === 'easeIn' ? '.in' : a === 'easeOut' ? '.out' : '.inOut')
            ] = ve[u + '.' + a] = n[a];
        }),
        n
      );
    },
    Za = function (e) {
      return function (i) {
        return i < 0.5 ? (1 - e(1 - i * 2)) / 2 : 0.5 + e((i - 0.5) * 2) / 2;
      };
    },
    Ys = function o(e, i, t) {
      var r = i >= 1 ? i : 1,
        n = (t || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
        s = (n / bs) * (Math.asin(1 / r) || 0),
        u = function (c) {
          return c === 1 ? 1 : r * Math.pow(2, -10 * c) * $c((c - s) * n) + 1;
        },
        a =
          e === 'out'
            ? u
            : e === 'in'
            ? function (f) {
                return 1 - u(1 - f);
              }
            : Za(u);
      return (
        (n = bs / n),
        (a.config = function (f, c) {
          return o(e, f, c);
        }),
        a
      );
    },
    Hs = function o(e, i) {
      i === void 0 && (i = 1.70158);
      var t = function (s) {
          return s ? --s * s * ((i + 1) * s + i) + 1 : 0;
        },
        r =
          e === 'out'
            ? t
            : e === 'in'
            ? function (n) {
                return 1 - t(1 - n);
              }
            : Za(t);
      return (
        (r.config = function (n) {
          return o(e, n);
        }),
        r
      );
    };
  Ot('Linear,Quad,Cubic,Quart,Quint,Strong', function (o, e) {
    var i = e < 5 ? e + 1 : e;
    _r(
      o + ',Power' + (i - 1),
      e
        ? function (t) {
            return Math.pow(t, i);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, i);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(t * 2, i) / 2
          : 1 - Math.pow((1 - t) * 2, i) / 2;
      }
    );
  }),
    (ve.Linear.easeNone = ve.none = ve.Linear.easeIn),
    _r('Elastic', Ys('in'), Ys('out'), Ys()),
    (function (o, e) {
      var i = 1 / e,
        t = 2 * i,
        r = 2.5 * i,
        n = function (u) {
          return u < i
            ? o * u * u
            : u < t
            ? o * Math.pow(u - 1.5 / e, 2) + 0.75
            : u < r
            ? o * (u -= 2.25 / e) * u + 0.9375
            : o * Math.pow(u - 2.625 / e, 2) + 0.984375;
        };
      _r(
        'Bounce',
        function (s) {
          return 1 - n(1 - s);
        },
        n
      );
    })(7.5625, 2.75),
    _r('Expo', function (o) {
      return o ? Math.pow(2, 10 * (o - 1)) : 0;
    }),
    _r('Circ', function (o) {
      return -(ga(1 - o * o) - 1);
    }),
    _r('Sine', function (o) {
      return o === 1 ? 1 : -Ic(o * Lc) + 1;
    }),
    _r('Back', Hs('in'), Hs('out'), Hs()),
    (ve.SteppedEase =
      ve.steps =
      zt.SteppedEase =
        {
          config: function (e, i) {
            e === void 0 && (e = 1);
            var t = 1 / e,
              r = e + (i ? 0 : 1),
              n = i ? 1 : 0,
              s = 1 - Pe;
            return function (u) {
              return (((r * kn(0, s, u)) | 0) + n) * t;
            };
          },
        }),
    (Yr.ease = ve['quad.out']),
    Ot(
      'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
      function (o) {
        return (Os += o + ',' + o + 'Params,');
      }
    );
  var Ja = function (e, i) {
      (this.id = Nc++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = i),
        (this.get = i ? i.get : Ea),
        (this.set = i ? i.getSetter : Us);
    },
    jr = (function () {
      function o(i) {
        (this.vars = i),
          (this._delay = +i.delay || 0),
          (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
            ((this._rDelay = i.repeatDelay || 0),
            (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
          (this._ts = 1),
          Wr(this, +i.duration, 1, 1),
          (this.data = i.data),
          nt && ((this._ctx = nt), nt.data.push(this)),
          On || Ht.wake();
      }
      var e = o.prototype;
      return (
        (e.delay = function (t) {
          return t || t === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (e.duration = function (t) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (t) {
          return arguments.length
            ? ((this._dirty = 0),
              Wr(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (t, r) {
          if ((Ur(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              Fo(this, t), !n._dp || n.parent || Ra(n, this);
              n && n.parent;

            )
              n.parent._time !==
                n._start +
                  (n._ts >= 0
                    ? n._tTime / n._ts
                    : (n.totalDuration() - n._tTime) / -n._ts) &&
                n.totalTime(n._tTime, !0),
                (n = n.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && t < this._tDur) ||
                (this._ts < 0 && t > 0) ||
                (!this._tDur && !t)) &&
              vi(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== t ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === Pe) ||
              (!t && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = t), Fa(this, t, r)),
            this
          );
        }),
        (e.time = function (t, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), t + Oa(this)) %
                  (this._dur + this._rDelay) || (t ? this._dur : 0),
                r
              )
            : this._time;
        }),
        (e.totalProgress = function (t, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (e.progress = function (t, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) +
                  Oa(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (e.iteration = function (t, r) {
          var n = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (t - 1) * n, r)
            : this._repeat
            ? Vr(this._tTime, n) + 1
            : 1;
        }),
        (e.timeScale = function (t) {
          if (!arguments.length) return this._rts === -Pe ? 0 : this._rts;
          if (this._rts === t) return this;
          var r =
            this.parent && this._ts ? So(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +t || 0),
            (this._ts = this._ps || t === -Pe ? 0 : this._rts),
            this.totalTime(kn(-this._delay, this._tDur, r), !0),
            Eo(this),
            qc(this)
          );
        }),
        (e.paused = function (t) {
          return arguments.length
            ? (this._ps !== t &&
                ((this._ps = t),
                t
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Ur(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== Pe &&
                        (this._tTime -= Pe)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && vi(r, this, t - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (t) {
          return (
            this._start +
            (Mt(t) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (t) {
          var r = this.parent || this._dp;
          return r
            ? t &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? So(r.rawTime(t), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (t) {
          t === void 0 && (t = Hc);
          var r = At;
          return (
            (At = t),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(t),
              this.totalTime(-0.01, t.suppressEvents)),
            this.data !== 'nested' && t.kill !== !1 && this.kill(),
            (At = r),
            this
          );
        }),
        (e.globalTime = function (t) {
          for (var r = this, n = arguments.length ? t : r.rawTime(); r; )
            (n = r._start + n / (r._ts || 1)), (r = r._dp);
          return !this.parent && this.vars.immediateRender ? -1 : n;
        }),
        (e.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t === 1 / 0 ? -2 : t), Na(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (t) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = t), Na(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        (e.seek = function (t, r) {
          return this.totalTime(Jt(this, t), Mt(r));
        }),
        (e.restart = function (t, r) {
          return this.play().totalTime(t ? -this._delay : 0, Mt(r));
        }),
        (e.play = function (t, r) {
          return t != null && this.seek(t, r), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (t, r) {
          return (
            t != null && this.seek(t || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (t, r) {
          return t != null && this.seek(t, r), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (t) {
          return arguments.length
            ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -Pe : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -Pe), this;
        }),
        (e.isActive = function () {
          var t = this.parent || this._dp,
            r = this._start,
            n;
          return !!(
            !t ||
            (this._ts &&
              this._initted &&
              t.isActive() &&
              (n = t.rawTime(!0)) >= r &&
              n < this.endTime(!0) - Pe)
          );
        }),
        (e.eventCallback = function (t, r, n) {
          var s = this.vars;
          return arguments.length > 1
            ? (r
                ? ((s[t] = r),
                  n && (s[t + 'Params'] = n),
                  t === 'onUpdate' && (this._onUpdate = r))
                : delete s[t],
              this)
            : s[t];
        }),
        (e.then = function (t) {
          var r = this;
          return new Promise(function (n) {
            var s = Qe(t) ? t : Pa,
              u = function () {
                var f = r.then;
                (r.then = null),
                  Qe(s) && (s = s(r)) && (s.then || s === r) && (r.then = f),
                  n(s),
                  (r.then = f);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? u()
              : (r._prom = u);
          });
        }),
        (e.kill = function () {
          An(this);
        }),
        o
      );
    })();
  Zt(jr.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -Pe,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Rt = (function (o) {
    _a(e, o);
    function e(t, r) {
      var n;
      return (
        t === void 0 && (t = {}),
        (n = o.call(this, t) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!t.smoothChildTiming),
        (n.autoRemoveChildren = !!t.autoRemoveChildren),
        (n._sort = Mt(t.sortChildren)),
        We && vi(t.parent || We, Mi(n), r),
        t.reversed && n.reverse(),
        t.paused && n.paused(!0),
        t.scrollTrigger && Ba(Mi(n), t.scrollTrigger),
        n
      );
    }
    var i = e.prototype;
    return (
      (i.to = function (r, n, s) {
        return Fn(0, arguments, this), this;
      }),
      (i.from = function (r, n, s) {
        return Fn(1, arguments, this), this;
      }),
      (i.fromTo = function (r, n, s, u) {
        return Fn(2, arguments, this), this;
      }),
      (i.set = function (r, n, s) {
        return (
          (n.duration = 0),
          (n.parent = this),
          En(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new at(r, n, Jt(this, s), 1),
          this
        );
      }),
      (i.call = function (r, n, s) {
        return vi(this, at.delayedCall(0, r, n), s);
      }),
      (i.staggerTo = function (r, n, s, u, a, f, c) {
        return (
          (s.duration = n),
          (s.stagger = s.stagger || u),
          (s.onComplete = f),
          (s.onCompleteParams = c),
          (s.parent = this),
          new at(r, s, Jt(this, a)),
          this
        );
      }),
      (i.staggerFrom = function (r, n, s, u, a, f, c) {
        return (
          (s.runBackwards = 1),
          (En(s).immediateRender = Mt(s.immediateRender)),
          this.staggerTo(r, n, s, u, a, f, c)
        );
      }),
      (i.staggerFromTo = function (r, n, s, u, a, f, c, h) {
        return (
          (u.startAt = s),
          (En(u).immediateRender = Mt(u.immediateRender)),
          this.staggerTo(r, n, u, a, f, c, h)
        );
      }),
      (i.render = function (r, n, s) {
        var u = this._time,
          a = this._dirty ? this.totalDuration() : this._tDur,
          f = this._dur,
          c = r <= 0 ? 0 : _t(r),
          h = this._zTime < 0 != r < 0 && (this._initted || !f),
          d,
          l,
          _,
          p,
          D,
          y,
          T,
          v,
          b,
          C,
          M,
          E;
        if (
          (this !== We && c > a && r >= 0 && (c = a),
          c !== this._tTime || s || h)
        ) {
          if (
            (u !== this._time &&
              f &&
              ((c += this._time - u), (r += this._time - u)),
            (d = c),
            (b = this._start),
            (v = this._ts),
            (y = !v),
            h && (f || (u = this._zTime), (r || !n) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((M = this._yoyo),
              (D = f + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(D * 100 + r, n, s);
            if (
              ((d = _t(c % D)),
              c === a
                ? ((p = this._repeat), (d = f))
                : ((p = ~~(c / D)),
                  p && p === c / D && ((d = f), p--),
                  d > f && (d = f)),
              (C = Vr(this._tTime, D)),
              !u && this._tTime && C !== p && (C = p),
              M && p & 1 && ((d = f - d), (E = 1)),
              p !== C && !this._lock)
            ) {
              var k = M && C & 1,
                R = k === (M && p & 1);
              if (
                (p < C && (k = !k),
                (u = k ? 0 : f),
                (this._lock = 1),
                (this.render(u || (E ? 0 : _t(p * D)), n, !f)._lock = 0),
                (this._tTime = c),
                !n && this.parent && ti(this, 'onRepeat'),
                this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1),
                (u && u !== this._time) ||
                  y !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((f = this._dur),
                (a = this._tDur),
                R &&
                  ((this._lock = 2),
                  (u = k ? f : -1e-4),
                  this.render(u, !0),
                  this.vars.repeatRefresh && !E && this.invalidate()),
                (this._lock = 0),
                !this._ts && !y)
              )
                return this;
              Qa(this, E);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((T = Gc(this, _t(u), _t(d))), T && (c -= d - (d = T._start))),
            (this._tTime = c),
            (this._time = d),
            (this._act = !v),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (u = 0)),
            !u && d && !n && (ti(this, 'onStart'), this._tTime !== c))
          )
            return this;
          if (d >= u && r >= 0)
            for (l = this._first; l; ) {
              if (
                ((_ = l._next), (l._act || d >= l._start) && l._ts && T !== l)
              ) {
                if (l.parent !== this) return this.render(r, n, s);
                if (
                  (l.render(
                    l._ts > 0
                      ? (d - l._start) * l._ts
                      : (l._dirty ? l.totalDuration() : l._tDur) +
                          (d - l._start) * l._ts,
                    n,
                    s
                  ),
                  d !== this._time || (!this._ts && !y))
                ) {
                  (T = 0), _ && (c += this._zTime = -Pe);
                  break;
                }
              }
              l = _;
            }
          else {
            l = this._last;
            for (var z = r < 0 ? r : d; l; ) {
              if (
                ((_ = l._prev), (l._act || z <= l._end) && l._ts && T !== l)
              ) {
                if (l.parent !== this) return this.render(r, n, s);
                if (
                  (l.render(
                    l._ts > 0
                      ? (z - l._start) * l._ts
                      : (l._dirty ? l.totalDuration() : l._tDur) +
                          (z - l._start) * l._ts,
                    n,
                    s || (At && (l._initted || l._startAt))
                  ),
                  d !== this._time || (!this._ts && !y))
                ) {
                  (T = 0), _ && (c += this._zTime = z ? -Pe : Pe);
                  break;
                }
              }
              l = _;
            }
          }
          if (
            T &&
            !n &&
            (this.pause(),
            (T.render(d >= u ? 0 : -Pe)._zTime = d >= u ? 1 : -1),
            this._ts)
          )
            return (this._start = b), Eo(this), this.render(r, n, s);
          this._onUpdate && !n && ti(this, 'onUpdate', !0),
            ((c === a && this._tTime >= this.totalDuration()) || (!c && u)) &&
              (b === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !f) &&
                  ((c === a && this._ts > 0) || (!c && this._ts < 0)) &&
                  Wi(this, 1),
                !n &&
                  !(r < 0 && !u) &&
                  (c || u || !a) &&
                  (ti(
                    this,
                    c === a && r >= 0 ? 'onComplete' : 'onReverseComplete',
                    !0
                  ),
                  this._prom &&
                    !(c < a && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (i.add = function (r, n) {
        var s = this;
        if ((Oi(n) || (n = Jt(this, n, r)), !(r instanceof jr))) {
          if (vt(r))
            return (
              r.forEach(function (u) {
                return s.add(u, n);
              }),
              this
            );
          if (dt(r)) return this.addLabel(r, n);
          if (Qe(r)) r = at.delayedCall(0, r);
          else return this;
        }
        return this !== r ? vi(this, r, n) : this;
      }),
      (i.getChildren = function (r, n, s, u) {
        r === void 0 && (r = !0),
          n === void 0 && (n = !0),
          s === void 0 && (s = !0),
          u === void 0 && (u = -Gt);
        for (var a = [], f = this._first; f; )
          f._start >= u &&
            (f instanceof at
              ? n && a.push(f)
              : (s && a.push(f),
                r && a.push.apply(a, f.getChildren(!0, n, s)))),
            (f = f._next);
        return a;
      }),
      (i.getById = function (r) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
          if (n[s].vars.id === r) return n[s];
      }),
      (i.remove = function (r) {
        return dt(r)
          ? this.removeLabel(r)
          : Qe(r)
          ? this.killTweensOf(r)
          : (To(this, r),
            r === this._recent && (this._recent = this._last),
            hr(this));
      }),
      (i.totalTime = function (r, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = _t(
                Ht.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            o.prototype.totalTime.call(this, r, n),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (i.addLabel = function (r, n) {
        return (this.labels[r] = Jt(this, n)), this;
      }),
      (i.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (i.addPause = function (r, n, s) {
        var u = at.delayedCall(0, n || Sn, s);
        return (
          (u.data = 'isPause'), (this._hasPause = 1), vi(this, u, Jt(this, r))
        );
      }),
      (i.removePause = function (r) {
        var n = this._first;
        for (r = Jt(this, r); n; )
          n._start === r && n.data === 'isPause' && Wi(n), (n = n._next);
      }),
      (i.killTweensOf = function (r, n, s) {
        for (var u = this.getTweensOf(r, s), a = u.length; a--; )
          ji !== u[a] && u[a].kill(r, n);
        return this;
      }),
      (i.getTweensOf = function (r, n) {
        for (var s = [], u = ei(r), a = this._first, f = Oi(n), c; a; )
          a instanceof at
            ? Xc(a._targets, u) &&
              (f
                ? (!ji || (a._initted && a._ts)) &&
                  a.globalTime(0) <= n &&
                  a.globalTime(a.totalDuration()) > n
                : !n || a.isActive()) &&
              s.push(a)
            : (c = a.getTweensOf(u, n)).length && s.push.apply(s, c),
            (a = a._next);
        return s;
      }),
      (i.tweenTo = function (r, n) {
        n = n || {};
        var s = this,
          u = Jt(s, r),
          a = n,
          f = a.startAt,
          c = a.onStart,
          h = a.onStartParams,
          d = a.immediateRender,
          l,
          _ = at.to(
            s,
            Zt(
              {
                ease: n.ease || 'none',
                lazy: !1,
                immediateRender: !1,
                time: u,
                overwrite: 'auto',
                duration:
                  n.duration ||
                  Math.abs(
                    (u - (f && 'time' in f ? f.time : s._time)) / s.timeScale()
                  ) ||
                  Pe,
                onStart: function () {
                  if ((s.pause(), !l)) {
                    var D =
                      n.duration ||
                      Math.abs(
                        (u - (f && 'time' in f ? f.time : s._time)) /
                          s.timeScale()
                      );
                    _._dur !== D && Wr(_, D, 0, 1).render(_._time, !0, !0),
                      (l = 1);
                  }
                  c && c.apply(_, h || []);
                },
              },
              n
            )
          );
        return d ? _.render(0) : _;
      }),
      (i.tweenFromTo = function (r, n, s) {
        return this.tweenTo(n, Zt({ startAt: { time: Jt(this, r) } }, s));
      }),
      (i.recent = function () {
        return this._recent;
      }),
      (i.nextLabel = function (r) {
        return r === void 0 && (r = this._time), Wa(this, Jt(this, r));
      }),
      (i.previousLabel = function (r) {
        return r === void 0 && (r = this._time), Wa(this, Jt(this, r), 1);
      }),
      (i.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + Pe);
      }),
      (i.shiftChildren = function (r, n, s) {
        s === void 0 && (s = 0);
        for (var u = this._first, a = this.labels, f; u; )
          u._start >= s && ((u._start += r), (u._end += r)), (u = u._next);
        if (n) for (f in a) a[f] >= s && (a[f] += r);
        return hr(this);
      }),
      (i.invalidate = function (r) {
        var n = this._first;
        for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
        return o.prototype.invalidate.call(this, r);
      }),
      (i.clear = function (r) {
        r === void 0 && (r = !0);
        for (var n = this._first, s; n; )
          (s = n._next), this.remove(n), (n = s);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          hr(this)
        );
      }),
      (i.totalDuration = function (r) {
        var n = 0,
          s = this,
          u = s._last,
          a = Gt,
          f,
          c,
          h;
        if (arguments.length)
          return s.timeScale(
            (s._repeat < 0 ? s.duration() : s.totalDuration()) /
              (s.reversed() ? -r : r)
          );
        if (s._dirty) {
          for (h = s.parent; u; )
            (f = u._prev),
              u._dirty && u.totalDuration(),
              (c = u._start),
              c > a && s._sort && u._ts && !s._lock
                ? ((s._lock = 1), (vi(s, u, c - u._delay, 1)._lock = 0))
                : (a = c),
              c < 0 &&
                u._ts &&
                ((n -= c),
                ((!h && !s._dp) || (h && h.smoothChildTiming)) &&
                  ((s._start += c / s._ts), (s._time -= c), (s._tTime -= c)),
                s.shiftChildren(-c, !1, -1 / 0),
                (a = 0)),
              u._end > n && u._ts && (n = u._end),
              (u = f);
          Wr(s, s === We && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
        }
        return s._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((We._ts && (Fa(We, So(r, We)), (Ta = Ht.frame)), Ht.frame >= Sa)) {
          Sa += $t.autoSleep || 120;
          var n = We._first;
          if ((!n || !n._ts) && $t.autoSleep && Ht._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || Ht.sleep();
          }
        }
      }),
      e
    );
  })(jr);
  Zt(Rt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var hd = function (e, i, t, r, n, s, u) {
      var a = new Bt(this._pt, e, i, 0, 1, ol, null, n),
        f = 0,
        c = 0,
        h,
        d,
        l,
        _,
        p,
        D,
        y,
        T;
      for (
        a.b = t,
          a.e = r,
          t += '',
          r += '',
          (y = ~r.indexOf('random(')) && (r = Pn(r)),
          s && ((T = [t, r]), s(T, e, i), (t = T[0]), (r = T[1])),
          d = t.match(Ss) || [];
        (h = Ss.exec(r));

      )
        (_ = h[0]),
          (p = r.substring(f, h.index)),
          l ? (l = (l + 1) % 5) : p.substr(-5) === 'rgba(' && (l = 1),
          _ !== d[c++] &&
            ((D = parseFloat(d[c - 1]) || 0),
            (a._pt = {
              _next: a._pt,
              p: p || c === 1 ? p : ',',
              s: D,
              c: _.charAt(1) === '=' ? Xr(D, _) - D : parseFloat(_) - D,
              m: l && l < 4 ? Math.round : 0,
            }),
            (f = Ss.lastIndex));
      return (
        (a.c = f < r.length ? r.substring(f, r.length) : ''),
        (a.fp = u),
        (va.test(r) || y) && (a.e = 0),
        (this._pt = a),
        a
      );
    },
    Xs = function (e, i, t, r, n, s, u, a, f, c) {
      Qe(r) && (r = r(n || 0, e, s));
      var h = e[i],
        d =
          t !== 'get'
            ? t
            : Qe(h)
            ? f
              ? e[
                  i.indexOf('set') || !Qe(e['get' + i.substr(3)])
                    ? i
                    : 'get' + i.substr(3)
                ](f)
              : e[i]()
            : h,
        l = Qe(h) ? (f ? md : rl) : qs,
        _;
      if (
        (dt(r) &&
          (~r.indexOf('random(') && (r = Pn(r)),
          r.charAt(1) === '=' &&
            ((_ = Xr(d, r) + (xt(d) || 0)), (_ || _ === 0) && (r = _))),
        !c || d !== r || Vs)
      )
        return !isNaN(d * r) && r !== ''
          ? ((_ = new Bt(
              this._pt,
              e,
              i,
              +d || 0,
              r - (d || 0),
              typeof h == 'boolean' ? vd : nl,
              0,
              l
            )),
            f && (_.fp = f),
            u && _.modifier(u, this, e),
            (this._pt = _))
          : (!h && !(i in e) && ks(i, r),
            hd.call(this, e, i, d, r, l, a || $t.stringFilter, f));
    },
    pd = function (e, i, t, r, n) {
      if (
        (Qe(e) && (e = Rn(e, n, i, t, r)),
        !yi(e) || (e.style && e.nodeType) || vt(e) || ma(e))
      )
        return dt(e) ? Rn(e, n, i, t, r) : e;
      var s = {},
        u;
      for (u in e) s[u] = Rn(e[u], n, i, t, r);
      return s;
    },
    el = function (e, i, t, r, n, s) {
      var u, a, f, c;
      if (
        Yt[e] &&
        (u = new Yt[e]()).init(
          n,
          u.rawVars ? i[e] : pd(i[e], r, n, s, t),
          t,
          r,
          s
        ) !== !1 &&
        ((t._pt = a = new Bt(t._pt, n, e, 0, 1, u.render, u, 0, u.priority)),
        t !== qr)
      )
        for (f = t._ptLookup[t._targets.indexOf(n)], c = u._props.length; c--; )
          f[u._props[c]] = a;
      return u;
    },
    ji,
    Vs,
    Ws = function o(e, i, t) {
      var r = e.vars,
        n = r.ease,
        s = r.startAt,
        u = r.immediateRender,
        a = r.lazy,
        f = r.onUpdate,
        c = r.onUpdateParams,
        h = r.callbackScope,
        d = r.runBackwards,
        l = r.yoyoEase,
        _ = r.keyframes,
        p = r.autoRevert,
        D = e._dur,
        y = e._startAt,
        T = e._targets,
        v = e.parent,
        b = v && v.data === 'nested' ? v.vars.targets : T,
        C = e._overwrite === 'auto' && !ws,
        M = e.timeline,
        E,
        k,
        R,
        z,
        L,
        Y,
        X,
        G,
        W,
        I,
        H,
        V,
        O;
      if (
        (M && (!_ || !n) && (n = 'none'),
        (e._ease = pr(n, Yr.ease)),
        (e._yEase = l ? Ga(pr(l === !0 ? n : l, Yr.ease)) : 0),
        l &&
          e._yoyo &&
          !e._repeat &&
          ((l = e._yEase), (e._yEase = e._ease), (e._ease = l)),
        (e._from = !M && !!r.runBackwards),
        !M || (_ && !r.stagger))
      ) {
        if (
          ((G = T[0] ? cr(T[0]).harness : 0),
          (V = G && r[G.prop]),
          (E = Co(r, Ps)),
          y &&
            (y._zTime < 0 && y.progress(1),
            i < 0 && d && u && !p
              ? y.render(-1, !0)
              : y.revert(d && D ? xo : Yc),
            (y._lazy = 0)),
          s)
        ) {
          if (
            (Wi(
              (e._startAt = at.set(
                T,
                Zt(
                  {
                    data: 'isStart',
                    overwrite: !1,
                    parent: v,
                    immediateRender: !0,
                    lazy: Mt(a),
                    startAt: null,
                    delay: 0,
                    onUpdate: f,
                    onUpdateParams: c,
                    callbackScope: h,
                    stagger: 0,
                  },
                  s
                )
              ))
            ),
            (e._startAt._dp = 0),
            i < 0 && (At || (!u && !p)) && e._startAt.revert(xo),
            u && D && i <= 0 && t <= 0)
          ) {
            i && (e._zTime = i);
            return;
          }
        } else if (d && D && !y) {
          if (
            (i && (u = !1),
            (R = Zt(
              {
                overwrite: !1,
                data: 'isFromStart',
                lazy: u && Mt(a),
                immediateRender: u,
                stagger: 0,
                parent: v,
              },
              E
            )),
            V && (R[G.prop] = V),
            Wi((e._startAt = at.set(T, R))),
            (e._startAt._dp = 0),
            i < 0 && (At ? e._startAt.revert(xo) : e._startAt.render(-1, !0)),
            (e._zTime = i),
            !u)
          )
            o(e._startAt, Pe, Pe);
          else if (!i) return;
        }
        for (
          e._pt = e._ptCache = 0, a = (D && Mt(a)) || (a && !D), k = 0;
          k < T.length;
          k++
        ) {
          if (
            ((L = T[k]),
            (X = L._gsap || Rs(T)[k]._gsap),
            (e._ptLookup[k] = I = {}),
            As[X.id] && Vi.length && bo(),
            (H = b === T ? k : b.indexOf(L)),
            G &&
              (W = new G()).init(L, V || E, e, H, b) !== !1 &&
              ((e._pt = z =
                new Bt(e._pt, L, W.name, 0, 1, W.render, W, 0, W.priority)),
              W._props.forEach(function (w) {
                I[w] = z;
              }),
              W.priority && (Y = 1)),
            !G || V)
          )
            for (R in E)
              Yt[R] && (W = el(R, E, e, H, L, b))
                ? W.priority && (Y = 1)
                : (I[R] = z =
                    Xs.call(e, L, R, 'get', E[R], H, b, 0, r.stringFilter));
          e._op && e._op[k] && e.kill(L, e._op[k]),
            C &&
              e._pt &&
              ((ji = e),
              We.killTweensOf(L, I, e.globalTime(i)),
              (O = !e.parent),
              (ji = 0)),
            e._pt && a && (As[X.id] = 1);
        }
        Y && sl(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = f),
        (e._initted = (!e._op || e._pt) && !O),
        _ && i <= 0 && M.render(Gt, !0, !0);
    },
    _d = function (e, i, t, r, n, s, u) {
      var a = ((e._pt && e._ptCache) || (e._ptCache = {}))[i],
        f,
        c,
        h,
        d;
      if (!a)
        for (
          a = e._ptCache[i] = [], h = e._ptLookup, d = e._targets.length;
          d--;

        ) {
          if (((f = h[d][i]), f && f.d && f.d._pt))
            for (f = f.d._pt; f && f.p !== i && f.fp !== i; ) f = f._next;
          if (!f) return (Vs = 1), (e.vars[i] = '+=0'), Ws(e, u), (Vs = 0), 1;
          a.push(f);
        }
      for (d = a.length; d--; )
        (c = a[d]),
          (f = c._pt || c),
          (f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + s * f.c),
          (f.c = t - f.s),
          c.e && (c.e = et(t) + xt(c.e)),
          c.b && (c.b = f.s + xt(c.b));
    },
    gd = function (e, i) {
      var t = e[0] ? cr(e[0]).harness : 0,
        r = t && t.aliases,
        n,
        s,
        u,
        a;
      if (!r) return i;
      n = dr({}, i);
      for (s in r)
        if (s in n)
          for (a = r[s].split(','), u = a.length; u--; ) n[a[u]] = n[s];
      return n;
    },
    Dd = function (e, i, t, r) {
      var n = i.ease || r || 'power1.inOut',
        s,
        u;
      if (vt(i))
        (u = t[e] || (t[e] = [])),
          i.forEach(function (a, f) {
            return u.push({ t: (f / (i.length - 1)) * 100, v: a, e: n });
          });
      else
        for (s in i)
          (u = t[s] || (t[s] = [])),
            s === 'ease' || u.push({ t: parseFloat(e), v: i[s], e: n });
    },
    Rn = function (e, i, t, r, n) {
      return Qe(e)
        ? e.call(i, t, r, n)
        : dt(e) && ~e.indexOf('random(')
        ? Pn(e)
        : e;
    },
    tl = Os + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
    il = {};
  Ot(tl + ',id,stagger,delay,duration,paused,scrollTrigger', function (o) {
    return (il[o] = 1);
  });
  var at = (function (o) {
    _a(e, o);
    function e(t, r, n, s) {
      var u;
      typeof r == 'number' && ((n.duration = r), (r = n), (n = null)),
        (u = o.call(this, s ? r : En(r)) || this);
      var a = u.vars,
        f = a.duration,
        c = a.delay,
        h = a.immediateRender,
        d = a.stagger,
        l = a.overwrite,
        _ = a.keyframes,
        p = a.defaults,
        D = a.scrollTrigger,
        y = a.yoyoEase,
        T = r.parent || We,
        v = (vt(t) || ma(t) ? Oi(t[0]) : 'length' in r) ? [t] : ei(t),
        b,
        C,
        M,
        E,
        k,
        R,
        z,
        L;
      if (
        ((u._targets = v.length
          ? Rs(v)
          : vo(
              'GSAP target ' + t + ' not found. https://greensock.com',
              !$t.nullTargetWarn
            ) || []),
        (u._ptLookup = []),
        (u._overwrite = l),
        _ || d || mo(f) || mo(c))
      ) {
        if (
          ((r = u.vars),
          (b = u.timeline =
            new Rt({
              data: 'nested',
              defaults: p || {},
              targets: T && T.data === 'nested' ? T.vars.targets : v,
            })),
          b.kill(),
          (b.parent = b._dp = Mi(u)),
          (b._start = 0),
          d || mo(f) || mo(c))
        ) {
          if (((E = v.length), (z = d && za(d)), yi(d)))
            for (k in d) ~tl.indexOf(k) && (L || (L = {}), (L[k] = d[k]));
          for (C = 0; C < E; C++)
            (M = Co(r, il)),
              (M.stagger = 0),
              y && (M.yoyoEase = y),
              L && dr(M, L),
              (R = v[C]),
              (M.duration = +Rn(f, Mi(u), C, R, v)),
              (M.delay = (+Rn(c, Mi(u), C, R, v) || 0) - u._delay),
              !d &&
                E === 1 &&
                M.delay &&
                ((u._delay = c = M.delay), (u._start += c), (M.delay = 0)),
              b.to(R, M, z ? z(C, R, v) : 0),
              (b._ease = ve.none);
          b.duration() ? (f = c = 0) : (u.timeline = 0);
        } else if (_) {
          En(Zt(b.vars.defaults, { ease: 'none' })),
            (b._ease = pr(_.ease || r.ease || 'none'));
          var Y = 0,
            X,
            G,
            W;
          if (vt(_))
            _.forEach(function (I) {
              return b.to(v, I, '>');
            }),
              b.duration();
          else {
            M = {};
            for (k in _)
              k === 'ease' || k === 'easeEach' || Dd(k, _[k], M, _.easeEach);
            for (k in M)
              for (
                X = M[k].sort(function (I, H) {
                  return I.t - H.t;
                }),
                  Y = 0,
                  C = 0;
                C < X.length;
                C++
              )
                (G = X[C]),
                  (W = {
                    ease: G.e,
                    duration: ((G.t - (C ? X[C - 1].t : 0)) / 100) * f,
                  }),
                  (W[k] = G.v),
                  b.to(v, W, Y),
                  (Y += W.duration);
            b.duration() < f && b.to({}, { duration: f - b.duration() });
          }
        }
        f || u.duration((f = b.duration()));
      } else u.timeline = 0;
      return (
        l === !0 && !ws && ((ji = Mi(u)), We.killTweensOf(v), (ji = 0)),
        vi(T, Mi(u), n),
        r.reversed && u.reverse(),
        r.paused && u.paused(!0),
        (h ||
          (!f &&
            !_ &&
            u._start === _t(T._time) &&
            Mt(h) &&
            Uc(Mi(u)) &&
            T.data !== 'nested')) &&
          ((u._tTime = -Pe), u.render(Math.max(0, -c) || 0)),
        D && Ba(Mi(u), D),
        u
      );
    }
    var i = e.prototype;
    return (
      (i.render = function (r, n, s) {
        var u = this._time,
          a = this._tDur,
          f = this._dur,
          c = r < 0,
          h = r > a - Pe && !c ? a : r < Pe ? 0 : r,
          d,
          l,
          _,
          p,
          D,
          y,
          T,
          v,
          b;
        if (!f) Kc(this, r, n, s);
        else if (
          h !== this._tTime ||
          !r ||
          s ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c)
        ) {
          if (((d = h), (v = this.timeline), this._repeat)) {
            if (((p = f + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(p * 100 + r, n, s);
            if (
              ((d = _t(h % p)),
              h === a
                ? ((_ = this._repeat), (d = f))
                : ((_ = ~~(h / p)),
                  _ && _ === h / p && ((d = f), _--),
                  d > f && (d = f)),
              (y = this._yoyo && _ & 1),
              y && ((b = this._yEase), (d = f - d)),
              (D = Vr(this._tTime, p)),
              d === u && !s && this._initted)
            )
              return (this._tTime = h), this;
            _ !== D &&
              (v && this._yEase && Qa(v, y),
              this.vars.repeatRefresh &&
                !y &&
                !this._lock &&
                ((this._lock = s = 1),
                (this.render(_t(p * _), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (La(this, c ? r : d, s, n, h)) return (this._tTime = 0), this;
            if (u !== this._time) return this;
            if (f !== this._dur) return this.render(r, n, s);
          }
          if (
            ((this._tTime = h),
            (this._time = d),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = T = (b || this._ease)(d / f)),
            this._from && (this.ratio = T = 1 - T),
            d && !u && !n && (ti(this, 'onStart'), this._tTime !== h))
          )
            return this;
          for (l = this._pt; l; ) l.r(T, l.d), (l = l._next);
          (v &&
            v.render(
              r < 0 ? r : !d && y ? -Pe : v._dur * v._ease(d / this._dur),
              n,
              s
            )) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (c && Bs(this, r, n, s), ti(this, 'onUpdate')),
            this._repeat &&
              _ !== D &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              ti(this, 'onRepeat'),
            (h === this._tDur || !h) &&
              this._tTime === h &&
              (c && !this._onUpdate && Bs(this, r, !0, !0),
              (r || !f) &&
                ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
                Wi(this, 1),
              !n &&
                !(c && !u) &&
                (h || u || y) &&
                (ti(this, h === a ? 'onComplete' : 'onReverseComplete', !0),
                this._prom &&
                  !(h < a && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (i.targets = function () {
        return this._targets;
      }),
      (i.invalidate = function (r) {
        return (
          (!r || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(r),
          o.prototype.invalidate.call(this, r)
        );
      }),
      (i.resetTo = function (r, n, s, u) {
        On || Ht.wake(), this._ts || this.play();
        var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          f;
        return (
          this._initted || Ws(this, a),
          (f = this._ease(a / this._dur)),
          _d(this, r, n, s, u, f, a)
            ? this.resetTo(r, n, s, u)
            : (Fo(this, 0),
              this.parent ||
                Ma(
                  this._dp,
                  this,
                  '_first',
                  '_last',
                  this._dp._sort ? '_start' : 0
                ),
              this.render(0))
        );
      }),
      (i.kill = function (r, n) {
        if ((n === void 0 && (n = 'all'), !r && (!n || n === 'all')))
          return (this._lazy = this._pt = 0), this.parent ? An(this) : this;
        if (this.timeline) {
          var s = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, n, ji && ji.vars.overwrite !== !0)
              ._first || An(this),
            this.parent &&
              s !== this.timeline.totalDuration() &&
              Wr(this, (this._dur * this.timeline._tDur) / s, 0, 1),
            this
          );
        }
        var u = this._targets,
          a = r ? ei(r) : u,
          f = this._ptLookup,
          c = this._pt,
          h,
          d,
          l,
          _,
          p,
          D,
          y;
        if ((!n || n === 'all') && Wc(u, a))
          return n === 'all' && (this._pt = 0), An(this);
        for (
          h = this._op = this._op || [],
            n !== 'all' &&
              (dt(n) &&
                ((p = {}),
                Ot(n, function (T) {
                  return (p[T] = 1);
                }),
                (n = p)),
              (n = gd(u, n))),
            y = u.length;
          y--;

        )
          if (~a.indexOf(u[y])) {
            (d = f[y]),
              n === 'all'
                ? ((h[y] = n), (_ = d), (l = {}))
                : ((l = h[y] = h[y] || {}), (_ = n));
            for (p in _)
              (D = d && d[p]),
                D &&
                  ((!('kill' in D.d) || D.d.kill(p) === !0) &&
                    To(this, D, '_pt'),
                  delete d[p]),
                l !== 'all' && (l[p] = 1);
          }
        return this._initted && !this._pt && c && An(this), this;
      }),
      (e.to = function (r, n) {
        return new e(r, n, arguments[2]);
      }),
      (e.from = function (r, n) {
        return Fn(1, arguments);
      }),
      (e.delayedCall = function (r, n, s, u) {
        return new e(n, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: n,
          onReverseComplete: n,
          onCompleteParams: s,
          onReverseCompleteParams: s,
          callbackScope: u,
        });
      }),
      (e.fromTo = function (r, n, s) {
        return Fn(2, arguments);
      }),
      (e.set = function (r, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(r, n);
      }),
      (e.killTweensOf = function (r, n, s) {
        return We.killTweensOf(r, n, s);
      }),
      e
    );
  })(jr);
  Zt(at.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Ot('staggerTo,staggerFrom,staggerFromTo', function (o) {
      at[o] = function () {
        var e = new Rt(),
          i = Ns.call(arguments, 0);
        return i.splice(o === 'staggerFromTo' ? 5 : 4, 0, 0), e[o].apply(e, i);
      };
    });
  var qs = function (e, i, t) {
      return (e[i] = t);
    },
    rl = function (e, i, t) {
      return e[i](t);
    },
    md = function (e, i, t, r) {
      return e[i](r.fp, t);
    },
    yd = function (e, i, t) {
      return e.setAttribute(i, t);
    },
    Us = function (e, i) {
      return Qe(e[i]) ? rl : Cs(e[i]) && e.setAttribute ? yd : qs;
    },
    nl = function (e, i) {
      return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e6) / 1e6, i);
    },
    vd = function (e, i) {
      return i.set(i.t, i.p, !!(i.s + i.c * e), i);
    },
    ol = function (e, i) {
      var t = i._pt,
        r = '';
      if (!e && i.b) r = i.b;
      else if (e === 1 && i.e) r = i.e;
      else {
        for (; t; )
          (r =
            t.p +
            (t.m
              ? t.m(t.s + t.c * e)
              : Math.round((t.s + t.c * e) * 1e4) / 1e4) +
            r),
            (t = t._next);
        r += i.c;
      }
      i.set(i.t, i.p, r, i);
    },
    js = function (e, i) {
      for (var t = i._pt; t; ) t.r(e, t.d), (t = t._next);
    },
    xd = function (e, i, t, r) {
      for (var n = this._pt, s; n; )
        (s = n._next), n.p === r && n.modifier(e, i, t), (n = s);
    },
    wd = function (e) {
      for (var i = this._pt, t, r; i; )
        (r = i._next),
          (i.p === e && !i.op) || i.op === e
            ? To(this, i, '_pt')
            : i.dep || (t = 1),
          (i = r);
      return !t;
    },
    bd = function (e, i, t, r) {
      r.mSet(e, i, r.m.call(r.tween, t, r.mt), r);
    },
    sl = function (e) {
      for (var i = e._pt, t, r, n, s; i; ) {
        for (t = i._next, r = n; r && r.pr > i.pr; ) r = r._next;
        (i._prev = r ? r._prev : s) ? (i._prev._next = i) : (n = i),
          (i._next = r) ? (r._prev = i) : (s = i),
          (i = t);
      }
      e._pt = n;
    },
    Bt = (function () {
      function o(i, t, r, n, s, u, a, f, c) {
        (this.t = t),
          (this.s = n),
          (this.c = s),
          (this.p = r),
          (this.r = u || nl),
          (this.d = a || this),
          (this.set = f || qs),
          (this.pr = c || 0),
          (this._next = i),
          i && (i._prev = this);
      }
      var e = o.prototype;
      return (
        (e.modifier = function (t, r, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = bd),
            (this.m = t),
            (this.mt = n),
            (this.tween = r);
        }),
        o
      );
    })();
  Ot(
    Os +
      'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
    function (o) {
      return (Ps[o] = 1);
    }
  ),
    (zt.TweenMax = zt.TweenLite = at),
    (zt.TimelineLite = zt.TimelineMax = Rt),
    (We = new Rt({
      sortChildren: !1,
      defaults: Yr,
      autoRemoveChildren: !0,
      id: 'root',
      smoothChildTiming: !0,
    })),
    ($t.stringFilter = Ka);
  var Kr = [],
    ko = {},
    Cd = [],
    ul = 0,
    Ks = function (e) {
      return (ko[e] || Cd).map(function (i) {
        return i();
      });
    },
    Gs = function () {
      var e = Date.now(),
        i = [];
      e - ul > 2 &&
        (Ks('matchMediaInit'),
        Kr.forEach(function (t) {
          var r = t.queries,
            n = t.conditions,
            s,
            u,
            a,
            f;
          for (u in r)
            (s = Qt.matchMedia(r[u]).matches),
              s && (a = 1),
              s !== n[u] && ((n[u] = s), (f = 1));
          f && (t.revert(), a && i.push(t));
        }),
        Ks('matchMediaRevert'),
        i.forEach(function (t) {
          return t.onMatch(t);
        }),
        (ul = e),
        Ks('matchMedia'));
    },
    al = (function () {
      function o(i, t) {
        (this.selector = t && Is(t)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          i && this.add(i);
      }
      var e = o.prototype;
      return (
        (e.add = function (t, r, n) {
          Qe(t) && ((n = r), (r = t), (t = Qe));
          var s = this,
            u = function () {
              var f = nt,
                c = s.selector,
                h;
              return (
                f && f !== s && f.data.push(s),
                n && (s.selector = Is(n)),
                (nt = s),
                (h = r.apply(s, arguments)),
                Qe(h) && s._r.push(h),
                (nt = f),
                (s.selector = c),
                (s.isReverted = !1),
                h
              );
            };
          return (s.last = u), t === Qe ? u(s) : t ? (s[t] = u) : u;
        }),
        (e.ignore = function (t) {
          var r = nt;
          (nt = null), t(this), (nt = r);
        }),
        (e.getTweens = function () {
          var t = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof o
                ? t.push.apply(t, r.getTweens())
                : r instanceof at &&
                    !(r.parent && r.parent.data === 'nested') &&
                    t.push(r);
            }),
            t
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (t, r) {
          var n = this;
          if (t) {
            var s = this.getTweens();
            this.data.forEach(function (a) {
              a.data === 'isFlip' &&
                (a.revert(),
                a.getChildren(!0, !0, !1).forEach(function (f) {
                  return s.splice(s.indexOf(f), 1);
                }));
            }),
              s
                .map(function (a) {
                  return { g: a.globalTime(0), t: a };
                })
                .sort(function (a, f) {
                  return f.g - a.g || -1;
                })
                .forEach(function (a) {
                  return a.t.revert(t);
                }),
              this.data.forEach(function (a) {
                return !(a instanceof jr) && a.revert && a.revert(t);
              }),
              this._r.forEach(function (a) {
                return a(t, n);
              }),
              (this.isReverted = !0);
          } else
            this.data.forEach(function (a) {
              return a.kill && a.kill();
            });
          if ((this.clear(), r)) {
            var u = Kr.indexOf(this);
            !!~u && Kr.splice(u, 1);
          }
        }),
        (e.revert = function (t) {
          this.kill(t || {});
        }),
        o
      );
    })(),
    Td = (function () {
      function o(i) {
        (this.contexts = []), (this.scope = i);
      }
      var e = o.prototype;
      return (
        (e.add = function (t, r, n) {
          yi(t) || (t = { matches: t });
          var s = new al(0, n || this.scope),
            u = (s.conditions = {}),
            a,
            f,
            c;
          this.contexts.push(s), (r = s.add('onMatch', r)), (s.queries = t);
          for (f in t)
            f === 'all'
              ? (c = 1)
              : ((a = Qt.matchMedia(t[f])),
                a &&
                  (Kr.indexOf(s) < 0 && Kr.push(s),
                  (u[f] = a.matches) && (c = 1),
                  a.addListener
                    ? a.addListener(Gs)
                    : a.addEventListener('change', Gs)));
          return c && r(s), this;
        }),
        (e.revert = function (t) {
          this.kill(t || {});
        }),
        (e.kill = function (t) {
          this.contexts.forEach(function (r) {
            return r.kill(t, !0);
          });
        }),
        o
      );
    })(),
    Po = {
      registerPlugin: function () {
        for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++)
          i[t] = arguments[t];
        i.forEach(function (r) {
          return sd(r);
        });
      },
      timeline: function (e) {
        return new Rt(e);
      },
      getTweensOf: function (e, i) {
        return We.getTweensOf(e, i);
      },
      getProperty: function (e, i, t, r) {
        dt(e) && (e = ei(e)[0]);
        var n = cr(e || {}).get,
          s = t ? Pa : ka;
        return (
          t === 'native' && (t = ''),
          e &&
            (i
              ? s(((Yt[i] && Yt[i].get) || n)(e, i, t, r))
              : function (u, a, f) {
                  return s(((Yt[u] && Yt[u].get) || n)(e, u, a, f));
                })
        );
      },
      quickSetter: function (e, i, t) {
        if (((e = ei(e)), e.length > 1)) {
          var r = e.map(function (c) {
              return Xt.quickSetter(c, i, t);
            }),
            n = r.length;
          return function (c) {
            for (var h = n; h--; ) r[h](c);
          };
        }
        e = e[0] || {};
        var s = Yt[i],
          u = cr(e),
          a = (u.harness && (u.harness.aliases || {})[i]) || i,
          f = s
            ? function (c) {
                var h = new s();
                (qr._pt = 0),
                  h.init(e, t ? c + t : c, qr, 0, [e]),
                  h.render(1, h),
                  qr._pt && js(1, qr);
              }
            : u.set(e, a);
        return s
          ? f
          : function (c) {
              return f(e, a, t ? c + t : c, u, 1);
            };
      },
      quickTo: function (e, i, t) {
        var r,
          n = Xt.to(
            e,
            dr(((r = {}), (r[i] = '+=0.1'), (r.paused = !0), r), t || {})
          ),
          s = function (a, f, c) {
            return n.resetTo(i, a, f, c);
          };
        return (s.tween = n), s;
      },
      isTweening: function (e) {
        return We.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = pr(e.ease, Yr.ease)), Aa(Yr, e || {});
      },
      config: function (e) {
        return Aa($t, e || {});
      },
      registerEffect: function (e) {
        var i = e.name,
          t = e.effect,
          r = e.plugins,
          n = e.defaults,
          s = e.extendTimeline;
        (r || '').split(',').forEach(function (u) {
          return (
            u &&
            !Yt[u] &&
            !zt[u] &&
            vo(i + ' effect requires ' + u + ' plugin.')
          );
        }),
          (Ms[i] = function (u, a, f) {
            return t(ei(u), Zt(a || {}, n), f);
          }),
          s &&
            (Rt.prototype[i] = function (u, a, f) {
              return this.add(Ms[i](u, yi(a) ? a : (f = a) && {}, this), f);
            });
      },
      registerEase: function (e, i) {
        ve[e] = pr(i);
      },
      parseEase: function (e, i) {
        return arguments.length ? pr(e, i) : ve;
      },
      getById: function (e) {
        return We.getById(e);
      },
      exportRoot: function (e, i) {
        e === void 0 && (e = {});
        var t = new Rt(e),
          r,
          n;
        for (
          t.smoothChildTiming = Mt(e.smoothChildTiming),
            We.remove(t),
            t._dp = 0,
            t._time = t._tTime = We._time,
            r = We._first;
          r;

        )
          (n = r._next),
            (i ||
              !(
                !r._dur &&
                r instanceof at &&
                r.vars.onComplete === r._targets[0]
              )) &&
              vi(t, r, r._start - r._delay),
            (r = n);
        return vi(We, t, 0), t;
      },
      context: function (e, i) {
        return e ? new al(e, i) : nt;
      },
      matchMedia: function (e) {
        return new Td(e);
      },
      matchMediaRefresh: function () {
        return (
          Kr.forEach(function (e) {
            var i = e.conditions,
              t,
              r;
            for (r in i) i[r] && ((i[r] = !1), (t = 1));
            t && e.revert();
          }) || Gs()
        );
      },
      addEventListener: function (e, i) {
        var t = ko[e] || (ko[e] = []);
        ~t.indexOf(i) || t.push(i);
      },
      removeEventListener: function (e, i) {
        var t = ko[e],
          r = t && t.indexOf(i);
        r >= 0 && t.splice(r, 1);
      },
      utils: {
        wrap: rd,
        wrapYoyo: nd,
        distribute: za,
        random: Ha,
        snap: Ya,
        normalize: id,
        getUnit: xt,
        clamp: Zc,
        splitColor: qa,
        toArray: ei,
        selector: Is,
        mapRange: Va,
        pipe: ed,
        unitize: td,
        interpolate: od,
        shuffle: $a,
      },
      install: ba,
      effects: Ms,
      ticker: Ht,
      updateRoot: Rt.updateRoot,
      plugins: Yt,
      globalTimeline: We,
      core: {
        PropTween: Bt,
        globals: Ca,
        Tween: at,
        Timeline: Rt,
        Animation: jr,
        getCache: cr,
        _removeLinkedListItem: To,
        reverting: function () {
          return At;
        },
        context: function (e) {
          return e && nt && (nt.data.push(e), (e._ctx = nt)), nt;
        },
        suppressOverwrites: function (e) {
          return (ws = e);
        },
      },
    };
  Ot('to,from,fromTo,delayedCall,set,killTweensOf', function (o) {
    return (Po[o] = at[o]);
  }),
    Ht.add(Rt.updateRoot),
    (qr = Po.to({}, { duration: 0 }));
  var Sd = function (e, i) {
      for (var t = e._pt; t && t.p !== i && t.op !== i && t.fp !== i; )
        t = t._next;
      return t;
    },
    Ed = function (e, i) {
      var t = e._targets,
        r,
        n,
        s;
      for (r in i)
        for (n = t.length; n--; )
          (s = e._ptLookup[n][r]),
            s &&
              (s = s.d) &&
              (s._pt && (s = Sd(s, r)),
              s && s.modifier && s.modifier(i[r], e, t[n], r));
    },
    Qs = function (e, i) {
      return {
        name: e,
        rawVars: 1,
        init: function (r, n, s) {
          s._onInit = function (u) {
            var a, f;
            if (
              (dt(n) &&
                ((a = {}),
                Ot(n, function (c) {
                  return (a[c] = 1);
                }),
                (n = a)),
              i)
            ) {
              a = {};
              for (f in n) a[f] = i(n[f]);
              n = a;
            }
            Ed(u, n);
          };
        },
      };
    },
    Xt =
      Po.registerPlugin(
        {
          name: 'attr',
          init: function (e, i, t, r, n) {
            var s, u, a;
            this.tween = t;
            for (s in i)
              (a = e.getAttribute(s) || ''),
                (u = this.add(
                  e,
                  'setAttribute',
                  (a || 0) + '',
                  i[s],
                  r,
                  n,
                  0,
                  0,
                  s
                )),
                (u.op = s),
                (u.b = a),
                this._props.push(s);
          },
          render: function (e, i) {
            for (var t = i._pt; t; )
              At ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d), (t = t._next);
          },
        },
        {
          name: 'endArray',
          init: function (e, i) {
            for (var t = i.length; t--; )
              this.add(e, t, e[t] || 0, i[t], 0, 0, 0, 0, 0, 1);
          },
        },
        Qs('roundProps', $s),
        Qs('modifiers'),
        Qs('snap', Ya)
      ) || Po;
  (at.version = Rt.version = Xt.version = '3.11.3'),
    (wa = 1),
    Da() && Ur(),
    ve.Power0,
    ve.Power1,
    ve.Power2,
    ve.Power3,
    ve.Power4,
    ve.Linear,
    ve.Quad,
    ve.Cubic,
    ve.Quart,
    ve.Quint,
    ve.Strong,
    ve.Elastic,
    ve.Back,
    ve.SteppedEase,
    ve.Bounce,
    ve.Sine,
    ve.Expo,
    ve.Circ;
  /*!
   * CSSPlugin 3.11.3
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var ll,
    Ki,
    Gr,
    Zs,
    gr,
    fl,
    Js,
    Fd = function () {
      return typeof window != 'undefined';
    },
    Ri = {},
    Dr = 180 / Math.PI,
    Qr = Math.PI / 180,
    Zr = Math.atan2,
    cl = 1e8,
    eu = /([A-Z])/g,
    kd = /(left|right|width|margin|padding|x)/i,
    Pd = /[\s,\(]\S/,
    Bi = {
      autoAlpha: 'opacity,visibility',
      scale: 'scaleX,scaleY',
      alpha: 'opacity',
    },
    tu = function (e, i) {
      return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u, i);
    },
    Ad = function (e, i) {
      return i.set(
        i.t,
        i.p,
        e === 1 ? i.e : Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u,
        i
      );
    },
    Md = function (e, i) {
      return i.set(
        i.t,
        i.p,
        e ? Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u : i.b,
        i
      );
    },
    Od = function (e, i) {
      var t = i.s + i.c * e;
      i.set(i.t, i.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + i.u, i);
    },
    dl = function (e, i) {
      return i.set(i.t, i.p, e ? i.e : i.b, i);
    },
    hl = function (e, i) {
      return i.set(i.t, i.p, e !== 1 ? i.b : i.e, i);
    },
    Rd = function (e, i, t) {
      return (e.style[i] = t);
    },
    Bd = function (e, i, t) {
      return e.style.setProperty(i, t);
    },
    Ld = function (e, i, t) {
      return (e._gsap[i] = t);
    },
    Nd = function (e, i, t) {
      return (e._gsap.scaleX = e._gsap.scaleY = t);
    },
    Id = function (e, i, t, r, n) {
      var s = e._gsap;
      (s.scaleX = s.scaleY = t), s.renderTransform(n, s);
    },
    $d = function (e, i, t, r, n) {
      var s = e._gsap;
      (s[i] = t), s.renderTransform(n, s);
    },
    qe = 'transform',
    ai = qe + 'Origin',
    zd = function (e, i) {
      var t = this,
        r = this.target,
        n = r.style;
      if (e in Ri) {
        if (
          ((this.tfm = this.tfm || {}),
          e !== 'transform' &&
            ((e = Bi[e] || e),
            ~e.indexOf(',')
              ? e.split(',').forEach(function (s) {
                  return (t.tfm[s] = Li(r, s));
                })
              : (this.tfm[e] = r._gsap.x ? r._gsap[e] : Li(r, e))),
          this.props.indexOf(qe) >= 0)
        )
          return;
        r._gsap.svg &&
          ((this.svgo = r.getAttribute('data-svg-origin')),
          this.props.push(ai, i, '')),
          (e = qe);
      }
      (n || i) && this.props.push(e, i, n[e]);
    },
    pl = function (e) {
      e.translate &&
        (e.removeProperty('translate'),
        e.removeProperty('scale'),
        e.removeProperty('rotate'));
    },
    Yd = function () {
      var e = this.props,
        i = this.target,
        t = i.style,
        r = i._gsap,
        n,
        s;
      for (n = 0; n < e.length; n += 3)
        e[n + 1]
          ? (i[e[n]] = e[n + 2])
          : e[n + 2]
          ? (t[e[n]] = e[n + 2])
          : t.removeProperty(e[n].replace(eu, '-$1').toLowerCase());
      if (this.tfm) {
        for (s in this.tfm) r[s] = this.tfm[s];
        r.svg &&
          (r.renderTransform(),
          i.setAttribute('data-svg-origin', this.svgo || '')),
          (n = Js()),
          n && !n.isStart && !t[qe] && (pl(t), (r.uncache = 1));
      }
    },
    _l = function (e, i) {
      var t = { target: e, props: [], revert: Yd, save: zd };
      return (
        i &&
          i.split(',').forEach(function (r) {
            return t.save(r);
          }),
        t
      );
    },
    gl,
    iu = function (e, i) {
      var t = Ki.createElementNS
        ? Ki.createElementNS(
            (i || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
            e
          )
        : Ki.createElement(e);
      return t.style ? t : Ki.createElement(e);
    },
    xi = function o(e, i, t) {
      var r = getComputedStyle(e);
      return (
        r[i] ||
        r.getPropertyValue(i.replace(eu, '-$1').toLowerCase()) ||
        r.getPropertyValue(i) ||
        (!t && o(e, Jr(i) || i, 1)) ||
        ''
      );
    },
    Dl = 'O,Moz,ms,Ms,Webkit'.split(','),
    Jr = function (e, i, t) {
      var r = i || gr,
        n = r.style,
        s = 5;
      if (e in n && !t) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        s-- && !(Dl[s] + e in n);

      );
      return s < 0 ? null : (s === 3 ? 'ms' : s >= 0 ? Dl[s] : '') + e;
    },
    ru = function () {
      Fd() &&
        window.document &&
        ((ll = window),
        (Ki = ll.document),
        (Gr = Ki.documentElement),
        (gr = iu('div') || { style: {} }),
        iu('div'),
        (qe = Jr(qe)),
        (ai = qe + 'Origin'),
        (gr.style.cssText =
          'border-width:0;line-height:0;position:absolute;padding:0'),
        (gl = !!Jr('perspective')),
        (Js = Xt.core.reverting),
        (Zs = 1));
    },
    nu = function o(e) {
      var i = iu(
          'svg',
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute('xmlns')) ||
            'http://www.w3.org/2000/svg'
        ),
        t = this.parentNode,
        r = this.nextSibling,
        n = this.style.cssText,
        s;
      if (
        (Gr.appendChild(i),
        i.appendChild(this),
        (this.style.display = 'block'),
        e)
      )
        try {
          (s = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = o);
        } catch {}
      else this._gsapBBox && (s = this._gsapBBox());
      return (
        t && (r ? t.insertBefore(this, r) : t.appendChild(this)),
        Gr.removeChild(i),
        (this.style.cssText = n),
        s
      );
    },
    ml = function (e, i) {
      for (var t = i.length; t--; )
        if (e.hasAttribute(i[t])) return e.getAttribute(i[t]);
    },
    yl = function (e) {
      var i;
      try {
        i = e.getBBox();
      } catch {
        i = nu.call(e, !0);
      }
      return (
        (i && (i.width || i.height)) ||
          e.getBBox === nu ||
          (i = nu.call(e, !0)),
        i && !i.width && !i.x && !i.y
          ? {
              x: +ml(e, ['x', 'cx', 'x1']) || 0,
              y: +ml(e, ['y', 'cy', 'y1']) || 0,
              width: 0,
              height: 0,
            }
          : i
      );
    },
    vl = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && yl(e));
    },
    Bn = function (e, i) {
      if (i) {
        var t = e.style;
        i in Ri && i !== ai && (i = qe),
          t.removeProperty
            ? ((i.substr(0, 2) === 'ms' || i.substr(0, 6) === 'webkit') &&
                (i = '-' + i),
              t.removeProperty(i.replace(eu, '-$1').toLowerCase()))
            : t.removeAttribute(i);
      }
    },
    Gi = function (e, i, t, r, n, s) {
      var u = new Bt(e._pt, i, t, 0, 1, s ? hl : dl);
      return (e._pt = u), (u.b = r), (u.e = n), e._props.push(t), u;
    },
    xl = { deg: 1, rad: 1, turn: 1 },
    Hd = { grid: 1, flex: 1 },
    Qi = function o(e, i, t, r) {
      var n = parseFloat(t) || 0,
        s = (t + '').trim().substr((n + '').length) || 'px',
        u = gr.style,
        a = kd.test(i),
        f = e.tagName.toLowerCase() === 'svg',
        c = (f ? 'client' : 'offset') + (a ? 'Width' : 'Height'),
        h = 100,
        d = r === 'px',
        l = r === '%',
        _,
        p,
        D,
        y;
      return r === s || !n || xl[r] || xl[s]
        ? n
        : (s !== 'px' && !d && (n = o(e, i, t, 'px')),
          (y = e.getCTM && vl(e)),
          (l || s === '%') && (Ri[i] || ~i.indexOf('adius'))
            ? ((_ = y ? e.getBBox()[a ? 'width' : 'height'] : e[c]),
              et(l ? (n / _) * h : (n / 100) * _))
            : ((u[a ? 'width' : 'height'] = h + (d ? s : r)),
              (p =
                ~i.indexOf('adius') || (r === 'em' && e.appendChild && !f)
                  ? e
                  : e.parentNode),
              y && (p = (e.ownerSVGElement || {}).parentNode),
              (!p || p === Ki || !p.appendChild) && (p = Ki.body),
              (D = p._gsap),
              D && l && D.width && a && D.time === Ht.time && !D.uncache
                ? et((n / D.width) * h)
                : ((l || s === '%') &&
                    !Hd[xi(p, 'display')] &&
                    (u.position = xi(e, 'position')),
                  p === e && (u.position = 'static'),
                  p.appendChild(gr),
                  (_ = gr[c]),
                  p.removeChild(gr),
                  (u.position = 'absolute'),
                  a && l && ((D = cr(p)), (D.time = Ht.time), (D.width = p[c])),
                  et(d ? (_ * n) / h : _ && n ? (h / _) * n : 0))));
    },
    Li = function (e, i, t, r) {
      var n;
      return (
        Zs || ru(),
        i in Bi &&
          i !== 'transform' &&
          ((i = Bi[i]), ~i.indexOf(',') && (i = i.split(',')[0])),
        Ri[i] && i !== 'transform'
          ? ((n = Nn(e, r)),
            (n =
              i !== 'transformOrigin'
                ? n[i]
                : n.svg
                ? n.origin
                : Mo(xi(e, ai)) + ' ' + n.zOrigin + 'px'))
          : ((n = e.style[i]),
            (!n || n === 'auto' || r || ~(n + '').indexOf('calc(')) &&
              (n =
                (Ao[i] && Ao[i](e, i, t)) ||
                xi(e, i) ||
                Ea(e, i) ||
                (i === 'opacity' ? 1 : 0))),
        t && !~(n + '').trim().indexOf(' ') ? Qi(e, i, n, t) + t : n
      );
    },
    Xd = function (e, i, t, r) {
      if (!t || t === 'none') {
        var n = Jr(i, e, 1),
          s = n && xi(e, n, 1);
        s && s !== t
          ? ((i = n), (t = s))
          : i === 'borderColor' && (t = xi(e, 'borderTopColor'));
      }
      var u = new Bt(this._pt, e.style, i, 0, 1, ol),
        a = 0,
        f = 0,
        c,
        h,
        d,
        l,
        _,
        p,
        D,
        y,
        T,
        v,
        b,
        C;
      if (
        ((u.b = t),
        (u.e = r),
        (t += ''),
        (r += ''),
        r === 'auto' &&
          ((e.style[i] = r), (r = xi(e, i) || r), (e.style[i] = t)),
        (c = [t, r]),
        Ka(c),
        (t = c[0]),
        (r = c[1]),
        (d = t.match(Hr) || []),
        (C = r.match(Hr) || []),
        C.length)
      ) {
        for (; (h = Hr.exec(r)); )
          (D = h[0]),
            (T = r.substring(a, h.index)),
            _
              ? (_ = (_ + 1) % 5)
              : (T.substr(-5) === 'rgba(' || T.substr(-5) === 'hsla(') &&
                (_ = 1),
            D !== (p = d[f++] || '') &&
              ((l = parseFloat(p) || 0),
              (b = p.substr((l + '').length)),
              D.charAt(1) === '=' && (D = Xr(l, D) + b),
              (y = parseFloat(D)),
              (v = D.substr((y + '').length)),
              (a = Hr.lastIndex - v.length),
              v ||
                ((v = v || $t.units[i] || b),
                a === r.length && ((r += v), (u.e += v))),
              b !== v && (l = Qi(e, i, p, v) || 0),
              (u._pt = {
                _next: u._pt,
                p: T || f === 1 ? T : ',',
                s: l,
                c: y - l,
                m: (_ && _ < 4) || i === 'zIndex' ? Math.round : 0,
              }));
        u.c = a < r.length ? r.substring(a, r.length) : '';
      } else u.r = i === 'display' && r === 'none' ? hl : dl;
      return va.test(r) && (u.e = 0), (this._pt = u), u;
    },
    wl = {
      top: '0%',
      bottom: '100%',
      left: '0%',
      right: '100%',
      center: '50%',
    },
    Vd = function (e) {
      var i = e.split(' '),
        t = i[0],
        r = i[1] || '50%';
      return (
        (t === 'top' || t === 'bottom' || r === 'left' || r === 'right') &&
          ((e = t), (t = r), (r = e)),
        (i[0] = wl[t] || t),
        (i[1] = wl[r] || r),
        i.join(' ')
      );
    },
    Wd = function (e, i) {
      if (i.tween && i.tween._time === i.tween._dur) {
        var t = i.t,
          r = t.style,
          n = i.u,
          s = t._gsap,
          u,
          a,
          f;
        if (n === 'all' || n === !0) (r.cssText = ''), (a = 1);
        else
          for (n = n.split(','), f = n.length; --f > -1; )
            (u = n[f]),
              Ri[u] && ((a = 1), (u = u === 'transformOrigin' ? ai : qe)),
              Bn(t, u);
        a &&
          (Bn(t, qe),
          s &&
            (s.svg && t.removeAttribute('transform'),
            Nn(t, 1),
            (s.uncache = 1),
            pl(r)));
      }
    },
    Ao = {
      clearProps: function (e, i, t, r, n) {
        if (n.data !== 'isFromStart') {
          var s = (e._pt = new Bt(e._pt, i, t, 0, 0, Wd));
          return (s.u = r), (s.pr = -10), (s.tween = n), e._props.push(t), 1;
        }
      },
    },
    Ln = [1, 0, 0, 1, 0, 0],
    bl = {},
    Cl = function (e) {
      return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e;
    },
    Tl = function (e) {
      var i = xi(e, qe);
      return Cl(i) ? Ln : i.substr(7).match(ya).map(et);
    },
    ou = function (e, i) {
      var t = e._gsap || cr(e),
        r = e.style,
        n = Tl(e),
        s,
        u,
        a,
        f;
      return t.svg && e.getAttribute('transform')
        ? ((a = e.transform.baseVal.consolidate().matrix),
          (n = [a.a, a.b, a.c, a.d, a.e, a.f]),
          n.join(',') === '1,0,0,1,0,0' ? Ln : n)
        : (n === Ln &&
            !e.offsetParent &&
            e !== Gr &&
            !t.svg &&
            ((a = r.display),
            (r.display = 'block'),
            (s = e.parentNode),
            (!s || !e.offsetParent) &&
              ((f = 1), (u = e.nextElementSibling), Gr.appendChild(e)),
            (n = Tl(e)),
            a ? (r.display = a) : Bn(e, 'display'),
            f &&
              (u
                ? s.insertBefore(e, u)
                : s
                ? s.appendChild(e)
                : Gr.removeChild(e))),
          i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    su = function (e, i, t, r, n, s) {
      var u = e._gsap,
        a = n || ou(e, !0),
        f = u.xOrigin || 0,
        c = u.yOrigin || 0,
        h = u.xOffset || 0,
        d = u.yOffset || 0,
        l = a[0],
        _ = a[1],
        p = a[2],
        D = a[3],
        y = a[4],
        T = a[5],
        v = i.split(' '),
        b = parseFloat(v[0]) || 0,
        C = parseFloat(v[1]) || 0,
        M,
        E,
        k,
        R;
      t
        ? a !== Ln &&
          (E = l * D - _ * p) &&
          ((k = b * (D / E) + C * (-p / E) + (p * T - D * y) / E),
          (R = b * (-_ / E) + C * (l / E) - (l * T - _ * y) / E),
          (b = k),
          (C = R))
        : ((M = yl(e)),
          (b = M.x + (~v[0].indexOf('%') ? (b / 100) * M.width : b)),
          (C =
            M.y + (~(v[1] || v[0]).indexOf('%') ? (C / 100) * M.height : C))),
        r || (r !== !1 && u.smooth)
          ? ((y = b - f),
            (T = C - c),
            (u.xOffset = h + (y * l + T * p) - y),
            (u.yOffset = d + (y * _ + T * D) - T))
          : (u.xOffset = u.yOffset = 0),
        (u.xOrigin = b),
        (u.yOrigin = C),
        (u.smooth = !!r),
        (u.origin = i),
        (u.originIsAbsolute = !!t),
        (e.style[ai] = '0px 0px'),
        s &&
          (Gi(s, u, 'xOrigin', f, b),
          Gi(s, u, 'yOrigin', c, C),
          Gi(s, u, 'xOffset', h, u.xOffset),
          Gi(s, u, 'yOffset', d, u.yOffset)),
        e.setAttribute('data-svg-origin', b + ' ' + C);
    },
    Nn = function (e, i) {
      var t = e._gsap || new Ja(e);
      if ('x' in t && !i && !t.uncache) return t;
      var r = e.style,
        n = t.scaleX < 0,
        s = 'px',
        u = 'deg',
        a = getComputedStyle(e),
        f = xi(e, ai) || '0',
        c,
        h,
        d,
        l,
        _,
        p,
        D,
        y,
        T,
        v,
        b,
        C,
        M,
        E,
        k,
        R,
        z,
        L,
        Y,
        X,
        G,
        W,
        I,
        H,
        V,
        O,
        w,
        Q,
        ee,
        De,
        ie,
        le;
      return (
        (c = h = d = p = D = y = T = v = b = 0),
        (l = _ = 1),
        (t.svg = !!(e.getCTM && vl(e))),
        a.translate &&
          ((a.translate !== 'none' ||
            a.scale !== 'none' ||
            a.rotate !== 'none') &&
            (r[qe] =
              (a.translate !== 'none'
                ? 'translate3d(' +
                  (a.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                  ') '
                : '') +
              (a.rotate !== 'none' ? 'rotate(' + a.rotate + ') ' : '') +
              (a.scale !== 'none'
                ? 'scale(' + a.scale.split(' ').join(',') + ') '
                : '') +
              (a[qe] !== 'none' ? a[qe] : '')),
          (r.scale = r.rotate = r.translate = 'none')),
        (E = ou(e, t.svg)),
        t.svg &&
          (t.uncache
            ? ((V = e.getBBox()),
              (f = t.xOrigin - V.x + 'px ' + (t.yOrigin - V.y) + 'px'),
              (H = ''))
            : (H = !i && e.getAttribute('data-svg-origin')),
          su(e, H || f, !!H || t.originIsAbsolute, t.smooth !== !1, E)),
        (C = t.xOrigin || 0),
        (M = t.yOrigin || 0),
        E !== Ln &&
          ((L = E[0]),
          (Y = E[1]),
          (X = E[2]),
          (G = E[3]),
          (c = W = E[4]),
          (h = I = E[5]),
          E.length === 6
            ? ((l = Math.sqrt(L * L + Y * Y)),
              (_ = Math.sqrt(G * G + X * X)),
              (p = L || Y ? Zr(Y, L) * Dr : 0),
              (T = X || G ? Zr(X, G) * Dr + p : 0),
              T && (_ *= Math.abs(Math.cos(T * Qr))),
              t.svg && ((c -= C - (C * L + M * X)), (h -= M - (C * Y + M * G))))
            : ((le = E[6]),
              (De = E[7]),
              (w = E[8]),
              (Q = E[9]),
              (ee = E[10]),
              (ie = E[11]),
              (c = E[12]),
              (h = E[13]),
              (d = E[14]),
              (k = Zr(le, ee)),
              (D = k * Dr),
              k &&
                ((R = Math.cos(-k)),
                (z = Math.sin(-k)),
                (H = W * R + w * z),
                (V = I * R + Q * z),
                (O = le * R + ee * z),
                (w = W * -z + w * R),
                (Q = I * -z + Q * R),
                (ee = le * -z + ee * R),
                (ie = De * -z + ie * R),
                (W = H),
                (I = V),
                (le = O)),
              (k = Zr(-X, ee)),
              (y = k * Dr),
              k &&
                ((R = Math.cos(-k)),
                (z = Math.sin(-k)),
                (H = L * R - w * z),
                (V = Y * R - Q * z),
                (O = X * R - ee * z),
                (ie = G * z + ie * R),
                (L = H),
                (Y = V),
                (X = O)),
              (k = Zr(Y, L)),
              (p = k * Dr),
              k &&
                ((R = Math.cos(k)),
                (z = Math.sin(k)),
                (H = L * R + Y * z),
                (V = W * R + I * z),
                (Y = Y * R - L * z),
                (I = I * R - W * z),
                (L = H),
                (W = V)),
              D &&
                Math.abs(D) + Math.abs(p) > 359.9 &&
                ((D = p = 0), (y = 180 - y)),
              (l = et(Math.sqrt(L * L + Y * Y + X * X))),
              (_ = et(Math.sqrt(I * I + le * le))),
              (k = Zr(W, I)),
              (T = Math.abs(k) > 2e-4 ? k * Dr : 0),
              (b = ie ? 1 / (ie < 0 ? -ie : ie) : 0)),
          t.svg &&
            ((H = e.getAttribute('transform')),
            (t.forceCSS = e.setAttribute('transform', '') || !Cl(xi(e, qe))),
            H && e.setAttribute('transform', H))),
        Math.abs(T) > 90 &&
          Math.abs(T) < 270 &&
          (n
            ? ((l *= -1),
              (T += p <= 0 ? 180 : -180),
              (p += p <= 0 ? 180 : -180))
            : ((_ *= -1), (T += T <= 0 ? 180 : -180))),
        (i = i || t.uncache),
        (t.x =
          c -
          ((t.xPercent =
            c &&
            ((!i && t.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
            ? (e.offsetWidth * t.xPercent) / 100
            : 0) +
          s),
        (t.y =
          h -
          ((t.yPercent =
            h &&
            ((!i && t.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
            ? (e.offsetHeight * t.yPercent) / 100
            : 0) +
          s),
        (t.z = d + s),
        (t.scaleX = et(l)),
        (t.scaleY = et(_)),
        (t.rotation = et(p) + u),
        (t.rotationX = et(D) + u),
        (t.rotationY = et(y) + u),
        (t.skewX = T + u),
        (t.skewY = v + u),
        (t.transformPerspective = b + s),
        (t.zOrigin = parseFloat(f.split(' ')[2]) || 0) && (r[ai] = Mo(f)),
        (t.xOffset = t.yOffset = 0),
        (t.force3D = $t.force3D),
        (t.renderTransform = t.svg ? Ud : gl ? Sl : qd),
        (t.uncache = 0),
        t
      );
    },
    Mo = function (e) {
      return (e = e.split(' '))[0] + ' ' + e[1];
    },
    uu = function (e, i, t) {
      var r = xt(i);
      return et(parseFloat(i) + parseFloat(Qi(e, 'x', t + 'px', r))) + r;
    },
    qd = function (e, i) {
      (i.z = '0px'),
        (i.rotationY = i.rotationX = '0deg'),
        (i.force3D = 0),
        Sl(e, i);
    },
    mr = '0deg',
    In = '0px',
    yr = ') ',
    Sl = function (e, i) {
      var t = i || this,
        r = t.xPercent,
        n = t.yPercent,
        s = t.x,
        u = t.y,
        a = t.z,
        f = t.rotation,
        c = t.rotationY,
        h = t.rotationX,
        d = t.skewX,
        l = t.skewY,
        _ = t.scaleX,
        p = t.scaleY,
        D = t.transformPerspective,
        y = t.force3D,
        T = t.target,
        v = t.zOrigin,
        b = '',
        C = (y === 'auto' && e && e !== 1) || y === !0;
      if (v && (h !== mr || c !== mr)) {
        var M = parseFloat(c) * Qr,
          E = Math.sin(M),
          k = Math.cos(M),
          R;
        (M = parseFloat(h) * Qr),
          (R = Math.cos(M)),
          (s = uu(T, s, E * R * -v)),
          (u = uu(T, u, -Math.sin(M) * -v)),
          (a = uu(T, a, k * R * -v + v));
      }
      D !== In && (b += 'perspective(' + D + yr),
        (r || n) && (b += 'translate(' + r + '%, ' + n + '%) '),
        (C || s !== In || u !== In || a !== In) &&
          (b +=
            a !== In || C
              ? 'translate3d(' + s + ', ' + u + ', ' + a + ') '
              : 'translate(' + s + ', ' + u + yr),
        f !== mr && (b += 'rotate(' + f + yr),
        c !== mr && (b += 'rotateY(' + c + yr),
        h !== mr && (b += 'rotateX(' + h + yr),
        (d !== mr || l !== mr) && (b += 'skew(' + d + ', ' + l + yr),
        (_ !== 1 || p !== 1) && (b += 'scale(' + _ + ', ' + p + yr),
        (T.style[qe] = b || 'translate(0, 0)');
    },
    Ud = function (e, i) {
      var t = i || this,
        r = t.xPercent,
        n = t.yPercent,
        s = t.x,
        u = t.y,
        a = t.rotation,
        f = t.skewX,
        c = t.skewY,
        h = t.scaleX,
        d = t.scaleY,
        l = t.target,
        _ = t.xOrigin,
        p = t.yOrigin,
        D = t.xOffset,
        y = t.yOffset,
        T = t.forceCSS,
        v = parseFloat(s),
        b = parseFloat(u),
        C,
        M,
        E,
        k,
        R;
      (a = parseFloat(a)),
        (f = parseFloat(f)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (f += c), (a += c)),
        a || f
          ? ((a *= Qr),
            (f *= Qr),
            (C = Math.cos(a) * h),
            (M = Math.sin(a) * h),
            (E = Math.sin(a - f) * -d),
            (k = Math.cos(a - f) * d),
            f &&
              ((c *= Qr),
              (R = Math.tan(f - c)),
              (R = Math.sqrt(1 + R * R)),
              (E *= R),
              (k *= R),
              c &&
                ((R = Math.tan(c)),
                (R = Math.sqrt(1 + R * R)),
                (C *= R),
                (M *= R))),
            (C = et(C)),
            (M = et(M)),
            (E = et(E)),
            (k = et(k)))
          : ((C = h), (k = d), (M = E = 0)),
        ((v && !~(s + '').indexOf('px')) || (b && !~(u + '').indexOf('px'))) &&
          ((v = Qi(l, 'x', s, 'px')), (b = Qi(l, 'y', u, 'px'))),
        (_ || p || D || y) &&
          ((v = et(v + _ - (_ * C + p * E) + D)),
          (b = et(b + p - (_ * M + p * k) + y))),
        (r || n) &&
          ((R = l.getBBox()),
          (v = et(v + (r / 100) * R.width)),
          (b = et(b + (n / 100) * R.height))),
        (R =
          'matrix(' +
          C +
          ',' +
          M +
          ',' +
          E +
          ',' +
          k +
          ',' +
          v +
          ',' +
          b +
          ')'),
        l.setAttribute('transform', R),
        T && (l.style[qe] = R);
    },
    jd = function (e, i, t, r, n) {
      var s = 360,
        u = dt(n),
        a = parseFloat(n) * (u && ~n.indexOf('rad') ? Dr : 1),
        f = a - r,
        c = r + f + 'deg',
        h,
        d;
      return (
        u &&
          ((h = n.split('_')[1]),
          h === 'short' &&
            ((f %= s), f !== f % (s / 2) && (f += f < 0 ? s : -s)),
          h === 'cw' && f < 0
            ? (f = ((f + s * cl) % s) - ~~(f / s) * s)
            : h === 'ccw' && f > 0 && (f = ((f - s * cl) % s) - ~~(f / s) * s)),
        (e._pt = d = new Bt(e._pt, i, t, r, f, Ad)),
        (d.e = c),
        (d.u = 'deg'),
        e._props.push(t),
        d
      );
    },
    El = function (e, i) {
      for (var t in i) e[t] = i[t];
      return e;
    },
    Kd = function (e, i, t) {
      var r = El({}, t._gsap),
        n = 'perspective,force3D,transformOrigin,svgOrigin',
        s = t.style,
        u,
        a,
        f,
        c,
        h,
        d,
        l,
        _;
      r.svg
        ? ((f = t.getAttribute('transform')),
          t.setAttribute('transform', ''),
          (s[qe] = i),
          (u = Nn(t, 1)),
          Bn(t, qe),
          t.setAttribute('transform', f))
        : ((f = getComputedStyle(t)[qe]),
          (s[qe] = i),
          (u = Nn(t, 1)),
          (s[qe] = f));
      for (a in Ri)
        (f = r[a]),
          (c = u[a]),
          f !== c &&
            n.indexOf(a) < 0 &&
            ((l = xt(f)),
            (_ = xt(c)),
            (h = l !== _ ? Qi(t, a, f, _) : parseFloat(f)),
            (d = parseFloat(c)),
            (e._pt = new Bt(e._pt, u, a, h, d - h, tu)),
            (e._pt.u = _ || 0),
            e._props.push(a));
      El(u, r);
    };
  Ot('padding,margin,Width,Radius', function (o, e) {
    var i = 'Top',
      t = 'Right',
      r = 'Bottom',
      n = 'Left',
      s = (e < 3 ? [i, t, r, n] : [i + n, i + t, r + t, r + n]).map(function (
        u
      ) {
        return e < 2 ? o + u : 'border' + u + o;
      });
    Ao[e > 1 ? 'border' + o : o] = function (u, a, f, c, h) {
      var d, l;
      if (arguments.length < 4)
        return (
          (d = s.map(function (_) {
            return Li(u, _, f);
          })),
          (l = d.join(' ')),
          l.split(d[0]).length === 5 ? d[0] : l
        );
      (d = (c + '').split(' ')),
        (l = {}),
        s.forEach(function (_, p) {
          return (l[_] = d[p] = d[p] || d[((p - 1) / 2) | 0]);
        }),
        u.init(a, l, h);
    };
  });
  var Fl = {
    name: 'css',
    register: ru,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, i, t, r, n) {
      var s = this._props,
        u = e.style,
        a = t.vars.startAt,
        f,
        c,
        h,
        d,
        l,
        _,
        p,
        D,
        y,
        T,
        v,
        b,
        C,
        M,
        E,
        k;
      Zs || ru(),
        (this.styles = this.styles || _l(e)),
        (k = this.styles.props),
        (this.tween = t);
      for (p in i)
        if (
          p !== 'autoRound' &&
          ((c = i[p]), !(Yt[p] && el(p, i, t, r, e, n)))
        ) {
          if (
            ((l = typeof c),
            (_ = Ao[p]),
            l === 'function' && ((c = c.call(t, r, e, n)), (l = typeof c)),
            l === 'string' && ~c.indexOf('random(') && (c = Pn(c)),
            _)
          )
            _(this, e, p, c, t) && (E = 1);
          else if (p.substr(0, 2) === '--')
            (f = (getComputedStyle(e).getPropertyValue(p) + '').trim()),
              (c += ''),
              (Ui.lastIndex = 0),
              Ui.test(f) || ((D = xt(f)), (y = xt(c))),
              y ? D !== y && (f = Qi(e, p, f, y) + y) : D && (c += D),
              this.add(u, 'setProperty', f, c, r, n, 0, 0, p),
              s.push(p),
              k.push(p, 0, u[p]);
          else if (l !== 'undefined') {
            if (
              (a && p in a
                ? ((f =
                    typeof a[p] == 'function' ? a[p].call(t, r, e, n) : a[p]),
                  dt(f) && ~f.indexOf('random(') && (f = Pn(f)),
                  xt(f + '') || (f += $t.units[p] || xt(Li(e, p)) || ''),
                  (f + '').charAt(1) === '=' && (f = Li(e, p)))
                : (f = Li(e, p)),
              (d = parseFloat(f)),
              (T = l === 'string' && c.charAt(1) === '=' && c.substr(0, 2)),
              T && (c = c.substr(2)),
              (h = parseFloat(c)),
              p in Bi &&
                (p === 'autoAlpha' &&
                  (d === 1 && Li(e, 'visibility') === 'hidden' && h && (d = 0),
                  k.push('visibility', 0, u.visibility),
                  Gi(
                    this,
                    u,
                    'visibility',
                    d ? 'inherit' : 'hidden',
                    h ? 'inherit' : 'hidden',
                    !h
                  )),
                p !== 'scale' &&
                  p !== 'transform' &&
                  ((p = Bi[p]), ~p.indexOf(',') && (p = p.split(',')[0]))),
              (v = p in Ri),
              v)
            ) {
              if (
                (this.styles.save(p),
                b ||
                  ((C = e._gsap),
                  (C.renderTransform && !i.parseTransform) ||
                    Nn(e, i.parseTransform),
                  (M = i.smoothOrigin !== !1 && C.smooth),
                  (b = this._pt =
                    new Bt(this._pt, u, qe, 0, 1, C.renderTransform, C, 0, -1)),
                  (b.dep = 1)),
                p === 'scale')
              )
                (this._pt = new Bt(
                  this._pt,
                  C,
                  'scaleY',
                  d,
                  (T ? Xr(d, T + h) : h) - d || 0,
                  tu
                )),
                  (this._pt.u = 0),
                  s.push('scaleY', p),
                  (p += 'X');
              else if (p === 'transformOrigin') {
                k.push(ai, 0, u[ai]),
                  (c = Vd(c)),
                  C.svg
                    ? su(e, c, 0, M, 0, this)
                    : ((y = parseFloat(c.split(' ')[2]) || 0),
                      y !== C.zOrigin && Gi(this, C, 'zOrigin', C.zOrigin, y),
                      Gi(this, u, p, Mo(f), Mo(c)));
                continue;
              } else if (p === 'svgOrigin') {
                su(e, c, 1, M, 0, this);
                continue;
              } else if (p in bl) {
                jd(this, C, p, d, T ? Xr(d, T + c) : c);
                continue;
              } else if (p === 'smoothOrigin') {
                Gi(this, C, 'smooth', C.smooth, c);
                continue;
              } else if (p === 'force3D') {
                C[p] = c;
                continue;
              } else if (p === 'transform') {
                Kd(this, c, e);
                continue;
              }
            } else p in u || (p = Jr(p) || p);
            if (
              v ||
              ((h || h === 0) && (d || d === 0) && !Pd.test(c) && p in u)
            )
              (D = (f + '').substr((d + '').length)),
                h || (h = 0),
                (y = xt(c) || (p in $t.units ? $t.units[p] : D)),
                D !== y && (d = Qi(e, p, f, y)),
                (this._pt = new Bt(
                  this._pt,
                  v ? C : u,
                  p,
                  d,
                  (T ? Xr(d, T + h) : h) - d,
                  !v && (y === 'px' || p === 'zIndex') && i.autoRound !== !1
                    ? Od
                    : tu
                )),
                (this._pt.u = y || 0),
                D !== y && y !== '%' && ((this._pt.b = f), (this._pt.r = Md));
            else if (p in u) Xd.call(this, e, p, f, T ? T + c : c);
            else if (p in e) this.add(e, p, f || e[p], T ? T + c : c, r, n);
            else {
              ks(p, c);
              continue;
            }
            v || (p in u ? k.push(p, 0, u[p]) : k.push(p, 1, f || e[p])),
              s.push(p);
          }
        }
      E && sl(this);
    },
    render: function (e, i) {
      if (i.tween._time || !Js())
        for (var t = i._pt; t; ) t.r(e, t.d), (t = t._next);
      else i.styles.revert();
    },
    get: Li,
    aliases: Bi,
    getSetter: function (e, i, t) {
      var r = Bi[i];
      return (
        r && r.indexOf(',') < 0 && (i = r),
        i in Ri && i !== ai && (e._gsap.x || Li(e, 'x'))
          ? t && fl === t
            ? i === 'scale'
              ? Nd
              : Ld
            : (fl = t || {}) && (i === 'scale' ? Id : $d)
          : e.style && !Cs(e.style[i])
          ? Rd
          : ~i.indexOf('-')
          ? Bd
          : Us(e, i)
      );
    },
    core: { _removeProperty: Bn, _getMatrix: ou },
  };
  (Xt.utils.checkPrefix = Jr),
    (Xt.core.getStyleSaver = _l),
    (function (o, e, i, t) {
      var r = Ot(o + ',' + e + ',' + i, function (n) {
        Ri[n] = 1;
      });
      Ot(e, function (n) {
        ($t.units[n] = 'deg'), (bl[n] = 1);
      }),
        (Bi[r[13]] = o + ',' + e),
        Ot(t, function (n) {
          var s = n.split(':');
          Bi[s[1]] = r[s[0]];
        });
    })(
      'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
      'rotation,rotationX,rotationY,skewX,skewY',
      'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
      '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY'
    ),
    Ot(
      'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
      function (o) {
        $t.units[o] = 'px';
      }
    ),
    Xt.registerPlugin(Fl);
  var Vt = Xt.registerPlugin(Fl) || Xt;
  Vt.core.Tween;
  /*!
   * matrix 3.11.3
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Ni,
    vr,
    au,
    en,
    $n,
    Oo,
    Ro,
    zn,
    ii = 'transform',
    lu = ii + 'Origin',
    kl,
    Pl = function (e) {
      var i = e.ownerDocument || e;
      for (
        !(ii in e.style) &&
        ('msTransform' in e.style) &&
        ((ii = 'msTransform'), (lu = ii + 'Origin'));
        i.parentNode && (i = i.parentNode);

      );
      if (((vr = window), (Ro = new xr()), i)) {
        (Ni = i),
          (au = i.documentElement),
          (en = i.body),
          (zn = Ni.createElementNS('http://www.w3.org/2000/svg', 'g')),
          (zn.style.transform = 'none');
        var t = i.createElement('div'),
          r = i.createElement('div');
        en.appendChild(t),
          t.appendChild(r),
          (t.style.position = 'static'),
          (t.style[ii] = 'translate3d(0,0,1px)'),
          (kl = r.offsetParent !== t),
          en.removeChild(t);
      }
      return i;
    },
    Gd = function (e) {
      for (var i, t; e && e !== en; )
        (t = e._gsap),
          t && t.uncache && t.get(e, 'x'),
          t &&
            !t.scaleX &&
            !t.scaleY &&
            t.renderTransform &&
            ((t.scaleX = t.scaleY = 1e-4),
            t.renderTransform(1, t),
            i ? i.push(t) : (i = [t])),
          (e = e.parentNode);
      return i;
    },
    Al = [],
    Ml = [],
    Qd = function () {
      return (
        vr.pageYOffset || Ni.scrollTop || au.scrollTop || en.scrollTop || 0
      );
    },
    Zd = function () {
      return (
        vr.pageXOffset || Ni.scrollLeft || au.scrollLeft || en.scrollLeft || 0
      );
    },
    fu = function (e) {
      return (
        e.ownerSVGElement ||
        ((e.tagName + '').toLowerCase() === 'svg' ? e : null)
      );
    },
    Jd = function o(e) {
      if (vr.getComputedStyle(e).position === 'fixed') return !0;
      if (((e = e.parentNode), e && e.nodeType === 1)) return o(e);
    },
    cu = function o(e, i) {
      if (e.parentNode && (Ni || Pl(e))) {
        var t = fu(e),
          r = t
            ? t.getAttribute('xmlns') || 'http://www.w3.org/2000/svg'
            : 'http://www.w3.org/1999/xhtml',
          n = t ? (i ? 'rect' : 'g') : 'div',
          s = i !== 2 ? 0 : 100,
          u = i === 3 ? 100 : 0,
          a =
            'position:absolute;display:block;pointer-events:none;margin:0;padding:0;',
          f = Ni.createElementNS
            ? Ni.createElementNS(r.replace(/^https/, 'http'), n)
            : Ni.createElement(n);
        return (
          i &&
            (t
              ? (Oo || (Oo = o(e)),
                f.setAttribute('width', 0.01),
                f.setAttribute('height', 0.01),
                f.setAttribute('transform', 'translate(' + s + ',' + u + ')'),
                Oo.appendChild(f))
              : ($n || (($n = o(e)), ($n.style.cssText = a)),
                (f.style.cssText =
                  a +
                  'width:0.1px;height:0.1px;top:' +
                  u +
                  'px;left:' +
                  s +
                  'px'),
                $n.appendChild(f))),
          f
        );
      }
      throw 'Need document and parent.';
    },
    eh = function (e) {
      for (var i = new xr(), t = 0; t < e.numberOfItems; t++)
        i.multiply(e.getItem(t).matrix);
      return i;
    },
    th = function (e) {
      var i = e.getCTM(),
        t;
      return (
        i ||
          ((t = e.style[ii]),
          (e.style[ii] = 'none'),
          e.appendChild(zn),
          (i = zn.getCTM()),
          e.removeChild(zn),
          t
            ? (e.style[ii] = t)
            : e.style.removeProperty(
                ii.replace(/([A-Z])/g, '-$1').toLowerCase()
              )),
        i || Ro.clone()
      );
    },
    ih = function (e, i) {
      var t = fu(e),
        r = e === t,
        n = t ? Al : Ml,
        s = e.parentNode,
        u,
        a,
        f,
        c,
        h,
        d;
      if (e === vr) return e;
      if (
        (n.length || n.push(cu(e, 1), cu(e, 2), cu(e, 3)), (u = t ? Oo : $n), t)
      )
        r
          ? ((f = th(e)), (c = -f.e / f.a), (h = -f.f / f.d), (a = Ro))
          : e.getBBox
          ? ((f = e.getBBox()),
            (a = e.transform ? e.transform.baseVal : {}),
            (a = a.numberOfItems
              ? a.numberOfItems > 1
                ? eh(a)
                : a.getItem(0).matrix
              : Ro),
            (c = a.a * f.x + a.c * f.y),
            (h = a.b * f.x + a.d * f.y))
          : ((a = new xr()), (c = h = 0)),
          i && e.tagName.toLowerCase() === 'g' && (c = h = 0),
          (r ? t : s).appendChild(u),
          u.setAttribute(
            'transform',
            'matrix(' +
              a.a +
              ',' +
              a.b +
              ',' +
              a.c +
              ',' +
              a.d +
              ',' +
              (a.e + c) +
              ',' +
              (a.f + h) +
              ')'
          );
      else {
        if (((c = h = 0), kl))
          for (
            a = e.offsetParent, f = e;
            f && (f = f.parentNode) && f !== a && f.parentNode;

          )
            (vr.getComputedStyle(f)[ii] + '').length > 4 &&
              ((c = f.offsetLeft), (h = f.offsetTop), (f = 0));
        if (
          ((d = vr.getComputedStyle(e)),
          d.position !== 'absolute' && d.position !== 'fixed')
        )
          for (a = e.offsetParent; s && s !== a; )
            (c += s.scrollLeft || 0),
              (h += s.scrollTop || 0),
              (s = s.parentNode);
        (f = u.style),
          (f.top = e.offsetTop - h + 'px'),
          (f.left = e.offsetLeft - c + 'px'),
          (f[ii] = d[ii]),
          (f[lu] = d[lu]),
          (f.position = d.position === 'fixed' ? 'fixed' : 'absolute'),
          e.parentNode.appendChild(u);
      }
      return u;
    },
    du = function (e, i, t, r, n, s, u) {
      return (
        (e.a = i), (e.b = t), (e.c = r), (e.d = n), (e.e = s), (e.f = u), e
      );
    },
    xr = (function () {
      function o(i, t, r, n, s, u) {
        i === void 0 && (i = 1),
          t === void 0 && (t = 0),
          r === void 0 && (r = 0),
          n === void 0 && (n = 1),
          s === void 0 && (s = 0),
          u === void 0 && (u = 0),
          du(this, i, t, r, n, s, u);
      }
      var e = o.prototype;
      return (
        (e.inverse = function () {
          var t = this.a,
            r = this.b,
            n = this.c,
            s = this.d,
            u = this.e,
            a = this.f,
            f = t * s - r * n || 1e-10;
          return du(
            this,
            s / f,
            -r / f,
            -n / f,
            t / f,
            (n * a - s * u) / f,
            -(t * a - r * u) / f
          );
        }),
        (e.multiply = function (t) {
          var r = this.a,
            n = this.b,
            s = this.c,
            u = this.d,
            a = this.e,
            f = this.f,
            c = t.a,
            h = t.c,
            d = t.b,
            l = t.d,
            _ = t.e,
            p = t.f;
          return du(
            this,
            c * r + d * s,
            c * n + d * u,
            h * r + l * s,
            h * n + l * u,
            a + _ * r + p * s,
            f + _ * n + p * u
          );
        }),
        (e.clone = function () {
          return new o(this.a, this.b, this.c, this.d, this.e, this.f);
        }),
        (e.equals = function (t) {
          var r = this.a,
            n = this.b,
            s = this.c,
            u = this.d,
            a = this.e,
            f = this.f;
          return (
            r === t.a &&
            n === t.b &&
            s === t.c &&
            u === t.d &&
            a === t.e &&
            f === t.f
          );
        }),
        (e.apply = function (t, r) {
          r === void 0 && (r = {});
          var n = t.x,
            s = t.y,
            u = this.a,
            a = this.b,
            f = this.c,
            c = this.d,
            h = this.e,
            d = this.f;
          return (
            (r.x = n * u + s * f + h || 0), (r.y = n * a + s * c + d || 0), r
          );
        }),
        o
      );
    })();
  function wr(o, e, i, t) {
    if (!o || !o.parentNode || (Ni || Pl(o)).documentElement === o)
      return new xr();
    var r = Gd(o),
      n = fu(o),
      s = n ? Al : Ml,
      u = ih(o, i),
      a = s[0].getBoundingClientRect(),
      f = s[1].getBoundingClientRect(),
      c = s[2].getBoundingClientRect(),
      h = u.parentNode,
      d = !t && Jd(o),
      l = new xr(
        (f.left - a.left) / 100,
        (f.top - a.top) / 100,
        (c.left - a.left) / 100,
        (c.top - a.top) / 100,
        a.left + (d ? 0 : Zd()),
        a.top + (d ? 0 : Qd())
      );
    if ((h.removeChild(u), r))
      for (a = r.length; a--; )
        (f = r[a]), (f.scaleX = f.scaleY = 0), f.renderTransform(1, f);
    return e ? l.inverse() : l;
  }
  function rh(o) {
    if (o === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return o;
  }
  function nh(o, e) {
    (o.prototype = Object.create(e.prototype)),
      (o.prototype.constructor = o),
      (o.__proto__ = e);
  }
  var Te,
    Re,
    Wt,
    li,
    Ii,
    hu,
    $i,
    pu,
    Yn,
    Zi,
    Ol,
    _u,
    Hn,
    gu,
    Xn,
    fi,
    Vn,
    Bo,
    Lo = 0,
    Rl = function () {
      return typeof window != 'undefined';
    },
    Bl = function () {
      return Te || (Rl() && (Te = window.gsap) && Te.registerPlugin && Te);
    },
    Ji = function (e) {
      return typeof e == 'function';
    },
    Wn = function (e) {
      return typeof e == 'object';
    },
    ci = function (e) {
      return typeof e == 'undefined';
    },
    No = function () {
      return !1;
    },
    qn = 'transform',
    Du = 'transformOrigin',
    er = function (e) {
      return Math.round(e * 1e4) / 1e4;
    },
    Un = Array.isArray,
    Io = function (e, i) {
      var t = Wt.createElementNS
        ? Wt.createElementNS(
            (i || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
            e
          )
        : Wt.createElement(e);
      return t.style ? t : Wt.createElement(e);
    },
    Ll = 180 / Math.PI,
    br = 1e20,
    oh = new xr(),
    tr =
      Date.now ||
      function () {
        return new Date().getTime();
      },
    Cr = [],
    tn = {},
    sh = 0,
    uh = /^(?:a|input|textarea|button|select)$/i,
    Nl = 0,
    rn = {},
    zi = {},
    Il = function (e, i) {
      var t = {},
        r;
      for (r in e) t[r] = i ? e[r] * i : e[r];
      return t;
    },
    ah = function (e, i) {
      for (var t in i) t in e || (e[t] = i[t]);
      return e;
    },
    $l = function o(e, i) {
      for (var t = e.length, r; t--; )
        i
          ? (e[t].style.touchAction = i)
          : e[t].style.removeProperty('touch-action'),
          (r = e[t].children),
          r && r.length && o(r, i);
    },
    zl = function () {
      return Cr.forEach(function (e) {
        return e();
      });
    },
    lh = function (e) {
      Cr.push(e), Cr.length === 1 && Te.ticker.add(zl);
    },
    Yl = function () {
      return !Cr.length && Te.ticker.remove(zl);
    },
    Hl = function (e) {
      for (var i = Cr.length; i--; ) Cr[i] === e && Cr.splice(i, 1);
      Te.to(Yl, {
        overwrite: !0,
        delay: 15,
        duration: 0,
        onComplete: Yl,
        data: '_draggable',
      });
    },
    fh = function (e, i) {
      for (var t in i) t in e || (e[t] = i[t]);
      return e;
    },
    lt = function (e, i, t, r) {
      if (e.addEventListener) {
        var n = Hn[i];
        (r = r || (Ol ? { passive: !1 } : null)),
          e.addEventListener(n || i, t, r),
          n && i !== n && e.addEventListener(i, t, r);
      }
    },
    ot = function (e, i, t) {
      if (e.removeEventListener) {
        var r = Hn[i];
        e.removeEventListener(r || i, t),
          r && i !== r && e.removeEventListener(i, t);
      }
    },
    ri = function (e) {
      e.preventDefault && e.preventDefault(),
        e.preventManipulation && e.preventManipulation();
    },
    ch = function (e, i) {
      for (var t = e.length; t--; ) if (e[t].identifier === i) return !0;
    },
    dh = function o(e) {
      (gu = e.touches && Lo < e.touches.length), ot(e.target, 'touchend', o);
    },
    Xl = function (e) {
      (gu = e.touches && Lo < e.touches.length), lt(e.target, 'touchend', dh);
    },
    nn = function (e) {
      return (
        Re.pageYOffset ||
        e.scrollTop ||
        e.documentElement.scrollTop ||
        e.body.scrollTop ||
        0
      );
    },
    on = function (e) {
      return (
        Re.pageXOffset ||
        e.scrollLeft ||
        e.documentElement.scrollLeft ||
        e.body.scrollLeft ||
        0
      );
    },
    Vl = function o(e, i) {
      lt(e, 'scroll', i), sn(e.parentNode) || o(e.parentNode, i);
    },
    Wl = function o(e, i) {
      ot(e, 'scroll', i), sn(e.parentNode) || o(e.parentNode, i);
    },
    sn = function (e) {
      return (
        !e ||
        e === li ||
        e.nodeType === 9 ||
        e === Wt.body ||
        e === Re ||
        !e.nodeType ||
        !e.parentNode
      );
    },
    ql = function (e, i) {
      var t = i === 'x' ? 'Width' : 'Height',
        r = 'scroll' + t,
        n = 'client' + t;
      return Math.max(
        0,
        sn(e)
          ? Math.max(li[r], Ii[r]) - (Re['inner' + t] || li[n] || Ii[n])
          : e[r] - e[n]
      );
    },
    mu = function o(e, i) {
      var t = ql(e, 'x'),
        r = ql(e, 'y');
      sn(e) ? (e = zi) : o(e.parentNode, i),
        (e._gsMaxScrollX = t),
        (e._gsMaxScrollY = r),
        i ||
          ((e._gsScrollX = e.scrollLeft || 0),
          (e._gsScrollY = e.scrollTop || 0));
    },
    yu = function (e, i, t) {
      var r = e.style;
      !r ||
        (ci(r[i]) && (i = Yn(i, e) || i),
        t == null
          ? r.removeProperty &&
            r.removeProperty(i.replace(/([A-Z])/g, '-$1').toLowerCase())
          : (r[i] = t));
    },
    jn = function (e) {
      return Re.getComputedStyle(
        e instanceof Element ? e : e.host || (e.parentNode || {}).host || e
      );
    },
    Tr = {},
    un = function (e) {
      if (e === Re)
        return (
          (Tr.left = Tr.top = 0),
          (Tr.width = Tr.right =
            li.clientWidth || e.innerWidth || Ii.clientWidth || 0),
          (Tr.height = Tr.bottom =
            (e.innerHeight || 0) - 20 < li.clientHeight
              ? li.clientHeight
              : e.innerHeight || Ii.clientHeight || 0),
          Tr
        );
      var i = e.ownerDocument || Wt,
        t = ci(e.pageX)
          ? !e.nodeType && !ci(e.left) && !ci(e.top)
            ? e
            : Zi(e)[0].getBoundingClientRect()
          : {
              left: e.pageX - on(i),
              top: e.pageY - nn(i),
              right: e.pageX - on(i) + 1,
              bottom: e.pageY - nn(i) + 1,
            };
      return (
        ci(t.right) && !ci(t.width)
          ? ((t.right = t.left + t.width), (t.bottom = t.top + t.height))
          : ci(t.width) &&
            (t = {
              width: t.right - t.left,
              height: t.bottom - t.top,
              right: t.right,
              left: t.left,
              bottom: t.bottom,
              top: t.top,
            }),
        t
      );
    },
    tt = function (e, i, t) {
      var r = e.vars,
        n = r[t],
        s = e._listeners[i],
        u;
      return (
        Ji(n) &&
          (u = n.apply(
            r.callbackScope || e,
            r[t + 'Params'] || [e.pointerEvent]
          )),
        s && e.dispatchEvent(i) === !1 && (u = !1),
        u
      );
    },
    Ul = function (e, i) {
      var t = Zi(e)[0],
        r,
        n,
        s;
      return !t.nodeType && t !== Re
        ? ci(e.left)
          ? ((n = e.min || e.minX || e.minRotation || 0),
            (r = e.min || e.minY || 0),
            {
              left: n,
              top: r,
              width: (e.max || e.maxX || e.maxRotation || 0) - n,
              height: (e.max || e.maxY || 0) - r,
            })
          : ((s = { x: 0, y: 0 }),
            {
              left: e.left - s.x,
              top: e.top - s.y,
              width: e.width,
              height: e.height,
            })
        : hh(t, i);
    },
    ni = {},
    hh = function (e, i) {
      i = Zi(i)[0];
      var t = e.getBBox && e.ownerSVGElement,
        r = e.ownerDocument || Wt,
        n,
        s,
        u,
        a,
        f,
        c,
        h,
        d,
        l,
        _,
        p,
        D,
        y;
      if (e === Re)
        (u = nn(r)),
          (n = on(r)),
          (s =
            n +
            (r.documentElement.clientWidth ||
              e.innerWidth ||
              r.body.clientWidth ||
              0)),
          (a =
            u +
            ((e.innerHeight || 0) - 20 < r.documentElement.clientHeight
              ? r.documentElement.clientHeight
              : e.innerHeight || r.body.clientHeight || 0));
      else {
        if (i === Re || ci(i)) return e.getBoundingClientRect();
        (n = u = 0),
          t
            ? ((_ = e.getBBox()), (p = _.width), (D = _.height))
            : (e.viewBox &&
                (_ = e.viewBox.baseVal) &&
                ((n = _.x || 0), (u = _.y || 0), (p = _.width), (D = _.height)),
              p ||
                ((y = jn(e)),
                (_ = y.boxSizing === 'border-box'),
                (p =
                  (parseFloat(y.width) || e.clientWidth || 0) +
                  (_
                    ? 0
                    : parseFloat(y.borderLeftWidth) +
                      parseFloat(y.borderRightWidth))),
                (D =
                  (parseFloat(y.height) || e.clientHeight || 0) +
                  (_
                    ? 0
                    : parseFloat(y.borderTopWidth) +
                      parseFloat(y.borderBottomWidth))))),
          (s = p),
          (a = D);
      }
      return e === i
        ? { left: n, top: u, width: s - n, height: a - u }
        : ((f = wr(i, !0).multiply(wr(e))),
          (c = f.apply({ x: n, y: u })),
          (h = f.apply({ x: s, y: u })),
          (d = f.apply({ x: s, y: a })),
          (l = f.apply({ x: n, y: a })),
          (n = Math.min(c.x, h.x, d.x, l.x)),
          (u = Math.min(c.y, h.y, d.y, l.y)),
          {
            left: n,
            top: u,
            width: Math.max(c.x, h.x, d.x, l.x) - n,
            height: Math.max(c.y, h.y, d.y, l.y) - u,
          });
    },
    vu = function (e, i, t, r, n, s) {
      var u = {},
        a,
        f,
        c;
      if (i)
        if (n !== 1 && i instanceof Array) {
          if (((u.end = a = []), (c = i.length), Wn(i[0])))
            for (f = 0; f < c; f++) a[f] = Il(i[f], n);
          else for (f = 0; f < c; f++) a[f] = i[f] * n;
          (t += 1.1), (r -= 1.1);
        } else
          Ji(i)
            ? (u.end = function (h) {
                var d = i.call(e, h),
                  l,
                  _;
                if (n !== 1)
                  if (Wn(d)) {
                    l = {};
                    for (_ in d) l[_] = d[_] * n;
                    d = l;
                  } else d *= n;
                return d;
              })
            : (u.end = i);
      return (
        (t || t === 0) && (u.max = t),
        (r || r === 0) && (u.min = r),
        s && (u.velocity = 0),
        u
      );
    },
    ph = function o(e) {
      var i;
      return !e || !e.getAttribute || e === Ii
        ? !1
        : (i = e.getAttribute('data-clickable')) === 'true' ||
          (i !== 'false' &&
            (e.onclick ||
              uh.test(e.nodeName + '') ||
              e.getAttribute('contentEditable') === 'true'))
        ? !0
        : o(e.parentNode);
    },
    $o = function (e, i) {
      for (var t = e.length, r; t--; )
        (r = e[t]),
          (r.ondragstart = r.onselectstart = i ? null : No),
          Te.set(r, { lazy: !0, userSelect: i ? 'text' : 'none' });
    },
    _h = function o(e) {
      if (jn(e).position === 'fixed') return !0;
      if (((e = e.parentNode), e && e.nodeType === 1)) return o(e);
    },
    jl,
    xu,
    gh = function (e, i) {
      (e = Te.utils.toArray(e)[0]), (i = i || {});
      var t = document.createElement('div'),
        r = t.style,
        n = e.firstChild,
        s = 0,
        u = 0,
        a = e.scrollTop,
        f = e.scrollLeft,
        c = e.scrollWidth,
        h = e.scrollHeight,
        d = 0,
        l = 0,
        _ = 0,
        p,
        D,
        y,
        T,
        v,
        b;
      jl && i.force3D !== !1
        ? ((v = 'translate3d('), (b = 'px,0px)'))
        : qn && ((v = 'translate('), (b = 'px)')),
        (this.scrollTop = function (C, M) {
          if (!arguments.length) return -this.top();
          this.top(-C, M);
        }),
        (this.scrollLeft = function (C, M) {
          if (!arguments.length) return -this.left();
          this.left(-C, M);
        }),
        (this.left = function (C, M) {
          if (!arguments.length) return -(e.scrollLeft + u);
          var E = e.scrollLeft - f,
            k = u;
          if ((E > 2 || E < -2) && !M) {
            (f = e.scrollLeft),
              Te.killTweensOf(this, { left: 1, scrollLeft: 1 }),
              this.left(-f),
              i.onKill && i.onKill();
            return;
          }
          (C = -C),
            C < 0
              ? ((u = (C - 0.5) | 0), (C = 0))
              : C > l
              ? ((u = (C - l) | 0), (C = l))
              : (u = 0),
            (u || k) &&
              (this._skip || (r[qn] = v + -u + 'px,' + -s + b),
              u + d >= 0 && (r.paddingRight = u + d + 'px')),
            (e.scrollLeft = C | 0),
            (f = e.scrollLeft);
        }),
        (this.top = function (C, M) {
          if (!arguments.length) return -(e.scrollTop + s);
          var E = e.scrollTop - a,
            k = s;
          if ((E > 2 || E < -2) && !M) {
            (a = e.scrollTop),
              Te.killTweensOf(this, { top: 1, scrollTop: 1 }),
              this.top(-a),
              i.onKill && i.onKill();
            return;
          }
          (C = -C),
            C < 0
              ? ((s = (C - 0.5) | 0), (C = 0))
              : C > _
              ? ((s = (C - _) | 0), (C = _))
              : (s = 0),
            (s || k) && (this._skip || (r[qn] = v + -u + 'px,' + -s + b)),
            (e.scrollTop = C | 0),
            (a = e.scrollTop);
        }),
        (this.maxScrollTop = function () {
          return _;
        }),
        (this.maxScrollLeft = function () {
          return l;
        }),
        (this.disable = function () {
          for (n = t.firstChild; n; )
            (T = n.nextSibling), e.appendChild(n), (n = T);
          e === t.parentNode && e.removeChild(t);
        }),
        (this.enable = function () {
          if (((n = e.firstChild), n !== t)) {
            for (; n; ) (T = n.nextSibling), t.appendChild(n), (n = T);
            e.appendChild(t), this.calibrate();
          }
        }),
        (this.calibrate = function (C) {
          var M = e.clientWidth === p,
            E,
            k,
            R;
          (a = e.scrollTop),
            (f = e.scrollLeft),
            !(
              M &&
              e.clientHeight === D &&
              t.offsetHeight === y &&
              c === e.scrollWidth &&
              h === e.scrollHeight &&
              !C
            ) &&
              ((s || u) &&
                ((k = this.left()),
                (R = this.top()),
                this.left(-e.scrollLeft),
                this.top(-e.scrollTop)),
              (E = jn(e)),
              (!M || C) &&
                ((r.display = 'block'),
                (r.width = 'auto'),
                (r.paddingRight = '0px'),
                (d = Math.max(0, e.scrollWidth - e.clientWidth)),
                d &&
                  (d +=
                    parseFloat(E.paddingLeft) +
                    (xu ? parseFloat(E.paddingRight) : 0))),
              (r.display = 'inline-block'),
              (r.position = 'relative'),
              (r.overflow = 'visible'),
              (r.verticalAlign = 'top'),
              (r.boxSizing = 'content-box'),
              (r.width = '100%'),
              (r.paddingRight = d + 'px'),
              xu && (r.paddingBottom = E.paddingBottom),
              (p = e.clientWidth),
              (D = e.clientHeight),
              (c = e.scrollWidth),
              (h = e.scrollHeight),
              (l = e.scrollWidth - p),
              (_ = e.scrollHeight - D),
              (y = t.offsetHeight),
              (r.display = 'block'),
              (k || R) && (this.left(k), this.top(R)));
        }),
        (this.content = t),
        (this.element = e),
        (this._skip = !1),
        this.enable();
    },
    wu = function (e) {
      if (Rl() && document.body) {
        var i = window && window.navigator;
        (Re = window),
          (Wt = document),
          (li = Wt.documentElement),
          (Ii = Wt.body),
          (hu = Io('div')),
          (Bo = !!window.PointerEvent),
          ($i = Io('div')),
          ($i.style.cssText =
            'visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab'),
          (Vn = $i.style.cursor === 'grab' ? 'grab' : 'move'),
          (Xn = i && i.userAgent.toLowerCase().indexOf('android') !== -1),
          (_u =
            ('ontouchstart' in li && 'orientation' in Re) ||
            (i && (i.MaxTouchPoints > 0 || i.msMaxTouchPoints > 0))),
          (xu = (function () {
            var t = Io('div'),
              r = Io('div'),
              n = r.style,
              s = Ii,
              u;
            return (
              (n.display = 'inline-block'),
              (n.position = 'relative'),
              (t.style.cssText =
                'width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden'),
              t.appendChild(r),
              s.appendChild(t),
              (u = r.offsetHeight + 18 > t.scrollHeight),
              s.removeChild(t),
              u
            );
          })()),
          (Hn = (function (t) {
            for (
              var r = t.split(','),
                n = (
                  ('onpointerdown' in hu)
                    ? 'pointerdown,pointermove,pointerup,pointercancel'
                    : ('onmspointerdown' in hu)
                    ? 'MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel'
                    : t
                ).split(','),
                s = {},
                u = 4;
              --u > -1;

            )
              (s[r[u]] = n[u]), (s[n[u]] = r[u]);
            try {
              li.addEventListener(
                'test',
                null,
                Object.defineProperty({}, 'passive', {
                  get: function () {
                    Ol = 1;
                  },
                })
              );
            } catch {}
            return s;
          })('touchstart,touchmove,touchend,touchcancel')),
          lt(Wt, 'touchcancel', No),
          lt(Re, 'touchmove', No),
          Ii && Ii.addEventListener('touchstart', No),
          lt(Wt, 'contextmenu', function () {
            for (var t in tn) tn[t].isPressed && tn[t].endDrag();
          }),
          (Te = pu = Bl());
      }
      Te
        ? ((fi = Te.plugins.inertia),
          (Yn = Te.utils.checkPrefix),
          (qn = Yn(qn)),
          (Du = Yn(Du)),
          (Zi = Te.utils.toArray),
          (jl = !!Yn('perspective')))
        : e && console.warn('Please gsap.registerPlugin(Draggable)');
    },
    Dh = (function () {
      function o(i) {
        (this._listeners = {}), (this.target = i || this);
      }
      var e = o.prototype;
      return (
        (e.addEventListener = function (t, r) {
          var n = this._listeners[t] || (this._listeners[t] = []);
          ~n.indexOf(r) || n.push(r);
        }),
        (e.removeEventListener = function (t, r) {
          var n = this._listeners[t],
            s = n && n.indexOf(r);
          s >= 0 && n.splice(s, 1);
        }),
        (e.dispatchEvent = function (t) {
          var r = this,
            n;
          return (
            (this._listeners[t] || []).forEach(function (s) {
              return (
                s.call(r, { type: t, target: r.target }) === !1 && (n = !1)
              );
            }),
            n
          );
        }),
        o
      );
    })(),
    an = (function (o) {
      nh(e, o);
      function e(i, t) {
        var r;
        (r = o.call(this) || this),
          pu || wu(1),
          (i = Zi(i)[0]),
          fi || (fi = Te.plugins.inertia),
          (r.vars = t = Il(t || {})),
          (r.target = i),
          (r.x = r.y = r.rotation = 0),
          (r.dragResistance = parseFloat(t.dragResistance) || 0),
          (r.edgeResistance = isNaN(t.edgeResistance)
            ? 1
            : parseFloat(t.edgeResistance) || 0),
          (r.lockAxis = t.lockAxis),
          (r.autoScroll = t.autoScroll || 0),
          (r.lockedAxis = null),
          (r.allowEventDefault = !!t.allowEventDefault),
          Te.getProperty(i, 'x');
        var n = (t.type || 'x,y').toLowerCase(),
          s = ~n.indexOf('x') || ~n.indexOf('y'),
          u = n.indexOf('rotation') !== -1,
          a = u ? 'rotation' : s ? 'x' : 'left',
          f = s ? 'y' : 'top',
          c = !!(~n.indexOf('x') || ~n.indexOf('left') || n === 'scroll'),
          h = !!(~n.indexOf('y') || ~n.indexOf('top') || n === 'scroll'),
          d = t.minimumMovement || 2,
          l = rh(r),
          _ = Zi(t.trigger || t.handle || i),
          p = {},
          D = 0,
          y = !1,
          T = t.autoScrollMarginTop || 40,
          v = t.autoScrollMarginRight || 40,
          b = t.autoScrollMarginBottom || 40,
          C = t.autoScrollMarginLeft || 40,
          M = t.clickableTest || ph,
          E = 0,
          k = i._gsap || Te.core.getCache(i),
          R = _h(i),
          z = function (m, A) {
            return parseFloat(k.get(i, m, A));
          },
          L = i.ownerDocument || Wt,
          Y,
          X,
          G,
          W,
          I,
          H,
          V,
          O,
          w,
          Q,
          ee,
          De,
          ie,
          le,
          fe,
          me,
          ye,
          _i,
          Ie,
          je,
          ue,
          $e,
          N,
          F,
          U,
          x,
          J,
          re,
          Be,
          ce,
          ne,
          ke,
          Le,
          ut = function (m) {
            return (
              ri(m),
              m.stopImmediatePropagation && m.stopImmediatePropagation(),
              !1
            );
          },
          ae = function q(m) {
            if (l.autoScroll && l.isDragging && (y || ye)) {
              var A = i,
                g = l.autoScroll * 15,
                S,
                P,
                B,
                j,
                $,
                oe,
                K,
                he;
              for (
                y = !1,
                  zi.scrollTop =
                    Re.pageYOffset != null
                      ? Re.pageYOffset
                      : L.documentElement.scrollTop != null
                      ? L.documentElement.scrollTop
                      : L.body.scrollTop,
                  zi.scrollLeft =
                    Re.pageXOffset != null
                      ? Re.pageXOffset
                      : L.documentElement.scrollLeft != null
                      ? L.documentElement.scrollLeft
                      : L.body.scrollLeft,
                  j = l.pointerX - zi.scrollLeft,
                  $ = l.pointerY - zi.scrollTop;
                A && !P;

              )
                (P = sn(A.parentNode)),
                  (S = P ? zi : A.parentNode),
                  (B = P
                    ? {
                        bottom: Math.max(li.clientHeight, Re.innerHeight || 0),
                        right: Math.max(li.clientWidth, Re.innerWidth || 0),
                        left: 0,
                        top: 0,
                      }
                    : S.getBoundingClientRect()),
                  (oe = K = 0),
                  h &&
                    ((he = S._gsMaxScrollY - S.scrollTop),
                    he < 0
                      ? (K = he)
                      : $ > B.bottom - b && he
                      ? ((y = !0),
                        (K = Math.min(
                          he,
                          (g * (1 - Math.max(0, B.bottom - $) / b)) | 0
                        )))
                      : $ < B.top + T &&
                        S.scrollTop &&
                        ((y = !0),
                        (K = -Math.min(
                          S.scrollTop,
                          (g * (1 - Math.max(0, $ - B.top) / T)) | 0
                        ))),
                    K && (S.scrollTop += K)),
                  c &&
                    ((he = S._gsMaxScrollX - S.scrollLeft),
                    he < 0
                      ? (oe = he)
                      : j > B.right - v && he
                      ? ((y = !0),
                        (oe = Math.min(
                          he,
                          (g * (1 - Math.max(0, B.right - j) / v)) | 0
                        )))
                      : j < B.left + C &&
                        S.scrollLeft &&
                        ((y = !0),
                        (oe = -Math.min(
                          S.scrollLeft,
                          (g * (1 - Math.max(0, j - B.left) / C)) | 0
                        ))),
                    oe && (S.scrollLeft += oe)),
                  P &&
                    (oe || K) &&
                    (Re.scrollTo(S.scrollLeft, S.scrollTop),
                    Ne(l.pointerX + oe, l.pointerY + K)),
                  (A = S);
            }
            if (ye) {
              var se = l.x,
                be = l.y;
              u
                ? ((l.deltaX = se - parseFloat(k.rotation)),
                  (l.rotation = se),
                  (k.rotation = se + 'deg'),
                  k.renderTransform(1, k))
                : X
                ? (h && ((l.deltaY = be - X.top()), X.top(be)),
                  c && ((l.deltaX = se - X.left()), X.left(se)))
                : s
                ? (h && ((l.deltaY = be - parseFloat(k.y)), (k.y = be + 'px')),
                  c && ((l.deltaX = se - parseFloat(k.x)), (k.x = se + 'px')),
                  k.renderTransform(1, k))
                : (h &&
                    ((l.deltaY = be - parseFloat(i.style.top || 0)),
                    (i.style.top = be + 'px')),
                  c &&
                    ((l.deltaX = se - parseFloat(i.style.left || 0)),
                    (i.style.left = se + 'px'))),
                O &&
                  !m &&
                  !re &&
                  ((re = !0),
                  tt(l, 'drag', 'onDrag') === !1 &&
                    (c && (l.x -= l.deltaX), h && (l.y -= l.deltaY), q(!0)),
                  (re = !1));
            }
            ye = !1;
          },
          ze = function (m, A) {
            var g = l.x,
              S = l.y,
              P,
              B;
            i._gsap || (k = Te.core.getCache(i)),
              k.uncache && Te.getProperty(i, 'x'),
              s
                ? ((l.x = parseFloat(k.x)), (l.y = parseFloat(k.y)))
                : u
                ? (l.x = l.rotation = parseFloat(k.rotation))
                : X
                ? ((l.y = X.top()), (l.x = X.left()))
                : ((l.y =
                    parseFloat(i.style.top || ((B = jn(i)) && B.top)) || 0),
                  (l.x = parseFloat(i.style.left || (B || {}).left) || 0)),
              (Ie || je || ue) &&
                !A &&
                (l.isDragging || l.isThrowing) &&
                (ue &&
                  ((rn.x = l.x),
                  (rn.y = l.y),
                  (P = ue(rn)),
                  P.x !== l.x && ((l.x = P.x), (ye = !0)),
                  P.y !== l.y && ((l.y = P.y), (ye = !0))),
                Ie &&
                  ((P = Ie(l.x)),
                  P !== l.x && ((l.x = P), u && (l.rotation = P), (ye = !0))),
                je && ((P = je(l.y)), P !== l.y && (l.y = P), (ye = !0))),
              ye && ae(!0),
              m ||
                ((l.deltaX = l.x - g),
                (l.deltaY = l.y - S),
                tt(l, 'throwupdate', 'onThrowUpdate'));
          },
          Xe = function (m, A, g, S) {
            return (
              A == null && (A = -br),
              g == null && (g = br),
              Ji(m)
                ? function (P) {
                    var B = l.isPressed ? 1 - l.edgeResistance : 1;
                    return (
                      m.call(
                        l,
                        (P > g
                          ? g + (P - g) * B
                          : P < A
                          ? A + (P - A) * B
                          : P) * S
                      ) * S
                    );
                  }
                : Un(m)
                ? function (P) {
                    for (var B = m.length, j = 0, $ = br, oe, K; --B > -1; )
                      (oe = m[B]),
                        (K = oe - P),
                        K < 0 && (K = -K),
                        K < $ && oe >= A && oe <= g && ((j = B), ($ = K));
                    return m[j];
                  }
                : isNaN(m)
                ? function (P) {
                    return P;
                  }
                : function () {
                    return m * S;
                  }
            );
          },
          Ai = function (m, A, g, S, P, B, j) {
            return (
              (B = B && B < br ? B * B : br),
              Ji(m)
                ? function ($) {
                    var oe = l.isPressed ? 1 - l.edgeResistance : 1,
                      K = $.x,
                      he = $.y,
                      se,
                      be,
                      rt;
                    return (
                      ($.x = K =
                        K > g
                          ? g + (K - g) * oe
                          : K < A
                          ? A + (K - A) * oe
                          : K),
                      ($.y = he =
                        he > P
                          ? P + (he - P) * oe
                          : he < S
                          ? S + (he - S) * oe
                          : he),
                      (se = m.call(l, $)),
                      se !== $ && (($.x = se.x), ($.y = se.y)),
                      j !== 1 && (($.x *= j), ($.y *= j)),
                      B < br &&
                        ((be = $.x - K),
                        (rt = $.y - he),
                        be * be + rt * rt > B && (($.x = K), ($.y = he))),
                      $
                    );
                  }
                : Un(m)
                ? function ($) {
                    for (
                      var oe = m.length, K = 0, he = br, se, be, rt, Ce;
                      --oe > -1;

                    )
                      (rt = m[oe]),
                        (se = rt.x - $.x),
                        (be = rt.y - $.y),
                        (Ce = se * se + be * be),
                        Ce < he && ((K = oe), (he = Ce));
                    return he <= B ? m[K] : $;
                  }
                : function ($) {
                    return $;
                  }
            );
          },
          Ke = function () {
            var m, A, g, S;
            (V = !1),
              X
                ? (X.calibrate(),
                  (l.minX = ee = -X.maxScrollLeft()),
                  (l.minY = ie = -X.maxScrollTop()),
                  (l.maxX = Q = l.maxY = De = 0),
                  (V = !0))
                : t.bounds &&
                  ((m = Ul(t.bounds, i.parentNode)),
                  u
                    ? ((l.minX = ee = m.left),
                      (l.maxX = Q = m.left + m.width),
                      (l.minY = ie = l.maxY = De = 0))
                    : !ci(t.bounds.maxX) || !ci(t.bounds.maxY)
                    ? ((m = t.bounds),
                      (l.minX = ee = m.minX),
                      (l.minY = ie = m.minY),
                      (l.maxX = Q = m.maxX),
                      (l.maxY = De = m.maxY))
                    : ((A = Ul(i, i.parentNode)),
                      (l.minX = ee = Math.round(z(a, 'px') + m.left - A.left)),
                      (l.minY = ie = Math.round(z(f, 'px') + m.top - A.top)),
                      (l.maxX = Q = Math.round(ee + (m.width - A.width))),
                      (l.maxY = De = Math.round(ie + (m.height - A.height)))),
                  ee > Q && ((l.minX = Q), (l.maxX = Q = ee), (ee = l.minX)),
                  ie > De && ((l.minY = De), (l.maxY = De = ie), (ie = l.minY)),
                  u && ((l.minRotation = ee), (l.maxRotation = Q)),
                  (V = !0)),
              t.liveSnap &&
                ((g = t.liveSnap === !0 ? t.snap || {} : t.liveSnap),
                (S = Un(g) || Ji(g)),
                u
                  ? ((Ie = Xe(S ? g : g.rotation, ee, Q, 1)), (je = null))
                  : g.points
                  ? (ue = Ai(
                      S ? g : g.points,
                      ee,
                      Q,
                      ie,
                      De,
                      g.radius,
                      X ? -1 : 1
                    ))
                  : (c &&
                      (Ie = Xe(
                        S ? g : g.x || g.left || g.scrollLeft,
                        ee,
                        Q,
                        X ? -1 : 1
                      )),
                    h &&
                      (je = Xe(
                        S ? g : g.y || g.top || g.scrollTop,
                        ie,
                        De,
                        X ? -1 : 1
                      ))));
          },
          yt = function () {
            (l.isThrowing = !1), tt(l, 'throwcomplete', 'onThrowComplete');
          },
          gi = function () {
            l.isThrowing = !1;
          },
          pt = function (m, A) {
            var g, S, P, B;
            m && fi
              ? (m === !0 &&
                  ((g = t.snap || t.liveSnap || {}),
                  (S = Un(g) || Ji(g)),
                  (m = {
                    resistance:
                      (t.throwResistance || t.resistance || 1e3) / (u ? 10 : 1),
                  }),
                  u
                    ? (m.rotation = vu(l, S ? g : g.rotation, Q, ee, 1, A))
                    : (c &&
                        (m[a] = vu(
                          l,
                          S ? g : g.points || g.x || g.left,
                          Q,
                          ee,
                          X ? -1 : 1,
                          A || l.lockedAxis === 'x'
                        )),
                      h &&
                        (m[f] = vu(
                          l,
                          S ? g : g.points || g.y || g.top,
                          De,
                          ie,
                          X ? -1 : 1,
                          A || l.lockedAxis === 'y'
                        )),
                      (g.points || (Un(g) && Wn(g[0]))) &&
                        ((m.linkedProps = a + ',' + f),
                        (m.radius = g.radius)))),
                (l.isThrowing = !0),
                (B = isNaN(t.overshootTolerance)
                  ? t.edgeResistance === 1
                    ? 0
                    : 1 - l.edgeResistance + 0.2
                  : t.overshootTolerance),
                m.duration ||
                  (m.duration = {
                    max: Math.max(
                      t.minDuration || 0,
                      'maxDuration' in t ? t.maxDuration : 2
                    ),
                    min: isNaN(t.minDuration)
                      ? B === 0 || (Wn(m) && m.resistance > 1e3)
                        ? 0
                        : 0.5
                      : t.minDuration,
                    overshoot: B,
                  }),
                (l.tween = P =
                  Te.to(X || i, {
                    inertia: m,
                    data: '_draggable',
                    onComplete: yt,
                    onInterrupt: gi,
                    onUpdate: t.fastMode ? tt : ze,
                    onUpdateParams: t.fastMode
                      ? [l, 'onthrowupdate', 'onThrowUpdate']
                      : g && g.radius
                      ? [!1, !0]
                      : [],
                  })),
                t.fastMode ||
                  (X && (X._skip = !0),
                  P.render(1e9, !0, !0),
                  ze(!0, !0),
                  (l.endX = l.x),
                  (l.endY = l.y),
                  u && (l.endRotation = l.x),
                  P.play(0),
                  ze(!0, !0),
                  X && (X._skip = !1)))
              : V && l.applyBounds();
          },
          Kt = function (m) {
            var A = F,
              g;
            (F = wr(i.parentNode, !0)),
              m &&
                l.isPressed &&
                !F.equals(A || new xr()) &&
                ((g = A.inverse().apply({ x: G, y: W })),
                F.apply(g, g),
                (G = g.x),
                (W = g.y)),
              F.equals(oh) && (F = null);
          },
          Ct = function () {
            var m = 1 - l.edgeResistance,
              A = R ? on(L) : 0,
              g = R ? nn(L) : 0,
              S,
              P,
              B;
            s &&
              ((k.x = z(a, 'px') + 'px'),
              (k.y = z(f, 'px') + 'px'),
              k.renderTransform()),
              Kt(!1),
              (ni.x = l.pointerX - A),
              (ni.y = l.pointerY - g),
              F && F.apply(ni, ni),
              (G = ni.x),
              (W = ni.y),
              ye && (Ne(l.pointerX, l.pointerY), ae(!0)),
              (ke = wr(i)),
              X
                ? (Ke(), (H = X.top()), (I = X.left()))
                : (te() ? (ze(!0, !0), Ke()) : l.applyBounds(),
                  u
                    ? ((S = i.ownerSVGElement
                        ? [k.xOrigin - i.getBBox().x, k.yOrigin - i.getBBox().y]
                        : (jn(i)[Du] || '0 0').split(' ')),
                      (me = l.rotationOrigin =
                        wr(i).apply({
                          x: parseFloat(S[0]) || 0,
                          y: parseFloat(S[1]) || 0,
                        })),
                      ze(!0, !0),
                      (P = l.pointerX - me.x - A),
                      (B = me.y - l.pointerY + g),
                      (I = l.x),
                      (H = l.y = Math.atan2(B, P) * Ll))
                    : ((H = z(f, 'px')), (I = z(a, 'px')))),
              V &&
                m &&
                (I > Q
                  ? (I = Q + (I - Q) / m)
                  : I < ee && (I = ee - (ee - I) / m),
                u ||
                  (H > De
                    ? (H = De + (H - De) / m)
                    : H < ie && (H = ie - (ie - H) / m))),
              (l.startX = I = er(I)),
              (l.startY = H = er(H));
          },
          te = function () {
            return l.tween && l.tween.isActive();
          },
          Ge = function () {
            $i.parentNode &&
              !te() &&
              !l.isDragging &&
              $i.parentNode.removeChild($i);
          },
          Ye = function (m, A) {
            var g;
            if (
              !Y ||
              l.isPressed ||
              !m ||
              ((m.type === 'mousedown' || m.type === 'pointerdown') &&
                !A &&
                tr() - E < 30 &&
                Hn[l.pointerEvent.type])
            ) {
              ne && m && Y && ri(m);
              return;
            }
            if (
              ((U = te()),
              (Le = !1),
              (l.pointerEvent = m),
              Hn[m.type]
                ? ((N = ~m.type.indexOf('touch')
                    ? m.currentTarget || m.target
                    : L),
                  lt(N, 'touchend', Ae),
                  lt(N, 'touchmove', Ve),
                  lt(N, 'touchcancel', Ae),
                  lt(L, 'touchstart', Xl))
                : ((N = null), lt(L, 'mousemove', Ve)),
              (J = null),
              (!Bo || !N) &&
                (lt(L, 'mouseup', Ae),
                m && m.target && lt(m.target, 'mouseup', Ae)),
              ($e = M.call(l, m.target) && t.dragClickables === !1 && !A),
              $e)
            ) {
              lt(m.target, 'change', Ae),
                tt(l, 'pressInit', 'onPressInit'),
                tt(l, 'press', 'onPress'),
                $o(_, !0),
                (ne = !1);
              return;
            }
            if (
              ((x =
                !N ||
                c === h ||
                l.vars.allowNativeTouchScrolling === !1 ||
                (l.vars.allowContextMenu && m && (m.ctrlKey || m.which > 2))
                  ? !1
                  : c
                  ? 'y'
                  : 'x'),
              (ne = !x && !l.allowEventDefault),
              ne && (ri(m), lt(Re, 'touchforcechange', ri)),
              m.changedTouches
                ? ((m = le = m.changedTouches[0]), (fe = m.identifier))
                : m.pointerId
                ? (fe = m.pointerId)
                : (le = fe = null),
              Lo++,
              lh(ae),
              (W = l.pointerY = m.pageY),
              (G = l.pointerX = m.pageX),
              tt(l, 'pressInit', 'onPressInit'),
              (x || l.autoScroll) && mu(i.parentNode),
              i.parentNode &&
                l.autoScroll &&
                !X &&
                !u &&
                i.parentNode._gsMaxScrollX &&
                !$i.parentNode &&
                !i.getBBox &&
                (($i.style.width = i.parentNode.scrollWidth + 'px'),
                i.parentNode.appendChild($i)),
              Ct(),
              l.tween && l.tween.kill(),
              (l.isThrowing = !1),
              Te.killTweensOf(X || i, p, !0),
              X && Te.killTweensOf(i, { scrollTo: 1 }, !0),
              (l.tween = l.lockedAxis = null),
              (t.zIndexBoost || (!u && !X && t.zIndexBoost !== !1)) &&
                (i.style.zIndex = e.zIndex++),
              (l.isPressed = !0),
              (O = !!(t.onDrag || l._listeners.drag)),
              (w = !!(t.onMove || l._listeners.move)),
              t.cursor !== !1 || t.activeCursor)
            )
              for (g = _.length; --g > -1; )
                Te.set(_[g], {
                  cursor:
                    t.activeCursor ||
                    t.cursor ||
                    (Vn === 'grab' ? 'grabbing' : Vn),
                });
            tt(l, 'press', 'onPress');
          },
          Ve = function (m) {
            var A = m,
              g,
              S,
              P,
              B,
              j,
              $;
            if (!Y || gu || !l.isPressed || !m) {
              ne && m && Y && ri(m);
              return;
            }
            if (((l.pointerEvent = m), (g = m.changedTouches), g)) {
              if (((m = g[0]), m !== le && m.identifier !== fe)) {
                for (
                  B = g.length;
                  --B > -1 && (m = g[B]).identifier !== fe && m.target !== i;

                );
                if (B < 0) return;
              }
            } else if (m.pointerId && fe && m.pointerId !== fe) return;
            if (
              N &&
              x &&
              !J &&
              ((ni.x = m.pageX - (R ? on(L) : 0)),
              (ni.y = m.pageY - (R ? nn(L) : 0)),
              F && F.apply(ni, ni),
              (S = ni.x),
              (P = ni.y),
              (j = Math.abs(S - G)),
              ($ = Math.abs(P - W)),
              ((j !== $ && (j > d || $ > d)) || (Xn && x === J)) &&
                ((J = j > $ && c ? 'x' : 'y'),
                x && J !== x && lt(Re, 'touchforcechange', ri),
                l.vars.lockAxisOnTouchScroll !== !1 &&
                  c &&
                  h &&
                  ((l.lockedAxis = J === 'x' ? 'y' : 'x'),
                  Ji(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, A)),
                Xn && x === J))
            ) {
              Ae(A);
              return;
            }
            !l.allowEventDefault &&
            (!x || (J && x !== J)) &&
            A.cancelable !== !1
              ? (ri(A), (ne = !0))
              : ne && (ne = !1),
              l.autoScroll && (y = !0),
              Ne(m.pageX, m.pageY, w);
          },
          Ne = function (m, A, g) {
            var S = 1 - l.dragResistance,
              P = 1 - l.edgeResistance,
              B = l.pointerX,
              j = l.pointerY,
              $ = H,
              oe = l.x,
              K = l.y,
              he = l.endX,
              se = l.endY,
              be = l.endRotation,
              rt = ye,
              Ce,
              Ee,
              _e,
              Me,
              mi,
              Fe;
            (l.pointerX = m),
              (l.pointerY = A),
              R && ((m -= on(L)), (A -= nn(L))),
              u
                ? ((Me = Math.atan2(me.y - A, m - me.x) * Ll),
                  (mi = l.y - Me),
                  mi > 180
                    ? ((H -= 360), (l.y = Me))
                    : mi < -180 && ((H += 360), (l.y = Me)),
                  l.x !== I || Math.abs(H - Me) > d
                    ? ((l.y = Me), (_e = I + (H - Me) * S))
                    : (_e = I))
                : (F &&
                    ((Fe = m * F.a + A * F.c + F.e),
                    (A = m * F.b + A * F.d + F.f),
                    (m = Fe)),
                  (Ee = A - W),
                  (Ce = m - G),
                  Ee < d && Ee > -d && (Ee = 0),
                  Ce < d && Ce > -d && (Ce = 0),
                  (l.lockAxis || l.lockedAxis) &&
                    (Ce || Ee) &&
                    ((Fe = l.lockedAxis),
                    Fe ||
                      ((l.lockedAxis = Fe =
                        c && Math.abs(Ce) > Math.abs(Ee)
                          ? 'y'
                          : h
                          ? 'x'
                          : null),
                      Fe &&
                        Ji(l.vars.onLockAxis) &&
                        l.vars.onLockAxis.call(l, l.pointerEvent)),
                    Fe === 'y' ? (Ee = 0) : Fe === 'x' && (Ce = 0)),
                  (_e = er(I + Ce * S)),
                  (Me = er(H + Ee * S))),
              (Ie || je || ue) &&
                (l.x !== _e || (l.y !== Me && !u)) &&
                (ue &&
                  ((rn.x = _e),
                  (rn.y = Me),
                  (Fe = ue(rn)),
                  (_e = er(Fe.x)),
                  (Me = er(Fe.y))),
                Ie && (_e = er(Ie(_e))),
                je && (Me = er(je(Me)))),
              V &&
                (_e > Q
                  ? (_e = Q + Math.round((_e - Q) * P))
                  : _e < ee && (_e = ee + Math.round((_e - ee) * P)),
                u ||
                  (Me > De
                    ? (Me = Math.round(De + (Me - De) * P))
                    : Me < ie && (Me = Math.round(ie + (Me - ie) * P)))),
              (l.x !== _e || (l.y !== Me && !u)) &&
                (u
                  ? ((l.endRotation = l.x = l.endX = _e), (ye = !0))
                  : (h && ((l.y = l.endY = Me), (ye = !0)),
                    c && ((l.x = l.endX = _e), (ye = !0))),
                !g || tt(l, 'move', 'onMove') !== !1
                  ? !l.isDragging &&
                    l.isPressed &&
                    ((l.isDragging = Le = !0),
                    tt(l, 'dragstart', 'onDragStart'))
                  : ((l.pointerX = B),
                    (l.pointerY = j),
                    (H = $),
                    (l.x = oe),
                    (l.y = K),
                    (l.endX = he),
                    (l.endY = se),
                    (l.endRotation = be),
                    (ye = rt)));
          },
          Ae = function q(m, A) {
            if (
              !Y ||
              !l.isPressed ||
              (m &&
                fe != null &&
                !A &&
                ((m.pointerId && m.pointerId !== fe && m.target !== i) ||
                  (m.changedTouches && !ch(m.changedTouches, fe))))
            ) {
              ne && m && Y && ri(m);
              return;
            }
            l.isPressed = !1;
            var g = m,
              S = l.isDragging,
              P = l.vars.allowContextMenu && m && (m.ctrlKey || m.which > 2),
              B = Te.delayedCall(0.001, Ge),
              j,
              $,
              oe,
              K,
              he;
            if (
              (N
                ? (ot(N, 'touchend', q),
                  ot(N, 'touchmove', Ve),
                  ot(N, 'touchcancel', q),
                  ot(L, 'touchstart', Xl))
                : ot(L, 'mousemove', Ve),
              ot(Re, 'touchforcechange', ri),
              (!Bo || !N) &&
                (ot(L, 'mouseup', q),
                m && m.target && ot(m.target, 'mouseup', q)),
              (ye = !1),
              S && ((D = Nl = tr()), (l.isDragging = !1)),
              Hl(ae),
              $e && !P)
            ) {
              m && (ot(m.target, 'change', q), (l.pointerEvent = g)),
                $o(_, !1),
                tt(l, 'release', 'onRelease'),
                tt(l, 'click', 'onClick'),
                ($e = !1);
              return;
            }
            for ($ = _.length; --$ > -1; )
              yu(_[$], 'cursor', t.cursor || (t.cursor !== !1 ? Vn : null));
            if ((Lo--, m)) {
              if (
                ((j = m.changedTouches),
                j && ((m = j[0]), m !== le && m.identifier !== fe))
              ) {
                for (
                  $ = j.length;
                  --$ > -1 && (m = j[$]).identifier !== fe && m.target !== i;

                );
                if ($ < 0 && !A) return;
              }
              (l.pointerEvent = g),
                (l.pointerX = m.pageX),
                (l.pointerY = m.pageY);
            }
            return (
              P && g
                ? (ri(g), (ne = !0), tt(l, 'release', 'onRelease'))
                : g && !S
                ? ((ne = !1),
                  U && (t.snap || t.bounds) && pt(t.inertia || t.throwProps),
                  tt(l, 'release', 'onRelease'),
                  (!Xn || g.type !== 'touchmove') &&
                    g.type.indexOf('cancel') === -1 &&
                    (tt(l, 'click', 'onClick'),
                    tr() - E < 300 && tt(l, 'doubleclick', 'onDoubleClick'),
                    (K = g.target || i),
                    (E = tr()),
                    (he = function () {
                      E !== Be &&
                        l.enabled() &&
                        !l.isPressed &&
                        !g.defaultPrevented &&
                        (K.click
                          ? K.click()
                          : L.createEvent &&
                            ((oe = L.createEvent('MouseEvents')),
                            oe.initMouseEvent(
                              'click',
                              !0,
                              !0,
                              Re,
                              1,
                              l.pointerEvent.screenX,
                              l.pointerEvent.screenY,
                              l.pointerX,
                              l.pointerY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                            K.dispatchEvent(oe)));
                    }),
                    !Xn && !g.defaultPrevented && Te.delayedCall(0.05, he)))
                : (pt(t.inertia || t.throwProps),
                  !l.allowEventDefault &&
                  g &&
                  (t.dragClickables !== !1 || !M.call(l, g.target)) &&
                  S &&
                  (!x || (J && x === J)) &&
                  g.cancelable !== !1
                    ? ((ne = !0), ri(g))
                    : (ne = !1),
                  tt(l, 'release', 'onRelease')),
              te() && B.duration(l.tween.duration()),
              S && tt(l, 'dragend', 'onDragEnd'),
              !0
            );
          },
          Tt = function (m) {
            if (m && l.isDragging && !X) {
              var A = m.target || i.parentNode,
                g = A.scrollLeft - A._gsScrollX,
                S = A.scrollTop - A._gsScrollY;
              (g || S) &&
                (F
                  ? ((G -= g * F.a + S * F.c), (W -= S * F.d + g * F.b))
                  : ((G -= g), (W -= S)),
                (A._gsScrollX += g),
                (A._gsScrollY += S),
                Ne(l.pointerX, l.pointerY));
            }
          },
          Di = function (m) {
            var A = tr(),
              g = A - E < 100,
              S = A - D < 50,
              P = g && Be === E,
              B = l.pointerEvent && l.pointerEvent.defaultPrevented,
              j = g && ce === E,
              $ = m.isTrusted || (m.isTrusted == null && g && P);
            if (
              ((P || (S && l.vars.suppressClickOnDrag !== !1)) &&
                m.stopImmediatePropagation &&
                m.stopImmediatePropagation(),
              g &&
                !(l.pointerEvent && l.pointerEvent.defaultPrevented) &&
                (!P || ($ && !j)))
            ) {
              $ && P && (ce = E), (Be = E);
              return;
            }
            (l.isPressed || S || g) && (!$ || !m.detail || !g || B) && ri(m),
              !g &&
                !S &&
                !Le &&
                (m && m.target && (l.pointerEvent = m),
                tt(l, 'click', 'onClick'));
          },
          ui = function (m) {
            return F
              ? {
                  x: m.x * F.a + m.y * F.c + F.e,
                  y: m.x * F.b + m.y * F.d + F.f,
                }
              : { x: m.x, y: m.y };
          };
        return (
          (_i = e.get(i)),
          _i && _i.kill(),
          (r.startDrag = function (q, m) {
            var A, g, S, P;
            Ye(q || l.pointerEvent, !0),
              m &&
                !l.hitTest(q || l.pointerEvent) &&
                ((A = un(q || l.pointerEvent)),
                (g = un(i)),
                (S = ui({ x: A.left + A.width / 2, y: A.top + A.height / 2 })),
                (P = ui({ x: g.left + g.width / 2, y: g.top + g.height / 2 })),
                (G -= S.x - P.x),
                (W -= S.y - P.y)),
              l.isDragging ||
                ((l.isDragging = Le = !0), tt(l, 'dragstart', 'onDragStart'));
          }),
          (r.drag = Ve),
          (r.endDrag = function (q) {
            return Ae(q || l.pointerEvent, !0);
          }),
          (r.timeSinceDrag = function () {
            return l.isDragging ? 0 : (tr() - D) / 1e3;
          }),
          (r.timeSinceClick = function () {
            return (tr() - E) / 1e3;
          }),
          (r.hitTest = function (q, m) {
            return e.hitTest(l.target, q, m);
          }),
          (r.getDirection = function (q, m) {
            var A =
                q === 'velocity' && fi ? q : Wn(q) && !u ? 'element' : 'start',
              g,
              S,
              P,
              B,
              j,
              $;
            return (
              A === 'element' && ((j = un(l.target)), ($ = un(q))),
              (g =
                A === 'start'
                  ? l.x - I
                  : A === 'velocity'
                  ? fi.getVelocity(i, a)
                  : j.left + j.width / 2 - ($.left + $.width / 2)),
              u
                ? g < 0
                  ? 'counter-clockwise'
                  : 'clockwise'
                : ((m = m || 2),
                  (S =
                    A === 'start'
                      ? l.y - H
                      : A === 'velocity'
                      ? fi.getVelocity(i, f)
                      : j.top + j.height / 2 - ($.top + $.height / 2)),
                  (P = Math.abs(g / S)),
                  (B = P < 1 / m ? '' : g < 0 ? 'left' : 'right'),
                  P < m &&
                    (B !== '' && (B += '-'), (B += S < 0 ? 'up' : 'down')),
                  B)
            );
          }),
          (r.applyBounds = function (q, m) {
            var A, g, S, P, B, j;
            if (q && t.bounds !== q) return (t.bounds = q), l.update(!0, m);
            if ((ze(!0), Ke(), V && !te())) {
              if (
                ((A = l.x),
                (g = l.y),
                A > Q ? (A = Q) : A < ee && (A = ee),
                g > De ? (g = De) : g < ie && (g = ie),
                (l.x !== A || l.y !== g) &&
                  ((S = !0),
                  (l.x = l.endX = A),
                  u ? (l.endRotation = A) : (l.y = l.endY = g),
                  (ye = !0),
                  ae(!0),
                  l.autoScroll && !l.isDragging))
              )
                for (
                  mu(i.parentNode),
                    P = i,
                    zi.scrollTop =
                      Re.pageYOffset != null
                        ? Re.pageYOffset
                        : L.documentElement.scrollTop != null
                        ? L.documentElement.scrollTop
                        : L.body.scrollTop,
                    zi.scrollLeft =
                      Re.pageXOffset != null
                        ? Re.pageXOffset
                        : L.documentElement.scrollLeft != null
                        ? L.documentElement.scrollLeft
                        : L.body.scrollLeft;
                  P && !j;

                )
                  (j = sn(P.parentNode)),
                    (B = j ? zi : P.parentNode),
                    h &&
                      B.scrollTop > B._gsMaxScrollY &&
                      (B.scrollTop = B._gsMaxScrollY),
                    c &&
                      B.scrollLeft > B._gsMaxScrollX &&
                      (B.scrollLeft = B._gsMaxScrollX),
                    (P = B);
              l.isThrowing &&
                (S ||
                  l.endX > Q ||
                  l.endX < ee ||
                  l.endY > De ||
                  l.endY < ie) &&
                pt(t.inertia || t.throwProps, S);
            }
            return l;
          }),
          (r.update = function (q, m, A) {
            if (m && l.isPressed) {
              var g = wr(i),
                S = ke.apply({ x: l.x - I, y: l.y - H }),
                P = wr(i.parentNode, !0);
              P.apply({ x: g.e - S.x, y: g.f - S.y }, S),
                (l.x -= S.x - P.e),
                (l.y -= S.y - P.f),
                ae(!0),
                Ct();
            }
            var B = l.x,
              j = l.y;
            return (
              Kt(!m),
              q ? l.applyBounds() : (ye && A && ae(!0), ze(!0)),
              m && (Ne(l.pointerX, l.pointerY), ye && ae(!0)),
              l.isPressed &&
                !m &&
                ((c && Math.abs(B - l.x) > 0.01) ||
                  (h && Math.abs(j - l.y) > 0.01 && !u)) &&
                Ct(),
              l.autoScroll &&
                (mu(i.parentNode, l.isDragging),
                (y = l.isDragging),
                ae(!0),
                Wl(i, Tt),
                Vl(i, Tt)),
              l
            );
          }),
          (r.enable = function (q) {
            var m = { lazy: !0 },
              A,
              g,
              S;
            if (
              (t.cursor !== !1 && (m.cursor = t.cursor || Vn),
              Te.utils.checkPrefix('touchCallout') && (m.touchCallout = 'none'),
              q !== 'soft')
            ) {
              for (
                $l(
                  _,
                  c === h
                    ? 'none'
                    : (t.allowNativeTouchScrolling &&
                        (i.scrollHeight === i.clientHeight) ==
                          (i.scrollWidth === i.clientHeight)) ||
                      t.allowEventDefault
                    ? 'manipulation'
                    : c
                    ? 'pan-y'
                    : 'pan-x'
                ),
                  g = _.length;
                --g > -1;

              )
                (S = _[g]),
                  Bo || lt(S, 'mousedown', Ye),
                  lt(S, 'touchstart', Ye),
                  lt(S, 'click', Di, !0),
                  Te.set(S, m),
                  S.getBBox &&
                    S.ownerSVGElement &&
                    c !== h &&
                    Te.set(S.ownerSVGElement, {
                      touchAction:
                        t.allowNativeTouchScrolling || t.allowEventDefault
                          ? 'manipulation'
                          : c
                          ? 'pan-y'
                          : 'pan-x',
                    }),
                  t.allowContextMenu || lt(S, 'contextmenu', ut);
              $o(_, !1);
            }
            return (
              Vl(i, Tt),
              (Y = !0),
              fi &&
                q !== 'soft' &&
                fi.track(X || i, s ? 'x,y' : u ? 'rotation' : 'top,left'),
              (i._gsDragID = A = 'd' + sh++),
              (tn[A] = l),
              X && (X.enable(), (X.element._gsDragID = A)),
              (t.bounds || u) && Ct(),
              t.bounds && l.applyBounds(),
              l
            );
          }),
          (r.disable = function (q) {
            for (var m = l.isDragging, A = _.length, g; --A > -1; )
              yu(_[A], 'cursor', null);
            if (q !== 'soft') {
              for ($l(_, null), A = _.length; --A > -1; )
                (g = _[A]),
                  yu(g, 'touchCallout', null),
                  ot(g, 'mousedown', Ye),
                  ot(g, 'touchstart', Ye),
                  ot(g, 'click', Di),
                  ot(g, 'contextmenu', ut);
              $o(_, !0),
                N &&
                  (ot(N, 'touchcancel', Ae),
                  ot(N, 'touchend', Ae),
                  ot(N, 'touchmove', Ve)),
                ot(L, 'mouseup', Ae),
                ot(L, 'mousemove', Ve);
            }
            return (
              Wl(i, Tt),
              (Y = !1),
              fi &&
                q !== 'soft' &&
                fi.untrack(X || i, s ? 'x,y' : u ? 'rotation' : 'top,left'),
              X && X.disable(),
              Hl(ae),
              (l.isDragging = l.isPressed = $e = !1),
              m && tt(l, 'dragend', 'onDragEnd'),
              l
            );
          }),
          (r.enabled = function (q, m) {
            return arguments.length ? (q ? l.enable(m) : l.disable(m)) : Y;
          }),
          (r.kill = function () {
            return (
              (l.isThrowing = !1),
              l.tween && l.tween.kill(),
              l.disable(),
              Te.set(_, { clearProps: 'userSelect' }),
              delete tn[i._gsDragID],
              l
            );
          }),
          ~n.indexOf('scroll') &&
            ((X = r.scrollProxy =
              new gh(
                i,
                ah(
                  {
                    onKill: function () {
                      l.isPressed && Ae(null);
                    },
                  },
                  t
                )
              )),
            (i.style.overflowY = h && !_u ? 'auto' : 'hidden'),
            (i.style.overflowX = c && !_u ? 'auto' : 'hidden'),
            (i = X.content)),
          u ? (p.rotation = 1) : (c && (p[a] = 1), h && (p[f] = 1)),
          (k.force3D = 'force3D' in t ? t.force3D : !0),
          r.enable(),
          r
        );
      }
      return (
        (e.register = function (t) {
          (Te = t), wu();
        }),
        (e.create = function (t, r) {
          return (
            pu || wu(!0),
            Zi(t).map(function (n) {
              return new e(n, r);
            })
          );
        }),
        (e.get = function (t) {
          return tn[(Zi(t)[0] || {})._gsDragID];
        }),
        (e.timeSinceDrag = function () {
          return (tr() - Nl) / 1e3;
        }),
        (e.hitTest = function (t, r, n) {
          if (t === r) return !1;
          var s = un(t),
            u = un(r),
            a = s.top,
            f = s.left,
            c = s.right,
            h = s.bottom,
            d = s.width,
            l = s.height,
            _ = u.left > c || u.right < f || u.top > h || u.bottom < a,
            p,
            D,
            y;
          return _ || !n
            ? !_
            : ((y = (n + '').indexOf('%') !== -1),
              (n = parseFloat(n) || 0),
              (p = { left: Math.max(f, u.left), top: Math.max(a, u.top) }),
              (p.width = Math.min(c, u.right) - p.left),
              (p.height = Math.min(h, u.bottom) - p.top),
              p.width < 0 || p.height < 0
                ? !1
                : y
                ? ((n *= 0.01),
                  (D = p.width * p.height),
                  D >= d * l * n || D >= u.width * u.height * n)
                : p.width > n && p.height > n);
        }),
        e
      );
    })(Dh);
  fh(an.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1,
  }),
    (an.zIndex = 1e3),
    (an.version = '3.11.3'),
    Bl() && Te.registerPlugin(an);
  function Kl(o, e) {
    for (var i = 0; i < e.length; i++) {
      var t = e[i];
      (t.enumerable = t.enumerable || !1),
        (t.configurable = !0),
        'value' in t && (t.writable = !0),
        Object.defineProperty(o, t.key, t);
    }
  }
  function mh(o, e, i) {
    return e && Kl(o.prototype, e), i && Kl(o, i), o;
  }
  /*!
   * Observer 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var wt,
    bu,
    qt,
    ir,
    rr,
    ln,
    Gl,
    Sr,
    Kn,
    Ql,
    Yi,
    di,
    Zl = function () {
      return (
        wt ||
        (typeof window != 'undefined' &&
          (wt = window.gsap) &&
          wt.registerPlugin &&
          wt)
      );
    },
    Jl = 1,
    fn = [],
    xe = [],
    wi = [],
    Gn = Date.now,
    Cu = function (e, i) {
      return i;
    },
    yh = function () {
      var e = Kn.core,
        i = e.bridge || {},
        t = e._scrollers,
        r = e._proxies;
      t.push.apply(t, xe),
        r.push.apply(r, wi),
        (xe = t),
        (wi = r),
        (Cu = function (s, u) {
          return i[s](u);
        });
    },
    nr = function (e, i) {
      return ~wi.indexOf(e) && wi[wi.indexOf(e) + 1][i];
    },
    Qn = function (e) {
      return !!~Ql.indexOf(e);
    },
    Lt = function (e, i, t, r, n) {
      return e.addEventListener(i, t, { passive: !r, capture: !!n });
    },
    St = function (e, i, t, r) {
      return e.removeEventListener(i, t, !!r);
    },
    zo = 'scrollLeft',
    Yo = 'scrollTop',
    Tu = function () {
      return (Yi && Yi.isPressed) || xe.cache++;
    },
    Ho = function (e, i) {
      var t = function r(n) {
        if (n || n === 0) {
          Jl && (qt.history.scrollRestoration = 'manual');
          var s = Yi && Yi.isPressed;
          (n = r.v = Math.round(n) || (Yi && Yi.iOS ? 1 : 0)),
            e(n),
            (r.cacheID = xe.cache),
            s && Cu('ss', n);
        } else
          (i || xe.cache !== r.cacheID || Cu('ref')) &&
            ((r.cacheID = xe.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (t.offset = 0), e && t;
    },
    Et = {
      s: zo,
      p: 'left',
      p2: 'Left',
      os: 'right',
      os2: 'Right',
      d: 'width',
      d2: 'Width',
      a: 'x',
      sc: Ho(function (o) {
        return arguments.length
          ? qt.scrollTo(o, ft.sc())
          : qt.pageXOffset || ir[zo] || rr[zo] || ln[zo] || 0;
      }),
    },
    ft = {
      s: Yo,
      p: 'top',
      p2: 'Top',
      os: 'bottom',
      os2: 'Bottom',
      d: 'height',
      d2: 'Height',
      a: 'y',
      op: Et,
      sc: Ho(function (o) {
        return arguments.length
          ? qt.scrollTo(Et.sc(), o)
          : qt.pageYOffset || ir[Yo] || rr[Yo] || ln[Yo] || 0;
      }),
    },
    Nt = function (e) {
      return (
        wt.utils.toArray(e)[0] ||
        (typeof e == 'string' && wt.config().nullTargetWarn !== !1
          ? console.warn('Element not found:', e)
          : null)
      );
    },
    or = function (e, i) {
      var t = i.s,
        r = i.sc;
      Qn(e) && (e = ir.scrollingElement || rr);
      var n = xe.indexOf(e),
        s = r === ft.sc ? 1 : 2;
      !~n && (n = xe.push(e) - 1),
        xe[n + s] || e.addEventListener('scroll', Tu);
      var u = xe[n + s],
        a =
          u ||
          (xe[n + s] =
            Ho(nr(e, t), !0) ||
            (Qn(e)
              ? r
              : Ho(function (f) {
                  return arguments.length ? (e[t] = f) : e[t];
                })));
      return (
        (a.target = e),
        u || (a.smooth = wt.getProperty(e, 'scrollBehavior') === 'smooth'),
        a
      );
    },
    Su = function (e, i, t) {
      var r = e,
        n = e,
        s = Gn(),
        u = s,
        a = i || 50,
        f = Math.max(500, a * 3),
        c = function (_, p) {
          var D = Gn();
          p || D - s > a
            ? ((n = r), (r = _), (u = s), (s = D))
            : t
            ? (r += _)
            : (r = n + ((_ - n) / (D - u)) * (s - u));
        },
        h = function () {
          (n = r = t ? 0 : r), (u = s = 0);
        },
        d = function (_) {
          var p = u,
            D = n,
            y = Gn();
          return (
            (_ || _ === 0) && _ !== r && c(_),
            s === u || y - u > f
              ? 0
              : ((r + (t ? D : -D)) / ((t ? y : s) - p)) * 1e3
          );
        };
      return { update: c, reset: h, getVelocity: d };
    },
    Zn = function (e, i) {
      return (
        i && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    ef = function (e) {
      var i = Math.max.apply(Math, e),
        t = Math.min.apply(Math, e);
      return Math.abs(i) >= Math.abs(t) ? i : t;
    },
    tf = function () {
      (Kn = wt.core.globals().ScrollTrigger), Kn && Kn.core && yh();
    },
    rf = function (e) {
      return (
        (wt = e || Zl()),
        wt &&
          typeof document != 'undefined' &&
          document.body &&
          ((qt = window),
          (ir = document),
          (rr = ir.documentElement),
          (ln = ir.body),
          (Ql = [qt, ir, rr, ln]),
          wt.utils.clamp,
          (Sr = 'onpointerenter' in ln ? 'pointer' : 'mouse'),
          (Gl = st.isTouch =
            qt.matchMedia &&
            qt.matchMedia('(hover: none), (pointer: coarse)').matches
              ? 1
              : 'ontouchstart' in qt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (di = st.eventTypes =
            (
              'ontouchstart' in rr
                ? 'touchstart,touchmove,touchcancel,touchend'
                : 'onpointerdown' in rr
                ? 'pointerdown,pointermove,pointercancel,pointerup'
                : 'mousedown,mousemove,mouseup,mouseup'
            ).split(',')),
          setTimeout(function () {
            return (Jl = 0);
          }, 500),
          tf(),
          (bu = 1)),
        bu
      );
    };
  (Et.op = ft), (xe.cache = 0);
  var st = (function () {
    function o(i) {
      this.init(i);
    }
    var e = o.prototype;
    return (
      (e.init = function (t) {
        bu || rf(wt) || console.warn('Please gsap.registerPlugin(Observer)'),
          Kn || tf();
        var r = t.tolerance,
          n = t.dragMinimum,
          s = t.type,
          u = t.target,
          a = t.lineHeight,
          f = t.debounce,
          c = t.preventDefault,
          h = t.onStop,
          d = t.onStopDelay,
          l = t.ignore,
          _ = t.wheelSpeed,
          p = t.event,
          D = t.onDragStart,
          y = t.onDragEnd,
          T = t.onDrag,
          v = t.onPress,
          b = t.onRelease,
          C = t.onRight,
          M = t.onLeft,
          E = t.onUp,
          k = t.onDown,
          R = t.onChangeX,
          z = t.onChangeY,
          L = t.onChange,
          Y = t.onToggleX,
          X = t.onToggleY,
          G = t.onHover,
          W = t.onHoverEnd,
          I = t.onMove,
          H = t.ignoreCheck,
          V = t.isNormalizer,
          O = t.onGestureStart,
          w = t.onGestureEnd,
          Q = t.onWheel,
          ee = t.onEnable,
          De = t.onDisable,
          ie = t.onClick,
          le = t.scrollSpeed,
          fe = t.capture,
          me = t.allowClicks,
          ye = t.lockAxis,
          _i = t.onLockAxis;
        (this.target = u = Nt(u) || rr),
          (this.vars = t),
          l && (l = wt.utils.toArray(l)),
          (r = r || 1e-9),
          (n = n || 0),
          (_ = _ || 1),
          (le = le || 1),
          (s = s || 'wheel,touch,pointer'),
          (f = f !== !1),
          a || (a = parseFloat(qt.getComputedStyle(ln).lineHeight) || 22);
        var Ie,
          je,
          ue,
          $e,
          N,
          F,
          U,
          x = this,
          J = 0,
          re = 0,
          Be = or(u, Et),
          ce = or(u, ft),
          ne = Be(),
          ke = ce(),
          Le =
            ~s.indexOf('touch') &&
            !~s.indexOf('pointer') &&
            di[0] === 'pointerdown',
          ut = Qn(u),
          ae = u.ownerDocument || ir,
          ze = [0, 0, 0],
          Xe = [0, 0, 0],
          Ai = 0,
          Ke = function () {
            return (Ai = Gn());
          },
          yt = function (g, S) {
            return (
              ((x.event = g) && l && ~l.indexOf(g.target)) ||
              (S && Le && g.pointerType !== 'touch') ||
              (H && H(g, S))
            );
          },
          gi = function () {
            x._vx.reset(), x._vy.reset(), je.pause(), h && h(x);
          },
          pt = function () {
            var g = (x.deltaX = ef(ze)),
              S = (x.deltaY = ef(Xe)),
              P = Math.abs(g) >= r,
              B = Math.abs(S) >= r;
            L && (P || B) && L(x, g, S, ze, Xe),
              P &&
                (C && x.deltaX > 0 && C(x),
                M && x.deltaX < 0 && M(x),
                R && R(x),
                Y && x.deltaX < 0 != J < 0 && Y(x),
                (J = x.deltaX),
                (ze[0] = ze[1] = ze[2] = 0)),
              B &&
                (k && x.deltaY > 0 && k(x),
                E && x.deltaY < 0 && E(x),
                z && z(x),
                X && x.deltaY < 0 != re < 0 && X(x),
                (re = x.deltaY),
                (Xe[0] = Xe[1] = Xe[2] = 0)),
              ($e || ue) && (I && I(x), ue && (T(x), (ue = !1)), ($e = !1)),
              F && !(F = !1) && _i && _i(x),
              N && (Q(x), (N = !1)),
              (Ie = 0);
          },
          Kt = function (g, S, P) {
            (ze[P] += g),
              (Xe[P] += S),
              x._vx.update(g),
              x._vy.update(S),
              f ? Ie || (Ie = requestAnimationFrame(pt)) : pt();
          },
          Ct = function (g, S) {
            ye &&
              !U &&
              ((x.axis = U = Math.abs(g) > Math.abs(S) ? 'x' : 'y'), (F = !0)),
              U !== 'y' && ((ze[2] += g), x._vx.update(g, !0)),
              U !== 'x' && ((Xe[2] += S), x._vy.update(S, !0)),
              f ? Ie || (Ie = requestAnimationFrame(pt)) : pt();
          },
          te = function (g) {
            if (!yt(g, 1)) {
              g = Zn(g, c);
              var S = g.clientX,
                P = g.clientY,
                B = S - x.x,
                j = P - x.y,
                $ = x.isDragging;
              (x.x = S),
                (x.y = P),
                ($ ||
                  Math.abs(x.startX - S) >= n ||
                  Math.abs(x.startY - P) >= n) &&
                  (T && (ue = !0),
                  $ || (x.isDragging = !0),
                  Ct(B, j),
                  $ || (D && D(x)));
            }
          },
          Ge = (x.onPress = function (A) {
            yt(A, 1) ||
              ((x.axis = U = null),
              je.pause(),
              (x.isPressed = !0),
              (A = Zn(A)),
              (J = re = 0),
              (x.startX = x.x = A.clientX),
              (x.startY = x.y = A.clientY),
              x._vx.reset(),
              x._vy.reset(),
              Lt(V ? u : ae, di[1], te, c, !0),
              (x.deltaX = x.deltaY = 0),
              v && v(x));
          }),
          Ye = function (g) {
            if (!yt(g, 1)) {
              St(V ? u : ae, di[1], te, !0);
              var S =
                  x.isDragging &&
                  (Math.abs(x.x - x.startX) > 3 ||
                    Math.abs(x.y - x.startY) > 3),
                P = Zn(g);
              S ||
                (x._vx.reset(),
                x._vy.reset(),
                c &&
                  me &&
                  wt.delayedCall(0.08, function () {
                    if (Gn() - Ai > 300 && !g.defaultPrevented) {
                      if (g.target.click) g.target.click();
                      else if (ae.createEvent) {
                        var B = ae.createEvent('MouseEvents');
                        B.initMouseEvent(
                          'click',
                          !0,
                          !0,
                          qt,
                          1,
                          P.screenX,
                          P.screenY,
                          P.clientX,
                          P.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          g.target.dispatchEvent(B);
                      }
                    }
                  })),
                (x.isDragging = x.isGesturing = x.isPressed = !1),
                h && !V && je.restart(!0),
                y && S && y(x),
                b && b(x, S);
            }
          },
          Ve = function (g) {
            return (
              g.touches &&
              g.touches.length > 1 &&
              (x.isGesturing = !0) &&
              O(g, x.isDragging)
            );
          },
          Ne = function () {
            return (x.isGesturing = !1) || w(x);
          },
          Ae = function (g) {
            if (!yt(g)) {
              var S = Be(),
                P = ce();
              Kt((S - ne) * le, (P - ke) * le, 1),
                (ne = S),
                (ke = P),
                h && je.restart(!0);
            }
          },
          Tt = function (g) {
            if (!yt(g)) {
              (g = Zn(g, c)), Q && (N = !0);
              var S =
                (g.deltaMode === 1
                  ? a
                  : g.deltaMode === 2
                  ? qt.innerHeight
                  : 1) * _;
              Kt(g.deltaX * S, g.deltaY * S, 0), h && !V && je.restart(!0);
            }
          },
          Di = function (g) {
            if (!yt(g)) {
              var S = g.clientX,
                P = g.clientY,
                B = S - x.x,
                j = P - x.y;
              (x.x = S), (x.y = P), ($e = !0), (B || j) && Ct(B, j);
            }
          },
          ui = function (g) {
            (x.event = g), G(x);
          },
          q = function (g) {
            (x.event = g), W(x);
          },
          m = function (g) {
            return yt(g) || (Zn(g, c) && ie(x));
          };
        (je = x._dc = wt.delayedCall(d || 0.25, gi).pause()),
          (x.deltaX = x.deltaY = 0),
          (x._vx = Su(0, 50, !0)),
          (x._vy = Su(0, 50, !0)),
          (x.scrollX = Be),
          (x.scrollY = ce),
          (x.isDragging = x.isGesturing = x.isPressed = !1),
          (x.enable = function (A) {
            return (
              x.isEnabled ||
                (Lt(ut ? ae : u, 'scroll', Tu),
                s.indexOf('scroll') >= 0 &&
                  Lt(ut ? ae : u, 'scroll', Ae, c, fe),
                s.indexOf('wheel') >= 0 && Lt(u, 'wheel', Tt, c, fe),
                ((s.indexOf('touch') >= 0 && Gl) ||
                  s.indexOf('pointer') >= 0) &&
                  (Lt(u, di[0], Ge, c, fe),
                  Lt(ae, di[2], Ye),
                  Lt(ae, di[3], Ye),
                  me && Lt(u, 'click', Ke, !1, !0),
                  ie && Lt(u, 'click', m),
                  O && Lt(ae, 'gesturestart', Ve),
                  w && Lt(ae, 'gestureend', Ne),
                  G && Lt(u, Sr + 'enter', ui),
                  W && Lt(u, Sr + 'leave', q),
                  I && Lt(u, Sr + 'move', Di)),
                (x.isEnabled = !0),
                A && A.type && Ge(A),
                ee && ee(x)),
              x
            );
          }),
          (x.disable = function () {
            x.isEnabled &&
              (fn.filter(function (A) {
                return A !== x && Qn(A.target);
              }).length || St(ut ? ae : u, 'scroll', Tu),
              x.isPressed &&
                (x._vx.reset(), x._vy.reset(), St(V ? u : ae, di[1], te, !0)),
              St(ut ? ae : u, 'scroll', Ae, fe),
              St(u, 'wheel', Tt, fe),
              St(u, di[0], Ge, fe),
              St(ae, di[2], Ye),
              St(ae, di[3], Ye),
              St(u, 'click', Ke, !0),
              St(u, 'click', m),
              St(ae, 'gesturestart', Ve),
              St(ae, 'gestureend', Ne),
              St(u, Sr + 'enter', ui),
              St(u, Sr + 'leave', q),
              St(u, Sr + 'move', Di),
              (x.isEnabled = x.isPressed = x.isDragging = !1),
              De && De(x));
          }),
          (x.kill = function () {
            x.disable();
            var A = fn.indexOf(x);
            A >= 0 && fn.splice(A, 1), Yi === x && (Yi = 0);
          }),
          fn.push(x),
          V && Qn(u) && (Yi = x),
          x.enable(p);
      }),
      mh(o, [
        {
          key: 'velocityX',
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: 'velocityY',
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      o
    );
  })();
  (st.version = '3.11.3'),
    (st.create = function (o) {
      return new st(o);
    }),
    (st.register = rf),
    (st.getAll = function () {
      return fn.slice();
    }),
    (st.getById = function (o) {
      return fn.filter(function (e) {
        return e.vars.id === o;
      })[0];
    }),
    Zl() && wt.registerPlugin(st);
  /*!
   * ScrollTrigger 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Z,
    cn,
    we,
    Ue,
    bi,
    Ze,
    nf,
    Xo,
    Vo,
    dn,
    Wo,
    qo,
    bt,
    Uo,
    Eu,
    Ft,
    of,
    sf,
    hn,
    uf,
    Fu,
    af,
    Ut,
    lf,
    ff,
    cf,
    sr,
    ku,
    Pu,
    Au,
    jo = 1,
    kt = Date.now,
    Mu = kt(),
    oi = 0,
    Ko = 0,
    df = function () {
      return (Uo = 1);
    },
    hf = function () {
      return (Uo = 0);
    },
    Ci = function (e) {
      return e;
    },
    Jn = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    pf = function () {
      return typeof window != 'undefined';
    },
    _f = function () {
      return Z || (pf() && (Z = window.gsap) && Z.registerPlugin && Z);
    },
    Er = function (e) {
      return !!~nf.indexOf(e);
    },
    gf = function (e) {
      return (
        nr(e, 'getBoundingClientRect') ||
        (Er(e)
          ? function () {
              return (
                (as.width = we.innerWidth), (as.height = we.innerHeight), as
              );
            }
          : function () {
              return Hi(e);
            })
      );
    },
    vh = function (e, i, t) {
      var r = t.d,
        n = t.d2,
        s = t.a;
      return (s = nr(e, 'getBoundingClientRect'))
        ? function () {
            return s()[r];
          }
        : function () {
            return (i ? we['inner' + n] : e['client' + n]) || 0;
          };
    },
    xh = function (e, i) {
      return !i || ~wi.indexOf(e)
        ? gf(e)
        : function () {
            return as;
          };
    },
    ur = function (e, i) {
      var t = i.s,
        r = i.d2,
        n = i.d,
        s = i.a;
      return (t = 'scroll' + r) && (s = nr(e, t))
        ? s() - gf(e)()[n]
        : Er(e)
        ? (bi[t] || Ze[t]) -
          (we['inner' + r] || bi['client' + r] || Ze['client' + r])
        : e[t] - e['offset' + r];
    },
    Go = function (e, i) {
      for (var t = 0; t < hn.length; t += 3)
        (!i || ~i.indexOf(hn[t + 1])) && e(hn[t], hn[t + 1], hn[t + 2]);
    },
    hi = function (e) {
      return typeof e == 'string';
    },
    Pt = function (e) {
      return typeof e == 'function';
    },
    eo = function (e) {
      return typeof e == 'number';
    },
    Qo = function (e) {
      return typeof e == 'object';
    },
    to = function (e, i, t) {
      return e && e.progress(i ? 0 : 1) && t && e.pause();
    },
    Ou = function (e, i) {
      if (e.enabled) {
        var t = i(e);
        t && t.totalTime && (e.callbackAnimation = t);
      }
    },
    pn = Math.abs,
    Df = 'left',
    mf = 'top',
    Ru = 'right',
    Bu = 'bottom',
    Fr = 'width',
    kr = 'height',
    io = 'Right',
    ro = 'Left',
    no = 'Top',
    oo = 'Bottom',
    it = 'padding',
    si = 'margin',
    _n = 'Width',
    Lu = 'Height',
    gt = 'px',
    Ti = function (e) {
      return we.getComputedStyle(e);
    },
    wh = function (e) {
      var i = Ti(e).position;
      e.style.position = i === 'absolute' || i === 'fixed' ? i : 'relative';
    },
    yf = function (e, i) {
      for (var t in i) t in e || (e[t] = i[t]);
      return e;
    },
    Hi = function (e, i) {
      var t =
          i &&
          Ti(e)[Eu] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
          Z.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        r = e.getBoundingClientRect();
      return t && t.progress(0).kill(), r;
    },
    Nu = function (e, i) {
      var t = i.d2;
      return e['offset' + t] || e['client' + t] || 0;
    },
    vf = function (e) {
      var i = [],
        t = e.labels,
        r = e.duration(),
        n;
      for (n in t) i.push(t[n] / r);
      return i;
    },
    bh = function (e) {
      return function (i) {
        return Z.utils.snap(vf(e), i);
      };
    },
    Iu = function (e) {
      var i = Z.utils.snap(e),
        t =
          Array.isArray(e) &&
          e.slice(0).sort(function (r, n) {
            return r - n;
          });
      return t
        ? function (r, n, s) {
            s === void 0 && (s = 0.001);
            var u;
            if (!n) return i(r);
            if (n > 0) {
              for (r -= s, u = 0; u < t.length; u++) if (t[u] >= r) return t[u];
              return t[u - 1];
            } else for (u = t.length, r += s; u--; ) if (t[u] <= r) return t[u];
            return t[0];
          }
        : function (r, n, s) {
            s === void 0 && (s = 0.001);
            var u = i(r);
            return !n || Math.abs(u - r) < s || u - r < 0 == n < 0
              ? u
              : i(n < 0 ? r - e : r + e);
          };
    },
    Ch = function (e) {
      return function (i, t) {
        return Iu(vf(e))(i, t.direction);
      };
    },
    Zo = function (e, i, t, r) {
      return t.split(',').forEach(function (n) {
        return e(i, n, r);
      });
    },
    Dt = function (e, i, t, r, n) {
      return e.addEventListener(i, t, { passive: !r, capture: !!n });
    },
    ht = function (e, i, t, r) {
      return e.removeEventListener(i, t, !!r);
    },
    Jo = function (e, i, t) {
      return t && t.wheelHandler && e(i, 'wheel', t);
    },
    xf = {
      startColor: 'green',
      endColor: 'red',
      indent: 0,
      fontSize: '16px',
      fontWeight: 'normal',
    },
    es = { toggleActions: 'play', anticipatePin: 0 },
    ts = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    is = function (e, i) {
      if (hi(e)) {
        var t = e.indexOf('='),
          r = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
        ~t && (e.indexOf('%') > t && (r *= i / 100), (e = e.substr(0, t - 1))),
          (e =
            r +
            (e in ts
              ? ts[e] * i
              : ~e.indexOf('%')
              ? (parseFloat(e) * i) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    rs = function (e, i, t, r, n, s, u, a) {
      var f = n.startColor,
        c = n.endColor,
        h = n.fontSize,
        d = n.indent,
        l = n.fontWeight,
        _ = Ue.createElement('div'),
        p = Er(t) || nr(t, 'pinType') === 'fixed',
        D = e.indexOf('scroller') !== -1,
        y = p ? Ze : t,
        T = e.indexOf('start') !== -1,
        v = T ? f : c,
        b =
          'border-color:' +
          v +
          ';font-size:' +
          h +
          ';color:' +
          v +
          ';font-weight:' +
          l +
          ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
      return (
        (b += 'position:' + ((D || a) && p ? 'fixed;' : 'absolute;')),
        (D || a || !p) &&
          (b += (r === ft ? Ru : Bu) + ':' + (s + parseFloat(d)) + 'px;'),
        u &&
          (b +=
            'box-sizing:border-box;text-align:left;width:' +
            u.offsetWidth +
            'px;'),
        (_._isStart = T),
        _.setAttribute('class', 'gsap-marker-' + e + (i ? ' marker-' + i : '')),
        (_.style.cssText = b),
        (_.innerText = i || i === 0 ? e + '-' + i : e),
        y.children[0] ? y.insertBefore(_, y.children[0]) : y.appendChild(_),
        (_._offset = _['offset' + r.op.d2]),
        ns(_, 0, r, T),
        _
      );
    },
    ns = function (e, i, t, r) {
      var n = { display: 'block' },
        s = t[r ? 'os2' : 'p2'],
        u = t[r ? 'p2' : 'os2'];
      (e._isFlipped = r),
        (n[t.a + 'Percent'] = r ? -100 : 0),
        (n[t.a] = r ? '1px' : 0),
        (n['border' + s + _n] = 1),
        (n['border' + u + _n] = 0),
        (n[t.p] = i + 'px'),
        Z.set(e, n);
    },
    pe = [],
    $u = {},
    so,
    wf = function () {
      return kt() - oi > 34 && (so || (so = requestAnimationFrame(Br)));
    },
    gn = function () {
      (!Ut || !Ut.isPressed || Ut.startX > Ze.clientWidth) &&
        (xe.cache++,
        Ut ? so || (so = requestAnimationFrame(Br)) : Br(),
        oi || Ar('scrollStart'),
        (oi = kt()));
    },
    zu = function () {
      (cf = we.innerWidth), (ff = we.innerHeight);
    },
    uo = function () {
      xe.cache++,
        !bt &&
          !af &&
          !Ue.fullscreenElement &&
          !Ue.webkitFullscreenElement &&
          (!lf ||
            cf !== we.innerWidth ||
            Math.abs(we.innerHeight - ff) > we.innerHeight * 0.25) &&
          Xo.restart(!0);
    },
    Pr = {},
    Th = [],
    bf = function o() {
      return ht(de, 'scrollEnd', o) || Or(!0);
    },
    Ar = function (e) {
      return (
        (Pr[e] &&
          Pr[e].map(function (i) {
            return i();
          })) ||
        Th
      );
    },
    jt = [],
    Cf = function (e) {
      for (var i = 0; i < jt.length; i += 5)
        (!e || (jt[i + 4] && jt[i + 4].query === e)) &&
          ((jt[i].style.cssText = jt[i + 1]),
          jt[i].getBBox && jt[i].setAttribute('transform', jt[i + 2] || ''),
          (jt[i + 3].uncache = 1));
    },
    Yu = function (e, i) {
      var t;
      for (Ft = 0; Ft < pe.length; Ft++)
        (t = pe[Ft]),
          t && (!i || t._ctx === i) && (e ? t.kill(1) : t.revert(!0, !0));
      i && Cf(i), i || Ar('revert');
    },
    Tf = function (e, i) {
      xe.cache++,
        (i || !pi) &&
          xe.forEach(function (t) {
            return Pt(t) && t.cacheID++ && (t.rec = 0);
          }),
        hi(e) && (we.history.scrollRestoration = Pu = e);
    },
    pi,
    Mr = 0,
    Sf,
    Sh = function () {
      if (Sf !== Mr) {
        var e = (Sf = Mr);
        requestAnimationFrame(function () {
          return e === Mr && Or(!0);
        });
      }
    },
    Or = function (e, i) {
      if (oi && !e) {
        Dt(de, 'scrollEnd', bf);
        return;
      }
      (pi = de.isRefreshing = !0),
        xe.forEach(function (r) {
          return Pt(r) && r.cacheID++ && (r.rec = r());
        });
      var t = Ar('refreshInit');
      uf && de.sort(),
        i || Yu(),
        xe.forEach(function (r) {
          Pt(r) && (r.smooth && (r.target.style.scrollBehavior = 'auto'), r(0));
        }),
        pe.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        pe.forEach(function (r, n) {
          if (r._subPinOffset && r.pin) {
            var s = r.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
              u = r.pin[s];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - u), r.revert(!1, 1);
          }
        }),
        pe.forEach(function (r) {
          return (
            r.vars.end === 'max' &&
            r.setPositions(
              r.start,
              Math.max(r.start + 1, ur(r.scroller, r._dir))
            )
          );
        }),
        t.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        xe.forEach(function (r) {
          Pt(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = 'smooth');
              }),
            r.rec && r(r.rec));
        }),
        Tf(Pu, 1),
        Xo.pause(),
        Mr++,
        Br(2),
        pe.forEach(function (r) {
          return Pt(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (pi = de.isRefreshing = !1),
        Ar('refresh');
    },
    Ef = 0,
    os = 1,
    Rr,
    Br = function (e) {
      if (!pi || e === 2) {
        (de.isUpdating = !0), Rr && Rr.update(0);
        var i = pe.length,
          t = kt(),
          r = t - Mu >= 50,
          n = i && pe[0].scroll();
        if (
          ((os = Ef > n ? -1 : 1),
          (Ef = n),
          r &&
            (oi && !Uo && t - oi > 200 && ((oi = 0), Ar('scrollEnd')),
            (Wo = Mu),
            (Mu = t)),
          os < 0)
        ) {
          for (Ft = i; Ft-- > 0; ) pe[Ft] && pe[Ft].update(0, r);
          os = 1;
        } else for (Ft = 0; Ft < i; Ft++) pe[Ft] && pe[Ft].update(0, r);
        de.isUpdating = !1;
      }
      so = 0;
    },
    Hu = [
      Df,
      mf,
      Bu,
      Ru,
      si + oo,
      si + io,
      si + no,
      si + ro,
      'display',
      'flexShrink',
      'float',
      'zIndex',
      'gridColumnStart',
      'gridColumnEnd',
      'gridRowStart',
      'gridRowEnd',
      'gridArea',
      'justifySelf',
      'alignSelf',
      'placeSelf',
      'order',
    ],
    ss = Hu.concat([
      Fr,
      kr,
      'boxSizing',
      'max' + _n,
      'max' + Lu,
      'position',
      si,
      it,
      it + no,
      it + io,
      it + oo,
      it + ro,
    ]),
    Eh = function (e, i, t) {
      Dn(t);
      var r = e._gsap;
      if (r.spacerIsNative) Dn(r.spacerState);
      else if (e._gsap.swappedIn) {
        var n = i.parentNode;
        n && (n.insertBefore(e, i), n.removeChild(i));
      }
      e._gsap.swappedIn = !1;
    },
    Xu = function (e, i, t, r) {
      if (!e._gsap.swappedIn) {
        for (var n = Hu.length, s = i.style, u = e.style, a; n--; )
          (a = Hu[n]), (s[a] = t[a]);
        (s.position = t.position === 'absolute' ? 'absolute' : 'relative'),
          t.display === 'inline' && (s.display = 'inline-block'),
          (u[Bu] = u[Ru] = 'auto'),
          (s.flexBasis = t.flexBasis || 'auto'),
          (s.overflow = 'visible'),
          (s.boxSizing = 'border-box'),
          (s[Fr] = Nu(e, Et) + gt),
          (s[kr] = Nu(e, ft) + gt),
          (s[it] = u[si] = u[mf] = u[Df] = '0'),
          Dn(r),
          (u[Fr] = u['max' + _n] = t[Fr]),
          (u[kr] = u['max' + Lu] = t[kr]),
          (u[it] = t[it]),
          e.parentNode !== i &&
            (e.parentNode.insertBefore(i, e), i.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    Fh = /([A-Z])/g,
    Dn = function (e) {
      if (e) {
        var i = e.t.style,
          t = e.length,
          r = 0,
          n,
          s;
        for ((e.t._gsap || Z.core.getCache(e.t)).uncache = 1; r < t; r += 2)
          (s = e[r + 1]),
            (n = e[r]),
            s
              ? (i[n] = s)
              : i[n] && i.removeProperty(n.replace(Fh, '-$1').toLowerCase());
      }
    },
    us = function (e) {
      for (var i = ss.length, t = e.style, r = [], n = 0; n < i; n++)
        r.push(ss[n], t[ss[n]]);
      return (r.t = e), r;
    },
    kh = function (e, i, t) {
      for (var r = [], n = e.length, s = t ? 8 : 0, u; s < n; s += 2)
        (u = e[s]), r.push(u, u in i ? i[u] : e[s + 1]);
      return (r.t = e.t), r;
    },
    as = { left: 0, top: 0 },
    Ff = function (e, i, t, r, n, s, u, a, f, c, h, d, l) {
      Pt(e) && (e = e(a)),
        hi(e) &&
          e.substr(0, 3) === 'max' &&
          (e = d + (e.charAt(4) === '=' ? is('0' + e.substr(3), t) : 0));
      var _ = l ? l.time() : 0,
        p,
        D,
        y;
      if ((l && l.seek(0), eo(e))) u && ns(u, t, r, !0);
      else {
        Pt(i) && (i = i(a));
        var T = (e || '0').split(' '),
          v,
          b,
          C,
          M;
        (y = Nt(i) || Ze),
          (v = Hi(y) || {}),
          (!v || (!v.left && !v.top)) &&
            Ti(y).display === 'none' &&
            ((M = y.style.display),
            (y.style.display = 'block'),
            (v = Hi(y)),
            M ? (y.style.display = M) : y.style.removeProperty('display')),
          (b = is(T[0], v[r.d])),
          (C = is(T[1] || '0', t)),
          (e = v[r.p] - f[r.p] - c + b + n - C),
          u && ns(u, C, r, t - C < 20 || (u._isStart && C > 20)),
          (t -= t - C);
      }
      if (s) {
        var E = e + t,
          k = s._isStart;
        (p = 'scroll' + r.d2),
          ns(
            s,
            E,
            r,
            (k && E > 20) ||
              (!k && (h ? Math.max(Ze[p], bi[p]) : s.parentNode[p]) <= E + 1)
          ),
          h &&
            ((f = Hi(u)),
            h && (s.style[r.op.p] = f[r.op.p] - r.op.m - s._offset + gt));
      }
      return (
        l &&
          y &&
          ((p = Hi(y)),
          l.seek(d),
          (D = Hi(y)),
          (l._caScrollDist = p[r.p] - D[r.p]),
          (e = (e / l._caScrollDist) * d)),
        l && l.seek(_),
        l ? e : Math.round(e)
      );
    },
    Ph = /(webkit|moz|length|cssText|inset)/i,
    kf = function (e, i, t, r) {
      if (e.parentNode !== i) {
        var n = e.style,
          s,
          u;
        if (i === Ze) {
          (e._stOrig = n.cssText), (u = Ti(e));
          for (s in u)
            !+s &&
              !Ph.test(s) &&
              u[s] &&
              typeof n[s] == 'string' &&
              s !== '0' &&
              (n[s] = u[s]);
          (n.top = t), (n.left = r);
        } else n.cssText = e._stOrig;
        (Z.core.getCache(e).uncache = 1), i.appendChild(e);
      }
    },
    Pf = function (e, i) {
      var t = or(e, i),
        r = '_scroll' + i.p2,
        n,
        s,
        u = function a(f, c, h, d, l) {
          var _ = a.tween,
            p = c.onComplete,
            D = {};
          return (
            (h = h || t()),
            (l = (d && l) || 0),
            (d = d || f - h),
            _ && _.kill(),
            (n = Math.round(h)),
            (c[r] = f),
            (c.modifiers = D),
            (D[r] = function (y) {
              return (
                (y = Math.round(t())),
                y !== n && y !== s && Math.abs(y - n) > 3 && Math.abs(y - s) > 3
                  ? (_.kill(), (a.tween = 0))
                  : (y = h + d * _.ratio + l * _.ratio * _.ratio),
                (s = n),
                (n = Math.round(y))
              );
            }),
            (c.onComplete = function () {
              (a.tween = 0), p && p.call(_);
            }),
            (_ = a.tween = Z.to(e, c)),
            _
          );
        };
      return (
        (e[r] = t),
        (t.wheelHandler = function () {
          return u.tween && u.tween.kill() && (u.tween = 0);
        }),
        Dt(e, 'wheel', t.wheelHandler),
        u
      );
    },
    de = (function () {
      function o(i, t) {
        cn ||
          o.register(Z) ||
          console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
          this.init(i, t);
      }
      var e = o.prototype;
      return (
        (e.init = function (t, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Ko)
          ) {
            this.update = this.refresh = this.kill = Ci;
            return;
          }
          t = yf(hi(t) || eo(t) || t.nodeType ? { trigger: t } : t, es);
          var n = t,
            s = n.onUpdate,
            u = n.toggleClass,
            a = n.id,
            f = n.onToggle,
            c = n.onRefresh,
            h = n.scrub,
            d = n.trigger,
            l = n.pin,
            _ = n.pinSpacing,
            p = n.invalidateOnRefresh,
            D = n.anticipatePin,
            y = n.onScrubComplete,
            T = n.onSnapComplete,
            v = n.once,
            b = n.snap,
            C = n.pinReparent,
            M = n.pinSpacer,
            E = n.containerAnimation,
            k = n.fastScrollEnd,
            R = n.preventOverlaps,
            z =
              t.horizontal || (t.containerAnimation && t.horizontal !== !1)
                ? Et
                : ft,
            L = !h && h !== 0,
            Y = Nt(t.scroller || we),
            X = Z.core.getCache(Y),
            G = Er(Y),
            W =
              ('pinType' in t
                ? t.pinType
                : nr(Y, 'pinType') || (G && 'fixed')) === 'fixed',
            I = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
            H = L && t.toggleActions.split(' '),
            V = 'markers' in t ? t.markers : es.markers,
            O = G ? 0 : parseFloat(Ti(Y)['border' + z.p2 + _n]) || 0,
            w = this,
            Q =
              t.onRefreshInit &&
              function () {
                return t.onRefreshInit(w);
              },
            ee = vh(Y, G, z),
            De = xh(Y, G),
            ie = 0,
            le = 0,
            fe = or(Y, z),
            me,
            ye,
            _i,
            Ie,
            je,
            ue,
            $e,
            N,
            F,
            U,
            x,
            J,
            re,
            Be,
            ce,
            ne,
            ke,
            Le,
            ut,
            ae,
            ze,
            Xe,
            Ai,
            Ke,
            yt,
            gi,
            pt,
            Kt,
            Ct,
            te,
            Ge,
            Ye,
            Ve,
            Ne,
            Ae,
            Tt,
            Di,
            ui;
          if (
            (ku(w),
            (w._dir = z),
            (D *= 45),
            (w.scroller = Y),
            (w.scroll = E ? E.time.bind(E) : fe),
            (Ie = fe()),
            (w.vars = t),
            (r = r || t.animation),
            'refreshPriority' in t &&
              ((uf = 1), t.refreshPriority === -9999 && (Rr = w)),
            (X.tweenScroll = X.tweenScroll || {
              top: Pf(Y, ft),
              left: Pf(Y, Et),
            }),
            (w.tweenTo = me = X.tweenScroll[z.p]),
            (w.scrubDuration = function (g) {
              (Ge = eo(g) && g),
                Ge
                  ? te
                    ? te.duration(g)
                    : (te = Z.to(r, {
                        ease: 'expo',
                        totalProgress: '+=0.001',
                        duration: Ge,
                        paused: !0,
                        onComplete: function () {
                          return y && y(w);
                        },
                      }))
                  : (te && te.progress(1).kill(), (te = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              r._initted ||
                (r.vars.immediateRender !== !1 &&
                  t.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (w.animation = r.pause()),
              (r.scrollTrigger = w),
              w.scrubDuration(h),
              (Kt = 0),
              a || (a = r.vars.id)),
            pe.push(w),
            b &&
              ((!Qo(b) || b.push) && (b = { snapTo: b }),
              'scrollBehavior' in Ze.style &&
                Z.set(G ? [Ze, bi] : Y, { scrollBehavior: 'auto' }),
              xe.forEach(function (g) {
                return (
                  Pt(g) &&
                  g.target === (G ? Ue.scrollingElement || bi : Y) &&
                  (g.smooth = !1)
                );
              }),
              (_i = Pt(b.snapTo)
                ? b.snapTo
                : b.snapTo === 'labels'
                ? bh(r)
                : b.snapTo === 'labelsDirectional'
                ? Ch(r)
                : b.directional !== !1
                ? function (g, S) {
                    return Iu(b.snapTo)(g, kt() - le < 500 ? 0 : S.direction);
                  }
                : Z.utils.snap(b.snapTo)),
              (Ye = b.duration || { min: 0.1, max: 2 }),
              (Ye = Qo(Ye) ? dn(Ye.min, Ye.max) : dn(Ye, Ye)),
              (Ve = Z.delayedCall(b.delay || Ge / 2 || 0.1, function () {
                var g = fe(),
                  S = kt() - le < 500,
                  P = me.tween;
                if (
                  (S || Math.abs(w.getVelocity()) < 10) &&
                  !P &&
                  !Uo &&
                  ie !== g
                ) {
                  var B = (g - ue) / re,
                    j = r && !L ? r.totalProgress() : B,
                    $ = S ? 0 : ((j - Ct) / (kt() - Wo)) * 1e3 || 0,
                    oe = Z.utils.clamp(-B, 1 - B, (pn($ / 2) * $) / 0.185),
                    K = B + (b.inertia === !1 ? 0 : oe),
                    he = dn(0, 1, _i(K, w)),
                    se = Math.round(ue + he * re),
                    be = b,
                    rt = be.onStart,
                    Ce = be.onInterrupt,
                    Ee = be.onComplete;
                  if (g <= $e && g >= ue && se !== g) {
                    if (P && !P._initted && P.data <= pn(se - g)) return;
                    b.inertia === !1 && (oe = he - B),
                      me(
                        se,
                        {
                          duration: Ye(
                            pn(
                              (Math.max(pn(K - j), pn(he - j)) * 0.185) /
                                $ /
                                0.05 || 0
                            )
                          ),
                          ease: b.ease || 'power3',
                          data: pn(se - g),
                          onInterrupt: function () {
                            return Ve.restart(!0) && Ce && Ce(w);
                          },
                          onComplete: function () {
                            w.update(),
                              (ie = fe()),
                              (Kt = Ct =
                                r && !L ? r.totalProgress() : w.progress),
                              T && T(w),
                              Ee && Ee(w);
                          },
                        },
                        g,
                        oe * re,
                        se - g - oe * re
                      ),
                      rt && rt(w, me.tween);
                  }
                } else w.isActive && ie !== g && Ve.restart(!0);
              }).pause())),
            a && ($u[a] = w),
            (d = w.trigger = Nt(d || l)),
            (ui = d && d._gsap && d._gsap.stRevert),
            ui && (ui = ui(w)),
            (l = l === !0 ? d : Nt(l)),
            hi(u) && (u = { targets: d, className: u }),
            l &&
              (_ === !1 ||
                _ === si ||
                (_ =
                  !_ &&
                  l.parentNode &&
                  l.parentNode.style &&
                  Ti(l.parentNode).display === 'flex'
                    ? !1
                    : it),
              (w.pin = l),
              (ye = Z.core.getCache(l)),
              ye.spacer
                ? (Be = ye.pinState)
                : (M &&
                    ((M = Nt(M)),
                    M && !M.nodeType && (M = M.current || M.nativeElement),
                    (ye.spacerIsNative = !!M),
                    M && (ye.spacerState = us(M))),
                  (ye.spacer = ke = M || Ue.createElement('div')),
                  ke.classList.add('pin-spacer'),
                  a && ke.classList.add('pin-spacer-' + a),
                  (ye.pinState = Be = us(l))),
              t.force3D !== !1 && Z.set(l, { force3D: !0 }),
              (w.spacer = ke = ye.spacer),
              (pt = Ti(l)),
              (Ai = pt[_ + z.os2]),
              (ut = Z.getProperty(l)),
              (ae = Z.quickSetter(l, z.a, gt)),
              Xu(l, ke, pt),
              (ne = us(l))),
            V)
          ) {
            (J = Qo(V) ? yf(V, xf) : xf),
              (U = rs('scroller-start', a, Y, z, J, 0)),
              (x = rs('scroller-end', a, Y, z, J, 0, U)),
              (Le = U['offset' + z.op.d2]);
            var q = Nt(nr(Y, 'content') || Y);
            (N = this.markerStart = rs('start', a, q, z, J, Le, 0, E)),
              (F = this.markerEnd = rs('end', a, q, z, J, Le, 0, E)),
              E && (Di = Z.quickSetter([N, F], z.a, gt)),
              !W &&
                !(wi.length && nr(Y, 'fixedMarkers') === !0) &&
                (wh(G ? Ze : Y),
                Z.set([U, x], { force3D: !0 }),
                (yt = Z.quickSetter(U, z.a, gt)),
                (gi = Z.quickSetter(x, z.a, gt)));
          }
          if (E) {
            var m = E.vars.onUpdate,
              A = E.vars.onUpdateParams;
            E.eventCallback('onUpdate', function () {
              w.update(0, 0, 1), m && m.apply(A || []);
            });
          }
          (w.previous = function () {
            return pe[pe.indexOf(w) - 1];
          }),
            (w.next = function () {
              return pe[pe.indexOf(w) + 1];
            }),
            (w.revert = function (g, S) {
              if (!S) return w.kill(!0);
              var P = g !== !1 || !w.enabled,
                B = bt;
              P !== w.isReverted &&
                (P &&
                  ((Ae = Math.max(fe(), w.scroll.rec || 0)),
                  (Ne = w.progress),
                  (Tt = r && r.progress())),
                N &&
                  [N, F, U, x].forEach(function (j) {
                    return (j.style.display = P ? 'none' : 'block');
                  }),
                P && ((bt = 1), w.update(P)),
                l &&
                  (P
                    ? Eh(l, ke, Be)
                    : (!C || !w.isActive) && Xu(l, ke, Ti(l), Ke)),
                P || w.update(P),
                (bt = B),
                (w.isReverted = P));
            }),
            (w.refresh = function (g, S) {
              if (!((bt || !w.enabled) && !S)) {
                if (l && g && oi) {
                  Dt(o, 'scrollEnd', bf);
                  return;
                }
                !pi && Q && Q(w),
                  (bt = 1),
                  (le = kt()),
                  me.tween && (me.tween.kill(), (me.tween = 0)),
                  te && te.pause(),
                  p && r && r.revert({ kill: !1 }).invalidate(),
                  w.isReverted || w.revert(!0, !0),
                  (w._subPinOffset = !1);
                for (
                  var P = ee(),
                    B = De(),
                    j = E ? E.duration() : ur(Y, z),
                    $ = 0,
                    oe = 0,
                    K = t.end,
                    he = t.endTrigger || d,
                    se =
                      t.start ||
                      (t.start === 0 || !d ? 0 : l ? '0 0' : '0 100%'),
                    be = (w.pinnedContainer =
                      t.pinnedContainer && Nt(t.pinnedContainer)),
                    rt = (d && Math.max(0, pe.indexOf(w))) || 0,
                    Ce = rt,
                    Ee,
                    _e,
                    Me,
                    mi,
                    Fe,
                    Je,
                    Xi,
                    pa,
                    Rc,
                    go;
                  Ce--;

                )
                  (Je = pe[Ce]),
                    Je.end || Je.refresh(0, 1) || (bt = 1),
                    (Xi = Je.pin),
                    Xi &&
                      (Xi === d || Xi === l) &&
                      !Je.isReverted &&
                      (go || (go = []), go.unshift(Je), Je.revert(!0, !0)),
                    Je !== pe[Ce] && (rt--, Ce--);
                for (
                  Pt(se) && (se = se(w)),
                    ue =
                      Ff(se, d, P, z, fe(), N, U, w, B, O, W, j, E) ||
                      (l ? -0.001 : 0),
                    Pt(K) && (K = K(w)),
                    hi(K) &&
                      !K.indexOf('+=') &&
                      (~K.indexOf(' ')
                        ? (K = (hi(se) ? se.split(' ')[0] : '') + K)
                        : (($ = is(K.substr(2), P)),
                          (K = hi(se) ? se : ue + $),
                          (he = d))),
                    $e =
                      Math.max(
                        ue,
                        Ff(
                          K || (he ? '100% 0' : j),
                          he,
                          P,
                          z,
                          fe() + $,
                          F,
                          x,
                          w,
                          B,
                          O,
                          W,
                          j,
                          E
                        )
                      ) || -0.001,
                    re = $e - ue || ((ue -= 0.01) && 0.001),
                    $ = 0,
                    Ce = rt;
                  Ce--;

                )
                  (Je = pe[Ce]),
                    (Xi = Je.pin),
                    Xi &&
                      Je.start - Je._pinPush <= ue &&
                      !E &&
                      Je.end > 0 &&
                      ((Ee = Je.end - Je.start),
                      ((Xi === d && Je.start - Je._pinPush < ue) ||
                        Xi === be) &&
                        !eo(se) &&
                        ($ += Ee * (1 - Je.progress)),
                      Xi === l && (oe += Ee));
                if (
                  ((ue += $),
                  ($e += $),
                  (w._pinPush = oe),
                  N &&
                    $ &&
                    ((Ee = {}),
                    (Ee[z.a] = '+=' + $),
                    be && (Ee[z.p] = '-=' + fe()),
                    Z.set([N, F], Ee)),
                  l)
                )
                  (Ee = Ti(l)),
                    (mi = z === ft),
                    (Me = fe()),
                    (ze = parseFloat(ut(z.a)) + oe),
                    !j &&
                      $e > 1 &&
                      ((G ? Ze : Y).style['overflow-' + z.a] = 'scroll'),
                    Xu(l, ke, Ee),
                    (ne = us(l)),
                    (_e = Hi(l, !0)),
                    (pa = W && or(Y, mi ? Et : ft)()),
                    _ &&
                      ((Ke = [_ + z.os2, re + oe + gt]),
                      (Ke.t = ke),
                      (Ce = _ === it ? Nu(l, z) + re + oe : 0),
                      Ce && Ke.push(z.d, Ce + gt),
                      Dn(Ke),
                      be &&
                        pe.forEach(function (Do) {
                          Do.pin === be &&
                            Do.vars.pinSpacing !== !1 &&
                            (Do._subPinOffset = !0);
                        }),
                      W && fe(Ae)),
                    W &&
                      ((Fe = {
                        top: _e.top + (mi ? Me - ue : pa) + gt,
                        left: _e.left + (mi ? pa : Me - ue) + gt,
                        boxSizing: 'border-box',
                        position: 'fixed',
                      }),
                      (Fe[Fr] = Fe['max' + _n] = Math.ceil(_e.width) + gt),
                      (Fe[kr] = Fe['max' + Lu] = Math.ceil(_e.height) + gt),
                      (Fe[si] =
                        Fe[si + no] =
                        Fe[si + io] =
                        Fe[si + oo] =
                        Fe[si + ro] =
                          '0'),
                      (Fe[it] = Ee[it]),
                      (Fe[it + no] = Ee[it + no]),
                      (Fe[it + io] = Ee[it + io]),
                      (Fe[it + oo] = Ee[it + oo]),
                      (Fe[it + ro] = Ee[it + ro]),
                      (ce = kh(Be, Fe, C)),
                      pi && fe(0)),
                    r
                      ? ((Rc = r._initted),
                        Fu(1),
                        r.render(r.duration(), !0, !0),
                        (Xe = ut(z.a) - ze + re + oe),
                        re !== Xe && W && ce.splice(ce.length - 2, 2),
                        r.render(0, !0, !0),
                        Rc || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        Fu(0))
                      : (Xe = re);
                else if (d && fe() && !E)
                  for (_e = d.parentNode; _e && _e !== Ze; )
                    _e._pinOffset &&
                      ((ue -= _e._pinOffset), ($e -= _e._pinOffset)),
                      (_e = _e.parentNode);
                go &&
                  go.forEach(function (Do) {
                    return Do.revert(!1, !0);
                  }),
                  (w.start = ue),
                  (w.end = $e),
                  (Ie = je = pi ? Ae : fe()),
                  !E && !pi && (Ie < Ae && fe(Ae), (w.scroll.rec = 0)),
                  w.revert(!1, !0),
                  Ve &&
                    ((ie = -1), w.isActive && fe(ue + re * Ne), Ve.restart(!0)),
                  (bt = 0),
                  r &&
                    L &&
                    (r._initted || Tt) &&
                    r.progress() !== Tt &&
                    r.progress(Tt, !0).render(r.time(), !0, !0),
                  (Ne !== w.progress || E) &&
                    (r && !L && r.totalProgress(Ne, !0),
                    (w.progress = (Ie - ue) / re === Ne ? 0 : Ne)),
                  l && _ && (ke._pinOffset = Math.round(w.progress * Xe)),
                  c && !pi && c(w);
              }
            }),
            (w.getVelocity = function () {
              return ((fe() - je) / (kt() - Wo)) * 1e3 || 0;
            }),
            (w.endAnimation = function () {
              to(w.callbackAnimation),
                r &&
                  (te
                    ? te.progress(1)
                    : r.paused()
                    ? L || to(r, w.direction < 0, 1)
                    : to(r, r.reversed()));
            }),
            (w.labelToScroll = function (g) {
              return (
                (r &&
                  r.labels &&
                  (ue || w.refresh() || ue) +
                    (r.labels[g] / r.duration()) * re) ||
                0
              );
            }),
            (w.getTrailing = function (g) {
              var S = pe.indexOf(w),
                P =
                  w.direction > 0 ? pe.slice(0, S).reverse() : pe.slice(S + 1);
              return (
                hi(g)
                  ? P.filter(function (B) {
                      return B.vars.preventOverlaps === g;
                    })
                  : P
              ).filter(function (B) {
                return w.direction > 0 ? B.end <= ue : B.start >= $e;
              });
            }),
            (w.update = function (g, S, P) {
              if (!(E && !P && !g)) {
                var B = pi ? Ae : w.scroll(),
                  j = g ? 0 : (B - ue) / re,
                  $ = j < 0 ? 0 : j > 1 ? 1 : j || 0,
                  oe = w.progress,
                  K,
                  he,
                  se,
                  be,
                  rt,
                  Ce,
                  Ee,
                  _e;
                if (
                  (S &&
                    ((je = Ie),
                    (Ie = E ? fe() : B),
                    b && ((Ct = Kt), (Kt = r && !L ? r.totalProgress() : $))),
                  D &&
                    !$ &&
                    l &&
                    !bt &&
                    !jo &&
                    oi &&
                    ue < B + ((B - je) / (kt() - Wo)) * D &&
                    ($ = 1e-4),
                  $ !== oe && w.enabled)
                ) {
                  if (
                    ((K = w.isActive = !!$ && $ < 1),
                    (he = !!oe && oe < 1),
                    (Ce = K !== he),
                    (rt = Ce || !!$ != !!oe),
                    (w.direction = $ > oe ? 1 : -1),
                    (w.progress = $),
                    rt &&
                      !bt &&
                      ((se = $ && !oe ? 0 : $ === 1 ? 1 : oe === 1 ? 2 : 3),
                      L &&
                        ((be =
                          (!Ce && H[se + 1] !== 'none' && H[se + 1]) || H[se]),
                        (_e =
                          r &&
                          (be === 'complete' || be === 'reset' || be in r)))),
                    R &&
                      (Ce || _e) &&
                      (_e || h || !r) &&
                      (Pt(R)
                        ? R(w)
                        : w.getTrailing(R).forEach(function (Je) {
                            return Je.endAnimation();
                          })),
                    L ||
                      (te && !bt && !jo
                        ? ((E || (Rr && Rr !== w)) &&
                            te.render(te._dp._time - te._start),
                          te.resetTo
                            ? te.resetTo('totalProgress', $, r._tTime / r._tDur)
                            : ((te.vars.totalProgress = $),
                              te.invalidate().restart()))
                        : r && r.totalProgress($, !!bt)),
                    l)
                  ) {
                    if ((g && _ && (ke.style[_ + z.os2] = Ai), !W))
                      ae(Jn(ze + Xe * $));
                    else if (rt) {
                      if (
                        ((Ee = !g && $ > oe && $e + 1 > B && B + 1 >= ur(Y, z)),
                        C)
                      )
                        if (!g && (K || Ee)) {
                          var Me = Hi(l, !0),
                            mi = B - ue;
                          kf(
                            l,
                            Ze,
                            Me.top + (z === ft ? mi : 0) + gt,
                            Me.left + (z === ft ? 0 : mi) + gt
                          );
                        } else kf(l, ke);
                      Dn(K || Ee ? ce : ne),
                        (Xe !== re && $ < 1 && K) ||
                          ae(ze + ($ === 1 && !Ee ? Xe : 0));
                    }
                  }
                  b && !me.tween && !bt && !jo && Ve.restart(!0),
                    u &&
                      (Ce || (v && $ && ($ < 1 || !Au))) &&
                      Vo(u.targets).forEach(function (Je) {
                        return Je.classList[K || v ? 'add' : 'remove'](
                          u.className
                        );
                      }),
                    s && !L && !g && s(w),
                    rt && !bt
                      ? (L &&
                          (_e &&
                            (be === 'complete'
                              ? r.pause().totalProgress(1)
                              : be === 'reset'
                              ? r.restart(!0).pause()
                              : be === 'restart'
                              ? r.restart(!0)
                              : r[be]()),
                          s && s(w)),
                        (Ce || !Au) &&
                          (f && Ce && Ou(w, f),
                          I[se] && Ou(w, I[se]),
                          v && ($ === 1 ? w.kill(!1, 1) : (I[se] = 0)),
                          Ce ||
                            ((se = $ === 1 ? 1 : 3), I[se] && Ou(w, I[se]))),
                        k &&
                          !K &&
                          Math.abs(w.getVelocity()) > (eo(k) ? k : 2500) &&
                          (to(w.callbackAnimation),
                          te
                            ? te.progress(1)
                            : to(r, be === 'reverse' ? 1 : !$, 1)))
                      : L && s && !bt && s(w);
                }
                if (gi) {
                  var Fe = E ? (B / E.duration()) * (E._caScrollDist || 0) : B;
                  yt(Fe + (U._isFlipped ? 1 : 0)), gi(Fe);
                }
                Di && Di((-B / E.duration()) * (E._caScrollDist || 0));
              }
            }),
            (w.enable = function (g, S) {
              w.enabled ||
                ((w.enabled = !0),
                Dt(Y, 'resize', uo),
                Dt(G ? Ue : Y, 'scroll', gn),
                Q && Dt(o, 'refreshInit', Q),
                g !== !1 && ((w.progress = Ne = 0), (Ie = je = ie = fe())),
                S !== !1 && w.refresh());
            }),
            (w.getTween = function (g) {
              return g && me ? me.tween : te;
            }),
            (w.setPositions = function (g, S) {
              l &&
                ((ze += g - ue),
                (Xe += S - g - re),
                _ === it && w.adjustPinSpacing(S - g - re)),
                (w.start = ue = g),
                (w.end = $e = S),
                (re = S - g),
                w.update();
            }),
            (w.adjustPinSpacing = function (g) {
              if (Ke) {
                var S = Ke.indexOf(z.d) + 1;
                (Ke[S] = parseFloat(Ke[S]) + g + gt),
                  (Ke[1] = parseFloat(Ke[1]) + g + gt),
                  Dn(Ke);
              }
            }),
            (w.disable = function (g, S) {
              if (
                w.enabled &&
                (g !== !1 && w.revert(!0, !0),
                (w.enabled = w.isActive = !1),
                S || (te && te.pause()),
                (Ae = 0),
                ye && (ye.uncache = 1),
                Q && ht(o, 'refreshInit', Q),
                Ve &&
                  (Ve.pause(), me.tween && me.tween.kill() && (me.tween = 0)),
                !G)
              ) {
                for (var P = pe.length; P--; )
                  if (pe[P].scroller === Y && pe[P] !== w) return;
                ht(Y, 'resize', uo), ht(Y, 'scroll', gn);
              }
            }),
            (w.kill = function (g, S) {
              w.disable(g, S), te && !S && te.kill(), a && delete $u[a];
              var P = pe.indexOf(w);
              P >= 0 && pe.splice(P, 1),
                P === Ft && os > 0 && Ft--,
                (P = 0),
                pe.forEach(function (B) {
                  return B.scroller === w.scroller && (P = 1);
                }),
                P || pi || (w.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  g && r.revert({ kill: !1 }),
                  S || r.kill()),
                N &&
                  [N, F, U, x].forEach(function (B) {
                    return B.parentNode && B.parentNode.removeChild(B);
                  }),
                Rr === w && (Rr = 0),
                l &&
                  (ye && (ye.uncache = 1),
                  (P = 0),
                  pe.forEach(function (B) {
                    return B.pin === l && P++;
                  }),
                  P || (ye.spacer = 0)),
                t.onKill && t.onKill(w);
            }),
            w.enable(!1, !1),
            ui && ui(w),
            !r || !r.add || re
              ? w.refresh()
              : Z.delayedCall(0.01, function () {
                  return ue || $e || w.refresh();
                }) &&
                (re = 0.01) &&
                (ue = $e = 0),
            l && Sh();
        }),
        (o.register = function (t) {
          return (
            cn ||
              ((Z = t || _f()),
              pf() && window.document && o.enable(),
              (cn = Ko)),
            cn
          );
        }),
        (o.defaults = function (t) {
          if (t) for (var r in t) es[r] = t[r];
          return es;
        }),
        (o.disable = function (t, r) {
          (Ko = 0),
            pe.forEach(function (s) {
              return s[r ? 'kill' : 'disable'](t);
            }),
            ht(we, 'wheel', gn),
            ht(Ue, 'scroll', gn),
            clearInterval(qo),
            ht(Ue, 'touchcancel', Ci),
            ht(Ze, 'touchstart', Ci),
            Zo(ht, Ue, 'pointerdown,touchstart,mousedown', df),
            Zo(ht, Ue, 'pointerup,touchend,mouseup', hf),
            Xo.kill(),
            Go(ht);
          for (var n = 0; n < xe.length; n += 3)
            Jo(ht, xe[n], xe[n + 1]), Jo(ht, xe[n], xe[n + 2]);
        }),
        (o.enable = function () {
          if (
            ((we = window),
            (Ue = document),
            (bi = Ue.documentElement),
            (Ze = Ue.body),
            Z &&
              ((Vo = Z.utils.toArray),
              (dn = Z.utils.clamp),
              (ku = Z.core.context || Ci),
              (Fu = Z.core.suppressOverwrites || Ci),
              (Pu = we.history.scrollRestoration || 'auto'),
              Z.core.globals('ScrollTrigger', o),
              Ze))
          ) {
            (Ko = 1),
              st.register(Z),
              (o.isTouch = st.isTouch),
              (sr =
                st.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              Dt(we, 'wheel', gn),
              (nf = [we, Ue, bi, Ze]),
              Z.matchMedia
                ? ((o.matchMedia = function (a) {
                    var f = Z.matchMedia(),
                      c;
                    for (c in a) f.add(c, a[c]);
                    return f;
                  }),
                  Z.addEventListener('matchMediaInit', function () {
                    return Yu();
                  }),
                  Z.addEventListener('matchMediaRevert', function () {
                    return Cf();
                  }),
                  Z.addEventListener('matchMedia', function () {
                    Or(0, 1), Ar('matchMedia');
                  }),
                  Z.matchMedia('(orientation: portrait)', function () {
                    return zu(), zu;
                  }))
                : console.warn('Requires GSAP 3.11.0 or later'),
              zu(),
              Dt(Ue, 'scroll', gn);
            var t = Ze.style,
              r = t.borderTopStyle,
              n = Z.core.Animation.prototype,
              s,
              u;
            for (
              n.revert ||
                Object.defineProperty(n, 'revert', {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                t.borderTopStyle = 'solid',
                s = Hi(Ze),
                ft.m = Math.round(s.top + ft.sc()) || 0,
                Et.m = Math.round(s.left + Et.sc()) || 0,
                r
                  ? (t.borderTopStyle = r)
                  : t.removeProperty('border-top-style'),
                qo = setInterval(wf, 250),
                Z.delayedCall(0.5, function () {
                  return (jo = 0);
                }),
                Dt(Ue, 'touchcancel', Ci),
                Dt(Ze, 'touchstart', Ci),
                Zo(Dt, Ue, 'pointerdown,touchstart,mousedown', df),
                Zo(Dt, Ue, 'pointerup,touchend,mouseup', hf),
                Eu = Z.utils.checkPrefix('transform'),
                ss.push(Eu),
                cn = kt(),
                Xo = Z.delayedCall(0.2, Or).pause(),
                hn = [
                  Ue,
                  'visibilitychange',
                  function () {
                    var a = we.innerWidth,
                      f = we.innerHeight;
                    Ue.hidden
                      ? ((of = a), (sf = f))
                      : (of !== a || sf !== f) && uo();
                  },
                  Ue,
                  'DOMContentLoaded',
                  Or,
                  we,
                  'load',
                  Or,
                  we,
                  'resize',
                  uo,
                ],
                Go(Dt),
                pe.forEach(function (a) {
                  return a.enable(0, 1);
                }),
                u = 0;
              u < xe.length;
              u += 3
            )
              Jo(ht, xe[u], xe[u + 1]), Jo(ht, xe[u], xe[u + 2]);
          }
        }),
        (o.config = function (t) {
          'limitCallbacks' in t && (Au = !!t.limitCallbacks);
          var r = t.syncInterval;
          (r && clearInterval(qo)) || ((qo = r) && setInterval(wf, r)),
            'ignoreMobileResize' in t &&
              (lf = o.isTouch === 1 && t.ignoreMobileResize),
            'autoRefreshEvents' in t &&
              (Go(ht) || Go(Dt, t.autoRefreshEvents || 'none'),
              (af = (t.autoRefreshEvents + '').indexOf('resize') === -1));
        }),
        (o.scrollerProxy = function (t, r) {
          var n = Nt(t),
            s = xe.indexOf(n),
            u = Er(n);
          ~s && xe.splice(s, u ? 6 : 2),
            r && (u ? wi.unshift(we, r, Ze, r, bi, r) : wi.unshift(n, r));
        }),
        (o.clearMatchMedia = function (t) {
          pe.forEach(function (r) {
            return r._ctx && r._ctx.query === t && r._ctx.kill(!0, !0);
          });
        }),
        (o.isInViewport = function (t, r, n) {
          var s = (hi(t) ? Nt(t) : t).getBoundingClientRect(),
            u = s[n ? Fr : kr] * r || 0;
          return n
            ? s.right - u > 0 && s.left + u < we.innerWidth
            : s.bottom - u > 0 && s.top + u < we.innerHeight;
        }),
        (o.positionInViewport = function (t, r, n) {
          hi(t) && (t = Nt(t));
          var s = t.getBoundingClientRect(),
            u = s[n ? Fr : kr],
            a =
              r == null
                ? u / 2
                : r in ts
                ? ts[r] * u
                : ~r.indexOf('%')
                ? (parseFloat(r) * u) / 100
                : parseFloat(r) || 0;
          return n
            ? (s.left + a) / we.innerWidth
            : (s.top + a) / we.innerHeight;
        }),
        (o.killAll = function (t) {
          if (
            (pe.forEach(function (n) {
              return n.vars.id !== 'ScrollSmoother' && n.kill();
            }),
            t !== !0)
          ) {
            var r = Pr.killAll || [];
            (Pr = {}),
              r.forEach(function (n) {
                return n();
              });
          }
        }),
        o
      );
    })();
  (de.version = '3.11.3'),
    (de.saveStyles = function (o) {
      return o
        ? Vo(o).forEach(function (e) {
            if (e && e.style) {
              var i = jt.indexOf(e);
              i >= 0 && jt.splice(i, 5),
                jt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute('transform'),
                  Z.core.getCache(e),
                  ku()
                );
            }
          })
        : jt;
    }),
    (de.revert = function (o, e) {
      return Yu(!o, e);
    }),
    (de.create = function (o, e) {
      return new de(o, e);
    }),
    (de.refresh = function (o) {
      return o ? uo() : (cn || de.register()) && Or(!0);
    }),
    (de.update = Br),
    (de.clearScrollMemory = Tf),
    (de.maxScroll = function (o, e) {
      return ur(o, e ? Et : ft);
    }),
    (de.getScrollFunc = function (o, e) {
      return or(Nt(o), e ? Et : ft);
    }),
    (de.getById = function (o) {
      return $u[o];
    }),
    (de.getAll = function () {
      return pe.filter(function (o) {
        return o.vars.id !== 'ScrollSmoother';
      });
    }),
    (de.isScrolling = function () {
      return !!oi;
    }),
    (de.snapDirectional = Iu),
    (de.addEventListener = function (o, e) {
      var i = Pr[o] || (Pr[o] = []);
      ~i.indexOf(e) || i.push(e);
    }),
    (de.removeEventListener = function (o, e) {
      var i = Pr[o],
        t = i && i.indexOf(e);
      t >= 0 && i.splice(t, 1);
    }),
    (de.batch = function (o, e) {
      var i = [],
        t = {},
        r = e.interval || 0.016,
        n = e.batchMax || 1e9,
        s = function (f, c) {
          var h = [],
            d = [],
            l = Z.delayedCall(r, function () {
              c(h, d), (h = []), (d = []);
            }).pause();
          return function (_) {
            h.length || l.restart(!0),
              h.push(_.trigger),
              d.push(_),
              n <= h.length && l.progress(1);
          };
        },
        u;
      for (u in e)
        t[u] =
          u.substr(0, 2) === 'on' && Pt(e[u]) && u !== 'onRefreshInit'
            ? s(u, e[u])
            : e[u];
      return (
        Pt(n) &&
          ((n = n()),
          Dt(de, 'refresh', function () {
            return (n = e.batchMax());
          })),
        Vo(o).forEach(function (a) {
          var f = {};
          for (u in t) f[u] = t[u];
          (f.trigger = a), i.push(de.create(f));
        }),
        i
      );
    });
  var Af = function (e, i, t, r) {
      return (
        i > r ? e(r) : i < 0 && e(0),
        t > r ? (r - i) / (t - i) : t < 0 ? i / (i - t) : 1
      );
    },
    Vu = function o(e, i) {
      i === !0
        ? e.style.removeProperty('touch-action')
        : (e.style.touchAction =
            i === !0
              ? 'auto'
              : i
              ? 'pan-' + i + (st.isTouch ? ' pinch-zoom' : '')
              : 'none'),
        e === bi && o(Ze, i);
    },
    Mf = { auto: 1, scroll: 1 },
    Ah = function (e) {
      var i = e.event,
        t = e.target,
        r = e.axis,
        n = (i.changedTouches ? i.changedTouches[0] : i).target,
        s = n._gsap || Z.core.getCache(n),
        u = kt(),
        a;
      if (!s._isScrollT || u - s._isScrollT > 2e3) {
        for (; n && n.scrollHeight <= n.clientHeight; ) n = n.parentNode;
        (s._isScroll =
          n &&
          !Er(n) &&
          n !== t &&
          (Mf[(a = Ti(n)).overflowY] || Mf[a.overflowX])),
          (s._isScrollT = u);
      }
      (s._isScroll || r === 'x') && (i.stopPropagation(), (i._gsapAllow = !0));
    },
    Of = function (e, i, t, r) {
      return st.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: i,
        onWheel: (r = r && Ah),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return t && Dt(Ue, st.eventTypes[0], Bf, !1, !0);
        },
        onDisable: function () {
          return ht(Ue, st.eventTypes[0], Bf, !0);
        },
      });
    },
    Mh = /(input|label|select|textarea)/i,
    Rf,
    Bf = function (e) {
      var i = Mh.test(e.target.tagName);
      (i || Rf) && ((e._gsapAllow = !0), (Rf = i));
    },
    Oh = function (e) {
      Qo(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = 'wheel,touch'),
        (e.debounce = !!e.debounce),
        (e.id = e.id || 'normalizer');
      var i = e,
        t = i.normalizeScrollX,
        r = i.momentum,
        n = i.allowNestedScroll,
        s,
        u,
        a = Nt(e.target) || bi,
        f = Z.core.globals().ScrollSmoother,
        c = f && f.get(),
        h =
          sr &&
          ((e.content && Nt(e.content)) ||
            (c && e.content !== !1 && !c.smooth() && c.content())),
        d = or(a, ft),
        l = or(a, Et),
        _ = 1,
        p =
          (st.isTouch && we.visualViewport
            ? we.visualViewport.scale * we.visualViewport.width
            : we.outerWidth) / we.innerWidth,
        D = 0,
        y = Pt(r)
          ? function () {
              return r(s);
            }
          : function () {
              return r || 2.8;
            },
        T,
        v,
        b = Of(a, e.type, !0, n),
        C = function () {
          return (v = !1);
        },
        M = Ci,
        E = Ci,
        k = function () {
          (u = ur(a, ft)),
            (E = dn(sr ? 1 : 0, u)),
            t && (M = dn(0, ur(a, Et))),
            (T = Mr);
        },
        R = function () {
          (h._gsap.y = Jn(parseFloat(h._gsap.y) + d.offset) + 'px'),
            (h.style.transform =
              'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
              parseFloat(h._gsap.y) +
              ', 0, 1)'),
            (d.offset = d.cacheID = 0);
        },
        z = function () {
          if (v) {
            requestAnimationFrame(C);
            var H = Jn(s.deltaY / 2),
              V = E(d.v - H);
            if (h && V !== d.v + d.offset) {
              d.offset = V - d.v;
              var O = Jn((parseFloat(h && h._gsap.y) || 0) - d.offset);
              (h.style.transform =
                'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                O +
                ', 0, 1)'),
                (h._gsap.y = O + 'px'),
                (d.cacheID = xe.cache),
                Br();
            }
            return !0;
          }
          d.offset && R(), (v = !0);
        },
        L,
        Y,
        X,
        G,
        W = function () {
          k(),
            L.isActive() &&
              L.vars.scrollY > u &&
              (d() > u ? L.progress(1) && d(u) : L.resetTo('scrollY', u));
        };
      return (
        h && Z.set(h, { y: '+=0' }),
        (e.ignoreCheck = function (I) {
          return (
            (sr && I.type === 'touchmove' && z()) ||
            (_ > 1.05 && I.type !== 'touchstart') ||
            s.isGesturing ||
            (I.touches && I.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          var I = _;
          (_ = Jn(((we.visualViewport && we.visualViewport.scale) || 1) / p)),
            L.pause(),
            I !== _ && Vu(a, _ > 1.01 ? !0 : t ? !1 : 'x'),
            (Y = l()),
            (X = d()),
            k(),
            (T = Mr);
        }),
        (e.onRelease = e.onGestureStart =
          function (I, H) {
            if ((d.offset && R(), !H)) G.restart(!0);
            else {
              xe.cache++;
              var V = y(),
                O,
                w;
              t &&
                ((O = l()),
                (w = O + (V * 0.05 * -I.velocityX) / 0.227),
                (V *= Af(l, O, w, ur(a, Et))),
                (L.vars.scrollX = M(w))),
                (O = d()),
                (w = O + (V * 0.05 * -I.velocityY) / 0.227),
                (V *= Af(d, O, w, ur(a, ft))),
                (L.vars.scrollY = E(w)),
                L.invalidate().duration(V).play(0.01),
                ((sr && L.vars.scrollY >= u) || O >= u - 1) &&
                  Z.to({}, { onUpdate: W, duration: V });
            }
          }),
        (e.onWheel = function () {
          L._ts && L.pause(), kt() - D > 1e3 && ((T = 0), (D = kt()));
        }),
        (e.onChange = function (I, H, V, O, w) {
          if (
            (Mr !== T && k(),
            H && t && l(M(O[2] === H ? Y + (I.startX - I.x) : l() + H - O[1])),
            V)
          ) {
            d.offset && R();
            var Q = w[2] === V,
              ee = Q ? X + I.startY - I.y : d() + V - w[1],
              De = E(ee);
            Q && ee !== De && (X += De - ee), d(De);
          }
          (V || H) && Br();
        }),
        (e.onEnable = function () {
          Vu(a, t ? !1 : 'x'),
            de.addEventListener('refresh', W),
            Dt(we, 'resize', W),
            d.smooth &&
              ((d.target.style.scrollBehavior = 'auto'),
              (d.smooth = l.smooth = !1)),
            b.enable();
        }),
        (e.onDisable = function () {
          Vu(a, !0),
            ht(we, 'resize', W),
            de.removeEventListener('refresh', W),
            b.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (s = new st(e)),
        (s.iOS = sr),
        sr && !d() && d(1),
        sr && Z.ticker.add(Ci),
        (G = s._dc),
        (L = Z.to(s, {
          ease: 'power4',
          paused: !0,
          scrollX: t ? '+=0.1' : '+=0',
          scrollY: '+=0.1',
          onComplete: G.vars.onComplete,
        })),
        s
      );
    };
  (de.sort = function (o) {
    return pe.sort(
      o ||
        function (e, i) {
          return (
            (e.vars.refreshPriority || 0) * -1e6 +
            e.start -
            (i.start + (i.vars.refreshPriority || 0) * -1e6)
          );
        }
    );
  }),
    (de.observe = function (o) {
      return new st(o);
    }),
    (de.normalizeScroll = function (o) {
      if (typeof o == 'undefined') return Ut;
      if (o === !0 && Ut) return Ut.enable();
      if (o === !1) return Ut && Ut.kill();
      var e = o instanceof st ? o : Oh(o);
      return (
        Ut && Ut.target === e.target && Ut.kill(), Er(e.target) && (Ut = e), e
      );
    }),
    (de.core = {
      _getVelocityProp: Su,
      _inputObserver: Of,
      _scrollers: xe,
      _proxies: wi,
      bridge: {
        ss: function () {
          oi || Ar('scrollStart'), (oi = kt());
        },
        ref: function () {
          return bt;
        },
      },
    }),
    _f() && Z.registerPlugin(de);
  /*!
   * strings: 3.11.3
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Rh =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function Lf(o) {
    var e = o.nodeType,
      i = '';
    if (e === 1 || e === 9 || e === 11) {
      if (typeof o.textContent == 'string') return o.textContent;
      for (o = o.firstChild; o; o = o.nextSibling) i += Lf(o);
    } else if (e === 3 || e === 4) return o.nodeValue;
    return i;
  }
  /*!
   * VelocityTracker: 3.11.3
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Si,
    Wu,
    ao,
    Nf,
    mn,
    yn,
    qu,
    If,
    $f = function () {
      return Si || (typeof window != 'undefined' && (Si = window.gsap));
    },
    Uu = {},
    Bh = function (e) {
      return Math.round(e * 1e4) / 1e4;
    },
    ju = function (e) {
      return If(e).id;
    },
    lo = function (e) {
      return Uu[ju(typeof e == 'string' ? ao(e)[0] : e)];
    },
    zf = function (e) {
      var i = mn,
        t;
      if (e - qu >= 0.05)
        for (qu = e; i; )
          (t = i.g(i.t, i.p)),
            (t !== i.v1 || e - i.t1 > 0.2) &&
              ((i.v2 = i.v1), (i.v1 = t), (i.t2 = i.t1), (i.t1 = e)),
            (i = i._next);
    },
    Lh = { deg: 360, rad: Math.PI * 2 },
    Ku = function () {
      (Si = $f()),
        Si &&
          ((ao = Si.utils.toArray),
          (Nf = Si.utils.getUnit),
          (If = Si.core.getCache),
          (yn = Si.ticker),
          (Wu = 1));
    },
    Nh = function (e, i, t, r) {
      (this.t = e),
        (this.p = i),
        (this.g = e._gsap.get),
        (this.rCap = Lh[t || Nf(this.g(e, i))]),
        (this.v1 = this.v2 = 0),
        (this.t1 = this.t2 = yn.time),
        r && ((this._next = r), (r._prev = this));
    },
    fo = (function () {
      function o(i, t) {
        Wu || Ku(),
          (this.target = ao(i)[0]),
          (Uu[ju(this.target)] = this),
          (this._props = {}),
          t && this.add(t);
      }
      o.register = function (t) {
        (Si = t), Ku();
      };
      var e = o.prototype;
      return (
        (e.get = function (t, r) {
          var n =
              this._props[t] ||
              console.warn('Not tracking ' + t + ' velocity.'),
            s,
            u,
            a;
          return (
            (s = parseFloat(r ? n.v1 : n.g(n.t, n.p))),
            (u = s - parseFloat(n.v2)),
            (a = n.rCap),
            a &&
              ((u = u % a), u !== u % (a / 2) && (u = u < 0 ? u + a : u - a)),
            Bh(u / ((r ? n.t1 : yn.time) - n.t2))
          );
        }),
        (e.getAll = function () {
          var t = {},
            r = this._props,
            n;
          for (n in r) t[n] = this.get(n);
          return t;
        }),
        (e.isTracking = function (t) {
          return t in this._props;
        }),
        (e.add = function (t, r) {
          t in this._props ||
            (mn || (yn.add(zf), (qu = yn.time)),
            (mn = this._props[t] = new Nh(this.target, t, r, mn)));
        }),
        (e.remove = function (t) {
          var r = this._props[t],
            n,
            s;
          r &&
            ((n = r._prev),
            (s = r._next),
            n && (n._next = s),
            s ? (s._prev = n) : mn === r && (yn.remove(zf), (mn = 0)),
            delete this._props[t]);
        }),
        (e.kill = function (t) {
          for (var r in this._props) this.remove(r);
          t || delete Uu[ju(this.target)];
        }),
        (o.track = function (t, r, n) {
          Wu || Ku();
          for (
            var s = [],
              u = ao(t),
              a = r.split(','),
              f = (n || '').split(','),
              c = u.length,
              h,
              d;
            c--;

          ) {
            for (h = lo(u[c]) || new o(u[c]), d = a.length; d--; )
              h.add(a[d], f[d] || f[0]);
            s.push(h);
          }
          return s;
        }),
        (o.untrack = function (t, r) {
          var n = (r || '').split(',');
          ao(t).forEach(function (s) {
            var u = lo(s);
            u &&
              (n.length
                ? n.forEach(function (a) {
                    return u.remove(a);
                  })
                : u.kill(1));
          });
        }),
        (o.isTracking = function (t, r) {
          var n = lo(t);
          return n && n.isTracking(r);
        }),
        (o.getVelocity = function (t, r) {
          var n = lo(t);
          return !n || !n.isTracking(r)
            ? console.warn('Not tracking velocity of ' + r)
            : n.get(r);
        }),
        o
      );
    })();
  (fo.getByTarget = lo), $f() && Si.registerPlugin(fo);
  /*!
   * InertiaPlugin 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var ct,
    Yf,
    Hf,
    Xf,
    Gu,
    co,
    Vf,
    Wf,
    qf,
    Qu,
    Uf,
    ho,
    Zu,
    jf,
    ls = fo.getByTarget,
    Kf = function () {
      return (
        ct ||
        (typeof window != 'undefined' &&
          (ct = window.gsap) &&
          ct.registerPlugin &&
          ct)
      );
    },
    Ih = function (e) {
      return typeof e == 'string';
    },
    po = function (e) {
      return typeof e == 'number';
    },
    ar = function (e) {
      return typeof e == 'object';
    },
    Ju = function (e) {
      return typeof e == 'function';
    },
    $h = 1,
    Gf = Array.isArray,
    zh = function (e) {
      return e;
    },
    Lr = 1e10,
    Qf = 1 / Lr,
    Zf = 0.05,
    Yh = function (e) {
      return Math.round(e * 1e4) / 1e4;
    },
    Hh = function (e, i, t) {
      for (var r in i) !(r in e) && r !== t && (e[r] = i[r]);
      return e;
    },
    Xh = function o(e) {
      var i = {},
        t,
        r;
      for (t in e) i[t] = ar((r = e[t])) && !Gf(r) ? o(r) : r;
      return i;
    },
    Jf = function (e, i, t, r, n) {
      var s = i.length,
        u = 0,
        a = Lr,
        f,
        c,
        h,
        d;
      if (ar(e)) {
        for (; s--; ) {
          (f = i[s]), (c = 0);
          for (h in e) (d = f[h] - e[h]), (c += d * d);
          c < a && ((u = s), (a = c));
        }
        if ((n || Lr) < Lr && n < Math.sqrt(a)) return e;
      } else
        for (; s--; )
          (f = i[s]),
            (c = f - e),
            c < 0 && (c = -c),
            c < a && f >= r && f <= t && ((u = s), (a = c));
      return i[u];
    },
    ec = function (e, i, t, r, n, s, u) {
      if (e.end === 'auto') return e;
      var a = e.end,
        f,
        c;
      if (((t = isNaN(t) ? Lr : t), (r = isNaN(r) ? -Lr : r), ar(i))) {
        if (
          ((f = i.calculated ? i : (Ju(a) ? a(i, u) : Jf(i, a, t, r, s)) || i),
          !i.calculated)
        ) {
          for (c in f) i[c] = f[c];
          i.calculated = !0;
        }
        f = f[n];
      } else f = Ju(a) ? a(i, u) : Gf(a) ? Jf(i, a, t, r, s) : parseFloat(a);
      return (
        f > t ? (f = t) : f < r && (f = r),
        { max: f, min: f, unitFactor: e.unitFactor }
      );
    },
    fs = function (e, i, t) {
      return isNaN(e[i]) ? t : +e[i];
    },
    ea = function (e, i) {
      return (i * Zf * e) / Qu;
    },
    tc = function (e, i, t) {
      return Math.abs(((i - e) * Qu) / t / Zf);
    },
    ic = {
      resistance: 1,
      checkpoint: 1,
      preventOvershoot: 1,
      linkedProps: 1,
      radius: 1,
      duration: 1,
    },
    rc = function (e, i, t, r) {
      if (i.linkedProps) {
        var n = i.linkedProps.split(','),
          s = {},
          u,
          a,
          f,
          c,
          h,
          d;
        for (u = 0; u < n.length; u++)
          (a = n[u]),
            (f = i[a]),
            f &&
              (po(f.velocity)
                ? (c = f.velocity)
                : ((h = h || ls(e)), (c = h && h.isTracking(a) ? h.get(a) : 0)),
              (d = Math.abs(c / fs(f, 'resistance', r))),
              (s[a] = parseFloat(t(e, a)) + ea(c, d)));
        return s;
      }
    },
    Vh = function (e, i, t, r, n, s) {
      if (
        (t === void 0 && (t = 10),
        r === void 0 && (r = 0.2),
        n === void 0 && (n = 1),
        s === void 0 && (s = 0),
        Ih(e) && (e = Xf(e)[0]),
        !e)
      )
        return 0;
      var u = 0,
        a = Lr,
        f = i.inertia || i,
        c = qf(e).get,
        h = fs(f, 'resistance', co.resistance),
        d,
        l,
        _,
        p,
        D,
        y,
        T,
        v,
        b,
        C;
      C = rc(e, f, c, h);
      for (d in f)
        ic[d] ||
          ((l = f[d]),
          ar(l) ||
            ((v = v || ls(e)),
            v && v.isTracking(d)
              ? (l = po(l) ? { velocity: l } : { velocity: v.get(d) })
              : ((p = +l || 0), (_ = Math.abs(p / h)))),
          ar(l) &&
            (po(l.velocity)
              ? (p = l.velocity)
              : ((v = v || ls(e)), (p = v && v.isTracking(d) ? v.get(d) : 0)),
            (_ = Uf(r, t, Math.abs(p / fs(l, 'resistance', h)))),
            (D = parseFloat(c(e, d)) || 0),
            (y = D + ea(p, _)),
            'end' in l &&
              ((l = ec(l, C && d in C ? C : y, l.max, l.min, d, f.radius, p)),
              s && (ho === i && (ho = f = Xh(i)), (f[d] = Hh(l, f[d], 'end')))),
            'max' in l && y > +l.max + Qf
              ? ((b = l.unitFactor || co.unitFactors[d] || 1),
                (T =
                  (D > l.max && l.min !== l.max) || (p * b > -15 && p * b < 45)
                    ? r + (t - r) * 0.1
                    : tc(D, l.max, p)),
                T + n < a && (a = T + n))
              : 'min' in l &&
                y < +l.min - Qf &&
                ((b = l.unitFactor || co.unitFactors[d] || 1),
                (T =
                  (D < l.min && l.min !== l.max) || (p * b > -45 && p * b < 15)
                    ? r + (t - r) * 0.1
                    : tc(D, l.min, p)),
                T + n < a && (a = T + n)),
            T > u && (u = T)),
          _ > u && (u = _));
      return u > a && (u = a), u > t ? t : u < r ? r : u;
    },
    nc = function () {
      (ct = Kf()),
        ct &&
          ((Hf = ct.parseEase),
          (Xf = ct.utils.toArray),
          (Vf = ct.utils.getUnit),
          (qf = ct.core.getCache),
          (Uf = ct.utils.clamp),
          (Zu = ct.core.getStyleSaver),
          (jf = ct.core.reverting || function () {}),
          (Gu = Hf('power3')),
          (Qu = Gu(0.05)),
          (Wf = ct.core.PropTween),
          ct.config({
            resistance: 100,
            unitFactors: {
              time: 1e3,
              totalTime: 1e3,
              progress: 1e3,
              totalProgress: 1e3,
            },
          }),
          (co = ct.config()),
          ct.registerPlugin(fo),
          (Yf = 1));
    },
    ta = {
      version: '3.11.3',
      name: 'inertia',
      register: function (e) {
        (ct = e), nc();
      },
      init: function (e, i, t, r, n) {
        Yf || nc();
        var s = ls(e);
        if (i === 'auto') {
          if (!s) {
            console.warn(
              'No inertia tracking on ' +
                e +
                '. InertiaPlugin.track(target) first.'
            );
            return;
          }
          i = s.getAll();
        }
        (this.styles = Zu && typeof e.style == 'object' && Zu(e)),
          (this.target = e),
          (this.tween = t),
          (ho = i);
        var u = e._gsap,
          a = u.get,
          f = i.duration,
          c = ar(f),
          h = i.preventOvershoot || (c && f.overshoot === 0),
          d = fs(i, 'resistance', co.resistance),
          l = po(f)
            ? f
            : Vh(
                e,
                i,
                (c && f.max) || 10,
                (c && f.min) || 0.2,
                c && 'overshoot' in f ? +f.overshoot : h ? 0 : 1,
                !0
              ),
          _,
          p,
          D,
          y,
          T,
          v,
          b,
          C,
          M;
        (i = ho), (ho = 0), (M = rc(e, i, a, d));
        for (_ in i)
          ic[_] ||
            ((p = i[_]),
            Ju(p) && (p = p(r, e, n)),
            po(p)
              ? (T = p)
              : ar(p) && !isNaN(p.velocity)
              ? (T = +p.velocity)
              : s && s.isTracking(_)
              ? (T = s.get(_))
              : console.warn(
                  'ERROR: No velocity was defined for ' + e + ' property: ' + _
                ),
            (v = ea(T, l)),
            (C = 0),
            (D = a(e, _)),
            (y = Vf(D)),
            (D = parseFloat(D)),
            ar(p) &&
              ((b = D + v),
              'end' in p &&
                (p = ec(p, M && _ in M ? M : b, p.max, p.min, _, i.radius, T)),
              'max' in p && +p.max < b
                ? h || p.preventOvershoot
                  ? (v = p.max - D)
                  : (C = p.max - D - v)
                : 'min' in p &&
                  +p.min > b &&
                  (h || p.preventOvershoot
                    ? (v = p.min - D)
                    : (C = p.min - D - v))),
            this._props.push(_),
            this.styles && this.styles.save(_),
            (this._pt = new Wf(this._pt, e, _, D, 0, zh, 0, u.set(e, _, this))),
            (this._pt.u = y || 0),
            (this._pt.c1 = v),
            (this._pt.c2 = C));
        return t.duration(l), $h;
      },
      render: function (e, i) {
        var t = i._pt;
        if (((e = Gu(i.tween._time / i.tween._dur)), e || !jf()))
          for (; t; )
            t.set(t.t, t.p, Yh(t.s + t.c1 * e + t.c2 * e * e) + t.u, t.d, e),
              (t = t._next);
        else i.styles.revert();
      },
    };
  'track,untrack,isTracking,getVelocity,getByTarget'
    .split(',')
    .forEach(function (o) {
      return (ta[o] = fo[o]);
    }),
    Kf() && ct.registerPlugin(ta);
  function oc(o, e) {
    for (var i = 0; i < e.length; i++) {
      var t = e[i];
      (t.enumerable = t.enumerable || !1),
        (t.configurable = !0),
        'value' in t && (t.writable = !0),
        Object.defineProperty(o, t.key, t);
    }
  }
  function Wh(o, e, i) {
    return e && oc(o.prototype, e), i && oc(o, i), o;
  }
  /*!
   * ScrollSmoother 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Se,
    cs,
    It,
    vn,
    _o,
    Ei,
    Nr,
    sc,
    ge,
    Fi,
    ds,
    uc,
    ac,
    lc,
    fc,
    cc = function () {
      return typeof window != 'undefined';
    },
    dc = function () {
      return Se || (cc() && (Se = window.gsap) && Se.registerPlugin && Se);
    },
    qh = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Uh = function (e, i) {
      var t = e.parentNode || _o,
        r = e.getBoundingClientRect(),
        n = t.getBoundingClientRect(),
        s = n.top - r.top,
        u = n.bottom - r.bottom,
        a = (Math.abs(s) > Math.abs(u) ? s : u) / (1 - i),
        f = -a * i,
        c,
        h;
      return (
        a > 0 &&
          ((c = n.height / (It.innerHeight + n.height)),
          (h =
            c === 0.5
              ? n.height * 2
              : Math.min(n.height, (-a * c) / (2 * c - 1)) * 2 * (i || 1)),
          (f += i ? -h * i : -h / 2),
          (a += h)),
        { change: a, offset: f }
      );
    },
    jh = function (e) {
      var i = vn.querySelector('.ScrollSmoother-wrapper');
      return (
        i ||
          ((i = vn.createElement('div')),
          i.classList.add('ScrollSmoother-wrapper'),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e)),
        i
      );
    },
    Ir = (function () {
      function o(e) {
        var i = this;
        cs ||
          o.register(Se) ||
          console.warn('Please gsap.registerPlugin(ScrollSmoother)'),
          (e = this.vars = e || {}),
          Fi && Fi.kill(),
          (Fi = this),
          lc(this);
        var t = e,
          r = t.smoothTouch,
          n = t.onUpdate,
          s = t.onStop,
          u = t.smooth,
          a = t.onFocusIn,
          f = t.normalizeScroll,
          c,
          h,
          d,
          l,
          _,
          p,
          D,
          y,
          T,
          v,
          b,
          C,
          M,
          E = this,
          k =
            typeof ResizeObserver != 'undefined' &&
            e.autoResize !== !1 &&
            new ResizeObserver(function () {
              return ge.isRefreshing || fc.restart(!0);
            }),
          R = e.effectsPrefix || '',
          z = ge.getScrollFunc(It),
          L =
            ge.isTouch === 1
              ? r === !0
                ? 0.8
                : parseFloat(r) || 0
              : u === 0 || u === !1
              ? 0
              : parseFloat(u) || 0.8,
          Y = 0,
          X = 0,
          G = 1,
          W = uc(0),
          I = function () {
            return W.update(-Y);
          },
          H = { y: 0 },
          V = function () {
            return (c.style.overflow = 'visible');
          },
          O,
          w = function (F) {
            F.update();
            var U = F.getTween();
            U && (U.pause(), (U._time = U._dur), (U._tTime = U._tDur)),
              (O = !1),
              F.animation.progress(F.progress, !0);
          },
          Q = function (F, U) {
            ((F !== Y && !v) || U) &&
              (L &&
                ((c.style.transform =
                  'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                  F +
                  ', 0, 1)'),
                (c._gsap.y = F + 'px')),
              (X = F - Y),
              (Y = F),
              ge.isUpdating || ge.update());
          },
          ee = function (F) {
            return arguments.length
              ? (F < 0 && (F = 0),
                (H.y = -F),
                (O = !0),
                v ? (Y = -F) : Q(-F),
                ge.isRefreshing ? l.update() : z(F),
                this)
              : -Y;
          },
          De,
          ie = function (F) {
            (h.scrollTop = 0),
              !(
                (F.target.contains && F.target.contains(h)) ||
                (a && a(i, F) === !1)
              ) &&
                (ge.isInViewport(F.target) ||
                  F.target === De ||
                  i.scrollTo(F.target, !1, 'center center'),
                (De = F.target));
          },
          le = function (F, U) {
            var x, J, re, Be;
            _.forEach(function (ce) {
              (x = ce.pins),
                (Be = ce.markers),
                F.forEach(function (ne) {
                  ce.trigger &&
                    ne.trigger &&
                    ce !== ne &&
                    (ne.trigger === ce.trigger ||
                      ne.pinnedContainer === ce.trigger ||
                      ce.trigger.contains(ne.trigger)) &&
                    ((J = ne.start),
                    (re =
                      (J - ce.start - ce.offset) / ce.ratio - (J - ce.start)),
                    x.forEach(function (ke) {
                      return (re -= ke.distance / ce.ratio - ke.distance);
                    }),
                    ne.setPositions(J + re, ne.end + re),
                    ne.markerStart &&
                      Be.push(
                        Se.quickSetter(
                          [ne.markerStart, ne.markerEnd],
                          'y',
                          'px'
                        )
                      ),
                    ne.pin &&
                      ne.end > 0 &&
                      ((re = ne.end - ne.start),
                      x.push({
                        start: ne.start,
                        end: ne.end,
                        distance: re,
                        trig: ne,
                      }),
                      ce.setPositions(ce.start, ce.end + re),
                      ce.vars.onRefresh(ce)));
                });
            });
          },
          fe = function () {
            V(),
              requestAnimationFrame(V),
              _ &&
                (_.forEach(function (F) {
                  var U = F.start,
                    x = F.auto
                      ? Math.min(ge.maxScroll(F.scroller), F.end)
                      : U + (F.end - U) / F.ratio,
                    J = (x - F.end) / 2;
                  (U -= J),
                    (x -= J),
                    (F.offset = J || 1e-4),
                    (F.pins.length = 0),
                    F.setPositions(Math.min(U, x), Math.max(U, x)),
                    F.vars.onRefresh(F);
                }),
                le(ge.sort())),
              W.reset();
          },
          me = function () {
            return ge.addEventListener('refresh', fe);
          },
          ye = function () {
            return (
              _ &&
              _.forEach(function (F) {
                return F.vars.onRefresh(F);
              })
            );
          },
          _i = function () {
            return (
              _ &&
                _.forEach(function (F) {
                  return F.vars.onRefreshInit(F);
                }),
              ye
            );
          },
          Ie = function (F, U, x, J) {
            return function () {
              var re = typeof U == 'function' ? U(x, J) : U;
              return (
                re ||
                  re === 0 ||
                  (re =
                    J.getAttribute('data-' + R + F) || (F === 'speed' ? 1 : 0)),
                J.setAttribute('data-' + R + F, re),
                re === 'auto' ? re : parseFloat(re)
              );
            };
          },
          je = function (F, U, x, J) {
            var re = Ie('speed', U, J, F),
              Be = Ie('lag', x, J, F),
              ce = Se.getProperty(F, 'y'),
              ne = F._gsap,
              ke,
              Le,
              ut,
              ae,
              ze,
              Xe,
              Ai = function () {
                (U = re()),
                  (x = Be()),
                  (ke = parseFloat(U) || 1),
                  (ut = U === 'auto'),
                  (ze = ut ? 0 : 0.5),
                  ae && ae.kill(),
                  (ae =
                    x &&
                    Se.to(F, {
                      ease: ds,
                      overwrite: !1,
                      y: '+=0',
                      duration: x,
                    })),
                  Le && ((Le.ratio = ke), (Le.autoSpeed = ut));
              },
              Ke = function () {
                (ne.y = ce + 'px'), ne.renderTransform(1), Ai();
              },
              yt = [],
              gi = [],
              pt = 0,
              Kt = function (te) {
                if (ut) {
                  Ke();
                  var Ge = Uh(F, sc(0, 1, -te.start / (te.end - te.start)));
                  (pt = Ge.change), (Xe = Ge.offset);
                } else (pt = (te.end - te.start) * (1 - ke)), (Xe = 0);
                yt.forEach(function (Ye) {
                  return (pt -= Ye.distance * (1 - ke));
                }),
                  te.vars.onUpdate(te),
                  ae && ae.progress(1);
              };
            return (
              Ai(),
              (ke !== 1 || ut || ae) &&
                ((Le = ge.create({
                  trigger: ut ? F.parentNode : F,
                  scroller: h,
                  scrub: !0,
                  refreshPriority: -999,
                  onRefreshInit: Ke,
                  onRefresh: Kt,
                  onKill: function (te) {
                    var Ge = _.indexOf(te);
                    Ge >= 0 && _.splice(Ge, 1), Ke();
                  },
                  onUpdate: function (te) {
                    var Ge = ce + pt * (te.progress - ze),
                      Ye = yt.length,
                      Ve = 0,
                      Ne,
                      Ae,
                      Tt;
                    if (te.offset) {
                      if (Ye) {
                        for (Ae = -Y, Tt = te.end; Ye--; ) {
                          if (
                            ((Ne = yt[Ye]),
                            Ne.trig.isActive ||
                              (Ae >= Ne.start && Ae <= Ne.end))
                          ) {
                            ae &&
                              ((Ne.trig.progress +=
                                Ne.trig.direction < 0 ? 0.001 : -0.001),
                              Ne.trig.update(0, 0, 1),
                              ae.resetTo('y', parseFloat(ne.y), -X, !0),
                              G && ae.progress(1));
                            return;
                          }
                          Ae > Ne.end && (Ve += Ne.distance),
                            (Tt -= Ne.distance);
                        }
                        Ge =
                          ce +
                          Ve +
                          pt *
                            ((Se.utils.clamp(te.start, te.end, Ae) -
                              te.start -
                              Ve) /
                              (Tt - te.start) -
                              ze);
                      }
                      (Ge = qh(Ge + Xe)),
                        gi.length &&
                          !ut &&
                          gi.forEach(function (Di) {
                            return Di(Ge - Ve);
                          }),
                        ae
                          ? (ae.resetTo('y', Ge, -X, !0), G && ae.progress(1))
                          : ((ne.y = Ge + 'px'), ne.renderTransform(1));
                    }
                  },
                })),
                Kt(Le),
                (Se.core.getCache(Le.trigger).stRevert = _i),
                (Le.startY = ce),
                (Le.pins = yt),
                (Le.markers = gi),
                (Le.ratio = ke),
                (Le.autoSpeed = ut),
                (F.style.willChange = 'transform')),
              Le
            );
          };
        me(),
          ge.addEventListener('killAll', me),
          Se.delayedCall(0.5, function () {
            return (G = 0);
          }),
          (this.scrollTop = ee),
          (this.scrollTo = function (N, F, U) {
            var x = Se.utils.clamp(
              0,
              ge.maxScroll(It),
              isNaN(N) ? i.offset(N, U) : +N
            );
            F
              ? v
                ? Se.to(i, {
                    duration: L,
                    scrollTop: x,
                    overwrite: 'auto',
                    ease: ds,
                  })
                : z(x)
              : ee(x);
          }),
          (this.offset = function (N, F) {
            N = Nr(N)[0];
            var U = N.style.cssText,
              x = ge.create({ trigger: N, start: F || 'top top' }),
              J;
            return (
              _ && le([x]),
              (J = x.start),
              x.kill(!1),
              (N.style.cssText = U),
              (Se.core.getCache(N).uncache = 1),
              J
            );
          });
        function ue() {
          return (
            (d = c.clientHeight),
            (c.style.overflow = 'visible'),
            (Ei.style.height = d + 'px'),
            d - It.innerHeight
          );
        }
        (this.content = function (N) {
          if (arguments.length) {
            var F =
              Nr(N || '#smooth-content')[0] ||
              console.warn('ScrollSmoother needs a valid content element.') ||
              Ei.children[0];
            return (
              F !== c &&
                ((c = F),
                (T = c.getAttribute('style') || ''),
                k && k.observe(c),
                Se.set(c, {
                  overflow: 'visible',
                  width: '100%',
                  boxSizing: 'border-box',
                  y: '+=0',
                }),
                L || Se.set(c, { clearProps: 'transform' })),
              this
            );
          }
          return c;
        }),
          (this.wrapper = function (N) {
            return arguments.length
              ? ((h = Nr(N || '#smooth-wrapper')[0] || jh(c)),
                (y = h.getAttribute('style') || ''),
                ue(),
                Se.set(
                  h,
                  L
                    ? {
                        overflow: 'hidden',
                        position: 'fixed',
                        height: '100%',
                        width: '100%',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }
                    : {
                        overflow: 'visible',
                        position: 'relative',
                        width: '100%',
                        height: 'auto',
                        top: 'auto',
                        bottom: 'auto',
                        left: 'auto',
                        right: 'auto',
                      }
                ),
                this)
              : h;
          }),
          (this.effects = function (N, F) {
            var U;
            if ((_ || (_ = []), !N)) return _.slice(0);
            (N = Nr(N)),
              N.forEach(function (ke) {
                for (var Le = _.length; Le--; )
                  _[Le].trigger === ke && _[Le].kill();
              }),
              (F = F || {});
            var x = F,
              J = x.speed,
              re = x.lag,
              Be = [],
              ce,
              ne;
            for (ce = 0; ce < N.length; ce++)
              (ne = je(N[ce], J, re, ce)), ne && Be.push(ne);
            return (U = _).push.apply(U, Be), Be;
          }),
          (this.sections = function (N, F) {
            var U;
            if ((p || (p = []), !N)) return p.slice(0);
            var x = Nr(N).map(function (J) {
              return ge.create({
                trigger: J,
                start: 'top 120%',
                end: 'bottom -20%',
                onToggle: function (Be) {
                  (J.style.opacity = Be.isActive ? '1' : '0'),
                    (J.style.pointerEvents = Be.isActive ? 'all' : 'none');
                },
              });
            });
            return F && F.add ? (U = p).push.apply(U, x) : (p = x.slice(0)), x;
          }),
          this.content(e.content),
          this.wrapper(e.wrapper),
          (this.render = function (N) {
            return Q(N || N === 0 ? N : Y);
          }),
          (this.getVelocity = function () {
            return W.getVelocity(-Y);
          }),
          ge.scrollerProxy(h, {
            scrollTop: ee,
            scrollHeight: function () {
              return ue() && Ei.scrollHeight;
            },
            fixedMarkers: e.fixedMarkers !== !1 && !!L,
            content: c,
            getBoundingClientRect: function () {
              return {
                top: 0,
                left: 0,
                width: It.innerWidth,
                height: It.innerHeight,
              };
            },
          }),
          ge.defaults({ scroller: h });
        var $e = ge.getAll().filter(function (N) {
          return N.scroller === It || N.scroller === h;
        });
        $e.forEach(function (N) {
          return N.revert(!0);
        }),
          (l = ge.create({
            animation: Se.fromTo(
              H,
              { y: 0 },
              {
                y: function () {
                  return -ue();
                },
                immediateRender: !1,
                ease: 'none',
                data: 'ScrollSmoother',
                duration: 100,
                onUpdate: function () {
                  if (this._dur) {
                    var F = O;
                    F && (w(l), (H.y = Y)), Q(H.y, F), I(), n && !v && n(E);
                  }
                },
              }
            ),
            onRefreshInit: function (F) {
              if (_) {
                var U = ge.getAll().filter(function (J) {
                  return !!J.pin;
                });
                _.forEach(function (J) {
                  J.vars.pinnedContainer ||
                    U.forEach(function (re) {
                      if (re.pin.contains(J.trigger)) {
                        var Be = J.vars;
                        (Be.pinnedContainer = re.pin),
                          (J.vars = null),
                          J.init(Be, J.animation);
                      }
                    });
                });
              }
              var x = F.getTween();
              (M = x && x._end > x._dp._time),
                (C = Y),
                (H.y = 0),
                L &&
                  ((h.style.pointerEvents = 'none'),
                  (h.scrollTop = 0),
                  setTimeout(function () {
                    return h.style.removeProperty('pointer-events');
                  }, 50));
            },
            onRefresh: function (F) {
              F.animation.invalidate(),
                F.setPositions(F.start, ue()),
                M || w(F),
                (H.y = -z()),
                Q(H.y),
                G || F.animation.progress(Se.utils.clamp(0, 1, C / -F.end)),
                M && ((F.progress -= 0.001), F.update());
            },
            id: 'ScrollSmoother',
            scroller: It,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: ue,
            onScrubComplete: function () {
              W.reset(), s && s(i);
            },
            scrub: L || !0,
          })),
          (this.smooth = function (N) {
            return (
              arguments.length && (L = N || 0),
              arguments.length
                ? l.scrubDuration(N)
                : l.getTween()
                ? l.getTween().duration()
                : 0
            );
          }),
          l.getTween() && (l.getTween().vars.ease = e.ease || ds),
          (this.scrollTrigger = l),
          e.effects &&
            this.effects(
              e.effects === !0
                ? '[data-' + R + 'speed], [data-' + R + 'lag]'
                : e.effects,
              {}
            ),
          e.sections &&
            this.sections(e.sections === !0 ? '[data-section]' : e.sections),
          $e.forEach(function (N) {
            (N.vars.scroller = h), N.init(N.vars, N.animation);
          }),
          (this.paused = function (N, F) {
            return arguments.length
              ? (!!v !== N &&
                  (N
                    ? (l.getTween() && l.getTween().pause(),
                      z(-Y),
                      W.reset(),
                      (b = ge.normalizeScroll()),
                      b && b.disable(),
                      (v = ge.observe({
                        preventDefault: !0,
                        type: 'wheel,touch,scroll',
                        debounce: !1,
                        allowClicks: !0,
                        onChangeY: function () {
                          return ee(-Y);
                        },
                      })),
                      (v.nested = ac(_o, 'wheel,touch,scroll', !0, F !== !1)))
                    : (v.nested.kill(),
                      v.kill(),
                      (v = 0),
                      b && b.enable(),
                      (l.progress = (-Y - l.start) / (l.end - l.start)),
                      w(l))),
                this)
              : !!v;
          }),
          (this.kill = this.revert =
            function () {
              i.paused(!1), w(l), l.kill();
              for (var N = (_ || []).concat(p || []), F = N.length; F--; )
                N[F].kill();
              ge.scrollerProxy(h),
                ge.removeEventListener('killAll', me),
                ge.removeEventListener('refresh', fe),
                (h.style.cssText = y),
                (c.style.cssText = T);
              var U = ge.defaults({});
              U && U.scroller === h && ge.defaults({ scroller: It }),
                i.normalizer && ge.normalizeScroll(!1),
                clearInterval(D),
                (Fi = null),
                k && k.disconnect(),
                Ei.style.removeProperty('height'),
                It.removeEventListener('focusin', ie);
            }),
          (this.refresh = function (N, F) {
            return l.refresh(N, F);
          }),
          f &&
            (this.normalizer = ge.normalizeScroll(
              f === !0 ? { debounce: !0, content: !L && c } : f
            )),
          ge.config(e),
          'overscrollBehavior' in It.getComputedStyle(Ei) &&
            Se.set([Ei, _o], { overscrollBehavior: 'none' }),
          'scrollBehavior' in It.getComputedStyle(Ei) &&
            Se.set([Ei, _o], { scrollBehavior: 'auto' }),
          It.addEventListener('focusin', ie),
          (D = setInterval(I, 250)),
          vn.readyState === 'loading' ||
            requestAnimationFrame(function () {
              return ge.refresh();
            });
      }
      return (
        (o.register = function (i) {
          return (
            cs ||
              ((Se = i || dc()),
              cc() &&
                window.document &&
                ((It = window),
                (vn = document),
                (_o = vn.documentElement),
                (Ei = vn.body)),
              Se &&
                ((Nr = Se.utils.toArray),
                (sc = Se.utils.clamp),
                (ds = Se.parseEase('expo')),
                (lc = Se.core.context || function () {}),
                (fc = Se.delayedCall(0.2, function () {
                  return ge.isRefreshing || (Fi && Fi.refresh());
                }).pause()),
                (ge = Se.core.globals().ScrollTrigger),
                Se.core.globals('ScrollSmoother', o),
                Ei &&
                  ge &&
                  ((uc = ge.core._getVelocityProp),
                  (ac = ge.core._inputObserver),
                  (o.refresh = ge.refresh),
                  (cs = 1)))),
            cs
          );
        }),
        Wh(o, [
          {
            key: 'progress',
            get: function () {
              return this.scrollTrigger
                ? this.scrollTrigger.animation._time / 100
                : 0;
            },
          },
        ]),
        o
      );
    })();
  (Ir.version = '3.11.3'),
    (Ir.create = function (o) {
      return Fi && o && Fi.content() === Nr(o.content)[0] ? Fi : new Ir(o);
    }),
    (Ir.get = function () {
      return Fi;
    }),
    dc() && Se.registerPlugin(Ir);
  /*!
   * SplitText: 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var $r,
    hc,
    pc,
    Kh = /(?:\r|\n|\t\t)/g,
    Gh = /(?:\s\s+)/g,
    Qh = function () {
      ($r = document), (hc = window), (pc = 1);
    },
    _c = function (e) {
      return hc.getComputedStyle(e);
    },
    Zh = Array.isArray,
    gc = [].slice,
    ia = function (e, i) {
      var t;
      return Zh(e)
        ? e
        : (t = typeof e) === 'string' && !i && e
        ? gc.call($r.querySelectorAll(e), 0)
        : e && t === 'object' && 'length' in e
        ? gc.call(e, 0)
        : e
        ? [e]
        : [];
    },
    ra = function (e) {
      return e.position === 'absolute' || e.absolute === !0;
    },
    Jh = function (e, i) {
      for (var t = i.length, r; --t > -1; )
        if (((r = i[t]), e.substr(0, r.length) === r)) return r.length;
    },
    ep = " style='position:relative;display:inline-block;'",
    Dc = function (e, i) {
      e === void 0 && (e = '');
      var t = ~e.indexOf('++'),
        r = 1;
      return (
        t && (e = e.split('++').join('')),
        function () {
          return (
            '<' + i + ep + (e ? " class='" + e + (t ? r++ : '') + "'>" : '>')
          );
        }
      );
    },
    mc = function o(e, i, t) {
      var r = e.nodeType;
      if (r === 1 || r === 9 || r === 11)
        for (e = e.firstChild; e; e = e.nextSibling) o(e, i, t);
      else (r === 3 || r === 4) && (e.nodeValue = e.nodeValue.split(i).join(t));
    },
    na = function (e, i) {
      for (var t = i.length; --t > -1; ) e.push(i[t]);
    },
    yc = function (e, i, t) {
      for (var r; e && e !== i; ) {
        if (((r = e._next || e.nextSibling), r))
          return r.textContent.charAt(0) === t;
        e = e.parentNode || e._parent;
      }
    },
    tp = function o(e) {
      var i = ia(e.childNodes),
        t = i.length,
        r,
        n;
      for (r = 0; r < t; r++)
        (n = i[r]),
          n._isSplit
            ? o(n)
            : r && n.previousSibling && n.previousSibling.nodeType === 3
            ? ((n.previousSibling.nodeValue +=
                n.nodeType === 3 ? n.nodeValue : n.firstChild.nodeValue),
              e.removeChild(n))
            : n.nodeType !== 3 &&
              (e.insertBefore(n.firstChild, n), e.removeChild(n));
    },
    ki = function (e, i) {
      return parseFloat(i[e]) || 0;
    },
    ip = function (e, i, t, r, n, s, u) {
      var a = _c(e),
        f = ki('paddingLeft', a),
        c = -999,
        h = ki('borderBottomWidth', a) + ki('borderTopWidth', a),
        d = ki('borderLeftWidth', a) + ki('borderRightWidth', a),
        l = ki('paddingTop', a) + ki('paddingBottom', a),
        _ = ki('paddingLeft', a) + ki('paddingRight', a),
        p = ki('fontSize', a) * (i.lineThreshold || 0.2),
        D = a.textAlign,
        y = [],
        T = [],
        v = [],
        b = i.wordDelimiter || ' ',
        C = i.tag ? i.tag : i.span ? 'span' : 'div',
        M = i.type || i.split || 'chars,words,lines',
        E = n && ~M.indexOf('lines') ? [] : null,
        k = ~M.indexOf('words'),
        R = ~M.indexOf('chars'),
        z = ra(i),
        L = i.linesClass,
        Y = ~(L || '').indexOf('++'),
        X = [],
        G = a.display === 'flex',
        W = e.style.display,
        I,
        H,
        V,
        O,
        w,
        Q,
        ee,
        De,
        ie,
        le,
        fe,
        me;
      for (
        Y && (L = L.split('++').join('')),
          G && (e.style.display = 'block'),
          H = e.getElementsByTagName('*'),
          V = H.length,
          w = [],
          I = 0;
        I < V;
        I++
      )
        w[I] = H[I];
      if (E || z)
        for (I = 0; I < V; I++)
          (O = w[I]),
            (Q = O.parentNode === e),
            (Q || z || (R && !k)) &&
              ((me = O.offsetTop),
              E &&
                Q &&
                Math.abs(me - c) > p &&
                (O.nodeName !== 'BR' || I === 0) &&
                ((ee = []), E.push(ee), (c = me)),
              z &&
                ((O._x = O.offsetLeft),
                (O._y = me),
                (O._w = O.offsetWidth),
                (O._h = O.offsetHeight)),
              E &&
                (((O._isSplit && Q) ||
                  (!R && Q) ||
                  (k && Q) ||
                  (!k &&
                    O.parentNode.parentNode === e &&
                    !O.parentNode._isSplit)) &&
                  (ee.push(O), (O._x -= f), yc(O, e, b) && (O._wordEnd = !0)),
                O.nodeName === 'BR' &&
                  ((O.nextSibling && O.nextSibling.nodeName === 'BR') ||
                    I === 0) &&
                  E.push([])));
      for (I = 0; I < V; I++) {
        if (((O = w[I]), (Q = O.parentNode === e), O.nodeName === 'BR')) {
          E || z
            ? (O.parentNode && O.parentNode.removeChild(O),
              w.splice(I--, 1),
              V--)
            : k || e.appendChild(O);
          continue;
        }
        if (
          (z &&
            ((ie = O.style),
            !k && !Q && ((O._x += O.parentNode._x), (O._y += O.parentNode._y)),
            (ie.left = O._x + 'px'),
            (ie.top = O._y + 'px'),
            (ie.position = 'absolute'),
            (ie.display = 'block'),
            (ie.width = O._w + 1 + 'px'),
            (ie.height = O._h + 'px')),
          !k && R)
        )
          if (O._isSplit)
            for (
              O._next = H = O.nextSibling, O.parentNode.appendChild(O);
              H && H.nodeType === 3 && H.textContent === ' ';

            )
              (O._next = H.nextSibling),
                O.parentNode.appendChild(H),
                (H = H.nextSibling);
          else
            O.parentNode._isSplit
              ? ((O._parent = O.parentNode),
                !O.previousSibling &&
                  O.firstChild &&
                  (O.firstChild._isFirst = !0),
                O.nextSibling &&
                  O.nextSibling.textContent === ' ' &&
                  !O.nextSibling.nextSibling &&
                  X.push(O.nextSibling),
                (O._next =
                  O.nextSibling && O.nextSibling._isFirst
                    ? null
                    : O.nextSibling),
                O.parentNode.removeChild(O),
                w.splice(I--, 1),
                V--)
              : Q ||
                ((me = !O.nextSibling && yc(O.parentNode, e, b)),
                O.parentNode._parent && O.parentNode._parent.appendChild(O),
                me && O.parentNode.appendChild($r.createTextNode(' ')),
                C === 'span' && (O.style.display = 'inline'),
                y.push(O));
        else
          O.parentNode._isSplit && !O._isSplit && O.innerHTML !== ''
            ? T.push(O)
            : R &&
              !O._isSplit &&
              (C === 'span' && (O.style.display = 'inline'), y.push(O));
      }
      for (I = X.length; --I > -1; ) X[I].parentNode.removeChild(X[I]);
      if (E) {
        for (
          z &&
            ((le = $r.createElement(C)),
            e.appendChild(le),
            (fe = le.offsetWidth + 'px'),
            (me = le.offsetParent === e ? 0 : e.offsetLeft),
            e.removeChild(le)),
            ie = e.style.cssText,
            e.style.cssText = 'display:none;';
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (De = b === ' ' && (!z || (!k && !R)), I = 0; I < E.length; I++) {
          for (
            ee = E[I],
              le = $r.createElement(C),
              le.style.cssText =
                'display:block;text-align:' +
                D +
                ';position:' +
                (z ? 'absolute;' : 'relative;'),
              L && (le.className = L + (Y ? I + 1 : '')),
              v.push(le),
              V = ee.length,
              H = 0;
            H < V;
            H++
          )
            ee[H].nodeName !== 'BR' &&
              ((O = ee[H]),
              le.appendChild(O),
              De && O._wordEnd && le.appendChild($r.createTextNode(' ')),
              z &&
                (H === 0 &&
                  ((le.style.top = O._y + 'px'),
                  (le.style.left = f + me + 'px')),
                (O.style.top = '0px'),
                me && (O.style.left = O._x - me + 'px')));
          V === 0
            ? (le.innerHTML = '&nbsp;')
            : !k && !R && (tp(le), mc(le, String.fromCharCode(160), ' ')),
            z && ((le.style.width = fe), (le.style.height = O._h + 'px')),
            e.appendChild(le);
        }
        e.style.cssText = ie;
      }
      z &&
        (u > e.clientHeight &&
          ((e.style.height = u - l + 'px'),
          e.clientHeight < u && (e.style.height = u + h + 'px')),
        s > e.clientWidth &&
          ((e.style.width = s - _ + 'px'),
          e.clientWidth < s && (e.style.width = s + d + 'px'))),
        G && (W ? (e.style.display = W) : e.style.removeProperty('display')),
        na(t, y),
        k && na(r, T),
        na(n, v);
    },
    rp = function (e, i, t, r) {
      var n = i.tag ? i.tag : i.span ? 'span' : 'div',
        s = i.type || i.split || 'chars,words,lines',
        u = ~s.indexOf('chars'),
        a = ra(i),
        f = i.wordDelimiter || ' ',
        c = f !== ' ' ? '' : a ? '&#173; ' : ' ',
        h = '</' + n + '>',
        d = 1,
        l = i.specialChars
          ? typeof i.specialChars == 'function'
            ? i.specialChars
            : Jh
          : null,
        _,
        p,
        D,
        y,
        T,
        v,
        b,
        C,
        M = $r.createElement('div'),
        E = e.parentNode;
      for (
        E.insertBefore(M, e),
          M.textContent = e.nodeValue,
          E.removeChild(e),
          e = M,
          _ = Lf(e),
          b = _.indexOf('<') !== -1,
          i.reduceWhiteSpace !== !1 && (_ = _.replace(Gh, ' ').replace(Kh, '')),
          b && (_ = _.split('<').join('{{LT}}')),
          T = _.length,
          p = (_.charAt(0) === ' ' ? c : '') + t(),
          D = 0;
        D < T;
        D++
      )
        if (((v = _.charAt(D)), l && (C = l(_.substr(D), i.specialChars))))
          (v = _.substr(D, C || 1)),
            (p += u && v !== ' ' ? r() + v + '</' + n + '>' : v),
            (D += C - 1);
        else if (v === f && _.charAt(D - 1) !== f && D) {
          for (p += d ? h : '', d = 0; _.charAt(D + 1) === f; ) (p += c), D++;
          D === T - 1
            ? (p += c)
            : _.charAt(D + 1) !== ')' && ((p += c + t()), (d = 1));
        } else
          v === '{' && _.substr(D, 6) === '{{LT}}'
            ? ((p += u ? r() + '{{LT}}</' + n + '>' : '{{LT}}'), (D += 5))
            : (v.charCodeAt(0) >= 55296 && v.charCodeAt(0) <= 56319) ||
              (_.charCodeAt(D + 1) >= 65024 && _.charCodeAt(D + 1) <= 65039)
            ? ((y = ((_.substr(D, 12).split(Rh) || [])[1] || '').length || 2),
              (p +=
                u && v !== ' '
                  ? r() + _.substr(D, y) + '</' + n + '>'
                  : _.substr(D, y)),
              (D += y - 1))
            : (p += u && v !== ' ' ? r() + v + '</' + n + '>' : v);
      (e.outerHTML = p + (d ? h : '')), b && mc(E, '{{LT}}', '<');
    },
    np = function o(e, i, t, r) {
      var n = ia(e.childNodes),
        s = n.length,
        u = ra(i),
        a,
        f;
      if (e.nodeType !== 3 || s > 1) {
        for (i.absolute = !1, a = 0; a < s; a++)
          (f = n[a]),
            (f._next = f._isFirst = f._parent = f._wordEnd = null),
            (f.nodeType !== 3 || /\S+/.test(f.nodeValue)) &&
              (u &&
                f.nodeType !== 3 &&
                _c(f).display === 'inline' &&
                ((f.style.display = 'inline-block'),
                (f.style.position = 'relative')),
              (f._isSplit = !0),
              o(f, i, t, r));
        (i.absolute = u), (e._isSplit = !0);
        return;
      }
      rp(e, i, t, r);
    },
    hs = (function () {
      function o(i, t) {
        pc || Qh(),
          (this.elements = ia(i)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this._originals = []),
          (this.vars = t || {}),
          this.split(t);
      }
      var e = o.prototype;
      return (
        (e.split = function (t) {
          this.isSplit && this.revert(),
            (this.vars = t = t || this.vars),
            (this._originals.length =
              this.chars.length =
              this.words.length =
              this.lines.length =
                0);
          for (
            var r = this.elements.length,
              n = t.tag ? t.tag : t.span ? 'span' : 'div',
              s = Dc(t.wordsClass, n),
              u = Dc(t.charsClass, n),
              a,
              f,
              c;
            --r > -1;

          )
            (c = this.elements[r]),
              (this._originals[r] = c.innerHTML),
              (a = c.clientHeight),
              (f = c.clientWidth),
              np(c, t, s, u),
              ip(c, t, this.chars, this.words, this.lines, f, a);
          return (
            this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            (this.isSplit = !0),
            this
          );
        }),
        (e.revert = function () {
          var t = this._originals;
          if (!t) throw "revert() call wasn't scoped properly.";
          return (
            this.elements.forEach(function (r, n) {
              return (r.innerHTML = t[n]);
            }),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this.isSplit = !1),
            this
          );
        }),
        (o.create = function (t, r) {
          return new o(t, r);
        }),
        o
      );
    })();
  (hs.version = '3.11.3'), Vt.registerPlugin(de, an, ta);
  const oa = Vt.utils.toArray('.project__item');
  let xn = 0;
  const op = () => {
    const o = () => {
      (xn = oa[0].offsetWidth * 2),
        oa.forEach((r) => {
          xn += r.offsetWidth;
        });
    };
    o(), de.addEventListener('refreshInit', o);
    let e = Vt.to(oa, { x: () => `-${xn - window.innerWidth}`, ease: 'none' }),
      i = de.create({
        animation: e,
        trigger: '.project__list',
        pin: !0,
        scrub: !0,
        end: () => `+=${xn}`,
        invalidateOnRefresh: !0,
      });
    const t = xn / (xn - window.innerWidth);
    an.create('.drag-proxy', {
      trigger: '.project__list',
      type: 'x',
      inertia: !0,
      allowContextMenu: !0,
      onPress() {
        this.startScroll = i.scroll();
      },
      onDrag() {
        i.scroll(this.startScroll - (this.x - this.startX) * t);
      },
      onThrowUpdate() {
        i.scroll(this.startScroll - (this.x - this.startX) * t);
      },
    })[0];
  };
  Vt.registerPlugin(Ir, de);
  const sp = () => {
    Ir.create({ smooth: 1, effects: !0, smoothTouch: 0.1 });
  };
  /*!
   * Glide.js v3.6.0
   * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
   * Released under the MIT License.
   */ function ps(o) {
    return (
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? (ps = function (e) {
            return typeof e;
          })
        : (ps = function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
      ps(o)
    );
  }
  function _s(o, e) {
    if (!(o instanceof e))
      throw new TypeError('Cannot call a class as a function');
  }
  function vc(o, e) {
    for (var i = 0; i < e.length; i++) {
      var t = e[i];
      (t.enumerable = t.enumerable || !1),
        (t.configurable = !0),
        'value' in t && (t.writable = !0),
        Object.defineProperty(o, t.key, t);
    }
  }
  function gs(o, e, i) {
    return e && vc(o.prototype, e), i && vc(o, i), o;
  }
  function up(o, e) {
    if (typeof e != 'function' && e !== null)
      throw new TypeError('Super expression must either be null or a function');
    (o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && sa(o, e);
  }
  function wn(o) {
    return (
      (wn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (i) {
            return i.__proto__ || Object.getPrototypeOf(i);
          }),
      wn(o)
    );
  }
  function sa(o, e) {
    return (
      (sa =
        Object.setPrototypeOf ||
        function (t, r) {
          return (t.__proto__ = r), t;
        }),
      sa(o, e)
    );
  }
  function ap() {
    if (
      typeof Reflect == 'undefined' ||
      !Reflect.construct ||
      Reflect.construct.sham
    )
      return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function lp(o) {
    if (o === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return o;
  }
  function fp(o, e) {
    if (e && (typeof e == 'object' || typeof e == 'function')) return e;
    if (e !== void 0)
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      );
    return lp(o);
  }
  function cp(o) {
    var e = ap();
    return function () {
      var t = wn(o),
        r;
      if (e) {
        var n = wn(this).constructor;
        r = Reflect.construct(t, arguments, n);
      } else r = t.apply(this, arguments);
      return fp(this, r);
    };
  }
  function dp(o, e) {
    for (
      ;
      !Object.prototype.hasOwnProperty.call(o, e) && ((o = wn(o)), o !== null);

    );
    return o;
  }
  function Ds() {
    return (
      typeof Reflect != 'undefined' && Reflect.get
        ? (Ds = Reflect.get)
        : (Ds = function (e, i, t) {
            var r = dp(e, i);
            if (!!r) {
              var n = Object.getOwnPropertyDescriptor(r, i);
              return n.get ? n.get.call(arguments.length < 3 ? e : t) : n.value;
            }
          }),
      Ds.apply(this, arguments)
    );
  }
  var hp = {
    type: 'slider',
    startAt: 0,
    perView: 1,
    focusAt: 0,
    gap: 10,
    autoplay: !1,
    hoverpause: !0,
    keyboard: !0,
    bound: !1,
    swipeThreshold: 80,
    dragThreshold: 120,
    perSwipe: '',
    touchRatio: 0.5,
    touchAngle: 45,
    animationDuration: 400,
    rewind: !0,
    rewindDuration: 800,
    animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',
    waitForTransition: !0,
    throttle: 10,
    direction: 'ltr',
    peek: 0,
    cloningRatio: 1,
    breakpoints: {},
    classes: {
      swipeable: 'glide--swipeable',
      dragging: 'glide--dragging',
      direction: { ltr: 'glide--ltr', rtl: 'glide--rtl' },
      type: { slider: 'glide--slider', carousel: 'glide--carousel' },
      slide: { clone: 'glide__slide--clone', active: 'glide__slide--active' },
      arrow: { disabled: 'glide__arrow--disabled' },
      nav: { active: 'glide__bullet--active' },
    },
  };
  function Pi(o) {
    console.error('[Glide warn]: '.concat(o));
  }
  function mt(o) {
    return parseInt(o);
  }
  function pp(o) {
    return parseFloat(o);
  }
  function ua(o) {
    return typeof o == 'string';
  }
  function bn(o) {
    var e = ps(o);
    return e === 'function' || (e === 'object' && !!o);
  }
  function ms(o) {
    return typeof o == 'function';
  }
  function xc(o) {
    return typeof o == 'undefined';
  }
  function aa(o) {
    return o.constructor === Array;
  }
  function _p(o, e, i) {
    var t = {};
    for (var r in e)
      ms(e[r]) ? (t[r] = e[r](o, t, i)) : Pi('Extension must be a function');
    for (var n in t) ms(t[n].mount) && t[n].mount();
    return t;
  }
  function He(o, e, i) {
    Object.defineProperty(o, e, i);
  }
  function gp(o) {
    return Object.keys(o)
      .sort()
      .reduce(function (e, i) {
        return (e[i] = o[i]), e[i], e;
      }, {});
  }
  function la(o, e) {
    var i = Object.assign({}, o, e);
    return (
      e.hasOwnProperty('classes') &&
        ((i.classes = Object.assign({}, o.classes, e.classes)),
        e.classes.hasOwnProperty('direction') &&
          (i.classes.direction = Object.assign(
            {},
            o.classes.direction,
            e.classes.direction
          )),
        e.classes.hasOwnProperty('type') &&
          (i.classes.type = Object.assign({}, o.classes.type, e.classes.type)),
        e.classes.hasOwnProperty('slide') &&
          (i.classes.slide = Object.assign(
            {},
            o.classes.slide,
            e.classes.slide
          )),
        e.classes.hasOwnProperty('arrow') &&
          (i.classes.arrow = Object.assign(
            {},
            o.classes.arrow,
            e.classes.arrow
          )),
        e.classes.hasOwnProperty('nav') &&
          (i.classes.nav = Object.assign({}, o.classes.nav, e.classes.nav))),
      e.hasOwnProperty('breakpoints') &&
        (i.breakpoints = Object.assign({}, o.breakpoints, e.breakpoints)),
      i
    );
  }
  var Dp = (function () {
      function o() {
        var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _s(this, o), (this.events = e), (this.hop = e.hasOwnProperty);
      }
      return (
        gs(o, [
          {
            key: 'on',
            value: function (i, t) {
              if (aa(i)) {
                for (var r = 0; r < i.length; r++) this.on(i[r], t);
                return;
              }
              this.hop.call(this.events, i) || (this.events[i] = []);
              var n = this.events[i].push(t) - 1;
              return {
                remove: function () {
                  delete this.events[i][n];
                },
              };
            },
          },
          {
            key: 'emit',
            value: function (i, t) {
              if (aa(i)) {
                for (var r = 0; r < i.length; r++) this.emit(i[r], t);
                return;
              }
              !this.hop.call(this.events, i) ||
                this.events[i].forEach(function (n) {
                  n(t || {});
                });
            },
          },
        ]),
        o
      );
    })(),
    mp = (function () {
      function o(e) {
        var i =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _s(this, o),
          (this._c = {}),
          (this._t = []),
          (this._e = new Dp()),
          (this.disabled = !1),
          (this.selector = e),
          (this.settings = la(hp, i)),
          (this.index = this.settings.startAt);
      }
      return (
        gs(o, [
          {
            key: 'mount',
            value: function () {
              var i =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {};
              return (
                this._e.emit('mount.before'),
                bn(i)
                  ? (this._c = _p(this, i, this._e))
                  : Pi('You need to provide a object on `mount()`'),
                this._e.emit('mount.after'),
                this
              );
            },
          },
          {
            key: 'mutate',
            value: function () {
              var i =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : [];
              return (
                aa(i)
                  ? (this._t = i)
                  : Pi('You need to provide a array on `mutate()`'),
                this
              );
            },
          },
          {
            key: 'update',
            value: function () {
              var i =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {};
              return (
                (this.settings = la(this.settings, i)),
                i.hasOwnProperty('startAt') && (this.index = i.startAt),
                this._e.emit('update'),
                this
              );
            },
          },
          {
            key: 'go',
            value: function (i) {
              return this._c.Run.make(i), this;
            },
          },
          {
            key: 'move',
            value: function (i) {
              return this._c.Transition.disable(), this._c.Move.make(i), this;
            },
          },
          {
            key: 'destroy',
            value: function () {
              return this._e.emit('destroy'), this;
            },
          },
          {
            key: 'play',
            value: function () {
              var i =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : !1;
              return (
                i && (this.settings.autoplay = i), this._e.emit('play'), this
              );
            },
          },
          {
            key: 'pause',
            value: function () {
              return this._e.emit('pause'), this;
            },
          },
          {
            key: 'disable',
            value: function () {
              return (this.disabled = !0), this;
            },
          },
          {
            key: 'enable',
            value: function () {
              return (this.disabled = !1), this;
            },
          },
          {
            key: 'on',
            value: function (i, t) {
              return this._e.on(i, t), this;
            },
          },
          {
            key: 'isType',
            value: function (i) {
              return this.settings.type === i;
            },
          },
          {
            key: 'settings',
            get: function () {
              return this._o;
            },
            set: function (i) {
              bn(i)
                ? (this._o = i)
                : Pi('Options must be an `object` instance.');
            },
          },
          {
            key: 'index',
            get: function () {
              return this._i;
            },
            set: function (i) {
              this._i = mt(i);
            },
          },
          {
            key: 'type',
            get: function () {
              return this.settings.type;
            },
          },
          {
            key: 'disabled',
            get: function () {
              return this._d;
            },
            set: function (i) {
              this._d = !!i;
            },
          },
        ]),
        o
      );
    })();
  function yp(o, e, i) {
    var t = {
      mount: function () {
        this._o = !1;
      },
      make: function (f) {
        var c = this;
        o.disabled ||
          (!o.settings.waitForTransition || o.disable(),
          (this.move = f),
          i.emit('run.before', this.move),
          this.calculate(),
          i.emit('run', this.move),
          e.Transition.after(function () {
            c.isStart() && i.emit('run.start', c.move),
              c.isEnd() && i.emit('run.end', c.move),
              c.isOffset() && ((c._o = !1), i.emit('run.offset', c.move)),
              i.emit('run.after', c.move),
              o.enable();
          }));
      },
      calculate: function () {
        var f = this.move,
          c = this.length,
          h = f.steps,
          d = f.direction,
          l = 1;
        if (d === '=') {
          if (o.settings.bound && mt(h) > c) {
            o.index = c;
            return;
          }
          o.index = h;
          return;
        }
        if (d === '>' && h === '>') {
          o.index = c;
          return;
        }
        if (d === '<' && h === '<') {
          o.index = 0;
          return;
        }
        if (
          (d === '|' && (l = o.settings.perView || 1),
          d === '>' || (d === '|' && h === '>'))
        ) {
          var _ = r(l);
          _ > c && (this._o = !0), (o.index = n(_, l));
          return;
        }
        if (d === '<' || (d === '|' && h === '<')) {
          var p = s(l);
          p < 0 && (this._o = !0), (o.index = u(p, l));
          return;
        }
        Pi(
          'Invalid direction pattern ['.concat(d).concat(h, '] has been used')
        );
      },
      isStart: function () {
        return o.index <= 0;
      },
      isEnd: function () {
        return o.index >= this.length;
      },
      isOffset: function () {
        var f =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : void 0;
        return f
          ? this._o
            ? f === '|>'
              ? this.move.direction === '|' && this.move.steps === '>'
              : f === '|<'
              ? this.move.direction === '|' && this.move.steps === '<'
              : this.move.direction === f
            : !1
          : this._o;
      },
      isBound: function () {
        return (
          o.isType('slider') &&
          o.settings.focusAt !== 'center' &&
          o.settings.bound
        );
      },
    };
    function r(a) {
      var f = o.index;
      return o.isType('carousel') ? f + a : f + (a - (f % a));
    }
    function n(a, f) {
      var c = t.length;
      return a <= c
        ? a
        : o.isType('carousel')
        ? a - (c + 1)
        : o.settings.rewind
        ? t.isBound() && !t.isEnd()
          ? c
          : 0
        : t.isBound()
        ? c
        : Math.floor(c / f) * f;
    }
    function s(a) {
      var f = o.index;
      if (o.isType('carousel')) return f - a;
      var c = Math.ceil(f / a);
      return (c - 1) * a;
    }
    function u(a, f) {
      var c = t.length;
      return a >= 0
        ? a
        : o.isType('carousel')
        ? a + (c + 1)
        : o.settings.rewind
        ? t.isBound() && t.isStart()
          ? c
          : Math.floor(c / f) * f
        : 0;
    }
    return (
      He(t, 'move', {
        get: function () {
          return this._m;
        },
        set: function (f) {
          var c = f.substr(1);
          this._m = {
            direction: f.substr(0, 1),
            steps: c ? (mt(c) ? mt(c) : c) : 0,
          };
        },
      }),
      He(t, 'length', {
        get: function () {
          var f = o.settings,
            c = e.Html.slides.length;
          return this.isBound()
            ? c - 1 - (mt(f.perView) - 1) + mt(f.focusAt)
            : c - 1;
        },
      }),
      He(t, 'offset', {
        get: function () {
          return this._o;
        },
      }),
      t
    );
  }
  function wc() {
    return new Date().getTime();
  }
  function ys(o, e, i) {
    var t,
      r,
      n,
      s,
      u = 0;
    i || (i = {});
    var a = function () {
        (u = i.leading === !1 ? 0 : wc()),
          (t = null),
          (s = o.apply(r, n)),
          t || (r = n = null);
      },
      f = function () {
        var h = wc();
        !u && i.leading === !1 && (u = h);
        var d = e - (h - u);
        return (
          (r = this),
          (n = arguments),
          d <= 0 || d > e
            ? (t && (clearTimeout(t), (t = null)),
              (u = h),
              (s = o.apply(r, n)),
              t || (r = n = null))
            : !t && i.trailing !== !1 && (t = setTimeout(a, d)),
          s
        );
      };
    return (
      (f.cancel = function () {
        clearTimeout(t), (u = 0), (t = r = n = null);
      }),
      f
    );
  }
  var vs = {
    ltr: ['marginLeft', 'marginRight'],
    rtl: ['marginRight', 'marginLeft'],
  };
  function vp(o, e, i) {
    var t = {
      apply: function (n) {
        for (var s = 0, u = n.length; s < u; s++) {
          var a = n[s].style,
            f = e.Direction.value;
          s !== 0
            ? (a[vs[f][0]] = ''.concat(this.value / 2, 'px'))
            : (a[vs[f][0]] = ''),
            s !== n.length - 1
              ? (a[vs[f][1]] = ''.concat(this.value / 2, 'px'))
              : (a[vs[f][1]] = '');
        }
      },
      remove: function (n) {
        for (var s = 0, u = n.length; s < u; s++) {
          var a = n[s].style;
          (a.marginLeft = ''), (a.marginRight = '');
        }
      },
    };
    return (
      He(t, 'value', {
        get: function () {
          return mt(o.settings.gap);
        },
      }),
      He(t, 'grow', {
        get: function () {
          return t.value * e.Sizes.length;
        },
      }),
      He(t, 'reductor', {
        get: function () {
          var n = o.settings.perView;
          return (t.value * (n - 1)) / n;
        },
      }),
      i.on(
        ['build.after', 'update'],
        ys(function () {
          t.apply(e.Html.wrapper.children);
        }, 30)
      ),
      i.on('destroy', function () {
        t.remove(e.Html.wrapper.children);
      }),
      t
    );
  }
  function bc(o) {
    if (o && o.parentNode) {
      for (var e = o.parentNode.firstChild, i = []; e; e = e.nextSibling)
        e.nodeType === 1 && e !== o && i.push(e);
      return i;
    }
    return [];
  }
  function Cc(o) {
    return !!(o && o instanceof window.HTMLElement);
  }
  function fa(o) {
    return Array.prototype.slice.call(o);
  }
  var Tc = '[data-glide-el="track"]';
  function xp(o, e, i) {
    var t = {
      mount: function () {
        (this.root = o.selector),
          (this.track = this.root.querySelector(Tc)),
          this.collectSlides();
      },
      collectSlides: function () {
        this.slides = fa(this.wrapper.children).filter(function (n) {
          return !n.classList.contains(o.settings.classes.slide.clone);
        });
      },
    };
    return (
      He(t, 'root', {
        get: function () {
          return t._r;
        },
        set: function (n) {
          ua(n) && (n = document.querySelector(n)),
            Cc(n)
              ? (t._r = n)
              : Pi('Root element must be a existing Html node');
        },
      }),
      He(t, 'track', {
        get: function () {
          return t._t;
        },
        set: function (n) {
          Cc(n)
            ? (t._t = n)
            : Pi(
                'Could not find track element. Please use '.concat(
                  Tc,
                  ' attribute.'
                )
              );
        },
      }),
      He(t, 'wrapper', {
        get: function () {
          return t.track.children[0];
        },
      }),
      i.on('update', function () {
        t.collectSlides();
      }),
      t
    );
  }
  function wp(o, e, i) {
    var t = {
      mount: function () {
        this.value = o.settings.peek;
      },
    };
    return (
      He(t, 'value', {
        get: function () {
          return t._v;
        },
        set: function (n) {
          bn(n)
            ? ((n.before = mt(n.before)), (n.after = mt(n.after)))
            : (n = mt(n)),
            (t._v = n);
        },
      }),
      He(t, 'reductor', {
        get: function () {
          var n = t.value,
            s = o.settings.perView;
          return bn(n) ? n.before / s + n.after / s : (n * 2) / s;
        },
      }),
      i.on(['resize', 'update'], function () {
        t.mount();
      }),
      t
    );
  }
  function bp(o, e, i) {
    var t = {
      mount: function () {
        this._o = 0;
      },
      make: function () {
        var n = this,
          s =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        (this.offset = s),
          i.emit('move', { movement: this.value }),
          e.Transition.after(function () {
            i.emit('move.after', { movement: n.value });
          });
      },
    };
    return (
      He(t, 'offset', {
        get: function () {
          return t._o;
        },
        set: function (n) {
          t._o = xc(n) ? 0 : mt(n);
        },
      }),
      He(t, 'translate', {
        get: function () {
          return e.Sizes.slideWidth * o.index;
        },
      }),
      He(t, 'value', {
        get: function () {
          var n = this.offset,
            s = this.translate;
          return e.Direction.is('rtl') ? s + n : s - n;
        },
      }),
      i.on(['build.before', 'run'], function () {
        t.make();
      }),
      t
    );
  }
  function Cp(o, e, i) {
    var t = {
      setupSlides: function () {
        for (
          var n = ''.concat(this.slideWidth, 'px'), s = e.Html.slides, u = 0;
          u < s.length;
          u++
        )
          s[u].style.width = n;
      },
      setupWrapper: function () {
        e.Html.wrapper.style.width = ''.concat(this.wrapperSize, 'px');
      },
      remove: function () {
        for (var n = e.Html.slides, s = 0; s < n.length; s++)
          n[s].style.width = '';
        e.Html.wrapper.style.width = '';
      },
    };
    return (
      He(t, 'length', {
        get: function () {
          return e.Html.slides.length;
        },
      }),
      He(t, 'width', {
        get: function () {
          return e.Html.track.offsetWidth;
        },
      }),
      He(t, 'wrapperSize', {
        get: function () {
          return t.slideWidth * t.length + e.Gaps.grow + e.Clones.grow;
        },
      }),
      He(t, 'slideWidth', {
        get: function () {
          return (
            t.width / o.settings.perView - e.Peek.reductor - e.Gaps.reductor
          );
        },
      }),
      i.on(['build.before', 'resize', 'update'], function () {
        t.setupSlides(), t.setupWrapper();
      }),
      i.on('destroy', function () {
        t.remove();
      }),
      t
    );
  }
  function Tp(o, e, i) {
    var t = {
      mount: function () {
        i.emit('build.before'),
          this.typeClass(),
          this.activeClass(),
          i.emit('build.after');
      },
      typeClass: function () {
        e.Html.root.classList.add(o.settings.classes.type[o.settings.type]);
      },
      activeClass: function () {
        var n = o.settings.classes,
          s = e.Html.slides[o.index];
        s &&
          (s.classList.add(n.slide.active),
          bc(s).forEach(function (u) {
            u.classList.remove(n.slide.active);
          }));
      },
      removeClasses: function () {
        var n = o.settings.classes,
          s = n.type,
          u = n.slide;
        e.Html.root.classList.remove(s[o.settings.type]),
          e.Html.slides.forEach(function (a) {
            a.classList.remove(u.active);
          });
      },
    };
    return (
      i.on(['destroy', 'update'], function () {
        t.removeClasses();
      }),
      i.on(['resize', 'update'], function () {
        t.mount();
      }),
      i.on('move.after', function () {
        t.activeClass();
      }),
      t
    );
  }
  function Sp(o, e, i) {
    var t = {
      mount: function () {
        (this.items = []),
          o.isType('carousel') && (this.items = this.collect());
      },
      collect: function () {
        var n =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
          s = e.Html.slides,
          u = o.settings,
          a = u.perView,
          f = u.classes,
          c = u.cloningRatio;
        if (s.length !== 0)
          for (
            var h = +!!o.settings.peek,
              d = a + h + Math.round(a / 2),
              l = s.slice(0, d).reverse(),
              _ = s.slice(d * -1),
              p = 0;
            p < Math.max(c, Math.floor(a / s.length));
            p++
          ) {
            for (var D = 0; D < l.length; D++) {
              var y = l[D].cloneNode(!0);
              y.classList.add(f.slide.clone), n.push(y);
            }
            for (var T = 0; T < _.length; T++) {
              var v = _[T].cloneNode(!0);
              v.classList.add(f.slide.clone), n.unshift(v);
            }
          }
        return n;
      },
      append: function () {
        for (
          var n = this.items,
            s = e.Html,
            u = s.wrapper,
            a = s.slides,
            f = Math.floor(n.length / 2),
            c = n.slice(0, f).reverse(),
            h = n.slice(f * -1).reverse(),
            d = ''.concat(e.Sizes.slideWidth, 'px'),
            l = 0;
          l < h.length;
          l++
        )
          u.appendChild(h[l]);
        for (var _ = 0; _ < c.length; _++) u.insertBefore(c[_], a[0]);
        for (var p = 0; p < n.length; p++) n[p].style.width = d;
      },
      remove: function () {
        for (var n = this.items, s = 0; s < n.length; s++)
          e.Html.wrapper.removeChild(n[s]);
      },
    };
    return (
      He(t, 'grow', {
        get: function () {
          return (e.Sizes.slideWidth + e.Gaps.value) * t.items.length;
        },
      }),
      i.on('update', function () {
        t.remove(), t.mount(), t.append();
      }),
      i.on('build.before', function () {
        o.isType('carousel') && t.append();
      }),
      i.on('destroy', function () {
        t.remove();
      }),
      t
    );
  }
  var lr = (function () {
    function o() {
      var e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _s(this, o), (this.listeners = e);
    }
    return (
      gs(o, [
        {
          key: 'on',
          value: function (i, t, r) {
            var n =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : !1;
            ua(i) && (i = [i]);
            for (var s = 0; s < i.length; s++)
              (this.listeners[i[s]] = r),
                t.addEventListener(i[s], this.listeners[i[s]], n);
          },
        },
        {
          key: 'off',
          value: function (i, t) {
            var r =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !1;
            ua(i) && (i = [i]);
            for (var n = 0; n < i.length; n++)
              t.removeEventListener(i[n], this.listeners[i[n]], r);
          },
        },
        {
          key: 'destroy',
          value: function () {
            delete this.listeners;
          },
        },
      ]),
      o
    );
  })();
  function Ep(o, e, i) {
    var t = new lr(),
      r = {
        mount: function () {
          this.bind();
        },
        bind: function () {
          t.on(
            'resize',
            window,
            ys(function () {
              i.emit('resize');
            }, o.settings.throttle)
          );
        },
        unbind: function () {
          t.off('resize', window);
        },
      };
    return (
      i.on('destroy', function () {
        r.unbind(), t.destroy();
      }),
      r
    );
  }
  var Fp = ['ltr', 'rtl'],
    kp = { '>': '<', '<': '>', '=': '=' };
  function Pp(o, e, i) {
    var t = {
      mount: function () {
        this.value = o.settings.direction;
      },
      resolve: function (n) {
        var s = n.slice(0, 1);
        return this.is('rtl') ? n.split(s).join(kp[s]) : n;
      },
      is: function (n) {
        return this.value === n;
      },
      addClass: function () {
        e.Html.root.classList.add(o.settings.classes.direction[this.value]);
      },
      removeClass: function () {
        e.Html.root.classList.remove(o.settings.classes.direction[this.value]);
      },
    };
    return (
      He(t, 'value', {
        get: function () {
          return t._v;
        },
        set: function (n) {
          Fp.indexOf(n) > -1
            ? (t._v = n)
            : Pi('Direction value must be `ltr` or `rtl`');
        },
      }),
      i.on(['destroy', 'update'], function () {
        t.removeClass();
      }),
      i.on('update', function () {
        t.mount();
      }),
      i.on(['build.before', 'update'], function () {
        t.addClass();
      }),
      t
    );
  }
  function Ap(o, e) {
    return {
      modify: function (t) {
        return e.Direction.is('rtl') ? -t : t;
      },
    };
  }
  function Mp(o, e) {
    return {
      modify: function (t) {
        var r = Math.floor(t / e.Sizes.slideWidth);
        return t + e.Gaps.value * r;
      },
    };
  }
  function Op(o, e) {
    return {
      modify: function (t) {
        return t + e.Clones.grow / 2;
      },
    };
  }
  function Rp(o, e) {
    return {
      modify: function (t) {
        if (o.settings.focusAt >= 0) {
          var r = e.Peek.value;
          return bn(r) ? t - r.before : t - r;
        }
        return t;
      },
    };
  }
  function Bp(o, e) {
    return {
      modify: function (t) {
        var r = e.Gaps.value,
          n = e.Sizes.width,
          s = o.settings.focusAt,
          u = e.Sizes.slideWidth;
        return s === 'center' ? t - (n / 2 - u / 2) : t - u * s - r * s;
      },
    };
  }
  function Lp(o, e, i) {
    var t = [Mp, Op, Rp, Bp].concat(o._t, [Ap]);
    return {
      mutate: function (n) {
        for (var s = 0; s < t.length; s++) {
          var u = t[s];
          ms(u) && ms(u().modify)
            ? (n = u(o, e, i).modify(n))
            : Pi(
                'Transformer should be a function that returns an object with `modify()` method'
              );
        }
        return n;
      },
    };
  }
  function Np(o, e, i) {
    var t = {
      set: function (n) {
        var s = Lp(o, e).mutate(n),
          u = 'translate3d('.concat(-1 * s, 'px, 0px, 0px)');
        (e.Html.wrapper.style.mozTransform = u),
          (e.Html.wrapper.style.webkitTransform = u),
          (e.Html.wrapper.style.transform = u);
      },
      remove: function () {
        e.Html.wrapper.style.transform = '';
      },
      getStartIndex: function () {
        var n = e.Sizes.length,
          s = o.index,
          u = o.settings.perView;
        return e.Run.isOffset('>') || e.Run.isOffset('|>')
          ? n + (s - u)
          : (s + u) % n;
      },
      getTravelDistance: function () {
        var n = e.Sizes.slideWidth * o.settings.perView;
        return e.Run.isOffset('>') || e.Run.isOffset('|>') ? n * -1 : n;
      },
    };
    return (
      i.on('move', function (r) {
        if (!o.isType('carousel') || !e.Run.isOffset())
          return t.set(r.movement);
        e.Transition.after(function () {
          i.emit('translate.jump'), t.set(e.Sizes.slideWidth * o.index);
        });
        var n = e.Sizes.slideWidth * e.Translate.getStartIndex();
        return t.set(n - e.Translate.getTravelDistance());
      }),
      i.on('destroy', function () {
        t.remove();
      }),
      t
    );
  }
  function Ip(o, e, i) {
    var t = !1,
      r = {
        compose: function (s) {
          var u = o.settings;
          return t
            ? ''.concat(s, ' 0ms ').concat(u.animationTimingFunc)
            : ''
                .concat(s, ' ')
                .concat(this.duration, 'ms ')
                .concat(u.animationTimingFunc);
        },
        set: function () {
          var s =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : 'transform';
          e.Html.wrapper.style.transition = this.compose(s);
        },
        remove: function () {
          e.Html.wrapper.style.transition = '';
        },
        after: function (s) {
          setTimeout(function () {
            s();
          }, this.duration);
        },
        enable: function () {
          (t = !1), this.set();
        },
        disable: function () {
          (t = !0), this.set();
        },
      };
    return (
      He(r, 'duration', {
        get: function () {
          var s = o.settings;
          return o.isType('slider') && e.Run.offset
            ? s.rewindDuration
            : s.animationDuration;
        },
      }),
      i.on('move', function () {
        r.set();
      }),
      i.on(['build.before', 'resize', 'translate.jump'], function () {
        r.disable();
      }),
      i.on('run', function () {
        r.enable();
      }),
      i.on('destroy', function () {
        r.remove();
      }),
      r
    );
  }
  var Sc = !1;
  try {
    var Ec = Object.defineProperty({}, 'passive', {
      get: function () {
        Sc = !0;
      },
    });
    window.addEventListener('testPassive', null, Ec),
      window.removeEventListener('testPassive', null, Ec);
  } catch {}
  var ca = Sc,
    xs = ['touchstart', 'mousedown'],
    Fc = ['touchmove', 'mousemove'],
    kc = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'],
    Pc = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
  function $p(o, e, i) {
    var t = new lr(),
      r = 0,
      n = 0,
      s = 0,
      u = !1,
      a = ca ? { passive: !0 } : !1,
      f = {
        mount: function () {
          this.bindSwipeStart();
        },
        start: function (h) {
          if (!u && !o.disabled) {
            this.disable();
            var d = this.touches(h);
            (r = null),
              (n = mt(d.pageX)),
              (s = mt(d.pageY)),
              this.bindSwipeMove(),
              this.bindSwipeEnd(),
              i.emit('swipe.start');
          }
        },
        move: function (h) {
          if (!o.disabled) {
            var d = o.settings,
              l = d.touchAngle,
              _ = d.touchRatio,
              p = d.classes,
              D = this.touches(h),
              y = mt(D.pageX) - n,
              T = mt(D.pageY) - s,
              v = Math.abs(y << 2),
              b = Math.abs(T << 2),
              C = Math.sqrt(v + b),
              M = Math.sqrt(b);
            if (((r = Math.asin(M / C)), (r * 180) / Math.PI < l))
              h.stopPropagation(),
                e.Move.make(y * pp(_)),
                e.Html.root.classList.add(p.dragging),
                i.emit('swipe.move');
            else return !1;
          }
        },
        end: function (h) {
          if (!o.disabled) {
            var d = o.settings,
              l = d.perSwipe,
              _ = d.touchAngle,
              p = d.classes,
              D = this.touches(h),
              y = this.threshold(h),
              T = D.pageX - n,
              v = (r * 180) / Math.PI;
            this.enable(),
              T > y && v < _
                ? e.Run.make(e.Direction.resolve(''.concat(l, '<')))
                : T < -y && v < _
                ? e.Run.make(e.Direction.resolve(''.concat(l, '>')))
                : e.Move.make(),
              e.Html.root.classList.remove(p.dragging),
              this.unbindSwipeMove(),
              this.unbindSwipeEnd(),
              i.emit('swipe.end');
          }
        },
        bindSwipeStart: function () {
          var h = this,
            d = o.settings,
            l = d.swipeThreshold,
            _ = d.dragThreshold;
          l &&
            t.on(
              xs[0],
              e.Html.wrapper,
              function (p) {
                h.start(p);
              },
              a
            ),
            _ &&
              t.on(
                xs[1],
                e.Html.wrapper,
                function (p) {
                  h.start(p);
                },
                a
              );
        },
        unbindSwipeStart: function () {
          t.off(xs[0], e.Html.wrapper, a), t.off(xs[1], e.Html.wrapper, a);
        },
        bindSwipeMove: function () {
          var h = this;
          t.on(
            Fc,
            e.Html.wrapper,
            ys(function (d) {
              h.move(d);
            }, o.settings.throttle),
            a
          );
        },
        unbindSwipeMove: function () {
          t.off(Fc, e.Html.wrapper, a);
        },
        bindSwipeEnd: function () {
          var h = this;
          t.on(kc, e.Html.wrapper, function (d) {
            h.end(d);
          });
        },
        unbindSwipeEnd: function () {
          t.off(kc, e.Html.wrapper);
        },
        touches: function (h) {
          return Pc.indexOf(h.type) > -1
            ? h
            : h.touches[0] || h.changedTouches[0];
        },
        threshold: function (h) {
          var d = o.settings;
          return Pc.indexOf(h.type) > -1 ? d.dragThreshold : d.swipeThreshold;
        },
        enable: function () {
          return (u = !1), e.Transition.enable(), this;
        },
        disable: function () {
          return (u = !0), e.Transition.disable(), this;
        },
      };
    return (
      i.on('build.after', function () {
        e.Html.root.classList.add(o.settings.classes.swipeable);
      }),
      i.on('destroy', function () {
        f.unbindSwipeStart(),
          f.unbindSwipeMove(),
          f.unbindSwipeEnd(),
          t.destroy();
      }),
      f
    );
  }
  function zp(o, e, i) {
    var t = new lr(),
      r = {
        mount: function () {
          this.bind();
        },
        bind: function () {
          t.on('dragstart', e.Html.wrapper, this.dragstart);
        },
        unbind: function () {
          t.off('dragstart', e.Html.wrapper);
        },
        dragstart: function (s) {
          s.preventDefault();
        },
      };
    return (
      i.on('destroy', function () {
        r.unbind(), t.destroy();
      }),
      r
    );
  }
  function Yp(o, e, i) {
    var t = new lr(),
      r = !1,
      n = !1,
      s = {
        mount: function () {
          (this._a = e.Html.wrapper.querySelectorAll('a')), this.bind();
        },
        bind: function () {
          t.on('click', e.Html.wrapper, this.click);
        },
        unbind: function () {
          t.off('click', e.Html.wrapper);
        },
        click: function (a) {
          n && (a.stopPropagation(), a.preventDefault());
        },
        detach: function () {
          if (((n = !0), !r)) {
            for (var a = 0; a < this.items.length; a++)
              this.items[a].draggable = !1;
            r = !0;
          }
          return this;
        },
        attach: function () {
          if (((n = !1), r)) {
            for (var a = 0; a < this.items.length; a++)
              this.items[a].draggable = !0;
            r = !1;
          }
          return this;
        },
      };
    return (
      He(s, 'items', {
        get: function () {
          return s._a;
        },
      }),
      i.on('swipe.move', function () {
        s.detach();
      }),
      i.on('swipe.end', function () {
        e.Transition.after(function () {
          s.attach();
        });
      }),
      i.on('destroy', function () {
        s.attach(), s.unbind(), t.destroy();
      }),
      s
    );
  }
  var Hp = '[data-glide-el="controls[nav]"]',
    da = '[data-glide-el^="controls"]',
    Xp = ''.concat(da, ' [data-glide-dir*="<"]'),
    Vp = ''.concat(da, ' [data-glide-dir*=">"]');
  function Wp(o, e, i) {
    var t = new lr(),
      r = ca ? { passive: !0 } : !1,
      n = {
        mount: function () {
          (this._n = e.Html.root.querySelectorAll(Hp)),
            (this._c = e.Html.root.querySelectorAll(da)),
            (this._arrowControls = {
              previous: e.Html.root.querySelectorAll(Xp),
              next: e.Html.root.querySelectorAll(Vp),
            }),
            this.addBindings();
        },
        setActive: function () {
          for (var u = 0; u < this._n.length; u++)
            this.addClass(this._n[u].children);
        },
        removeActive: function () {
          for (var u = 0; u < this._n.length; u++)
            this.removeClass(this._n[u].children);
        },
        addClass: function (u) {
          var a = o.settings,
            f = u[o.index];
          !f ||
            (f &&
              (f.classList.add(a.classes.nav.active),
              bc(f).forEach(function (c) {
                c.classList.remove(a.classes.nav.active);
              })));
        },
        removeClass: function (u) {
          var a = u[o.index];
          a && a.classList.remove(o.settings.classes.nav.active);
        },
        setArrowState: function () {
          if (!o.settings.rewind) {
            var u = n._arrowControls.next,
              a = n._arrowControls.previous;
            this.resetArrowState(u, a),
              o.index === 0 && this.disableArrow(a),
              o.index === e.Run.length && this.disableArrow(u);
          }
        },
        resetArrowState: function () {
          for (
            var u = o.settings, a = arguments.length, f = new Array(a), c = 0;
            c < a;
            c++
          )
            f[c] = arguments[c];
          f.forEach(function (h) {
            fa(h).forEach(function (d) {
              d.classList.remove(u.classes.arrow.disabled);
            });
          });
        },
        disableArrow: function () {
          for (
            var u = o.settings, a = arguments.length, f = new Array(a), c = 0;
            c < a;
            c++
          )
            f[c] = arguments[c];
          f.forEach(function (h) {
            fa(h).forEach(function (d) {
              d.classList.add(u.classes.arrow.disabled);
            });
          });
        },
        addBindings: function () {
          for (var u = 0; u < this._c.length; u++)
            this.bind(this._c[u].children);
        },
        removeBindings: function () {
          for (var u = 0; u < this._c.length; u++)
            this.unbind(this._c[u].children);
        },
        bind: function (u) {
          for (var a = 0; a < u.length; a++)
            t.on('click', u[a], this.click),
              t.on('touchstart', u[a], this.click, r);
        },
        unbind: function (u) {
          for (var a = 0; a < u.length; a++)
            t.off(['click', 'touchstart'], u[a]);
        },
        click: function (u) {
          !ca && u.type === 'touchstart' && u.preventDefault();
          var a = u.currentTarget.getAttribute('data-glide-dir');
          e.Run.make(e.Direction.resolve(a));
        },
      };
    return (
      He(n, 'items', {
        get: function () {
          return n._c;
        },
      }),
      i.on(['mount.after', 'move.after'], function () {
        n.setActive();
      }),
      i.on(['mount.after', 'run'], function () {
        n.setArrowState();
      }),
      i.on('destroy', function () {
        n.removeBindings(), n.removeActive(), t.destroy();
      }),
      n
    );
  }
  function qp(o, e, i) {
    var t = new lr(),
      r = {
        mount: function () {
          o.settings.keyboard && this.bind();
        },
        bind: function () {
          t.on('keyup', document, this.press);
        },
        unbind: function () {
          t.off('keyup', document);
        },
        press: function (s) {
          var u = o.settings.perSwipe;
          s.code === 'ArrowRight' &&
            e.Run.make(e.Direction.resolve(''.concat(u, '>'))),
            s.code === 'ArrowLeft' &&
              e.Run.make(e.Direction.resolve(''.concat(u, '<')));
        },
      };
    return (
      i.on(['destroy', 'update'], function () {
        r.unbind();
      }),
      i.on('update', function () {
        r.mount();
      }),
      i.on('destroy', function () {
        t.destroy();
      }),
      r
    );
  }
  function Up(o, e, i) {
    var t = new lr(),
      r = {
        mount: function () {
          this.enable(), this.start(), o.settings.hoverpause && this.bind();
        },
        enable: function () {
          this._e = !0;
        },
        disable: function () {
          this._e = !1;
        },
        start: function () {
          var s = this;
          !this._e ||
            (this.enable(),
            o.settings.autoplay &&
              xc(this._i) &&
              (this._i = setInterval(function () {
                s.stop(), e.Run.make('>'), s.start(), i.emit('autoplay');
              }, this.time)));
        },
        stop: function () {
          this._i = clearInterval(this._i);
        },
        bind: function () {
          var s = this;
          t.on('mouseover', e.Html.root, function () {
            s._e && s.stop();
          }),
            t.on('mouseout', e.Html.root, function () {
              s._e && s.start();
            });
        },
        unbind: function () {
          t.off(['mouseover', 'mouseout'], e.Html.root);
        },
      };
    return (
      He(r, 'time', {
        get: function () {
          var s = e.Html.slides[o.index].getAttribute('data-glide-autoplay');
          return mt(s || o.settings.autoplay);
        },
      }),
      i.on(['destroy', 'update'], function () {
        r.unbind();
      }),
      i.on(['run.before', 'swipe.start', 'update'], function () {
        r.stop();
      }),
      i.on(['pause', 'destroy'], function () {
        r.disable(), r.stop();
      }),
      i.on(['run.after', 'swipe.end'], function () {
        r.start();
      }),
      i.on(['play'], function () {
        r.enable(), r.start();
      }),
      i.on('update', function () {
        r.mount();
      }),
      i.on('destroy', function () {
        t.destroy();
      }),
      r
    );
  }
  function Ac(o) {
    return bn(o) ? gp(o) : (Pi('Breakpoints option must be an object'), {});
  }
  function jp(o, e, i) {
    var t = new lr(),
      r = o.settings,
      n = Ac(r.breakpoints),
      s = Object.assign({}, r),
      u = {
        match: function (f) {
          if (typeof window.matchMedia != 'undefined') {
            for (var c in f)
              if (
                f.hasOwnProperty(c) &&
                window.matchMedia('(max-width: '.concat(c, 'px)')).matches
              )
                return f[c];
          }
          return s;
        },
      };
    return (
      Object.assign(r, u.match(n)),
      t.on(
        'resize',
        window,
        ys(function () {
          o.settings = la(r, u.match(n));
        }, o.settings.throttle)
      ),
      i.on('update', function () {
        (n = Ac(n)), (s = Object.assign({}, r));
      }),
      i.on('destroy', function () {
        t.off('resize', window);
      }),
      u
    );
  }
  var Kp = {
      Html: xp,
      Translate: Np,
      Transition: Ip,
      Direction: Pp,
      Peek: wp,
      Sizes: Cp,
      Gaps: vp,
      Move: bp,
      Clones: Sp,
      Resize: Ep,
      Build: Tp,
      Run: yp,
      Swipe: $p,
      Images: zp,
      Anchors: Yp,
      Controls: Wp,
      Keyboard: qp,
      Autoplay: Up,
      Breakpoints: jp,
    },
    Gp = (function (o) {
      up(i, o);
      var e = cp(i);
      function i() {
        return _s(this, i), e.apply(this, arguments);
      }
      return (
        gs(i, [
          {
            key: 'mount',
            value: function () {
              var r =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {};
              return Ds(wn(i.prototype), 'mount', this).call(
                this,
                Object.assign({}, Kp, r)
              );
            },
          },
        ]),
        i
      );
    })(mp);
  const Mc = (o, e = 3, i = 0, t = 0, r = 0) => {
    new Gp(o, {
      type: 'carousel',
      startAt: i,
      perView: window.innerWidth < 600 ? 1 : e,
      gap: t,
      autoplay: r,
    }).mount();
  };
  Vt.registerPlugin(hs, de);
  const zr = (o, e) => {
      const i = document.querySelectorAll(o);
      new hs(i, { type: 'lines', linesClass: e }),
        Bc.default(`.${e}`).wrap('<div class="line-wrapper">'),
        Vt.set('.line-wrapper', { overflow: 'hidden' }),
        Vt.timeline({ scrollTrigger: { trigger: i, start: 'top 70%' } }).fromTo(
          `.${e}`,
          { yPercent: 102 },
          { yPercent: 0, duration: 1.5, ease: 'expo', stagger: 0.07 }
        );
    },
    Qp = document.querySelector('.donut__content__wrapper'),
    Zp = () => {
      let o = 0,
        e = 0;
      const i = Vt.timeline();
      Vt.set('.donut', { scale: 0 }),
        Qp.addEventListener('click', () => {
          (e = window.scrollY),
            i.fromTo(
              '.donut',
              { scale: 0, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: 'elastic',
                stagger: 0.2,
              }
            ),
            document.addEventListener('scroll', () => {
              (o = window.scrollY),
                o > e &&
                  i.to('.donut', {
                    yPercent: 300,
                    opacity: 0,
                    duration: 1,
                    ease: 'none',
                    onComplete: () => {
                      i.clear().restart().set('.donut', { yPercent: 0 });
                    },
                  });
            });
        });
    },
    Jp = () => {
      const o = Vt.timeline(),
        e = document.querySelector('.intro__heading');
      new hs(e, { type: 'chars', charsClass: 'intro__letter' }),
        o.to('.intro__letter', {
          y: -100,
          opacity: 0,
          duration: 1.5,
          ease: 'expo',
          stagger: 0.03,
        }),
        o.to('.intro', { opacity: 0, duration: 1, ease: 'ease' });
    },
    e_ = () => {
      document.querySelectorAll('.blog__info__para').forEach((e) => {
        const i = e.innerHTML.split(' ').splice(0, 60).join(' ');
        (e.innerHTML = ''), (e.innerHTML = i);
      });
    },
    t_ = () => {
      const o = document.querySelector('.blog__mobile__content__wrapper'),
        e = document.querySelector('.articles'),
        i = document.querySelector('.workshops'),
        t = document.querySelector('.archive'),
        r = document.querySelector('.main__btn'),
        n = document.querySelector('.workshops__wrapper.mobile'),
        s = document.querySelector('.archives__wrapper.mobile'),
        u = document.querySelector('.blogs__wrapper.mobile');
      s.classList.remove('active'), n.classList.remove('active');
      const a = u.getBoundingClientRect().height;
      (o.style.height = `${a}px`),
        i.addEventListener('click', () => {
          if (
            e.classList.contains('active') ||
            t.classList.contains('active')
          ) {
            n.classList.add('active'),
              s.classList.remove('active'),
              u.classList.remove('active');
            const f = n.getBoundingClientRect().height;
            (o.style.height = `${f}px`),
              (r.innerHTML = 'Workshops'),
              e.classList.add('inactive'),
              i.classList.add('active'),
              e.classList.add('inactive'),
              t.classList.add('inactive'),
              t.classList.remove('active'),
              e.classList.remove('active');
          }
        }),
        t.addEventListener('click', () => {
          if (
            e.classList.contains('active') ||
            i.classList.contains('active')
          ) {
            s.classList.add('active'),
              n.classList.remove('active'),
              u.classList.remove('active');
            const f = s.getBoundingClientRect().height;
            (o.style.height = `${f}px`),
              e.classList.add('inactive'),
              (r.innerHTML = 'Archive'),
              t.classList.add('active'),
              i.classList.add('inactive'),
              i.classList.remove('active'),
              e.classList.add('inactive'),
              e.classList.remove('active');
          }
        }),
        e.addEventListener('click', () => {
          if (
            t.classList.contains('active') ||
            i.classList.contains('active')
          ) {
            s.classList.remove('active'),
              n.classList.remove('active'),
              u.classList.add('active');
            const f = u.getBoundingClientRect().height;
            (o.style.height = `${f}px`),
              t.classList.add('inactive'),
              (r.innerHTML = 'Articles'),
              e.classList.add('active'),
              i.classList.add('inactive'),
              i.classList.remove('active'),
              t.classList.add('inactive'),
              t.classList.remove('active');
          }
        });
    };
  function i_() {
    function o() {
      const t = document.querySelector('.about__hero');
      let r = 0,
        n = 0;
      const s = document.createElement('style');
      (s.type = 'text/css'),
        t.addEventListener('mousemove', (a) => {
          (r = a.clientX), (n = a.clientY);
        });
      function u() {
        const a = document.createTextNode(`@keyframes sideWays { 
                0% { 
                            margin-left:0px;
                        }
                100% { 
                            margin-left:50px;
                        }
        }`);
        s.appendChild(a),
          document.getElementsByTagName('head')[0].appendChild(s);
      }
      t.addEventListener('click', () => {
        const a = document.createElement('img');
        a.classList.add('about__bubble__div'),
          (a.src =
            'https://uploads-ssl.webflow.com/63771c62eadb5c6192ec63f7/63b2e7272091f101c078d2b1_bubble.png'),
          t.appendChild(a),
          (a.style.position = 'absolute'),
          (a.style.left = `${r}px`),
          (a.style.top = `${n}px`);
        const f = Math.random() * 2 + 1;
        (a.style.scale = `${f}`),
          (a.style.animation =
            'sideWays 2s ease-in-out infinite alternate forwards'),
          Vt.fromTo(a, { top: n }, { top: -100, duration: 10 }),
          u();
      });
    }
    o();
    function e() {
      let t = 0,
        r = 0;
      const n = document.querySelector('.detail__interaction__div');
      n.addEventListener('mousemove', (s) => {
        const u = n.getBoundingClientRect();
        (t = s.clientX - u.left), (r = s.clientY - u.top);
      }),
        n.addEventListener('click', () => {
          const s = document.createElement('img');
          s.classList.add('sparkle__div'),
            (s.src =
              'https://uploads-ssl.webflow.com/63771c62eadb5c6192ec63f7/63bcff5e935e9bece29eb74a_glowing%20star.png'),
            n.appendChild(s),
            (s.style.position = 'absolute'),
            (s.style.left = `${t}px`),
            (s.style.top = `${r}px`),
            (s.style.width = '120px'),
            Vt.fromTo(s, { opacity: 1 }, { opacity: 0, duration: 1 });
        });
    }
    e();
    function i() {
      const t = document.querySelector('.mouse__section__time');
      t.innerText = '';
      let r = '';
      const n = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        s = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        u = new Date(),
        a = u.getHours(),
        f = u.getMinutes(),
        c = u.getDate(),
        h = s[u.getDay()],
        d = n[u.getMonth()],
        l = u.getFullYear();
      (r = `${a}.${f} ${h} ${c} ${d} ${l}`), (t.innerText = r);
      const _ = document.querySelector('.old__school__section');
      _.addEventListener('click', () => {
        document.querySelector('.young-mouse').classList.add('hidden'),
          _.classList.add('old'),
          (r = `${a}.${f} ${h} ${c} ${d} ${l - 500}`),
          (t.innerText = r);
      });
    }
    i();
  }
  const fr = window.location.href;
  (window.onload = Jp()),
    fr === 'https://www.pallavinopany.studio/about' && i_();
  const ha = () => {
      const o = new Date(),
        e = o.getHours(),
        i = o.getMinutes(),
        t = document.querySelector('.footer__text.time');
      t.innerHTML = `TIME = ${e}.${i}`;
    },
    Oc = window.innerWidth;
  if (
    (fr === 'https://www.pallavinopany.studio/blog' && (e_(), t_()),
    Oc > 600 && !fr.includes('contact') && sp(),
    fr === 'https://www.pallavinopany.studio/careers' &&
      zr('.careers__hero__heading', 'careers__hero__heading__lines'),
    fr.includes('portfolio') &&
      (zr('.project__detail__name', 'project__detail__letter'),
      zr('.service__text', 'service__heading'),
      zr('.project__description', 'project__description__lines'),
      ha()),
    fr === 'https://www.pallavinopany.studio/portfolio')
  ) {
    const o = document.createElement('div');
    o.classList.add('projects__page__heading__div'),
      (o.innerHTML = `
        <h1 class="projects__page__heading">I\u2019ve often been told that our work
    is layered. But the layers aren\u2019t ours. The layers are informed by you.</h1>
        `),
      document
        .querySelector('.projects__wrapper')
        .insertBefore(
          o,
          document.querySelector('.projects__wrapper').children[4]
        ),
      zr('.projects__page__heading', 'projec__lines'),
      ha();
  }
  if (fr === 'https://www.pallavinopany.studio/blog') {
    const o = document.querySelectorAll('.blog__info__link.main'),
      i = [...document.querySelectorAll('.blog__info__div.mobile')].reverse();
    console.log(i),
      o.forEach((t, r) => {
        const n = t.getAttribute('href');
        i[r].addEventListener('click', () => {
          window.location.href = `https://www.pallavinopany.studio${n}`;
        });
      });
  }
  fr === 'https://www.pallavinopany.studio' &&
    (Zp(),
    Oc > 600 && Mc('.featured__projects', 3, 0, 40, 4e3),
    Mc('.testimonials__slider'),
    op(),
    zr('.hero__main__heading', 'hero__heading'),
    zr('.testimonials__heading', 'testimonial__heading'),
    ha());
});

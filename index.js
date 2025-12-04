(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = a(o);
    fetch(o.href, i);
  }
})();
const Ps = "production",
  xe = !Ps.toLowerCase().startsWith("prod");
var _o = Array.isArray,
  Es = Array.prototype.indexOf,
  xo = Array.from,
  Fr = Object.defineProperty,
  pr = Object.getOwnPropertyDescriptor,
  As = Object.getOwnPropertyDescriptors,
  zs = Object.prototype,
  Fs = Array.prototype,
  pi = Object.getPrototypeOf,
  jo = Object.isExtensible;
function sa(r) {
  return typeof r == "function";
}
const Q = () => {};
function Ts(r) {
  for (var e = 0; e < r.length; e++) r[e]();
}
function bi() {
  var r,
    e,
    a = new Promise((n, o) => {
      ((r = n), (e = o));
    });
  return { promise: a, resolve: r, reject: e };
}
const bt = 2,
  wo = 4,
  yo = 8,
  hi = 1 << 24,
  nr = 16,
  _r = 32,
  Xr = 64,
  wn = 128,
  Gt = 512,
  _t = 1024,
  Ft = 2048,
  xr = 4096,
  Nt = 8192,
  br = 16384,
  yn = 32768,
  Tr = 65536,
  pn = 1 << 17,
  mi = 1 << 18,
  ba = 1 << 19,
  Ls = 1 << 20,
  Lr = 32768,
  oo = 1 << 21,
  kn = 1 << 22,
  Er = 1 << 23,
  Ar = Symbol("$state"),
  _i = Symbol("legacy props"),
  Ms = Symbol(""),
  xi = Symbol("proxy path"),
  la = new (class extends Error {
    name = "StaleReactionError";
    message =
      "The reaction that called `getAbortSignal()` was re-run or destroyed";
  })();
function Ds(r) {
  if (xe) {
    const e = new Error(`lifecycle_outside_component
\`${r}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ns() {
  if (xe) {
    const r = new Error(
      "async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Vo() {
  if (xe) {
    const r = new Error(
      "bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
function Is() {
  if (xe) {
    const r = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/derived_references_self");
}
function Os(r) {
  if (xe) {
    const e = new Error(`effect_in_teardown
\`${r}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Bs() {
  if (xe) {
    const r = new Error(
      "effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Rs(r) {
  if (xe) {
    const e = new Error(`effect_orphan
\`${r}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/effect_orphan");
}
function js() {
  if (xe) {
    const r = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Vs() {
  if (xe) {
    const r = new Error(
      "invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/invalid_snippet");
}
function qs(r) {
  if (xe) {
    const e = new Error(`props_invalid_value
Cannot do \`bind:${r}={undefined}\` when \`${r}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Us(r) {
  if (xe) {
    const e = new Error(`props_rest_readonly
Rest element properties of \`$props()\` such as \`${r}\` are readonly
https://svelte.dev/e/props_rest_readonly`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/props_rest_readonly");
}
function Hs(r) {
  if (xe) {
    const e = new Error(`rune_outside_svelte
The \`${r}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function Ks() {
  if (xe) {
    const r = new Error(
      "state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Gs() {
  if (xe) {
    const r = new Error(
      "state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ws() {
  if (xe) {
    const r = new Error(
      "state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Zs() {
  if (xe) {
    const r = new Error(
      "svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const wi = 1,
  yi = 2,
  ki = 4,
  Xs = 8,
  Ys = 16,
  Js = 1,
  Qs = 2,
  $s = 4,
  el = 8,
  tl = 16,
  rl = 1,
  al = 2,
  nl = 4,
  ol = 1,
  il = 2,
  vt = Symbol(),
  sl = Symbol("filename"),
  ll = "http://www.w3.org/1999/xhtml",
  ul = "@attach";
var ko = "font-weight: bold",
  Co = "font-weight: normal";
function cl() {
  xe
    ? console.warn(
        "%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value",
        ko,
        Co
      )
    : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Zn(r) {
  xe
    ? console.warn(
        `%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${r}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`,
        ko,
        Co
      )
    : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
function dl() {
  xe
    ? console.warn(
        "%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop",
        ko,
        Co
      )
    : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ci(r) {
  return r === this.v;
}
function Si(r, e) {
  return r != r
    ? e == e
    : r !== e || (r !== null && typeof r == "object") || typeof r == "function";
}
function Pi(r) {
  return !Si(r, this.v);
}
let Xa = !1,
  fl = !1;
function vl() {
  Xa = !0;
}
function $t(r, e) {
  return ((r.label = e), Ei(r.v, e), r);
}
function Ei(r, e) {
  return (r?.[xi]?.(e), r);
}
function gl(r) {
  const e = new Error(),
    a = pl();
  return a.length === 0
    ? null
    : (a.unshift(`
`),
      Fr(e, "stack", {
        value: a.join(`
`),
      }),
      Fr(e, "name", { value: r }),
      e);
}
function pl() {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 1 / 0;
  const e = new Error().stack;
  if (((Error.stackTraceLimit = r), !e)) return [];
  const a = e.split(`
`),
    n = [];
  for (let o = 0; o < a.length; o++) {
    const i = a[o],
      s = i.replaceAll("\\", "/");
    if (i.trim() !== "Error") {
      if (i.includes("validate_each_keys")) return [];
      s.includes("svelte/src/internal") ||
        s.includes("node_modules/.vite") ||
        n.push(i);
    }
  }
  return n;
}
let et = null;
function ca(r) {
  et = r;
}
let da = null;
function bn(r) {
  da = r;
}
let Ya = null;
function qo(r) {
  Ya = r;
}
function Wt(r) {
  return Ai("getContext").get(r);
}
function bl(r, e) {
  return (Ai("setContext").set(r, e), e);
}
function Be(r, e = !1, a) {
  ((et = {
    p: et,
    i: !1,
    c: null,
    e: null,
    s: r,
    x: null,
    l: Xa && !e ? { s: null, u: null, $: [] } : null,
  }),
    xe && ((et.function = a), (Ya = a)));
}
function Re(r) {
  var e = et,
    a = e.e;
  if (a !== null) {
    e.e = null;
    for (var n of a) Hi(n);
  }
  return ((e.i = !0), (et = e.p), xe && (Ya = et?.function ?? null), {});
}
function ha() {
  return !Xa || (et !== null && et.l === null);
}
function Ai(r) {
  return (et === null && Ds(r), (et.c ??= new Map(hl(et) || void 0)));
}
function hl(r) {
  let e = r.p;
  for (; e !== null; ) {
    const a = e.c;
    if (a !== null) return a;
    e = e.p;
  }
  return null;
}
let Hr = [];
function zi() {
  var r = Hr;
  ((Hr = []), Ts(r));
}
function ar(r) {
  if (Hr.length === 0 && !ja) {
    var e = Hr;
    queueMicrotask(() => {
      e === Hr && zi();
    });
  }
  Hr.push(r);
}
function ml() {
  for (; Hr.length > 0; ) zi();
}
const io = new WeakMap();
function Fi(r) {
  var e = Ve;
  if (e === null) return ((Ue.f |= Er), r);
  if (
    (xe && r instanceof Error && !io.has(r) && io.set(r, _l(r, e)),
    (e.f & yn) === 0)
  ) {
    if ((e.f & wn) === 0)
      throw (xe && !e.parent && r instanceof Error && Ti(r), r);
    e.b.error(r);
  } else fa(r, e);
}
function fa(r, e) {
  for (; e !== null; ) {
    if ((e.f & wn) !== 0)
      try {
        e.b.error(r);
        return;
      } catch (a) {
        r = a;
      }
    e = e.parent;
  }
  throw (xe && r instanceof Error && Ti(r), r);
}
function _l(r, e) {
  const a = pr(r, "message");
  if (!(a && !a.configurable)) {
    for (
      var n = Ao ? "  " : "	",
        o = `
${n}in ${e.fn?.name || "<unknown>"}`,
        i = e.ctx;
      i !== null;
    )
      ((o += `
${n}in ${i.function?.[sl].split("/").pop()}`),
        (i = i.p));
    return {
      message:
        r.message +
        `
${o}
`,
      stack: r.stack
        ?.split(
          `
`
        )
        .filter((s) => !s.includes("svelte/src/internal")).join(`
`),
    };
  }
}
function Ti(r) {
  const e = io.get(r);
  e &&
    (Fr(r, "message", { value: e.message }),
    Fr(r, "stack", { value: e.stack }));
}
const dn = new Set();
let Ke = null,
  gn = null,
  Bt = null,
  Ot = [],
  Cn = null,
  so = !1,
  ja = !1;
class er {
  committed = !1;
  current = new Map();
  previous = new Map();
  #e = new Set();
  #t = new Set();
  #a = 0;
  #r = 0;
  #l = null;
  #o = [];
  #n = [];
  skipped_effects = new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#r > 0;
  }
  process(e) {
    ((Ot = []), (gn = null), this.apply());
    var a = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: [],
    };
    for (const n of e) this.#i(n, a);
    (this.is_fork || this.#c(),
      this.is_deferred()
        ? (this.#s(a.effects),
          this.#s(a.render_effects),
          this.#s(a.block_effects))
        : ((gn = this),
          (Ke = null),
          Uo(a.render_effects),
          Uo(a.effects),
          (gn = null),
          this.#l?.resolve()),
      (Bt = null));
  }
  #i(e, a) {
    e.f ^= _t;
    for (var n = e.first; n !== null; ) {
      var o = n.f,
        i = (o & (_r | Xr)) !== 0,
        s = i && (o & _t) !== 0,
        l = s || (o & Nt) !== 0 || this.skipped_effects.has(n);
      if (
        ((n.f & wn) !== 0 &&
          n.b?.is_pending() &&
          (a = {
            parent: a,
            effect: n,
            effects: [],
            render_effects: [],
            block_effects: [],
          }),
        !l && n.fn !== null)
      ) {
        i
          ? (n.f ^= _t)
          : (o & wo) !== 0
            ? a.effects.push(n)
            : tn(n) && ((n.f & nr) !== 0 && a.block_effects.push(n), Wa(n));
        var u = n.first;
        if (u !== null) {
          n = u;
          continue;
        }
      }
      var f = n.parent;
      for (n = n.next; n === null && f !== null; )
        (f === a.effect &&
          (this.#s(a.effects),
          this.#s(a.render_effects),
          this.#s(a.block_effects),
          (a = a.parent)),
          (n = f.next),
          (f = f.parent));
    }
  }
  #s(e) {
    for (const a of e)
      (((a.f & Ft) !== 0 ? this.#o : this.#n).push(a),
        this.#u(a.deps),
        xt(a, _t));
  }
  #u(e) {
    if (e !== null)
      for (const a of e)
        (a.f & bt) === 0 || (a.f & Lr) === 0 || ((a.f ^= Lr), this.#u(a.deps));
  }
  capture(e, a) {
    (this.previous.has(e) || this.previous.set(e, a),
      (e.f & Er) === 0 && (this.current.set(e, e.v), Bt?.set(e, e.v)));
  }
  activate() {
    ((Ke = this), this.apply());
  }
  deactivate() {
    Ke === this && ((Ke = null), (Bt = null));
  }
  flush() {
    if ((this.activate(), Ot.length > 0)) {
      if ((Li(), Ke !== null && Ke !== this)) return;
    } else this.#a === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of this.#t) e(this);
    this.#t.clear();
  }
  #c() {
    if (this.#r === 0) {
      for (const e of this.#e) e();
      this.#e.clear();
    }
    this.#a === 0 && this.#d();
  }
  #d() {
    if (dn.size > 1) {
      this.previous.clear();
      var e = Bt,
        a = !0,
        n = {
          parent: null,
          effect: null,
          effects: [],
          render_effects: [],
          block_effects: [],
        };
      for (const i of dn) {
        if (i === this) {
          a = !1;
          continue;
        }
        const s = [];
        for (const [u, f] of this.current) {
          if (i.current.has(u))
            if (a && f !== i.current.get(u)) i.current.set(u, f);
            else continue;
          s.push(u);
        }
        if (s.length === 0) continue;
        const l = [...i.current.keys()].filter((u) => !this.current.has(u));
        if (l.length > 0) {
          var o = Ot;
          Ot = [];
          const u = new Set(),
            f = new Map();
          for (const h of s) Mi(h, l, u, f);
          if (Ot.length > 0) {
            ((Ke = i), i.apply());
            for (const h of Ot) i.#i(h, n);
            i.deactivate();
          }
          Ot = o;
        }
      }
      ((Ke = null), (Bt = e));
    }
    ((this.committed = !0), dn.delete(this));
  }
  increment(e) {
    ((this.#a += 1), e && (this.#r += 1));
  }
  decrement(e) {
    ((this.#a -= 1), e && (this.#r -= 1), this.revive());
  }
  revive() {
    for (const e of this.#o) (xt(e, Ft), Wr(e));
    for (const e of this.#n) (xt(e, xr), Wr(e));
    ((this.#o = []), (this.#n = []), this.flush());
  }
  oncommit(e) {
    this.#e.add(e);
  }
  ondiscard(e) {
    this.#t.add(e);
  }
  settled() {
    return (this.#l ??= bi()).promise;
  }
  static ensure() {
    if (Ke === null) {
      const e = (Ke = new er());
      (dn.add(Ke),
        ja ||
          er.enqueue(() => {
            Ke === e && e.flush();
          }));
    }
    return Ke;
  }
  static enqueue(e) {
    ar(e);
  }
  apply() {}
}
function xl(r) {
  var e = ja;
  ja = !0;
  try {
    for (var a; ; ) {
      if ((ml(), Ot.length === 0 && (Ke?.flush(), Ot.length === 0)))
        return ((Cn = null), a);
      Li();
    }
  } finally {
    ja = e;
  }
}
function Li() {
  var r = Kr;
  so = !0;
  var e = xe ? new Set() : null;
  try {
    var a = 0;
    for (mn(!0); Ot.length > 0; ) {
      var n = er.ensure();
      if (a++ > 1e3) {
        if (xe) {
          var o = new Map();
          for (const s of n.current.keys())
            for (const [l, u] of s.updated ?? []) {
              var i = o.get(l);
              (i || ((i = { error: u.error, count: 0 }), o.set(l, i)),
                (i.count += u.count));
            }
          for (const s of o.values()) s.error && console.error(s.error);
        }
        wl();
      }
      if ((n.process(Ot), zr.clear(), xe))
        for (const s of n.current.keys()) e.add(s);
    }
  } finally {
    if (((so = !1), mn(r), (Cn = null), xe))
      for (const s of e) s.updated = null;
  }
}
function wl() {
  try {
    js();
  } catch (r) {
    (xe && Fr(r, "stack", { value: "" }), fa(r, Cn));
  }
}
let vr = null;
function Uo(r) {
  var e = r.length;
  if (e !== 0) {
    for (var a = 0; a < e; ) {
      var n = r[a++];
      if (
        (n.f & (br | Nt)) === 0 &&
        tn(n) &&
        ((vr = new Set()),
        Wa(n),
        n.deps === null &&
          n.first === null &&
          n.nodes === null &&
          (n.teardown === null && n.ac === null ? Xi(n) : (n.fn = null)),
        vr?.size > 0)
      ) {
        zr.clear();
        for (const o of vr) {
          if ((o.f & (br | Nt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            (vr.has(s) && (vr.delete(s), i.push(s)), (s = s.parent));
          for (let l = i.length - 1; l >= 0; l--) {
            const u = i[l];
            (u.f & (br | Nt)) === 0 && Wa(u);
          }
        }
        vr.clear();
      }
    }
    vr = null;
  }
}
function Mi(r, e, a, n) {
  if (!a.has(r) && (a.add(r), r.reactions !== null))
    for (const o of r.reactions) {
      const i = o.f;
      (i & bt) !== 0
        ? Mi(o, e, a, n)
        : (i & (kn | nr)) !== 0 &&
          (i & Ft) === 0 &&
          Di(o, e, n) &&
          (xt(o, Ft), Wr(o));
    }
}
function Di(r, e, a) {
  const n = a.get(r);
  if (n !== void 0) return n;
  if (r.deps !== null)
    for (const o of r.deps) {
      if (e.includes(o)) return !0;
      if ((o.f & bt) !== 0 && Di(o, e, a)) return (a.set(o, !0), !0);
    }
  return (a.set(r, !1), !1);
}
function Wr(r) {
  for (var e = (Cn = r); e.parent !== null; ) {
    e = e.parent;
    var a = e.f;
    if (so && e === Ve && (a & nr) !== 0 && (a & mi) === 0) return;
    if ((a & (Xr | _r)) !== 0) {
      if ((a & _t) === 0) return;
      e.f ^= _t;
    }
  }
  Ot.push(e);
}
function yl(r) {
  let e = 0,
    a = Zr(0),
    n;
  return (
    xe && $t(a, "createSubscriber version"),
    () => {
      Ka() &&
        (t(a),
        $a(
          () => (
            e === 0 && (n = Jr(() => r(() => Va(a)))),
            (e += 1),
            () => {
              ar(() => {
                ((e -= 1), e === 0 && (n?.(), (n = void 0), Va(a)));
              });
            }
          )
        ));
    }
  );
}
var kl = Tr | ba | wn;
function Cl(r, e, a) {
  new Sl(r, e, a);
}
class Sl {
  parent;
  #e = !1;
  #t;
  #a = null;
  #r;
  #l;
  #o;
  #n = null;
  #i = null;
  #s = null;
  #u = null;
  #c = null;
  #d = 0;
  #v = 0;
  #g = !1;
  #f = null;
  #_ = yl(
    () => (
      (this.#f = Zr(this.#d)),
      xe && $t(this.#f, "$effect.pending()"),
      () => {
        this.#f = null;
      }
    )
  );
  constructor(e, a, n) {
    ((this.#t = e),
      (this.#r = a),
      (this.#l = n),
      (this.parent = Ve.b),
      (this.#e = !!this.#r.pending),
      (this.#o = en(() => {
        Ve.b = this;
        {
          var o = this.#h();
          try {
            this.#n = At(() => n(o));
          } catch (i) {
            this.error(i);
          }
          this.#v > 0 ? this.#b() : (this.#e = !1);
        }
        return () => {
          this.#c?.remove();
        };
      }, kl)));
  }
  #x() {
    try {
      this.#n = At(() => this.#l(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#e = !1;
  }
  #w() {
    const e = this.#r.pending;
    e &&
      ((this.#i = At(() => e(this.#t))),
      er.enqueue(() => {
        var a = this.#h();
        ((this.#n = this.#p(() => (er.ensure(), At(() => this.#l(a))))),
          this.#v > 0
            ? this.#b()
            : (ua(this.#i, () => {
                this.#i = null;
              }),
              (this.#e = !1)));
      }));
  }
  #h() {
    var e = this.#t;
    return (
      this.#e && ((this.#c = mr()), this.#t.before(this.#c), (e = this.#c)),
      e
    );
  }
  is_pending() {
    return this.#e || (!!this.parent && this.parent.is_pending());
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  #p(e) {
    var a = Ve,
      n = Ue,
      o = et;
    (Kt(this.#o), zt(this.#o), ca(this.#o.ctx));
    try {
      return e();
    } catch (i) {
      return (Fi(i), null);
    } finally {
      (Kt(a), zt(n), ca(o));
    }
  }
  #b() {
    const e = this.#r.pending;
    (this.#n !== null &&
      ((this.#u = document.createDocumentFragment()),
      this.#u.append(this.#c),
      Qi(this.#n, this.#u)),
      this.#i === null && (this.#i = At(() => e(this.#t))));
  }
  #m(e) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#m(e);
      return;
    }
    ((this.#v += e),
      this.#v === 0 &&
        ((this.#e = !1),
        this.#i &&
          ua(this.#i, () => {
            this.#i = null;
          }),
        this.#u && (this.#t.before(this.#u), (this.#u = null))));
  }
  update_pending_count(e) {
    (this.#m(e), (this.#d += e), this.#f && ga(this.#f, this.#d));
  }
  get_effect_pending() {
    return (this.#_(), t(this.#f));
  }
  error(e) {
    var a = this.#r.onerror;
    let n = this.#r.failed;
    if (this.#g || (!a && !n)) throw e;
    (this.#n && (pt(this.#n), (this.#n = null)),
      this.#i && (pt(this.#i), (this.#i = null)),
      this.#s && (pt(this.#s), (this.#s = null)));
    var o = !1,
      i = !1;
    const s = () => {
      if (o) {
        dl();
        return;
      }
      ((o = !0),
        i && Zs(),
        er.ensure(),
        (this.#d = 0),
        this.#s !== null &&
          ua(this.#s, () => {
            this.#s = null;
          }),
        (this.#e = this.has_pending_snippet()),
        (this.#n = this.#p(() => ((this.#g = !1), At(() => this.#l(this.#t))))),
        this.#v > 0 ? this.#b() : (this.#e = !1));
    };
    var l = Ue;
    try {
      (zt(null), (i = !0), a?.(e, s), (i = !1));
    } catch (u) {
      fa(u, this.#o && this.#o.parent);
    } finally {
      zt(l);
    }
    n &&
      ar(() => {
        this.#s = this.#p(() => {
          (er.ensure(), (this.#g = !0));
          try {
            return At(() => {
              n(
                this.#t,
                () => e,
                () => s
              );
            });
          } catch (u) {
            return (fa(u, this.#o.parent), null);
          } finally {
            this.#g = !1;
          }
        });
      });
  }
}
function Ni(r, e, a, n) {
  const o = ha() ? Sn : So;
  if (a.length === 0 && r.length === 0) {
    n(e.map(o));
    return;
  }
  var i = Ke,
    s = Ve,
    l = Pl();
  function u() {
    Promise.all(a.map((f) => Al(f)))
      .then((f) => {
        l();
        try {
          n([...e.map(o), ...f]);
        } catch (h) {
          (s.f & br) === 0 && fa(h, s);
        }
        (i?.deactivate(), hn());
      })
      .catch((f) => {
        fa(f, s);
      });
  }
  r.length > 0
    ? Promise.all(r).then(() => {
        l();
        try {
          return u();
        } finally {
          (i?.deactivate(), hn());
        }
      })
    : u();
}
function Pl() {
  var r = Ve,
    e = Ue,
    a = et,
    n = Ke;
  if (xe) var o = da;
  return function (s = !0) {
    (Kt(r), zt(e), ca(a), s && n?.activate(), xe && bn(o));
  };
}
function hn() {
  (Kt(null), zt(null), ca(null), xe && bn(null));
}
const El = new Set();
function Sn(r) {
  var e = bt | Ft,
    a = Ue !== null && (Ue.f & bt) !== 0 ? Ue : null;
  return (
    Ve !== null && (Ve.f |= ba),
    {
      ctx: et,
      deps: null,
      effects: null,
      equals: Ci,
      f: e,
      fn: r,
      reactions: null,
      rv: 0,
      v: vt,
      wv: 0,
      parent: a ?? Ve,
      ac: null,
    }
  );
}
function Al(r, e) {
  let a = Ve;
  a === null && Ns();
  var n = a.b,
    o = void 0,
    i = Zr(vt),
    s = !Ue,
    l = new Map();
  return (
    ql(() => {
      var u = bi();
      o = u.promise;
      try {
        Promise.resolve(r())
          .then(u.resolve, u.reject)
          .then(() => {
            (f === Ke && f.committed && f.deactivate(), hn());
          });
      } catch (b) {
        (u.reject(b), hn());
      }
      var f = Ke;
      if (s) {
        var h = !n.is_pending();
        (n.update_pending_count(1),
          f.increment(h),
          l.get(f)?.reject(la),
          l.delete(f),
          l.set(f, u));
      }
      const y = (b, k = void 0) => {
        if ((f.activate(), k)) k !== la && ((i.f |= Er), ga(i, k));
        else {
          ((i.f & Er) !== 0 && (i.f ^= Er), ga(i, b));
          for (const [C, x] of l) {
            if ((l.delete(C), C === f)) break;
            x.reject(la);
          }
        }
        s && (n.update_pending_count(-1), f.decrement(h));
      };
      u.promise.then(y, (b) => y(null, b || "unknown"));
    }),
    Qa(() => {
      for (const u of l.values()) u.reject(la);
    }),
    xe && (i.f |= kn),
    new Promise((u) => {
      function f(h) {
        function y() {
          h === o ? u(i) : f(o);
        }
        h.then(y, y);
      }
      f(o);
    })
  );
}
function _(r) {
  const e = Sn(r);
  return ($i(e), e);
}
function So(r) {
  const e = Sn(r);
  return ((e.equals = Pi), e);
}
function lo(r) {
  var e = r.effects;
  if (e !== null) {
    r.effects = null;
    for (var a = 0; a < e.length; a += 1) pt(e[a]);
  }
}
let Xn = [];
function zl(r) {
  for (var e = r.parent; e !== null; ) {
    if ((e.f & bt) === 0) return (e.f & br) === 0 ? e : null;
    e = e.parent;
  }
  return null;
}
function Po(r) {
  var e,
    a = Ve;
  if ((Kt(zl(r)), xe)) {
    let n = va;
    Ho(new Set());
    try {
      (Xn.includes(r) && Is(), Xn.push(r), (r.f &= ~Lr), lo(r), (e = co(r)));
    } finally {
      (Kt(a), Ho(n), Xn.pop());
    }
  } else
    try {
      ((r.f &= ~Lr), lo(r), (e = co(r)));
    } finally {
      Kt(a);
    }
  return e;
}
function Ii(r) {
  var e = Po(r);
  if ((r.equals(e) || (Ke?.is_fork || (r.v = e), (r.wv = ts())), !Yr))
    if (Bt !== null) (Ka() || Ke?.is_fork) && Bt.set(r, e);
    else {
      var a = (r.f & Gt) === 0 ? xr : _t;
      xt(r, a);
    }
}
let va = new Set();
const zr = new Map();
function Ho(r) {
  va = r;
}
let Eo = !1;
function Fl() {
  Eo = !0;
}
function Zr(r, e) {
  var a = { f: 0, v: r, reactions: null, equals: Ci, rv: 0, wv: 0 };
  return a;
}
function be(r, e) {
  const a = Zr(r);
  return ($i(a), a);
}
function Oi(r, e = !1, a = !0) {
  const n = Zr(r);
  return (
    e || (n.equals = Pi),
    Xa && a && et !== null && et.l !== null && (et.l.s ??= []).push(n),
    n
  );
}
function z(r, e, a = !1) {
  Ue !== null &&
    (!rr || (Ue.f & pn) !== 0) &&
    ha() &&
    (Ue.f & (bt | nr | kn | pn)) !== 0 &&
    !hr?.includes(r) &&
    Ws();
  let n = a ? Ye(e) : e;
  return (xe && Ei(n, r.label), ga(r, n));
}
function ga(r, e) {
  if (!r.equals(e)) {
    var a = r.v;
    (Yr ? zr.set(r, e) : zr.set(r, a), (r.v = e));
    var n = er.ensure();
    if ((n.capture(r, a), xe)) {
      if (Ve !== null) {
        r.updated ??= new Map();
        const o = (r.updated.get("")?.count ?? 0) + 1;
        if ((r.updated.set("", { error: null, count: o }), o > 5)) {
          const i = gl("updated at");
          if (i !== null) {
            let s = r.updated.get(i.stack);
            (s || ((s = { error: i, count: 0 }), r.updated.set(i.stack, s)),
              s.count++);
          }
        }
      }
      Ve !== null && (r.set_during_effect = !0);
    }
    ((r.f & bt) !== 0 &&
      ((r.f & Ft) !== 0 && Po(r), xt(r, (r.f & Gt) !== 0 ? _t : xr)),
      (r.wv = ts()),
      Ri(r, Ft),
      ha() &&
        Ve !== null &&
        (Ve.f & _t) !== 0 &&
        (Ve.f & (_r | Xr)) === 0 &&
        (It === null ? Hl([r]) : It.push(r)),
      !n.is_fork && va.size > 0 && !Eo && Bi());
  }
  return e;
}
function Bi() {
  Eo = !1;
  var r = Kr;
  mn(!0);
  const e = Array.from(va);
  try {
    for (const a of e) ((a.f & _t) !== 0 && xt(a, xr), tn(a) && Wa(a));
  } finally {
    mn(r);
  }
  va.clear();
}
function Va(r) {
  z(r, r.v + 1);
}
function Ri(r, e) {
  var a = r.reactions;
  if (a !== null)
    for (var n = ha(), o = a.length, i = 0; i < o; i++) {
      var s = a[i],
        l = s.f;
      if (!(!n && s === Ve)) {
        if (xe && (l & pn) !== 0) {
          va.add(s);
          continue;
        }
        var u = (l & Ft) === 0;
        if ((u && xt(s, e), (l & bt) !== 0)) {
          var f = s;
          (Bt?.delete(f), (l & Lr) === 0 && (l & Gt && (s.f |= Lr), Ri(f, xr)));
        } else u && ((l & nr) !== 0 && vr !== null && vr.add(s), Wr(s));
      }
    }
}
const Tl = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function Ye(r) {
  if (typeof r != "object" || r === null || Ar in r) return r;
  const e = pi(r);
  if (e !== zs && e !== Fs) return r;
  var a = new Map(),
    n = _o(r),
    o = be(0),
    i = Gr,
    s = (h) => {
      if (Gr === i) return h();
      var y = Ue,
        b = Gr;
      (zt(null), Wo(i));
      var k = h();
      return (zt(y), Wo(b), k);
    };
  n && (a.set("length", be(r.length)), xe && (r = Ml(r)));
  var l = "";
  let u = !1;
  function f(h) {
    if (!u) {
      ((u = !0), (l = h), $t(o, `${l} version`));
      for (const [y, b] of a) $t(b, Ur(l, y));
      u = !1;
    }
  }
  return new Proxy(r, {
    defineProperty(h, y, b) {
      (!("value" in b) ||
        b.configurable === !1 ||
        b.enumerable === !1 ||
        b.writable === !1) &&
        Ks();
      var k = a.get(y);
      return (
        k === void 0
          ? (k = s(() => {
              var C = be(b.value);
              return (
                a.set(y, C),
                xe && typeof y == "string" && $t(C, Ur(l, y)),
                C
              );
            }))
          : z(k, b.value, !0),
        !0
      );
    },
    deleteProperty(h, y) {
      var b = a.get(y);
      if (b === void 0) {
        if (y in h) {
          const k = s(() => be(vt));
          (a.set(y, k), Va(o), xe && $t(k, Ur(l, y)));
        }
      } else (z(b, vt), Va(o));
      return !0;
    },
    get(h, y, b) {
      if (y === Ar) return r;
      if (xe && y === xi) return f;
      var k = a.get(y),
        C = y in h;
      if (
        (k === void 0 &&
          (!C || pr(h, y)?.writable) &&
          ((k = s(() => {
            var g = Ye(C ? h[y] : vt),
              c = be(g);
            return (xe && $t(c, Ur(l, y)), c);
          })),
          a.set(y, k)),
        k !== void 0)
      ) {
        var x = t(k);
        return x === vt ? void 0 : x;
      }
      return Reflect.get(h, y, b);
    },
    getOwnPropertyDescriptor(h, y) {
      var b = Reflect.getOwnPropertyDescriptor(h, y);
      if (b && "value" in b) {
        var k = a.get(y);
        k && (b.value = t(k));
      } else if (b === void 0) {
        var C = a.get(y),
          x = C?.v;
        if (C !== void 0 && x !== vt)
          return { enumerable: !0, configurable: !0, value: x, writable: !0 };
      }
      return b;
    },
    has(h, y) {
      if (y === Ar) return !0;
      var b = a.get(y),
        k = (b !== void 0 && b.v !== vt) || Reflect.has(h, y);
      if (b !== void 0 || (Ve !== null && (!k || pr(h, y)?.writable))) {
        b === void 0 &&
          ((b = s(() => {
            var x = k ? Ye(h[y]) : vt,
              g = be(x);
            return (xe && $t(g, Ur(l, y)), g);
          })),
          a.set(y, b));
        var C = t(b);
        if (C === vt) return !1;
      }
      return k;
    },
    set(h, y, b, k) {
      var C = a.get(y),
        x = y in h;
      if (n && y === "length")
        for (var g = b; g < C.v; g += 1) {
          var c = a.get(g + "");
          c !== void 0
            ? z(c, vt)
            : g in h &&
              ((c = s(() => be(vt))), a.set(g + "", c), xe && $t(c, Ur(l, g)));
        }
      if (C === void 0)
        (!x || pr(h, y)?.writable) &&
          ((C = s(() => be(void 0))),
          xe && $t(C, Ur(l, y)),
          z(C, Ye(b)),
          a.set(y, C));
      else {
        x = C.v !== vt;
        var v = s(() => Ye(b));
        z(C, v);
      }
      var d = Reflect.getOwnPropertyDescriptor(h, y);
      if ((d?.set && d.set.call(k, b), !x)) {
        if (n && typeof y == "string") {
          var p = a.get("length"),
            S = Number(y);
          Number.isInteger(S) && S >= p.v && z(p, S + 1);
        }
        Va(o);
      }
      return !0;
    },
    ownKeys(h) {
      t(o);
      var y = Reflect.ownKeys(h).filter((C) => {
        var x = a.get(C);
        return x === void 0 || x.v !== vt;
      });
      for (var [b, k] of a) k.v !== vt && !(b in h) && y.push(b);
      return y;
    },
    setPrototypeOf() {
      Gs();
    },
  });
}
function Ur(r, e) {
  return typeof e == "symbol"
    ? `${r}[Symbol(${e.description ?? ""})]`
    : Tl.test(e)
      ? `${r}.${e}`
      : /^\d+$/.test(e)
        ? `${r}[${e}]`
        : `${r}['${e}']`;
}
function qa(r) {
  try {
    if (r !== null && typeof r == "object" && Ar in r) return r[Ar];
  } catch {}
  return r;
}
function ji(r, e) {
  return Object.is(qa(r), qa(e));
}
const Ll = new Set([
  "copyWithin",
  "fill",
  "pop",
  "push",
  "reverse",
  "shift",
  "sort",
  "splice",
  "unshift",
]);
function Ml(r) {
  return new Proxy(r, {
    get(e, a, n) {
      var o = Reflect.get(e, a, n);
      return Ll.has(a)
        ? function (...i) {
            Fl();
            var s = o.apply(this, i);
            return (Bi(), s);
          }
        : o;
    },
  });
}
function Dl() {
  const r = Array.prototype,
    e = Array.__svelte_cleanup;
  e && e();
  const { indexOf: a, lastIndexOf: n, includes: o } = r;
  ((r.indexOf = function (i, s) {
    const l = a.call(this, i, s);
    if (l === -1) {
      for (let u = s ?? 0; u < this.length; u += 1)
        if (qa(this[u]) === i) {
          Zn("array.indexOf(...)");
          break;
        }
    }
    return l;
  }),
    (r.lastIndexOf = function (i, s) {
      const l = n.call(this, i, s ?? this.length - 1);
      if (l === -1) {
        for (let u = 0; u <= (s ?? this.length - 1); u += 1)
          if (qa(this[u]) === i) {
            Zn("array.lastIndexOf(...)");
            break;
          }
      }
      return l;
    }),
    (r.includes = function (i, s) {
      const l = o.call(this, i, s);
      if (!l) {
        for (let u = 0; u < this.length; u += 1)
          if (qa(this[u]) === i) {
            Zn("array.includes(...)");
            break;
          }
      }
      return l;
    }),
    (Array.__svelte_cleanup = () => {
      ((r.indexOf = a), (r.lastIndexOf = n), (r.includes = o));
    }));
}
var uo, Ao, Vi, qi;
function Nl() {
  if (uo === void 0) {
    ((uo = window), (Ao = /Firefox/.test(navigator.userAgent)));
    var r = Element.prototype,
      e = Node.prototype,
      a = Text.prototype;
    ((Vi = pr(e, "firstChild").get),
      (qi = pr(e, "nextSibling").get),
      jo(r) &&
        ((r.__click = void 0),
        (r.__className = void 0),
        (r.__attributes = null),
        (r.__style = void 0),
        (r.__e = void 0)),
      jo(a) && (a.__t = void 0),
      xe && ((r.__svelte_meta = null), Dl()));
  }
}
function mr(r = "") {
  return document.createTextNode(r);
}
function tr(r) {
  return Vi.call(r);
}
function Ja(r) {
  return qi.call(r);
}
function m(r, e) {
  return tr(r);
}
function Ce(r, e = !1) {
  {
    var a = tr(r);
    return a instanceof Comment && a.data === "" ? Ja(a) : a;
  }
}
function D(r, e = 1, a = !1) {
  let n = r;
  for (; e--; ) n = Ja(n);
  return n;
}
function Il(r) {
  r.textContent = "";
}
function Ui() {
  return !1;
}
function Ol(r, e) {
  if (e) {
    const a = document.body;
    ((r.autofocus = !0),
      ar(() => {
        document.activeElement === a && r.focus();
      }));
  }
}
let Ko = !1;
function Bl() {
  Ko ||
    ((Ko = !0),
    document.addEventListener(
      "reset",
      (r) => {
        Promise.resolve().then(() => {
          if (!r.defaultPrevented)
            for (const e of r.target.elements) e.__on_r?.();
        });
      },
      { capture: !0 }
    ));
}
function ma(r) {
  var e = Ue,
    a = Ve;
  (zt(null), Kt(null));
  try {
    return r();
  } finally {
    (zt(e), Kt(a));
  }
}
function zo(r, e, a, n = a) {
  r.addEventListener(e, () => ma(a));
  const o = r.__on_r;
  (o
    ? (r.__on_r = () => {
        (o(), n(!0));
      })
    : (r.__on_r = () => n(!0)),
    Bl());
}
function Rl(r) {
  (Ve === null && (Ue === null && Rs(r), Bs()), Yr && Os(r));
}
function jl(r, e) {
  var a = e.last;
  a === null
    ? (e.last = e.first = r)
    : ((a.next = r), (r.prev = a), (e.last = r));
}
function or(r, e, a) {
  var n = Ve;
  if (xe) for (; n !== null && (n.f & pn) !== 0; ) n = n.parent;
  n !== null && (n.f & Nt) !== 0 && (r |= Nt);
  var o = {
    ctx: et,
    deps: null,
    nodes: null,
    f: r | Ft | Gt,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null,
  };
  if ((xe && (o.component_function = Ya), a))
    try {
      (Wa(o), (o.f |= yn));
    } catch (l) {
      throw (pt(o), l);
    }
  else e !== null && Wr(o);
  var i = o;
  if (
    (a &&
      i.deps === null &&
      i.teardown === null &&
      i.nodes === null &&
      i.first === i.last &&
      (i.f & ba) === 0 &&
      ((i = i.first),
      (r & nr) !== 0 && (r & Tr) !== 0 && i !== null && (i.f |= Tr)),
    i !== null &&
      ((i.parent = n),
      n !== null && jl(i, n),
      Ue !== null && (Ue.f & bt) !== 0 && (r & Xr) === 0))
  ) {
    var s = Ue;
    (s.effects ??= []).push(i);
  }
  return o;
}
function Ka() {
  return Ue !== null && !rr;
}
function Qa(r) {
  const e = or(yo, null, !1);
  return (xt(e, _t), (e.teardown = r), e);
}
function We(r) {
  (Rl("$effect"), xe && Fr(r, "name", { value: "$effect" }));
  var e = Ve.f,
    a = !Ue && (e & _r) !== 0 && (e & yn) === 0;
  if (a) {
    var n = et;
    (n.e ??= []).push(r);
  } else return Hi(r);
}
function Hi(r) {
  return or(wo | Ls, r, !1);
}
function Vl(r) {
  er.ensure();
  const e = or(Xr | ba, r, !0);
  return (a = {}) =>
    new Promise((n) => {
      a.outro
        ? ua(e, () => {
            (pt(e), n(void 0));
          })
        : (pt(e), n(void 0));
    });
}
function Pn(r) {
  return or(wo, r, !1);
}
function ql(r) {
  return or(kn | ba, r, !0);
}
function $a(r, e = 0) {
  return or(yo | e, r, !0);
}
function B(r, e = [], a = [], n = []) {
  Ni(n, e, a, (o) => {
    or(yo, () => r(...o.map(t)), !0);
  });
}
function en(r, e = 0) {
  var a = or(nr | e, r, !0);
  return (xe && (a.dev_stack = da), a);
}
function Ki(r, e = 0) {
  var a = or(hi | e, r, !0);
  return (xe && (a.dev_stack = da), a);
}
function At(r) {
  return or(_r | ba, r, !0);
}
function Gi(r) {
  var e = r.teardown;
  if (e !== null) {
    const a = Yr,
      n = Ue;
    (Go(!0), zt(null));
    try {
      e.call(null);
    } finally {
      (Go(a), zt(n));
    }
  }
}
function Wi(r, e = !1) {
  var a = r.first;
  for (r.first = r.last = null; a !== null; ) {
    const o = a.ac;
    o !== null &&
      ma(() => {
        o.abort(la);
      });
    var n = a.next;
    ((a.f & Xr) !== 0 ? (a.parent = null) : pt(a, e), (a = n));
  }
}
function Ul(r) {
  for (var e = r.first; e !== null; ) {
    var a = e.next;
    ((e.f & _r) === 0 && pt(e), (e = a));
  }
}
function pt(r, e = !0) {
  var a = !1;
  ((e || (r.f & mi) !== 0) &&
    r.nodes !== null &&
    r.nodes.end !== null &&
    (Zi(r.nodes.start, r.nodes.end), (a = !0)),
    Wi(r, e && !a),
    _n(r, 0),
    xt(r, br));
  var n = r.nodes && r.nodes.t;
  if (n !== null) for (const i of n) i.stop();
  Gi(r);
  var o = r.parent;
  (o !== null && o.first !== null && Xi(r),
    xe && (r.component_function = null),
    (r.next =
      r.prev =
      r.teardown =
      r.ctx =
      r.deps =
      r.fn =
      r.nodes =
      r.ac =
        null));
}
function Zi(r, e) {
  for (; r !== null; ) {
    var a = r === e ? null : Ja(r);
    (r.remove(), (r = a));
  }
}
function Xi(r) {
  var e = r.parent,
    a = r.prev,
    n = r.next;
  (a !== null && (a.next = n),
    n !== null && (n.prev = a),
    e !== null &&
      (e.first === r && (e.first = n), e.last === r && (e.last = a)));
}
function ua(r, e, a = !0) {
  var n = [];
  (Fo(r, n, !0),
    Yi(n, () => {
      (a && pt(r), e && e());
    }));
}
function Yi(r, e) {
  var a = r.length;
  if (a > 0) {
    var n = () => --a || e();
    for (var o of r) o.out(n);
  } else e();
}
function Fo(r, e, a) {
  if ((r.f & Nt) === 0) {
    r.f ^= Nt;
    var n = r.nodes && r.nodes.t;
    if (n !== null) for (const l of n) (l.is_global || a) && e.push(l);
    for (var o = r.first; o !== null; ) {
      var i = o.next,
        s = (o.f & Tr) !== 0 || ((o.f & _r) !== 0 && (r.f & nr) !== 0);
      (Fo(o, e, s ? a : !1), (o = i));
    }
  }
}
function To(r) {
  Ji(r, !0);
}
function Ji(r, e) {
  if ((r.f & Nt) !== 0) {
    ((r.f ^= Nt), (r.f & _t) === 0 && (xt(r, Ft), Wr(r)));
    for (var a = r.first; a !== null; ) {
      var n = a.next,
        o = (a.f & Tr) !== 0 || (a.f & _r) !== 0;
      (Ji(a, o ? e : !1), (a = n));
    }
    var i = r.nodes && r.nodes.t;
    if (i !== null) for (const s of i) (s.is_global || e) && s.in();
  }
}
function Qi(r, e) {
  if (r.nodes)
    for (var a = r.nodes.start, n = r.nodes.end; a !== null; ) {
      var o = a === n ? null : Ja(a);
      (e.append(a), (a = o));
    }
}
let Kr = !1;
function mn(r) {
  Kr = r;
}
let Yr = !1;
function Go(r) {
  Yr = r;
}
let Ue = null,
  rr = !1;
function zt(r) {
  Ue = r;
}
let Ve = null;
function Kt(r) {
  Ve = r;
}
let hr = null;
function $i(r) {
  Ue !== null && (hr === null ? (hr = [r]) : hr.push(r));
}
let kt = null,
  Mt = 0,
  It = null;
function Hl(r) {
  It = r;
}
let es = 1,
  Ga = 0,
  Gr = Ga;
function Wo(r) {
  Gr = r;
}
function ts() {
  return ++es;
}
function tn(r) {
  var e = r.f;
  if ((e & Ft) !== 0) return !0;
  if ((e & bt && (r.f &= ~Lr), (e & xr) !== 0)) {
    var a = r.deps;
    if (a !== null)
      for (var n = a.length, o = 0; o < n; o++) {
        var i = a[o];
        if ((tn(i) && Ii(i), i.wv > r.wv)) return !0;
      }
    (e & Gt) !== 0 && Bt === null && xt(r, _t);
  }
  return !1;
}
function rs(r, e, a = !0) {
  var n = r.reactions;
  if (n !== null && !hr?.includes(r))
    for (var o = 0; o < n.length; o++) {
      var i = n[o];
      (i.f & bt) !== 0
        ? rs(i, e, !1)
        : e === i && (a ? xt(i, Ft) : (i.f & _t) !== 0 && xt(i, xr), Wr(i));
    }
}
function co(r) {
  var e = kt,
    a = Mt,
    n = It,
    o = Ue,
    i = hr,
    s = et,
    l = rr,
    u = Gr,
    f = r.f;
  ((kt = null),
    (Mt = 0),
    (It = null),
    (Ue = (f & (_r | Xr)) === 0 ? r : null),
    (hr = null),
    ca(r.ctx),
    (rr = !1),
    (Gr = ++Ga),
    r.ac !== null &&
      (ma(() => {
        r.ac.abort(la);
      }),
      (r.ac = null)));
  try {
    r.f |= oo;
    var h = r.fn,
      y = h(),
      b = r.deps;
    if (kt !== null) {
      var k;
      if ((_n(r, Mt), b !== null && Mt > 0))
        for (b.length = Mt + kt.length, k = 0; k < kt.length; k++)
          b[Mt + k] = kt[k];
      else r.deps = b = kt;
      if (Ka() && (r.f & Gt) !== 0)
        for (k = Mt; k < b.length; k++) (b[k].reactions ??= []).push(r);
    } else b !== null && Mt < b.length && (_n(r, Mt), (b.length = Mt));
    if (
      ha() &&
      It !== null &&
      !rr &&
      b !== null &&
      (r.f & (bt | xr | Ft)) === 0
    )
      for (k = 0; k < It.length; k++) rs(It[k], r);
    return (
      o !== null &&
        o !== r &&
        (Ga++, It !== null && (n === null ? (n = It) : n.push(...It))),
      (r.f & Er) !== 0 && (r.f ^= Er),
      y
    );
  } catch (C) {
    return Fi(C);
  } finally {
    ((r.f ^= oo),
      (kt = e),
      (Mt = a),
      (It = n),
      (Ue = o),
      (hr = i),
      ca(s),
      (rr = l),
      (Gr = u));
  }
}
function Kl(r, e) {
  let a = e.reactions;
  if (a !== null) {
    var n = Es.call(a, r);
    if (n !== -1) {
      var o = a.length - 1;
      o === 0 ? (a = e.reactions = null) : ((a[n] = a[o]), a.pop());
    }
  }
  a === null &&
    (e.f & bt) !== 0 &&
    (kt === null || !kt.includes(e)) &&
    (xt(e, xr),
    (e.f & Gt) !== 0 && ((e.f ^= Gt), (e.f &= ~Lr)),
    lo(e),
    _n(e, 0));
}
function _n(r, e) {
  var a = r.deps;
  if (a !== null) for (var n = e; n < a.length; n++) Kl(r, a[n]);
}
function Wa(r) {
  var e = r.f;
  if ((e & br) === 0) {
    xt(r, _t);
    var a = Ve,
      n = Kr;
    if (((Ve = r), (Kr = !0), xe)) {
      var o = Ya;
      qo(r.component_function);
      var i = da;
      bn(r.dev_stack ?? da);
    }
    try {
      ((e & (nr | hi)) !== 0 ? Ul(r) : Wi(r), Gi(r));
      var s = co(r);
      ((r.teardown = typeof s == "function" ? s : null), (r.wv = es));
      var l;
      xe && fl && (r.f & Ft) !== 0 && r.deps;
    } finally {
      ((Kr = n), (Ve = a), xe && (qo(o), bn(i)));
    }
  }
}
async function Gl() {
  (await Promise.resolve(), xl());
}
function t(r) {
  var e = r.f,
    a = (e & bt) !== 0;
  if (Ue !== null && !rr) {
    var n = Ve !== null && (Ve.f & br) !== 0;
    if (!n && !hr?.includes(r)) {
      var o = Ue.deps;
      if ((Ue.f & oo) !== 0)
        r.rv < Ga &&
          ((r.rv = Ga),
          kt === null && o !== null && o[Mt] === r
            ? Mt++
            : kt === null
              ? (kt = [r])
              : kt.includes(r) || kt.push(r));
      else {
        (Ue.deps ??= []).push(r);
        var i = r.reactions;
        i === null ? (r.reactions = [Ue]) : i.includes(Ue) || i.push(Ue);
      }
    }
  }
  if ((xe && El.delete(r), Yr)) {
    if (zr.has(r)) return zr.get(r);
    if (a) {
      var s = r,
        l = s.v;
      return (
        (((s.f & _t) === 0 && s.reactions !== null) || ns(s)) && (l = Po(s)),
        zr.set(s, l),
        l
      );
    }
  } else
    a &&
      (!Bt?.has(r) || (Ke?.is_fork && !Ka())) &&
      ((s = r), tn(s) && Ii(s), Kr && Ka() && (s.f & Gt) === 0 && as(s));
  if (Bt?.has(r)) return Bt.get(r);
  if ((r.f & Er) !== 0) throw r.v;
  return r.v;
}
function as(r) {
  if (r.deps !== null) {
    r.f ^= Gt;
    for (const e of r.deps)
      ((e.reactions ??= []).push(r),
        (e.f & bt) !== 0 && (e.f & Gt) === 0 && as(e));
  }
}
function ns(r) {
  if (r.v === vt) return !0;
  if (r.deps === null) return !1;
  for (const e of r.deps)
    if (zr.has(e) || ((e.f & bt) !== 0 && ns(e))) return !0;
  return !1;
}
function Jr(r) {
  var e = rr;
  try {
    return ((rr = !0), r());
  } finally {
    rr = e;
  }
}
const Wl = -7169;
function xt(r, e) {
  r.f = (r.f & Wl) | e;
}
function Zl(r) {
  return (
    r.endsWith("capture") &&
    r !== "gotpointercapture" &&
    r !== "lostpointercapture"
  );
}
const Xl = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart",
];
function Yl(r) {
  return Xl.includes(r);
}
const Jl = {
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback",
};
function Ql(r) {
  return ((r = r.toLowerCase()), Jl[r] ?? r);
}
const $l = ["touchstart", "touchmove"];
function eu(r) {
  return $l.includes(r);
}
const os = new Set(),
  fo = new Set();
function is(r, e, a, n = {}) {
  function o(i) {
    if ((n.capture || Ra.call(e, i), !i.cancelBubble))
      return ma(() => a?.call(this, i));
  }
  return (
    r.startsWith("pointer") || r.startsWith("touch") || r === "wheel"
      ? ar(() => {
          e.addEventListener(r, o, n);
        })
      : e.addEventListener(r, o, n),
    o
  );
}
function Ct(r, e, a, n, o) {
  var i = { capture: n, passive: o },
    s = is(r, e, a, i);
  (e === document.body ||
    e === window ||
    e === document ||
    e instanceof HTMLMediaElement) &&
    Qa(() => {
      e.removeEventListener(r, s, i);
    });
}
function it(r) {
  for (var e = 0; e < r.length; e++) os.add(r[e]);
  for (var a of fo) a(r);
}
let Zo = null;
function Ra(r) {
  var e = this,
    a = e.ownerDocument,
    n = r.type,
    o = r.composedPath?.() || [],
    i = o[0] || r.target;
  Zo = r;
  var s = 0,
    l = Zo === r && r.__root;
  if (l) {
    var u = o.indexOf(l);
    if (u !== -1 && (e === document || e === window)) {
      r.__root = e;
      return;
    }
    var f = o.indexOf(e);
    if (f === -1) return;
    u <= f && (s = u);
  }
  if (((i = o[s] || r.target), i !== e)) {
    Fr(r, "currentTarget", {
      configurable: !0,
      get() {
        return i || a;
      },
    });
    var h = Ue,
      y = Ve;
    (zt(null), Kt(null));
    try {
      for (var b, k = []; i !== null; ) {
        var C = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var x = i["__" + n];
          x != null && (!i.disabled || r.target === i) && x.call(i, r);
        } catch (g) {
          b ? k.push(g) : (b = g);
        }
        if (r.cancelBubble || C === e || C === null) break;
        i = C;
      }
      if (b) {
        for (let g of k)
          queueMicrotask(() => {
            throw g;
          });
        throw b;
      }
    } finally {
      ((r.__root = e), delete r.currentTarget, zt(h), Kt(y));
    }
  }
}
function Lo(r) {
  var e = document.createElement("template");
  return ((e.innerHTML = r.replaceAll("<!>", "<!---->")), e.content);
}
function pa(r, e) {
  var a = Ve;
  a.nodes === null && (a.nodes = { start: r, end: e, a: null, t: null });
}
function j(r, e) {
  var a = (e & ol) !== 0,
    n = (e & il) !== 0,
    o,
    i = !r.startsWith("<!>");
  return () => {
    o === void 0 && ((o = Lo(i ? r : "<!>" + r)), a || (o = tr(o)));
    var s = n || Ao ? document.importNode(o, !0) : o.cloneNode(!0);
    if (a) {
      var l = tr(s),
        u = s.lastChild;
      pa(l, u);
    } else pa(s, s);
    return s;
  };
}
function tu(r, e, a = "svg") {
  var n = !r.startsWith("<!>"),
    o = `<${a}>${n ? r : "<!>" + r}</${a}>`,
    i;
  return () => {
    if (!i) {
      var s = Lo(o),
        l = tr(s);
      i = tr(l);
    }
    var u = i.cloneNode(!0);
    return (pa(u, u), u);
  };
}
function ir(r, e) {
  return tu(r, e, "svg");
}
function Oe(r = "") {
  {
    var e = mr(r + "");
    return (pa(e, e), e);
  }
}
function Me() {
  var r = document.createDocumentFragment(),
    e = document.createComment(""),
    a = mr();
  return (r.append(e, a), pa(e, a), r);
}
function w(r, e) {
  r !== null && r.before(e);
}
let vo = !0;
function X(r, e) {
  var a = e == null ? "" : typeof e == "object" ? e + "" : e;
  a !== (r.__t ??= r.nodeValue) && ((r.__t = a), (r.nodeValue = a + ""));
}
function ru(r, e) {
  return au(r, e);
}
const oa = new Map();
function au(
  r,
  { target: e, anchor: a, props: n = {}, events: o, context: i, intro: s = !0 }
) {
  Nl();
  var l = new Set(),
    u = (y) => {
      for (var b = 0; b < y.length; b++) {
        var k = y[b];
        if (!l.has(k)) {
          l.add(k);
          var C = eu(k);
          e.addEventListener(k, Ra, { passive: C });
          var x = oa.get(k);
          x === void 0
            ? (document.addEventListener(k, Ra, { passive: C }), oa.set(k, 1))
            : oa.set(k, x + 1);
        }
      }
    };
  (u(xo(os)), fo.add(u));
  var f = void 0,
    h = Vl(() => {
      var y = a ?? e.appendChild(mr());
      return (
        Cl(y, { pending: () => {} }, (b) => {
          if (i) {
            Be({});
            var k = et;
            k.c = i;
          }
          (o && (n.$$events = o),
            (vo = s),
            (f = r(b, n) || {}),
            (vo = !0),
            i && Re());
        }),
        () => {
          for (var b of l) {
            e.removeEventListener(b, Ra);
            var k = oa.get(b);
            --k === 0
              ? (document.removeEventListener(b, Ra), oa.delete(b))
              : oa.set(b, k);
          }
          (fo.delete(u), y !== a && y.parentNode?.removeChild(y));
        }
      );
    });
  return (nu.set(f, h), f);
}
let nu = new WeakMap();
class Mo {
  anchor;
  #e = new Map();
  #t = new Map();
  #a = new Map();
  #r = new Set();
  #l = !0;
  constructor(e, a = !0) {
    ((this.anchor = e), (this.#l = a));
  }
  #o = () => {
    var e = Ke;
    if (this.#e.has(e)) {
      var a = this.#e.get(e),
        n = this.#t.get(a);
      if (n) (To(n), this.#r.delete(a));
      else {
        var o = this.#a.get(a);
        o &&
          (this.#t.set(a, o.effect),
          this.#a.delete(a),
          o.fragment.lastChild.remove(),
          this.anchor.before(o.fragment),
          (n = o.effect));
      }
      for (const [i, s] of this.#e) {
        if ((this.#e.delete(i), i === e)) break;
        const l = this.#a.get(s);
        l && (pt(l.effect), this.#a.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === a || this.#r.has(i)) continue;
        const l = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var f = document.createDocumentFragment();
            (Qi(s, f),
              f.append(mr()),
              this.#a.set(i, { effect: s, fragment: f }));
          } else pt(s);
          (this.#r.delete(i), this.#t.delete(i));
        };
        this.#l || !n ? (this.#r.add(i), ua(s, l, !1)) : l();
      }
    }
  };
  #n = (e) => {
    this.#e.delete(e);
    const a = Array.from(this.#e.values());
    for (const [n, o] of this.#a)
      a.includes(n) || (pt(o.effect), this.#a.delete(n));
  };
  ensure(e, a) {
    var n = Ke,
      o = Ui();
    if (a && !this.#t.has(e) && !this.#a.has(e))
      if (o) {
        var i = document.createDocumentFragment(),
          s = mr();
        (i.append(s), this.#a.set(e, { effect: At(() => a(s)), fragment: i }));
      } else
        this.#t.set(
          e,
          At(() => a(this.anchor))
        );
    if ((this.#e.set(n, e), o)) {
      for (const [l, u] of this.#t)
        l === e ? n.skipped_effects.delete(u) : n.skipped_effects.add(u);
      for (const [l, u] of this.#a)
        l === e
          ? n.skipped_effects.delete(u.effect)
          : n.skipped_effects.add(u.effect);
      (n.oncommit(this.#o), n.ondiscard(this.#n));
    } else this.#o();
  }
}
function Z(r, e, a = !1) {
  var n = new Mo(r),
    o = a ? Tr : 0;
  function i(s, l) {
    n.ensure(s, l);
  }
  en(() => {
    var s = !1;
    (e((l, u = !0) => {
      ((s = !0), i(u, l));
    }),
      s || i(!1, null));
  }, o);
}
function ou(r, e, a) {
  var n = new Mo(r),
    o = !ha();
  en(() => {
    var i = e();
    (o && i !== null && typeof i == "object" && (i = {}), n.ensure(i, a));
  });
}
function iu(r, e) {
  return e;
}
function su(r, e, a) {
  for (var n = [], o = e.length, i = 0; i < o; i++) Fo(e[i].e, n, !0);
  Yi(n, () => {
    var s = n.length === 0 && a !== null;
    if (s) {
      var l = a,
        u = l.parentNode;
      (Il(u), u.append(l), r.items.clear(), Ut(r, e[0].prev, e[o - 1].next));
    }
    for (var f = 0; f < o; f++) {
      var h = e[f];
      (s || (r.items.delete(h.k), Ut(r, h.prev, h.next)), pt(h.e, !s));
    }
    r.first === e[0] && (r.first = e[0].prev);
  });
}
function at(r, e, a, n, o, i = null) {
  var s = r,
    l = new Map(),
    u = null,
    f = (e & ki) !== 0,
    h = (e & wi) !== 0,
    y = (e & yi) !== 0;
  if (f) {
    var b = r;
    s = b.appendChild(mr());
  }
  var k = null,
    C = So(() => {
      var p = a();
      return _o(p) ? p : p == null ? [] : xo(p);
    }),
    x,
    g = !0;
  function c() {
    (lu(d, x, s, e, n),
      k !== null &&
        (x.length === 0
          ? (k.fragment
              ? (s.before(k.fragment), (k.fragment = null))
              : To(k.effect),
            (v.first = k.effect))
          : ua(k.effect, () => {
              k = null;
            })));
  }
  var v = en(() => {
      x = t(C);
      for (
        var p = x.length, S = new Set(), P = Ke, A = null, M = Ui(), F = 0;
        F < p;
        F += 1
      ) {
        var K = x[F],
          H = n(K, F),
          ie = g ? null : l.get(H);
        (ie
          ? (h && ga(ie.v, K),
            y && ga(ie.i, F),
            M && P.skipped_effects.delete(ie.e))
          : ((ie = uu(g ? s : null, A, K, H, F, o, e, a)),
            g && ((ie.o = !0), A === null ? (u = ie) : (A.next = ie), (A = ie)),
            l.set(H, ie)),
          S.add(H));
      }
      if (p === 0 && i && !k)
        if (g) k = { fragment: null, effect: At(() => i(s)) };
        else {
          var ce = document.createDocumentFragment(),
            he = mr();
          (ce.append(he), (k = { fragment: ce, effect: At(() => i(he)) }));
        }
      if (!g)
        if (M) {
          for (const [J, te] of l) S.has(J) || P.skipped_effects.add(te.e);
          (P.oncommit(c), P.ondiscard(() => {}));
        } else c();
      t(C);
    }),
    d = { effect: v, items: l, first: u };
  g = !1;
}
function lu(r, e, a, n, o) {
  var i = (n & Xs) !== 0,
    s = e.length,
    l = r.items,
    u = r.first,
    f,
    h = null,
    y,
    b = [],
    k = [],
    C,
    x,
    g,
    c;
  if (i)
    for (c = 0; c < s; c += 1)
      ((C = e[c]),
        (x = o(C, c)),
        (g = l.get(x)),
        g.o && (g.e.nodes?.a?.measure(), (y ??= new Set()).add(g)));
  for (c = 0; c < s; c += 1) {
    if (((C = e[c]), (x = o(C, c)), (g = l.get(x)), (r.first ??= g), !g.o)) {
      g.o = !0;
      var v = h ? h.next : u;
      (Ut(r, h, g),
        Ut(r, g, v),
        Yn(g, v, a),
        (h = g),
        (b = []),
        (k = []),
        (u = h.next));
      continue;
    }
    if (
      ((g.e.f & Nt) !== 0 &&
        (To(g.e), i && (g.e.nodes?.a?.unfix(), (y ??= new Set()).delete(g))),
      g !== u)
    ) {
      if (f !== void 0 && f.has(g)) {
        if (b.length < k.length) {
          var d = k[0],
            p;
          h = d.prev;
          var S = b[0],
            P = b[b.length - 1];
          for (p = 0; p < b.length; p += 1) Yn(b[p], d, a);
          for (p = 0; p < k.length; p += 1) f.delete(k[p]);
          (Ut(r, S.prev, P.next),
            Ut(r, h, S),
            Ut(r, P, d),
            (u = d),
            (h = P),
            (c -= 1),
            (b = []),
            (k = []));
        } else
          (f.delete(g),
            Yn(g, u, a),
            Ut(r, g.prev, g.next),
            Ut(r, g, h === null ? r.first : h.next),
            Ut(r, h, g),
            (h = g));
        continue;
      }
      for (b = [], k = []; u !== null && u !== g; )
        ((u.e.f & Nt) === 0 && (f ??= new Set()).add(u),
          k.push(u),
          (u = u.next));
      if (u === null) continue;
      g = u;
    }
    (b.push(g), (h = g), (u = g.next));
  }
  let A = l.size > s;
  if (u !== null || f !== void 0) {
    for (var M = f === void 0 ? [] : xo(f); u !== null; )
      ((u.e.f & Nt) === 0 && M.push(u), (u = u.next));
    var F = M.length;
    if (((A = l.size - F > s), F > 0)) {
      var K = (n & ki) !== 0 && s === 0 ? a : null;
      if (i) {
        for (c = 0; c < F; c += 1) M[c].e.nodes?.a?.measure();
        for (c = 0; c < F; c += 1) M[c].e.nodes?.a?.fix();
      }
      su(r, M, K);
    }
  }
  if (A) for (const H of l.values()) H.o || (Ut(r, h, H), (h = H));
  ((r.effect.last = h && h.e),
    i &&
      ar(() => {
        if (y !== void 0) for (g of y) g.e.nodes?.a?.apply();
      }));
}
function uu(r, e, a, n, o, i, s, l) {
  var u = (s & wi) !== 0,
    f = (s & Ys) === 0,
    h = u ? (f ? Oi(a, !1, !1) : Zr(a)) : a,
    y = (s & yi) === 0 ? o : Zr(o);
  xe &&
    u &&
    (h.trace = () => {
      var C = typeof y == "number" ? o : y.v;
      l()[C];
    });
  var b = { i: y, v: h, k: n, e: null, o: !1, prev: e, next: null };
  if (r === null) {
    var k = document.createDocumentFragment();
    k.append((r = mr()));
  }
  return ((b.e = At(() => i(r, h, y, l))), e !== null && (e.next = b), b);
}
function Yn(r, e, a) {
  if (r.e.nodes)
    for (
      var n = r.next ? r.next.e.nodes.start : a,
        o = e ? e.e.nodes.start : a,
        i = r.e.nodes.start;
      i !== null && i !== n;
    ) {
      var s = Ja(i);
      (o.before(i), (i = s));
    }
}
function Ut(r, e, a) {
  (e === null
    ? ((r.first = a), (r.effect.first = a && a.e))
    : (e.e.next && (e.e.next.prev = null), (e.next = a), (e.e.next = a && a.e)),
    a !== null &&
      (a.e.prev && (a.e.prev.next = null),
      (a.prev = e),
      (a.e.prev = e && e.e)));
}
function cu(r, e, a = !1, n = !1, o = !1) {
  var i = r,
    s = "";
  B(() => {
    var l = Ve;
    if (
      s !== (s = e() ?? "") &&
      (l.nodes !== null && (Zi(l.nodes.start, l.nodes.end), (l.nodes = null)),
      s !== "")
    ) {
      var u = s + "";
      a ? (u = `<svg>${u}</svg>`) : n && (u = `<math>${u}</math>`);
      var f = Lo(u);
      if (((a || n) && (f = tr(f)), pa(tr(f), f.lastChild), a || n))
        for (; tr(f); ) i.before(tr(f));
      else i.before(f);
    }
  });
}
function Je(r, e, ...a) {
  var n = new Mo(r);
  en(() => {
    const o = e() ?? null;
    (xe && o == null && Vs(), n.ensure(o, o && ((i) => o(i, ...a))));
  }, Tr);
}
const du = () => performance.now(),
  gr = {
    tick: (r) => requestAnimationFrame(r),
    now: () => du(),
    tasks: new Set(),
  };
function ss() {
  const r = gr.now();
  (gr.tasks.forEach((e) => {
    e.c(r) || (gr.tasks.delete(e), e.f());
  }),
    gr.tasks.size !== 0 && gr.tick(ss));
}
function fu(r) {
  let e;
  return (
    gr.tasks.size === 0 && gr.tick(ss),
    {
      promise: new Promise((a) => {
        gr.tasks.add((e = { c: r, f: a }));
      }),
      abort() {
        gr.tasks.delete(e);
      },
    }
  );
}
function fn(r, e) {
  ma(() => {
    r.dispatchEvent(new CustomEvent(e));
  });
}
function vu(r) {
  if (r === "float") return "cssFloat";
  if (r === "offset") return "cssOffset";
  if (r.startsWith("--")) return r;
  const e = r.split("-");
  return e.length === 1
    ? e[0]
    : e[0] +
        e
          .slice(1)
          .map((a) => a[0].toUpperCase() + a.slice(1))
          .join("");
}
function Xo(r) {
  const e = {},
    a = r.split(";");
  for (const n of a) {
    const [o, i] = n.split(":");
    if (!o || i === void 0) break;
    const s = vu(o.trim());
    e[s] = i.trim();
  }
  return e;
}
const gu = (r) => r;
function Yo(r, e, a, n) {
  var o = (r & rl) !== 0,
    i = (r & al) !== 0,
    s = o && i,
    l = (r & nl) !== 0,
    u = s ? "both" : o ? "in" : "out",
    f,
    h = e.inert,
    y = e.style.overflow,
    b,
    k;
  function C() {
    return ma(() => (f ??= a()(e, n?.() ?? {}, { direction: u })));
  }
  var x = {
      is_global: l,
      in() {
        if (((e.inert = h), !o)) {
          (k?.abort(), k?.reset?.());
          return;
        }
        (i || b?.abort(),
          fn(e, "introstart"),
          (b = go(e, C(), k, 1, () => {
            (fn(e, "introend"),
              b?.abort(),
              (b = f = void 0),
              (e.style.overflow = y));
          })));
      },
      out(d) {
        if (!i) {
          (d?.(), (f = void 0));
          return;
        }
        ((e.inert = !0),
          fn(e, "outrostart"),
          (k = go(e, C(), b, 0, () => {
            (fn(e, "outroend"), d?.());
          })));
      },
      stop: () => {
        (b?.abort(), k?.abort());
      },
    },
    g = Ve;
  if (((g.nodes.t ??= []).push(x), o && vo)) {
    var c = l;
    if (!c) {
      for (var v = g.parent; v && (v.f & Tr) !== 0; )
        for (; (v = v.parent) && (v.f & nr) === 0; );
      c = !v || (v.f & yn) !== 0;
    }
    c &&
      Pn(() => {
        Jr(() => x.in());
      });
  }
}
function go(r, e, a, n, o) {
  var i = n === 1;
  if (sa(e)) {
    var s,
      l = !1;
    return (
      ar(() => {
        if (!l) {
          var g = e({ direction: i ? "in" : "out" });
          s = go(r, g, a, n, o);
        }
      }),
      {
        abort: () => {
          ((l = !0), s?.abort());
        },
        deactivate: () => s.deactivate(),
        reset: () => s.reset(),
        t: () => s.t(),
      }
    );
  }
  if ((a?.deactivate(), !e?.duration))
    return (o(), { abort: Q, deactivate: Q, reset: Q, t: () => n });
  const { delay: u = 0, css: f, tick: h, easing: y = gu } = e;
  var b = [];
  if (i && a === void 0 && (h && h(0, 1), f)) {
    var k = Xo(f(0, 1));
    b.push(k, k);
  }
  var C = () => 1 - n,
    x = r.animate(b, { duration: u, fill: "forwards" });
  return (
    (x.onfinish = () => {
      x.cancel();
      var g = a?.t() ?? 1 - n;
      a?.abort();
      var c = n - g,
        v = e.duration * Math.abs(c),
        d = [];
      if (v > 0) {
        var p = !1;
        if (f)
          for (
            var S = Math.ceil(v / 16.666666666666668), P = 0;
            P <= S;
            P += 1
          ) {
            var A = g + c * y(P / S),
              M = Xo(f(A, 1 - A));
            (d.push(M), (p ||= M.overflow === "hidden"));
          }
        (p && (r.style.overflow = "hidden"),
          (C = () => {
            var F = x.currentTime;
            return g + c * y(F / v);
          }),
          h &&
            fu(() => {
              if (x.playState !== "running") return !1;
              var F = C();
              return (h(F, 1 - F), !0);
            }));
      }
      ((x = r.animate(d, { duration: v, fill: "forwards" })),
        (x.onfinish = () => {
          ((C = () => n), h?.(n, 1 - n), o());
        }));
    }),
    {
      abort: () => {
        x && (x.cancel(), (x.effect = null), (x.onfinish = Q));
      },
      deactivate: () => {
        o = Q;
      },
      reset: () => {
        n === 0 && h?.(1, 0);
      },
      t: () => C(),
    }
  );
}
function pu(r, e) {
  var a = void 0,
    n;
  Ki(() => {
    a !== (a = e()) &&
      (n && (pt(n), (n = null)),
      a &&
        (n = At(() => {
          Pn(() => a(r));
        })));
  });
}
function ls(r) {
  var e,
    a,
    n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var o = r.length;
      for (e = 0; e < o; e++)
        r[e] && (a = ls(r[e])) && (n && (n += " "), (n += a));
    } else for (a in r) r[a] && (n && (n += " "), (n += a));
  return n;
}
function bu() {
  for (var r, e, a = 0, n = "", o = arguments.length; a < o; a++)
    (r = arguments[a]) && (e = ls(r)) && (n && (n += " "), (n += e));
  return n;
}
function Y(r) {
  return typeof r == "object" ? bu(r) : (r ?? "");
}
const Jo = [
  ...` 	
\r\f \v\uFEFF`,
];
function hu(r, e, a) {
  var n = r == null ? "" : "" + r;
  if ((e && (n = n ? n + " " + e : e), a)) {
    for (var o in a)
      if (a[o]) n = n ? n + " " + o : o;
      else if (n.length)
        for (var i = o.length, s = 0; (s = n.indexOf(o, s)) >= 0; ) {
          var l = s + i;
          (s === 0 || Jo.includes(n[s - 1])) &&
          (l === n.length || Jo.includes(n[l]))
            ? (n = (s === 0 ? "" : n.substring(0, s)) + n.substring(l + 1))
            : (s = l);
        }
  }
  return n === "" ? null : n;
}
function Qo(r, e = !1) {
  var a = e ? " !important;" : ";",
    n = "";
  for (var o in r) {
    var i = r[o];
    i != null && i !== "" && (n += " " + o + ": " + i + a);
  }
  return n;
}
function Jn(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function mu(r, e) {
  if (e) {
    var a = "",
      n,
      o;
    if ((Array.isArray(e) ? ((n = e[0]), (o = e[1])) : (n = e), r)) {
      r = String(r)
        .replaceAll(/\s*\/\*.*?\*\/\s*/g, "")
        .trim();
      var i = !1,
        s = 0,
        l = !1,
        u = [];
      (n && u.push(...Object.keys(n).map(Jn)),
        o && u.push(...Object.keys(o).map(Jn)));
      var f = 0,
        h = -1;
      const x = r.length;
      for (var y = 0; y < x; y++) {
        var b = r[y];
        if (
          (l
            ? b === "/" && r[y - 1] === "*" && (l = !1)
            : i
              ? i === b && (i = !1)
              : b === "/" && r[y + 1] === "*"
                ? (l = !0)
                : b === '"' || b === "'"
                  ? (i = b)
                  : b === "("
                    ? s++
                    : b === ")" && s--,
          !l && i === !1 && s === 0)
        ) {
          if (b === ":" && h === -1) h = y;
          else if (b === ";" || y === x - 1) {
            if (h !== -1) {
              var k = Jn(r.substring(f, h).trim());
              if (!u.includes(k)) {
                b !== ";" && y++;
                var C = r.substring(f, y).trim();
                a += " " + C + ";";
              }
            }
            ((f = y + 1), (h = -1));
          }
        }
      }
    }
    return (
      n && (a += Qo(n)),
      o && (a += Qo(o, !0)),
      (a = a.trim()),
      a === "" ? null : a
    );
  }
  return r == null ? null : String(r);
}
function q(r, e, a, n, o, i) {
  var s = r.__className;
  if (s !== a || s === void 0) {
    var l = hu(a, n, i);
    (l == null
      ? r.removeAttribute("class")
      : e
        ? (r.className = l)
        : r.setAttribute("class", l),
      (r.__className = a));
  } else if (i && o !== i)
    for (var u in i) {
      var f = !!i[u];
      (o == null || f !== !!o[u]) && r.classList.toggle(u, f);
    }
  return i;
}
function Qn(r, e = {}, a, n) {
  for (var o in a) {
    var i = a[o];
    e[o] !== i &&
      (a[o] == null ? r.style.removeProperty(o) : r.style.setProperty(o, i, n));
  }
}
function gt(r, e, a, n) {
  var o = r.__style;
  if (o !== e) {
    var i = mu(e, n);
    (i == null ? r.removeAttribute("style") : (r.style.cssText = i),
      (r.__style = e));
  } else
    n &&
      (Array.isArray(n)
        ? (Qn(r, a?.[0], n[0]), Qn(r, a?.[1], n[1], "important"))
        : Qn(r, a, n));
  return n;
}
function po(r, e, a = !1) {
  if (r.multiple) {
    if (e == null) return;
    if (!_o(e)) return cl();
    for (var n of r.options) n.selected = e.includes($o(n));
    return;
  }
  for (n of r.options) {
    var o = $o(n);
    if (ji(o, e)) {
      n.selected = !0;
      return;
    }
  }
  (!a || e !== void 0) && (r.selectedIndex = -1);
}
function _u(r) {
  var e = new MutationObserver(() => {
    po(r, r.__value);
  });
  (e.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"],
  }),
    Qa(() => {
      e.disconnect();
    }));
}
function $o(r) {
  return "__value" in r ? r.__value : r.value;
}
const Oa = Symbol("class"),
  Ba = Symbol("style"),
  us = Symbol("is custom element"),
  cs = Symbol("is html");
function ds(r, e) {
  var a = Do(r);
  a.value === (a.value = e ?? void 0) ||
    (r.value === e && (e !== 0 || r.nodeName !== "PROGRESS")) ||
    (r.value = e ?? "");
}
function xu(r, e) {
  e
    ? r.hasAttribute("selected") || r.setAttribute("selected", "")
    : r.removeAttribute("selected");
}
function we(r, e, a, n) {
  var o = Do(r);
  o[e] !== (o[e] = a) &&
    (e === "loading" && (r[Ms] = a),
    a == null
      ? r.removeAttribute(e)
      : typeof a != "string" && fs(r).includes(e)
        ? (r[e] = a)
        : r.setAttribute(e, a));
}
function wu(r, e, a, n, o = !1, i = !1) {
  var s = Do(r),
    l = s[us],
    u = !s[cs],
    f = e || {},
    h = r.tagName === "OPTION";
  for (var y in e) y in a || (a[y] = null);
  (a.class ? (a.class = Y(a.class)) : (n || a[Oa]) && (a.class = null),
    a[Ba] && (a.style ??= null));
  var b = fs(r);
  for (const p in a) {
    let S = a[p];
    if (h && p === "value" && S == null) {
      ((r.value = r.__value = ""), (f[p] = S));
      continue;
    }
    if (p === "class") {
      var k = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      (q(r, k, S, n, e?.[Oa], a[Oa]), (f[p] = S), (f[Oa] = a[Oa]));
      continue;
    }
    if (p === "style") {
      (gt(r, S, e?.[Ba], a[Ba]), (f[p] = S), (f[Ba] = a[Ba]));
      continue;
    }
    var C = f[p];
    if (!(S === C && !(S === void 0 && r.hasAttribute(p)))) {
      f[p] = S;
      var x = p[0] + p[1];
      if (x !== "$$")
        if (x === "on") {
          const P = {},
            A = "$$" + p;
          let M = p.slice(2);
          var g = Yl(M);
          if ((Zl(M) && ((M = M.slice(0, -7)), (P.capture = !0)), !g && C)) {
            if (S != null) continue;
            (r.removeEventListener(M, f[A], P), (f[A] = null));
          }
          if (S != null)
            if (g) ((r[`__${M}`] = S), it([M]));
            else {
              let F = function (K) {
                f[p].call(this, K);
              };
              var d = F;
              f[A] = is(M, r, F, P);
            }
          else g && (r[`__${M}`] = void 0);
        } else if (p === "style") we(r, p, S);
        else if (p === "autofocus") Ol(r, !!S);
        else if (!l && (p === "__value" || (p === "value" && S != null)))
          r.value = r.__value = S;
        else if (p === "selected" && h) xu(r, S);
        else {
          var c = p;
          u || (c = Ql(c));
          var v = c === "defaultValue" || c === "defaultChecked";
          if (S == null && !l && !v)
            if (((s[p] = null), c === "value" || c === "checked")) {
              let P = r;
              const A = e === void 0;
              if (c === "value") {
                let M = P.defaultValue;
                (P.removeAttribute(c),
                  (P.defaultValue = M),
                  (P.value = P.__value = A ? M : null));
              } else {
                let M = P.defaultChecked;
                (P.removeAttribute(c),
                  (P.defaultChecked = M),
                  (P.checked = A ? M : !1));
              }
            } else r.removeAttribute(p);
          else
            v || (b.includes(c) && (l || typeof S != "string"))
              ? ((r[c] = S), c in s && (s[c] = vt))
              : typeof S != "function" && we(r, c, S);
        }
    }
  }
  return f;
}
function wt(r, e, a = [], n = [], o = [], i, s = !1, l = !1) {
  Ni(o, a, n, (u) => {
    var f = void 0,
      h = {},
      y = r.nodeName === "SELECT",
      b = !1;
    if (
      (Ki(() => {
        var C = e(...u.map(t)),
          x = wu(r, f, C, i, s, l);
        b && y && "value" in C && po(r, C.value);
        for (let c of Object.getOwnPropertySymbols(h)) C[c] || pt(h[c]);
        for (let c of Object.getOwnPropertySymbols(C)) {
          var g = C[c];
          (c.description === ul &&
            (!f || g !== f[c]) &&
            (h[c] && pt(h[c]), (h[c] = At(() => pu(r, () => g)))),
            (x[c] = g));
        }
        f = x;
      }),
      y)
    ) {
      var k = r;
      Pn(() => {
        (po(k, f.value, !0), _u(k));
      });
    }
    b = !0;
  });
}
function Do(r) {
  return (r.__attributes ??= {
    [us]: r.nodeName.includes("-"),
    [cs]: r.namespaceURI === ll,
  });
}
var ei = new Map();
function fs(r) {
  var e = r.getAttribute("is") || r.nodeName,
    a = ei.get(e);
  if (a) return a;
  ei.set(e, (a = []));
  for (var n, o = r, i = Element.prototype; i !== o; ) {
    n = As(o);
    for (var s in n) n[s].set && a.push(s);
    o = pi(o);
  }
  return a;
}
function yu(r, e, a = e) {
  var n = new WeakSet();
  (zo(r, "input", async (o) => {
    xe && r.type === "checkbox" && Vo();
    var i = o ? r.defaultValue : r.value;
    if (
      ((i = eo(r) ? to(i) : i),
      a(i),
      Ke !== null && n.add(Ke),
      await Gl(),
      i !== (i = e()))
    ) {
      var s = r.selectionStart,
        l = r.selectionEnd,
        u = r.value.length;
      if (((r.value = i ?? ""), l !== null)) {
        var f = r.value.length;
        s === l && l === u && f > u
          ? ((r.selectionStart = f), (r.selectionEnd = f))
          : ((r.selectionStart = s), (r.selectionEnd = Math.min(l, f)));
      }
    }
  }),
    Jr(e) == null &&
      r.value &&
      (a(eo(r) ? to(r.value) : r.value), Ke !== null && n.add(Ke)),
    $a(() => {
      xe && r.type === "checkbox" && Vo();
      var o = e();
      if (r === document.activeElement) {
        var i = gn ?? Ke;
        if (n.has(i)) return;
      }
      (eo(r) && o === to(r.value)) ||
        (r.type === "date" && !o && !r.value) ||
        (o !== r.value && (r.value = o ?? ""));
    }));
}
const $n = new Set();
function ku(r, e, a, n, o = n) {
  var i = a.getAttribute("type") === "checkbox",
    s = r;
  if (e !== null) for (var l of e) s = s[l] ??= [];
  (s.push(a),
    zo(
      a,
      "change",
      () => {
        var u = a.__value;
        (i && (u = Su(s, u, a.checked)), o(u));
      },
      () => o(i ? [] : null)
    ),
    $a(() => {
      var u = n();
      i
        ? ((u = u || []), (a.checked = u.includes(a.__value)))
        : (a.checked = ji(a.__value, u));
    }),
    Qa(() => {
      var u = s.indexOf(a);
      u !== -1 && s.splice(u, 1);
    }),
    $n.has(s) ||
      ($n.add(s),
      ar(() => {
        (s.sort((u, f) => (u.compareDocumentPosition(f) === 4 ? -1 : 1)),
          $n.delete(s));
      })),
    ar(() => {}));
}
function Cu(r, e, a = e) {
  (zo(r, "change", (n) => {
    var o = n ? r.defaultChecked : r.checked;
    a(o);
  }),
    Jr(e) == null && a(r.checked),
    $a(() => {
      var n = e();
      r.checked = !!n;
    }));
}
function Su(r, e, a) {
  for (var n = new Set(), o = 0; o < r.length; o += 1)
    r[o].checked && n.add(r[o].__value);
  return (a || n.delete(e), Array.from(n));
}
function eo(r) {
  var e = r.type;
  return e === "number" || e === "range";
}
function to(r) {
  return r === "" ? null : +r;
}
function ti(r, e) {
  return r === e || r?.[Ar] === e;
}
function ot(r = {}, e, a, n) {
  return (
    Pn(() => {
      var o, i;
      return (
        $a(() => {
          ((o = i),
            (i = n?.() || []),
            Jr(() => {
              r !== a(...i) &&
                (e(r, ...i), o && ti(a(...o), r) && e(null, ...o));
            }));
        }),
        () => {
          ar(() => {
            i && ti(a(...i), r) && e(null, ...i);
          });
        }
      );
    }),
    r
  );
}
function vs(r, e, a) {
  if (r == null) return (e(void 0), Q);
  const n = Jr(() => r.subscribe(e, a));
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const ia = [];
function Pu(r, e = Q) {
  let a = null;
  const n = new Set();
  function o(l) {
    if (Si(r, l) && ((r = l), a)) {
      const u = !ia.length;
      for (const f of n) (f[1](), ia.push(f, r));
      if (u) {
        for (let f = 0; f < ia.length; f += 2) ia[f][0](ia[f + 1]);
        ia.length = 0;
      }
    }
  }
  function i(l) {
    o(l(r));
  }
  function s(l, u = Q) {
    const f = [l, u];
    return (
      n.add(f),
      n.size === 1 && (a = e(o, i) || Q),
      l(r),
      () => {
        (n.delete(f), n.size === 0 && a && (a(), (a = null)));
      }
    );
  }
  return { set: o, update: i, subscribe: s };
}
function Eu(r) {
  let e;
  return (vs(r, (a) => (e = a))(), e);
}
let vn = !1,
  bo = Symbol();
function Au(r, e, a) {
  const n = (a[e] ??= { store: null, source: Oi(void 0), unsubscribe: Q });
  if ((xe && (n.source.label = e), n.store !== r && !(bo in a)))
    if ((n.unsubscribe(), (n.store = r ?? null), r == null))
      ((n.source.v = void 0), (n.unsubscribe = Q));
    else {
      var o = !0;
      ((n.unsubscribe = vs(r, (i) => {
        o ? (n.source.v = i) : z(n.source, i);
      })),
        (o = !1));
    }
  return r && bo in a ? Eu(r) : t(n.source);
}
function zu() {
  const r = {};
  function e() {
    Qa(() => {
      for (var a in r) r[a].unsubscribe();
      Fr(r, bo, { enumerable: !1, value: !0 });
    });
  }
  return [r, e];
}
function Fu(r) {
  var e = vn;
  try {
    return ((vn = !1), [r(), vn]);
  } finally {
    vn = e;
  }
}
const Tu = {
  get(r, e) {
    if (!r.exclude.includes(e)) return r.props[e];
  },
  set(r, e) {
    return (xe && Us(`${r.name}.${String(e)}`), !1);
  },
  getOwnPropertyDescriptor(r, e) {
    if (!r.exclude.includes(e) && e in r.props)
      return { enumerable: !0, configurable: !0, value: r.props[e] };
  },
  has(r, e) {
    return r.exclude.includes(e) ? !1 : e in r.props;
  },
  ownKeys(r) {
    return Reflect.ownKeys(r.props).filter((e) => !r.exclude.includes(e));
  },
};
function St(r, e, a) {
  return new Proxy(
    xe
      ? { props: r, exclude: e, name: a, other: {}, to_proxy: [] }
      : { props: r, exclude: e },
    Tu
  );
}
const Lu = {
  get(r, e) {
    let a = r.props.length;
    for (; a--; ) {
      let n = r.props[a];
      if ((sa(n) && (n = n()), typeof n == "object" && n !== null && e in n))
        return n[e];
    }
  },
  set(r, e, a) {
    let n = r.props.length;
    for (; n--; ) {
      let o = r.props[n];
      sa(o) && (o = o());
      const i = pr(o, e);
      if (i && i.set) return (i.set(a), !0);
    }
    return !1;
  },
  getOwnPropertyDescriptor(r, e) {
    let a = r.props.length;
    for (; a--; ) {
      let n = r.props[a];
      if ((sa(n) && (n = n()), typeof n == "object" && n !== null && e in n)) {
        const o = pr(n, e);
        return (o && !o.configurable && (o.configurable = !0), o);
      }
    }
  },
  has(r, e) {
    if (e === Ar || e === _i) return !1;
    for (let a of r.props)
      if ((sa(a) && (a = a()), a != null && e in a)) return !0;
    return !1;
  },
  ownKeys(r) {
    const e = [];
    for (let a of r.props)
      if ((sa(a) && (a = a()), !!a)) {
        for (const n in a) e.includes(n) || e.push(n);
        for (const n of Object.getOwnPropertySymbols(a))
          e.includes(n) || e.push(n);
      }
    return e;
  },
};
function Mu(...r) {
  return new Proxy({ props: r }, Lu);
}
function T(r, e, a, n) {
  var o = !Xa || (a & Qs) !== 0,
    i = (a & el) !== 0,
    s = (a & tl) !== 0,
    l = n,
    u = !0,
    f = () => (u && ((u = !1), (l = s ? Jr(n) : n)), l),
    h;
  if (i) {
    var y = Ar in r || _i in r;
    h = pr(r, e)?.set ?? (y && e in r ? (d) => (r[e] = d) : void 0);
  }
  var b,
    k = !1;
  (i ? ([b, k] = Fu(() => r[e])) : (b = r[e]),
    b === void 0 && n !== void 0 && ((b = f()), h && (o && qs(e), h(b))));
  var C;
  if (
    (o
      ? (C = () => {
          var d = r[e];
          return d === void 0 ? f() : ((u = !0), d);
        })
      : (C = () => {
          var d = r[e];
          return (d !== void 0 && (l = void 0), d === void 0 ? l : d);
        }),
    o && (a & $s) === 0)
  )
    return C;
  if (h) {
    var x = r.$$legacy;
    return function (d, p) {
      return arguments.length > 0
        ? ((!o || !p || x || k) && h(p ? C() : d), d)
        : C();
    };
  }
  var g = !1,
    c = ((a & Js) !== 0 ? Sn : So)(() => ((g = !1), C()));
  (xe && (c.label = e), i && t(c));
  var v = Ve;
  return function (d, p) {
    if (arguments.length > 0) {
      const S = p ? t(c) : o && i ? Ye(d) : d;
      return (z(c, S), (g = !0), l !== void 0 && (l = S), d);
    }
    return (Yr && g) || (v.f & br) !== 0 ? c.v : t(c);
  };
}
if (xe) {
  let r = function (e) {
    if (!(e in globalThis)) {
      let a;
      Object.defineProperty(globalThis, e, {
        configurable: !0,
        get: () => {
          if (a !== void 0) return a;
          Hs(e);
        },
        set: (n) => {
          a = n;
        },
      });
    }
  };
  var fv = r;
  (r("$state"),
    r("$effect"),
    r("$derived"),
    r("$inspect"),
    r("$props"),
    r("$bindable"));
}
const Du = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set()).add(Du);
const Nu = {
    app: {
      version: "v1.0.2",
      title: "Svelte 5 UI Components",
      footer: "© 2025 MaestroFusion360",
      authorUrl: "https://github.com/MaestroFusion360/svelte-comp",
      language: {
        label: "Language",
        options: [
          { label: "English", value: "en" },
          { label: "Russian", value: "ru" },
          { label: "Spanish", value: "es" },
        ],
      },
    },
    pageLabels: {
      about: "About",
      accordion: "Accordion",
      button: "Button",
      card: "Card",
      carousel: "Carousel",
      checkbox: "CheckBox",
      codeView: "Code View",
      colorPicker: "Color Picker",
      datePicker: "Date Picker",
      dialog: "Dialog",
      field: "Field",
      filePicker: "File Picker",
      form: "Form",
      menu: "Menu",
      notepad: "Notepad",
      progressBar: "ProgressBar",
      radio: "Radio",
      select: "Select",
      slider: "Slider",
      splitter: "Splitter",
      switch: "Switch",
      tablePagination: "Table & Pagination",
      tabs: "Tabs",
      themeToggle: "Theme Toggle",
      timePicker: "Time Picker",
      toast: "Toast",
    },
    about: {
      heading: "About",
      meta: "Project Info",
      intro: {
        description:
          " is a clean, themeable, and fully typed component library built with ",
        frameworks: { runes: "Svelte 5 (Runes API)", tailwind: "TailwindCSS" },
        connector: " and ",
        closing: ".",
      },
      styling: {
        beforeFile: "Components are styled using CSS variables defined in ",
        file: "src/app.css",
        afterFile:
          ", making theme customization easy and consistent. Dark mode is enabled globally by adding the ",
        darkClass: ".dark",
        afterDark: " class to the document root.",
      },
      patterns:
        "The library demonstrates practical UI patterns such as responsive cards, interactive forms, dialogs, and data tables, following a unified design system for modern Svelte projects.",
      versionLabel: "Version",
      authorLabel: "Author",
      authorName: "MaestroFusion360",
    },
    states: { emptyPreview: "No preview available" },
    options: {
      selectCountries: [
        { label: "Great Britain", value: "en" },
        { label: "Russia", value: "ru" },
        { label: "Spain", value: "es" },
      ],
      formGender: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],
      formCountries: [
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "uk", label: "United Kingdom" },
        { value: "au", label: "Australia" },
      ],
    },
    form: {
      header: "Registration form",
      footer: { cancel: "Cancel", submit: "Submit", random: "Random" },
      fields: {
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm password",
        age: "Age",
        gender: "Gender",
        country: "Country",
        about: "About yourself",
        newsletter: "Subscribe to newsletter",
        tos: "Accept terms and conditions",
      },
      validators: {
        passwordLength: "Minimum 6 characters",
        passwordMatch: "Passwords do not match",
        adultsOnly: "Adults only",
      },
    },
    table: {
      positionPrefix: "Position",
      columns: { id: "ID", item: "Product", qty: "Quantity", price: "Price" },
    },
    toasts: {
      confirmTitle: "Action Confirmed",
      confirmMessage: "Your action was successfully completed!",
      cancelTitle: "Action Cancelled",
      cancelMessage: "You cancelled the action.",
    },
    menuDemo: {
      menus: { file: "File", edit: "Edit", view: "View" },
      actions: {
        new: "New",
        open: "Open",
        save: "Save",
        export: "Export",
        exportCsv: "CSV",
        exportPdf: "PDF",
        exportZip: "ZIP archive",
        close: "Close",
        undo: "Undo",
        redo: "Redo",
        cut: "Cut",
        copy: "Copy",
        paste: "Paste",
        find: "Find",
        findNext: "Find Next",
        findPrev: "Find Previous",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
      },
      prompt: "Pick any menu item or use keyboard arrows/Enter/Esc",
      fallbackLabel: "unknown",
    },
    notepad: {
      menu: {
        file: "File",
        edit: "Edit",
        view: "View",
        language: "Language",
        help: "Help",
        settings: "Settings",
      },
      actions: {
        new: "New",
        open: "Open",
        save: "Save",
        undo: "Undo",
        redo: "Redo",
        cut: "Cut",
        copy: "Copy",
        paste: "Paste",
        about: "About",
        statusBar: "Status bar",
        options: "Options",
        xs: "XS",
        sm: "SM",
        md: "MD",
        lg: "LG",
        xl: "XL",
      },
      confirmNew: "Clear the current note?",
      openError: "Unable to open the file",
      saveError: "Unable to save the file",
      cutError: "Unable to cut selection",
      copyError: "Unable to copy selection",
      pasteError: "Unable to paste",
      undoError: "Nothing to undo",
      redoError: "Nothing to redo",
      aboutText:
        "Simple notepad demo with menu actions and syntax highlighting.",
      optionsText: "Change appearance options such as status bar visibility.",
    },
    components: {
      codeView: { subtitle: "Display code snippets" },
      colorPicker: {
        label: "Choose color",
        placeholder: "No color selected",
        subtitle: "Pick a brand color",
      },
      datePicker: {
        label: "Choose date",
        placeholder: "No date selected",
        subtitle: "Schedule important dates",
      },
      dialog: { ok: "OK", cancel: "Cancel" },
      filePicker: { label: "Choose files", subtitle: "Upload interactions" },
      menu: { subtitle: "Menu with size options" },
      timePicker: {
        label: "Choose time",
        placeholder: "No time selected",
        subtitle: "Plan sessions",
      },
    },
    playground: {
      controls: {
        size: "Size",
        variant: "Variant",
        label: "Label",
        disabled: "Disabled",
        fieldType: "Field type",
        sliderShowValue: "Value",
        playcardLabel: "Label",
        playcardSubtitle: "Component preview",
      },
    },
    snippets: {
      about: {
        description:
          "Cards are flexible containers used to group related content. Use the size control above to preview padding and typography changes.",
        helper:
          "They accept header and footer snippets so you can compose toolbars, badges, or any custom markup.",
      },
      card: {
        header: "Feature Overview",
        updated: "Updated just now",
        docsLink: "View Docs",
      },
      accordion: {
        items: [
          { title: "First", content: "This is the first item" },
          { title: "Second", content: "This is the second item" },
          { title: "Third", content: "This is the third item" },
        ],
      },
      carousel: {
        slides: [
          {
            title: "First Slide",
            content: "This is the first slide content",
            image: "https://picsum.photos/800/400?1",
          },
          {
            title: "Second Slide",
            content: "This is the second slide content",
            image: "https://picsum.photos/800/400?2",
          },
          {
            title: "Third Slide",
            content: "This is the third slide content",
            image: "https://picsum.photos/800/400?3",
          },
        ],
      },
      dialog: {
        button: "Open Dialog",
        confirm: "Are you sure you want to continue?",
        title: "Dialog",
        subtitle: "Modal interactions",
      },
      toast: { buttonPrefix: "Show ", subtitle: "Notification toasts" },
      field: {
        text: "Text Field",
        number: "Number Field",
        textarea: "Textarea Field",
        placeholder: "0",
        subtitle: "Sizes and variants",
      },
      tabs: {
        labels: ["One", "Two", "Three"],
        contents: ["One content", "Two content", "Three content"],
        subtitle: "Different styles",
      },
      select: { label: "Country", subtitle: "Sizes and variants" },
      switch: { subtitle: "Sizes", labelPrefix: "Switch" },
      slider: { subtitle: "Sizes and variants", fallbackLabel: "slider" },
      splitter: { subtitle: "Resizable panels" },
      progressBar: { subtitle: "Sizes and variants" },
      radio: {
        subtitle: "Sizes and variants",
        apple: "Apple",
        banana: "Banana",
        cherry: "Cherry",
      },
      tablePagination: { subtitle: "Paginated data table" },
      button: { subtitle: "Variants and sizes" },
      checkbox: { subtitle: "Variants and sizes" },
      cardSnippet: { subtitle: "Layouts and content blocks" },
      accordionPlay: { subtitle: "Expand and collapse sections" },
      carouselPlay: { subtitle: "Slide transitions" },
      themeToggle: {
        subtitle: "System and manual themes",
        defaultLabel: "Theme toggle",
      },
      unknown: {
        component: "Unknown",
        title: "Unknown",
        subtitle: "No demo available",
      },
    },
  },
  Iu = {
    app: {
      version: "v1.0.2",
      title: "Svelte 5 UI Components",
      footer: "© 2025 MaestroFusion360",
      authorUrl: "https://github.com/MaestroFusion360/svelte-comp",
      language: {
        label: "Язык",
        options: [
          { label: "Английский", value: "en" },
          { label: "Русский", value: "ru" },
          { label: "Испанский", value: "es" },
        ],
      },
    },
    pageLabels: {
      about: "О проекте",
      accordion: "Аккордеон",
      button: "Кнопка",
      card: "Карточка",
      carousel: "Карусель",
      checkbox: "Чекбокс",
      codeView: "Просмотр кода",
      colorPicker: "Выбор цвета",
      datePicker: "Выбор даты",
      dialog: "Диалог",
      field: "Поле ввода",
      filePicker: "Загрузка файлов",
      form: "Форма",
      menu: "Меню",
      notepad: "Блокнот",
      progressBar: "Прогресс-бар",
      radio: "Радио-кнопки",
      select: "Выпадающий список",
      slider: "Ползунок",
      splitter: "Сплиттер",
      switch: "Переключатель",
      tablePagination: "Таблица и пагинация",
      tabs: "Вкладки",
      themeToggle: "Переключатель темы",
      timePicker: "Выбор времени",
      toast: "Уведомления",
    },
    about: {
      heading: "О библиотеке",
      meta: "Информация о проекте",
      intro: {
        description:
          " — это аккуратная настраиваемая и полностью типизированная библиотека компонентов, построенная на ",
        frameworks: { runes: "Svelte 5 (Runes API)", tailwind: "TailwindCSS" },
        connector: " и ",
        closing: ".",
      },
      styling: {
        beforeFile:
          "Компоненты стилизуются через CSS переменные, определённые в ",
        file: "src/app.css",
        afterFile:
          ", что упрощает и унифицирует смену темы. Тёмная тема включается глобально добавлением класса ",
        darkClass: ".dark",
        afterDark: " к корневому элементу документа.",
      },
      patterns:
        "Библиотека показывает практические паттерны интерфейса: адаптивные карточки, интерактивные формы, диалоги и таблицы данных в рамках единой дизайн системы для современных Svelte проектов.",
      versionLabel: "Версия",
      authorLabel: "Автор",
      authorName: "MaestroFusion360",
    },
    states: { emptyPreview: "Нет предпросмотра" },
    options: {
      selectCountries: [
        { label: "Россия", value: "ru" },
        { label: "США", value: "us" },
        { label: "Германия", value: "de" },
      ],
      formGender: [
        { value: "male", label: "Мужчина" },
        { value: "female", label: "Женщина" },
        { value: "other", label: "Другое" },
      ],
      formCountries: [
        { value: "us", label: "США" },
        { value: "ca", label: "Канада" },
        { value: "uk", label: "Великобритания" },
        { value: "au", label: "Австралия" },
      ],
    },
    form: {
      header: "Форма регистрации",
      footer: { cancel: "Отмена", submit: "Отправить", random: "Рандом" },
      fields: {
        firstName: "Имя",
        lastName: "Фамилия",
        email: "Email",
        password: "Пароль",
        confirmPassword: "Подтверждение пароля",
        age: "Возраст",
        gender: "Пол",
        country: "Страна",
        about: "О себе",
        newsletter: "Подписаться на рассылку",
        tos: "Принять условия использования",
      },
      validators: {
        passwordLength: "Минимум 6 символов",
        passwordMatch: "Пароли не совпадают",
        adultsOnly: "Только для совершеннолетних",
      },
    },
    table: {
      positionPrefix: "Позиция",
      columns: { id: "ID", item: "Товар", qty: "Количество", price: "Цена" },
    },
    toasts: {
      confirmTitle: "Действие выполнено",
      confirmMessage: "Ваше действие успешно завершено.",
      cancelTitle: "Действие отменено",
      cancelMessage: "Вы отменили действие.",
    },
    menuDemo: {
      menus: { file: "Файл", edit: "Правка", view: "Вид" },
      actions: {
        new: "Новый",
        open: "Открыть",
        save: "Сохранить",
        export: "Экспорт",
        exportCsv: "CSV",
        exportPdf: "PDF",
        exportZip: "ZIP-архив",
        close: "Закрыть",
        undo: "Отменить",
        redo: "Повторить",
        cut: "Вырезать",
        copy: "Копировать",
        paste: "Вставить",
        find: "Найти",
        findNext: "Найти далее",
        findPrev: "Найти назад",
        theme: "Тема",
        light: "Светлая",
        dark: "Тёмная",
      },
      prompt: "Выберите пункт меню или используйте стрелки/Enter/Esc",
      fallbackLabel: "неизвестно",
    },
    notepad: {
      menu: {
        file: "Файл",
        edit: "Правка",
        view: "Вид",
        language: "Язык",
        help: "Справка",
        settings: "Настройки",
      },
      actions: {
        new: "Новый",
        open: "Открыть",
        save: "Сохранить",
        undo: "Отменить",
        redo: "Повторить",
        cut: "Вырезать",
        copy: "Копировать",
        paste: "Вставить",
        about: "О программе",
        statusBar: "Строка состояния",
        options: "Параметры",
        xs: "XS",
        sm: "SM",
        md: "MD",
        lg: "LG",
        xl: "XL",
      },
      confirmNew: "Очистить текущую заметку?",
      openError: "Не удалось открыть файл",
      saveError: "Не удалось сохранить файл",
      cutError: "Не удалось вырезать",
      copyError: "Не удалось скопировать",
      pasteError: "Не удалось вставить",
      undoError: "Нечего отменять",
      redoError: "Нечего повторять",
      aboutText: "Простой пример блокнота с меню и подсветкой синтаксиса.",
      optionsText: "Настройте внешний вид, например строку состояния.",
    },
    components: {
      codeView: { subtitle: "Отображение фрагментов кода" },
      colorPicker: {
        label: "Выберете цвет",
        subtitle: "Выбор фирменного цвета",
        placeholder: "Цвет не выбран",
      },
      datePicker: {
        label: "Выбрать дату",
        subtitle: "Планирование важных дат",
        placeholder: "Дата не выбрана",
      },
      dialog: { ok: "ОК", cancel: "Отмена" },
      filePicker: {
        label: "Выбрать файлы",
        subtitle: "Загрузка файлов",
        placeholder: "Файлы не выбраны",
      },
      menu: { subtitle: "Меню с опциями размеров" },
      timePicker: {
        label: "Выберите время",
        subtitle: "Планирование сессий",
        placeholder: "Время не выбрано",
      },
    },
    playground: {
      controls: {
        size: "Размер",
        variant: "Вариант",
        label: "Подпись",
        disabled: "Отключено",
        fieldType: "Тип поля",
        sliderShowValue: "Значение",
        playcardLabel: "Подпись",
        playcardSubtitle: "Превью компонента",
      },
    },
    snippets: {
      about: {
        description:
          "Карточки это гибкие контейнеры для группировки связанного контента. Используйте переключатель размера выше, чтобы посмотреть как меняются отступы и типографика.",
        helper:
          "Они принимают сниппеты заголовка и футера, так что можно собирать панели, бейджи и любой кастомный контент.",
      },
      card: {
        header: "Обзор возможностей",
        updated: "Обновлено только что",
        docsLink: "Документация",
      },
      accordion: {
        items: [
          { title: "Первый", content: "Это первый элемент" },
          { title: "Второй", content: "Это второй элемент" },
          { title: "Третий", content: "Это третий элемент" },
        ],
      },
      carousel: {
        slides: [
          {
            title: "Первый слайд",
            content: "Контент первого слайда",
            image: "https://picsum.photos/800/400?1",
          },
          {
            title: "Второй слайд",
            content: "Контент второго слайда",
            image: "https://picsum.photos/800/400?2",
          },
          {
            title: "Третий слайд",
            content: "Контент третьего слайда",
            image: "https://picsum.photos/800/400?3",
          },
        ],
      },
      dialog: {
        button: "Открыть диалог",
        confirm: "Вы уверены, что хотите продолжить?",
        title: "Диалог",
        subtitle: "Модальные окна",
      },
      toast: { buttonPrefix: "Показать ", subtitle: "Уведомления toast" },
      field: {
        text: "Текстовое поле",
        number: "Числовое поле",
        textarea: "Многострочное поле",
        placeholder: "0",
        subtitle: "Размеры и варианты",
      },
      tabs: {
        labels: ["Один", "Два", "Три"],
        contents: ["Контент один", "Контент два", "Контент три"],
        subtitle: "Разные стили",
      },
      select: { label: "Страна", subtitle: "Размеры и варианты" },
      switch: { subtitle: "Размеры", labelPrefix: "Переключатель" },
      slider: { subtitle: "Размеры и варианты", fallbackLabel: "ползунок" },
      splitter: { subtitle: "Изменяемые панели" },
      progressBar: { subtitle: "Размеры и варианты" },
      radio: {
        subtitle: "Размеры и варианты",
        apple: "Яблоко",
        banana: "Банан",
        cherry: "Вишня",
      },
      tablePagination: { subtitle: "Таблица и пагинация" },
      button: { subtitle: "Варианты и размеры" },
      checkbox: { subtitle: "Варианты и размеры" },
      cardSnippet: { subtitle: "Макеты и блоки контента" },
      accordionPlay: { subtitle: "Развернуть и свернуть секции" },
      carouselPlay: { subtitle: "Переходы между слайдами" },
      themeToggle: {
        subtitle: "Системная и ручная тема",
        defaultLabel: "Переключатель темы",
      },
      unknown: {
        component: "Неизвестный компонент",
        title: "Неизвестно",
        subtitle: "Демо недоступно",
      },
    },
  },
  Ou = {
    app: {
      version: "v1.0.2",
      title: "Svelte 5 UI Components",
      footer: "© 2025 MaestroFusion360",
      authorUrl: "https://github.com/MaestroFusion360/svelte-comp",
      language: {
        label: "Idioma",
        options: [
          { label: "Inglés", value: "en" },
          { label: "Ruso", value: "ru" },
          { label: "Español", value: "es" },
        ],
      },
    },
    pageLabels: {
      about: "Acerca de",
      accordion: "Acordeón",
      button: "Botón",
      card: "Tarjeta",
      carousel: "Carrusel",
      checkbox: "Casilla",
      colorPicker: "Selector de color",
      codeView: "Vista de código",
      datePicker: "Selector de fecha",
      dialog: "Diálogo",
      field: "Campo",
      filePicker: "Selector de archivos",
      form: "Formulario",
      menu: "Menú",
      notepad: "Bloc de notas",
      progressBar: "Barra de progreso",
      radio: "Botones de opción",
      select: "Lista desplegable",
      slider: "Control deslizante",
      splitter: "Divisor",
      switch: "Interruptor",
      tablePagination: "Tabla y paginación",
      tabs: "Pestañas",
      themeToggle: "Cambio de tema",
      timePicker: "Selector de hora",
      toast: "Notificaciones",
    },
    about: {
      heading: "Acerca del proyecto",
      meta: "Información del proyecto",
      intro: {
        description:
          " es una biblioteca de componentes limpia, personalizable y totalmente tipada, construida con ",
        frameworks: { runes: "Svelte 5 (Runes API)", tailwind: "TailwindCSS" },
        connector: " y ",
        closing: ".",
      },
      styling: {
        beforeFile: "Los componentes usan variables CSS definidas en ",
        file: "src/app.css",
        afterFile:
          ", lo que hace que la personalización de temas sea sencilla y coherente. El modo oscuro se activa globalmente añadiendo la clase ",
        darkClass: ".dark",
        afterDark: " al elemento raíz del documento.",
      },
      patterns:
        "La biblioteca demuestra patrones de UI prácticos como tarjetas responsivas, formularios interactivos, cuadros de diálogo y tablas de datos, siguiendo un sistema de diseño unificado para proyectos modernos en Svelte.",
      versionLabel: "Versión",
      authorLabel: "Autor",
      authorName: "MaestroFusion360",
    },
    states: { emptyPreview: "Sin vista previa" },
    options: {
      selectCountries: [
        { label: "Rusia", value: "ru" },
        { label: "EE. UU.", value: "us" },
        { label: "Alemania", value: "de" },
      ],
      formGender: [
        { value: "male", label: "Hombre" },
        { value: "female", label: "Mujer" },
        { value: "other", label: "Otro" },
      ],
      formCountries: [
        { value: "us", label: "Estados Unidos" },
        { value: "ca", label: "Canadá" },
        { value: "uk", label: "Reino Unido" },
        { value: "au", label: "Australia" },
      ],
    },
    form: {
      header: "Formulario de registro",
      footer: { cancel: "Cancelar", submit: "Enviar", random: "Aleatorio" },
      fields: {
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Email",
        password: "Contraseña",
        confirmPassword: "Confirmar contraseña",
        age: "Edad",
        gender: "Género",
        country: "País",
        about: "Sobre ti",
        newsletter: "Suscribirse al boletín",
        tos: "Aceptar los términos y condiciones",
      },
      validators: {
        passwordLength: "Al menos 6 caracteres",
        passwordMatch: "Las contraseñas no coinciden",
        adultsOnly: "Solo para mayores de edad",
      },
    },
    table: {
      positionPrefix: "Posición",
      columns: { id: "ID", item: "Producto", qty: "Cantidad", price: "Precio" },
    },
    toasts: {
      confirmTitle: "Acción confirmada",
      confirmMessage: "Tu acción se completó correctamente.",
      cancelTitle: "Acción cancelada",
      cancelMessage: "Has cancelado la acción.",
    },
    menuDemo: {
      menus: { file: "Archivo", edit: "Editar", view: "Vista" },
      actions: {
        new: "Nuevo",
        open: "Abrir",
        save: "Guardar",
        export: "Exportar",
        exportCsv: "CSV",
        exportPdf: "PDF",
        exportZip: "Archivo ZIP",
        close: "Cerrar",
        undo: "Deshacer",
        redo: "Rehacer",
        cut: "Cortar",
        copy: "Copiar",
        paste: "Pegar",
        find: "Buscar",
        findNext: "Buscar siguiente",
        findPrev: "Buscar anterior",
        theme: "Tema",
        light: "Claro",
        dark: "Oscuro",
      },
      prompt: "Elige cualquier elemento del menú o usa flechas/Enter/Esc",
      fallbackLabel: "desconocido",
    },
    notepad: {
      menu: {
        file: "Archivo",
        edit: "Editar",
        view: "Vista",
        language: "Idioma",
        help: "Ayuda",
        settings: "Configuración",
      },
      actions: {
        new: "Nuevo",
        open: "Abrir",
        save: "Guardar",
        undo: "Deshacer",
        redo: "Rehacer",
        cut: "Cortar",
        copy: "Copiar",
        paste: "Pegar",
        about: "Acerca de",
        statusBar: "Barra de estado",
        options: "Opciones",
        xs: "XS",
        sm: "SM",
        md: "MD",
        lg: "LG",
        xl: "XL",
      },
      confirmNew: "¿Borrar la nota actual?",
      openError: "No se pudo abrir el archivo",
      saveError: "No se pudo guardar el archivo",
      cutError: "No se pudo cortar",
      copyError: "No se pudo copiar",
      pasteError: "No se pudo pegar",
      undoError: "Nada que deshacer",
      redoError: "Nada que rehacer",
      aboutText: "Un bloc de notas simple con menú y resaltado de sintaxis.",
      optionsText:
        "Cambia opciones de apariencia como la visibilidad de la barra de estado.",
    },
    components: {
      codeView: { subtitle: "Mostrar fragmentos de código" },
      colorPicker: {
        label: "Elegir color",
        subtitle: "Selecciona el color de marca",
        placeholder: "Ningún color seleccionado",
      },
      datePicker: {
        label: "Elegir fecha",
        subtitle: "Planificación de fechas importantes",
        placeholder: "Ninguna fecha seleccionada",
      },
      dialog: { ok: "OK", cancel: "Cancelar" },
      filePicker: {
        label: "Elegir archivos",
        subtitle: "Interacciones de subida",
        placeholder: "Ningún archivo seleccionado",
      },
      menu: { subtitle: "Menú con opciones de tamaño" },
      timePicker: {
        label: "Seleccionar hora",
        subtitle: "Planificar sesiones",
        placeholder: "Время не выбрано",
      },
    },
    playground: {
      controls: {
        size: "Tamaño",
        variant: "Variante",
        label: "Etiqueta",
        disabled: "Desactivado",
        fieldType: "Tipo de campo",
        sliderShowValue: "Significado",
        playcardLabel: "Etiqueta",
        playcardSubtitle: "Vista previa del componente",
      },
    },
    snippets: {
      about: {
        description:
          "Las tarjetas son contenedores flexibles para agrupar contenido relacionado. Usa el control de tamaño de arriba para previsualizar cambios en espaciado y tipografía.",
        helper:
          "Aceptan fragmentos para cabecera y pie, así puedes componer barras de herramientas, insignias o cualquier marcado personalizado.",
      },
      card: {
        header: "Resumen de funciones",
        updated: "Actualizado hace un momento",
        docsLink: "Ver documentación",
      },
      accordion: {
        items: [
          { title: "Primero", content: "Este es el primer elemento" },
          { title: "Segundo", content: "Este es el segundo elemento" },
          { title: "Tercero", content: "Este es el tercer elemento" },
        ],
      },
      carousel: {
        slides: [
          {
            title: "Primera diapositiva",
            content: "Contenido de la primera diapositiva",
            image: "https://picsum.photos/800/400?1",
          },
          {
            title: "Segunda diapositiva",
            content: "Contenido de la segunda diapositiva",
            image: "https://picsum.photos/800/400?2",
          },
          {
            title: "Tercera diapositiva",
            content: "Contenido de la tercera diapositiva",
            image: "https://picsum.photos/800/400?3",
          },
        ],
      },
      dialog: {
        button: "Abrir diálogo",
        confirm: "¿Seguro que quieres continuar?",
        title: "Diálogo",
        subtitle: "Interacciones modales",
      },
      toast: {
        buttonPrefix: "Mostrar ",
        subtitle: "Notificaciones tipo toast",
      },
      field: {
        text: "Campo de texto",
        number: "Campo numérico",
        textarea: "Área de texto",
        placeholder: "0",
        subtitle: "Tamaños y variantes",
      },
      tabs: {
        labels: ["Uno", "Dos", "Tres"],
        contents: ["Contenido uno", "Contenido dos", "Contenido tres"],
        subtitle: "Estilos diferentes",
      },
      select: { label: "País", subtitle: "Tamaños y variantes" },
      switch: { subtitle: "Tamaños", labelPrefix: "Interruptor" },
      slider: {
        subtitle: "Tamaños y variantes",
        fallbackLabel: "control deslizante",
      },
      splitter: { subtitle: "Paneles redimensionables" },
      progressBar: { subtitle: "Tamaños y variantes" },
      radio: {
        subtitle: "Tamaños y variantes",
        apple: "Manzana",
        banana: "Plátano",
        cherry: "Cereza",
      },
      tablePagination: { subtitle: "Tabla de datos paginada" },
      button: { subtitle: "Variantes y tamaños" },
      checkbox: { subtitle: "Variantes y tamaños" },
      cardSnippet: { subtitle: "Diseños y bloques de contenido" },
      accordionPlay: { subtitle: "Expandir y contraer secciones" },
      carouselPlay: { subtitle: "Transiciones de diapositivas" },
      themeToggle: {
        subtitle: "Tema del sistema y manual",
        defaultLabel: "Cambio de tema",
      },
      unknown: {
        component: "Desconocido",
        title: "Desconocido",
        subtitle: "No hay demo disponible",
      },
    },
  },
  _a = { en: Nu, ru: Iu, es: Ou },
  Ne = {
    xs: "[font-size:var(--text-xs)]",
    sm: "[font-size:var(--text-sm)]",
    md: "[font-size:var(--text-md)]",
    lg: "[font-size:var(--text-lg)]",
    xl: "[font-size:var(--text-xl)]",
  },
  rn = (r = "") => {
    const e = Date.now().toString(36),
      a = Math.random().toString(36).slice(2);
    return `${r}${e}_${a}`;
  };
function U(...r) {
  const e = [],
    a = (n) => {
      if (!(n == null || n === !1)) {
        if (typeof n == "string") {
          e.push(...n.split(/\s+/).filter(Boolean));
          return;
        }
        if (typeof n == "number" || typeof n == "bigint") {
          e.push(String(n));
          return;
        }
        if (Array.isArray(n)) {
          for (const o of n) a(o);
          return;
        }
        if (typeof n == "object")
          for (const [o, i] of Object.entries(n)) i && e.push(o);
      }
    };
  for (const n of r) a(n);
  return e.join(" ");
}
function Ua(r, e, a) {
  return Math.min(a, Math.max(e, r));
}
function ho(r, e) {
  return Array.from({ length: r }, (a, n) => e(n));
}
function Bu(r, e) {
  let a;
  return (...n) => {
    (clearTimeout(a), (a = setTimeout(() => r(...n), e)));
  };
}
function Ru(r, e) {
  let a;
  return (...n) => {
    a || (r(...n), (a = !0), setTimeout(() => (a = !1), e));
  };
}
const ju = typeof window < "u" && !!window.localStorage,
  ro = () => (ju ? window.localStorage : null),
  ri = {
    get: (r, e) => {
      const a = ro();
      if (!a) return e;
      try {
        const n = a.getItem(r);
        return n ? JSON.parse(n) : e;
      } catch {
        return e;
      }
    },
    set: (r, e) => {
      const a = ro();
      if (a)
        try {
          a.setItem(r, JSON.stringify(e));
        } catch (n) {
          console.warn("Storage set failed:", n);
        }
    },
    remove: (r) => {
      const e = ro();
      if (e)
        try {
          e.removeItem(r);
        } catch (a) {
          console.warn("Storage remove failed:", a);
        }
    },
  },
  ai = {
    success: {
      title: "Success",
      message: "Operation completed successfully!",
      duration: 3e3,
    },
    danger: { title: "Error", message: "Something went wrong!", duration: 5e3 },
    warning: {
      title: "Warning",
      message: "Please check your input.",
      duration: 4e3,
    },
    info: { title: "Info", message: "New update available!", duration: 3e3 },
  },
  Vu = (r, e) => ({ ...ai[r], message: e || ai[r].message });
function qu(r) {
  if (r == null) return null;
  if (r instanceof Date) return Number.isNaN(r.getTime()) ? null : r;
  if (typeof r == "number") {
    const e = new Date(r);
    return Number.isNaN(e.getTime()) ? null : e;
  }
  if (typeof r == "string") {
    const a =
        r.includes(":") && !r.includes("T") && !/^\d{4}-\d{2}-\d{2}/.test(r)
          ? `1970-01-01T${r}`
          : r,
      n = new Date(a);
    return Number.isNaN(n.getTime()) ? null : n;
  }
  return null;
}
const Uu = (r, e = "en-US", a) => {
    const n = qu(r);
    if (!n) return "";
    const o = a ?? { year: "numeric", month: "short", day: "numeric" };
    try {
      return new Intl.DateTimeFormat(e, o).format(n);
    } catch {
      return n.toLocaleDateString();
    }
  },
  gs = (r) => {
    r.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )?.focus();
  },
  ps = (r) => {
    const e = r.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ),
      a = e[0],
      n = e[e.length - 1],
      o = (i) => {
        i.key === "Tab" &&
          (i.shiftKey
            ? document.activeElement === a && (i.preventDefault(), n.focus())
            : document.activeElement === n && (i.preventDefault(), a.focus()));
      };
    return (
      r.addEventListener("keydown", o),
      () => {
        r.removeEventListener("keydown", o);
      }
    );
  };
var Hu = j(
    '<section><h3><button type="button" class="flex w-full items-center justify-between gap-3 p-2 text-left font-medium text-[var(--color-text-default)] bg-transparent transition-colors hover:bg-[var(--color-bg-hover)] active:bg-[var(--color-bg-active)] focus:outline-none focus:ring-2 focus:ring-[var(--border-color-focus)] focus:ring-inset"><span> </span> <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.135l3.71-3.904a.75.75 0 111.08 1.04l-4.24 4.46a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button></h3> <div><div class="min-h-0"><div> </div></div></div></section>'
  ),
  Ku = j("<div></div>");
function Gu(r, e) {
  Be(e, !0);
  let a = T(e, "items", 19, () => []),
    n = T(e, "multiple", 3, !1),
    o = T(e, "defaultOpen", 19, () => []),
    i = T(e, "sz", 3, "md"),
    s = T(e, "class", 3, "");
  const l =
      "w-full border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] shadow-sm",
    u = {
      xs: "rounded-[var(--radius-md)] text-sm",
      sm: "rounded-[var(--radius-md)] text-base",
      md: "rounded-[var(--radius-lg)] text-lg",
      lg: "rounded-[var(--radius-lg)] text-xl",
      xl: "rounded-[var(--radius-xl)] text-2xl",
    },
    f = {
      xs: "px-4 pb-4 mt-1",
      sm: "px-5 pb-5 mt-2",
      md: "px-6 pb-6 mt-3",
      lg: "px-8 pb-8 mt-4",
      xl: "px-10 pb-10 mt-5",
    },
    h = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-[18px] h-[18px]",
      xl: "w-5 h-5",
    },
    y = _(() => U(l, u[i()], s())),
    b = _(() => h[i()]),
    k = _(() => U(f[i()], Ne[i()]));
  let C = _(o);
  const x = (v) => t(C).includes(v),
    g = (v) => {
      const d = x(v);
      (z(
        C,
        n() ? (d ? t(C).filter((p) => p !== v) : [...t(C), v]) : d ? [] : [v]
      ),
        e.onToggle?.(v, !d));
    };
  var c = Ku();
  (at(
    c,
    23,
    a,
    (v, d) => v.id ?? d,
    (v, d, p) => {
      var S = Hu();
      let P;
      var A = m(S),
        M = m(A);
      M.__click = () => g(t(p));
      var F = m(M),
        K = m(F),
        H = D(F, 2);
      let ie;
      var ce = D(A, 2);
      let he;
      var J = m(ce),
        te = m(J),
        le = m(te);
      (B(
        (R, G, $, I, ae) => {
          ((P = q(
            S,
            1,
            "group border-b border-[var(--border-color-default)] last:border-b-0 overflow-hidden",
            null,
            P,
            {
              "first-of-type:rounded-t": a().length > 1,
              "last-of-type:rounded-b": a().length > 1,
            }
          )),
            we(M, "aria-expanded", R),
            X(K, t(d).title),
            (ie = q(H, 0, G, null, ie, $)),
            (he = q(
              ce,
              1,
              "grid overflow-hidden transition-[grid-template-rows] duration-200",
              null,
              he,
              I
            )),
            q(te, 1, ae),
            X(le, t(d).content));
        },
        [
          () => x(t(p)),
          () =>
            Y(
              U(
                "shrink-0 transition-transform duration-200 text-[var(--color-text-muted)]",
                t(b)
              )
            ),
          () => ({ "rotate-180": x(t(p)) }),
          () => ({ "grid-rows-[1fr]": x(t(p)), "grid-rows-[0fr]": !x(t(p)) }),
          () => Y(U("leading-relaxed text-[var(--color-text-default)]", t(k))),
        ]
      ),
        w(v, S));
    }
  ),
    B(() => q(c, 1, Y(t(y)))),
    w(r, c),
    Re());
}
it(["click"]);
var Wu = j('<span aria-hidden="true"></span>'),
  Zu = j("<button><span><!></span> <!></button>");
function $e(r, e) {
  Be(e, !0);
  let a = T(e, "sz", 3, "md"),
    n = T(e, "variant", 3, "primary"),
    o = T(e, "type", 3, "button"),
    i = T(e, "loaded", 3, !1),
    s = T(e, "class", 3, ""),
    l = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "disabled",
      "children",
      "onClick",
      "sz",
      "variant",
      "type",
      "loaded",
      "link",
      "class",
    ]);
  const u = `
    relative inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] border font-medium
    transition-all duration-[var(--transition-fast)] ease-[var(--timing-default)] whitespace-nowrap select-none
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)]
    disabled:opacity-[var(--opacity-disabled)]
    disabled:cursor-not-allowed
    disabled:brightness-100
    disabled:active:scale-100
    disabled:hover:brightness-100
  `,
    f = {
      xs: "px-2 py-0.5 h-6",
      sm: "px-3 py-1 h-7",
      md: "px-4 py-2 h-8",
      lg: "px-5 py-2.5 h-9",
      xl: "px-6 py-3 h-10",
    },
    h = {
      primary:
        "bg-[var(--color-bg-primary)] text-white border-[var(--border-color-primary)] hover:brightness-110 active:scale-95",
      secondary:
        "bg-[var(--color-bg-secondary)] [color:var(--color-text-default)] border-[var(--border-color-default)] hover:bg-[var(--color-bg-hover)] active:scale-95",
      pill: "bg-[var(--color-bg-primary)] text-white border-[var(--border-color-primary)] rounded-full hover:brightness-110 active:scale-95",
      danger:
        "bg-[var(--color-bg-danger)] text-white border-[var(--color-bg-danger)] hover:brightness-110 active:scale-95",
      success:
        "bg-[var(--color-bg-success)] text-white border-[var(--color-bg-success)] hover:brightness-110 active:scale-95",
      warning:
        "bg-[var(--color-bg-warning)] text-white border-[var(--color-bg-warning)] hover:brightness-110 active:scale-95",
      ghost:
        "bg-transparent [color:var(--color-text-default)] border-transparent hover:bg-[var(--color-bg-hover)] active:bg-[var(--color-bg-active)] active:scale-95",
      link: "bg-transparent underline border-transparent [color:var(--color-text-link)] hover:brightness-110 active:scale-95 transition-transform ",
      info: "bg-[var(--color-bg-secondary)] text-white border-[var(--border-color-default)] hover:bg-[var(--color-bg-hover)] active:scale-95",
    },
    y = _(() => U(u, f[a()], Ne[a()], h[n()], s())),
    b = _(() => (i() ? "loading" : e.disabled ? "disabled" : "idle"));
  function k(p) {
    if (e.disabled || i()) {
      p.preventDefault();
      return;
    }
    if (o() === "submit" || o() === "reset") {
      e.onClick?.(p);
      return;
    }
    (e.onClick?.(p),
      !(!e.link || p.defaultPrevented) &&
        (p.button !== 0 ||
          p.metaKey ||
          p.ctrlKey ||
          p.shiftKey ||
          p.altKey ||
          C()));
  }
  function C() {
    if (!e.link || typeof window > "u") return;
    const p = l;
    (typeof p.target == "string" ? p.target : void 0) === "_blank"
      ? window.open(e.link, "_blank", "noopener,noreferrer")
      : window.location.assign(e.link);
  }
  var x = Zu();
  wt(x, () => ({
    type: o(),
    disabled: e.disabled,
    "data-state": t(b),
    "aria-disabled": e.disabled || i() || void 0,
    "aria-busy": i() || void 0,
    onclick: k,
    class: t(y),
    ...l,
  }));
  var g = m(x),
    c = m(g);
  Je(c, () => e.children ?? Q);
  var v = D(g, 2);
  {
    var d = (p) => {
      var S = Wu();
      (B(
        (P) => q(S, 1, P),
        [
          () =>
            Y(
              U(
                "absolute inset-0 m-auto w-[1em] h-[1em] border-2 [border-color:var(--color-spinner,currentColor)] border-r-transparent rounded-full motion-safe:[animation:spin_0.6s_linear_infinite]"
              )
            ),
        ]
      ),
        w(p, S));
    };
    Z(v, (p) => {
      i() && p(d);
    });
  }
  (B((p) => q(g, 1, p), [() => Y(U({ "opacity-0 pointer-events-none": i() }))]),
    w(r, x),
    Re());
}
var Xu = j("<div><!></div>"),
  Yu = j("<div><!></div>"),
  Ju = j("<div><!> <div><!></div> <!></div>");
function an(r, e) {
  Be(e, !0);
  let a = T(e, "class", 3, ""),
    n = T(e, "sz", 3, "md"),
    o = T(e, "flushHeader", 3, !1),
    i = T(e, "flushFooter", 3, !1);
  const s = {
      xs: "px-3 py-2",
      sm: "px-4 py-2",
      md: "px-5 py-3",
      lg: "px-6 py-4",
      xl: "px-7 py-5",
    },
    l = _(() =>
      U(
        "bg-[var(--color-bg-surface)] border border-[var(--border-color-default)] rounded-xl shadow-sm overflow-hidden",
        Ne[n()],
        "flex flex-col",
        a()
      )
    ),
    u = _(() =>
      o() ? "" : U("border-b border-[var(--border-color-default)]", s[n()])
    ),
    f = _(() => U(s[n()], "flex-1 min-h-0")),
    h = _(() =>
      i() ? "" : U("border-t border-[var(--border-color-default)]", s[n()])
    );
  var y = Ju(),
    b = m(y);
  {
    var k = (v) => {
      var d = Xu(),
        p = m(d);
      (Je(p, () => e.header ?? Q), B(() => q(d, 1, Y(t(u)))), w(v, d));
    };
    Z(b, (v) => {
      e.header && v(k);
    });
  }
  var C = D(b, 2),
    x = m(C);
  Je(x, () => e.children ?? Q);
  var g = D(C, 2);
  {
    var c = (v) => {
      var d = Yu(),
        p = m(d);
      (Je(p, () => e.footer ?? Q), B(() => q(d, 1, Y(t(h)))), w(v, d));
    };
    Z(g, (v) => {
      e.footer && v(c);
    });
  }
  (B(() => {
    (q(y, 1, Y(t(l))), q(C, 1, Y(t(f))));
  }),
    w(r, y),
    Re());
}
var Qu = j("<img/>"),
  $u = j('<h3 class="font-semibold [color:var(--color-text-default)]"> </h3>'),
  ec = j('<p class="[color:var(--color-text-muted)]"> </p>'),
  tc = j("<div><!> <!> <!></div>"),
  rc = j("<div><!></div>"),
  ac = j(
    '<div class="flex items-center justify-center h-full [color:var(--color-text-muted)]">No items to display</div>'
  ),
  nc = j(
    '<button type="button" aria-label="Previous slide"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 12L6 8L10 4"></path></svg></button> <button type="button" aria-label="Next slide"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4L10 8L6 12"></path></svg></button>',
    1
  ),
  oc = j('<button type="button"></button>'),
  ic = j('<div class="flex justify-center gap-2 p-4"></div>'),
  sc = j('<div><div class="relative"><div><!> <!></div> <!></div> <!></div>');
function lc(r, e) {
  Be(e, !0);
  let a = T(e, "items", 19, () => []),
    n = T(e, "sz", 3, "md"),
    o = T(e, "autoplay", 3, !1),
    i = T(e, "interval", 3, 5e3),
    s = T(e, "showDots", 3, !0),
    l = T(e, "showArrows", 3, !0),
    u = T(e, "class", 3, ""),
    f = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "items",
      "sz",
      "autoplay",
      "interval",
      "showDots",
      "showArrows",
      "class",
    ]),
    h = be(0),
    y = be(null);
  const b = _(() => a().length > 0),
    k =
      "relative w-full overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)]",
    C = {
      xs: "rounded-[var(--radius-md)] text-sm",
      sm: "rounded-[var(--radius-md)] text-base",
      md: "rounded-[var(--radius-lg)] text-lg",
      lg: "rounded-[var(--radius-lg)] text-xl",
      xl: "rounded-[var(--radius-xl)] text-2xl",
    },
    x = {
      xs: "p-3 gap-2",
      sm: "p-4 gap-2.5",
      md: "p-5 gap-3",
      lg: "p-6 gap-4",
      xl: "p-8 gap-5",
    },
    g = {
      xs: "w-7 h-7",
      sm: "w-8 h-8",
      md: "w-9 h-9",
      lg: "w-10 h-10",
      xl: "w-11 h-11",
    },
    c = {
      xs: "w-1.5 h-1.5",
      sm: "w-2 h-2",
      md: "w-[10px] h-[10px]",
      lg: "w-3 h-3",
      xl: "w-[14px] h-[14px]",
    },
    v = _(() => U(k, C[n()], u())),
    d = {
      xs: "min-h-[200px]",
      sm: "min-h-[240px]",
      md: "min-h-[300px]",
      lg: "min-h-[360px]",
      xl: "min-h-[420px]",
    },
    p = _(() => U("relative w-full", d[n()])),
    S = _(() => U("flex flex-col", x[n()])),
    P = {
      xs: "max-h-28",
      sm: "max-h-32",
      md: "max-h-40",
      lg: "max-h-48",
      xl: "max-h-56",
    },
    A = _(() => U("w-full object-cover", P[n()])),
    M = _(() =>
      U(
        g[n()],
        "rounded-full bg-[var(--color-bg-surface)] shadow-lg flex items-center justify-center [color:var(--color-text-default)] hover:bg-[var(--color-bg-hover)] transition-colors"
      )
    ),
    F = _(() => U(c[n()], "rounded-full transition-all duration-200"));
  We(() => {
    t(b)
      ? t(h) >= a().length
        ? z(h, a().length - 1)
        : t(h) < 0 && z(h, 0)
      : z(h, 0);
  });
  const K = () => {
      t(b) && z(h, (t(h) + 1) % a().length);
    },
    H = () => {
      t(b) && z(h, (t(h) - 1 + a().length) % a().length);
    },
    ie = (N) => {
      N >= 0 && N < a().length && z(h, N, !0);
    };
  We(
    () => (
      o() && t(b) && a().length > 1 && z(y, setInterval(K, i()), !0),
      () => {
        t(y) && (clearInterval(t(y)), z(y, null));
      }
    )
  );
  let ce = 0,
    he = 0;
  function J(N) {
    ce = N.touches[0].clientX;
  }
  function te(N) {
    he = N.changedTouches[0].clientX;
    const E = ce - he;
    Math.abs(E) <= 50 || (E > 0 ? K() : H());
  }
  var le = sc();
  wt(le, () => ({
    "aria-label": "Carousel",
    class: t(v),
    ontouchstart: J,
    ontouchend: te,
    ...f,
  }));
  var R = m(le),
    G = m(R),
    $ = m(G);
  at(
    $,
    19,
    a,
    (N, E) => N.id ?? E,
    (N, E, ne) => {
      var O = rc();
      const de = (ze) => {
        var Pe = Me(),
          Ae = Ce(Pe);
        {
          var ve = (Se) => {
            var L = Qu();
            (B(() => {
              (we(L, "src", t(E).image),
                we(L, "alt", t(E).title || `Slide ${t(ne) + 1}`),
                q(L, 1, Y(t(A))));
            }),
              w(Se, L));
          };
          Z(Ae, (Se) => {
            t(E).image && Se(ve);
          });
        }
        w(ze, Pe);
      };
      let fe;
      var ge = m(O);
      (an(ge, {
        get sz() {
          return n();
        },
        get header() {
          return de;
        },
        flushHeader: !0,
        class: "h-auto flex flex-col",
        children: (ze, Pe) => {
          var Ae = tc(),
            ve = m(Ae);
          {
            var Se = (_e) => {
              var ye = $u(),
                V = m(ye);
              (B(() => X(V, t(E).title)), w(_e, ye));
            };
            Z(ve, (_e) => {
              t(E).title && _e(Se);
            });
          }
          var L = D(ve, 2);
          {
            var re = (_e) => {
              var ye = ec(),
                V = m(ye);
              (B(() => X(V, t(E).content)), w(_e, ye));
            };
            Z(L, (_e) => {
              t(E).content && _e(re);
            });
          }
          var oe = D(L, 2);
          (Je(oe, () => t(E).children ?? Q),
            B(
              (_e) => q(Ae, 1, _e),
              [() => Y(U(t(S), "flex-1 overflow-auto min-h-0"))]
            ),
            w(ze, Ae));
        },
        $$slots: { default: !0 },
      }),
        B(
          () =>
            (fe = q(
              O,
              1,
              "transition-opacity duration-300 ease-in-out",
              null,
              fe,
              {
                "opacity-100": t(ne) === t(h),
                "opacity-0": t(ne) !== t(h),
                block: t(ne) === t(h),
                hidden: t(ne) !== t(h),
              }
            ))
        ),
        w(N, O));
    }
  );
  var I = D($, 2);
  {
    var ae = (N) => {
      var E = ac();
      w(N, E);
    };
    Z(I, (N) => {
      t(b) || N(ae);
    });
  }
  var W = D(G, 2);
  {
    var ee = (N) => {
      var E = nc(),
        ne = Ce(E);
      ne.__click = H;
      var O = D(ne, 2);
      ((O.__click = K),
        B(
          (de, fe) => {
            (q(ne, 1, de), q(O, 1, fe));
          },
          [
            () => Y(U("absolute left-2 top-1/2 -translate-y-1/2", t(M))),
            () => Y(U("absolute right-2 top-1/2 -translate-y-1/2", t(M))),
          ]
        ),
        w(N, E));
    };
    Z(W, (N) => {
      l() && t(b) && a().length > 1 && N(ee);
    });
  }
  var se = D(R, 2);
  {
    var me = (N) => {
      var E = ic();
      (at(
        E,
        23,
        a,
        (ne, O) => ne.id ?? O,
        (ne, O, de) => {
          var fe = oc();
          fe.__click = () => ie(t(de));
          let ge;
          (B(() => {
            ((ge = q(fe, 1, Y(t(F)), null, ge, {
              "bg-[var(--color-bg-primary)]": t(de) === t(h),
              "bg-[var(--color-bg-secondary)]": t(de) !== t(h),
              "hover:bg-[var(--color-bg-primary)]": t(de) !== t(h),
            })),
              we(
                fe,
                "aria-label",
                `Go to slide ${t(O).title ?? `#${t(de) + 1}`}`
              ),
              we(fe, "aria-current", t(de) === t(h) ? "true" : void 0));
          }),
            w(ne, fe));
        }
      ),
        w(N, E));
    };
    Z(se, (N) => {
      s() && t(b) && a().length > 1 && N(me);
    });
  }
  (B(() => q(G, 1, Y(t(p)))), w(r, le), Re());
}
it(["click"]);
var uc = ir(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round"><line x1="4" y1="12" x2="20" y2="12"></line></svg>'
  ),
  cc = ir(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'
  ),
  dc = j("<span> </span>"),
  fc = j('<label><input/> <span aria-hidden="true"><!></span> <!></label>');
function Za(r, e) {
  Be(e, !0);
  let a = T(e, "sz", 3, "md"),
    n = T(e, "variant", 3, "default"),
    o = T(e, "indeterminate", 7, !1),
    i = T(e, "checked", 15, !1),
    s = T(e, "class", 3, ""),
    l = T(e, "invalid", 3, !1),
    u = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "label",
      "sz",
      "variant",
      "indeterminate",
      "checked",
      "onChange",
      "class",
      "invalid",
      "describedBy",
    ]);
  const f = _(() => e.id ?? rn("chk-")),
    h = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-[18px] h-[18px]",
      xl: "w-5 h-5",
    },
    y = {
      xs: "gap-1.5",
      sm: "gap-2",
      md: "gap-2.5",
      lg: "gap-3",
      xl: "gap-3.5",
    },
    b = _(() =>
      n() === "neutral"
        ? {
            checked: "bg-transparent border-[var(--border-color-strong)]",
            unchecked: "bg-transparent border-[var(--border-color-default)]",
            mixed: "bg-transparent border-[var(--border-color-strong)]",
          }
        : {
            checked:
              "bg-[var(--color-bg-primary)] border-[var(--color-bg-primary)]",
            unchecked:
              "bg-[var(--color-bg-surface)] border-[var(--border-color-default)]",
            mixed:
              "bg-[var(--color-bg-secondary)] border-[var(--border-color-default)]",
          }
    ),
    k =
      "rounded-[var(--radius-sm)] border border-solid cursor-pointer transition-all duration-[var(--transition-fast)] ease-[var(--timing-default)] flex items-center justify-center",
    C =
      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--border-color-focus)] peer-focus-visible:border-[var(--border-color-focus)]",
    x = _(() => (o() ? "mixed" : i() ? "checked" : "unchecked")),
    g = _(() =>
      n() === "neutral"
        ? t(x) === "checked" || t(x) === "mixed"
          ? "var(--border-color-strong)"
          : "var(--border-color-default)"
        : "white"
    ),
    c = _(() =>
      U("inline-flex items-center cursor-pointer select-none", y[a()], s())
    ),
    v = _(() =>
      U(
        k,
        C,
        h[a()],
        t(x) === "checked" && t(b).checked,
        t(x) === "mixed" && t(b).mixed,
        t(x) === "unchecked" && t(b).unchecked,
        "peer-disabled:opacity-[var(--opacity-disabled)] peer-disabled:cursor-not-allowed"
      )
    ),
    d = _(() =>
      U(
        Ne[a()],
        "[color:var(--color-text-muted)] font-medium peer-disabled:cursor-not-allowed"
      )
    );
  function p(he) {
    o() && (he.preventDefault(), i(!0), o(!1), e.onChange?.(!0));
  }
  var S = fc(),
    P = m(S),
    A = () => {
      (o() && o(!1), e.onChange?.(i()));
    };
  wt(
    P,
    () => ({
      id: t(f),
      type: "checkbox",
      ...u,
      class: "sr-only peer",
      "aria-checked": o() ? "mixed" : i(),
      "aria-invalid": l() || void 0,
      "aria-describedby": e.describedBy,
      onchange: A,
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0
  );
  var M = D(P, 2);
  M.__click = p;
  var F = m(M);
  {
    var K = (he) => {
        var J = uc();
        (B(() => we(J, "stroke", t(g))), w(he, J));
      },
      H = (he) => {
        var J = Me(),
          te = Ce(J);
        {
          var le = (R) => {
            var G = cc();
            (B(() => we(G, "stroke", t(g))), w(R, G));
          };
          Z(
            te,
            (R) => {
              i() && R(le);
            },
            !0
          );
        }
        w(he, J);
      };
    Z(F, (he) => {
      o() ? he(K) : he(H, !1);
    });
  }
  var ie = D(M, 2);
  {
    var ce = (he) => {
      var J = dc(),
        te = m(J);
      (B(() => {
        (q(J, 1, Y(t(d))), X(te, e.label));
      }),
        w(he, J));
    };
    Z(ie, (he) => {
      e.label && he(ce);
    });
  }
  (B(() => {
    (q(S, 1, Y(t(c))),
      we(S, "for", t(f)),
      we(M, "data-state", t(x)),
      q(M, 1, Y(t(v))));
  }),
    Cu(P, i),
    w(r, S),
    Re());
}
it(["click"]);
var ni =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  ao = { exports: {} },
  oi;
function vc() {
  return (
    oi ||
      ((oi = 1),
      (function (r) {
        var e =
          typeof window < "u"
            ? window
            : typeof WorkerGlobalScope < "u" &&
                self instanceof WorkerGlobalScope
              ? self
              : {};
        var a = (function (n) {
          var o = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            i = 0,
            s = {},
            l = {
              manual: n.Prism && n.Prism.manual,
              disableWorkerMessageHandler:
                n.Prism && n.Prism.disableWorkerMessageHandler,
              util: {
                encode: function v(d) {
                  return d instanceof u
                    ? new u(d.type, v(d.content), d.alias)
                    : Array.isArray(d)
                      ? d.map(v)
                      : d
                          .replace(/&/g, "&amp;")
                          .replace(/</g, "&lt;")
                          .replace(/\u00a0/g, " ");
                },
                type: function (v) {
                  return Object.prototype.toString.call(v).slice(8, -1);
                },
                objId: function (v) {
                  return (
                    v.__id || Object.defineProperty(v, "__id", { value: ++i }),
                    v.__id
                  );
                },
                clone: function v(d, p) {
                  p = p || {};
                  var S, P;
                  switch (l.util.type(d)) {
                    case "Object":
                      if (((P = l.util.objId(d)), p[P])) return p[P];
                      ((S = {}), (p[P] = S));
                      for (var A in d)
                        d.hasOwnProperty(A) && (S[A] = v(d[A], p));
                      return S;
                    case "Array":
                      return (
                        (P = l.util.objId(d)),
                        p[P]
                          ? p[P]
                          : ((S = []),
                            (p[P] = S),
                            d.forEach(function (M, F) {
                              S[F] = v(M, p);
                            }),
                            S)
                      );
                    default:
                      return d;
                  }
                },
                getLanguage: function (v) {
                  for (; v; ) {
                    var d = o.exec(v.className);
                    if (d) return d[1].toLowerCase();
                    v = v.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (v, d) {
                  ((v.className = v.className.replace(RegExp(o, "gi"), "")),
                    v.classList.add("language-" + d));
                },
                currentScript: function () {
                  if (typeof document > "u") return null;
                  if (
                    document.currentScript &&
                    document.currentScript.tagName === "SCRIPT"
                  )
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (S) {
                    var v = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                      S.stack
                    ) || [])[1];
                    if (v) {
                      var d = document.getElementsByTagName("script");
                      for (var p in d) if (d[p].src == v) return d[p];
                    }
                    return null;
                  }
                },
                isActive: function (v, d, p) {
                  for (var S = "no-" + d; v; ) {
                    var P = v.classList;
                    if (P.contains(d)) return !0;
                    if (P.contains(S)) return !1;
                    v = v.parentElement;
                  }
                  return !!p;
                },
              },
              languages: {
                plain: s,
                plaintext: s,
                text: s,
                txt: s,
                extend: function (v, d) {
                  var p = l.util.clone(l.languages[v]);
                  for (var S in d) p[S] = d[S];
                  return p;
                },
                insertBefore: function (v, d, p, S) {
                  S = S || l.languages;
                  var P = S[v],
                    A = {};
                  for (var M in P)
                    if (P.hasOwnProperty(M)) {
                      if (M == d)
                        for (var F in p) p.hasOwnProperty(F) && (A[F] = p[F]);
                      p.hasOwnProperty(M) || (A[M] = P[M]);
                    }
                  var K = S[v];
                  return (
                    (S[v] = A),
                    l.languages.DFS(l.languages, function (H, ie) {
                      ie === K && H != v && (this[H] = A);
                    }),
                    A
                  );
                },
                DFS: function v(d, p, S, P) {
                  P = P || {};
                  var A = l.util.objId;
                  for (var M in d)
                    if (d.hasOwnProperty(M)) {
                      p.call(d, M, d[M], S || M);
                      var F = d[M],
                        K = l.util.type(F);
                      K === "Object" && !P[A(F)]
                        ? ((P[A(F)] = !0), v(F, p, null, P))
                        : K === "Array" &&
                          !P[A(F)] &&
                          ((P[A(F)] = !0), v(F, p, M, P));
                    }
                },
              },
              plugins: {},
              highlightAll: function (v, d) {
                l.highlightAllUnder(document, v, d);
              },
              highlightAllUnder: function (v, d, p) {
                var S = {
                  callback: p,
                  container: v,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                (l.hooks.run("before-highlightall", S),
                  (S.elements = Array.prototype.slice.apply(
                    S.container.querySelectorAll(S.selector)
                  )),
                  l.hooks.run("before-all-elements-highlight", S));
                for (var P = 0, A; (A = S.elements[P++]); )
                  l.highlightElement(A, d === !0, S.callback);
              },
              highlightElement: function (v, d, p) {
                var S = l.util.getLanguage(v),
                  P = l.languages[S];
                l.util.setLanguage(v, S);
                var A = v.parentElement;
                A &&
                  A.nodeName.toLowerCase() === "pre" &&
                  l.util.setLanguage(A, S);
                var M = v.textContent,
                  F = { element: v, language: S, grammar: P, code: M };
                function K(ie) {
                  ((F.highlightedCode = ie),
                    l.hooks.run("before-insert", F),
                    (F.element.innerHTML = F.highlightedCode),
                    l.hooks.run("after-highlight", F),
                    l.hooks.run("complete", F),
                    p && p.call(F.element));
                }
                if (
                  (l.hooks.run("before-sanity-check", F),
                  (A = F.element.parentElement),
                  A &&
                    A.nodeName.toLowerCase() === "pre" &&
                    !A.hasAttribute("tabindex") &&
                    A.setAttribute("tabindex", "0"),
                  !F.code)
                ) {
                  (l.hooks.run("complete", F), p && p.call(F.element));
                  return;
                }
                if ((l.hooks.run("before-highlight", F), !F.grammar)) {
                  K(l.util.encode(F.code));
                  return;
                }
                if (d && n.Worker) {
                  var H = new Worker(l.filename);
                  ((H.onmessage = function (ie) {
                    K(ie.data);
                  }),
                    H.postMessage(
                      JSON.stringify({
                        language: F.language,
                        code: F.code,
                        immediateClose: !0,
                      })
                    ));
                } else K(l.highlight(F.code, F.grammar, F.language));
              },
              highlight: function (v, d, p) {
                var S = { code: v, grammar: d, language: p };
                if ((l.hooks.run("before-tokenize", S), !S.grammar))
                  throw new Error(
                    'The language "' + S.language + '" has no grammar.'
                  );
                return (
                  (S.tokens = l.tokenize(S.code, S.grammar)),
                  l.hooks.run("after-tokenize", S),
                  u.stringify(l.util.encode(S.tokens), S.language)
                );
              },
              tokenize: function (v, d) {
                var p = d.rest;
                if (p) {
                  for (var S in p) d[S] = p[S];
                  delete d.rest;
                }
                var P = new y();
                return (b(P, P.head, v), h(v, P, d, P.head, 0), C(P));
              },
              hooks: {
                all: {},
                add: function (v, d) {
                  var p = l.hooks.all;
                  ((p[v] = p[v] || []), p[v].push(d));
                },
                run: function (v, d) {
                  var p = l.hooks.all[v];
                  if (!(!p || !p.length))
                    for (var S = 0, P; (P = p[S++]); ) P(d);
                },
              },
              Token: u,
            };
          n.Prism = l;
          function u(v, d, p, S) {
            ((this.type = v),
              (this.content = d),
              (this.alias = p),
              (this.length = (S || "").length | 0));
          }
          u.stringify = function v(d, p) {
            if (typeof d == "string") return d;
            if (Array.isArray(d)) {
              var S = "";
              return (
                d.forEach(function (K) {
                  S += v(K, p);
                }),
                S
              );
            }
            var P = {
                type: d.type,
                content: v(d.content, p),
                tag: "span",
                classes: ["token", d.type],
                attributes: {},
                language: p,
              },
              A = d.alias;
            (A &&
              (Array.isArray(A)
                ? Array.prototype.push.apply(P.classes, A)
                : P.classes.push(A)),
              l.hooks.run("wrap", P));
            var M = "";
            for (var F in P.attributes)
              M +=
                " " +
                F +
                '="' +
                (P.attributes[F] || "").replace(/"/g, "&quot;") +
                '"';
            return (
              "<" +
              P.tag +
              ' class="' +
              P.classes.join(" ") +
              '"' +
              M +
              ">" +
              P.content +
              "</" +
              P.tag +
              ">"
            );
          };
          function f(v, d, p, S) {
            v.lastIndex = d;
            var P = v.exec(p);
            if (P && S && P[1]) {
              var A = P[1].length;
              ((P.index += A), (P[0] = P[0].slice(A)));
            }
            return P;
          }
          function h(v, d, p, S, P, A) {
            for (var M in p)
              if (!(!p.hasOwnProperty(M) || !p[M])) {
                var F = p[M];
                F = Array.isArray(F) ? F : [F];
                for (var K = 0; K < F.length; ++K) {
                  if (A && A.cause == M + "," + K) return;
                  var H = F[K],
                    ie = H.inside,
                    ce = !!H.lookbehind,
                    he = !!H.greedy,
                    J = H.alias;
                  if (he && !H.pattern.global) {
                    var te = H.pattern.toString().match(/[imsuy]*$/)[0];
                    H.pattern = RegExp(H.pattern.source, te + "g");
                  }
                  for (
                    var le = H.pattern || H, R = S.next, G = P;
                    R !== d.tail && !(A && G >= A.reach);
                    G += R.value.length, R = R.next
                  ) {
                    var $ = R.value;
                    if (d.length > v.length) return;
                    if (!($ instanceof u)) {
                      var I = 1,
                        ae;
                      if (he) {
                        if (
                          ((ae = f(le, G, v, ce)), !ae || ae.index >= v.length)
                        )
                          break;
                        var me = ae.index,
                          W = ae.index + ae[0].length,
                          ee = G;
                        for (ee += R.value.length; me >= ee; )
                          ((R = R.next), (ee += R.value.length));
                        if (
                          ((ee -= R.value.length),
                          (G = ee),
                          R.value instanceof u)
                        )
                          continue;
                        for (
                          var se = R;
                          se !== d.tail &&
                          (ee < W || typeof se.value == "string");
                          se = se.next
                        )
                          (I++, (ee += se.value.length));
                        (I--, ($ = v.slice(G, ee)), (ae.index -= G));
                      } else if (((ae = f(le, 0, $, ce)), !ae)) continue;
                      var me = ae.index,
                        N = ae[0],
                        E = $.slice(0, me),
                        ne = $.slice(me + N.length),
                        O = G + $.length;
                      A && O > A.reach && (A.reach = O);
                      var de = R.prev;
                      (E && ((de = b(d, de, E)), (G += E.length)), k(d, de, I));
                      var fe = new u(M, ie ? l.tokenize(N, ie) : N, J, N);
                      if (((R = b(d, de, fe)), ne && b(d, R, ne), I > 1)) {
                        var ge = { cause: M + "," + K, reach: O };
                        (h(v, d, p, R.prev, G, ge),
                          A && ge.reach > A.reach && (A.reach = ge.reach));
                      }
                    }
                  }
                }
              }
          }
          function y() {
            var v = { value: null, prev: null, next: null },
              d = { value: null, prev: v, next: null };
            ((v.next = d), (this.head = v), (this.tail = d), (this.length = 0));
          }
          function b(v, d, p) {
            var S = d.next,
              P = { value: p, prev: d, next: S };
            return ((d.next = P), (S.prev = P), v.length++, P);
          }
          function k(v, d, p) {
            for (var S = d.next, P = 0; P < p && S !== v.tail; P++) S = S.next;
            ((d.next = S), (S.prev = d), (v.length -= P));
          }
          function C(v) {
            for (var d = [], p = v.head.next; p !== v.tail; )
              (d.push(p.value), (p = p.next));
            return d;
          }
          if (!n.document)
            return (
              n.addEventListener &&
                (l.disableWorkerMessageHandler ||
                  n.addEventListener(
                    "message",
                    function (v) {
                      var d = JSON.parse(v.data),
                        p = d.language,
                        S = d.code,
                        P = d.immediateClose;
                      (n.postMessage(l.highlight(S, l.languages[p], p)),
                        P && n.close());
                    },
                    !1
                  )),
              l
            );
          var x = l.util.currentScript();
          x &&
            ((l.filename = x.src),
            x.hasAttribute("data-manual") && (l.manual = !0));
          function g() {
            l.manual || l.highlightAll();
          }
          if (!l.manual) {
            var c = document.readyState;
            c === "loading" || (c === "interactive" && x && x.defer)
              ? document.addEventListener("DOMContentLoaded", g)
              : window.requestAnimationFrame
                ? window.requestAnimationFrame(g)
                : window.setTimeout(g, 16);
          }
          return l;
        })(e);
        (r.exports && (r.exports = a),
          typeof ni < "u" && (ni.Prism = a),
          (a.languages.markup = {
            comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
            prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
            doctype: {
              pattern:
                /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
              greedy: !0,
              inside: {
                "internal-subset": {
                  pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                  lookbehind: !0,
                  greedy: !0,
                  inside: null,
                },
                string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
                punctuation: /^<!|>$|[[\]]/,
                "doctype-tag": /^DOCTYPE/i,
                name: /[^\s<>'"]+/,
              },
            },
            cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
            tag: {
              pattern:
                /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
              greedy: !0,
              inside: {
                tag: {
                  pattern: /^<\/?[^\s>\/]+/,
                  inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
                },
                "special-attr": [],
                "attr-value": {
                  pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                  inside: {
                    punctuation: [
                      { pattern: /^=/, alias: "attr-equals" },
                      { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
                    ],
                  },
                },
                punctuation: /\/?>/,
                "attr-name": {
                  pattern: /[^\s>\/]+/,
                  inside: { namespace: /^[^\s>\/:]+:/ },
                },
              },
            },
            entity: [
              { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
              /&#x?[\da-f]{1,8};/i,
            ],
          }),
          (a.languages.markup.tag.inside["attr-value"].inside.entity =
            a.languages.markup.entity),
          (a.languages.markup.doctype.inside["internal-subset"].inside =
            a.languages.markup),
          a.hooks.add("wrap", function (n) {
            n.type === "entity" &&
              (n.attributes.title = n.content.replace(/&amp;/, "&"));
          }),
          Object.defineProperty(a.languages.markup.tag, "addInlined", {
            value: function (o, i) {
              var s = {};
              ((s["language-" + i] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: a.languages[i],
              }),
                (s.cdata = /^<!\[CDATA\[|\]\]>$/i));
              var l = {
                "included-cdata": {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: s,
                },
              };
              l["language-" + i] = {
                pattern: /[\s\S]+/,
                inside: a.languages[i],
              };
              var u = {};
              ((u[o] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return o;
                    }
                  ),
                  "i"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: l,
              }),
                a.languages.insertBefore("markup", "cdata", u));
            },
          }),
          Object.defineProperty(a.languages.markup.tag, "addAttribute", {
            value: function (n, o) {
              a.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(
                  /(^|["'\s])/.source +
                    "(?:" +
                    n +
                    ")" +
                    /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                  "i"
                ),
                lookbehind: !0,
                inside: {
                  "attr-name": /^[^\s=]+/,
                  "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                      value: {
                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                        lookbehind: !0,
                        alias: [o, "language-" + o],
                        inside: a.languages[o],
                      },
                      punctuation: [
                        { pattern: /^=/, alias: "attr-equals" },
                        /"|'/,
                      ],
                    },
                  },
                },
              });
            },
          }),
          (a.languages.html = a.languages.markup),
          (a.languages.mathml = a.languages.markup),
          (a.languages.svg = a.languages.markup),
          (a.languages.xml = a.languages.extend("markup", {})),
          (a.languages.ssml = a.languages.xml),
          (a.languages.atom = a.languages.xml),
          (a.languages.rss = a.languages.xml),
          (function (n) {
            var o =
              /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
            ((n.languages.css = {
              comment: /\/\*[\s\S]*?\*\//,
              atrule: {
                pattern: RegExp(
                  "@[\\w-](?:" +
                    /[^;{\s"']|\s+(?!\s)/.source +
                    "|" +
                    o.source +
                    ")*?" +
                    /(?:;|(?=\s*\{))/.source
                ),
                inside: {
                  rule: /^@[\w-]+/,
                  "selector-function-argument": {
                    pattern:
                      /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector",
                  },
                  keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0,
                  },
                },
              },
              url: {
                pattern: RegExp(
                  "\\burl\\((?:" +
                    o.source +
                    "|" +
                    /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                    ")\\)",
                  "i"
                ),
                greedy: !0,
                inside: {
                  function: /^url/i,
                  punctuation: /^\(|\)$/,
                  string: {
                    pattern: RegExp("^" + o.source + "$"),
                    alias: "url",
                  },
                },
              },
              selector: {
                pattern: RegExp(
                  `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
                    o.source +
                    ")*(?=\\s*\\{)"
                ),
                lookbehind: !0,
              },
              string: { pattern: o, greedy: !0 },
              property: {
                pattern:
                  /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                lookbehind: !0,
              },
              important: /!important\b/i,
              function: {
                pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                lookbehind: !0,
              },
              punctuation: /[(){};:,]/,
            }),
              (n.languages.css.atrule.inside.rest = n.languages.css));
            var i = n.languages.markup;
            i &&
              (i.tag.addInlined("style", "css"),
              i.tag.addAttribute("style", "css"));
          })(a),
          (a.languages.clike = {
            comment: [
              {
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: !0,
                greedy: !0,
              },
              { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
            ],
            string: {
              pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              greedy: !0,
            },
            "class-name": {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
              lookbehind: !0,
              inside: { punctuation: /[.\\]/ },
            },
            keyword:
              /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
            boolean: /\b(?:false|true)\b/,
            function: /\b\w+(?=\()/,
            number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
            operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
            punctuation: /[{}[\];(),.:]/,
          }),
          (a.languages.javascript = a.languages.extend("clike", {
            "class-name": [
              a.languages.clike["class-name"],
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                lookbehind: !0,
              },
            ],
            keyword: [
              { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
              {
                pattern:
                  /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: !0,
              },
            ],
            function:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
            number: {
              pattern: RegExp(
                /(^|[^\w$])/.source +
                  "(?:" +
                  (/NaN|Infinity/.source +
                    "|" +
                    /0[bB][01]+(?:_[01]+)*n?/.source +
                    "|" +
                    /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                    "|" +
                    /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                    "|" +
                    /\d+(?:_\d+)*n/.source +
                    "|" +
                    /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                      .source) +
                  ")" +
                  /(?![\w$])/.source
              ),
              lookbehind: !0,
            },
            operator:
              /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
          })),
          (a.languages.javascript["class-name"][0].pattern =
            /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
          a.languages.insertBefore("javascript", "keyword", {
            regex: {
              pattern: RegExp(
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/
                  .source +
                  /\//.source +
                  "(?:" +
                  /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/
                    .source +
                  "|" +
                  /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
                    .source +
                  ")" +
                  /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/
                    .source
              ),
              lookbehind: !0,
              greedy: !0,
              inside: {
                "regex-source": {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: "language-regex",
                  inside: a.languages.regex,
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/,
              },
            },
            "function-variable": {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: "function",
            },
            parameter: [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: a.languages.javascript,
              },
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: a.languages.javascript,
              },
              {
                pattern:
                  /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: a.languages.javascript,
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: a.languages.javascript,
              },
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
          }),
          a.languages.insertBefore("javascript", "string", {
            hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
            "template-string": {
              pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
              greedy: !0,
              inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: {
                  pattern:
                    /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                    "interpolation-punctuation": {
                      pattern: /^\$\{|\}$/,
                      alias: "punctuation",
                    },
                    rest: a.languages.javascript,
                  },
                },
                string: /[\s\S]+/,
              },
            },
            "string-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
              lookbehind: !0,
              greedy: !0,
              alias: "property",
            },
          }),
          a.languages.insertBefore("javascript", "operator", {
            "literal-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
              lookbehind: !0,
              alias: "property",
            },
          }),
          a.languages.markup &&
            (a.languages.markup.tag.addInlined("script", "javascript"),
            a.languages.markup.tag.addAttribute(
              /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                .source,
              "javascript"
            )),
          (a.languages.js = a.languages.javascript),
          (function () {
            if (typeof a > "u" || typeof document > "u") return;
            Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                Element.prototype.webkitMatchesSelector);
            var n = "Loading…",
              o = function (x, g) {
                return "✖ Error " + x + " while fetching file: " + g;
              },
              i = "✖ Error: File does not exist or is empty",
              s = {
                js: "javascript",
                py: "python",
                rb: "ruby",
                ps1: "powershell",
                psm1: "powershell",
                sh: "bash",
                bat: "batch",
                h: "c",
                tex: "latex",
              },
              l = "data-src-status",
              u = "loading",
              f = "loaded",
              h = "failed",
              y =
                "pre[data-src]:not([" +
                l +
                '="' +
                f +
                '"]):not([' +
                l +
                '="' +
                u +
                '"])';
            function b(x, g, c) {
              var v = new XMLHttpRequest();
              (v.open("GET", x, !0),
                (v.onreadystatechange = function () {
                  v.readyState == 4 &&
                    (v.status < 400 && v.responseText
                      ? g(v.responseText)
                      : v.status >= 400
                        ? c(o(v.status, v.statusText))
                        : c(i));
                }),
                v.send(null));
            }
            function k(x) {
              var g = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x || "");
              if (g) {
                var c = Number(g[1]),
                  v = g[2],
                  d = g[3];
                return v ? (d ? [c, Number(d)] : [c, void 0]) : [c, c];
              }
            }
            (a.hooks.add("before-highlightall", function (x) {
              x.selector += ", " + y;
            }),
              a.hooks.add("before-sanity-check", function (x) {
                var g = x.element;
                if (g.matches(y)) {
                  ((x.code = ""), g.setAttribute(l, u));
                  var c = g.appendChild(document.createElement("CODE"));
                  c.textContent = n;
                  var v = g.getAttribute("data-src"),
                    d = x.language;
                  if (d === "none") {
                    var p = (/\.(\w+)$/.exec(v) || [, "none"])[1];
                    d = s[p] || p;
                  }
                  (a.util.setLanguage(c, d), a.util.setLanguage(g, d));
                  var S = a.plugins.autoloader;
                  (S && S.loadLanguages(d),
                    b(
                      v,
                      function (P) {
                        g.setAttribute(l, f);
                        var A = k(g.getAttribute("data-range"));
                        if (A) {
                          var M = P.split(/\r\n?|\n/g),
                            F = A[0],
                            K = A[1] == null ? M.length : A[1];
                          (F < 0 && (F += M.length),
                            (F = Math.max(0, Math.min(F - 1, M.length))),
                            K < 0 && (K += M.length),
                            (K = Math.max(0, Math.min(K, M.length))),
                            (P = M.slice(F, K).join(`
`)),
                            g.hasAttribute("data-start") ||
                              g.setAttribute("data-start", String(F + 1)));
                        }
                        ((c.textContent = P), a.highlightElement(c));
                      },
                      function (P) {
                        (g.setAttribute(l, h), (c.textContent = P));
                      }
                    ));
                }
              }),
              (a.plugins.fileHighlight = {
                highlight: function (g) {
                  for (
                    var c = (g || document).querySelectorAll(y), v = 0, d;
                    (d = c[v++]);
                  )
                    a.highlightElement(d);
                },
              }));
            var C = !1;
            a.fileHighlight = function () {
              (C ||
                (console.warn(
                  "Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."
                ),
                (C = !0)),
                a.plugins.fileHighlight.highlight.apply(this, arguments));
            };
          })());
      })(ao)),
    ao.exports
  );
}
var ii = vc();
Prism.languages.markup = {
  comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
  prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
  doctype: {
    pattern:
      /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/,
    },
  },
  cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
  tag: {
    pattern:
      /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            { pattern: /^=/, alias: "attr-equals" },
            { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
          ],
        },
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: { namespace: /^[^\s>\/:]+:/ },
      },
    },
  },
  entity: [
    { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
    /&#x?[\da-f]{1,8};/i,
  ],
};
Prism.languages.markup.tag.inside["attr-value"].inside.entity =
  Prism.languages.markup.entity;
Prism.languages.markup.doctype.inside["internal-subset"].inside =
  Prism.languages.markup;
Prism.hooks.add("wrap", function (r) {
  r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  value: function (e, a) {
    var n = {};
    ((n["language-" + a] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[a],
    }),
      (n.cdata = /^<!\[CDATA\[|\]\]>$/i));
    var o = {
      "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n },
    };
    o["language-" + a] = { pattern: /[\s\S]+/, inside: Prism.languages[a] };
    var i = {};
    ((i[e] = {
      pattern: RegExp(
        /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
          /__/g,
          function () {
            return e;
          }
        ),
        "i"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: o,
    }),
      Prism.languages.insertBefore("markup", "cdata", i));
  },
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  value: function (r, e) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source +
          "(?:" +
          r +
          ")" +
          /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i"
      ),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [e, "language-" + e],
              inside: Prism.languages[e],
            },
            punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
          },
        },
      },
    });
  },
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
(function (r) {
  var e =
    /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  ((r.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp(
        "@[\\w-](?:" +
          /[^;{\s"']|\s+(?!\s)/.source +
          "|" +
          e.source +
          ")*?" +
          /(?:;|(?=\s*\{))/.source
      ),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern:
            /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector",
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0,
        },
      },
    },
    url: {
      pattern: RegExp(
        "\\burl\\((?:" +
          e.source +
          "|" +
          /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
          ")\\)",
        "i"
      ),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: { pattern: RegExp("^" + e.source + "$"), alias: "url" },
      },
    },
    selector: {
      pattern: RegExp(
        `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
          e.source +
          ")*(?=\\s*\\{)"
      ),
      lookbehind: !0,
    },
    string: { pattern: e, greedy: !0 },
    property: {
      pattern:
        /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0,
    },
    important: /!important\b/i,
    function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
    punctuation: /[(){};:,]/,
  }),
    (r.languages.css.atrule.inside.rest = r.languages.css));
  var a = r.languages.markup;
  a && (a.tag.addInlined("style", "css"), a.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  function:
    /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source +
        "(?:" +
        (/NaN|Infinity/.source +
          "|" +
          /0[bB][01]+(?:_[01]+)*n?/.source +
          "|" +
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
          "|" +
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
          "|" +
          /\d+(?:_\d+)*n/.source +
          "|" +
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
            .source) +
        ")" +
        /(?![\w$])/.source
    ),
    lookbehind: !0,
  },
  operator:
    /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
});
Prism.languages.javascript["class-name"][0].pattern =
  /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
        /\//.source +
        "(?:" +
        /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/
          .source +
        "|" +
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
          .source +
        ")" +
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex,
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/,
    },
  },
  "function-variable": {
    pattern:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function",
  },
  parameter: [
    {
      pattern:
        /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript,
    },
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript,
    },
    {
      pattern:
        /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript,
    },
    {
      pattern:
        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript,
    },
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
Prism.languages.insertBefore("javascript", "string", {
  hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
  "template-string": {
    pattern:
      /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": { pattern: /^`|`$/, alias: "string" },
      interpolation: {
        pattern:
          /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation",
          },
          rest: Prism.languages.javascript,
        },
      },
      string: /[\s\S]+/,
    },
  },
  "string-property": {
    pattern:
      /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
  },
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern:
      /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property",
  },
});
Prism.languages.markup &&
  (Prism.languages.markup.tag.addInlined("script", "javascript"),
  Prism.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
      .source,
    "javascript"
  ));
Prism.languages.js = Prism.languages.javascript;
Prism.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:false|true)\b/,
  null: { pattern: /\bnull\b/, alias: "keyword" },
};
Prism.languages.webmanifest = Prism.languages.json;
var si = {},
  li;
function gc() {
  return (
    li ||
      ((li = 1),
      (Prism.languages.python = {
        comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
        "string-interpolation": {
          pattern:
            /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
          greedy: !0,
          inside: {
            interpolation: {
              pattern:
                /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
              lookbehind: !0,
              inside: {
                "format-spec": {
                  pattern: /(:)[^:(){}]+(?=\}$)/,
                  lookbehind: !0,
                },
                "conversion-option": {
                  pattern: /![sra](?=[:}]$)/,
                  alias: "punctuation",
                },
                rest: null,
              },
            },
            string: /[\s\S]+/,
          },
        },
        "triple-quoted-string": {
          pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
          greedy: !0,
          alias: "string",
        },
        string: {
          pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
          greedy: !0,
        },
        function: {
          pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
          lookbehind: !0,
        },
        "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
        decorator: {
          pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
          lookbehind: !0,
          alias: ["annotation", "punctuation"],
          inside: { punctuation: /\./ },
        },
        keyword:
          /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
        builtin:
          /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
        boolean: /\b(?:False|None|True)\b/,
        number:
          /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
        operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
        punctuation: /[{}[\];(),.:]/,
      }),
      (Prism.languages.python[
        "string-interpolation"
      ].inside.interpolation.inside.rest = Prism.languages.python),
      (Prism.languages.py = Prism.languages.python)),
    si
  );
}
gc();
var pc = j("<button> </button>"),
  bc = j("<div><div> </div> <!></div>"),
  hc = j("<div></div>"),
  mc =
    j(`<div class="select-none px-3 py-[12px] border-r border-[var(--border-color-default)]
               text-[var(--color-text-muted)] text-right overflow-hidden
               bg-[var(--color-bg-surface)] tabular-nums min-h-[180px] max-h-[480px]"></div>`),
  _c = j(
    '<div class="w-full border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-default)]"><!> <div><!> <div class="relative flex-1 min-h-[180px] max-h-[480px]"><div aria-hidden="true"><!></div> <textarea spellcheck="false"></textarea></div></div></div>'
  );
function bs(r, e) {
  Be(e, !0);
  let a = T(e, "code", 15, ""),
    n = T(e, "language", 3, "txt"),
    o = T(e, "title", 3, "Code"),
    i = T(e, "showCopyButton", 3, !0),
    s = T(e, "showLineNumbers", 3, !1),
    l = T(e, "editable", 3, !1),
    u = T(e, "activeLine", 3, !1),
    f = T(e, "sz", 3, "md"),
    h = be(null),
    y = be(null),
    b = be(null),
    k = be(!1),
    C = be(0),
    x = be(0),
    g = be(12);
  const c = _(() =>
      a().split(`
`)
    ),
    v = {
      xs: "leading-4",
      sm: "leading-[1.1rem]",
      md: "leading-[1.3rem]",
      lg: "leading-[1.45rem]",
      xl: "leading-7",
    };
  let d = be(20);
  function p(I) {
    return I.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function S(I, ae) {
    if (I === "") return "";
    if (ae === "txt") return p(I);
    const W = ae === "html" ? "markup" : ae,
      ee = ii.languages[W];
    return ii.highlight(I, ee, W);
  }
  const P = _(() => S(a(), n()));
  function A() {
    if (!u() || !t(h)) return;
    const I = t(h).selectionStart ?? 0,
      ae = a().slice(0, I);
    z(
      C,
      ae.split(`
`).length - 1
    );
  }
  function M(I) {
    const ae = I.currentTarget;
    (t(y) && (t(y).scrollTop = ae.scrollTop),
      t(b) &&
        ((t(b).scrollTop = ae.scrollTop),
        (t(b).scrollLeft = ae.scrollLeft),
        z(x, ae.scrollTop, !0)));
  }
  We(() => {
    if ((f(), !t(h))) return;
    const I = getComputedStyle(t(h)),
      ae = Number.parseFloat(I.lineHeight);
    Number.isNaN(ae) || z(d, ae, !0);
    const W = Number.parseFloat(I.paddingTop);
    Number.isNaN(W) || z(g, W, !0);
  });
  async function F() {
    (await navigator.clipboard.writeText(a()),
      z(k, !0),
      setTimeout(() => z(k, !1), 1200));
  }
  var K = _c(),
    H = m(K);
  {
    var ie = (I) => {
      var ae = bc(),
        W = m(ae),
        ee = m(W),
        se = D(W, 2);
      {
        var me = (N) => {
          var E = pc();
          E.__click = F;
          let ne;
          var O = m(E);
          (B(() => {
            ((ne = q(
              E,
              1,
              "px-3 py-0.5 text-xs rounded bg-[var(--color-primary)] text-white hover:opacity-[var(--opacity-hover)] transition",
              null,
              ne,
              { "!bg-green-600": t(k) }
            )),
              X(O, t(k) ? "Copied" : "Copy"));
          }),
            w(N, E));
        };
        Z(se, (N) => {
          i() && N(me);
        });
      }
      (B(() => {
        (q(
          ae,
          1,
          `px-3 py-1 bg-[var(--color-bg-muted)] font-semibold uppercase flex items-center justify-between ${Ne[f()] ?? ""}`,
          "svelte-dvc4kn"
        ),
          X(ee, o()));
      }),
        w(I, ae));
    };
    Z(H, (I) => {
      o() && I(ie);
    });
  }
  var ce = D(H, 2),
    he = m(ce);
  {
    var J = (I) => {
      var ae = mc();
      (at(
        ae,
        21,
        () => t(c),
        iu,
        (W, ee, se) => {
          var me = hc();
          ((me.textContent = se + 1),
            B(() => q(me, 1, Y(v[f()]), "svelte-dvc4kn")),
            w(W, me));
        }
      ),
        ot(
          ae,
          (W) => z(y, W),
          () => t(y)
        ),
        w(I, ae));
    };
    Z(he, (I) => {
      s() && I(J);
    });
  }
  var te = D(he, 2),
    le = m(te);
  let R;
  var G = m(le);
  (cu(G, () => t(P)),
    ot(
      le,
      (I) => z(b, I),
      () => t(b)
    ));
  var $ = D(le, 2);
  (($.__input = function (...I) {
    (l() ? A : void 0)?.apply(this, I);
  }),
    ($.__keyup = function (...I) {
      (l() ? A : void 0)?.apply(this, I);
    }),
    ($.__click = function (...I) {
      (l() ? A : void 0)?.apply(this, I);
    }),
    ($.__mouseup = function (...I) {
      (l() ? A : void 0)?.apply(this, I);
    }),
    ot(
      $,
      (I) => z(h, I),
      () => t(h)
    ),
    B(() => {
      (q(
        ce,
        1,
        `flex font-mono ${Ne[f()] ?? ""} ${v[f()] ?? ""}`,
        "svelte-dvc4kn"
      ),
        (R = q(
          le,
          1,
          `cv-highlight cv-layer ${Ne[f()] ?? ""} ${v[f()] ?? ""}`,
          "svelte-dvc4kn",
          R,
          { "cv-active-line": u() && l() }
        )),
        gt(
          le,
          u() && l()
            ? `--cv-line-height: ${t(d)}px; --cv-active-line-top: ${t(g) + t(C) * t(d) - t(x)}px;`
            : void 0
        ),
        ($.readOnly = !l()),
        q(
          $,
          1,
          `cv-input cv-layer ${Ne[f()] ?? ""} ${v[f()] ?? ""}`,
          "svelte-dvc4kn"
        ));
    }),
    Ct("scroll", $, M),
    Ct("focus", $, function (...I) {
      (l() ? A : void 0)?.apply(this, I);
    }),
    yu($, a),
    w(r, K),
    Re());
}
it(["click", "input", "keyup", "mouseup"]);
const xc = {
    components: {
      colorPicker: {
        text: "Choose color",
        color: "Color",
        clear: "Clear",
        placeholder: "No color selected",
        selectedColor: "Selected color",
      },
      datePicker: {
        text: "Choose date",
        placeholder: "No date selected",
        date: "Date",
        clear: "Clear",
        selectedDate: "Selected date",
      },
      dialog: { ok: "OK", cancel: "Cancel" },
      filePicker: {
        text: "Choose files",
        clear: "Clear",
        dragDrop: "Drag and drop files here or click to browse",
        accepted: "Accepted",
        selectedFiles: "Selected files",
        placeholder: "No files selected",
        fileCount: "{n} file(s) selected",
        totalSize: "Total size",
      },
      menu: { subtitle: "Menu with size options" },
      timePicker: {
        text: "Choose time",
        placeholder: "No time selected",
        clear: "Clear",
        hour: "Hour",
        minute: "Minute",
        period: "Period",
        selectedTime: "Selected time",
        switchTo12h: "12h",
        switchTo24h: "24h",
      },
    },
  },
  wc = {
    components: {
      colorPicker: {
        text: "Выберете цвет",
        color: "Цвет",
        clear: "Сбросить",
        placeholder: "Цвет не выбран",
        selectedColor: "Выбранный цвет",
      },
      datePicker: {
        text: "Выбрать дату",
        placeholder: "Дата не выбрана",
        date: "Дата",
        clear: "Сбросить",
        selectedDate: "Выбранная дата",
      },
      dialog: { ok: "ОК", cancel: "Отмена" },
      filePicker: {
        text: "Выбрать файлы",
        clear: "Сбросить",
        dragDrop: "Перетащите файлы сюда или нажмите, чтобы выбрать",
        accepted: "Допустимые форматы",
        selectedFiles: "Выбранные файлы",
        placeholder: "Файлы не выбраны",
        fileCount: "{n} файл(ов) выбрано",
        totalSize: "Общий размер",
      },
      menu: { subtitle: "Меню с опциями размеров" },
      timePicker: {
        text: "Выбрать время",
        placeholder: "Время не выбрано",
        clear: "Очистить",
        hour: "Часы",
        minute: "Минуты",
        period: "Период",
        selectedTime: "Выбранное время",
        switchTo12h: "12ч",
        switchTo24h: "24ч",
      },
    },
  },
  yc = {
    components: {
      colorPicker: {
        text: "Elegir color",
        color: "Color",
        clear: "Limpiar",
        placeholder: "Ningún color seleccionado",
        selectedColor: "Color seleccionado",
      },
      datePicker: {
        text: "Elegir fecha",
        placeholder: "Sin fecha",
        date: "Fecha",
        clear: "Limpiar",
        selectedDate: "Fecha seleccionada",
      },
      dialog: { ok: "OK", cancel: "Cancelar" },
      filePicker: {
        text: "Elegir archivos",
        clear: "Limpiar",
        dragDrop: "Arrastra los archivos aquí o haz clic para seleccionar",
        accepted: "Formatos permitidos",
        selectedFiles: "Archivos seleccionados",
        placeholder: "No hay archivos",
        fileCount: "{n} archivo(s) seleccionado(s)",
        totalSize: "Tamaño total",
      },
      menu: { subtitle: "Menú con opciones de tamaño" },
      timePicker: {
        text: "Elegir hora",
        placeholder: "Ninguna hora seleccionada",
        clear: "Limpiar",
        hour: "Hora",
        minute: "Minuto",
        period: "Período",
        selectedTime: "Hora seleccionada",
        switchTo12h: "12h",
        switchTo24h: "24h",
      },
    },
  },
  nn = { en: xc, ru: wc, es: yc };
var kc = j(
  '<div><div class="text-md font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <input type="color" class="invisible absolute w-px h-px" value="#000000"/> <div class="mt-3 p-4 border border-dashed border-[var(--border-color-default)] rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] flex items-center justify-between gap-3" aria-live="polite"><div><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div> <div class="w-12 h-12 rounded-[var(--radius-sm)] border border-[var(--border-color-default)] shadow-inner"></div></div></div>'
);
function Cc(r, e) {
  Be(e, !0);
  let a = T(e, "value", 15, null),
    n = T(e, "disabled", 3, !1),
    o = T(e, "clearable", 3, !0),
    i = T(e, "class", 3, ""),
    s = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "value",
      "label",
      "placeholder",
      "disabled",
      "clearable",
      "onChange",
      "class",
    ]);
  const l = Wt("lang") ?? null,
    u = _(() => l?.value ?? "en"),
    f = _(() => nn[t(u)].components.colorPicker),
    h = _(() => e.label ?? t(f).text),
    y = _(() => e.placeholder ?? t(f).placeholder);
  let b;
  const k = "inline-block w-full",
    C = _(() => U(k, i())),
    x = _(() => !!a()),
    g = _(() => a() ?? "transparent");
  We(() => {
    b && (b.value = a() || "#000000");
  });
  function c() {
    n() ||
      (typeof b?.showPicker == "function"
        ? b.showPicker()
        : (b?.focus(), b?.click()));
  }
  function v(I) {
    const W = I.target.value || null;
    (a(W), e.onChange?.(W));
  }
  function d() {
    o() && (a(null), b && (b.value = "#000000"), e.onChange?.(null));
  }
  var p = kc();
  wt(p, () => ({ class: t(C), ...s }));
  var S = m(p),
    P = m(S),
    A = D(S, 2),
    M = m(A);
  $e(M, {
    onClick: c,
    get disabled() {
      return n();
    },
    sz: "xs",
    children: (I, ae) => {
      var W = Oe();
      (B(() => X(W, t(f).color)), w(I, W));
    },
    $$slots: { default: !0 },
  });
  var F = D(M, 2);
  {
    var K = (I) => {
      {
        let ae = _(() => !t(x) || n());
        $e(I, {
          onClick: d,
          variant: "danger",
          get disabled() {
            return t(ae);
          },
          sz: "xs",
          children: (W, ee) => {
            var se = Oe();
            (B(() => X(se, t(f).clear)), w(W, se));
          },
          $$slots: { default: !0 },
        });
      }
    };
    Z(F, (I) => {
      o() && I(K);
    });
  }
  var H = D(A, 2);
  ((H.__change = v),
    ot(
      H,
      (I) => (b = I),
      () => b
    ));
  var ie = D(H, 2),
    ce = m(ie),
    he = m(ce),
    J = m(he),
    te = D(he, 2),
    le = m(te);
  {
    var R = (I) => {
        var ae = Oe();
        (B(() => X(ae, a())), w(I, ae));
      },
      G = (I) => {
        var ae = Oe();
        (B(() => X(ae, t(y))), w(I, ae));
      };
    Z(le, (I) => {
      t(x) ? I(R) : I(G, !1);
    });
  }
  var $ = D(ce, 2);
  (B(() => {
    (X(P, `${t(h) ?? ""}:`),
      (H.disabled = n()),
      X(J, t(f).selectedColor),
      we($, "aria-label", t(x) ? `Preview of ${a()}` : "No color selected"),
      gt($, `background:${t(g)}`));
  }),
    w(r, p),
    Re());
}
it(["change"]);
var Sc = j(
  '<div><div class="text-md font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <input type="date" class="invisible absolute w-px h-px"/> <div class="mt-3 p-4 bg-[var(--color-bg-surface)] text-center" aria-live="polite"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div></div>'
);
function Pc(r, e) {
  Be(e, !0);
  let a = T(e, "value", 15, null),
    n = T(e, "disabled", 3, !1),
    o = T(e, "clearable", 3, !0),
    i = T(e, "class", 3, ""),
    s = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "value",
      "min",
      "max",
      "label",
      "placeholder",
      "locale",
      "formatOptions",
      "disabled",
      "clearable",
      "onChange",
      "class",
    ]);
  const l = Wt("lang") ?? null,
    u = _(() => l?.value ?? "en"),
    f = _(() => nn[t(u)].components.datePicker),
    h = _(() => e.label ?? t(f).text),
    y = _(() => e.placeholder ?? t(f).placeholder);
  let b;
  const k = "inline-block w-full",
    C = _(() => U(k, i())),
    x = _(() => !!a()),
    g = _(() => Uu(a(), e.locale, e.formatOptions));
  We(() => {
    b && (b.value = a() ?? "");
  });
  function c() {
    n() ||
      (typeof b?.showPicker == "function"
        ? b.showPicker()
        : (b?.focus(), b?.click()));
  }
  function v(G) {
    const I = G.target.value || null;
    (a(I), e.onChange?.(I));
  }
  function d() {
    o() && (a(null), b && (b.value = ""), e.onChange?.(null));
  }
  var p = Sc();
  wt(p, () => ({ class: t(C), ...s }));
  var S = m(p),
    P = m(S),
    A = D(S, 2),
    M = m(A);
  $e(M, {
    onClick: c,
    get disabled() {
      return n();
    },
    sz: "xs",
    children: (G, $) => {
      var I = Oe();
      (B(() => X(I, t(f).date)), w(G, I));
    },
    $$slots: { default: !0 },
  });
  var F = D(M, 2);
  {
    var K = (G) => {
      {
        let $ = _(() => !t(x) || n());
        $e(G, {
          onClick: d,
          variant: "danger",
          get disabled() {
            return t($);
          },
          sz: "xs",
          children: (I, ae) => {
            var W = Oe();
            (B(() => X(W, t(f).clear)), w(I, W));
          },
          $$slots: { default: !0 },
        });
      }
    };
    Z(F, (G) => {
      o() && G(K);
    });
  }
  var H = D(A, 2);
  ((H.__change = v),
    ot(
      H,
      (G) => (b = G),
      () => b
    ));
  var ie = D(H, 2),
    ce = m(ie),
    he = m(ce),
    J = D(ce, 2),
    te = m(J);
  {
    var le = (G) => {
        var $ = Oe();
        (B(() => X($, t(g))), w(G, $));
      },
      R = (G) => {
        var $ = Oe();
        (B(() => X($, t(y))), w(G, $));
      };
    Z(te, (G) => {
      t(x) ? G(le) : G(R, !1);
    });
  }
  (B(() => {
    (X(P, `${t(h) ?? ""}:`),
      we(H, "min", e.min),
      we(H, "max", e.max),
      (H.disabled = n()),
      X(he, t(f).selectedDate));
  }),
    w(r, p),
    Re());
}
it(["change"]);
var Ec = j("<h3> </h3> <p> </p>", 1),
  Ac = j('<div class="mt-3"><!></div>'),
  zc = j(
    '<div class="fixed inset-0 z-[var(--z-modal)] bg-oklch(0_0_0/var(--opacity-overlay)) flex items-center justify-center p-4" role="presentation" tabindex="-1"><div role="dialog" aria-modal="true"><div><!> <!></div> <div><!> <!></div></div></div>'
  ),
  Fc = j("<div><!></div>"),
  Tc = j(
    '<div class="fixed top-4 right-4 z-[var(--z-modal)]" role="dialog" aria-modal="false" tabindex="-1"><div><div><!> <!></div> <div><!> <!></div></div></div>'
  );
function mo(r, e) {
  Be(e, !0);
  const a = (J) => {
    var te = Ec(),
      le = Ce(te),
      R = m(le),
      G = D(le, 2),
      $ = m(G);
    (B(
      (I, ae) => {
        (q(le, 1, I), X(R, o()), q(G, 1, ae), X($, i()));
      },
      [
        () =>
          Y(
            U(
              "mb-2 font-[var(--font-weight-semibold)] color-[var(--color-text-default)]",
              t(K)
            )
          ),
        () =>
          Y(
            U(
              "leading-[var(--line-height-normal)] color-[var(--color-text-muted)]",
              t(H)
            )
          ),
      ]
    ),
      w(J, te));
  };
  let n = T(e, "open", 3, !1),
    o = T(e, "title", 3, ""),
    i = T(e, "message", 3, ""),
    s = T(e, "onConfirm", 3, () => {}),
    l = T(e, "onCancel", 3, () => {}),
    u = T(e, "onClose", 3, () => {}),
    f = T(e, "modal", 3, !0),
    h = T(e, "class", 3, ""),
    y = T(e, "sz", 3, "md");
  const b = Wt("lang") ?? null,
    k = _(() => b?.value ?? "en"),
    C = _(() => nn[t(k)].components.dialog);
  let x = be(null),
    g = null;
  function c() {
    (s()(), u()());
  }
  function v() {
    (l()(), u()());
  }
  function d(J) {
    J.key === "Escape" && (J.preventDefault(), v());
  }
  const p =
      "bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)] shadow-lg min-w-80 max-w-md w-full border border-[var(--border-color-default)]",
    S = {
      xs: "p-[var(--spacing-sm)]",
      sm: "p-[var(--spacing-md)]",
      md: "p-[var(--spacing-lg)]",
      lg: "p-[var(--spacing-xl)]",
      xl: "p-[var(--spacing-xl)]",
    },
    P = { xs: Ne.md, sm: Ne.md, md: Ne.xl, lg: Ne.xl, xl: "text-2xl" },
    A = _(() => U(p, h())),
    M = _(() => S[y()]),
    F = _(() => U(t(M), "pt-0")),
    K = _(() => P[y()]),
    H = _(() => Ne[y()]);
  We(
    () => (
      g?.(),
      n() && t(x)
        ? queueMicrotask(() => {
            (gs(t(x)), f() && (g = ps(t(x))));
          })
        : (g = null),
      () => {
        (g?.(), (g = null));
      }
    )
  );
  var ie = Me(),
    ce = Ce(ie);
  {
    var he = (J) => {
      var te = Me(),
        le = Ce(te);
      {
        var R = ($) => {
            var I = zc();
            I.__keydown = d;
            var ae = m(I),
              W = m(ae),
              ee = m(W);
            a(ee);
            var se = D(ee, 2);
            {
              var me = (O) => {
                var de = Ac(),
                  fe = m(de);
                (Je(fe, () => e.children ?? Q, y), w(O, de));
              };
              Z(se, (O) => {
                e.children && O(me);
              });
            }
            var N = D(W, 2),
              E = m(N);
            $e(E, {
              get sz() {
                return y();
              },
              variant: "primary",
              onClick: c,
              children: (O, de) => {
                var fe = Oe();
                (B(() => X(fe, t(C).ok)), w(O, fe));
              },
              $$slots: { default: !0 },
            });
            var ne = D(E, 2);
            ($e(ne, {
              get sz() {
                return y();
              },
              variant: "secondary",
              onClick: v,
              children: (O, de) => {
                var fe = Oe();
                (B(() => X(fe, t(C).cancel)), w(O, fe));
              },
              $$slots: { default: !0 },
            }),
              ot(
                ae,
                (O) => z(x, O),
                () => t(x)
              ),
              B(
                (O) => {
                  (q(ae, 1, Y(t(A))),
                    we(ae, "aria-label", o()),
                    q(W, 1, Y(t(M))),
                    q(N, 1, O));
                },
                [() => Y(U("flex gap-2 justify-end", t(F)))]
              ),
              w($, I));
          },
          G = ($) => {
            var I = Tc();
            I.__keydown = d;
            var ae = m(I),
              W = m(ae),
              ee = m(W);
            a(ee);
            var se = D(ee, 2);
            {
              var me = (O) => {
                var de = Fc(),
                  fe = m(de);
                (Je(fe, () => e.children ?? Q, y),
                  B((ge) => q(de, 1, ge), [() => Y(U("mt-3", t(H)))]),
                  w(O, de));
              };
              Z(se, (O) => {
                e.children && O(me);
              });
            }
            var N = D(W, 2),
              E = m(N);
            $e(E, {
              get sz() {
                return y();
              },
              variant: "primary",
              onClick: c,
              children: (O, de) => {
                var fe = Oe();
                (B(() => X(fe, t(C).ok)), w(O, fe));
              },
              $$slots: { default: !0 },
            });
            var ne = D(E, 2);
            ($e(ne, {
              get sz() {
                return y();
              },
              variant: "secondary",
              onClick: v,
              children: (O, de) => {
                var fe = Oe();
                (B(() => X(fe, t(C).cancel)), w(O, fe));
              },
              $$slots: { default: !0 },
            }),
              ot(
                ae,
                (O) => z(x, O),
                () => t(x)
              ),
              B(
                (O) => {
                  (we(I, "aria-label", o()),
                    q(ae, 1, Y(t(A))),
                    q(W, 1, Y(t(M))),
                    q(N, 1, O));
                },
                [() => Y(U("flex gap-2 justify-end", t(F)))]
              ),
              w($, I));
          };
        Z(le, ($) => {
          f() ? $(R) : $(G, !1);
        });
      }
      w(J, te);
    };
    Z(ce, (J) => {
      n() && J(he);
    });
  }
  (w(r, ie), Re());
}
it(["keydown"]);
var Lc = j("<span> </span>"),
  Mc = j('<div aria-hidden="true"><!></div>'),
  Dc = j("<textarea></textarea>"),
  Nc = j("<input/>"),
  Ic = j('<span aria-hidden="true"><!></span>'),
  Oc = ir(
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 3L21 21" stroke="currentColor" stroke-width="2"></path><path d="M10.5 10.677a2 2 0 002.823 2.823" stroke="currentColor" stroke-width="2"></path><path d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c2.4 3.6 6 6 9 6 1.4 0 2.8-.5 4.1-1.2" stroke="currentColor" stroke-width="2"></path><path d="M12 6c3 0 6 2.4 9 6-.6.9-1.3 1.7-2 2.5" stroke="currentColor" stroke-width="2"></path></svg>'
  ),
  Bc = ir(
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"></path><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"></circle></svg>'
  ),
  Rc = j('<button type="button"><!></button>'),
  jc = j(
    '<button type="button" tabindex="-1" aria-label="Clear" title="Clear"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>'
  ),
  Vc = j("<label><!> <div><!> <!> <div><!> <!> <!></div></div></label>");
function Ha(r, e) {
  Be(e, !0);
  let a = T(e, "as", 3, "input"),
    n = T(e, "sz", 3, "md"),
    o = T(e, "variant", 3, "default"),
    i = T(e, "clearable", 3, !0),
    s = T(e, "rows", 3, 3),
    l = T(e, "parseNumber", 3, !1),
    u = T(e, "value", 15, ""),
    f = T(e, "class", 3, ""),
    h = T(e, "invalid", 3, !1),
    y = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "as",
      "label",
      "sz",
      "variant",
      "clearable",
      "rows",
      "parseNumber",
      "leading",
      "trailing",
      "onChange",
      "value",
      "class",
      "id",
      "type",
      "invalid",
      "describedBy",
    ]);
  const b =
      "w-full outline-none transition-colors duration-[var(--transition-fast)] ease-[var(--timing-default)] box-border rounded-[var(--radius-md)] border focus:border-[var(--border-color-focus)] focus:ring-2 focus:ring-[var(--border-color-focus)] disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
    k = {
      xs: "px-2 h-6",
      sm: "px-3 h-7",
      md: "px-4 h-8",
      lg: "px-5 h-9",
      xl: "px-6 h-10",
    },
    C = {
      default:
        "bg-[var(--color-bg-surface)] [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-[var(--border-color-default)]",
      filled:
        "bg-[var(--color-bg-muted)] [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-[var(--border-color-default)]",
      neutral:
        "bg-transparent [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-transparent hover:border-[var(--border-color-default)] focus:border-[var(--border-color-focus)]",
    },
    x = _(() => U("flex flex-col gap-1", f())),
    g = _(() =>
      a() === "textarea"
        ? U(b, C[o()], Ne.md, "px-4")
        : U(b, k[n()], Ne[n()], C[o()])
    ),
    c = _(() =>
      U("relative flex items-stretch", a() === "textarea" && "items-start")
    ),
    v = _(() => e.id ?? rn("fld-")),
    d = _(() => (a() === "input" ? e.type || y.type || "text" : void 0)),
    p = _(() => a() === "input" && t(d) === "number"),
    S = _(() => a() === "input" && t(d) === "password");
  let P = be(!1);
  function A(O) {
    if (l() && t(p)) {
      if (O === "" || O === "-" || O === "." || O === "-.") return O;
      const de = Number(O);
      return Number.isNaN(de) ? "" : de;
    }
    return O;
  }
  function M(O) {
    const fe = O.target.value,
      ge = A(fe);
    (u(ge), e.onChange?.(ge));
  }
  function F() {
    const O = l() && t(p) ? 0 : "";
    (u(O), e.onChange?.(O));
  }
  const K = _(() => String(u() ?? "")),
    H = _(() => i() && a() === "input" && t(K).length > 0 && !t(p)),
    ie = _(() => !!e.trailing || t(H) || t(S)),
    ce = "[color:var(--color-text-muted)]";
  var he = Vc(),
    J = m(he);
  {
    var te = (O) => {
      var de = Lc(),
        fe = m(de);
      (B(
        (ge) => {
          (q(de, 1, ge), X(fe, e.label));
        },
        [() => Y(U(Ne[n()], "font-medium", ce))]
      ),
        w(O, de));
    };
    Z(J, (O) => {
      e.label && O(te);
    });
  }
  var le = D(J, 2),
    R = m(le);
  {
    var G = (O) => {
      const de = _(() => typeof e.leading == "function");
      var fe = Mc(),
        ge = m(fe);
      {
        var ze = (Ae) => {
            var ve = Me(),
              Se = Ce(ve);
            (Je(Se, () => e.leading), w(Ae, ve));
          },
          Pe = (Ae) => {
            var ve = Oe();
            (B(() => X(ve, e.leading)), w(Ae, ve));
          };
        Z(ge, (Ae) => {
          t(de) ? Ae(ze) : Ae(Pe, !1);
        });
      }
      (B(
        (Ae) => q(fe, 1, Ae),
        [
          () =>
            Y(
              U(
                "absolute inset-y-0 left-2 flex items-center [color:var(--color-text-muted)]"
              )
            ),
        ]
      ),
        w(O, fe));
    };
    Z(R, (O) => {
      e.leading && O(G);
    });
  }
  var $ = D(R, 2);
  {
    var I = (O) => {
        var de = Dc();
        (wt(
          de,
          (fe) => ({
            ...y,
            id: t(v),
            rows: s(),
            class: fe,
            value: t(K),
            "aria-invalid": h() || void 0,
            "aria-describedby": e.describedBy,
            oninput: M,
          }),
          [() => U(t(g), t(ie) && "pr-8", e.leading && "pl-8")]
        ),
          w(O, de));
      },
      ae = (O) => {
        var de = Nc();
        (wt(
          de,
          (fe) => ({
            ...y,
            id: t(v),
            type: t(S) ? (t(P) ? "text" : "password") : t(d),
            inputmode: t(p) ? "decimal" : void 0,
            class: fe,
            value: t(K),
            "aria-invalid": h() || void 0,
            "aria-describedby": e.describedBy,
            oninput: M,
          }),
          [() => U(t(g), t(ie) && "pr-8", e.leading && "pl-8")],
          void 0,
          void 0,
          void 0,
          !0
        ),
          w(O, de));
      };
    Z($, (O) => {
      a() === "textarea" ? O(I) : O(ae, !1);
    });
  }
  var W = D($, 2),
    ee = m(W);
  {
    var se = (O) => {
      const de = _(() => typeof e.trailing == "function");
      var fe = Ic(),
        ge = m(fe);
      {
        var ze = (Ae) => {
            var ve = Me(),
              Se = Ce(ve);
            (Je(Se, () => e.trailing), w(Ae, ve));
          },
          Pe = (Ae) => {
            var ve = Oe();
            (B(() => X(ve, e.trailing)), w(Ae, ve));
          };
        Z(ge, (Ae) => {
          t(de) ? Ae(ze) : Ae(Pe, !1);
        });
      }
      w(O, fe);
    };
    Z(ee, (O) => {
      e.trailing && O(se);
    });
  }
  var me = D(ee, 2);
  {
    var N = (O) => {
      var de = Rc();
      ((de.__mousedown = (Pe) => Pe.preventDefault()),
        (de.__click = () => z(P, !t(P))));
      var fe = m(de);
      {
        var ge = (Pe) => {
            var Ae = Oc();
            w(Pe, Ae);
          },
          ze = (Pe) => {
            var Ae = Bc();
            w(Pe, Ae);
          };
        Z(fe, (Pe) => {
          t(P) ? Pe(ge) : Pe(ze, !1);
        });
      }
      (B(
        (Pe) => {
          (q(de, 1, Pe),
            we(de, "aria-label", t(P) ? "Hide password" : "Show password"));
        },
        [
          () =>
            Y(
              U(
                "password-toggle [color:var(--color-text-muted)] hover:opacity-[var(--opacity-hover)]"
              )
            ),
        ]
      ),
        w(O, de));
    };
    Z(me, (O) => {
      t(S) && O(N);
    });
  }
  var E = D(me, 2);
  {
    var ne = (O) => {
      var de = jc();
      ((de.__mousedown = (fe) => fe.preventDefault()),
        (de.__click = F),
        B(
          (fe) => q(de, 1, fe),
          [
            () =>
              Y(
                U(
                  "[color:var(--color-text-muted)] hover:opacity-[var(--opacity-hover)]"
                )
              ),
          ]
        ),
        w(O, de));
    };
    Z(E, (O) => {
      t(H) && O(ne);
    });
  }
  (B(
    (O) => {
      (we(he, "for", t(v)), q(he, 1, Y(t(x))), q(le, 1, Y(t(c))), q(W, 1, O));
    },
    [() => Y(U("absolute inset-y-0 right-2 flex items-center gap-1"))]
  ),
    w(r, he),
    Re());
}
it(["mousedown", "click"]);
var qc = j('<p class="text-xs mt-1 [color:var(--color-text-muted)]"> </p>'),
  Uc = j('<p class="text-sm mt-1 [color:var(--color-text-muted)]"> <!></p>'),
  Hc = j(
    '<div><input type="file" class="hidden"/> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <div role="button"><p class="text-sm [color:var(--color-text-muted)]"> </p> <!></div> <div class="mt-3 p-4 bg-[var(--color-bg-surface)] text-center" aria-live="polite"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)] break-words"><!></p> <!></div></div>'
  );
function Kc(r, e) {
  Be(e, !0);
  let a = T(e, "accept", 3, "*/*"),
    n = T(e, "multiple", 3, !1),
    o = T(e, "disabled", 3, !1),
    i = T(e, "clearable", 3, !0),
    s = T(e, "value", 3, null),
    l = T(e, "class", 3, ""),
    u = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "accept",
      "multiple",
      "label",
      "disabled",
      "clearable",
      "placeholder",
      "value",
      "onFilesSelected",
      "class",
    ]);
  const f = Wt("lang"),
    h = _(() => nn[f.value].components.filePicker),
    y = _(() => e.label ?? t(h).text),
    b = _(() => e.placeholder ?? t(h).placeholder);
  let k,
    C = _(s),
    x = be(!1);
  const g = "inline-block w-full",
    c = _(() => U(g, l())),
    v = _(() => !!(t(C) && t(C).length > 0)),
    d = _(() =>
      t(C)
        ? Array.from(t(C))
            .map((ge) => ge.name)
            .join(", ")
        : ""
    );
  function p() {
    o() || k?.click();
  }
  function S(ge) {
    const Pe = ge.target.files;
    (z(C, Pe), Pe && Pe.length > 0 && e.onFilesSelected?.(Pe));
  }
  function P(ge) {
    if ((ge.preventDefault(), z(x, !1), o())) return;
    const ze = ge.dataTransfer?.files;
    (z(C, ze || null), ze && ze.length > 0 && e.onFilesSelected?.(ze));
  }
  function A(ge) {
    ge.preventDefault();
  }
  function M(ge) {
    (ge.preventDefault(), o() || z(x, !0));
  }
  function F(ge) {
    (ge.preventDefault(), z(x, !1));
  }
  function K(ge) {
    o() ||
      ((ge.key === "Enter" || ge.key === " ") && (ge.preventDefault(), p()));
  }
  function H() {
    i() && (z(C, null), k && (k.value = ""), e.onFilesSelected?.(null));
  }
  var ie = Hc();
  wt(ie, () => ({ class: t(c), ...u }));
  var ce = m(ie);
  ((ce.__change = S),
    ot(
      ce,
      (ge) => (k = ge),
      () => k
    ));
  var he = D(ce, 2),
    J = m(he);
  $e(J, {
    get disabled() {
      return o();
    },
    onClick: p,
    class: "relative",
    sz: "xs",
    children: (ge, ze) => {
      var Pe = Oe();
      (B(() => X(Pe, t(y))), w(ge, Pe));
    },
    $$slots: { default: !0 },
  });
  var te = D(J, 2);
  {
    var le = (ge) => {
      {
        let ze = _(() => !t(v) || o());
        $e(ge, {
          onClick: H,
          variant: "danger",
          get disabled() {
            return t(ze);
          },
          sz: "xs",
          children: (Pe, Ae) => {
            var ve = Oe();
            (B(() => X(ve, t(h).clear)), w(Pe, ve));
          },
          $$slots: { default: !0 },
        });
      }
    };
    Z(te, (ge) => {
      i() && ge(le);
    });
  }
  var R = D(he, 2);
  let G;
  ((R.__click = p), (R.__keydown = K));
  var $ = m(R),
    I = m($),
    ae = D($, 2);
  {
    var W = (ge) => {
      var ze = qc(),
        Pe = m(ze);
      (B(() => X(Pe, `${t(h).accepted ?? ""}: ${a() ?? ""}`)), w(ge, ze));
    };
    Z(ae, (ge) => {
      a() !== "*/*" && ge(W);
    });
  }
  var ee = D(R, 2),
    se = m(ee),
    me = m(se),
    N = D(se, 2),
    E = m(N);
  {
    var ne = (ge) => {
        var ze = Oe();
        (B(() => X(ze, t(d))), w(ge, ze));
      },
      O = (ge) => {
        var ze = Oe();
        (B(() => X(ze, t(b))), w(ge, ze));
      };
    Z(E, (ge) => {
      t(v) ? ge(ne) : ge(O, !1);
    });
  }
  var de = D(N, 2);
  {
    var fe = (ge) => {
      var ze = Uc(),
        Pe = m(ze),
        Ae = D(Pe);
      {
        var ve = (Se) => {
          var L = Oe();
          (B(
            (re) => X(L, `• ${t(h).totalSize ?? ""}: ${re ?? ""} MB`),
            [
              () =>
                (
                  Array.from(t(C)).reduce((re, oe) => re + oe.size, 0) /
                  1024 /
                  1024
                ).toFixed(2),
            ]
          ),
            w(Se, L));
        };
        Z(Ae, (Se) => {
          n() && t(C).length > 1 && Se(ve);
        });
      }
      (B(
        (Se) => X(Pe, `${Se ?? ""} `),
        [() => t(h).fileCount.replace("{n}", String(t(C).length))]
      ),
        w(ge, ze));
    };
    Z(de, (ge) => {
      t(v) && t(C) && ge(fe);
    });
  }
  (B(() => {
    (we(ce, "accept", a()),
      (ce.multiple = n()),
      (G = q(
        R,
        1,
        "mt-2 p-4 border-2 border-dashed rounded-[var(--radius-md)] text-center transition-colors duration-200",
        null,
        G,
        {
          "border-[var(--color-primary)]": t(x) && !o(),
          "border-[var(--border-color-default)]": !t(x) || o(),
          "bg-[var(--color-bg-surface-hover)]": t(x) && !o(),
          "cursor-pointer": !o(),
          "opacity-[var(--opacity-disabled)]": o(),
          "cursor-not-allowed": o(),
          "cursor-copy": t(x) && !o(),
        }
      )),
      we(R, "tabindex", o() ? -1 : 0),
      we(R, "aria-disabled", o()),
      X(I, t(h).dragDrop),
      X(me, t(h).selectedFiles));
  }),
    Ct("drop", R, P),
    Ct("dragover", R, A),
    Ct("dragenter", R, M),
    Ct("dragleave", R, F),
    w(r, ie),
    Re());
}
it(["change", "click", "keydown"]);
var Gc = j("<label> </label>"),
  Wc = j('<span class="[color:var(--color-text-muted)]"> </span>'),
  Zc = j(
    '<li role="option"><button type="button" tabindex="0"> </button></li>'
  ),
  Xc = j(
    '<div role="presentation" tabindex="-1" class="fixed inset-0 z-40"></div> <ul role="listbox" tabindex="-1"></ul>',
    1
  ),
  Yc = j("<div> </div>"),
  Jc = j(
    '<div><!> <div class="w-full"><button type="button" role="combobox" aria-haspopup="listbox"><span class="min-w-0 grow truncate"><!></span> <span><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span></button></div> <!> <input type="hidden"/> <!></div>'
  );
function Ht(r, e) {
  Be(e, !0);
  let a = T(e, "options", 19, () => []),
    n = T(e, "sz", 3, "md"),
    o = T(e, "variant", 3, "default"),
    i = T(e, "value", 15, ""),
    s = T(e, "class", 3, ""),
    l = T(e, "invalid", 3, !1),
    u = T(e, "open", 15, !1);
  const f = Wt("BaseField"),
    h = _(() => e.id ?? f?.id ?? rn("sel-")),
    y = _(() => f?.name ?? t(h)),
    b = _(() => `${t(h)}-listbox`);
  let k = be(null),
    C = be(null),
    x = be(-1),
    g = be(Ye([])),
    c = be("bottom");
  const v =
      "relative w-full outline-none appearance-none cursor-pointer transition-colors duration-[var(--transition-fast)] ease-[var(--timing-default)] box-border rounded-[var(--radius-md)] border focus:border-[var(--border-color-focus)] focus:ring-2 focus:ring-[var(--border-color-focus)] [color:var(--color-text-default)] disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
    d = {
      xs: "px-2 pr-6 h-6",
      sm: "px-3 pr-8 h-7",
      md: "px-4 pr-10 h-8",
      lg: "px-5 pr-12 h-9",
      xl: "px-6 pr-14 h-10",
    },
    p = { xs: 120, sm: 144, md: 168, lg: 192, xl: 216 },
    S = {
      default:
        "border-[var(--border-color-default)] bg-[var(--color-bg-surface)]",
      filled: "border-[var(--border-color-default)] bg-[var(--color-bg-muted)]",
      neutral:
        "border-transparent bg-transparent hover:border-[var(--border-color-default)] focus:border-[var(--border-color-focus)]",
    },
    P = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-[18px] h-[18px]",
      xl: "w-5 h-5",
    },
    A = _(() => U("flex flex-col gap-1", s())),
    M = _(() => U(v, d[n()], Ne[n()], S[o()], "text-left")),
    F = _(() => e.maxHeight ?? p[n()]),
    K = _(() =>
      U(
        "z-50 border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] rounded-[var(--radius-md)] shadow-lg overflow-auto focus:outline-none"
      )
    ),
    H = _(() =>
      U(
        "w-full text-left px-4 py-2 transition-colors duration-[var(--transition-fast)] cursor-pointer",
        Ne[n()]
      )
    ),
    ie = "opacity-[var(--opacity-disabled)] cursor-not-allowed";
  let ce = be(0),
    he = be(0),
    J = be(0);
  const te = _(
    () =>
      `position:fixed;top:${t(ce)}px;left:${t(he)}px;min-width:${t(J)}px;max-height:${t(F)}px;`
  );
  (We(() => {
    const V = t(C),
      pe = t(k);
    if (u() && V && pe) {
      const ke = () => {
        const je = V.getBoundingClientRect(),
          Ie = window.innerHeight - je.bottom,
          De = je.top,
          nt = Math.min(pe.scrollHeight, t(F)),
          st = Ie < nt && De > Ie ? "top" : "bottom";
        (z(c, st, !0),
          (pe.dataset.position = st),
          st === "top"
            ? z(ce, Math.max(0, je.top - nt), !0)
            : z(ce, je.bottom, !0),
          z(he, je.left, !0),
          z(J, je.width, !0));
      };
      queueMicrotask(ke);
      const Fe = (je) => {
          V && pe && !V.contains(je.target) && !pe.contains(je.target) && I();
        },
        Te = () => ke(),
        Ge = () => ke();
      return (
        document.addEventListener("mousedown", Fe),
        window.addEventListener("scroll", Te, !0),
        window.addEventListener("resize", Ge),
        () => {
          (document.removeEventListener("mousedown", Fe),
            window.removeEventListener("scroll", Te, !0),
            window.removeEventListener("resize", Ge));
        }
      );
    }
  }),
    We(() => {
      const V = t(k);
      !u() ||
        !V ||
        queueMicrotask(() => {
          V ? z(g, Array.from(V.querySelectorAll("button")), !0) : z(g, [], !0);
        });
    }));
  function le(V) {
    if (!t(g).length || !a().length) return;
    const pe = a().length;
    let ke = V;
    for (let Fe = 0; Fe < pe; Fe++) {
      const Te = (ke + Fe) % pe;
      if (!a()[Te]?.disabled && t(g)[Te]) {
        (t(g)[Te].focus(), z(x, Te));
        return;
      }
    }
  }
  function R() {
    le(0);
  }
  function G() {
    if (!(!a().length || !t(g).length)) {
      for (let V = a().length - 1; V >= 0; V--)
        if (!a()[V]?.disabled && t(g)[V]) {
          (t(g)[V].focus(), z(x, V, !0));
          return;
        }
    }
  }
  function $() {
    e.disabled || u(!0);
  }
  function I() {
    (u(!1), z(x, -1));
  }
  function ae() {
    u() ? I() : $();
  }
  function W(V) {
    if (!u() || !a().length) return;
    const pe = a().length;
    let ke = t(x);
    for (
      let Fe = 0;
      Fe < pe && ((ke = (ke + V + pe) % pe), !!a()[ke].disabled);
      Fe++
    );
    (z(x, ke, !0), t(g)[ke] && t(g)[ke].focus());
  }
  function ee(V) {
    const pe = a()[V];
    !pe || pe.disabled || (i(pe.value), e.onChange?.(pe.value), I());
  }
  function se(V) {
    e.disabled ||
      (V.key === " " || V.key === "Enter"
        ? (V.preventDefault(), ae())
        : V.key === "ArrowDown"
          ? (V.preventDefault(), u() || $(), W(1))
          : V.key === "ArrowUp"
            ? (V.preventDefault(), u() || $(), W(-1))
            : V.key === "Escape" && u() && (V.preventDefault(), I()));
  }
  function me(V) {
    if (u()) {
      if (V.key === "Tab") {
        const pe = document.activeElement,
          ke = t(g).findIndex((Te) => Te === pe);
        let Fe = -1;
        for (let Te = a().length - 1; Te >= 0; Te--)
          if (!a()[Te]?.disabled) {
            Fe = Te;
            break;
          }
        V.shiftKey
          ? ke <= 0 && (V.preventDefault(), G())
          : ke === Fe && (V.preventDefault(), R());
        return;
      }
      V.key === "ArrowDown"
        ? (V.preventDefault(), W(1))
        : V.key === "ArrowUp"
          ? (V.preventDefault(), W(-1))
          : V.key === "Home"
            ? (V.preventDefault(), R())
            : V.key === "End"
              ? (V.preventDefault(), G())
              : V.key === "Enter" || V.key === " "
                ? (V.preventDefault(), t(x) >= 0 && ee(t(x)))
                : V.key === "Escape" && (V.preventDefault(), I());
    }
  }
  function N(V) {
    V.key === "Escape" && (V.preventDefault(), I());
  }
  var E = Jc(),
    ne = m(E);
  {
    var O = (V) => {
      var pe = Gc(),
        ke = m(pe);
      (B(
        (Fe) => {
          (we(pe, "for", `${t(h)}-hidden`), q(pe, 1, Fe), X(ke, e.label));
        },
        [() => Y(U(Ne[n()], "font-medium [color:var(--color-text-muted)]"))]
      ),
        w(V, pe));
    };
    Z(ne, (V) => {
      e.label && V(O);
    });
  }
  var de = D(ne, 2),
    fe = m(de);
  ((fe.__click = () => {
    ae();
  }),
    (fe.__keydown = se));
  var ge = m(fe),
    ze = m(ge);
  {
    var Pe = (V) => {
        var pe = Oe();
        (B(
          (ke) => X(pe, ke),
          [() => a().find((ke) => ke.value === i())?.label]
        ),
          w(V, pe));
      },
      Ae = (V) => {
        var pe = Wc(),
          ke = m(pe);
        (B(() => X(ke, e.placeholder)), w(V, pe));
      };
    Z(ze, (V) => {
      i() ? V(Pe) : V(Ae, !1);
    });
  }
  var ve = D(ge, 2),
    Se = m(ve);
  ot(
    fe,
    (V) => z(C, V),
    () => t(C)
  );
  var L = D(de, 2);
  {
    var re = (V) => {
      var pe = Xc(),
        ke = Ce(pe);
      ((ke.__click = I), (ke.__keydown = N));
      var Fe = D(ke, 2);
      ((Fe.__keydown = me),
        at(
          Fe,
          23,
          a,
          (Te) => Te.value,
          (Te, Ge, je) => {
            var Ie = Zc(),
              De = m(Ie);
            De.__click = () => ee(t(je));
            var nt = m(De);
            (B(
              (st, Pt) => {
                (we(Ie, "id", `${t(h)}-opt-${t(je)}`),
                  we(
                    Ie,
                    "aria-selected",
                    !t(Ge).disabled && t(Ge).value === i()
                  ),
                  we(Ie, "aria-disabled", t(Ge).disabled),
                  q(Ie, 1, st),
                  q(De, 1, Pt),
                  (De.disabled = t(Ge).disabled),
                  X(nt, t(Ge).label));
              },
              [
                () => Y(U(t(H), t(Ge).disabled ? ie : "")),
                () =>
                  Y(
                    U(
                      "w-full text-left focus:outline-[3px] focus:outline-offset-3 focus:outline-[var(--border-color-focus)] rounded"
                    )
                  ),
              ]
            ),
              Ct("focus", De, () => z(x, t(je), !0)),
              Ct("mouseenter", De, () => z(x, t(je), !0)),
              w(Te, Ie));
          }
        ),
        ot(
          Fe,
          (Te) => z(k, Te),
          () => t(k)
        ),
        B(() => {
          (we(Fe, "id", t(b)),
            q(Fe, 1, Y(t(K))),
            gt(Fe, t(te)),
            we(Fe, "data-position", t(c)),
            we(
              Fe,
              "aria-labelledby",
              e.label ? `${t(h)}-hidden-label` : void 0
            ),
            we(
              Fe,
              "aria-activedescendant",
              t(x) >= 0 ? `${t(h)}-opt-${t(x)}` : void 0
            ));
        }),
        w(V, pe));
    };
    Z(L, (V) => {
      u() && V(re);
    });
  }
  var oe = D(L, 2),
    _e = D(oe, 2);
  {
    var ye = (V) => {
      var pe = Yc(),
        ke = m(pe);
      (B(
        (Fe) => {
          (we(pe, "id", e.describedBy), q(pe, 1, Fe), X(ke, e.help));
        },
        [() => Y(U("[color:var(--color-text-muted)]", Ne.sm))]
      ),
        w(V, pe));
    };
    Z(_e, (V) => {
      e.help && V(ye);
    });
  }
  (B(
    (V) => {
      (q(E, 1, Y(t(A))),
        we(fe, "id", t(h)),
        q(fe, 1, Y(t(M))),
        we(fe, "aria-expanded", u()),
        we(fe, "aria-controls", t(b)),
        we(fe, "aria-describedby", e.describedBy),
        we(fe, "aria-invalid", l()),
        we(fe, "aria-required", e.required),
        (fe.disabled = e.disabled),
        q(ve, 1, V),
        q(Se, 0, Y(P[n()])),
        we(oe, "id", `${t(h)}-hidden`),
        we(oe, "name", t(y)),
        ds(oe, i() ?? ""));
    },
    [
      () =>
        Y(
          U(
            "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 [color:var(--color-text-default)]"
          )
        ),
    ]
  ),
    w(r, E),
    Re());
}
it(["click", "keydown"]);
const Qc = (r) => r;
function ui(r, { delay: e = 0, duration: a = 400, easing: n = Qc } = {}) {
  const o = +getComputedStyle(r).opacity;
  return { delay: e, duration: a, easing: n, css: (i) => `opacity: ${i * o}` };
}
var $c = ir(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M8.5 14L11.1 16.6" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M18.2 10L11.6 16.6" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path></svg>'
  ),
  ed = ir(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M9 9.5L16.7 17.3" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M16.7 9.5L9 17.3" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path></svg>'
  ),
  td = ir(
    '<svg fill="none" viewBox="0 0 27 27"><path d="M4.6 25.925H22.5C25.2 25.925 26.8 23.022 25.6 20.6195L16.6 3.80194C15.3 1.29934 11.8 1.29934 10.5 3.80194L1.5 20.6195C0.299997 23.022 1.9 25.925 4.6 25.925Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M13.9 18.0168H13.2C12.5 18.0168 12.6 17.4162 12.6 16.7154L11.9 9.30769C11.9 8.60696 12.5 8.00635 13.2 8.00635H13.9C14.6 8.00635 15.2 8.60696 15.2 9.30769L14.5 16.7154C14.5 17.4162 14.6 18.0168 13.9 18.0168Z" fill="currentColor"></path><path d="M13.5 21.9208C14.4389 21.9208 15.2 21.3382 15.2 20.6195C15.2 19.9008 14.4389 19.3181 13.5 19.3181C12.5611 19.3181 11.8 19.9008 11.8 20.6195C11.8 21.3382 12.5611 21.9208 13.5 21.9208Z" fill="currentColor"></path></svg>'
  ),
  rd = ir(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path><path d="M13 9.00003C13.718 9.00003 14.3 8.41801 14.3 7.70004C14.3 6.98207 13.718 6.40002 13 6.40002C12.282 6.40002 11.7 6.98207 11.7 7.70004C11.7 8.41801 12.282 9.00003 13 9.00003Z" fill="currentColor"></path><path d="M13 19.7C12.2 19.7 11.6 19.1 11.6 18.4V11.6C11.6 10.9 12.2 10.3 12.9 10.3H13C13.7 10.3 14.3 10.9 14.3 11.6V18.4C14.3 19.1 13.8 19.7 13 19.7Z" fill="currentColor"></path></svg>'
  ),
  ad = j('<span class="w-5 h-5 flex-shrink-0" aria-hidden="true"><!></span>'),
  nd = j(
    '<div class="font-[var(--font-weight-medium)] truncate [font-size:var(--text-md)] max-sm:[font-size:var(--text-sm)]"> </div>'
  ),
  od = j(
    '<button class="opacity-70 hover:opacity-100 transition-opacity duration-[var(--transition-fast)] ml-3" aria-label="Close"><svg width="24" height="24" viewBox="0 0 20 20" fill="none"><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button>'
  ),
  id = j(
    '<div role="status" aria-live="polite"><!> <div class="flex-1 min-w-0"><!> <div class="line-clamp-3 [font-size:var(--text-sm)] max-sm:[font-size:var(--text-xs)]"> </div></div> <!></div>'
  );
function No(r, e) {
  Be(e, !0);
  let a = T(e, "variant", 3, "info"),
    n = T(e, "showIcon", 3, !0),
    o = T(e, "closable", 3, !0),
    i = T(e, "timeout", 3, 3e3),
    s = T(e, "onClose", 3, () => {}),
    l = T(e, "class", 3, ""),
    u = be(!0);
  function f(x) {
    switch (x) {
      case "success":
        return "bg-[var(--color-bg-success)] text-[var(--color-text-success)]";
      case "danger":
        return "bg-[var(--color-bg-danger)] text-[var(--color-text-danger)]";
      case "warning":
        return "bg-[var(--color-bg-warning)] text-[var(--color-text-warning)]";
      default:
        return "bg-[var(--color-bg-page)] text-[var(--color-text-default)]";
    }
  }
  function h() {
    (z(u, !1), s()());
  }
  We(() => {
    if (i() > 0) {
      const x = setTimeout(() => h(), i());
      return () => clearTimeout(x);
    }
  });
  const y = _(() =>
    U(
      "fixed bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-[var(--radius-lg)] shadow-lg min-w-[220px] max-w-[calc(100vw-2rem)] border border-[var(--border-color-default)] backdrop-blur-sm",
      f(a()),
      l()
    )
  );
  var b = Me(),
    k = Ce(b);
  {
    var C = (x) => {
      var g = id(),
        c = m(g);
      {
        var v = (K) => {
          var H = ad(),
            ie = m(H);
          {
            var ce = (J) => {
                var te = $c();
                w(J, te);
              },
              he = (J) => {
                var te = Me(),
                  le = Ce(te);
                {
                  var R = ($) => {
                      var I = ed();
                      w($, I);
                    },
                    G = ($) => {
                      var I = Me(),
                        ae = Ce(I);
                      {
                        var W = (se) => {
                            var me = td();
                            w(se, me);
                          },
                          ee = (se) => {
                            var me = rd();
                            w(se, me);
                          };
                        Z(
                          ae,
                          (se) => {
                            a() === "warning" ? se(W) : se(ee, !1);
                          },
                          !0
                        );
                      }
                      w($, I);
                    };
                  Z(
                    le,
                    ($) => {
                      a() === "danger" ? $(R) : $(G, !1);
                    },
                    !0
                  );
                }
                w(J, te);
              };
            Z(ie, (J) => {
              a() === "success" ? J(ce) : J(he, !1);
            });
          }
          w(K, H);
        };
        Z(c, (K) => {
          n() && K(v);
        });
      }
      var d = D(c, 2),
        p = m(d);
      {
        var S = (K) => {
          var H = nd(),
            ie = m(H);
          (B(() => X(ie, e.title)), w(K, H));
        };
        Z(p, (K) => {
          e.title && K(S);
        });
      }
      var P = D(p, 2),
        A = m(P),
        M = D(d, 2);
      {
        var F = (K) => {
          var H = od();
          ((H.__click = h), w(K, H));
        };
        Z(M, (K) => {
          o() && K(F);
        });
      }
      (B(() => {
        (q(g, 1, Y(t(y))), we(P, "title", e.message), X(A, e.message));
      }),
        Yo(
          1,
          g,
          () => ui,
          () => ({ duration: 200 })
        ),
        Yo(
          2,
          g,
          () => ui,
          () => ({ duration: 200 })
        ),
        w(x, g));
    };
    Z(k, (x) => {
      t(u) && x(C);
    });
  }
  (w(r, b), Re());
}
it(["click"]);
var sd = j('<span class="text-[var(--color-text-default)]">*</span>'),
  ld = j("<div> <!></div>"),
  ud = j("<div><!></div>"),
  cd = j("<li> </li>"),
  dd = j("<ul></ul>"),
  fd = j("<div><!> <!> <!></div>"),
  vd = j('<form novalidate=""></form> <!>', 1);
function gd(r, e) {
  Be(e, !0);
  let a = T(e, "value", 19, () => ({})),
    n = T(e, "rowGap", 3, "md"),
    o = T(e, "validateOn", 3, "blur"),
    i = T(e, "labelAlign", 3, "left"),
    s = T(e, "labelWeight", 3, "medium"),
    l = T(e, "labelSize", 3, "md"),
    u = T(e, "compact", 3, !1);
  const f = { xs: "xs", sm: "xs", md: "sm", lg: "md", xl: "lg" },
    h = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    y = { xs: "gap-1", sm: "gap-2", md: "gap-4", lg: "gap-6", xl: "gap-8" },
    b = (N) => (N == null ? "" : String(N));
  let k = Ye({});
  const C = Ye({}),
    x = Ye({});
  let g = be(Ye([])),
    c = 0;
  const v = _(() => (u() ? "" : "w-full")),
    d = _(() => (typeof n() == "number" ? "" : (y[n()] ?? y.md))),
    p = _(() => (typeof n() == "number" ? n() + "px" : "")),
    S = (N) => {
      const E = k[N];
      return typeof E == "number" ? E : b(E);
    };
  function P(N) {
    return u() ? (f[N] ?? "md") : N;
  }
  let A = 0;
  const M = Ye(A++),
    F = _(() => {
      if (e.formId && e.formId.trim()) return e.formId.trim();
      const N = e.schema.map((O) => O.name).join("|");
      let E = 0;
      for (let O = 0; O < N.length; O += 1)
        ((E = (E << 5) - E + N.charCodeAt(O)), (E |= 0));
      return `form-${Math.abs(E >>> 0).toString(36) || "form"}`;
    }),
    K = _(() => (e.formId && e.formId.trim() ? t(F) : `${t(F)}-${M}`));
  We(() => {
    const N = new Set(e.schema.map((E) => E.name));
    for (const E of Object.keys(k))
      N.has(E) || (delete k[E], delete C[E], delete x[E]);
    for (const E of e.schema)
      (Object.prototype.hasOwnProperty.call(a(), E.name)
        ? (k[E.name] = a()[E.name])
        : E.name in k ||
          (k[E.name] = E.default ?? (E.type === "checkbox" ? !1 : "")),
        E.name in C || (C[E.name] = !1),
        x[E.name] || (x[E.name] = []));
  });
  const H = Bu((N) => {
    te(N);
  }, 150);
  function ie(N, E) {
    k[N] !== E && ((k[N] = E), o() === "input" && H(N), e.onChange?.({ ...k }));
  }
  function ce(N) {
    (C[N] || (C[N] = !0), o() !== "submit" && te(N));
  }
  function he(N) {
    z(
      g,
      t(g).filter((E) => E.id !== N),
      !0
    );
  }
  function J(N, E, ne) {
    const O = c++;
    z(g, [...t(g), { id: O, message: E, variant: N, title: ne }], !0);
  }
  async function te(N) {
    const E = e.schema.find((de) => de.name === N);
    if (!E) return;
    const ne = k[N],
      O = [];
    if (
      (E.required &&
        (ne === "" || ne == null || (E.type === "checkbox" && !ne)) &&
        O.push("Required"),
      E.type === "number" &&
        ne !== "" &&
        Number.isNaN(Number(ne)) &&
        O.push("Must be a number"),
      E.type === "email" &&
        ne !== "" &&
        (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(ne)) ||
          O.push("Invalid email")),
      E.validators)
    )
      for (const de of E.validators) {
        const fe = await de(ne, k);
        fe && O.push(fe);
      }
    x[N] = O;
  }
  function le(N) {
    return N.when ? !!N.when(k) : !0;
  }
  const R = _(() => e.schema.filter(le)),
    G = _(() => t(R).map((N) => N.name));
  async function $() {
    return (
      await Promise.all(t(G).map(te)),
      t(G).every((N) => (x[N]?.length ?? 0) === 0)
    );
  }
  function I() {
    for (const N of e.schema)
      ((k[N.name] = N.default ?? (N.type === "checkbox" ? !1 : "")),
        (C[N.name] = !1),
        (x[N.name] = []));
    e.onChange?.({ ...k });
  }
  async function ae(N) {
    if ((N?.preventDefault?.(), !!(await $())))
      try {
        (await e.onSubmit?.({ ...k }, { reset: I }),
          J("success", "Form submitted successfully"));
      } catch (ne) {
        throw (J("danger", "Form submission failed", "Error"), ne);
      }
  }
  We(() => {
    const N = {
      reset: I,
      submit: () => ae(),
      validate: () => $(),
      getData: () => ({ ...k }),
      setValue: (E, ne) => ie(E, ne),
    };
    e.expose?.(N);
  });
  var W = vd(),
    ee = Ce(W);
  let se;
  at(
    ee,
    21,
    () => t(R),
    (N) => N.name,
    (N, E) => {
      var ne = Me(),
        O = Ce(ne);
      (ou(
        O,
        () => t(E).name,
        (de) => {
          var fe = fd(),
            ge = m(fe);
          {
            var ze = (re) => {
              var oe = ld(),
                _e = m(oe),
                ye = D(_e);
              {
                var V = (pe) => {
                  var ke = sd();
                  w(pe, ke);
                };
                Z(ye, (pe) => {
                  t(E).required && pe(V);
                });
              }
              (B(
                (pe) => {
                  (q(oe, 1, pe), X(_e, `${t(E).label ?? ""} `));
                },
                [
                  () =>
                    Y(
                      U(
                        h[s()],
                        u()
                          ? "text-xs -mb-1 text-center"
                          : [
                              Ne[l()],
                              i() === "center"
                                ? "text-center"
                                : i() === "right"
                                  ? "text-right"
                                  : "text-left",
                            ],
                        "text-[var(--color-text-default)] leading-normal"
                      )
                    ),
                ]
              ),
                w(re, oe));
            };
            Z(ge, (re) => {
              t(E).label && re(ze);
            });
          }
          var Pe = D(ge, 2);
          {
            var Ae = (re) => {
                const oe = _(
                    () =>
                      (C[t(E).name] || o() !== "submit") &&
                      x[t(E).name]?.length > 0
                  ),
                  _e = _(() => (t(oe) ? `${t(K)}-err-${t(E).name}` : void 0));
                {
                  let ye = _(() => U(t(E).class, t(v))),
                    V = _(() =>
                      (t(E).options ?? []).map((Te) => ({
                        label: b(Te.label),
                        value: b(Te.value),
                        disabled: Te.disabled,
                      }))
                    ),
                    pe = _(() => P(t(E).sz ?? "md")),
                    ke = _(() => t(E).variant ?? "default"),
                    Fe = _(() => b(k[t(E).name]));
                  Ht(re, {
                    get class() {
                      return t(ye);
                    },
                    get options() {
                      return t(V);
                    },
                    get sz() {
                      return t(pe);
                    },
                    get variant() {
                      return t(ke);
                    },
                    get value() {
                      return t(Fe);
                    },
                    onChange: (Te) => ie(t(E).name, Te),
                    onblur: () => ce(t(E).name),
                    get invalid() {
                      return t(oe);
                    },
                    get describedBy() {
                      return t(_e);
                    },
                  });
                }
              },
              ve = (re) => {
                var oe = Me(),
                  _e = Ce(oe);
                {
                  var ye = (pe) => {
                      var ke = ud(),
                        Fe = m(ke);
                      {
                        let Te = _(() => t(E).class ?? ""),
                          Ge = _(() => P(t(E).sz ?? "md")),
                          je = _(() => !!k[t(E).name]);
                        Za(Fe, {
                          get class() {
                            return t(Te);
                          },
                          get sz() {
                            return t(Ge);
                          },
                          variant: "default",
                          get checked() {
                            return t(je);
                          },
                          onChange: (Ie) => ie(t(E).name, Ie),
                          onblur: () => ce(t(E).name),
                        });
                      }
                      (B(
                        (Te) => q(ke, 1, Te),
                        [
                          () =>
                            Y(
                              U(
                                t(E).class,
                                u() && "mx-auto justify-self-center"
                              )
                            ),
                        ]
                      ),
                        w(pe, ke));
                    },
                    V = (pe) => {
                      const ke = _(
                          () =>
                            (C[t(E).name] || o() !== "submit") &&
                            x[t(E).name]?.length > 0
                        ),
                        Fe = _(() =>
                          t(ke) ? `${t(K)}-err-${t(E).name}` : void 0
                        );
                      {
                        let Te = _(() => U(t(E).class, t(v))),
                          Ge = _(() =>
                            t(E).type === "textarea" ? "textarea" : "input"
                          ),
                          je = _(() =>
                            t(E).type === "number"
                              ? "number"
                              : t(E).type === "password"
                                ? "password"
                                : t(E).type === "email"
                                  ? "email"
                                  : "text"
                          ),
                          Ie = _(() => t(E).rows ?? 3),
                          De = _(() => t(E).type === "number"),
                          nt = _(() => P(t(E).sz ?? "md")),
                          st = _(() => t(E).variant ?? "default"),
                          Pt = _(() => S(t(E).name)),
                          ht = _(() =>
                            t(E).type === "email" ? "email" : void 0
                          ),
                          Zt = _(() =>
                            t(E).type === "email" ? "email" : void 0
                          );
                        Ha(pe, {
                          get class() {
                            return t(Te);
                          },
                          get as() {
                            return t(Ge);
                          },
                          get type() {
                            return t(je);
                          },
                          get rows() {
                            return t(Ie);
                          },
                          get parseNumber() {
                            return t(De);
                          },
                          get sz() {
                            return t(nt);
                          },
                          get variant() {
                            return t(st);
                          },
                          get value() {
                            return t(Pt);
                          },
                          onChange: (ut) => ie(t(E).name, ut),
                          onblur: () => ce(t(E).name),
                          get invalid() {
                            return t(ke);
                          },
                          get describedBy() {
                            return t(Fe);
                          },
                          get autocomplete() {
                            return t(ht);
                          },
                          get inputmode() {
                            return t(Zt);
                          },
                        });
                      }
                    };
                  Z(
                    _e,
                    (pe) => {
                      t(E).type === "checkbox" ? pe(ye) : pe(V, !1);
                    },
                    !0
                  );
                }
                w(re, oe);
              };
            Z(Pe, (re) => {
              t(E).type === "select" ? re(Ae) : re(ve, !1);
            });
          }
          var Se = D(Pe, 2);
          {
            var L = (re) => {
              var oe = dd();
              (at(
                oe,
                23,
                () => x[t(E).name] ?? [],
                (_e, ye) => `${t(E).name}-${ye}`,
                (_e, ye) => {
                  var V = cd(),
                    pe = m(V);
                  (B(
                    (ke) => {
                      (q(V, 1, ke), X(pe, t(ye)));
                    },
                    [
                      () =>
                        Y(
                          U(
                            "text-xs leading-tight mt-1 text-[var(--color-text-red)]",
                            u() && "text-[10px]"
                          )
                        ),
                    ]
                  ),
                    w(_e, V));
                }
              ),
                B(
                  (_e) => {
                    (we(oe, "id", `${t(K)}-err-${t(E).name}`), q(oe, 1, _e));
                  },
                  [() => Y(U("m-0 pl-4 list-none", u() && "text-center"))]
                ),
                w(re, oe));
            };
            Z(Se, (re) => {
              (C[t(E).name] || o() !== "submit") &&
                x[t(E).name]?.length &&
                re(L);
            });
          }
          (B(
            (re) => q(fe, 1, re),
            [
              () =>
                Y(
                  U(
                    "grid gap-1 w-full min-w-0",
                    u() ? "justify-items-center" : "justify-items-stretch"
                  )
                ),
            ]
          ),
            w(de, fe));
        }
      ),
        w(N, ne));
    }
  );
  var me = D(ee, 2);
  (at(
    me,
    17,
    () => t(g),
    (N) => N.id,
    (N, E) => {
      No(N, {
        get title() {
          return t(E).title;
        },
        get message() {
          return t(E).message;
        },
        get variant() {
          return t(E).variant;
        },
        onClose: () => he(t(E).id),
      });
    }
  ),
    B(
      (N) => {
        (we(ee, "id", t(K)), q(ee, 1, N), (se = gt(ee, "", se, { gap: t(p) })));
      },
      [
        () =>
          Y(
            U(
              "grid font-sans w-full",
              t(d),
              u() && "gap-2 justify-items-center"
            )
          ),
      ]
    ),
    Ct("submit", ee, ae),
    w(r, W),
    Re());
}
var pd = j(
    '<div class="p-4 border-b border-[var(--border-color-default)]"><!></div>'
  ),
  bd = j(
    '<div class="text-xs opacity-70 px-3 py-2 text-center">No items</div>'
  ),
  hd = j(
    '<li><button type="button" class="w-full text-left px-3 py-2 rounded-md hover:bg-[var(--color-bg-hover)] focus:outline-[var(--border-color-focus)] focus:outline-2 transition-colors"> </button></li>'
  ),
  md = j('<ul class="grid gap-2 p-4"></ul>'),
  _d = j(
    '<div class="p-4 border-t border-[var(--border-color-default)]"><!></div>'
  ),
  xd = j(
    '<div class="fixed inset-0 z-[var(--z-overlay)] flex"><div role="dialog" aria-modal="true" tabindex="-1" class="flex flex-col h-full bg-[var(--color-bg-surface)] shadow-xl"><!> <div class="flex-1 overflow-y-auto" tabindex="-1"><!></div> <!></div> <button type="button" class="flex-1 bg-black/40" aria-hidden="true"></button></div>'
  ),
  wd = j(
    '<button type="button" aria-label="Toggle navigation"><span class="relative block w-5 h-3.5"><span></span> <span></span> <span></span></span></button> <!>',
    1
  );
function yd(r, e) {
  Be(e, !0);
  let a = T(e, "menuItems", 19, () => []),
    n = T(e, "activeItem", 3, ""),
    o = T(e, "closeOnSelect", 3, !0),
    i = T(e, "class", 3, ""),
    s = T(e, "width", 3, 300),
    l = be(void 0),
    u = be(void 0),
    f = null,
    h = be(!1);
  const y = _(() => e.pressed ?? t(h));
  function b(H) {
    e.pressed === void 0 ? z(h, H, !0) : e.onOpenChange?.(H);
  }
  function k() {
    b(!t(y));
  }
  function C() {
    (b(!1), queueMicrotask(() => t(l)?.focus()));
  }
  const x = Ru(() => C(), 150);
  function g(H) {
    H.key === "Escape" && x();
  }
  We(
    () => (
      t(y) && t(u)
        ? (queueMicrotask(() => {
            gs(t(u));
          }),
          f?.(),
          (f = ps(t(u))),
          document.addEventListener("keydown", g))
        : (f?.(), (f = null), document.removeEventListener("keydown", g)),
      () => {
        (document.removeEventListener("keydown", g), f?.(), (f = null));
      }
    )
  );
  const c =
      "fixed top-4 left-4 inline-flex items-center justify-center h-8 w-8 rounded-md border border-[var(--border-color-default)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] transition-colors z-[var(--z-modal)]",
    v = _(() => U(c, i()));
  var d = wd(),
    p = Ce(d);
  p.__click = k;
  var S = m(p),
    P = m(S),
    A = D(P, 2),
    M = D(A, 2);
  ot(
    p,
    (H) => z(l, H),
    () => t(l)
  );
  var F = D(p, 2);
  {
    var K = (H) => {
      var ie = xd(),
        ce = m(ie),
        he = m(ce);
      {
        var J = (W) => {
          var ee = pd(),
            se = m(ee);
          (Je(se, () => e.header ?? Q), w(W, ee));
        };
        Z(he, (W) => {
          e.header && W(J);
        });
      }
      var te = D(he, 2),
        le = m(te);
      {
        var R = (W) => {
            var ee = bd();
            w(W, ee);
          },
          G = (W) => {
            var ee = md();
            (at(
              ee,
              21,
              a,
              (se) => se.id,
              (se, me) => {
                var N = hd(),
                  E = m(N);
                E.__click = () => {
                  (e.onSelect?.(t(me).id), o() && C());
                };
                var ne = m(E);
                (B(() => {
                  (we(E, "aria-current", n() === t(me).id ? "page" : void 0),
                    X(ne, t(me).label));
                }),
                  w(se, N));
              }
            ),
              w(W, ee));
          };
        Z(le, (W) => {
          a().length === 0 ? W(R) : W(G, !1);
        });
      }
      var $ = D(te, 2);
      {
        var I = (W) => {
          var ee = _d(),
            se = m(ee);
          (Je(se, () => e.footer ?? Q), w(W, ee));
        };
        Z($, (W) => {
          e.footer && W(I);
        });
      }
      ot(
        ce,
        (W) => z(u, W),
        () => t(u)
      );
      var ae = D(ce, 2);
      ((ae.__click = C),
        B(() => gt(ce, `width:${typeof s() == "number" ? `${s()}px` : s()}`)),
        w(H, ie));
    };
    Z(F, (H) => {
      t(y) && H(K);
    });
  }
  (B(
    (H, ie, ce) => {
      (we(p, "aria-expanded", t(y)),
        q(p, 1, Y(t(v))),
        q(P, 1, H),
        q(A, 1, ie),
        q(M, 1, ce));
    },
    [
      () =>
        Y(
          U(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform duration-200",
            t(y)
              ? "translate-y-[-50%] rotate-45"
              : "translate-y-[calc(-50%_-_6px)]"
          )
        ),
      () =>
        Y(
          U(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-opacity duration-200 translate-y-[-50%]",
            t(y) ? "opacity-0" : "opacity-100"
          )
        ),
      () =>
        Y(
          U(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform duration-200",
            t(y)
              ? "translate-y-[-50%] -rotate-45"
              : "translate-y-[calc(-50%_+_6px)]"
          )
        ),
    ]
  ),
    w(r, d),
    Re());
}
it(["click"]);
var kd = j(
    '<div role="group" class="relative inline-block overflow-visible"><button type="button" aria-haspopup="menu"> </button></div>'
  ),
  Cd = j(
    '<div class="my-1 mx-1 border-t border-[var(--border-color-default)]" role="separator"></div>'
  ),
  Sd = j("<span> </span>"),
  Pd = j("<span>&gt;</span>"),
  Ed = j(
    '<div class="my-1 mx-1 border-t border-[var(--border-color-default)]" role="separator"></div>'
  ),
  Ad = j("<span> </span>"),
  zd = j(
    '<button type="button" role="menuitem"><span class="flex items-center gap-2 flex-1 min-w-0"><span class="truncate"> </span></span> <span><!></span></button>'
  ),
  Fd = j('<div role="menu" tabindex="0"></div>'),
  Td = j(
    '<div class="relative"><button type="button" role="menuitem"><span class="flex items-center gap-2 flex-1 min-w-0"><span class="truncate"> </span></span> <span class="flex items-center shrink-0 ml-auto gap-1"><!> <!></span></button> <!></div>'
  ),
  Ld = j(
    '<div role="presentation" tabindex="-1" class="fixed inset-0 z-40"></div> <div role="menu" tabindex="-1"></div>',
    1
  ),
  Md = j('<nav aria-label="Menu bar"></nav> <!>', 1);
function hs(r, e) {
  Be(e, !0);
  let a = T(e, "menus", 19, () => []),
    n = T(e, "onSelect", 3, () => {}),
    o = T(e, "class", 3, ""),
    i = T(e, "sz", 3, "sm"),
    s = be(""),
    l = be(""),
    u = be(-1),
    f = be(-1),
    h = Ye({}),
    y = Ye({}),
    b = Ye({}),
    k = Ye({}),
    C = be(0),
    x = be(0),
    g = Ye({}),
    c = be(0),
    v = be(0);
  const d = {
      xs: "h-7 px-3",
      sm: "h-8 px-3",
      md: "h-9 px-4",
      lg: "h-10 px-4",
      xl: "h-11 px-5",
    },
    p =
      "flex items-stretch pl-2 gap-1 border-b relative z-10 bg-[var(--color-bg-surface)] text-[var(--color-text-default)] border-[var(--border-color-default)]",
    S = 8,
    P =
      "px-4 rounded-xs leading-none transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--border-color-focus)] focus-visible:outline-offset-2",
    A = "bg-[var(--color-bg-muted)] text-[var(--color-text-default)]",
    M = "hover:bg-[var(--color-bg-muted)] text-[var(--color-text-default)]",
    F = _(
      () =>
        `position:fixed; top:${t(C)}px; left:${t(x)}px; width:max-content; max-width:calc(100vw - 16px);`
    ),
    K = _(
      () =>
        `position:fixed; top:${t(c)}px; left:${t(v)}px; width:max-content; max-width:calc(100vw - 16px);`
    ),
    H = _(() => Ne[i()]),
    ie = "flex items-center shrink-0",
    ce = _(() => U(p, d[i()], t(H), o())),
    he = _(() => U(P, d[i()], t(H)));
  function J(L) {
    return typeof L == "string" ? L : L.label;
  }
  function te(L) {
    return typeof L == "string" ? L : (L.id ?? L.label ?? "");
  }
  function le(L) {
    return typeof L == "string" ? "" : (L.shortcut ?? "");
  }
  function R(L) {
    return typeof L != "string" && "type" in L && L.type === "separator";
  }
  function G(L) {
    return (
      typeof L != "string" && Array.isArray(L.submenu) && L.submenu.length > 0
    );
  }
  function $(L, re) {
    return te(L) || `__action-${re}`;
  }
  function I(L, re) {
    (ae(), n()(L, re));
  }
  function ae() {
    (z(s, ""), z(l, ""), z(u, -1), z(f, -1));
  }
  function W(L, re) {
    const oe = L.getBoundingClientRect(),
      _e = Math.min(
        re?.getBoundingClientRect().width ?? oe.width,
        window.innerWidth - 16
      ),
      ye = window.innerWidth - oe.left,
      V = oe.right,
      pe = ye < _e && V > ye,
      ke = window.scrollX,
      Fe = window.scrollX + window.innerWidth;
    z(C, oe.bottom + window.scrollY);
    const Te = pe ? oe.right + window.scrollX - _e : oe.left + window.scrollX,
      Ge = Fe - _e;
    z(x, Math.max(ke, Math.min(Te, Ge)), !0);
  }
  function ee(L, re) {
    const oe = L.getBoundingClientRect(),
      _e = re?.getBoundingClientRect(),
      ye = Math.min(_e?.width ?? oe.width, window.innerWidth - 16),
      V = window.innerWidth - oe.right,
      pe = oe.left,
      ke = V < ye && pe > V;
    z(c, oe.top + window.scrollY);
    const Fe = window.scrollX,
      Te = window.scrollX + window.innerWidth,
      Ge = ke
        ? oe.left + window.scrollX - ye - S
        : oe.right + window.scrollX + S,
      je = Te - ye - S;
    z(v, Math.max(Fe, Math.min(Ge, je)), !0);
  }
  function se(L) {
    return L.findIndex((re) => !R(re));
  }
  function me(L, re) {
    if (!L.length) return -1;
    let oe = re;
    for (let _e = 0; _e < L.length; _e++)
      if (((oe = (oe + 1 + L.length) % L.length), !R(L[oe]))) return oe;
    return re;
  }
  function N(L, re) {
    if (!L.length) return -1;
    let oe = re;
    for (let _e = 0; _e < L.length; _e++)
      if (((oe = (oe - 1 + L.length) % L.length), !R(L[oe]))) return oe;
    return re;
  }
  function E(L, re) {
    if (re < 0 || re >= L.actions.length) return;
    const oe = L.actions[re];
    !oe ||
      R(oe) ||
      ((!G(oe) || t(l) !== te(oe)) && (z(l, ""), z(f, -1)),
      z(u, re, !0),
      queueMicrotask(() => {
        t(s) === L.name && b[te(oe)]?.focus();
      }));
  }
  function ne(L, re) {
    if (!G(L) || re < 0 || re >= L.submenu.length) return;
    const oe = L.submenu[re];
    !oe ||
      R(oe) ||
      (z(f, re, !0),
      queueMicrotask(() => {
        t(l) === te(L) && k[te(oe)]?.focus();
      }));
  }
  function O(L, re = !1) {
    (z(s, L.name, !0), z(l, ""), z(f, -1));
    const oe = re ? se(L.actions) : -1;
    z(u, oe, !0);
    const _e = h[L.name];
    (_e && W(_e, y[L.name]), re && oe !== -1 && E(L, oe));
  }
  function de(L, re = !1) {
    if (!G(L)) return;
    z(l, te(L), !0);
    const oe = b[te(L)];
    oe && ee(oe, g[te(L)]);
    const _e = re ? se(L.submenu) : -1;
    (z(f, _e, !0), re && _e !== -1 && ne(L, _e));
  }
  function fe(L, re, oe) {
    if (L.key === "Enter" || L.key === " " || L.key === "ArrowDown")
      (L.preventDefault(), O(re, !0));
    else if (L.key === "ArrowRight") {
      L.preventDefault();
      const _e = (oe + 1) % a().length;
      h[a()[_e].name]?.focus();
    } else if (L.key === "ArrowLeft") {
      L.preventDefault();
      const _e = (oe - 1 + a().length) % a().length;
      h[a()[_e].name]?.focus();
    }
  }
  function ge(L, re) {
    if ((L.stopPropagation(), !t(s))) return;
    const oe = re.actions,
      _e = se(oe);
    if (_e === -1) return;
    const ye = t(u) === -1 ? _e : t(u);
    if (L.key === "Escape") (L.preventDefault(), ae(), h[re.name]?.focus());
    else if (L.key === "ArrowDown") {
      L.preventDefault();
      const V = me(oe, ye);
      E(re, V);
    } else if (L.key === "ArrowUp") {
      L.preventDefault();
      const V = N(oe, ye);
      E(re, V);
    } else if (L.key === "ArrowRight") {
      L.preventDefault();
      const V = oe[ye];
      V && G(V) && de(V, !0);
    } else if (L.key === "ArrowLeft" && t(l))
      (L.preventDefault(), z(l, ""), z(f, -1), E(re, ye));
    else if (L.key === "Enter" || L.key === " ") {
      L.preventDefault();
      const V = oe[ye];
      V && (G(V) ? de(V, !0) : I(re.name, V));
    } else if (L.key === "Tab") {
      L.preventDefault();
      const V = L.shiftKey ? N(oe, ye) : me(oe, ye);
      E(re, V);
    }
  }
  function ze(L, re, oe) {
    if ((L.stopPropagation(), !t(l) || !G(re))) return;
    const _e = re.submenu,
      ye = se(_e);
    if (ye === -1) return;
    const V = t(f) === -1 ? ye : t(f);
    if (L.key === "Escape")
      (L.preventDefault(), z(l, ""), z(f, -1), b[te(re)]?.focus());
    else if (L.key === "ArrowDown") {
      L.preventDefault();
      const pe = me(_e, V);
      ne(re, pe);
    } else if (L.key === "ArrowUp") {
      L.preventDefault();
      const pe = N(_e, V);
      ne(re, pe);
    } else if (L.key === "ArrowLeft")
      (L.preventDefault(), z(l, ""), z(f, -1), b[te(re)]?.focus());
    else if (L.key === "Enter" || L.key === " ") {
      L.preventDefault();
      const pe = _e[V];
      pe && I(oe, pe);
    } else if (L.key === "Tab") {
      L.preventDefault();
      const pe = L.shiftKey ? N(_e, V) : me(_e, V);
      ne(re, pe);
    }
  }
  (We(() => {
    if (t(s)) {
      const L = h[t(s)];
      if (L) {
        W(L, y[t(s)]);
        const re = () => {
          W(L, y[t(s)]);
        };
        return (
          window.addEventListener("scroll", re, !0),
          window.addEventListener("resize", re),
          () => {
            (window.removeEventListener("scroll", re, !0),
              window.removeEventListener("resize", re));
          }
        );
      }
    }
  }),
    We(() => {
      if (t(l)) {
        const L = b[t(l)],
          re = g[t(l)];
        if (L) {
          ee(L, re);
          const oe = () => {
            ee(L, g[t(l)]);
          };
          return (
            window.addEventListener("scroll", oe, !0),
            window.addEventListener("resize", oe),
            () => {
              (window.removeEventListener("scroll", oe, !0),
                window.removeEventListener("resize", oe));
            }
          );
        }
      }
    }));
  var Pe = Md(),
    Ae = Ce(Pe);
  at(
    Ae,
    23,
    a,
    (L) => L.name,
    (L, re, oe) => {
      var _e = kd(),
        ye = m(_e);
      ((ye.__mousedown = (pe) => pe.preventDefault()),
        (ye.__click = () => {
          t(s) === t(re).name ? ae() : O(t(re), !0);
        }),
        (ye.__keydown = (pe) => fe(pe, t(re), t(oe))));
      var V = m(ye);
      (ot(
        ye,
        (pe, ke) => (h[ke.name] = pe),
        (pe) => h?.[pe.name],
        () => [t(re)]
      ),
        B(
          (pe) => {
            (q(ye, 1, pe),
              we(ye, "aria-expanded", t(s) === t(re).name),
              X(V, t(re).name));
          },
          [() => Y(U(t(he), t(s) === t(re).name ? A : M))]
        ),
        Ct("mouseenter", ye, () => {
          t(s) && t(s) !== t(re).name && O(t(re), !0);
        }),
        w(L, _e));
    }
  );
  var ve = D(Ae, 2);
  {
    var Se = (L) => {
      var re = Me(),
        oe = Ce(re);
      (at(
        oe,
        17,
        a,
        (_e) => _e.name,
        (_e, ye) => {
          var V = Me(),
            pe = Ce(V);
          {
            var ke = (Fe) => {
              var Te = Ld(),
                Ge = Ce(Te);
              Ge.__mousedown = ae;
              var je = D(Ge, 2);
              ((je.__keydown = (Ie) => ge(Ie, t(ye))),
                at(
                  je,
                  23,
                  () => t(ye).actions,
                  (Ie, De) => $(Ie, De),
                  (Ie, De, nt) => {
                    var st = Me(),
                      Pt = Ce(st);
                    {
                      var ht = (ut) => {
                          var ue = Cd();
                          w(ut, ue);
                        },
                        Zt = (ut) => {
                          var ue = Td(),
                            Ee = m(ue);
                          ((Ee.__mousedown = (He) => He.preventDefault()),
                            (Ee.__click = () => {
                              G(t(De))
                                ? (E(t(ye), t(nt)), de(t(De), !0))
                                : I(t(ye).name, t(De));
                            }));
                          var Le = m(Ee),
                            qe = m(Le),
                            Ze = m(qe),
                            tt = D(Le, 2),
                            ct = m(tt);
                          {
                            var mt = (He) => {
                              var Qe = Sd(),
                                rt = m(Qe);
                              (B(
                                (dt, sr) => {
                                  (q(Qe, 1, dt), X(rt, sr));
                                },
                                [
                                  () =>
                                    Y(
                                      U(
                                        "text-[var(--color-text-muted)] text-right",
                                        t(H)
                                      )
                                    ),
                                  () => le(t(De)),
                                ]
                              ),
                                w(He, Qe));
                            };
                            Z(ct, (He) => {
                              le(t(De)) && He(mt);
                            });
                          }
                          var Tt = D(ct, 2);
                          {
                            var Rt = (He) => {
                              var Qe = Pd();
                              (B(
                                (rt) => q(Qe, 1, rt),
                                [
                                  () =>
                                    Y(
                                      U(
                                        "text-[var(--color-text-muted)] flex-shrink-0",
                                        t(H)
                                      )
                                    ),
                                ]
                              ),
                                w(He, Qe));
                            };
                            Z(Tt, (He) => {
                              G(t(De)) && He(Rt);
                            });
                          }
                          ot(
                            Ee,
                            (He, Qe) => (b[te(Qe)] = He),
                            (He) => b?.[te(He)],
                            () => [t(De)]
                          );
                          var jt = D(Ee, 2);
                          {
                            var Mr = (He) => {
                              var Qe = Fd();
                              ((Qe.__keydown = (rt) =>
                                ze(rt, t(De), t(ye).name)),
                                at(
                                  Qe,
                                  23,
                                  () => t(De).submenu,
                                  (rt, dt) => $(rt, dt),
                                  (rt, dt, sr) => {
                                    var Lt = Me(),
                                      lr = Ce(Lt);
                                    {
                                      var ur = (cr) => {
                                          var lt = Ed();
                                          w(cr, lt);
                                        },
                                        wr = (cr) => {
                                          var lt = zd();
                                          ((lt.__mousedown = (yt) =>
                                            yt.preventDefault()),
                                            (lt.__click = () =>
                                              I(t(ye).name, t(dt))));
                                          var yr = m(lt),
                                            Dr = m(yr),
                                            Nr = m(Dr),
                                            Qr = D(yr, 2);
                                          q(Qr, 1, Y(ie));
                                          var Xt = m(Qr);
                                          {
                                            var xa = (yt) => {
                                              var Vt = Ad(),
                                                wa = m(Vt);
                                              (B(
                                                (Yt, Ir) => {
                                                  (q(Vt, 1, Yt), X(wa, Ir));
                                                },
                                                [
                                                  () =>
                                                    Y(
                                                      U(
                                                        "text-[var(--color-text-muted)]",
                                                        t(H)
                                                      )
                                                    ),
                                                  () => le(t(dt)),
                                                ]
                                              ),
                                                w(yt, Vt));
                                            };
                                            Z(Xt, (yt) => {
                                              le(t(dt)) && yt(xa);
                                            });
                                          }
                                          (ot(
                                            lt,
                                            (yt, Vt) => (k[te(Vt)] = yt),
                                            (yt) => k?.[te(yt)],
                                            () => [t(dt)]
                                          ),
                                            B(
                                              (yt, Vt) => {
                                                (q(lt, 1, yt), X(Nr, Vt));
                                              },
                                              [
                                                () =>
                                                  Y(
                                                    U(
                                                      "relative text-left rounded-xs transition-colors outline-none px-1.5 py-0.5",
                                                      "my-1 mr-1 w-full flex items-center justify-between gap-3",
                                                      "hover:bg-[var(--color-bg-muted)] focus-visible:bg-[var(--color-bg-muted)]",
                                                      "focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)]",
                                                      "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-surface)]",
                                                      "decoration-[var(--color-text-default)]",
                                                      t(H)
                                                    )
                                                  ),
                                                () => J(t(dt)),
                                              ]
                                            ),
                                            Ct("mouseenter", lt, () =>
                                              z(f, t(sr), !0)
                                            ),
                                            Ct("focus", lt, () =>
                                              z(f, t(sr), !0)
                                            ),
                                            w(cr, lt));
                                        };
                                      Z(lr, (cr) => {
                                        R(t(dt)) ? cr(ur) : cr(wr, !1);
                                      });
                                    }
                                    w(rt, Lt);
                                  }
                                ),
                                ot(
                                  Qe,
                                  (rt, dt) => (g[te(dt)] = rt),
                                  (rt) => g?.[te(rt)],
                                  () => [t(De)]
                                ),
                                B(
                                  (rt) => {
                                    (q(Qe, 1, rt), gt(Qe, t(K)));
                                  },
                                  [
                                    () =>
                                      Y(
                                        U(
                                          "fixed z-50 min-w-44 p-2 rounded-xs shadow-[0_2px_4px_var(--shadow-color)]",
                                          "border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]"
                                        )
                                      ),
                                  ]
                                ),
                                w(He, Qe));
                            };
                            Z(jt, (He) => {
                              G(t(De)) && t(l) === te(t(De)) && He(Mr);
                            });
                          }
                          (B(
                            (He, Qe) => {
                              (q(Ee, 1, He), X(Ze, Qe));
                            },
                            [
                              () =>
                                Y(
                                  U(
                                    "relative text-left rounded-xs transition-colors outline-none px-1.5 py-0.5 my-1 mr-1 min-w-full flex items-center",
                                    "gap-3 hover:bg-[var(--color-bg-muted)] focus-visible:bg-[var(--color-bg-muted)]",
                                    t(H)
                                  )
                                ),
                              () => J(t(De)),
                            ]
                          ),
                            Ct("mouseenter", Ee, () => {
                              (z(u, t(nt), !0),
                                G(t(De)) && t(l) !== te(t(De))
                                  ? de(t(De))
                                  : G(t(De)) || (z(l, ""), z(f, -1)));
                            }),
                            Ct("focus", Ee, () => {
                              E(t(ye), t(nt));
                            }),
                            w(ut, ue));
                        };
                      Z(Pt, (ut) => {
                        R(t(De)) ? ut(ht) : ut(Zt, !1);
                      });
                    }
                    w(Ie, st);
                  }
                ),
                ot(
                  je,
                  (Ie, De) => (y[De.name] = Ie),
                  (Ie) => y?.[Ie.name],
                  () => [t(ye)]
                ),
                B(
                  (Ie) => {
                    (q(je, 1, Ie), gt(je, t(F)));
                  },
                  [
                    () =>
                      Y(
                        U(
                          "fixed z-50 min-w-44 p-2 rounded-xs shadow-[0_2px_4px_var(--shadow-color)] ",
                          "border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]"
                        )
                      ),
                  ]
                ),
                w(Fe, Te));
            };
            Z(pe, (Fe) => {
              t(s) === t(ye).name && Fe(ke);
            });
          }
          w(_e, V);
        }
      ),
        w(L, re));
    };
    Z(ve, (L) => {
      t(s) && L(Se);
    });
  }
  (B(() => q(Ae, 1, Y(t(ce)))), w(r, Pe), Re());
}
it(["mousedown", "click", "keydown"]);
var Dd = j("<div><span> </span> <!> <!> <!></div>");
function ms(r, e) {
  Be(e, !0);
  let a = T(e, "class", 3, "");
  const n = _(() =>
    U(
      "flex flex-wrap items-center justify-center gap-2 text-xs text-[var(--color-text-muted)] py-0.5 overflow-visible",
      a()
    )
  );
  function o() {
    e.currentPage < e.totalPages && e.onPageChange(e.currentPage + 1);
  }
  function i() {
    e.currentPage > 1 && e.onPageChange(e.currentPage - 1);
  }
  function s() {
    if (e.totalPages <= 3) return ho(e.totalPages, (x) => x + 1);
    let C = e.currentPage - 1;
    return (
      C < 1 && (C = 1),
      C + 3 - 1 > e.totalPages && (C = e.totalPages - 3 + 1),
      ho(3, (x) => C + x)
    );
  }
  var l = Dd(),
    u = m(l),
    f = m(u),
    h = D(u, 2);
  {
    let k = _(() => e.currentPage === 1);
    $e(h, {
      onClick: i,
      get disabled() {
        return t(k);
      },
      sz: "xs",
      variant: "secondary",
      children: (C, x) => {
        var g = Oe("<");
        w(C, g);
      },
      $$slots: { default: !0 },
    });
  }
  var y = D(h, 2);
  at(
    y,
    16,
    s,
    (k) => k,
    (k, C) => {
      {
        let x = _(() => (e.currentPage === C ? "primary" : "secondary")),
          g = _(() => (e.currentPage === C ? "page" : void 0));
        $e(k, {
          onClick: () => e.onPageChange(C),
          sz: "xs",
          get variant() {
            return t(x);
          },
          get "aria-current"() {
            return t(g);
          },
          children: (c, v) => {
            var d = Oe();
            (B(() => X(d, C)), w(c, d));
          },
          $$slots: { default: !0 },
        });
      }
    }
  );
  var b = D(y, 2);
  {
    let k = _(() => e.currentPage === e.totalPages);
    $e(b, {
      onClick: o,
      get disabled() {
        return t(k);
      },
      sz: "xs",
      variant: "secondary",
      children: (C, x) => {
        var g = Oe(">");
        w(C, g);
      },
      $$slots: { default: !0 },
    });
  }
  (B(() => {
    (q(l, 1, Y(t(n))),
      X(f, `Page ${e.currentPage ?? ""} of ${e.totalPages ?? ""}`));
  }),
    w(r, l),
    Re());
}
var Nd = j("<span> </span>"),
  Id = j("<div></div>"),
  Od = j("<div></div>"),
  Bd = j(
    '<div><!> <div class="relative w-full h-10"><div><!></div></div></div>'
  );
function Rd(r, e) {
  Be(e, !0);
  let a = T(e, "value", 3, 0),
    n = T(e, "indeterminate", 3, !1),
    o = T(e, "sz", 3, "md"),
    i = T(e, "variant", 3, "default"),
    s = T(e, "class", 3, ""),
    l = T(e, "label", 3, ""),
    u = T(e, "disabled", 3, !1),
    f = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "value",
      "indeterminate",
      "sz",
      "variant",
      "class",
      "label",
      "disabled",
    ]);
  const h = _(() => `${Ua(a(), 0, 100)}%`),
    y = _(
      () =>
        ({
          xs: "h-[4px]",
          sm: "h-[5px]",
          md: "h-[6px]",
          lg: "h-[7px]",
          xl: "h-[8px]",
        })[o()]
    ),
    b = _(() =>
      i() === "neutral"
        ? "bg-[var(--color-bg-secondary)]"
        : "bg-[var(--color-bg-primary)]"
    ),
    k = _(() =>
      U(
        "relative flex flex-col gap-1 w-full data-[disabled=true]:opacity-[var(--opacity-disabled)] data-[disabled=true]:cursor-not-allowed",
        s()
      )
    ),
    C = _(() =>
      U(
        "absolute top-1/2 -translate-y-1/2 w-full bg-[var(--border-color-default)] rounded overflow-hidden",
        t(y)
      )
    ),
    x = _(() => U("h-full", t(b)));
  var g = Bd();
  wt(
    g,
    (M) => ({
      class: t(k),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": M,
      "data-disabled": u() ? "true" : void 0,
      ...f,
    }),
    [() => (n() ? void 0 : Math.round(Ua(a(), 0, 100)))],
    void 0,
    void 0,
    "svelte-1lu0uwz"
  );
  var c = m(g);
  {
    var v = (M) => {
      var F = Nd(),
        K = m(F);
      (B(() => {
        (q(
          F,
          1,
          `text-[var(--color-text-muted)] select-none ${Ne[o()] ?? ""}`,
          "svelte-1lu0uwz"
        ),
          X(K, l()));
      }),
        w(M, F));
    };
    Z(c, (M) => {
      l() && M(v);
    });
  }
  var d = D(c, 2),
    p = m(d),
    S = m(p);
  {
    var P = (M) => {
        var F = Id();
        (B((K) => q(F, 1, K, "svelte-1lu0uwz"), [() => Y(U(t(x), "pb-indet"))]),
          w(M, F));
      },
      A = (M) => {
        var F = Od();
        (B(
          (K) => {
            (q(F, 1, K, "svelte-1lu0uwz"), gt(F, `width:${t(h)}`));
          },
          [() => Y(U(t(x), "transition-[width]"))]
        ),
          w(M, F));
      };
    Z(S, (M) => {
      n() ? M(P) : M(A, !1);
    });
  }
  (B(() => q(p, 1, Y(t(C)), "svelte-1lu0uwz")), w(r, g), Re());
}
var jd = j("<span><!></span>"),
  Vd = j("<span> </span>"),
  qd = j(
    '<label><input/> <span aria-hidden="true"><span></span></span> <!></label>'
  );
function no(r, e) {
  Be(e, !0);
  const a = [];
  let n = T(e, "sz", 3, "md"),
    o = T(e, "variant", 3, "default"),
    i = T(e, "checked", 15, !1),
    s = T(e, "group", 15, void 0),
    l = T(e, "class", 3, ""),
    u = T(e, "value", 3, "on"),
    f = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "label",
      "children",
      "sz",
      "variant",
      "checked",
      "group",
      "onChange",
      "class",
      "describedBy",
      "value",
    ]);
  const h = _(() => e.id ?? rn("rd-")),
    y = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-[18px] h-[18px]",
      xl: "w-5 h-5",
    },
    b = {
      xs: "w-1.5 h-1.5",
      sm: "w-2 h-2",
      md: "w-2.5 h-2.5",
      lg: "w-3 h-3",
      xl: "w-3.5 h-3.5",
    },
    k = {
      xs: "gap-1.5",
      sm: "gap-2",
      md: "gap-2.5",
      lg: "gap-3",
      xl: "gap-3.5",
    },
    C = _(() =>
      o() === "neutral"
        ? {
            checked: "bg-transparent border-[var(--border-color-strong)]",
            unchecked: "bg-transparent border-[var(--border-color-default)]",
          }
        : {
            checked: "bg-transparent border-[var(--color-bg-primary)]",
            unchecked: "bg-transparent border-[var(--border-color-default)]",
          }
    ),
    x =
      "rounded-full border border-solid cursor-pointer transition-all duration-[var(--transition-fast)] ease-[var(--timing-default)] flex items-center justify-center",
    g =
      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--border-color-focus)] peer-focus-visible:border-[var(--border-color-focus)]",
    c = _(() =>
      o() === "neutral"
        ? "bg-[var(--border-color-strong)]"
        : "bg-[var(--color-bg-primary)]"
    ),
    v = _(() => typeof s() < "u"),
    d = _(() => (t(v) ? s() === u() : i())),
    p = _(() => (t(d) ? "checked" : "unchecked")),
    S = _(() =>
      U("inline-flex items-center cursor-pointer select-none", k[n()], l())
    ),
    P = _(() =>
      U(
        x,
        g,
        y[n()],
        t(d) && t(C).checked,
        !t(d) && t(C).unchecked,
        "peer-disabled:opacity-[var(--opacity-disabled)] peer-disabled:cursor-not-allowed"
      )
    ),
    A = _(() =>
      U(
        "rounded-full transition-transform duration-[var(--transition-fast)] ease-[var(--timing-default)]",
        b[n()],
        t(c),
        t(d) ? "scale-100 opacity-100" : "scale-50 opacity-0"
      )
    ),
    M = _(() =>
      U(
        Ne[n()],
        "[color:var(--color-text-muted)] font-medium peer-disabled:cursor-not-allowed"
      )
    );
  var F = qd(),
    K = m(F),
    H = (le) => {
      const R = le.currentTarget.checked;
      (i(R), e.onChange?.(R));
    };
  wt(
    K,
    () => ({
      id: t(h),
      type: "radio",
      value: u(),
      checked: t(d),
      ...f,
      class: "sr-only peer",
      "aria-checked": t(d),
      "aria-describedby": e.describedBy,
      onchange: H,
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0
  );
  var ie = D(K, 2),
    ce = m(ie),
    he = D(ie, 2);
  {
    var J = (le) => {
        var R = jd(),
          G = m(R);
        (Je(G, () => e.children ?? Q), B(() => q(R, 1, Y(t(M)))), w(le, R));
      },
      te = (le) => {
        var R = Me(),
          G = Ce(R);
        {
          var $ = (I) => {
            var ae = Vd(),
              W = m(ae);
            (B(() => {
              (q(ae, 1, Y(t(M))), X(W, e.label));
            }),
              w(I, ae));
          };
          Z(
            G,
            (I) => {
              e.label && I($);
            },
            !0
          );
        }
        w(le, R);
      };
    Z(he, (le) => {
      e.children ? le(J) : le(te, !1);
    });
  }
  (B(() => {
    (q(F, 1, Y(t(S))),
      we(F, "for", t(h)),
      we(ie, "data-state", t(p)),
      q(ie, 1, Y(t(P))),
      q(ce, 1, Y(t(A))));
  }),
    ku(a, [], K, () => (u(), s()), s),
    w(r, F),
    Re());
}
var Ud = j('<div class="flex justify-end mt-1"><div> </div></div>'),
  Hd = j(
    '<div><div class="relative flex items-center w-full h-10"><div><div></div></div> <input type="range" aria-label="slider"/></div> <!></div>'
  );
function Kd(r, e) {
  Be(e, !0);
  let a = T(e, "value", 15, 0),
    n = T(e, "min", 3, 0),
    o = T(e, "max", 3, 100),
    i = T(e, "step", 3, 1),
    s = T(e, "sz", 3, "md"),
    l = T(e, "variant", 3, "default"),
    u = T(e, "disabled", 3, !1),
    f = T(e, "showValue", 3, !1),
    h = T(e, "class", 3, ""),
    y = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "value",
      "min",
      "max",
      "step",
      "sz",
      "variant",
      "disabled",
      "showValue",
      "onInput",
      "class",
    ]);
  const b = _(
      () =>
        ({
          xs: "h-[4px]",
          sm: "h-[5px]",
          md: "h-[6px]",
          lg: "h-[7px]",
          xl: "h-[8px]",
        })[s()]
    ),
    k = _(
      () =>
        ({
          xs: "[&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3",
          sm: "[&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4",
          md: "[&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5",
          lg: "[&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6",
          xl: "[&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7",
        })[s()]
    ),
    C = _(() =>
      l() === "neutral"
        ? "bg-[var(--color-bg-secondary)]"
        : "bg-[var(--color-bg-primary)]"
    ),
    x = _(() =>
      l() === "neutral"
        ? "[&::-webkit-slider-thumb]:bg-[var(--color-bg-secondary)] [&::-moz-range-thumb]:bg-[var(--color-bg-secondary)]"
        : "[&::-webkit-slider-thumb]:bg-[var(--color-bg-primary)] [&::-moz-range-thumb]:bg-[var(--color-bg-primary)]"
    ),
    g = _(() => Ua(((a() - n()) / Math.max(1e-12, o() - n())) * 100, 0, 100)),
    c = _(() =>
      U(
        "relative w-full data-[disabled=true]:opacity-[var(--opacity-disabled)]",
        u() ? "cursor-not-allowed" : "cursor-pointer",
        h()
      )
    ),
    v = _(() =>
      U(
        "absolute top-1/2 -translate-y-1/2 w-full bg-[var(--color-bg-muted)] rounded overflow-hidden",
        t(b)
      )
    ),
    d =
      "relative z-10 w-full h-10 bg-transparent appearance-none cursor-pointer disabled:cursor-not-allowed [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-[var(--radius-full)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--color-bg-surface)] [&::-webkit-slider-thumb]:shadow-[var(--shadow-color)] [&::-moz-range-thumb]:rounded-[var(--radius-full)] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--color-bg-surface)] [&::-moz-range-thumb]:shadow-[var(--shadow-color)] hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-125 hover:[&::-moz-range-thumb]:scale-110 active:[&::-moz-range-thumb]:scale-125 focus:outline-none focus-visible:outline-none focus-visible:[&::-webkit-slider-thumb]:shadow-[0_0_0_3px_var(--border-color-focus)] focus-visible:[&::-moz-range-thumb]:shadow-[0_0_0_3px_var(--border-color-focus)] disabled:hover:[&::-webkit-slider-thumb]:scale-100 disabled:active:[&::-webkit-slider-thumb]:scale-100 disabled:hover:[&::-moz-range-thumb]:scale-100 disabled:active:[&::-moz-range-thumb]:scale-100",
    p = _(() => U(d, t(k), t(x)));
  function S(R) {
    const G = i() || 1,
      $ = Math.round((R - n()) / G),
      I = n() + $ * G;
    return Ua(Number(I.toFixed(6)), n(), o());
  }
  let P;
  function A(R) {
    const G = P.getBoundingClientRect(),
      $ = Ua((R - G.left) / G.width, 0, 1);
    (a(S(n() + $ * (o() - n()))), e.onInput?.(a()));
  }
  function M(R) {
    u() || A(R.clientX);
  }
  function F(R) {
    const G = R.currentTarget;
    (a(S(Number(G.value))), e.onInput?.(a()));
  }
  function K(R) {
    if (u()) return;
    const G = o() - n(),
      $ = Math.max(i() || 1, Math.round(G / 10));
    let I = a();
    switch (R.key) {
      case "ArrowLeft":
      case "ArrowDown":
        I = a() - (i() || 1);
        break;
      case "ArrowRight":
      case "ArrowUp":
        I = a() + (i() || 1);
        break;
      case "PageDown":
        I = a() - $;
        break;
      case "PageUp":
        I = a() + $;
        break;
      case "Home":
        I = n();
        break;
      case "End":
        I = o();
        break;
      default:
        return;
    }
    (a(S(I)), e.onInput?.(a()), R.preventDefault());
  }
  var H = Hd();
  wt(H, () => ({
    class: t(c),
    onclick: M,
    "data-disabled": u() ? "true" : void 0,
    ...y,
  }));
  var ie = m(H),
    ce = m(ie),
    he = m(ce),
    J = D(ce, 2);
  ((J.__input = F), (J.__keydown = K));
  var te = D(ie, 2);
  {
    var le = (R) => {
      var G = Ud(),
        $ = m(G),
        I = m($);
      (B(() => {
        (q(
          $,
          1,
          `font-[var(--font-mono)] text-[var(--color-text-muted)] select-none ${Ne[s()] ?? ""}`
        ),
          X(I, a()));
      }),
        w(R, G));
    };
    Z(te, (R) => {
      f() && R(le);
    });
  }
  (ot(
    H,
    (R) => (P = R),
    () => P
  ),
    B(
      (R) => {
        (q(ce, 1, Y(t(v))),
          q(he, 1, R),
          gt(he, `width:${t(g)}%`),
          q(J, 1, Y(t(p))),
          we(J, "min", n()),
          we(J, "max", o()),
          we(J, "step", i()),
          ds(J, a()),
          (J.disabled = u()),
          we(J, "aria-valuemin", n()),
          we(J, "aria-valuemax", o()),
          we(J, "aria-valuenow", a()));
      },
      [() => Y(U("w-full h-full transition-[width]", t(C)))]
    ),
    w(r, H),
    Re());
}
it(["input", "keydown"]);
var Gd = j(
    '<div class="overflow-auto min-w-0 min-h-0"><!></div> <div class="touch-none select-none z-10 cursor-col-resize bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-hover)] transition-colors"></div> <div class="overflow-auto min-w-0 min-h-0 flex-1"><!></div>',
    1
  ),
  Wd = j(
    '<div class="overflow-auto min-w-0 min-h-0"><!></div> <div class="touch-none select-none z-10 cursor-row-resize bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-hover)] transition-colors"></div> <div class="overflow-auto min-w-0 min-h-0"><!></div>',
    1
  ),
  Zd = j("<div><!></div>");
function ci(r, e) {
  Be(e, !0);
  let a = T(e, "direction", 3, "horizontal"),
    n = T(e, "initialSize", 3, 30),
    o = T(e, "dividerSize", 3, 4),
    i = T(e, "minSize", 3, 10),
    s = T(e, "maxSize", 3, 90),
    l,
    u = _(n),
    f = be(!1),
    h = 0,
    y = 0,
    b = 0;
  function k() {
    return l ? (a() === "horizontal" ? l.offsetWidth : l.offsetHeight) : 0;
  }
  function C(P) {
    (z(f, !0),
      (h = t(u)),
      (y = a() === "horizontal" ? P.clientX : P.clientY),
      (b = k()),
      document.addEventListener("pointermove", x),
      document.addEventListener("pointerup", g),
      document.addEventListener("pointercancel", g),
      P.preventDefault(),
      P.stopPropagation());
  }
  function x(P) {
    if (!t(f)) return;
    const F = (((a() === "horizontal" ? P.clientX : P.clientY) - y) / b) * 100,
      K = h + F;
    (z(u, Math.max(i(), Math.min(s(), K))),
      P.preventDefault(),
      P.stopPropagation());
  }
  function g() {
    (z(f, !1),
      document.removeEventListener("pointermove", x),
      document.removeEventListener("pointerup", g),
      document.removeEventListener("pointercancel", g));
  }
  We(() => {
    const P = () => {
      b = k();
    };
    return (
      window.addEventListener("resize", P),
      () => window.removeEventListener("resize", P)
    );
  });
  var c = Zd();
  let v;
  var d = m(c);
  {
    var p = (P) => {
        var A = Gd(),
          M = Ce(A),
          F = m(M);
        Je(F, () => e.first ?? Q);
        var K = D(M, 2);
        K.__pointerdown = C;
        var H = D(K, 2),
          ie = m(H);
        (Je(ie, () => e.second ?? Q),
          B(() => {
            (gt(M, `width: ${t(u) ?? ""}%`), gt(K, `width: ${o() ?? ""}px`));
          }),
          w(P, A));
      },
      S = (P) => {
        var A = Wd(),
          M = Ce(A),
          F = m(M);
        Je(F, () => e.first ?? Q);
        var K = D(M, 2);
        K.__pointerdown = C;
        var H = D(K, 2),
          ie = m(H);
        (Je(ie, () => e.second ?? Q),
          B(() => {
            (gt(M, `height: ${t(u) ?? ""}%`),
              gt(K, `height: ${o() ?? ""}px`),
              gt(H, `height: calc(100% - ${t(u) ?? ""}% - ${o() ?? ""}px)`));
          }),
          w(P, A));
      };
    Z(d, (P) => {
      a() === "horizontal" ? P(p) : P(S, !1);
    });
  }
  (ot(
    c,
    (P) => (l = P),
    () => l
  ),
    B(
      () =>
        (v = q(c, 1, "w-full h-full overflow-hidden", null, v, {
          flex: a() === "horizontal",
          "flex-col": a() === "vertical",
        }))
    ),
    w(r, c),
    Re());
}
it(["pointerdown"]);
var Xd = j("<span> </span>"),
  Yd = j("<span> </span>"),
  Jd = j("<span> </span>"),
  Qd = j(
    '<label><!> <div class="inline-flex items-center gap-2"><!> <input/> <button type="button"><span></span></button> <!></div></label>'
  );
function _s(r, e) {
  Be(e, !0);
  let a = T(e, "sz", 3, "md"),
    n = T(e, "checked", 15, !1),
    o = T(e, "class", 3, ""),
    i = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "sz",
      "checked",
      "leftLabel",
      "rightLabel",
      "topLabel",
      "onChange",
      "class",
    ]);
  const s = _(() => e.id ?? rn("sw-")),
    l = {
      xs: "w-8 h-4",
      sm: "w-10 h-5",
      md: "w-12 h-6",
      lg: "w-14 h-7",
      xl: "w-16 h-8",
    },
    u = {
      xs: "h-[14px] w-[14px]",
      sm: "h-[17px] w-[17px]",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-7 w-7",
    },
    f = {
      xs: "p-[1px]",
      sm: "p-[1.5px]",
      md: "p-[2px]",
      lg: "p-[2px]",
      xl: "p-[2px]",
    },
    h = _(() => ("disabled" in i ? !!e.disabled : !1));
  function y() {
    t(h) || (n(!n()), e.onChange?.(n()));
  }
  const b = _(() => (n() ? "justify-end" : "justify-start")),
    k = _(() =>
      U(
        "relative inline-flex items-center rounded-full border transition focus:outline-none focus:ring-2 focus:ring-[var(--border-color-focus)]",
        l[a()],
        f[a()],
        n()
          ? "bg-[var(--color-bg-primary)] border-[var(--color-bg-primary)]"
          : "bg-[var(--color-bg-muted)] border-[var(--border-color-default)]",
        t(h)
          ? "opacity-[var(--opacity-disabled)] cursor-not-allowed"
          : "cursor-pointer",
        t(b)
      )
    ),
    C = _(() => U("inline-flex flex-col items-center gap-1 select-none", o())),
    x = _(() =>
      U(
        u[a()],
        "rounded-full bg-white border border-[var(--border-color-default)] shadow-sm"
      )
    );
  var g = Qd(),
    c = m(g);
  {
    var v = (ie) => {
      var ce = Xd(),
        he = m(ce);
      (B(() => {
        (q(ce, 1, `text-[var(--color-text-muted)] ${Ne[a()] ?? ""}`),
          X(he, e.topLabel));
      }),
        w(ie, ce));
    };
    Z(c, (ie) => {
      e.topLabel && ie(v);
    });
  }
  var d = D(c, 2),
    p = m(d);
  {
    var S = (ie) => {
      var ce = Yd(),
        he = m(ce);
      (B(() => {
        (q(ce, 1, `text-[var(--color-text-muted)] ${Ne[a()] ?? ""}`),
          X(he, e.leftLabel));
      }),
        w(ie, ce));
    };
    Z(p, (ie) => {
      e.leftLabel && ie(S);
    });
  }
  var P = D(p, 2),
    A = () => y();
  wt(
    P,
    () => ({
      id: t(s),
      type: "checkbox",
      checked: n(),
      ...i,
      class: "sr-only",
      "aria-checked": n(),
      "aria-invalid": i["aria-invalid"] || void 0,
      "aria-describedby": i["aria-describedby"],
      onchange: A,
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0
  );
  var M = D(P, 2);
  M.__click = y;
  var F = m(M),
    K = D(M, 2);
  {
    var H = (ie) => {
      var ce = Jd(),
        he = m(ce);
      (B(() => {
        (q(ce, 1, `text-[var(--color-text-muted)] ${Ne[a()] ?? ""}`),
          X(he, e.rightLabel));
      }),
        w(ie, ce));
    };
    Z(K, (ie) => {
      e.rightLabel && ie(H);
    });
  }
  (B(() => {
    (q(g, 1, Y(t(C))),
      we(g, "for", t(s)),
      q(M, 1, Y(t(k))),
      we(M, "aria-pressed", n()),
      we(
        M,
        "aria-label",
        typeof i["aria-label"] == "string" ? i["aria-label"] : "Switch"
      ),
      (M.disabled = t(h)),
      q(F, 1, Y(t(x))));
  }),
    w(r, g),
    Re());
}
it(["click"]);
var $d = j(
    '<th scope="col"><button type="button" class="flex items-center gap-2 select-none hover:bg-[var(--color-bg-hover)] rounded-none px-1 py-0.5 border border-transparent focus-visible:border-[var(--border-color-focus)] focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus-visible:outline-none"><span class="truncate min-w-0 text-left"> </span> <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5.23 11.77a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L10 8.31l-3.77 3.46a.75.75 0 0 1-1 0z" fill="currentColor"></path></svg></button></th>'
  ),
  ef = j("<tr></tr>"),
  tf = j("<td><div> </div></td>"),
  rf = j("<tr></tr>"),
  af = j('<div class="mt-3 flex justify-between items-center"><!></div>'),
  nf = j("<div><table><thead><!></thead><tbody></tbody></table> <!></div>");
function of(r, e) {
  Be(e, !0);
  let a = T(e, "columns", 19, () => []),
    n = T(e, "rows", 19, () => []),
    o = T(e, "class", 3, ""),
    i = T(e, "variant", 3, "default"),
    s = T(e, "stickyHeader", 3, !1),
    l = T(e, "sz", 3, "md"),
    u = be(null),
    f = be(null);
  function h(J) {
    const te = J.key;
    t(u) !== te
      ? (z(u, te, !0), z(f, "asc"))
      : z(f, t(f) === "asc" ? "desc" : "asc", !0);
  }
  function y(J, te) {
    const le = J == null || J === "",
      R = te == null || te === "";
    if (le && R) return 0;
    if (le) return 1;
    if (R) return -1;
    const G = Number(J),
      $ = Number(te),
      I = !Number.isNaN(G),
      ae = !Number.isNaN($);
    return I && ae
      ? G - $
      : String(J).localeCompare(String(te), void 0, {
          numeric: !0,
          sensitivity: "base",
        });
  }
  const b = {
      default: {
        table: "border border-[var(--border-color-default)]",
        header:
          "bg-[var(--color-bg-secondary)] border border-[var(--border-color-default)]",
        body: "",
        cell: "border-t border-r last:border-r-0 border-[var(--border-color-default)]",
        row: "hover:bg-[var(--color-bg-hover)]",
        padY: "py-2",
      },
      dense: {
        table: "border border-[var(--border-color-default)]",
        header:
          "bg-[var(--color-bg-secondary)] border border-[var(--border-color-default)]",
        body: "",
        cell: "border-t border-r last:border-r-0 border-[var(--border-color-default)]",
        row: "hover:bg-[var(--color-bg-hover)]",
        padY: "py-1.5",
      },
      list: {
        table: "border-none",
        header: "hidden",
        body: "",
        cell: "border-none",
        row: "hover:bg-[var(--color-bg-hover)]",
        padY: "py-1.5",
      },
      noBorder: {
        table: "border-none",
        header: "bg-transparent border-none",
        body: "",
        cell: "border-none",
        row: "hover:bg-[var(--color-bg-hover)]",
        padY: "py-2",
      },
      zebra: {
        table: "border border-[var(--border-color-default)]",
        header:
          "bg-[var(--color-bg-secondary)] border border-[var(--border-color-default)]",
        body: "",
        cell: "border-t border-r last:border-r-0 border-[var(--border-color-default)]",
        row: "even:bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-hover)]",
        padY: "py-2",
      },
      noTitle: {
        table: "border border-[var(--border-color-default)]",
        header: "hidden",
        body: "",
        cell: "border-t border-r last:border-r-0 border-[var(--border-color-default)]",
        row: "hover:bg-[var(--color-bg-hover)]",
        padY: "py-2",
      },
    },
    k = _(() => {
      const J = Array.isArray(n()) ? n() : [];
      if (!t(u) || !t(f)) return J;
      const te = t(u),
        le = J.map((R, G) => [R, G]);
      return (
        le.sort(([R, G], [$, I]) => {
          const ae = y(R[te], $[te]);
          return ae !== 0 ? (t(f) === "asc" ? ae : -ae) : G - I;
        }),
        le.map(([R]) => R)
      );
    }),
    C = (J) =>
      J === "end" ? "text-right" : J === "start" ? "text-left" : "text-center",
    x = _(() => U("overflow-x-auto", o())),
    g = _(() => Ne[l()]),
    c = _(i),
    v = _(() => t(c) === "list" || t(c) === "dense"),
    d = _(() => b[t(c)] ?? b.default),
    p = _(() =>
      U(
        t(v) ? "inline-table w-fit" : "min-w-full",
        "border-collapse",
        t(d).table,
        t(g),
        "text-[var(--color-text-default)]"
      )
    ),
    S = (J, te) => {
      const le =
        typeof J.id == "string" || typeof J.id == "number"
          ? J.id
          : typeof J.key == "string" || typeof J.key == "number"
            ? J.key
            : te;
      return String(le);
    },
    P = (J, te) => String(J.key ?? te);
  var A = nf(),
    M = m(A),
    F = m(M),
    K = m(F);
  {
    var H = (J) => {
      var te = ef();
      (at(
        te,
        23,
        a,
        (le, R) => P(le, R),
        (le, R) => {
          var G = $d(),
            $ = m(G);
          (($.__click = () => h(t(R))),
            ($.__keydown = (ee) => {
              (ee.key === "Enter" || ee.key === " ") &&
                (ee.preventDefault(), h(t(R)));
            }));
          var I = m($),
            ae = m(I),
            W = D(I, 2);
          (B(
            (ee, se) => {
              (gt(G, !t(v) && t(R).width ? `width:${t(R).width}` : void 0),
                q(G, 1, ee),
                we(
                  G,
                  "aria-sort",
                  t(u) === t(R).key
                    ? t(f) === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                ),
                we($, "aria-label", `Sort by ${t(R).label}`),
                X(ae, t(R).label),
                q(W, 0, se));
            },
            [
              () => Y(U("px-3 font-semibold", t(d).padY, C(t(R).align))),
              () =>
                Y(
                  U(
                    "h-4 w-4 opacity-60 transition-transform",
                    t(u) === t(R).key && t(f) === "desc" && "rotate-180"
                  )
                ),
            ]
          ),
            w(le, G));
        }
      ),
        B((le) => q(te, 1, le), [() => Y(U(s() && "sticky top-0 z-10"))]),
        w(J, te));
    };
    Z(K, (J) => {
      t(c) !== "noTitle" && t(c) !== "list" && J(H);
    });
  }
  var ie = D(F);
  at(
    ie,
    23,
    () => t(k),
    (J, te) => S(J, te),
    (J, te) => {
      var le = rf();
      (at(
        le,
        23,
        a,
        (R, G) => P(R, G),
        (R, G) => {
          var $ = tf(),
            I = m($),
            ae = m(I);
          (B(
            (W, ee) => {
              (gt($, !t(v) && t(G).width ? `width:${t(G).width}` : void 0),
                q($, 1, W),
                q(I, 1, ee),
                X(ae, t(te)[t(G).key]));
            },
            [
              () => Y(U("px-3", t(d).padY, C(t(G).align), t(d).cell)),
              () => Y(U(t(v) && "break-words whitespace-normal")),
            ]
          ),
            w(R, $));
        }
      ),
        B(
          (R) => q(le, 1, R),
          [() => Y(U("first:[&>td]:border-t-0", t(d).row))]
        ),
        w(J, le));
    }
  );
  var ce = D(M, 2);
  {
    var he = (J) => {
      var te = af(),
        le = m(te);
      (ms(
        le,
        Mu(() => e.pagination)
      ),
        w(J, te));
    };
    Z(ce, (J) => {
      e.pagination && e.pagination.totalPages > 0 && J(he);
    });
  }
  (B(() => {
    (q(A, 1, Y(t(x))),
      q(M, 1, Y(t(p))),
      q(F, 1, Y(t(d).header)),
      q(ie, 1, Y(t(d).body)));
  }),
    w(r, A),
    Re());
}
it(["click", "keydown"]);
var sf = j('<button type="button" role="tab"><span> </span></button>'),
  lf = j(
    '<div><div role="tablist" tabindex="0" aria-orientation="horizontal"></div> <div role="tabpanel" tabindex="0" class="w-full min-w-0 relative z-0 border-t border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-[var(--spacing-md)] rounded-b-[var(--radius-sm)] shadow-[0_1px_2px_0_var(--shadow-color)]"><!></div></div>'
  );
function uf(r, e) {
  Be(e, !0);
  let a = T(e, "tabs", 19, () => []),
    n = T(e, "activeTab", 7, ""),
    o = T(e, "sz", 3, "md"),
    i = T(e, "variant", 3, "default"),
    s = T(e, "fitted", 3, !1),
    l = T(e, "class", 3, ""),
    u = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "tabs",
      "activeTab",
      "sz",
      "variant",
      "fitted",
      "onChange",
      "class",
      "children",
    ]);
  We(() => {
    (!n() && a().length && n(a()[0].id),
      n() && !a().find((p) => p.id === n()) && a().length && n(a()[0].id));
  });
  function f(p) {
    p.disabled || (n(p.id), e.onChange?.(p.id));
  }
  function h(p) {
    const S = a().filter((F) => !F.disabled);
    if (!S.length) return;
    const P = Math.max(
      0,
      S.findIndex((F) => F.id === n())
    );
    let A = P;
    if (p.key === "ArrowRight") A = (P + 1) % S.length;
    else if (p.key === "ArrowLeft") A = (P - 1 + S.length) % S.length;
    else if (p.key === "Home") A = 0;
    else if (p.key === "End") A = S.length - 1;
    else return;
    p.preventDefault();
    const M = S[A].id;
    (n(M),
      e.onChange?.(M),
      queueMicrotask(() => {
        document.getElementById(`tab-${M}`)?.focus();
      }));
  }
  const y = {
      xs: "px-2 py-1",
      sm: "px-3 py-1.5",
      md: "px-4 py-2",
      lg: "px-5 py-2.5",
      xl: "px-6 py-3",
    },
    b =
      "inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--border-color-focus)] focus-visible:outline-offset-2 disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
    k = _(() => ({
      default: {
        base: "border-b-2 border-transparent text-[var(--color-text-muted)]",
        active:
          "bg-[var(--color-bg-secondary)] !text-[var(--color-text-default)] border-[var(--border-color-strong)]",
        hover:
          "hover:text-[var(--color-text-default)] hover:bg-[var(--color-bg-muted)]",
      },
      underline: {
        base: "border-b-2 border-transparent text-[var(--color-text-muted)]",
        active:
          "border-[var(--border-color-focus)] !text-[var(--color-text-default)]",
        hover:
          "hover:text-[var(--color-text-default)] hover:border-[var(--border-color-strong)]",
      },
      pills: {
        base: "text-[var(--color-text-muted)] border border-transparent font-medium",
        active:
          "bg-[var(--color-bg-primary)] text-white border-[var(--color-bg-primary)]",
        hover:
          "hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-default)]",
      },
    })),
    C = _(() => U("w-full self-stretch flex flex-col", Ne[o()], l())),
    x = _(() =>
      U(
        "flex w-full flex-nowrap overflow-x-auto whitespace-nowrap relative z-10 bg-[var(--color-bg-surface)]",
        Ne[o()],
        i() === "pills" && "gap-1",
        i() === "underline" && "gap-6",
        s() ? "justify-between" : "justify-start"
      )
    );
  var g = lf();
  wt(g, () => ({ class: t(C), ...u }));
  var c = m(g);
  ((c.__keydown = h),
    at(
      c,
      21,
      a,
      (p) => p.id,
      (p, S) => {
        var P = sf();
        ((P.__click = () => f(t(S))),
          (P.__keydown = (F) => {
            (F.key === "Enter" || F.key === " ") &&
              (F.preventDefault(), f(t(S)));
          }));
        var A = m(P),
          M = m(A);
        (B(
          (F) => {
            (we(P, "id", `tab-${t(S).id}`),
              we(P, "aria-selected", t(S).id === n() ? "true" : "false"),
              we(P, "aria-controls", `panel-${t(S).id}`),
              we(P, "aria-disabled", t(S).disabled ? "true" : "false"),
              we(P, "tabindex", t(S).id === n() ? 0 : -1),
              (P.disabled = t(S).disabled),
              q(P, 1, F),
              X(M, t(S).label));
          },
          [
            () =>
              Y(
                U(
                  "relative z-20",
                  b,
                  y[o()],
                  Ne[o()],
                  s() ? "basis-0 grow flex-1 min-w-0 text-center" : "shrink-0",
                  t(k)[i()]?.base,
                  t(S).id === n()
                    ? t(k)[i()]?.active
                    : t(S).disabled
                      ? ""
                      : t(k)[i()]?.hover
                )
              ),
          ]
        ),
          w(p, P));
      }
    ));
  var v = D(c, 2),
    d = m(v);
  (Je(d, () => e.children ?? Q),
    B(() => {
      (q(c, 1, Y(t(x))),
        we(v, "id", `panel-${n()}`),
        we(v, "aria-labelledby", `tab-${n()}`));
    }),
    w(r, g),
    Re());
}
it(["keydown", "click"]);
var cf = ir(
    '<svg class="w-[1em] h-[1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4" fill="currentColor"></circle><line x1="12" y1="1" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line></svg>'
  ),
  df =
    ir(`<svg class="w-[1em] h-[1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2
       A9 9 0 1 0 21 12
       A7.5 7.5 0 1 1 12 2
       Z" fill="currentColor"></path></svg>`),
  ff = j("<button><!></button>");
function di(r, e) {
  Be(e, !0);
  let a = T(e, "class", 3, ""),
    n = T(e, "sz", 3, "md"),
    o = T(e, "type", 3, "button"),
    i = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "disabled",
      "class",
      "sz",
      "type",
    ]);
  const s = "theme-toggle:dark",
    l = ri.get(s, !1);
  let u = be(Ye(l));
  const f = `inline-flex items-center justify-center rounded-[var(--radius-md)]
    border border-[var(--border-color-default)] bg-[var(--color-bg-secondary)]
    hover:bg-[var(--color-bg-hover)] focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-[var(--border-color-focus)] transition-colors
    disabled:opacity-[var(--opacity-disabled)]
    disabled:cursor-not-allowed
    disabled:brightness-100
    disabled:active:scale-100
    disabled:hover:brightness-100
  `,
    h = {
      xs: "px-2 py-0.5 h-6",
      sm: "px-3 py-1 h-7",
      md: "px-4 py-2 h-8",
      lg: "px-5 py-2.5 h-9",
      xl: "px-6 py-3 h-10",
    },
    y = "fixed top-4 right-4",
    b = _(() => U(a() ? null : y, f, h[n()], Ne[n()], a()));
  We(() => {
    (document.documentElement.classList.toggle("dark", t(u)), ri.set(s, t(u)));
  });
  var k = ff(),
    C = () => z(u, !t(u));
  wt(k, () => ({
    type: o(),
    disabled: e.disabled,
    class: t(b),
    onclick: C,
    "aria-label": t(u) ? "Switch to light mode" : "Switch to dark mode",
    ...i,
  }));
  var x = m(k);
  {
    var g = (v) => {
        var d = cf();
        w(v, d);
      },
      c = (v) => {
        var d = df();
        w(v, d);
      };
    Z(x, (v) => {
      t(u) ? v(g) : v(c, !1);
    });
  }
  (w(r, k), Re());
}
var vf = j("<!> <!>", 1),
  gf = j(
    '<div><div class="text-sm font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex items-start gap-4"><div class="flex flex-wrap gap-3 min-w-[0]"><!> <!></div> <div class="flex items-center gap-3 pt-6"><!> <!></div></div> <div class="mt-4 p-4 bg-[var(--color-bg-surface)] text-center"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div></div>'
  );
function pf(r, e) {
  Be(e, !0);
  let a = T(e, "value", 15, null),
    n = T(e, "step", 3, 60),
    o = T(e, "disabled", 3, !1),
    i = T(e, "clearable", 3, !0),
    s = T(e, "initialSystem", 3, "iso"),
    l = T(e, "class", 3, ""),
    u = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "value",
      "step",
      "label",
      "placeholder",
      "disabled",
      "clearable",
      "initialSystem",
      "onChange",
      "class",
    ]);
  const f = Wt("lang") ?? null,
    h = _(() => f?.value ?? "en"),
    y = _(() => nn[t(h)].components.timePicker),
    b = _(() => e.label ?? t(y).text),
    k = _(() => e.placeholder ?? t(y).placeholder),
    C = _(() => U("inline-block w-full", l()));
  let x = _(s),
    g = be("00"),
    c = be("00"),
    v = be("AM");
  const d = _(() => a() != null),
    p = Array.from({ length: 24 }, (ve, Se) => {
      const L = Se.toString().padStart(2, "0");
      return { value: L, label: L };
    }),
    S = Array.from({ length: 12 }, (ve, Se) => {
      const L = (Se + 1).toString().padStart(2, "0");
      return { value: L, label: L };
    }),
    P = [
      { value: "AM", label: "AM" },
      { value: "PM", label: "PM" },
    ],
    A = _(() =>
      !n() || n() <= 0 ? 1 : Math.min(60, Math.max(1, Math.round(n() / 60)))
    ),
    M = _(() => {
      const ve = [];
      for (let Se = 0; Se < 60; Se += t(A)) {
        const L = Se.toString().padStart(2, "0");
        ve.push({ value: L, label: L });
      }
      return ve;
    });
  function F(ve) {
    return ve.padStart(2, "0").slice(-2);
  }
  function K() {
    const ve =
      t(x) === "english" ? `${t(g)}:${t(c)} ${t(v)}` : `${t(g)}:${t(c)}`;
    (a(ve), e.onChange?.(ve));
  }
  function H(ve) {
    (z(g, F(ve), !0), K());
  }
  function ie(ve) {
    (z(c, F(ve), !0), K());
  }
  function ce(ve) {
    (z(g, F(ve), !0), K());
  }
  function he(ve) {
    (z(v, ve === "AM" || ve === "PM" ? ve : "AM", !0), K());
  }
  function J() {
    o() ||
      (t(x) === "iso"
        ? (z(x, "english"), parseInt(t(g), 10) >= 0 && z(g, "12"), he("AM"))
        : z(x, "iso"),
      K());
  }
  function te() {
    i() && (z(g, "00"), z(c, "00"), z(v, "AM"), a(null), e.onChange?.(null));
  }
  We(() => {
    if (a() == null) return;
    let ve = a();
    (ve.includes("AM") || ve.includes("PM")) &&
      (ve = ve.replace(" AM", "").replace(" PM", ""));
    const [Se, L] = ve.split(":");
    (z(g, F(Se), !0), z(c, F(L), !0));
  });
  var le = gf();
  wt(le, () => ({ class: t(C), ...u }));
  var R = m(le),
    G = m(R),
    $ = D(R, 2),
    I = m($),
    ae = m(I);
  {
    var W = (ve) => {
        Ht(ve, {
          get label() {
            return t(y).hour;
          },
          get options() {
            return p;
          },
          get value() {
            return t(g);
          },
          onChange: H,
          get disabled() {
            return o();
          },
          sz: "sm",
        });
      },
      ee = (ve) => {
        var Se = vf(),
          L = Ce(Se);
        Ht(L, {
          get label() {
            return t(y).hour;
          },
          get options() {
            return S;
          },
          get value() {
            return t(g);
          },
          onChange: ce,
          get disabled() {
            return o();
          },
          sz: "sm",
        });
        var re = D(L, 2);
        (Ht(re, {
          get label() {
            return t(y).period;
          },
          get options() {
            return P;
          },
          get value() {
            return t(v);
          },
          onChange: he,
          get disabled() {
            return o();
          },
          sz: "sm",
        }),
          w(ve, Se));
      };
    Z(ae, (ve) => {
      t(x) === "iso" ? ve(W) : ve(ee, !1);
    });
  }
  var se = D(ae, 2);
  Ht(se, {
    get label() {
      return t(y).minute;
    },
    get options() {
      return t(M);
    },
    get value() {
      return t(c);
    },
    onChange: ie,
    get disabled() {
      return o();
    },
    sz: "sm",
  });
  var me = D(I, 2),
    N = m(me);
  $e(N, {
    onClick: J,
    get disabled() {
      return o();
    },
    sz: "xs",
    children: (ve, Se) => {
      var L = Oe();
      (B(() => X(L, t(x) === "iso" ? t(y).switchTo12h : t(y).switchTo24h)),
        w(ve, L));
    },
    $$slots: { default: !0 },
  });
  var E = D(N, 2);
  {
    var ne = (ve) => {
      {
        let Se = _(() => !t(d) || o());
        $e(ve, {
          onClick: te,
          variant: "danger",
          get disabled() {
            return t(Se);
          },
          sz: "xs",
          children: (L, re) => {
            var oe = Oe();
            (B(() => X(oe, t(y).clear)), w(L, oe));
          },
          $$slots: { default: !0 },
        });
      }
    };
    Z(E, (ve) => {
      i() && ve(ne);
    });
  }
  var O = D($, 2),
    de = m(O),
    fe = m(de),
    ge = D(de, 2),
    ze = m(ge);
  {
    var Pe = (ve) => {
        var Se = Oe();
        (B(() => X(Se, a())), w(ve, Se));
      },
      Ae = (ve) => {
        var Se = Oe();
        (B(() => X(Se, t(k))), w(ve, Se));
      };
    Z(ze, (ve) => {
      t(d) ? ve(Pe) : ve(Ae, !1);
    });
  }
  (B(() => {
    (X(G, t(b)), X(fe, t(y).selectedTime));
  }),
    w(r, le),
    Re());
}
var bf = j('<div role="tooltip"> </div>'),
  hf = j("<div><!> <!></div>");
function Dt(r, e) {
  Be(e, !0);
  let a = T(e, "position", 3, "top"),
    n = T(e, "delay", 3, 300),
    o = T(e, "open", 3, !1),
    i = T(e, "text", 3, ""),
    s = T(e, "class", 3, ""),
    l = St(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "children",
      "position",
      "delay",
      "open",
      "text",
      "class",
    ]),
    u = be(!1),
    f = be(!1),
    h = be(!1),
    y;
  const b = _(() => o() || t(f) || t(h));
  We(
    () => (
      y && clearTimeout(y),
      t(b)
        ? (y = setTimeout(() => {
            z(u, !0);
          }, n()))
        : z(u, !1),
      () => {
        y && clearTimeout(y);
      }
    )
  );
  const k = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
    },
    C = _(() => U("relative inline-block", s())),
    x = _(() =>
      U(
        "absolute z-20 p-0.5 italic text-xs font-medium whitespace-nowrap rounded-[var(--radius-xs)]",
        "bg-[var(--color-bg-surface)] text-[var(--color-text-default)] shadow-lg border border-[var(--border-color-default)]",
        "transition-opacity duration-150 ease-linear",
        t(u) ? "opacity-100" : "opacity-0 pointer-events-none"
      )
    );
  var g = hf(),
    c = () => z(f, !0),
    v = () => z(f, !1),
    d = () => z(h, !0),
    p = () => z(h, !1);
  wt(g, () => ({
    class: t(C),
    onmouseenter: c,
    onmouseleave: v,
    onfocus: d,
    onblur: p,
    ...l,
  }));
  var S = m(g);
  Je(S, () => e.children ?? Q);
  var P = D(S, 2);
  {
    var A = (M) => {
      var F = bf(),
        K = m(F);
      (B(
        (H) => {
          (q(F, 1, H), X(K, i()));
        },
        [() => Y(U(t(x), k[a()]))]
      ),
        w(M, F));
    };
    Z(P, (M) => {
      i() && t(u) && M(A);
    });
  }
  (w(r, g), Re());
}
var mf = j(
  '<header class="flex items-end justify-between gap-4 -mx-5 px-5 py-5 border-b border-[var(--border-color-default)]"><h2 class="text-2xl font-semibold tracking-tight"> </h2> <span class="text-sm [color:var(--color-text-muted)]"> </span></header> <div class="p-5 space-y-4 text-sm opacity-90 leading-relaxed"><p><strong> </strong> <strong> </strong> <strong> </strong> </p> <p> <code> </code> <code> </code> </p> <p> </p> <p> <strong> </strong><br/> <a><strong> </strong></a></p></div>',
  1
);
function _f(r, e) {
  Be(e, !0);
  const a = Wt("lang"),
    n = _(() => _a[a.value]);
  (an(r, {
    children: (o, i) => {
      var s = mf(),
        l = Ce(s),
        u = m(l),
        f = m(u),
        h = D(u, 2),
        y = m(h),
        b = D(l, 2),
        k = m(b),
        C = m(k),
        x = m(C),
        g = D(C),
        c = D(g),
        v = m(c),
        d = D(c),
        p = D(d),
        S = m(p),
        P = D(p),
        A = D(k, 2),
        M = m(A),
        F = D(M),
        K = m(F),
        H = D(F),
        ie = D(H),
        ce = m(ie),
        he = D(ie),
        J = D(A, 2),
        te = m(J),
        le = D(J, 2),
        R = m(le),
        G = D(R),
        $ = m(G),
        I = D(G, 2),
        ae = D(I),
        W = m(ae),
        ee = m(W);
      (B(() => {
        (X(f, t(n).about.heading),
          X(y, t(n).about.meta),
          X(x, t(n).app.title),
          X(g, `${t(n).about.intro.description ?? ""} `),
          X(v, t(n).about.intro.frameworks.runes),
          X(d, ` ${t(n).about.intro.connector ?? ""} `),
          X(S, t(n).about.intro.frameworks.tailwind),
          X(P, ` ${t(n).about.intro.closing ?? ""}`),
          X(M, `${t(n).about.styling.beforeFile ?? ""} `),
          X(K, t(n).about.styling.file),
          X(H, `${t(n).about.styling.afterFile ?? ""} `),
          X(ce, t(n).about.styling.darkClass),
          X(he, ` ${t(n).about.styling.afterDark ?? ""}`),
          X(te, t(n).about.patterns),
          X(R, `${t(n).about.versionLabel ?? ""}: `),
          X($, t(n).app.version),
          X(I, ` ${t(n).about.authorLabel ?? ""}: `),
          we(ae, "href", t(n).app.authorUrl),
          X(ee, t(n).about.authorName));
      }),
        w(o, s));
    },
    $$slots: { default: !0 },
  }),
    Re());
}
var xf = j(
  '<div><div class="flex flex-wrap items-baseline gap-3"><div class="shrink-0"><!></div> <!></div> <!></div>'
);
function wf(r, e) {
  Be(e, !0);
  let a = T(e, "class", 3, "");
  const n = [
      { value: "txt", label: "Text" },
      { value: "html", label: "HTML" },
      { value: "css", label: "CSS" },
      { value: "js", label: "JavaScript" },
      { value: "json", label: "JSON" },
      { value: "python", label: "Python" },
    ],
    i = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="assets/icon.svg" />
    <link rel="apple-touch-icon" href="assets/apple-touch-icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Svelte Components</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>`;
  let s = be("html"),
    l = Ye({
      txt: `CodeView demo
Switch language with the select above.`,
      html: i,
      css: `:root {
  --radius-md: 8px;
  --color-primary: oklch(0.67 0.21 35);
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: radial-gradient(circle at 20% 20%, #f3f4f6, #fff 60%);
  color: #0f172a;
}`,
      js: "export function greet(name) {\n  return `Hello, ${name}!`;\n}",
      json: `{
  "name": "svelte-comp",
  "version": "1.0.0",
  "description": "Svelte 5 UI component library"
}`,
      python: `def greet(name):
    return f"Hello, {name}!"`,
    }),
    u = be(""),
    f = be(!1);
  const h = _(() => l[t(s)]),
    y = _(() => t(u).trimStart());
  We(() => {
    t(h) !== t(u) && z(u, t(h), !0);
  });
  var b = xf(),
    k = m(b),
    C = m(k),
    x = m(C);
  Ht(x, {
    label: "Language",
    get options() {
      return n;
    },
    onChange: (v) => z(s, v, !0),
    class: "min-w-[6rem]",
    sz: "xs",
    get value() {
      return t(s);
    },
    set value(v) {
      z(s, v, !0);
    },
  });
  var g = D(C, 2);
  _s(g, {
    topLabel: "Editable",
    onChange: (v) => z(f, v, !0),
    sz: "xs",
    get checked() {
      return t(f);
    },
    set checked(v) {
      z(f, v, !0);
    },
  });
  var c = D(k, 2);
  (bs(c, {
    get code() {
      return t(y);
    },
    title: "CODE",
    get language() {
      return t(s);
    },
    showCopyButton: !0,
    showLineNumbers: !0,
    get editable() {
      return t(f);
    },
    activeLine: !0,
    get sz() {
      return e.sz;
    },
  }),
    B(() => q(b, 1, `w-full flex flex-col gap-3 ${a() ?? ""}`)),
    w(r, b),
    Re());
}
var yf = j('<header class="p-[var(--spacing-md,1rem)]"><!></header>'),
  kf = j(
    '<aside class="hidden lg:block p-[var(--spacing-md,1rem)]"><!></aside>'
  ),
  Cf = j(
    '<aside class="hidden lg:block p-[var(--spacing-md,1rem)]"><!></aside>'
  ),
  Sf = j('<footer class="p-[var(--spacing-md,1rem)]"><!></footer>'),
  Pf = j(
    '<div><div class="grid min-h-dvh grid-rows-[auto_1fr_auto]"><!> <!> <main class="p-[var(--spacing-md,1rem)]"><!></main> <!> <!></div></div>'
  );
function Ef(r, e) {
  Be(e, !0);
  let a = T(e, "class", 3, "");
  const n =
      "min-h-dvh w-full bg-[var(--color-bg-page,oklch(98%_0_0))] text-[var(--color-text-default,oklch(15%_0_0))] transition-colors duration-[var(--transition-normal,300ms)]",
    o = _(() => U(n, a()));
  var i = Pf(),
    s = m(i),
    l = m(s);
  {
    var u = (c) => {
      var v = yf(),
        d = m(v);
      (Je(d, () => e.header ?? Q), w(c, v));
    };
    Z(l, (c) => {
      e.header && c(u);
    });
  }
  var f = D(l, 2);
  {
    var h = (c) => {
      var v = kf(),
        d = m(v);
      (Je(d, () => e.left ?? Q), w(c, v));
    };
    Z(f, (c) => {
      e.left && c(h);
    });
  }
  var y = D(f, 2),
    b = m(y);
  Je(b, () => e.children ?? Q);
  var k = D(y, 2);
  {
    var C = (c) => {
      var v = Cf(),
        d = m(v);
      (Je(d, () => e.right ?? Q), w(c, v));
    };
    Z(k, (c) => {
      e.right && c(C);
    });
  }
  var x = D(k, 2);
  {
    var g = (c) => {
      var v = Sf(),
        d = m(v);
      (Je(d, () => e.footer ?? Q), w(c, v));
    };
    Z(x, (c) => {
      e.footer && c(g);
    });
  }
  (B(() => q(i, 1, Y(t(o)))), w(r, i), Re());
}
const Io = Pu([]);
let Af = 0;
function xn(r, e) {
  const a = Af++,
    n = Vu(r, e?.message);
  Io.update((o) => [
    ...o,
    {
      id: a,
      title: e?.title ?? n.title,
      message: e?.message ?? n.message,
      variant: r,
    },
  ]);
}
function zf(r) {
  Io.update((e) => e.filter((a) => a.id !== r));
}
function Ff(r) {
  xn(r);
}
var Tf = j("<div><!></div> <!>", 1);
function Lf(r, e) {
  Be(e, !0);
  let a = T(e, "sz", 3, "sm"),
    n = T(e, "class", 3, ""),
    o = T(e, "message", 3, ""),
    i = _(a);
  const s = Wt("lang"),
    l = _(() => _a[s.value]);
  let u = be(!1);
  We(() => {
    z(i, a());
  });
  function f() {
    z(u, !0);
  }
  function h() {
    (z(u, !1),
      xn("success", {
        title: t(l).toasts.confirmTitle,
        message: t(l).toasts.confirmMessage,
      }));
  }
  function y() {
    (z(u, !1),
      xn("warning", {
        title: t(l).toasts.cancelTitle,
        message: t(l).toasts.cancelMessage,
      }));
  }
  var b = Tf(),
    k = Ce(b),
    C = m(k);
  $e(C, {
    variant: "primary",
    onClick: f,
    children: (g, c) => {
      var v = Oe();
      (B(() => X(v, t(l).snippets.dialog.button)), w(g, v));
    },
    $$slots: { default: !0 },
  });
  var x = D(k, 2);
  (mo(x, {
    get title() {
      return t(l).snippets.dialog.title;
    },
    get sz() {
      return t(i);
    },
    get open() {
      return t(u);
    },
    onConfirm: h,
    onCancel: y,
    get class() {
      return n();
    },
    get message() {
      return o();
    },
  }),
    B((g) => q(k, 1, g), [() => Y(U("flex flex-wrap gap-3"))]),
    w(r, b),
    Re());
}
var Mf = j(
    '<div class="p-4 flex justify-center font-semibold text-[var(--color-text-default)] text-lg"> </div>'
  ),
  Df = j(
    '<div class="p-4 flex justify-center gap-[var(--spacing-sm)]"><!> <!> <!></div>'
  );
function Nf(r, e) {
  Be(e, !0);
  const a = (C) => {
      var x = Mf(),
        g = m(x);
      (B(() => X(g, t(s).form.header)), w(C, x));
    },
    n = (C) => {
      var x = Df(),
        g = m(x);
      Dt(g, {
        get text() {
          return t(s).form.footer.submit;
        },
        children: (d, p) => {
          $e(d, {
            variant: "primary",
            type: "submit",
            form: l,
            children: (S, P) => {
              var A = Oe();
              (B(() => X(A, t(s).form.footer.submit)), w(S, A));
            },
            $$slots: { default: !0 },
          });
        },
        $$slots: { default: !0 },
      });
      var c = D(g, 2);
      Dt(c, {
        get text() {
          return t(s).form.footer.cancel;
        },
        children: (d, p) => {
          $e(d, {
            variant: "secondary",
            type: "button",
            onClick: y,
            children: (S, P) => {
              var A = Oe();
              (B(() => X(A, t(s).form.footer.cancel)), w(S, A));
            },
            $$slots: { default: !0 },
          });
        },
        $$slots: { default: !0 },
      });
      var v = D(c, 2);
      (Dt(v, {
        get text() {
          return t(s).form.footer.random;
        },
        children: (d, p) => {
          $e(d, {
            variant: "info",
            type: "button",
            onClick: k,
            children: (S, P) => {
              var A = Oe();
              (B(() => X(A, t(s).form.footer.random)), w(S, A));
            },
            $$slots: { default: !0 },
          });
        },
        $$slots: { default: !0 },
      }),
        w(C, x));
    };
  let o = T(e, "onSubmit", 3, () => {});
  const i = Wt("lang"),
    s = _(() => _a[i.value]),
    l = "profile-form";
  let u = be(null);
  const f = _(() => [
    {
      name: "firstName",
      type: "text",
      label: t(s).form.fields.firstName,
      required: !0,
      sz: "md",
    },
    {
      name: "lastName",
      type: "text",
      label: t(s).form.fields.lastName,
      required: !0,
      sz: "md",
    },
    {
      name: "email",
      type: "email",
      label: t(s).form.fields.email,
      required: !0,
      sz: "md",
    },
    {
      name: "password",
      type: "password",
      label: t(s).form.fields.password,
      required: !0,
      sz: "md",
      validators: [
        (C) =>
          typeof C == "string" && C.length >= 6
            ? null
            : t(s).form.validators.passwordLength,
      ],
    },
    {
      name: "confirmPassword",
      type: "password",
      label: t(s).form.fields.confirmPassword,
      required: !0,
      sz: "md",
      validators: [
        (C, x) =>
          typeof C == "string" &&
          x &&
          typeof x.password == "string" &&
          C === x.password
            ? null
            : t(s).form.validators.passwordMatch,
      ],
    },
    {
      name: "age",
      type: "number",
      label: t(s).form.fields.age,
      required: !0,
      validators: [
        (C) => {
          if (typeof C == "string" && C.trim() === "") return null;
          const x = typeof C == "number" ? C : Number(C);
          return Number.isNaN(x) || x < 18
            ? t(s).form.validators.adultsOnly
            : null;
        },
      ],
    },
    {
      name: "gender",
      type: "select",
      label: t(s).form.fields.gender,
      required: !0,
      options: t(s).options.formGender,
    },
    {
      name: "country",
      type: "select",
      label: t(s).form.fields.country,
      required: !0,
      options: t(s).options.formCountries,
    },
    { name: "about", type: "textarea", label: t(s).form.fields.about, rows: 5 },
    {
      name: "newsletter",
      type: "checkbox",
      label: t(s).form.fields.newsletter,
    },
    {
      name: "tos",
      type: "checkbox",
      label: t(s).form.fields.tos,
      required: !0,
    },
  ]);
  function h(C) {
    o()(C);
  }
  function y() {
    t(u)?.reset();
  }
  function b(C) {
    z(u, C, !0);
  }
  function k() {
    if (!t(u)) return;
    const C = ["John", "Alex", "Tom", "Sam", "Anna", "Jessica", "Sarah"],
      x = ["Smith", "Williams", "Brown", "Johnson", "Miller"],
      g = (d) => d[Math.floor(Math.random() * d.length)],
      c = (d, p) => Math.floor(Math.random() * (p - d + 1)) + d,
      v = Math.random().toString(36).slice(2, 10);
    for (const d of t(f))
      switch (d.type) {
        case "text": {
          const p = d.name.toLowerCase();
          p.includes("first")
            ? t(u).setValue(d.name, g(C))
            : p.includes("last")
              ? t(u).setValue(d.name, g(x))
              : t(u).setValue(d.name, g(C));
          break;
        }
        case "password":
          t(u).setValue(d.name, v);
          break;
        case "number":
          t(u).setValue(d.name, c(18, 100));
          break;
        case "email":
          t(u).setValue(
            d.name,
            `${g(C).toLowerCase()}.${g(x).toLowerCase()}@example.com`
          );
          break;
        case "select": {
          const p = d.options ?? [];
          if (p.length > 0) {
            const S = c(0, p.length - 1);
            t(u).setValue(d.name, String(p[S].value));
          }
          break;
        }
        case "checkbox":
          t(u).setValue(d.name, Math.random() < 0.5);
          break;
        case "textarea":
          t(u).setValue(d.name, "Auto generated");
          break;
      }
  }
  (an(r, {
    get header() {
      return a;
    },
    get footer() {
      return n;
    },
    children: (C, x) => {
      gd(C, {
        get schema() {
          return t(f);
        },
        rowGap: "xl",
        onSubmit: h,
        formId: l,
        expose: b,
        labelAlign: "left",
        compact: !1,
      });
    },
    $$slots: { default: !0 },
  }),
    Re());
}
var If = j(
  '<div><div class="w-full border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] overflow-x-auto"><!></div> <div class="bg-[var(--color-bg-surface)] h-40 border border-[var(--border-color-default)] border-t-0 p-4 text-[var(--color-text-muted)]"> </div></div>'
);
function Of(r, e) {
  Be(e, !0);
  let a = T(e, "sz", 3, "sm"),
    n = T(e, "class", 3, ""),
    o = _(a);
  const i = Wt("lang"),
    s = _(() => _a[i.value].menuDemo),
    l = _(() => [
      {
        name: t(s).menus.file,
        actions: [
          { id: "new", label: t(s).actions.new, shortcut: "Ctrl+N" },
          { id: "open", label: t(s).actions.open, shortcut: "Ctrl+O" },
          { id: "save", label: t(s).actions.save, shortcut: "Ctrl+S" },
          { type: "separator" },
          {
            id: "export",
            label: t(s).actions.export,
            shortcut: "Ctrl+E",
            submenu: [
              { id: "export-csv", label: t(s).actions.exportCsv },
              { id: "export-pdf", label: t(s).actions.exportPdf },
              { type: "separator" },
              { id: "export-zip", label: t(s).actions.exportZip },
            ],
          },
          { type: "separator" },
          { id: "close", label: t(s).actions.close, shortcut: "Ctrl+W" },
        ],
      },
      {
        name: t(s).menus.edit,
        actions: [
          { id: "undo", label: t(s).actions.undo, shortcut: "Ctrl+Z" },
          { id: "redo", label: t(s).actions.redo, shortcut: "Ctrl+Y" },
          { type: "separator" },
          { id: "cut", label: t(s).actions.cut, shortcut: "Ctrl+X" },
          { id: "copy", label: t(s).actions.copy, shortcut: "Ctrl+C" },
          { id: "paste", label: t(s).actions.paste, shortcut: "Ctrl+V" },
          { type: "separator" },
          {
            id: "find",
            label: t(s).actions.find,
            shortcut: "Ctrl+F",
            submenu: [
              { id: "find-next", label: t(s).actions.findNext, shortcut: "F3" },
              {
                id: "find-prev",
                label: t(s).actions.findPrev,
                shortcut: "Shift+F3",
              },
            ],
          },
        ],
      },
      {
        name: t(s).menus.view,
        actions: [
          { id: "xs", label: "XS" },
          { id: "sm", label: "SM" },
          { id: "md", label: "MD" },
          { id: "lg", label: "LG" },
          { id: "xl", label: "XL" },
          { type: "separator" },
          {
            id: "theme",
            label: t(s).actions.theme,
            submenu: [
              { id: "light", label: t(s).actions.light },
              { id: "dark", label: t(s).actions.dark },
            ],
          },
        ],
      },
    ]);
  let u = _(() => "");
  function f(x, g) {
    const c = typeof g == "string" ? g : g.label || g.id || t(s).fallbackLabel,
      v = typeof g == "string" ? g : g.id;
    (v && ["xs", "sm", "md", "lg", "xl"].includes(v) && z(o, v),
      z(u, `${x}: ${c}`),
      console.log("Selected:", x, g));
  }
  (We(() => {
    z(o, a());
  }),
    We(() => {
      z(u, t(s).prompt);
    }));
  var h = If(),
    y = m(h),
    b = m(y);
  hs(b, {
    get sz() {
      return t(o);
    },
    get menus() {
      return t(l);
    },
    onSelect: f,
  });
  var k = D(y, 2),
    C = m(k);
  (B(() => {
    (q(h, 1, `flex flex-col w-full ${n() ?? ""}`), X(C, t(u)));
  }),
    w(r, h),
    Re());
}
var Bf = j(
    "<div><div><span> </span> <span> </span> <span> </span> <span> </span></div> <div><span> </span> <span> </span></div></div>"
  ),
  Rf = j("<div><p> </p> <div><!></div></div>"),
  jf = j(
    '<div><div class="overflow-x-auto overflow-y-visible w-full min-w-full bg-[var(--color-bg-surface)] border-b border-[var(--border-color-default)]"><!></div> <!> <!> <input type="file" class="hidden" accept=".txt,.md,.log,.html,.css,.js,.json,.py,.yml,.yaml,*/*"/> <!> <!> <!></div>'
  );
function Vf(r, e) {
  Be(e, !0);
  let a = T(e, "L", 19, () => ({})),
    n = T(e, "lang", 7, "txt"),
    o = T(e, "sz", 7, "sm"),
    i = T(e, "class", 3, "");
  const s = _(() => a()?.notepad?.menu ?? {}),
    l = _(() => a()?.notepad?.actions ?? {}),
    u = _(() => a()?.menuItems ?? {}),
    f = _(() => t(s).file ?? t(u).file ?? "File"),
    h = _(() => t(s).edit ?? t(u).edit ?? "Edit"),
    y = _(() => t(s).view ?? t(u).view ?? "View"),
    b = _(() => t(s).language ?? t(u).language ?? "Language"),
    k = _(() => t(s).help ?? t(u).help ?? "Help"),
    C = _(() => t(s).settings ?? t(u).settings ?? "Settings"),
    x = _(() => t(l).statusBar ?? t(u).statusBar ?? "Status bar"),
    g = _(() => t(l).about ?? t(u).about ?? "About"),
    c = _(() => t(l).options ?? t(u).options ?? "Options"),
    v = _(
      () =>
        a()?.notepad?.aboutText ??
        "A lightweight notepad demo using the component library."
    ),
    d = _(
      () =>
        a()?.notepad?.optionsText ??
        "Change appearance options such as status bar visibility."
    ),
    p = [
      { value: "txt", label: "Text" },
      { value: "html", label: "HTML" },
      { value: "css", label: "CSS" },
      { value: "js", label: "JavaScript" },
      { value: "json", label: "JSON" },
      { value: "python", label: "Python" },
    ],
    S = _(() =>
      p.map(({ value: ue, label: Ee }) => ({
        id: ue === n() ? o() : ue,
        real: ue,
        label: Ee,
      }))
    ),
    P = _(() => [
      {
        name: t(f),
        actions: [
          {
            id: "new",
            label: t(l).new ?? t(u).new ?? "New",
            shortcut: "Ctrl+N",
          },
          {
            id: "open",
            label: t(l).open ?? t(u).open ?? "Open",
            shortcut: "Ctrl+O",
          },
          {
            id: "save",
            label: t(l).save ?? t(u).save ?? "Save",
            shortcut: "Ctrl+S",
          },
        ],
      },
      {
        name: t(h),
        actions: [
          {
            id: "undo",
            label: t(l).undo ?? t(u).undo ?? "Undo",
            shortcut: "Ctrl+Z",
          },
          {
            id: "redo",
            label: t(l).redo ?? t(u).redo ?? "Redo",
            shortcut: "Ctrl+Y",
          },
          {
            id: "cut",
            label: t(l).cut ?? t(u).cut ?? "Cut",
            shortcut: "Ctrl+X",
          },
          {
            id: "copy",
            label: t(l).copy ?? t(u).copy ?? "Copy",
            shortcut: "Ctrl+C",
          },
          {
            id: "paste",
            label: t(l).paste ?? t(u).paste ?? "Paste",
            shortcut: "Ctrl+V",
          },
        ],
      },
      {
        name: t(y),
        actions: [
          { id: "xs", label: t(l).xs ?? t(u).xs ?? "XS" },
          { id: "sm", label: t(l).sm ?? t(u).sm ?? "SM" },
          { id: "md", label: t(l).md ?? t(u).md ?? "MD" },
          { id: "lg", label: t(l).lg ?? t(u).lg ?? "LG" },
          { id: "xl", label: t(l).xl ?? t(u).xl ?? "XL" },
          { id: "separator", type: "separator" },
          { id: "toggle-statusbar", label: t(x), shortcut: "Ctrl+B" },
        ],
      },
      { name: t(b), actions: t(S) },
      { name: t(C), actions: [{ id: "options", label: t(c) }] },
      { name: t(k), actions: [{ id: "about", label: t(g), shortcut: "F1" }] },
    ]);
  let A = be(""),
    M = be(null),
    F = be(Ye([])),
    K = be(Ye([])),
    H = be(""),
    ie = be(!1),
    ce = be(!1),
    he = be(Ye([])),
    J = 0,
    te = null,
    le = be(!0),
    R = be(!1),
    G = be(!1),
    $ = be(1),
    I = be(1);
  const ae = _(() => t(A).length),
    W = _(() =>
      t(A) === ""
        ? 1
        : t(A).split(`
`).length
    ),
    ee = _(() =>
      t(A).trim() ? t(A).trim().split(/\s+/).filter(Boolean).length : 0
    );
  function se(ue, Ee, Le) {
    z(he, [...t(he), { id: J++, title: Le, message: Ee, variant: ue }], !0);
  }
  function me(ue) {
    z(
      he,
      t(he).filter((Ee) => Ee.id !== ue),
      !0
    );
  }
  function N(ue) {
    (!t(F).length || t(F).at(-1) !== ue) && z(F, [...t(F), ue].slice(-3), !0);
  }
  function E(ue) {
    z(K, [...t(K), ue].slice(-3), !0);
  }
  function ne() {
    z(K, [], !0);
  }
  We(() => {
    if (!t(ie)) {
      (z(H, t(A), !0), z(ie, !0));
      return;
    }
    if (t(ce)) {
      z(H, t(A), !0);
      return;
    }
    t(A) !== t(H) && (N(t(H)), ne(), z(H, t(A), !0));
  });
  function O(ue) {
    (N(t(A)), ne(), z(ce, !0), z(A, ue, !0), z(ce, !1), z(H, t(A), !0));
  }
  function de() {
    const ue = a()?.notepad?.confirmNew ?? "";
    (t(A) && ue && !confirm(ue)) || (O(""), z(M, null));
  }
  async function fe() {
    try {
      const ue = window;
      if (ue.showOpenFilePicker) {
        const [Ee] = await ue.showOpenFilePicker({
            multiple: !1,
            types: [
              {
                description: "Text",
                accept: { "text/plain": [".txt", ".md", ".log"] },
              },
              { description: "All", accept: { "*/*": [".*"] } },
            ],
          }),
          qe = await (await Ee.getFile()).text();
        (O(qe), z(M, Ee, !0));
        return;
      }
      if (te) {
        ((te.value = ""), te.click());
        return;
      }
      se(
        "warning",
        a()?.notepad?.openError ??
          "File opening is not supported in this browser"
      );
    } catch {
      se("danger", a()?.notepad?.openError ?? "Error");
    }
  }
  async function ge() {
    try {
      const ue = window;
      if (t(M) && ue.isSecureContext && t(M).createWritable) {
        const Ze = await t(M).createWritable();
        (await Ze.write(new Blob([t(A)], { type: "text/plain;charset=utf-8" })),
          await Ze.close());
        return;
      }
      if (ue.showSaveFilePicker) {
        const Ze = await ue.showSaveFilePicker({
            suggestedName: "note.txt",
            types: [
              { description: "Text", accept: { "text/plain": [".txt"] } },
            ],
          }),
          tt = await Ze.createWritable();
        (await tt.write(new Blob([t(A)], { type: "text/plain;charset=utf-8" })),
          await tt.close(),
          z(M, Ze, !0));
        return;
      }
      const Ee = new Blob([t(A)], { type: "text/plain;charset=utf-8" }),
        Le = URL.createObjectURL(Ee),
        qe = document.createElement("a");
      ((qe.href = Le),
        (qe.download = "note.txt"),
        document.body.appendChild(qe),
        qe.click(),
        qe.remove(),
        URL.revokeObjectURL(Le));
    } catch {
      se("danger", a()?.notepad?.saveError ?? "Error");
    }
  }
  function ze(ue) {
    return ue
      ? ue instanceof HTMLTextAreaElement
        ? !0
        : ue instanceof HTMLInputElement
          ? ["text", "search", "url", "tel", "password"].includes(ue.type)
          : !1
      : !1;
  }
  function Pe() {
    const ue = document.activeElement;
    return ze(ue) ? ue : null;
  }
  function Ae() {
    const Ee = Pe()?.selectionStart ?? t(A).length,
      qe = t(A).slice(0, Ee).split(`
`);
    (z($, Math.max(qe.length, 1), !0), z(I, (qe.at(-1)?.length ?? 0) + 1));
  }
  async function ve() {
    try {
      const ue = Pe(),
        Ee = ue ? (ue.selectionStart ?? 0) : 0,
        Le = ue ? (ue.selectionEnd ?? 0) : 0;
      if (Ee === Le) return;
      const qe = t(A).slice(Ee, Le);
      await navigator.clipboard.writeText(qe);
      const Ze = t(A).slice(0, Ee) + t(A).slice(Le);
      (N(t(A)),
        ne(),
        z(ce, !0),
        z(A, Ze),
        z(ce, !1),
        z(H, t(A), !0),
        queueMicrotask(() => {
          const tt = Pe();
          tt && (tt.selectionStart = tt.selectionEnd = Ee);
        }));
    } catch {
      se("danger", a()?.notepad?.cutError ?? "Error");
    }
  }
  async function Se() {
    try {
      const ue = Pe(),
        Ee = ue ? (ue.selectionStart ?? 0) : 0,
        Le = ue ? (ue.selectionEnd ?? 0) : 0;
      if (Ee === Le) return;
      const qe = t(A).slice(Ee, Le);
      await navigator.clipboard.writeText(qe);
    } catch {
      se("danger", a()?.notepad?.copyError ?? "Error");
    }
  }
  async function L() {
    try {
      const ue = await navigator.clipboard.readText(),
        Ee = Pe(),
        Le = Ee?.selectionStart ?? t(A).length,
        qe = Ee?.selectionEnd ?? t(A).length,
        Ze = t(A).slice(0, Le) + ue + t(A).slice(qe);
      (N(t(A)), ne(), z(ce, !0), z(A, Ze), z(ce, !1), z(H, t(A), !0));
      const tt = Le + ue.length;
      queueMicrotask(() => {
        const ct = Pe();
        ct && (ct.selectionStart = ct.selectionEnd = tt);
      });
    } catch {
      se("danger", a()?.notepad?.pasteError ?? "Error");
    }
  }
  function re() {
    try {
      if (!t(F).length) return;
      const ue = t(F).at(-1);
      (z(F, t(F).slice(0, -1), !0),
        E(t(A)),
        z(ce, !0),
        z(A, ue, !0),
        z(ce, !1),
        z(H, t(A), !0));
    } catch {
      se("danger", a()?.notepad?.undoError ?? "Error");
    }
  }
  function oe() {
    try {
      if (!t(K).length) return;
      const ue = t(K).at(-1);
      (z(K, t(K).slice(0, -1), !0),
        N(t(A)),
        z(ce, !0),
        z(A, ue, !0),
        z(ce, !1),
        z(H, t(A), !0));
    } catch {
      se("danger", a()?.notepad?.redoError ?? "Error");
    }
  }
  function _e() {
    z(R, !0);
  }
  async function ye(ue) {
    const Ee = ue.target,
      Le = Ee?.files?.[0];
    if (Le)
      try {
        const qe = await Le.text();
        (O(qe), z(M, null));
      } catch {
        se("danger", a()?.notepad?.openError ?? "Error");
      } finally {
        Ee && (Ee.value = "");
      }
  }
  function V(ue, Ee) {
    const Le = typeof Ee == "string" ? Ee : (Ee.real ?? Ee.id);
    if (Le)
      switch (Le) {
        case "new":
          de();
          break;
        case "open":
          fe();
          break;
        case "save":
          ge();
          break;
        case "undo":
          re();
          break;
        case "redo":
          oe();
          break;
        case "cut":
          ve();
          break;
        case "copy":
          Se();
          break;
        case "paste":
          L();
          break;
        case "about":
          _e();
          break;
        case "options":
          z(G, !0);
          break;
        case "xs":
        case "sm":
        case "md":
        case "lg":
        case "xl":
          o(Le);
          break;
        case "txt":
        case "html":
        case "css":
        case "js":
        case "json":
        case "python":
          n(Le);
          break;
        case "toggle-statusbar":
          z(le, !t(le));
          break;
      }
  }
  const pe = _(() => ({
    "ctrl+n": () => V(t(f), "new"),
    "ctrl+o": () => V(t(f), "open"),
    "ctrl+s": () => V(t(f), "save"),
    "ctrl+z": () => V(t(h), "undo"),
    "ctrl+y": () => V(t(h), "redo"),
    "ctrl+x": () => V(t(h), "cut"),
    "ctrl+c": () => V(t(h), "copy"),
    "ctrl+v": () => V(t(h), "paste"),
    "ctrl+b": () => V(t(y), "toggle-statusbar"),
    f1: () => V(t(k), "about"),
  }));
  function ke(ue) {
    const Ee = ue.key.toLowerCase(),
      Le = [];
    ((ue.ctrlKey || ue.metaKey) && Le.push("ctrl"),
      ue.shiftKey && Le.push("shift"),
      Le.push(Ee));
    const qe = Le.join("+"),
      Ze = t(pe)[qe] ?? t(pe)[Ee];
    Ze && (ue.preventDefault(), Ze());
  }
  (We(() => {
    (t(A), Ae());
  }),
    We(() => {
      if (typeof document > "u") return;
      const ue = () => Ae();
      return (
        document.addEventListener("selectionchange", ue),
        () => document.removeEventListener("selectionchange", ue)
      );
    }));
  var Fe = jf();
  Ct("keydown", uo, ke);
  var Te = m(Fe),
    Ge = m(Te);
  hs(Ge, {
    class: "block min-w-full bg-transparent border-0",
    get menus() {
      return t(P);
    },
    onSelect: V,
    get sz() {
      return o();
    },
  });
  var je = D(Te, 2);
  bs(je, {
    title: "",
    get language() {
      return n();
    },
    showCopyButton: !1,
    showLineNumbers: !0,
    editable: !0,
    activeLine: !0,
    get sz() {
      return o();
    },
    get code() {
      return t(A);
    },
    set code(ue) {
      z(A, ue, !0);
    },
  });
  var Ie = D(je, 2);
  {
    var De = (ue) => {
      var Ee = Bf(),
        Le = m(Ee),
        qe = m(Le),
        Ze = m(qe),
        tt = D(qe, 2),
        ct = m(tt),
        mt = D(tt, 2),
        Tt = m(mt),
        Rt = D(mt, 2),
        jt = m(Rt),
        Mr = D(Le, 2),
        He = m(Mr),
        Qe = m(He),
        rt = D(He, 2),
        dt = m(rt);
      (B(
        (sr, Lt, lr, ur, wr) => {
          (q(Ee, 1, sr),
            q(Le, 1, Lt),
            X(Ze, `Ln ${t($) ?? ""}, Col ${t(I) ?? ""}`),
            X(ct, `${t(W) ?? ""} lines`),
            X(Tt, `${t(ee) ?? ""} words`),
            X(jt, `${t(ae) ?? ""} chars`),
            q(Mr, 1, lr),
            X(Qe, ur),
            X(dt, `Size ${wr ?? ""}`));
        },
        [
          () =>
            Y(
              U(
                "rounded-xs border border-[var(--border-color-default)] bg-[var(--color-bg-muted)]",
                "text-[var(--color-text-muted)] px-3 py-2",
                "flex flex-wrap items-center justify-between gap-3",
                Ne[o()]
              )
            ),
          () => Y(U("flex flex-wrap items-center gap-3")),
          () => Y(U("flex flex-wrap items-center gap-3")),
          () => n().toUpperCase(),
          () => o().toUpperCase(),
        ]
      ),
        w(ue, Ee));
    };
    Z(Ie, (ue) => {
      t(le) && ue(De);
    });
  }
  var nt = D(Ie, 2);
  ((nt.__change = ye),
    ot(
      nt,
      (ue) => (te = ue),
      () => te
    ));
  var st = D(nt, 2);
  at(
    st,
    17,
    () => t(he),
    (ue) => ue.id,
    (ue, Ee) => {
      No(ue, {
        get title() {
          return t(Ee).title;
        },
        get message() {
          return t(Ee).message;
        },
        get variant() {
          return t(Ee).variant;
        },
        onClose: () => me(t(Ee).id),
      });
    }
  );
  var Pt = D(st, 2);
  {
    var ht = (ue) => {
      mo(ue, {
        open: !0,
        get title() {
          return t(g);
        },
        get message() {
          return t(v);
        },
        onClose: () => z(R, !1),
        onCancel: () => z(R, !1),
        onConfirm: () => z(R, !1),
        get sz() {
          return o();
        },
      });
    };
    Z(Pt, (ue) => {
      t(R) && ue(ht);
    });
  }
  var Zt = D(Pt, 2);
  {
    var ut = (ue) => {
      mo(ue, {
        open: !0,
        get title() {
          return t(c);
        },
        onClose: () => z(G, !1),
        onCancel: () => z(G, !1),
        onConfirm: () => z(G, !1),
        get sz() {
          return o();
        },
        children: (Ee, Le) => {
          var qe = Rf(),
            Ze = m(qe),
            tt = m(Ze),
            ct = D(Ze, 2),
            mt = m(ct);
          (Za(mt, {
            get label() {
              return t(x);
            },
            get sz() {
              return o();
            },
            variant: "neutral",
            get checked() {
              return t(le);
            },
            set checked(Tt) {
              z(le, Tt, !0);
            },
          }),
            B(
              (Tt, Rt, jt) => {
                (q(qe, 1, Tt), q(Ze, 1, Rt), X(tt, t(d)), q(ct, 1, jt));
              },
              [
                () => Y(U("flex flex-col gap-3")),
                () => Y(U("text-[var(--color-text-muted)]", Ne[o()])),
                () => Y(U("flex items-center justify-between px-1 py-2")),
              ]
            ),
            w(Ee, qe));
        },
        $$slots: { default: !0 },
      });
    };
    Z(Zt, (ue) => {
      t(G) && ue(ut);
    });
  }
  (B((ue) => q(Fe, 1, ue), [() => Y(U("block w-full min-w-full", i()))]),
    w(r, Fe),
    Re());
}
it(["change"]);
var qf = j(
    '<div class="flex items-end gap-2"><!> <span class="text-xs text-[var(--color-text-muted)] mb-1"> </span></div>'
  ),
  Uf = j(
    '<header class="flex items-end justify-between gap-4 -mx-5 px-5 py-5 border-b border-[var(--border-color-default)]"><h2 class="text-2xl font-semibold tracking-tight"> </h2> <span class="text-sm [color:var(--color-text-muted)]"> </span></header> <section class="p-3 md:p-3 lg:p-3"><div class="flex gap-4 flex-wrap items-end"><!> <!> <!> <!> <!> <!></div></section> <section class="p-3 md:p-3 lg:p-3"><div class="bg-[var(--color-bg-surface)] rounded-[var(--radius-xl)] p-4 md:p-6 lg:p-10 shadow-lg w-full border border-[var(--border-color-default)] flex items-center justify-center"><!></div></section>',
    1
  );
function Xe(r, e) {
  Be(e, !0);
  let a = T(e, "title", 3, ""),
    n = T(e, "subtitle", 3, ""),
    o = T(e, "sz", 3, "md"),
    i = T(e, "class", 3, ""),
    s = T(e, "label", 3, ""),
    l = T(e, "disabled", 3, !1);
  const u = Wt("lang"),
    f = _(() => _a[u.value].playground.controls),
    h = _(() => Xf[e.component]),
    y = _(() =>
      Zf.map((d) => ({
        label: d.charAt(0).toUpperCase() + d.slice(1),
        value: d,
      }))
    );
  let b = be("md"),
    k = be(""),
    C = be(""),
    x = be(!1),
    g = be("input"),
    c = be(!1);
  We(() => {
    (z(b, o()), z(C, s()), z(x, l()), z(k, t(h).variants[0] ?? "", !0));
  });
  const v = _(() => U("w-full flex flex-col", i()));
  (an(r, {
    get class() {
      return t(v);
    },
    children: (d, p) => {
      var S = Uf(),
        P = Ce(S),
        A = m(P),
        M = m(A),
        F = D(A, 2),
        K = m(F),
        H = D(P, 2),
        ie = m(H),
        ce = m(ie);
      {
        var he = (E) => {
          {
            let ne = _(() =>
              t(h).sizes.map((O) => ({ label: O.toUpperCase(), value: O }))
            );
            Ht(E, {
              get label() {
                return t(f).size;
              },
              get options() {
                return t(ne);
              },
              sz: "xs",
              class: "min-w-[4rem]",
              get value() {
                return t(b);
              },
              set value(O) {
                z(b, O, !0);
              },
            });
          }
        };
        Z(ce, (E) => {
          t(h).sizes.length && E(he);
        });
      }
      var J = D(ce, 2);
      {
        var te = (E) => {
          {
            let ne = _(() =>
              t(h).variants.map((O) => ({
                label: O.charAt(0).toUpperCase() + O.slice(1),
                value: O,
              }))
            );
            Ht(E, {
              get label() {
                return t(f).variant;
              },
              get options() {
                return t(ne);
              },
              sz: "xs",
              get value() {
                return t(k);
              },
              set value(O) {
                z(k, O, !0);
              },
            });
          }
        };
        Z(J, (E) => {
          t(h).variants.length && E(te);
        });
      }
      var le = D(J, 2);
      {
        var R = (E) => {
          var ne = qf(),
            O = m(ne);
          Ha(O, {
            get label() {
              return t(f).label;
            },
            sz: "xs",
            variant: "default",
            maxlength: 20,
            class: "flex-1",
            get value() {
              return t(C);
            },
            set value(ge) {
              z(C, ge, !0);
            },
          });
          var de = D(O, 2),
            fe = m(de);
          (B(() => X(fe, `${t(C).length ?? ""}/20`)), w(E, ne));
        };
        Z(le, (E) => {
          t(h).supports.label && E(R);
        });
      }
      var G = D(le, 2);
      {
        var $ = (E) => {
          Za(E, {
            get label() {
              return t(f).disabled;
            },
            sz: "sm",
            variant: "default",
            get checked() {
              return t(x);
            },
            set checked(ne) {
              z(x, ne, !0);
            },
          });
        };
        Z(G, (E) => {
          t(h).supports.disabled && E($);
        });
      }
      var I = D(G, 2);
      {
        var ae = (E) => {
          Ht(E, {
            sz: "xs",
            variant: "default",
            get label() {
              return t(f).fieldType;
            },
            get options() {
              return t(y);
            },
            get value() {
              return t(g);
            },
            set value(ne) {
              z(g, ne, !0);
            },
          });
        };
        Z(I, (E) => {
          e.component === "Field" && E(ae);
        });
      }
      var W = D(I, 2);
      {
        var ee = (E) => {
          Za(E, {
            get label() {
              return t(f).sliderShowValue;
            },
            sz: "sm",
            variant: "default",
            onChange: (ne) => z(c, ne, !0),
            get checked() {
              return t(c);
            },
            set checked(ne) {
              z(c, ne, !0);
            },
          });
        };
        Z(W, (E) => {
          e.component === "Slider" && E(ee);
        });
      }
      var se = D(H, 2),
        me = m(se),
        N = m(me);
      (Je(
        N,
        () => e.children ?? Q,
        () => t(b),
        () => t(k),
        () => t(C),
        () => t(x),
        () => t(g),
        () => t(c)
      ),
        B(() => {
          (X(M, a() || t(f).playcardLabel), X(K, n() || t(f).playcardSubtitle));
        }),
        w(d, S));
    },
    $$slots: { default: !0 },
  }),
    Re());
}
vl();
const fi = (r) => {
    var e = Hf();
    w(r, e);
  },
  vi = (r) => {
    var e = Kf();
    w(r, e);
  };
var Hf = j(`<div class="
      h-full
      p-[var(--spacing-lg)]
      bg-[var(--color-bg-surface)]
      text-[var(--color-text-default)]
      border-[var(--border-color-default)]
    ">First</div>`),
  Kf = j(`<div class="
      h-full
      p-[var(--spacing-lg)]
      bg-[var(--color-bg-surface)]
      text-[var(--color-text-default)]
      border-[var(--border-color-default)]
    ">Second</div>`),
  Gf =
    j(`<div class="w-full h-[400px] flex flex-col"><div class="h-1/2 mb-[var(--spacing-xl)]"><div class="
        h-full
        border-[var(--border-color-default)]
        rounded-[var(--radius-xl)]
        overflow-hidden
      "><!></div></div> <div class="h-px bg-[var(--border-color-default)] my-[var(--spacing-md)]"></div> <div class="h-1/2"><div class="
        h-full
        border-[var(--border-color-default)]
        rounded-[var(--radius-xl)]
        overflow-hidden
      "><!></div></div></div>`);
function Wf(r) {
  var e = Gf(),
    a = m(e),
    n = m(a),
    o = m(n);
  ci(o, {
    direction: "horizontal",
    initialSize: 50,
    dividerSize: 3,
    minSize: 15,
    maxSize: 85,
    get first() {
      return fi;
    },
    get second() {
      return vi;
    },
  });
  var i = D(a, 4),
    s = m(i),
    l = m(s);
  (ci(l, {
    direction: "vertical",
    initialSize: 40,
    dividerSize: 3,
    minSize: 15,
    maxSize: 85,
    get first() {
      return fi;
    },
    get second() {
      return vi;
    },
  }),
    w(r, e));
}
const gi = [
    "about",
    "accordion",
    "button",
    "card",
    "carousel",
    "checkbox",
    "codeView",
    "colorPicker",
    "datePicker",
    "dialog",
    "field",
    "filePicker",
    "form",
    "menu",
    "notepad",
    "progressBar",
    "radio",
    "select",
    "slider",
    "splitter",
    "switch",
    "tablePagination",
    "tabs",
    "themeToggle",
    "timePicker",
    "toast",
  ],
  Zf = ["input", "number", "textarea"],
  Xf = {
    Accordion: {
      variants: [],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !1, disabled: !1 },
    },
    Button: {
      variants: [
        "primary",
        "secondary",
        "pill",
        "danger",
        "success",
        "warning",
        "ghost",
        "link",
      ],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !0, disabled: !0 },
    },
    Card: {
      variants: [],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !1, disabled: !1 },
    },
    Carousel: {
      variants: [],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !1, disabled: !1 },
    },
    CheckBox: {
      variants: ["default", "neutral"],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !0, disabled: !0 },
    },
    CodeView: {
      variants: [],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !1, disabled: !1 },
    },
    ColorPicker: {
      variants: [],
      sizes: [],
      supports: { label: !0, disabled: !0 },
    },
    DatePicker: {
      variants: [],
      sizes: [],
      supports: { label: !0, disabled: !0 },
    },
    Dialog: {
      variants: [],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !1, disabled: !1 },
    },
    FilePicker: {
      variants: [],
      sizes: [],
      supports: { label: !0, disabled: !0 },
    },
    Field: {
      variants: ["default", "filled", "neutral"],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !0, disabled: !0 },
    },
    Menu: {
      variants: [],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !1, disabled: !1 },
    },
    ProgressBar: {
      variants: ["default", "neutral"],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !0, disabled: !0 },
    },
    Radio: {
      variants: ["default", "neutral"],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !1, disabled: !0 },
    },
    Select: {
      variants: ["default", "filled", "neutral"],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !0, disabled: !0 },
    },
    Switch: {
      variants: [],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !0, disabled: !0 },
    },
    Slider: {
      variants: ["default", "neutral"],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !1, disabled: !0 },
    },
    Splitter: {
      variants: [],
      sizes: [],
      supports: { label: !1, disabled: !1 },
    },
    TimePicker: {
      variants: [],
      sizes: [],
      supports: { label: !0, disabled: !0 },
    },
    Table: {
      variants: ["default", "dense", "list", "noBorder", "noTitle", "zebra"],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !1, disabled: !1 },
    },
    Tabs: {
      variants: ["default", "pills", "underline"],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !1, disabled: !1 },
    },
    ThemeToggle: {
      variants: [],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !1, disabled: !0 },
    },
    Toast: {
      variants: ["success", "danger", "warning", "info"],
      sizes: [],
      supports: { label: !1, disabled: !1 },
    },
    Unknown: { variants: [], sizes: [], supports: { label: !1, disabled: !1 } },
  };
var Yf = j("<div><div> </div> <div> </div></div>"),
  Jf = j("<div><!> <span> </span></div>"),
  Qf = j("<div><p> </p></div>"),
  $f = j('<div><p> </p> <p class="text-[var(--color-text-muted)]"> </p></div>'),
  ev = j("<div><span> </span> <!></div>"),
  tv = j("<!> <!>", 1),
  rv = j("<div> </div>"),
  av = j("<div><!></div>"),
  nv = j('<div><!> <div class="mt-4"><!></div></div>'),
  ov = j('<div class="py-8"> </div>'),
  iv = j('<div class="grid gap-4 max-w-3xl"><!></div>'),
  sv = j('<div class="overflow-x-auto w-full min-w-full"><!></div>'),
  lv = j('<div class="flex flex-col gap-2"><!> <!> <!></div>'),
  uv = j(
    '<div><div><div class="flex items-center"><!></div> <div class="flex-1"></div> <!></div></div> <div><main><!></main></div>',
    1
  );
function cv(r, e) {
  Be(e, !0);
  const a = () => Au(Io, "$toasts", n),
    [n, o] = zu(),
    i = (W) => {
      var ee = Yf(),
        se = m(ee),
        me = m(se),
        N = D(se, 2),
        E = m(N);
      (B(
        (ne, O, de) => {
          (q(ee, 1, ne),
            q(se, 1, O),
            X(me, t(c).app.title),
            q(N, 1, de),
            X(E, t(c).app.version));
        },
        [
          () => Y(U("p-2 flex flex-col items-center text-center")),
          () => Y(U("font-bold text-[var(--color-text-muted)]", Ne.lg)),
          () => Y(U("text-[var(--color-text-muted)]", Ne.xs)),
        ]
      ),
        w(W, ee));
    },
    s = (W) => {
      var ee = Jf(),
        se = m(ee);
      Ht(se, {
        sz: "sm",
        label: "Language",
        get options() {
          return t(c).app.language.options;
        },
        get value() {
          return g.value;
        },
        set value(E) {
          g.value = E;
        },
      });
      var me = D(se, 2),
        N = m(me);
      (B(
        (E, ne) => {
          (q(ee, 1, E), q(me, 1, ne), X(N, t(c).app.footer));
        },
        [
          () => Y(U("text-center p-2 flex flex-col items-center gap-4")),
          () => Y(U("italic text-[var(--color-text-muted)]", Ne.xs)),
        ]
      ),
        w(W, ee));
    },
    l = (W) => {
      var ee = Qf(),
        se = m(ee),
        me = m(se);
      (B(
        (N, E) => {
          (q(ee, 1, N), q(se, 1, E), X(me, t(c).snippets.card.header));
        },
        [
          () => Y(U("flex items-center justify-between")),
          () => Y(U("font-semibold text-[var(--color-text-default)]")),
        ]
      ),
        w(W, ee));
    },
    u = (W) => {
      var ee = $f(),
        se = m(ee),
        me = m(se),
        N = D(se, 2),
        E = m(N);
      (B(
        (ne) => {
          (q(ee, 1, ne),
            X(me, t(c).snippets.about.description),
            X(E, t(c).snippets.about.helper));
        },
        [() => Y(U("space-y-2 leading-relaxed", Ne.sm))]
      ),
        w(W, ee));
    },
    f = (W) => {
      var ee = ev(),
        se = m(ee),
        me = m(se),
        N = D(se, 2);
      ($e(N, {
        variant: "link",
        sz: "xs",
        children: (E, ne) => {
          var O = Oe();
          (B(() => X(O, t(c).snippets.card.docsLink)), w(E, O));
        },
        $$slots: { default: !0 },
      }),
        B(
          (E) => {
            (q(ee, 1, E), X(me, t(c).snippets.card.updated));
          },
          [
            () =>
              Y(
                U(
                  "flex items-center justify-between text-[var(--color-text-muted)]",
                  Ne.xs
                )
              ),
          ]
        ),
        w(W, ee));
    },
    h = (W, ee = Q) => {
      lc(W, {
        get items() {
          return t(I);
        },
        get sz() {
          return ee();
        },
        autoplay: !0,
        showDots: !0,
        showArrows: !0,
        class: "w-full",
      });
    },
    y = (W, ee = Q, se = Q) => {
      var me = tv(),
        N = Ce(me);
      {
        let ne = _(() => `${t(c).snippets.toast.buttonPrefix}${se()}`);
        Dt(N, {
          get text() {
            return t(ne);
          },
          children: (O, de) => {
            $e(O, {
              get sz() {
                return ee();
              },
              get variant() {
                return se();
              },
              onClick: () => Ff(se()),
              children: (fe, ge) => {
                var ze = Oe();
                (B(() =>
                  X(
                    ze,
                    `${t(c).snippets.toast.buttonPrefix ?? ""}${se() ?? ""}`
                  )
                ),
                  w(fe, ze));
              },
              $$slots: { default: !0 },
            });
          },
          $$slots: { default: !0 },
        });
      }
      var E = D(N, 2);
      (at(
        E,
        1,
        a,
        (ne) => ne.id,
        (ne, O) => {
          No(ne, {
            get title() {
              return t(O).title;
            },
            get message() {
              return t(O).message;
            },
            get variant() {
              return t(O).variant;
            },
            onClose: () => zf(t(O).id),
          });
        }
      ),
        w(W, me));
    },
    b = (W) => {
      var ee = rv(),
        se = m(ee);
      (B(
        (me) => {
          (q(ee, 1, me), X(se, t(c).states.emptyPreview));
        },
        [() => Y(U("text-center text-[var(--color-text-muted)] py-10"))]
      ),
        w(W, ee));
    },
    k = (W, ee = Q, se = Q, me = Q, N = Q, E = Q) => {
      var ne = av(),
        O = m(ne);
      {
        var de = (ge) => {
            {
              let ze = _(() => me() || t(c).snippets.field.text);
              Dt(ge, {
                get text() {
                  return t(ze);
                },
                children: (Pe, Ae) => {
                  {
                    let ve = _(() => me() || t(c).snippets.field.text);
                    Ha(Pe, {
                      get sz() {
                        return ee();
                      },
                      get variant() {
                        return se();
                      },
                      get label() {
                        return t(ve);
                      },
                      get disabled() {
                        return N();
                      },
                    });
                  }
                },
                $$slots: { default: !0 },
              });
            }
          },
          fe = (ge) => {
            var ze = Me(),
              Pe = Ce(ze);
            {
              var Ae = (Se) => {
                  {
                    let L = _(() => me() || t(c).snippets.field.number);
                    Dt(Se, {
                      get text() {
                        return t(L);
                      },
                      children: (re, oe) => {
                        {
                          let _e = _(() => me() || t(c).snippets.field.number);
                          Ha(re, {
                            get sz() {
                              return ee();
                            },
                            get variant() {
                              return se();
                            },
                            type: "number",
                            parseNumber: !0,
                            get label() {
                              return t(_e);
                            },
                            get placeholder() {
                              return t(c).snippets.field.placeholder;
                            },
                            get disabled() {
                              return N();
                            },
                          });
                        }
                      },
                      $$slots: { default: !0 },
                    });
                  }
                },
                ve = (Se) => {
                  var L = Me(),
                    re = Ce(L);
                  {
                    var oe = (_e) => {
                      {
                        let ye = _(() => me() || t(c).snippets.field.textarea);
                        Dt(_e, {
                          get text() {
                            return t(ye);
                          },
                          children: (V, pe) => {
                            {
                              let ke = _(
                                () => me() || t(c).snippets.field.textarea
                              );
                              Ha(V, {
                                get sz() {
                                  return ee();
                                },
                                get variant() {
                                  return se();
                                },
                                as: "textarea",
                                rows: 3,
                                get label() {
                                  return t(ke);
                                },
                                get disabled() {
                                  return N();
                                },
                              });
                            }
                          },
                          $$slots: { default: !0 },
                        });
                      }
                    };
                    Z(
                      re,
                      (_e) => {
                        E() === "textarea" && _e(oe);
                      },
                      !0
                    );
                  }
                  w(Se, L);
                };
              Z(
                Pe,
                (Se) => {
                  E() === "number" ? Se(Ae) : Se(ve, !1);
                },
                !0
              );
            }
            w(ge, ze);
          };
        Z(O, (ge) => {
          E() === "input" ? ge(de) : ge(fe, !1);
        });
      }
      (B((ge) => q(ne, 1, ge), [() => Y(U("grid gap-4"))]), w(W, ne));
    },
    C = (W, ee = Q, se = Q) => {
      var me = nv(),
        N = m(me);
      of(N, {
        get columns() {
          return t(P);
        },
        get rows() {
          return t(ce);
        },
        get sz() {
          return ee();
        },
        get variant() {
          return se();
        },
      });
      var E = D(N, 2),
        ne = m(E);
      (ms(ne, {
        get currentPage() {
          return t(H);
        },
        get totalPages() {
          return t(ie);
        },
        onPageChange: $,
      }),
        B((O) => q(me, 1, O), [() => Y(U("w-full max-w-3xl"))]),
        w(W, me));
    },
    x = (W, ee = Q, se = Q) => {
      {
        let me = _(() =>
          t(c).snippets.tabs.labels.map((N, E) => ({
            id: `t${E + 1}`,
            label: N,
          }))
        );
        uf(W, {
          get tabs() {
            return t(me);
          },
          get sz() {
            return ee();
          },
          get variant() {
            return se();
          },
          get activeTab() {
            return t(M);
          },
          onChange: (N) => z(M, N, !0),
          children: (N, E) => {
            var ne = Me(),
              O = Ce(ne);
            (at(
              O,
              19,
              () => t(c).snippets.tabs.contents,
              (de, fe) => `t${fe + 1}`,
              (de, fe, ge) => {
                var ze = Me(),
                  Pe = Ce(ze);
                {
                  var Ae = (ve) => {
                    var Se = ov(),
                      L = m(Se);
                    (B(() => X(L, t(fe))), w(ve, Se));
                  };
                  Z(Pe, (ve) => {
                    t(M) === `t${t(ge) + 1}` && ve(Ae);
                  });
                }
                w(de, ze);
              }
            ),
              w(N, ne));
          },
          $$slots: { default: !0 },
        });
      }
    },
    g = Ye({ value: "en" });
  bl("lang", g);
  const c = _(() => _a[g.value]),
    v = _(() =>
      gi
        .filter((W) => W in t(c).pageLabels)
        .map((W) => ({ id: W, label: t(c).pageLabels[W] }))
    );
  let d = be("about");
  function p(W) {
    gi.includes(W) && z(d, W, !0);
  }
  const S = Ye(
      ho(23, (W) => ({
        id: W + 1,
        item: `${t(c).table.positionPrefix} ${W + 1}`,
        qty: (W % 7) + 1,
        price: ((W % 9) + 1) * 100,
      }))
    ),
    P = _(() => [
      {
        key: "id",
        label: t(c).table.columns.id,
        width: "64px",
        align: "center",
      },
      { key: "item", label: t(c).table.columns.item, align: "start" },
      {
        key: "qty",
        label: t(c).table.columns.qty,
        width: "96px",
        align: "center",
      },
      {
        key: "price",
        label: t(c).table.columns.price,
        width: "120px",
        align: "center",
      },
    ]);
  let A = be("banana"),
    M = be("t1"),
    F = be(0),
    K = 5,
    H = be(1);
  const ie = _(() => Math.max(1, Math.ceil(S.length / K)));
  We(() => {
    t(H) > t(ie) && z(H, Math.max(1, t(ie)), !0);
  });
  const ce = _(() => S.slice((t(H) - 1) * K, t(H) * K));
  let he = be(null),
    J = be(null),
    te = be(null),
    le = be("en");
  const R = new Date().toISOString().split("T")[0];
  function G(W) {
    xn("success", {
      title: t(c).toasts.confirmTitle,
      message: t(c).toasts.confirmMessage,
    });
  }
  function $(W) {
    z(H, W, !0);
  }
  const I = _(() => [...t(c).snippets.carousel.slides]),
    ae = _(() => [...t(c).snippets.accordion.items]);
  (Ef(r, {
    children: (W, ee) => {
      var se = uv(),
        me = Ce(se),
        N = m(me),
        E = m(N),
        ne = m(E);
      yd(ne, {
        get header() {
          return i;
        },
        get footer() {
          return s;
        },
        get menuItems() {
          return t(v);
        },
        get activeItem() {
          return t(d);
        },
        onSelect: p,
        closeOnSelect: !0,
        width: 300,
        get class() {
          return Ne.md;
        },
      });
      var O = D(E, 4);
      di(O, {});
      var de = D(me, 2),
        fe = m(de),
        ge = m(fe);
      {
        var ze = (Ae) => {
            _f(Ae, {});
          },
          Pe = (Ae) => {
            var ve = Me(),
              Se = Ce(ve);
            {
              var L = (oe) => {
                  Xe(oe, {
                    component: "Accordion",
                    get title() {
                      return t(c).pageLabels.accordion;
                    },
                    get subtitle() {
                      return t(c).snippets.accordionPlay.subtitle;
                    },
                    children: (ye, V = Q, pe = Q) => {
                      Gu(ye, {
                        get sz() {
                          return V();
                        },
                        get class() {
                          return pe();
                        },
                        get items() {
                          return t(ae);
                        },
                      });
                    },
                    $$slots: { default: !0 },
                  });
                },
                re = (oe) => {
                  var _e = Me(),
                    ye = Ce(_e);
                  {
                    var V = (ke) => {
                        Xe(ke, {
                          component: "Button",
                          get title() {
                            return t(c).pageLabels.button;
                          },
                          get subtitle() {
                            return t(c).snippets.button.subtitle;
                          },
                          children: (Te, Ge = Q, je = Q, Ie = Q, De = Q) => {
                            {
                              let nt = _(() => Ie() || `${je()} ${Ge()}`);
                              Dt(Te, {
                                get text() {
                                  return t(nt);
                                },
                                children: (st, Pt) => {
                                  $e(st, {
                                    get sz() {
                                      return Ge();
                                    },
                                    get variant() {
                                      return je();
                                    },
                                    get disabled() {
                                      return De();
                                    },
                                    children: (ht, Zt) => {
                                      var ut = Oe();
                                      (B(() =>
                                        X(ut, Ie() || `${je()} ${Ge()}`)
                                      ),
                                        w(ht, ut));
                                    },
                                    $$slots: { default: !0 },
                                  });
                                },
                                $$slots: { default: !0 },
                              });
                            }
                          },
                          $$slots: { default: !0 },
                        });
                      },
                      pe = (ke) => {
                        var Fe = Me(),
                          Te = Ce(Fe);
                        {
                          var Ge = (Ie) => {
                              Xe(Ie, {
                                component: "Card",
                                get title() {
                                  return t(c).pageLabels.card;
                                },
                                get subtitle() {
                                  return t(c).snippets.cardSnippet.subtitle;
                                },
                                children: (nt, st = Q) => {
                                  var Pt = iv(),
                                    ht = m(Pt);
                                  (an(ht, {
                                    get sz() {
                                      return st();
                                    },
                                    get header() {
                                      return l;
                                    },
                                    get footer() {
                                      return f;
                                    },
                                    get children() {
                                      return u;
                                    },
                                  }),
                                    w(nt, Pt));
                                },
                                $$slots: { default: !0 },
                              });
                            },
                            je = (Ie) => {
                              var De = Me(),
                                nt = Ce(De);
                              {
                                var st = (ht) => {
                                    Xe(ht, {
                                      component: "Carousel",
                                      get title() {
                                        return t(c).pageLabels.carousel;
                                      },
                                      get subtitle() {
                                        return t(c).snippets.carouselPlay
                                          .subtitle;
                                      },
                                      children: (ut, ue = Q) => {
                                        h(ut, ue);
                                      },
                                      $$slots: { default: !0 },
                                    });
                                  },
                                  Pt = (ht) => {
                                    var Zt = Me(),
                                      ut = Ce(Zt);
                                    {
                                      var ue = (Le) => {
                                          Xe(Le, {
                                            component: "CheckBox",
                                            get title() {
                                              return t(c).pageLabels.checkbox;
                                            },
                                            get subtitle() {
                                              return t(c).snippets.checkbox
                                                .subtitle;
                                            },
                                            children: (
                                              Ze,
                                              tt = Q,
                                              ct = Q,
                                              mt = Q,
                                              Tt = Q
                                            ) => {
                                              {
                                                let Rt = _(
                                                  () =>
                                                    mt() || `${ct()} ${tt()}`
                                                );
                                                Dt(Ze, {
                                                  get text() {
                                                    return t(Rt);
                                                  },
                                                  children: (jt, Mr) => {
                                                    {
                                                      let He = _(
                                                        () =>
                                                          mt() ||
                                                          `${ct()} ${tt()}`
                                                      );
                                                      Za(jt, {
                                                        get sz() {
                                                          return tt();
                                                        },
                                                        get variant() {
                                                          return ct();
                                                        },
                                                        get disabled() {
                                                          return Tt();
                                                        },
                                                        get label() {
                                                          return t(He);
                                                        },
                                                      });
                                                    }
                                                  },
                                                  $$slots: { default: !0 },
                                                });
                                              }
                                            },
                                            $$slots: { default: !0 },
                                          });
                                        },
                                        Ee = (Le) => {
                                          var qe = Me(),
                                            Ze = Ce(qe);
                                          {
                                            var tt = (mt) => {
                                                Xe(mt, {
                                                  component: "CodeView",
                                                  get title() {
                                                    return t(c).pageLabels
                                                      .codeView;
                                                  },
                                                  get subtitle() {
                                                    return t(c).components
                                                      .codeView.subtitle;
                                                  },
                                                  children: (Rt, jt = Q) => {
                                                    wf(Rt, {
                                                      get sz() {
                                                        return jt();
                                                      },
                                                    });
                                                  },
                                                  $$slots: { default: !0 },
                                                });
                                              },
                                              ct = (mt) => {
                                                var Tt = Me(),
                                                  Rt = Ce(Tt);
                                                {
                                                  var jt = (He) => {
                                                      Xe(He, {
                                                        component:
                                                          "ColorPicker",
                                                        get title() {
                                                          return t(c).pageLabels
                                                            .colorPicker;
                                                        },
                                                        get subtitle() {
                                                          return t(c).components
                                                            .colorPicker
                                                            .subtitle;
                                                        },
                                                        children: (
                                                          rt,
                                                          dt = Q,
                                                          sr = Q,
                                                          Lt = Q,
                                                          lr = Q
                                                        ) => {
                                                          {
                                                            let ur = _(
                                                              () =>
                                                                Lt() ||
                                                                t(c).components
                                                                  .colorPicker
                                                                  .label
                                                            );
                                                            Cc(rt, {
                                                              get label() {
                                                                return t(ur);
                                                              },
                                                              get disabled() {
                                                                return lr();
                                                              },
                                                              get placeholder() {
                                                                return t(c)
                                                                  .components
                                                                  .colorPicker
                                                                  .placeholder;
                                                              },
                                                              get value() {
                                                                return t(he);
                                                              },
                                                              set value(wr) {
                                                                z(he, wr, !0);
                                                              },
                                                            });
                                                          }
                                                        },
                                                        $$slots: {
                                                          default: !0,
                                                        },
                                                      });
                                                    },
                                                    Mr = (He) => {
                                                      var Qe = Me(),
                                                        rt = Ce(Qe);
                                                      {
                                                        var dt = (Lt) => {
                                                            Xe(Lt, {
                                                              component:
                                                                "DatePicker",
                                                              get title() {
                                                                return t(c)
                                                                  .pageLabels
                                                                  .datePicker;
                                                              },
                                                              get subtitle() {
                                                                return t(c)
                                                                  .components
                                                                  .datePicker
                                                                  .subtitle;
                                                              },
                                                              children: (
                                                                ur,
                                                                wr = Q,
                                                                cr = Q,
                                                                lt = Q,
                                                                yr = Q
                                                              ) => {
                                                                {
                                                                  let Dr = _(
                                                                    () =>
                                                                      lt() ||
                                                                      t(c)
                                                                        .components
                                                                        .datePicker
                                                                        .label
                                                                  );
                                                                  Pc(ur, {
                                                                    get label() {
                                                                      return t(
                                                                        Dr
                                                                      );
                                                                    },
                                                                    get placeholder() {
                                                                      return t(
                                                                        c
                                                                      )
                                                                        .components
                                                                        .datePicker
                                                                        .placeholder;
                                                                    },
                                                                    get disabled() {
                                                                      return yr();
                                                                    },
                                                                    get min() {
                                                                      return R;
                                                                    },
                                                                    get value() {
                                                                      return t(
                                                                        J
                                                                      );
                                                                    },
                                                                    set value(
                                                                      Nr
                                                                    ) {
                                                                      z(
                                                                        J,
                                                                        Nr,
                                                                        !0
                                                                      );
                                                                    },
                                                                  });
                                                                }
                                                              },
                                                              $$slots: {
                                                                default: !0,
                                                              },
                                                            });
                                                          },
                                                          sr = (Lt) => {
                                                            var lr = Me(),
                                                              ur = Ce(lr);
                                                            {
                                                              var wr = (lt) => {
                                                                  Xe(lt, {
                                                                    component:
                                                                      "Dialog",
                                                                    get title() {
                                                                      return t(
                                                                        c
                                                                      )
                                                                        .pageLabels
                                                                        .dialog;
                                                                    },
                                                                    get subtitle() {
                                                                      return t(
                                                                        c
                                                                      ).snippets
                                                                        .dialog
                                                                        .subtitle;
                                                                    },
                                                                    children: (
                                                                      Dr,
                                                                      Nr = Q,
                                                                      Qr = Q
                                                                    ) => {
                                                                      {
                                                                        let Xt =
                                                                          _(
                                                                            () =>
                                                                              Qr() ||
                                                                              t(
                                                                                c
                                                                              )
                                                                                .snippets
                                                                                .dialog
                                                                                .confirm
                                                                          );
                                                                        Lf(Dr, {
                                                                          get sz() {
                                                                            return Nr();
                                                                          },
                                                                          get message() {
                                                                            return t(
                                                                              Xt
                                                                            );
                                                                          },
                                                                        });
                                                                      }
                                                                    },
                                                                    $$slots: {
                                                                      default:
                                                                        !0,
                                                                    },
                                                                  });
                                                                },
                                                                cr = (lt) => {
                                                                  var yr = Me(),
                                                                    Dr = Ce(yr);
                                                                  {
                                                                    var Nr = (
                                                                        Xt
                                                                      ) => {
                                                                        Xe(Xt, {
                                                                          component:
                                                                            "Field",
                                                                          get title() {
                                                                            return t(
                                                                              c
                                                                            )
                                                                              .pageLabels
                                                                              .field;
                                                                          },
                                                                          get subtitle() {
                                                                            return t(
                                                                              c
                                                                            )
                                                                              .snippets
                                                                              .field
                                                                              .subtitle;
                                                                          },
                                                                          children:
                                                                            (
                                                                              yt,
                                                                              Vt = Q,
                                                                              wa = Q,
                                                                              Yt = Q,
                                                                              Ir = Q,
                                                                              ya = Q
                                                                            ) => {
                                                                              k(
                                                                                yt,
                                                                                Vt,
                                                                                wa,
                                                                                Yt,
                                                                                Ir,
                                                                                ya
                                                                              );
                                                                            },
                                                                          $$slots:
                                                                            {
                                                                              default:
                                                                                !0,
                                                                            },
                                                                        });
                                                                      },
                                                                      Qr = (
                                                                        Xt
                                                                      ) => {
                                                                        var xa =
                                                                            Me(),
                                                                          yt =
                                                                            Ce(
                                                                              xa
                                                                            );
                                                                        {
                                                                          var Vt =
                                                                              (
                                                                                Yt
                                                                              ) => {
                                                                                Xe(
                                                                                  Yt,
                                                                                  {
                                                                                    component:
                                                                                      "FilePicker",
                                                                                    get title() {
                                                                                      return t(
                                                                                        c
                                                                                      )
                                                                                        .pageLabels
                                                                                        .filePicker;
                                                                                    },
                                                                                    get subtitle() {
                                                                                      return t(
                                                                                        c
                                                                                      )
                                                                                        .components
                                                                                        .filePicker
                                                                                        .subtitle;
                                                                                    },
                                                                                    children:
                                                                                      (
                                                                                        ya,
                                                                                        Oo = Q,
                                                                                        Bo = Q,
                                                                                        kr = Q,
                                                                                        on = Q
                                                                                      ) => {
                                                                                        {
                                                                                          let En =
                                                                                            _(
                                                                                              () =>
                                                                                                kr() ||
                                                                                                t(
                                                                                                  c
                                                                                                )
                                                                                                  .components
                                                                                                  .filePicker
                                                                                                  .label
                                                                                            );
                                                                                          Kc(
                                                                                            ya,
                                                                                            {
                                                                                              get label() {
                                                                                                return t(
                                                                                                  En
                                                                                                );
                                                                                              },
                                                                                              get disabled() {
                                                                                                return on();
                                                                                              },
                                                                                              accept:
                                                                                                "image/*",
                                                                                              multiple:
                                                                                                !0,
                                                                                              class:
                                                                                                "w-full",
                                                                                            }
                                                                                          );
                                                                                        }
                                                                                      },
                                                                                    $$slots:
                                                                                      {
                                                                                        default:
                                                                                          !0,
                                                                                      },
                                                                                  }
                                                                                );
                                                                              },
                                                                            wa =
                                                                              (
                                                                                Yt
                                                                              ) => {
                                                                                var Ir =
                                                                                    Me(),
                                                                                  ya =
                                                                                    Ce(
                                                                                      Ir
                                                                                    );
                                                                                {
                                                                                  var Oo =
                                                                                      (
                                                                                        kr
                                                                                      ) => {
                                                                                        Nf(
                                                                                          kr,
                                                                                          {
                                                                                            onSubmit:
                                                                                              G,
                                                                                          }
                                                                                        );
                                                                                      },
                                                                                    Bo =
                                                                                      (
                                                                                        kr
                                                                                      ) => {
                                                                                        var on =
                                                                                            Me(),
                                                                                          En =
                                                                                            Ce(
                                                                                              on
                                                                                            );
                                                                                        {
                                                                                          var xs =
                                                                                              (
                                                                                                $r
                                                                                              ) => {
                                                                                                Xe(
                                                                                                  $r,
                                                                                                  {
                                                                                                    component:
                                                                                                      "Menu",
                                                                                                    get title() {
                                                                                                      return t(
                                                                                                        c
                                                                                                      )
                                                                                                        .pageLabels
                                                                                                        .menu;
                                                                                                    },
                                                                                                    get subtitle() {
                                                                                                      return t(
                                                                                                        c
                                                                                                      )
                                                                                                        .components
                                                                                                        .menu
                                                                                                        .subtitle;
                                                                                                    },
                                                                                                    children:
                                                                                                      (
                                                                                                        zn,
                                                                                                        Fn = Q
                                                                                                      ) => {
                                                                                                        Of(
                                                                                                          zn,
                                                                                                          {
                                                                                                            get sz() {
                                                                                                              return Fn();
                                                                                                            },
                                                                                                          }
                                                                                                        );
                                                                                                      },
                                                                                                    $$slots:
                                                                                                      {
                                                                                                        default:
                                                                                                          !0,
                                                                                                      },
                                                                                                  }
                                                                                                );
                                                                                              },
                                                                                            ws =
                                                                                              (
                                                                                                $r
                                                                                              ) => {
                                                                                                var An =
                                                                                                    Me(),
                                                                                                  zn =
                                                                                                    Ce(
                                                                                                      An
                                                                                                    );
                                                                                                {
                                                                                                  var Fn =
                                                                                                      (
                                                                                                        ea
                                                                                                      ) => {
                                                                                                        var ka =
                                                                                                            sv(),
                                                                                                          Tn =
                                                                                                            m(
                                                                                                              ka
                                                                                                            );
                                                                                                        (Vf(
                                                                                                          Tn,
                                                                                                          {
                                                                                                            get L() {
                                                                                                              return t(
                                                                                                                c
                                                                                                              );
                                                                                                            },
                                                                                                          }
                                                                                                        ),
                                                                                                          w(
                                                                                                            ea,
                                                                                                            ka
                                                                                                          ));
                                                                                                      },
                                                                                                    ys =
                                                                                                      (
                                                                                                        ea
                                                                                                      ) => {
                                                                                                        var ka =
                                                                                                            Me(),
                                                                                                          Tn =
                                                                                                            Ce(
                                                                                                              ka
                                                                                                            );
                                                                                                        {
                                                                                                          var ks =
                                                                                                              (
                                                                                                                ta
                                                                                                              ) => {
                                                                                                                Xe(
                                                                                                                  ta,
                                                                                                                  {
                                                                                                                    component:
                                                                                                                      "ProgressBar",
                                                                                                                    get title() {
                                                                                                                      return t(
                                                                                                                        c
                                                                                                                      )
                                                                                                                        .pageLabels
                                                                                                                        .progressBar;
                                                                                                                    },
                                                                                                                    get subtitle() {
                                                                                                                      return t(
                                                                                                                        c
                                                                                                                      )
                                                                                                                        .snippets
                                                                                                                        .progressBar
                                                                                                                        .subtitle;
                                                                                                                    },
                                                                                                                    children:
                                                                                                                      (
                                                                                                                        Mn,
                                                                                                                        Dn = Q,
                                                                                                                        Nn = Q,
                                                                                                                        Cr = Q,
                                                                                                                        Ca = Q
                                                                                                                      ) => {
                                                                                                                        Rd(
                                                                                                                          Mn,
                                                                                                                          {
                                                                                                                            value: 75,
                                                                                                                            get sz() {
                                                                                                                              return Dn();
                                                                                                                            },
                                                                                                                            get variant() {
                                                                                                                              return Nn();
                                                                                                                            },
                                                                                                                            get label() {
                                                                                                                              return Cr();
                                                                                                                            },
                                                                                                                            get disabled() {
                                                                                                                              return Ca();
                                                                                                                            },
                                                                                                                            indeterminate:
                                                                                                                              !0,
                                                                                                                          }
                                                                                                                        );
                                                                                                                      },
                                                                                                                    $$slots:
                                                                                                                      {
                                                                                                                        default:
                                                                                                                          !0,
                                                                                                                      },
                                                                                                                  }
                                                                                                                );
                                                                                                              },
                                                                                                            Cs =
                                                                                                              (
                                                                                                                ta
                                                                                                              ) => {
                                                                                                                var Ln =
                                                                                                                    Me(),
                                                                                                                  Mn =
                                                                                                                    Ce(
                                                                                                                      Ln
                                                                                                                    );
                                                                                                                {
                                                                                                                  var Dn =
                                                                                                                      (
                                                                                                                        Cr
                                                                                                                      ) => {
                                                                                                                        Xe(
                                                                                                                          Cr,
                                                                                                                          {
                                                                                                                            component:
                                                                                                                              "Radio",
                                                                                                                            get title() {
                                                                                                                              return t(
                                                                                                                                c
                                                                                                                              )
                                                                                                                                .pageLabels
                                                                                                                                .radio;
                                                                                                                            },
                                                                                                                            get subtitle() {
                                                                                                                              return t(
                                                                                                                                c
                                                                                                                              )
                                                                                                                                .snippets
                                                                                                                                .radio
                                                                                                                                .subtitle;
                                                                                                                            },
                                                                                                                            children:
                                                                                                                              (
                                                                                                                                In,
                                                                                                                                Sa = Q,
                                                                                                                                Pa = Q,
                                                                                                                                Or = Q,
                                                                                                                                Br = Q
                                                                                                                              ) => {
                                                                                                                                var ra =
                                                                                                                                    lv(),
                                                                                                                                  Rr =
                                                                                                                                    m(
                                                                                                                                      ra
                                                                                                                                    );
                                                                                                                                no(
                                                                                                                                  Rr,
                                                                                                                                  {
                                                                                                                                    get sz() {
                                                                                                                                      return Sa();
                                                                                                                                    },
                                                                                                                                    get variant() {
                                                                                                                                      return Pa();
                                                                                                                                    },
                                                                                                                                    get disabled() {
                                                                                                                                      return Br();
                                                                                                                                    },
                                                                                                                                    value:
                                                                                                                                      "apple",
                                                                                                                                    get group() {
                                                                                                                                      return t(
                                                                                                                                        A
                                                                                                                                      );
                                                                                                                                    },
                                                                                                                                    set group(
                                                                                                                                      ft
                                                                                                                                    ) {
                                                                                                                                      z(
                                                                                                                                        A,
                                                                                                                                        ft,
                                                                                                                                        !0
                                                                                                                                      );
                                                                                                                                    },
                                                                                                                                    children:
                                                                                                                                      (
                                                                                                                                        ft,
                                                                                                                                        Vr
                                                                                                                                      ) => {
                                                                                                                                        var Et =
                                                                                                                                          Oe();
                                                                                                                                        (B(
                                                                                                                                          () =>
                                                                                                                                            X(
                                                                                                                                              Et,
                                                                                                                                              t(
                                                                                                                                                c
                                                                                                                                              )
                                                                                                                                                .snippets
                                                                                                                                                .radio
                                                                                                                                                .apple
                                                                                                                                            )
                                                                                                                                        ),
                                                                                                                                          w(
                                                                                                                                            ft,
                                                                                                                                            Et
                                                                                                                                          ));
                                                                                                                                      },
                                                                                                                                    $$slots:
                                                                                                                                      {
                                                                                                                                        default:
                                                                                                                                          !0,
                                                                                                                                      },
                                                                                                                                  }
                                                                                                                                );
                                                                                                                                var jr =
                                                                                                                                  D(
                                                                                                                                    Rr,
                                                                                                                                    2
                                                                                                                                  );
                                                                                                                                no(
                                                                                                                                  jr,
                                                                                                                                  {
                                                                                                                                    get sz() {
                                                                                                                                      return Sa();
                                                                                                                                    },
                                                                                                                                    get variant() {
                                                                                                                                      return Pa();
                                                                                                                                    },
                                                                                                                                    get disabled() {
                                                                                                                                      return Br();
                                                                                                                                    },
                                                                                                                                    value:
                                                                                                                                      "banana",
                                                                                                                                    get group() {
                                                                                                                                      return t(
                                                                                                                                        A
                                                                                                                                      );
                                                                                                                                    },
                                                                                                                                    set group(
                                                                                                                                      ft
                                                                                                                                    ) {
                                                                                                                                      z(
                                                                                                                                        A,
                                                                                                                                        ft,
                                                                                                                                        !0
                                                                                                                                      );
                                                                                                                                    },
                                                                                                                                    children:
                                                                                                                                      (
                                                                                                                                        ft,
                                                                                                                                        Vr
                                                                                                                                      ) => {
                                                                                                                                        var Et =
                                                                                                                                          Oe();
                                                                                                                                        (B(
                                                                                                                                          () =>
                                                                                                                                            X(
                                                                                                                                              Et,
                                                                                                                                              t(
                                                                                                                                                c
                                                                                                                                              )
                                                                                                                                                .snippets
                                                                                                                                                .radio
                                                                                                                                                .banana
                                                                                                                                            )
                                                                                                                                        ),
                                                                                                                                          w(
                                                                                                                                            ft,
                                                                                                                                            Et
                                                                                                                                          ));
                                                                                                                                      },
                                                                                                                                    $$slots:
                                                                                                                                      {
                                                                                                                                        default:
                                                                                                                                          !0,
                                                                                                                                      },
                                                                                                                                  }
                                                                                                                                );
                                                                                                                                var Jt =
                                                                                                                                  D(
                                                                                                                                    jr,
                                                                                                                                    2
                                                                                                                                  );
                                                                                                                                (no(
                                                                                                                                  Jt,
                                                                                                                                  {
                                                                                                                                    get sz() {
                                                                                                                                      return Sa();
                                                                                                                                    },
                                                                                                                                    get variant() {
                                                                                                                                      return Pa();
                                                                                                                                    },
                                                                                                                                    get disabled() {
                                                                                                                                      return Br();
                                                                                                                                    },
                                                                                                                                    value:
                                                                                                                                      "cherry",
                                                                                                                                    get group() {
                                                                                                                                      return t(
                                                                                                                                        A
                                                                                                                                      );
                                                                                                                                    },
                                                                                                                                    set group(
                                                                                                                                      ft
                                                                                                                                    ) {
                                                                                                                                      z(
                                                                                                                                        A,
                                                                                                                                        ft,
                                                                                                                                        !0
                                                                                                                                      );
                                                                                                                                    },
                                                                                                                                    children:
                                                                                                                                      (
                                                                                                                                        ft,
                                                                                                                                        Vr
                                                                                                                                      ) => {
                                                                                                                                        var Et =
                                                                                                                                          Oe();
                                                                                                                                        (B(
                                                                                                                                          () =>
                                                                                                                                            X(
                                                                                                                                              Et,
                                                                                                                                              t(
                                                                                                                                                c
                                                                                                                                              )
                                                                                                                                                .snippets
                                                                                                                                                .radio
                                                                                                                                                .cherry
                                                                                                                                            )
                                                                                                                                        ),
                                                                                                                                          w(
                                                                                                                                            ft,
                                                                                                                                            Et
                                                                                                                                          ));
                                                                                                                                      },
                                                                                                                                    $$slots:
                                                                                                                                      {
                                                                                                                                        default:
                                                                                                                                          !0,
                                                                                                                                      },
                                                                                                                                  }
                                                                                                                                ),
                                                                                                                                  w(
                                                                                                                                    In,
                                                                                                                                    ra
                                                                                                                                  ));
                                                                                                                              },
                                                                                                                            $$slots:
                                                                                                                              {
                                                                                                                                default:
                                                                                                                                  !0,
                                                                                                                              },
                                                                                                                          }
                                                                                                                        );
                                                                                                                      },
                                                                                                                    Nn =
                                                                                                                      (
                                                                                                                        Cr
                                                                                                                      ) => {
                                                                                                                        var Ca =
                                                                                                                            Me(),
                                                                                                                          In =
                                                                                                                            Ce(
                                                                                                                              Ca
                                                                                                                            );
                                                                                                                        {
                                                                                                                          var Sa =
                                                                                                                              (
                                                                                                                                Or
                                                                                                                              ) => {
                                                                                                                                Xe(
                                                                                                                                  Or,
                                                                                                                                  {
                                                                                                                                    component:
                                                                                                                                      "Slider",
                                                                                                                                    get title() {
                                                                                                                                      return t(
                                                                                                                                        c
                                                                                                                                      )
                                                                                                                                        .pageLabels
                                                                                                                                        .slider;
                                                                                                                                    },
                                                                                                                                    get subtitle() {
                                                                                                                                      return t(
                                                                                                                                        c
                                                                                                                                      )
                                                                                                                                        .snippets
                                                                                                                                        .slider
                                                                                                                                        .subtitle;
                                                                                                                                    },
                                                                                                                                    children:
                                                                                                                                      (
                                                                                                                                        ra,
                                                                                                                                        Rr = Q,
                                                                                                                                        jr = Q,
                                                                                                                                        Jt = Q,
                                                                                                                                        ft = Q,
                                                                                                                                        Vr = Q,
                                                                                                                                        Et = Q
                                                                                                                                      ) => {
                                                                                                                                        {
                                                                                                                                          let Ea =
                                                                                                                                            _(
                                                                                                                                              () =>
                                                                                                                                                String(
                                                                                                                                                  t(
                                                                                                                                                    F
                                                                                                                                                  )
                                                                                                                                                )
                                                                                                                                            );
                                                                                                                                          Dt(
                                                                                                                                            ra,
                                                                                                                                            {
                                                                                                                                              get text() {
                                                                                                                                                return t(
                                                                                                                                                  Ea
                                                                                                                                                );
                                                                                                                                              },
                                                                                                                                              children:
                                                                                                                                                (
                                                                                                                                                  qt,
                                                                                                                                                  qr
                                                                                                                                                ) => {
                                                                                                                                                  {
                                                                                                                                                    let aa =
                                                                                                                                                      _(
                                                                                                                                                        () =>
                                                                                                                                                          Jt() ||
                                                                                                                                                          `${jr() || t(c).snippets.slider.fallbackLabel} ${Rr()}`
                                                                                                                                                      );
                                                                                                                                                    Kd(
                                                                                                                                                      qt,
                                                                                                                                                      {
                                                                                                                                                        min: 0,
                                                                                                                                                        max: 100,
                                                                                                                                                        step: 1,
                                                                                                                                                        get showValue() {
                                                                                                                                                          return Et();
                                                                                                                                                        },
                                                                                                                                                        get sz() {
                                                                                                                                                          return Rr();
                                                                                                                                                        },
                                                                                                                                                        get variant() {
                                                                                                                                                          return jr();
                                                                                                                                                        },
                                                                                                                                                        get title() {
                                                                                                                                                          return t(
                                                                                                                                                            aa
                                                                                                                                                          );
                                                                                                                                                        },
                                                                                                                                                        get disabled() {
                                                                                                                                                          return ft();
                                                                                                                                                        },
                                                                                                                                                        get value() {
                                                                                                                                                          return t(
                                                                                                                                                            F
                                                                                                                                                          );
                                                                                                                                                        },
                                                                                                                                                        set value(
                                                                                                                                                          Aa
                                                                                                                                                        ) {
                                                                                                                                                          z(
                                                                                                                                                            F,
                                                                                                                                                            Aa,
                                                                                                                                                            !0
                                                                                                                                                          );
                                                                                                                                                        },
                                                                                                                                                      }
                                                                                                                                                    );
                                                                                                                                                  }
                                                                                                                                                },
                                                                                                                                              $$slots:
                                                                                                                                                {
                                                                                                                                                  default:
                                                                                                                                                    !0,
                                                                                                                                                },
                                                                                                                                            }
                                                                                                                                          );
                                                                                                                                        }
                                                                                                                                      },
                                                                                                                                    $$slots:
                                                                                                                                      {
                                                                                                                                        default:
                                                                                                                                          !0,
                                                                                                                                      },
                                                                                                                                  }
                                                                                                                                );
                                                                                                                              },
                                                                                                                            Pa =
                                                                                                                              (
                                                                                                                                Or
                                                                                                                              ) => {
                                                                                                                                var Br =
                                                                                                                                    Me(),
                                                                                                                                  ra =
                                                                                                                                    Ce(
                                                                                                                                      Br
                                                                                                                                    );
                                                                                                                                {
                                                                                                                                  var Rr =
                                                                                                                                      (
                                                                                                                                        Jt
                                                                                                                                      ) => {
                                                                                                                                        Xe(
                                                                                                                                          Jt,
                                                                                                                                          {
                                                                                                                                            component:
                                                                                                                                              "Select",
                                                                                                                                            get title() {
                                                                                                                                              return t(
                                                                                                                                                c
                                                                                                                                              )
                                                                                                                                                .pageLabels
                                                                                                                                                .select;
                                                                                                                                            },
                                                                                                                                            get subtitle() {
                                                                                                                                              return t(
                                                                                                                                                c
                                                                                                                                              )
                                                                                                                                                .snippets
                                                                                                                                                .select
                                                                                                                                                .subtitle;
                                                                                                                                            },
                                                                                                                                            children:
                                                                                                                                              (
                                                                                                                                                Vr,
                                                                                                                                                Et = Q,
                                                                                                                                                Ea = Q,
                                                                                                                                                qt = Q,
                                                                                                                                                qr = Q
                                                                                                                                              ) => {
                                                                                                                                                {
                                                                                                                                                  let aa =
                                                                                                                                                    _(
                                                                                                                                                      () =>
                                                                                                                                                        qt() ||
                                                                                                                                                        t(
                                                                                                                                                          c
                                                                                                                                                        )
                                                                                                                                                          .snippets
                                                                                                                                                          .select
                                                                                                                                                          .label
                                                                                                                                                    );
                                                                                                                                                  Dt(
                                                                                                                                                    Vr,
                                                                                                                                                    {
                                                                                                                                                      get text() {
                                                                                                                                                        return t(
                                                                                                                                                          aa
                                                                                                                                                        );
                                                                                                                                                      },
                                                                                                                                                      children:
                                                                                                                                                        (
                                                                                                                                                          Aa,
                                                                                                                                                          Ro
                                                                                                                                                        ) => {
                                                                                                                                                          {
                                                                                                                                                            let Sr =
                                                                                                                                                              _(
                                                                                                                                                                () =>
                                                                                                                                                                  qt() ||
                                                                                                                                                                  t(
                                                                                                                                                                    c
                                                                                                                                                                  )
                                                                                                                                                                    .snippets
                                                                                                                                                                    .select
                                                                                                                                                                    .label
                                                                                                                                                              );
                                                                                                                                                            Ht(
                                                                                                                                                              Aa,
                                                                                                                                                              {
                                                                                                                                                                get sz() {
                                                                                                                                                                  return Et();
                                                                                                                                                                },
                                                                                                                                                                get variant() {
                                                                                                                                                                  return Ea();
                                                                                                                                                                },
                                                                                                                                                                get label() {
                                                                                                                                                                  return t(
                                                                                                                                                                    Sr
                                                                                                                                                                  );
                                                                                                                                                                },
                                                                                                                                                                get options() {
                                                                                                                                                                  return t(
                                                                                                                                                                    c
                                                                                                                                                                  )
                                                                                                                                                                    .options
                                                                                                                                                                    .selectCountries;
                                                                                                                                                                },
                                                                                                                                                                get disabled() {
                                                                                                                                                                  return qr();
                                                                                                                                                                },
                                                                                                                                                                get value() {
                                                                                                                                                                  return t(
                                                                                                                                                                    le
                                                                                                                                                                  );
                                                                                                                                                                },
                                                                                                                                                                set value(
                                                                                                                                                                  za
                                                                                                                                                                ) {
                                                                                                                                                                  z(
                                                                                                                                                                    le,
                                                                                                                                                                    za,
                                                                                                                                                                    !0
                                                                                                                                                                  );
                                                                                                                                                                },
                                                                                                                                                              }
                                                                                                                                                            );
                                                                                                                                                          }
                                                                                                                                                        },
                                                                                                                                                      $$slots:
                                                                                                                                                        {
                                                                                                                                                          default:
                                                                                                                                                            !0,
                                                                                                                                                        },
                                                                                                                                                    }
                                                                                                                                                  );
                                                                                                                                                }
                                                                                                                                              },
                                                                                                                                            $$slots:
                                                                                                                                              {
                                                                                                                                                default:
                                                                                                                                                  !0,
                                                                                                                                              },
                                                                                                                                          }
                                                                                                                                        );
                                                                                                                                      },
                                                                                                                                    jr =
                                                                                                                                      (
                                                                                                                                        Jt
                                                                                                                                      ) => {
                                                                                                                                        var ft =
                                                                                                                                            Me(),
                                                                                                                                          Vr =
                                                                                                                                            Ce(
                                                                                                                                              ft
                                                                                                                                            );
                                                                                                                                        {
                                                                                                                                          var Et =
                                                                                                                                              (
                                                                                                                                                qt
                                                                                                                                              ) => {
                                                                                                                                                Xe(
                                                                                                                                                  qt,
                                                                                                                                                  {
                                                                                                                                                    component:
                                                                                                                                                      "Splitter",
                                                                                                                                                    get title() {
                                                                                                                                                      return t(
                                                                                                                                                        c
                                                                                                                                                      )
                                                                                                                                                        .pageLabels
                                                                                                                                                        .splitter;
                                                                                                                                                    },
                                                                                                                                                    get subtitle() {
                                                                                                                                                      return t(
                                                                                                                                                        c
                                                                                                                                                      )
                                                                                                                                                        .snippets
                                                                                                                                                        .splitter
                                                                                                                                                        .subtitle;
                                                                                                                                                    },
                                                                                                                                                    children:
                                                                                                                                                      (
                                                                                                                                                        qr,
                                                                                                                                                        aa
                                                                                                                                                      ) => {
                                                                                                                                                        Wf(
                                                                                                                                                          qr
                                                                                                                                                        );
                                                                                                                                                      },
                                                                                                                                                    $$slots:
                                                                                                                                                      {
                                                                                                                                                        default:
                                                                                                                                                          !0,
                                                                                                                                                      },
                                                                                                                                                  }
                                                                                                                                                );
                                                                                                                                              },
                                                                                                                                            Ea =
                                                                                                                                              (
                                                                                                                                                qt
                                                                                                                                              ) => {
                                                                                                                                                var qr =
                                                                                                                                                    Me(),
                                                                                                                                                  aa =
                                                                                                                                                    Ce(
                                                                                                                                                      qr
                                                                                                                                                    );
                                                                                                                                                {
                                                                                                                                                  var Aa =
                                                                                                                                                      (
                                                                                                                                                        Sr
                                                                                                                                                      ) => {
                                                                                                                                                        Xe(
                                                                                                                                                          Sr,
                                                                                                                                                          {
                                                                                                                                                            component:
                                                                                                                                                              "Switch",
                                                                                                                                                            get title() {
                                                                                                                                                              return t(
                                                                                                                                                                c
                                                                                                                                                              )
                                                                                                                                                                .pageLabels
                                                                                                                                                                .switch;
                                                                                                                                                            },
                                                                                                                                                            get subtitle() {
                                                                                                                                                              return t(
                                                                                                                                                                c
                                                                                                                                                              )
                                                                                                                                                                .snippets
                                                                                                                                                                .switch
                                                                                                                                                                .subtitle;
                                                                                                                                                            },
                                                                                                                                                            children:
                                                                                                                                                              (
                                                                                                                                                                On,
                                                                                                                                                                Fa = Q,
                                                                                                                                                                Bn = Q,
                                                                                                                                                                dr = Q,
                                                                                                                                                                Ta = Q
                                                                                                                                                              ) => {
                                                                                                                                                                {
                                                                                                                                                                  let La =
                                                                                                                                                                    _(
                                                                                                                                                                      () =>
                                                                                                                                                                        dr() ||
                                                                                                                                                                        `${t(c).snippets.switch.labelPrefix} ${Fa()}`
                                                                                                                                                                    );
                                                                                                                                                                  Dt(
                                                                                                                                                                    On,
                                                                                                                                                                    {
                                                                                                                                                                      get text() {
                                                                                                                                                                        return t(
                                                                                                                                                                          La
                                                                                                                                                                        );
                                                                                                                                                                      },
                                                                                                                                                                      children:
                                                                                                                                                                        (
                                                                                                                                                                          Ma,
                                                                                                                                                                          sn
                                                                                                                                                                        ) => {
                                                                                                                                                                          {
                                                                                                                                                                            let Pr =
                                                                                                                                                                                _(
                                                                                                                                                                                  () =>
                                                                                                                                                                                    Bn() ||
                                                                                                                                                                                    void 0
                                                                                                                                                                                ),
                                                                                                                                                                              Da =
                                                                                                                                                                                _(
                                                                                                                                                                                  () =>
                                                                                                                                                                                    dr() ||
                                                                                                                                                                                    `${t(c).snippets.switch.labelPrefix} ${Fa()}`
                                                                                                                                                                                );
                                                                                                                                                                            _s(
                                                                                                                                                                              Ma,
                                                                                                                                                                              {
                                                                                                                                                                                get sz() {
                                                                                                                                                                                  return Fa();
                                                                                                                                                                                },
                                                                                                                                                                                get "data-variant"() {
                                                                                                                                                                                  return t(
                                                                                                                                                                                    Pr
                                                                                                                                                                                  );
                                                                                                                                                                                },
                                                                                                                                                                                get rightLabel() {
                                                                                                                                                                                  return t(
                                                                                                                                                                                    Da
                                                                                                                                                                                  );
                                                                                                                                                                                },
                                                                                                                                                                                get disabled() {
                                                                                                                                                                                  return Ta();
                                                                                                                                                                                },
                                                                                                                                                                              }
                                                                                                                                                                            );
                                                                                                                                                                          }
                                                                                                                                                                        },
                                                                                                                                                                      $$slots:
                                                                                                                                                                        {
                                                                                                                                                                          default:
                                                                                                                                                                            !0,
                                                                                                                                                                        },
                                                                                                                                                                    }
                                                                                                                                                                  );
                                                                                                                                                                }
                                                                                                                                                              },
                                                                                                                                                            $$slots:
                                                                                                                                                              {
                                                                                                                                                                default:
                                                                                                                                                                  !0,
                                                                                                                                                              },
                                                                                                                                                          }
                                                                                                                                                        );
                                                                                                                                                      },
                                                                                                                                                    Ro =
                                                                                                                                                      (
                                                                                                                                                        Sr
                                                                                                                                                      ) => {
                                                                                                                                                        var za =
                                                                                                                                                            Me(),
                                                                                                                                                          On =
                                                                                                                                                            Ce(
                                                                                                                                                              za
                                                                                                                                                            );
                                                                                                                                                        {
                                                                                                                                                          var Fa =
                                                                                                                                                              (
                                                                                                                                                                dr
                                                                                                                                                              ) => {
                                                                                                                                                                Xe(
                                                                                                                                                                  dr,
                                                                                                                                                                  {
                                                                                                                                                                    component:
                                                                                                                                                                      "Table",
                                                                                                                                                                    get title() {
                                                                                                                                                                      return t(
                                                                                                                                                                        c
                                                                                                                                                                      )
                                                                                                                                                                        .pageLabels
                                                                                                                                                                        .tablePagination;
                                                                                                                                                                    },
                                                                                                                                                                    subtitle:
                                                                                                                                                                      "Paginated data table",
                                                                                                                                                                    children:
                                                                                                                                                                      (
                                                                                                                                                                        La,
                                                                                                                                                                        Ma = Q,
                                                                                                                                                                        sn = Q
                                                                                                                                                                      ) => {
                                                                                                                                                                        C(
                                                                                                                                                                          La,
                                                                                                                                                                          Ma,
                                                                                                                                                                          sn
                                                                                                                                                                        );
                                                                                                                                                                      },
                                                                                                                                                                    $$slots:
                                                                                                                                                                      {
                                                                                                                                                                        default:
                                                                                                                                                                          !0,
                                                                                                                                                                      },
                                                                                                                                                                  }
                                                                                                                                                                );
                                                                                                                                                              },
                                                                                                                                                            Bn =
                                                                                                                                                              (
                                                                                                                                                                dr
                                                                                                                                                              ) => {
                                                                                                                                                                var Ta =
                                                                                                                                                                    Me(),
                                                                                                                                                                  La =
                                                                                                                                                                    Ce(
                                                                                                                                                                      Ta
                                                                                                                                                                    );
                                                                                                                                                                {
                                                                                                                                                                  var Ma =
                                                                                                                                                                      (
                                                                                                                                                                        Pr
                                                                                                                                                                      ) => {
                                                                                                                                                                        Xe(
                                                                                                                                                                          Pr,
                                                                                                                                                                          {
                                                                                                                                                                            component:
                                                                                                                                                                              "Tabs",
                                                                                                                                                                            get title() {
                                                                                                                                                                              return t(
                                                                                                                                                                                c
                                                                                                                                                                              )
                                                                                                                                                                                .pageLabels
                                                                                                                                                                                .tabs;
                                                                                                                                                                            },
                                                                                                                                                                            get subtitle() {
                                                                                                                                                                              return t(
                                                                                                                                                                                c
                                                                                                                                                                              )
                                                                                                                                                                                .snippets
                                                                                                                                                                                .tabs
                                                                                                                                                                                .subtitle;
                                                                                                                                                                            },
                                                                                                                                                                            children:
                                                                                                                                                                              (
                                                                                                                                                                                Rn,
                                                                                                                                                                                jn = Q,
                                                                                                                                                                                Vn = Q
                                                                                                                                                                              ) => {
                                                                                                                                                                                x(
                                                                                                                                                                                  Rn,
                                                                                                                                                                                  jn,
                                                                                                                                                                                  Vn
                                                                                                                                                                                );
                                                                                                                                                                              },
                                                                                                                                                                            $$slots:
                                                                                                                                                                              {
                                                                                                                                                                                default:
                                                                                                                                                                                  !0,
                                                                                                                                                                              },
                                                                                                                                                                          }
                                                                                                                                                                        );
                                                                                                                                                                      },
                                                                                                                                                                    sn =
                                                                                                                                                                      (
                                                                                                                                                                        Pr
                                                                                                                                                                      ) => {
                                                                                                                                                                        var Da =
                                                                                                                                                                            Me(),
                                                                                                                                                                          Rn =
                                                                                                                                                                            Ce(
                                                                                                                                                                              Da
                                                                                                                                                                            );
                                                                                                                                                                        {
                                                                                                                                                                          var jn =
                                                                                                                                                                              (
                                                                                                                                                                                na
                                                                                                                                                                              ) => {
                                                                                                                                                                                Xe(
                                                                                                                                                                                  na,
                                                                                                                                                                                  {
                                                                                                                                                                                    component:
                                                                                                                                                                                      "ThemeToggle",
                                                                                                                                                                                    get title() {
                                                                                                                                                                                      return t(
                                                                                                                                                                                        c
                                                                                                                                                                                      )
                                                                                                                                                                                        .pageLabels
                                                                                                                                                                                        .themeToggle;
                                                                                                                                                                                    },
                                                                                                                                                                                    get subtitle() {
                                                                                                                                                                                      return t(
                                                                                                                                                                                        c
                                                                                                                                                                                      )
                                                                                                                                                                                        .snippets
                                                                                                                                                                                        .themeToggle
                                                                                                                                                                                        .subtitle;
                                                                                                                                                                                    },
                                                                                                                                                                                    children:
                                                                                                                                                                                      (
                                                                                                                                                                                        Un,
                                                                                                                                                                                        Hn = Q,
                                                                                                                                                                                        Kn = Q,
                                                                                                                                                                                        fr = Q,
                                                                                                                                                                                        Na = Q
                                                                                                                                                                                      ) => {
                                                                                                                                                                                        Dt(
                                                                                                                                                                                          Un,
                                                                                                                                                                                          {
                                                                                                                                                                                            get text() {
                                                                                                                                                                                              return fr();
                                                                                                                                                                                            },
                                                                                                                                                                                            children:
                                                                                                                                                                                              (
                                                                                                                                                                                                Ia,
                                                                                                                                                                                                Gn
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                {
                                                                                                                                                                                                  let ln =
                                                                                                                                                                                                      _(
                                                                                                                                                                                                        () =>
                                                                                                                                                                                                          Kn() ||
                                                                                                                                                                                                          void 0
                                                                                                                                                                                                      ),
                                                                                                                                                                                                    Qt =
                                                                                                                                                                                                      _(
                                                                                                                                                                                                        () =>
                                                                                                                                                                                                          fr() ||
                                                                                                                                                                                                          t(
                                                                                                                                                                                                            c
                                                                                                                                                                                                          )
                                                                                                                                                                                                            .snippets
                                                                                                                                                                                                            .themeToggle
                                                                                                                                                                                                            .defaultLabel
                                                                                                                                                                                                      );
                                                                                                                                                                                                  di(
                                                                                                                                                                                                    Ia,
                                                                                                                                                                                                    {
                                                                                                                                                                                                      get sz() {
                                                                                                                                                                                                        return Hn();
                                                                                                                                                                                                      },
                                                                                                                                                                                                      get disabled() {
                                                                                                                                                                                                        return Na();
                                                                                                                                                                                                      },
                                                                                                                                                                                                      get "data-variant"() {
                                                                                                                                                                                                        return t(
                                                                                                                                                                                                          ln
                                                                                                                                                                                                        );
                                                                                                                                                                                                      },
                                                                                                                                                                                                      get title() {
                                                                                                                                                                                                        return t(
                                                                                                                                                                                                          Qt
                                                                                                                                                                                                        );
                                                                                                                                                                                                      },
                                                                                                                                                                                                      class:
                                                                                                                                                                                                        "mx-auto block",
                                                                                                                                                                                                    }
                                                                                                                                                                                                  );
                                                                                                                                                                                                }
                                                                                                                                                                                              },
                                                                                                                                                                                            $$slots:
                                                                                                                                                                                              {
                                                                                                                                                                                                default:
                                                                                                                                                                                                  !0,
                                                                                                                                                                                              },
                                                                                                                                                                                          }
                                                                                                                                                                                        );
                                                                                                                                                                                      },
                                                                                                                                                                                    $$slots:
                                                                                                                                                                                      {
                                                                                                                                                                                        default:
                                                                                                                                                                                          !0,
                                                                                                                                                                                      },
                                                                                                                                                                                  }
                                                                                                                                                                                );
                                                                                                                                                                              },
                                                                                                                                                                            Vn =
                                                                                                                                                                              (
                                                                                                                                                                                na
                                                                                                                                                                              ) => {
                                                                                                                                                                                var qn =
                                                                                                                                                                                    Me(),
                                                                                                                                                                                  Un =
                                                                                                                                                                                    Ce(
                                                                                                                                                                                      qn
                                                                                                                                                                                    );
                                                                                                                                                                                {
                                                                                                                                                                                  var Hn =
                                                                                                                                                                                      (
                                                                                                                                                                                        fr
                                                                                                                                                                                      ) => {
                                                                                                                                                                                        Xe(
                                                                                                                                                                                          fr,
                                                                                                                                                                                          {
                                                                                                                                                                                            component:
                                                                                                                                                                                              "TimePicker",
                                                                                                                                                                                            get title() {
                                                                                                                                                                                              return t(
                                                                                                                                                                                                c
                                                                                                                                                                                              )
                                                                                                                                                                                                .pageLabels
                                                                                                                                                                                                .timePicker;
                                                                                                                                                                                            },
                                                                                                                                                                                            get subtitle() {
                                                                                                                                                                                              return t(
                                                                                                                                                                                                c
                                                                                                                                                                                              )
                                                                                                                                                                                                .components
                                                                                                                                                                                                .timePicker
                                                                                                                                                                                                .subtitle;
                                                                                                                                                                                            },
                                                                                                                                                                                            children:
                                                                                                                                                                                              (
                                                                                                                                                                                                Ia,
                                                                                                                                                                                                Gn = Q,
                                                                                                                                                                                                ln = Q,
                                                                                                                                                                                                Qt = Q,
                                                                                                                                                                                                un = Q
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                {
                                                                                                                                                                                                  let cn =
                                                                                                                                                                                                    _(
                                                                                                                                                                                                      () =>
                                                                                                                                                                                                        Qt() ||
                                                                                                                                                                                                        t(
                                                                                                                                                                                                          c
                                                                                                                                                                                                        )
                                                                                                                                                                                                          .components
                                                                                                                                                                                                          .timePicker
                                                                                                                                                                                                          .label
                                                                                                                                                                                                    );
                                                                                                                                                                                                  pf(
                                                                                                                                                                                                    Ia,
                                                                                                                                                                                                    {
                                                                                                                                                                                                      get label() {
                                                                                                                                                                                                        return t(
                                                                                                                                                                                                          cn
                                                                                                                                                                                                        );
                                                                                                                                                                                                      },
                                                                                                                                                                                                      get disabled() {
                                                                                                                                                                                                        return un();
                                                                                                                                                                                                      },
                                                                                                                                                                                                      get placeholder() {
                                                                                                                                                                                                        return t(
                                                                                                                                                                                                          c
                                                                                                                                                                                                        )
                                                                                                                                                                                                          .components
                                                                                                                                                                                                          .timePicker
                                                                                                                                                                                                          .placeholder;
                                                                                                                                                                                                      },
                                                                                                                                                                                                      get value() {
                                                                                                                                                                                                        return t(
                                                                                                                                                                                                          te
                                                                                                                                                                                                        );
                                                                                                                                                                                                      },
                                                                                                                                                                                                      set value(
                                                                                                                                                                                                        Wn
                                                                                                                                                                                                      ) {
                                                                                                                                                                                                        z(
                                                                                                                                                                                                          te,
                                                                                                                                                                                                          Wn,
                                                                                                                                                                                                          !0
                                                                                                                                                                                                        );
                                                                                                                                                                                                      },
                                                                                                                                                                                                    }
                                                                                                                                                                                                  );
                                                                                                                                                                                                }
                                                                                                                                                                                              },
                                                                                                                                                                                            $$slots:
                                                                                                                                                                                              {
                                                                                                                                                                                                default:
                                                                                                                                                                                                  !0,
                                                                                                                                                                                              },
                                                                                                                                                                                          }
                                                                                                                                                                                        );
                                                                                                                                                                                      },
                                                                                                                                                                                    Kn =
                                                                                                                                                                                      (
                                                                                                                                                                                        fr
                                                                                                                                                                                      ) => {
                                                                                                                                                                                        var Na =
                                                                                                                                                                                            Me(),
                                                                                                                                                                                          Ia =
                                                                                                                                                                                            Ce(
                                                                                                                                                                                              Na
                                                                                                                                                                                            );
                                                                                                                                                                                        {
                                                                                                                                                                                          var Gn =
                                                                                                                                                                                              (
                                                                                                                                                                                                Qt
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                Xe(
                                                                                                                                                                                                  Qt,
                                                                                                                                                                                                  {
                                                                                                                                                                                                    component:
                                                                                                                                                                                                      "Toast",
                                                                                                                                                                                                    get title() {
                                                                                                                                                                                                      return t(
                                                                                                                                                                                                        c
                                                                                                                                                                                                      )
                                                                                                                                                                                                        .pageLabels
                                                                                                                                                                                                        .toast;
                                                                                                                                                                                                    },
                                                                                                                                                                                                    get subtitle() {
                                                                                                                                                                                                      return t(
                                                                                                                                                                                                        c
                                                                                                                                                                                                      )
                                                                                                                                                                                                        .snippets
                                                                                                                                                                                                        .toast
                                                                                                                                                                                                        .subtitle;
                                                                                                                                                                                                    },
                                                                                                                                                                                                    children:
                                                                                                                                                                                                      (
                                                                                                                                                                                                        cn,
                                                                                                                                                                                                        Wn = Q,
                                                                                                                                                                                                        Ss = Q
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        y(
                                                                                                                                                                                                          cn,
                                                                                                                                                                                                          Wn,
                                                                                                                                                                                                          Ss
                                                                                                                                                                                                        );
                                                                                                                                                                                                      },
                                                                                                                                                                                                    $$slots:
                                                                                                                                                                                                      {
                                                                                                                                                                                                        default:
                                                                                                                                                                                                          !0,
                                                                                                                                                                                                      },
                                                                                                                                                                                                  }
                                                                                                                                                                                                );
                                                                                                                                                                                              },
                                                                                                                                                                                            ln =
                                                                                                                                                                                              (
                                                                                                                                                                                                Qt
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                Xe(
                                                                                                                                                                                                  Qt,
                                                                                                                                                                                                  {
                                                                                                                                                                                                    component:
                                                                                                                                                                                                      "Unknown",
                                                                                                                                                                                                    title:
                                                                                                                                                                                                      "Unknown",
                                                                                                                                                                                                    get subtitle() {
                                                                                                                                                                                                      return t(
                                                                                                                                                                                                        c
                                                                                                                                                                                                      )
                                                                                                                                                                                                        .snippets
                                                                                                                                                                                                        .unknown
                                                                                                                                                                                                        .subtitle;
                                                                                                                                                                                                    },
                                                                                                                                                                                                    children:
                                                                                                                                                                                                      (
                                                                                                                                                                                                        un,
                                                                                                                                                                                                        cn
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        b(
                                                                                                                                                                                                          un
                                                                                                                                                                                                        );
                                                                                                                                                                                                      },
                                                                                                                                                                                                    $$slots:
                                                                                                                                                                                                      {
                                                                                                                                                                                                        default:
                                                                                                                                                                                                          !0,
                                                                                                                                                                                                      },
                                                                                                                                                                                                  }
                                                                                                                                                                                                );
                                                                                                                                                                                              };
                                                                                                                                                                                          Z(
                                                                                                                                                                                            Ia,
                                                                                                                                                                                            (
                                                                                                                                                                                              Qt
                                                                                                                                                                                            ) => {
                                                                                                                                                                                              t(
                                                                                                                                                                                                d
                                                                                                                                                                                              ) ===
                                                                                                                                                                                              "toast"
                                                                                                                                                                                                ? Qt(
                                                                                                                                                                                                    Gn
                                                                                                                                                                                                  )
                                                                                                                                                                                                : Qt(
                                                                                                                                                                                                    ln,
                                                                                                                                                                                                    !1
                                                                                                                                                                                                  );
                                                                                                                                                                                            },
                                                                                                                                                                                            !0
                                                                                                                                                                                          );
                                                                                                                                                                                        }
                                                                                                                                                                                        w(
                                                                                                                                                                                          fr,
                                                                                                                                                                                          Na
                                                                                                                                                                                        );
                                                                                                                                                                                      };
                                                                                                                                                                                  Z(
                                                                                                                                                                                    Un,
                                                                                                                                                                                    (
                                                                                                                                                                                      fr
                                                                                                                                                                                    ) => {
                                                                                                                                                                                      t(
                                                                                                                                                                                        d
                                                                                                                                                                                      ) ===
                                                                                                                                                                                      "timePicker"
                                                                                                                                                                                        ? fr(
                                                                                                                                                                                            Hn
                                                                                                                                                                                          )
                                                                                                                                                                                        : fr(
                                                                                                                                                                                            Kn,
                                                                                                                                                                                            !1
                                                                                                                                                                                          );
                                                                                                                                                                                    },
                                                                                                                                                                                    !0
                                                                                                                                                                                  );
                                                                                                                                                                                }
                                                                                                                                                                                w(
                                                                                                                                                                                  na,
                                                                                                                                                                                  qn
                                                                                                                                                                                );
                                                                                                                                                                              };
                                                                                                                                                                          Z(
                                                                                                                                                                            Rn,
                                                                                                                                                                            (
                                                                                                                                                                              na
                                                                                                                                                                            ) => {
                                                                                                                                                                              t(
                                                                                                                                                                                d
                                                                                                                                                                              ) ===
                                                                                                                                                                              "themeToggle"
                                                                                                                                                                                ? na(
                                                                                                                                                                                    jn
                                                                                                                                                                                  )
                                                                                                                                                                                : na(
                                                                                                                                                                                    Vn,
                                                                                                                                                                                    !1
                                                                                                                                                                                  );
                                                                                                                                                                            },
                                                                                                                                                                            !0
                                                                                                                                                                          );
                                                                                                                                                                        }
                                                                                                                                                                        w(
                                                                                                                                                                          Pr,
                                                                                                                                                                          Da
                                                                                                                                                                        );
                                                                                                                                                                      };
                                                                                                                                                                  Z(
                                                                                                                                                                    La,
                                                                                                                                                                    (
                                                                                                                                                                      Pr
                                                                                                                                                                    ) => {
                                                                                                                                                                      t(
                                                                                                                                                                        d
                                                                                                                                                                      ) ===
                                                                                                                                                                      "tabs"
                                                                                                                                                                        ? Pr(
                                                                                                                                                                            Ma
                                                                                                                                                                          )
                                                                                                                                                                        : Pr(
                                                                                                                                                                            sn,
                                                                                                                                                                            !1
                                                                                                                                                                          );
                                                                                                                                                                    },
                                                                                                                                                                    !0
                                                                                                                                                                  );
                                                                                                                                                                }
                                                                                                                                                                w(
                                                                                                                                                                  dr,
                                                                                                                                                                  Ta
                                                                                                                                                                );
                                                                                                                                                              };
                                                                                                                                                          Z(
                                                                                                                                                            On,
                                                                                                                                                            (
                                                                                                                                                              dr
                                                                                                                                                            ) => {
                                                                                                                                                              t(
                                                                                                                                                                d
                                                                                                                                                              ) ===
                                                                                                                                                              "tablePagination"
                                                                                                                                                                ? dr(
                                                                                                                                                                    Fa
                                                                                                                                                                  )
                                                                                                                                                                : dr(
                                                                                                                                                                    Bn,
                                                                                                                                                                    !1
                                                                                                                                                                  );
                                                                                                                                                            },
                                                                                                                                                            !0
                                                                                                                                                          );
                                                                                                                                                        }
                                                                                                                                                        w(
                                                                                                                                                          Sr,
                                                                                                                                                          za
                                                                                                                                                        );
                                                                                                                                                      };
                                                                                                                                                  Z(
                                                                                                                                                    aa,
                                                                                                                                                    (
                                                                                                                                                      Sr
                                                                                                                                                    ) => {
                                                                                                                                                      t(
                                                                                                                                                        d
                                                                                                                                                      ) ===
                                                                                                                                                      "switch"
                                                                                                                                                        ? Sr(
                                                                                                                                                            Aa
                                                                                                                                                          )
                                                                                                                                                        : Sr(
                                                                                                                                                            Ro,
                                                                                                                                                            !1
                                                                                                                                                          );
                                                                                                                                                    },
                                                                                                                                                    !0
                                                                                                                                                  );
                                                                                                                                                }
                                                                                                                                                w(
                                                                                                                                                  qt,
                                                                                                                                                  qr
                                                                                                                                                );
                                                                                                                                              };
                                                                                                                                          Z(
                                                                                                                                            Vr,
                                                                                                                                            (
                                                                                                                                              qt
                                                                                                                                            ) => {
                                                                                                                                              t(
                                                                                                                                                d
                                                                                                                                              ) ===
                                                                                                                                              "splitter"
                                                                                                                                                ? qt(
                                                                                                                                                    Et
                                                                                                                                                  )
                                                                                                                                                : qt(
                                                                                                                                                    Ea,
                                                                                                                                                    !1
                                                                                                                                                  );
                                                                                                                                            },
                                                                                                                                            !0
                                                                                                                                          );
                                                                                                                                        }
                                                                                                                                        w(
                                                                                                                                          Jt,
                                                                                                                                          ft
                                                                                                                                        );
                                                                                                                                      };
                                                                                                                                  Z(
                                                                                                                                    ra,
                                                                                                                                    (
                                                                                                                                      Jt
                                                                                                                                    ) => {
                                                                                                                                      t(
                                                                                                                                        d
                                                                                                                                      ) ===
                                                                                                                                      "select"
                                                                                                                                        ? Jt(
                                                                                                                                            Rr
                                                                                                                                          )
                                                                                                                                        : Jt(
                                                                                                                                            jr,
                                                                                                                                            !1
                                                                                                                                          );
                                                                                                                                    },
                                                                                                                                    !0
                                                                                                                                  );
                                                                                                                                }
                                                                                                                                w(
                                                                                                                                  Or,
                                                                                                                                  Br
                                                                                                                                );
                                                                                                                              };
                                                                                                                          Z(
                                                                                                                            In,
                                                                                                                            (
                                                                                                                              Or
                                                                                                                            ) => {
                                                                                                                              t(
                                                                                                                                d
                                                                                                                              ) ===
                                                                                                                              "slider"
                                                                                                                                ? Or(
                                                                                                                                    Sa
                                                                                                                                  )
                                                                                                                                : Or(
                                                                                                                                    Pa,
                                                                                                                                    !1
                                                                                                                                  );
                                                                                                                            },
                                                                                                                            !0
                                                                                                                          );
                                                                                                                        }
                                                                                                                        w(
                                                                                                                          Cr,
                                                                                                                          Ca
                                                                                                                        );
                                                                                                                      };
                                                                                                                  Z(
                                                                                                                    Mn,
                                                                                                                    (
                                                                                                                      Cr
                                                                                                                    ) => {
                                                                                                                      t(
                                                                                                                        d
                                                                                                                      ) ===
                                                                                                                      "radio"
                                                                                                                        ? Cr(
                                                                                                                            Dn
                                                                                                                          )
                                                                                                                        : Cr(
                                                                                                                            Nn,
                                                                                                                            !1
                                                                                                                          );
                                                                                                                    },
                                                                                                                    !0
                                                                                                                  );
                                                                                                                }
                                                                                                                w(
                                                                                                                  ta,
                                                                                                                  Ln
                                                                                                                );
                                                                                                              };
                                                                                                          Z(
                                                                                                            Tn,
                                                                                                            (
                                                                                                              ta
                                                                                                            ) => {
                                                                                                              t(
                                                                                                                d
                                                                                                              ) ===
                                                                                                              "progressBar"
                                                                                                                ? ta(
                                                                                                                    ks
                                                                                                                  )
                                                                                                                : ta(
                                                                                                                    Cs,
                                                                                                                    !1
                                                                                                                  );
                                                                                                            },
                                                                                                            !0
                                                                                                          );
                                                                                                        }
                                                                                                        w(
                                                                                                          ea,
                                                                                                          ka
                                                                                                        );
                                                                                                      };
                                                                                                  Z(
                                                                                                    zn,
                                                                                                    (
                                                                                                      ea
                                                                                                    ) => {
                                                                                                      t(
                                                                                                        d
                                                                                                      ) ===
                                                                                                      "notepad"
                                                                                                        ? ea(
                                                                                                            Fn
                                                                                                          )
                                                                                                        : ea(
                                                                                                            ys,
                                                                                                            !1
                                                                                                          );
                                                                                                    },
                                                                                                    !0
                                                                                                  );
                                                                                                }
                                                                                                w(
                                                                                                  $r,
                                                                                                  An
                                                                                                );
                                                                                              };
                                                                                          Z(
                                                                                            En,
                                                                                            (
                                                                                              $r
                                                                                            ) => {
                                                                                              t(
                                                                                                d
                                                                                              ) ===
                                                                                              "menu"
                                                                                                ? $r(
                                                                                                    xs
                                                                                                  )
                                                                                                : $r(
                                                                                                    ws,
                                                                                                    !1
                                                                                                  );
                                                                                            },
                                                                                            !0
                                                                                          );
                                                                                        }
                                                                                        w(
                                                                                          kr,
                                                                                          on
                                                                                        );
                                                                                      };
                                                                                  Z(
                                                                                    ya,
                                                                                    (
                                                                                      kr
                                                                                    ) => {
                                                                                      t(
                                                                                        d
                                                                                      ) ===
                                                                                      "form"
                                                                                        ? kr(
                                                                                            Oo
                                                                                          )
                                                                                        : kr(
                                                                                            Bo,
                                                                                            !1
                                                                                          );
                                                                                    },
                                                                                    !0
                                                                                  );
                                                                                }
                                                                                w(
                                                                                  Yt,
                                                                                  Ir
                                                                                );
                                                                              };
                                                                          Z(
                                                                            yt,
                                                                            (
                                                                              Yt
                                                                            ) => {
                                                                              t(
                                                                                d
                                                                              ) ===
                                                                              "filePicker"
                                                                                ? Yt(
                                                                                    Vt
                                                                                  )
                                                                                : Yt(
                                                                                    wa,
                                                                                    !1
                                                                                  );
                                                                            },
                                                                            !0
                                                                          );
                                                                        }
                                                                        w(
                                                                          Xt,
                                                                          xa
                                                                        );
                                                                      };
                                                                    Z(
                                                                      Dr,
                                                                      (Xt) => {
                                                                        t(d) ===
                                                                        "field"
                                                                          ? Xt(
                                                                              Nr
                                                                            )
                                                                          : Xt(
                                                                              Qr,
                                                                              !1
                                                                            );
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  w(lt, yr);
                                                                };
                                                              Z(
                                                                ur,
                                                                (lt) => {
                                                                  t(d) ===
                                                                  "dialog"
                                                                    ? lt(wr)
                                                                    : lt(
                                                                        cr,
                                                                        !1
                                                                      );
                                                                },
                                                                !0
                                                              );
                                                            }
                                                            w(Lt, lr);
                                                          };
                                                        Z(
                                                          rt,
                                                          (Lt) => {
                                                            t(d) ===
                                                            "datePicker"
                                                              ? Lt(dt)
                                                              : Lt(sr, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      w(He, Qe);
                                                    };
                                                  Z(
                                                    Rt,
                                                    (He) => {
                                                      t(d) === "colorPicker"
                                                        ? He(jt)
                                                        : He(Mr, !1);
                                                    },
                                                    !0
                                                  );
                                                }
                                                w(mt, Tt);
                                              };
                                            Z(
                                              Ze,
                                              (mt) => {
                                                t(d) === "codeView"
                                                  ? mt(tt)
                                                  : mt(ct, !1);
                                              },
                                              !0
                                            );
                                          }
                                          w(Le, qe);
                                        };
                                      Z(
                                        ut,
                                        (Le) => {
                                          t(d) === "checkbox"
                                            ? Le(ue)
                                            : Le(Ee, !1);
                                        },
                                        !0
                                      );
                                    }
                                    w(ht, Zt);
                                  };
                                Z(
                                  nt,
                                  (ht) => {
                                    t(d) === "carousel" ? ht(st) : ht(Pt, !1);
                                  },
                                  !0
                                );
                              }
                              w(Ie, De);
                            };
                          Z(
                            Te,
                            (Ie) => {
                              t(d) === "card" ? Ie(Ge) : Ie(je, !1);
                            },
                            !0
                          );
                        }
                        w(ke, Fe);
                      };
                    Z(
                      ye,
                      (ke) => {
                        t(d) === "button" ? ke(V) : ke(pe, !1);
                      },
                      !0
                    );
                  }
                  w(oe, _e);
                };
              Z(
                Se,
                (oe) => {
                  t(d) === "accordion" ? oe(L) : oe(re, !1);
                },
                !0
              );
            }
            w(Ae, ve);
          };
        Z(ge, (Ae) => {
          t(d) === "about" ? Ae(ze) : Ae(Pe, !1);
        });
      }
      (B(
        (Ae, ve, Se, L) => {
          (q(me, 1, Ae), q(N, 1, ve), q(de, 1, Se), q(fe, 1, L));
        },
        [
          () => Y(U("p-6 md:p-6 lg:p-6")),
          () => Y(U("flex items-center justify-between")),
          () => Y(U("max-w-[640px] min-h-[560px] mx-auto p-4 md:p-6 lg:p-10")),
          () => Y(U("grid gap-4 md:gap-6 lg:gap-8")),
        ]
      ),
        w(W, se));
    },
    $$slots: { default: !0 },
  }),
    Re(),
    o());
}
ru(cv, { target: document.getElementById("app") });

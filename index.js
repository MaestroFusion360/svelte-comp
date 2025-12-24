(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = a(o);
    fetch(o.href, s);
  }
})();
const ji = "production",
  ye = !ji.toLowerCase().startsWith("prod");
var Io = Array.isArray,
  Vi = Array.prototype.indexOf,
  Ln = Array.from,
  Or = Object.defineProperty,
  xr = Object.getOwnPropertyDescriptor,
  qi = Object.getOwnPropertyDescriptors,
  Ui = Object.prototype,
  Hi = Array.prototype,
  Fs = Object.getPrototypeOf,
  es = Object.isExtensible;
function ha(r) {
  return typeof r == "function";
}
const Q = () => {};
function Ki(r) {
  for (var e = 0; e < r.length; e++) r[e]();
}
function Ts() {
  var r,
    e,
    a = new Promise((n, o) => {
      ((r = n), (e = o));
    });
  return { promise: a, resolve: r, reject: e };
}
const ht = 2,
  No = 4,
  Oo = 8,
  Ls = 1 << 24,
  fr = 16,
  Cr = 32,
  ta = 64,
  Mn = 128,
  $t = 512,
  Ct = 1024,
  Mt = 2048,
  cr = 4096,
  Rt = 8192,
  wr = 16384,
  Dn = 32768,
  Br = 65536,
  Pn = 1 << 17,
  Ms = 1 << 18,
  Pa = 1 << 19,
  Gi = 1 << 20,
  _r = 1 << 25,
  Rr = 32768,
  wo = 1 << 21,
  In = 1 << 22,
  Dr = 1 << 23,
  Ir = Symbol("$state"),
  Ds = Symbol("legacy props"),
  Wi = Symbol(""),
  Is = Symbol("proxy path"),
  ba = new (class extends Error {
    name = "StaleReactionError";
    message =
      "The reaction that called `getAbortSignal()` was re-run or destroyed";
  })();
function Zi(r) {
  if (ye) {
    const e = new Error(`lifecycle_outside_component
\`${r}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Yi() {
  if (ye) {
    const r = new Error(
      "async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan",
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ts() {
  if (ye) {
    const r = new Error(
      "bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value",
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
function Xi() {
  if (ye) {
    const r = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/derived_references_self");
}
function Ji(r) {
  if (ye) {
    const e = new Error(`effect_in_teardown
\`${r}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Qi() {
  if (ye) {
    const r = new Error(
      "effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived",
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function $i(r) {
  if (ye) {
    const e = new Error(`effect_orphan
\`${r}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/effect_orphan");
}
function el() {
  if (ye) {
    const r = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function tl() {
  if (ye) {
    const r = new Error(
      "invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet",
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/invalid_snippet");
}
function rl(r) {
  if (ye) {
    const e = new Error(`props_invalid_value
Cannot do \`bind:${r}={undefined}\` when \`${r}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/props_invalid_value");
}
function al(r) {
  if (ye) {
    const e = new Error(`props_rest_readonly
Rest element properties of \`$props()\` such as \`${r}\` are readonly
https://svelte.dev/e/props_rest_readonly`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/props_rest_readonly");
}
function nl(r) {
  if (ye) {
    const e = new Error(`rune_outside_svelte
The \`${r}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function ol() {
  if (ye) {
    const r = new Error(
      "state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed",
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function sl() {
  if (ye) {
    const r = new Error(
      "state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed",
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function il() {
  if (ye) {
    const r = new Error(
      "state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation",
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ll() {
  if (ye) {
    const r = new Error(
      "svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror",
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ul = 1,
  cl = 2,
  Ns = 4,
  dl = 8,
  fl = 16,
  vl = 1,
  gl = 2,
  pl = 4,
  hl = 8,
  bl = 16,
  ml = 1,
  _l = 2,
  xl = 4,
  wl = 1,
  yl = 2,
  gt = Symbol(),
  kl = Symbol("filename"),
  Cl = "http://www.w3.org/1999/xhtml",
  Sl = "@attach";
var Bo = "font-weight: bold",
  Ro = "font-weight: normal";
function Pl() {
  ye
    ? console.warn(
        "%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value",
        Bo,
        Ro,
      )
    : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function co(r) {
  ye
    ? console.warn(
        `%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${r}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`,
        Bo,
        Ro,
      )
    : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
function El() {
  ye
    ? console.warn(
        "%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop",
        Bo,
        Ro,
      )
    : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Os(r) {
  return r === this.v;
}
function Bs(r, e) {
  return r != r
    ? e == e
    : r !== e || (r !== null && typeof r == "object") || typeof r == "function";
}
function Rs(r) {
  return !Bs(r, this.v);
}
let sn = !1,
  zl = !1;
function Al() {
  sn = !0;
}
function sr(r, e) {
  return ((r.label = e), js(r.v, e), r);
}
function js(r, e) {
  return (r?.[Is]?.(e), r);
}
function Fl(r) {
  const e = new Error(),
    a = Tl();
  return a.length === 0
    ? null
    : (a.unshift(`
`),
      Or(e, "stack", {
        value: a.join(`
`),
      }),
      Or(e, "name", { value: r }),
      e);
}
function Tl() {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 1 / 0;
  const e = new Error().stack;
  if (((Error.stackTraceLimit = r), !e)) return [];
  const a = e.split(`
`),
    n = [];
  for (let o = 0; o < a.length; o++) {
    const s = a[o],
      i = s.replaceAll("\\", "/");
    if (s.trim() !== "Error") {
      if (s.includes("validate_each_keys")) return [];
      i.includes("svelte/src/internal") ||
        i.includes("node_modules/.vite") ||
        n.push(s);
    }
  }
  return n;
}
let st = null;
function xa(r) {
  st = r;
}
let wa = null;
function En(r) {
  wa = r;
}
let ln = null;
function rs(r) {
  ln = r;
}
function Gt(r) {
  return Vs("getContext").get(r);
}
function Ll(r, e) {
  return (Vs("setContext").set(r, e), e);
}
function Be(r, e = !1, a) {
  ((st = {
    p: st,
    i: !1,
    c: null,
    e: null,
    s: r,
    x: null,
    l: sn && !e ? { s: null, u: null, $: [] } : null,
  }),
    ye && ((st.function = a), (ln = a)));
}
function Re(r) {
  var e = st,
    a = e.e;
  if (a !== null) {
    e.e = null;
    for (var n of a) ai(n);
  }
  return ((e.i = !0), (st = e.p), ye && (ln = st?.function ?? null), {});
}
function Ea() {
  return !sn || (st !== null && st.l === null);
}
function Vs(r) {
  return (st === null && Zi(r), (st.c ??= new Map(Ml(st) || void 0)));
}
function Ml(r) {
  let e = r.p;
  for (; e !== null; ) {
    const a = e.c;
    if (a !== null) return a;
    e = e.p;
  }
  return null;
}
let Yr = [];
function qs() {
  var r = Yr;
  ((Yr = []), Ki(r));
}
function dr(r) {
  if (Yr.length === 0 && !$a) {
    var e = Yr;
    queueMicrotask(() => {
      e === Yr && qs();
    });
  }
  Yr.push(r);
}
function Dl() {
  for (; Yr.length > 0; ) qs();
}
const yo = new WeakMap();
function Us(r) {
  var e = Ve;
  if (e === null) return ((Ue.f |= Dr), r);
  if (
    (ye && r instanceof Error && !yo.has(r) && yo.set(r, Il(r, e)),
    (e.f & Dn) === 0)
  ) {
    if ((e.f & Mn) === 0)
      throw (ye && !e.parent && r instanceof Error && Hs(r), r);
    e.b.error(r);
  } else ya(r, e);
}
function ya(r, e) {
  for (; e !== null; ) {
    if ((e.f & Mn) !== 0)
      try {
        e.b.error(r);
        return;
      } catch (a) {
        r = a;
      }
    e = e.parent;
  }
  throw (ye && r instanceof Error && Hs(r), r);
}
function Il(r, e) {
  const a = xr(r, "message");
  if (!(a && !a.configurable)) {
    for (
      var n = Uo ? "  " : "	",
        o = `
${n}in ${e.fn?.name || "<unknown>"}`,
        s = e.ctx;
      s !== null;
    )
      ((o += `
${n}in ${s.function?.[kl].split("/").pop()}`),
        (s = s.p));
    return {
      message:
        r.message +
        `
${o}
`,
      stack: r.stack
        ?.split(
          `
`,
        )
        .filter((i) => !i.includes("svelte/src/internal")).join(`
`),
    };
  }
}
function Hs(r) {
  const e = yo.get(r);
  e &&
    (Or(r, "message", { value: e.message }),
    Or(r, "stack", { value: e.stack }));
}
const yn = new Set();
let Ge = null,
  Sn = null,
  Ht = null,
  Ut = [],
  Nn = null,
  ko = !1,
  $a = !1;
class ir {
  committed = !1;
  current = new Map();
  previous = new Map();
  #e = new Set();
  #t = new Set();
  #a = 0;
  #r = 0;
  #l = null;
  #o = new Set();
  #n = new Set();
  skipped_effects = new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#r > 0;
  }
  process(e) {
    ((Ut = []), (Sn = null), this.apply());
    var a = { parent: null, effect: null, effects: [], render_effects: [] };
    for (const n of e) this.#s(n, a);
    (this.is_fork || this.#c(),
      this.is_deferred()
        ? (this.#i(a.effects), this.#i(a.render_effects))
        : ((Sn = this),
          (Ge = null),
          as(a.render_effects),
          as(a.effects),
          (Sn = null),
          this.#l?.resolve()),
      (Ht = null));
  }
  #s(e, a) {
    e.f ^= Ct;
    for (var n = e.first; n !== null; ) {
      var o = n.f,
        s = (o & (Cr | ta)) !== 0,
        i = s && (o & Ct) !== 0,
        l = i || (o & Rt) !== 0 || this.skipped_effects.has(n);
      if (
        ((n.f & Mn) !== 0 &&
          n.b?.is_pending() &&
          (a = { parent: a, effect: n, effects: [], render_effects: [] }),
        !l && n.fn !== null)
      ) {
        s
          ? (n.f ^= Ct)
          : (o & No) !== 0
            ? a.effects.push(n)
            : vn(n) && ((n.f & fr) !== 0 && this.#o.add(n), nn(n));
        var u = n.first;
        if (u !== null) {
          n = u;
          continue;
        }
      }
      var f = n.parent;
      for (n = n.next; n === null && f !== null; )
        (f === a.effect &&
          (this.#i(a.effects), this.#i(a.render_effects), (a = a.parent)),
          (n = f.next),
          (f = f.parent));
    }
  }
  #i(e) {
    for (const a of e)
      ((a.f & Mt) !== 0 ? this.#o.add(a) : (a.f & cr) !== 0 && this.#n.add(a),
        this.#u(a.deps),
        St(a, Ct));
  }
  #u(e) {
    if (e !== null)
      for (const a of e)
        (a.f & ht) === 0 || (a.f & Rr) === 0 || ((a.f ^= Rr), this.#u(a.deps));
  }
  capture(e, a) {
    (this.previous.has(e) || this.previous.set(e, a),
      (e.f & Dr) === 0 && (this.current.set(e, e.v), Ht?.set(e, e.v)));
  }
  activate() {
    ((Ge = this), this.apply());
  }
  deactivate() {
    Ge === this && ((Ge = null), (Ht = null));
  }
  flush() {
    if ((this.activate(), Ut.length > 0)) {
      if ((Ks(), Ge !== null && Ge !== this)) return;
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
    if (yn.size > 1) {
      this.previous.clear();
      var e = Ht,
        a = !0,
        n = { parent: null, effect: null, effects: [], render_effects: [] };
      for (const s of yn) {
        if (s === this) {
          a = !1;
          continue;
        }
        const i = [];
        for (const [u, f] of this.current) {
          if (s.current.has(u))
            if (a && f !== s.current.get(u)) s.current.set(u, f);
            else continue;
          i.push(u);
        }
        if (i.length === 0) continue;
        const l = [...s.current.keys()].filter((u) => !this.current.has(u));
        if (l.length > 0) {
          var o = Ut;
          Ut = [];
          const u = new Set(),
            f = new Map();
          for (const m of i) Gs(m, l, u, f);
          if (Ut.length > 0) {
            ((Ge = s), s.apply());
            for (const m of Ut) s.#s(m, n);
            s.deactivate();
          }
          Ut = o;
        }
      }
      ((Ge = null), (Ht = e));
    }
    ((this.committed = !0), yn.delete(this));
  }
  increment(e) {
    ((this.#a += 1), e && (this.#r += 1));
  }
  decrement(e) {
    ((this.#a -= 1), e && (this.#r -= 1), this.revive());
  }
  revive() {
    for (const e of this.#o) (this.#n.delete(e), St(e, Mt), $r(e));
    for (const e of this.#n) (St(e, cr), $r(e));
    this.flush();
  }
  oncommit(e) {
    this.#e.add(e);
  }
  ondiscard(e) {
    this.#t.add(e);
  }
  settled() {
    return (this.#l ??= Ts()).promise;
  }
  static ensure() {
    if (Ge === null) {
      const e = (Ge = new ir());
      (yn.add(Ge),
        $a ||
          ir.enqueue(() => {
            Ge === e && e.flush();
          }));
    }
    return Ge;
  }
  static enqueue(e) {
    dr(e);
  }
  apply() {}
}
function Nl(r) {
  var e = $a;
  $a = !0;
  try {
    for (var a; ; ) {
      if ((Dl(), Ut.length === 0 && (Ge?.flush(), Ut.length === 0)))
        return ((Nn = null), a);
      Ks();
    }
  } finally {
    $a = e;
  }
}
function Ks() {
  var r = Jr;
  ko = !0;
  var e = ye ? new Set() : null;
  try {
    var a = 0;
    for (An(!0); Ut.length > 0; ) {
      var n = ir.ensure();
      if (a++ > 1e3) {
        if (ye) {
          var o = new Map();
          for (const i of n.current.keys())
            for (const [l, u] of i.updated ?? []) {
              var s = o.get(l);
              (s || ((s = { error: u.error, count: 0 }), o.set(l, s)),
                (s.count += u.count));
            }
          for (const i of o.values()) i.error && console.error(i.error);
        }
        Ol();
      }
      if ((n.process(Ut), Nr.clear(), ye))
        for (const i of n.current.keys()) e.add(i);
    }
  } finally {
    if (((ko = !1), An(r), (Nn = null), ye))
      for (const i of e) i.updated = null;
  }
}
function Ol() {
  try {
    el();
  } catch (r) {
    (ye && Or(r, "stack", { value: "" }), ya(r, Nn));
  }
}
let br = null;
function as(r) {
  var e = r.length;
  if (e !== 0) {
    for (var a = 0; a < e; ) {
      var n = r[a++];
      if (
        (n.f & (wr | Rt)) === 0 &&
        vn(n) &&
        ((br = new Set()),
        nn(n),
        n.deps === null &&
          n.first === null &&
          n.nodes === null &&
          (n.teardown === null && n.ac === null ? li(n) : (n.fn = null)),
        br?.size > 0)
      ) {
        Nr.clear();
        for (const o of br) {
          if ((o.f & (wr | Rt)) !== 0) continue;
          const s = [o];
          let i = o.parent;
          for (; i !== null; )
            (br.has(i) && (br.delete(i), s.push(i)), (i = i.parent));
          for (let l = s.length - 1; l >= 0; l--) {
            const u = s[l];
            (u.f & (wr | Rt)) === 0 && nn(u);
          }
        }
        br.clear();
      }
    }
    br = null;
  }
}
function Gs(r, e, a, n) {
  if (!a.has(r) && (a.add(r), r.reactions !== null))
    for (const o of r.reactions) {
      const s = o.f;
      (s & ht) !== 0
        ? Gs(o, e, a, n)
        : (s & (In | fr)) !== 0 &&
          (s & Mt) === 0 &&
          Ws(o, e, n) &&
          (St(o, Mt), $r(o));
    }
}
function Ws(r, e, a) {
  const n = a.get(r);
  if (n !== void 0) return n;
  if (r.deps !== null)
    for (const o of r.deps) {
      if (e.includes(o)) return !0;
      if ((o.f & ht) !== 0 && Ws(o, e, a)) return (a.set(o, !0), !0);
    }
  return (a.set(r, !1), !1);
}
function $r(r) {
  for (var e = (Nn = r); e.parent !== null; ) {
    e = e.parent;
    var a = e.f;
    if (ko && e === Ve && (a & fr) !== 0 && (a & Ms) === 0) return;
    if ((a & (ta | Cr)) !== 0) {
      if ((a & Ct) === 0) return;
      e.f ^= Ct;
    }
  }
  Ut.push(e);
}
function Bl(r) {
  let e = 0,
    a = ea(0),
    n;
  return (
    ye && sr(a, "createSubscriber version"),
    () => {
      rn() &&
        (t(a),
        dn(
          () => (
            e === 0 && (n = aa(() => r(() => en(a)))),
            (e += 1),
            () => {
              dr(() => {
                ((e -= 1), e === 0 && (n?.(), (n = void 0), en(a)));
              });
            }
          ),
        ));
    }
  );
}
var Rl = Br | Pa | Mn;
function jl(r, e, a) {
  new Vl(r, e, a);
}
class Vl {
  parent;
  #e = !1;
  #t;
  #a = null;
  #r;
  #l;
  #o;
  #n = null;
  #s = null;
  #i = null;
  #u = null;
  #c = null;
  #d = 0;
  #v = 0;
  #g = !1;
  #f = null;
  #_ = Bl(
    () => (
      (this.#f = ea(this.#d)),
      ye && sr(this.#f, "$effect.pending()"),
      () => {
        this.#f = null;
      }
    ),
  );
  constructor(e, a, n) {
    ((this.#t = e),
      (this.#r = a),
      (this.#l = n),
      (this.parent = Ve.b),
      (this.#e = !!this.#r.pending),
      (this.#o = fn(() => {
        Ve.b = this;
        {
          var o = this.#b();
          try {
            this.#n = Tt(() => n(o));
          } catch (s) {
            this.error(s);
          }
          this.#v > 0 ? this.#h() : (this.#e = !1);
        }
        return () => {
          this.#c?.remove();
        };
      }, Rl)));
  }
  #x() {
    try {
      this.#n = Tt(() => this.#l(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#e = !1;
  }
  #w() {
    const e = this.#r.pending;
    e &&
      ((this.#s = Tt(() => e(this.#t))),
      ir.enqueue(() => {
        var a = this.#b();
        ((this.#n = this.#p(() => (ir.ensure(), Tt(() => this.#l(a))))),
          this.#v > 0
            ? this.#h()
            : (Xr(this.#s, () => {
                this.#s = null;
              }),
              (this.#e = !1)));
      }));
  }
  #b() {
    var e = this.#t;
    return (
      this.#e && ((this.#c = yr()), this.#t.before(this.#c), (e = this.#c)),
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
      o = st;
    (Qt(this.#o), Lt(this.#o), xa(this.#o.ctx));
    try {
      return e();
    } catch (s) {
      return (Us(s), null);
    } finally {
      (Qt(a), Lt(n), xa(o));
    }
  }
  #h() {
    const e = this.#r.pending;
    (this.#n !== null &&
      ((this.#u = document.createDocumentFragment()),
      this.#u.append(this.#c),
      di(this.#n, this.#u)),
      this.#s === null && (this.#s = Tt(() => e(this.#t))));
  }
  #m(e) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#m(e);
      return;
    }
    ((this.#v += e),
      this.#v === 0 &&
        ((this.#e = !1),
        this.#s &&
          Xr(this.#s, () => {
            this.#s = null;
          }),
        this.#u && (this.#t.before(this.#u), (this.#u = null))));
  }
  update_pending_count(e) {
    (this.#m(e), (this.#d += e), this.#f && Ca(this.#f, this.#d));
  }
  get_effect_pending() {
    return (this.#_(), t(this.#f));
  }
  error(e) {
    var a = this.#r.onerror;
    let n = this.#r.failed;
    if (this.#g || (!a && !n)) throw e;
    (this.#n && (pt(this.#n), (this.#n = null)),
      this.#s && (pt(this.#s), (this.#s = null)),
      this.#i && (pt(this.#i), (this.#i = null)));
    var o = !1,
      s = !1;
    const i = () => {
      if (o) {
        El();
        return;
      }
      ((o = !0),
        s && ll(),
        ir.ensure(),
        (this.#d = 0),
        this.#i !== null &&
          Xr(this.#i, () => {
            this.#i = null;
          }),
        (this.#e = this.has_pending_snippet()),
        (this.#n = this.#p(() => ((this.#g = !1), Tt(() => this.#l(this.#t))))),
        this.#v > 0 ? this.#h() : (this.#e = !1));
    };
    var l = Ue;
    try {
      (Lt(null), (s = !0), a?.(e, i), (s = !1));
    } catch (u) {
      ya(u, this.#o && this.#o.parent);
    } finally {
      Lt(l);
    }
    n &&
      dr(() => {
        this.#i = this.#p(() => {
          (ir.ensure(), (this.#g = !0));
          try {
            return Tt(() => {
              n(
                this.#t,
                () => e,
                () => i,
              );
            });
          } catch (u) {
            return (ya(u, this.#o.parent), null);
          } finally {
            this.#g = !1;
          }
        });
      });
  }
}
function Zs(r, e, a, n) {
  const o = Ea() ? On : jo;
  if (a.length === 0 && r.length === 0) {
    n(e.map(o));
    return;
  }
  var s = Ge,
    i = Ve,
    l = ql();
  function u() {
    Promise.all(a.map((f) => Hl(f)))
      .then((f) => {
        l();
        try {
          n([...e.map(o), ...f]);
        } catch (m) {
          (i.f & wr) === 0 && ya(m, i);
        }
        (s?.deactivate(), zn());
      })
      .catch((f) => {
        ya(f, i);
      });
  }
  r.length > 0
    ? Promise.all(r).then(() => {
        l();
        try {
          return u();
        } finally {
          (s?.deactivate(), zn());
        }
      })
    : u();
}
function ql() {
  var r = Ve,
    e = Ue,
    a = st,
    n = Ge;
  if (ye) var o = wa;
  return function (i = !0) {
    (Qt(r), Lt(e), xa(a), i && n?.activate(), ye && En(o));
  };
}
function zn() {
  (Qt(null), Lt(null), xa(null), ye && En(null));
}
const Ul = new Set();
function On(r) {
  var e = ht | Mt,
    a = Ue !== null && (Ue.f & ht) !== 0 ? Ue : null;
  return (
    Ve !== null && (Ve.f |= Pa),
    {
      ctx: st,
      deps: null,
      effects: null,
      equals: Os,
      f: e,
      fn: r,
      reactions: null,
      rv: 0,
      v: gt,
      wv: 0,
      parent: a ?? Ve,
      ac: null,
    }
  );
}
function Hl(r, e) {
  let a = Ve;
  a === null && Yi();
  var n = a.b,
    o = void 0,
    s = ea(gt),
    i = !Ue,
    l = new Map();
  return (
    nu(() => {
      var u = Ts();
      o = u.promise;
      try {
        Promise.resolve(r())
          .then(u.resolve, u.reject)
          .then(() => {
            (f === Ge && f.committed && f.deactivate(), zn());
          });
      } catch (h) {
        (u.reject(h), zn());
      }
      var f = Ge;
      if (i) {
        var m = !n.is_pending();
        (n.update_pending_count(1),
          f.increment(m),
          l.get(f)?.reject(ba),
          l.delete(f),
          l.set(f, u));
      }
      const C = (h, w = void 0) => {
        if ((f.activate(), w)) w !== ba && ((s.f |= Dr), Ca(s, w));
        else {
          ((s.f & Dr) !== 0 && (s.f ^= Dr), Ca(s, h));
          for (const [y, k] of l) {
            if ((l.delete(y), y === f)) break;
            k.reject(ba);
          }
        }
        i && (n.update_pending_count(-1), f.decrement(m));
      };
      u.promise.then(C, (h) => C(null, h || "unknown"));
    }),
    cn(() => {
      for (const u of l.values()) u.reject(ba);
    }),
    ye && (s.f |= In),
    new Promise((u) => {
      function f(m) {
        function C() {
          m === o ? u(s) : f(o);
        }
        m.then(C, C);
      }
      f(o);
    })
  );
}
function g(r) {
  const e = On(r);
  return (fi(e), e);
}
function jo(r) {
  const e = On(r);
  return ((e.equals = Rs), e);
}
function Co(r) {
  var e = r.effects;
  if (e !== null) {
    r.effects = null;
    for (var a = 0; a < e.length; a += 1) pt(e[a]);
  }
}
let fo = [];
function Kl(r) {
  for (var e = r.parent; e !== null; ) {
    if ((e.f & ht) === 0) return (e.f & wr) === 0 ? e : null;
    e = e.parent;
  }
  return null;
}
function Vo(r) {
  var e,
    a = Ve;
  if ((Qt(Kl(r)), ye)) {
    let n = ka;
    ns(new Set());
    try {
      (fo.includes(r) && Xi(), fo.push(r), (r.f &= ~Rr), Co(r), (e = Po(r)));
    } finally {
      (Qt(a), ns(n), fo.pop());
    }
  } else
    try {
      ((r.f &= ~Rr), Co(r), (e = Po(r)));
    } finally {
      Qt(a);
    }
  return e;
}
function Ys(r) {
  var e = Vo(r);
  if ((r.equals(e) || (Ge?.is_fork || (r.v = e), (r.wv = gi())), !ra))
    if (Ht !== null) (rn() || Ge?.is_fork) && Ht.set(r, e);
    else {
      var a = (r.f & $t) === 0 ? cr : Ct;
      St(r, a);
    }
}
let ka = new Set();
const Nr = new Map();
function ns(r) {
  ka = r;
}
let qo = !1;
function Gl() {
  qo = !0;
}
function ea(r, e) {
  var a = { f: 0, v: r, reactions: null, equals: Os, rv: 0, wv: 0 };
  return a;
}
function fe(r, e) {
  const a = ea(r);
  return (fi(a), a);
}
function Xs(r, e = !1, a = !0) {
  const n = ea(r);
  return (
    e || (n.equals = Rs),
    sn && a && st !== null && st.l !== null && (st.l.s ??= []).push(n),
    n
  );
}
function A(r, e, a = !1) {
  Ue !== null &&
    (!ur || (Ue.f & Pn) !== 0) &&
    Ea() &&
    (Ue.f & (ht | fr | In | Pn)) !== 0 &&
    !kr?.includes(r) &&
    il();
  let n = a ? et(e) : e;
  return (ye && js(n, r.label), Ca(r, n));
}
function Ca(r, e) {
  if (!r.equals(e)) {
    var a = r.v;
    (ra ? Nr.set(r, e) : Nr.set(r, a), (r.v = e));
    var n = ir.ensure();
    if ((n.capture(r, a), ye)) {
      if (Ve !== null) {
        r.updated ??= new Map();
        const o = (r.updated.get("")?.count ?? 0) + 1;
        if ((r.updated.set("", { error: null, count: o }), o > 5)) {
          const s = Fl("updated at");
          if (s !== null) {
            let i = r.updated.get(s.stack);
            (i || ((i = { error: s, count: 0 }), r.updated.set(s.stack, i)),
              i.count++);
          }
        }
      }
      Ve !== null && (r.set_during_effect = !0);
    }
    ((r.f & ht) !== 0 &&
      ((r.f & Mt) !== 0 && Vo(r), St(r, (r.f & $t) !== 0 ? Ct : cr)),
      (r.wv = gi()),
      Qs(r, Mt),
      Ea() &&
        Ve !== null &&
        (Ve.f & Ct) !== 0 &&
        (Ve.f & (Cr | ta)) === 0 &&
        (qt === null ? su([r]) : qt.push(r)),
      !n.is_fork && ka.size > 0 && !qo && Js());
  }
  return e;
}
function Js() {
  qo = !1;
  var r = Jr;
  An(!0);
  const e = Array.from(ka);
  try {
    for (const a of e) ((a.f & Ct) !== 0 && St(a, cr), vn(a) && nn(a));
  } finally {
    An(r);
  }
  ka.clear();
}
function en(r) {
  A(r, r.v + 1);
}
function Qs(r, e) {
  var a = r.reactions;
  if (a !== null)
    for (var n = Ea(), o = a.length, s = 0; s < o; s++) {
      var i = a[s],
        l = i.f;
      if (!(!n && i === Ve)) {
        if (ye && (l & Pn) !== 0) {
          ka.add(i);
          continue;
        }
        var u = (l & Mt) === 0;
        if ((u && St(i, e), (l & ht) !== 0)) {
          var f = i;
          (Ht?.delete(f), (l & Rr) === 0 && (l & $t && (i.f |= Rr), Qs(f, cr)));
        } else u && ((l & fr) !== 0 && br !== null && br.add(i), $r(i));
      }
    }
}
const Wl = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function et(r) {
  if (typeof r != "object" || r === null || Ir in r) return r;
  const e = Fs(r);
  if (e !== Ui && e !== Hi) return r;
  var a = new Map(),
    n = Io(r),
    o = fe(0),
    s = Qr,
    i = (m) => {
      if (Qr === s) return m();
      var C = Ue,
        h = Qr;
      (Lt(null), is(s));
      var w = m();
      return (Lt(C), is(h), w);
    };
  n && (a.set("length", fe(r.length)), ye && (r = Yl(r)));
  var l = "";
  let u = !1;
  function f(m) {
    if (!u) {
      ((u = !0), (l = m), sr(o, `${l} version`));
      for (const [C, h] of a) sr(h, Zr(l, C));
      u = !1;
    }
  }
  return new Proxy(r, {
    defineProperty(m, C, h) {
      (!("value" in h) ||
        h.configurable === !1 ||
        h.enumerable === !1 ||
        h.writable === !1) &&
        ol();
      var w = a.get(C);
      return (
        w === void 0
          ? (w = i(() => {
              var y = fe(h.value);
              return (
                a.set(C, y),
                ye && typeof C == "string" && sr(y, Zr(l, C)),
                y
              );
            }))
          : A(w, h.value, !0),
        !0
      );
    },
    deleteProperty(m, C) {
      var h = a.get(C);
      if (h === void 0) {
        if (C in m) {
          const w = i(() => fe(gt));
          (a.set(C, w), en(o), ye && sr(w, Zr(l, C)));
        }
      } else (A(h, gt), en(o));
      return !0;
    },
    get(m, C, h) {
      if (C === Ir) return r;
      if (ye && C === Is) return f;
      var w = a.get(C),
        y = C in m;
      if (
        (w === void 0 &&
          (!y || xr(m, C)?.writable) &&
          ((w = i(() => {
            var v = et(y ? m[C] : gt),
              d = fe(v);
            return (ye && sr(d, Zr(l, C)), d);
          })),
          a.set(C, w)),
        w !== void 0)
      ) {
        var k = t(w);
        return k === gt ? void 0 : k;
      }
      return Reflect.get(m, C, h);
    },
    getOwnPropertyDescriptor(m, C) {
      var h = Reflect.getOwnPropertyDescriptor(m, C);
      if (h && "value" in h) {
        var w = a.get(C);
        w && (h.value = t(w));
      } else if (h === void 0) {
        var y = a.get(C),
          k = y?.v;
        if (y !== void 0 && k !== gt)
          return { enumerable: !0, configurable: !0, value: k, writable: !0 };
      }
      return h;
    },
    has(m, C) {
      if (C === Ir) return !0;
      var h = a.get(C),
        w = (h !== void 0 && h.v !== gt) || Reflect.has(m, C);
      if (h !== void 0 || (Ve !== null && (!w || xr(m, C)?.writable))) {
        h === void 0 &&
          ((h = i(() => {
            var k = w ? et(m[C]) : gt,
              v = fe(k);
            return (ye && sr(v, Zr(l, C)), v);
          })),
          a.set(C, h));
        var y = t(h);
        if (y === gt) return !1;
      }
      return w;
    },
    set(m, C, h, w) {
      var y = a.get(C),
        k = C in m;
      if (n && C === "length")
        for (var v = h; v < y.v; v += 1) {
          var d = a.get(v + "");
          d !== void 0
            ? A(d, gt)
            : v in m &&
              ((d = i(() => fe(gt))), a.set(v + "", d), ye && sr(d, Zr(l, v)));
        }
      if (y === void 0)
        (!k || xr(m, C)?.writable) &&
          ((y = i(() => fe(void 0))),
          ye && sr(y, Zr(l, C)),
          A(y, et(h)),
          a.set(C, y));
      else {
        k = y.v !== gt;
        var b = i(() => et(h));
        A(y, b);
      }
      var c = Reflect.getOwnPropertyDescriptor(m, C);
      if ((c?.set && c.set.call(w, h), !k)) {
        if (n && typeof C == "string") {
          var _ = a.get("length"),
            P = Number(C);
          Number.isInteger(P) && P >= _.v && A(_, P + 1);
        }
        en(o);
      }
      return !0;
    },
    ownKeys(m) {
      t(o);
      var C = Reflect.ownKeys(m).filter((y) => {
        var k = a.get(y);
        return k === void 0 || k.v !== gt;
      });
      for (var [h, w] of a) w.v !== gt && !(h in m) && C.push(h);
      return C;
    },
    setPrototypeOf() {
      sl();
    },
  });
}
function Zr(r, e) {
  return typeof e == "symbol"
    ? `${r}[Symbol(${e.description ?? ""})]`
    : Wl.test(e)
      ? `${r}.${e}`
      : /^\d+$/.test(e)
        ? `${r}[${e}]`
        : `${r}['${e}']`;
}
function tn(r) {
  try {
    if (r !== null && typeof r == "object" && Ir in r) return r[Ir];
  } catch {}
  return r;
}
function $s(r, e) {
  return Object.is(tn(r), tn(e));
}
const Zl = new Set([
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
function Yl(r) {
  return new Proxy(r, {
    get(e, a, n) {
      var o = Reflect.get(e, a, n);
      return Zl.has(a)
        ? function (...s) {
            Gl();
            var i = o.apply(this, s);
            return (Js(), i);
          }
        : o;
    },
  });
}
function Xl() {
  const r = Array.prototype,
    e = Array.__svelte_cleanup;
  e && e();
  const { indexOf: a, lastIndexOf: n, includes: o } = r;
  ((r.indexOf = function (s, i) {
    const l = a.call(this, s, i);
    if (l === -1) {
      for (let u = i ?? 0; u < this.length; u += 1)
        if (tn(this[u]) === s) {
          co("array.indexOf(...)");
          break;
        }
    }
    return l;
  }),
    (r.lastIndexOf = function (s, i) {
      const l = n.call(this, s, i ?? this.length - 1);
      if (l === -1) {
        for (let u = 0; u <= (i ?? this.length - 1); u += 1)
          if (tn(this[u]) === s) {
            co("array.lastIndexOf(...)");
            break;
          }
      }
      return l;
    }),
    (r.includes = function (s, i) {
      const l = o.call(this, s, i);
      if (!l) {
        for (let u = 0; u < this.length; u += 1)
          if (tn(this[u]) === s) {
            co("array.includes(...)");
            break;
          }
      }
      return l;
    }),
    (Array.__svelte_cleanup = () => {
      ((r.indexOf = a), (r.lastIndexOf = n), (r.includes = o));
    }));
}
var So, Uo, ei, ti;
function Jl() {
  if (So === void 0) {
    ((So = window), (Uo = /Firefox/.test(navigator.userAgent)));
    var r = Element.prototype,
      e = Node.prototype,
      a = Text.prototype;
    ((ei = xr(e, "firstChild").get),
      (ti = xr(e, "nextSibling").get),
      es(r) &&
        ((r.__click = void 0),
        (r.__className = void 0),
        (r.__attributes = null),
        (r.__style = void 0),
        (r.__e = void 0)),
      es(a) && (a.__t = void 0),
      ye && ((r.__svelte_meta = null), Xl()));
  }
}
function yr(r = "") {
  return document.createTextNode(r);
}
function lr(r) {
  return ei.call(r);
}
function un(r) {
  return ti.call(r);
}
function p(r, e) {
  return lr(r);
}
function Se(r, e = !1) {
  {
    var a = lr(r);
    return a instanceof Comment && a.data === "" ? un(a) : a;
  }
}
function M(r, e = 1, a = !1) {
  let n = r;
  for (; e--; ) n = un(n);
  return n;
}
function Ql(r) {
  r.textContent = "";
}
function ri() {
  return !1;
}
function $l(r, e) {
  if (e) {
    const a = document.body;
    ((r.autofocus = !0),
      dr(() => {
        document.activeElement === a && r.focus();
      }));
  }
}
let os = !1;
function eu() {
  os ||
    ((os = !0),
    document.addEventListener(
      "reset",
      (r) => {
        Promise.resolve().then(() => {
          if (!r.defaultPrevented)
            for (const e of r.target.elements) e.__on_r?.();
        });
      },
      { capture: !0 },
    ));
}
function za(r) {
  var e = Ue,
    a = Ve;
  (Lt(null), Qt(null));
  try {
    return r();
  } finally {
    (Lt(e), Qt(a));
  }
}
function Ho(r, e, a, n = a) {
  r.addEventListener(e, () => za(a));
  const o = r.__on_r;
  (o
    ? (r.__on_r = () => {
        (o(), n(!0));
      })
    : (r.__on_r = () => n(!0)),
    eu());
}
function tu(r) {
  (Ve === null && (Ue === null && $i(r), Qi()), ra && Ji(r));
}
function ru(r, e) {
  var a = e.last;
  a === null
    ? (e.last = e.first = r)
    : ((a.next = r), (r.prev = a), (e.last = r));
}
function vr(r, e, a) {
  var n = Ve;
  if (ye) for (; n !== null && (n.f & Pn) !== 0; ) n = n.parent;
  n !== null && (n.f & Rt) !== 0 && (r |= Rt);
  var o = {
    ctx: st,
    deps: null,
    nodes: null,
    f: r | Mt | $t,
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
  if ((ye && (o.component_function = ln), a))
    try {
      (nn(o), (o.f |= Dn));
    } catch (l) {
      throw (pt(o), l);
    }
  else e !== null && $r(o);
  var s = o;
  if (
    (a &&
      s.deps === null &&
      s.teardown === null &&
      s.nodes === null &&
      s.first === s.last &&
      (s.f & Pa) === 0 &&
      ((s = s.first),
      (r & fr) !== 0 && (r & Br) !== 0 && s !== null && (s.f |= Br)),
    s !== null &&
      ((s.parent = n),
      n !== null && ru(s, n),
      Ue !== null && (Ue.f & ht) !== 0 && (r & ta) === 0))
  ) {
    var i = Ue;
    (i.effects ??= []).push(s);
  }
  return o;
}
function rn() {
  return Ue !== null && !ur;
}
function cn(r) {
  const e = vr(Oo, null, !1);
  return (St(e, Ct), (e.teardown = r), e);
}
function Ke(r) {
  (tu("$effect"), ye && Or(r, "name", { value: "$effect" }));
  var e = Ve.f,
    a = !Ue && (e & Cr) !== 0 && (e & Dn) === 0;
  if (a) {
    var n = st;
    (n.e ??= []).push(r);
  } else return ai(r);
}
function ai(r) {
  return vr(No | Gi, r, !1);
}
function au(r) {
  ir.ensure();
  const e = vr(ta | Pa, r, !0);
  return (a = {}) =>
    new Promise((n) => {
      a.outro
        ? Xr(e, () => {
            (pt(e), n(void 0));
          })
        : (pt(e), n(void 0));
    });
}
function Bn(r) {
  return vr(No, r, !1);
}
function nu(r) {
  return vr(In | Pa, r, !0);
}
function dn(r, e = 0) {
  return vr(Oo | e, r, !0);
}
function O(r, e = [], a = [], n = []) {
  Zs(n, e, a, (o) => {
    vr(Oo, () => r(...o.map(t)), !0);
  });
}
function fn(r, e = 0) {
  var a = vr(fr | e, r, !0);
  return (ye && (a.dev_stack = wa), a);
}
function ni(r, e = 0) {
  var a = vr(Ls | e, r, !0);
  return (ye && (a.dev_stack = wa), a);
}
function Tt(r) {
  return vr(Cr | Pa, r, !0);
}
function oi(r) {
  var e = r.teardown;
  if (e !== null) {
    const a = ra,
      n = Ue;
    (ss(!0), Lt(null));
    try {
      e.call(null);
    } finally {
      (ss(a), Lt(n));
    }
  }
}
function si(r, e = !1) {
  var a = r.first;
  for (r.first = r.last = null; a !== null; ) {
    const o = a.ac;
    o !== null &&
      za(() => {
        o.abort(ba);
      });
    var n = a.next;
    ((a.f & ta) !== 0 ? (a.parent = null) : pt(a, e), (a = n));
  }
}
function ou(r) {
  for (var e = r.first; e !== null; ) {
    var a = e.next;
    ((e.f & Cr) === 0 && pt(e), (e = a));
  }
}
function pt(r, e = !0) {
  var a = !1;
  ((e || (r.f & Ms) !== 0) &&
    r.nodes !== null &&
    r.nodes.end !== null &&
    (ii(r.nodes.start, r.nodes.end), (a = !0)),
    si(r, e && !a),
    Fn(r, 0),
    St(r, wr));
  var n = r.nodes && r.nodes.t;
  if (n !== null) for (const s of n) s.stop();
  oi(r);
  var o = r.parent;
  (o !== null && o.first !== null && li(r),
    ye && (r.component_function = null),
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
function ii(r, e) {
  for (; r !== null; ) {
    var a = r === e ? null : un(r);
    (r.remove(), (r = a));
  }
}
function li(r) {
  var e = r.parent,
    a = r.prev,
    n = r.next;
  (a !== null && (a.next = n),
    n !== null && (n.prev = a),
    e !== null &&
      (e.first === r && (e.first = n), e.last === r && (e.last = a)));
}
function Xr(r, e, a = !0) {
  var n = [];
  ui(r, n, !0);
  var o = () => {
      (a && pt(r), e && e());
    },
    s = n.length;
  if (s > 0) {
    var i = () => --s || o();
    for (var l of n) l.out(i);
  } else o();
}
function ui(r, e, a) {
  if ((r.f & Rt) === 0) {
    r.f ^= Rt;
    var n = r.nodes && r.nodes.t;
    if (n !== null) for (const l of n) (l.is_global || a) && e.push(l);
    for (var o = r.first; o !== null; ) {
      var s = o.next,
        i = (o.f & Br) !== 0 || ((o.f & Cr) !== 0 && (r.f & fr) !== 0);
      (ui(o, e, i ? a : !1), (o = s));
    }
  }
}
function Ko(r) {
  ci(r, !0);
}
function ci(r, e) {
  if ((r.f & Rt) !== 0) {
    ((r.f ^= Rt), (r.f & Ct) === 0 && (St(r, Mt), $r(r)));
    for (var a = r.first; a !== null; ) {
      var n = a.next,
        o = (a.f & Br) !== 0 || (a.f & Cr) !== 0;
      (ci(a, o ? e : !1), (a = n));
    }
    var s = r.nodes && r.nodes.t;
    if (s !== null) for (const i of s) (i.is_global || e) && i.in();
  }
}
function di(r, e) {
  if (r.nodes)
    for (var a = r.nodes.start, n = r.nodes.end; a !== null; ) {
      var o = a === n ? null : un(a);
      (e.append(a), (a = o));
    }
}
let Jr = !1;
function An(r) {
  Jr = r;
}
let ra = !1;
function ss(r) {
  ra = r;
}
let Ue = null,
  ur = !1;
function Lt(r) {
  Ue = r;
}
let Ve = null;
function Qt(r) {
  Ve = r;
}
let kr = null;
function fi(r) {
  Ue !== null && (kr === null ? (kr = [r]) : kr.push(r));
}
let At = null,
  Bt = 0,
  qt = null;
function su(r) {
  qt = r;
}
let vi = 1,
  an = 0,
  Qr = an;
function is(r) {
  Qr = r;
}
function gi() {
  return ++vi;
}
function vn(r) {
  var e = r.f;
  if ((e & Mt) !== 0) return !0;
  if ((e & ht && (r.f &= ~Rr), (e & cr) !== 0)) {
    var a = r.deps;
    if (a !== null)
      for (var n = a.length, o = 0; o < n; o++) {
        var s = a[o];
        if ((vn(s) && Ys(s), s.wv > r.wv)) return !0;
      }
    (e & $t) !== 0 && Ht === null && St(r, Ct);
  }
  return !1;
}
function pi(r, e, a = !0) {
  var n = r.reactions;
  if (n !== null && !kr?.includes(r))
    for (var o = 0; o < n.length; o++) {
      var s = n[o];
      (s.f & ht) !== 0
        ? pi(s, e, !1)
        : e === s && (a ? St(s, Mt) : (s.f & Ct) !== 0 && St(s, cr), $r(s));
    }
}
function Po(r) {
  var e = At,
    a = Bt,
    n = qt,
    o = Ue,
    s = kr,
    i = st,
    l = ur,
    u = Qr,
    f = r.f;
  ((At = null),
    (Bt = 0),
    (qt = null),
    (Ue = (f & (Cr | ta)) === 0 ? r : null),
    (kr = null),
    xa(r.ctx),
    (ur = !1),
    (Qr = ++an),
    r.ac !== null &&
      (za(() => {
        r.ac.abort(ba);
      }),
      (r.ac = null)));
  try {
    r.f |= wo;
    var m = r.fn,
      C = m(),
      h = r.deps;
    if (At !== null) {
      var w;
      if ((Fn(r, Bt), h !== null && Bt > 0))
        for (h.length = Bt + At.length, w = 0; w < At.length; w++)
          h[Bt + w] = At[w];
      else r.deps = h = At;
      if (rn() && (r.f & $t) !== 0)
        for (w = Bt; w < h.length; w++) (h[w].reactions ??= []).push(r);
    } else h !== null && Bt < h.length && (Fn(r, Bt), (h.length = Bt));
    if (
      Ea() &&
      qt !== null &&
      !ur &&
      h !== null &&
      (r.f & (ht | cr | Mt)) === 0
    )
      for (w = 0; w < qt.length; w++) pi(qt[w], r);
    return (
      o !== null &&
        o !== r &&
        (an++, qt !== null && (n === null ? (n = qt) : n.push(...qt))),
      (r.f & Dr) !== 0 && (r.f ^= Dr),
      C
    );
  } catch (y) {
    return Us(y);
  } finally {
    ((r.f ^= wo),
      (At = e),
      (Bt = a),
      (qt = n),
      (Ue = o),
      (kr = s),
      xa(i),
      (ur = l),
      (Qr = u));
  }
}
function iu(r, e) {
  let a = e.reactions;
  if (a !== null) {
    var n = Vi.call(a, r);
    if (n !== -1) {
      var o = a.length - 1;
      o === 0 ? (a = e.reactions = null) : ((a[n] = a[o]), a.pop());
    }
  }
  a === null &&
    (e.f & ht) !== 0 &&
    (At === null || !At.includes(e)) &&
    (St(e, cr),
    (e.f & $t) !== 0 && ((e.f ^= $t), (e.f &= ~Rr)),
    Co(e),
    Fn(e, 0));
}
function Fn(r, e) {
  var a = r.deps;
  if (a !== null) for (var n = e; n < a.length; n++) iu(r, a[n]);
}
function nn(r) {
  var e = r.f;
  if ((e & wr) === 0) {
    St(r, Ct);
    var a = Ve,
      n = Jr;
    if (((Ve = r), (Jr = !0), ye)) {
      var o = ln;
      rs(r.component_function);
      var s = wa;
      En(r.dev_stack ?? wa);
    }
    try {
      ((e & (fr | Ls)) !== 0 ? ou(r) : si(r), oi(r));
      var i = Po(r);
      ((r.teardown = typeof i == "function" ? i : null), (r.wv = vi));
      var l;
      ye && zl && (r.f & Mt) !== 0 && r.deps;
    } finally {
      ((Jr = n), (Ve = a), ye && (rs(o), En(s)));
    }
  }
}
async function lu() {
  (await Promise.resolve(), Nl());
}
function t(r) {
  var e = r.f,
    a = (e & ht) !== 0;
  if (Ue !== null && !ur) {
    var n = Ve !== null && (Ve.f & wr) !== 0;
    if (!n && !kr?.includes(r)) {
      var o = Ue.deps;
      if ((Ue.f & wo) !== 0)
        r.rv < an &&
          ((r.rv = an),
          At === null && o !== null && o[Bt] === r
            ? Bt++
            : At === null
              ? (At = [r])
              : At.includes(r) || At.push(r));
      else {
        (Ue.deps ??= []).push(r);
        var s = r.reactions;
        s === null ? (r.reactions = [Ue]) : s.includes(Ue) || s.push(Ue);
      }
    }
  }
  if ((ye && Ul.delete(r), ra)) {
    if (Nr.has(r)) return Nr.get(r);
    if (a) {
      var i = r,
        l = i.v;
      return (
        (((i.f & Ct) === 0 && i.reactions !== null) || bi(i)) && (l = Vo(i)),
        Nr.set(i, l),
        l
      );
    }
  } else
    a &&
      (!Ht?.has(r) || (Ge?.is_fork && !rn())) &&
      ((i = r), vn(i) && Ys(i), Jr && rn() && (i.f & $t) === 0 && hi(i));
  if (Ht?.has(r)) return Ht.get(r);
  if ((r.f & Dr) !== 0) throw r.v;
  return r.v;
}
function hi(r) {
  if (r.deps !== null) {
    r.f ^= $t;
    for (const e of r.deps)
      ((e.reactions ??= []).push(r),
        (e.f & ht) !== 0 && (e.f & $t) === 0 && hi(e));
  }
}
function bi(r) {
  if (r.v === gt) return !0;
  if (r.deps === null) return !1;
  for (const e of r.deps)
    if (Nr.has(e) || ((e.f & ht) !== 0 && bi(e))) return !0;
  return !1;
}
function aa(r) {
  var e = ur;
  try {
    return ((ur = !0), r());
  } finally {
    ur = e;
  }
}
const uu = -7169;
function St(r, e) {
  r.f = (r.f & uu) | e;
}
function cu(r) {
  return (
    r.endsWith("capture") &&
    r !== "gotpointercapture" &&
    r !== "lostpointercapture"
  );
}
const du = [
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
function fu(r) {
  return du.includes(r);
}
const vu = {
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
function gu(r) {
  return ((r = r.toLowerCase()), vu[r] ?? r);
}
const pu = ["touchstart", "touchmove"];
function hu(r) {
  return pu.includes(r);
}
const mi = new Set(),
  Eo = new Set();
function _i(r, e, a, n = {}) {
  function o(s) {
    if ((n.capture || Ja.call(e, s), !s.cancelBubble))
      return za(() => a?.call(this, s));
  }
  return (
    r.startsWith("pointer") || r.startsWith("touch") || r === "wheel"
      ? dr(() => {
          e.addEventListener(r, o, n);
        })
      : e.addEventListener(r, o, n),
    o
  );
}
function kt(r, e, a, n, o) {
  var s = { capture: n, passive: o },
    i = _i(r, e, a, s);
  (e === document.body ||
    e === window ||
    e === document ||
    e instanceof HTMLMediaElement) &&
    cn(() => {
      e.removeEventListener(r, i, s);
    });
}
function ct(r) {
  for (var e = 0; e < r.length; e++) mi.add(r[e]);
  for (var a of Eo) a(r);
}
let ls = null;
function Ja(r) {
  var e = this,
    a = e.ownerDocument,
    n = r.type,
    o = r.composedPath?.() || [],
    s = o[0] || r.target;
  ls = r;
  var i = 0,
    l = ls === r && r.__root;
  if (l) {
    var u = o.indexOf(l);
    if (u !== -1 && (e === document || e === window)) {
      r.__root = e;
      return;
    }
    var f = o.indexOf(e);
    if (f === -1) return;
    u <= f && (i = u);
  }
  if (((s = o[i] || r.target), s !== e)) {
    Or(r, "currentTarget", {
      configurable: !0,
      get() {
        return s || a;
      },
    });
    var m = Ue,
      C = Ve;
    (Lt(null), Qt(null));
    try {
      for (var h, w = []; s !== null; ) {
        var y = s.assignedSlot || s.parentNode || s.host || null;
        try {
          var k = s["__" + n];
          k != null && (!s.disabled || r.target === s) && k.call(s, r);
        } catch (v) {
          h ? w.push(v) : (h = v);
        }
        if (r.cancelBubble || y === e || y === null) break;
        s = y;
      }
      if (h) {
        for (let v of w)
          queueMicrotask(() => {
            throw v;
          });
        throw h;
      }
    } finally {
      ((r.__root = e), delete r.currentTarget, Lt(m), Qt(C));
    }
  }
}
function Go(r) {
  var e = document.createElement("template");
  return ((e.innerHTML = r.replaceAll("<!>", "<!---->")), e.content);
}
function Sa(r, e) {
  var a = Ve;
  a.nodes === null && (a.nodes = { start: r, end: e, a: null, t: null });
}
function R(r, e) {
  var a = (e & wl) !== 0,
    n = (e & yl) !== 0,
    o,
    s = !r.startsWith("<!>");
  return () => {
    o === void 0 && ((o = Go(s ? r : "<!>" + r)), a || (o = lr(o)));
    var i = n || Uo ? document.importNode(o, !0) : o.cloneNode(!0);
    if (a) {
      var l = lr(i),
        u = i.lastChild;
      Sa(l, u);
    } else Sa(i, i);
    return i;
  };
}
function bu(r, e, a = "svg") {
  var n = !r.startsWith("<!>"),
    o = `<${a}>${n ? r : "<!>" + r}</${a}>`,
    s;
  return () => {
    if (!s) {
      var i = Go(o),
        l = lr(i);
      s = lr(l);
    }
    var u = s.cloneNode(!0);
    return (Sa(u, u), u);
  };
}
function Wt(r, e) {
  return bu(r, e, "svg");
}
function je(r = "") {
  {
    var e = yr(r + "");
    return (Sa(e, e), e);
  }
}
function Le() {
  var r = document.createDocumentFragment(),
    e = document.createComment(""),
    a = yr();
  return (r.append(e, a), Sa(e, a), r);
}
function x(r, e) {
  r !== null && r.before(e);
}
let zo = !0;
function J(r, e) {
  var a = e == null ? "" : typeof e == "object" ? e + "" : e;
  a !== (r.__t ??= r.nodeValue) && ((r.__t = a), (r.nodeValue = a + ""));
}
function mu(r, e) {
  return _u(r, e);
}
const ga = new Map();
function _u(
  r,
  { target: e, anchor: a, props: n = {}, events: o, context: s, intro: i = !0 },
) {
  Jl();
  var l = new Set(),
    u = (C) => {
      for (var h = 0; h < C.length; h++) {
        var w = C[h];
        if (!l.has(w)) {
          l.add(w);
          var y = hu(w);
          e.addEventListener(w, Ja, { passive: y });
          var k = ga.get(w);
          k === void 0
            ? (document.addEventListener(w, Ja, { passive: y }), ga.set(w, 1))
            : ga.set(w, k + 1);
        }
      }
    };
  (u(Ln(mi)), Eo.add(u));
  var f = void 0,
    m = au(() => {
      var C = a ?? e.appendChild(yr());
      return (
        jl(C, { pending: () => {} }, (h) => {
          if (s) {
            Be({});
            var w = st;
            w.c = s;
          }
          (o && (n.$$events = o),
            (zo = i),
            (f = r(h, n) || {}),
            (zo = !0),
            s && Re());
        }),
        () => {
          for (var h of l) {
            e.removeEventListener(h, Ja);
            var w = ga.get(h);
            --w === 0
              ? (document.removeEventListener(h, Ja), ga.delete(h))
              : ga.set(h, w);
          }
          (Eo.delete(u), C !== a && C.parentNode?.removeChild(C));
        }
      );
    });
  return (xu.set(f, m), f);
}
let xu = new WeakMap();
class Wo {
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
    var e = Ge;
    if (this.#e.has(e)) {
      var a = this.#e.get(e),
        n = this.#t.get(a);
      if (n) (Ko(n), this.#r.delete(a));
      else {
        var o = this.#a.get(a);
        o &&
          (this.#t.set(a, o.effect),
          this.#a.delete(a),
          o.fragment.lastChild.remove(),
          this.anchor.before(o.fragment),
          (n = o.effect));
      }
      for (const [s, i] of this.#e) {
        if ((this.#e.delete(s), s === e)) break;
        const l = this.#a.get(i);
        l && (pt(l.effect), this.#a.delete(i));
      }
      for (const [s, i] of this.#t) {
        if (s === a || this.#r.has(s)) continue;
        const l = () => {
          if (Array.from(this.#e.values()).includes(s)) {
            var f = document.createDocumentFragment();
            (di(i, f),
              f.append(yr()),
              this.#a.set(s, { effect: i, fragment: f }));
          } else pt(i);
          (this.#r.delete(s), this.#t.delete(s));
        };
        this.#l || !n ? (this.#r.add(s), Xr(i, l, !1)) : l();
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
    var n = Ge,
      o = ri();
    if (a && !this.#t.has(e) && !this.#a.has(e))
      if (o) {
        var s = document.createDocumentFragment(),
          i = yr();
        (s.append(i), this.#a.set(e, { effect: Tt(() => a(i)), fragment: s }));
      } else
        this.#t.set(
          e,
          Tt(() => a(this.anchor)),
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
function W(r, e, a = !1) {
  var n = new Wo(r),
    o = a ? Br : 0;
  function s(i, l) {
    n.ensure(i, l);
  }
  fn(() => {
    var i = !1;
    (e((l, u = !0) => {
      ((i = !0), s(u, l));
    }),
      i || s(!1, null));
  }, o);
}
function wu(r, e, a) {
  var n = new Wo(r),
    o = !Ea();
  fn(() => {
    var s = e();
    (o && s !== null && typeof s == "object" && (s = {}), n.ensure(s, a));
  });
}
function yu(r, e) {
  return e;
}
function ku(r, e, a) {
  for (var n = [], o = e.length, s, i = e.length, l = 0; l < o; l++) {
    let C = e[l];
    Xr(
      C,
      () => {
        if (s) {
          if ((s.pending.delete(C), s.done.add(C), s.pending.size === 0)) {
            var h = r.outrogroups;
            (Ao(Ln(s.done)),
              h.delete(s),
              h.size === 0 && (r.outrogroups = null));
          }
        } else i -= 1;
      },
      !1,
    );
  }
  if (i === 0) {
    var u = n.length === 0 && a !== null;
    if (u) {
      var f = a,
        m = f.parentNode;
      (Ql(m), m.append(f), r.items.clear());
    }
    Ao(e, !u);
  } else
    ((s = { pending: new Set(e), done: new Set() }),
      (r.outrogroups ??= new Set()).add(s));
}
function Ao(r, e = !0) {
  for (var a = 0; a < r.length; a++) pt(r[a], e);
}
var us;
function nt(r, e, a, n, o, s = null) {
  var i = r,
    l = new Map(),
    u = (e & Ns) !== 0;
  if (u) {
    var f = r;
    i = f.appendChild(yr());
  }
  var m = null,
    C = jo(() => {
      var d = a();
      return Io(d) ? d : d == null ? [] : Ln(d);
    }),
    h,
    w = !0;
  function y() {
    ((v.fallback = m),
      Cu(v, h, i, e, n),
      m !== null &&
        (h.length === 0
          ? (m.f & _r) === 0
            ? Ko(m)
            : ((m.f ^= _r), Qa(m, null, i))
          : Xr(m, () => {
              m = null;
            })));
  }
  var k = fn(() => {
      h = t(C);
      for (
        var d = h.length, b = new Set(), c = Ge, _ = ri(), P = 0;
        P < d;
        P += 1
      ) {
        var E = h[P],
          z = n(E, P),
          T = w ? null : l.get(z);
        (T
          ? (T.v && Ca(T.v, E),
            T.i && Ca(T.i, P),
            _ && c.skipped_effects.delete(T.e))
          : ((T = Su(l, w ? i : (us ??= yr()), E, z, P, o, e, a)),
            w || (T.e.f |= _r),
            l.set(z, T)),
          b.add(z));
      }
      if (
        (d === 0 &&
          s &&
          !m &&
          (w
            ? (m = Tt(() => s(i)))
            : ((m = Tt(() => s((us ??= yr())))), (m.f |= _r))),
        !w)
      )
        if (_) {
          for (const [I, q] of l) b.has(I) || c.skipped_effects.add(q.e);
          (c.oncommit(y), c.ondiscard(() => {}));
        } else y();
      t(C);
    }),
    v = { effect: k, items: l, outrogroups: null, fallback: m };
  w = !1;
}
function Cu(r, e, a, n, o) {
  var s = (n & dl) !== 0,
    i = e.length,
    l = r.items,
    u = r.effect.first,
    f,
    m = null,
    C,
    h = [],
    w = [],
    y,
    k,
    v,
    d;
  if (s)
    for (d = 0; d < i; d += 1)
      ((y = e[d]),
        (k = o(y, d)),
        (v = l.get(k).e),
        (v.f & _r) === 0 && (v.nodes?.a?.measure(), (C ??= new Set()).add(v)));
  for (d = 0; d < i; d += 1) {
    if (((y = e[d]), (k = o(y, d)), (v = l.get(k).e), r.outrogroups !== null))
      for (const q of r.outrogroups) (q.pending.delete(v), q.done.delete(v));
    if ((v.f & _r) !== 0)
      if (((v.f ^= _r), v === u)) Qa(v, null, a);
      else {
        var b = m ? m.next : u;
        (v === r.effect.last && (r.effect.last = v.prev),
          v.prev && (v.prev.next = v.next),
          v.next && (v.next.prev = v.prev),
          Mr(r, m, v),
          Mr(r, v, b),
          Qa(v, b, a),
          (m = v),
          (h = []),
          (w = []),
          (u = m.next));
        continue;
      }
    if (
      ((v.f & Rt) !== 0 &&
        (Ko(v), s && (v.nodes?.a?.unfix(), (C ??= new Set()).delete(v))),
      v !== u)
    ) {
      if (f !== void 0 && f.has(v)) {
        if (h.length < w.length) {
          var c = w[0],
            _;
          m = c.prev;
          var P = h[0],
            E = h[h.length - 1];
          for (_ = 0; _ < h.length; _ += 1) Qa(h[_], c, a);
          for (_ = 0; _ < w.length; _ += 1) f.delete(w[_]);
          (Mr(r, P.prev, E.next),
            Mr(r, m, P),
            Mr(r, E, c),
            (u = c),
            (m = E),
            (d -= 1),
            (h = []),
            (w = []));
        } else
          (f.delete(v),
            Qa(v, u, a),
            Mr(r, v.prev, v.next),
            Mr(r, v, m === null ? r.effect.first : m.next),
            Mr(r, m, v),
            (m = v));
        continue;
      }
      for (h = [], w = []; u !== null && u !== v; )
        ((f ??= new Set()).add(u), w.push(u), (u = u.next));
      if (u === null) continue;
    }
    ((v.f & _r) === 0 && h.push(v), (m = v), (u = v.next));
  }
  if (r.outrogroups !== null) {
    for (const q of r.outrogroups)
      q.pending.size === 0 && (Ao(Ln(q.done)), r.outrogroups?.delete(q));
    r.outrogroups.size === 0 && (r.outrogroups = null);
  }
  if (u !== null || f !== void 0) {
    var z = [];
    if (f !== void 0) for (v of f) (v.f & Rt) === 0 && z.push(v);
    for (; u !== null; )
      ((u.f & Rt) === 0 && u !== r.fallback && z.push(u), (u = u.next));
    var T = z.length;
    if (T > 0) {
      var I = (n & Ns) !== 0 && i === 0 ? a : null;
      if (s) {
        for (d = 0; d < T; d += 1) z[d].nodes?.a?.measure();
        for (d = 0; d < T; d += 1) z[d].nodes?.a?.fix();
      }
      ku(r, z, I);
    }
  }
  s &&
    dr(() => {
      if (C !== void 0) for (v of C) v.nodes?.a?.apply();
    });
}
function Su(r, e, a, n, o, s, i, l) {
  var u = (i & ul) !== 0 ? ((i & fl) === 0 ? Xs(a, !1, !1) : ea(a)) : null,
    f = (i & cl) !== 0 ? ea(o) : null;
  return (
    ye &&
      u &&
      (u.trace = () => {
        l()[f?.v ?? o];
      }),
    {
      v: u,
      i: f,
      e: Tt(
        () => (
          s(e, u ?? a, f ?? o, l),
          () => {
            r.delete(n);
          }
        ),
      ),
    }
  );
}
function Qa(r, e, a) {
  if (r.nodes)
    for (
      var n = r.nodes.start,
        o = r.nodes.end,
        s = e && (e.f & _r) === 0 ? e.nodes.start : a;
      n !== null;
    ) {
      var i = un(n);
      if ((s.before(n), n === o)) return;
      n = i;
    }
}
function Mr(r, e, a) {
  (e === null ? (r.effect.first = a) : (e.next = a),
    a === null ? (r.effect.last = e) : (a.prev = e));
}
function Pu(r, e, a = !1, n = !1, o = !1) {
  var s = r,
    i = "";
  O(() => {
    var l = Ve;
    if (
      i !== (i = e() ?? "") &&
      (l.nodes !== null && (ii(l.nodes.start, l.nodes.end), (l.nodes = null)),
      i !== "")
    ) {
      var u = i + "";
      a ? (u = `<svg>${u}</svg>`) : n && (u = `<math>${u}</math>`);
      var f = Go(u);
      if (((a || n) && (f = lr(f)), Sa(lr(f), f.lastChild), a || n))
        for (; lr(f); ) s.before(lr(f));
      else s.before(f);
    }
  });
}
function Je(r, e, ...a) {
  var n = new Wo(r);
  fn(() => {
    const o = e() ?? null;
    (ye && o == null && tl(), n.ensure(o, o && ((s) => o(s, ...a))));
  }, Br);
}
const Eu = () => performance.now(),
  mr = {
    tick: (r) => requestAnimationFrame(r),
    now: () => Eu(),
    tasks: new Set(),
  };
function xi() {
  const r = mr.now();
  (mr.tasks.forEach((e) => {
    e.c(r) || (mr.tasks.delete(e), e.f());
  }),
    mr.tasks.size !== 0 && mr.tick(xi));
}
function zu(r) {
  let e;
  return (
    mr.tasks.size === 0 && mr.tick(xi),
    {
      promise: new Promise((a) => {
        mr.tasks.add((e = { c: r, f: a }));
      }),
      abort() {
        mr.tasks.delete(e);
      },
    }
  );
}
function kn(r, e) {
  za(() => {
    r.dispatchEvent(new CustomEvent(e));
  });
}
function Au(r) {
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
function cs(r) {
  const e = {},
    a = r.split(";");
  for (const n of a) {
    const [o, s] = n.split(":");
    if (!o || s === void 0) break;
    const i = Au(o.trim());
    e[i] = s.trim();
  }
  return e;
}
const Fu = (r) => r;
function ds(r, e, a, n) {
  var o = (r & ml) !== 0,
    s = (r & _l) !== 0,
    i = o && s,
    l = (r & xl) !== 0,
    u = i ? "both" : o ? "in" : "out",
    f,
    m = e.inert,
    C = e.style.overflow,
    h,
    w;
  function y() {
    return za(() => (f ??= a()(e, n?.() ?? {}, { direction: u })));
  }
  var k = {
      is_global: l,
      in() {
        if (((e.inert = m), !o)) {
          (w?.abort(), w?.reset?.());
          return;
        }
        (s || h?.abort(),
          kn(e, "introstart"),
          (h = Fo(e, y(), w, 1, () => {
            (kn(e, "introend"),
              h?.abort(),
              (h = f = void 0),
              (e.style.overflow = C));
          })));
      },
      out(c) {
        if (!s) {
          (c?.(), (f = void 0));
          return;
        }
        ((e.inert = !0),
          kn(e, "outrostart"),
          (w = Fo(e, y(), h, 0, () => {
            (kn(e, "outroend"), c?.());
          })));
      },
      stop: () => {
        (h?.abort(), w?.abort());
      },
    },
    v = Ve;
  if (((v.nodes.t ??= []).push(k), o && zo)) {
    var d = l;
    if (!d) {
      for (var b = v.parent; b && (b.f & Br) !== 0; )
        for (; (b = b.parent) && (b.f & fr) === 0; );
      d = !b || (b.f & Dn) !== 0;
    }
    d &&
      Bn(() => {
        aa(() => k.in());
      });
  }
}
function Fo(r, e, a, n, o) {
  var s = n === 1;
  if (ha(e)) {
    var i,
      l = !1;
    return (
      dr(() => {
        if (!l) {
          var v = e({ direction: s ? "in" : "out" });
          i = Fo(r, v, a, n, o);
        }
      }),
      {
        abort: () => {
          ((l = !0), i?.abort());
        },
        deactivate: () => i.deactivate(),
        reset: () => i.reset(),
        t: () => i.t(),
      }
    );
  }
  if ((a?.deactivate(), !e?.duration))
    return (o(), { abort: Q, deactivate: Q, reset: Q, t: () => n });
  const { delay: u = 0, css: f, tick: m, easing: C = Fu } = e;
  var h = [];
  if (s && a === void 0 && (m && m(0, 1), f)) {
    var w = cs(f(0, 1));
    h.push(w, w);
  }
  var y = () => 1 - n,
    k = r.animate(h, { duration: u, fill: "forwards" });
  return (
    (k.onfinish = () => {
      k.cancel();
      var v = a?.t() ?? 1 - n;
      a?.abort();
      var d = n - v,
        b = e.duration * Math.abs(d),
        c = [];
      if (b > 0) {
        var _ = !1;
        if (f)
          for (
            var P = Math.ceil(b / 16.666666666666668), E = 0;
            E <= P;
            E += 1
          ) {
            var z = v + d * C(E / P),
              T = cs(f(z, 1 - z));
            (c.push(T), (_ ||= T.overflow === "hidden"));
          }
        (_ && (r.style.overflow = "hidden"),
          (y = () => {
            var I = k.currentTime;
            return v + d * C(I / b);
          }),
          m &&
            zu(() => {
              if (k.playState !== "running") return !1;
              var I = y();
              return (m(I, 1 - I), !0);
            }));
      }
      ((k = r.animate(c, { duration: b, fill: "forwards" })),
        (k.onfinish = () => {
          ((y = () => n), m?.(n, 1 - n), o());
        }));
    }),
    {
      abort: () => {
        k && (k.cancel(), (k.effect = null), (k.onfinish = Q));
      },
      deactivate: () => {
        o = Q;
      },
      reset: () => {
        n === 0 && m?.(1, 0);
      },
      t: () => y(),
    }
  );
}
function Tu(r, e) {
  var a = void 0,
    n;
  ni(() => {
    a !== (a = e()) &&
      (n && (pt(n), (n = null)),
      a &&
        (n = Tt(() => {
          Bn(() => a(r));
        })));
  });
}
function wi(r) {
  var e,
    a,
    n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var o = r.length;
      for (e = 0; e < o; e++)
        r[e] && (a = wi(r[e])) && (n && (n += " "), (n += a));
    } else for (a in r) r[a] && (n && (n += " "), (n += a));
  return n;
}
function Lu() {
  for (var r, e, a = 0, n = "", o = arguments.length; a < o; a++)
    (r = arguments[a]) && (e = wi(r)) && (n && (n += " "), (n += e));
  return n;
}
function U(r) {
  return typeof r == "object" ? Lu(r) : (r ?? "");
}
const fs = [
  ...` 	
\r\f \v\uFEFF`,
];
function Mu(r, e, a) {
  var n = r == null ? "" : "" + r;
  if ((e && (n = n ? n + " " + e : e), a)) {
    for (var o in a)
      if (a[o]) n = n ? n + " " + o : o;
      else if (n.length)
        for (var s = o.length, i = 0; (i = n.indexOf(o, i)) >= 0; ) {
          var l = i + s;
          (i === 0 || fs.includes(n[i - 1])) &&
          (l === n.length || fs.includes(n[l]))
            ? (n = (i === 0 ? "" : n.substring(0, i)) + n.substring(l + 1))
            : (i = l);
        }
  }
  return n === "" ? null : n;
}
function vs(r, e = !1) {
  var a = e ? " !important;" : ";",
    n = "";
  for (var o in r) {
    var s = r[o];
    s != null && s !== "" && (n += " " + o + ": " + s + a);
  }
  return n;
}
function vo(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function Du(r, e) {
  if (e) {
    var a = "",
      n,
      o;
    if ((Array.isArray(e) ? ((n = e[0]), (o = e[1])) : (n = e), r)) {
      r = String(r)
        .replaceAll(/\s*\/\*.*?\*\/\s*/g, "")
        .trim();
      var s = !1,
        i = 0,
        l = !1,
        u = [];
      (n && u.push(...Object.keys(n).map(vo)),
        o && u.push(...Object.keys(o).map(vo)));
      var f = 0,
        m = -1;
      const k = r.length;
      for (var C = 0; C < k; C++) {
        var h = r[C];
        if (
          (l
            ? h === "/" && r[C - 1] === "*" && (l = !1)
            : s
              ? s === h && (s = !1)
              : h === "/" && r[C + 1] === "*"
                ? (l = !0)
                : h === '"' || h === "'"
                  ? (s = h)
                  : h === "("
                    ? i++
                    : h === ")" && i--,
          !l && s === !1 && i === 0)
        ) {
          if (h === ":" && m === -1) m = C;
          else if (h === ";" || C === k - 1) {
            if (m !== -1) {
              var w = vo(r.substring(f, m).trim());
              if (!u.includes(w)) {
                h !== ";" && C++;
                var y = r.substring(f, C).trim();
                a += " " + y + ";";
              }
            }
            ((f = C + 1), (m = -1));
          }
        }
      }
    }
    return (
      n && (a += vs(n)),
      o && (a += vs(o, !0)),
      (a = a.trim()),
      a === "" ? null : a
    );
  }
  return r == null ? null : String(r);
}
function V(r, e, a, n, o, s) {
  var i = r.__className;
  if (i !== a || i === void 0) {
    var l = Mu(a, n, s);
    (l == null
      ? r.removeAttribute("class")
      : e
        ? (r.className = l)
        : r.setAttribute("class", l),
      (r.__className = a));
  } else if (s && o !== s)
    for (var u in s) {
      var f = !!s[u];
      (o == null || f !== !!o[u]) && r.classList.toggle(u, f);
    }
  return s;
}
function go(r, e = {}, a, n) {
  for (var o in a) {
    var s = a[o];
    e[o] !== s &&
      (a[o] == null ? r.style.removeProperty(o) : r.style.setProperty(o, s, n));
  }
}
function lt(r, e, a, n) {
  var o = r.__style;
  if (o !== e) {
    var s = Du(e, n);
    (s == null ? r.removeAttribute("style") : (r.style.cssText = s),
      (r.__style = e));
  } else
    n &&
      (Array.isArray(n)
        ? (go(r, a?.[0], n[0]), go(r, a?.[1], n[1], "important"))
        : go(r, a, n));
  return n;
}
function To(r, e, a = !1) {
  if (r.multiple) {
    if (e == null) return;
    if (!Io(e)) return Pl();
    for (var n of r.options) n.selected = e.includes(gs(n));
    return;
  }
  for (n of r.options) {
    var o = gs(n);
    if ($s(o, e)) {
      n.selected = !0;
      return;
    }
  }
  (!a || e !== void 0) && (r.selectedIndex = -1);
}
function Iu(r) {
  var e = new MutationObserver(() => {
    To(r, r.__value);
  });
  (e.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"],
  }),
    cn(() => {
      e.disconnect();
    }));
}
function gs(r) {
  return "__value" in r ? r.__value : r.value;
}
const Ya = Symbol("class"),
  Xa = Symbol("style"),
  yi = Symbol("is custom element"),
  ki = Symbol("is html");
function Ci(r, e) {
  var a = Zo(r);
  a.value === (a.value = e ?? void 0) ||
    (r.value === e && (e !== 0 || r.nodeName !== "PROGRESS")) ||
    (r.value = e ?? "");
}
function Nu(r, e) {
  e
    ? r.hasAttribute("selected") || r.setAttribute("selected", "")
    : r.removeAttribute("selected");
}
function he(r, e, a, n) {
  var o = Zo(r);
  o[e] !== (o[e] = a) &&
    (e === "loading" && (r[Wi] = a),
    a == null
      ? r.removeAttribute(e)
      : typeof a != "string" && Si(r).includes(e)
        ? (r[e] = a)
        : r.setAttribute(e, a));
}
function Ou(r, e, a, n, o = !1, s = !1) {
  var i = Zo(r),
    l = i[yi],
    u = !i[ki],
    f = e || {},
    m = r.tagName === "OPTION";
  for (var C in e) C in a || (a[C] = null);
  (a.class ? (a.class = U(a.class)) : (n || a[Ya]) && (a.class = null),
    a[Xa] && (a.style ??= null));
  var h = Si(r);
  for (const _ in a) {
    let P = a[_];
    if (m && _ === "value" && P == null) {
      ((r.value = r.__value = ""), (f[_] = P));
      continue;
    }
    if (_ === "class") {
      var w = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      (V(r, w, P, n, e?.[Ya], a[Ya]), (f[_] = P), (f[Ya] = a[Ya]));
      continue;
    }
    if (_ === "style") {
      (lt(r, P, e?.[Xa], a[Xa]), (f[_] = P), (f[Xa] = a[Xa]));
      continue;
    }
    var y = f[_];
    if (!(P === y && !(P === void 0 && r.hasAttribute(_)))) {
      f[_] = P;
      var k = _[0] + _[1];
      if (k !== "$$")
        if (k === "on") {
          const E = {},
            z = "$$" + _;
          let T = _.slice(2);
          var v = fu(T);
          if ((cu(T) && ((T = T.slice(0, -7)), (E.capture = !0)), !v && y)) {
            if (P != null) continue;
            (r.removeEventListener(T, f[z], E), (f[z] = null));
          }
          if (P != null)
            if (v) ((r[`__${T}`] = P), ct([T]));
            else {
              let I = function (q) {
                f[_].call(this, q);
              };
              var c = I;
              f[z] = _i(T, r, I, E);
            }
          else v && (r[`__${T}`] = void 0);
        } else if (_ === "style") he(r, _, P);
        else if (_ === "autofocus") $l(r, !!P);
        else if (!l && (_ === "__value" || (_ === "value" && P != null)))
          r.value = r.__value = P;
        else if (_ === "selected" && m) Nu(r, P);
        else {
          var d = _;
          u || (d = gu(d));
          var b = d === "defaultValue" || d === "defaultChecked";
          if (P == null && !l && !b)
            if (((i[_] = null), d === "value" || d === "checked")) {
              let E = r;
              const z = e === void 0;
              if (d === "value") {
                let T = E.defaultValue;
                (E.removeAttribute(d),
                  (E.defaultValue = T),
                  (E.value = E.__value = z ? T : null));
              } else {
                let T = E.defaultChecked;
                (E.removeAttribute(d),
                  (E.defaultChecked = T),
                  (E.checked = z ? T : !1));
              }
            } else r.removeAttribute(_);
          else
            b || (h.includes(d) && (l || typeof P != "string"))
              ? ((r[d] = P), d in i && (i[d] = gt))
              : typeof P != "function" && he(r, d, P);
        }
    }
  }
  return f;
}
function bt(r, e, a = [], n = [], o = [], s, i = !1, l = !1) {
  Zs(o, a, n, (u) => {
    var f = void 0,
      m = {},
      C = r.nodeName === "SELECT",
      h = !1;
    if (
      (ni(() => {
        var y = e(...u.map(t)),
          k = Ou(r, f, y, s, i, l);
        h && C && "value" in y && To(r, y.value);
        for (let d of Object.getOwnPropertySymbols(m)) y[d] || pt(m[d]);
        for (let d of Object.getOwnPropertySymbols(y)) {
          var v = y[d];
          (d.description === Sl &&
            (!f || v !== f[d]) &&
            (m[d] && pt(m[d]), (m[d] = Tt(() => Tu(r, () => v)))),
            (k[d] = v));
        }
        f = k;
      }),
      C)
    ) {
      var w = r;
      Bn(() => {
        (To(w, f.value, !0), Iu(w));
      });
    }
    h = !0;
  });
}
function Zo(r) {
  return (r.__attributes ??= {
    [yi]: r.nodeName.includes("-"),
    [ki]: r.namespaceURI === Cl,
  });
}
var ps = new Map();
function Si(r) {
  var e = r.getAttribute("is") || r.nodeName,
    a = ps.get(e);
  if (a) return a;
  ps.set(e, (a = []));
  for (var n, o = r, s = Element.prototype; s !== o; ) {
    n = qi(o);
    for (var i in n) n[i].set && a.push(i);
    o = Fs(o);
  }
  return a;
}
function Bu(r, e, a = e) {
  var n = new WeakSet();
  (Ho(r, "input", async (o) => {
    ye && r.type === "checkbox" && ts();
    var s = o ? r.defaultValue : r.value;
    if (
      ((s = ho(r) ? bo(s) : s),
      a(s),
      Ge !== null && n.add(Ge),
      await lu(),
      s !== (s = e()))
    ) {
      var i = r.selectionStart,
        l = r.selectionEnd,
        u = r.value.length;
      if (((r.value = s ?? ""), l !== null)) {
        var f = r.value.length;
        i === l && l === u && f > u
          ? ((r.selectionStart = f), (r.selectionEnd = f))
          : ((r.selectionStart = i), (r.selectionEnd = Math.min(l, f)));
      }
    }
  }),
    aa(e) == null &&
      r.value &&
      (a(ho(r) ? bo(r.value) : r.value), Ge !== null && n.add(Ge)),
    dn(() => {
      ye && r.type === "checkbox" && ts();
      var o = e();
      if (r === document.activeElement) {
        var s = Sn ?? Ge;
        if (n.has(s)) return;
      }
      (ho(r) && o === bo(r.value)) ||
        (r.type === "date" && !o && !r.value) ||
        (o !== r.value && (r.value = o ?? ""));
    }));
}
const po = new Set();
function Ru(r, e, a, n, o = n) {
  var s = a.getAttribute("type") === "checkbox",
    i = r;
  if (e !== null) for (var l of e) i = i[l] ??= [];
  (i.push(a),
    Ho(
      a,
      "change",
      () => {
        var u = a.__value;
        (s && (u = Vu(i, u, a.checked)), o(u));
      },
      () => o(s ? [] : null),
    ),
    dn(() => {
      var u = n();
      s
        ? ((u = u || []), (a.checked = u.includes(a.__value)))
        : (a.checked = $s(a.__value, u));
    }),
    cn(() => {
      var u = i.indexOf(a);
      u !== -1 && i.splice(u, 1);
    }),
    po.has(i) ||
      (po.add(i),
      dr(() => {
        (i.sort((u, f) => (u.compareDocumentPosition(f) === 4 ? -1 : 1)),
          po.delete(i));
      })),
    dr(() => {}));
}
function ju(r, e, a = e) {
  (Ho(r, "change", (n) => {
    var o = n ? r.defaultChecked : r.checked;
    a(o);
  }),
    aa(e) == null && a(r.checked),
    dn(() => {
      var n = e();
      r.checked = !!n;
    }));
}
function Vu(r, e, a) {
  for (var n = new Set(), o = 0; o < r.length; o += 1)
    r[o].checked && n.add(r[o].__value);
  return (a || n.delete(e), Array.from(n));
}
function ho(r) {
  var e = r.type;
  return e === "number" || e === "range";
}
function bo(r) {
  return r === "" ? null : +r;
}
function hs(r, e) {
  return r === e || r?.[Ir] === e;
}
function ut(r = {}, e, a, n) {
  return (
    Bn(() => {
      var o, s;
      return (
        dn(() => {
          ((o = s),
            (s = n?.() || []),
            aa(() => {
              r !== a(...s) &&
                (e(r, ...s), o && hs(a(...o), r) && e(null, ...o));
            }));
        }),
        () => {
          dr(() => {
            s && hs(a(...s), r) && e(null, ...s);
          });
        }
      );
    }),
    r
  );
}
function Pi(r, e, a) {
  if (r == null) return (e(void 0), Q);
  const n = aa(() => r.subscribe(e, a));
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const pa = [];
function qu(r, e = Q) {
  let a = null;
  const n = new Set();
  function o(l) {
    if (Bs(r, l) && ((r = l), a)) {
      const u = !pa.length;
      for (const f of n) (f[1](), pa.push(f, r));
      if (u) {
        for (let f = 0; f < pa.length; f += 2) pa[f][0](pa[f + 1]);
        pa.length = 0;
      }
    }
  }
  function s(l) {
    o(l(r));
  }
  function i(l, u = Q) {
    const f = [l, u];
    return (
      n.add(f),
      n.size === 1 && (a = e(o, s) || Q),
      l(r),
      () => {
        (n.delete(f), n.size === 0 && a && (a(), (a = null)));
      }
    );
  }
  return { set: o, update: s, subscribe: i };
}
function Uu(r) {
  let e;
  return (Pi(r, (a) => (e = a))(), e);
}
let Cn = !1,
  Lo = Symbol();
function Hu(r, e, a) {
  const n = (a[e] ??= { store: null, source: Xs(void 0), unsubscribe: Q });
  if ((ye && (n.source.label = e), n.store !== r && !(Lo in a)))
    if ((n.unsubscribe(), (n.store = r ?? null), r == null))
      ((n.source.v = void 0), (n.unsubscribe = Q));
    else {
      var o = !0;
      ((n.unsubscribe = Pi(r, (s) => {
        o ? (n.source.v = s) : A(n.source, s);
      })),
        (o = !1));
    }
  return r && Lo in a ? Uu(r) : t(n.source);
}
function Ku() {
  const r = {};
  function e() {
    cn(() => {
      for (var a in r) r[a].unsubscribe();
      Or(r, Lo, { enumerable: !1, value: !0 });
    });
  }
  return [r, e];
}
function Gu(r) {
  var e = Cn;
  try {
    return ((Cn = !1), [r(), Cn]);
  } finally {
    Cn = e;
  }
}
const Wu = {
  get(r, e) {
    if (!r.exclude.includes(e)) return r.props[e];
  },
  set(r, e) {
    return (ye && al(`${r.name}.${String(e)}`), !1);
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
function mt(r, e, a) {
  return new Proxy(
    ye
      ? { props: r, exclude: e, name: a, other: {}, to_proxy: [] }
      : { props: r, exclude: e },
    Wu,
  );
}
const Zu = {
  get(r, e) {
    let a = r.props.length;
    for (; a--; ) {
      let n = r.props[a];
      if ((ha(n) && (n = n()), typeof n == "object" && n !== null && e in n))
        return n[e];
    }
  },
  set(r, e, a) {
    let n = r.props.length;
    for (; n--; ) {
      let o = r.props[n];
      ha(o) && (o = o());
      const s = xr(o, e);
      if (s && s.set) return (s.set(a), !0);
    }
    return !1;
  },
  getOwnPropertyDescriptor(r, e) {
    let a = r.props.length;
    for (; a--; ) {
      let n = r.props[a];
      if ((ha(n) && (n = n()), typeof n == "object" && n !== null && e in n)) {
        const o = xr(n, e);
        return (o && !o.configurable && (o.configurable = !0), o);
      }
    }
  },
  has(r, e) {
    if (e === Ir || e === Ds) return !1;
    for (let a of r.props)
      if ((ha(a) && (a = a()), a != null && e in a)) return !0;
    return !1;
  },
  ownKeys(r) {
    const e = [];
    for (let a of r.props)
      if ((ha(a) && (a = a()), !!a)) {
        for (const n in a) e.includes(n) || e.push(n);
        for (const n of Object.getOwnPropertySymbols(a))
          e.includes(n) || e.push(n);
      }
    return e;
  },
};
function Ei(...r) {
  return new Proxy({ props: r }, Zu);
}
function F(r, e, a, n) {
  var o = !sn || (a & gl) !== 0,
    s = (a & hl) !== 0,
    i = (a & bl) !== 0,
    l = n,
    u = !0,
    f = () => (u && ((u = !1), (l = i ? aa(n) : n)), l),
    m;
  if (s) {
    var C = Ir in r || Ds in r;
    m = xr(r, e)?.set ?? (C && e in r ? (c) => (r[e] = c) : void 0);
  }
  var h,
    w = !1;
  (s ? ([h, w] = Gu(() => r[e])) : (h = r[e]),
    h === void 0 && n !== void 0 && ((h = f()), m && (o && rl(e), m(h))));
  var y;
  if (
    (o
      ? (y = () => {
          var c = r[e];
          return c === void 0 ? f() : ((u = !0), c);
        })
      : (y = () => {
          var c = r[e];
          return (c !== void 0 && (l = void 0), c === void 0 ? l : c);
        }),
    o && (a & pl) === 0)
  )
    return y;
  if (m) {
    var k = r.$$legacy;
    return function (c, _) {
      return arguments.length > 0
        ? ((!o || !_ || k || w) && m(_ ? y() : c), c)
        : y();
    };
  }
  var v = !1,
    d = ((a & vl) !== 0 ? On : jo)(() => ((v = !1), y()));
  (ye && (d.label = e), s && t(d));
  var b = Ve;
  return function (c, _) {
    if (arguments.length > 0) {
      const P = _ ? t(d) : o && s ? et(c) : c;
      return (A(d, P), (v = !0), l !== void 0 && (l = P), c);
    }
    return (ra && v) || (b.f & wr) !== 0 ? d.v : t(d);
  };
}
if (ye) {
  let r = function (e) {
    if (!(e in globalThis)) {
      let a;
      Object.defineProperty(globalThis, e, {
        configurable: !0,
        get: () => {
          if (a !== void 0) return a;
          nl(e);
        },
        set: (n) => {
          a = n;
        },
      });
    }
  };
  var Kv = r;
  (r("$state"),
    r("$effect"),
    r("$derived"),
    r("$inspect"),
    r("$props"),
    r("$bindable"));
}
const Yu = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set()).add(Yu);
const Xu = {
    app: {
      version: "v1.2.1",
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
      progressCircle: "ProgressCircle",
      radio: "Radio",
      searchInput: "Search Input",
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
      progressCircle: { subtitle: "Sizes and variants" },
      radio: {
        subtitle: "Sizes and variants",
        apple: "Apple",
        banana: "Banana",
        cherry: "Cherry",
      },
      searchInput: {
        subtitle: "Search example",
        label: "Search",
        placeholder: "Type to filter...",
        empty: "No matches",
        items: ["Svelte", "TypeScript", "TailwindCSS", "Storybook", "Prism.js"],
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
  Ju = {
    app: {
      version: "v1.2.1",
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
      progressCircle: "Прогресс-круг",
      radio: "Радио-кнопки",
      searchInput: "Поиск",
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
      progressCircle: { subtitle: "Размеры и варианты" },
      radio: {
        subtitle: "Размеры и варианты",
        apple: "Яблоко",
        banana: "Банан",
        cherry: "Вишня",
      },
      searchInput: {
        subtitle: "Пример поиска",
        label: "Поиск",
        placeholder: "Введите запрос...",
        empty: "Ничего не найдено",
        items: ["Компоненты", "Документация", "Стили", "Шаблоны", "Истории"],
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
  Qu = {
    app: {
      version: "v1.2.1",
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
      progressCircle: "Círculo de progreso",
      radio: "Botones de opción",
      searchInput: "Búsqueda",
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
      progressCircle: { subtitle: "Tamaños y variantes" },
      radio: {
        subtitle: "Tamaños y variantes",
        apple: "Manzana",
        banana: "Plátano",
        cherry: "Cereza",
      },
      searchInput: {
        subtitle: "Ejemplo de búsqueda",
        label: "Buscar",
        placeholder: "Escribe para filtrar...",
        empty: "Sin resultados",
        items: [
          "Componentes",
          "Documentación",
          "Estilos",
          "Plantillas",
          "Historias",
        ],
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
  Aa = { en: Xu, ru: Ju, es: Qu },
  Ne = {
    xs: "[font-size:var(--text-xs)]",
    sm: "[font-size:var(--text-sm)]",
    md: "[font-size:var(--text-md)]",
    lg: "[font-size:var(--text-lg)]",
    xl: "[font-size:var(--text-xl)]",
  },
  gn = (r = "") => {
    const e = Date.now().toString(36),
      a = Math.random().toString(36).slice(2);
    return `${r}${e}_${a}`;
  };
function B(...r) {
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
          for (const [o, s] of Object.entries(n)) s && e.push(o);
      }
    };
  for (const n of r) a(n);
  return e.join(" ");
}
function ma(r, e, a) {
  return Math.min(a, Math.max(e, r));
}
function Mo(r, e) {
  return Array.from({ length: r }, (a, n) => e(n));
}
function $u(r, e) {
  let a;
  return (...n) => {
    (clearTimeout(a), (a = setTimeout(() => r(...n), e)));
  };
}
function ec(r, e) {
  let a;
  return (...n) => {
    a || (r(...n), (a = !0), setTimeout(() => (a = !1), e));
  };
}
const tc = typeof window < "u" && !!window.localStorage,
  mo = () => (tc ? window.localStorage : null),
  bs = {
    get: (r, e) => {
      const a = mo();
      if (!a) return e;
      try {
        const n = a.getItem(r);
        return n ? JSON.parse(n) : e;
      } catch {
        return e;
      }
    },
    set: (r, e) => {
      const a = mo();
      if (a)
        try {
          a.setItem(r, JSON.stringify(e));
        } catch (n) {
          console.warn("Storage set failed:", n);
        }
    },
    remove: (r) => {
      const e = mo();
      if (e)
        try {
          e.removeItem(r);
        } catch (a) {
          console.warn("Storage remove failed:", a);
        }
    },
  },
  ms = {
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
  rc = (r, e) => ({ ...ms[r], message: e || ms[r].message });
function ac(r) {
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
const nc = (r, e = "en-US", a) => {
    const n = ac(r);
    if (!n) return "";
    const o = a ?? { year: "numeric", month: "short", day: "numeric" };
    try {
      return new Intl.DateTimeFormat(e, o).format(n);
    } catch {
      return n.toLocaleDateString();
    }
  },
  zi = (r) => {
    r.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )?.focus();
  },
  Ai = (r) => {
    const e = r.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
      a = e[0],
      n = e[e.length - 1],
      o = (s) => {
        s.key === "Tab" &&
          (s.shiftKey
            ? document.activeElement === a && (s.preventDefault(), n.focus())
            : document.activeElement === n && (s.preventDefault(), a.focus()));
      };
    return (
      r.addEventListener("keydown", o),
      () => {
        r.removeEventListener("keydown", o);
      }
    );
  };
var oc = R(
    '<section><h3><button type="button" class="flex w-full items-center justify-between gap-3 p-2 text-left font-medium text-[var(--color-text-default)] bg-transparent transition-colors hover:bg-[var(--color-bg-hover)] active:bg-[var(--color-bg-active)] focus:outline-none focus:ring-2 focus:ring-[var(--border-color-focus)] focus:ring-inset"><span> </span> <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.135l3.71-3.904a.75.75 0 111.08 1.04l-4.24 4.46a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button></h3> <div><div class="min-h-0"><div> </div></div></div></section>',
  ),
  sc = R("<div></div>");
function ic(r, e) {
  Be(e, !0);
  let a = F(e, "items", 19, () => []),
    n = F(e, "multiple", 3, !1),
    o = F(e, "defaultOpen", 19, () => []),
    s = F(e, "sz", 3, "md"),
    i = F(e, "class", 3, "");
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
    m = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-[18px] h-[18px]",
      xl: "w-5 h-5",
    },
    C = g(() => B(l, u[s()], i())),
    h = g(() => m[s()]),
    w = g(() => B(f[s()], Ne[s()]));
  let y = g(o);
  const k = (b) => t(y).includes(b),
    v = (b) => {
      const c = k(b);
      (A(
        y,
        n() ? (c ? t(y).filter((_) => _ !== b) : [...t(y), b]) : c ? [] : [b],
      ),
        e.onToggle?.(b, !c));
    };
  var d = sc();
  (nt(
    d,
    23,
    a,
    (b, c) => b.id ?? c,
    (b, c, _) => {
      var P = oc();
      let E;
      var z = p(P),
        T = p(z);
      T.__click = () => v(t(_));
      var I = p(T),
        q = p(I),
        Z = M(I, 2);
      let ue;
      var ce = M(z, 2);
      let ge;
      var me = p(ce),
        $ = p(me),
        ae = p($);
      (O(
        (K, j, X, Y, H) => {
          ((E = V(
            P,
            1,
            "group border-b border-[var(--border-color-default)] last:border-b-0 overflow-hidden",
            null,
            E,
            {
              "first-of-type:rounded-t": a().length > 1,
              "last-of-type:rounded-b": a().length > 1,
            },
          )),
            he(T, "aria-expanded", K),
            J(q, t(c).title),
            (ue = V(Z, 0, j, null, ue, X)),
            (ge = V(
              ce,
              1,
              "grid overflow-hidden transition-[grid-template-rows] duration-200",
              null,
              ge,
              Y,
            )),
            V($, 1, H),
            J(ae, t(c).content));
        },
        [
          () => k(t(_)),
          () =>
            U(
              B(
                "shrink-0 transition-transform duration-200 text-[var(--color-text-muted)]",
                t(h),
              ),
            ),
          () => ({ "rotate-180": k(t(_)) }),
          () => ({ "grid-rows-[1fr]": k(t(_)), "grid-rows-[0fr]": !k(t(_)) }),
          () => U(B("leading-relaxed text-[var(--color-text-default)]", t(w))),
        ],
      ),
        x(b, P));
    },
  ),
    O(() => V(d, 1, U(t(C)))),
    x(r, d),
    Re());
}
ct(["click"]);
var lc = R('<span aria-hidden="true"></span>'),
  uc = R("<button><span><!></span> <!></button>");
function ot(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "md"),
    n = F(e, "variant", 3, "primary"),
    o = F(e, "type", 3, "button"),
    s = F(e, "loaded", 3, !1),
    i = F(e, "class", 3, ""),
    l = mt(e, [
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
    m = {
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
    C = g(() => B(u, f[a()], Ne[a()], m[n()], i())),
    h = g(() => (s() ? "loading" : e.disabled ? "disabled" : "idle"));
  function w(_) {
    if (e.disabled || s()) {
      _.preventDefault();
      return;
    }
    if (o() === "submit" || o() === "reset") {
      e.onClick?.(_);
      return;
    }
    (e.onClick?.(_),
      !(!e.link || _.defaultPrevented) &&
        (_.button !== 0 ||
          _.metaKey ||
          _.ctrlKey ||
          _.shiftKey ||
          _.altKey ||
          y()));
  }
  function y() {
    if (!e.link || typeof window > "u") return;
    const _ = l;
    (typeof _.target == "string" ? _.target : void 0) === "_blank"
      ? window.open(e.link, "_blank", "noopener,noreferrer")
      : window.location.assign(e.link);
  }
  var k = uc();
  bt(k, () => ({
    type: o(),
    disabled: e.disabled,
    "data-state": t(h),
    "aria-disabled": e.disabled || s() || void 0,
    "aria-busy": s() || void 0,
    onclick: w,
    class: t(C),
    ...l,
  }));
  var v = p(k),
    d = p(v);
  Je(d, () => e.children ?? Q);
  var b = M(v, 2);
  {
    var c = (_) => {
      var P = lc();
      (O(
        (E) => V(P, 1, E),
        [
          () =>
            U(
              B(
                "absolute inset-0 m-auto w-[1em] h-[1em] border-2 [border-color:var(--color-spinner,currentColor)] border-r-transparent rounded-full motion-safe:[animation:spin_0.6s_linear_infinite]",
              ),
            ),
        ],
      ),
        x(_, P));
    };
    W(b, (_) => {
      s() && _(c);
    });
  }
  (O((_) => V(v, 1, _), [() => U(B({ "opacity-0 pointer-events-none": s() }))]),
    x(r, k),
    Re());
}
var cc = R("<div><!></div>"),
  dc = R("<div><!></div>"),
  fc = R("<div><!> <div><!></div> <!></div>");
function pn(r, e) {
  Be(e, !0);
  let a = F(e, "class", 3, ""),
    n = F(e, "sz", 3, "md"),
    o = F(e, "flushHeader", 3, !1),
    s = F(e, "flushFooter", 3, !1);
  const i = {
      xs: "px-3 py-2",
      sm: "px-4 py-2",
      md: "px-5 py-3",
      lg: "px-6 py-4",
      xl: "px-7 py-5",
    },
    l = g(() =>
      B(
        "bg-[var(--color-bg-surface)] border border-[var(--border-color-default)] rounded-xl shadow-sm overflow-hidden",
        Ne[n()],
        "flex flex-col",
        a(),
      ),
    ),
    u = g(() =>
      o() ? "" : B("border-b border-[var(--border-color-default)]", i[n()]),
    ),
    f = g(() => B(i[n()], "flex-1 min-h-0")),
    m = g(() =>
      s() ? "" : B("border-t border-[var(--border-color-default)]", i[n()]),
    );
  var C = fc(),
    h = p(C);
  {
    var w = (b) => {
      var c = cc(),
        _ = p(c);
      (Je(_, () => e.header ?? Q), O(() => V(c, 1, U(t(u)))), x(b, c));
    };
    W(h, (b) => {
      e.header && b(w);
    });
  }
  var y = M(h, 2),
    k = p(y);
  Je(k, () => e.children ?? Q);
  var v = M(y, 2);
  {
    var d = (b) => {
      var c = dc(),
        _ = p(c);
      (Je(_, () => e.footer ?? Q), O(() => V(c, 1, U(t(m)))), x(b, c));
    };
    W(v, (b) => {
      e.footer && b(d);
    });
  }
  (O(() => {
    (V(C, 1, U(t(l))), V(y, 1, U(t(f))));
  }),
    x(r, C),
    Re());
}
var vc = R("<img/>"),
  gc = R('<h3 class="font-semibold [color:var(--color-text-default)]"> </h3>'),
  pc = R('<p class="[color:var(--color-text-muted)]"> </p>'),
  hc = R("<div><!> <!> <!></div>"),
  bc = R("<div><!></div>"),
  mc = R(
    '<div class="flex items-center justify-center h-full [color:var(--color-text-muted)]">No items to display</div>',
  ),
  _c = R(
    '<button type="button" aria-label="Previous slide"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 12L6 8L10 4"></path></svg></button> <button type="button" aria-label="Next slide"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4L10 8L6 12"></path></svg></button>',
    1,
  ),
  xc = R('<button type="button"></button>'),
  wc = R('<div class="flex justify-center gap-2 p-4"></div>'),
  yc = R('<div><div class="relative"><div><!> <!></div> <!></div> <!></div>');
function kc(r, e) {
  Be(e, !0);
  let a = F(e, "items", 19, () => []),
    n = F(e, "sz", 3, "md"),
    o = F(e, "autoplay", 3, !1),
    s = F(e, "interval", 3, 5e3),
    i = F(e, "showDots", 3, !0),
    l = F(e, "showArrows", 3, !0),
    u = F(e, "class", 3, ""),
    f = mt(e, [
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
    m = fe(0),
    C = fe(null);
  const h = g(() => a().length > 0),
    w =
      "relative w-full overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)]",
    y = {
      xs: "rounded-[var(--radius-md)] text-sm",
      sm: "rounded-[var(--radius-md)] text-base",
      md: "rounded-[var(--radius-lg)] text-lg",
      lg: "rounded-[var(--radius-lg)] text-xl",
      xl: "rounded-[var(--radius-xl)] text-2xl",
    },
    k = {
      xs: "p-3 gap-2",
      sm: "p-4 gap-2.5",
      md: "p-5 gap-3",
      lg: "p-6 gap-4",
      xl: "p-8 gap-5",
    },
    v = {
      xs: "w-7 h-7",
      sm: "w-8 h-8",
      md: "w-9 h-9",
      lg: "w-10 h-10",
      xl: "w-11 h-11",
    },
    d = {
      xs: "w-1.5 h-1.5",
      sm: "w-2 h-2",
      md: "w-[10px] h-[10px]",
      lg: "w-3 h-3",
      xl: "w-[14px] h-[14px]",
    },
    b = g(() => B(w, y[n()], u())),
    c = {
      xs: "min-h-[200px]",
      sm: "min-h-[240px]",
      md: "min-h-[300px]",
      lg: "min-h-[360px]",
      xl: "min-h-[420px]",
    },
    _ = g(() => B("relative w-full", c[n()])),
    P = g(() => B("flex flex-col", k[n()])),
    E = {
      xs: "max-h-28",
      sm: "max-h-32",
      md: "max-h-40",
      lg: "max-h-48",
      xl: "max-h-56",
    },
    z = g(() => B("w-full object-cover", E[n()])),
    T = g(() =>
      B(
        v[n()],
        "rounded-full bg-[var(--color-bg-surface)] shadow-lg flex items-center justify-center [color:var(--color-text-default)] hover:bg-[var(--color-bg-hover)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus:outline-none",
      ),
    ),
    I = g(() =>
      B(
        d[n()],
        "rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus:outline-none",
      ),
    );
  Ke(() => {
    t(h)
      ? t(m) >= a().length
        ? A(m, a().length - 1)
        : t(m) < 0 && A(m, 0)
      : A(m, 0);
  });
  const q = () => {
      t(h) && A(m, (t(m) + 1) % a().length);
    },
    Z = () => {
      t(h) && A(m, (t(m) - 1 + a().length) % a().length);
    },
    ue = (D) => {
      D >= 0 && D < a().length && A(m, D, !0);
    };
  Ke(
    () => (
      o() && t(h) && a().length > 1 && A(C, setInterval(q, s()), !0),
      () => {
        t(C) && (clearInterval(t(C)), A(C, null));
      }
    ),
  );
  let ce = 0,
    ge = 0;
  function me(D) {
    ce = D.touches[0].clientX;
  }
  function $(D) {
    ge = D.changedTouches[0].clientX;
    const S = ce - ge;
    Math.abs(S) <= 50 || (S > 0 ? q() : Z());
  }
  var ae = yc();
  bt(ae, () => ({
    "aria-label": "Carousel",
    class: t(b),
    ontouchstart: me,
    ontouchend: $,
    ...f,
  }));
  var K = p(ae),
    j = p(K),
    X = p(j);
  nt(
    X,
    19,
    a,
    (D, S) => D.id ?? S,
    (D, S, ee) => {
      var N = bc();
      const ne = (Fe) => {
        var Ce = Le(),
          Ee = Se(Ce);
        {
          var de = (Ae) => {
            var L = vc();
            (O(() => {
              (he(L, "src", t(S).image),
                he(L, "alt", t(S).title || `Slide ${t(ee) + 1}`),
                V(L, 1, U(t(z))));
            }),
              x(Ae, L));
          };
          W(Ee, (Ae) => {
            t(S).image && Ae(de);
          });
        }
        x(Fe, Ce);
      };
      let le;
      var oe = p(N);
      (pn(oe, {
        get sz() {
          return n();
        },
        get header() {
          return ne;
        },
        flushHeader: !0,
        class: "h-auto flex flex-col",
        children: (Fe, Ce) => {
          var Ee = hc(),
            de = p(Ee);
          {
            var Ae = (be) => {
              var ke = gc(),
                xe = p(ke);
              (O(() => J(xe, t(S).title)), x(be, ke));
            };
            W(de, (be) => {
              t(S).title && be(Ae);
            });
          }
          var L = M(de, 2);
          {
            var re = (be) => {
              var ke = pc(),
                xe = p(ke);
              (O(() => J(xe, t(S).content)), x(be, ke));
            };
            W(L, (be) => {
              t(S).content && be(re);
            });
          }
          var ie = M(L, 2);
          (Je(ie, () => t(S).children ?? Q),
            O(
              (be) => V(Ee, 1, be),
              [() => U(B(t(P), "flex-1 overflow-auto min-h-0"))],
            ),
            x(Fe, Ee));
        },
        $$slots: { default: !0 },
      }),
        O(
          () =>
            (le = V(
              N,
              1,
              "transition-opacity duration-300 ease-in-out",
              null,
              le,
              {
                "opacity-100": t(ee) === t(m),
                "opacity-0": t(ee) !== t(m),
                block: t(ee) === t(m),
                hidden: t(ee) !== t(m),
              },
            )),
        ),
        x(D, N));
    },
  );
  var Y = M(X, 2);
  {
    var H = (D) => {
      var S = mc();
      x(D, S);
    };
    W(Y, (D) => {
      t(h) || D(H);
    });
  }
  var te = M(j, 2);
  {
    var pe = (D) => {
      var S = _c(),
        ee = Se(S);
      ee.__click = Z;
      var N = M(ee, 2);
      ((N.__click = q),
        O(
          (ne, le) => {
            (V(ee, 1, ne), V(N, 1, le));
          },
          [
            () => U(B("absolute left-2 top-1/2 -translate-y-1/2", t(T))),
            () => U(B("absolute right-2 top-1/2 -translate-y-1/2", t(T))),
          ],
        ),
        x(D, S));
    };
    W(te, (D) => {
      l() && t(h) && a().length > 1 && D(pe);
    });
  }
  var _e = M(K, 2);
  {
    var ve = (D) => {
      var S = wc();
      (nt(
        S,
        23,
        a,
        (ee, N) => ee.id ?? N,
        (ee, N, ne) => {
          var le = xc();
          le.__click = () => ue(t(ne));
          let oe;
          (O(() => {
            ((oe = V(le, 1, U(t(I)), null, oe, {
              "bg-[var(--color-bg-primary)]": t(ne) === t(m),
              "bg-[var(--color-bg-secondary)]": t(ne) !== t(m),
              "hover:bg-[var(--color-bg-primary)]": t(ne) !== t(m),
            })),
              he(
                le,
                "aria-label",
                `Go to slide ${t(N).title ?? `#${t(ne) + 1}`}`,
              ),
              he(le, "aria-current", t(ne) === t(m) ? "true" : void 0));
          }),
            x(ee, le));
        },
      ),
        x(D, S));
    };
    W(_e, (D) => {
      i() && t(h) && a().length > 1 && D(ve);
    });
  }
  (O(() => V(j, 1, U(t(_)))), x(r, ae), Re());
}
ct(["click"]);
var Cc = Wt(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round"><line x1="4" y1="12" x2="20" y2="12"></line></svg>',
  ),
  Sc = Wt(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  ),
  Pc = R("<span> </span>"),
  Ec = R('<label><input/> <span aria-hidden="true"><!></span> <!></label>');
function on(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "md"),
    n = F(e, "variant", 3, "default"),
    o = F(e, "indeterminate", 7, !1),
    s = F(e, "checked", 15, !1),
    i = F(e, "class", 3, ""),
    l = F(e, "invalid", 3, !1),
    u = mt(e, [
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
  const f = g(() => e.id ?? gn("chk-")),
    m = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-[18px] h-[18px]",
      xl: "w-5 h-5",
    },
    C = {
      xs: "gap-1.5",
      sm: "gap-2",
      md: "gap-2.5",
      lg: "gap-3",
      xl: "gap-3.5",
    },
    h = g(() =>
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
          },
    ),
    w =
      "rounded-[var(--radius-sm)] border border-solid cursor-pointer transition-all duration-[var(--transition-fast)] ease-[var(--timing-default)] flex items-center justify-center",
    y =
      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--border-color-focus)] peer-focus-visible:border-[var(--border-color-focus)]",
    k = g(() => (o() ? "mixed" : s() ? "checked" : "unchecked")),
    v = g(() =>
      n() === "neutral"
        ? t(k) === "checked" || t(k) === "mixed"
          ? "var(--border-color-strong)"
          : "var(--border-color-default)"
        : "white",
    ),
    d = g(() =>
      B("inline-flex items-center cursor-pointer select-none", C[a()], i()),
    ),
    b = g(() =>
      B(
        w,
        y,
        m[a()],
        t(k) === "checked" && t(h).checked,
        t(k) === "mixed" && t(h).mixed,
        t(k) === "unchecked" && t(h).unchecked,
        "peer-disabled:opacity-[var(--opacity-disabled)] peer-disabled:cursor-not-allowed",
      ),
    ),
    c = g(() =>
      B(
        Ne[a()],
        "[color:var(--color-text-muted)] font-medium peer-disabled:cursor-not-allowed",
      ),
    );
  function _(ge) {
    o() && (ge.preventDefault(), s(!0), o(!1), e.onChange?.(!0));
  }
  var P = Ec(),
    E = p(P),
    z = () => {
      (o() && o(!1), e.onChange?.(s()));
    };
  bt(
    E,
    () => ({
      id: t(f),
      type: "checkbox",
      ...u,
      class: "sr-only peer",
      "aria-checked": o() ? "mixed" : s(),
      "aria-invalid": l() || void 0,
      "aria-describedby": e.describedBy,
      onchange: z,
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0,
  );
  var T = M(E, 2);
  T.__click = _;
  var I = p(T);
  {
    var q = (ge) => {
        var me = Cc();
        (O(() => he(me, "stroke", t(v))), x(ge, me));
      },
      Z = (ge) => {
        var me = Le(),
          $ = Se(me);
        {
          var ae = (K) => {
            var j = Sc();
            (O(() => he(j, "stroke", t(v))), x(K, j));
          };
          W(
            $,
            (K) => {
              s() && K(ae);
            },
            !0,
          );
        }
        x(ge, me);
      };
    W(I, (ge) => {
      o() ? ge(q) : ge(Z, !1);
    });
  }
  var ue = M(T, 2);
  {
    var ce = (ge) => {
      var me = Pc(),
        $ = p(me);
      (O(() => {
        (V(me, 1, U(t(c))), J($, e.label));
      }),
        x(ge, me));
    };
    W(ue, (ge) => {
      e.label && ge(ce);
    });
  }
  (O(() => {
    (V(P, 1, U(t(d))),
      he(P, "for", t(f)),
      he(T, "data-state", t(k)),
      V(T, 1, U(t(b))));
  }),
    ju(E, s),
    x(r, P),
    Re());
}
ct(["click"]);
var _s =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  _o = { exports: {} },
  xs;
function zc() {
  return (
    xs ||
      ((xs = 1),
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
            s = 0,
            i = {},
            l = {
              manual: n.Prism && n.Prism.manual,
              disableWorkerMessageHandler:
                n.Prism && n.Prism.disableWorkerMessageHandler,
              util: {
                encode: function b(c) {
                  return c instanceof u
                    ? new u(c.type, b(c.content), c.alias)
                    : Array.isArray(c)
                      ? c.map(b)
                      : c
                          .replace(/&/g, "&amp;")
                          .replace(/</g, "&lt;")
                          .replace(/\u00a0/g, " ");
                },
                type: function (b) {
                  return Object.prototype.toString.call(b).slice(8, -1);
                },
                objId: function (b) {
                  return (
                    b.__id || Object.defineProperty(b, "__id", { value: ++s }),
                    b.__id
                  );
                },
                clone: function b(c, _) {
                  _ = _ || {};
                  var P, E;
                  switch (l.util.type(c)) {
                    case "Object":
                      if (((E = l.util.objId(c)), _[E])) return _[E];
                      ((P = {}), (_[E] = P));
                      for (var z in c)
                        c.hasOwnProperty(z) && (P[z] = b(c[z], _));
                      return P;
                    case "Array":
                      return (
                        (E = l.util.objId(c)),
                        _[E]
                          ? _[E]
                          : ((P = []),
                            (_[E] = P),
                            c.forEach(function (T, I) {
                              P[I] = b(T, _);
                            }),
                            P)
                      );
                    default:
                      return c;
                  }
                },
                getLanguage: function (b) {
                  for (; b; ) {
                    var c = o.exec(b.className);
                    if (c) return c[1].toLowerCase();
                    b = b.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (b, c) {
                  ((b.className = b.className.replace(RegExp(o, "gi"), "")),
                    b.classList.add("language-" + c));
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
                  } catch (P) {
                    var b = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                      P.stack,
                    ) || [])[1];
                    if (b) {
                      var c = document.getElementsByTagName("script");
                      for (var _ in c) if (c[_].src == b) return c[_];
                    }
                    return null;
                  }
                },
                isActive: function (b, c, _) {
                  for (var P = "no-" + c; b; ) {
                    var E = b.classList;
                    if (E.contains(c)) return !0;
                    if (E.contains(P)) return !1;
                    b = b.parentElement;
                  }
                  return !!_;
                },
              },
              languages: {
                plain: i,
                plaintext: i,
                text: i,
                txt: i,
                extend: function (b, c) {
                  var _ = l.util.clone(l.languages[b]);
                  for (var P in c) _[P] = c[P];
                  return _;
                },
                insertBefore: function (b, c, _, P) {
                  P = P || l.languages;
                  var E = P[b],
                    z = {};
                  for (var T in E)
                    if (E.hasOwnProperty(T)) {
                      if (T == c)
                        for (var I in _) _.hasOwnProperty(I) && (z[I] = _[I]);
                      _.hasOwnProperty(T) || (z[T] = E[T]);
                    }
                  var q = P[b];
                  return (
                    (P[b] = z),
                    l.languages.DFS(l.languages, function (Z, ue) {
                      ue === q && Z != b && (this[Z] = z);
                    }),
                    z
                  );
                },
                DFS: function b(c, _, P, E) {
                  E = E || {};
                  var z = l.util.objId;
                  for (var T in c)
                    if (c.hasOwnProperty(T)) {
                      _.call(c, T, c[T], P || T);
                      var I = c[T],
                        q = l.util.type(I);
                      q === "Object" && !E[z(I)]
                        ? ((E[z(I)] = !0), b(I, _, null, E))
                        : q === "Array" &&
                          !E[z(I)] &&
                          ((E[z(I)] = !0), b(I, _, T, E));
                    }
                },
              },
              plugins: {},
              highlightAll: function (b, c) {
                l.highlightAllUnder(document, b, c);
              },
              highlightAllUnder: function (b, c, _) {
                var P = {
                  callback: _,
                  container: b,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                (l.hooks.run("before-highlightall", P),
                  (P.elements = Array.prototype.slice.apply(
                    P.container.querySelectorAll(P.selector),
                  )),
                  l.hooks.run("before-all-elements-highlight", P));
                for (var E = 0, z; (z = P.elements[E++]); )
                  l.highlightElement(z, c === !0, P.callback);
              },
              highlightElement: function (b, c, _) {
                var P = l.util.getLanguage(b),
                  E = l.languages[P];
                l.util.setLanguage(b, P);
                var z = b.parentElement;
                z &&
                  z.nodeName.toLowerCase() === "pre" &&
                  l.util.setLanguage(z, P);
                var T = b.textContent,
                  I = { element: b, language: P, grammar: E, code: T };
                function q(ue) {
                  ((I.highlightedCode = ue),
                    l.hooks.run("before-insert", I),
                    (I.element.innerHTML = I.highlightedCode),
                    l.hooks.run("after-highlight", I),
                    l.hooks.run("complete", I),
                    _ && _.call(I.element));
                }
                if (
                  (l.hooks.run("before-sanity-check", I),
                  (z = I.element.parentElement),
                  z &&
                    z.nodeName.toLowerCase() === "pre" &&
                    !z.hasAttribute("tabindex") &&
                    z.setAttribute("tabindex", "0"),
                  !I.code)
                ) {
                  (l.hooks.run("complete", I), _ && _.call(I.element));
                  return;
                }
                if ((l.hooks.run("before-highlight", I), !I.grammar)) {
                  q(l.util.encode(I.code));
                  return;
                }
                if (c && n.Worker) {
                  var Z = new Worker(l.filename);
                  ((Z.onmessage = function (ue) {
                    q(ue.data);
                  }),
                    Z.postMessage(
                      JSON.stringify({
                        language: I.language,
                        code: I.code,
                        immediateClose: !0,
                      }),
                    ));
                } else q(l.highlight(I.code, I.grammar, I.language));
              },
              highlight: function (b, c, _) {
                var P = { code: b, grammar: c, language: _ };
                if ((l.hooks.run("before-tokenize", P), !P.grammar))
                  throw new Error(
                    'The language "' + P.language + '" has no grammar.',
                  );
                return (
                  (P.tokens = l.tokenize(P.code, P.grammar)),
                  l.hooks.run("after-tokenize", P),
                  u.stringify(l.util.encode(P.tokens), P.language)
                );
              },
              tokenize: function (b, c) {
                var _ = c.rest;
                if (_) {
                  for (var P in _) c[P] = _[P];
                  delete c.rest;
                }
                var E = new C();
                return (h(E, E.head, b), m(b, E, c, E.head, 0), y(E));
              },
              hooks: {
                all: {},
                add: function (b, c) {
                  var _ = l.hooks.all;
                  ((_[b] = _[b] || []), _[b].push(c));
                },
                run: function (b, c) {
                  var _ = l.hooks.all[b];
                  if (!(!_ || !_.length))
                    for (var P = 0, E; (E = _[P++]); ) E(c);
                },
              },
              Token: u,
            };
          n.Prism = l;
          function u(b, c, _, P) {
            ((this.type = b),
              (this.content = c),
              (this.alias = _),
              (this.length = (P || "").length | 0));
          }
          u.stringify = function b(c, _) {
            if (typeof c == "string") return c;
            if (Array.isArray(c)) {
              var P = "";
              return (
                c.forEach(function (q) {
                  P += b(q, _);
                }),
                P
              );
            }
            var E = {
                type: c.type,
                content: b(c.content, _),
                tag: "span",
                classes: ["token", c.type],
                attributes: {},
                language: _,
              },
              z = c.alias;
            (z &&
              (Array.isArray(z)
                ? Array.prototype.push.apply(E.classes, z)
                : E.classes.push(z)),
              l.hooks.run("wrap", E));
            var T = "";
            for (var I in E.attributes)
              T +=
                " " +
                I +
                '="' +
                (E.attributes[I] || "").replace(/"/g, "&quot;") +
                '"';
            return (
              "<" +
              E.tag +
              ' class="' +
              E.classes.join(" ") +
              '"' +
              T +
              ">" +
              E.content +
              "</" +
              E.tag +
              ">"
            );
          };
          function f(b, c, _, P) {
            b.lastIndex = c;
            var E = b.exec(_);
            if (E && P && E[1]) {
              var z = E[1].length;
              ((E.index += z), (E[0] = E[0].slice(z)));
            }
            return E;
          }
          function m(b, c, _, P, E, z) {
            for (var T in _)
              if (!(!_.hasOwnProperty(T) || !_[T])) {
                var I = _[T];
                I = Array.isArray(I) ? I : [I];
                for (var q = 0; q < I.length; ++q) {
                  if (z && z.cause == T + "," + q) return;
                  var Z = I[q],
                    ue = Z.inside,
                    ce = !!Z.lookbehind,
                    ge = !!Z.greedy,
                    me = Z.alias;
                  if (ge && !Z.pattern.global) {
                    var $ = Z.pattern.toString().match(/[imsuy]*$/)[0];
                    Z.pattern = RegExp(Z.pattern.source, $ + "g");
                  }
                  for (
                    var ae = Z.pattern || Z, K = P.next, j = E;
                    K !== c.tail && !(z && j >= z.reach);
                    j += K.value.length, K = K.next
                  ) {
                    var X = K.value;
                    if (c.length > b.length) return;
                    if (!(X instanceof u)) {
                      var Y = 1,
                        H;
                      if (ge) {
                        if (((H = f(ae, j, b, ce)), !H || H.index >= b.length))
                          break;
                        var ve = H.index,
                          te = H.index + H[0].length,
                          pe = j;
                        for (pe += K.value.length; ve >= pe; )
                          ((K = K.next), (pe += K.value.length));
                        if (
                          ((pe -= K.value.length),
                          (j = pe),
                          K.value instanceof u)
                        )
                          continue;
                        for (
                          var _e = K;
                          _e !== c.tail &&
                          (pe < te || typeof _e.value == "string");
                          _e = _e.next
                        )
                          (Y++, (pe += _e.value.length));
                        (Y--, (X = b.slice(j, pe)), (H.index -= j));
                      } else if (((H = f(ae, 0, X, ce)), !H)) continue;
                      var ve = H.index,
                        D = H[0],
                        S = X.slice(0, ve),
                        ee = X.slice(ve + D.length),
                        N = j + X.length;
                      z && N > z.reach && (z.reach = N);
                      var ne = K.prev;
                      (S && ((ne = h(c, ne, S)), (j += S.length)), w(c, ne, Y));
                      var le = new u(T, ue ? l.tokenize(D, ue) : D, me, D);
                      if (((K = h(c, ne, le)), ee && h(c, K, ee), Y > 1)) {
                        var oe = { cause: T + "," + q, reach: N };
                        (m(b, c, _, K.prev, j, oe),
                          z && oe.reach > z.reach && (z.reach = oe.reach));
                      }
                    }
                  }
                }
              }
          }
          function C() {
            var b = { value: null, prev: null, next: null },
              c = { value: null, prev: b, next: null };
            ((b.next = c), (this.head = b), (this.tail = c), (this.length = 0));
          }
          function h(b, c, _) {
            var P = c.next,
              E = { value: _, prev: c, next: P };
            return ((c.next = E), (P.prev = E), b.length++, E);
          }
          function w(b, c, _) {
            for (var P = c.next, E = 0; E < _ && P !== b.tail; E++) P = P.next;
            ((c.next = P), (P.prev = c), (b.length -= E));
          }
          function y(b) {
            for (var c = [], _ = b.head.next; _ !== b.tail; )
              (c.push(_.value), (_ = _.next));
            return c;
          }
          if (!n.document)
            return (
              n.addEventListener &&
                (l.disableWorkerMessageHandler ||
                  n.addEventListener(
                    "message",
                    function (b) {
                      var c = JSON.parse(b.data),
                        _ = c.language,
                        P = c.code,
                        E = c.immediateClose;
                      (n.postMessage(l.highlight(P, l.languages[_], _)),
                        E && n.close());
                    },
                    !1,
                  )),
              l
            );
          var k = l.util.currentScript();
          k &&
            ((l.filename = k.src),
            k.hasAttribute("data-manual") && (l.manual = !0));
          function v() {
            l.manual || l.highlightAll();
          }
          if (!l.manual) {
            var d = document.readyState;
            d === "loading" || (d === "interactive" && k && k.defer)
              ? document.addEventListener("DOMContentLoaded", v)
              : window.requestAnimationFrame
                ? window.requestAnimationFrame(v)
                : window.setTimeout(v, 16);
          }
          return l;
        })(e);
        (r.exports && (r.exports = a),
          typeof _s < "u" && (_s.Prism = a),
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
            value: function (o, s) {
              var i = {};
              ((i["language-" + s] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: a.languages[s],
              }),
                (i.cdata = /^<!\[CDATA\[|\]\]>$/i));
              var l = {
                "included-cdata": {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: i,
                },
              };
              l["language-" + s] = {
                pattern: /[\s\S]+/,
                inside: a.languages[s],
              };
              var u = {};
              ((u[o] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return o;
                    },
                  ),
                  "i",
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
                  "i",
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
                    /(?:;|(?=\s*\{))/.source,
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
                  "i",
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
                    ")*(?=\\s*\\{)",
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
            var s = n.languages.markup;
            s &&
              (s.tag.addInlined("style", "css"),
              s.tag.addAttribute("style", "css"));
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
                  /(?![\w$])/.source,
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
                    .source,
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
              "javascript",
            )),
          (a.languages.js = a.languages.javascript),
          (function () {
            if (typeof a > "u" || typeof document > "u") return;
            Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                Element.prototype.webkitMatchesSelector);
            var n = "Loading…",
              o = function (k, v) {
                return "✖ Error " + k + " while fetching file: " + v;
              },
              s = "✖ Error: File does not exist or is empty",
              i = {
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
              m = "failed",
              C =
                "pre[data-src]:not([" +
                l +
                '="' +
                f +
                '"]):not([' +
                l +
                '="' +
                u +
                '"])';
            function h(k, v, d) {
              var b = new XMLHttpRequest();
              (b.open("GET", k, !0),
                (b.onreadystatechange = function () {
                  b.readyState == 4 &&
                    (b.status < 400 && b.responseText
                      ? v(b.responseText)
                      : b.status >= 400
                        ? d(o(b.status, b.statusText))
                        : d(s));
                }),
                b.send(null));
            }
            function w(k) {
              var v = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(k || "");
              if (v) {
                var d = Number(v[1]),
                  b = v[2],
                  c = v[3];
                return b ? (c ? [d, Number(c)] : [d, void 0]) : [d, d];
              }
            }
            (a.hooks.add("before-highlightall", function (k) {
              k.selector += ", " + C;
            }),
              a.hooks.add("before-sanity-check", function (k) {
                var v = k.element;
                if (v.matches(C)) {
                  ((k.code = ""), v.setAttribute(l, u));
                  var d = v.appendChild(document.createElement("CODE"));
                  d.textContent = n;
                  var b = v.getAttribute("data-src"),
                    c = k.language;
                  if (c === "none") {
                    var _ = (/\.(\w+)$/.exec(b) || [, "none"])[1];
                    c = i[_] || _;
                  }
                  (a.util.setLanguage(d, c), a.util.setLanguage(v, c));
                  var P = a.plugins.autoloader;
                  (P && P.loadLanguages(c),
                    h(
                      b,
                      function (E) {
                        v.setAttribute(l, f);
                        var z = w(v.getAttribute("data-range"));
                        if (z) {
                          var T = E.split(/\r\n?|\n/g),
                            I = z[0],
                            q = z[1] == null ? T.length : z[1];
                          (I < 0 && (I += T.length),
                            (I = Math.max(0, Math.min(I - 1, T.length))),
                            q < 0 && (q += T.length),
                            (q = Math.max(0, Math.min(q, T.length))),
                            (E = T.slice(I, q).join(`
`)),
                            v.hasAttribute("data-start") ||
                              v.setAttribute("data-start", String(I + 1)));
                        }
                        ((d.textContent = E), a.highlightElement(d));
                      },
                      function (E) {
                        (v.setAttribute(l, m), (d.textContent = E));
                      },
                    ));
                }
              }),
              (a.plugins.fileHighlight = {
                highlight: function (v) {
                  for (
                    var d = (v || document).querySelectorAll(C), b = 0, c;
                    (c = d[b++]);
                  )
                    a.highlightElement(c);
                },
              }));
            var y = !1;
            a.fileHighlight = function () {
              (y ||
                (console.warn(
                  "Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.",
                ),
                (y = !0)),
                a.plugins.fileHighlight.highlight.apply(this, arguments));
            };
          })());
      })(_o)),
    _o.exports
  );
}
var ws = zc();
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
    var s = {};
    ((s[e] = {
      pattern: RegExp(
        /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
          /__/g,
          function () {
            return e;
          },
        ),
        "i",
      ),
      lookbehind: !0,
      greedy: !0,
      inside: o,
    }),
      Prism.languages.insertBefore("markup", "cdata", s));
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
        "i",
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
          /(?:;|(?=\s*\{))/.source,
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
        "i",
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
          ")*(?=\\s*\\{)",
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
        /(?![\w$])/.source,
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
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/
          .source,
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
    "javascript",
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
var ys = {},
  ks;
function Ac() {
  return (
    ks ||
      ((ks = 1),
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
    ys
  );
}
Ac();
var Fc = R("<button> </button>"),
  Tc = R("<div><div> </div> <!></div>"),
  Lc = R("<div></div>"),
  Mc = R("<div></div>"),
  Dc = R(
    '<div><!> <div><!> <div class="cv-editor relative flex-1 min-h-0"><div aria-hidden="true"><!></div> <textarea spellcheck="false"></textarea></div></div></div>',
  );
function Fi(r, e) {
  Be(e, !0);
  let a = F(e, "code", 15, ""),
    n = F(e, "language", 3, "txt"),
    o = F(e, "title", 3, "Code"),
    s = F(e, "showCopyButton", 3, !0),
    i = F(e, "showLineNumbers", 3, !1),
    l = F(e, "editable", 3, !1),
    u = F(e, "activeLine", 3, !1),
    f = F(e, "sz", 3, "md"),
    m = F(e, "class", 3, ""),
    C = fe(null),
    h = fe(null),
    w = fe(null),
    y = fe(!1),
    k = fe(0),
    v = fe(0),
    d = fe(12);
  const b = g(() =>
      a().split(`
`),
    ),
    c = {
      xs: "leading-4",
      sm: "leading-[1.1rem]",
      md: "leading-[1.3rem]",
      lg: "leading-[1.45rem]",
      xl: "leading-7",
    };
  let _ = fe(20);
  function P(H) {
    return H.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function E(H, te) {
    if (H === "") return "";
    if (te === "txt") return P(H);
    const pe = te === "html" ? "markup" : te,
      _e = ws.languages[pe];
    return ws.highlight(H, _e, pe);
  }
  const z = g(() => E(a(), n()));
  function T() {
    if (!u() || !t(C)) return;
    const H = t(C).selectionStart ?? 0,
      te = a().slice(0, H);
    A(
      k,
      te.split(`
`).length - 1,
    );
  }
  function I(H) {
    const te = H.currentTarget;
    (t(h) && (t(h).scrollTop = te.scrollTop),
      t(w) &&
        ((t(w).scrollTop = te.scrollTop),
        (t(w).scrollLeft = te.scrollLeft),
        A(v, te.scrollTop, !0)));
  }
  Ke(() => {
    if ((f(), !t(C))) return;
    const H = getComputedStyle(t(C)),
      te = Number.parseFloat(H.lineHeight);
    Number.isNaN(te) || A(_, te, !0);
    const pe = Number.parseFloat(H.paddingTop);
    Number.isNaN(pe) || A(d, pe, !0);
  });
  async function q() {
    (await navigator.clipboard.writeText(a()),
      A(y, !0),
      setTimeout(() => A(y, !1), 1200));
  }
  var Z = Dc(),
    ue = p(Z);
  {
    var ce = (H) => {
      var te = Tc(),
        pe = p(te),
        _e = p(pe),
        ve = M(pe, 2);
      {
        var D = (S) => {
          var ee = Fc();
          ee.__click = q;
          let N;
          var ne = p(ee);
          (O(
            (le) => {
              ((N = V(ee, 1, le, "svelte-dvc4kn", N, {
                "!bg-green-600": t(y),
              })),
                J(ne, t(y) ? "Copied" : "Copy"));
            },
            [
              () =>
                U(
                  B(
                    "px-3 py-0.5 text-xs rounded bg-[var(--color-primary)] text-white hover:opacity-[var(--opacity-hover)]",
                    "transition focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus:outline-none",
                  ),
                ),
            ],
          ),
            x(S, ee));
        };
        W(ve, (S) => {
          s() && S(D);
        });
      }
      (O(
        (S) => {
          (V(te, 1, S, "svelte-dvc4kn"), J(_e, o()));
        },
        [
          () =>
            U(
              B(
                "px-3 py-1 bg-[var(--color-bg-muted)] font-semibold uppercase flex items-center justify-between",
                Ne[f()],
              ),
            ),
        ],
      ),
        x(H, te));
    };
    W(ue, (H) => {
      o() && H(ce);
    });
  }
  var ge = M(ue, 2),
    me = p(ge);
  {
    var $ = (H) => {
      var te = Mc();
      (nt(
        te,
        21,
        () => t(b),
        yu,
        (pe, _e, ve) => {
          var D = Lc();
          ((D.textContent = ve + 1),
            O(() => V(D, 1, U(c[f()]), "svelte-dvc4kn")),
            x(pe, D));
        },
      ),
        ut(
          te,
          (pe) => A(h, pe),
          () => t(h),
        ),
        O(
          (pe) => V(te, 1, pe, "svelte-dvc4kn"),
          [
            () =>
              U(
                B(
                  "select-none px-3 py-[12px] border-r border-[var(--border-color-default)]",
                  "text-[var(--color-text-muted)] text-right overflow-hidden",
                  "cv-gutter bg-[var(--color-bg-surface)] tabular-nums h-full min-h-0",
                ),
              ),
          ],
        ),
        x(H, te));
    };
    W(me, (H) => {
      i() && H($);
    });
  }
  var ae = M(me, 2),
    K = p(ae);
  let j;
  var X = p(K);
  (Pu(X, () => t(z)),
    ut(
      K,
      (H) => A(w, H),
      () => t(w),
    ));
  var Y = M(K, 2);
  ((Y.__input = function (...H) {
    (l() ? T : void 0)?.apply(this, H);
  }),
    (Y.__keyup = function (...H) {
      (l() ? T : void 0)?.apply(this, H);
    }),
    (Y.__click = function (...H) {
      (l() ? T : void 0)?.apply(this, H);
    }),
    (Y.__mouseup = function (...H) {
      (l() ? T : void 0)?.apply(this, H);
    }),
    ut(
      Y,
      (H) => A(C, H),
      () => t(C),
    ),
    O(
      (H, te, pe, _e) => {
        (V(Z, 1, H, "svelte-dvc4kn"),
          V(ge, 1, te, "svelte-dvc4kn"),
          (j = V(K, 1, pe, "svelte-dvc4kn", j, {
            "cv-active-line": u() && l(),
          })),
          lt(
            K,
            u() && l()
              ? `--cv-line-height: ${t(_)}px; --cv-active-line-top: ${t(d) + t(k) * t(_) - t(v)}px;`
              : void 0,
          ),
          (Y.readOnly = !l()),
          V(Y, 1, _e, "svelte-dvc4kn"));
      },
      [
        () =>
          U(
            B(
              "cv-root w-full h-full min-h-0 flex flex-col border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]",
              "text-[var(--color-text-default)]",
              m(),
            ),
          ),
        () => U(B("cv-body flex flex-1 min-h-0 font-mono", Ne[f()], c[f()])),
        () => U(B("cv-highlight cv-layer", Ne[f()], c[f()])),
        () => U(B("cv-input cv-layer", Ne[f()], c[f()])),
      ],
    ),
    kt("scroll", Y, I),
    kt("focus", Y, function (...H) {
      (l() ? T : void 0)?.apply(this, H);
    }),
    Bu(Y, a),
    x(r, Z),
    Re());
}
ct(["click", "input", "keyup", "mouseup"]);
const Ic = {
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
      primaryColorSelect: { text: "Primary color" },
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
  Nc = {
    components: {
      colorPicker: {
        text: "Выбрать цвет",
        color: "Цвет",
        clear: "Очистить",
        placeholder: "Цвет не выбран",
        selectedColor: "Выбранный цвет",
      },
      datePicker: {
        text: "Выбрать дату",
        placeholder: "Дата не выбрана",
        date: "Дата",
        clear: "Очистить",
        selectedDate: "Выбранная дата",
      },
      dialog: { ok: "ОК", cancel: "Отмена" },
      filePicker: {
        text: "Выбрать файлы",
        clear: "Очистить",
        dragDrop: "Перетащите файлы сюда или нажмите, чтобы выбрать",
        accepted: "Допустимые форматы",
        selectedFiles: "Выбранные файлы",
        placeholder: "Файлы не выбраны",
        fileCount: "{n} файл(ов) выбрано",
        totalSize: "Общий размер",
      },
      menu: { subtitle: "Меню с вариантами размеров" },
      primaryColorSelect: { text: "Основной цвет" },
      timePicker: {
        text: "Выбрать время",
        placeholder: "Время не выбрано",
        clear: "Очистить",
        hour: "Час",
        minute: "Минута",
        period: "Период",
        selectedTime: "Выбранное время",
        switchTo12h: "12ч",
        switchTo24h: "24ч",
      },
    },
  },
  Oc = {
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
      primaryColorSelect: { text: "Color primario" },
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
  Fa = { en: Ic, ru: Nc, es: Oc };
var Bc = R(
  '<div><div class="text-md font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <input type="color" class="invisible absolute w-px h-px" value="#000000"/> <div class="mt-3 p-4 border border-dashed border-[var(--border-color-default)] rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] flex items-center justify-between gap-3" aria-live="polite"><div><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div> <div class="w-12 h-12 rounded-[var(--radius-sm)] border border-[var(--border-color-default)] shadow-inner"></div></div></div>',
);
function Rc(r, e) {
  Be(e, !0);
  let a = F(e, "value", 15, null),
    n = F(e, "disabled", 3, !1),
    o = F(e, "clearable", 3, !0),
    s = F(e, "class", 3, ""),
    i = mt(e, [
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
  const l = Gt("lang") ?? null,
    u = g(() => l?.value ?? "en"),
    f = g(() => Fa[t(u)].components.colorPicker),
    m = g(() => e.label ?? t(f).text),
    C = g(() => e.placeholder ?? t(f).placeholder);
  let h;
  const w = "inline-block w-full",
    y = g(() => B(w, s())),
    k = g(() => !!a()),
    v = g(() => a() ?? "transparent");
  Ke(() => {
    h && (h.value = a() || "#000000");
  });
  function d() {
    n() ||
      (typeof h?.showPicker == "function"
        ? h.showPicker()
        : (h?.focus(), h?.click()));
  }
  function b(Y) {
    const te = Y.target.value || null;
    (a(te), e.onChange?.(te));
  }
  function c() {
    o() && (a(null), h && (h.value = "#000000"), e.onChange?.(null));
  }
  var _ = Bc();
  bt(_, () => ({ class: t(y), ...i }));
  var P = p(_),
    E = p(P),
    z = M(P, 2),
    T = p(z);
  ot(T, {
    onClick: d,
    get disabled() {
      return n();
    },
    sz: "xs",
    children: (Y, H) => {
      var te = je();
      (O(() => J(te, t(f).color)), x(Y, te));
    },
    $$slots: { default: !0 },
  });
  var I = M(T, 2);
  {
    var q = (Y) => {
      {
        let H = g(() => !t(k) || n());
        ot(Y, {
          onClick: c,
          variant: "danger",
          get disabled() {
            return t(H);
          },
          sz: "xs",
          children: (te, pe) => {
            var _e = je();
            (O(() => J(_e, t(f).clear)), x(te, _e));
          },
          $$slots: { default: !0 },
        });
      }
    };
    W(I, (Y) => {
      o() && Y(q);
    });
  }
  var Z = M(z, 2);
  ((Z.__change = b),
    ut(
      Z,
      (Y) => (h = Y),
      () => h,
    ));
  var ue = M(Z, 2),
    ce = p(ue),
    ge = p(ce),
    me = p(ge),
    $ = M(ge, 2),
    ae = p($);
  {
    var K = (Y) => {
        var H = je();
        (O(() => J(H, a())), x(Y, H));
      },
      j = (Y) => {
        var H = je();
        (O(() => J(H, t(C))), x(Y, H));
      };
    W(ae, (Y) => {
      t(k) ? Y(K) : Y(j, !1);
    });
  }
  var X = M(ce, 2);
  (O(() => {
    (J(E, `${t(m) ?? ""}:`),
      (Z.disabled = n()),
      J(me, t(f).selectedColor),
      he(X, "aria-label", t(k) ? `Preview of ${a()}` : "No color selected"),
      lt(X, `background:${t(v)}`));
  }),
    x(r, _),
    Re());
}
ct(["change"]);
var jc = R(
  '<div><div class="text-md font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <input type="date" class="invisible absolute w-px h-px"/> <div class="mt-3 p-4 bg-[var(--color-bg-surface)] text-center" aria-live="polite"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div></div>',
);
function Vc(r, e) {
  Be(e, !0);
  let a = F(e, "value", 15, null),
    n = F(e, "disabled", 3, !1),
    o = F(e, "clearable", 3, !0),
    s = F(e, "class", 3, ""),
    i = mt(e, [
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
  const l = Gt("lang") ?? null,
    u = g(() => l?.value ?? "en"),
    f = g(() => Fa[t(u)].components.datePicker),
    m = g(() => e.label ?? t(f).text),
    C = g(() => e.placeholder ?? t(f).placeholder);
  let h;
  const w = "inline-block w-full",
    y = g(() => B(w, s())),
    k = g(() => !!a()),
    v = g(() => nc(a(), e.locale, e.formatOptions));
  Ke(() => {
    h && (h.value = a() ?? "");
  });
  function d() {
    n() ||
      (typeof h?.showPicker == "function"
        ? h.showPicker()
        : (h?.focus(), h?.click()));
  }
  function b(j) {
    const Y = j.target.value || null;
    (a(Y), e.onChange?.(Y));
  }
  function c() {
    o() && (a(null), h && (h.value = ""), e.onChange?.(null));
  }
  var _ = jc();
  bt(_, () => ({ class: t(y), ...i }));
  var P = p(_),
    E = p(P),
    z = M(P, 2),
    T = p(z);
  ot(T, {
    onClick: d,
    get disabled() {
      return n();
    },
    sz: "xs",
    children: (j, X) => {
      var Y = je();
      (O(() => J(Y, t(f).date)), x(j, Y));
    },
    $$slots: { default: !0 },
  });
  var I = M(T, 2);
  {
    var q = (j) => {
      {
        let X = g(() => !t(k) || n());
        ot(j, {
          onClick: c,
          variant: "danger",
          get disabled() {
            return t(X);
          },
          sz: "xs",
          children: (Y, H) => {
            var te = je();
            (O(() => J(te, t(f).clear)), x(Y, te));
          },
          $$slots: { default: !0 },
        });
      }
    };
    W(I, (j) => {
      o() && j(q);
    });
  }
  var Z = M(z, 2);
  ((Z.__change = b),
    ut(
      Z,
      (j) => (h = j),
      () => h,
    ));
  var ue = M(Z, 2),
    ce = p(ue),
    ge = p(ce),
    me = M(ce, 2),
    $ = p(me);
  {
    var ae = (j) => {
        var X = je();
        (O(() => J(X, t(v))), x(j, X));
      },
      K = (j) => {
        var X = je();
        (O(() => J(X, t(C))), x(j, X));
      };
    W($, (j) => {
      t(k) ? j(ae) : j(K, !1);
    });
  }
  (O(() => {
    (J(E, `${t(m) ?? ""}:`),
      he(Z, "min", e.min),
      he(Z, "max", e.max),
      (Z.disabled = n()),
      J(ge, t(f).selectedDate));
  }),
    x(r, _),
    Re());
}
ct(["change"]);
var qc = R("<h3> </h3> <p> </p>", 1),
  Uc = R('<div class="mt-3"><!></div>'),
  Hc = R(
    '<div class="fixed inset-0 z-[var(--z-modal)] bg-oklch(0_0_0/var(--opacity-overlay)) flex items-center justify-center p-4" role="presentation" tabindex="-1"><div role="dialog" aria-modal="true"><div><!> <!></div> <div><!> <!></div></div></div>',
  ),
  Kc = R("<div><!></div>"),
  Gc = R(
    '<div class="fixed top-4 right-4 z-[var(--z-modal)]" role="dialog" aria-modal="false" tabindex="-1"><div><div><!> <!></div> <div><!> <!></div></div></div>',
  );
function Do(r, e) {
  Be(e, !0);
  const a = (me) => {
    var $ = qc(),
      ae = Se($),
      K = p(ae),
      j = M(ae, 2),
      X = p(j);
    (O(
      (Y, H) => {
        (V(ae, 1, Y), J(K, o()), V(j, 1, H), J(X, s()));
      },
      [
        () =>
          U(
            B(
              "mb-2 font-[var(--font-weight-semibold)] color-[var(--color-text-default)]",
              t(q),
            ),
          ),
        () =>
          U(
            B(
              "leading-[var(--line-height-normal)] color-[var(--color-text-muted)]",
              t(Z),
            ),
          ),
      ],
    ),
      x(me, $));
  };
  let n = F(e, "open", 3, !1),
    o = F(e, "title", 3, ""),
    s = F(e, "message", 3, ""),
    i = F(e, "onConfirm", 3, () => {}),
    l = F(e, "onCancel", 3, () => {}),
    u = F(e, "onClose", 3, () => {}),
    f = F(e, "modal", 3, !0),
    m = F(e, "class", 3, ""),
    C = F(e, "sz", 3, "md");
  const h = Gt("lang") ?? null,
    w = g(() => h?.value ?? "en"),
    y = g(() => Fa[t(w)].components.dialog);
  let k = fe(null),
    v = null;
  function d() {
    (i()(), u()());
  }
  function b() {
    (l()(), u()());
  }
  function c(me) {
    me.key === "Escape" && (me.preventDefault(), b());
  }
  const _ =
      "fusion-dialog bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)] shadow-lg min-w-80 max-w-md w-full border border-[var(--border-color-default)]",
    P = {
      xs: "p-[var(--spacing-sm)]",
      sm: "p-[var(--spacing-md)]",
      md: "p-[var(--spacing-lg)]",
      lg: "p-[var(--spacing-xl)]",
      xl: "p-[var(--spacing-xl)]",
    },
    E = { xs: Ne.md, sm: Ne.md, md: Ne.xl, lg: Ne.xl, xl: "text-2xl" },
    z = g(() => B(_, m())),
    T = g(() => P[C()]),
    I = g(() => B(t(T), "pt-0")),
    q = g(() => E[C()]),
    Z = g(() => Ne[C()]);
  Ke(
    () => (
      v?.(),
      n() && t(k)
        ? queueMicrotask(() => {
            (zi(t(k)), f() && (v = Ai(t(k))));
          })
        : (v = null),
      () => {
        (v?.(), (v = null));
      }
    ),
  );
  var ue = Le(),
    ce = Se(ue);
  {
    var ge = (me) => {
      var $ = Le(),
        ae = Se($);
      {
        var K = (X) => {
            var Y = Hc();
            Y.__keydown = c;
            var H = p(Y),
              te = p(H),
              pe = p(te);
            a(pe);
            var _e = M(pe, 2);
            {
              var ve = (N) => {
                var ne = Uc(),
                  le = p(ne);
                (Je(le, () => e.children ?? Q, C), x(N, ne));
              };
              W(_e, (N) => {
                e.children && N(ve);
              });
            }
            var D = M(te, 2),
              S = p(D);
            ot(S, {
              get sz() {
                return C();
              },
              variant: "primary",
              onClick: d,
              children: (N, ne) => {
                var le = je();
                (O(() => J(le, t(y).ok)), x(N, le));
              },
              $$slots: { default: !0 },
            });
            var ee = M(S, 2);
            (ot(ee, {
              get sz() {
                return C();
              },
              variant: "secondary",
              onClick: b,
              children: (N, ne) => {
                var le = je();
                (O(() => J(le, t(y).cancel)), x(N, le));
              },
              $$slots: { default: !0 },
            }),
              ut(
                H,
                (N) => A(k, N),
                () => t(k),
              ),
              O(
                (N) => {
                  (V(H, 1, U(t(z))),
                    he(H, "aria-label", o()),
                    V(te, 1, U(t(T))),
                    V(D, 1, N));
                },
                [() => U(B("flex gap-2 justify-end", t(I)))],
              ),
              x(X, Y));
          },
          j = (X) => {
            var Y = Gc();
            Y.__keydown = c;
            var H = p(Y),
              te = p(H),
              pe = p(te);
            a(pe);
            var _e = M(pe, 2);
            {
              var ve = (N) => {
                var ne = Kc(),
                  le = p(ne);
                (Je(le, () => e.children ?? Q, C),
                  O((oe) => V(ne, 1, oe), [() => U(B("mt-3", t(Z)))]),
                  x(N, ne));
              };
              W(_e, (N) => {
                e.children && N(ve);
              });
            }
            var D = M(te, 2),
              S = p(D);
            ot(S, {
              get sz() {
                return C();
              },
              variant: "primary",
              onClick: d,
              children: (N, ne) => {
                var le = je();
                (O(() => J(le, t(y).ok)), x(N, le));
              },
              $$slots: { default: !0 },
            });
            var ee = M(S, 2);
            (ot(ee, {
              get sz() {
                return C();
              },
              variant: "secondary",
              onClick: b,
              children: (N, ne) => {
                var le = je();
                (O(() => J(le, t(y).cancel)), x(N, le));
              },
              $$slots: { default: !0 },
            }),
              ut(
                H,
                (N) => A(k, N),
                () => t(k),
              ),
              O(
                (N) => {
                  (he(Y, "aria-label", o()),
                    V(H, 1, U(t(z))),
                    V(te, 1, U(t(T))),
                    V(D, 1, N));
                },
                [() => U(B("flex gap-2 justify-end", t(I)))],
              ),
              x(X, Y));
          };
        W(ae, (X) => {
          f() ? X(K) : X(j, !1);
        });
      }
      x(me, $);
    };
    W(ce, (me) => {
      n() && me(ge);
    });
  }
  (x(r, ue), Re());
}
ct(["keydown"]);
var Wc = R("<span> </span>"),
  Zc = R('<div aria-hidden="true"><!></div>'),
  Yc = R("<textarea></textarea>"),
  Xc = R("<input/>"),
  Jc = R('<span aria-hidden="true"><!></span>'),
  Qc = Wt(
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 3L21 21" stroke="currentColor" stroke-width="2"></path><path d="M10.5 10.677a2 2 0 002.823 2.823" stroke="currentColor" stroke-width="2"></path><path d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c2.4 3.6 6 6 9 6 1.4 0 2.8-.5 4.1-1.2" stroke="currentColor" stroke-width="2"></path><path d="M12 6c3 0 6 2.4 9 6-.6.9-1.3 1.7-2 2.5" stroke="currentColor" stroke-width="2"></path></svg>',
  ),
  $c = Wt(
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"></path><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"></circle></svg>',
  ),
  ed = R('<button type="button"><!></button>'),
  td = R(
    '<button type="button" tabindex="-1" aria-label="Clear" title="Clear"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>',
  ),
  rd = R("<label><!> <div><!> <!> <div><!> <!> <!></div></div></label>");
function _a(r, e) {
  Be(e, !0);
  let a = F(e, "as", 3, "input"),
    n = F(e, "sz", 3, "md"),
    o = F(e, "variant", 3, "default"),
    s = F(e, "clearable", 3, !0),
    i = F(e, "rows", 3, 3),
    l = F(e, "parseNumber", 3, !1),
    u = F(e, "value", 15, ""),
    f = F(e, "class", 3, ""),
    m = F(e, "invalid", 3, !1),
    C = mt(e, [
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
  const h =
      "w-full outline-none transition-colors duration-[var(--transition-fast)] ease-[var(--timing-default)] box-border rounded-[var(--radius-md)] border focus:border-[var(--border-color-focus)] focus:ring-2 focus:ring-[var(--border-color-focus)] disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
    w = {
      xs: "px-2 h-6",
      sm: "px-3 h-7",
      md: "px-4 h-8",
      lg: "px-5 h-9",
      xl: "px-6 h-10",
    },
    y = {
      default:
        "bg-[var(--color-bg-surface)] [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-[var(--border-color-default)]",
      filled:
        "bg-[var(--color-bg-muted)] [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-[var(--border-color-default)]",
      neutral:
        "bg-transparent [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-transparent hover:border-[var(--border-color-default)] focus:border-[var(--border-color-focus)]",
    },
    k = g(() => B("flex flex-col gap-1", f())),
    v = g(() =>
      a() === "textarea"
        ? B(h, y[o()], Ne.md, "px-4")
        : B(h, w[n()], Ne[n()], y[o()]),
    ),
    d = g(() =>
      B("relative flex items-stretch", a() === "textarea" && "items-start"),
    ),
    b = g(() => e.id ?? gn("fld-")),
    c = g(() => (a() === "input" ? e.type || C.type || "text" : void 0)),
    _ = g(() => a() === "input" && t(c) === "number"),
    P = g(() => a() === "input" && t(c) === "password");
  let E = fe(!1);
  function z(N) {
    if (l() && t(_)) {
      if (N === "" || N === "-" || N === "." || N === "-.") return N;
      const ne = Number(N);
      return Number.isNaN(ne) ? "" : ne;
    }
    return N;
  }
  function T(N) {
    const le = N.target.value,
      oe = z(le);
    (u(oe), e.onChange?.(oe));
  }
  function I() {
    const N = l() && t(_) ? 0 : "";
    (u(N), e.onChange?.(N));
  }
  const q = g(() => String(u() ?? "")),
    Z = g(() => s() && a() === "input" && t(q).length > 0 && !t(_)),
    ue = g(() => !!e.trailing || t(Z) || t(P)),
    ce = "[color:var(--color-text-muted)]";
  var ge = rd(),
    me = p(ge);
  {
    var $ = (N) => {
      var ne = Wc(),
        le = p(ne);
      (O(
        (oe) => {
          (V(ne, 1, oe), J(le, e.label));
        },
        [() => U(B(Ne[n()], "font-medium", ce))],
      ),
        x(N, ne));
    };
    W(me, (N) => {
      e.label && N($);
    });
  }
  var ae = M(me, 2),
    K = p(ae);
  {
    var j = (N) => {
      const ne = g(() => typeof e.leading == "function");
      var le = Zc(),
        oe = p(le);
      {
        var Fe = (Ee) => {
            var de = Le(),
              Ae = Se(de);
            (Je(Ae, () => e.leading), x(Ee, de));
          },
          Ce = (Ee) => {
            var de = je();
            (O(() => J(de, e.leading)), x(Ee, de));
          };
        W(oe, (Ee) => {
          t(ne) ? Ee(Fe) : Ee(Ce, !1);
        });
      }
      (O(
        (Ee) => V(le, 1, Ee),
        [
          () =>
            U(
              B(
                "absolute inset-y-0 left-2 flex items-center [color:var(--color-text-muted)]",
              ),
            ),
        ],
      ),
        x(N, le));
    };
    W(K, (N) => {
      e.leading && N(j);
    });
  }
  var X = M(K, 2);
  {
    var Y = (N) => {
        var ne = Yc();
        (bt(
          ne,
          (le) => ({
            ...C,
            id: t(b),
            rows: i(),
            class: le,
            value: t(q),
            "aria-invalid": m() || void 0,
            "aria-describedby": e.describedBy,
            oninput: T,
          }),
          [() => B(t(v), t(ue) && "pr-8", e.leading && "pl-8")],
        ),
          x(N, ne));
      },
      H = (N) => {
        var ne = Xc();
        (bt(
          ne,
          (le) => ({
            ...C,
            id: t(b),
            type: t(P) ? (t(E) ? "text" : "password") : t(c),
            inputmode: t(_) ? "decimal" : void 0,
            class: le,
            value: t(q),
            "aria-invalid": m() || void 0,
            "aria-describedby": e.describedBy,
            oninput: T,
          }),
          [() => B(t(v), t(ue) && "pr-8", e.leading && "pl-8")],
          void 0,
          void 0,
          void 0,
          !0,
        ),
          x(N, ne));
      };
    W(X, (N) => {
      a() === "textarea" ? N(Y) : N(H, !1);
    });
  }
  var te = M(X, 2),
    pe = p(te);
  {
    var _e = (N) => {
      const ne = g(() => typeof e.trailing == "function");
      var le = Jc(),
        oe = p(le);
      {
        var Fe = (Ee) => {
            var de = Le(),
              Ae = Se(de);
            (Je(Ae, () => e.trailing), x(Ee, de));
          },
          Ce = (Ee) => {
            var de = je();
            (O(() => J(de, e.trailing)), x(Ee, de));
          };
        W(oe, (Ee) => {
          t(ne) ? Ee(Fe) : Ee(Ce, !1);
        });
      }
      x(N, le);
    };
    W(pe, (N) => {
      e.trailing && N(_e);
    });
  }
  var ve = M(pe, 2);
  {
    var D = (N) => {
      var ne = ed();
      ((ne.__mousedown = (Ce) => Ce.preventDefault()),
        (ne.__click = () => A(E, !t(E))));
      var le = p(ne);
      {
        var oe = (Ce) => {
            var Ee = Qc();
            x(Ce, Ee);
          },
          Fe = (Ce) => {
            var Ee = $c();
            x(Ce, Ee);
          };
        W(le, (Ce) => {
          t(E) ? Ce(oe) : Ce(Fe, !1);
        });
      }
      (O(
        (Ce) => {
          (V(ne, 1, Ce),
            he(ne, "aria-label", t(E) ? "Hide password" : "Show password"));
        },
        [
          () =>
            U(
              B(
                "password-toggle [color:var(--color-text-muted)] hover:opacity-[var(--opacity-hover)]",
              ),
            ),
        ],
      ),
        x(N, ne));
    };
    W(ve, (N) => {
      t(P) && N(D);
    });
  }
  var S = M(ve, 2);
  {
    var ee = (N) => {
      var ne = td();
      ((ne.__mousedown = (le) => le.preventDefault()),
        (ne.__click = I),
        O(
          (le) => V(ne, 1, le),
          [
            () =>
              U(
                B(
                  "[color:var(--color-text-muted)] hover:opacity-[var(--opacity-hover)]",
                ),
              ),
          ],
        ),
        x(N, ne));
    };
    W(S, (N) => {
      t(Z) && N(ee);
    });
  }
  (O(
    (N) => {
      (he(ge, "for", t(b)), V(ge, 1, U(t(k))), V(ae, 1, U(t(d))), V(te, 1, N));
    },
    [() => U(B("absolute inset-y-0 right-2 flex items-center gap-1"))],
  ),
    x(r, ge),
    Re());
}
ct(["mousedown", "click"]);
var ad = R('<p class="text-xs mt-1 [color:var(--color-text-muted)]"> </p>'),
  nd = R('<p class="text-sm mt-1 [color:var(--color-text-muted)]"> <!></p>'),
  od = R(
    '<div><input type="file" class="hidden"/> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <div role="button"><p class="text-sm [color:var(--color-text-muted)]"> </p> <!></div> <div class="mt-3 p-4 bg-[var(--color-bg-surface)] text-center" aria-live="polite"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)] break-words"><!></p> <!></div></div>',
  );
function sd(r, e) {
  Be(e, !0);
  let a = F(e, "accept", 3, "*/*"),
    n = F(e, "multiple", 3, !1),
    o = F(e, "disabled", 3, !1),
    s = F(e, "clearable", 3, !0),
    i = F(e, "value", 3, null),
    l = F(e, "class", 3, ""),
    u = mt(e, [
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
  const f = Gt("lang"),
    m = g(() => Fa[f.value].components.filePicker),
    C = g(() => e.label ?? t(m).text),
    h = g(() => e.placeholder ?? t(m).placeholder);
  let w,
    y = g(i),
    k = fe(!1);
  const v = "inline-block w-full",
    d = g(() => B(v, l())),
    b = g(() => !!(t(y) && t(y).length > 0)),
    c = g(() =>
      t(y)
        ? Array.from(t(y))
            .map((oe) => oe.name)
            .join(", ")
        : "",
    );
  function _() {
    o() || w?.click();
  }
  function P(oe) {
    const Ce = oe.target.files;
    (A(y, Ce), Ce && Ce.length > 0 && e.onFilesSelected?.(Ce));
  }
  function E(oe) {
    if ((oe.preventDefault(), A(k, !1), o())) return;
    const Fe = oe.dataTransfer?.files;
    (A(y, Fe || null), Fe && Fe.length > 0 && e.onFilesSelected?.(Fe));
  }
  function z(oe) {
    oe.preventDefault();
  }
  function T(oe) {
    (oe.preventDefault(), o() || A(k, !0));
  }
  function I(oe) {
    (oe.preventDefault(), A(k, !1));
  }
  function q(oe) {
    o() ||
      ((oe.key === "Enter" || oe.key === " ") && (oe.preventDefault(), _()));
  }
  function Z() {
    s() && (A(y, null), w && (w.value = ""), e.onFilesSelected?.(null));
  }
  var ue = od();
  bt(ue, () => ({ class: t(d), ...u }));
  var ce = p(ue);
  ((ce.__change = P),
    ut(
      ce,
      (oe) => (w = oe),
      () => w,
    ));
  var ge = M(ce, 2),
    me = p(ge);
  ot(me, {
    get disabled() {
      return o();
    },
    onClick: _,
    class: "relative",
    sz: "xs",
    children: (oe, Fe) => {
      var Ce = je();
      (O(() => J(Ce, t(C))), x(oe, Ce));
    },
    $$slots: { default: !0 },
  });
  var $ = M(me, 2);
  {
    var ae = (oe) => {
      {
        let Fe = g(() => !t(b) || o());
        ot(oe, {
          onClick: Z,
          variant: "danger",
          get disabled() {
            return t(Fe);
          },
          sz: "xs",
          children: (Ce, Ee) => {
            var de = je();
            (O(() => J(de, t(m).clear)), x(Ce, de));
          },
          $$slots: { default: !0 },
        });
      }
    };
    W($, (oe) => {
      s() && oe(ae);
    });
  }
  var K = M(ge, 2);
  let j;
  ((K.__click = _), (K.__keydown = q));
  var X = p(K),
    Y = p(X),
    H = M(X, 2);
  {
    var te = (oe) => {
      var Fe = ad(),
        Ce = p(Fe);
      (O(() => J(Ce, `${t(m).accepted ?? ""}: ${a() ?? ""}`)), x(oe, Fe));
    };
    W(H, (oe) => {
      a() !== "*/*" && oe(te);
    });
  }
  var pe = M(K, 2),
    _e = p(pe),
    ve = p(_e),
    D = M(_e, 2),
    S = p(D);
  {
    var ee = (oe) => {
        var Fe = je();
        (O(() => J(Fe, t(c))), x(oe, Fe));
      },
      N = (oe) => {
        var Fe = je();
        (O(() => J(Fe, t(h))), x(oe, Fe));
      };
    W(S, (oe) => {
      t(b) ? oe(ee) : oe(N, !1);
    });
  }
  var ne = M(D, 2);
  {
    var le = (oe) => {
      var Fe = nd(),
        Ce = p(Fe),
        Ee = M(Ce);
      {
        var de = (Ae) => {
          var L = je();
          (O(
            (re) => J(L, `• ${t(m).totalSize ?? ""}: ${re ?? ""} MB`),
            [
              () =>
                (
                  Array.from(t(y)).reduce((re, ie) => re + ie.size, 0) /
                  1024 /
                  1024
                ).toFixed(2),
            ],
          ),
            x(Ae, L));
        };
        W(Ee, (Ae) => {
          n() && t(y).length > 1 && Ae(de);
        });
      }
      (O(
        (Ae) => J(Ce, `${Ae ?? ""} `),
        [() => t(m).fileCount.replace("{n}", String(t(y).length))],
      ),
        x(oe, Fe));
    };
    W(ne, (oe) => {
      t(b) && t(y) && oe(le);
    });
  }
  (O(() => {
    (he(ce, "accept", a()),
      (ce.multiple = n()),
      (j = V(
        K,
        1,
        "mt-2 p-4 border-2 border-dashed rounded-[var(--radius-md)] text-center transition-colors duration-200",
        null,
        j,
        {
          "border-[var(--color-primary)]": t(k) && !o(),
          "border-[var(--border-color-default)]": !t(k) || o(),
          "bg-[var(--color-bg-surface-hover)]": t(k) && !o(),
          "cursor-pointer": !o(),
          "opacity-[var(--opacity-disabled)]": o(),
          "cursor-not-allowed": o(),
          "cursor-copy": t(k) && !o(),
        },
      )),
      he(K, "tabindex", o() ? -1 : 0),
      he(K, "aria-disabled", o()),
      J(Y, t(m).dragDrop),
      J(ve, t(m).selectedFiles));
  }),
    kt("drop", K, E),
    kt("dragover", K, z),
    kt("dragenter", K, T),
    kt("dragleave", K, I),
    x(r, ue),
    Re());
}
ct(["change", "click", "keydown"]);
var id = R("<label> </label>"),
  ld = R(
    '<span aria-hidden="true" class="block w-3 h-3 rounded-[var(--radius-xs)] border border-[var(--border-color-default)] shadow-sm shrink-0"></span>',
  ),
  ud = R(
    '<span class="inline-flex items-center gap-2 min-w-0"><!> <span class="truncate"> </span></span>',
  ),
  cd = R('<span class="[color:var(--color-text-muted)]"> </span>'),
  dd = R(
    '<span aria-hidden="true" class="block w-3 h-3 rounded-[var(--radius-xs)] border border-[var(--border-color-default)] shadow-sm shrink-0"></span>',
  ),
  fd = R(
    '<li role="option"><button type="button" tabindex="0"><!> <span class="truncate"> </span></button></li>',
  ),
  vd = R(
    '<div role="presentation" tabindex="-1" class="fixed inset-0 z-40"></div> <ul role="listbox" tabindex="-1"></ul>',
    1,
  ),
  gd = R("<div> </div>"),
  pd = R(
    '<div><!> <div class="w-full"><button type="button" role="combobox" aria-haspopup="listbox"><span class="min-w-0 grow truncate"><!></span> <span><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span></button></div> <!> <input type="hidden"/> <!></div>',
  );
function Kt(r, e) {
  Be(e, !0);
  let a = F(e, "options", 19, () => []),
    n = F(e, "sz", 3, "md"),
    o = F(e, "variant", 3, "default"),
    s = F(e, "value", 15, ""),
    i = F(e, "class", 3, ""),
    l = F(e, "invalid", 3, !1),
    u = F(e, "open", 15, !1);
  const f = Gt("BaseField"),
    m = g(() => e.id ?? f?.id ?? gn("sel-")),
    C = g(() => f?.name ?? t(m)),
    h = g(() => `${t(m)}-listbox`);
  let w = fe(null),
    y = fe(null),
    k = fe(-1),
    v = fe(et([])),
    d = fe("bottom");
  const b =
      "relative w-full outline-none appearance-none cursor-pointer transition-colors duration-[var(--transition-fast)] ease-[var(--timing-default)] box-border rounded-[var(--radius-md)] border focus:border-[var(--border-color-focus)] focus:ring-2 focus:ring-[var(--border-color-focus)] [color:var(--color-text-default)] disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
    c = {
      xs: "px-2 pr-6 h-6",
      sm: "px-3 pr-8 h-7",
      md: "px-4 pr-10 h-8",
      lg: "px-5 pr-12 h-9",
      xl: "px-6 pr-14 h-10",
    },
    _ = { xs: 120, sm: 144, md: 168, lg: 192, xl: 216 },
    P = {
      default:
        "border-[var(--border-color-default)] bg-[var(--color-bg-surface)]",
      filled: "border-[var(--border-color-default)] bg-[var(--color-bg-muted)]",
      neutral:
        "border-transparent bg-transparent hover:border-[var(--border-color-default)] focus:border-[var(--border-color-focus)]",
    },
    E = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-[18px] h-[18px]",
      xl: "w-5 h-5",
    },
    z = g(() => B("flex flex-col gap-1", i())),
    T = g(() => B(b, c[n()], Ne[n()], P[o()], "text-left")),
    I = g(() => e.maxHeight ?? _[n()]),
    q = g(() =>
      B(
        "z-50 border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] rounded-[var(--radius-md)] shadow-lg overflow-auto focus:outline-none",
      ),
    ),
    Z = g(() =>
      B(
        "w-full text-left px-4 py-2 transition-colors duration-[var(--transition-fast)] cursor-pointer",
        Ne[n()],
      ),
    ),
    ue = "opacity-[var(--opacity-disabled)] cursor-not-allowed";
  let ce = fe(0),
    ge = fe(0),
    me = fe(0);
  const $ = g(
      () =>
        `position:fixed;top:${t(ce)}px;left:${t(ge)}px;min-width:${t(me)}px;max-height:${t(I)}px;`,
    ),
    ae = g(() => a().find((G) => G.value === s()));
  (Ke(() => {
    const G = t(y),
      we = t(w);
    if (u() && G && we) {
      const Te = () => {
        const Oe = G.getBoundingClientRect(),
          Me = window.innerHeight - Oe.bottom,
          Xe = Oe.top,
          Qe = Math.min(we.scrollHeight, t(I)),
          dt = Me < Qe && Xe > Me ? "top" : "bottom";
        (A(d, dt, !0),
          (we.dataset.position = dt),
          dt === "top"
            ? A(ce, Math.max(0, Oe.top - Qe), !0)
            : A(ce, Oe.bottom, !0),
          A(ge, Oe.left, !0),
          A(me, Oe.width, !0));
      };
      queueMicrotask(Te);
      const ze = (Oe) => {
          G && we && !G.contains(Oe.target) && !we.contains(Oe.target) && H();
        },
        Ie = () => Te(),
        He = () => Te();
      return (
        document.addEventListener("mousedown", ze),
        window.addEventListener("scroll", Ie, !0),
        window.addEventListener("resize", He),
        () => {
          (document.removeEventListener("mousedown", ze),
            window.removeEventListener("scroll", Ie, !0),
            window.removeEventListener("resize", He));
        }
      );
    }
  }),
    Ke(() => {
      const G = t(w);
      !u() ||
        !G ||
        queueMicrotask(() => {
          G ? A(v, Array.from(G.querySelectorAll("button")), !0) : A(v, [], !0);
        });
    }));
  function K(G) {
    if (!t(v).length || !a().length) return;
    const we = a().length;
    let Te = G;
    for (let ze = 0; ze < we; ze++) {
      const Ie = (Te + ze) % we;
      if (!a()[Ie]?.disabled && t(v)[Ie]) {
        (t(v)[Ie].focus(), A(k, Ie));
        return;
      }
    }
  }
  function j() {
    K(0);
  }
  function X() {
    if (!(!a().length || !t(v).length)) {
      for (let G = a().length - 1; G >= 0; G--)
        if (!a()[G]?.disabled && t(v)[G]) {
          (t(v)[G].focus(), A(k, G, !0));
          return;
        }
    }
  }
  function Y() {
    e.disabled || u(!0);
  }
  function H() {
    (u(!1), A(k, -1));
  }
  function te() {
    u() ? H() : Y();
  }
  function pe(G) {
    if (!u() || !a().length) return;
    const we = a().length;
    let Te = t(k);
    for (
      let ze = 0;
      ze < we && ((Te = (Te + G + we) % we), !!a()[Te].disabled);
      ze++
    );
    (A(k, Te, !0), t(v)[Te] && t(v)[Te].focus());
  }
  function _e(G) {
    const we = a()[G];
    !we || we.disabled || (s(we.value), e.onChange?.(we.value), H());
  }
  function ve(G) {
    e.disabled ||
      (G.key === " " || G.key === "Enter"
        ? (G.preventDefault(), te())
        : G.key === "ArrowDown"
          ? (G.preventDefault(), u() || Y(), pe(1))
          : G.key === "ArrowUp"
            ? (G.preventDefault(), u() || Y(), pe(-1))
            : G.key === "Escape" && u() && (G.preventDefault(), H()));
  }
  function D(G) {
    if (u()) {
      if (G.key === "Tab") {
        const we = document.activeElement,
          Te = t(v).findIndex((Ie) => Ie === we);
        let ze = -1;
        for (let Ie = a().length - 1; Ie >= 0; Ie--)
          if (!a()[Ie]?.disabled) {
            ze = Ie;
            break;
          }
        G.shiftKey
          ? Te <= 0 && (G.preventDefault(), X())
          : Te === ze && (G.preventDefault(), j());
        return;
      }
      G.key === "ArrowDown"
        ? (G.preventDefault(), pe(1))
        : G.key === "ArrowUp"
          ? (G.preventDefault(), pe(-1))
          : G.key === "Home"
            ? (G.preventDefault(), j())
            : G.key === "End"
              ? (G.preventDefault(), X())
              : G.key === "Enter" || G.key === " "
                ? (G.preventDefault(), t(k) >= 0 && _e(t(k)))
                : G.key === "Escape" && (G.preventDefault(), H());
    }
  }
  function S(G) {
    G.key === "Escape" && (G.preventDefault(), H());
  }
  var ee = pd(),
    N = p(ee);
  {
    var ne = (G) => {
      var we = id(),
        Te = p(we);
      (O(
        (ze) => {
          (he(we, "id", `${t(m)}-hidden-label`),
            he(we, "for", `${t(m)}-hidden`),
            V(we, 1, ze),
            J(Te, e.label));
        },
        [() => U(B(Ne[n()], "font-medium [color:var(--color-text-muted)]"))],
      ),
        x(G, we));
    };
    W(N, (G) => {
      e.label && G(ne);
    });
  }
  var le = M(N, 2),
    oe = p(le);
  ((oe.__click = () => {
    te();
  }),
    (oe.__keydown = ve));
  var Fe = p(oe),
    Ce = p(Fe);
  {
    var Ee = (G) => {
        var we = ud(),
          Te = p(we);
        {
          var ze = (Oe) => {
            var Me = ld();
            (O(() => lt(Me, `background:${t(ae).swatch}`)), x(Oe, Me));
          };
          W(Te, (Oe) => {
            t(ae).swatch && Oe(ze);
          });
        }
        var Ie = M(Te, 2),
          He = p(Ie);
        (O(() => J(He, t(ae).label)), x(G, we));
      },
      de = (G) => {
        var we = cd(),
          Te = p(we);
        (O(() => J(Te, e.placeholder)), x(G, we));
      };
    W(Ce, (G) => {
      t(ae) ? G(Ee) : G(de, !1);
    });
  }
  var Ae = M(Fe, 2),
    L = p(Ae);
  ut(
    oe,
    (G) => A(y, G),
    () => t(y),
  );
  var re = M(le, 2);
  {
    var ie = (G) => {
      var we = vd(),
        Te = Se(we);
      ((Te.__click = H), (Te.__keydown = S));
      var ze = M(Te, 2);
      ((ze.__keydown = D),
        nt(
          ze,
          23,
          a,
          (Ie) => Ie.value,
          (Ie, He, Oe) => {
            var Me = fd(),
              Xe = p(Me);
            Xe.__click = () => _e(t(Oe));
            var Qe = p(Xe);
            {
              var dt = (tt) => {
                var se = dd();
                (O(() => lt(se, `background:${t(He).swatch}`)), x(tt, se));
              };
              W(Qe, (tt) => {
                t(He).swatch && tt(dt);
              });
            }
            var Dt = M(Qe, 2),
              It = p(Dt);
            (O(
              (tt, se) => {
                (he(Me, "id", `${t(m)}-opt-${t(Oe)}`),
                  he(
                    Me,
                    "aria-selected",
                    !t(He).disabled && t(He).value === s(),
                  ),
                  he(Me, "aria-disabled", t(He).disabled),
                  V(Me, 1, tt),
                  V(Xe, 1, se),
                  (Xe.disabled = t(He).disabled),
                  J(It, t(He).label));
              },
              [
                () => U(B(t(Z), t(He).disabled ? ue : "")),
                () =>
                  U(
                    B(
                      "w-full text-left focus:outline-[3px] focus:outline-offset-3 focus:outline-[var(--border-color-focus)] rounded flex items-center gap-2",
                    ),
                  ),
              ],
            ),
              kt("focus", Xe, () => A(k, t(Oe), !0)),
              kt("mouseenter", Xe, () => A(k, t(Oe), !0)),
              x(Ie, Me));
          },
        ),
        ut(
          ze,
          (Ie) => A(w, Ie),
          () => t(w),
        ),
        O(() => {
          (he(ze, "id", t(h)),
            V(ze, 1, U(t(q))),
            lt(ze, t($)),
            he(ze, "data-position", t(d)),
            he(
              ze,
              "aria-labelledby",
              e.label ? `${t(m)}-hidden-label` : void 0,
            ),
            he(
              ze,
              "aria-activedescendant",
              t(k) >= 0 ? `${t(m)}-opt-${t(k)}` : void 0,
            ));
        }),
        x(G, we));
    };
    W(re, (G) => {
      u() && G(ie);
    });
  }
  var be = M(re, 2),
    ke = M(be, 2);
  {
    var xe = (G) => {
      var we = gd(),
        Te = p(we);
      (O(
        (ze) => {
          (he(we, "id", e.describedBy), V(we, 1, ze), J(Te, e.help));
        },
        [() => U(B("[color:var(--color-text-muted)]", Ne.sm))],
      ),
        x(G, we));
    };
    W(ke, (G) => {
      e.help && G(xe);
    });
  }
  (O(
    (G) => {
      (V(ee, 1, U(t(z))),
        he(oe, "id", t(m)),
        V(oe, 1, U(t(T))),
        he(oe, "aria-expanded", u()),
        he(oe, "aria-controls", t(h)),
        he(oe, "aria-describedby", e.describedBy),
        he(oe, "aria-invalid", l()),
        he(oe, "aria-required", e.required),
        (oe.disabled = e.disabled),
        V(Ae, 1, G),
        V(L, 0, U(E[n()])),
        he(be, "id", `${t(m)}-hidden`),
        he(be, "name", t(C)),
        Ci(be, s() ?? ""));
    },
    [
      () =>
        U(
          B(
            "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 [color:var(--color-text-default)]",
          ),
        ),
    ],
  ),
    x(r, ee),
    Re());
}
ct(["click", "keydown"]);
const hd = (r) => r;
function Cs(r, { delay: e = 0, duration: a = 400, easing: n = hd } = {}) {
  const o = +getComputedStyle(r).opacity;
  return { delay: e, duration: a, easing: n, css: (s) => `opacity: ${s * o}` };
}
var bd = Wt(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M8.5 14L11.1 16.6" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M18.2 10L11.6 16.6" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path></svg>',
  ),
  md = Wt(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M9 9.5L16.7 17.3" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M16.7 9.5L9 17.3" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path></svg>',
  ),
  _d = Wt(
    '<svg fill="none" viewBox="0 0 27 27"><path d="M4.6 25.925H22.5C25.2 25.925 26.8 23.022 25.6 20.6195L16.6 3.80194C15.3 1.29934 11.8 1.29934 10.5 3.80194L1.5 20.6195C0.299997 23.022 1.9 25.925 4.6 25.925Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M13.9 18.0168H13.2C12.5 18.0168 12.6 17.4162 12.6 16.7154L11.9 9.30769C11.9 8.60696 12.5 8.00635 13.2 8.00635H13.9C14.6 8.00635 15.2 8.60696 15.2 9.30769L14.5 16.7154C14.5 17.4162 14.6 18.0168 13.9 18.0168Z" fill="currentColor"></path><path d="M13.5 21.9208C14.4389 21.9208 15.2 21.3382 15.2 20.6195C15.2 19.9008 14.4389 19.3181 13.5 19.3181C12.5611 19.3181 11.8 19.9008 11.8 20.6195C11.8 21.3382 12.5611 21.9208 13.5 21.9208Z" fill="currentColor"></path></svg>',
  ),
  xd = Wt(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path><path d="M13 9.00003C13.718 9.00003 14.3 8.41801 14.3 7.70004C14.3 6.98207 13.718 6.40002 13 6.40002C12.282 6.40002 11.7 6.98207 11.7 7.70004C11.7 8.41801 12.282 9.00003 13 9.00003Z" fill="currentColor"></path><path d="M13 19.7C12.2 19.7 11.6 19.1 11.6 18.4V11.6C11.6 10.9 12.2 10.3 12.9 10.3H13C13.7 10.3 14.3 10.9 14.3 11.6V18.4C14.3 19.1 13.8 19.7 13 19.7Z" fill="currentColor"></path></svg>',
  ),
  wd = R('<span class="w-5 h-5 flex-shrink-0" aria-hidden="true"><!></span>'),
  yd = R(
    '<div class="font-[var(--font-weight-medium)] truncate [font-size:var(--text-md)] max-sm:[font-size:var(--text-sm)]"> </div>',
  ),
  kd = R(
    '<button class="opacity-70 hover:opacity-100 transition-opacity duration-[var(--transition-fast)] ml-3" aria-label="Close"><svg width="24" height="24" viewBox="0 0 20 20" fill="none"><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button>',
  ),
  Cd = R(
    '<div role="status" aria-live="polite"><!> <div class="flex-1 min-w-0"><!> <div class="line-clamp-3 [font-size:var(--text-sm)] max-sm:[font-size:var(--text-xs)]"> </div></div> <!></div>',
  );
function Yo(r, e) {
  Be(e, !0);
  let a = F(e, "variant", 3, "info"),
    n = F(e, "showIcon", 3, !0),
    o = F(e, "closable", 3, !0),
    s = F(e, "timeout", 3, 3e3),
    i = F(e, "onClose", 3, () => {}),
    l = F(e, "class", 3, ""),
    u = fe(!0);
  function f(k) {
    switch (k) {
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
  function m() {
    (A(u, !1), i()());
  }
  Ke(() => {
    if (s() > 0) {
      const k = setTimeout(() => m(), s());
      return () => clearTimeout(k);
    }
  });
  const C = g(() =>
    B(
      "fixed bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-[var(--radius-lg)] shadow-lg min-w-[220px] max-w-[calc(100vw-2rem)] border border-[var(--border-color-default)] backdrop-blur-sm",
      f(a()),
      l(),
    ),
  );
  var h = Le(),
    w = Se(h);
  {
    var y = (k) => {
      var v = Cd(),
        d = p(v);
      {
        var b = (q) => {
          var Z = wd(),
            ue = p(Z);
          {
            var ce = (me) => {
                var $ = bd();
                x(me, $);
              },
              ge = (me) => {
                var $ = Le(),
                  ae = Se($);
                {
                  var K = (X) => {
                      var Y = md();
                      x(X, Y);
                    },
                    j = (X) => {
                      var Y = Le(),
                        H = Se(Y);
                      {
                        var te = (_e) => {
                            var ve = _d();
                            x(_e, ve);
                          },
                          pe = (_e) => {
                            var ve = xd();
                            x(_e, ve);
                          };
                        W(
                          H,
                          (_e) => {
                            a() === "warning" ? _e(te) : _e(pe, !1);
                          },
                          !0,
                        );
                      }
                      x(X, Y);
                    };
                  W(
                    ae,
                    (X) => {
                      a() === "danger" ? X(K) : X(j, !1);
                    },
                    !0,
                  );
                }
                x(me, $);
              };
            W(ue, (me) => {
              a() === "success" ? me(ce) : me(ge, !1);
            });
          }
          x(q, Z);
        };
        W(d, (q) => {
          n() && q(b);
        });
      }
      var c = M(d, 2),
        _ = p(c);
      {
        var P = (q) => {
          var Z = yd(),
            ue = p(Z);
          (O(() => J(ue, e.title)), x(q, Z));
        };
        W(_, (q) => {
          e.title && q(P);
        });
      }
      var E = M(_, 2),
        z = p(E),
        T = M(c, 2);
      {
        var I = (q) => {
          var Z = kd();
          ((Z.__click = m), x(q, Z));
        };
        W(T, (q) => {
          o() && q(I);
        });
      }
      (O(() => {
        (V(v, 1, U(t(C))), he(E, "title", e.message), J(z, e.message));
      }),
        ds(
          1,
          v,
          () => Cs,
          () => ({ duration: 200 }),
        ),
        ds(
          2,
          v,
          () => Cs,
          () => ({ duration: 200 }),
        ),
        x(k, v));
    };
    W(w, (k) => {
      t(u) && k(y);
    });
  }
  (x(r, h), Re());
}
ct(["click"]);
var Sd = R('<span class="text-[var(--color-text-default)]">*</span>'),
  Pd = R("<div> <!></div>"),
  Ed = R("<div><!></div>"),
  zd = R("<li> </li>"),
  Ad = R("<ul></ul>"),
  Fd = R("<div><!> <!> <!></div>"),
  Td = R('<form novalidate=""></form> <!>', 1);
function Ld(r, e) {
  Be(e, !0);
  let a = F(e, "value", 19, () => ({})),
    n = F(e, "rowGap", 3, "md"),
    o = F(e, "validateOn", 3, "blur"),
    s = F(e, "labelAlign", 3, "left"),
    i = F(e, "labelWeight", 3, "medium"),
    l = F(e, "labelSize", 3, "md"),
    u = F(e, "compact", 3, !1);
  const f = { xs: "xs", sm: "xs", md: "sm", lg: "md", xl: "lg" },
    m = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    C = { xs: "gap-1", sm: "gap-2", md: "gap-4", lg: "gap-6", xl: "gap-8" },
    h = (D) => (D == null ? "" : String(D));
  let w = et({});
  const y = et({}),
    k = et({});
  let v = fe(et([])),
    d = 0;
  const b = g(() => (u() ? "" : "w-full")),
    c = g(() => (typeof n() == "number" ? "" : (C[n()] ?? C.md))),
    _ = g(() => (typeof n() == "number" ? n() + "px" : "")),
    P = (D) => {
      const S = w[D];
      return typeof S == "number" ? S : h(S);
    };
  function E(D) {
    return u() ? (f[D] ?? "md") : D;
  }
  const z = globalThis;
  z.__svelteCompFormInstanceCounter ??= 0;
  const T = et(z.__svelteCompFormInstanceCounter++),
    I = g(() => {
      if (e.formId && e.formId.trim()) return e.formId.trim();
      const D = e.schema.map((N) => N.name).join("|");
      let S = 0;
      for (let N = 0; N < D.length; N += 1)
        ((S = (S << 5) - S + D.charCodeAt(N)), (S |= 0));
      return `form-${Math.abs(S >>> 0).toString(36) || "form"}`;
    }),
    q = g(() => (e.formId && e.formId.trim() ? t(I) : `${t(I)}-${T}`));
  Ke(() => {
    const D = new Set(e.schema.map((S) => S.name));
    for (const S of Object.keys(w))
      D.has(S) || (delete w[S], delete y[S], delete k[S]);
    for (const S of e.schema)
      (Object.prototype.hasOwnProperty.call(a(), S.name)
        ? (w[S.name] = a()[S.name])
        : S.name in w ||
          (w[S.name] = S.default ?? (S.type === "checkbox" ? !1 : "")),
        S.name in y || (y[S.name] = !1),
        k[S.name] || (k[S.name] = []));
  });
  const Z = $u((D) => {
    $(D);
  }, 150);
  function ue(D, S) {
    w[D] !== S && ((w[D] = S), o() === "input" && Z(D), e.onChange?.({ ...w }));
  }
  function ce(D) {
    (y[D] || (y[D] = !0), o() !== "submit" && $(D));
  }
  function ge(D) {
    A(
      v,
      t(v).filter((S) => S.id !== D),
      !0,
    );
  }
  function me(D, S, ee) {
    const N = d++;
    A(v, [...t(v), { id: N, message: S, variant: D, title: ee }], !0);
  }
  async function $(D) {
    const S = e.schema.find((ne) => ne.name === D);
    if (!S) return;
    const ee = w[D],
      N = [];
    if (
      (S.required &&
        (ee === "" || ee == null || (S.type === "checkbox" && !ee)) &&
        N.push("Required"),
      S.type === "number" &&
        ee !== "" &&
        Number.isNaN(Number(ee)) &&
        N.push("Must be a number"),
      S.type === "email" &&
        ee !== "" &&
        (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(ee)) ||
          N.push("Invalid email")),
      S.validators)
    )
      for (const ne of S.validators) {
        const le = await ne(ee, w);
        le && N.push(le);
      }
    k[D] = N;
  }
  function ae(D) {
    return D.when ? !!D.when(w) : !0;
  }
  const K = g(() => e.schema.filter(ae)),
    j = g(() => t(K).map((D) => D.name));
  async function X() {
    return (
      await Promise.all(t(j).map($)),
      t(j).every((D) => (k[D]?.length ?? 0) === 0)
    );
  }
  function Y() {
    for (const D of e.schema)
      ((w[D.name] = D.default ?? (D.type === "checkbox" ? !1 : "")),
        (y[D.name] = !1),
        (k[D.name] = []));
    e.onChange?.({ ...w });
  }
  async function H(D) {
    if ((D?.preventDefault?.(), !!(await X())))
      try {
        (await e.onSubmit?.({ ...w }, { reset: Y }),
          me("success", "Form submitted successfully"));
      } catch (ee) {
        throw (me("danger", "Form submission failed", "Error"), ee);
      }
  }
  Ke(() => {
    const D = {
      reset: Y,
      submit: () => H(),
      validate: () => X(),
      getData: () => ({ ...w }),
      setValue: (S, ee) => ue(S, ee),
    };
    e.expose?.(D);
  });
  var te = Td(),
    pe = Se(te);
  let _e;
  nt(
    pe,
    21,
    () => t(K),
    (D) => D.name,
    (D, S) => {
      var ee = Le(),
        N = Se(ee);
      (wu(
        N,
        () => t(S).name,
        (ne) => {
          var le = Fd(),
            oe = p(le);
          {
            var Fe = (re) => {
              var ie = Pd(),
                be = p(ie),
                ke = M(be);
              {
                var xe = (G) => {
                  var we = Sd();
                  x(G, we);
                };
                W(ke, (G) => {
                  t(S).required && G(xe);
                });
              }
              (O(
                (G) => {
                  (V(ie, 1, G), J(be, `${t(S).label ?? ""} `));
                },
                [
                  () =>
                    U(
                      B(
                        m[i()],
                        u()
                          ? "text-xs -mb-1 text-center"
                          : [
                              Ne[l()],
                              s() === "center"
                                ? "text-center"
                                : s() === "right"
                                  ? "text-right"
                                  : "text-left",
                            ],
                        "text-[var(--color-text-default)] leading-normal",
                      ),
                    ),
                ],
              ),
                x(re, ie));
            };
            W(oe, (re) => {
              t(S).label && re(Fe);
            });
          }
          var Ce = M(oe, 2);
          {
            var Ee = (re) => {
                const ie = g(
                    () =>
                      (y[t(S).name] || o() !== "submit") &&
                      k[t(S).name]?.length > 0,
                  ),
                  be = g(() => (t(ie) ? `${t(q)}-err-${t(S).name}` : void 0));
                {
                  let ke = g(() => B(t(S).class, t(b))),
                    xe = g(() =>
                      (t(S).options ?? []).map((ze) => ({
                        label: h(ze.label),
                        value: h(ze.value),
                        disabled: ze.disabled,
                      })),
                    ),
                    G = g(() => E(t(S).sz ?? "md")),
                    we = g(() => t(S).variant ?? "default"),
                    Te = g(() => h(w[t(S).name]));
                  Kt(re, {
                    get class() {
                      return t(ke);
                    },
                    get options() {
                      return t(xe);
                    },
                    get sz() {
                      return t(G);
                    },
                    get variant() {
                      return t(we);
                    },
                    get value() {
                      return t(Te);
                    },
                    onChange: (ze) => ue(t(S).name, ze),
                    onblur: () => ce(t(S).name),
                    get invalid() {
                      return t(ie);
                    },
                    get describedBy() {
                      return t(be);
                    },
                  });
                }
              },
              de = (re) => {
                var ie = Le(),
                  be = Se(ie);
                {
                  var ke = (G) => {
                      var we = Ed(),
                        Te = p(we);
                      {
                        let ze = g(() => t(S).class ?? ""),
                          Ie = g(() => E(t(S).sz ?? "md")),
                          He = g(() => !!w[t(S).name]);
                        on(Te, {
                          get class() {
                            return t(ze);
                          },
                          get sz() {
                            return t(Ie);
                          },
                          variant: "default",
                          get checked() {
                            return t(He);
                          },
                          onChange: (Oe) => ue(t(S).name, Oe),
                          onblur: () => ce(t(S).name),
                        });
                      }
                      (O(
                        (ze) => V(we, 1, ze),
                        [
                          () =>
                            U(
                              B(
                                t(S).class,
                                u() && "mx-auto justify-self-center",
                              ),
                            ),
                        ],
                      ),
                        x(G, we));
                    },
                    xe = (G) => {
                      const we = g(
                          () =>
                            (y[t(S).name] || o() !== "submit") &&
                            k[t(S).name]?.length > 0,
                        ),
                        Te = g(() =>
                          t(we) ? `${t(q)}-err-${t(S).name}` : void 0,
                        );
                      {
                        let ze = g(() => B(t(S).class, t(b))),
                          Ie = g(() =>
                            t(S).type === "textarea" ? "textarea" : "input",
                          ),
                          He = g(() =>
                            t(S).type === "number"
                              ? "number"
                              : t(S).type === "password"
                                ? "password"
                                : t(S).type === "email"
                                  ? "email"
                                  : "text",
                          ),
                          Oe = g(() => t(S).rows ?? 3),
                          Me = g(() => t(S).type === "number"),
                          Xe = g(() => E(t(S).sz ?? "md")),
                          Qe = g(() => t(S).variant ?? "default"),
                          dt = g(() => P(t(S).name)),
                          Dt = g(() =>
                            t(S).type === "email" ? "email" : void 0,
                          ),
                          It = g(() =>
                            t(S).type === "email" ? "email" : void 0,
                          );
                        _a(G, {
                          get class() {
                            return t(ze);
                          },
                          get as() {
                            return t(Ie);
                          },
                          get type() {
                            return t(He);
                          },
                          get rows() {
                            return t(Oe);
                          },
                          get parseNumber() {
                            return t(Me);
                          },
                          get sz() {
                            return t(Xe);
                          },
                          get variant() {
                            return t(Qe);
                          },
                          get value() {
                            return t(dt);
                          },
                          onChange: (tt) => ue(t(S).name, tt),
                          onblur: () => ce(t(S).name),
                          get invalid() {
                            return t(we);
                          },
                          get describedBy() {
                            return t(Te);
                          },
                          get autocomplete() {
                            return t(Dt);
                          },
                          get inputmode() {
                            return t(It);
                          },
                        });
                      }
                    };
                  W(
                    be,
                    (G) => {
                      t(S).type === "checkbox" ? G(ke) : G(xe, !1);
                    },
                    !0,
                  );
                }
                x(re, ie);
              };
            W(Ce, (re) => {
              t(S).type === "select" ? re(Ee) : re(de, !1);
            });
          }
          var Ae = M(Ce, 2);
          {
            var L = (re) => {
              var ie = Ad();
              (nt(
                ie,
                23,
                () => k[t(S).name] ?? [],
                (be, ke) => `${t(S).name}-${ke}`,
                (be, ke) => {
                  var xe = zd(),
                    G = p(xe);
                  (O(
                    (we) => {
                      (V(xe, 1, we), J(G, t(ke)));
                    },
                    [
                      () =>
                        U(
                          B(
                            "text-xs leading-tight mt-1 text-[var(--color-text-red)]",
                            u() && "text-[10px]",
                          ),
                        ),
                    ],
                  ),
                    x(be, xe));
                },
              ),
                O(
                  (be) => {
                    (he(ie, "id", `${t(q)}-err-${t(S).name}`), V(ie, 1, be));
                  },
                  [() => U(B("m-0 pl-4 list-none", u() && "text-center"))],
                ),
                x(re, ie));
            };
            W(Ae, (re) => {
              (y[t(S).name] || o() !== "submit") &&
                k[t(S).name]?.length &&
                re(L);
            });
          }
          (O(
            (re) => V(le, 1, re),
            [
              () =>
                U(
                  B(
                    "grid gap-1 w-full min-w-0",
                    u() ? "justify-items-center" : "justify-items-stretch",
                  ),
                ),
            ],
          ),
            x(ne, le));
        },
      ),
        x(D, ee));
    },
  );
  var ve = M(pe, 2);
  (nt(
    ve,
    17,
    () => t(v),
    (D) => D.id,
    (D, S) => {
      Yo(D, {
        get title() {
          return t(S).title;
        },
        get message() {
          return t(S).message;
        },
        get variant() {
          return t(S).variant;
        },
        onClose: () => ge(t(S).id),
      });
    },
  ),
    O(
      (D) => {
        (he(pe, "id", t(q)), V(pe, 1, D), (_e = lt(pe, "", _e, { gap: t(_) })));
      },
      [
        () =>
          U(
            B(
              "grid font-sans w-full",
              t(c),
              u() && "gap-2 justify-items-center",
            ),
          ),
      ],
    ),
    kt("submit", pe, H),
    x(r, te),
    Re());
}
var Md = R(
    '<div class="p-4 border-b border-[var(--border-color-default)]"><!></div>',
  ),
  Dd = R(
    '<div class="text-xs opacity-70 px-3 py-2 text-center">No items</div>',
  ),
  Id = R(
    '<li><button type="button" class="w-full text-left px-3 py-2 rounded-md hover:bg-[var(--color-bg-hover)] focus:outline-[var(--border-color-focus)] focus:outline-2 transition-colors"> </button></li>',
  ),
  Nd = R('<ul class="grid gap-2 p-4"></ul>'),
  Od = R(
    '<div class="p-4 border-t border-[var(--border-color-default)]"><!></div>',
  ),
  Bd = R(
    '<div class="fixed inset-0 z-[var(--z-overlay)] flex"><div role="dialog" aria-modal="true" tabindex="-1" class="flex flex-col h-full bg-[var(--color-bg-surface)] shadow-xl"><!> <div class="flex-1 overflow-y-auto" tabindex="-1"><!></div> <!></div> <button type="button" class="flex-1 bg-black/40" aria-hidden="true"></button></div>',
  ),
  Rd = R(
    '<button type="button" aria-label="Toggle navigation"><span class="relative block w-5 h-3.5"><span></span> <span></span> <span></span></span></button> <!>',
    1,
  );
function jd(r, e) {
  Be(e, !0);
  let a = F(e, "menuItems", 19, () => []),
    n = F(e, "activeItem", 3, ""),
    o = F(e, "closeOnSelect", 3, !0),
    s = F(e, "class", 3, ""),
    i = F(e, "width", 3, 300),
    l = fe(void 0),
    u = fe(void 0),
    f = null,
    m = fe(!1);
  const C = g(() => e.pressed ?? t(m));
  function h(Z) {
    e.pressed === void 0 ? A(m, Z, !0) : e.onOpenChange?.(Z);
  }
  function w() {
    h(!t(C));
  }
  function y() {
    (h(!1), queueMicrotask(() => t(l)?.focus()));
  }
  const k = ec(() => y(), 150);
  function v(Z) {
    Z.key === "Escape" && k();
  }
  Ke(
    () => (
      t(C) && t(u)
        ? (queueMicrotask(() => {
            zi(t(u));
          }),
          f?.(),
          (f = Ai(t(u))),
          document.addEventListener("keydown", v))
        : (f?.(), (f = null), document.removeEventListener("keydown", v)),
      () => {
        (document.removeEventListener("keydown", v), f?.(), (f = null));
      }
    ),
  );
  const d =
      "fixed top-4 left-4 inline-flex items-center justify-center h-8 w-8 rounded-md border border-[var(--border-color-default)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] transition-colors z-[var(--z-modal)]",
    b = g(() => B(d, s()));
  var c = Rd(),
    _ = Se(c);
  _.__click = w;
  var P = p(_),
    E = p(P),
    z = M(E, 2),
    T = M(z, 2);
  ut(
    _,
    (Z) => A(l, Z),
    () => t(l),
  );
  var I = M(_, 2);
  {
    var q = (Z) => {
      var ue = Bd(),
        ce = p(ue),
        ge = p(ce);
      {
        var me = (te) => {
          var pe = Md(),
            _e = p(pe);
          (Je(_e, () => e.header ?? Q), x(te, pe));
        };
        W(ge, (te) => {
          e.header && te(me);
        });
      }
      var $ = M(ge, 2),
        ae = p($);
      {
        var K = (te) => {
            var pe = Dd();
            x(te, pe);
          },
          j = (te) => {
            var pe = Nd();
            (nt(
              pe,
              21,
              a,
              (_e) => _e.id,
              (_e, ve) => {
                var D = Id(),
                  S = p(D);
                S.__click = () => {
                  (e.onSelect?.(t(ve).id), o() && y());
                };
                var ee = p(S);
                (O(() => {
                  (he(S, "aria-current", n() === t(ve).id ? "page" : void 0),
                    J(ee, t(ve).label));
                }),
                  x(_e, D));
              },
            ),
              x(te, pe));
          };
        W(ae, (te) => {
          a().length === 0 ? te(K) : te(j, !1);
        });
      }
      var X = M($, 2);
      {
        var Y = (te) => {
          var pe = Od(),
            _e = p(pe);
          (Je(_e, () => e.footer ?? Q), x(te, pe));
        };
        W(X, (te) => {
          e.footer && te(Y);
        });
      }
      ut(
        ce,
        (te) => A(u, te),
        () => t(u),
      );
      var H = M(ce, 2);
      ((H.__click = y),
        O(() => lt(ce, `width:${typeof i() == "number" ? `${i()}px` : i()}`)),
        x(Z, ue));
    };
    W(I, (Z) => {
      t(C) && Z(q);
    });
  }
  (O(
    (Z, ue, ce) => {
      (he(_, "aria-expanded", t(C)),
        V(_, 1, U(t(b))),
        V(E, 1, Z),
        V(z, 1, ue),
        V(T, 1, ce));
    },
    [
      () =>
        U(
          B(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform duration-200",
            t(C)
              ? "translate-y-[-50%] rotate-45"
              : "translate-y-[calc(-50%_-_6px)]",
          ),
        ),
      () =>
        U(
          B(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-opacity duration-200 translate-y-[-50%]",
            t(C) ? "opacity-0" : "opacity-100",
          ),
        ),
      () =>
        U(
          B(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform duration-200",
            t(C)
              ? "translate-y-[-50%] -rotate-45"
              : "translate-y-[calc(-50%_+_6px)]",
          ),
        ),
    ],
  ),
    x(r, c),
    Re());
}
ct(["click"]);
var Vd = R(
    '<div role="group" class="relative inline-block overflow-visible"><button type="button" aria-haspopup="menu"> </button></div>',
  ),
  qd = R(
    '<div class="my-1 mx-1 border-t border-[var(--border-color-default)]" role="separator"></div>',
  ),
  Ud = R("<span> </span>"),
  Hd = R("<span>&gt;</span>"),
  Kd = R(
    '<div class="my-1 mx-1 border-t border-[var(--border-color-default)]" role="separator"></div>',
  ),
  Gd = R("<span> </span>"),
  Wd = R(
    '<button type="button" role="menuitem"><span class="flex items-center gap-2 flex-1 min-w-0"><span class="truncate"> </span></span> <span><!></span></button>',
  ),
  Zd = R('<div role="menu" tabindex="0"></div>'),
  Yd = R(
    '<div class="relative"><button type="button" role="menuitem"><span class="flex items-center gap-2 flex-1 min-w-0"><span class="truncate"> </span></span> <span class="flex items-center shrink-0 ml-auto gap-1"><!> <!></span></button> <!></div>',
  ),
  Xd = R(
    '<div role="presentation" tabindex="-1" class="fixed inset-0 z-40"></div> <div role="menu" tabindex="-1"></div>',
    1,
  ),
  Jd = R('<nav aria-label="Menu bar"></nav> <!>', 1);
function Ti(r, e) {
  Be(e, !0);
  let a = F(e, "menus", 19, () => []),
    n = F(e, "onSelect", 3, () => {}),
    o = F(e, "class", 3, ""),
    s = F(e, "sz", 3, "sm"),
    i = fe(""),
    l = fe(""),
    u = fe(-1),
    f = fe(-1),
    m = et({}),
    C = et({}),
    h = et({}),
    w = et({}),
    y = fe(0),
    k = fe(0),
    v = et({}),
    d = fe(0),
    b = fe(0);
  const c = {
      xs: "h-7 px-3",
      sm: "h-8 px-3",
      md: "h-9 px-4",
      lg: "h-10 px-4",
      xl: "h-11 px-5",
    },
    _ =
      "flex items-stretch pl-2 gap-1 border-b relative z-10 bg-[var(--color-bg-surface)] text-[var(--color-text-default)] border-[var(--border-color-default)]",
    P = 8,
    E =
      "px-4 rounded-xs leading-none transition-colors outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]",
    z = "bg-[var(--color-bg-muted)] text-[var(--color-text-default)]",
    T = "hover:bg-[var(--color-bg-muted)] text-[var(--color-text-default)]",
    I = g(
      () =>
        `position:fixed; top:${t(y)}px; left:${t(k)}px; width:max-content; max-width:calc(100vw - 16px);`,
    ),
    q = g(
      () =>
        `position:fixed; top:${t(d)}px; left:${t(b)}px; width:max-content; max-width:calc(100vw - 16px);`,
    ),
    Z = g(() => Ne[s()]),
    ue = "flex items-center shrink-0",
    ce = g(() => B(_, c[s()], t(Z), o())),
    ge = g(() => B(E, c[s()], t(Z)));
  function me(L) {
    return typeof L == "string" ? L : L.label;
  }
  function $(L) {
    return typeof L == "string" ? L : (L.id ?? L.label ?? "");
  }
  function ae(L) {
    return typeof L == "string" ? "" : (L.shortcut ?? "");
  }
  function K(L) {
    return typeof L != "string" && "type" in L && L.type === "separator";
  }
  function j(L) {
    return (
      typeof L != "string" && Array.isArray(L.submenu) && L.submenu.length > 0
    );
  }
  function X(L, re) {
    return $(L) || `__action-${re}`;
  }
  function Y(L, re) {
    (H(), n()(L, re));
  }
  function H() {
    (A(i, ""), A(l, ""), A(u, -1), A(f, -1));
  }
  function te(L, re) {
    const ie = L.getBoundingClientRect(),
      be = Math.min(
        re?.getBoundingClientRect().width ?? ie.width,
        window.innerWidth - 16,
      ),
      ke = window.innerWidth - ie.left,
      xe = ie.right,
      G = ke < be && xe > ke,
      we = window.scrollX,
      Te = window.scrollX + window.innerWidth;
    A(y, ie.bottom + window.scrollY);
    const ze = G ? ie.right + window.scrollX - be : ie.left + window.scrollX,
      Ie = Te - be;
    A(k, Math.max(we, Math.min(ze, Ie)), !0);
  }
  function pe(L, re) {
    const ie = L.getBoundingClientRect(),
      be = re?.getBoundingClientRect(),
      ke = Math.min(be?.width ?? ie.width, window.innerWidth - 16),
      xe = window.innerWidth - ie.right,
      G = ie.left,
      we = xe < ke && G > xe;
    A(d, ie.top + window.scrollY);
    const Te = window.scrollX,
      ze = window.scrollX + window.innerWidth,
      Ie = we
        ? ie.left + window.scrollX - ke - P
        : ie.right + window.scrollX + P,
      He = ze - ke - P;
    A(b, Math.max(Te, Math.min(Ie, He)), !0);
  }
  function _e(L) {
    return L.findIndex((re) => !K(re));
  }
  function ve(L, re) {
    if (!L.length) return -1;
    let ie = re;
    for (let be = 0; be < L.length; be++)
      if (((ie = (ie + 1 + L.length) % L.length), !K(L[ie]))) return ie;
    return re;
  }
  function D(L, re) {
    if (!L.length) return -1;
    let ie = re;
    for (let be = 0; be < L.length; be++)
      if (((ie = (ie - 1 + L.length) % L.length), !K(L[ie]))) return ie;
    return re;
  }
  function S(L, re) {
    if (re < 0 || re >= L.actions.length) return;
    const ie = L.actions[re];
    !ie ||
      K(ie) ||
      ((!j(ie) || t(l) !== $(ie)) && (A(l, ""), A(f, -1)),
      A(u, re, !0),
      queueMicrotask(() => {
        t(i) === L.name && h[$(ie)]?.focus();
      }));
  }
  function ee(L, re) {
    if (!j(L) || re < 0 || re >= L.submenu.length) return;
    const ie = L.submenu[re];
    !ie ||
      K(ie) ||
      (A(f, re, !0),
      queueMicrotask(() => {
        t(l) === $(L) && w[$(ie)]?.focus();
      }));
  }
  function N(L, re = !1) {
    (A(i, L.name, !0), A(l, ""), A(f, -1));
    const ie = re ? _e(L.actions) : -1;
    A(u, ie, !0);
    const be = m[L.name];
    (be && te(be, C[L.name]), re && ie !== -1 && S(L, ie));
  }
  function ne(L, re = !1) {
    if (!j(L)) return;
    A(l, $(L), !0);
    const ie = h[$(L)];
    ie && pe(ie, v[$(L)]);
    const be = re ? _e(L.submenu) : -1;
    (A(f, be, !0), re && be !== -1 && ee(L, be));
  }
  function le(L, re, ie) {
    if (L.key === "Enter" || L.key === " " || L.key === "ArrowDown")
      (L.preventDefault(), N(re, !0));
    else if (L.key === "ArrowRight") {
      L.preventDefault();
      const be = (ie + 1) % a().length;
      m[a()[be].name]?.focus();
    } else if (L.key === "ArrowLeft") {
      L.preventDefault();
      const be = (ie - 1 + a().length) % a().length;
      m[a()[be].name]?.focus();
    }
  }
  function oe(L, re) {
    if ((L.stopPropagation(), !t(i))) return;
    const ie = re.actions,
      be = _e(ie);
    if (be === -1) return;
    const ke = t(u) === -1 ? be : t(u);
    if (L.key === "Escape") (L.preventDefault(), H(), m[re.name]?.focus());
    else if (L.key === "ArrowDown") {
      L.preventDefault();
      const xe = ve(ie, ke);
      S(re, xe);
    } else if (L.key === "ArrowUp") {
      L.preventDefault();
      const xe = D(ie, ke);
      S(re, xe);
    } else if (L.key === "ArrowRight") {
      L.preventDefault();
      const xe = ie[ke];
      xe && j(xe) && ne(xe, !0);
    } else if (L.key === "ArrowLeft" && t(l))
      (L.preventDefault(), A(l, ""), A(f, -1), S(re, ke));
    else if (L.key === "Enter" || L.key === " ") {
      L.preventDefault();
      const xe = ie[ke];
      xe && (j(xe) ? ne(xe, !0) : Y(re.name, xe));
    } else if (L.key === "Tab") {
      L.preventDefault();
      const xe = L.shiftKey ? D(ie, ke) : ve(ie, ke);
      S(re, xe);
    }
  }
  function Fe(L, re, ie) {
    if ((L.stopPropagation(), !t(l) || !j(re))) return;
    const be = re.submenu,
      ke = _e(be);
    if (ke === -1) return;
    const xe = t(f) === -1 ? ke : t(f);
    if (L.key === "Escape")
      (L.preventDefault(), A(l, ""), A(f, -1), h[$(re)]?.focus());
    else if (L.key === "ArrowDown") {
      L.preventDefault();
      const G = ve(be, xe);
      ee(re, G);
    } else if (L.key === "ArrowUp") {
      L.preventDefault();
      const G = D(be, xe);
      ee(re, G);
    } else if (L.key === "ArrowLeft")
      (L.preventDefault(), A(l, ""), A(f, -1), h[$(re)]?.focus());
    else if (L.key === "Enter" || L.key === " ") {
      L.preventDefault();
      const G = be[xe];
      G && Y(ie, G);
    } else if (L.key === "Tab") {
      L.preventDefault();
      const G = L.shiftKey ? D(be, xe) : ve(be, xe);
      ee(re, G);
    }
  }
  (Ke(() => {
    if (t(i)) {
      const L = m[t(i)];
      if (L) {
        te(L, C[t(i)]);
        const re = () => {
          te(L, C[t(i)]);
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
    Ke(() => {
      if (t(l)) {
        const L = h[t(l)],
          re = v[t(l)];
        if (L) {
          pe(L, re);
          const ie = () => {
            pe(L, v[t(l)]);
          };
          return (
            window.addEventListener("scroll", ie, !0),
            window.addEventListener("resize", ie),
            () => {
              (window.removeEventListener("scroll", ie, !0),
                window.removeEventListener("resize", ie));
            }
          );
        }
      }
    }));
  var Ce = Jd(),
    Ee = Se(Ce);
  nt(
    Ee,
    23,
    a,
    (L) => L.name,
    (L, re, ie) => {
      var be = Vd(),
        ke = p(be);
      ((ke.__mousedown = (G) => G.preventDefault()),
        (ke.__click = () => {
          t(i) === t(re).name ? H() : N(t(re), !0);
        }),
        (ke.__keydown = (G) => le(G, t(re), t(ie))));
      var xe = p(ke);
      (ut(
        ke,
        (G, we) => (m[we.name] = G),
        (G) => m?.[G.name],
        () => [t(re)],
      ),
        O(
          (G) => {
            (V(ke, 1, G),
              he(ke, "aria-expanded", t(i) === t(re).name),
              J(xe, t(re).name));
          },
          [() => U(B(t(ge), t(i) === t(re).name ? z : T))],
        ),
        kt("mouseenter", ke, () => {
          t(i) && t(i) !== t(re).name && N(t(re), !0);
        }),
        x(L, be));
    },
  );
  var de = M(Ee, 2);
  {
    var Ae = (L) => {
      var re = Le(),
        ie = Se(re);
      (nt(
        ie,
        17,
        a,
        (be) => be.name,
        (be, ke) => {
          var xe = Le(),
            G = Se(xe);
          {
            var we = (Te) => {
              var ze = Xd(),
                Ie = Se(ze);
              Ie.__mousedown = H;
              var He = M(Ie, 2);
              ((He.__keydown = (Oe) => oe(Oe, t(ke))),
                nt(
                  He,
                  23,
                  () => t(ke).actions,
                  (Oe, Me) => X(Oe, Me),
                  (Oe, Me, Xe) => {
                    var Qe = Le(),
                      dt = Se(Qe);
                    {
                      var Dt = (tt) => {
                          var se = qd();
                          x(tt, se);
                        },
                        It = (tt) => {
                          var se = Yd(),
                            Pe = p(se);
                          ((Pe.__mousedown = (We) => We.preventDefault()),
                            (Pe.__click = () => {
                              j(t(Me))
                                ? (S(t(ke), t(Xe)), ne(t(Me), !0))
                                : Y(t(ke).name, t(Me));
                            }));
                          var De = p(Pe),
                            qe = p(De),
                            rt = p(qe),
                            at = M(De, 2),
                            Pt = p(at);
                          {
                            var er = (We) => {
                              var Ye = Ud(),
                                it = p(Ye);
                              (O(
                                ($e, rr) => {
                                  (V(Ye, 1, $e), J(it, rr));
                                },
                                [
                                  () =>
                                    U(
                                      B(
                                        "text-[var(--color-text-muted)] text-right",
                                        t(Z),
                                      ),
                                    ),
                                  () => ae(t(Me)),
                                ],
                              ),
                                x(We, Ye));
                            };
                            W(Pt, (We) => {
                              ae(t(Me)) && We(er);
                            });
                          }
                          var Nt = M(Pt, 2);
                          {
                            var Zt = (We) => {
                              var Ye = Hd();
                              (O(
                                (it) => V(Ye, 1, it),
                                [
                                  () =>
                                    U(
                                      B(
                                        "text-[var(--color-text-muted)] flex-shrink-0",
                                        t(Z),
                                      ),
                                    ),
                                ],
                              ),
                                x(We, Ye));
                            };
                            W(Nt, (We) => {
                              j(t(Me)) && We(Zt);
                            });
                          }
                          ut(
                            Pe,
                            (We, Ye) => (h[$(Ye)] = We),
                            (We) => h?.[$(We)],
                            () => [t(Me)],
                          );
                          var Et = M(Pe, 2);
                          {
                            var tr = (We) => {
                              var Ye = Zd();
                              ((Ye.__keydown = (it) =>
                                Fe(it, t(Me), t(ke).name)),
                                nt(
                                  Ye,
                                  23,
                                  () => t(Me).submenu,
                                  (it, $e) => X(it, $e),
                                  (it, $e, rr) => {
                                    var Sr = Le(),
                                      na = Se(Sr);
                                    {
                                      var oa = (Vt) => {
                                          var _t = Kd();
                                          x(Vt, _t);
                                        },
                                        jt = (Vt) => {
                                          var _t = Wd();
                                          ((_t.__mousedown = (zt) =>
                                            zt.preventDefault()),
                                            (_t.__click = () =>
                                              Y(t(ke).name, t($e))));
                                          var jr = p(_t),
                                            hn = p(jr),
                                            ar = p(hn),
                                            Pr = M(jr, 2);
                                          V(Pr, 1, U(ue));
                                          var Vr = p(Pr);
                                          {
                                            var qr = (zt) => {
                                              var xt = Gd(),
                                                Ta = p(xt);
                                              (O(
                                                (La, Ma) => {
                                                  (V(xt, 1, La), J(Ta, Ma));
                                                },
                                                [
                                                  () =>
                                                    U(
                                                      B(
                                                        "text-[var(--color-text-muted)]",
                                                        t(Z),
                                                      ),
                                                    ),
                                                  () => ae(t($e)),
                                                ],
                                              ),
                                                x(zt, xt));
                                            };
                                            W(Vr, (zt) => {
                                              ae(t($e)) && zt(qr);
                                            });
                                          }
                                          (ut(
                                            _t,
                                            (zt, xt) => (w[$(xt)] = zt),
                                            (zt) => w?.[$(zt)],
                                            () => [t($e)],
                                          ),
                                            O(
                                              (zt, xt) => {
                                                (V(_t, 1, zt), J(ar, xt));
                                              },
                                              [
                                                () =>
                                                  U(
                                                    B(
                                                      "relative text-left rounded-xs transition-colors outline-none px-1.5 py-0.5",
                                                      "my-1 mr-1 w-full flex items-center justify-between gap-3",
                                                      "hover:bg-[var(--color-bg-muted)] focus-visible:bg-[var(--color-bg-muted)]",
                                                      "focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]",
                                                      "decoration-[var(--color-text-default)]",
                                                      t(Z),
                                                    ),
                                                  ),
                                                () => me(t($e)),
                                              ],
                                            ),
                                            kt("mouseenter", _t, () =>
                                              A(f, t(rr), !0),
                                            ),
                                            kt("focus", _t, () =>
                                              A(f, t(rr), !0),
                                            ),
                                            x(Vt, _t));
                                        };
                                      W(na, (Vt) => {
                                        K(t($e)) ? Vt(oa) : Vt(jt, !1);
                                      });
                                    }
                                    x(it, Sr);
                                  },
                                ),
                                ut(
                                  Ye,
                                  (it, $e) => (v[$($e)] = it),
                                  (it) => v?.[$(it)],
                                  () => [t(Me)],
                                ),
                                O(
                                  (it) => {
                                    (V(Ye, 1, it), lt(Ye, t(q)));
                                  },
                                  [
                                    () =>
                                      U(
                                        B(
                                          "fixed z-50 min-w-44 p-2 rounded-xs shadow-[0_2px_4px_var(--shadow-color)]",
                                          "border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]",
                                        ),
                                      ),
                                  ],
                                ),
                                x(We, Ye));
                            };
                            W(Et, (We) => {
                              j(t(Me)) && t(l) === $(t(Me)) && We(tr);
                            });
                          }
                          (O(
                            (We, Ye) => {
                              (V(Pe, 1, We), J(rt, Ye));
                            },
                            [
                              () =>
                                U(
                                  B(
                                    "relative text-left rounded-xs transition-colors outline-none px-1.5 py-0.5 my-1 mr-1 min-w-full flex items-center",
                                    "gap-3 hover:bg-[var(--color-bg-muted)] focus-visible:bg-[var(--color-bg-muted)]",
                                    "focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]",
                                    t(Z),
                                  ),
                                ),
                              () => me(t(Me)),
                            ],
                          ),
                            kt("mouseenter", Pe, () => {
                              (A(u, t(Xe), !0),
                                j(t(Me)) && t(l) !== $(t(Me))
                                  ? ne(t(Me))
                                  : j(t(Me)) || (A(l, ""), A(f, -1)));
                            }),
                            kt("focus", Pe, () => {
                              S(t(ke), t(Xe));
                            }),
                            x(tt, se));
                        };
                      W(dt, (tt) => {
                        K(t(Me)) ? tt(Dt) : tt(It, !1);
                      });
                    }
                    x(Oe, Qe);
                  },
                ),
                ut(
                  He,
                  (Oe, Me) => (C[Me.name] = Oe),
                  (Oe) => C?.[Oe.name],
                  () => [t(ke)],
                ),
                O(
                  (Oe) => {
                    (V(He, 1, Oe), lt(He, t(I)));
                  },
                  [
                    () =>
                      U(
                        B(
                          "fixed z-50 min-w-44 p-2 rounded-xs shadow-[0_2px_4px_var(--shadow-color)] ",
                          "border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]",
                        ),
                      ),
                  ],
                ),
                x(Te, ze));
            };
            W(G, (Te) => {
              t(i) === t(ke).name && Te(we);
            });
          }
          x(be, xe);
        },
      ),
        x(L, re));
    };
    W(de, (L) => {
      t(i) && L(Ae);
    });
  }
  (O(() => V(Ee, 1, U(t(ce)))), x(r, Ce), Re());
}
ct(["mousedown", "click", "keydown"]);
var Qd = R("<div><span> </span> <!> <!> <!></div>");
function Li(r, e) {
  Be(e, !0);
  let a = F(e, "class", 3, "");
  const n = g(() =>
    B(
      "flex flex-wrap items-center justify-center gap-2 text-xs text-[var(--color-text-muted)] py-0.5 overflow-visible",
      a(),
    ),
  );
  function o() {
    e.currentPage < e.totalPages && e.onPageChange(e.currentPage + 1);
  }
  function s() {
    e.currentPage > 1 && e.onPageChange(e.currentPage - 1);
  }
  function i() {
    if (e.totalPages <= 3) return Mo(e.totalPages, (k) => k + 1);
    let y = e.currentPage - 1;
    return (
      y < 1 && (y = 1),
      y + 3 - 1 > e.totalPages && (y = e.totalPages - 3 + 1),
      Mo(3, (k) => y + k)
    );
  }
  var l = Qd(),
    u = p(l),
    f = p(u),
    m = M(u, 2);
  {
    let w = g(() => e.currentPage === 1);
    ot(m, {
      onClick: s,
      get disabled() {
        return t(w);
      },
      sz: "xs",
      variant: "secondary",
      children: (y, k) => {
        var v = je("<");
        x(y, v);
      },
      $$slots: { default: !0 },
    });
  }
  var C = M(m, 2);
  nt(
    C,
    16,
    i,
    (w) => w,
    (w, y) => {
      {
        let k = g(() => (e.currentPage === y ? "primary" : "secondary")),
          v = g(() => (e.currentPage === y ? "page" : void 0));
        ot(w, {
          onClick: () => e.onPageChange(y),
          sz: "xs",
          get variant() {
            return t(k);
          },
          get "aria-current"() {
            return t(v);
          },
          children: (d, b) => {
            var c = je();
            (O(() => J(c, y)), x(d, c));
          },
          $$slots: { default: !0 },
        });
      }
    },
  );
  var h = M(C, 2);
  {
    let w = g(() => e.currentPage === e.totalPages);
    ot(h, {
      onClick: o,
      get disabled() {
        return t(w);
      },
      sz: "xs",
      variant: "secondary",
      children: (y, k) => {
        var v = je(">");
        x(y, v);
      },
      $$slots: { default: !0 },
    });
  }
  (O(() => {
    (V(l, 1, U(t(n))),
      J(f, `Page ${e.currentPage ?? ""} of ${e.totalPages ?? ""}`));
  }),
    x(r, l),
    Re());
}
function $d(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "sm"),
    n = F(e, "class", 3, "");
  const o = Gt("lang") ?? null,
    s = g(() => o?.value ?? "en"),
    i = g(() => Fa[t(s)].components.primaryColorSelect),
    l = g(() => e.label ?? t(i).text),
    u = [
      {
        value: "default",
        label: "Indigo",
        swatch: "oklch(62.3% 0.214 259.8deg)",
      },
      { value: "cyan", label: "Cyan", swatch: "oklch(71.5% 0.143 215.221)" },
      { value: "red", label: "Red", swatch: "oklch(58% 0.24 30deg)" },
      { value: "green", label: "Green", swatch: "oklch(65% 0.22 140deg)" },
      { value: "yellow", label: "Yellow", swatch: "oklch(75% 0.18 90deg)" },
      { value: "pink", label: "Pink", swatch: "oklch(70% 0.25 350deg)" },
      { value: "orange", label: "Orange", swatch: "oklch(72% 0.22 60deg)" },
      { value: "purple", label: "Purple", swatch: "oklch(55% 0.22 290deg)" },
    ],
    f = u.reduce((w, y) => ((w[y.value] = y), w), {});
  let m = fe("default"),
    C = fe(!1);
  function h(w) {
    return typeof w == "string" && w in f;
  }
  (Ke(() => {
    if (!t(C)) {
      try {
        if (typeof window < "u") {
          const w = localStorage.getItem("primary");
          h(w) && A(m, w, !0);
        }
      } catch {}
      A(C, !0);
    }
  }),
    Ke(() => {
      if (t(C))
        try {
          (typeof document < "u" &&
            document.documentElement.setAttribute("data-primary", t(m)),
            typeof window < "u" && localStorage.setItem("primary", t(m)));
        } catch {}
    }),
    Kt(r, {
      get sz() {
        return a();
      },
      get label() {
        return t(l);
      },
      get options() {
        return u;
      },
      get value() {
        return t(m);
      },
      onChange: (w) => {
        h(w) && A(m, w, !0);
      },
      get class() {
        return n();
      },
    }),
    Re());
}
var ef = R("<span> </span>"),
  tf = R("<div></div>"),
  rf = R("<div></div>"),
  af = R(
    '<div><!> <div class="relative w-full h-10"><div><!></div></div></div>',
  );
function nf(r, e) {
  Be(e, !0);
  let a = F(e, "value", 3, 0),
    n = F(e, "indeterminate", 3, !1),
    o = F(e, "sz", 3, "md"),
    s = F(e, "variant", 3, "default"),
    i = F(e, "class", 3, ""),
    l = F(e, "label", 3, ""),
    u = F(e, "disabled", 3, !1),
    f = mt(e, [
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
  const m = g(() => `${ma(a(), 0, 100)}%`),
    C = g(
      () =>
        ({
          xs: "h-[4px]",
          sm: "h-[5px]",
          md: "h-[6px]",
          lg: "h-[7px]",
          xl: "h-[8px]",
        })[o()],
    ),
    h = g(() =>
      s() === "neutral"
        ? "bg-[var(--color-bg-secondary)]"
        : "bg-[var(--color-bg-primary)]",
    ),
    w = g(() =>
      B(
        "relative flex flex-col gap-1 w-full data-[disabled=true]:opacity-[var(--opacity-disabled)] data-[disabled=true]:cursor-not-allowed",
        i(),
      ),
    ),
    y = g(() =>
      B(
        "absolute top-1/2 -translate-y-1/2 w-full bg-[var(--border-color-default)] rounded overflow-hidden",
        t(C),
      ),
    ),
    k = g(() => B("h-full", t(h)));
  var v = af();
  bt(
    v,
    (T) => ({
      class: t(w),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": T,
      "data-disabled": u() ? "true" : void 0,
      ...f,
    }),
    [() => (n() ? void 0 : Math.round(ma(a(), 0, 100)))],
    void 0,
    void 0,
    "svelte-1lu0uwz",
  );
  var d = p(v);
  {
    var b = (T) => {
      var I = ef(),
        q = p(I);
      (O(
        (Z) => {
          (V(I, 1, Z, "svelte-1lu0uwz"), J(q, l()));
        },
        [() => U(B("text-[var(--color-text-muted)] select-none", Ne[o()]))],
      ),
        x(T, I));
    };
    W(d, (T) => {
      l() && T(b);
    });
  }
  var c = M(d, 2),
    _ = p(c),
    P = p(_);
  {
    var E = (T) => {
        var I = tf();
        (O((q) => V(I, 1, q, "svelte-1lu0uwz"), [() => U(B(t(k), "pb-indet"))]),
          x(T, I));
      },
      z = (T) => {
        var I = rf();
        (O(
          (q) => {
            (V(I, 1, q, "svelte-1lu0uwz"), lt(I, `width:${t(m)}`));
          },
          [() => U(B(t(k), "transition-[width]"))],
        ),
          x(T, I));
      };
    W(P, (T) => {
      n() ? T(E) : T(z, !1);
    });
  }
  (O(() => V(_, 1, U(t(y)), "svelte-1lu0uwz")), x(r, v), Re());
}
var of = R("<span> </span>"),
  sf = Wt("<circle></circle>"),
  lf = Wt("<circle></circle>"),
  uf = R("<div> </div>"),
  cf = R(
    '<div><!> <div class="relative inline-flex items-center justify-center"><svg class="pc-svg svelte-10y2c7k" role="presentation" aria-hidden="true"><g class="pc-rot svelte-10y2c7k"><circle class="pc-track svelte-10y2c7k"></circle><!></g></svg> <!></div></div>',
  );
function df(r, e) {
  Be(e, !0);
  let a = F(e, "value", 3, 0),
    n = F(e, "indeterminate", 3, !1),
    o = F(e, "sz", 3, "md"),
    s = F(e, "variant", 3, "default"),
    i = F(e, "class", 3, ""),
    l = F(e, "label", 3, ""),
    u = F(e, "disabled", 3, !1),
    f = mt(e, [
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
  const m = {
      xs: { diameter: 40, stroke: 4 },
      sm: { diameter: 48, stroke: 5 },
      md: { diameter: 56, stroke: 6 },
      lg: { diameter: 64, stroke: 7 },
      xl: { diameter: 72, stroke: 8 },
    },
    C = g(() => ma(a(), 0, 100)),
    h = g(() => Math.round(t(C))),
    w = g(() => m[o()]),
    y = g(() => t(w).diameter / 2),
    k = g(() => t(y) - t(w).stroke / 2),
    v = g(() => 2 * Math.PI * t(k)),
    d = g(() => ((100 - t(C)) / 100) * t(v)),
    b = g(() => `${t(v)} ${t(v)}`),
    c = g(() => `${t(v) * 0.3} ${t(v)}`),
    _ = g(() =>
      s() === "neutral"
        ? "stroke-[var(--color-bg-secondary)]"
        : "stroke-[var(--color-bg-primary)]",
    ),
    P = g(() =>
      B(
        "inline-flex flex-col items-center gap-1 data-[disabled=true]:opacity-[var(--opacity-disabled)] data-[disabled=true]:cursor-not-allowed",
        i(),
      ),
    );
  var E = cf();
  bt(
    E,
    () => ({
      class: t(P),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": n() ? void 0 : t(h),
      "data-disabled": u() ? "true" : void 0,
      ...f,
    }),
    void 0,
    void 0,
    void 0,
    "svelte-10y2c7k",
  );
  var z = p(E);
  {
    var T = (K) => {
      var j = of(),
        X = p(j);
      (O(
        (Y) => {
          (V(j, 1, Y, "svelte-10y2c7k"), J(X, l()));
        },
        [() => U(B("text-[var(--color-text-muted)] select-none", Ne[o()]))],
      ),
        x(K, j));
    };
    W(z, (K) => {
      l() && K(T);
    });
  }
  var I = M(z, 2),
    q = p(I),
    Z = p(q),
    ue = p(Z),
    ce = M(ue);
  {
    var ge = (K) => {
        var j = sf();
        (O(
          (X) => {
            (V(j, 0, X, "svelte-10y2c7k"),
              he(j, "cx", t(y)),
              he(j, "cy", t(y)),
              he(j, "r", t(k)),
              he(j, "stroke-width", t(w).stroke),
              he(j, "stroke-dasharray", t(c)));
          },
          [() => U(B("pc-bar pc-indet", t(_)))],
        ),
          x(K, j));
      },
      me = (K) => {
        var j = lf();
        (O(
          (X) => {
            (V(j, 0, X, "svelte-10y2c7k"),
              he(j, "cx", t(y)),
              he(j, "cy", t(y)),
              he(j, "r", t(k)),
              he(j, "stroke-width", t(w).stroke),
              he(j, "stroke-dasharray", t(b)),
              he(j, "stroke-dashoffset", t(d)));
          },
          [() => U(B("pc-bar", t(_)))],
        ),
          x(K, j));
      };
    W(ce, (K) => {
      n() ? K(ge) : K(me, !1);
    });
  }
  var $ = M(q, 2);
  {
    var ae = (K) => {
      var j = uf(),
        X = p(j);
      (O(
        (Y) => {
          (V(j, 1, Y, "svelte-10y2c7k"), J(X, `${t(h) ?? ""}%`));
        },
        [
          () =>
            U(
              B(
                "absolute inset-0 flex items-center justify-center text-[var(--color-text-muted)] font-medium select-none",
                Ne[o()],
              ),
            ),
        ],
      ),
        x(K, j));
    };
    W($, (K) => {
      n() || K(ae);
    });
  }
  (O(() => {
    (lt(I, `width:${t(w).diameter}px;height:${t(w).diameter}px;`),
      he(q, "viewBox", `0 0 ${t(w).diameter} ${t(w).diameter}`),
      he(ue, "cx", t(y)),
      he(ue, "cy", t(y)),
      he(ue, "r", t(k)),
      he(ue, "stroke-width", t(w).stroke));
  }),
    x(r, E),
    Re());
}
var ff = R("<span><!></span>"),
  vf = R("<span> </span>"),
  gf = R(
    '<label><input/> <span aria-hidden="true"><span></span></span> <!></label>',
  );
function xo(r, e) {
  Be(e, !0);
  const a = [];
  let n = F(e, "sz", 3, "md"),
    o = F(e, "variant", 3, "default"),
    s = F(e, "checked", 15, !1),
    i = F(e, "group", 15, void 0),
    l = F(e, "class", 3, ""),
    u = F(e, "value", 3, "on"),
    f = mt(e, [
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
  const m = g(() => e.id ?? gn("rd-")),
    C = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-[18px] h-[18px]",
      xl: "w-5 h-5",
    },
    h = {
      xs: "w-1.5 h-1.5",
      sm: "w-2 h-2",
      md: "w-2.5 h-2.5",
      lg: "w-3 h-3",
      xl: "w-3.5 h-3.5",
    },
    w = {
      xs: "gap-1.5",
      sm: "gap-2",
      md: "gap-2.5",
      lg: "gap-3",
      xl: "gap-3.5",
    },
    y = g(() =>
      o() === "neutral"
        ? {
            checked: "bg-transparent border-[var(--border-color-strong)]",
            unchecked: "bg-transparent border-[var(--border-color-default)]",
          }
        : {
            checked: "bg-transparent border-[var(--color-bg-primary)]",
            unchecked: "bg-transparent border-[var(--border-color-default)]",
          },
    ),
    k =
      "rounded-full border border-solid cursor-pointer transition-all duration-[var(--transition-fast)] ease-[var(--timing-default)] flex items-center justify-center",
    v =
      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--border-color-focus)] peer-focus-visible:border-[var(--border-color-focus)]",
    d = g(() =>
      o() === "neutral"
        ? "bg-[var(--border-color-strong)]"
        : "bg-[var(--color-bg-primary)]",
    ),
    b = g(() => typeof i() < "u"),
    c = g(() => (t(b) ? i() === u() : s())),
    _ = g(() => (t(c) ? "checked" : "unchecked")),
    P = g(() =>
      B("inline-flex items-center cursor-pointer select-none", w[n()], l()),
    ),
    E = g(() =>
      B(
        k,
        v,
        C[n()],
        t(c) && t(y).checked,
        !t(c) && t(y).unchecked,
        "peer-disabled:opacity-[var(--opacity-disabled)] peer-disabled:cursor-not-allowed",
      ),
    ),
    z = g(() =>
      B(
        "rounded-full transition-transform duration-[var(--transition-fast)] ease-[var(--timing-default)]",
        h[n()],
        t(d),
        t(c) ? "scale-100 opacity-100" : "scale-50 opacity-0",
      ),
    ),
    T = g(() =>
      B(
        Ne[n()],
        "[color:var(--color-text-muted)] font-medium peer-disabled:cursor-not-allowed",
      ),
    );
  var I = gf(),
    q = p(I),
    Z = (ae) => {
      const K = ae.currentTarget.checked;
      (s(K), e.onChange?.(K));
    };
  bt(
    q,
    () => ({
      id: t(m),
      type: "radio",
      value: u(),
      checked: t(c),
      ...f,
      class: "sr-only peer",
      "aria-checked": t(c),
      "aria-describedby": e.describedBy,
      onchange: Z,
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0,
  );
  var ue = M(q, 2),
    ce = p(ue),
    ge = M(ue, 2);
  {
    var me = (ae) => {
        var K = ff(),
          j = p(K);
        (Je(j, () => e.children ?? Q), O(() => V(K, 1, U(t(T)))), x(ae, K));
      },
      $ = (ae) => {
        var K = Le(),
          j = Se(K);
        {
          var X = (Y) => {
            var H = vf(),
              te = p(H);
            (O(() => {
              (V(H, 1, U(t(T))), J(te, e.label));
            }),
              x(Y, H));
          };
          W(
            j,
            (Y) => {
              e.label && Y(X);
            },
            !0,
          );
        }
        x(ae, K);
      };
    W(ge, (ae) => {
      e.children ? ae(me) : ae($, !1);
    });
  }
  (O(() => {
    (V(I, 1, U(t(P))),
      he(I, "for", t(m)),
      he(ue, "data-state", t(_)),
      V(ue, 1, U(t(E))),
      V(ce, 1, U(t(z))));
  }),
    Ru(a, [], q, () => (u(), i()), i),
    x(r, I),
    Re());
}
const pf = (r) => {
  var e = hf();
  x(r, e);
};
var hf = R(
  '<span class="ml-1 inline-flex h-6 w-6 items-center justify-center text-[var(--color-text-muted)]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg></span>',
);
function bf(r, e) {
  Be(e, !0);
  let a = F(e, "placeholder", 3, "Search"),
    n = F(e, "value", 15, ""),
    o = F(e, "sz", 3, "sm"),
    s = F(e, "variant", 3, "filled"),
    i = F(e, "class", 3, ""),
    l = mt(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "label",
      "placeholder",
      "value",
      "sz",
      "variant",
      "class",
    ]);
  {
    let u = g(() => `search-input w-full max-w-[520px] [&_input]:pl-10 ${i()}`);
    _a(
      r,
      Ei(
        {
          get label() {
            return e.label;
          },
          get sz() {
            return o();
          },
          get variant() {
            return s();
          },
          type: "search",
          clearable: !0,
          get leading() {
            return pf;
          },
          get placeholder() {
            return a();
          },
          get class() {
            return t(u);
          },
        },
        () => l,
        {
          get value() {
            return n();
          },
          set value(f) {
            n(f);
          },
        },
      ),
    );
  }
  Re();
}
var mf = R('<div class="flex justify-end mt-1"><div> </div></div>'),
  _f = R(
    '<div><div class="relative flex items-center w-full h-10"><div><div></div></div> <input type="range" aria-label="slider"/></div> <!></div>',
  );
function xf(r, e) {
  Be(e, !0);
  let a = F(e, "value", 15, 0),
    n = F(e, "min", 3, 0),
    o = F(e, "max", 3, 100),
    s = F(e, "step", 3, 1),
    i = F(e, "sz", 3, "md"),
    l = F(e, "variant", 3, "default"),
    u = F(e, "disabled", 3, !1),
    f = F(e, "showValue", 3, !1),
    m = F(e, "class", 3, ""),
    C = mt(e, [
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
  const h = g(
      () =>
        ({
          xs: "h-[4px]",
          sm: "h-[5px]",
          md: "h-[6px]",
          lg: "h-[7px]",
          xl: "h-[8px]",
        })[i()],
    ),
    w = g(
      () =>
        ({
          xs: "[&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3",
          sm: "[&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4",
          md: "[&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5",
          lg: "[&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6",
          xl: "[&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7",
        })[i()],
    ),
    y = g(() =>
      l() === "neutral"
        ? "bg-[var(--color-bg-secondary)]"
        : "bg-[var(--color-bg-primary)]",
    ),
    k = g(() =>
      l() === "neutral"
        ? "[&::-webkit-slider-thumb]:bg-[var(--color-bg-secondary)] [&::-moz-range-thumb]:bg-[var(--color-bg-secondary)]"
        : "[&::-webkit-slider-thumb]:bg-[var(--color-bg-primary)] [&::-moz-range-thumb]:bg-[var(--color-bg-primary)]",
    ),
    v = g(() => ma(((a() - n()) / Math.max(1e-12, o() - n())) * 100, 0, 100)),
    d = g(() =>
      B(
        "relative w-full data-[disabled=true]:opacity-[var(--opacity-disabled)]",
        u() ? "cursor-not-allowed" : "cursor-pointer",
        m(),
      ),
    ),
    b = g(() =>
      B(
        "absolute top-1/2 -translate-y-1/2 w-full bg-[var(--color-bg-muted)] rounded overflow-hidden",
        t(h),
      ),
    ),
    c =
      "relative z-10 w-full h-10 bg-transparent appearance-none cursor-pointer disabled:cursor-not-allowed [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-[var(--radius-full)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--color-bg-surface)] [&::-webkit-slider-thumb]:shadow-[var(--shadow-color)] [&::-moz-range-thumb]:rounded-[var(--radius-full)] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--color-bg-surface)] [&::-moz-range-thumb]:shadow-[var(--shadow-color)] hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-125 hover:[&::-moz-range-thumb]:scale-110 active:[&::-moz-range-thumb]:scale-125 focus:outline-none focus-visible:outline-none focus-visible:[&::-webkit-slider-thumb]:shadow-[0_0_0_3px_var(--border-color-focus)] focus-visible:[&::-moz-range-thumb]:shadow-[0_0_0_3px_var(--border-color-focus)] disabled:hover:[&::-webkit-slider-thumb]:scale-100 disabled:active:[&::-webkit-slider-thumb]:scale-100 disabled:hover:[&::-moz-range-thumb]:scale-100 disabled:active:[&::-moz-range-thumb]:scale-100",
    _ = g(() => B(c, t(w), t(k)));
  function P(X) {
    const Y = s() || 1,
      H = Math.round((X - n()) / Y),
      te = n() + H * Y;
    return ma(Number(te.toFixed(6)), n(), o());
  }
  let E;
  function z(X) {
    const Y = E.getBoundingClientRect(),
      H = ma((X - Y.left) / Y.width, 0, 1);
    (a(P(n() + H * (o() - n()))), e.onInput?.(a()));
  }
  function T(X) {
    u() || z(X.clientX);
  }
  function I(X) {
    const Y = X.currentTarget;
    (a(P(Number(Y.value))), e.onInput?.(a()));
  }
  function q(X) {
    if (u()) return;
    const Y = o() - n(),
      H = Math.max(s() || 1, Math.round(Y / 10));
    let te = a();
    switch (X.key) {
      case "ArrowLeft":
      case "ArrowDown":
        te = a() - (s() || 1);
        break;
      case "ArrowRight":
      case "ArrowUp":
        te = a() + (s() || 1);
        break;
      case "PageDown":
        te = a() - H;
        break;
      case "PageUp":
        te = a() + H;
        break;
      case "Home":
        te = n();
        break;
      case "End":
        te = o();
        break;
      default:
        return;
    }
    (a(P(te)), e.onInput?.(a()), X.preventDefault());
  }
  var Z = _f(),
    ue = (X) => e.onfocus?.(X),
    ce = (X) => e.onblur?.(X);
  bt(Z, () => ({
    class: t(d),
    onclick: T,
    onfocusin: ue,
    onfocusout: ce,
    "data-disabled": u() ? "true" : void 0,
    ...C,
  }));
  var ge = p(Z),
    me = p(ge),
    $ = p(me),
    ae = M(me, 2);
  ((ae.__input = I), (ae.__keydown = q));
  var K = M(ge, 2);
  {
    var j = (X) => {
      var Y = mf(),
        H = p(Y),
        te = p(H);
      (O(() => {
        (V(
          H,
          1,
          `font-[var(--font-mono)] text-[var(--color-text-muted)] select-none ${Ne[i()] ?? ""}`,
        ),
          J(te, a()));
      }),
        x(X, Y));
    };
    W(K, (X) => {
      f() && X(j);
    });
  }
  (ut(
    Z,
    (X) => (E = X),
    () => E,
  ),
    O(
      (X) => {
        (V(me, 1, U(t(b))),
          V($, 1, X),
          lt($, `width:${t(v)}%`),
          V(ae, 1, U(t(_))),
          he(ae, "min", n()),
          he(ae, "max", o()),
          he(ae, "step", s()),
          Ci(ae, a()),
          (ae.disabled = u()),
          he(ae, "aria-valuemin", n()),
          he(ae, "aria-valuemax", o()),
          he(ae, "aria-valuenow", a()));
      },
      [() => U(B("w-full h-full transition-[width]", t(y)))],
    ),
    x(r, Z),
    Re());
}
ct(["input", "keydown"]);
var wf = R(
    '<div class="overflow-auto min-w-0 min-h-0"><!></div> <div class="touch-none select-none z-10 cursor-col-resize bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-hover)] transition-colors"></div> <div class="overflow-auto min-w-0 min-h-0 flex-1"><!></div>',
    1,
  ),
  yf = R(
    '<div class="overflow-auto min-w-0 min-h-0"><!></div> <div class="touch-none select-none z-10 cursor-row-resize bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-hover)] transition-colors"></div> <div class="overflow-auto min-w-0 min-h-0"><!></div>',
    1,
  ),
  kf = R("<div><!></div>");
function Ss(r, e) {
  Be(e, !0);
  let a = F(e, "direction", 3, "horizontal"),
    n = F(e, "initialSize", 3, 30),
    o = F(e, "dividerSize", 3, 4),
    s = F(e, "minSize", 3, 10),
    i = F(e, "maxSize", 3, 90),
    l,
    u = g(n),
    f = fe(!1),
    m = 0,
    C = 0,
    h = 0;
  function w() {
    return l ? (a() === "horizontal" ? l.offsetWidth : l.offsetHeight) : 0;
  }
  function y(E) {
    (A(f, !0),
      (m = t(u)),
      (C = a() === "horizontal" ? E.clientX : E.clientY),
      (h = w()),
      document.addEventListener("pointermove", k),
      document.addEventListener("pointerup", v),
      document.addEventListener("pointercancel", v),
      E.preventDefault(),
      E.stopPropagation());
  }
  function k(E) {
    if (!t(f)) return;
    const I = (((a() === "horizontal" ? E.clientX : E.clientY) - C) / h) * 100,
      q = m + I;
    (A(u, Math.max(s(), Math.min(i(), q))),
      E.preventDefault(),
      E.stopPropagation());
  }
  function v() {
    (A(f, !1),
      document.removeEventListener("pointermove", k),
      document.removeEventListener("pointerup", v),
      document.removeEventListener("pointercancel", v));
  }
  Ke(() => {
    const E = () => {
      h = w();
    };
    return (
      window.addEventListener("resize", E),
      () => window.removeEventListener("resize", E)
    );
  });
  var d = kf();
  let b;
  var c = p(d);
  {
    var _ = (E) => {
        var z = wf(),
          T = Se(z),
          I = p(T);
        Je(I, () => e.first ?? Q);
        var q = M(T, 2);
        q.__pointerdown = y;
        var Z = M(q, 2),
          ue = p(Z);
        (Je(ue, () => e.second ?? Q),
          O(() => {
            (lt(T, `width: ${t(u) ?? ""}%`), lt(q, `width: ${o() ?? ""}px`));
          }),
          x(E, z));
      },
      P = (E) => {
        var z = yf(),
          T = Se(z),
          I = p(T);
        Je(I, () => e.first ?? Q);
        var q = M(T, 2);
        q.__pointerdown = y;
        var Z = M(q, 2),
          ue = p(Z);
        (Je(ue, () => e.second ?? Q),
          O(() => {
            (lt(T, `height: ${t(u) ?? ""}%`),
              lt(q, `height: ${o() ?? ""}px`),
              lt(Z, `height: calc(100% - ${t(u) ?? ""}% - ${o() ?? ""}px)`));
          }),
          x(E, z));
      };
    W(c, (E) => {
      a() === "horizontal" ? E(_) : E(P, !1);
    });
  }
  (ut(
    d,
    (E) => (l = E),
    () => l,
  ),
    O(
      () =>
        (b = V(d, 1, "w-full h-full overflow-hidden", null, b, {
          flex: a() === "horizontal",
          "flex-col": a() === "vertical",
        })),
    ),
    x(r, d),
    Re());
}
ct(["pointerdown"]);
var Cf = R("<span> </span>"),
  Sf = R("<span> </span>"),
  Pf = R("<span> </span>"),
  Ef = R(
    '<label><!> <div class="inline-flex items-center gap-2"><!> <input/> <button type="button"><span></span></button> <!></div></label>',
  );
function Mi(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "md"),
    n = F(e, "checked", 15, !1),
    o = F(e, "class", 3, ""),
    s = mt(e, [
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
  const i = g(() => e.id ?? gn("sw-")),
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
    m = g(() => ("disabled" in s ? !!e.disabled : !1));
  function C() {
    t(m) || (n(!n()), e.onChange?.(n()));
  }
  const h = g(() => (n() ? "justify-end" : "justify-start")),
    w = g(() =>
      B(
        "relative inline-flex items-center rounded-full border transition focus:outline-none focus:ring-2 focus:ring-[var(--border-color-focus)]",
        l[a()],
        f[a()],
        n()
          ? "bg-[var(--color-bg-primary)] border-[var(--color-bg-primary)]"
          : "bg-[var(--color-bg-muted)] border-[var(--border-color-default)]",
        t(m)
          ? "opacity-[var(--opacity-disabled)] cursor-not-allowed"
          : "cursor-pointer",
        t(h),
      ),
    ),
    y = g(() => B("inline-flex flex-col items-center gap-1 select-none", o())),
    k = g(() =>
      B(
        u[a()],
        "rounded-full bg-white border border-[var(--border-color-default)] shadow-sm",
      ),
    );
  var v = Ef(),
    d = p(v);
  {
    var b = (ue) => {
      var ce = Cf(),
        ge = p(ce);
      (O(() => {
        (V(ce, 1, `text-[var(--color-text-muted)] ${Ne[a()] ?? ""}`),
          J(ge, e.topLabel));
      }),
        x(ue, ce));
    };
    W(d, (ue) => {
      e.topLabel && ue(b);
    });
  }
  var c = M(d, 2),
    _ = p(c);
  {
    var P = (ue) => {
      var ce = Sf(),
        ge = p(ce);
      (O(() => {
        (V(ce, 1, `text-[var(--color-text-muted)] ${Ne[a()] ?? ""}`),
          J(ge, e.leftLabel));
      }),
        x(ue, ce));
    };
    W(_, (ue) => {
      e.leftLabel && ue(P);
    });
  }
  var E = M(_, 2),
    z = () => C();
  bt(
    E,
    () => ({
      id: t(i),
      type: "checkbox",
      checked: n(),
      ...s,
      class: "sr-only",
      "aria-checked": n(),
      "aria-invalid": s["aria-invalid"] || void 0,
      "aria-describedby": s["aria-describedby"],
      onchange: z,
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0,
  );
  var T = M(E, 2);
  T.__click = C;
  var I = p(T),
    q = M(T, 2);
  {
    var Z = (ue) => {
      var ce = Pf(),
        ge = p(ce);
      (O(() => {
        (V(ce, 1, `text-[var(--color-text-muted)] ${Ne[a()] ?? ""}`),
          J(ge, e.rightLabel));
      }),
        x(ue, ce));
    };
    W(q, (ue) => {
      e.rightLabel && ue(Z);
    });
  }
  (O(() => {
    (V(v, 1, U(t(y))),
      he(v, "for", t(i)),
      V(T, 1, U(t(w))),
      he(T, "aria-pressed", n()),
      he(
        T,
        "aria-label",
        typeof s["aria-label"] == "string" ? s["aria-label"] : "Switch",
      ),
      (T.disabled = t(m)),
      V(I, 1, U(t(k))));
  }),
    x(r, v),
    Re());
}
ct(["click"]);
var zf = R(
    '<th scope="col"><button type="button"><span> </span> <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5.23 11.77a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L10 8.31l-3.77 3.46a.75.75 0 0 1-1 0z" fill="currentColor"></path></svg></button></th>',
  ),
  Af = R("<tr></tr>"),
  Ff = R("<td><div> </div></td>"),
  Tf = R("<tr></tr>"),
  Lf = R('<div class="mt-3 flex justify-between items-center"><!></div>'),
  Mf = R(
    '<div tabindex="-1"><table><thead><!></thead><tbody></tbody></table> <!></div>',
  );
function Df(r, e) {
  Be(e, !0);
  let a = F(e, "columns", 19, () => []),
    n = F(e, "rows", 19, () => []),
    o = F(e, "class", 3, ""),
    s = F(e, "variant", 3, "default"),
    i = F(e, "stickyHeader", 3, !1),
    l = F(e, "sz", 3, "md"),
    u = fe(null),
    f = fe(null);
  function m($) {
    const ae = $.key;
    t(u) !== ae
      ? (A(u, ae, !0), A(f, "asc"))
      : A(f, t(f) === "asc" ? "desc" : "asc", !0);
  }
  function C($, ae) {
    const K = $ == null || $ === "",
      j = ae == null || ae === "";
    if (K && j) return 0;
    if (K) return 1;
    if (j) return -1;
    const X = Number($),
      Y = Number(ae),
      H = !Number.isNaN(X),
      te = !Number.isNaN(Y);
    return H && te
      ? X - Y
      : String($).localeCompare(String(ae), void 0, {
          numeric: !0,
          sensitivity: "base",
        });
  }
  const h = {
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
    w = g(() => {
      const $ = Array.isArray(n()) ? n() : [];
      if (!t(u) || !t(f)) return $;
      const ae = t(u),
        K = $.map((j, X) => [j, X]);
      return (
        K.sort(([j, X], [Y, H]) => {
          const te = C(j[ae], Y[ae]);
          return te !== 0 ? (t(f) === "asc" ? te : -te) : X - H;
        }),
        K.map(([j]) => j)
      );
    }),
    y = ($) =>
      $ === "end" ? "text-right" : $ === "start" ? "text-left" : "text-center",
    k = ($) =>
      $ === "end"
        ? "justify-end"
        : $ === "center"
          ? "justify-center"
          : "justify-start",
    v = g(() => B("overflow-x-auto", o())),
    d = g(() => Ne[l()]),
    b = g(s),
    c = g(() => t(b) === "list" || t(b) === "dense"),
    _ = g(() => h[t(b)] ?? h.default),
    P = g(() =>
      B(
        t(c) ? "inline-table w-fit" : "min-w-full",
        "border-collapse",
        t(_).table,
        t(d),
        "text-[var(--color-text-default)]",
      ),
    ),
    E = ($, ae) => {
      const K =
        typeof $.id == "string" || typeof $.id == "number"
          ? $.id
          : typeof $.key == "string" || typeof $.key == "number"
            ? $.key
            : ae;
      return String(K);
    },
    z = ($, ae) => String($.key ?? ae);
  var T = Mf(),
    I = p(T),
    q = p(I),
    Z = p(q);
  {
    var ue = ($) => {
      var ae = Af();
      (nt(
        ae,
        23,
        a,
        (K, j) => z(K, j),
        (K, j) => {
          var X = zf(),
            Y = p(X);
          ((Y.__click = () => m(t(j))),
            (Y.__keydown = (_e) => {
              (_e.key === "Enter" || _e.key === " ") &&
                (_e.preventDefault(), m(t(j)));
            }));
          var H = p(Y),
            te = p(H),
            pe = M(H, 2);
          (O(
            (_e, ve, D, S) => {
              (lt(X, !t(c) && t(j).width ? `width:${t(j).width}` : void 0),
                V(X, 1, _e),
                he(
                  X,
                  "aria-sort",
                  t(u) === t(j).key
                    ? t(f) === "asc"
                      ? "ascending"
                      : "descending"
                    : "none",
                ),
                V(Y, 1, ve),
                he(Y, "aria-label", `Sort by ${t(j).label}`),
                V(H, 1, D),
                J(te, t(j).label),
                V(pe, 0, S));
            },
            [
              () => U(B("px-3 font-semibold", t(_).padY, y(t(j).align))),
              () =>
                U(
                  B(
                    "flex w-full items-center gap-2 select-none hover:bg-[var(--color-bg-hover)] rounded-none px-1 py-0.5 border border-transparent focus-visible:border-[var(--border-color-focus)] focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus-visible:outline-none",
                    k(t(j).align),
                  ),
                ),
              () => U(B("truncate min-w-0", y(t(j).align))),
              () =>
                U(
                  B(
                    "h-4 w-4 opacity-60 transition-transform",
                    t(u) === t(j).key && t(f) === "desc" && "rotate-180",
                  ),
                ),
            ],
          ),
            x(K, X));
        },
      ),
        O((K) => V(ae, 1, K), [() => U(B(i() && "sticky top-0 z-10"))]),
        x($, ae));
    };
    W(Z, ($) => {
      t(b) !== "noTitle" && t(b) !== "list" && $(ue);
    });
  }
  var ce = M(q);
  nt(
    ce,
    23,
    () => t(w),
    ($, ae) => E($, ae),
    ($, ae) => {
      var K = Tf();
      (nt(
        K,
        23,
        a,
        (j, X) => z(j, X),
        (j, X) => {
          var Y = Ff(),
            H = p(Y),
            te = p(H);
          (O(
            (pe, _e) => {
              (lt(Y, !t(c) && t(X).width ? `width:${t(X).width}` : void 0),
                V(Y, 1, pe),
                V(H, 1, _e),
                J(te, t(ae)[t(X).key]));
            },
            [
              () => U(B("px-3", t(_).padY, y(t(X).align), t(_).cell)),
              () => U(B(t(c) && "break-words whitespace-normal")),
            ],
          ),
            x(j, Y));
        },
      ),
        O((j) => V(K, 1, j), [() => U(B("first:[&>td]:border-t-0", t(_).row))]),
        x($, K));
    },
  );
  var ge = M(I, 2);
  {
    var me = ($) => {
      var ae = Lf(),
        K = p(ae);
      (Li(
        K,
        Ei(() => e.pagination),
      ),
        x($, ae));
    };
    W(ge, ($) => {
      e.pagination && e.pagination.totalPages > 0 && $(me);
    });
  }
  (O(() => {
    (V(T, 1, U(t(v))),
      V(I, 1, U(t(P))),
      V(q, 1, U(t(_).header)),
      V(ce, 1, U(t(_).body)));
  }),
    x(r, T),
    Re());
}
ct(["click", "keydown"]);
var If = R('<button type="button" role="tab"><span> </span></button>'),
  Nf = R(
    '<div><div role="tablist" tabindex="0" aria-orientation="horizontal"></div> <div role="tabpanel" tabindex="-1" class="w-full min-w-0 relative z-0 border-t border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-[var(--spacing-md)] rounded-b-[var(--radius-sm)] shadow-[0_1px_2px_0_var(--shadow-color)]"><!></div></div>',
  );
function Of(r, e) {
  Be(e, !0);
  let a = F(e, "tabs", 19, () => []),
    n = F(e, "activeTab", 7, ""),
    o = F(e, "sz", 3, "md"),
    s = F(e, "variant", 3, "default"),
    i = F(e, "fitted", 3, !1),
    l = F(e, "class", 3, ""),
    u = mt(e, [
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
  Ke(() => {
    (!n() && a().length && n(a()[0].id),
      n() && !a().find((P) => P.id === n()) && a().length && n(a()[0].id));
  });
  function f() {
    if (!n()) return;
    document.getElementById(`tab-${n()}`)?.focus();
  }
  function m(P) {
    P.disabled || (n(P.id), e.onChange?.(P.id));
  }
  function C(P) {
    const E = a().filter((q) => !q.disabled);
    if (!E.length) return;
    const z = Math.max(
      0,
      E.findIndex((q) => q.id === n()),
    );
    let T = z;
    if (P.key === "ArrowRight") T = (z + 1) % E.length;
    else if (P.key === "ArrowLeft") T = (z - 1 + E.length) % E.length;
    else if (P.key === "Home") T = 0;
    else if (P.key === "End") T = E.length - 1;
    else return;
    P.preventDefault();
    const I = E[T].id;
    (n(I), e.onChange?.(I), queueMicrotask(f));
  }
  const h = {
      xs: "px-2 py-1",
      sm: "px-3 py-1.5",
      md: "px-4 py-2",
      lg: "px-5 py-2.5",
      xl: "px-6 py-3",
    },
    w =
      "inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus-visible:ring-offset-0 focus:outline-none disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
    y = g(() => ({
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
    k = g(() => B("w-full self-stretch flex flex-col", Ne[o()], l())),
    v = g(() =>
      B(
        "flex w-full flex-nowrap overflow-x-auto whitespace-nowrap relative z-10 bg-[var(--color-bg-surface)]",
        Ne[o()],
        s() === "pills" && "gap-1",
        s() === "underline" && "gap-6",
        i() ? "justify-between" : "justify-start",
      ),
    );
  var d = Nf();
  bt(d, () => ({ class: t(k), ...u }));
  var b = p(d);
  ((b.__keydown = C),
    nt(
      b,
      21,
      a,
      (P) => P.id,
      (P, E) => {
        var z = If();
        ((z.__click = () => m(t(E))),
          (z.__keydown = (q) => {
            (q.key === "Enter" || q.key === " ") &&
              (q.preventDefault(), m(t(E)));
          }));
        var T = p(z),
          I = p(T);
        (O(
          (q) => {
            (he(z, "id", `tab-${t(E).id}`),
              he(z, "aria-selected", t(E).id === n() ? "true" : "false"),
              he(z, "aria-controls", `panel-${t(E).id}`),
              he(z, "aria-disabled", t(E).disabled ? "true" : "false"),
              he(z, "tabindex", t(E).id === n() ? 0 : -1),
              (z.disabled = t(E).disabled),
              V(z, 1, q),
              J(I, t(E).label));
          },
          [
            () =>
              U(
                B(
                  "relative z-20",
                  w,
                  h[o()],
                  Ne[o()],
                  i() ? "basis-0 grow flex-1 min-w-0 text-center" : "shrink-0",
                  t(y)[s()]?.base,
                  t(E).id === n()
                    ? t(y)[s()]?.active
                    : t(E).disabled
                      ? ""
                      : t(y)[s()]?.hover,
                ),
              ),
          ],
        ),
          x(P, z));
      },
    ));
  var c = M(b, 2),
    _ = p(c);
  (Je(_, () => e.children ?? Q),
    O(() => {
      (V(b, 1, U(t(v))),
        he(c, "id", `panel-${n()}`),
        he(c, "aria-labelledby", `tab-${n()}`));
    }),
    kt("focus", b, f),
    x(r, d),
    Re());
}
ct(["keydown", "click"]);
var Bf = Wt(
    '<svg class="w-[1em] h-[1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4" fill="currentColor"></circle><line x1="12" y1="1" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line></svg>',
  ),
  Rf =
    Wt(`<svg class="w-[1em] h-[1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2
       A9 9 0 1 0 21 12
       A7.5 7.5 0 1 1 12 2
       Z" fill="currentColor"></path></svg>`),
  jf = R("<button><!></button>");
function Ps(r, e) {
  Be(e, !0);
  let a = F(e, "class", 3, ""),
    n = F(e, "sz", 3, "md"),
    o = F(e, "type", 3, "button"),
    s = mt(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "disabled",
      "class",
      "sz",
      "type",
    ]);
  const i = "theme-toggle:dark",
    l = bs.get(i, !1);
  let u = fe(et(l));
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
    m = {
      xs: "px-2 py-0.5 h-6",
      sm: "px-3 py-1 h-7",
      md: "px-4 py-2 h-8",
      lg: "px-5 py-2.5 h-9",
      xl: "px-6 py-3 h-10",
    },
    C = "fixed top-4 right-4",
    h = g(() => B(a() ? null : C, f, m[n()], Ne[n()], a()));
  Ke(() => {
    (document.documentElement.classList.toggle("dark", t(u)), bs.set(i, t(u)));
  });
  var w = jf(),
    y = () => A(u, !t(u));
  bt(w, () => ({
    type: o(),
    disabled: e.disabled,
    class: t(h),
    onclick: y,
    "aria-label": t(u) ? "Switch to light mode" : "Switch to dark mode",
    ...s,
  }));
  var k = p(w);
  {
    var v = (b) => {
        var c = Bf();
        x(b, c);
      },
      d = (b) => {
        var c = Rf();
        x(b, c);
      };
    W(k, (b) => {
      t(u) ? b(v) : b(d, !1);
    });
  }
  (x(r, w), Re());
}
var Vf = R("<!> <!>", 1),
  qf = R(
    '<div><div class="text-sm font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex flex-wrap items-start gap-4"><div class="flex flex-wrap gap-3 min-w-[0] flex-1"><!> <!></div> <div class="flex items-center gap-3 basis-full pt-2"><!> <!></div></div> <div class="mt-4 p-4 bg-[var(--color-bg-surface)] text-center"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div></div>',
  );
function Uf(r, e) {
  Be(e, !0);
  let a = F(e, "value", 15, null),
    n = F(e, "step", 3, 60),
    o = F(e, "disabled", 3, !1),
    s = F(e, "clearable", 3, !0),
    i = F(e, "initialSystem", 3, "iso"),
    l = F(e, "class", 3, ""),
    u = mt(e, [
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
  const f = Gt("lang") ?? null,
    m = g(() => f?.value ?? "en"),
    C = g(() => Fa[t(m)].components.timePicker),
    h = g(() => e.label ?? t(C).text),
    w = g(() => e.placeholder ?? t(C).placeholder),
    y = g(() => B("inline-block w-full", l()));
  let k = g(i),
    v = fe("00"),
    d = fe("00"),
    b = fe("AM");
  const c = g(() => a() != null),
    _ = Array.from({ length: 24 }, (de, Ae) => {
      const L = Ae.toString().padStart(2, "0");
      return { value: L, label: L };
    }),
    P = Array.from({ length: 12 }, (de, Ae) => {
      const L = (Ae + 1).toString().padStart(2, "0");
      return { value: L, label: L };
    }),
    E = [
      { value: "AM", label: "AM" },
      { value: "PM", label: "PM" },
    ],
    z = g(() =>
      !n() || n() <= 0 ? 1 : Math.min(60, Math.max(1, Math.round(n() / 60))),
    ),
    T = g(() => {
      const de = [];
      for (let Ae = 0; Ae < 60; Ae += t(z)) {
        const L = Ae.toString().padStart(2, "0");
        de.push({ value: L, label: L });
      }
      return de;
    });
  function I(de) {
    return de.padStart(2, "0").slice(-2);
  }
  function q() {
    const de =
      t(k) === "english" ? `${t(v)}:${t(d)} ${t(b)}` : `${t(v)}:${t(d)}`;
    (a(de), e.onChange?.(de));
  }
  function Z(de) {
    (A(v, I(de), !0), q());
  }
  function ue(de) {
    (A(d, I(de), !0), q());
  }
  function ce(de) {
    (A(v, I(de), !0), q());
  }
  function ge(de) {
    (A(b, de === "AM" || de === "PM" ? de : "AM", !0), q());
  }
  function me() {
    o() ||
      (t(k) === "iso"
        ? (A(k, "english"), parseInt(t(v), 10) >= 0 && A(v, "12"), ge("AM"))
        : A(k, "iso"),
      q());
  }
  function $() {
    s() && (A(v, "00"), A(d, "00"), A(b, "AM"), a(null), e.onChange?.(null));
  }
  Ke(() => {
    if (a() == null) return;
    let de = a();
    (de.includes("AM") || de.includes("PM")) &&
      (de = de.replace(" AM", "").replace(" PM", ""));
    const [Ae, L] = de.split(":");
    (A(v, I(Ae), !0), A(d, I(L), !0));
  });
  var ae = qf();
  bt(ae, () => ({ class: t(y), ...u }));
  var K = p(ae),
    j = p(K),
    X = M(K, 2),
    Y = p(X),
    H = p(Y);
  {
    var te = (de) => {
        Kt(de, {
          get label() {
            return t(C).hour;
          },
          get options() {
            return _;
          },
          get value() {
            return t(v);
          },
          onChange: Z,
          get disabled() {
            return o();
          },
          sz: "sm",
        });
      },
      pe = (de) => {
        var Ae = Vf(),
          L = Se(Ae);
        Kt(L, {
          get label() {
            return t(C).hour;
          },
          get options() {
            return P;
          },
          get value() {
            return t(v);
          },
          onChange: ce,
          get disabled() {
            return o();
          },
          sz: "sm",
        });
        var re = M(L, 2);
        (Kt(re, {
          get label() {
            return t(C).period;
          },
          get options() {
            return E;
          },
          get value() {
            return t(b);
          },
          onChange: ge,
          get disabled() {
            return o();
          },
          sz: "sm",
        }),
          x(de, Ae));
      };
    W(H, (de) => {
      t(k) === "iso" ? de(te) : de(pe, !1);
    });
  }
  var _e = M(H, 2);
  Kt(_e, {
    get label() {
      return t(C).minute;
    },
    get options() {
      return t(T);
    },
    get value() {
      return t(d);
    },
    onChange: ue,
    get disabled() {
      return o();
    },
    sz: "sm",
  });
  var ve = M(Y, 2),
    D = p(ve);
  ot(D, {
    onClick: me,
    get disabled() {
      return o();
    },
    sz: "xs",
    children: (de, Ae) => {
      var L = je();
      (O(() => J(L, t(k) === "iso" ? t(C).switchTo12h : t(C).switchTo24h)),
        x(de, L));
    },
    $$slots: { default: !0 },
  });
  var S = M(D, 2);
  {
    var ee = (de) => {
      {
        let Ae = g(() => !t(c) || o());
        ot(de, {
          onClick: $,
          variant: "danger",
          get disabled() {
            return t(Ae);
          },
          sz: "xs",
          children: (L, re) => {
            var ie = je();
            (O(() => J(ie, t(C).clear)), x(L, ie));
          },
          $$slots: { default: !0 },
        });
      }
    };
    W(S, (de) => {
      s() && de(ee);
    });
  }
  var N = M(X, 2),
    ne = p(N),
    le = p(ne),
    oe = M(ne, 2),
    Fe = p(oe);
  {
    var Ce = (de) => {
        var Ae = je();
        (O(() => J(Ae, a())), x(de, Ae));
      },
      Ee = (de) => {
        var Ae = je();
        (O(() => J(Ae, t(w))), x(de, Ae));
      };
    W(Fe, (de) => {
      t(c) ? de(Ce) : de(Ee, !1);
    });
  }
  (O(() => {
    (J(j, t(h)), J(le, t(C).selectedTime));
  }),
    x(r, ae),
    Re());
}
var Hf = R('<div role="tooltip"> </div>'),
  Kf = R("<div><!> <!></div>");
function Ft(r, e) {
  Be(e, !0);
  let a = F(e, "position", 3, "top"),
    n = F(e, "delay", 3, 300),
    o = F(e, "open", 3, !1),
    s = F(e, "text", 3, ""),
    i = F(e, "class", 3, ""),
    l = mt(e, [
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
    u = fe(!1),
    f = fe(!1),
    m = fe(!1),
    C;
  const h = g(() => o() || t(f) || t(m));
  Ke(
    () => (
      C && clearTimeout(C),
      t(h)
        ? (C = setTimeout(() => {
            A(u, !0);
          }, n()))
        : A(u, !1),
      () => {
        C && clearTimeout(C);
      }
    ),
  );
  const w = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
    },
    y = g(() => B("relative inline-block", i())),
    k = g(() =>
      B(
        "absolute z-20 p-0.5 italic text-xs font-medium whitespace-nowrap rounded-[var(--radius-xs)]",
        "bg-[var(--color-bg-surface)] text-[var(--color-text-default)] shadow-lg border border-[var(--border-color-default)]",
        "transition-opacity duration-150 ease-linear",
        t(u) ? "opacity-100" : "opacity-0 pointer-events-none",
      ),
    );
  var v = Kf(),
    d = () => A(f, !0),
    b = () => A(f, !1),
    c = () => A(m, !0),
    _ = () => A(m, !1);
  bt(v, () => ({
    class: t(y),
    onmouseenter: d,
    onmouseleave: b,
    onfocus: c,
    onblur: _,
    ...l,
  }));
  var P = p(v);
  Je(P, () => e.children ?? Q);
  var E = M(P, 2);
  {
    var z = (T) => {
      var I = Hf(),
        q = p(I);
      (O(
        (Z) => {
          (V(I, 1, Z), J(q, s()));
        },
        [() => U(B(t(k), w[a()]))],
      ),
        x(T, I));
    };
    W(E, (T) => {
      s() && t(u) && T(z);
    });
  }
  (x(r, v), Re());
}
var Gf = R(
  '<header class="flex items-end justify-between gap-4 -mx-5 px-5 py-5 border-b border-[var(--border-color-default)]"><h2 class="text-2xl font-semibold tracking-tight"> </h2> <span class="text-sm [color:var(--color-text-muted)]"> </span></header> <div class="p-5 space-y-4 text-sm opacity-90 leading-relaxed"><p><strong> </strong> <strong> </strong> <strong> </strong> </p> <p> <code> </code> <code> </code> </p> <p> </p> <p> <strong> </strong><br/> <a><strong> </strong></a></p></div>',
  1,
);
function Wf(r, e) {
  Be(e, !0);
  const a = Gt("lang"),
    n = g(() => Aa[a.value]);
  (pn(r, {
    children: (o, s) => {
      var i = Gf(),
        l = Se(i),
        u = p(l),
        f = p(u),
        m = M(u, 2),
        C = p(m),
        h = M(l, 2),
        w = p(h),
        y = p(w),
        k = p(y),
        v = M(y),
        d = M(v),
        b = p(d),
        c = M(d),
        _ = M(c),
        P = p(_),
        E = M(_),
        z = M(w, 2),
        T = p(z),
        I = M(T),
        q = p(I),
        Z = M(I),
        ue = M(Z),
        ce = p(ue),
        ge = M(ue),
        me = M(z, 2),
        $ = p(me),
        ae = M(me, 2),
        K = p(ae),
        j = M(K),
        X = p(j),
        Y = M(j, 2),
        H = M(Y),
        te = p(H),
        pe = p(te);
      (O(() => {
        (J(f, t(n).about.heading),
          J(C, t(n).about.meta),
          J(k, t(n).app.title),
          J(v, `${t(n).about.intro.description ?? ""} `),
          J(b, t(n).about.intro.frameworks.runes),
          J(c, ` ${t(n).about.intro.connector ?? ""} `),
          J(P, t(n).about.intro.frameworks.tailwind),
          J(E, ` ${t(n).about.intro.closing ?? ""}`),
          J(T, `${t(n).about.styling.beforeFile ?? ""} `),
          J(q, t(n).about.styling.file),
          J(Z, `${t(n).about.styling.afterFile ?? ""} `),
          J(ce, t(n).about.styling.darkClass),
          J(ge, ` ${t(n).about.styling.afterDark ?? ""}`),
          J($, t(n).about.patterns),
          J(K, `${t(n).about.versionLabel ?? ""}: `),
          J(X, t(n).app.version),
          J(Y, ` ${t(n).about.authorLabel ?? ""}: `),
          he(H, "href", t(n).app.authorUrl),
          J(pe, t(n).about.authorName));
      }),
        x(o, i));
    },
    $$slots: { default: !0 },
  }),
    Re());
}
var Zf = R(
  '<div><div class="flex flex-wrap items-baseline gap-3"><div class="shrink-0"><!></div> <!></div> <div class="w-full h-[320px] md:h-[480px]"><!></div></div>',
);
function Yf(r, e) {
  Be(e, !0);
  let a = F(e, "class", 3, "");
  const n = [
      { value: "txt", label: "Text" },
      { value: "html", label: "HTML" },
      { value: "css", label: "CSS" },
      { value: "js", label: "JavaScript" },
      { value: "json", label: "JSON" },
      { value: "python", label: "Python" },
    ],
    s = `<!doctype html>
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
  let i = fe("html"),
    l = et({
      txt: `CodeView demo
Switch language with the select above.`,
      html: s,
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
    u = fe(""),
    f = fe(!1);
  const m = g(() => l[t(i)]),
    C = g(() => t(u).trimStart());
  Ke(() => {
    t(m) !== t(u) && A(u, t(m), !0);
  });
  var h = Zf(),
    w = p(h),
    y = p(w),
    k = p(y);
  Kt(k, {
    label: "Language",
    get options() {
      return n;
    },
    onChange: (c) => A(i, c, !0),
    class: "min-w-[6rem]",
    sz: "xs",
    get value() {
      return t(i);
    },
    set value(c) {
      A(i, c, !0);
    },
  });
  var v = M(y, 2);
  Mi(v, {
    topLabel: "Editable",
    onChange: (c) => A(f, c, !0),
    sz: "xs",
    get checked() {
      return t(f);
    },
    set checked(c) {
      A(f, c, !0);
    },
  });
  var d = M(w, 2),
    b = p(d);
  (Fi(b, {
    get code() {
      return t(C);
    },
    title: "CODE",
    get language() {
      return t(i);
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
    class: "h-full",
  }),
    O((c) => V(h, 1, c), [() => U(B("w-full flex flex-col gap-3", a()))]),
    x(r, h),
    Re());
}
var Xf = R('<header class="p-[var(--spacing-md,1rem)]"><!></header>'),
  Jf = R(
    '<aside class="hidden lg:block p-[var(--spacing-md,1rem)]"><!></aside>',
  ),
  Qf = R(
    '<aside class="hidden lg:block p-[var(--spacing-md,1rem)]"><!></aside>',
  ),
  $f = R('<footer class="p-[var(--spacing-md,1rem)]"><!></footer>'),
  ev = R(
    '<div><div class="grid min-h-dvh grid-rows-[auto_1fr_auto]"><!> <!> <main class="p-[var(--spacing-md,1rem)]"><!></main> <!> <!></div></div>',
  );
function tv(r, e) {
  Be(e, !0);
  let a = F(e, "class", 3, "");
  const n =
      "min-h-dvh w-full bg-[var(--color-bg-page,oklch(98%_0_0))] text-[var(--color-text-default,oklch(15%_0_0))] transition-colors duration-[var(--transition-normal,300ms)]",
    o = g(() => B(n, a()));
  var s = ev(),
    i = p(s),
    l = p(i);
  {
    var u = (d) => {
      var b = Xf(),
        c = p(b);
      (Je(c, () => e.header ?? Q), x(d, b));
    };
    W(l, (d) => {
      e.header && d(u);
    });
  }
  var f = M(l, 2);
  {
    var m = (d) => {
      var b = Jf(),
        c = p(b);
      (Je(c, () => e.left ?? Q), x(d, b));
    };
    W(f, (d) => {
      e.left && d(m);
    });
  }
  var C = M(f, 2),
    h = p(C);
  Je(h, () => e.children ?? Q);
  var w = M(C, 2);
  {
    var y = (d) => {
      var b = Qf(),
        c = p(b);
      (Je(c, () => e.right ?? Q), x(d, b));
    };
    W(w, (d) => {
      e.right && d(y);
    });
  }
  var k = M(w, 2);
  {
    var v = (d) => {
      var b = $f(),
        c = p(b);
      (Je(c, () => e.footer ?? Q), x(d, b));
    };
    W(k, (d) => {
      e.footer && d(v);
    });
  }
  (O(() => V(s, 1, U(t(o)))), x(r, s), Re());
}
const Xo = qu([]);
let rv = 0;
function Tn(r, e) {
  const a = rv++,
    n = rc(r, e?.message);
  Xo.update((o) => [
    ...o,
    {
      id: a,
      title: e?.title ?? n.title,
      message: e?.message ?? n.message,
      variant: r,
    },
  ]);
}
function av(r) {
  Xo.update((e) => e.filter((a) => a.id !== r));
}
function nv(r) {
  Tn(r);
}
var ov = R("<div><!></div> <!>", 1);
function sv(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "sm"),
    n = F(e, "class", 3, ""),
    o = F(e, "message", 3, ""),
    s = g(a);
  const i = Gt("lang"),
    l = g(() => Aa[i.value]);
  let u = fe(!1);
  Ke(() => {
    A(s, a());
  });
  function f() {
    A(u, !0);
  }
  function m() {
    (A(u, !1),
      Tn("success", {
        title: t(l).toasts.confirmTitle,
        message: t(l).toasts.confirmMessage,
      }));
  }
  function C() {
    (A(u, !1),
      Tn("warning", {
        title: t(l).toasts.cancelTitle,
        message: t(l).toasts.cancelMessage,
      }));
  }
  var h = ov(),
    w = Se(h),
    y = p(w);
  ot(y, {
    variant: "primary",
    onClick: f,
    children: (v, d) => {
      var b = je();
      (O(() => J(b, t(l).snippets.dialog.button)), x(v, b));
    },
    $$slots: { default: !0 },
  });
  var k = M(w, 2);
  (Do(k, {
    get title() {
      return t(l).snippets.dialog.title;
    },
    get sz() {
      return t(s);
    },
    get open() {
      return t(u);
    },
    onConfirm: m,
    onCancel: C,
    get class() {
      return n();
    },
    get message() {
      return o();
    },
  }),
    O((v) => V(w, 1, v), [() => U(B("flex flex-wrap gap-3"))]),
    x(r, h),
    Re());
}
var iv = R(
    '<div class="p-4 flex justify-center font-semibold text-[var(--color-text-default)] text-lg"> </div>',
  ),
  lv = R(
    '<div class="p-4 flex flex-wrap justify-center gap-[var(--spacing-sm)]"><!> <!> <!></div>',
  );
function uv(r, e) {
  Be(e, !0);
  const a = (y) => {
      var k = iv(),
        v = p(k);
      (O(() => J(v, t(i).form.header)), x(y, k));
    },
    n = (y) => {
      var k = lv(),
        v = p(k);
      Ft(v, {
        get text() {
          return t(i).form.footer.submit;
        },
        children: (c, _) => {
          ot(c, {
            variant: "primary",
            type: "submit",
            form: l,
            children: (P, E) => {
              var z = je();
              (O(() => J(z, t(i).form.footer.submit)), x(P, z));
            },
            $$slots: { default: !0 },
          });
        },
        $$slots: { default: !0 },
      });
      var d = M(v, 2);
      Ft(d, {
        get text() {
          return t(i).form.footer.cancel;
        },
        children: (c, _) => {
          ot(c, {
            variant: "danger",
            type: "button",
            onClick: C,
            children: (P, E) => {
              var z = je();
              (O(() => J(z, t(i).form.footer.cancel)), x(P, z));
            },
            $$slots: { default: !0 },
          });
        },
        $$slots: { default: !0 },
      });
      var b = M(d, 2);
      (Ft(b, {
        get text() {
          return t(i).form.footer.random;
        },
        children: (c, _) => {
          ot(c, {
            variant: "secondary",
            type: "button",
            onClick: w,
            children: (P, E) => {
              var z = je();
              (O(() => J(z, t(i).form.footer.random)), x(P, z));
            },
            $$slots: { default: !0 },
          });
        },
        $$slots: { default: !0 },
      }),
        x(y, k));
    };
  let o = F(e, "onSubmit", 3, () => {});
  const s = Gt("lang"),
    i = g(() => Aa[s.value]),
    l = "profile-form";
  let u = fe(null);
  const f = g(() => [
    {
      name: "firstName",
      type: "text",
      label: t(i).form.fields.firstName,
      required: !0,
      sz: "md",
    },
    {
      name: "lastName",
      type: "text",
      label: t(i).form.fields.lastName,
      required: !0,
      sz: "md",
    },
    {
      name: "email",
      type: "email",
      label: t(i).form.fields.email,
      required: !0,
      sz: "md",
    },
    {
      name: "password",
      type: "password",
      label: t(i).form.fields.password,
      required: !0,
      sz: "md",
      validators: [
        (y) =>
          typeof y == "string" && y.length >= 6
            ? null
            : t(i).form.validators.passwordLength,
      ],
    },
    {
      name: "confirmPassword",
      type: "password",
      label: t(i).form.fields.confirmPassword,
      required: !0,
      sz: "md",
      validators: [
        (y, k) =>
          typeof y == "string" &&
          k &&
          typeof k.password == "string" &&
          y === k.password
            ? null
            : t(i).form.validators.passwordMatch,
      ],
    },
    {
      name: "age",
      type: "number",
      label: t(i).form.fields.age,
      required: !0,
      validators: [
        (y) => {
          if (typeof y == "string" && y.trim() === "") return null;
          const k = typeof y == "number" ? y : Number(y);
          return Number.isNaN(k) || k < 18
            ? t(i).form.validators.adultsOnly
            : null;
        },
      ],
    },
    {
      name: "gender",
      type: "select",
      label: t(i).form.fields.gender,
      required: !0,
      options: t(i).options.formGender,
    },
    {
      name: "country",
      type: "select",
      label: t(i).form.fields.country,
      required: !0,
      options: t(i).options.formCountries,
    },
    { name: "about", type: "textarea", label: t(i).form.fields.about, rows: 5 },
    {
      name: "newsletter",
      type: "checkbox",
      label: t(i).form.fields.newsletter,
    },
    {
      name: "tos",
      type: "checkbox",
      label: t(i).form.fields.tos,
      required: !0,
    },
  ]);
  function m(y) {
    o()(y);
  }
  function C() {
    t(u)?.reset();
  }
  function h(y) {
    A(u, y, !0);
  }
  function w() {
    if (!t(u)) return;
    const y = ["John", "Alex", "Tom", "Sam", "Anna", "Jessica", "Sarah"],
      k = ["Smith", "Williams", "Brown", "Johnson", "Miller"],
      v = (c) => c[Math.floor(Math.random() * c.length)],
      d = (c, _) => Math.floor(Math.random() * (_ - c + 1)) + c,
      b = Math.random().toString(36).slice(2, 10);
    for (const c of t(f))
      switch (c.type) {
        case "text": {
          const _ = c.name.toLowerCase();
          _.includes("first")
            ? t(u).setValue(c.name, v(y))
            : _.includes("last")
              ? t(u).setValue(c.name, v(k))
              : t(u).setValue(c.name, v(y));
          break;
        }
        case "password":
          t(u).setValue(c.name, b);
          break;
        case "number":
          t(u).setValue(c.name, d(18, 100));
          break;
        case "email":
          t(u).setValue(
            c.name,
            `${v(y).toLowerCase()}.${v(k).toLowerCase()}@example.com`,
          );
          break;
        case "select": {
          const _ = c.options ?? [];
          if (_.length > 0) {
            const P = d(0, _.length - 1);
            t(u).setValue(c.name, String(_[P].value));
          }
          break;
        }
        case "checkbox":
          t(u).setValue(c.name, Math.random() < 0.5);
          break;
        case "textarea":
          t(u).setValue(c.name, "Auto generated");
          break;
      }
  }
  (pn(r, {
    get header() {
      return a;
    },
    get footer() {
      return n;
    },
    children: (y, k) => {
      Ld(y, {
        get schema() {
          return t(f);
        },
        rowGap: "xl",
        onSubmit: m,
        formId: l,
        expose: h,
        labelAlign: "left",
        compact: !1,
      });
    },
    $$slots: { default: !0 },
  }),
    Re());
}
var cv = R(
  '<div><div class="w-full border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] overflow-x-auto overflow-y-visible"><!></div> <div class="bg-[var(--color-bg-surface)] h-40 border border-[var(--border-color-default)] border-t-0 p-4 text-[var(--color-text-muted)]"> </div></div>',
);
function dv(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "sm"),
    n = F(e, "class", 3, ""),
    o = g(a);
  const s = Gt("lang"),
    i = g(() => Aa[s.value].menuDemo),
    l = g(() => [
      {
        name: t(i).menus.file,
        actions: [
          { id: "new", label: t(i).actions.new, shortcut: "Ctrl+N" },
          { id: "open", label: t(i).actions.open, shortcut: "Ctrl+O" },
          { id: "save", label: t(i).actions.save, shortcut: "Ctrl+S" },
          { type: "separator" },
          {
            id: "export",
            label: t(i).actions.export,
            shortcut: "Ctrl+E",
            submenu: [
              { id: "export-csv", label: t(i).actions.exportCsv },
              { id: "export-pdf", label: t(i).actions.exportPdf },
              { type: "separator" },
              { id: "export-zip", label: t(i).actions.exportZip },
            ],
          },
          { type: "separator" },
          { id: "close", label: t(i).actions.close, shortcut: "Ctrl+W" },
        ],
      },
      {
        name: t(i).menus.edit,
        actions: [
          { id: "undo", label: t(i).actions.undo, shortcut: "Ctrl+Z" },
          { id: "redo", label: t(i).actions.redo, shortcut: "Ctrl+Y" },
          { type: "separator" },
          { id: "cut", label: t(i).actions.cut, shortcut: "Ctrl+X" },
          { id: "copy", label: t(i).actions.copy, shortcut: "Ctrl+C" },
          { id: "paste", label: t(i).actions.paste, shortcut: "Ctrl+V" },
          { type: "separator" },
          {
            id: "find",
            label: t(i).actions.find,
            shortcut: "Ctrl+F",
            submenu: [
              { id: "find-next", label: t(i).actions.findNext, shortcut: "F3" },
              {
                id: "find-prev",
                label: t(i).actions.findPrev,
                shortcut: "Shift+F3",
              },
            ],
          },
        ],
      },
      {
        name: t(i).menus.view,
        actions: [
          { id: "xs", label: "XS" },
          { id: "sm", label: "SM" },
          { id: "md", label: "MD" },
          { id: "lg", label: "LG" },
          { id: "xl", label: "XL" },
          { type: "separator" },
          {
            id: "theme",
            label: t(i).actions.theme,
            submenu: [
              { id: "light", label: t(i).actions.light },
              { id: "dark", label: t(i).actions.dark },
            ],
          },
        ],
      },
    ]);
  let u = g(() => "");
  function f(k, v) {
    const d = typeof v == "string" ? v : v.label || v.id || t(i).fallbackLabel,
      b = typeof v == "string" ? v : v.id;
    (b && ["xs", "sm", "md", "lg", "xl"].includes(b) && A(o, b),
      A(u, `${k}: ${d}`),
      console.log("Selected:", k, v));
  }
  (Ke(() => {
    A(o, a());
  }),
    Ke(() => {
      A(u, t(i).prompt);
    }));
  var m = cv(),
    C = p(m),
    h = p(C);
  Ti(h, {
    get sz() {
      return t(o);
    },
    get menus() {
      return t(l);
    },
    onSelect: f,
  });
  var w = M(C, 2),
    y = p(w);
  (O(
    (k) => {
      (V(m, 1, k), J(y, t(u)));
    },
    [() => U(B("flex flex-col w-full", n()))],
  ),
    x(r, m),
    Re());
}
var fv = R(
    "<div><div><span> </span> <span> </span> <span> </span> <span> </span></div> <div><span> </span> <span> </span></div></div>",
  ),
  vv = R("<div><p> </p> <div><!></div></div>"),
  gv = R(
    '<div><div class="overflow-x-auto overflow-y-visible w-full min-w-full bg-[var(--color-bg-surface)] border-b border-[var(--border-color-default)]"><!></div> <!> <!> <input type="file" class="hidden" accept=".txt,.md,.log,.html,.css,.js,.json,.py,.yml,.yaml,*/*"/> <!> <!> <!></div>',
  );
function pv(r, e) {
  Be(e, !0);
  let a = F(e, "L", 19, () => ({})),
    n = F(e, "lang", 7, "txt"),
    o = F(e, "sz", 7, "sm"),
    s = F(e, "class", 3, "");
  const i = g(() => a()?.notepad?.menu ?? {}),
    l = g(() => a()?.notepad?.actions ?? {}),
    u = g(() => a()?.menuItems ?? {}),
    f = g(() => t(i).file ?? t(u).file ?? "File"),
    m = g(() => t(i).edit ?? t(u).edit ?? "Edit"),
    C = g(() => t(i).view ?? t(u).view ?? "View"),
    h = g(() => t(i).language ?? t(u).language ?? "Language"),
    w = g(() => t(i).help ?? t(u).help ?? "Help"),
    y = g(() => t(i).settings ?? t(u).settings ?? "Settings"),
    k = g(() => t(l).statusBar ?? t(u).statusBar ?? "Status bar"),
    v = g(() => t(l).about ?? t(u).about ?? "About"),
    d = g(() => t(l).options ?? t(u).options ?? "Options"),
    b = g(
      () =>
        a()?.notepad?.aboutText ??
        "A lightweight notepad demo using the component library.",
    ),
    c = g(
      () =>
        a()?.notepad?.optionsText ??
        "Change appearance options such as status bar visibility.",
    ),
    _ = [
      { value: "txt", label: "Text" },
      { value: "html", label: "HTML" },
      { value: "css", label: "CSS" },
      { value: "js", label: "JavaScript" },
      { value: "json", label: "JSON" },
      { value: "python", label: "Python" },
    ],
    P = g(() =>
      _.map(({ value: se, label: Pe }) => ({
        id: se === n() ? o() : se,
        real: se,
        label: Pe,
      })),
    ),
    E = g(() => [
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
        name: t(m),
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
        name: t(C),
        actions: [
          { id: "xs", label: t(l).xs ?? t(u).xs ?? "XS" },
          { id: "sm", label: t(l).sm ?? t(u).sm ?? "SM" },
          { id: "md", label: t(l).md ?? t(u).md ?? "MD" },
          { id: "lg", label: t(l).lg ?? t(u).lg ?? "LG" },
          { id: "xl", label: t(l).xl ?? t(u).xl ?? "XL" },
          { id: "separator", type: "separator" },
          { id: "toggle-statusbar", label: t(k), shortcut: "Ctrl+B" },
        ],
      },
      { name: t(h), actions: t(P) },
      { name: t(y), actions: [{ id: "options", label: t(d) }] },
      { name: t(w), actions: [{ id: "about", label: t(v), shortcut: "F1" }] },
    ]);
  let z = fe(""),
    T = fe(null),
    I = fe(et([])),
    q = fe(et([])),
    Z = fe(""),
    ue = fe(!1),
    ce = fe(!1),
    ge = fe(et([])),
    me = 0,
    $ = null,
    ae = fe(!0),
    K = fe(!1),
    j = fe(!1),
    X = fe(1),
    Y = fe(1);
  const H = g(() => t(z).length),
    te = g(() =>
      t(z) === ""
        ? 1
        : t(z).split(`
`).length,
    ),
    pe = g(() =>
      t(z).trim() ? t(z).trim().split(/\s+/).filter(Boolean).length : 0,
    );
  function _e(se, Pe, De) {
    A(ge, [...t(ge), { id: me++, title: De, message: Pe, variant: se }], !0);
  }
  function ve(se) {
    A(
      ge,
      t(ge).filter((Pe) => Pe.id !== se),
      !0,
    );
  }
  function D(se) {
    (!t(I).length || t(I).at(-1) !== se) && A(I, [...t(I), se].slice(-3), !0);
  }
  function S(se) {
    A(q, [...t(q), se].slice(-3), !0);
  }
  function ee() {
    A(q, [], !0);
  }
  Ke(() => {
    if (!t(ue)) {
      (A(Z, t(z), !0), A(ue, !0));
      return;
    }
    if (t(ce)) {
      A(Z, t(z), !0);
      return;
    }
    t(z) !== t(Z) && (D(t(Z)), ee(), A(Z, t(z), !0));
  });
  function N(se) {
    (D(t(z)), ee(), A(ce, !0), A(z, se, !0), A(ce, !1), A(Z, t(z), !0));
  }
  function ne() {
    const se = a()?.notepad?.confirmNew ?? "";
    (t(z) && se && !confirm(se)) || (N(""), A(T, null));
  }
  async function le() {
    try {
      const se = window;
      if (se.showOpenFilePicker) {
        const [Pe] = await se.showOpenFilePicker({
            multiple: !1,
            types: [
              {
                description: "Text",
                accept: { "text/plain": [".txt", ".md", ".log"] },
              },
              { description: "All", accept: { "*/*": [".*"] } },
            ],
          }),
          qe = await (await Pe.getFile()).text();
        (N(qe), A(T, Pe, !0));
        return;
      }
      if ($) {
        (($.value = ""), $.click());
        return;
      }
      _e(
        "warning",
        a()?.notepad?.openError ??
          "File opening is not supported in this browser",
      );
    } catch {
      _e("danger", a()?.notepad?.openError ?? "Error");
    }
  }
  async function oe() {
    try {
      const se = window;
      if (t(T) && se.isSecureContext && t(T).createWritable) {
        const rt = await t(T).createWritable();
        (await rt.write(new Blob([t(z)], { type: "text/plain;charset=utf-8" })),
          await rt.close());
        return;
      }
      if (se.showSaveFilePicker) {
        const rt = await se.showSaveFilePicker({
            suggestedName: "note.txt",
            types: [
              { description: "Text", accept: { "text/plain": [".txt"] } },
            ],
          }),
          at = await rt.createWritable();
        (await at.write(new Blob([t(z)], { type: "text/plain;charset=utf-8" })),
          await at.close(),
          A(T, rt, !0));
        return;
      }
      const Pe = new Blob([t(z)], { type: "text/plain;charset=utf-8" }),
        De = URL.createObjectURL(Pe),
        qe = document.createElement("a");
      ((qe.href = De),
        (qe.download = "note.txt"),
        document.body.appendChild(qe),
        qe.click(),
        qe.remove(),
        URL.revokeObjectURL(De));
    } catch {
      _e("danger", a()?.notepad?.saveError ?? "Error");
    }
  }
  function Fe(se) {
    return se
      ? se instanceof HTMLTextAreaElement
        ? !0
        : se instanceof HTMLInputElement
          ? ["text", "search", "url", "tel", "password"].includes(se.type)
          : !1
      : !1;
  }
  function Ce() {
    const se = document.activeElement;
    return Fe(se) ? se : null;
  }
  function Ee() {
    const Pe = Ce()?.selectionStart ?? t(z).length,
      qe = t(z).slice(0, Pe).split(`
`);
    (A(X, Math.max(qe.length, 1), !0), A(Y, (qe.at(-1)?.length ?? 0) + 1));
  }
  async function de() {
    try {
      const se = Ce(),
        Pe = se ? (se.selectionStart ?? 0) : 0,
        De = se ? (se.selectionEnd ?? 0) : 0;
      if (Pe === De) return;
      const qe = t(z).slice(Pe, De);
      await navigator.clipboard.writeText(qe);
      const rt = t(z).slice(0, Pe) + t(z).slice(De);
      (D(t(z)),
        ee(),
        A(ce, !0),
        A(z, rt),
        A(ce, !1),
        A(Z, t(z), !0),
        queueMicrotask(() => {
          const at = Ce();
          at && (at.selectionStart = at.selectionEnd = Pe);
        }));
    } catch {
      _e("danger", a()?.notepad?.cutError ?? "Error");
    }
  }
  async function Ae() {
    try {
      const se = Ce(),
        Pe = se ? (se.selectionStart ?? 0) : 0,
        De = se ? (se.selectionEnd ?? 0) : 0;
      if (Pe === De) return;
      const qe = t(z).slice(Pe, De);
      await navigator.clipboard.writeText(qe);
    } catch {
      _e("danger", a()?.notepad?.copyError ?? "Error");
    }
  }
  async function L() {
    try {
      const se = await navigator.clipboard.readText(),
        Pe = Ce(),
        De = Pe?.selectionStart ?? t(z).length,
        qe = Pe?.selectionEnd ?? t(z).length,
        rt = t(z).slice(0, De) + se + t(z).slice(qe);
      (D(t(z)), ee(), A(ce, !0), A(z, rt), A(ce, !1), A(Z, t(z), !0));
      const at = De + se.length;
      queueMicrotask(() => {
        const Pt = Ce();
        Pt && (Pt.selectionStart = Pt.selectionEnd = at);
      });
    } catch {
      _e("danger", a()?.notepad?.pasteError ?? "Error");
    }
  }
  function re() {
    try {
      if (!t(I).length) return;
      const se = t(I).at(-1);
      (A(I, t(I).slice(0, -1), !0),
        S(t(z)),
        A(ce, !0),
        A(z, se, !0),
        A(ce, !1),
        A(Z, t(z), !0));
    } catch {
      _e("danger", a()?.notepad?.undoError ?? "Error");
    }
  }
  function ie() {
    try {
      if (!t(q).length) return;
      const se = t(q).at(-1);
      (A(q, t(q).slice(0, -1), !0),
        D(t(z)),
        A(ce, !0),
        A(z, se, !0),
        A(ce, !1),
        A(Z, t(z), !0));
    } catch {
      _e("danger", a()?.notepad?.redoError ?? "Error");
    }
  }
  function be() {
    A(K, !0);
  }
  async function ke(se) {
    const Pe = se.target,
      De = Pe?.files?.[0];
    if (De)
      try {
        const qe = await De.text();
        (N(qe), A(T, null));
      } catch {
        _e("danger", a()?.notepad?.openError ?? "Error");
      } finally {
        Pe && (Pe.value = "");
      }
  }
  function xe(se, Pe) {
    const De = typeof Pe == "string" ? Pe : (Pe.real ?? Pe.id);
    if (De)
      switch (De) {
        case "new":
          ne();
          break;
        case "open":
          le();
          break;
        case "save":
          oe();
          break;
        case "undo":
          re();
          break;
        case "redo":
          ie();
          break;
        case "cut":
          de();
          break;
        case "copy":
          Ae();
          break;
        case "paste":
          L();
          break;
        case "about":
          be();
          break;
        case "options":
          A(j, !0);
          break;
        case "xs":
        case "sm":
        case "md":
        case "lg":
        case "xl":
          o(De);
          break;
        case "txt":
        case "html":
        case "css":
        case "js":
        case "json":
        case "python":
          n(De);
          break;
        case "toggle-statusbar":
          A(ae, !t(ae));
          break;
      }
  }
  const G = g(() => ({
    "ctrl+n": () => xe(t(f), "new"),
    "ctrl+o": () => xe(t(f), "open"),
    "ctrl+s": () => xe(t(f), "save"),
    "ctrl+z": () => xe(t(m), "undo"),
    "ctrl+y": () => xe(t(m), "redo"),
    "ctrl+x": () => xe(t(m), "cut"),
    "ctrl+c": () => xe(t(m), "copy"),
    "ctrl+v": () => xe(t(m), "paste"),
    "ctrl+b": () => xe(t(C), "toggle-statusbar"),
    f1: () => xe(t(w), "about"),
  }));
  function we(se) {
    const Pe = se.key.toLowerCase(),
      De = [];
    ((se.ctrlKey || se.metaKey) && De.push("ctrl"),
      se.shiftKey && De.push("shift"),
      De.push(Pe));
    const qe = De.join("+"),
      rt = t(G)[qe] ?? t(G)[Pe];
    rt && (se.preventDefault(), rt());
  }
  (Ke(() => {
    (t(z), Ee());
  }),
    Ke(() => {
      if (typeof document > "u") return;
      const se = () => Ee();
      return (
        document.addEventListener("selectionchange", se),
        () => document.removeEventListener("selectionchange", se)
      );
    }));
  var Te = gv();
  kt("keydown", So, we);
  var ze = p(Te),
    Ie = p(ze);
  Ti(Ie, {
    class: "block min-w-full bg-transparent border-0",
    get menus() {
      return t(E);
    },
    onSelect: xe,
    get sz() {
      return o();
    },
  });
  var He = M(ze, 2);
  Fi(He, {
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
      return t(z);
    },
    set code(se) {
      A(z, se, !0);
    },
  });
  var Oe = M(He, 2);
  {
    var Me = (se) => {
      var Pe = fv(),
        De = p(Pe),
        qe = p(De),
        rt = p(qe),
        at = M(qe, 2),
        Pt = p(at),
        er = M(at, 2),
        Nt = p(er),
        Zt = M(er, 2),
        Et = p(Zt),
        tr = M(De, 2),
        We = p(tr),
        Ye = p(We),
        it = M(We, 2),
        $e = p(it);
      (O(
        (rr, Sr, na, oa, jt) => {
          (V(Pe, 1, rr),
            V(De, 1, Sr),
            J(rt, `Ln ${t(X) ?? ""}, Col ${t(Y) ?? ""}`),
            J(Pt, `${t(te) ?? ""} lines`),
            J(Nt, `${t(pe) ?? ""} words`),
            J(Et, `${t(H) ?? ""} chars`),
            V(tr, 1, na),
            J(Ye, oa),
            J($e, `Size ${jt ?? ""}`));
        },
        [
          () =>
            U(
              B(
                "rounded-xs border border-[var(--border-color-default)] bg-[var(--color-bg-muted)]",
                "text-[var(--color-text-muted)] px-3 py-2",
                "flex flex-wrap items-center justify-between gap-3",
                Ne[o()],
              ),
            ),
          () => U(B("flex flex-wrap items-center gap-3")),
          () => U(B("flex flex-wrap items-center gap-3")),
          () => n().toUpperCase(),
          () => o().toUpperCase(),
        ],
      ),
        x(se, Pe));
    };
    W(Oe, (se) => {
      t(ae) && se(Me);
    });
  }
  var Xe = M(Oe, 2);
  ((Xe.__change = ke),
    ut(
      Xe,
      (se) => ($ = se),
      () => $,
    ));
  var Qe = M(Xe, 2);
  nt(
    Qe,
    17,
    () => t(ge),
    (se) => se.id,
    (se, Pe) => {
      Yo(se, {
        get title() {
          return t(Pe).title;
        },
        get message() {
          return t(Pe).message;
        },
        get variant() {
          return t(Pe).variant;
        },
        onClose: () => ve(t(Pe).id),
      });
    },
  );
  var dt = M(Qe, 2);
  {
    var Dt = (se) => {
      Do(se, {
        open: !0,
        get title() {
          return t(v);
        },
        get message() {
          return t(b);
        },
        onClose: () => A(K, !1),
        onCancel: () => A(K, !1),
        onConfirm: () => A(K, !1),
        get sz() {
          return o();
        },
      });
    };
    W(dt, (se) => {
      t(K) && se(Dt);
    });
  }
  var It = M(dt, 2);
  {
    var tt = (se) => {
      Do(se, {
        open: !0,
        get title() {
          return t(d);
        },
        onClose: () => A(j, !1),
        onCancel: () => A(j, !1),
        onConfirm: () => A(j, !1),
        get sz() {
          return o();
        },
        children: (Pe, De) => {
          var qe = vv(),
            rt = p(qe),
            at = p(rt),
            Pt = M(rt, 2),
            er = p(Pt);
          (on(er, {
            get label() {
              return t(k);
            },
            get sz() {
              return o();
            },
            variant: "neutral",
            get checked() {
              return t(ae);
            },
            set checked(Nt) {
              A(ae, Nt, !0);
            },
          }),
            O(
              (Nt, Zt, Et) => {
                (V(qe, 1, Nt), V(rt, 1, Zt), J(at, t(c)), V(Pt, 1, Et));
              },
              [
                () => U(B("flex flex-col gap-3")),
                () => U(B("text-[var(--color-text-muted)]", Ne[o()])),
                () => U(B("flex items-center justify-between px-1 py-2")),
              ],
            ),
            x(Pe, qe));
        },
        $$slots: { default: !0 },
      });
    };
    W(It, (se) => {
      t(j) && se(tt);
    });
  }
  (O((se) => V(Te, 1, se), [() => U(B("block w-full min-w-full", s()))]),
    x(r, Te),
    Re());
}
ct(["change"]);
var hv = R(
    '<div class="flex items-end gap-2"><!> <span class="text-xs text-[var(--color-text-muted)] mb-1"> </span></div>',
  ),
  bv = R(
    '<div class="flex flex-col h-full min-h-0"><header class="flex items-end justify-between gap-4 -mx-5 px-5 py-5 border-b border-[var(--border-color-default)]"><h2 class="text-2xl font-semibold tracking-tight"> </h2> <span class="text-sm [color:var(--color-text-muted)]"> </span></header> <section class="p-3 md:p-3 lg:p-3 shrink-0"><div class="flex gap-4 flex-wrap items-end"><!> <!> <!> <!> <!> <!></div></section> <section class="p-3 md:p-3 lg:p-3 flex-1 min-h-0 overflow-hidden"><div class="bg-[var(--color-bg-surface)] rounded-[var(--radius-xl)] p-4 md:p-6 lg:p-10 shadow-lg w-full border border-[var(--border-color-default)] flex items-center justify-center h-full"><!></div></section></div>',
  );
function Ze(r, e) {
  Be(e, !0);
  let a = F(e, "title", 3, ""),
    n = F(e, "subtitle", 3, ""),
    o = F(e, "sz", 3, "md"),
    s = F(e, "class", 3, ""),
    i = F(e, "label", 3, ""),
    l = F(e, "disabled", 3, !1);
  const u = Gt("lang"),
    f = g(() => Aa[u.value].playground.controls),
    m = g(() => kv[e.component]),
    C = g(() =>
      yv.map((c) => ({
        label: c.charAt(0).toUpperCase() + c.slice(1),
        value: c,
      })),
    );
  let h = fe("md"),
    w = fe(""),
    y = fe(""),
    k = fe(!1),
    v = fe("input"),
    d = fe(!1);
  Ke(() => {
    (A(h, o()), A(y, i()), A(k, l()), A(w, t(m).variants[0] ?? "", !0));
  });
  const b = g(() =>
    B(
      "w-full flex flex-col",
      e.component === "Carousel" ||
        e.component === "CodeView" ||
        e.component === "Splitter" ||
        e.component === "Table"
        ? "h-[640px] md:h-[800px]"
        : e.component !== "Card" && "h-[480px] md:h-[640px]",
      s(),
    ),
  );
  (pn(r, {
    get class() {
      return t(b);
    },
    children: (c, _) => {
      var P = bv(),
        E = p(P),
        z = p(E),
        T = p(z),
        I = M(z, 2),
        q = p(I),
        Z = M(E, 2),
        ue = p(Z),
        ce = p(ue);
      {
        var ge = (S) => {
          {
            let ee = g(() =>
              t(m).sizes.map((N) => ({ label: N.toUpperCase(), value: N })),
            );
            Kt(S, {
              get label() {
                return t(f).size;
              },
              get options() {
                return t(ee);
              },
              sz: "xs",
              class: "min-w-[4rem]",
              get value() {
                return t(h);
              },
              set value(N) {
                A(h, N, !0);
              },
            });
          }
        };
        W(ce, (S) => {
          t(m).sizes.length && S(ge);
        });
      }
      var me = M(ce, 2);
      {
        var $ = (S) => {
          {
            let ee = g(() =>
              t(m).variants.map((N) => ({
                label: N.charAt(0).toUpperCase() + N.slice(1),
                value: N,
              })),
            );
            Kt(S, {
              get label() {
                return t(f).variant;
              },
              get options() {
                return t(ee);
              },
              sz: "xs",
              get value() {
                return t(w);
              },
              set value(N) {
                A(w, N, !0);
              },
            });
          }
        };
        W(me, (S) => {
          t(m).variants.length && S($);
        });
      }
      var ae = M(me, 2);
      {
        var K = (S) => {
          var ee = hv(),
            N = p(ee);
          _a(N, {
            get label() {
              return t(f).label;
            },
            sz: "xs",
            variant: "default",
            maxlength: 20,
            class: "flex-1",
            get value() {
              return t(y);
            },
            set value(oe) {
              A(y, oe, !0);
            },
          });
          var ne = M(N, 2),
            le = p(ne);
          (O(() => J(le, `${t(y).length ?? ""}/20`)), x(S, ee));
        };
        W(ae, (S) => {
          t(m).supports.label && S(K);
        });
      }
      var j = M(ae, 2);
      {
        var X = (S) => {
          on(S, {
            get label() {
              return t(f).disabled;
            },
            sz: "sm",
            variant: "default",
            get checked() {
              return t(k);
            },
            set checked(ee) {
              A(k, ee, !0);
            },
          });
        };
        W(j, (S) => {
          t(m).supports.disabled && S(X);
        });
      }
      var Y = M(j, 2);
      {
        var H = (S) => {
          Kt(S, {
            sz: "xs",
            variant: "default",
            get label() {
              return t(f).fieldType;
            },
            get options() {
              return t(C);
            },
            get value() {
              return t(v);
            },
            set value(ee) {
              A(v, ee, !0);
            },
          });
        };
        W(Y, (S) => {
          e.component === "Field" && S(H);
        });
      }
      var te = M(Y, 2);
      {
        var pe = (S) => {
          on(S, {
            get label() {
              return t(f).sliderShowValue;
            },
            sz: "sm",
            variant: "default",
            onChange: (ee) => A(d, ee, !0),
            get checked() {
              return t(d);
            },
            set checked(ee) {
              A(d, ee, !0);
            },
          });
        };
        W(te, (S) => {
          e.component === "Slider" && S(pe);
        });
      }
      var _e = M(Z, 2),
        ve = p(_e),
        D = p(ve);
      (Je(
        D,
        () => e.children ?? Q,
        () => t(h),
        () => t(w),
        () => t(y),
        () => t(k),
        () => t(v),
        () => t(d),
      ),
        O(() => {
          (J(T, a() || t(f).playcardLabel), J(q, n() || t(f).playcardSubtitle));
        }),
        x(c, P));
    },
    $$slots: { default: !0 },
  }),
    Re());
}
Al();
const Es = (r) => {
    var e = mv();
    x(r, e);
  },
  zs = (r) => {
    var e = _v();
    x(r, e);
  };
var mv = R(`<div class="
      h-full
      p-[var(--spacing-lg)]
      bg-[var(--color-bg-surface)]
      text-[var(--color-text-default)]
      border-[var(--border-color-default)]
    ">First</div>`),
  _v = R(`<div class="
      h-full
      p-[var(--spacing-lg)]
      bg-[var(--color-bg-surface)]
      text-[var(--color-text-default)]
      border-[var(--border-color-default)]
    ">Second</div>`),
  xv =
    R(`<div class="w-full h-[400px] flex flex-col"><div class="h-1/2 mb-[var(--spacing-xl)]"><div class="
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
function wv(r) {
  var e = xv(),
    a = p(e),
    n = p(a),
    o = p(n);
  Ss(o, {
    direction: "horizontal",
    initialSize: 50,
    dividerSize: 3,
    minSize: 15,
    maxSize: 85,
    get first() {
      return Es;
    },
    get second() {
      return zs;
    },
  });
  var s = M(a, 4),
    i = p(s),
    l = p(i);
  (Ss(l, {
    direction: "vertical",
    initialSize: 40,
    dividerSize: 3,
    minSize: 15,
    maxSize: 85,
    get first() {
      return Es;
    },
    get second() {
      return zs;
    },
  }),
    x(r, e));
}
const As = [
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
    "progressCircle",
    "radio",
    "searchInput",
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
  yv = ["input", "number", "textarea"],
  kv = {
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
    ProgressCircle: {
      variants: ["default", "neutral"],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !0, disabled: !0 },
    },
    Radio: {
      variants: ["default", "neutral"],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !1, disabled: !0 },
    },
    SearchInput: {
      variants: ["default", "filled", "neutral"],
      sizes: ["xs", "sm", "md", "lg", "xl"],
      supports: { label: !0, disabled: !0 },
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
var Cv = R("<div><div> </div> <div> </div></div>"),
  Sv = R("<div><!> <!> <span> </span></div>"),
  Pv = R("<div><p> </p></div>"),
  Ev = R('<div><p> </p> <p class="text-[var(--color-text-muted)]"> </p></div>'),
  zv = R("<div><span> </span> <!></div>"),
  Av = R(
    '<div class="w-full max-w-3xl max-h-[320px] md:max-h-[480px] lg:max-h-[480px] overflow-auto"><!></div>',
  ),
  Fv = R("<!> <!>", 1),
  Tv = R("<div> </div>"),
  Lv = R("<div><!></div>"),
  Mv = R('<div><!> <div class="mt-4"><!></div></div>'),
  Dv = R('<div class="py-8"> </div>'),
  Iv = R('<div class="grid gap-4 max-w-3xl"><!></div>'),
  Nv = R(
    '<div class="overflow-x-auto w-full min-w-full min-h-[400px]"><!></div>',
  ),
  Ov = R('<div class="flex flex-col gap-2"><!> <!> <!></div>'),
  Bv = R('<div class="text-[var(--color-text-muted)]"> </div>'),
  Rv = R("<li> </li>"),
  jv = R('<ul class="space-y-1"></ul>'),
  Vv = R('<div class="grid gap-3"><!> <div><!></div></div>'),
  qv = R(
    '<div><div><div class="flex items-center"><!></div> <div class="flex-1"></div> <!></div></div> <div><main><!></main></div>',
    1,
  );
function Uv(r, e) {
  Be(e, !0);
  const a = () => Hu(Xo, "$toasts", n),
    [n, o] = Ku(),
    s = (ve) => {
      var D = Cv(),
        S = p(D),
        ee = p(S),
        N = M(S, 2),
        ne = p(N);
      (O(
        (le, oe, Fe) => {
          (V(D, 1, le),
            V(S, 1, oe),
            J(ee, t(d).app.title),
            V(N, 1, Fe),
            J(ne, t(d).app.version));
        },
        [
          () => U(B("p-2 flex flex-col items-center text-center")),
          () => U(B("font-bold text-[var(--color-text-muted)]", Ne.lg)),
          () => U(B("text-[var(--color-text-muted)]", Ne.xs)),
        ],
      ),
        x(ve, D));
    },
    i = (ve) => {
      var D = Sv(),
        S = p(D);
      $d(S, { class: "w-fit" });
      var ee = M(S, 2);
      Kt(ee, {
        sz: "sm",
        get label() {
          return t(d).app.language.label;
        },
        get options() {
          return t(d).app.language.options;
        },
        get value() {
          return v.value;
        },
        set value(le) {
          v.value = le;
        },
      });
      var N = M(ee, 2),
        ne = p(N);
      (O(
        (le, oe) => {
          (V(D, 1, le), V(N, 1, oe), J(ne, t(d).app.footer));
        },
        [
          () => U(B("text-center p-2 flex flex-col items-center gap-4")),
          () => U(B("italic text-[var(--color-text-muted)]", Ne.xs)),
        ],
      ),
        x(ve, D));
    },
    l = (ve) => {
      var D = Pv(),
        S = p(D),
        ee = p(S);
      (O(
        (N, ne) => {
          (V(D, 1, N), V(S, 1, ne), J(ee, t(d).snippets.card.header));
        },
        [
          () => U(B("flex items-center justify-between")),
          () => U(B("font-semibold text-[var(--color-text-default)]")),
        ],
      ),
        x(ve, D));
    },
    u = (ve) => {
      var D = Ev(),
        S = p(D),
        ee = p(S),
        N = M(S, 2),
        ne = p(N);
      (O(
        (le) => {
          (V(D, 1, le),
            J(ee, t(d).snippets.about.description),
            J(ne, t(d).snippets.about.helper));
        },
        [() => U(B("space-y-2 leading-relaxed", Ne.sm))],
      ),
        x(ve, D));
    },
    f = (ve) => {
      var D = zv(),
        S = p(D),
        ee = p(S),
        N = M(S, 2);
      (ot(N, {
        variant: "link",
        sz: "xs",
        children: (ne, le) => {
          var oe = je();
          (O(() => J(oe, t(d).snippets.card.docsLink)), x(ne, oe));
        },
        $$slots: { default: !0 },
      }),
        O(
          (ne) => {
            (V(D, 1, ne), J(ee, t(d).snippets.card.updated));
          },
          [
            () =>
              U(
                B(
                  "flex items-center justify-between text-[var(--color-text-muted)]",
                  Ne.xs,
                ),
              ),
          ],
        ),
        x(ve, D));
    },
    m = (ve, D = Q) => {
      var S = Av(),
        ee = p(S);
      (kc(ee, {
        get items() {
          return t(H);
        },
        get sz() {
          return D();
        },
        autoplay: !0,
        showDots: !0,
        showArrows: !0,
        class: "w-full",
      }),
        x(ve, S));
    },
    C = (ve, D = Q, S = Q) => {
      var ee = Fv(),
        N = Se(ee);
      {
        let le = g(() => `${t(d).snippets.toast.buttonPrefix}${S()}`);
        Ft(N, {
          get text() {
            return t(le);
          },
          children: (oe, Fe) => {
            ot(oe, {
              get sz() {
                return D();
              },
              get variant() {
                return S();
              },
              onClick: () => nv(S()),
              children: (Ce, Ee) => {
                var de = je();
                (O(() =>
                  J(
                    de,
                    `${t(d).snippets.toast.buttonPrefix ?? ""}${S() ?? ""}`,
                  ),
                ),
                  x(Ce, de));
              },
              $$slots: { default: !0 },
            });
          },
          $$slots: { default: !0 },
        });
      }
      var ne = M(N, 2);
      (nt(
        ne,
        1,
        a,
        (le) => le.id,
        (le, oe) => {
          Yo(le, {
            get title() {
              return t(oe).title;
            },
            get message() {
              return t(oe).message;
            },
            get variant() {
              return t(oe).variant;
            },
            onClose: () => av(t(oe).id),
          });
        },
      ),
        x(ve, ee));
    },
    h = (ve) => {
      var D = Tv(),
        S = p(D);
      (O(
        (ee) => {
          (V(D, 1, ee), J(S, t(d).states.emptyPreview));
        },
        [() => U(B("text-center text-[var(--color-text-muted)] py-10"))],
      ),
        x(ve, D));
    },
    w = (ve, D = Q, S = Q, ee = Q, N = Q, ne = Q) => {
      var le = Lv(),
        oe = p(le);
      {
        var Fe = (Ee) => {
            {
              let de = g(() => ee() || t(d).snippets.field.text);
              Ft(Ee, {
                get text() {
                  return t(de);
                },
                children: (Ae, L) => {
                  {
                    let re = g(() => ee() || t(d).snippets.field.text);
                    _a(Ae, {
                      get sz() {
                        return D();
                      },
                      get variant() {
                        return S();
                      },
                      get label() {
                        return t(re);
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
          Ce = (Ee) => {
            var de = Le(),
              Ae = Se(de);
            {
              var L = (ie) => {
                  {
                    let be = g(() => ee() || t(d).snippets.field.number);
                    Ft(ie, {
                      get text() {
                        return t(be);
                      },
                      children: (ke, xe) => {
                        {
                          let G = g(() => ee() || t(d).snippets.field.number);
                          _a(ke, {
                            get sz() {
                              return D();
                            },
                            get variant() {
                              return S();
                            },
                            type: "number",
                            parseNumber: !0,
                            get label() {
                              return t(G);
                            },
                            get placeholder() {
                              return t(d).snippets.field.placeholder;
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
                re = (ie) => {
                  var be = Le(),
                    ke = Se(be);
                  {
                    var xe = (G) => {
                      {
                        let we = g(() => ee() || t(d).snippets.field.textarea);
                        Ft(G, {
                          get text() {
                            return t(we);
                          },
                          children: (Te, ze) => {
                            {
                              let Ie = g(
                                () => ee() || t(d).snippets.field.textarea,
                              );
                              _a(Te, {
                                get sz() {
                                  return D();
                                },
                                get variant() {
                                  return S();
                                },
                                as: "textarea",
                                rows: 3,
                                get label() {
                                  return t(Ie);
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
                    W(
                      ke,
                      (G) => {
                        ne() === "textarea" && G(xe);
                      },
                      !0,
                    );
                  }
                  x(ie, be);
                };
              W(
                Ae,
                (ie) => {
                  ne() === "number" ? ie(L) : ie(re, !1);
                },
                !0,
              );
            }
            x(Ee, de);
          };
        W(oe, (Ee) => {
          ne() === "input" ? Ee(Fe) : Ee(Ce, !1);
        });
      }
      (O((Ee) => V(le, 1, Ee), [() => U(B("grid gap-4"))]), x(ve, le));
    },
    y = (ve, D = Q, S = Q) => {
      var ee = Mv(),
        N = p(ee);
      Df(N, {
        get columns() {
          return t(E);
        },
        get rows() {
          return t(ce);
        },
        get sz() {
          return D();
        },
        get variant() {
          return S();
        },
      });
      var ne = M(N, 2),
        le = p(ne);
      (Li(le, {
        get currentPage() {
          return t(Z);
        },
        get totalPages() {
          return t(ue);
        },
        onPageChange: Y,
      }),
        O(
          (oe) => V(ee, 1, oe),
          [
            () =>
              U(
                B(
                  "w-full max-w-3xl max-h-[320px] md:max-h-[480px] lg:max-h-[480px] overflow-auto",
                ),
              ),
          ],
        ),
        x(ve, ee));
    },
    k = (ve, D = Q, S = Q) => {
      {
        let ee = g(() =>
          t(d).snippets.tabs.labels.map((N, ne) => ({
            id: `t${ne + 1}`,
            label: N,
          })),
        );
        Of(ve, {
          get tabs() {
            return t(ee);
          },
          get sz() {
            return D();
          },
          get variant() {
            return S();
          },
          get activeTab() {
            return t(T);
          },
          onChange: (N) => A(T, N, !0),
          children: (N, ne) => {
            var le = Le(),
              oe = Se(le);
            (nt(
              oe,
              19,
              () => t(d).snippets.tabs.contents,
              (Fe, Ce) => `t${Ce + 1}`,
              (Fe, Ce, Ee) => {
                var de = Le(),
                  Ae = Se(de);
                {
                  var L = (re) => {
                    var ie = Dv(),
                      be = p(ie);
                    (O(() => J(be, t(Ce))), x(re, ie));
                  };
                  W(Ae, (re) => {
                    t(T) === `t${t(Ee) + 1}` && re(L);
                  });
                }
                x(Fe, de);
              },
            ),
              x(N, le));
          },
          $$slots: { default: !0 },
        });
      }
    },
    v = et({ value: "en" });
  Ll("lang", v);
  const d = g(() => Aa[v.value]),
    b = g(() =>
      As.filter((ve) => ve in t(d).pageLabels).map((ve) => ({
        id: ve,
        label: t(d).pageLabels[ve],
      })),
    );
  let c = fe("about");
  function _(ve) {
    As.includes(ve) && A(c, ve, !0);
  }
  const P = g(() =>
      Mo(23, (ve) => ({
        id: ve + 1,
        item: `${t(d).table.positionPrefix} ${ve + 1}`,
        qty: (ve % 7) + 1,
        price: ((ve % 9) + 1) * 100,
      })),
    ),
    E = g(() => [
      {
        key: "id",
        label: t(d).table.columns.id,
        width: "64px",
        align: "center",
      },
      { key: "item", label: t(d).table.columns.item, align: "start" },
      {
        key: "qty",
        label: t(d).table.columns.qty,
        width: "96px",
        align: "center",
      },
      {
        key: "price",
        label: t(d).table.columns.price,
        width: "120px",
        align: "center",
      },
    ]);
  let z = fe("banana"),
    T = fe("t1"),
    I = fe(0),
    q = 5,
    Z = fe(1);
  const ue = g(() => Math.max(1, Math.ceil(t(P).length / q)));
  Ke(() => {
    t(Z) > t(ue) && A(Z, Math.max(1, t(ue)), !0);
  });
  const ce = g(() => t(P).slice((t(Z) - 1) * q, t(Z) * q));
  let ge = fe(null),
    me = fe(null),
    $ = fe(null),
    ae = fe("en");
  const K = new Date().toISOString().split("T")[0];
  let j = fe("");
  function X(ve) {
    Tn("success", {
      title: t(d).toasts.confirmTitle,
      message: t(d).toasts.confirmMessage,
    });
  }
  function Y(ve) {
    A(Z, ve, !0);
  }
  const H = g(() => [...t(d).snippets.carousel.slides]),
    te = g(() => [...t(d).snippets.accordion.items]),
    pe = g(() => [...t(d).snippets.searchInput.items]),
    _e = g(() =>
      t(pe).filter((ve) =>
        ve.toLowerCase().includes(t(j).trim().toLowerCase()),
      ),
    );
  (tv(r, {
    children: (ve, D) => {
      var S = qv(),
        ee = Se(S),
        N = p(ee),
        ne = p(N),
        le = p(ne);
      jd(le, {
        get header() {
          return s;
        },
        get footer() {
          return i;
        },
        get menuItems() {
          return t(b);
        },
        get activeItem() {
          return t(c);
        },
        onSelect: _,
        closeOnSelect: !0,
        width: 300,
        get class() {
          return Ne.md;
        },
      });
      var oe = M(ne, 4);
      Ps(oe, {});
      var Fe = M(ee, 2),
        Ce = p(Fe),
        Ee = p(Ce);
      {
        var de = (L) => {
            Wf(L, {});
          },
          Ae = (L) => {
            var re = Le(),
              ie = Se(re);
            {
              var be = (xe) => {
                  Ze(xe, {
                    component: "Accordion",
                    get title() {
                      return t(d).pageLabels.accordion;
                    },
                    get subtitle() {
                      return t(d).snippets.accordionPlay.subtitle;
                    },
                    children: (we, Te = Q, ze = Q) => {
                      ic(we, {
                        get sz() {
                          return Te();
                        },
                        get class() {
                          return ze();
                        },
                        get items() {
                          return t(te);
                        },
                      });
                    },
                    $$slots: { default: !0 },
                  });
                },
                ke = (xe) => {
                  var G = Le(),
                    we = Se(G);
                  {
                    var Te = (Ie) => {
                        Ze(Ie, {
                          component: "Button",
                          get title() {
                            return t(d).pageLabels.button;
                          },
                          get subtitle() {
                            return t(d).snippets.button.subtitle;
                          },
                          children: (Oe, Me = Q, Xe = Q, Qe = Q, dt = Q) => {
                            {
                              let Dt = g(() => Qe() || `${Xe()} ${Me()}`);
                              Ft(Oe, {
                                get text() {
                                  return t(Dt);
                                },
                                children: (It, tt) => {
                                  ot(It, {
                                    get sz() {
                                      return Me();
                                    },
                                    get variant() {
                                      return Xe();
                                    },
                                    get disabled() {
                                      return dt();
                                    },
                                    children: (se, Pe) => {
                                      var De = je();
                                      (O(() =>
                                        J(De, Qe() || `${Xe()} ${Me()}`),
                                      ),
                                        x(se, De));
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
                      ze = (Ie) => {
                        var He = Le(),
                          Oe = Se(He);
                        {
                          var Me = (Qe) => {
                              Ze(Qe, {
                                component: "Card",
                                get title() {
                                  return t(d).pageLabels.card;
                                },
                                get subtitle() {
                                  return t(d).snippets.cardSnippet.subtitle;
                                },
                                children: (Dt, It = Q) => {
                                  var tt = Iv(),
                                    se = p(tt);
                                  (pn(se, {
                                    get sz() {
                                      return It();
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
                                    x(Dt, tt));
                                },
                                $$slots: { default: !0 },
                              });
                            },
                            Xe = (Qe) => {
                              var dt = Le(),
                                Dt = Se(dt);
                              {
                                var It = (se) => {
                                    Ze(se, {
                                      component: "Carousel",
                                      get title() {
                                        return t(d).pageLabels.carousel;
                                      },
                                      get subtitle() {
                                        return t(d).snippets.carouselPlay
                                          .subtitle;
                                      },
                                      children: (De, qe = Q) => {
                                        m(De, qe);
                                      },
                                      $$slots: { default: !0 },
                                    });
                                  },
                                  tt = (se) => {
                                    var Pe = Le(),
                                      De = Se(Pe);
                                    {
                                      var qe = (at) => {
                                          Ze(at, {
                                            component: "CheckBox",
                                            get title() {
                                              return t(d).pageLabels.checkbox;
                                            },
                                            get subtitle() {
                                              return t(d).snippets.checkbox
                                                .subtitle;
                                            },
                                            children: (
                                              er,
                                              Nt = Q,
                                              Zt = Q,
                                              Et = Q,
                                              tr = Q,
                                            ) => {
                                              {
                                                let We = g(
                                                  () =>
                                                    Et() || `${Zt()} ${Nt()}`,
                                                );
                                                Ft(er, {
                                                  get text() {
                                                    return t(We);
                                                  },
                                                  children: (Ye, it) => {
                                                    {
                                                      let $e = g(
                                                        () =>
                                                          Et() ||
                                                          `${Zt()} ${Nt()}`,
                                                      );
                                                      on(Ye, {
                                                        get sz() {
                                                          return Nt();
                                                        },
                                                        get variant() {
                                                          return Zt();
                                                        },
                                                        get disabled() {
                                                          return tr();
                                                        },
                                                        get label() {
                                                          return t($e);
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
                                        rt = (at) => {
                                          var Pt = Le(),
                                            er = Se(Pt);
                                          {
                                            var Nt = (Et) => {
                                                Ze(Et, {
                                                  component: "CodeView",
                                                  get title() {
                                                    return t(d).pageLabels
                                                      .codeView;
                                                  },
                                                  get subtitle() {
                                                    return t(d).components
                                                      .codeView.subtitle;
                                                  },
                                                  children: (We, Ye = Q) => {
                                                    Yf(We, {
                                                      get sz() {
                                                        return Ye();
                                                      },
                                                    });
                                                  },
                                                  $$slots: { default: !0 },
                                                });
                                              },
                                              Zt = (Et) => {
                                                var tr = Le(),
                                                  We = Se(tr);
                                                {
                                                  var Ye = ($e) => {
                                                      Ze($e, {
                                                        component:
                                                          "ColorPicker",
                                                        get title() {
                                                          return t(d).pageLabels
                                                            .colorPicker;
                                                        },
                                                        get subtitle() {
                                                          return t(d).components
                                                            .colorPicker
                                                            .subtitle;
                                                        },
                                                        children: (
                                                          Sr,
                                                          na = Q,
                                                          oa = Q,
                                                          jt = Q,
                                                          Vt = Q,
                                                        ) => {
                                                          {
                                                            let _t = g(
                                                              () =>
                                                                jt() ||
                                                                t(d).components
                                                                  .colorPicker
                                                                  .label,
                                                            );
                                                            Rc(Sr, {
                                                              get label() {
                                                                return t(_t);
                                                              },
                                                              get disabled() {
                                                                return Vt();
                                                              },
                                                              get placeholder() {
                                                                return t(d)
                                                                  .components
                                                                  .colorPicker
                                                                  .placeholder;
                                                              },
                                                              get value() {
                                                                return t(ge);
                                                              },
                                                              set value(jr) {
                                                                A(ge, jr, !0);
                                                              },
                                                            });
                                                          }
                                                        },
                                                        $$slots: {
                                                          default: !0,
                                                        },
                                                      });
                                                    },
                                                    it = ($e) => {
                                                      var rr = Le(),
                                                        Sr = Se(rr);
                                                      {
                                                        var na = (jt) => {
                                                            Ze(jt, {
                                                              component:
                                                                "DatePicker",
                                                              get title() {
                                                                return t(d)
                                                                  .pageLabels
                                                                  .datePicker;
                                                              },
                                                              get subtitle() {
                                                                return t(d)
                                                                  .components
                                                                  .datePicker
                                                                  .subtitle;
                                                              },
                                                              children: (
                                                                _t,
                                                                jr = Q,
                                                                hn = Q,
                                                                ar = Q,
                                                                Pr = Q,
                                                              ) => {
                                                                {
                                                                  let Vr = g(
                                                                    () =>
                                                                      ar() ||
                                                                      t(d)
                                                                        .components
                                                                        .datePicker
                                                                        .label,
                                                                  );
                                                                  Vc(_t, {
                                                                    get label() {
                                                                      return t(
                                                                        Vr,
                                                                      );
                                                                    },
                                                                    get placeholder() {
                                                                      return t(
                                                                        d,
                                                                      )
                                                                        .components
                                                                        .datePicker
                                                                        .placeholder;
                                                                    },
                                                                    get disabled() {
                                                                      return Pr();
                                                                    },
                                                                    get min() {
                                                                      return K;
                                                                    },
                                                                    get value() {
                                                                      return t(
                                                                        me,
                                                                      );
                                                                    },
                                                                    set value(
                                                                      qr,
                                                                    ) {
                                                                      A(
                                                                        me,
                                                                        qr,
                                                                        !0,
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
                                                          oa = (jt) => {
                                                            var Vt = Le(),
                                                              _t = Se(Vt);
                                                            {
                                                              var jr = (ar) => {
                                                                  Ze(ar, {
                                                                    component:
                                                                      "Dialog",
                                                                    get title() {
                                                                      return t(
                                                                        d,
                                                                      )
                                                                        .pageLabels
                                                                        .dialog;
                                                                    },
                                                                    get subtitle() {
                                                                      return t(
                                                                        d,
                                                                      ).snippets
                                                                        .dialog
                                                                        .subtitle;
                                                                    },
                                                                    children: (
                                                                      Vr,
                                                                      qr = Q,
                                                                      zt = Q,
                                                                    ) => {
                                                                      {
                                                                        let xt =
                                                                          g(
                                                                            () =>
                                                                              zt() ||
                                                                              t(
                                                                                d,
                                                                              )
                                                                                .snippets
                                                                                .dialog
                                                                                .confirm,
                                                                          );
                                                                        sv(Vr, {
                                                                          get sz() {
                                                                            return qr();
                                                                          },
                                                                          get message() {
                                                                            return t(
                                                                              xt,
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
                                                                hn = (ar) => {
                                                                  var Pr = Le(),
                                                                    Vr = Se(Pr);
                                                                  {
                                                                    var qr = (
                                                                        xt,
                                                                      ) => {
                                                                        Ze(xt, {
                                                                          component:
                                                                            "Field",
                                                                          get title() {
                                                                            return t(
                                                                              d,
                                                                            )
                                                                              .pageLabels
                                                                              .field;
                                                                          },
                                                                          get subtitle() {
                                                                            return t(
                                                                              d,
                                                                            )
                                                                              .snippets
                                                                              .field
                                                                              .subtitle;
                                                                          },
                                                                          children:
                                                                            (
                                                                              La,
                                                                              Ma = Q,
                                                                              Rn = Q,
                                                                              Er = Q,
                                                                              Da = Q,
                                                                              Ia = Q,
                                                                            ) => {
                                                                              w(
                                                                                La,
                                                                                Ma,
                                                                                Rn,
                                                                                Er,
                                                                                Da,
                                                                                Ia,
                                                                              );
                                                                            },
                                                                          $$slots:
                                                                            {
                                                                              default:
                                                                                !0,
                                                                            },
                                                                        });
                                                                      },
                                                                      zt = (
                                                                        xt,
                                                                      ) => {
                                                                        var Ta =
                                                                            Le(),
                                                                          La =
                                                                            Se(
                                                                              Ta,
                                                                            );
                                                                        {
                                                                          var Ma =
                                                                              (
                                                                                Er,
                                                                              ) => {
                                                                                Ze(
                                                                                  Er,
                                                                                  {
                                                                                    component:
                                                                                      "FilePicker",
                                                                                    get title() {
                                                                                      return t(
                                                                                        d,
                                                                                      )
                                                                                        .pageLabels
                                                                                        .filePicker;
                                                                                    },
                                                                                    get subtitle() {
                                                                                      return t(
                                                                                        d,
                                                                                      )
                                                                                        .components
                                                                                        .filePicker
                                                                                        .subtitle;
                                                                                    },
                                                                                    children:
                                                                                      (
                                                                                        Ia,
                                                                                        Jo = Q,
                                                                                        Qo = Q,
                                                                                        zr = Q,
                                                                                        bn = Q,
                                                                                      ) => {
                                                                                        {
                                                                                          let jn =
                                                                                            g(
                                                                                              () =>
                                                                                                zr() ||
                                                                                                t(
                                                                                                  d,
                                                                                                )
                                                                                                  .components
                                                                                                  .filePicker
                                                                                                  .label,
                                                                                            );
                                                                                          sd(
                                                                                            Ia,
                                                                                            {
                                                                                              get label() {
                                                                                                return t(
                                                                                                  jn,
                                                                                                );
                                                                                              },
                                                                                              get disabled() {
                                                                                                return bn();
                                                                                              },
                                                                                              accept:
                                                                                                "image/*",
                                                                                              multiple:
                                                                                                !0,
                                                                                              class:
                                                                                                "w-full",
                                                                                            },
                                                                                          );
                                                                                        }
                                                                                      },
                                                                                    $$slots:
                                                                                      {
                                                                                        default:
                                                                                          !0,
                                                                                      },
                                                                                  },
                                                                                );
                                                                              },
                                                                            Rn =
                                                                              (
                                                                                Er,
                                                                              ) => {
                                                                                var Da =
                                                                                    Le(),
                                                                                  Ia =
                                                                                    Se(
                                                                                      Da,
                                                                                    );
                                                                                {
                                                                                  var Jo =
                                                                                      (
                                                                                        zr,
                                                                                      ) => {
                                                                                        uv(
                                                                                          zr,
                                                                                          {
                                                                                            onSubmit:
                                                                                              X,
                                                                                          },
                                                                                        );
                                                                                      },
                                                                                    Qo =
                                                                                      (
                                                                                        zr,
                                                                                      ) => {
                                                                                        var bn =
                                                                                            Le(),
                                                                                          jn =
                                                                                            Se(
                                                                                              bn,
                                                                                            );
                                                                                        {
                                                                                          var Di =
                                                                                              (
                                                                                                sa,
                                                                                              ) => {
                                                                                                Ze(
                                                                                                  sa,
                                                                                                  {
                                                                                                    component:
                                                                                                      "Menu",
                                                                                                    get title() {
                                                                                                      return t(
                                                                                                        d,
                                                                                                      )
                                                                                                        .pageLabels
                                                                                                        .menu;
                                                                                                    },
                                                                                                    get subtitle() {
                                                                                                      return t(
                                                                                                        d,
                                                                                                      )
                                                                                                        .components
                                                                                                        .menu
                                                                                                        .subtitle;
                                                                                                    },
                                                                                                    children:
                                                                                                      (
                                                                                                        qn,
                                                                                                        Un = Q,
                                                                                                      ) => {
                                                                                                        dv(
                                                                                                          qn,
                                                                                                          {
                                                                                                            get sz() {
                                                                                                              return Un();
                                                                                                            },
                                                                                                          },
                                                                                                        );
                                                                                                      },
                                                                                                    $$slots:
                                                                                                      {
                                                                                                        default:
                                                                                                          !0,
                                                                                                      },
                                                                                                  },
                                                                                                );
                                                                                              },
                                                                                            Ii =
                                                                                              (
                                                                                                sa,
                                                                                              ) => {
                                                                                                var Vn =
                                                                                                    Le(),
                                                                                                  qn =
                                                                                                    Se(
                                                                                                      Vn,
                                                                                                    );
                                                                                                {
                                                                                                  var Un =
                                                                                                      (
                                                                                                        ia,
                                                                                                      ) => {
                                                                                                        var Na =
                                                                                                            Nv(),
                                                                                                          Hn =
                                                                                                            p(
                                                                                                              Na,
                                                                                                            );
                                                                                                        (pv(
                                                                                                          Hn,
                                                                                                          {
                                                                                                            get L() {
                                                                                                              return t(
                                                                                                                d,
                                                                                                              );
                                                                                                            },
                                                                                                          },
                                                                                                        ),
                                                                                                          x(
                                                                                                            ia,
                                                                                                            Na,
                                                                                                          ));
                                                                                                      },
                                                                                                    Ni =
                                                                                                      (
                                                                                                        ia,
                                                                                                      ) => {
                                                                                                        var Na =
                                                                                                            Le(),
                                                                                                          Hn =
                                                                                                            Se(
                                                                                                              Na,
                                                                                                            );
                                                                                                        {
                                                                                                          var Oi =
                                                                                                              (
                                                                                                                la,
                                                                                                              ) => {
                                                                                                                Ze(
                                                                                                                  la,
                                                                                                                  {
                                                                                                                    component:
                                                                                                                      "ProgressBar",
                                                                                                                    get title() {
                                                                                                                      return t(
                                                                                                                        d,
                                                                                                                      )
                                                                                                                        .pageLabels
                                                                                                                        .progressBar;
                                                                                                                    },
                                                                                                                    get subtitle() {
                                                                                                                      return t(
                                                                                                                        d,
                                                                                                                      )
                                                                                                                        .snippets
                                                                                                                        .progressBar
                                                                                                                        .subtitle;
                                                                                                                    },
                                                                                                                    children:
                                                                                                                      (
                                                                                                                        Gn,
                                                                                                                        Wn = Q,
                                                                                                                        Zn = Q,
                                                                                                                        Ar = Q,
                                                                                                                        Oa = Q,
                                                                                                                      ) => {
                                                                                                                        nf(
                                                                                                                          Gn,
                                                                                                                          {
                                                                                                                            value: 75,
                                                                                                                            get sz() {
                                                                                                                              return Wn();
                                                                                                                            },
                                                                                                                            get variant() {
                                                                                                                              return Zn();
                                                                                                                            },
                                                                                                                            get label() {
                                                                                                                              return Ar();
                                                                                                                            },
                                                                                                                            get disabled() {
                                                                                                                              return Oa();
                                                                                                                            },
                                                                                                                            indeterminate:
                                                                                                                              !0,
                                                                                                                          },
                                                                                                                        );
                                                                                                                      },
                                                                                                                    $$slots:
                                                                                                                      {
                                                                                                                        default:
                                                                                                                          !0,
                                                                                                                      },
                                                                                                                  },
                                                                                                                );
                                                                                                              },
                                                                                                            Bi =
                                                                                                              (
                                                                                                                la,
                                                                                                              ) => {
                                                                                                                var Kn =
                                                                                                                    Le(),
                                                                                                                  Gn =
                                                                                                                    Se(
                                                                                                                      Kn,
                                                                                                                    );
                                                                                                                {
                                                                                                                  var Wn =
                                                                                                                      (
                                                                                                                        Ar,
                                                                                                                      ) => {
                                                                                                                        Ze(
                                                                                                                          Ar,
                                                                                                                          {
                                                                                                                            component:
                                                                                                                              "ProgressCircle",
                                                                                                                            get title() {
                                                                                                                              return t(
                                                                                                                                d,
                                                                                                                              )
                                                                                                                                .pageLabels
                                                                                                                                .progressCircle;
                                                                                                                            },
                                                                                                                            get subtitle() {
                                                                                                                              return t(
                                                                                                                                d,
                                                                                                                              )
                                                                                                                                .snippets
                                                                                                                                .progressCircle
                                                                                                                                .subtitle;
                                                                                                                            },
                                                                                                                            children:
                                                                                                                              (
                                                                                                                                Yn,
                                                                                                                                Xn = Q,
                                                                                                                                Jn = Q,
                                                                                                                                Fr = Q,
                                                                                                                                Ba = Q,
                                                                                                                              ) => {
                                                                                                                                df(
                                                                                                                                  Yn,
                                                                                                                                  {
                                                                                                                                    value: 75,
                                                                                                                                    get sz() {
                                                                                                                                      return Xn();
                                                                                                                                    },
                                                                                                                                    get variant() {
                                                                                                                                      return Jn();
                                                                                                                                    },
                                                                                                                                    get label() {
                                                                                                                                      return Fr();
                                                                                                                                    },
                                                                                                                                    get disabled() {
                                                                                                                                      return Ba();
                                                                                                                                    },
                                                                                                                                    indeterminate:
                                                                                                                                      !0,
                                                                                                                                  },
                                                                                                                                );
                                                                                                                              },
                                                                                                                            $$slots:
                                                                                                                              {
                                                                                                                                default:
                                                                                                                                  !0,
                                                                                                                              },
                                                                                                                          },
                                                                                                                        );
                                                                                                                      },
                                                                                                                    Zn =
                                                                                                                      (
                                                                                                                        Ar,
                                                                                                                      ) => {
                                                                                                                        var Oa =
                                                                                                                            Le(),
                                                                                                                          Yn =
                                                                                                                            Se(
                                                                                                                              Oa,
                                                                                                                            );
                                                                                                                        {
                                                                                                                          var Xn =
                                                                                                                              (
                                                                                                                                Fr,
                                                                                                                              ) => {
                                                                                                                                Ze(
                                                                                                                                  Fr,
                                                                                                                                  {
                                                                                                                                    component:
                                                                                                                                      "Radio",
                                                                                                                                    get title() {
                                                                                                                                      return t(
                                                                                                                                        d,
                                                                                                                                      )
                                                                                                                                        .pageLabels
                                                                                                                                        .radio;
                                                                                                                                    },
                                                                                                                                    get subtitle() {
                                                                                                                                      return t(
                                                                                                                                        d,
                                                                                                                                      )
                                                                                                                                        .snippets
                                                                                                                                        .radio
                                                                                                                                        .subtitle;
                                                                                                                                    },
                                                                                                                                    children:
                                                                                                                                      (
                                                                                                                                        Qn,
                                                                                                                                        Ra = Q,
                                                                                                                                        ja = Q,
                                                                                                                                        Ur = Q,
                                                                                                                                        Hr = Q,
                                                                                                                                      ) => {
                                                                                                                                        var ua =
                                                                                                                                            Ov(),
                                                                                                                                          ca =
                                                                                                                                            p(
                                                                                                                                              ua,
                                                                                                                                            );
                                                                                                                                        xo(
                                                                                                                                          ca,
                                                                                                                                          {
                                                                                                                                            get sz() {
                                                                                                                                              return Ra();
                                                                                                                                            },
                                                                                                                                            get variant() {
                                                                                                                                              return ja();
                                                                                                                                            },
                                                                                                                                            get disabled() {
                                                                                                                                              return Hr();
                                                                                                                                            },
                                                                                                                                            value:
                                                                                                                                              "apple",
                                                                                                                                            get group() {
                                                                                                                                              return t(
                                                                                                                                                z,
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            set group(
                                                                                                                                              vt,
                                                                                                                                            ) {
                                                                                                                                              A(
                                                                                                                                                z,
                                                                                                                                                vt,
                                                                                                                                                !0,
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            children:
                                                                                                                                              (
                                                                                                                                                vt,
                                                                                                                                                gr,
                                                                                                                                              ) => {
                                                                                                                                                var wt =
                                                                                                                                                  je();
                                                                                                                                                (O(
                                                                                                                                                  () =>
                                                                                                                                                    J(
                                                                                                                                                      wt,
                                                                                                                                                      t(
                                                                                                                                                        d,
                                                                                                                                                      )
                                                                                                                                                        .snippets
                                                                                                                                                        .radio
                                                                                                                                                        .apple,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                                  x(
                                                                                                                                                    vt,
                                                                                                                                                    wt,
                                                                                                                                                  ));
                                                                                                                                              },
                                                                                                                                            $$slots:
                                                                                                                                              {
                                                                                                                                                default:
                                                                                                                                                  !0,
                                                                                                                                              },
                                                                                                                                          },
                                                                                                                                        );
                                                                                                                                        var da =
                                                                                                                                          M(
                                                                                                                                            ca,
                                                                                                                                            2,
                                                                                                                                          );
                                                                                                                                        xo(
                                                                                                                                          da,
                                                                                                                                          {
                                                                                                                                            get sz() {
                                                                                                                                              return Ra();
                                                                                                                                            },
                                                                                                                                            get variant() {
                                                                                                                                              return ja();
                                                                                                                                            },
                                                                                                                                            get disabled() {
                                                                                                                                              return Hr();
                                                                                                                                            },
                                                                                                                                            value:
                                                                                                                                              "banana",
                                                                                                                                            get group() {
                                                                                                                                              return t(
                                                                                                                                                z,
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            set group(
                                                                                                                                              vt,
                                                                                                                                            ) {
                                                                                                                                              A(
                                                                                                                                                z,
                                                                                                                                                vt,
                                                                                                                                                !0,
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            children:
                                                                                                                                              (
                                                                                                                                                vt,
                                                                                                                                                gr,
                                                                                                                                              ) => {
                                                                                                                                                var wt =
                                                                                                                                                  je();
                                                                                                                                                (O(
                                                                                                                                                  () =>
                                                                                                                                                    J(
                                                                                                                                                      wt,
                                                                                                                                                      t(
                                                                                                                                                        d,
                                                                                                                                                      )
                                                                                                                                                        .snippets
                                                                                                                                                        .radio
                                                                                                                                                        .banana,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                                  x(
                                                                                                                                                    vt,
                                                                                                                                                    wt,
                                                                                                                                                  ));
                                                                                                                                              },
                                                                                                                                            $$slots:
                                                                                                                                              {
                                                                                                                                                default:
                                                                                                                                                  !0,
                                                                                                                                              },
                                                                                                                                          },
                                                                                                                                        );
                                                                                                                                        var Yt =
                                                                                                                                          M(
                                                                                                                                            da,
                                                                                                                                            2,
                                                                                                                                          );
                                                                                                                                        (xo(
                                                                                                                                          Yt,
                                                                                                                                          {
                                                                                                                                            get sz() {
                                                                                                                                              return Ra();
                                                                                                                                            },
                                                                                                                                            get variant() {
                                                                                                                                              return ja();
                                                                                                                                            },
                                                                                                                                            get disabled() {
                                                                                                                                              return Hr();
                                                                                                                                            },
                                                                                                                                            value:
                                                                                                                                              "cherry",
                                                                                                                                            get group() {
                                                                                                                                              return t(
                                                                                                                                                z,
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            set group(
                                                                                                                                              vt,
                                                                                                                                            ) {
                                                                                                                                              A(
                                                                                                                                                z,
                                                                                                                                                vt,
                                                                                                                                                !0,
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            children:
                                                                                                                                              (
                                                                                                                                                vt,
                                                                                                                                                gr,
                                                                                                                                              ) => {
                                                                                                                                                var wt =
                                                                                                                                                  je();
                                                                                                                                                (O(
                                                                                                                                                  () =>
                                                                                                                                                    J(
                                                                                                                                                      wt,
                                                                                                                                                      t(
                                                                                                                                                        d,
                                                                                                                                                      )
                                                                                                                                                        .snippets
                                                                                                                                                        .radio
                                                                                                                                                        .cherry,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                                  x(
                                                                                                                                                    vt,
                                                                                                                                                    wt,
                                                                                                                                                  ));
                                                                                                                                              },
                                                                                                                                            $$slots:
                                                                                                                                              {
                                                                                                                                                default:
                                                                                                                                                  !0,
                                                                                                                                              },
                                                                                                                                          },
                                                                                                                                        ),
                                                                                                                                          x(
                                                                                                                                            Qn,
                                                                                                                                            ua,
                                                                                                                                          ));
                                                                                                                                      },
                                                                                                                                    $$slots:
                                                                                                                                      {
                                                                                                                                        default:
                                                                                                                                          !0,
                                                                                                                                      },
                                                                                                                                  },
                                                                                                                                );
                                                                                                                              },
                                                                                                                            Jn =
                                                                                                                              (
                                                                                                                                Fr,
                                                                                                                              ) => {
                                                                                                                                var Ba =
                                                                                                                                    Le(),
                                                                                                                                  Qn =
                                                                                                                                    Se(
                                                                                                                                      Ba,
                                                                                                                                    );
                                                                                                                                {
                                                                                                                                  var Ra =
                                                                                                                                      (
                                                                                                                                        Ur,
                                                                                                                                      ) => {
                                                                                                                                        Ze(
                                                                                                                                          Ur,
                                                                                                                                          {
                                                                                                                                            component:
                                                                                                                                              "SearchInput",
                                                                                                                                            get title() {
                                                                                                                                              return t(
                                                                                                                                                d,
                                                                                                                                              )
                                                                                                                                                .pageLabels
                                                                                                                                                .searchInput;
                                                                                                                                            },
                                                                                                                                            get subtitle() {
                                                                                                                                              return t(
                                                                                                                                                d,
                                                                                                                                              )
                                                                                                                                                .snippets
                                                                                                                                                .searchInput
                                                                                                                                                .subtitle;
                                                                                                                                            },
                                                                                                                                            children:
                                                                                                                                              (
                                                                                                                                                ua,
                                                                                                                                                ca = Q,
                                                                                                                                                da = Q,
                                                                                                                                                Yt = Q,
                                                                                                                                                vt = Q,
                                                                                                                                              ) => {
                                                                                                                                                var gr =
                                                                                                                                                    Vv(),
                                                                                                                                                  wt =
                                                                                                                                                    p(
                                                                                                                                                      gr,
                                                                                                                                                    );
                                                                                                                                                {
                                                                                                                                                  let yt =
                                                                                                                                                    g(
                                                                                                                                                      () =>
                                                                                                                                                        Yt() ||
                                                                                                                                                        t(
                                                                                                                                                          d,
                                                                                                                                                        )
                                                                                                                                                          .snippets
                                                                                                                                                          .searchInput
                                                                                                                                                          .label,
                                                                                                                                                    );
                                                                                                                                                  Ft(
                                                                                                                                                    wt,
                                                                                                                                                    {
                                                                                                                                                      get text() {
                                                                                                                                                        return t(
                                                                                                                                                          yt,
                                                                                                                                                        );
                                                                                                                                                      },
                                                                                                                                                      children:
                                                                                                                                                        (
                                                                                                                                                          Ot,
                                                                                                                                                          ft,
                                                                                                                                                        ) => {
                                                                                                                                                          {
                                                                                                                                                            let Xt =
                                                                                                                                                              g(
                                                                                                                                                                () =>
                                                                                                                                                                  Yt() ||
                                                                                                                                                                  t(
                                                                                                                                                                    d,
                                                                                                                                                                  )
                                                                                                                                                                    .snippets
                                                                                                                                                                    .searchInput
                                                                                                                                                                    .label,
                                                                                                                                                              );
                                                                                                                                                            bf(
                                                                                                                                                              Ot,
                                                                                                                                                              {
                                                                                                                                                                get sz() {
                                                                                                                                                                  return ca();
                                                                                                                                                                },
                                                                                                                                                                get variant() {
                                                                                                                                                                  return da();
                                                                                                                                                                },
                                                                                                                                                                get label() {
                                                                                                                                                                  return t(
                                                                                                                                                                    Xt,
                                                                                                                                                                  );
                                                                                                                                                                },
                                                                                                                                                                get placeholder() {
                                                                                                                                                                  return t(
                                                                                                                                                                    d,
                                                                                                                                                                  )
                                                                                                                                                                    .snippets
                                                                                                                                                                    .searchInput
                                                                                                                                                                    .placeholder;
                                                                                                                                                                },
                                                                                                                                                                get disabled() {
                                                                                                                                                                  return vt();
                                                                                                                                                                },
                                                                                                                                                                get value() {
                                                                                                                                                                  return t(
                                                                                                                                                                    j,
                                                                                                                                                                  );
                                                                                                                                                                },
                                                                                                                                                                set value(
                                                                                                                                                                  Jt,
                                                                                                                                                                ) {
                                                                                                                                                                  A(
                                                                                                                                                                    j,
                                                                                                                                                                    Jt,
                                                                                                                                                                    !0,
                                                                                                                                                                  );
                                                                                                                                                                },
                                                                                                                                                              },
                                                                                                                                                            );
                                                                                                                                                          }
                                                                                                                                                        },
                                                                                                                                                      $$slots:
                                                                                                                                                        {
                                                                                                                                                          default:
                                                                                                                                                            !0,
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                  );
                                                                                                                                                }
                                                                                                                                                var Kr =
                                                                                                                                                    M(
                                                                                                                                                      wt,
                                                                                                                                                      2,
                                                                                                                                                    ),
                                                                                                                                                  nr =
                                                                                                                                                    p(
                                                                                                                                                      Kr,
                                                                                                                                                    );
                                                                                                                                                {
                                                                                                                                                  var Gr =
                                                                                                                                                      (
                                                                                                                                                        yt,
                                                                                                                                                      ) => {
                                                                                                                                                        var Ot =
                                                                                                                                                            Bv(),
                                                                                                                                                          ft =
                                                                                                                                                            p(
                                                                                                                                                              Ot,
                                                                                                                                                            );
                                                                                                                                                        (O(
                                                                                                                                                          () =>
                                                                                                                                                            J(
                                                                                                                                                              ft,
                                                                                                                                                              t(
                                                                                                                                                                d,
                                                                                                                                                              )
                                                                                                                                                                .snippets
                                                                                                                                                                .searchInput
                                                                                                                                                                .empty,
                                                                                                                                                            ),
                                                                                                                                                        ),
                                                                                                                                                          x(
                                                                                                                                                            yt,
                                                                                                                                                            Ot,
                                                                                                                                                          ));
                                                                                                                                                      },
                                                                                                                                                    fa =
                                                                                                                                                      (
                                                                                                                                                        yt,
                                                                                                                                                      ) => {
                                                                                                                                                        var Ot =
                                                                                                                                                          jv();
                                                                                                                                                        (nt(
                                                                                                                                                          Ot,
                                                                                                                                                          20,
                                                                                                                                                          () =>
                                                                                                                                                            t(
                                                                                                                                                              _e,
                                                                                                                                                            ),
                                                                                                                                                          (
                                                                                                                                                            ft,
                                                                                                                                                          ) =>
                                                                                                                                                            ft,
                                                                                                                                                          (
                                                                                                                                                            ft,
                                                                                                                                                            Xt,
                                                                                                                                                          ) => {
                                                                                                                                                            var Jt =
                                                                                                                                                                Rv(),
                                                                                                                                                              Wr =
                                                                                                                                                                p(
                                                                                                                                                                  Jt,
                                                                                                                                                                );
                                                                                                                                                            (O(
                                                                                                                                                              () =>
                                                                                                                                                                J(
                                                                                                                                                                  Wr,
                                                                                                                                                                  Xt,
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                              x(
                                                                                                                                                                ft,
                                                                                                                                                                Jt,
                                                                                                                                                              ));
                                                                                                                                                          },
                                                                                                                                                        ),
                                                                                                                                                          x(
                                                                                                                                                            yt,
                                                                                                                                                            Ot,
                                                                                                                                                          ));
                                                                                                                                                      };
                                                                                                                                                  W(
                                                                                                                                                    nr,
                                                                                                                                                    (
                                                                                                                                                      yt,
                                                                                                                                                    ) => {
                                                                                                                                                      t(
                                                                                                                                                        _e,
                                                                                                                                                      )
                                                                                                                                                        .length ===
                                                                                                                                                      0
                                                                                                                                                        ? yt(
                                                                                                                                                            Gr,
                                                                                                                                                          )
                                                                                                                                                        : yt(
                                                                                                                                                            fa,
                                                                                                                                                            !1,
                                                                                                                                                          );
                                                                                                                                                    },
                                                                                                                                                  );
                                                                                                                                                }
                                                                                                                                                (O(
                                                                                                                                                  (
                                                                                                                                                    yt,
                                                                                                                                                  ) =>
                                                                                                                                                    V(
                                                                                                                                                      Kr,
                                                                                                                                                      1,
                                                                                                                                                      yt,
                                                                                                                                                    ),
                                                                                                                                                  [
                                                                                                                                                    () =>
                                                                                                                                                      U(
                                                                                                                                                        B(
                                                                                                                                                          "rounded-md border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] px-3 py-2",
                                                                                                                                                          Ne.sm,
                                                                                                                                                        ),
                                                                                                                                                      ),
                                                                                                                                                  ],
                                                                                                                                                ),
                                                                                                                                                  x(
                                                                                                                                                    ua,
                                                                                                                                                    gr,
                                                                                                                                                  ));
                                                                                                                                              },
                                                                                                                                            $$slots:
                                                                                                                                              {
                                                                                                                                                default:
                                                                                                                                                  !0,
                                                                                                                                              },
                                                                                                                                          },
                                                                                                                                        );
                                                                                                                                      },
                                                                                                                                    ja =
                                                                                                                                      (
                                                                                                                                        Ur,
                                                                                                                                      ) => {
                                                                                                                                        var Hr =
                                                                                                                                            Le(),
                                                                                                                                          ua =
                                                                                                                                            Se(
                                                                                                                                              Hr,
                                                                                                                                            );
                                                                                                                                        {
                                                                                                                                          var ca =
                                                                                                                                              (
                                                                                                                                                Yt,
                                                                                                                                              ) => {
                                                                                                                                                Ze(
                                                                                                                                                  Yt,
                                                                                                                                                  {
                                                                                                                                                    component:
                                                                                                                                                      "Slider",
                                                                                                                                                    get title() {
                                                                                                                                                      return t(
                                                                                                                                                        d,
                                                                                                                                                      )
                                                                                                                                                        .pageLabels
                                                                                                                                                        .slider;
                                                                                                                                                    },
                                                                                                                                                    get subtitle() {
                                                                                                                                                      return t(
                                                                                                                                                        d,
                                                                                                                                                      )
                                                                                                                                                        .snippets
                                                                                                                                                        .slider
                                                                                                                                                        .subtitle;
                                                                                                                                                    },
                                                                                                                                                    children:
                                                                                                                                                      (
                                                                                                                                                        gr,
                                                                                                                                                        wt = Q,
                                                                                                                                                        Kr = Q,
                                                                                                                                                        nr = Q,
                                                                                                                                                        Gr = Q,
                                                                                                                                                        fa = Q,
                                                                                                                                                        yt = Q,
                                                                                                                                                      ) => {
                                                                                                                                                        {
                                                                                                                                                          let Ot =
                                                                                                                                                            g(
                                                                                                                                                              () =>
                                                                                                                                                                String(
                                                                                                                                                                  t(
                                                                                                                                                                    I,
                                                                                                                                                                  ),
                                                                                                                                                                ),
                                                                                                                                                            );
                                                                                                                                                          Ft(
                                                                                                                                                            gr,
                                                                                                                                                            {
                                                                                                                                                              get text() {
                                                                                                                                                                return t(
                                                                                                                                                                  Ot,
                                                                                                                                                                );
                                                                                                                                                              },
                                                                                                                                                              children:
                                                                                                                                                                (
                                                                                                                                                                  ft,
                                                                                                                                                                  Xt,
                                                                                                                                                                ) => {
                                                                                                                                                                  {
                                                                                                                                                                    let Jt =
                                                                                                                                                                      g(
                                                                                                                                                                        () =>
                                                                                                                                                                          nr() ||
                                                                                                                                                                          `${Kr() || t(d).snippets.slider.fallbackLabel} ${wt()}`,
                                                                                                                                                                      );
                                                                                                                                                                    xf(
                                                                                                                                                                      ft,
                                                                                                                                                                      {
                                                                                                                                                                        min: 0,
                                                                                                                                                                        max: 100,
                                                                                                                                                                        step: 1,
                                                                                                                                                                        get showValue() {
                                                                                                                                                                          return yt();
                                                                                                                                                                        },
                                                                                                                                                                        get sz() {
                                                                                                                                                                          return wt();
                                                                                                                                                                        },
                                                                                                                                                                        get variant() {
                                                                                                                                                                          return Kr();
                                                                                                                                                                        },
                                                                                                                                                                        get title() {
                                                                                                                                                                          return t(
                                                                                                                                                                            Jt,
                                                                                                                                                                          );
                                                                                                                                                                        },
                                                                                                                                                                        get disabled() {
                                                                                                                                                                          return Gr();
                                                                                                                                                                        },
                                                                                                                                                                        get value() {
                                                                                                                                                                          return t(
                                                                                                                                                                            I,
                                                                                                                                                                          );
                                                                                                                                                                        },
                                                                                                                                                                        set value(
                                                                                                                                                                          Wr,
                                                                                                                                                                        ) {
                                                                                                                                                                          A(
                                                                                                                                                                            I,
                                                                                                                                                                            Wr,
                                                                                                                                                                            !0,
                                                                                                                                                                          );
                                                                                                                                                                        },
                                                                                                                                                                      },
                                                                                                                                                                    );
                                                                                                                                                                  }
                                                                                                                                                                },
                                                                                                                                                              $$slots:
                                                                                                                                                                {
                                                                                                                                                                  default:
                                                                                                                                                                    !0,
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                          );
                                                                                                                                                        }
                                                                                                                                                      },
                                                                                                                                                    $$slots:
                                                                                                                                                      {
                                                                                                                                                        default:
                                                                                                                                                          !0,
                                                                                                                                                      },
                                                                                                                                                  },
                                                                                                                                                );
                                                                                                                                              },
                                                                                                                                            da =
                                                                                                                                              (
                                                                                                                                                Yt,
                                                                                                                                              ) => {
                                                                                                                                                var vt =
                                                                                                                                                    Le(),
                                                                                                                                                  gr =
                                                                                                                                                    Se(
                                                                                                                                                      vt,
                                                                                                                                                    );
                                                                                                                                                {
                                                                                                                                                  var wt =
                                                                                                                                                      (
                                                                                                                                                        nr,
                                                                                                                                                      ) => {
                                                                                                                                                        Ze(
                                                                                                                                                          nr,
                                                                                                                                                          {
                                                                                                                                                            component:
                                                                                                                                                              "Select",
                                                                                                                                                            get title() {
                                                                                                                                                              return t(
                                                                                                                                                                d,
                                                                                                                                                              )
                                                                                                                                                                .pageLabels
                                                                                                                                                                .select;
                                                                                                                                                            },
                                                                                                                                                            get subtitle() {
                                                                                                                                                              return t(
                                                                                                                                                                d,
                                                                                                                                                              )
                                                                                                                                                                .snippets
                                                                                                                                                                .select
                                                                                                                                                                .subtitle;
                                                                                                                                                            },
                                                                                                                                                            children:
                                                                                                                                                              (
                                                                                                                                                                fa,
                                                                                                                                                                yt = Q,
                                                                                                                                                                Ot = Q,
                                                                                                                                                                ft = Q,
                                                                                                                                                                Xt = Q,
                                                                                                                                                              ) => {
                                                                                                                                                                {
                                                                                                                                                                  let Jt =
                                                                                                                                                                    g(
                                                                                                                                                                      () =>
                                                                                                                                                                        ft() ||
                                                                                                                                                                        t(
                                                                                                                                                                          d,
                                                                                                                                                                        )
                                                                                                                                                                          .snippets
                                                                                                                                                                          .select
                                                                                                                                                                          .label,
                                                                                                                                                                    );
                                                                                                                                                                  Ft(
                                                                                                                                                                    fa,
                                                                                                                                                                    {
                                                                                                                                                                      get text() {
                                                                                                                                                                        return t(
                                                                                                                                                                          Jt,
                                                                                                                                                                        );
                                                                                                                                                                      },
                                                                                                                                                                      children:
                                                                                                                                                                        (
                                                                                                                                                                          Wr,
                                                                                                                                                                          $o,
                                                                                                                                                                        ) => {
                                                                                                                                                                          {
                                                                                                                                                                            let Tr =
                                                                                                                                                                              g(
                                                                                                                                                                                () =>
                                                                                                                                                                                  ft() ||
                                                                                                                                                                                  t(
                                                                                                                                                                                    d,
                                                                                                                                                                                  )
                                                                                                                                                                                    .snippets
                                                                                                                                                                                    .select
                                                                                                                                                                                    .label,
                                                                                                                                                                              );
                                                                                                                                                                            Kt(
                                                                                                                                                                              Wr,
                                                                                                                                                                              {
                                                                                                                                                                                get sz() {
                                                                                                                                                                                  return yt();
                                                                                                                                                                                },
                                                                                                                                                                                get variant() {
                                                                                                                                                                                  return Ot();
                                                                                                                                                                                },
                                                                                                                                                                                get label() {
                                                                                                                                                                                  return t(
                                                                                                                                                                                    Tr,
                                                                                                                                                                                  );
                                                                                                                                                                                },
                                                                                                                                                                                get options() {
                                                                                                                                                                                  return t(
                                                                                                                                                                                    d,
                                                                                                                                                                                  )
                                                                                                                                                                                    .options
                                                                                                                                                                                    .selectCountries;
                                                                                                                                                                                },
                                                                                                                                                                                get disabled() {
                                                                                                                                                                                  return Xt();
                                                                                                                                                                                },
                                                                                                                                                                                get value() {
                                                                                                                                                                                  return t(
                                                                                                                                                                                    ae,
                                                                                                                                                                                  );
                                                                                                                                                                                },
                                                                                                                                                                                set value(
                                                                                                                                                                                  Va,
                                                                                                                                                                                ) {
                                                                                                                                                                                  A(
                                                                                                                                                                                    ae,
                                                                                                                                                                                    Va,
                                                                                                                                                                                    !0,
                                                                                                                                                                                  );
                                                                                                                                                                                },
                                                                                                                                                                              },
                                                                                                                                                                            );
                                                                                                                                                                          }
                                                                                                                                                                        },
                                                                                                                                                                      $$slots:
                                                                                                                                                                        {
                                                                                                                                                                          default:
                                                                                                                                                                            !0,
                                                                                                                                                                        },
                                                                                                                                                                    },
                                                                                                                                                                  );
                                                                                                                                                                }
                                                                                                                                                              },
                                                                                                                                                            $$slots:
                                                                                                                                                              {
                                                                                                                                                                default:
                                                                                                                                                                  !0,
                                                                                                                                                              },
                                                                                                                                                          },
                                                                                                                                                        );
                                                                                                                                                      },
                                                                                                                                                    Kr =
                                                                                                                                                      (
                                                                                                                                                        nr,
                                                                                                                                                      ) => {
                                                                                                                                                        var Gr =
                                                                                                                                                            Le(),
                                                                                                                                                          fa =
                                                                                                                                                            Se(
                                                                                                                                                              Gr,
                                                                                                                                                            );
                                                                                                                                                        {
                                                                                                                                                          var yt =
                                                                                                                                                              (
                                                                                                                                                                ft,
                                                                                                                                                              ) => {
                                                                                                                                                                Ze(
                                                                                                                                                                  ft,
                                                                                                                                                                  {
                                                                                                                                                                    component:
                                                                                                                                                                      "Splitter",
                                                                                                                                                                    get title() {
                                                                                                                                                                      return t(
                                                                                                                                                                        d,
                                                                                                                                                                      )
                                                                                                                                                                        .pageLabels
                                                                                                                                                                        .splitter;
                                                                                                                                                                    },
                                                                                                                                                                    get subtitle() {
                                                                                                                                                                      return t(
                                                                                                                                                                        d,
                                                                                                                                                                      )
                                                                                                                                                                        .snippets
                                                                                                                                                                        .splitter
                                                                                                                                                                        .subtitle;
                                                                                                                                                                    },
                                                                                                                                                                    children:
                                                                                                                                                                      (
                                                                                                                                                                        Xt,
                                                                                                                                                                        Jt,
                                                                                                                                                                      ) => {
                                                                                                                                                                        wv(
                                                                                                                                                                          Xt,
                                                                                                                                                                        );
                                                                                                                                                                      },
                                                                                                                                                                    $$slots:
                                                                                                                                                                      {
                                                                                                                                                                        default:
                                                                                                                                                                          !0,
                                                                                                                                                                      },
                                                                                                                                                                  },
                                                                                                                                                                );
                                                                                                                                                              },
                                                                                                                                                            Ot =
                                                                                                                                                              (
                                                                                                                                                                ft,
                                                                                                                                                              ) => {
                                                                                                                                                                var Xt =
                                                                                                                                                                    Le(),
                                                                                                                                                                  Jt =
                                                                                                                                                                    Se(
                                                                                                                                                                      Xt,
                                                                                                                                                                    );
                                                                                                                                                                {
                                                                                                                                                                  var Wr =
                                                                                                                                                                      (
                                                                                                                                                                        Tr,
                                                                                                                                                                      ) => {
                                                                                                                                                                        Ze(
                                                                                                                                                                          Tr,
                                                                                                                                                                          {
                                                                                                                                                                            component:
                                                                                                                                                                              "Switch",
                                                                                                                                                                            get title() {
                                                                                                                                                                              return t(
                                                                                                                                                                                d,
                                                                                                                                                                              )
                                                                                                                                                                                .pageLabels
                                                                                                                                                                                .switch;
                                                                                                                                                                            },
                                                                                                                                                                            get subtitle() {
                                                                                                                                                                              return t(
                                                                                                                                                                                d,
                                                                                                                                                                              )
                                                                                                                                                                                .snippets
                                                                                                                                                                                .switch
                                                                                                                                                                                .subtitle;
                                                                                                                                                                            },
                                                                                                                                                                            children:
                                                                                                                                                                              (
                                                                                                                                                                                $n,
                                                                                                                                                                                qa = Q,
                                                                                                                                                                                eo = Q,
                                                                                                                                                                                pr = Q,
                                                                                                                                                                                Ua = Q,
                                                                                                                                                                              ) => {
                                                                                                                                                                                {
                                                                                                                                                                                  let Ha =
                                                                                                                                                                                    g(
                                                                                                                                                                                      () =>
                                                                                                                                                                                        pr() ||
                                                                                                                                                                                        `${t(d).snippets.switch.labelPrefix} ${qa()}`,
                                                                                                                                                                                    );
                                                                                                                                                                                  Ft(
                                                                                                                                                                                    $n,
                                                                                                                                                                                    {
                                                                                                                                                                                      get text() {
                                                                                                                                                                                        return t(
                                                                                                                                                                                          Ha,
                                                                                                                                                                                        );
                                                                                                                                                                                      },
                                                                                                                                                                                      children:
                                                                                                                                                                                        (
                                                                                                                                                                                          Ka,
                                                                                                                                                                                          mn,
                                                                                                                                                                                        ) => {
                                                                                                                                                                                          {
                                                                                                                                                                                            let Lr =
                                                                                                                                                                                                g(
                                                                                                                                                                                                  () =>
                                                                                                                                                                                                    eo() ||
                                                                                                                                                                                                    void 0,
                                                                                                                                                                                                ),
                                                                                                                                                                                              Ga =
                                                                                                                                                                                                g(
                                                                                                                                                                                                  () =>
                                                                                                                                                                                                    pr() ||
                                                                                                                                                                                                    `${t(d).snippets.switch.labelPrefix} ${qa()}`,
                                                                                                                                                                                                );
                                                                                                                                                                                            Mi(
                                                                                                                                                                                              Ka,
                                                                                                                                                                                              {
                                                                                                                                                                                                get sz() {
                                                                                                                                                                                                  return qa();
                                                                                                                                                                                                },
                                                                                                                                                                                                get "data-variant"() {
                                                                                                                                                                                                  return t(
                                                                                                                                                                                                    Lr,
                                                                                                                                                                                                  );
                                                                                                                                                                                                },
                                                                                                                                                                                                get rightLabel() {
                                                                                                                                                                                                  return t(
                                                                                                                                                                                                    Ga,
                                                                                                                                                                                                  );
                                                                                                                                                                                                },
                                                                                                                                                                                                get disabled() {
                                                                                                                                                                                                  return Ua();
                                                                                                                                                                                                },
                                                                                                                                                                                              },
                                                                                                                                                                                            );
                                                                                                                                                                                          }
                                                                                                                                                                                        },
                                                                                                                                                                                      $$slots:
                                                                                                                                                                                        {
                                                                                                                                                                                          default:
                                                                                                                                                                                            !0,
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                  );
                                                                                                                                                                                }
                                                                                                                                                                              },
                                                                                                                                                                            $$slots:
                                                                                                                                                                              {
                                                                                                                                                                                default:
                                                                                                                                                                                  !0,
                                                                                                                                                                              },
                                                                                                                                                                          },
                                                                                                                                                                        );
                                                                                                                                                                      },
                                                                                                                                                                    $o =
                                                                                                                                                                      (
                                                                                                                                                                        Tr,
                                                                                                                                                                      ) => {
                                                                                                                                                                        var Va =
                                                                                                                                                                            Le(),
                                                                                                                                                                          $n =
                                                                                                                                                                            Se(
                                                                                                                                                                              Va,
                                                                                                                                                                            );
                                                                                                                                                                        {
                                                                                                                                                                          var qa =
                                                                                                                                                                              (
                                                                                                                                                                                pr,
                                                                                                                                                                              ) => {
                                                                                                                                                                                Ze(
                                                                                                                                                                                  pr,
                                                                                                                                                                                  {
                                                                                                                                                                                    component:
                                                                                                                                                                                      "Table",
                                                                                                                                                                                    get title() {
                                                                                                                                                                                      return t(
                                                                                                                                                                                        d,
                                                                                                                                                                                      )
                                                                                                                                                                                        .pageLabels
                                                                                                                                                                                        .tablePagination;
                                                                                                                                                                                    },
                                                                                                                                                                                    subtitle:
                                                                                                                                                                                      "Paginated data table",
                                                                                                                                                                                    children:
                                                                                                                                                                                      (
                                                                                                                                                                                        Ha,
                                                                                                                                                                                        Ka = Q,
                                                                                                                                                                                        mn = Q,
                                                                                                                                                                                      ) => {
                                                                                                                                                                                        y(
                                                                                                                                                                                          Ha,
                                                                                                                                                                                          Ka,
                                                                                                                                                                                          mn,
                                                                                                                                                                                        );
                                                                                                                                                                                      },
                                                                                                                                                                                    $$slots:
                                                                                                                                                                                      {
                                                                                                                                                                                        default:
                                                                                                                                                                                          !0,
                                                                                                                                                                                      },
                                                                                                                                                                                  },
                                                                                                                                                                                );
                                                                                                                                                                              },
                                                                                                                                                                            eo =
                                                                                                                                                                              (
                                                                                                                                                                                pr,
                                                                                                                                                                              ) => {
                                                                                                                                                                                var Ua =
                                                                                                                                                                                    Le(),
                                                                                                                                                                                  Ha =
                                                                                                                                                                                    Se(
                                                                                                                                                                                      Ua,
                                                                                                                                                                                    );
                                                                                                                                                                                {
                                                                                                                                                                                  var Ka =
                                                                                                                                                                                      (
                                                                                                                                                                                        Lr,
                                                                                                                                                                                      ) => {
                                                                                                                                                                                        Ze(
                                                                                                                                                                                          Lr,
                                                                                                                                                                                          {
                                                                                                                                                                                            component:
                                                                                                                                                                                              "Tabs",
                                                                                                                                                                                            get title() {
                                                                                                                                                                                              return t(
                                                                                                                                                                                                d,
                                                                                                                                                                                              )
                                                                                                                                                                                                .pageLabels
                                                                                                                                                                                                .tabs;
                                                                                                                                                                                            },
                                                                                                                                                                                            get subtitle() {
                                                                                                                                                                                              return t(
                                                                                                                                                                                                d,
                                                                                                                                                                                              )
                                                                                                                                                                                                .snippets
                                                                                                                                                                                                .tabs
                                                                                                                                                                                                .subtitle;
                                                                                                                                                                                            },
                                                                                                                                                                                            children:
                                                                                                                                                                                              (
                                                                                                                                                                                                to,
                                                                                                                                                                                                ro = Q,
                                                                                                                                                                                                ao = Q,
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                k(
                                                                                                                                                                                                  to,
                                                                                                                                                                                                  ro,
                                                                                                                                                                                                  ao,
                                                                                                                                                                                                );
                                                                                                                                                                                              },
                                                                                                                                                                                            $$slots:
                                                                                                                                                                                              {
                                                                                                                                                                                                default:
                                                                                                                                                                                                  !0,
                                                                                                                                                                                              },
                                                                                                                                                                                          },
                                                                                                                                                                                        );
                                                                                                                                                                                      },
                                                                                                                                                                                    mn =
                                                                                                                                                                                      (
                                                                                                                                                                                        Lr,
                                                                                                                                                                                      ) => {
                                                                                                                                                                                        var Ga =
                                                                                                                                                                                            Le(),
                                                                                                                                                                                          to =
                                                                                                                                                                                            Se(
                                                                                                                                                                                              Ga,
                                                                                                                                                                                            );
                                                                                                                                                                                        {
                                                                                                                                                                                          var ro =
                                                                                                                                                                                              (
                                                                                                                                                                                                va,
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                Ze(
                                                                                                                                                                                                  va,
                                                                                                                                                                                                  {
                                                                                                                                                                                                    component:
                                                                                                                                                                                                      "ThemeToggle",
                                                                                                                                                                                                    get title() {
                                                                                                                                                                                                      return t(
                                                                                                                                                                                                        d,
                                                                                                                                                                                                      )
                                                                                                                                                                                                        .pageLabels
                                                                                                                                                                                                        .themeToggle;
                                                                                                                                                                                                    },
                                                                                                                                                                                                    get subtitle() {
                                                                                                                                                                                                      return t(
                                                                                                                                                                                                        d,
                                                                                                                                                                                                      )
                                                                                                                                                                                                        .snippets
                                                                                                                                                                                                        .themeToggle
                                                                                                                                                                                                        .subtitle;
                                                                                                                                                                                                    },
                                                                                                                                                                                                    children:
                                                                                                                                                                                                      (
                                                                                                                                                                                                        oo,
                                                                                                                                                                                                        so = Q,
                                                                                                                                                                                                        io = Q,
                                                                                                                                                                                                        hr = Q,
                                                                                                                                                                                                        Wa = Q,
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        Ft(
                                                                                                                                                                                                          oo,
                                                                                                                                                                                                          {
                                                                                                                                                                                                            get text() {
                                                                                                                                                                                                              return hr();
                                                                                                                                                                                                            },
                                                                                                                                                                                                            children:
                                                                                                                                                                                                              (
                                                                                                                                                                                                                Za,
                                                                                                                                                                                                                lo,
                                                                                                                                                                                                              ) => {
                                                                                                                                                                                                                {
                                                                                                                                                                                                                  let _n =
                                                                                                                                                                                                                      g(
                                                                                                                                                                                                                        () =>
                                                                                                                                                                                                                          io() ||
                                                                                                                                                                                                                          void 0,
                                                                                                                                                                                                                      ),
                                                                                                                                                                                                                    or =
                                                                                                                                                                                                                      g(
                                                                                                                                                                                                                        () =>
                                                                                                                                                                                                                          hr() ||
                                                                                                                                                                                                                          t(
                                                                                                                                                                                                                            d,
                                                                                                                                                                                                                          )
                                                                                                                                                                                                                            .snippets
                                                                                                                                                                                                                            .themeToggle
                                                                                                                                                                                                                            .defaultLabel,
                                                                                                                                                                                                                      );
                                                                                                                                                                                                                  Ps(
                                                                                                                                                                                                                    Za,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                      get sz() {
                                                                                                                                                                                                                        return so();
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      get disabled() {
                                                                                                                                                                                                                        return Wa();
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      get "data-variant"() {
                                                                                                                                                                                                                        return t(
                                                                                                                                                                                                                          _n,
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      get title() {
                                                                                                                                                                                                                        return t(
                                                                                                                                                                                                                          or,
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      class:
                                                                                                                                                                                                                        "mx-auto block",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                  );
                                                                                                                                                                                                                }
                                                                                                                                                                                                              },
                                                                                                                                                                                                            $$slots:
                                                                                                                                                                                                              {
                                                                                                                                                                                                                default:
                                                                                                                                                                                                                  !0,
                                                                                                                                                                                                              },
                                                                                                                                                                                                          },
                                                                                                                                                                                                        );
                                                                                                                                                                                                      },
                                                                                                                                                                                                    $$slots:
                                                                                                                                                                                                      {
                                                                                                                                                                                                        default:
                                                                                                                                                                                                          !0,
                                                                                                                                                                                                      },
                                                                                                                                                                                                  },
                                                                                                                                                                                                );
                                                                                                                                                                                              },
                                                                                                                                                                                            ao =
                                                                                                                                                                                              (
                                                                                                                                                                                                va,
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                var no =
                                                                                                                                                                                                    Le(),
                                                                                                                                                                                                  oo =
                                                                                                                                                                                                    Se(
                                                                                                                                                                                                      no,
                                                                                                                                                                                                    );
                                                                                                                                                                                                {
                                                                                                                                                                                                  var so =
                                                                                                                                                                                                      (
                                                                                                                                                                                                        hr,
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        Ze(
                                                                                                                                                                                                          hr,
                                                                                                                                                                                                          {
                                                                                                                                                                                                            component:
                                                                                                                                                                                                              "TimePicker",
                                                                                                                                                                                                            get title() {
                                                                                                                                                                                                              return t(
                                                                                                                                                                                                                d,
                                                                                                                                                                                                              )
                                                                                                                                                                                                                .pageLabels
                                                                                                                                                                                                                .timePicker;
                                                                                                                                                                                                            },
                                                                                                                                                                                                            get subtitle() {
                                                                                                                                                                                                              return t(
                                                                                                                                                                                                                d,
                                                                                                                                                                                                              )
                                                                                                                                                                                                                .components
                                                                                                                                                                                                                .timePicker
                                                                                                                                                                                                                .subtitle;
                                                                                                                                                                                                            },
                                                                                                                                                                                                            children:
                                                                                                                                                                                                              (
                                                                                                                                                                                                                Za,
                                                                                                                                                                                                                lo = Q,
                                                                                                                                                                                                                _n = Q,
                                                                                                                                                                                                                or = Q,
                                                                                                                                                                                                                xn = Q,
                                                                                                                                                                                                              ) => {
                                                                                                                                                                                                                {
                                                                                                                                                                                                                  let wn =
                                                                                                                                                                                                                    g(
                                                                                                                                                                                                                      () =>
                                                                                                                                                                                                                        or() ||
                                                                                                                                                                                                                        t(
                                                                                                                                                                                                                          d,
                                                                                                                                                                                                                        )
                                                                                                                                                                                                                          .components
                                                                                                                                                                                                                          .timePicker
                                                                                                                                                                                                                          .label,
                                                                                                                                                                                                                    );
                                                                                                                                                                                                                  Uf(
                                                                                                                                                                                                                    Za,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                      get label() {
                                                                                                                                                                                                                        return t(
                                                                                                                                                                                                                          wn,
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      get disabled() {
                                                                                                                                                                                                                        return xn();
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      get placeholder() {
                                                                                                                                                                                                                        return t(
                                                                                                                                                                                                                          d,
                                                                                                                                                                                                                        )
                                                                                                                                                                                                                          .components
                                                                                                                                                                                                                          .timePicker
                                                                                                                                                                                                                          .placeholder;
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      get value() {
                                                                                                                                                                                                                        return t(
                                                                                                                                                                                                                          $,
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      set value(
                                                                                                                                                                                                                        uo,
                                                                                                                                                                                                                      ) {
                                                                                                                                                                                                                        A(
                                                                                                                                                                                                                          $,
                                                                                                                                                                                                                          uo,
                                                                                                                                                                                                                          !0,
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                  );
                                                                                                                                                                                                                }
                                                                                                                                                                                                              },
                                                                                                                                                                                                            $$slots:
                                                                                                                                                                                                              {
                                                                                                                                                                                                                default:
                                                                                                                                                                                                                  !0,
                                                                                                                                                                                                              },
                                                                                                                                                                                                          },
                                                                                                                                                                                                        );
                                                                                                                                                                                                      },
                                                                                                                                                                                                    io =
                                                                                                                                                                                                      (
                                                                                                                                                                                                        hr,
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        var Wa =
                                                                                                                                                                                                            Le(),
                                                                                                                                                                                                          Za =
                                                                                                                                                                                                            Se(
                                                                                                                                                                                                              Wa,
                                                                                                                                                                                                            );
                                                                                                                                                                                                        {
                                                                                                                                                                                                          var lo =
                                                                                                                                                                                                              (
                                                                                                                                                                                                                or,
                                                                                                                                                                                                              ) => {
                                                                                                                                                                                                                Ze(
                                                                                                                                                                                                                  or,
                                                                                                                                                                                                                  {
                                                                                                                                                                                                                    component:
                                                                                                                                                                                                                      "Toast",
                                                                                                                                                                                                                    get title() {
                                                                                                                                                                                                                      return t(
                                                                                                                                                                                                                        d,
                                                                                                                                                                                                                      )
                                                                                                                                                                                                                        .pageLabels
                                                                                                                                                                                                                        .toast;
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    get subtitle() {
                                                                                                                                                                                                                      return t(
                                                                                                                                                                                                                        d,
                                                                                                                                                                                                                      )
                                                                                                                                                                                                                        .snippets
                                                                                                                                                                                                                        .toast
                                                                                                                                                                                                                        .subtitle;
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    children:
                                                                                                                                                                                                                      (
                                                                                                                                                                                                                        wn,
                                                                                                                                                                                                                        uo = Q,
                                                                                                                                                                                                                        Ri = Q,
                                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                                        C(
                                                                                                                                                                                                                          wn,
                                                                                                                                                                                                                          uo,
                                                                                                                                                                                                                          Ri,
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                    $$slots:
                                                                                                                                                                                                                      {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                          !0,
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                  },
                                                                                                                                                                                                                );
                                                                                                                                                                                                              },
                                                                                                                                                                                                            _n =
                                                                                                                                                                                                              (
                                                                                                                                                                                                                or,
                                                                                                                                                                                                              ) => {
                                                                                                                                                                                                                Ze(
                                                                                                                                                                                                                  or,
                                                                                                                                                                                                                  {
                                                                                                                                                                                                                    component:
                                                                                                                                                                                                                      "Unknown",
                                                                                                                                                                                                                    title:
                                                                                                                                                                                                                      "Unknown",
                                                                                                                                                                                                                    get subtitle() {
                                                                                                                                                                                                                      return t(
                                                                                                                                                                                                                        d,
                                                                                                                                                                                                                      )
                                                                                                                                                                                                                        .snippets
                                                                                                                                                                                                                        .unknown
                                                                                                                                                                                                                        .subtitle;
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    children:
                                                                                                                                                                                                                      (
                                                                                                                                                                                                                        xn,
                                                                                                                                                                                                                        wn,
                                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                                        h(
                                                                                                                                                                                                                          xn,
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                    $$slots:
                                                                                                                                                                                                                      {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                          !0,
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                  },
                                                                                                                                                                                                                );
                                                                                                                                                                                                              };
                                                                                                                                                                                                          W(
                                                                                                                                                                                                            Za,
                                                                                                                                                                                                            (
                                                                                                                                                                                                              or,
                                                                                                                                                                                                            ) => {
                                                                                                                                                                                                              t(
                                                                                                                                                                                                                c,
                                                                                                                                                                                                              ) ===
                                                                                                                                                                                                              "toast"
                                                                                                                                                                                                                ? or(
                                                                                                                                                                                                                    lo,
                                                                                                                                                                                                                  )
                                                                                                                                                                                                                : or(
                                                                                                                                                                                                                    _n,
                                                                                                                                                                                                                    !1,
                                                                                                                                                                                                                  );
                                                                                                                                                                                                            },
                                                                                                                                                                                                            !0,
                                                                                                                                                                                                          );
                                                                                                                                                                                                        }
                                                                                                                                                                                                        x(
                                                                                                                                                                                                          hr,
                                                                                                                                                                                                          Wa,
                                                                                                                                                                                                        );
                                                                                                                                                                                                      };
                                                                                                                                                                                                  W(
                                                                                                                                                                                                    oo,
                                                                                                                                                                                                    (
                                                                                                                                                                                                      hr,
                                                                                                                                                                                                    ) => {
                                                                                                                                                                                                      t(
                                                                                                                                                                                                        c,
                                                                                                                                                                                                      ) ===
                                                                                                                                                                                                      "timePicker"
                                                                                                                                                                                                        ? hr(
                                                                                                                                                                                                            so,
                                                                                                                                                                                                          )
                                                                                                                                                                                                        : hr(
                                                                                                                                                                                                            io,
                                                                                                                                                                                                            !1,
                                                                                                                                                                                                          );
                                                                                                                                                                                                    },
                                                                                                                                                                                                    !0,
                                                                                                                                                                                                  );
                                                                                                                                                                                                }
                                                                                                                                                                                                x(
                                                                                                                                                                                                  va,
                                                                                                                                                                                                  no,
                                                                                                                                                                                                );
                                                                                                                                                                                              };
                                                                                                                                                                                          W(
                                                                                                                                                                                            to,
                                                                                                                                                                                            (
                                                                                                                                                                                              va,
                                                                                                                                                                                            ) => {
                                                                                                                                                                                              t(
                                                                                                                                                                                                c,
                                                                                                                                                                                              ) ===
                                                                                                                                                                                              "themeToggle"
                                                                                                                                                                                                ? va(
                                                                                                                                                                                                    ro,
                                                                                                                                                                                                  )
                                                                                                                                                                                                : va(
                                                                                                                                                                                                    ao,
                                                                                                                                                                                                    !1,
                                                                                                                                                                                                  );
                                                                                                                                                                                            },
                                                                                                                                                                                            !0,
                                                                                                                                                                                          );
                                                                                                                                                                                        }
                                                                                                                                                                                        x(
                                                                                                                                                                                          Lr,
                                                                                                                                                                                          Ga,
                                                                                                                                                                                        );
                                                                                                                                                                                      };
                                                                                                                                                                                  W(
                                                                                                                                                                                    Ha,
                                                                                                                                                                                    (
                                                                                                                                                                                      Lr,
                                                                                                                                                                                    ) => {
                                                                                                                                                                                      t(
                                                                                                                                                                                        c,
                                                                                                                                                                                      ) ===
                                                                                                                                                                                      "tabs"
                                                                                                                                                                                        ? Lr(
                                                                                                                                                                                            Ka,
                                                                                                                                                                                          )
                                                                                                                                                                                        : Lr(
                                                                                                                                                                                            mn,
                                                                                                                                                                                            !1,
                                                                                                                                                                                          );
                                                                                                                                                                                    },
                                                                                                                                                                                    !0,
                                                                                                                                                                                  );
                                                                                                                                                                                }
                                                                                                                                                                                x(
                                                                                                                                                                                  pr,
                                                                                                                                                                                  Ua,
                                                                                                                                                                                );
                                                                                                                                                                              };
                                                                                                                                                                          W(
                                                                                                                                                                            $n,
                                                                                                                                                                            (
                                                                                                                                                                              pr,
                                                                                                                                                                            ) => {
                                                                                                                                                                              t(
                                                                                                                                                                                c,
                                                                                                                                                                              ) ===
                                                                                                                                                                              "tablePagination"
                                                                                                                                                                                ? pr(
                                                                                                                                                                                    qa,
                                                                                                                                                                                  )
                                                                                                                                                                                : pr(
                                                                                                                                                                                    eo,
                                                                                                                                                                                    !1,
                                                                                                                                                                                  );
                                                                                                                                                                            },
                                                                                                                                                                            !0,
                                                                                                                                                                          );
                                                                                                                                                                        }
                                                                                                                                                                        x(
                                                                                                                                                                          Tr,
                                                                                                                                                                          Va,
                                                                                                                                                                        );
                                                                                                                                                                      };
                                                                                                                                                                  W(
                                                                                                                                                                    Jt,
                                                                                                                                                                    (
                                                                                                                                                                      Tr,
                                                                                                                                                                    ) => {
                                                                                                                                                                      t(
                                                                                                                                                                        c,
                                                                                                                                                                      ) ===
                                                                                                                                                                      "switch"
                                                                                                                                                                        ? Tr(
                                                                                                                                                                            Wr,
                                                                                                                                                                          )
                                                                                                                                                                        : Tr(
                                                                                                                                                                            $o,
                                                                                                                                                                            !1,
                                                                                                                                                                          );
                                                                                                                                                                    },
                                                                                                                                                                    !0,
                                                                                                                                                                  );
                                                                                                                                                                }
                                                                                                                                                                x(
                                                                                                                                                                  ft,
                                                                                                                                                                  Xt,
                                                                                                                                                                );
                                                                                                                                                              };
                                                                                                                                                          W(
                                                                                                                                                            fa,
                                                                                                                                                            (
                                                                                                                                                              ft,
                                                                                                                                                            ) => {
                                                                                                                                                              t(
                                                                                                                                                                c,
                                                                                                                                                              ) ===
                                                                                                                                                              "splitter"
                                                                                                                                                                ? ft(
                                                                                                                                                                    yt,
                                                                                                                                                                  )
                                                                                                                                                                : ft(
                                                                                                                                                                    Ot,
                                                                                                                                                                    !1,
                                                                                                                                                                  );
                                                                                                                                                            },
                                                                                                                                                            !0,
                                                                                                                                                          );
                                                                                                                                                        }
                                                                                                                                                        x(
                                                                                                                                                          nr,
                                                                                                                                                          Gr,
                                                                                                                                                        );
                                                                                                                                                      };
                                                                                                                                                  W(
                                                                                                                                                    gr,
                                                                                                                                                    (
                                                                                                                                                      nr,
                                                                                                                                                    ) => {
                                                                                                                                                      t(
                                                                                                                                                        c,
                                                                                                                                                      ) ===
                                                                                                                                                      "select"
                                                                                                                                                        ? nr(
                                                                                                                                                            wt,
                                                                                                                                                          )
                                                                                                                                                        : nr(
                                                                                                                                                            Kr,
                                                                                                                                                            !1,
                                                                                                                                                          );
                                                                                                                                                    },
                                                                                                                                                    !0,
                                                                                                                                                  );
                                                                                                                                                }
                                                                                                                                                x(
                                                                                                                                                  Yt,
                                                                                                                                                  vt,
                                                                                                                                                );
                                                                                                                                              };
                                                                                                                                          W(
                                                                                                                                            ua,
                                                                                                                                            (
                                                                                                                                              Yt,
                                                                                                                                            ) => {
                                                                                                                                              t(
                                                                                                                                                c,
                                                                                                                                              ) ===
                                                                                                                                              "slider"
                                                                                                                                                ? Yt(
                                                                                                                                                    ca,
                                                                                                                                                  )
                                                                                                                                                : Yt(
                                                                                                                                                    da,
                                                                                                                                                    !1,
                                                                                                                                                  );
                                                                                                                                            },
                                                                                                                                            !0,
                                                                                                                                          );
                                                                                                                                        }
                                                                                                                                        x(
                                                                                                                                          Ur,
                                                                                                                                          Hr,
                                                                                                                                        );
                                                                                                                                      };
                                                                                                                                  W(
                                                                                                                                    Qn,
                                                                                                                                    (
                                                                                                                                      Ur,
                                                                                                                                    ) => {
                                                                                                                                      t(
                                                                                                                                        c,
                                                                                                                                      ) ===
                                                                                                                                      "searchInput"
                                                                                                                                        ? Ur(
                                                                                                                                            Ra,
                                                                                                                                          )
                                                                                                                                        : Ur(
                                                                                                                                            ja,
                                                                                                                                            !1,
                                                                                                                                          );
                                                                                                                                    },
                                                                                                                                    !0,
                                                                                                                                  );
                                                                                                                                }
                                                                                                                                x(
                                                                                                                                  Fr,
                                                                                                                                  Ba,
                                                                                                                                );
                                                                                                                              };
                                                                                                                          W(
                                                                                                                            Yn,
                                                                                                                            (
                                                                                                                              Fr,
                                                                                                                            ) => {
                                                                                                                              t(
                                                                                                                                c,
                                                                                                                              ) ===
                                                                                                                              "radio"
                                                                                                                                ? Fr(
                                                                                                                                    Xn,
                                                                                                                                  )
                                                                                                                                : Fr(
                                                                                                                                    Jn,
                                                                                                                                    !1,
                                                                                                                                  );
                                                                                                                            },
                                                                                                                            !0,
                                                                                                                          );
                                                                                                                        }
                                                                                                                        x(
                                                                                                                          Ar,
                                                                                                                          Oa,
                                                                                                                        );
                                                                                                                      };
                                                                                                                  W(
                                                                                                                    Gn,
                                                                                                                    (
                                                                                                                      Ar,
                                                                                                                    ) => {
                                                                                                                      t(
                                                                                                                        c,
                                                                                                                      ) ===
                                                                                                                      "progressCircle"
                                                                                                                        ? Ar(
                                                                                                                            Wn,
                                                                                                                          )
                                                                                                                        : Ar(
                                                                                                                            Zn,
                                                                                                                            !1,
                                                                                                                          );
                                                                                                                    },
                                                                                                                    !0,
                                                                                                                  );
                                                                                                                }
                                                                                                                x(
                                                                                                                  la,
                                                                                                                  Kn,
                                                                                                                );
                                                                                                              };
                                                                                                          W(
                                                                                                            Hn,
                                                                                                            (
                                                                                                              la,
                                                                                                            ) => {
                                                                                                              t(
                                                                                                                c,
                                                                                                              ) ===
                                                                                                              "progressBar"
                                                                                                                ? la(
                                                                                                                    Oi,
                                                                                                                  )
                                                                                                                : la(
                                                                                                                    Bi,
                                                                                                                    !1,
                                                                                                                  );
                                                                                                            },
                                                                                                            !0,
                                                                                                          );
                                                                                                        }
                                                                                                        x(
                                                                                                          ia,
                                                                                                          Na,
                                                                                                        );
                                                                                                      };
                                                                                                  W(
                                                                                                    qn,
                                                                                                    (
                                                                                                      ia,
                                                                                                    ) => {
                                                                                                      t(
                                                                                                        c,
                                                                                                      ) ===
                                                                                                      "notepad"
                                                                                                        ? ia(
                                                                                                            Un,
                                                                                                          )
                                                                                                        : ia(
                                                                                                            Ni,
                                                                                                            !1,
                                                                                                          );
                                                                                                    },
                                                                                                    !0,
                                                                                                  );
                                                                                                }
                                                                                                x(
                                                                                                  sa,
                                                                                                  Vn,
                                                                                                );
                                                                                              };
                                                                                          W(
                                                                                            jn,
                                                                                            (
                                                                                              sa,
                                                                                            ) => {
                                                                                              t(
                                                                                                c,
                                                                                              ) ===
                                                                                              "menu"
                                                                                                ? sa(
                                                                                                    Di,
                                                                                                  )
                                                                                                : sa(
                                                                                                    Ii,
                                                                                                    !1,
                                                                                                  );
                                                                                            },
                                                                                            !0,
                                                                                          );
                                                                                        }
                                                                                        x(
                                                                                          zr,
                                                                                          bn,
                                                                                        );
                                                                                      };
                                                                                  W(
                                                                                    Ia,
                                                                                    (
                                                                                      zr,
                                                                                    ) => {
                                                                                      t(
                                                                                        c,
                                                                                      ) ===
                                                                                      "form"
                                                                                        ? zr(
                                                                                            Jo,
                                                                                          )
                                                                                        : zr(
                                                                                            Qo,
                                                                                            !1,
                                                                                          );
                                                                                    },
                                                                                    !0,
                                                                                  );
                                                                                }
                                                                                x(
                                                                                  Er,
                                                                                  Da,
                                                                                );
                                                                              };
                                                                          W(
                                                                            La,
                                                                            (
                                                                              Er,
                                                                            ) => {
                                                                              t(
                                                                                c,
                                                                              ) ===
                                                                              "filePicker"
                                                                                ? Er(
                                                                                    Ma,
                                                                                  )
                                                                                : Er(
                                                                                    Rn,
                                                                                    !1,
                                                                                  );
                                                                            },
                                                                            !0,
                                                                          );
                                                                        }
                                                                        x(
                                                                          xt,
                                                                          Ta,
                                                                        );
                                                                      };
                                                                    W(
                                                                      Vr,
                                                                      (xt) => {
                                                                        t(c) ===
                                                                        "field"
                                                                          ? xt(
                                                                              qr,
                                                                            )
                                                                          : xt(
                                                                              zt,
                                                                              !1,
                                                                            );
                                                                      },
                                                                      !0,
                                                                    );
                                                                  }
                                                                  x(ar, Pr);
                                                                };
                                                              W(
                                                                _t,
                                                                (ar) => {
                                                                  t(c) ===
                                                                  "dialog"
                                                                    ? ar(jr)
                                                                    : ar(
                                                                        hn,
                                                                        !1,
                                                                      );
                                                                },
                                                                !0,
                                                              );
                                                            }
                                                            x(jt, Vt);
                                                          };
                                                        W(
                                                          Sr,
                                                          (jt) => {
                                                            t(c) ===
                                                            "datePicker"
                                                              ? jt(na)
                                                              : jt(oa, !1);
                                                          },
                                                          !0,
                                                        );
                                                      }
                                                      x($e, rr);
                                                    };
                                                  W(
                                                    We,
                                                    ($e) => {
                                                      t(c) === "colorPicker"
                                                        ? $e(Ye)
                                                        : $e(it, !1);
                                                    },
                                                    !0,
                                                  );
                                                }
                                                x(Et, tr);
                                              };
                                            W(
                                              er,
                                              (Et) => {
                                                t(c) === "codeView"
                                                  ? Et(Nt)
                                                  : Et(Zt, !1);
                                              },
                                              !0,
                                            );
                                          }
                                          x(at, Pt);
                                        };
                                      W(
                                        De,
                                        (at) => {
                                          t(c) === "checkbox"
                                            ? at(qe)
                                            : at(rt, !1);
                                        },
                                        !0,
                                      );
                                    }
                                    x(se, Pe);
                                  };
                                W(
                                  Dt,
                                  (se) => {
                                    t(c) === "carousel" ? se(It) : se(tt, !1);
                                  },
                                  !0,
                                );
                              }
                              x(Qe, dt);
                            };
                          W(
                            Oe,
                            (Qe) => {
                              t(c) === "card" ? Qe(Me) : Qe(Xe, !1);
                            },
                            !0,
                          );
                        }
                        x(Ie, He);
                      };
                    W(
                      we,
                      (Ie) => {
                        t(c) === "button" ? Ie(Te) : Ie(ze, !1);
                      },
                      !0,
                    );
                  }
                  x(xe, G);
                };
              W(
                ie,
                (xe) => {
                  t(c) === "accordion" ? xe(be) : xe(ke, !1);
                },
                !0,
              );
            }
            x(L, re);
          };
        W(Ee, (L) => {
          t(c) === "about" ? L(de) : L(Ae, !1);
        });
      }
      (O(
        (L, re, ie, be) => {
          (V(ee, 1, L), V(N, 1, re), V(Fe, 1, ie), V(Ce, 1, be));
        },
        [
          () => U(B("p-6 md:p-6 lg:p-6")),
          () => U(B("flex items-center justify-between")),
          () => U(B("max-w-[640px] min-h-[560px] mx-auto p-4 md:p-6 lg:p-10")),
          () => U(B("grid gap-4 md:gap-6 lg:gap-8")),
        ],
      ),
        x(ve, S));
    },
    $$slots: { default: !0 },
  }),
    Re(),
    o());
}
mu(Uv, { target: document.getElementById("app") });

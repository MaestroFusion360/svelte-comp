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
const Ri = "production",
  ye = !Ri.toLowerCase().startsWith("prod");
var Lo = Array.isArray,
  Vi = Array.prototype.indexOf,
  Mo = Array.from,
  Nr = Object.defineProperty,
  _r = Object.getOwnPropertyDescriptor,
  qi = Object.getOwnPropertyDescriptors,
  Ui = Object.prototype,
  Hi = Array.prototype,
  zs = Object.getPrototypeOf,
  $o = Object.isExtensible;
function ga(r) {
  return typeof r == "function";
}
const Q = () => {};
function Ki(r) {
  for (var e = 0; e < r.length; e++) r[e]();
}
function As() {
  var r,
    e,
    a = new Promise((n, o) => {
      ((r = n), (e = o));
    });
  return { promise: a, resolve: r, reject: e };
}
const ht = 2,
  Do = 4,
  Io = 8,
  Fs = 1 << 24,
  fr = 16,
  kr = 32,
  $r = 64,
  Fn = 128,
  er = 512,
  Ct = 1024,
  Mt = 2048,
  Cr = 4096,
  jt = 8192,
  xr = 16384,
  Tn = 32768,
  Or = 65536,
  Cn = 1 << 17,
  Ts = 1 << 18,
  Sa = 1 << 19,
  Gi = 1 << 20,
  Br = 32768,
  _o = 1 << 21,
  Ln = 1 << 22,
  Mr = 1 << 23,
  Dr = Symbol("$state"),
  Ls = Symbol("legacy props"),
  Wi = Symbol(""),
  Ms = Symbol("proxy path"),
  pa = new (class extends Error {
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
function es() {
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
const Ds = 1,
  Is = 2,
  Ns = 4,
  ul = 8,
  cl = 16,
  dl = 1,
  fl = 2,
  vl = 4,
  gl = 8,
  pl = 16,
  hl = 1,
  bl = 2,
  ml = 4,
  _l = 1,
  xl = 2,
  gt = Symbol(),
  wl = Symbol("filename"),
  yl = "http://www.w3.org/1999/xhtml",
  kl = "@attach";
var No = "font-weight: bold",
  Oo = "font-weight: normal";
function Cl() {
  ye
    ? console.warn(
        "%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value",
        No,
        Oo,
      )
    : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function io(r) {
  ye
    ? console.warn(
        `%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${r}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`,
        No,
        Oo,
      )
    : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
function Sl() {
  ye
    ? console.warn(
        "%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop",
        No,
        Oo,
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
function js(r) {
  return !Bs(r, this.v);
}
let nn = !1,
  Pl = !1;
function El() {
  nn = !0;
}
function ir(r, e) {
  return ((r.label = e), Rs(r.v, e), r);
}
function Rs(r, e) {
  return (r?.[Ms]?.(e), r);
}
function zl(r) {
  const e = new Error(),
    a = Al();
  return a.length === 0
    ? null
    : (a.unshift(`
`),
      Nr(e, "stack", {
        value: a.join(`
`),
      }),
      Nr(e, "name", { value: r }),
      e);
}
function Al() {
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
function _a(r) {
  st = r;
}
let xa = null;
function Sn(r) {
  xa = r;
}
let on = null;
function ts(r) {
  on = r;
}
function Gt(r) {
  return Vs("getContext").get(r);
}
function Fl(r, e) {
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
    l: nn && !e ? { s: null, u: null, $: [] } : null,
  }),
    ye && ((st.function = a), (on = a)));
}
function je(r) {
  var e = st,
    a = e.e;
  if (a !== null) {
    e.e = null;
    for (var n of a) ai(n);
  }
  return ((e.i = !0), (st = e.p), ye && (on = st?.function ?? null), {});
}
function Pa() {
  return !nn || (st !== null && st.l === null);
}
function Vs(r) {
  return (st === null && Zi(r), (st.c ??= new Map(Tl(st) || void 0)));
}
function Tl(r) {
  let e = r.p;
  for (; e !== null; ) {
    const a = e.c;
    if (a !== null) return a;
    e = e.p;
  }
  return null;
}
let Zr = [];
function qs() {
  var r = Zr;
  ((Zr = []), Ki(r));
}
function dr(r) {
  if (Zr.length === 0 && !Ja) {
    var e = Zr;
    queueMicrotask(() => {
      e === Zr && qs();
    });
  }
  Zr.push(r);
}
function Ll() {
  for (; Zr.length > 0; ) qs();
}
const xo = new WeakMap();
function Us(r) {
  var e = Ve;
  if (e === null) return ((Ue.f |= Mr), r);
  if (
    (ye && r instanceof Error && !xo.has(r) && xo.set(r, Ml(r, e)),
    (e.f & Tn) === 0)
  ) {
    if ((e.f & Fn) === 0)
      throw (ye && !e.parent && r instanceof Error && Hs(r), r);
    e.b.error(r);
  } else wa(r, e);
}
function wa(r, e) {
  for (; e !== null; ) {
    if ((e.f & Fn) !== 0)
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
function Ml(r, e) {
  const a = _r(r, "message");
  if (!(a && !a.configurable)) {
    for (
      var n = Vo ? "  " : "	",
        o = `
${n}in ${e.fn?.name || "<unknown>"}`,
        s = e.ctx;
      s !== null;
    )
      ((o += `
${n}in ${s.function?.[wl].split("/").pop()}`),
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
  const e = xo.get(r);
  e &&
    (Nr(r, "message", { value: e.message }),
    Nr(r, "stack", { value: e.stack }));
}
const xn = new Set();
let Ge = null,
  kn = null,
  Ht = null,
  Ut = [],
  Mn = null,
  wo = !1,
  Ja = !1;
class lr {
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
    ((Ut = []), (kn = null), this.apply());
    var a = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: [],
    };
    for (const n of e) this.#s(n, a);
    (this.is_fork || this.#c(),
      this.is_deferred()
        ? (this.#i(a.effects),
          this.#i(a.render_effects),
          this.#i(a.block_effects))
        : ((kn = this),
          (Ge = null),
          rs(a.render_effects),
          rs(a.effects),
          (kn = null),
          this.#l?.resolve()),
      (Ht = null));
  }
  #s(e, a) {
    e.f ^= Ct;
    for (var n = e.first; n !== null; ) {
      var o = n.f,
        s = (o & (kr | $r)) !== 0,
        i = s && (o & Ct) !== 0,
        l = i || (o & jt) !== 0 || this.skipped_effects.has(n);
      if (
        ((n.f & Fn) !== 0 &&
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
        s
          ? (n.f ^= Ct)
          : (o & Do) !== 0
            ? a.effects.push(n)
            : dn(n) && ((n.f & fr) !== 0 && a.block_effects.push(n), rn(n));
        var u = n.first;
        if (u !== null) {
          n = u;
          continue;
        }
      }
      var f = n.parent;
      for (n = n.next; n === null && f !== null; )
        (f === a.effect &&
          (this.#i(a.effects),
          this.#i(a.render_effects),
          this.#i(a.block_effects),
          (a = a.parent)),
          (n = f.next),
          (f = f.parent));
    }
  }
  #i(e) {
    for (const a of e)
      (((a.f & Mt) !== 0 ? this.#o : this.#n).push(a),
        this.#u(a.deps),
        St(a, Ct));
  }
  #u(e) {
    if (e !== null)
      for (const a of e)
        (a.f & ht) === 0 || (a.f & Br) === 0 || ((a.f ^= Br), this.#u(a.deps));
  }
  capture(e, a) {
    (this.previous.has(e) || this.previous.set(e, a),
      (e.f & Mr) === 0 && (this.current.set(e, e.v), Ht?.set(e, e.v)));
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
    if (xn.size > 1) {
      this.previous.clear();
      var e = Ht,
        a = !0,
        n = {
          parent: null,
          effect: null,
          effects: [],
          render_effects: [],
          block_effects: [],
        };
      for (const s of xn) {
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
          for (const _ of i) Gs(_, l, u, f);
          if (Ut.length > 0) {
            ((Ge = s), s.apply());
            for (const _ of Ut) s.#s(_, n);
            s.deactivate();
          }
          Ut = o;
        }
      }
      ((Ge = null), (Ht = e));
    }
    ((this.committed = !0), xn.delete(this));
  }
  increment(e) {
    ((this.#a += 1), e && (this.#r += 1));
  }
  decrement(e) {
    ((this.#a -= 1), e && (this.#r -= 1), this.revive());
  }
  revive() {
    for (const e of this.#o) (St(e, Mt), Jr(e));
    for (const e of this.#n) (St(e, Cr), Jr(e));
    ((this.#o = []), (this.#n = []), this.flush());
  }
  oncommit(e) {
    this.#e.add(e);
  }
  ondiscard(e) {
    this.#t.add(e);
  }
  settled() {
    return (this.#l ??= As()).promise;
  }
  static ensure() {
    if (Ge === null) {
      const e = (Ge = new lr());
      (xn.add(Ge),
        Ja ||
          lr.enqueue(() => {
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
function Dl(r) {
  var e = Ja;
  Ja = !0;
  try {
    for (var a; ; ) {
      if ((Ll(), Ut.length === 0 && (Ge?.flush(), Ut.length === 0)))
        return ((Mn = null), a);
      Ks();
    }
  } finally {
    Ja = e;
  }
}
function Ks() {
  var r = Yr;
  wo = !0;
  var e = ye ? new Set() : null;
  try {
    var a = 0;
    for (En(!0); Ut.length > 0; ) {
      var n = lr.ensure();
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
        Il();
      }
      if ((n.process(Ut), Ir.clear(), ye))
        for (const i of n.current.keys()) e.add(i);
    }
  } finally {
    if (((wo = !1), En(r), (Mn = null), ye))
      for (const i of e) i.updated = null;
  }
}
function Il() {
  try {
    el();
  } catch (r) {
    (ye && Nr(r, "stack", { value: "" }), wa(r, Mn));
  }
}
let br = null;
function rs(r) {
  var e = r.length;
  if (e !== 0) {
    for (var a = 0; a < e; ) {
      var n = r[a++];
      if (
        (n.f & (xr | jt)) === 0 &&
        dn(n) &&
        ((br = new Set()),
        rn(n),
        n.deps === null &&
          n.first === null &&
          n.nodes === null &&
          (n.teardown === null && n.ac === null ? li(n) : (n.fn = null)),
        br?.size > 0)
      ) {
        Ir.clear();
        for (const o of br) {
          if ((o.f & (xr | jt)) !== 0) continue;
          const s = [o];
          let i = o.parent;
          for (; i !== null; )
            (br.has(i) && (br.delete(i), s.push(i)), (i = i.parent));
          for (let l = s.length - 1; l >= 0; l--) {
            const u = s[l];
            (u.f & (xr | jt)) === 0 && rn(u);
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
        : (s & (Ln | fr)) !== 0 &&
          (s & Mt) === 0 &&
          Ws(o, e, n) &&
          (St(o, Mt), Jr(o));
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
function Jr(r) {
  for (var e = (Mn = r); e.parent !== null; ) {
    e = e.parent;
    var a = e.f;
    if (wo && e === Ve && (a & fr) !== 0 && (a & Ts) === 0) return;
    if ((a & ($r | kr)) !== 0) {
      if ((a & Ct) === 0) return;
      e.f ^= Ct;
    }
  }
  Ut.push(e);
}
function Nl(r) {
  let e = 0,
    a = Qr(0),
    n;
  return (
    ye && ir(a, "createSubscriber version"),
    () => {
      en() &&
        (t(a),
        un(
          () => (
            e === 0 && (n = ta(() => r(() => Qa(a)))),
            (e += 1),
            () => {
              dr(() => {
                ((e -= 1), e === 0 && (n?.(), (n = void 0), Qa(a)));
              });
            }
          ),
        ));
    }
  );
}
var Ol = Or | Sa | Fn;
function Bl(r, e, a) {
  new jl(r, e, a);
}
class jl {
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
  #_ = Nl(
    () => (
      (this.#f = Qr(this.#d)),
      ye && ir(this.#f, "$effect.pending()"),
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
      (this.#o = cn(() => {
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
      }, Ol)));
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
      lr.enqueue(() => {
        var a = this.#b();
        ((this.#n = this.#p(() => (lr.ensure(), Tt(() => this.#l(a))))),
          this.#v > 0
            ? this.#h()
            : (ha(this.#s, () => {
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
    ($t(this.#o), Lt(this.#o), _a(this.#o.ctx));
    try {
      return e();
    } catch (s) {
      return (Us(s), null);
    } finally {
      ($t(a), Lt(n), _a(o));
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
          ha(this.#s, () => {
            this.#s = null;
          }),
        this.#u && (this.#t.before(this.#u), (this.#u = null))));
  }
  update_pending_count(e) {
    (this.#m(e), (this.#d += e), this.#f && ka(this.#f, this.#d));
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
        Sl();
        return;
      }
      ((o = !0),
        s && ll(),
        lr.ensure(),
        (this.#d = 0),
        this.#i !== null &&
          ha(this.#i, () => {
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
      wa(u, this.#o && this.#o.parent);
    } finally {
      Lt(l);
    }
    n &&
      dr(() => {
        this.#i = this.#p(() => {
          (lr.ensure(), (this.#g = !0));
          try {
            return Tt(() => {
              n(
                this.#t,
                () => e,
                () => i,
              );
            });
          } catch (u) {
            return (wa(u, this.#o.parent), null);
          } finally {
            this.#g = !1;
          }
        });
      });
  }
}
function Zs(r, e, a, n) {
  const o = Pa() ? Dn : Bo;
  if (a.length === 0 && r.length === 0) {
    n(e.map(o));
    return;
  }
  var s = Ge,
    i = Ve,
    l = Rl();
  function u() {
    Promise.all(a.map((f) => ql(f)))
      .then((f) => {
        l();
        try {
          n([...e.map(o), ...f]);
        } catch (_) {
          (i.f & xr) === 0 && wa(_, i);
        }
        (s?.deactivate(), Pn());
      })
      .catch((f) => {
        wa(f, i);
      });
  }
  r.length > 0
    ? Promise.all(r).then(() => {
        l();
        try {
          return u();
        } finally {
          (s?.deactivate(), Pn());
        }
      })
    : u();
}
function Rl() {
  var r = Ve,
    e = Ue,
    a = st,
    n = Ge;
  if (ye) var o = xa;
  return function (i = !0) {
    ($t(r), Lt(e), _a(a), i && n?.activate(), ye && Sn(o));
  };
}
function Pn() {
  ($t(null), Lt(null), _a(null), ye && Sn(null));
}
const Vl = new Set();
function Dn(r) {
  var e = ht | Mt,
    a = Ue !== null && (Ue.f & ht) !== 0 ? Ue : null;
  return (
    Ve !== null && (Ve.f |= Sa),
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
function ql(r, e) {
  let a = Ve;
  a === null && Yi();
  var n = a.b,
    o = void 0,
    s = Qr(gt),
    i = !Ue,
    l = new Map();
  return (
    ru(() => {
      var u = As();
      o = u.promise;
      try {
        Promise.resolve(r())
          .then(u.resolve, u.reject)
          .then(() => {
            (f === Ge && f.committed && f.deactivate(), Pn());
          });
      } catch (b) {
        (u.reject(b), Pn());
      }
      var f = Ge;
      if (i) {
        var _ = !n.is_pending();
        (n.update_pending_count(1),
          f.increment(_),
          l.get(f)?.reject(pa),
          l.delete(f),
          l.set(f, u));
      }
      const C = (b, x = void 0) => {
        if ((f.activate(), x)) x !== pa && ((s.f |= Mr), ka(s, x));
        else {
          ((s.f & Mr) !== 0 && (s.f ^= Mr), ka(s, b));
          for (const [y, k] of l) {
            if ((l.delete(y), y === f)) break;
            k.reject(pa);
          }
        }
        i && (n.update_pending_count(-1), f.decrement(_));
      };
      u.promise.then(C, (b) => C(null, b || "unknown"));
    }),
    ln(() => {
      for (const u of l.values()) u.reject(pa);
    }),
    ye && (s.f |= Ln),
    new Promise((u) => {
      function f(_) {
        function C() {
          _ === o ? u(s) : f(o);
        }
        _.then(C, C);
      }
      f(o);
    })
  );
}
function v(r) {
  const e = Dn(r);
  return (fi(e), e);
}
function Bo(r) {
  const e = Dn(r);
  return ((e.equals = js), e);
}
function yo(r) {
  var e = r.effects;
  if (e !== null) {
    r.effects = null;
    for (var a = 0; a < e.length; a += 1) pt(e[a]);
  }
}
let lo = [];
function Ul(r) {
  for (var e = r.parent; e !== null; ) {
    if ((e.f & ht) === 0) return (e.f & xr) === 0 ? e : null;
    e = e.parent;
  }
  return null;
}
function jo(r) {
  var e,
    a = Ve;
  if (($t(Ul(r)), ye)) {
    let n = ya;
    as(new Set());
    try {
      (lo.includes(r) && Xi(), lo.push(r), (r.f &= ~Br), yo(r), (e = Co(r)));
    } finally {
      ($t(a), as(n), lo.pop());
    }
  } else
    try {
      ((r.f &= ~Br), yo(r), (e = Co(r)));
    } finally {
      $t(a);
    }
  return e;
}
function Ys(r) {
  var e = jo(r);
  if ((r.equals(e) || (Ge?.is_fork || (r.v = e), (r.wv = gi())), !ea))
    if (Ht !== null) (en() || Ge?.is_fork) && Ht.set(r, e);
    else {
      var a = (r.f & er) === 0 ? Cr : Ct;
      St(r, a);
    }
}
let ya = new Set();
const Ir = new Map();
function as(r) {
  ya = r;
}
let Ro = !1;
function Hl() {
  Ro = !0;
}
function Qr(r, e) {
  var a = { f: 0, v: r, reactions: null, equals: Os, rv: 0, wv: 0 };
  return a;
}
function fe(r, e) {
  const a = Qr(r);
  return (fi(a), a);
}
function Xs(r, e = !1, a = !0) {
  const n = Qr(r);
  return (
    e || (n.equals = js),
    nn && a && st !== null && st.l !== null && (st.l.s ??= []).push(n),
    n
  );
}
function A(r, e, a = !1) {
  Ue !== null &&
    (!cr || (Ue.f & Cn) !== 0) &&
    Pa() &&
    (Ue.f & (ht | fr | Ln | Cn)) !== 0 &&
    !wr?.includes(r) &&
    il();
  let n = a ? et(e) : e;
  return (ye && Rs(n, r.label), ka(r, n));
}
function ka(r, e) {
  if (!r.equals(e)) {
    var a = r.v;
    (ea ? Ir.set(r, e) : Ir.set(r, a), (r.v = e));
    var n = lr.ensure();
    if ((n.capture(r, a), ye)) {
      if (Ve !== null) {
        r.updated ??= new Map();
        const o = (r.updated.get("")?.count ?? 0) + 1;
        if ((r.updated.set("", { error: null, count: o }), o > 5)) {
          const s = zl("updated at");
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
      ((r.f & Mt) !== 0 && jo(r), St(r, (r.f & er) !== 0 ? Ct : Cr)),
      (r.wv = gi()),
      Qs(r, Mt),
      Pa() &&
        Ve !== null &&
        (Ve.f & Ct) !== 0 &&
        (Ve.f & (kr | $r)) === 0 &&
        (qt === null ? nu([r]) : qt.push(r)),
      !n.is_fork && ya.size > 0 && !Ro && Js());
  }
  return e;
}
function Js() {
  Ro = !1;
  var r = Yr;
  En(!0);
  const e = Array.from(ya);
  try {
    for (const a of e) ((a.f & Ct) !== 0 && St(a, Cr), dn(a) && rn(a));
  } finally {
    En(r);
  }
  ya.clear();
}
function Qa(r) {
  A(r, r.v + 1);
}
function Qs(r, e) {
  var a = r.reactions;
  if (a !== null)
    for (var n = Pa(), o = a.length, s = 0; s < o; s++) {
      var i = a[s],
        l = i.f;
      if (!(!n && i === Ve)) {
        if (ye && (l & Cn) !== 0) {
          ya.add(i);
          continue;
        }
        var u = (l & Mt) === 0;
        if ((u && St(i, e), (l & ht) !== 0)) {
          var f = i;
          (Ht?.delete(f), (l & Br) === 0 && (l & er && (i.f |= Br), Qs(f, Cr)));
        } else u && ((l & fr) !== 0 && br !== null && br.add(i), Jr(i));
      }
    }
}
const Kl = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function et(r) {
  if (typeof r != "object" || r === null || Dr in r) return r;
  const e = zs(r);
  if (e !== Ui && e !== Hi) return r;
  var a = new Map(),
    n = Lo(r),
    o = fe(0),
    s = Xr,
    i = (_) => {
      if (Xr === s) return _();
      var C = Ue,
        b = Xr;
      (Lt(null), ss(s));
      var x = _();
      return (Lt(C), ss(b), x);
    };
  n && (a.set("length", fe(r.length)), ye && (r = Wl(r)));
  var l = "";
  let u = !1;
  function f(_) {
    if (!u) {
      ((u = !0), (l = _), ir(o, `${l} version`));
      for (const [C, b] of a) ir(b, Wr(l, C));
      u = !1;
    }
  }
  return new Proxy(r, {
    defineProperty(_, C, b) {
      (!("value" in b) ||
        b.configurable === !1 ||
        b.enumerable === !1 ||
        b.writable === !1) &&
        ol();
      var x = a.get(C);
      return (
        x === void 0
          ? (x = i(() => {
              var y = fe(b.value);
              return (
                a.set(C, y),
                ye && typeof C == "string" && ir(y, Wr(l, C)),
                y
              );
            }))
          : A(x, b.value, !0),
        !0
      );
    },
    deleteProperty(_, C) {
      var b = a.get(C);
      if (b === void 0) {
        if (C in _) {
          const x = i(() => fe(gt));
          (a.set(C, x), Qa(o), ye && ir(x, Wr(l, C)));
        }
      } else (A(b, gt), Qa(o));
      return !0;
    },
    get(_, C, b) {
      if (C === Dr) return r;
      if (ye && C === Ms) return f;
      var x = a.get(C),
        y = C in _;
      if (
        (x === void 0 &&
          (!y || _r(_, C)?.writable) &&
          ((x = i(() => {
            var g = et(y ? _[C] : gt),
              d = fe(g);
            return (ye && ir(d, Wr(l, C)), d);
          })),
          a.set(C, x)),
        x !== void 0)
      ) {
        var k = t(x);
        return k === gt ? void 0 : k;
      }
      return Reflect.get(_, C, b);
    },
    getOwnPropertyDescriptor(_, C) {
      var b = Reflect.getOwnPropertyDescriptor(_, C);
      if (b && "value" in b) {
        var x = a.get(C);
        x && (b.value = t(x));
      } else if (b === void 0) {
        var y = a.get(C),
          k = y?.v;
        if (y !== void 0 && k !== gt)
          return { enumerable: !0, configurable: !0, value: k, writable: !0 };
      }
      return b;
    },
    has(_, C) {
      if (C === Dr) return !0;
      var b = a.get(C),
        x = (b !== void 0 && b.v !== gt) || Reflect.has(_, C);
      if (b !== void 0 || (Ve !== null && (!x || _r(_, C)?.writable))) {
        b === void 0 &&
          ((b = i(() => {
            var k = x ? et(_[C]) : gt,
              g = fe(k);
            return (ye && ir(g, Wr(l, C)), g);
          })),
          a.set(C, b));
        var y = t(b);
        if (y === gt) return !1;
      }
      return x;
    },
    set(_, C, b, x) {
      var y = a.get(C),
        k = C in _;
      if (n && C === "length")
        for (var g = b; g < y.v; g += 1) {
          var d = a.get(g + "");
          d !== void 0
            ? A(d, gt)
            : g in _ &&
              ((d = i(() => fe(gt))), a.set(g + "", d), ye && ir(d, Wr(l, g)));
        }
      if (y === void 0)
        (!k || _r(_, C)?.writable) &&
          ((y = i(() => fe(void 0))),
          ye && ir(y, Wr(l, C)),
          A(y, et(b)),
          a.set(C, y));
      else {
        k = y.v !== gt;
        var h = i(() => et(b));
        A(y, h);
      }
      var c = Reflect.getOwnPropertyDescriptor(_, C);
      if ((c?.set && c.set.call(x, b), !k)) {
        if (n && typeof C == "string") {
          var m = a.get("length"),
            E = Number(C);
          Number.isInteger(E) && E >= m.v && A(m, E + 1);
        }
        Qa(o);
      }
      return !0;
    },
    ownKeys(_) {
      t(o);
      var C = Reflect.ownKeys(_).filter((y) => {
        var k = a.get(y);
        return k === void 0 || k.v !== gt;
      });
      for (var [b, x] of a) x.v !== gt && !(b in _) && C.push(b);
      return C;
    },
    setPrototypeOf() {
      sl();
    },
  });
}
function Wr(r, e) {
  return typeof e == "symbol"
    ? `${r}[Symbol(${e.description ?? ""})]`
    : Kl.test(e)
      ? `${r}.${e}`
      : /^\d+$/.test(e)
        ? `${r}[${e}]`
        : `${r}['${e}']`;
}
function $a(r) {
  try {
    if (r !== null && typeof r == "object" && Dr in r) return r[Dr];
  } catch {}
  return r;
}
function $s(r, e) {
  return Object.is($a(r), $a(e));
}
const Gl = new Set([
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
function Wl(r) {
  return new Proxy(r, {
    get(e, a, n) {
      var o = Reflect.get(e, a, n);
      return Gl.has(a)
        ? function (...s) {
            Hl();
            var i = o.apply(this, s);
            return (Js(), i);
          }
        : o;
    },
  });
}
function Zl() {
  const r = Array.prototype,
    e = Array.__svelte_cleanup;
  e && e();
  const { indexOf: a, lastIndexOf: n, includes: o } = r;
  ((r.indexOf = function (s, i) {
    const l = a.call(this, s, i);
    if (l === -1) {
      for (let u = i ?? 0; u < this.length; u += 1)
        if ($a(this[u]) === s) {
          io("array.indexOf(...)");
          break;
        }
    }
    return l;
  }),
    (r.lastIndexOf = function (s, i) {
      const l = n.call(this, s, i ?? this.length - 1);
      if (l === -1) {
        for (let u = 0; u <= (i ?? this.length - 1); u += 1)
          if ($a(this[u]) === s) {
            io("array.lastIndexOf(...)");
            break;
          }
      }
      return l;
    }),
    (r.includes = function (s, i) {
      const l = o.call(this, s, i);
      if (!l) {
        for (let u = 0; u < this.length; u += 1)
          if ($a(this[u]) === s) {
            io("array.includes(...)");
            break;
          }
      }
      return l;
    }),
    (Array.__svelte_cleanup = () => {
      ((r.indexOf = a), (r.lastIndexOf = n), (r.includes = o));
    }));
}
var ko, Vo, ei, ti;
function Yl() {
  if (ko === void 0) {
    ((ko = window), (Vo = /Firefox/.test(navigator.userAgent)));
    var r = Element.prototype,
      e = Node.prototype,
      a = Text.prototype;
    ((ei = _r(e, "firstChild").get),
      (ti = _r(e, "nextSibling").get),
      $o(r) &&
        ((r.__click = void 0),
        (r.__className = void 0),
        (r.__attributes = null),
        (r.__style = void 0),
        (r.__e = void 0)),
      $o(a) && (a.__t = void 0),
      ye && ((r.__svelte_meta = null), Zl()));
  }
}
function yr(r = "") {
  return document.createTextNode(r);
}
function ur(r) {
  return ei.call(r);
}
function sn(r) {
  return ti.call(r);
}
function p(r, e) {
  return ur(r);
}
function Se(r, e = !1) {
  {
    var a = ur(r);
    return a instanceof Comment && a.data === "" ? sn(a) : a;
  }
}
function D(r, e = 1, a = !1) {
  let n = r;
  for (; e--; ) n = sn(n);
  return n;
}
function Xl(r) {
  r.textContent = "";
}
function ri() {
  return !1;
}
function Jl(r, e) {
  if (e) {
    const a = document.body;
    ((r.autofocus = !0),
      dr(() => {
        document.activeElement === a && r.focus();
      }));
  }
}
let ns = !1;
function Ql() {
  ns ||
    ((ns = !0),
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
function Ea(r) {
  var e = Ue,
    a = Ve;
  (Lt(null), $t(null));
  try {
    return r();
  } finally {
    (Lt(e), $t(a));
  }
}
function qo(r, e, a, n = a) {
  r.addEventListener(e, () => Ea(a));
  const o = r.__on_r;
  (o
    ? (r.__on_r = () => {
        (o(), n(!0));
      })
    : (r.__on_r = () => n(!0)),
    Ql());
}
function $l(r) {
  (Ve === null && (Ue === null && $i(r), Qi()), ea && Ji(r));
}
function eu(r, e) {
  var a = e.last;
  a === null
    ? (e.last = e.first = r)
    : ((a.next = r), (r.prev = a), (e.last = r));
}
function vr(r, e, a) {
  var n = Ve;
  if (ye) for (; n !== null && (n.f & Cn) !== 0; ) n = n.parent;
  n !== null && (n.f & jt) !== 0 && (r |= jt);
  var o = {
    ctx: st,
    deps: null,
    nodes: null,
    f: r | Mt | er,
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
  if ((ye && (o.component_function = on), a))
    try {
      (rn(o), (o.f |= Tn));
    } catch (l) {
      throw (pt(o), l);
    }
  else e !== null && Jr(o);
  var s = o;
  if (
    (a &&
      s.deps === null &&
      s.teardown === null &&
      s.nodes === null &&
      s.first === s.last &&
      (s.f & Sa) === 0 &&
      ((s = s.first),
      (r & fr) !== 0 && (r & Or) !== 0 && s !== null && (s.f |= Or)),
    s !== null &&
      ((s.parent = n),
      n !== null && eu(s, n),
      Ue !== null && (Ue.f & ht) !== 0 && (r & $r) === 0))
  ) {
    var i = Ue;
    (i.effects ??= []).push(s);
  }
  return o;
}
function en() {
  return Ue !== null && !cr;
}
function ln(r) {
  const e = vr(Io, null, !1);
  return (St(e, Ct), (e.teardown = r), e);
}
function Ke(r) {
  ($l("$effect"), ye && Nr(r, "name", { value: "$effect" }));
  var e = Ve.f,
    a = !Ue && (e & kr) !== 0 && (e & Tn) === 0;
  if (a) {
    var n = st;
    (n.e ??= []).push(r);
  } else return ai(r);
}
function ai(r) {
  return vr(Do | Gi, r, !1);
}
function tu(r) {
  lr.ensure();
  const e = vr($r | Sa, r, !0);
  return (a = {}) =>
    new Promise((n) => {
      a.outro
        ? ha(e, () => {
            (pt(e), n(void 0));
          })
        : (pt(e), n(void 0));
    });
}
function In(r) {
  return vr(Do, r, !1);
}
function ru(r) {
  return vr(Ln | Sa, r, !0);
}
function un(r, e = 0) {
  return vr(Io | e, r, !0);
}
function O(r, e = [], a = [], n = []) {
  Zs(n, e, a, (o) => {
    vr(Io, () => r(...o.map(t)), !0);
  });
}
function cn(r, e = 0) {
  var a = vr(fr | e, r, !0);
  return (ye && (a.dev_stack = xa), a);
}
function ni(r, e = 0) {
  var a = vr(Fs | e, r, !0);
  return (ye && (a.dev_stack = xa), a);
}
function Tt(r) {
  return vr(kr | Sa, r, !0);
}
function oi(r) {
  var e = r.teardown;
  if (e !== null) {
    const a = ea,
      n = Ue;
    (os(!0), Lt(null));
    try {
      e.call(null);
    } finally {
      (os(a), Lt(n));
    }
  }
}
function si(r, e = !1) {
  var a = r.first;
  for (r.first = r.last = null; a !== null; ) {
    const o = a.ac;
    o !== null &&
      Ea(() => {
        o.abort(pa);
      });
    var n = a.next;
    ((a.f & $r) !== 0 ? (a.parent = null) : pt(a, e), (a = n));
  }
}
function au(r) {
  for (var e = r.first; e !== null; ) {
    var a = e.next;
    ((e.f & kr) === 0 && pt(e), (e = a));
  }
}
function pt(r, e = !0) {
  var a = !1;
  ((e || (r.f & Ts) !== 0) &&
    r.nodes !== null &&
    r.nodes.end !== null &&
    (ii(r.nodes.start, r.nodes.end), (a = !0)),
    si(r, e && !a),
    zn(r, 0),
    St(r, xr));
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
    var a = r === e ? null : sn(r);
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
function ha(r, e, a = !0) {
  var n = [];
  (Uo(r, n, !0),
    ui(n, () => {
      (a && pt(r), e && e());
    }));
}
function ui(r, e) {
  var a = r.length;
  if (a > 0) {
    var n = () => --a || e();
    for (var o of r) o.out(n);
  } else e();
}
function Uo(r, e, a) {
  if ((r.f & jt) === 0) {
    r.f ^= jt;
    var n = r.nodes && r.nodes.t;
    if (n !== null) for (const l of n) (l.is_global || a) && e.push(l);
    for (var o = r.first; o !== null; ) {
      var s = o.next,
        i = (o.f & Or) !== 0 || ((o.f & kr) !== 0 && (r.f & fr) !== 0);
      (Uo(o, e, i ? a : !1), (o = s));
    }
  }
}
function Ho(r) {
  ci(r, !0);
}
function ci(r, e) {
  if ((r.f & jt) !== 0) {
    ((r.f ^= jt), (r.f & Ct) === 0 && (St(r, Mt), Jr(r)));
    for (var a = r.first; a !== null; ) {
      var n = a.next,
        o = (a.f & Or) !== 0 || (a.f & kr) !== 0;
      (ci(a, o ? e : !1), (a = n));
    }
    var s = r.nodes && r.nodes.t;
    if (s !== null) for (const i of s) (i.is_global || e) && i.in();
  }
}
function di(r, e) {
  if (r.nodes)
    for (var a = r.nodes.start, n = r.nodes.end; a !== null; ) {
      var o = a === n ? null : sn(a);
      (e.append(a), (a = o));
    }
}
let Yr = !1;
function En(r) {
  Yr = r;
}
let ea = !1;
function os(r) {
  ea = r;
}
let Ue = null,
  cr = !1;
function Lt(r) {
  Ue = r;
}
let Ve = null;
function $t(r) {
  Ve = r;
}
let wr = null;
function fi(r) {
  Ue !== null && (wr === null ? (wr = [r]) : wr.push(r));
}
let At = null,
  Bt = 0,
  qt = null;
function nu(r) {
  qt = r;
}
let vi = 1,
  tn = 0,
  Xr = tn;
function ss(r) {
  Xr = r;
}
function gi() {
  return ++vi;
}
function dn(r) {
  var e = r.f;
  if ((e & Mt) !== 0) return !0;
  if ((e & ht && (r.f &= ~Br), (e & Cr) !== 0)) {
    var a = r.deps;
    if (a !== null)
      for (var n = a.length, o = 0; o < n; o++) {
        var s = a[o];
        if ((dn(s) && Ys(s), s.wv > r.wv)) return !0;
      }
    (e & er) !== 0 && Ht === null && St(r, Ct);
  }
  return !1;
}
function pi(r, e, a = !0) {
  var n = r.reactions;
  if (n !== null && !wr?.includes(r))
    for (var o = 0; o < n.length; o++) {
      var s = n[o];
      (s.f & ht) !== 0
        ? pi(s, e, !1)
        : e === s && (a ? St(s, Mt) : (s.f & Ct) !== 0 && St(s, Cr), Jr(s));
    }
}
function Co(r) {
  var e = At,
    a = Bt,
    n = qt,
    o = Ue,
    s = wr,
    i = st,
    l = cr,
    u = Xr,
    f = r.f;
  ((At = null),
    (Bt = 0),
    (qt = null),
    (Ue = (f & (kr | $r)) === 0 ? r : null),
    (wr = null),
    _a(r.ctx),
    (cr = !1),
    (Xr = ++tn),
    r.ac !== null &&
      (Ea(() => {
        r.ac.abort(pa);
      }),
      (r.ac = null)));
  try {
    r.f |= _o;
    var _ = r.fn,
      C = _(),
      b = r.deps;
    if (At !== null) {
      var x;
      if ((zn(r, Bt), b !== null && Bt > 0))
        for (b.length = Bt + At.length, x = 0; x < At.length; x++)
          b[Bt + x] = At[x];
      else r.deps = b = At;
      if (en() && (r.f & er) !== 0)
        for (x = Bt; x < b.length; x++) (b[x].reactions ??= []).push(r);
    } else b !== null && Bt < b.length && (zn(r, Bt), (b.length = Bt));
    if (
      Pa() &&
      qt !== null &&
      !cr &&
      b !== null &&
      (r.f & (ht | Cr | Mt)) === 0
    )
      for (x = 0; x < qt.length; x++) pi(qt[x], r);
    return (
      o !== null &&
        o !== r &&
        (tn++, qt !== null && (n === null ? (n = qt) : n.push(...qt))),
      (r.f & Mr) !== 0 && (r.f ^= Mr),
      C
    );
  } catch (y) {
    return Us(y);
  } finally {
    ((r.f ^= _o),
      (At = e),
      (Bt = a),
      (qt = n),
      (Ue = o),
      (wr = s),
      _a(i),
      (cr = l),
      (Xr = u));
  }
}
function ou(r, e) {
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
    (St(e, Cr),
    (e.f & er) !== 0 && ((e.f ^= er), (e.f &= ~Br)),
    yo(e),
    zn(e, 0));
}
function zn(r, e) {
  var a = r.deps;
  if (a !== null) for (var n = e; n < a.length; n++) ou(r, a[n]);
}
function rn(r) {
  var e = r.f;
  if ((e & xr) === 0) {
    St(r, Ct);
    var a = Ve,
      n = Yr;
    if (((Ve = r), (Yr = !0), ye)) {
      var o = on;
      ts(r.component_function);
      var s = xa;
      Sn(r.dev_stack ?? xa);
    }
    try {
      ((e & (fr | Fs)) !== 0 ? au(r) : si(r), oi(r));
      var i = Co(r);
      ((r.teardown = typeof i == "function" ? i : null), (r.wv = vi));
      var l;
      ye && Pl && (r.f & Mt) !== 0 && r.deps;
    } finally {
      ((Yr = n), (Ve = a), ye && (ts(o), Sn(s)));
    }
  }
}
async function su() {
  (await Promise.resolve(), Dl());
}
function t(r) {
  var e = r.f,
    a = (e & ht) !== 0;
  if (Ue !== null && !cr) {
    var n = Ve !== null && (Ve.f & xr) !== 0;
    if (!n && !wr?.includes(r)) {
      var o = Ue.deps;
      if ((Ue.f & _o) !== 0)
        r.rv < tn &&
          ((r.rv = tn),
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
  if ((ye && Vl.delete(r), ea)) {
    if (Ir.has(r)) return Ir.get(r);
    if (a) {
      var i = r,
        l = i.v;
      return (
        (((i.f & Ct) === 0 && i.reactions !== null) || bi(i)) && (l = jo(i)),
        Ir.set(i, l),
        l
      );
    }
  } else
    a &&
      (!Ht?.has(r) || (Ge?.is_fork && !en())) &&
      ((i = r), dn(i) && Ys(i), Yr && en() && (i.f & er) === 0 && hi(i));
  if (Ht?.has(r)) return Ht.get(r);
  if ((r.f & Mr) !== 0) throw r.v;
  return r.v;
}
function hi(r) {
  if (r.deps !== null) {
    r.f ^= er;
    for (const e of r.deps)
      ((e.reactions ??= []).push(r),
        (e.f & ht) !== 0 && (e.f & er) === 0 && hi(e));
  }
}
function bi(r) {
  if (r.v === gt) return !0;
  if (r.deps === null) return !1;
  for (const e of r.deps)
    if (Ir.has(e) || ((e.f & ht) !== 0 && bi(e))) return !0;
  return !1;
}
function ta(r) {
  var e = cr;
  try {
    return ((cr = !0), r());
  } finally {
    cr = e;
  }
}
const iu = -7169;
function St(r, e) {
  r.f = (r.f & iu) | e;
}
function lu(r) {
  return (
    r.endsWith("capture") &&
    r !== "gotpointercapture" &&
    r !== "lostpointercapture"
  );
}
const uu = [
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
function cu(r) {
  return uu.includes(r);
}
const du = {
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
function fu(r) {
  return ((r = r.toLowerCase()), du[r] ?? r);
}
const vu = ["touchstart", "touchmove"];
function gu(r) {
  return vu.includes(r);
}
const mi = new Set(),
  So = new Set();
function _i(r, e, a, n = {}) {
  function o(s) {
    if ((n.capture || Xa.call(e, s), !s.cancelBubble))
      return Ea(() => a?.call(this, s));
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
    ln(() => {
      e.removeEventListener(r, i, s);
    });
}
function ct(r) {
  for (var e = 0; e < r.length; e++) mi.add(r[e]);
  for (var a of So) a(r);
}
let is = null;
function Xa(r) {
  var e = this,
    a = e.ownerDocument,
    n = r.type,
    o = r.composedPath?.() || [],
    s = o[0] || r.target;
  is = r;
  var i = 0,
    l = is === r && r.__root;
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
    Nr(r, "currentTarget", {
      configurable: !0,
      get() {
        return s || a;
      },
    });
    var _ = Ue,
      C = Ve;
    (Lt(null), $t(null));
    try {
      for (var b, x = []; s !== null; ) {
        var y = s.assignedSlot || s.parentNode || s.host || null;
        try {
          var k = s["__" + n];
          k != null && (!s.disabled || r.target === s) && k.call(s, r);
        } catch (g) {
          b ? x.push(g) : (b = g);
        }
        if (r.cancelBubble || y === e || y === null) break;
        s = y;
      }
      if (b) {
        for (let g of x)
          queueMicrotask(() => {
            throw g;
          });
        throw b;
      }
    } finally {
      ((r.__root = e), delete r.currentTarget, Lt(_), $t(C));
    }
  }
}
function Ko(r) {
  var e = document.createElement("template");
  return ((e.innerHTML = r.replaceAll("<!>", "<!---->")), e.content);
}
function Ca(r, e) {
  var a = Ve;
  a.nodes === null && (a.nodes = { start: r, end: e, a: null, t: null });
}
function R(r, e) {
  var a = (e & _l) !== 0,
    n = (e & xl) !== 0,
    o,
    s = !r.startsWith("<!>");
  return () => {
    o === void 0 && ((o = Ko(s ? r : "<!>" + r)), a || (o = ur(o)));
    var i = n || Vo ? document.importNode(o, !0) : o.cloneNode(!0);
    if (a) {
      var l = ur(i),
        u = i.lastChild;
      Ca(l, u);
    } else Ca(i, i);
    return i;
  };
}
function pu(r, e, a = "svg") {
  var n = !r.startsWith("<!>"),
    o = `<${a}>${n ? r : "<!>" + r}</${a}>`,
    s;
  return () => {
    if (!s) {
      var i = Ko(o),
        l = ur(i);
      s = ur(l);
    }
    var u = s.cloneNode(!0);
    return (Ca(u, u), u);
  };
}
function Wt(r, e) {
  return pu(r, e, "svg");
}
function Re(r = "") {
  {
    var e = yr(r + "");
    return (Ca(e, e), e);
  }
}
function Le() {
  var r = document.createDocumentFragment(),
    e = document.createComment(""),
    a = yr();
  return (r.append(e, a), Ca(e, a), r);
}
function w(r, e) {
  r !== null && r.before(e);
}
let Po = !0;
function J(r, e) {
  var a = e == null ? "" : typeof e == "object" ? e + "" : e;
  a !== (r.__t ??= r.nodeValue) && ((r.__t = a), (r.nodeValue = a + ""));
}
function hu(r, e) {
  return bu(r, e);
}
const fa = new Map();
function bu(
  r,
  { target: e, anchor: a, props: n = {}, events: o, context: s, intro: i = !0 },
) {
  Yl();
  var l = new Set(),
    u = (C) => {
      for (var b = 0; b < C.length; b++) {
        var x = C[b];
        if (!l.has(x)) {
          l.add(x);
          var y = gu(x);
          e.addEventListener(x, Xa, { passive: y });
          var k = fa.get(x);
          k === void 0
            ? (document.addEventListener(x, Xa, { passive: y }), fa.set(x, 1))
            : fa.set(x, k + 1);
        }
      }
    };
  (u(Mo(mi)), So.add(u));
  var f = void 0,
    _ = tu(() => {
      var C = a ?? e.appendChild(yr());
      return (
        Bl(C, { pending: () => {} }, (b) => {
          if (s) {
            Be({});
            var x = st;
            x.c = s;
          }
          (o && (n.$$events = o),
            (Po = i),
            (f = r(b, n) || {}),
            (Po = !0),
            s && je());
        }),
        () => {
          for (var b of l) {
            e.removeEventListener(b, Xa);
            var x = fa.get(b);
            --x === 0
              ? (document.removeEventListener(b, Xa), fa.delete(b))
              : fa.set(b, x);
          }
          (So.delete(u), C !== a && C.parentNode?.removeChild(C));
        }
      );
    });
  return (mu.set(f, _), f);
}
let mu = new WeakMap();
class Go {
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
      if (n) (Ho(n), this.#r.delete(a));
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
        this.#l || !n ? (this.#r.add(s), ha(i, l, !1)) : l();
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
function Z(r, e, a = !1) {
  var n = new Go(r),
    o = a ? Or : 0;
  function s(i, l) {
    n.ensure(i, l);
  }
  cn(() => {
    var i = !1;
    (e((l, u = !0) => {
      ((i = !0), s(u, l));
    }),
      i || s(!1, null));
  }, o);
}
function _u(r, e, a) {
  var n = new Go(r),
    o = !Pa();
  cn(() => {
    var s = e();
    (o && s !== null && typeof s == "object" && (s = {}), n.ensure(s, a));
  });
}
function xu(r, e) {
  return e;
}
function wu(r, e, a) {
  for (var n = [], o = e.length, s = 0; s < o; s++) Uo(e[s].e, n, !0);
  ui(n, () => {
    var i = n.length === 0 && a !== null;
    if (i) {
      var l = a,
        u = l.parentNode;
      (Xl(u), u.append(l), r.items.clear(), Qt(r, e[0].prev, e[o - 1].next));
    }
    for (var f = 0; f < o; f++) {
      var _ = e[f];
      (i || (r.items.delete(_.k), Qt(r, _.prev, _.next)), pt(_.e, !i));
    }
    r.first === e[0] && (r.first = e[0].prev);
  });
}
function nt(r, e, a, n, o, s = null) {
  var i = r,
    l = new Map(),
    u = null,
    f = (e & Ns) !== 0,
    _ = (e & Ds) !== 0,
    C = (e & Is) !== 0;
  if (f) {
    var b = r;
    i = b.appendChild(yr());
  }
  var x = null,
    y = Bo(() => {
      var m = a();
      return Lo(m) ? m : m == null ? [] : Mo(m);
    }),
    k,
    g = !0;
  function d() {
    (yu(c, k, i, e, n),
      x !== null &&
        (k.length === 0
          ? (x.fragment
              ? (i.before(x.fragment), (x.fragment = null))
              : Ho(x.effect),
            (h.first = x.effect))
          : ha(x.effect, () => {
              x = null;
            })));
  }
  var h = cn(() => {
      k = t(y);
      for (
        var m = k.length, E = new Set(), S = Ge, z = null, T = ri(), M = 0;
        M < m;
        M += 1
      ) {
        var q = k[M],
          U = n(q, M),
          se = g ? null : l.get(U);
        (se
          ? (_ && ka(se.v, q),
            C && ka(se.i, M),
            T && S.skipped_effects.delete(se.e))
          : ((se = ku(g ? i : null, z, q, U, M, o, e, a)),
            g && ((se.o = !0), z === null ? (u = se) : (z.next = se), (z = se)),
            l.set(U, se)),
          E.add(U));
      }
      if (m === 0 && s && !x)
        if (g) x = { fragment: null, effect: Tt(() => s(i)) };
        else {
          var ce = document.createDocumentFragment(),
            ge = yr();
          (ce.append(ge), (x = { fragment: ce, effect: Tt(() => s(ge)) }));
        }
      if (!g)
        if (T) {
          for (const [be, $] of l) E.has(be) || S.skipped_effects.add($.e);
          (S.oncommit(d), S.ondiscard(() => {}));
        } else d();
      t(y);
    }),
    c = { effect: h, items: l, first: u };
  g = !1;
}
function yu(r, e, a, n, o) {
  var s = (n & ul) !== 0,
    i = e.length,
    l = r.items,
    u = r.first,
    f,
    _ = null,
    C,
    b = [],
    x = [],
    y,
    k,
    g,
    d;
  if (s)
    for (d = 0; d < i; d += 1)
      ((y = e[d]),
        (k = o(y, d)),
        (g = l.get(k)),
        g.o && (g.e.nodes?.a?.measure(), (C ??= new Set()).add(g)));
  for (d = 0; d < i; d += 1) {
    if (((y = e[d]), (k = o(y, d)), (g = l.get(k)), (r.first ??= g), !g.o)) {
      g.o = !0;
      var h = _ ? _.next : u;
      (Qt(r, _, g),
        Qt(r, g, h),
        uo(g, h, a),
        (_ = g),
        (b = []),
        (x = []),
        (u = _.next));
      continue;
    }
    if (
      ((g.e.f & jt) !== 0 &&
        (Ho(g.e), s && (g.e.nodes?.a?.unfix(), (C ??= new Set()).delete(g))),
      g !== u)
    ) {
      if (f !== void 0 && f.has(g)) {
        if (b.length < x.length) {
          var c = x[0],
            m;
          _ = c.prev;
          var E = b[0],
            S = b[b.length - 1];
          for (m = 0; m < b.length; m += 1) uo(b[m], c, a);
          for (m = 0; m < x.length; m += 1) f.delete(x[m]);
          (Qt(r, E.prev, S.next),
            Qt(r, _, E),
            Qt(r, S, c),
            (u = c),
            (_ = S),
            (d -= 1),
            (b = []),
            (x = []));
        } else
          (f.delete(g),
            uo(g, u, a),
            Qt(r, g.prev, g.next),
            Qt(r, g, _ === null ? r.first : _.next),
            Qt(r, _, g),
            (_ = g));
        continue;
      }
      for (b = [], x = []; u !== null && u !== g; )
        ((u.e.f & jt) === 0 && (f ??= new Set()).add(u),
          x.push(u),
          (u = u.next));
      if (u === null) continue;
      g = u;
    }
    (b.push(g), (_ = g), (u = g.next));
  }
  let z = l.size > i;
  if (u !== null || f !== void 0) {
    for (var T = f === void 0 ? [] : Mo(f); u !== null; )
      ((u.e.f & jt) === 0 && T.push(u), (u = u.next));
    var M = T.length;
    if (((z = l.size - M > i), M > 0)) {
      var q = (n & Ns) !== 0 && i === 0 ? a : null;
      if (s) {
        for (d = 0; d < M; d += 1) T[d].e.nodes?.a?.measure();
        for (d = 0; d < M; d += 1) T[d].e.nodes?.a?.fix();
      }
      wu(r, T, q);
    }
  }
  if (z) for (const U of l.values()) U.o || (Qt(r, _, U), (_ = U));
  ((r.effect.last = _ && _.e),
    s &&
      dr(() => {
        if (C !== void 0) for (g of C) g.e.nodes?.a?.apply();
      }));
}
function ku(r, e, a, n, o, s, i, l) {
  var u = (i & Ds) !== 0,
    f = (i & cl) === 0,
    _ = u ? (f ? Xs(a, !1, !1) : Qr(a)) : a,
    C = (i & Is) === 0 ? o : Qr(o);
  ye &&
    u &&
    (_.trace = () => {
      var y = typeof C == "number" ? o : C.v;
      l()[y];
    });
  var b = { i: C, v: _, k: n, e: null, o: !1, prev: e, next: null };
  if (r === null) {
    var x = document.createDocumentFragment();
    x.append((r = yr()));
  }
  return ((b.e = Tt(() => s(r, _, C, l))), e !== null && (e.next = b), b);
}
function uo(r, e, a) {
  if (r.e.nodes)
    for (
      var n = r.next ? r.next.e.nodes.start : a,
        o = e ? e.e.nodes.start : a,
        s = r.e.nodes.start;
      s !== null && s !== n;
    ) {
      var i = sn(s);
      (o.before(s), (s = i));
    }
}
function Qt(r, e, a) {
  (e === null
    ? ((r.first = a), (r.effect.first = a && a.e))
    : (e.e.next && (e.e.next.prev = null), (e.next = a), (e.e.next = a && a.e)),
    a !== null &&
      (a.e.prev && (a.e.prev.next = null),
      (a.prev = e),
      (a.e.prev = e && e.e)));
}
function Cu(r, e, a = !1, n = !1, o = !1) {
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
      var f = Ko(u);
      if (((a || n) && (f = ur(f)), Ca(ur(f), f.lastChild), a || n))
        for (; ur(f); ) s.before(ur(f));
      else s.before(f);
    }
  });
}
function Je(r, e, ...a) {
  var n = new Go(r);
  cn(() => {
    const o = e() ?? null;
    (ye && o == null && tl(), n.ensure(o, o && ((s) => o(s, ...a))));
  }, Or);
}
const Su = () => performance.now(),
  mr = {
    tick: (r) => requestAnimationFrame(r),
    now: () => Su(),
    tasks: new Set(),
  };
function xi() {
  const r = mr.now();
  (mr.tasks.forEach((e) => {
    e.c(r) || (mr.tasks.delete(e), e.f());
  }),
    mr.tasks.size !== 0 && mr.tick(xi));
}
function Pu(r) {
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
function wn(r, e) {
  Ea(() => {
    r.dispatchEvent(new CustomEvent(e));
  });
}
function Eu(r) {
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
function ls(r) {
  const e = {},
    a = r.split(";");
  for (const n of a) {
    const [o, s] = n.split(":");
    if (!o || s === void 0) break;
    const i = Eu(o.trim());
    e[i] = s.trim();
  }
  return e;
}
const zu = (r) => r;
function us(r, e, a, n) {
  var o = (r & hl) !== 0,
    s = (r & bl) !== 0,
    i = o && s,
    l = (r & ml) !== 0,
    u = i ? "both" : o ? "in" : "out",
    f,
    _ = e.inert,
    C = e.style.overflow,
    b,
    x;
  function y() {
    return Ea(() => (f ??= a()(e, n?.() ?? {}, { direction: u })));
  }
  var k = {
      is_global: l,
      in() {
        if (((e.inert = _), !o)) {
          (x?.abort(), x?.reset?.());
          return;
        }
        (s || b?.abort(),
          wn(e, "introstart"),
          (b = Eo(e, y(), x, 1, () => {
            (wn(e, "introend"),
              b?.abort(),
              (b = f = void 0),
              (e.style.overflow = C));
          })));
      },
      out(c) {
        if (!s) {
          (c?.(), (f = void 0));
          return;
        }
        ((e.inert = !0),
          wn(e, "outrostart"),
          (x = Eo(e, y(), b, 0, () => {
            (wn(e, "outroend"), c?.());
          })));
      },
      stop: () => {
        (b?.abort(), x?.abort());
      },
    },
    g = Ve;
  if (((g.nodes.t ??= []).push(k), o && Po)) {
    var d = l;
    if (!d) {
      for (var h = g.parent; h && (h.f & Or) !== 0; )
        for (; (h = h.parent) && (h.f & fr) === 0; );
      d = !h || (h.f & Tn) !== 0;
    }
    d &&
      In(() => {
        ta(() => k.in());
      });
  }
}
function Eo(r, e, a, n, o) {
  var s = n === 1;
  if (ga(e)) {
    var i,
      l = !1;
    return (
      dr(() => {
        if (!l) {
          var g = e({ direction: s ? "in" : "out" });
          i = Eo(r, g, a, n, o);
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
  const { delay: u = 0, css: f, tick: _, easing: C = zu } = e;
  var b = [];
  if (s && a === void 0 && (_ && _(0, 1), f)) {
    var x = ls(f(0, 1));
    b.push(x, x);
  }
  var y = () => 1 - n,
    k = r.animate(b, { duration: u, fill: "forwards" });
  return (
    (k.onfinish = () => {
      k.cancel();
      var g = a?.t() ?? 1 - n;
      a?.abort();
      var d = n - g,
        h = e.duration * Math.abs(d),
        c = [];
      if (h > 0) {
        var m = !1;
        if (f)
          for (
            var E = Math.ceil(h / 16.666666666666668), S = 0;
            S <= E;
            S += 1
          ) {
            var z = g + d * C(S / E),
              T = ls(f(z, 1 - z));
            (c.push(T), (m ||= T.overflow === "hidden"));
          }
        (m && (r.style.overflow = "hidden"),
          (y = () => {
            var M = k.currentTime;
            return g + d * C(M / h);
          }),
          _ &&
            Pu(() => {
              if (k.playState !== "running") return !1;
              var M = y();
              return (_(M, 1 - M), !0);
            }));
      }
      ((k = r.animate(c, { duration: h, fill: "forwards" })),
        (k.onfinish = () => {
          ((y = () => n), _?.(n, 1 - n), o());
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
        n === 0 && _?.(1, 0);
      },
      t: () => y(),
    }
  );
}
function Au(r, e) {
  var a = void 0,
    n;
  ni(() => {
    a !== (a = e()) &&
      (n && (pt(n), (n = null)),
      a &&
        (n = Tt(() => {
          In(() => a(r));
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
function Fu() {
  for (var r, e, a = 0, n = "", o = arguments.length; a < o; a++)
    (r = arguments[a]) && (e = wi(r)) && (n && (n += " "), (n += e));
  return n;
}
function G(r) {
  return typeof r == "object" ? Fu(r) : (r ?? "");
}
const cs = [
  ...` 	
\r\f \v\uFEFF`,
];
function Tu(r, e, a) {
  var n = r == null ? "" : "" + r;
  if ((e && (n = n ? n + " " + e : e), a)) {
    for (var o in a)
      if (a[o]) n = n ? n + " " + o : o;
      else if (n.length)
        for (var s = o.length, i = 0; (i = n.indexOf(o, i)) >= 0; ) {
          var l = i + s;
          (i === 0 || cs.includes(n[i - 1])) &&
          (l === n.length || cs.includes(n[l]))
            ? (n = (i === 0 ? "" : n.substring(0, i)) + n.substring(l + 1))
            : (i = l);
        }
  }
  return n === "" ? null : n;
}
function ds(r, e = !1) {
  var a = e ? " !important;" : ";",
    n = "";
  for (var o in r) {
    var s = r[o];
    s != null && s !== "" && (n += " " + o + ": " + s + a);
  }
  return n;
}
function co(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function Lu(r, e) {
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
      (n && u.push(...Object.keys(n).map(co)),
        o && u.push(...Object.keys(o).map(co)));
      var f = 0,
        _ = -1;
      const k = r.length;
      for (var C = 0; C < k; C++) {
        var b = r[C];
        if (
          (l
            ? b === "/" && r[C - 1] === "*" && (l = !1)
            : s
              ? s === b && (s = !1)
              : b === "/" && r[C + 1] === "*"
                ? (l = !0)
                : b === '"' || b === "'"
                  ? (s = b)
                  : b === "("
                    ? i++
                    : b === ")" && i--,
          !l && s === !1 && i === 0)
        ) {
          if (b === ":" && _ === -1) _ = C;
          else if (b === ";" || C === k - 1) {
            if (_ !== -1) {
              var x = co(r.substring(f, _).trim());
              if (!u.includes(x)) {
                b !== ";" && C++;
                var y = r.substring(f, C).trim();
                a += " " + y + ";";
              }
            }
            ((f = C + 1), (_ = -1));
          }
        }
      }
    }
    return (
      n && (a += ds(n)),
      o && (a += ds(o, !0)),
      (a = a.trim()),
      a === "" ? null : a
    );
  }
  return r == null ? null : String(r);
}
function V(r, e, a, n, o, s) {
  var i = r.__className;
  if (i !== a || i === void 0) {
    var l = Tu(a, n, s);
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
function fo(r, e = {}, a, n) {
  for (var o in a) {
    var s = a[o];
    e[o] !== s &&
      (a[o] == null ? r.style.removeProperty(o) : r.style.setProperty(o, s, n));
  }
}
function lt(r, e, a, n) {
  var o = r.__style;
  if (o !== e) {
    var s = Lu(e, n);
    (s == null ? r.removeAttribute("style") : (r.style.cssText = s),
      (r.__style = e));
  } else
    n &&
      (Array.isArray(n)
        ? (fo(r, a?.[0], n[0]), fo(r, a?.[1], n[1], "important"))
        : fo(r, a, n));
  return n;
}
function zo(r, e, a = !1) {
  if (r.multiple) {
    if (e == null) return;
    if (!Lo(e)) return Cl();
    for (var n of r.options) n.selected = e.includes(fs(n));
    return;
  }
  for (n of r.options) {
    var o = fs(n);
    if ($s(o, e)) {
      n.selected = !0;
      return;
    }
  }
  (!a || e !== void 0) && (r.selectedIndex = -1);
}
function Mu(r) {
  var e = new MutationObserver(() => {
    zo(r, r.__value);
  });
  (e.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"],
  }),
    ln(() => {
      e.disconnect();
    }));
}
function fs(r) {
  return "__value" in r ? r.__value : r.value;
}
const Za = Symbol("class"),
  Ya = Symbol("style"),
  yi = Symbol("is custom element"),
  ki = Symbol("is html");
function Ci(r, e) {
  var a = Wo(r);
  a.value === (a.value = e ?? void 0) ||
    (r.value === e && (e !== 0 || r.nodeName !== "PROGRESS")) ||
    (r.value = e ?? "");
}
function Du(r, e) {
  e
    ? r.hasAttribute("selected") || r.setAttribute("selected", "")
    : r.removeAttribute("selected");
}
function he(r, e, a, n) {
  var o = Wo(r);
  o[e] !== (o[e] = a) &&
    (e === "loading" && (r[Wi] = a),
    a == null
      ? r.removeAttribute(e)
      : typeof a != "string" && Si(r).includes(e)
        ? (r[e] = a)
        : r.setAttribute(e, a));
}
function Iu(r, e, a, n, o = !1, s = !1) {
  var i = Wo(r),
    l = i[yi],
    u = !i[ki],
    f = e || {},
    _ = r.tagName === "OPTION";
  for (var C in e) C in a || (a[C] = null);
  (a.class ? (a.class = G(a.class)) : (n || a[Za]) && (a.class = null),
    a[Ya] && (a.style ??= null));
  var b = Si(r);
  for (const m in a) {
    let E = a[m];
    if (_ && m === "value" && E == null) {
      ((r.value = r.__value = ""), (f[m] = E));
      continue;
    }
    if (m === "class") {
      var x = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      (V(r, x, E, n, e?.[Za], a[Za]), (f[m] = E), (f[Za] = a[Za]));
      continue;
    }
    if (m === "style") {
      (lt(r, E, e?.[Ya], a[Ya]), (f[m] = E), (f[Ya] = a[Ya]));
      continue;
    }
    var y = f[m];
    if (!(E === y && !(E === void 0 && r.hasAttribute(m)))) {
      f[m] = E;
      var k = m[0] + m[1];
      if (k !== "$$")
        if (k === "on") {
          const S = {},
            z = "$$" + m;
          let T = m.slice(2);
          var g = cu(T);
          if ((lu(T) && ((T = T.slice(0, -7)), (S.capture = !0)), !g && y)) {
            if (E != null) continue;
            (r.removeEventListener(T, f[z], S), (f[z] = null));
          }
          if (E != null)
            if (g) ((r[`__${T}`] = E), ct([T]));
            else {
              let M = function (q) {
                f[m].call(this, q);
              };
              var c = M;
              f[z] = _i(T, r, M, S);
            }
          else g && (r[`__${T}`] = void 0);
        } else if (m === "style") he(r, m, E);
        else if (m === "autofocus") Jl(r, !!E);
        else if (!l && (m === "__value" || (m === "value" && E != null)))
          r.value = r.__value = E;
        else if (m === "selected" && _) Du(r, E);
        else {
          var d = m;
          u || (d = fu(d));
          var h = d === "defaultValue" || d === "defaultChecked";
          if (E == null && !l && !h)
            if (((i[m] = null), d === "value" || d === "checked")) {
              let S = r;
              const z = e === void 0;
              if (d === "value") {
                let T = S.defaultValue;
                (S.removeAttribute(d),
                  (S.defaultValue = T),
                  (S.value = S.__value = z ? T : null));
              } else {
                let T = S.defaultChecked;
                (S.removeAttribute(d),
                  (S.defaultChecked = T),
                  (S.checked = z ? T : !1));
              }
            } else r.removeAttribute(m);
          else
            h || (b.includes(d) && (l || typeof E != "string"))
              ? ((r[d] = E), d in i && (i[d] = gt))
              : typeof E != "function" && he(r, d, E);
        }
    }
  }
  return f;
}
function bt(r, e, a = [], n = [], o = [], s, i = !1, l = !1) {
  Zs(o, a, n, (u) => {
    var f = void 0,
      _ = {},
      C = r.nodeName === "SELECT",
      b = !1;
    if (
      (ni(() => {
        var y = e(...u.map(t)),
          k = Iu(r, f, y, s, i, l);
        b && C && "value" in y && zo(r, y.value);
        for (let d of Object.getOwnPropertySymbols(_)) y[d] || pt(_[d]);
        for (let d of Object.getOwnPropertySymbols(y)) {
          var g = y[d];
          (d.description === kl &&
            (!f || g !== f[d]) &&
            (_[d] && pt(_[d]), (_[d] = Tt(() => Au(r, () => g)))),
            (k[d] = g));
        }
        f = k;
      }),
      C)
    ) {
      var x = r;
      In(() => {
        (zo(x, f.value, !0), Mu(x));
      });
    }
    b = !0;
  });
}
function Wo(r) {
  return (r.__attributes ??= {
    [yi]: r.nodeName.includes("-"),
    [ki]: r.namespaceURI === yl,
  });
}
var vs = new Map();
function Si(r) {
  var e = r.getAttribute("is") || r.nodeName,
    a = vs.get(e);
  if (a) return a;
  vs.set(e, (a = []));
  for (var n, o = r, s = Element.prototype; s !== o; ) {
    n = qi(o);
    for (var i in n) n[i].set && a.push(i);
    o = zs(o);
  }
  return a;
}
function Nu(r, e, a = e) {
  var n = new WeakSet();
  (qo(r, "input", async (o) => {
    ye && r.type === "checkbox" && es();
    var s = o ? r.defaultValue : r.value;
    if (
      ((s = go(r) ? po(s) : s),
      a(s),
      Ge !== null && n.add(Ge),
      await su(),
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
    ta(e) == null &&
      r.value &&
      (a(go(r) ? po(r.value) : r.value), Ge !== null && n.add(Ge)),
    un(() => {
      ye && r.type === "checkbox" && es();
      var o = e();
      if (r === document.activeElement) {
        var s = kn ?? Ge;
        if (n.has(s)) return;
      }
      (go(r) && o === po(r.value)) ||
        (r.type === "date" && !o && !r.value) ||
        (o !== r.value && (r.value = o ?? ""));
    }));
}
const vo = new Set();
function Ou(r, e, a, n, o = n) {
  var s = a.getAttribute("type") === "checkbox",
    i = r;
  if (e !== null) for (var l of e) i = i[l] ??= [];
  (i.push(a),
    qo(
      a,
      "change",
      () => {
        var u = a.__value;
        (s && (u = ju(i, u, a.checked)), o(u));
      },
      () => o(s ? [] : null),
    ),
    un(() => {
      var u = n();
      s
        ? ((u = u || []), (a.checked = u.includes(a.__value)))
        : (a.checked = $s(a.__value, u));
    }),
    ln(() => {
      var u = i.indexOf(a);
      u !== -1 && i.splice(u, 1);
    }),
    vo.has(i) ||
      (vo.add(i),
      dr(() => {
        (i.sort((u, f) => (u.compareDocumentPosition(f) === 4 ? -1 : 1)),
          vo.delete(i));
      })),
    dr(() => {}));
}
function Bu(r, e, a = e) {
  (qo(r, "change", (n) => {
    var o = n ? r.defaultChecked : r.checked;
    a(o);
  }),
    ta(e) == null && a(r.checked),
    un(() => {
      var n = e();
      r.checked = !!n;
    }));
}
function ju(r, e, a) {
  for (var n = new Set(), o = 0; o < r.length; o += 1)
    r[o].checked && n.add(r[o].__value);
  return (a || n.delete(e), Array.from(n));
}
function go(r) {
  var e = r.type;
  return e === "number" || e === "range";
}
function po(r) {
  return r === "" ? null : +r;
}
function gs(r, e) {
  return r === e || r?.[Dr] === e;
}
function ut(r = {}, e, a, n) {
  return (
    In(() => {
      var o, s;
      return (
        un(() => {
          ((o = s),
            (s = n?.() || []),
            ta(() => {
              r !== a(...s) &&
                (e(r, ...s), o && gs(a(...o), r) && e(null, ...o));
            }));
        }),
        () => {
          dr(() => {
            s && gs(a(...s), r) && e(null, ...s);
          });
        }
      );
    }),
    r
  );
}
function Pi(r, e, a) {
  if (r == null) return (e(void 0), Q);
  const n = ta(() => r.subscribe(e, a));
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const va = [];
function Ru(r, e = Q) {
  let a = null;
  const n = new Set();
  function o(l) {
    if (Bs(r, l) && ((r = l), a)) {
      const u = !va.length;
      for (const f of n) (f[1](), va.push(f, r));
      if (u) {
        for (let f = 0; f < va.length; f += 2) va[f][0](va[f + 1]);
        va.length = 0;
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
function Vu(r) {
  let e;
  return (Pi(r, (a) => (e = a))(), e);
}
let yn = !1,
  Ao = Symbol();
function qu(r, e, a) {
  const n = (a[e] ??= { store: null, source: Xs(void 0), unsubscribe: Q });
  if ((ye && (n.source.label = e), n.store !== r && !(Ao in a)))
    if ((n.unsubscribe(), (n.store = r ?? null), r == null))
      ((n.source.v = void 0), (n.unsubscribe = Q));
    else {
      var o = !0;
      ((n.unsubscribe = Pi(r, (s) => {
        o ? (n.source.v = s) : A(n.source, s);
      })),
        (o = !1));
    }
  return r && Ao in a ? Vu(r) : t(n.source);
}
function Uu() {
  const r = {};
  function e() {
    ln(() => {
      for (var a in r) r[a].unsubscribe();
      Nr(r, Ao, { enumerable: !1, value: !0 });
    });
  }
  return [r, e];
}
function Hu(r) {
  var e = yn;
  try {
    return ((yn = !1), [r(), yn]);
  } finally {
    yn = e;
  }
}
const Ku = {
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
    Ku,
  );
}
const Gu = {
  get(r, e) {
    let a = r.props.length;
    for (; a--; ) {
      let n = r.props[a];
      if ((ga(n) && (n = n()), typeof n == "object" && n !== null && e in n))
        return n[e];
    }
  },
  set(r, e, a) {
    let n = r.props.length;
    for (; n--; ) {
      let o = r.props[n];
      ga(o) && (o = o());
      const s = _r(o, e);
      if (s && s.set) return (s.set(a), !0);
    }
    return !1;
  },
  getOwnPropertyDescriptor(r, e) {
    let a = r.props.length;
    for (; a--; ) {
      let n = r.props[a];
      if ((ga(n) && (n = n()), typeof n == "object" && n !== null && e in n)) {
        const o = _r(n, e);
        return (o && !o.configurable && (o.configurable = !0), o);
      }
    }
  },
  has(r, e) {
    if (e === Dr || e === Ls) return !1;
    for (let a of r.props)
      if ((ga(a) && (a = a()), a != null && e in a)) return !0;
    return !1;
  },
  ownKeys(r) {
    const e = [];
    for (let a of r.props)
      if ((ga(a) && (a = a()), !!a)) {
        for (const n in a) e.includes(n) || e.push(n);
        for (const n of Object.getOwnPropertySymbols(a))
          e.includes(n) || e.push(n);
      }
    return e;
  },
};
function Ei(...r) {
  return new Proxy({ props: r }, Gu);
}
function F(r, e, a, n) {
  var o = !nn || (a & fl) !== 0,
    s = (a & gl) !== 0,
    i = (a & pl) !== 0,
    l = n,
    u = !0,
    f = () => (u && ((u = !1), (l = i ? ta(n) : n)), l),
    _;
  if (s) {
    var C = Dr in r || Ls in r;
    _ = _r(r, e)?.set ?? (C && e in r ? (c) => (r[e] = c) : void 0);
  }
  var b,
    x = !1;
  (s ? ([b, x] = Hu(() => r[e])) : (b = r[e]),
    b === void 0 && n !== void 0 && ((b = f()), _ && (o && rl(e), _(b))));
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
    o && (a & vl) === 0)
  )
    return y;
  if (_) {
    var k = r.$$legacy;
    return function (c, m) {
      return arguments.length > 0
        ? ((!o || !m || k || x) && _(m ? y() : c), c)
        : y();
    };
  }
  var g = !1,
    d = ((a & dl) !== 0 ? Dn : Bo)(() => ((g = !1), y()));
  (ye && (d.label = e), s && t(d));
  var h = Ve;
  return function (c, m) {
    if (arguments.length > 0) {
      const E = m ? t(d) : o && s ? et(c) : c;
      return (A(d, E), (g = !0), l !== void 0 && (l = E), c);
    }
    return (ea && g) || (h.f & xr) !== 0 ? d.v : t(d);
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
  var qv = r;
  (r("$state"),
    r("$effect"),
    r("$derived"),
    r("$inspect"),
    r("$props"),
    r("$bindable"));
}
const Wu = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set()).add(Wu);
const Zu = {
    app: {
      version: "v1.1.8",
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
  Yu = {
    app: {
      version: "v1.1.8",
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
  Xu = {
    app: {
      version: "v1.1.8",
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
  za = { en: Zu, ru: Yu, es: Xu },
  Ne = {
    xs: "[font-size:var(--text-xs)]",
    sm: "[font-size:var(--text-sm)]",
    md: "[font-size:var(--text-md)]",
    lg: "[font-size:var(--text-lg)]",
    xl: "[font-size:var(--text-xl)]",
  },
  fn = (r = "") => {
    const e = Date.now().toString(36),
      a = Math.random().toString(36).slice(2);
    return `${r}${e}_${a}`;
  };
function j(...r) {
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
function ba(r, e, a) {
  return Math.min(a, Math.max(e, r));
}
function Fo(r, e) {
  return Array.from({ length: r }, (a, n) => e(n));
}
function Ju(r, e) {
  let a;
  return (...n) => {
    (clearTimeout(a), (a = setTimeout(() => r(...n), e)));
  };
}
function Qu(r, e) {
  let a;
  return (...n) => {
    a || (r(...n), (a = !0), setTimeout(() => (a = !1), e));
  };
}
const $u = typeof window < "u" && !!window.localStorage,
  ho = () => ($u ? window.localStorage : null),
  ps = {
    get: (r, e) => {
      const a = ho();
      if (!a) return e;
      try {
        const n = a.getItem(r);
        return n ? JSON.parse(n) : e;
      } catch {
        return e;
      }
    },
    set: (r, e) => {
      const a = ho();
      if (a)
        try {
          a.setItem(r, JSON.stringify(e));
        } catch (n) {
          console.warn("Storage set failed:", n);
        }
    },
    remove: (r) => {
      const e = ho();
      if (e)
        try {
          e.removeItem(r);
        } catch (a) {
          console.warn("Storage remove failed:", a);
        }
    },
  },
  hs = {
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
  ec = (r, e) => ({ ...hs[r], message: e || hs[r].message });
function tc(r) {
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
const rc = (r, e = "en-US", a) => {
    const n = tc(r);
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
var ac = R(
    '<section><h3><button type="button" class="flex w-full items-center justify-between gap-3 p-2 text-left font-medium text-[var(--color-text-default)] bg-transparent transition-colors hover:bg-[var(--color-bg-hover)] active:bg-[var(--color-bg-active)] focus:outline-none focus:ring-2 focus:ring-[var(--border-color-focus)] focus:ring-inset"><span> </span> <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.135l3.71-3.904a.75.75 0 111.08 1.04l-4.24 4.46a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button></h3> <div><div class="min-h-0"><div> </div></div></div></section>',
  ),
  nc = R("<div></div>");
function oc(r, e) {
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
    _ = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-[18px] h-[18px]",
      xl: "w-5 h-5",
    },
    C = v(() => j(l, u[s()], i())),
    b = v(() => _[s()]),
    x = v(() => j(f[s()], Ne[s()]));
  let y = v(o);
  const k = (h) => t(y).includes(h),
    g = (h) => {
      const c = k(h);
      (A(
        y,
        n() ? (c ? t(y).filter((m) => m !== h) : [...t(y), h]) : c ? [] : [h],
      ),
        e.onToggle?.(h, !c));
    };
  var d = nc();
  (nt(
    d,
    23,
    a,
    (h, c) => h.id ?? c,
    (h, c, m) => {
      var E = ac();
      let S;
      var z = p(E),
        T = p(z);
      T.__click = () => g(t(m));
      var M = p(T),
        q = p(M),
        U = D(M, 2);
      let se;
      var ce = D(z, 2);
      let ge;
      var be = p(ce),
        $ = p(be),
        ae = p($);
      (O(
        (K, B, X, Y, H) => {
          ((S = V(
            E,
            1,
            "group border-b border-[var(--border-color-default)] last:border-b-0 overflow-hidden",
            null,
            S,
            {
              "first-of-type:rounded-t": a().length > 1,
              "last-of-type:rounded-b": a().length > 1,
            },
          )),
            he(T, "aria-expanded", K),
            J(q, t(c).title),
            (se = V(U, 0, B, null, se, X)),
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
          () => k(t(m)),
          () =>
            G(
              j(
                "shrink-0 transition-transform duration-200 text-[var(--color-text-muted)]",
                t(b),
              ),
            ),
          () => ({ "rotate-180": k(t(m)) }),
          () => ({ "grid-rows-[1fr]": k(t(m)), "grid-rows-[0fr]": !k(t(m)) }),
          () => G(j("leading-relaxed text-[var(--color-text-default)]", t(x))),
        ],
      ),
        w(h, E));
    },
  ),
    O(() => V(d, 1, G(t(C)))),
    w(r, d),
    je());
}
ct(["click"]);
var sc = R('<span aria-hidden="true"></span>'),
  ic = R("<button><span><!></span> <!></button>");
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
    _ = {
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
    C = v(() => j(u, f[a()], Ne[a()], _[n()], i())),
    b = v(() => (s() ? "loading" : e.disabled ? "disabled" : "idle"));
  function x(m) {
    if (e.disabled || s()) {
      m.preventDefault();
      return;
    }
    if (o() === "submit" || o() === "reset") {
      e.onClick?.(m);
      return;
    }
    (e.onClick?.(m),
      !(!e.link || m.defaultPrevented) &&
        (m.button !== 0 ||
          m.metaKey ||
          m.ctrlKey ||
          m.shiftKey ||
          m.altKey ||
          y()));
  }
  function y() {
    if (!e.link || typeof window > "u") return;
    const m = l;
    (typeof m.target == "string" ? m.target : void 0) === "_blank"
      ? window.open(e.link, "_blank", "noopener,noreferrer")
      : window.location.assign(e.link);
  }
  var k = ic();
  bt(k, () => ({
    type: o(),
    disabled: e.disabled,
    "data-state": t(b),
    "aria-disabled": e.disabled || s() || void 0,
    "aria-busy": s() || void 0,
    onclick: x,
    class: t(C),
    ...l,
  }));
  var g = p(k),
    d = p(g);
  Je(d, () => e.children ?? Q);
  var h = D(g, 2);
  {
    var c = (m) => {
      var E = sc();
      (O(
        (S) => V(E, 1, S),
        [
          () =>
            G(
              j(
                "absolute inset-0 m-auto w-[1em] h-[1em] border-2 [border-color:var(--color-spinner,currentColor)] border-r-transparent rounded-full motion-safe:[animation:spin_0.6s_linear_infinite]",
              ),
            ),
        ],
      ),
        w(m, E));
    };
    Z(h, (m) => {
      s() && m(c);
    });
  }
  (O((m) => V(g, 1, m), [() => G(j({ "opacity-0 pointer-events-none": s() }))]),
    w(r, k),
    je());
}
var lc = R("<div><!></div>"),
  uc = R("<div><!></div>"),
  cc = R("<div><!> <div><!></div> <!></div>");
function vn(r, e) {
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
    l = v(() =>
      j(
        "bg-[var(--color-bg-surface)] border border-[var(--border-color-default)] rounded-xl shadow-sm overflow-hidden",
        Ne[n()],
        "flex flex-col",
        a(),
      ),
    ),
    u = v(() =>
      o() ? "" : j("border-b border-[var(--border-color-default)]", i[n()]),
    ),
    f = v(() => j(i[n()], "flex-1 min-h-0")),
    _ = v(() =>
      s() ? "" : j("border-t border-[var(--border-color-default)]", i[n()]),
    );
  var C = cc(),
    b = p(C);
  {
    var x = (h) => {
      var c = lc(),
        m = p(c);
      (Je(m, () => e.header ?? Q), O(() => V(c, 1, G(t(u)))), w(h, c));
    };
    Z(b, (h) => {
      e.header && h(x);
    });
  }
  var y = D(b, 2),
    k = p(y);
  Je(k, () => e.children ?? Q);
  var g = D(y, 2);
  {
    var d = (h) => {
      var c = uc(),
        m = p(c);
      (Je(m, () => e.footer ?? Q), O(() => V(c, 1, G(t(_)))), w(h, c));
    };
    Z(g, (h) => {
      e.footer && h(d);
    });
  }
  (O(() => {
    (V(C, 1, G(t(l))), V(y, 1, G(t(f))));
  }),
    w(r, C),
    je());
}
var dc = R("<img/>"),
  fc = R('<h3 class="font-semibold [color:var(--color-text-default)]"> </h3>'),
  vc = R('<p class="[color:var(--color-text-muted)]"> </p>'),
  gc = R("<div><!> <!> <!></div>"),
  pc = R("<div><!></div>"),
  hc = R(
    '<div class="flex items-center justify-center h-full [color:var(--color-text-muted)]">No items to display</div>',
  ),
  bc = R(
    '<button type="button" aria-label="Previous slide"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 12L6 8L10 4"></path></svg></button> <button type="button" aria-label="Next slide"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4L10 8L6 12"></path></svg></button>',
    1,
  ),
  mc = R('<button type="button"></button>'),
  _c = R('<div class="flex justify-center gap-2 p-4"></div>'),
  xc = R('<div><div class="relative"><div><!> <!></div> <!></div> <!></div>');
function wc(r, e) {
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
    _ = fe(0),
    C = fe(null);
  const b = v(() => a().length > 0),
    x =
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
    g = {
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
    h = v(() => j(x, y[n()], u())),
    c = {
      xs: "min-h-[200px]",
      sm: "min-h-[240px]",
      md: "min-h-[300px]",
      lg: "min-h-[360px]",
      xl: "min-h-[420px]",
    },
    m = v(() => j("relative w-full", c[n()])),
    E = v(() => j("flex flex-col", k[n()])),
    S = {
      xs: "max-h-28",
      sm: "max-h-32",
      md: "max-h-40",
      lg: "max-h-48",
      xl: "max-h-56",
    },
    z = v(() => j("w-full object-cover", S[n()])),
    T = v(() =>
      j(
        g[n()],
        "rounded-full bg-[var(--color-bg-surface)] shadow-lg flex items-center justify-center [color:var(--color-text-default)] hover:bg-[var(--color-bg-hover)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus:outline-none",
      ),
    ),
    M = v(() =>
      j(
        d[n()],
        "rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus:outline-none",
      ),
    );
  Ke(() => {
    t(b)
      ? t(_) >= a().length
        ? A(_, a().length - 1)
        : t(_) < 0 && A(_, 0)
      : A(_, 0);
  });
  const q = () => {
      t(b) && A(_, (t(_) + 1) % a().length);
    },
    U = () => {
      t(b) && A(_, (t(_) - 1 + a().length) % a().length);
    },
    se = (I) => {
      I >= 0 && I < a().length && A(_, I, !0);
    };
  Ke(
    () => (
      o() && t(b) && a().length > 1 && A(C, setInterval(q, s()), !0),
      () => {
        t(C) && (clearInterval(t(C)), A(C, null));
      }
    ),
  );
  let ce = 0,
    ge = 0;
  function be(I) {
    ce = I.touches[0].clientX;
  }
  function $(I) {
    ge = I.changedTouches[0].clientX;
    const P = ce - ge;
    Math.abs(P) <= 50 || (P > 0 ? q() : U());
  }
  var ae = xc();
  bt(ae, () => ({
    "aria-label": "Carousel",
    class: t(h),
    ontouchstart: be,
    ontouchend: $,
    ...f,
  }));
  var K = p(ae),
    B = p(K),
    X = p(B);
  nt(
    X,
    19,
    a,
    (I, P) => I.id ?? P,
    (I, P, te) => {
      var N = pc();
      const ne = (Fe) => {
        var Ce = Le(),
          Ee = Se(Ce);
        {
          var de = (Ae) => {
            var L = dc();
            (O(() => {
              (he(L, "src", t(P).image),
                he(L, "alt", t(P).title || `Slide ${t(te) + 1}`),
                V(L, 1, G(t(z))));
            }),
              w(Ae, L));
          };
          Z(Ee, (Ae) => {
            t(P).image && Ae(de);
          });
        }
        w(Fe, Ce);
      };
      let ue;
      var oe = p(N);
      (vn(oe, {
        get sz() {
          return n();
        },
        get header() {
          return ne;
        },
        flushHeader: !0,
        class: "h-auto flex flex-col",
        children: (Fe, Ce) => {
          var Ee = gc(),
            de = p(Ee);
          {
            var Ae = (me) => {
              var ke = fc(),
                xe = p(ke);
              (O(() => J(xe, t(P).title)), w(me, ke));
            };
            Z(de, (me) => {
              t(P).title && me(Ae);
            });
          }
          var L = D(de, 2);
          {
            var re = (me) => {
              var ke = vc(),
                xe = p(ke);
              (O(() => J(xe, t(P).content)), w(me, ke));
            };
            Z(L, (me) => {
              t(P).content && me(re);
            });
          }
          var le = D(L, 2);
          (Je(le, () => t(P).children ?? Q),
            O(
              (me) => V(Ee, 1, me),
              [() => G(j(t(E), "flex-1 overflow-auto min-h-0"))],
            ),
            w(Fe, Ee));
        },
        $$slots: { default: !0 },
      }),
        O(
          () =>
            (ue = V(
              N,
              1,
              "transition-opacity duration-300 ease-in-out",
              null,
              ue,
              {
                "opacity-100": t(te) === t(_),
                "opacity-0": t(te) !== t(_),
                block: t(te) === t(_),
                hidden: t(te) !== t(_),
              },
            )),
        ),
        w(I, N));
    },
  );
  var Y = D(X, 2);
  {
    var H = (I) => {
      var P = hc();
      w(I, P);
    };
    Z(Y, (I) => {
      t(b) || I(H);
    });
  }
  var ee = D(B, 2);
  {
    var pe = (I) => {
      var P = bc(),
        te = Se(P);
      te.__click = U;
      var N = D(te, 2);
      ((N.__click = q),
        O(
          (ne, ue) => {
            (V(te, 1, ne), V(N, 1, ue));
          },
          [
            () => G(j("absolute left-2 top-1/2 -translate-y-1/2", t(T))),
            () => G(j("absolute right-2 top-1/2 -translate-y-1/2", t(T))),
          ],
        ),
        w(I, P));
    };
    Z(ee, (I) => {
      l() && t(b) && a().length > 1 && I(pe);
    });
  }
  var _e = D(K, 2);
  {
    var ve = (I) => {
      var P = _c();
      (nt(
        P,
        23,
        a,
        (te, N) => te.id ?? N,
        (te, N, ne) => {
          var ue = mc();
          ue.__click = () => se(t(ne));
          let oe;
          (O(() => {
            ((oe = V(ue, 1, G(t(M)), null, oe, {
              "bg-[var(--color-bg-primary)]": t(ne) === t(_),
              "bg-[var(--color-bg-secondary)]": t(ne) !== t(_),
              "hover:bg-[var(--color-bg-primary)]": t(ne) !== t(_),
            })),
              he(
                ue,
                "aria-label",
                `Go to slide ${t(N).title ?? `#${t(ne) + 1}`}`,
              ),
              he(ue, "aria-current", t(ne) === t(_) ? "true" : void 0));
          }),
            w(te, ue));
        },
      ),
        w(I, P));
    };
    Z(_e, (I) => {
      i() && t(b) && a().length > 1 && I(ve);
    });
  }
  (O(() => V(B, 1, G(t(m)))), w(r, ae), je());
}
ct(["click"]);
var yc = Wt(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round"><line x1="4" y1="12" x2="20" y2="12"></line></svg>',
  ),
  kc = Wt(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  ),
  Cc = R("<span> </span>"),
  Sc = R('<label><input/> <span aria-hidden="true"><!></span> <!></label>');
function an(r, e) {
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
  const f = v(() => e.id ?? fn("chk-")),
    _ = {
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
    b = v(() =>
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
    x =
      "rounded-[var(--radius-sm)] border border-solid cursor-pointer transition-all duration-[var(--transition-fast)] ease-[var(--timing-default)] flex items-center justify-center",
    y =
      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--border-color-focus)] peer-focus-visible:border-[var(--border-color-focus)]",
    k = v(() => (o() ? "mixed" : s() ? "checked" : "unchecked")),
    g = v(() =>
      n() === "neutral"
        ? t(k) === "checked" || t(k) === "mixed"
          ? "var(--border-color-strong)"
          : "var(--border-color-default)"
        : "white",
    ),
    d = v(() =>
      j("inline-flex items-center cursor-pointer select-none", C[a()], i()),
    ),
    h = v(() =>
      j(
        x,
        y,
        _[a()],
        t(k) === "checked" && t(b).checked,
        t(k) === "mixed" && t(b).mixed,
        t(k) === "unchecked" && t(b).unchecked,
        "peer-disabled:opacity-[var(--opacity-disabled)] peer-disabled:cursor-not-allowed",
      ),
    ),
    c = v(() =>
      j(
        Ne[a()],
        "[color:var(--color-text-muted)] font-medium peer-disabled:cursor-not-allowed",
      ),
    );
  function m(ge) {
    o() && (ge.preventDefault(), s(!0), o(!1), e.onChange?.(!0));
  }
  var E = Sc(),
    S = p(E),
    z = () => {
      (o() && o(!1), e.onChange?.(s()));
    };
  bt(
    S,
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
  var T = D(S, 2);
  T.__click = m;
  var M = p(T);
  {
    var q = (ge) => {
        var be = yc();
        (O(() => he(be, "stroke", t(g))), w(ge, be));
      },
      U = (ge) => {
        var be = Le(),
          $ = Se(be);
        {
          var ae = (K) => {
            var B = kc();
            (O(() => he(B, "stroke", t(g))), w(K, B));
          };
          Z(
            $,
            (K) => {
              s() && K(ae);
            },
            !0,
          );
        }
        w(ge, be);
      };
    Z(M, (ge) => {
      o() ? ge(q) : ge(U, !1);
    });
  }
  var se = D(T, 2);
  {
    var ce = (ge) => {
      var be = Cc(),
        $ = p(be);
      (O(() => {
        (V(be, 1, G(t(c))), J($, e.label));
      }),
        w(ge, be));
    };
    Z(se, (ge) => {
      e.label && ge(ce);
    });
  }
  (O(() => {
    (V(E, 1, G(t(d))),
      he(E, "for", t(f)),
      he(T, "data-state", t(k)),
      V(T, 1, G(t(h))));
  }),
    Bu(S, s),
    w(r, E),
    je());
}
ct(["click"]);
var bs =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  bo = { exports: {} },
  ms;
function Pc() {
  return (
    ms ||
      ((ms = 1),
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
                encode: function h(c) {
                  return c instanceof u
                    ? new u(c.type, h(c.content), c.alias)
                    : Array.isArray(c)
                      ? c.map(h)
                      : c
                          .replace(/&/g, "&amp;")
                          .replace(/</g, "&lt;")
                          .replace(/\u00a0/g, " ");
                },
                type: function (h) {
                  return Object.prototype.toString.call(h).slice(8, -1);
                },
                objId: function (h) {
                  return (
                    h.__id || Object.defineProperty(h, "__id", { value: ++s }),
                    h.__id
                  );
                },
                clone: function h(c, m) {
                  m = m || {};
                  var E, S;
                  switch (l.util.type(c)) {
                    case "Object":
                      if (((S = l.util.objId(c)), m[S])) return m[S];
                      ((E = {}), (m[S] = E));
                      for (var z in c)
                        c.hasOwnProperty(z) && (E[z] = h(c[z], m));
                      return E;
                    case "Array":
                      return (
                        (S = l.util.objId(c)),
                        m[S]
                          ? m[S]
                          : ((E = []),
                            (m[S] = E),
                            c.forEach(function (T, M) {
                              E[M] = h(T, m);
                            }),
                            E)
                      );
                    default:
                      return c;
                  }
                },
                getLanguage: function (h) {
                  for (; h; ) {
                    var c = o.exec(h.className);
                    if (c) return c[1].toLowerCase();
                    h = h.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (h, c) {
                  ((h.className = h.className.replace(RegExp(o, "gi"), "")),
                    h.classList.add("language-" + c));
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
                  } catch (E) {
                    var h = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                      E.stack,
                    ) || [])[1];
                    if (h) {
                      var c = document.getElementsByTagName("script");
                      for (var m in c) if (c[m].src == h) return c[m];
                    }
                    return null;
                  }
                },
                isActive: function (h, c, m) {
                  for (var E = "no-" + c; h; ) {
                    var S = h.classList;
                    if (S.contains(c)) return !0;
                    if (S.contains(E)) return !1;
                    h = h.parentElement;
                  }
                  return !!m;
                },
              },
              languages: {
                plain: i,
                plaintext: i,
                text: i,
                txt: i,
                extend: function (h, c) {
                  var m = l.util.clone(l.languages[h]);
                  for (var E in c) m[E] = c[E];
                  return m;
                },
                insertBefore: function (h, c, m, E) {
                  E = E || l.languages;
                  var S = E[h],
                    z = {};
                  for (var T in S)
                    if (S.hasOwnProperty(T)) {
                      if (T == c)
                        for (var M in m) m.hasOwnProperty(M) && (z[M] = m[M]);
                      m.hasOwnProperty(T) || (z[T] = S[T]);
                    }
                  var q = E[h];
                  return (
                    (E[h] = z),
                    l.languages.DFS(l.languages, function (U, se) {
                      se === q && U != h && (this[U] = z);
                    }),
                    z
                  );
                },
                DFS: function h(c, m, E, S) {
                  S = S || {};
                  var z = l.util.objId;
                  for (var T in c)
                    if (c.hasOwnProperty(T)) {
                      m.call(c, T, c[T], E || T);
                      var M = c[T],
                        q = l.util.type(M);
                      q === "Object" && !S[z(M)]
                        ? ((S[z(M)] = !0), h(M, m, null, S))
                        : q === "Array" &&
                          !S[z(M)] &&
                          ((S[z(M)] = !0), h(M, m, T, S));
                    }
                },
              },
              plugins: {},
              highlightAll: function (h, c) {
                l.highlightAllUnder(document, h, c);
              },
              highlightAllUnder: function (h, c, m) {
                var E = {
                  callback: m,
                  container: h,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                (l.hooks.run("before-highlightall", E),
                  (E.elements = Array.prototype.slice.apply(
                    E.container.querySelectorAll(E.selector),
                  )),
                  l.hooks.run("before-all-elements-highlight", E));
                for (var S = 0, z; (z = E.elements[S++]); )
                  l.highlightElement(z, c === !0, E.callback);
              },
              highlightElement: function (h, c, m) {
                var E = l.util.getLanguage(h),
                  S = l.languages[E];
                l.util.setLanguage(h, E);
                var z = h.parentElement;
                z &&
                  z.nodeName.toLowerCase() === "pre" &&
                  l.util.setLanguage(z, E);
                var T = h.textContent,
                  M = { element: h, language: E, grammar: S, code: T };
                function q(se) {
                  ((M.highlightedCode = se),
                    l.hooks.run("before-insert", M),
                    (M.element.innerHTML = M.highlightedCode),
                    l.hooks.run("after-highlight", M),
                    l.hooks.run("complete", M),
                    m && m.call(M.element));
                }
                if (
                  (l.hooks.run("before-sanity-check", M),
                  (z = M.element.parentElement),
                  z &&
                    z.nodeName.toLowerCase() === "pre" &&
                    !z.hasAttribute("tabindex") &&
                    z.setAttribute("tabindex", "0"),
                  !M.code)
                ) {
                  (l.hooks.run("complete", M), m && m.call(M.element));
                  return;
                }
                if ((l.hooks.run("before-highlight", M), !M.grammar)) {
                  q(l.util.encode(M.code));
                  return;
                }
                if (c && n.Worker) {
                  var U = new Worker(l.filename);
                  ((U.onmessage = function (se) {
                    q(se.data);
                  }),
                    U.postMessage(
                      JSON.stringify({
                        language: M.language,
                        code: M.code,
                        immediateClose: !0,
                      }),
                    ));
                } else q(l.highlight(M.code, M.grammar, M.language));
              },
              highlight: function (h, c, m) {
                var E = { code: h, grammar: c, language: m };
                if ((l.hooks.run("before-tokenize", E), !E.grammar))
                  throw new Error(
                    'The language "' + E.language + '" has no grammar.',
                  );
                return (
                  (E.tokens = l.tokenize(E.code, E.grammar)),
                  l.hooks.run("after-tokenize", E),
                  u.stringify(l.util.encode(E.tokens), E.language)
                );
              },
              tokenize: function (h, c) {
                var m = c.rest;
                if (m) {
                  for (var E in m) c[E] = m[E];
                  delete c.rest;
                }
                var S = new C();
                return (b(S, S.head, h), _(h, S, c, S.head, 0), y(S));
              },
              hooks: {
                all: {},
                add: function (h, c) {
                  var m = l.hooks.all;
                  ((m[h] = m[h] || []), m[h].push(c));
                },
                run: function (h, c) {
                  var m = l.hooks.all[h];
                  if (!(!m || !m.length))
                    for (var E = 0, S; (S = m[E++]); ) S(c);
                },
              },
              Token: u,
            };
          n.Prism = l;
          function u(h, c, m, E) {
            ((this.type = h),
              (this.content = c),
              (this.alias = m),
              (this.length = (E || "").length | 0));
          }
          u.stringify = function h(c, m) {
            if (typeof c == "string") return c;
            if (Array.isArray(c)) {
              var E = "";
              return (
                c.forEach(function (q) {
                  E += h(q, m);
                }),
                E
              );
            }
            var S = {
                type: c.type,
                content: h(c.content, m),
                tag: "span",
                classes: ["token", c.type],
                attributes: {},
                language: m,
              },
              z = c.alias;
            (z &&
              (Array.isArray(z)
                ? Array.prototype.push.apply(S.classes, z)
                : S.classes.push(z)),
              l.hooks.run("wrap", S));
            var T = "";
            for (var M in S.attributes)
              T +=
                " " +
                M +
                '="' +
                (S.attributes[M] || "").replace(/"/g, "&quot;") +
                '"';
            return (
              "<" +
              S.tag +
              ' class="' +
              S.classes.join(" ") +
              '"' +
              T +
              ">" +
              S.content +
              "</" +
              S.tag +
              ">"
            );
          };
          function f(h, c, m, E) {
            h.lastIndex = c;
            var S = h.exec(m);
            if (S && E && S[1]) {
              var z = S[1].length;
              ((S.index += z), (S[0] = S[0].slice(z)));
            }
            return S;
          }
          function _(h, c, m, E, S, z) {
            for (var T in m)
              if (!(!m.hasOwnProperty(T) || !m[T])) {
                var M = m[T];
                M = Array.isArray(M) ? M : [M];
                for (var q = 0; q < M.length; ++q) {
                  if (z && z.cause == T + "," + q) return;
                  var U = M[q],
                    se = U.inside,
                    ce = !!U.lookbehind,
                    ge = !!U.greedy,
                    be = U.alias;
                  if (ge && !U.pattern.global) {
                    var $ = U.pattern.toString().match(/[imsuy]*$/)[0];
                    U.pattern = RegExp(U.pattern.source, $ + "g");
                  }
                  for (
                    var ae = U.pattern || U, K = E.next, B = S;
                    K !== c.tail && !(z && B >= z.reach);
                    B += K.value.length, K = K.next
                  ) {
                    var X = K.value;
                    if (c.length > h.length) return;
                    if (!(X instanceof u)) {
                      var Y = 1,
                        H;
                      if (ge) {
                        if (((H = f(ae, B, h, ce)), !H || H.index >= h.length))
                          break;
                        var ve = H.index,
                          ee = H.index + H[0].length,
                          pe = B;
                        for (pe += K.value.length; ve >= pe; )
                          ((K = K.next), (pe += K.value.length));
                        if (
                          ((pe -= K.value.length),
                          (B = pe),
                          K.value instanceof u)
                        )
                          continue;
                        for (
                          var _e = K;
                          _e !== c.tail &&
                          (pe < ee || typeof _e.value == "string");
                          _e = _e.next
                        )
                          (Y++, (pe += _e.value.length));
                        (Y--, (X = h.slice(B, pe)), (H.index -= B));
                      } else if (((H = f(ae, 0, X, ce)), !H)) continue;
                      var ve = H.index,
                        I = H[0],
                        P = X.slice(0, ve),
                        te = X.slice(ve + I.length),
                        N = B + X.length;
                      z && N > z.reach && (z.reach = N);
                      var ne = K.prev;
                      (P && ((ne = b(c, ne, P)), (B += P.length)), x(c, ne, Y));
                      var ue = new u(T, se ? l.tokenize(I, se) : I, be, I);
                      if (((K = b(c, ne, ue)), te && b(c, K, te), Y > 1)) {
                        var oe = { cause: T + "," + q, reach: N };
                        (_(h, c, m, K.prev, B, oe),
                          z && oe.reach > z.reach && (z.reach = oe.reach));
                      }
                    }
                  }
                }
              }
          }
          function C() {
            var h = { value: null, prev: null, next: null },
              c = { value: null, prev: h, next: null };
            ((h.next = c), (this.head = h), (this.tail = c), (this.length = 0));
          }
          function b(h, c, m) {
            var E = c.next,
              S = { value: m, prev: c, next: E };
            return ((c.next = S), (E.prev = S), h.length++, S);
          }
          function x(h, c, m) {
            for (var E = c.next, S = 0; S < m && E !== h.tail; S++) E = E.next;
            ((c.next = E), (E.prev = c), (h.length -= S));
          }
          function y(h) {
            for (var c = [], m = h.head.next; m !== h.tail; )
              (c.push(m.value), (m = m.next));
            return c;
          }
          if (!n.document)
            return (
              n.addEventListener &&
                (l.disableWorkerMessageHandler ||
                  n.addEventListener(
                    "message",
                    function (h) {
                      var c = JSON.parse(h.data),
                        m = c.language,
                        E = c.code,
                        S = c.immediateClose;
                      (n.postMessage(l.highlight(E, l.languages[m], m)),
                        S && n.close());
                    },
                    !1,
                  )),
              l
            );
          var k = l.util.currentScript();
          k &&
            ((l.filename = k.src),
            k.hasAttribute("data-manual") && (l.manual = !0));
          function g() {
            l.manual || l.highlightAll();
          }
          if (!l.manual) {
            var d = document.readyState;
            d === "loading" || (d === "interactive" && k && k.defer)
              ? document.addEventListener("DOMContentLoaded", g)
              : window.requestAnimationFrame
                ? window.requestAnimationFrame(g)
                : window.setTimeout(g, 16);
          }
          return l;
        })(e);
        (r.exports && (r.exports = a),
          typeof bs < "u" && (bs.Prism = a),
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
              o = function (k, g) {
                return "✖ Error " + k + " while fetching file: " + g;
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
              _ = "failed",
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
            function b(k, g, d) {
              var h = new XMLHttpRequest();
              (h.open("GET", k, !0),
                (h.onreadystatechange = function () {
                  h.readyState == 4 &&
                    (h.status < 400 && h.responseText
                      ? g(h.responseText)
                      : h.status >= 400
                        ? d(o(h.status, h.statusText))
                        : d(s));
                }),
                h.send(null));
            }
            function x(k) {
              var g = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(k || "");
              if (g) {
                var d = Number(g[1]),
                  h = g[2],
                  c = g[3];
                return h ? (c ? [d, Number(c)] : [d, void 0]) : [d, d];
              }
            }
            (a.hooks.add("before-highlightall", function (k) {
              k.selector += ", " + C;
            }),
              a.hooks.add("before-sanity-check", function (k) {
                var g = k.element;
                if (g.matches(C)) {
                  ((k.code = ""), g.setAttribute(l, u));
                  var d = g.appendChild(document.createElement("CODE"));
                  d.textContent = n;
                  var h = g.getAttribute("data-src"),
                    c = k.language;
                  if (c === "none") {
                    var m = (/\.(\w+)$/.exec(h) || [, "none"])[1];
                    c = i[m] || m;
                  }
                  (a.util.setLanguage(d, c), a.util.setLanguage(g, c));
                  var E = a.plugins.autoloader;
                  (E && E.loadLanguages(c),
                    b(
                      h,
                      function (S) {
                        g.setAttribute(l, f);
                        var z = x(g.getAttribute("data-range"));
                        if (z) {
                          var T = S.split(/\r\n?|\n/g),
                            M = z[0],
                            q = z[1] == null ? T.length : z[1];
                          (M < 0 && (M += T.length),
                            (M = Math.max(0, Math.min(M - 1, T.length))),
                            q < 0 && (q += T.length),
                            (q = Math.max(0, Math.min(q, T.length))),
                            (S = T.slice(M, q).join(`
`)),
                            g.hasAttribute("data-start") ||
                              g.setAttribute("data-start", String(M + 1)));
                        }
                        ((d.textContent = S), a.highlightElement(d));
                      },
                      function (S) {
                        (g.setAttribute(l, _), (d.textContent = S));
                      },
                    ));
                }
              }),
              (a.plugins.fileHighlight = {
                highlight: function (g) {
                  for (
                    var d = (g || document).querySelectorAll(C), h = 0, c;
                    (c = d[h++]);
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
      })(bo)),
    bo.exports
  );
}
var _s = Pc();
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
var xs = {},
  ws;
function Ec() {
  return (
    ws ||
      ((ws = 1),
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
    xs
  );
}
Ec();
var zc = R("<button> </button>"),
  Ac = R("<div><div> </div> <!></div>"),
  Fc = R("<div></div>"),
  Tc = R("<div></div>"),
  Lc = R(
    '<div><!> <div><!> <div class="cv-editor relative flex-1 min-h-[180px] max-h-[480px]"><div aria-hidden="true"><!></div> <textarea spellcheck="false"></textarea></div></div></div>',
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
    _ = F(e, "class", 3, ""),
    C = fe(null),
    b = fe(null),
    x = fe(null),
    y = fe(!1),
    k = fe(0),
    g = fe(0),
    d = fe(12);
  const h = v(() =>
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
  let m = fe(20);
  function E(H) {
    return H.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function S(H, ee) {
    if (H === "") return "";
    if (ee === "txt") return E(H);
    const pe = ee === "html" ? "markup" : ee,
      _e = _s.languages[pe];
    return _s.highlight(H, _e, pe);
  }
  const z = v(() => S(a(), n()));
  function T() {
    if (!u() || !t(C)) return;
    const H = t(C).selectionStart ?? 0,
      ee = a().slice(0, H);
    A(
      k,
      ee.split(`
`).length - 1,
    );
  }
  function M(H) {
    const ee = H.currentTarget;
    (t(b) && (t(b).scrollTop = ee.scrollTop),
      t(x) &&
        ((t(x).scrollTop = ee.scrollTop),
        (t(x).scrollLeft = ee.scrollLeft),
        A(g, ee.scrollTop, !0)));
  }
  Ke(() => {
    if ((f(), !t(C))) return;
    const H = getComputedStyle(t(C)),
      ee = Number.parseFloat(H.lineHeight);
    Number.isNaN(ee) || A(m, ee, !0);
    const pe = Number.parseFloat(H.paddingTop);
    Number.isNaN(pe) || A(d, pe, !0);
  });
  async function q() {
    (await navigator.clipboard.writeText(a()),
      A(y, !0),
      setTimeout(() => A(y, !1), 1200));
  }
  var U = Lc(),
    se = p(U);
  {
    var ce = (H) => {
      var ee = Ac(),
        pe = p(ee),
        _e = p(pe),
        ve = D(pe, 2);
      {
        var I = (P) => {
          var te = zc();
          te.__click = q;
          let N;
          var ne = p(te);
          (O(
            (ue) => {
              ((N = V(te, 1, ue, "svelte-dvc4kn", N, {
                "!bg-green-600": t(y),
              })),
                J(ne, t(y) ? "Copied" : "Copy"));
            },
            [
              () =>
                G(
                  j(
                    "px-3 py-0.5 text-xs rounded bg-[var(--color-primary)] text-white hover:opacity-[var(--opacity-hover)]",
                    "transition focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus:outline-none",
                  ),
                ),
            ],
          ),
            w(P, te));
        };
        Z(ve, (P) => {
          s() && P(I);
        });
      }
      (O(
        (P) => {
          (V(ee, 1, P, "svelte-dvc4kn"), J(_e, o()));
        },
        [
          () =>
            G(
              j(
                "px-3 py-1 bg-[var(--color-bg-muted)] font-semibold uppercase flex items-center justify-between",
                Ne[f()],
              ),
            ),
        ],
      ),
        w(H, ee));
    };
    Z(se, (H) => {
      o() && H(ce);
    });
  }
  var ge = D(se, 2),
    be = p(ge);
  {
    var $ = (H) => {
      var ee = Tc();
      (nt(
        ee,
        21,
        () => t(h),
        xu,
        (pe, _e, ve) => {
          var I = Fc();
          ((I.textContent = ve + 1),
            O(() => V(I, 1, G(c[f()]), "svelte-dvc4kn")),
            w(pe, I));
        },
      ),
        ut(
          ee,
          (pe) => A(b, pe),
          () => t(b),
        ),
        O(
          (pe) => V(ee, 1, pe, "svelte-dvc4kn"),
          [
            () =>
              G(
                j(
                  "select-none px-3 py-[12px] border-r border-[var(--border-color-default)]",
                  "text-[var(--color-text-muted)] text-right overflow-hidden",
                  "cv-gutter bg-[var(--color-bg-surface)] tabular-nums min-h-[180px] max-h-[480px]",
                ),
              ),
          ],
        ),
        w(H, ee));
    };
    Z(be, (H) => {
      i() && H($);
    });
  }
  var ae = D(be, 2),
    K = p(ae);
  let B;
  var X = p(K);
  (Cu(X, () => t(z)),
    ut(
      K,
      (H) => A(x, H),
      () => t(x),
    ));
  var Y = D(K, 2);
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
      (H, ee, pe, _e) => {
        (V(U, 1, H, "svelte-dvc4kn"),
          V(ge, 1, ee, "svelte-dvc4kn"),
          (B = V(K, 1, pe, "svelte-dvc4kn", B, {
            "cv-active-line": u() && l(),
          })),
          lt(
            K,
            u() && l()
              ? `--cv-line-height: ${t(m)}px; --cv-active-line-top: ${t(d) + t(k) * t(m) - t(g)}px;`
              : void 0,
          ),
          (Y.readOnly = !l()),
          V(Y, 1, _e, "svelte-dvc4kn"));
      },
      [
        () =>
          G(
            j(
              "cv-root w-full border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]",
              "text-[var(--color-text-default)]",
              _(),
            ),
          ),
        () => G(j("cv-body flex font-mono", Ne[f()], c[f()])),
        () => G(j("cv-highlight cv-layer", Ne[f()], c[f()])),
        () => G(j("cv-input cv-layer", Ne[f()], c[f()])),
      ],
    ),
    kt("scroll", Y, M),
    kt("focus", Y, function (...H) {
      (l() ? T : void 0)?.apply(this, H);
    }),
    Nu(Y, a),
    w(r, U),
    je());
}
ct(["click", "input", "keyup", "mouseup"]);
const Mc = {
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
  Dc = {
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
  Ic = {
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
  Aa = { en: Mc, ru: Dc, es: Ic };
var Nc = R(
  '<div><div class="text-md font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <input type="color" class="invisible absolute w-px h-px" value="#000000"/> <div class="mt-3 p-4 border border-dashed border-[var(--border-color-default)] rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] flex items-center justify-between gap-3" aria-live="polite"><div><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div> <div class="w-12 h-12 rounded-[var(--radius-sm)] border border-[var(--border-color-default)] shadow-inner"></div></div></div>',
);
function Oc(r, e) {
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
    u = v(() => l?.value ?? "en"),
    f = v(() => Aa[t(u)].components.colorPicker),
    _ = v(() => e.label ?? t(f).text),
    C = v(() => e.placeholder ?? t(f).placeholder);
  let b;
  const x = "inline-block w-full",
    y = v(() => j(x, s())),
    k = v(() => !!a()),
    g = v(() => a() ?? "transparent");
  Ke(() => {
    b && (b.value = a() || "#000000");
  });
  function d() {
    n() ||
      (typeof b?.showPicker == "function"
        ? b.showPicker()
        : (b?.focus(), b?.click()));
  }
  function h(Y) {
    const ee = Y.target.value || null;
    (a(ee), e.onChange?.(ee));
  }
  function c() {
    o() && (a(null), b && (b.value = "#000000"), e.onChange?.(null));
  }
  var m = Nc();
  bt(m, () => ({ class: t(y), ...i }));
  var E = p(m),
    S = p(E),
    z = D(E, 2),
    T = p(z);
  ot(T, {
    onClick: d,
    get disabled() {
      return n();
    },
    sz: "xs",
    children: (Y, H) => {
      var ee = Re();
      (O(() => J(ee, t(f).color)), w(Y, ee));
    },
    $$slots: { default: !0 },
  });
  var M = D(T, 2);
  {
    var q = (Y) => {
      {
        let H = v(() => !t(k) || n());
        ot(Y, {
          onClick: c,
          variant: "danger",
          get disabled() {
            return t(H);
          },
          sz: "xs",
          children: (ee, pe) => {
            var _e = Re();
            (O(() => J(_e, t(f).clear)), w(ee, _e));
          },
          $$slots: { default: !0 },
        });
      }
    };
    Z(M, (Y) => {
      o() && Y(q);
    });
  }
  var U = D(z, 2);
  ((U.__change = h),
    ut(
      U,
      (Y) => (b = Y),
      () => b,
    ));
  var se = D(U, 2),
    ce = p(se),
    ge = p(ce),
    be = p(ge),
    $ = D(ge, 2),
    ae = p($);
  {
    var K = (Y) => {
        var H = Re();
        (O(() => J(H, a())), w(Y, H));
      },
      B = (Y) => {
        var H = Re();
        (O(() => J(H, t(C))), w(Y, H));
      };
    Z(ae, (Y) => {
      t(k) ? Y(K) : Y(B, !1);
    });
  }
  var X = D(ce, 2);
  (O(() => {
    (J(S, `${t(_) ?? ""}:`),
      (U.disabled = n()),
      J(be, t(f).selectedColor),
      he(X, "aria-label", t(k) ? `Preview of ${a()}` : "No color selected"),
      lt(X, `background:${t(g)}`));
  }),
    w(r, m),
    je());
}
ct(["change"]);
var Bc = R(
  '<div><div class="text-md font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <input type="date" class="invisible absolute w-px h-px"/> <div class="mt-3 p-4 bg-[var(--color-bg-surface)] text-center" aria-live="polite"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div></div>',
);
function jc(r, e) {
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
    u = v(() => l?.value ?? "en"),
    f = v(() => Aa[t(u)].components.datePicker),
    _ = v(() => e.label ?? t(f).text),
    C = v(() => e.placeholder ?? t(f).placeholder);
  let b;
  const x = "inline-block w-full",
    y = v(() => j(x, s())),
    k = v(() => !!a()),
    g = v(() => rc(a(), e.locale, e.formatOptions));
  Ke(() => {
    b && (b.value = a() ?? "");
  });
  function d() {
    n() ||
      (typeof b?.showPicker == "function"
        ? b.showPicker()
        : (b?.focus(), b?.click()));
  }
  function h(B) {
    const Y = B.target.value || null;
    (a(Y), e.onChange?.(Y));
  }
  function c() {
    o() && (a(null), b && (b.value = ""), e.onChange?.(null));
  }
  var m = Bc();
  bt(m, () => ({ class: t(y), ...i }));
  var E = p(m),
    S = p(E),
    z = D(E, 2),
    T = p(z);
  ot(T, {
    onClick: d,
    get disabled() {
      return n();
    },
    sz: "xs",
    children: (B, X) => {
      var Y = Re();
      (O(() => J(Y, t(f).date)), w(B, Y));
    },
    $$slots: { default: !0 },
  });
  var M = D(T, 2);
  {
    var q = (B) => {
      {
        let X = v(() => !t(k) || n());
        ot(B, {
          onClick: c,
          variant: "danger",
          get disabled() {
            return t(X);
          },
          sz: "xs",
          children: (Y, H) => {
            var ee = Re();
            (O(() => J(ee, t(f).clear)), w(Y, ee));
          },
          $$slots: { default: !0 },
        });
      }
    };
    Z(M, (B) => {
      o() && B(q);
    });
  }
  var U = D(z, 2);
  ((U.__change = h),
    ut(
      U,
      (B) => (b = B),
      () => b,
    ));
  var se = D(U, 2),
    ce = p(se),
    ge = p(ce),
    be = D(ce, 2),
    $ = p(be);
  {
    var ae = (B) => {
        var X = Re();
        (O(() => J(X, t(g))), w(B, X));
      },
      K = (B) => {
        var X = Re();
        (O(() => J(X, t(C))), w(B, X));
      };
    Z($, (B) => {
      t(k) ? B(ae) : B(K, !1);
    });
  }
  (O(() => {
    (J(S, `${t(_) ?? ""}:`),
      he(U, "min", e.min),
      he(U, "max", e.max),
      (U.disabled = n()),
      J(ge, t(f).selectedDate));
  }),
    w(r, m),
    je());
}
ct(["change"]);
var Rc = R("<h3> </h3> <p> </p>", 1),
  Vc = R('<div class="mt-3"><!></div>'),
  qc = R(
    '<div class="fixed inset-0 z-[var(--z-modal)] bg-oklch(0_0_0/var(--opacity-overlay)) flex items-center justify-center p-4" role="presentation" tabindex="-1"><div role="dialog" aria-modal="true"><div><!> <!></div> <div><!> <!></div></div></div>',
  ),
  Uc = R("<div><!></div>"),
  Hc = R(
    '<div class="fixed top-4 right-4 z-[var(--z-modal)]" role="dialog" aria-modal="false" tabindex="-1"><div><div><!> <!></div> <div><!> <!></div></div></div>',
  );
function To(r, e) {
  Be(e, !0);
  const a = (be) => {
    var $ = Rc(),
      ae = Se($),
      K = p(ae),
      B = D(ae, 2),
      X = p(B);
    (O(
      (Y, H) => {
        (V(ae, 1, Y), J(K, o()), V(B, 1, H), J(X, s()));
      },
      [
        () =>
          G(
            j(
              "mb-2 font-[var(--font-weight-semibold)] color-[var(--color-text-default)]",
              t(q),
            ),
          ),
        () =>
          G(
            j(
              "leading-[var(--line-height-normal)] color-[var(--color-text-muted)]",
              t(U),
            ),
          ),
      ],
    ),
      w(be, $));
  };
  let n = F(e, "open", 3, !1),
    o = F(e, "title", 3, ""),
    s = F(e, "message", 3, ""),
    i = F(e, "onConfirm", 3, () => {}),
    l = F(e, "onCancel", 3, () => {}),
    u = F(e, "onClose", 3, () => {}),
    f = F(e, "modal", 3, !0),
    _ = F(e, "class", 3, ""),
    C = F(e, "sz", 3, "md");
  const b = Gt("lang") ?? null,
    x = v(() => b?.value ?? "en"),
    y = v(() => Aa[t(x)].components.dialog);
  let k = fe(null),
    g = null;
  function d() {
    (i()(), u()());
  }
  function h() {
    (l()(), u()());
  }
  function c(be) {
    be.key === "Escape" && (be.preventDefault(), h());
  }
  const m =
      "fusion-dialog bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)] shadow-lg min-w-80 max-w-md w-full border border-[var(--border-color-default)]",
    E = {
      xs: "p-[var(--spacing-sm)]",
      sm: "p-[var(--spacing-md)]",
      md: "p-[var(--spacing-lg)]",
      lg: "p-[var(--spacing-xl)]",
      xl: "p-[var(--spacing-xl)]",
    },
    S = { xs: Ne.md, sm: Ne.md, md: Ne.xl, lg: Ne.xl, xl: "text-2xl" },
    z = v(() => j(m, _())),
    T = v(() => E[C()]),
    M = v(() => j(t(T), "pt-0")),
    q = v(() => S[C()]),
    U = v(() => Ne[C()]);
  Ke(
    () => (
      g?.(),
      n() && t(k)
        ? queueMicrotask(() => {
            (zi(t(k)), f() && (g = Ai(t(k))));
          })
        : (g = null),
      () => {
        (g?.(), (g = null));
      }
    ),
  );
  var se = Le(),
    ce = Se(se);
  {
    var ge = (be) => {
      var $ = Le(),
        ae = Se($);
      {
        var K = (X) => {
            var Y = qc();
            Y.__keydown = c;
            var H = p(Y),
              ee = p(H),
              pe = p(ee);
            a(pe);
            var _e = D(pe, 2);
            {
              var ve = (N) => {
                var ne = Vc(),
                  ue = p(ne);
                (Je(ue, () => e.children ?? Q, C), w(N, ne));
              };
              Z(_e, (N) => {
                e.children && N(ve);
              });
            }
            var I = D(ee, 2),
              P = p(I);
            ot(P, {
              get sz() {
                return C();
              },
              variant: "primary",
              onClick: d,
              children: (N, ne) => {
                var ue = Re();
                (O(() => J(ue, t(y).ok)), w(N, ue));
              },
              $$slots: { default: !0 },
            });
            var te = D(P, 2);
            (ot(te, {
              get sz() {
                return C();
              },
              variant: "secondary",
              onClick: h,
              children: (N, ne) => {
                var ue = Re();
                (O(() => J(ue, t(y).cancel)), w(N, ue));
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
                  (V(H, 1, G(t(z))),
                    he(H, "aria-label", o()),
                    V(ee, 1, G(t(T))),
                    V(I, 1, N));
                },
                [() => G(j("flex gap-2 justify-end", t(M)))],
              ),
              w(X, Y));
          },
          B = (X) => {
            var Y = Hc();
            Y.__keydown = c;
            var H = p(Y),
              ee = p(H),
              pe = p(ee);
            a(pe);
            var _e = D(pe, 2);
            {
              var ve = (N) => {
                var ne = Uc(),
                  ue = p(ne);
                (Je(ue, () => e.children ?? Q, C),
                  O((oe) => V(ne, 1, oe), [() => G(j("mt-3", t(U)))]),
                  w(N, ne));
              };
              Z(_e, (N) => {
                e.children && N(ve);
              });
            }
            var I = D(ee, 2),
              P = p(I);
            ot(P, {
              get sz() {
                return C();
              },
              variant: "primary",
              onClick: d,
              children: (N, ne) => {
                var ue = Re();
                (O(() => J(ue, t(y).ok)), w(N, ue));
              },
              $$slots: { default: !0 },
            });
            var te = D(P, 2);
            (ot(te, {
              get sz() {
                return C();
              },
              variant: "secondary",
              onClick: h,
              children: (N, ne) => {
                var ue = Re();
                (O(() => J(ue, t(y).cancel)), w(N, ue));
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
                    V(H, 1, G(t(z))),
                    V(ee, 1, G(t(T))),
                    V(I, 1, N));
                },
                [() => G(j("flex gap-2 justify-end", t(M)))],
              ),
              w(X, Y));
          };
        Z(ae, (X) => {
          f() ? X(K) : X(B, !1);
        });
      }
      w(be, $);
    };
    Z(ce, (be) => {
      n() && be(ge);
    });
  }
  (w(r, se), je());
}
ct(["keydown"]);
var Kc = R("<span> </span>"),
  Gc = R('<div aria-hidden="true"><!></div>'),
  Wc = R("<textarea></textarea>"),
  Zc = R("<input/>"),
  Yc = R('<span aria-hidden="true"><!></span>'),
  Xc = Wt(
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 3L21 21" stroke="currentColor" stroke-width="2"></path><path d="M10.5 10.677a2 2 0 002.823 2.823" stroke="currentColor" stroke-width="2"></path><path d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c2.4 3.6 6 6 9 6 1.4 0 2.8-.5 4.1-1.2" stroke="currentColor" stroke-width="2"></path><path d="M12 6c3 0 6 2.4 9 6-.6.9-1.3 1.7-2 2.5" stroke="currentColor" stroke-width="2"></path></svg>',
  ),
  Jc = Wt(
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"></path><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"></circle></svg>',
  ),
  Qc = R('<button type="button"><!></button>'),
  $c = R(
    '<button type="button" tabindex="-1" aria-label="Clear" title="Clear"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>',
  ),
  ed = R("<label><!> <div><!> <!> <div><!> <!> <!></div></div></label>");
function ma(r, e) {
  Be(e, !0);
  let a = F(e, "as", 3, "input"),
    n = F(e, "sz", 3, "md"),
    o = F(e, "variant", 3, "default"),
    s = F(e, "clearable", 3, !0),
    i = F(e, "rows", 3, 3),
    l = F(e, "parseNumber", 3, !1),
    u = F(e, "value", 15, ""),
    f = F(e, "class", 3, ""),
    _ = F(e, "invalid", 3, !1),
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
  const b =
      "w-full outline-none transition-colors duration-[var(--transition-fast)] ease-[var(--timing-default)] box-border rounded-[var(--radius-md)] border focus:border-[var(--border-color-focus)] focus:ring-2 focus:ring-[var(--border-color-focus)] disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
    x = {
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
    k = v(() => j("flex flex-col gap-1", f())),
    g = v(() =>
      a() === "textarea"
        ? j(b, y[o()], Ne.md, "px-4")
        : j(b, x[n()], Ne[n()], y[o()]),
    ),
    d = v(() =>
      j("relative flex items-stretch", a() === "textarea" && "items-start"),
    ),
    h = v(() => e.id ?? fn("fld-")),
    c = v(() => (a() === "input" ? e.type || C.type || "text" : void 0)),
    m = v(() => a() === "input" && t(c) === "number"),
    E = v(() => a() === "input" && t(c) === "password");
  let S = fe(!1);
  function z(N) {
    if (l() && t(m)) {
      if (N === "" || N === "-" || N === "." || N === "-.") return N;
      const ne = Number(N);
      return Number.isNaN(ne) ? "" : ne;
    }
    return N;
  }
  function T(N) {
    const ue = N.target.value,
      oe = z(ue);
    (u(oe), e.onChange?.(oe));
  }
  function M() {
    const N = l() && t(m) ? 0 : "";
    (u(N), e.onChange?.(N));
  }
  const q = v(() => String(u() ?? "")),
    U = v(() => s() && a() === "input" && t(q).length > 0 && !t(m)),
    se = v(() => !!e.trailing || t(U) || t(E)),
    ce = "[color:var(--color-text-muted)]";
  var ge = ed(),
    be = p(ge);
  {
    var $ = (N) => {
      var ne = Kc(),
        ue = p(ne);
      (O(
        (oe) => {
          (V(ne, 1, oe), J(ue, e.label));
        },
        [() => G(j(Ne[n()], "font-medium", ce))],
      ),
        w(N, ne));
    };
    Z(be, (N) => {
      e.label && N($);
    });
  }
  var ae = D(be, 2),
    K = p(ae);
  {
    var B = (N) => {
      const ne = v(() => typeof e.leading == "function");
      var ue = Gc(),
        oe = p(ue);
      {
        var Fe = (Ee) => {
            var de = Le(),
              Ae = Se(de);
            (Je(Ae, () => e.leading), w(Ee, de));
          },
          Ce = (Ee) => {
            var de = Re();
            (O(() => J(de, e.leading)), w(Ee, de));
          };
        Z(oe, (Ee) => {
          t(ne) ? Ee(Fe) : Ee(Ce, !1);
        });
      }
      (O(
        (Ee) => V(ue, 1, Ee),
        [
          () =>
            G(
              j(
                "absolute inset-y-0 left-2 flex items-center [color:var(--color-text-muted)]",
              ),
            ),
        ],
      ),
        w(N, ue));
    };
    Z(K, (N) => {
      e.leading && N(B);
    });
  }
  var X = D(K, 2);
  {
    var Y = (N) => {
        var ne = Wc();
        (bt(
          ne,
          (ue) => ({
            ...C,
            id: t(h),
            rows: i(),
            class: ue,
            value: t(q),
            "aria-invalid": _() || void 0,
            "aria-describedby": e.describedBy,
            oninput: T,
          }),
          [() => j(t(g), t(se) && "pr-8", e.leading && "pl-8")],
        ),
          w(N, ne));
      },
      H = (N) => {
        var ne = Zc();
        (bt(
          ne,
          (ue) => ({
            ...C,
            id: t(h),
            type: t(E) ? (t(S) ? "text" : "password") : t(c),
            inputmode: t(m) ? "decimal" : void 0,
            class: ue,
            value: t(q),
            "aria-invalid": _() || void 0,
            "aria-describedby": e.describedBy,
            oninput: T,
          }),
          [() => j(t(g), t(se) && "pr-8", e.leading && "pl-8")],
          void 0,
          void 0,
          void 0,
          !0,
        ),
          w(N, ne));
      };
    Z(X, (N) => {
      a() === "textarea" ? N(Y) : N(H, !1);
    });
  }
  var ee = D(X, 2),
    pe = p(ee);
  {
    var _e = (N) => {
      const ne = v(() => typeof e.trailing == "function");
      var ue = Yc(),
        oe = p(ue);
      {
        var Fe = (Ee) => {
            var de = Le(),
              Ae = Se(de);
            (Je(Ae, () => e.trailing), w(Ee, de));
          },
          Ce = (Ee) => {
            var de = Re();
            (O(() => J(de, e.trailing)), w(Ee, de));
          };
        Z(oe, (Ee) => {
          t(ne) ? Ee(Fe) : Ee(Ce, !1);
        });
      }
      w(N, ue);
    };
    Z(pe, (N) => {
      e.trailing && N(_e);
    });
  }
  var ve = D(pe, 2);
  {
    var I = (N) => {
      var ne = Qc();
      ((ne.__mousedown = (Ce) => Ce.preventDefault()),
        (ne.__click = () => A(S, !t(S))));
      var ue = p(ne);
      {
        var oe = (Ce) => {
            var Ee = Xc();
            w(Ce, Ee);
          },
          Fe = (Ce) => {
            var Ee = Jc();
            w(Ce, Ee);
          };
        Z(ue, (Ce) => {
          t(S) ? Ce(oe) : Ce(Fe, !1);
        });
      }
      (O(
        (Ce) => {
          (V(ne, 1, Ce),
            he(ne, "aria-label", t(S) ? "Hide password" : "Show password"));
        },
        [
          () =>
            G(
              j(
                "password-toggle [color:var(--color-text-muted)] hover:opacity-[var(--opacity-hover)]",
              ),
            ),
        ],
      ),
        w(N, ne));
    };
    Z(ve, (N) => {
      t(E) && N(I);
    });
  }
  var P = D(ve, 2);
  {
    var te = (N) => {
      var ne = $c();
      ((ne.__mousedown = (ue) => ue.preventDefault()),
        (ne.__click = M),
        O(
          (ue) => V(ne, 1, ue),
          [
            () =>
              G(
                j(
                  "[color:var(--color-text-muted)] hover:opacity-[var(--opacity-hover)]",
                ),
              ),
          ],
        ),
        w(N, ne));
    };
    Z(P, (N) => {
      t(U) && N(te);
    });
  }
  (O(
    (N) => {
      (he(ge, "for", t(h)), V(ge, 1, G(t(k))), V(ae, 1, G(t(d))), V(ee, 1, N));
    },
    [() => G(j("absolute inset-y-0 right-2 flex items-center gap-1"))],
  ),
    w(r, ge),
    je());
}
ct(["mousedown", "click"]);
var td = R('<p class="text-xs mt-1 [color:var(--color-text-muted)]"> </p>'),
  rd = R('<p class="text-sm mt-1 [color:var(--color-text-muted)]"> <!></p>'),
  ad = R(
    '<div><input type="file" class="hidden"/> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <div role="button"><p class="text-sm [color:var(--color-text-muted)]"> </p> <!></div> <div class="mt-3 p-4 bg-[var(--color-bg-surface)] text-center" aria-live="polite"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)] break-words"><!></p> <!></div></div>',
  );
function nd(r, e) {
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
    _ = v(() => Aa[f.value].components.filePicker),
    C = v(() => e.label ?? t(_).text),
    b = v(() => e.placeholder ?? t(_).placeholder);
  let x,
    y = v(i),
    k = fe(!1);
  const g = "inline-block w-full",
    d = v(() => j(g, l())),
    h = v(() => !!(t(y) && t(y).length > 0)),
    c = v(() =>
      t(y)
        ? Array.from(t(y))
            .map((oe) => oe.name)
            .join(", ")
        : "",
    );
  function m() {
    o() || x?.click();
  }
  function E(oe) {
    const Ce = oe.target.files;
    (A(y, Ce), Ce && Ce.length > 0 && e.onFilesSelected?.(Ce));
  }
  function S(oe) {
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
  function M(oe) {
    (oe.preventDefault(), A(k, !1));
  }
  function q(oe) {
    o() ||
      ((oe.key === "Enter" || oe.key === " ") && (oe.preventDefault(), m()));
  }
  function U() {
    s() && (A(y, null), x && (x.value = ""), e.onFilesSelected?.(null));
  }
  var se = ad();
  bt(se, () => ({ class: t(d), ...u }));
  var ce = p(se);
  ((ce.__change = E),
    ut(
      ce,
      (oe) => (x = oe),
      () => x,
    ));
  var ge = D(ce, 2),
    be = p(ge);
  ot(be, {
    get disabled() {
      return o();
    },
    onClick: m,
    class: "relative",
    sz: "xs",
    children: (oe, Fe) => {
      var Ce = Re();
      (O(() => J(Ce, t(C))), w(oe, Ce));
    },
    $$slots: { default: !0 },
  });
  var $ = D(be, 2);
  {
    var ae = (oe) => {
      {
        let Fe = v(() => !t(h) || o());
        ot(oe, {
          onClick: U,
          variant: "danger",
          get disabled() {
            return t(Fe);
          },
          sz: "xs",
          children: (Ce, Ee) => {
            var de = Re();
            (O(() => J(de, t(_).clear)), w(Ce, de));
          },
          $$slots: { default: !0 },
        });
      }
    };
    Z($, (oe) => {
      s() && oe(ae);
    });
  }
  var K = D(ge, 2);
  let B;
  ((K.__click = m), (K.__keydown = q));
  var X = p(K),
    Y = p(X),
    H = D(X, 2);
  {
    var ee = (oe) => {
      var Fe = td(),
        Ce = p(Fe);
      (O(() => J(Ce, `${t(_).accepted ?? ""}: ${a() ?? ""}`)), w(oe, Fe));
    };
    Z(H, (oe) => {
      a() !== "*/*" && oe(ee);
    });
  }
  var pe = D(K, 2),
    _e = p(pe),
    ve = p(_e),
    I = D(_e, 2),
    P = p(I);
  {
    var te = (oe) => {
        var Fe = Re();
        (O(() => J(Fe, t(c))), w(oe, Fe));
      },
      N = (oe) => {
        var Fe = Re();
        (O(() => J(Fe, t(b))), w(oe, Fe));
      };
    Z(P, (oe) => {
      t(h) ? oe(te) : oe(N, !1);
    });
  }
  var ne = D(I, 2);
  {
    var ue = (oe) => {
      var Fe = rd(),
        Ce = p(Fe),
        Ee = D(Ce);
      {
        var de = (Ae) => {
          var L = Re();
          (O(
            (re) => J(L, `• ${t(_).totalSize ?? ""}: ${re ?? ""} MB`),
            [
              () =>
                (
                  Array.from(t(y)).reduce((re, le) => re + le.size, 0) /
                  1024 /
                  1024
                ).toFixed(2),
            ],
          ),
            w(Ae, L));
        };
        Z(Ee, (Ae) => {
          n() && t(y).length > 1 && Ae(de);
        });
      }
      (O(
        (Ae) => J(Ce, `${Ae ?? ""} `),
        [() => t(_).fileCount.replace("{n}", String(t(y).length))],
      ),
        w(oe, Fe));
    };
    Z(ne, (oe) => {
      t(h) && t(y) && oe(ue);
    });
  }
  (O(() => {
    (he(ce, "accept", a()),
      (ce.multiple = n()),
      (B = V(
        K,
        1,
        "mt-2 p-4 border-2 border-dashed rounded-[var(--radius-md)] text-center transition-colors duration-200",
        null,
        B,
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
      J(Y, t(_).dragDrop),
      J(ve, t(_).selectedFiles));
  }),
    kt("drop", K, S),
    kt("dragover", K, z),
    kt("dragenter", K, T),
    kt("dragleave", K, M),
    w(r, se),
    je());
}
ct(["change", "click", "keydown"]);
var od = R("<label> </label>"),
  sd = R(
    '<span aria-hidden="true" class="block w-3 h-3 rounded-[var(--radius-xs)] border border-[var(--border-color-default)] shadow-sm shrink-0"></span>',
  ),
  id = R(
    '<span class="inline-flex items-center gap-2 min-w-0"><!> <span class="truncate"> </span></span>',
  ),
  ld = R('<span class="[color:var(--color-text-muted)]"> </span>'),
  ud = R(
    '<span aria-hidden="true" class="block w-3 h-3 rounded-[var(--radius-xs)] border border-[var(--border-color-default)] shadow-sm shrink-0"></span>',
  ),
  cd = R(
    '<li role="option"><button type="button" tabindex="0"><!> <span class="truncate"> </span></button></li>',
  ),
  dd = R(
    '<div role="presentation" tabindex="-1" class="fixed inset-0 z-40"></div> <ul role="listbox" tabindex="-1"></ul>',
    1,
  ),
  fd = R("<div> </div>"),
  vd = R(
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
    _ = v(() => e.id ?? f?.id ?? fn("sel-")),
    C = v(() => f?.name ?? t(_)),
    b = v(() => `${t(_)}-listbox`);
  let x = fe(null),
    y = fe(null),
    k = fe(-1),
    g = fe(et([])),
    d = fe("bottom");
  const h =
      "relative w-full outline-none appearance-none cursor-pointer transition-colors duration-[var(--transition-fast)] ease-[var(--timing-default)] box-border rounded-[var(--radius-md)] border focus:border-[var(--border-color-focus)] focus:ring-2 focus:ring-[var(--border-color-focus)] [color:var(--color-text-default)] disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
    c = {
      xs: "px-2 pr-6 h-6",
      sm: "px-3 pr-8 h-7",
      md: "px-4 pr-10 h-8",
      lg: "px-5 pr-12 h-9",
      xl: "px-6 pr-14 h-10",
    },
    m = { xs: 120, sm: 144, md: 168, lg: 192, xl: 216 },
    E = {
      default:
        "border-[var(--border-color-default)] bg-[var(--color-bg-surface)]",
      filled: "border-[var(--border-color-default)] bg-[var(--color-bg-muted)]",
      neutral:
        "border-transparent bg-transparent hover:border-[var(--border-color-default)] focus:border-[var(--border-color-focus)]",
    },
    S = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-[18px] h-[18px]",
      xl: "w-5 h-5",
    },
    z = v(() => j("flex flex-col gap-1", i())),
    T = v(() => j(h, c[n()], Ne[n()], E[o()], "text-left")),
    M = v(() => e.maxHeight ?? m[n()]),
    q = v(() =>
      j(
        "z-50 border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] rounded-[var(--radius-md)] shadow-lg overflow-auto focus:outline-none",
      ),
    ),
    U = v(() =>
      j(
        "w-full text-left px-4 py-2 transition-colors duration-[var(--transition-fast)] cursor-pointer",
        Ne[n()],
      ),
    ),
    se = "opacity-[var(--opacity-disabled)] cursor-not-allowed";
  let ce = fe(0),
    ge = fe(0),
    be = fe(0);
  const $ = v(
      () =>
        `position:fixed;top:${t(ce)}px;left:${t(ge)}px;min-width:${t(be)}px;max-height:${t(M)}px;`,
    ),
    ae = v(() => a().find((W) => W.value === s()));
  (Ke(() => {
    const W = t(y),
      we = t(x);
    if (u() && W && we) {
      const Te = () => {
        const Oe = W.getBoundingClientRect(),
          Me = window.innerHeight - Oe.bottom,
          Xe = Oe.top,
          Qe = Math.min(we.scrollHeight, t(M)),
          dt = Me < Qe && Xe > Me ? "top" : "bottom";
        (A(d, dt, !0),
          (we.dataset.position = dt),
          dt === "top"
            ? A(ce, Math.max(0, Oe.top - Qe), !0)
            : A(ce, Oe.bottom, !0),
          A(ge, Oe.left, !0),
          A(be, Oe.width, !0));
      };
      queueMicrotask(Te);
      const ze = (Oe) => {
          W && we && !W.contains(Oe.target) && !we.contains(Oe.target) && H();
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
      const W = t(x);
      !u() ||
        !W ||
        queueMicrotask(() => {
          W ? A(g, Array.from(W.querySelectorAll("button")), !0) : A(g, [], !0);
        });
    }));
  function K(W) {
    if (!t(g).length || !a().length) return;
    const we = a().length;
    let Te = W;
    for (let ze = 0; ze < we; ze++) {
      const Ie = (Te + ze) % we;
      if (!a()[Ie]?.disabled && t(g)[Ie]) {
        (t(g)[Ie].focus(), A(k, Ie));
        return;
      }
    }
  }
  function B() {
    K(0);
  }
  function X() {
    if (!(!a().length || !t(g).length)) {
      for (let W = a().length - 1; W >= 0; W--)
        if (!a()[W]?.disabled && t(g)[W]) {
          (t(g)[W].focus(), A(k, W, !0));
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
  function ee() {
    u() ? H() : Y();
  }
  function pe(W) {
    if (!u() || !a().length) return;
    const we = a().length;
    let Te = t(k);
    for (
      let ze = 0;
      ze < we && ((Te = (Te + W + we) % we), !!a()[Te].disabled);
      ze++
    );
    (A(k, Te, !0), t(g)[Te] && t(g)[Te].focus());
  }
  function _e(W) {
    const we = a()[W];
    !we || we.disabled || (s(we.value), e.onChange?.(we.value), H());
  }
  function ve(W) {
    e.disabled ||
      (W.key === " " || W.key === "Enter"
        ? (W.preventDefault(), ee())
        : W.key === "ArrowDown"
          ? (W.preventDefault(), u() || Y(), pe(1))
          : W.key === "ArrowUp"
            ? (W.preventDefault(), u() || Y(), pe(-1))
            : W.key === "Escape" && u() && (W.preventDefault(), H()));
  }
  function I(W) {
    if (u()) {
      if (W.key === "Tab") {
        const we = document.activeElement,
          Te = t(g).findIndex((Ie) => Ie === we);
        let ze = -1;
        for (let Ie = a().length - 1; Ie >= 0; Ie--)
          if (!a()[Ie]?.disabled) {
            ze = Ie;
            break;
          }
        W.shiftKey
          ? Te <= 0 && (W.preventDefault(), X())
          : Te === ze && (W.preventDefault(), B());
        return;
      }
      W.key === "ArrowDown"
        ? (W.preventDefault(), pe(1))
        : W.key === "ArrowUp"
          ? (W.preventDefault(), pe(-1))
          : W.key === "Home"
            ? (W.preventDefault(), B())
            : W.key === "End"
              ? (W.preventDefault(), X())
              : W.key === "Enter" || W.key === " "
                ? (W.preventDefault(), t(k) >= 0 && _e(t(k)))
                : W.key === "Escape" && (W.preventDefault(), H());
    }
  }
  function P(W) {
    W.key === "Escape" && (W.preventDefault(), H());
  }
  var te = vd(),
    N = p(te);
  {
    var ne = (W) => {
      var we = od(),
        Te = p(we);
      (O(
        (ze) => {
          (he(we, "id", `${t(_)}-hidden-label`),
            he(we, "for", `${t(_)}-hidden`),
            V(we, 1, ze),
            J(Te, e.label));
        },
        [() => G(j(Ne[n()], "font-medium [color:var(--color-text-muted)]"))],
      ),
        w(W, we));
    };
    Z(N, (W) => {
      e.label && W(ne);
    });
  }
  var ue = D(N, 2),
    oe = p(ue);
  ((oe.__click = () => {
    ee();
  }),
    (oe.__keydown = ve));
  var Fe = p(oe),
    Ce = p(Fe);
  {
    var Ee = (W) => {
        var we = id(),
          Te = p(we);
        {
          var ze = (Oe) => {
            var Me = sd();
            (O(() => lt(Me, `background:${t(ae).swatch}`)), w(Oe, Me));
          };
          Z(Te, (Oe) => {
            t(ae).swatch && Oe(ze);
          });
        }
        var Ie = D(Te, 2),
          He = p(Ie);
        (O(() => J(He, t(ae).label)), w(W, we));
      },
      de = (W) => {
        var we = ld(),
          Te = p(we);
        (O(() => J(Te, e.placeholder)), w(W, we));
      };
    Z(Ce, (W) => {
      t(ae) ? W(Ee) : W(de, !1);
    });
  }
  var Ae = D(Fe, 2),
    L = p(Ae);
  ut(
    oe,
    (W) => A(y, W),
    () => t(y),
  );
  var re = D(ue, 2);
  {
    var le = (W) => {
      var we = dd(),
        Te = Se(we);
      ((Te.__click = H), (Te.__keydown = P));
      var ze = D(Te, 2);
      ((ze.__keydown = I),
        nt(
          ze,
          23,
          a,
          (Ie) => Ie.value,
          (Ie, He, Oe) => {
            var Me = cd(),
              Xe = p(Me);
            Xe.__click = () => _e(t(Oe));
            var Qe = p(Xe);
            {
              var dt = (tt) => {
                var ie = ud();
                (O(() => lt(ie, `background:${t(He).swatch}`)), w(tt, ie));
              };
              Z(Qe, (tt) => {
                t(He).swatch && tt(dt);
              });
            }
            var Dt = D(Qe, 2),
              It = p(Dt);
            (O(
              (tt, ie) => {
                (he(Me, "id", `${t(_)}-opt-${t(Oe)}`),
                  he(
                    Me,
                    "aria-selected",
                    !t(He).disabled && t(He).value === s(),
                  ),
                  he(Me, "aria-disabled", t(He).disabled),
                  V(Me, 1, tt),
                  V(Xe, 1, ie),
                  (Xe.disabled = t(He).disabled),
                  J(It, t(He).label));
              },
              [
                () => G(j(t(U), t(He).disabled ? se : "")),
                () =>
                  G(
                    j(
                      "w-full text-left focus:outline-[3px] focus:outline-offset-3 focus:outline-[var(--border-color-focus)] rounded flex items-center gap-2",
                    ),
                  ),
              ],
            ),
              kt("focus", Xe, () => A(k, t(Oe), !0)),
              kt("mouseenter", Xe, () => A(k, t(Oe), !0)),
              w(Ie, Me));
          },
        ),
        ut(
          ze,
          (Ie) => A(x, Ie),
          () => t(x),
        ),
        O(() => {
          (he(ze, "id", t(b)),
            V(ze, 1, G(t(q))),
            lt(ze, t($)),
            he(ze, "data-position", t(d)),
            he(
              ze,
              "aria-labelledby",
              e.label ? `${t(_)}-hidden-label` : void 0,
            ),
            he(
              ze,
              "aria-activedescendant",
              t(k) >= 0 ? `${t(_)}-opt-${t(k)}` : void 0,
            ));
        }),
        w(W, we));
    };
    Z(re, (W) => {
      u() && W(le);
    });
  }
  var me = D(re, 2),
    ke = D(me, 2);
  {
    var xe = (W) => {
      var we = fd(),
        Te = p(we);
      (O(
        (ze) => {
          (he(we, "id", e.describedBy), V(we, 1, ze), J(Te, e.help));
        },
        [() => G(j("[color:var(--color-text-muted)]", Ne.sm))],
      ),
        w(W, we));
    };
    Z(ke, (W) => {
      e.help && W(xe);
    });
  }
  (O(
    (W) => {
      (V(te, 1, G(t(z))),
        he(oe, "id", t(_)),
        V(oe, 1, G(t(T))),
        he(oe, "aria-expanded", u()),
        he(oe, "aria-controls", t(b)),
        he(oe, "aria-describedby", e.describedBy),
        he(oe, "aria-invalid", l()),
        he(oe, "aria-required", e.required),
        (oe.disabled = e.disabled),
        V(Ae, 1, W),
        V(L, 0, G(S[n()])),
        he(me, "id", `${t(_)}-hidden`),
        he(me, "name", t(C)),
        Ci(me, s() ?? ""));
    },
    [
      () =>
        G(
          j(
            "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 [color:var(--color-text-default)]",
          ),
        ),
    ],
  ),
    w(r, te),
    je());
}
ct(["click", "keydown"]);
const gd = (r) => r;
function ys(r, { delay: e = 0, duration: a = 400, easing: n = gd } = {}) {
  const o = +getComputedStyle(r).opacity;
  return { delay: e, duration: a, easing: n, css: (s) => `opacity: ${s * o}` };
}
var pd = Wt(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M8.5 14L11.1 16.6" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M18.2 10L11.6 16.6" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path></svg>',
  ),
  hd = Wt(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M9 9.5L16.7 17.3" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M16.7 9.5L9 17.3" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path></svg>',
  ),
  bd = Wt(
    '<svg fill="none" viewBox="0 0 27 27"><path d="M4.6 25.925H22.5C25.2 25.925 26.8 23.022 25.6 20.6195L16.6 3.80194C15.3 1.29934 11.8 1.29934 10.5 3.80194L1.5 20.6195C0.299997 23.022 1.9 25.925 4.6 25.925Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M13.9 18.0168H13.2C12.5 18.0168 12.6 17.4162 12.6 16.7154L11.9 9.30769C11.9 8.60696 12.5 8.00635 13.2 8.00635H13.9C14.6 8.00635 15.2 8.60696 15.2 9.30769L14.5 16.7154C14.5 17.4162 14.6 18.0168 13.9 18.0168Z" fill="currentColor"></path><path d="M13.5 21.9208C14.4389 21.9208 15.2 21.3382 15.2 20.6195C15.2 19.9008 14.4389 19.3181 13.5 19.3181C12.5611 19.3181 11.8 19.9008 11.8 20.6195C11.8 21.3382 12.5611 21.9208 13.5 21.9208Z" fill="currentColor"></path></svg>',
  ),
  md = Wt(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path><path d="M13 9.00003C13.718 9.00003 14.3 8.41801 14.3 7.70004C14.3 6.98207 13.718 6.40002 13 6.40002C12.282 6.40002 11.7 6.98207 11.7 7.70004C11.7 8.41801 12.282 9.00003 13 9.00003Z" fill="currentColor"></path><path d="M13 19.7C12.2 19.7 11.6 19.1 11.6 18.4V11.6C11.6 10.9 12.2 10.3 12.9 10.3H13C13.7 10.3 14.3 10.9 14.3 11.6V18.4C14.3 19.1 13.8 19.7 13 19.7Z" fill="currentColor"></path></svg>',
  ),
  _d = R('<span class="w-5 h-5 flex-shrink-0" aria-hidden="true"><!></span>'),
  xd = R(
    '<div class="font-[var(--font-weight-medium)] truncate [font-size:var(--text-md)] max-sm:[font-size:var(--text-sm)]"> </div>',
  ),
  wd = R(
    '<button class="opacity-70 hover:opacity-100 transition-opacity duration-[var(--transition-fast)] ml-3" aria-label="Close"><svg width="24" height="24" viewBox="0 0 20 20" fill="none"><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button>',
  ),
  yd = R(
    '<div role="status" aria-live="polite"><!> <div class="flex-1 min-w-0"><!> <div class="line-clamp-3 [font-size:var(--text-sm)] max-sm:[font-size:var(--text-xs)]"> </div></div> <!></div>',
  );
function Zo(r, e) {
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
  function _() {
    (A(u, !1), i()());
  }
  Ke(() => {
    if (s() > 0) {
      const k = setTimeout(() => _(), s());
      return () => clearTimeout(k);
    }
  });
  const C = v(() =>
    j(
      "fixed bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-[var(--radius-lg)] shadow-lg min-w-[220px] max-w-[calc(100vw-2rem)] border border-[var(--border-color-default)] backdrop-blur-sm",
      f(a()),
      l(),
    ),
  );
  var b = Le(),
    x = Se(b);
  {
    var y = (k) => {
      var g = yd(),
        d = p(g);
      {
        var h = (q) => {
          var U = _d(),
            se = p(U);
          {
            var ce = (be) => {
                var $ = pd();
                w(be, $);
              },
              ge = (be) => {
                var $ = Le(),
                  ae = Se($);
                {
                  var K = (X) => {
                      var Y = hd();
                      w(X, Y);
                    },
                    B = (X) => {
                      var Y = Le(),
                        H = Se(Y);
                      {
                        var ee = (_e) => {
                            var ve = bd();
                            w(_e, ve);
                          },
                          pe = (_e) => {
                            var ve = md();
                            w(_e, ve);
                          };
                        Z(
                          H,
                          (_e) => {
                            a() === "warning" ? _e(ee) : _e(pe, !1);
                          },
                          !0,
                        );
                      }
                      w(X, Y);
                    };
                  Z(
                    ae,
                    (X) => {
                      a() === "danger" ? X(K) : X(B, !1);
                    },
                    !0,
                  );
                }
                w(be, $);
              };
            Z(se, (be) => {
              a() === "success" ? be(ce) : be(ge, !1);
            });
          }
          w(q, U);
        };
        Z(d, (q) => {
          n() && q(h);
        });
      }
      var c = D(d, 2),
        m = p(c);
      {
        var E = (q) => {
          var U = xd(),
            se = p(U);
          (O(() => J(se, e.title)), w(q, U));
        };
        Z(m, (q) => {
          e.title && q(E);
        });
      }
      var S = D(m, 2),
        z = p(S),
        T = D(c, 2);
      {
        var M = (q) => {
          var U = wd();
          ((U.__click = _), w(q, U));
        };
        Z(T, (q) => {
          o() && q(M);
        });
      }
      (O(() => {
        (V(g, 1, G(t(C))), he(S, "title", e.message), J(z, e.message));
      }),
        us(
          1,
          g,
          () => ys,
          () => ({ duration: 200 }),
        ),
        us(
          2,
          g,
          () => ys,
          () => ({ duration: 200 }),
        ),
        w(k, g));
    };
    Z(x, (k) => {
      t(u) && k(y);
    });
  }
  (w(r, b), je());
}
ct(["click"]);
var kd = R('<span class="text-[var(--color-text-default)]">*</span>'),
  Cd = R("<div> <!></div>"),
  Sd = R("<div><!></div>"),
  Pd = R("<li> </li>"),
  Ed = R("<ul></ul>"),
  zd = R("<div><!> <!> <!></div>"),
  Ad = R('<form novalidate=""></form> <!>', 1);
function Fd(r, e) {
  Be(e, !0);
  let a = F(e, "value", 19, () => ({})),
    n = F(e, "rowGap", 3, "md"),
    o = F(e, "validateOn", 3, "blur"),
    s = F(e, "labelAlign", 3, "left"),
    i = F(e, "labelWeight", 3, "medium"),
    l = F(e, "labelSize", 3, "md"),
    u = F(e, "compact", 3, !1);
  const f = { xs: "xs", sm: "xs", md: "sm", lg: "md", xl: "lg" },
    _ = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    C = { xs: "gap-1", sm: "gap-2", md: "gap-4", lg: "gap-6", xl: "gap-8" },
    b = (I) => (I == null ? "" : String(I));
  let x = et({});
  const y = et({}),
    k = et({});
  let g = fe(et([])),
    d = 0;
  const h = v(() => (u() ? "" : "w-full")),
    c = v(() => (typeof n() == "number" ? "" : (C[n()] ?? C.md))),
    m = v(() => (typeof n() == "number" ? n() + "px" : "")),
    E = (I) => {
      const P = x[I];
      return typeof P == "number" ? P : b(P);
    };
  function S(I) {
    return u() ? (f[I] ?? "md") : I;
  }
  const z = globalThis;
  z.__svelteCompFormInstanceCounter ??= 0;
  const T = et(z.__svelteCompFormInstanceCounter++),
    M = v(() => {
      if (e.formId && e.formId.trim()) return e.formId.trim();
      const I = e.schema.map((N) => N.name).join("|");
      let P = 0;
      for (let N = 0; N < I.length; N += 1)
        ((P = (P << 5) - P + I.charCodeAt(N)), (P |= 0));
      return `form-${Math.abs(P >>> 0).toString(36) || "form"}`;
    }),
    q = v(() => (e.formId && e.formId.trim() ? t(M) : `${t(M)}-${T}`));
  Ke(() => {
    const I = new Set(e.schema.map((P) => P.name));
    for (const P of Object.keys(x))
      I.has(P) || (delete x[P], delete y[P], delete k[P]);
    for (const P of e.schema)
      (Object.prototype.hasOwnProperty.call(a(), P.name)
        ? (x[P.name] = a()[P.name])
        : P.name in x ||
          (x[P.name] = P.default ?? (P.type === "checkbox" ? !1 : "")),
        P.name in y || (y[P.name] = !1),
        k[P.name] || (k[P.name] = []));
  });
  const U = Ju((I) => {
    $(I);
  }, 150);
  function se(I, P) {
    x[I] !== P && ((x[I] = P), o() === "input" && U(I), e.onChange?.({ ...x }));
  }
  function ce(I) {
    (y[I] || (y[I] = !0), o() !== "submit" && $(I));
  }
  function ge(I) {
    A(
      g,
      t(g).filter((P) => P.id !== I),
      !0,
    );
  }
  function be(I, P, te) {
    const N = d++;
    A(g, [...t(g), { id: N, message: P, variant: I, title: te }], !0);
  }
  async function $(I) {
    const P = e.schema.find((ne) => ne.name === I);
    if (!P) return;
    const te = x[I],
      N = [];
    if (
      (P.required &&
        (te === "" || te == null || (P.type === "checkbox" && !te)) &&
        N.push("Required"),
      P.type === "number" &&
        te !== "" &&
        Number.isNaN(Number(te)) &&
        N.push("Must be a number"),
      P.type === "email" &&
        te !== "" &&
        (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(te)) ||
          N.push("Invalid email")),
      P.validators)
    )
      for (const ne of P.validators) {
        const ue = await ne(te, x);
        ue && N.push(ue);
      }
    k[I] = N;
  }
  function ae(I) {
    return I.when ? !!I.when(x) : !0;
  }
  const K = v(() => e.schema.filter(ae)),
    B = v(() => t(K).map((I) => I.name));
  async function X() {
    return (
      await Promise.all(t(B).map($)),
      t(B).every((I) => (k[I]?.length ?? 0) === 0)
    );
  }
  function Y() {
    for (const I of e.schema)
      ((x[I.name] = I.default ?? (I.type === "checkbox" ? !1 : "")),
        (y[I.name] = !1),
        (k[I.name] = []));
    e.onChange?.({ ...x });
  }
  async function H(I) {
    if ((I?.preventDefault?.(), !!(await X())))
      try {
        (await e.onSubmit?.({ ...x }, { reset: Y }),
          be("success", "Form submitted successfully"));
      } catch (te) {
        throw (be("danger", "Form submission failed", "Error"), te);
      }
  }
  Ke(() => {
    const I = {
      reset: Y,
      submit: () => H(),
      validate: () => X(),
      getData: () => ({ ...x }),
      setValue: (P, te) => se(P, te),
    };
    e.expose?.(I);
  });
  var ee = Ad(),
    pe = Se(ee);
  let _e;
  nt(
    pe,
    21,
    () => t(K),
    (I) => I.name,
    (I, P) => {
      var te = Le(),
        N = Se(te);
      (_u(
        N,
        () => t(P).name,
        (ne) => {
          var ue = zd(),
            oe = p(ue);
          {
            var Fe = (re) => {
              var le = Cd(),
                me = p(le),
                ke = D(me);
              {
                var xe = (W) => {
                  var we = kd();
                  w(W, we);
                };
                Z(ke, (W) => {
                  t(P).required && W(xe);
                });
              }
              (O(
                (W) => {
                  (V(le, 1, W), J(me, `${t(P).label ?? ""} `));
                },
                [
                  () =>
                    G(
                      j(
                        _[i()],
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
                w(re, le));
            };
            Z(oe, (re) => {
              t(P).label && re(Fe);
            });
          }
          var Ce = D(oe, 2);
          {
            var Ee = (re) => {
                const le = v(
                    () =>
                      (y[t(P).name] || o() !== "submit") &&
                      k[t(P).name]?.length > 0,
                  ),
                  me = v(() => (t(le) ? `${t(q)}-err-${t(P).name}` : void 0));
                {
                  let ke = v(() => j(t(P).class, t(h))),
                    xe = v(() =>
                      (t(P).options ?? []).map((ze) => ({
                        label: b(ze.label),
                        value: b(ze.value),
                        disabled: ze.disabled,
                      })),
                    ),
                    W = v(() => S(t(P).sz ?? "md")),
                    we = v(() => t(P).variant ?? "default"),
                    Te = v(() => b(x[t(P).name]));
                  Kt(re, {
                    get class() {
                      return t(ke);
                    },
                    get options() {
                      return t(xe);
                    },
                    get sz() {
                      return t(W);
                    },
                    get variant() {
                      return t(we);
                    },
                    get value() {
                      return t(Te);
                    },
                    onChange: (ze) => se(t(P).name, ze),
                    onblur: () => ce(t(P).name),
                    get invalid() {
                      return t(le);
                    },
                    get describedBy() {
                      return t(me);
                    },
                  });
                }
              },
              de = (re) => {
                var le = Le(),
                  me = Se(le);
                {
                  var ke = (W) => {
                      var we = Sd(),
                        Te = p(we);
                      {
                        let ze = v(() => t(P).class ?? ""),
                          Ie = v(() => S(t(P).sz ?? "md")),
                          He = v(() => !!x[t(P).name]);
                        an(Te, {
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
                          onChange: (Oe) => se(t(P).name, Oe),
                          onblur: () => ce(t(P).name),
                        });
                      }
                      (O(
                        (ze) => V(we, 1, ze),
                        [
                          () =>
                            G(
                              j(
                                t(P).class,
                                u() && "mx-auto justify-self-center",
                              ),
                            ),
                        ],
                      ),
                        w(W, we));
                    },
                    xe = (W) => {
                      const we = v(
                          () =>
                            (y[t(P).name] || o() !== "submit") &&
                            k[t(P).name]?.length > 0,
                        ),
                        Te = v(() =>
                          t(we) ? `${t(q)}-err-${t(P).name}` : void 0,
                        );
                      {
                        let ze = v(() => j(t(P).class, t(h))),
                          Ie = v(() =>
                            t(P).type === "textarea" ? "textarea" : "input",
                          ),
                          He = v(() =>
                            t(P).type === "number"
                              ? "number"
                              : t(P).type === "password"
                                ? "password"
                                : t(P).type === "email"
                                  ? "email"
                                  : "text",
                          ),
                          Oe = v(() => t(P).rows ?? 3),
                          Me = v(() => t(P).type === "number"),
                          Xe = v(() => S(t(P).sz ?? "md")),
                          Qe = v(() => t(P).variant ?? "default"),
                          dt = v(() => E(t(P).name)),
                          Dt = v(() =>
                            t(P).type === "email" ? "email" : void 0,
                          ),
                          It = v(() =>
                            t(P).type === "email" ? "email" : void 0,
                          );
                        ma(W, {
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
                          onChange: (tt) => se(t(P).name, tt),
                          onblur: () => ce(t(P).name),
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
                  Z(
                    me,
                    (W) => {
                      t(P).type === "checkbox" ? W(ke) : W(xe, !1);
                    },
                    !0,
                  );
                }
                w(re, le);
              };
            Z(Ce, (re) => {
              t(P).type === "select" ? re(Ee) : re(de, !1);
            });
          }
          var Ae = D(Ce, 2);
          {
            var L = (re) => {
              var le = Ed();
              (nt(
                le,
                23,
                () => k[t(P).name] ?? [],
                (me, ke) => `${t(P).name}-${ke}`,
                (me, ke) => {
                  var xe = Pd(),
                    W = p(xe);
                  (O(
                    (we) => {
                      (V(xe, 1, we), J(W, t(ke)));
                    },
                    [
                      () =>
                        G(
                          j(
                            "text-xs leading-tight mt-1 text-[var(--color-text-red)]",
                            u() && "text-[10px]",
                          ),
                        ),
                    ],
                  ),
                    w(me, xe));
                },
              ),
                O(
                  (me) => {
                    (he(le, "id", `${t(q)}-err-${t(P).name}`), V(le, 1, me));
                  },
                  [() => G(j("m-0 pl-4 list-none", u() && "text-center"))],
                ),
                w(re, le));
            };
            Z(Ae, (re) => {
              (y[t(P).name] || o() !== "submit") &&
                k[t(P).name]?.length &&
                re(L);
            });
          }
          (O(
            (re) => V(ue, 1, re),
            [
              () =>
                G(
                  j(
                    "grid gap-1 w-full min-w-0",
                    u() ? "justify-items-center" : "justify-items-stretch",
                  ),
                ),
            ],
          ),
            w(ne, ue));
        },
      ),
        w(I, te));
    },
  );
  var ve = D(pe, 2);
  (nt(
    ve,
    17,
    () => t(g),
    (I) => I.id,
    (I, P) => {
      Zo(I, {
        get title() {
          return t(P).title;
        },
        get message() {
          return t(P).message;
        },
        get variant() {
          return t(P).variant;
        },
        onClose: () => ge(t(P).id),
      });
    },
  ),
    O(
      (I) => {
        (he(pe, "id", t(q)), V(pe, 1, I), (_e = lt(pe, "", _e, { gap: t(m) })));
      },
      [
        () =>
          G(
            j(
              "grid font-sans w-full",
              t(c),
              u() && "gap-2 justify-items-center",
            ),
          ),
      ],
    ),
    kt("submit", pe, H),
    w(r, ee),
    je());
}
var Td = R(
    '<div class="p-4 border-b border-[var(--border-color-default)]"><!></div>',
  ),
  Ld = R(
    '<div class="text-xs opacity-70 px-3 py-2 text-center">No items</div>',
  ),
  Md = R(
    '<li><button type="button" class="w-full text-left px-3 py-2 rounded-md hover:bg-[var(--color-bg-hover)] focus:outline-[var(--border-color-focus)] focus:outline-2 transition-colors"> </button></li>',
  ),
  Dd = R('<ul class="grid gap-2 p-4"></ul>'),
  Id = R(
    '<div class="p-4 border-t border-[var(--border-color-default)]"><!></div>',
  ),
  Nd = R(
    '<div class="fixed inset-0 z-[var(--z-overlay)] flex"><div role="dialog" aria-modal="true" tabindex="-1" class="flex flex-col h-full bg-[var(--color-bg-surface)] shadow-xl"><!> <div class="flex-1 overflow-y-auto" tabindex="-1"><!></div> <!></div> <button type="button" class="flex-1 bg-black/40" aria-hidden="true"></button></div>',
  ),
  Od = R(
    '<button type="button" aria-label="Toggle navigation"><span class="relative block w-5 h-3.5"><span></span> <span></span> <span></span></span></button> <!>',
    1,
  );
function Bd(r, e) {
  Be(e, !0);
  let a = F(e, "menuItems", 19, () => []),
    n = F(e, "activeItem", 3, ""),
    o = F(e, "closeOnSelect", 3, !0),
    s = F(e, "class", 3, ""),
    i = F(e, "width", 3, 300),
    l = fe(void 0),
    u = fe(void 0),
    f = null,
    _ = fe(!1);
  const C = v(() => e.pressed ?? t(_));
  function b(U) {
    e.pressed === void 0 ? A(_, U, !0) : e.onOpenChange?.(U);
  }
  function x() {
    b(!t(C));
  }
  function y() {
    (b(!1), queueMicrotask(() => t(l)?.focus()));
  }
  const k = Qu(() => y(), 150);
  function g(U) {
    U.key === "Escape" && k();
  }
  Ke(
    () => (
      t(C) && t(u)
        ? (queueMicrotask(() => {
            zi(t(u));
          }),
          f?.(),
          (f = Ai(t(u))),
          document.addEventListener("keydown", g))
        : (f?.(), (f = null), document.removeEventListener("keydown", g)),
      () => {
        (document.removeEventListener("keydown", g), f?.(), (f = null));
      }
    ),
  );
  const d =
      "fixed top-4 left-4 inline-flex items-center justify-center h-8 w-8 rounded-md border border-[var(--border-color-default)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] transition-colors z-[var(--z-modal)]",
    h = v(() => j(d, s()));
  var c = Od(),
    m = Se(c);
  m.__click = x;
  var E = p(m),
    S = p(E),
    z = D(S, 2),
    T = D(z, 2);
  ut(
    m,
    (U) => A(l, U),
    () => t(l),
  );
  var M = D(m, 2);
  {
    var q = (U) => {
      var se = Nd(),
        ce = p(se),
        ge = p(ce);
      {
        var be = (ee) => {
          var pe = Td(),
            _e = p(pe);
          (Je(_e, () => e.header ?? Q), w(ee, pe));
        };
        Z(ge, (ee) => {
          e.header && ee(be);
        });
      }
      var $ = D(ge, 2),
        ae = p($);
      {
        var K = (ee) => {
            var pe = Ld();
            w(ee, pe);
          },
          B = (ee) => {
            var pe = Dd();
            (nt(
              pe,
              21,
              a,
              (_e) => _e.id,
              (_e, ve) => {
                var I = Md(),
                  P = p(I);
                P.__click = () => {
                  (e.onSelect?.(t(ve).id), o() && y());
                };
                var te = p(P);
                (O(() => {
                  (he(P, "aria-current", n() === t(ve).id ? "page" : void 0),
                    J(te, t(ve).label));
                }),
                  w(_e, I));
              },
            ),
              w(ee, pe));
          };
        Z(ae, (ee) => {
          a().length === 0 ? ee(K) : ee(B, !1);
        });
      }
      var X = D($, 2);
      {
        var Y = (ee) => {
          var pe = Id(),
            _e = p(pe);
          (Je(_e, () => e.footer ?? Q), w(ee, pe));
        };
        Z(X, (ee) => {
          e.footer && ee(Y);
        });
      }
      ut(
        ce,
        (ee) => A(u, ee),
        () => t(u),
      );
      var H = D(ce, 2);
      ((H.__click = y),
        O(() => lt(ce, `width:${typeof i() == "number" ? `${i()}px` : i()}`)),
        w(U, se));
    };
    Z(M, (U) => {
      t(C) && U(q);
    });
  }
  (O(
    (U, se, ce) => {
      (he(m, "aria-expanded", t(C)),
        V(m, 1, G(t(h))),
        V(S, 1, U),
        V(z, 1, se),
        V(T, 1, ce));
    },
    [
      () =>
        G(
          j(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform duration-200",
            t(C)
              ? "translate-y-[-50%] rotate-45"
              : "translate-y-[calc(-50%_-_6px)]",
          ),
        ),
      () =>
        G(
          j(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-opacity duration-200 translate-y-[-50%]",
            t(C) ? "opacity-0" : "opacity-100",
          ),
        ),
      () =>
        G(
          j(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform duration-200",
            t(C)
              ? "translate-y-[-50%] -rotate-45"
              : "translate-y-[calc(-50%_+_6px)]",
          ),
        ),
    ],
  ),
    w(r, c),
    je());
}
ct(["click"]);
var jd = R(
    '<div role="group" class="relative inline-block overflow-visible"><button type="button" aria-haspopup="menu"> </button></div>',
  ),
  Rd = R(
    '<div class="my-1 mx-1 border-t border-[var(--border-color-default)]" role="separator"></div>',
  ),
  Vd = R("<span> </span>"),
  qd = R("<span>&gt;</span>"),
  Ud = R(
    '<div class="my-1 mx-1 border-t border-[var(--border-color-default)]" role="separator"></div>',
  ),
  Hd = R("<span> </span>"),
  Kd = R(
    '<button type="button" role="menuitem"><span class="flex items-center gap-2 flex-1 min-w-0"><span class="truncate"> </span></span> <span><!></span></button>',
  ),
  Gd = R('<div role="menu" tabindex="0"></div>'),
  Wd = R(
    '<div class="relative"><button type="button" role="menuitem"><span class="flex items-center gap-2 flex-1 min-w-0"><span class="truncate"> </span></span> <span class="flex items-center shrink-0 ml-auto gap-1"><!> <!></span></button> <!></div>',
  ),
  Zd = R(
    '<div role="presentation" tabindex="-1" class="fixed inset-0 z-40"></div> <div role="menu" tabindex="-1"></div>',
    1,
  ),
  Yd = R('<nav aria-label="Menu bar"></nav> <!>', 1);
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
    _ = et({}),
    C = et({}),
    b = et({}),
    x = et({}),
    y = fe(0),
    k = fe(0),
    g = et({}),
    d = fe(0),
    h = fe(0);
  const c = {
      xs: "h-7 px-3",
      sm: "h-8 px-3",
      md: "h-9 px-4",
      lg: "h-10 px-4",
      xl: "h-11 px-5",
    },
    m =
      "flex items-stretch pl-2 gap-1 border-b relative z-10 bg-[var(--color-bg-surface)] text-[var(--color-text-default)] border-[var(--border-color-default)]",
    E = 8,
    S =
      "px-4 rounded-xs leading-none transition-colors outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]",
    z = "bg-[var(--color-bg-muted)] text-[var(--color-text-default)]",
    T = "hover:bg-[var(--color-bg-muted)] text-[var(--color-text-default)]",
    M = v(
      () =>
        `position:fixed; top:${t(y)}px; left:${t(k)}px; width:max-content; max-width:calc(100vw - 16px);`,
    ),
    q = v(
      () =>
        `position:fixed; top:${t(d)}px; left:${t(h)}px; width:max-content; max-width:calc(100vw - 16px);`,
    ),
    U = v(() => Ne[s()]),
    se = "flex items-center shrink-0",
    ce = v(() => j(m, c[s()], t(U), o())),
    ge = v(() => j(S, c[s()], t(U)));
  function be(L) {
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
  function B(L) {
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
  function ee(L, re) {
    const le = L.getBoundingClientRect(),
      me = Math.min(
        re?.getBoundingClientRect().width ?? le.width,
        window.innerWidth - 16,
      ),
      ke = window.innerWidth - le.left,
      xe = le.right,
      W = ke < me && xe > ke,
      we = window.scrollX,
      Te = window.scrollX + window.innerWidth;
    A(y, le.bottom + window.scrollY);
    const ze = W ? le.right + window.scrollX - me : le.left + window.scrollX,
      Ie = Te - me;
    A(k, Math.max(we, Math.min(ze, Ie)), !0);
  }
  function pe(L, re) {
    const le = L.getBoundingClientRect(),
      me = re?.getBoundingClientRect(),
      ke = Math.min(me?.width ?? le.width, window.innerWidth - 16),
      xe = window.innerWidth - le.right,
      W = le.left,
      we = xe < ke && W > xe;
    A(d, le.top + window.scrollY);
    const Te = window.scrollX,
      ze = window.scrollX + window.innerWidth,
      Ie = we
        ? le.left + window.scrollX - ke - E
        : le.right + window.scrollX + E,
      He = ze - ke - E;
    A(h, Math.max(Te, Math.min(Ie, He)), !0);
  }
  function _e(L) {
    return L.findIndex((re) => !K(re));
  }
  function ve(L, re) {
    if (!L.length) return -1;
    let le = re;
    for (let me = 0; me < L.length; me++)
      if (((le = (le + 1 + L.length) % L.length), !K(L[le]))) return le;
    return re;
  }
  function I(L, re) {
    if (!L.length) return -1;
    let le = re;
    for (let me = 0; me < L.length; me++)
      if (((le = (le - 1 + L.length) % L.length), !K(L[le]))) return le;
    return re;
  }
  function P(L, re) {
    if (re < 0 || re >= L.actions.length) return;
    const le = L.actions[re];
    !le ||
      K(le) ||
      ((!B(le) || t(l) !== $(le)) && (A(l, ""), A(f, -1)),
      A(u, re, !0),
      queueMicrotask(() => {
        t(i) === L.name && b[$(le)]?.focus();
      }));
  }
  function te(L, re) {
    if (!B(L) || re < 0 || re >= L.submenu.length) return;
    const le = L.submenu[re];
    !le ||
      K(le) ||
      (A(f, re, !0),
      queueMicrotask(() => {
        t(l) === $(L) && x[$(le)]?.focus();
      }));
  }
  function N(L, re = !1) {
    (A(i, L.name, !0), A(l, ""), A(f, -1));
    const le = re ? _e(L.actions) : -1;
    A(u, le, !0);
    const me = _[L.name];
    (me && ee(me, C[L.name]), re && le !== -1 && P(L, le));
  }
  function ne(L, re = !1) {
    if (!B(L)) return;
    A(l, $(L), !0);
    const le = b[$(L)];
    le && pe(le, g[$(L)]);
    const me = re ? _e(L.submenu) : -1;
    (A(f, me, !0), re && me !== -1 && te(L, me));
  }
  function ue(L, re, le) {
    if (L.key === "Enter" || L.key === " " || L.key === "ArrowDown")
      (L.preventDefault(), N(re, !0));
    else if (L.key === "ArrowRight") {
      L.preventDefault();
      const me = (le + 1) % a().length;
      _[a()[me].name]?.focus();
    } else if (L.key === "ArrowLeft") {
      L.preventDefault();
      const me = (le - 1 + a().length) % a().length;
      _[a()[me].name]?.focus();
    }
  }
  function oe(L, re) {
    if ((L.stopPropagation(), !t(i))) return;
    const le = re.actions,
      me = _e(le);
    if (me === -1) return;
    const ke = t(u) === -1 ? me : t(u);
    if (L.key === "Escape") (L.preventDefault(), H(), _[re.name]?.focus());
    else if (L.key === "ArrowDown") {
      L.preventDefault();
      const xe = ve(le, ke);
      P(re, xe);
    } else if (L.key === "ArrowUp") {
      L.preventDefault();
      const xe = I(le, ke);
      P(re, xe);
    } else if (L.key === "ArrowRight") {
      L.preventDefault();
      const xe = le[ke];
      xe && B(xe) && ne(xe, !0);
    } else if (L.key === "ArrowLeft" && t(l))
      (L.preventDefault(), A(l, ""), A(f, -1), P(re, ke));
    else if (L.key === "Enter" || L.key === " ") {
      L.preventDefault();
      const xe = le[ke];
      xe && (B(xe) ? ne(xe, !0) : Y(re.name, xe));
    } else if (L.key === "Tab") {
      L.preventDefault();
      const xe = L.shiftKey ? I(le, ke) : ve(le, ke);
      P(re, xe);
    }
  }
  function Fe(L, re, le) {
    if ((L.stopPropagation(), !t(l) || !B(re))) return;
    const me = re.submenu,
      ke = _e(me);
    if (ke === -1) return;
    const xe = t(f) === -1 ? ke : t(f);
    if (L.key === "Escape")
      (L.preventDefault(), A(l, ""), A(f, -1), b[$(re)]?.focus());
    else if (L.key === "ArrowDown") {
      L.preventDefault();
      const W = ve(me, xe);
      te(re, W);
    } else if (L.key === "ArrowUp") {
      L.preventDefault();
      const W = I(me, xe);
      te(re, W);
    } else if (L.key === "ArrowLeft")
      (L.preventDefault(), A(l, ""), A(f, -1), b[$(re)]?.focus());
    else if (L.key === "Enter" || L.key === " ") {
      L.preventDefault();
      const W = me[xe];
      W && Y(le, W);
    } else if (L.key === "Tab") {
      L.preventDefault();
      const W = L.shiftKey ? I(me, xe) : ve(me, xe);
      te(re, W);
    }
  }
  (Ke(() => {
    if (t(i)) {
      const L = _[t(i)];
      if (L) {
        ee(L, C[t(i)]);
        const re = () => {
          ee(L, C[t(i)]);
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
        const L = b[t(l)],
          re = g[t(l)];
        if (L) {
          pe(L, re);
          const le = () => {
            pe(L, g[t(l)]);
          };
          return (
            window.addEventListener("scroll", le, !0),
            window.addEventListener("resize", le),
            () => {
              (window.removeEventListener("scroll", le, !0),
                window.removeEventListener("resize", le));
            }
          );
        }
      }
    }));
  var Ce = Yd(),
    Ee = Se(Ce);
  nt(
    Ee,
    23,
    a,
    (L) => L.name,
    (L, re, le) => {
      var me = jd(),
        ke = p(me);
      ((ke.__mousedown = (W) => W.preventDefault()),
        (ke.__click = () => {
          t(i) === t(re).name ? H() : N(t(re), !0);
        }),
        (ke.__keydown = (W) => ue(W, t(re), t(le))));
      var xe = p(ke);
      (ut(
        ke,
        (W, we) => (_[we.name] = W),
        (W) => _?.[W.name],
        () => [t(re)],
      ),
        O(
          (W) => {
            (V(ke, 1, W),
              he(ke, "aria-expanded", t(i) === t(re).name),
              J(xe, t(re).name));
          },
          [() => G(j(t(ge), t(i) === t(re).name ? z : T))],
        ),
        kt("mouseenter", ke, () => {
          t(i) && t(i) !== t(re).name && N(t(re), !0);
        }),
        w(L, me));
    },
  );
  var de = D(Ee, 2);
  {
    var Ae = (L) => {
      var re = Le(),
        le = Se(re);
      (nt(
        le,
        17,
        a,
        (me) => me.name,
        (me, ke) => {
          var xe = Le(),
            W = Se(xe);
          {
            var we = (Te) => {
              var ze = Zd(),
                Ie = Se(ze);
              Ie.__mousedown = H;
              var He = D(Ie, 2);
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
                          var ie = Rd();
                          w(tt, ie);
                        },
                        It = (tt) => {
                          var ie = Wd(),
                            Pe = p(ie);
                          ((Pe.__mousedown = (We) => We.preventDefault()),
                            (Pe.__click = () => {
                              B(t(Me))
                                ? (P(t(ke), t(Xe)), ne(t(Me), !0))
                                : Y(t(ke).name, t(Me));
                            }));
                          var De = p(Pe),
                            qe = p(De),
                            rt = p(qe),
                            at = D(De, 2),
                            Pt = p(at);
                          {
                            var tr = (We) => {
                              var Ye = Vd(),
                                it = p(Ye);
                              (O(
                                ($e, ar) => {
                                  (V(Ye, 1, $e), J(it, ar));
                                },
                                [
                                  () =>
                                    G(
                                      j(
                                        "text-[var(--color-text-muted)] text-right",
                                        t(U),
                                      ),
                                    ),
                                  () => ae(t(Me)),
                                ],
                              ),
                                w(We, Ye));
                            };
                            Z(Pt, (We) => {
                              ae(t(Me)) && We(tr);
                            });
                          }
                          var Nt = D(Pt, 2);
                          {
                            var Zt = (We) => {
                              var Ye = qd();
                              (O(
                                (it) => V(Ye, 1, it),
                                [
                                  () =>
                                    G(
                                      j(
                                        "text-[var(--color-text-muted)] flex-shrink-0",
                                        t(U),
                                      ),
                                    ),
                                ],
                              ),
                                w(We, Ye));
                            };
                            Z(Nt, (We) => {
                              B(t(Me)) && We(Zt);
                            });
                          }
                          ut(
                            Pe,
                            (We, Ye) => (b[$(Ye)] = We),
                            (We) => b?.[$(We)],
                            () => [t(Me)],
                          );
                          var Et = D(Pe, 2);
                          {
                            var rr = (We) => {
                              var Ye = Gd();
                              ((Ye.__keydown = (it) =>
                                Fe(it, t(Me), t(ke).name)),
                                nt(
                                  Ye,
                                  23,
                                  () => t(Me).submenu,
                                  (it, $e) => X(it, $e),
                                  (it, $e, ar) => {
                                    var Sr = Le(),
                                      ra = Se(Sr);
                                    {
                                      var aa = (Vt) => {
                                          var _t = Ud();
                                          w(Vt, _t);
                                        },
                                        Rt = (Vt) => {
                                          var _t = Kd();
                                          ((_t.__mousedown = (zt) =>
                                            zt.preventDefault()),
                                            (_t.__click = () =>
                                              Y(t(ke).name, t($e))));
                                          var jr = p(_t),
                                            gn = p(jr),
                                            nr = p(gn),
                                            Pr = D(jr, 2);
                                          V(Pr, 1, G(se));
                                          var Rr = p(Pr);
                                          {
                                            var Vr = (zt) => {
                                              var xt = Hd(),
                                                Fa = p(xt);
                                              (O(
                                                (Ta, La) => {
                                                  (V(xt, 1, Ta), J(Fa, La));
                                                },
                                                [
                                                  () =>
                                                    G(
                                                      j(
                                                        "text-[var(--color-text-muted)]",
                                                        t(U),
                                                      ),
                                                    ),
                                                  () => ae(t($e)),
                                                ],
                                              ),
                                                w(zt, xt));
                                            };
                                            Z(Rr, (zt) => {
                                              ae(t($e)) && zt(Vr);
                                            });
                                          }
                                          (ut(
                                            _t,
                                            (zt, xt) => (x[$(xt)] = zt),
                                            (zt) => x?.[$(zt)],
                                            () => [t($e)],
                                          ),
                                            O(
                                              (zt, xt) => {
                                                (V(_t, 1, zt), J(nr, xt));
                                              },
                                              [
                                                () =>
                                                  G(
                                                    j(
                                                      "relative text-left rounded-xs transition-colors outline-none px-1.5 py-0.5",
                                                      "my-1 mr-1 w-full flex items-center justify-between gap-3",
                                                      "hover:bg-[var(--color-bg-muted)] focus-visible:bg-[var(--color-bg-muted)]",
                                                      "focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]",
                                                      "decoration-[var(--color-text-default)]",
                                                      t(U),
                                                    ),
                                                  ),
                                                () => be(t($e)),
                                              ],
                                            ),
                                            kt("mouseenter", _t, () =>
                                              A(f, t(ar), !0),
                                            ),
                                            kt("focus", _t, () =>
                                              A(f, t(ar), !0),
                                            ),
                                            w(Vt, _t));
                                        };
                                      Z(ra, (Vt) => {
                                        K(t($e)) ? Vt(aa) : Vt(Rt, !1);
                                      });
                                    }
                                    w(it, Sr);
                                  },
                                ),
                                ut(
                                  Ye,
                                  (it, $e) => (g[$($e)] = it),
                                  (it) => g?.[$(it)],
                                  () => [t(Me)],
                                ),
                                O(
                                  (it) => {
                                    (V(Ye, 1, it), lt(Ye, t(q)));
                                  },
                                  [
                                    () =>
                                      G(
                                        j(
                                          "fixed z-50 min-w-44 p-2 rounded-xs shadow-[0_2px_4px_var(--shadow-color)]",
                                          "border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]",
                                        ),
                                      ),
                                  ],
                                ),
                                w(We, Ye));
                            };
                            Z(Et, (We) => {
                              B(t(Me)) && t(l) === $(t(Me)) && We(rr);
                            });
                          }
                          (O(
                            (We, Ye) => {
                              (V(Pe, 1, We), J(rt, Ye));
                            },
                            [
                              () =>
                                G(
                                  j(
                                    "relative text-left rounded-xs transition-colors outline-none px-1.5 py-0.5 my-1 mr-1 min-w-full flex items-center",
                                    "gap-3 hover:bg-[var(--color-bg-muted)] focus-visible:bg-[var(--color-bg-muted)]",
                                    "focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]",
                                    t(U),
                                  ),
                                ),
                              () => be(t(Me)),
                            ],
                          ),
                            kt("mouseenter", Pe, () => {
                              (A(u, t(Xe), !0),
                                B(t(Me)) && t(l) !== $(t(Me))
                                  ? ne(t(Me))
                                  : B(t(Me)) || (A(l, ""), A(f, -1)));
                            }),
                            kt("focus", Pe, () => {
                              P(t(ke), t(Xe));
                            }),
                            w(tt, ie));
                        };
                      Z(dt, (tt) => {
                        K(t(Me)) ? tt(Dt) : tt(It, !1);
                      });
                    }
                    w(Oe, Qe);
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
                    (V(He, 1, Oe), lt(He, t(M)));
                  },
                  [
                    () =>
                      G(
                        j(
                          "fixed z-50 min-w-44 p-2 rounded-xs shadow-[0_2px_4px_var(--shadow-color)] ",
                          "border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]",
                        ),
                      ),
                  ],
                ),
                w(Te, ze));
            };
            Z(W, (Te) => {
              t(i) === t(ke).name && Te(we);
            });
          }
          w(me, xe);
        },
      ),
        w(L, re));
    };
    Z(de, (L) => {
      t(i) && L(Ae);
    });
  }
  (O(() => V(Ee, 1, G(t(ce)))), w(r, Ce), je());
}
ct(["mousedown", "click", "keydown"]);
var Xd = R("<div><span> </span> <!> <!> <!></div>");
function Li(r, e) {
  Be(e, !0);
  let a = F(e, "class", 3, "");
  const n = v(() =>
    j(
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
    if (e.totalPages <= 3) return Fo(e.totalPages, (k) => k + 1);
    let y = e.currentPage - 1;
    return (
      y < 1 && (y = 1),
      y + 3 - 1 > e.totalPages && (y = e.totalPages - 3 + 1),
      Fo(3, (k) => y + k)
    );
  }
  var l = Xd(),
    u = p(l),
    f = p(u),
    _ = D(u, 2);
  {
    let x = v(() => e.currentPage === 1);
    ot(_, {
      onClick: s,
      get disabled() {
        return t(x);
      },
      sz: "xs",
      variant: "secondary",
      children: (y, k) => {
        var g = Re("<");
        w(y, g);
      },
      $$slots: { default: !0 },
    });
  }
  var C = D(_, 2);
  nt(
    C,
    16,
    i,
    (x) => x,
    (x, y) => {
      {
        let k = v(() => (e.currentPage === y ? "primary" : "secondary")),
          g = v(() => (e.currentPage === y ? "page" : void 0));
        ot(x, {
          onClick: () => e.onPageChange(y),
          sz: "xs",
          get variant() {
            return t(k);
          },
          get "aria-current"() {
            return t(g);
          },
          children: (d, h) => {
            var c = Re();
            (O(() => J(c, y)), w(d, c));
          },
          $$slots: { default: !0 },
        });
      }
    },
  );
  var b = D(C, 2);
  {
    let x = v(() => e.currentPage === e.totalPages);
    ot(b, {
      onClick: o,
      get disabled() {
        return t(x);
      },
      sz: "xs",
      variant: "secondary",
      children: (y, k) => {
        var g = Re(">");
        w(y, g);
      },
      $$slots: { default: !0 },
    });
  }
  (O(() => {
    (V(l, 1, G(t(n))),
      J(f, `Page ${e.currentPage ?? ""} of ${e.totalPages ?? ""}`));
  }),
    w(r, l),
    je());
}
function Jd(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "sm"),
    n = F(e, "class", 3, "");
  const o = Gt("lang") ?? null,
    s = v(() => o?.value ?? "en"),
    i = v(() => Aa[t(s)].components.primaryColorSelect),
    l = v(() => e.label ?? t(i).text),
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
    f = u.reduce((x, y) => ((x[y.value] = y), x), {});
  let _ = fe("default"),
    C = fe(!1);
  function b(x) {
    return typeof x == "string" && x in f;
  }
  (Ke(() => {
    if (!t(C)) {
      try {
        if (typeof window < "u") {
          const x = localStorage.getItem("primary");
          b(x) && A(_, x, !0);
        }
      } catch {}
      A(C, !0);
    }
  }),
    Ke(() => {
      if (t(C))
        try {
          (typeof document < "u" &&
            document.documentElement.setAttribute("data-primary", t(_)),
            typeof window < "u" && localStorage.setItem("primary", t(_)));
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
        return t(_);
      },
      onChange: (x) => {
        b(x) && A(_, x, !0);
      },
      get class() {
        return n();
      },
    }),
    je());
}
var Qd = R("<span> </span>"),
  $d = R("<div></div>"),
  ef = R("<div></div>"),
  tf = R(
    '<div><!> <div class="relative w-full h-10"><div><!></div></div></div>',
  );
function rf(r, e) {
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
  const _ = v(() => `${ba(a(), 0, 100)}%`),
    C = v(
      () =>
        ({
          xs: "h-[4px]",
          sm: "h-[5px]",
          md: "h-[6px]",
          lg: "h-[7px]",
          xl: "h-[8px]",
        })[o()],
    ),
    b = v(() =>
      s() === "neutral"
        ? "bg-[var(--color-bg-secondary)]"
        : "bg-[var(--color-bg-primary)]",
    ),
    x = v(() =>
      j(
        "relative flex flex-col gap-1 w-full data-[disabled=true]:opacity-[var(--opacity-disabled)] data-[disabled=true]:cursor-not-allowed",
        i(),
      ),
    ),
    y = v(() =>
      j(
        "absolute top-1/2 -translate-y-1/2 w-full bg-[var(--border-color-default)] rounded overflow-hidden",
        t(C),
      ),
    ),
    k = v(() => j("h-full", t(b)));
  var g = tf();
  bt(
    g,
    (T) => ({
      class: t(x),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": T,
      "data-disabled": u() ? "true" : void 0,
      ...f,
    }),
    [() => (n() ? void 0 : Math.round(ba(a(), 0, 100)))],
    void 0,
    void 0,
    "svelte-1lu0uwz",
  );
  var d = p(g);
  {
    var h = (T) => {
      var M = Qd(),
        q = p(M);
      (O(
        (U) => {
          (V(M, 1, U, "svelte-1lu0uwz"), J(q, l()));
        },
        [() => G(j("text-[var(--color-text-muted)] select-none", Ne[o()]))],
      ),
        w(T, M));
    };
    Z(d, (T) => {
      l() && T(h);
    });
  }
  var c = D(d, 2),
    m = p(c),
    E = p(m);
  {
    var S = (T) => {
        var M = $d();
        (O((q) => V(M, 1, q, "svelte-1lu0uwz"), [() => G(j(t(k), "pb-indet"))]),
          w(T, M));
      },
      z = (T) => {
        var M = ef();
        (O(
          (q) => {
            (V(M, 1, q, "svelte-1lu0uwz"), lt(M, `width:${t(_)}`));
          },
          [() => G(j(t(k), "transition-[width]"))],
        ),
          w(T, M));
      };
    Z(E, (T) => {
      n() ? T(S) : T(z, !1);
    });
  }
  (O(() => V(m, 1, G(t(y)), "svelte-1lu0uwz")), w(r, g), je());
}
var af = R("<span> </span>"),
  nf = Wt("<circle></circle>"),
  of = Wt("<circle></circle>"),
  sf = R("<div> </div>"),
  lf = R(
    '<div><!> <div class="relative inline-flex items-center justify-center"><svg class="pc-svg svelte-10y2c7k" role="presentation" aria-hidden="true"><g class="pc-rot svelte-10y2c7k"><circle class="pc-track svelte-10y2c7k"></circle><!></g></svg> <!></div></div>',
  );
function uf(r, e) {
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
  const _ = {
      xs: { diameter: 40, stroke: 4 },
      sm: { diameter: 48, stroke: 5 },
      md: { diameter: 56, stroke: 6 },
      lg: { diameter: 64, stroke: 7 },
      xl: { diameter: 72, stroke: 8 },
    },
    C = v(() => ba(a(), 0, 100)),
    b = v(() => Math.round(t(C))),
    x = v(() => _[o()]),
    y = v(() => t(x).diameter / 2),
    k = v(() => t(y) - t(x).stroke / 2),
    g = v(() => 2 * Math.PI * t(k)),
    d = v(() => ((100 - t(C)) / 100) * t(g)),
    h = v(() => `${t(g)} ${t(g)}`),
    c = v(() => `${t(g) * 0.3} ${t(g)}`),
    m = v(() =>
      s() === "neutral"
        ? "stroke-[var(--color-bg-secondary)]"
        : "stroke-[var(--color-bg-primary)]",
    ),
    E = v(() =>
      j(
        "inline-flex flex-col items-center gap-1 data-[disabled=true]:opacity-[var(--opacity-disabled)] data-[disabled=true]:cursor-not-allowed",
        i(),
      ),
    );
  var S = lf();
  bt(
    S,
    () => ({
      class: t(E),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": n() ? void 0 : t(b),
      "data-disabled": u() ? "true" : void 0,
      ...f,
    }),
    void 0,
    void 0,
    void 0,
    "svelte-10y2c7k",
  );
  var z = p(S);
  {
    var T = (K) => {
      var B = af(),
        X = p(B);
      (O(
        (Y) => {
          (V(B, 1, Y, "svelte-10y2c7k"), J(X, l()));
        },
        [() => G(j("text-[var(--color-text-muted)] select-none", Ne[o()]))],
      ),
        w(K, B));
    };
    Z(z, (K) => {
      l() && K(T);
    });
  }
  var M = D(z, 2),
    q = p(M),
    U = p(q),
    se = p(U),
    ce = D(se);
  {
    var ge = (K) => {
        var B = nf();
        (O(
          (X) => {
            (V(B, 0, X, "svelte-10y2c7k"),
              he(B, "cx", t(y)),
              he(B, "cy", t(y)),
              he(B, "r", t(k)),
              he(B, "stroke-width", t(x).stroke),
              he(B, "stroke-dasharray", t(c)));
          },
          [() => G(j("pc-bar pc-indet", t(m)))],
        ),
          w(K, B));
      },
      be = (K) => {
        var B = of();
        (O(
          (X) => {
            (V(B, 0, X, "svelte-10y2c7k"),
              he(B, "cx", t(y)),
              he(B, "cy", t(y)),
              he(B, "r", t(k)),
              he(B, "stroke-width", t(x).stroke),
              he(B, "stroke-dasharray", t(h)),
              he(B, "stroke-dashoffset", t(d)));
          },
          [() => G(j("pc-bar", t(m)))],
        ),
          w(K, B));
      };
    Z(ce, (K) => {
      n() ? K(ge) : K(be, !1);
    });
  }
  var $ = D(q, 2);
  {
    var ae = (K) => {
      var B = sf(),
        X = p(B);
      (O(
        (Y) => {
          (V(B, 1, Y, "svelte-10y2c7k"), J(X, `${t(b) ?? ""}%`));
        },
        [
          () =>
            G(
              j(
                "absolute inset-0 flex items-center justify-center text-[var(--color-text-muted)] font-medium select-none",
                Ne[o()],
              ),
            ),
        ],
      ),
        w(K, B));
    };
    Z($, (K) => {
      n() || K(ae);
    });
  }
  (O(() => {
    (lt(M, `width:${t(x).diameter}px;height:${t(x).diameter}px;`),
      he(q, "viewBox", `0 0 ${t(x).diameter} ${t(x).diameter}`),
      he(se, "cx", t(y)),
      he(se, "cy", t(y)),
      he(se, "r", t(k)),
      he(se, "stroke-width", t(x).stroke));
  }),
    w(r, S),
    je());
}
var cf = R("<span><!></span>"),
  df = R("<span> </span>"),
  ff = R(
    '<label><input/> <span aria-hidden="true"><span></span></span> <!></label>',
  );
function mo(r, e) {
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
  const _ = v(() => e.id ?? fn("rd-")),
    C = {
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
    x = {
      xs: "gap-1.5",
      sm: "gap-2",
      md: "gap-2.5",
      lg: "gap-3",
      xl: "gap-3.5",
    },
    y = v(() =>
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
    g =
      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--border-color-focus)] peer-focus-visible:border-[var(--border-color-focus)]",
    d = v(() =>
      o() === "neutral"
        ? "bg-[var(--border-color-strong)]"
        : "bg-[var(--color-bg-primary)]",
    ),
    h = v(() => typeof i() < "u"),
    c = v(() => (t(h) ? i() === u() : s())),
    m = v(() => (t(c) ? "checked" : "unchecked")),
    E = v(() =>
      j("inline-flex items-center cursor-pointer select-none", x[n()], l()),
    ),
    S = v(() =>
      j(
        k,
        g,
        C[n()],
        t(c) && t(y).checked,
        !t(c) && t(y).unchecked,
        "peer-disabled:opacity-[var(--opacity-disabled)] peer-disabled:cursor-not-allowed",
      ),
    ),
    z = v(() =>
      j(
        "rounded-full transition-transform duration-[var(--transition-fast)] ease-[var(--timing-default)]",
        b[n()],
        t(d),
        t(c) ? "scale-100 opacity-100" : "scale-50 opacity-0",
      ),
    ),
    T = v(() =>
      j(
        Ne[n()],
        "[color:var(--color-text-muted)] font-medium peer-disabled:cursor-not-allowed",
      ),
    );
  var M = ff(),
    q = p(M),
    U = (ae) => {
      const K = ae.currentTarget.checked;
      (s(K), e.onChange?.(K));
    };
  bt(
    q,
    () => ({
      id: t(_),
      type: "radio",
      value: u(),
      checked: t(c),
      ...f,
      class: "sr-only peer",
      "aria-checked": t(c),
      "aria-describedby": e.describedBy,
      onchange: U,
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0,
  );
  var se = D(q, 2),
    ce = p(se),
    ge = D(se, 2);
  {
    var be = (ae) => {
        var K = cf(),
          B = p(K);
        (Je(B, () => e.children ?? Q), O(() => V(K, 1, G(t(T)))), w(ae, K));
      },
      $ = (ae) => {
        var K = Le(),
          B = Se(K);
        {
          var X = (Y) => {
            var H = df(),
              ee = p(H);
            (O(() => {
              (V(H, 1, G(t(T))), J(ee, e.label));
            }),
              w(Y, H));
          };
          Z(
            B,
            (Y) => {
              e.label && Y(X);
            },
            !0,
          );
        }
        w(ae, K);
      };
    Z(ge, (ae) => {
      e.children ? ae(be) : ae($, !1);
    });
  }
  (O(() => {
    (V(M, 1, G(t(E))),
      he(M, "for", t(_)),
      he(se, "data-state", t(m)),
      V(se, 1, G(t(S))),
      V(ce, 1, G(t(z))));
  }),
    Ou(a, [], q, () => (u(), i()), i),
    w(r, M),
    je());
}
const vf = (r) => {
  var e = gf();
  w(r, e);
};
var gf = R(
  '<span class="ml-1 inline-flex h-6 w-6 items-center justify-center text-[var(--color-text-muted)]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg></span>',
);
function pf(r, e) {
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
    let u = v(() => `w-full max-w-[520px] [&_input]:pl-10 ${i()}`);
    ma(
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
            return vf;
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
  je();
}
var hf = R('<div class="flex justify-end mt-1"><div> </div></div>'),
  bf = R(
    '<div><div class="relative flex items-center w-full h-10"><div><div></div></div> <input type="range" aria-label="slider"/></div> <!></div>',
  );
function mf(r, e) {
  Be(e, !0);
  let a = F(e, "value", 15, 0),
    n = F(e, "min", 3, 0),
    o = F(e, "max", 3, 100),
    s = F(e, "step", 3, 1),
    i = F(e, "sz", 3, "md"),
    l = F(e, "variant", 3, "default"),
    u = F(e, "disabled", 3, !1),
    f = F(e, "showValue", 3, !1),
    _ = F(e, "class", 3, ""),
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
  const b = v(
      () =>
        ({
          xs: "h-[4px]",
          sm: "h-[5px]",
          md: "h-[6px]",
          lg: "h-[7px]",
          xl: "h-[8px]",
        })[i()],
    ),
    x = v(
      () =>
        ({
          xs: "[&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3",
          sm: "[&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4",
          md: "[&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5",
          lg: "[&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6",
          xl: "[&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7",
        })[i()],
    ),
    y = v(() =>
      l() === "neutral"
        ? "bg-[var(--color-bg-secondary)]"
        : "bg-[var(--color-bg-primary)]",
    ),
    k = v(() =>
      l() === "neutral"
        ? "[&::-webkit-slider-thumb]:bg-[var(--color-bg-secondary)] [&::-moz-range-thumb]:bg-[var(--color-bg-secondary)]"
        : "[&::-webkit-slider-thumb]:bg-[var(--color-bg-primary)] [&::-moz-range-thumb]:bg-[var(--color-bg-primary)]",
    ),
    g = v(() => ba(((a() - n()) / Math.max(1e-12, o() - n())) * 100, 0, 100)),
    d = v(() =>
      j(
        "relative w-full data-[disabled=true]:opacity-[var(--opacity-disabled)]",
        u() ? "cursor-not-allowed" : "cursor-pointer",
        _(),
      ),
    ),
    h = v(() =>
      j(
        "absolute top-1/2 -translate-y-1/2 w-full bg-[var(--color-bg-muted)] rounded overflow-hidden",
        t(b),
      ),
    ),
    c =
      "relative z-10 w-full h-10 bg-transparent appearance-none cursor-pointer disabled:cursor-not-allowed [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-[var(--radius-full)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--color-bg-surface)] [&::-webkit-slider-thumb]:shadow-[var(--shadow-color)] [&::-moz-range-thumb]:rounded-[var(--radius-full)] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--color-bg-surface)] [&::-moz-range-thumb]:shadow-[var(--shadow-color)] hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-125 hover:[&::-moz-range-thumb]:scale-110 active:[&::-moz-range-thumb]:scale-125 focus:outline-none focus-visible:outline-none focus-visible:[&::-webkit-slider-thumb]:shadow-[0_0_0_3px_var(--border-color-focus)] focus-visible:[&::-moz-range-thumb]:shadow-[0_0_0_3px_var(--border-color-focus)] disabled:hover:[&::-webkit-slider-thumb]:scale-100 disabled:active:[&::-webkit-slider-thumb]:scale-100 disabled:hover:[&::-moz-range-thumb]:scale-100 disabled:active:[&::-moz-range-thumb]:scale-100",
    m = v(() => j(c, t(x), t(k)));
  function E(X) {
    const Y = s() || 1,
      H = Math.round((X - n()) / Y),
      ee = n() + H * Y;
    return ba(Number(ee.toFixed(6)), n(), o());
  }
  let S;
  function z(X) {
    const Y = S.getBoundingClientRect(),
      H = ba((X - Y.left) / Y.width, 0, 1);
    (a(E(n() + H * (o() - n()))), e.onInput?.(a()));
  }
  function T(X) {
    u() || z(X.clientX);
  }
  function M(X) {
    const Y = X.currentTarget;
    (a(E(Number(Y.value))), e.onInput?.(a()));
  }
  function q(X) {
    if (u()) return;
    const Y = o() - n(),
      H = Math.max(s() || 1, Math.round(Y / 10));
    let ee = a();
    switch (X.key) {
      case "ArrowLeft":
      case "ArrowDown":
        ee = a() - (s() || 1);
        break;
      case "ArrowRight":
      case "ArrowUp":
        ee = a() + (s() || 1);
        break;
      case "PageDown":
        ee = a() - H;
        break;
      case "PageUp":
        ee = a() + H;
        break;
      case "Home":
        ee = n();
        break;
      case "End":
        ee = o();
        break;
      default:
        return;
    }
    (a(E(ee)), e.onInput?.(a()), X.preventDefault());
  }
  var U = bf(),
    se = (X) => e.onfocus?.(X),
    ce = (X) => e.onblur?.(X);
  bt(U, () => ({
    class: t(d),
    onclick: T,
    onfocusin: se,
    onfocusout: ce,
    "data-disabled": u() ? "true" : void 0,
    ...C,
  }));
  var ge = p(U),
    be = p(ge),
    $ = p(be),
    ae = D(be, 2);
  ((ae.__input = M), (ae.__keydown = q));
  var K = D(ge, 2);
  {
    var B = (X) => {
      var Y = hf(),
        H = p(Y),
        ee = p(H);
      (O(() => {
        (V(
          H,
          1,
          `font-[var(--font-mono)] text-[var(--color-text-muted)] select-none ${Ne[i()] ?? ""}`,
        ),
          J(ee, a()));
      }),
        w(X, Y));
    };
    Z(K, (X) => {
      f() && X(B);
    });
  }
  (ut(
    U,
    (X) => (S = X),
    () => S,
  ),
    O(
      (X) => {
        (V(be, 1, G(t(h))),
          V($, 1, X),
          lt($, `width:${t(g)}%`),
          V(ae, 1, G(t(m))),
          he(ae, "min", n()),
          he(ae, "max", o()),
          he(ae, "step", s()),
          Ci(ae, a()),
          (ae.disabled = u()),
          he(ae, "aria-valuemin", n()),
          he(ae, "aria-valuemax", o()),
          he(ae, "aria-valuenow", a()));
      },
      [() => G(j("w-full h-full transition-[width]", t(y)))],
    ),
    w(r, U),
    je());
}
ct(["input", "keydown"]);
var _f = R(
    '<div class="overflow-auto min-w-0 min-h-0"><!></div> <div class="touch-none select-none z-10 cursor-col-resize bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-hover)] transition-colors"></div> <div class="overflow-auto min-w-0 min-h-0 flex-1"><!></div>',
    1,
  ),
  xf = R(
    '<div class="overflow-auto min-w-0 min-h-0"><!></div> <div class="touch-none select-none z-10 cursor-row-resize bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-hover)] transition-colors"></div> <div class="overflow-auto min-w-0 min-h-0"><!></div>',
    1,
  ),
  wf = R("<div><!></div>");
function ks(r, e) {
  Be(e, !0);
  let a = F(e, "direction", 3, "horizontal"),
    n = F(e, "initialSize", 3, 30),
    o = F(e, "dividerSize", 3, 4),
    s = F(e, "minSize", 3, 10),
    i = F(e, "maxSize", 3, 90),
    l,
    u = v(n),
    f = fe(!1),
    _ = 0,
    C = 0,
    b = 0;
  function x() {
    return l ? (a() === "horizontal" ? l.offsetWidth : l.offsetHeight) : 0;
  }
  function y(S) {
    (A(f, !0),
      (_ = t(u)),
      (C = a() === "horizontal" ? S.clientX : S.clientY),
      (b = x()),
      document.addEventListener("pointermove", k),
      document.addEventListener("pointerup", g),
      document.addEventListener("pointercancel", g),
      S.preventDefault(),
      S.stopPropagation());
  }
  function k(S) {
    if (!t(f)) return;
    const M = (((a() === "horizontal" ? S.clientX : S.clientY) - C) / b) * 100,
      q = _ + M;
    (A(u, Math.max(s(), Math.min(i(), q))),
      S.preventDefault(),
      S.stopPropagation());
  }
  function g() {
    (A(f, !1),
      document.removeEventListener("pointermove", k),
      document.removeEventListener("pointerup", g),
      document.removeEventListener("pointercancel", g));
  }
  Ke(() => {
    const S = () => {
      b = x();
    };
    return (
      window.addEventListener("resize", S),
      () => window.removeEventListener("resize", S)
    );
  });
  var d = wf();
  let h;
  var c = p(d);
  {
    var m = (S) => {
        var z = _f(),
          T = Se(z),
          M = p(T);
        Je(M, () => e.first ?? Q);
        var q = D(T, 2);
        q.__pointerdown = y;
        var U = D(q, 2),
          se = p(U);
        (Je(se, () => e.second ?? Q),
          O(() => {
            (lt(T, `width: ${t(u) ?? ""}%`), lt(q, `width: ${o() ?? ""}px`));
          }),
          w(S, z));
      },
      E = (S) => {
        var z = xf(),
          T = Se(z),
          M = p(T);
        Je(M, () => e.first ?? Q);
        var q = D(T, 2);
        q.__pointerdown = y;
        var U = D(q, 2),
          se = p(U);
        (Je(se, () => e.second ?? Q),
          O(() => {
            (lt(T, `height: ${t(u) ?? ""}%`),
              lt(q, `height: ${o() ?? ""}px`),
              lt(U, `height: calc(100% - ${t(u) ?? ""}% - ${o() ?? ""}px)`));
          }),
          w(S, z));
      };
    Z(c, (S) => {
      a() === "horizontal" ? S(m) : S(E, !1);
    });
  }
  (ut(
    d,
    (S) => (l = S),
    () => l,
  ),
    O(
      () =>
        (h = V(d, 1, "w-full h-full overflow-hidden", null, h, {
          flex: a() === "horizontal",
          "flex-col": a() === "vertical",
        })),
    ),
    w(r, d),
    je());
}
ct(["pointerdown"]);
var yf = R("<span> </span>"),
  kf = R("<span> </span>"),
  Cf = R("<span> </span>"),
  Sf = R(
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
  const i = v(() => e.id ?? fn("sw-")),
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
    _ = v(() => ("disabled" in s ? !!e.disabled : !1));
  function C() {
    t(_) || (n(!n()), e.onChange?.(n()));
  }
  const b = v(() => (n() ? "justify-end" : "justify-start")),
    x = v(() =>
      j(
        "relative inline-flex items-center rounded-full border transition focus:outline-none focus:ring-2 focus:ring-[var(--border-color-focus)]",
        l[a()],
        f[a()],
        n()
          ? "bg-[var(--color-bg-primary)] border-[var(--color-bg-primary)]"
          : "bg-[var(--color-bg-muted)] border-[var(--border-color-default)]",
        t(_)
          ? "opacity-[var(--opacity-disabled)] cursor-not-allowed"
          : "cursor-pointer",
        t(b),
      ),
    ),
    y = v(() => j("inline-flex flex-col items-center gap-1 select-none", o())),
    k = v(() =>
      j(
        u[a()],
        "rounded-full bg-white border border-[var(--border-color-default)] shadow-sm",
      ),
    );
  var g = Sf(),
    d = p(g);
  {
    var h = (se) => {
      var ce = yf(),
        ge = p(ce);
      (O(() => {
        (V(ce, 1, `text-[var(--color-text-muted)] ${Ne[a()] ?? ""}`),
          J(ge, e.topLabel));
      }),
        w(se, ce));
    };
    Z(d, (se) => {
      e.topLabel && se(h);
    });
  }
  var c = D(d, 2),
    m = p(c);
  {
    var E = (se) => {
      var ce = kf(),
        ge = p(ce);
      (O(() => {
        (V(ce, 1, `text-[var(--color-text-muted)] ${Ne[a()] ?? ""}`),
          J(ge, e.leftLabel));
      }),
        w(se, ce));
    };
    Z(m, (se) => {
      e.leftLabel && se(E);
    });
  }
  var S = D(m, 2),
    z = () => C();
  bt(
    S,
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
  var T = D(S, 2);
  T.__click = C;
  var M = p(T),
    q = D(T, 2);
  {
    var U = (se) => {
      var ce = Cf(),
        ge = p(ce);
      (O(() => {
        (V(ce, 1, `text-[var(--color-text-muted)] ${Ne[a()] ?? ""}`),
          J(ge, e.rightLabel));
      }),
        w(se, ce));
    };
    Z(q, (se) => {
      e.rightLabel && se(U);
    });
  }
  (O(() => {
    (V(g, 1, G(t(y))),
      he(g, "for", t(i)),
      V(T, 1, G(t(x))),
      he(T, "aria-pressed", n()),
      he(
        T,
        "aria-label",
        typeof s["aria-label"] == "string" ? s["aria-label"] : "Switch",
      ),
      (T.disabled = t(_)),
      V(M, 1, G(t(k))));
  }),
    w(r, g),
    je());
}
ct(["click"]);
var Pf = R(
    '<th scope="col"><button type="button"><span> </span> <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5.23 11.77a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L10 8.31l-3.77 3.46a.75.75 0 0 1-1 0z" fill="currentColor"></path></svg></button></th>',
  ),
  Ef = R("<tr></tr>"),
  zf = R("<td><div> </div></td>"),
  Af = R("<tr></tr>"),
  Ff = R('<div class="mt-3 flex justify-between items-center"><!></div>'),
  Tf = R(
    '<div tabindex="-1"><table><thead><!></thead><tbody></tbody></table> <!></div>',
  );
function Lf(r, e) {
  Be(e, !0);
  let a = F(e, "columns", 19, () => []),
    n = F(e, "rows", 19, () => []),
    o = F(e, "class", 3, ""),
    s = F(e, "variant", 3, "default"),
    i = F(e, "stickyHeader", 3, !1),
    l = F(e, "sz", 3, "md"),
    u = fe(null),
    f = fe(null);
  function _($) {
    const ae = $.key;
    t(u) !== ae
      ? (A(u, ae, !0), A(f, "asc"))
      : A(f, t(f) === "asc" ? "desc" : "asc", !0);
  }
  function C($, ae) {
    const K = $ == null || $ === "",
      B = ae == null || ae === "";
    if (K && B) return 0;
    if (K) return 1;
    if (B) return -1;
    const X = Number($),
      Y = Number(ae),
      H = !Number.isNaN(X),
      ee = !Number.isNaN(Y);
    return H && ee
      ? X - Y
      : String($).localeCompare(String(ae), void 0, {
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
    x = v(() => {
      const $ = Array.isArray(n()) ? n() : [];
      if (!t(u) || !t(f)) return $;
      const ae = t(u),
        K = $.map((B, X) => [B, X]);
      return (
        K.sort(([B, X], [Y, H]) => {
          const ee = C(B[ae], Y[ae]);
          return ee !== 0 ? (t(f) === "asc" ? ee : -ee) : X - H;
        }),
        K.map(([B]) => B)
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
    g = v(() => j("overflow-x-auto", o())),
    d = v(() => Ne[l()]),
    h = v(s),
    c = v(() => t(h) === "list" || t(h) === "dense"),
    m = v(() => b[t(h)] ?? b.default),
    E = v(() =>
      j(
        t(c) ? "inline-table w-fit" : "min-w-full",
        "border-collapse",
        t(m).table,
        t(d),
        "text-[var(--color-text-default)]",
      ),
    ),
    S = ($, ae) => {
      const K =
        typeof $.id == "string" || typeof $.id == "number"
          ? $.id
          : typeof $.key == "string" || typeof $.key == "number"
            ? $.key
            : ae;
      return String(K);
    },
    z = ($, ae) => String($.key ?? ae);
  var T = Tf(),
    M = p(T),
    q = p(M),
    U = p(q);
  {
    var se = ($) => {
      var ae = Ef();
      (nt(
        ae,
        23,
        a,
        (K, B) => z(K, B),
        (K, B) => {
          var X = Pf(),
            Y = p(X);
          ((Y.__click = () => _(t(B))),
            (Y.__keydown = (_e) => {
              (_e.key === "Enter" || _e.key === " ") &&
                (_e.preventDefault(), _(t(B)));
            }));
          var H = p(Y),
            ee = p(H),
            pe = D(H, 2);
          (O(
            (_e, ve, I, P) => {
              (lt(X, !t(c) && t(B).width ? `width:${t(B).width}` : void 0),
                V(X, 1, _e),
                he(
                  X,
                  "aria-sort",
                  t(u) === t(B).key
                    ? t(f) === "asc"
                      ? "ascending"
                      : "descending"
                    : "none",
                ),
                V(Y, 1, ve),
                he(Y, "aria-label", `Sort by ${t(B).label}`),
                V(H, 1, I),
                J(ee, t(B).label),
                V(pe, 0, P));
            },
            [
              () => G(j("px-3 font-semibold", t(m).padY, y(t(B).align))),
              () =>
                G(
                  j(
                    "flex w-full items-center gap-2 select-none hover:bg-[var(--color-bg-hover)] rounded-none px-1 py-0.5 border border-transparent focus-visible:border-[var(--border-color-focus)] focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus-visible:outline-none",
                    k(t(B).align),
                  ),
                ),
              () => G(j("truncate min-w-0", y(t(B).align))),
              () =>
                G(
                  j(
                    "h-4 w-4 opacity-60 transition-transform",
                    t(u) === t(B).key && t(f) === "desc" && "rotate-180",
                  ),
                ),
            ],
          ),
            w(K, X));
        },
      ),
        O((K) => V(ae, 1, K), [() => G(j(i() && "sticky top-0 z-10"))]),
        w($, ae));
    };
    Z(U, ($) => {
      t(h) !== "noTitle" && t(h) !== "list" && $(se);
    });
  }
  var ce = D(q);
  nt(
    ce,
    23,
    () => t(x),
    ($, ae) => S($, ae),
    ($, ae) => {
      var K = Af();
      (nt(
        K,
        23,
        a,
        (B, X) => z(B, X),
        (B, X) => {
          var Y = zf(),
            H = p(Y),
            ee = p(H);
          (O(
            (pe, _e) => {
              (lt(Y, !t(c) && t(X).width ? `width:${t(X).width}` : void 0),
                V(Y, 1, pe),
                V(H, 1, _e),
                J(ee, t(ae)[t(X).key]));
            },
            [
              () => G(j("px-3", t(m).padY, y(t(X).align), t(m).cell)),
              () => G(j(t(c) && "break-words whitespace-normal")),
            ],
          ),
            w(B, Y));
        },
      ),
        O((B) => V(K, 1, B), [() => G(j("first:[&>td]:border-t-0", t(m).row))]),
        w($, K));
    },
  );
  var ge = D(M, 2);
  {
    var be = ($) => {
      var ae = Ff(),
        K = p(ae);
      (Li(
        K,
        Ei(() => e.pagination),
      ),
        w($, ae));
    };
    Z(ge, ($) => {
      e.pagination && e.pagination.totalPages > 0 && $(be);
    });
  }
  (O(() => {
    (V(T, 1, G(t(g))),
      V(M, 1, G(t(E))),
      V(q, 1, G(t(m).header)),
      V(ce, 1, G(t(m).body)));
  }),
    w(r, T),
    je());
}
ct(["click", "keydown"]);
var Mf = R('<button type="button" role="tab"><span> </span></button>'),
  Df = R(
    '<div><div role="tablist" tabindex="0" aria-orientation="horizontal"></div> <div role="tabpanel" tabindex="-1" class="w-full min-w-0 relative z-0 border-t border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-[var(--spacing-md)] rounded-b-[var(--radius-sm)] shadow-[0_1px_2px_0_var(--shadow-color)]"><!></div></div>',
  );
function If(r, e) {
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
      n() && !a().find((E) => E.id === n()) && a().length && n(a()[0].id));
  });
  function f() {
    if (!n()) return;
    document.getElementById(`tab-${n()}`)?.focus();
  }
  function _(E) {
    E.disabled || (n(E.id), e.onChange?.(E.id));
  }
  function C(E) {
    const S = a().filter((q) => !q.disabled);
    if (!S.length) return;
    const z = Math.max(
      0,
      S.findIndex((q) => q.id === n()),
    );
    let T = z;
    if (E.key === "ArrowRight") T = (z + 1) % S.length;
    else if (E.key === "ArrowLeft") T = (z - 1 + S.length) % S.length;
    else if (E.key === "Home") T = 0;
    else if (E.key === "End") T = S.length - 1;
    else return;
    E.preventDefault();
    const M = S[T].id;
    (n(M), e.onChange?.(M), queueMicrotask(f));
  }
  const b = {
      xs: "px-2 py-1",
      sm: "px-3 py-1.5",
      md: "px-4 py-2",
      lg: "px-5 py-2.5",
      xl: "px-6 py-3",
    },
    x =
      "inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus-visible:ring-offset-0 focus:outline-none disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
    y = v(() => ({
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
    k = v(() => j("w-full self-stretch flex flex-col", Ne[o()], l())),
    g = v(() =>
      j(
        "flex w-full flex-nowrap overflow-x-auto whitespace-nowrap relative z-10 bg-[var(--color-bg-surface)]",
        Ne[o()],
        s() === "pills" && "gap-1",
        s() === "underline" && "gap-6",
        i() ? "justify-between" : "justify-start",
      ),
    );
  var d = Df();
  bt(d, () => ({ class: t(k), ...u }));
  var h = p(d);
  ((h.__keydown = C),
    nt(
      h,
      21,
      a,
      (E) => E.id,
      (E, S) => {
        var z = Mf();
        ((z.__click = () => _(t(S))),
          (z.__keydown = (q) => {
            (q.key === "Enter" || q.key === " ") &&
              (q.preventDefault(), _(t(S)));
          }));
        var T = p(z),
          M = p(T);
        (O(
          (q) => {
            (he(z, "id", `tab-${t(S).id}`),
              he(z, "aria-selected", t(S).id === n() ? "true" : "false"),
              he(z, "aria-controls", `panel-${t(S).id}`),
              he(z, "aria-disabled", t(S).disabled ? "true" : "false"),
              he(z, "tabindex", t(S).id === n() ? 0 : -1),
              (z.disabled = t(S).disabled),
              V(z, 1, q),
              J(M, t(S).label));
          },
          [
            () =>
              G(
                j(
                  "relative z-20",
                  x,
                  b[o()],
                  Ne[o()],
                  i() ? "basis-0 grow flex-1 min-w-0 text-center" : "shrink-0",
                  t(y)[s()]?.base,
                  t(S).id === n()
                    ? t(y)[s()]?.active
                    : t(S).disabled
                      ? ""
                      : t(y)[s()]?.hover,
                ),
              ),
          ],
        ),
          w(E, z));
      },
    ));
  var c = D(h, 2),
    m = p(c);
  (Je(m, () => e.children ?? Q),
    O(() => {
      (V(h, 1, G(t(g))),
        he(c, "id", `panel-${n()}`),
        he(c, "aria-labelledby", `tab-${n()}`));
    }),
    kt("focus", h, f),
    w(r, d),
    je());
}
ct(["keydown", "click"]);
var Nf = Wt(
    '<svg class="w-[1em] h-[1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4" fill="currentColor"></circle><line x1="12" y1="1" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line></svg>',
  ),
  Of =
    Wt(`<svg class="w-[1em] h-[1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2
       A9 9 0 1 0 21 12
       A7.5 7.5 0 1 1 12 2
       Z" fill="currentColor"></path></svg>`),
  Bf = R("<button><!></button>");
function Cs(r, e) {
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
    l = ps.get(i, !1);
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
    _ = {
      xs: "px-2 py-0.5 h-6",
      sm: "px-3 py-1 h-7",
      md: "px-4 py-2 h-8",
      lg: "px-5 py-2.5 h-9",
      xl: "px-6 py-3 h-10",
    },
    C = "fixed top-4 right-4",
    b = v(() => j(a() ? null : C, f, _[n()], Ne[n()], a()));
  Ke(() => {
    (document.documentElement.classList.toggle("dark", t(u)), ps.set(i, t(u)));
  });
  var x = Bf(),
    y = () => A(u, !t(u));
  bt(x, () => ({
    type: o(),
    disabled: e.disabled,
    class: t(b),
    onclick: y,
    "aria-label": t(u) ? "Switch to light mode" : "Switch to dark mode",
    ...s,
  }));
  var k = p(x);
  {
    var g = (h) => {
        var c = Nf();
        w(h, c);
      },
      d = (h) => {
        var c = Of();
        w(h, c);
      };
    Z(k, (h) => {
      t(u) ? h(g) : h(d, !1);
    });
  }
  (w(r, x), je());
}
var jf = R("<!> <!>", 1),
  Rf = R(
    '<div><div class="text-sm font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex flex-wrap items-start gap-4"><div class="flex flex-wrap gap-3 min-w-[0] flex-1"><!> <!></div> <div class="flex items-center gap-3 basis-full pt-2"><!> <!></div></div> <div class="mt-4 p-4 bg-[var(--color-bg-surface)] text-center"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div></div>',
  );
function Vf(r, e) {
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
    _ = v(() => f?.value ?? "en"),
    C = v(() => Aa[t(_)].components.timePicker),
    b = v(() => e.label ?? t(C).text),
    x = v(() => e.placeholder ?? t(C).placeholder),
    y = v(() => j("inline-block w-full", l()));
  let k = v(i),
    g = fe("00"),
    d = fe("00"),
    h = fe("AM");
  const c = v(() => a() != null),
    m = Array.from({ length: 24 }, (de, Ae) => {
      const L = Ae.toString().padStart(2, "0");
      return { value: L, label: L };
    }),
    E = Array.from({ length: 12 }, (de, Ae) => {
      const L = (Ae + 1).toString().padStart(2, "0");
      return { value: L, label: L };
    }),
    S = [
      { value: "AM", label: "AM" },
      { value: "PM", label: "PM" },
    ],
    z = v(() =>
      !n() || n() <= 0 ? 1 : Math.min(60, Math.max(1, Math.round(n() / 60))),
    ),
    T = v(() => {
      const de = [];
      for (let Ae = 0; Ae < 60; Ae += t(z)) {
        const L = Ae.toString().padStart(2, "0");
        de.push({ value: L, label: L });
      }
      return de;
    });
  function M(de) {
    return de.padStart(2, "0").slice(-2);
  }
  function q() {
    const de =
      t(k) === "english" ? `${t(g)}:${t(d)} ${t(h)}` : `${t(g)}:${t(d)}`;
    (a(de), e.onChange?.(de));
  }
  function U(de) {
    (A(g, M(de), !0), q());
  }
  function se(de) {
    (A(d, M(de), !0), q());
  }
  function ce(de) {
    (A(g, M(de), !0), q());
  }
  function ge(de) {
    (A(h, de === "AM" || de === "PM" ? de : "AM", !0), q());
  }
  function be() {
    o() ||
      (t(k) === "iso"
        ? (A(k, "english"), parseInt(t(g), 10) >= 0 && A(g, "12"), ge("AM"))
        : A(k, "iso"),
      q());
  }
  function $() {
    s() && (A(g, "00"), A(d, "00"), A(h, "AM"), a(null), e.onChange?.(null));
  }
  Ke(() => {
    if (a() == null) return;
    let de = a();
    (de.includes("AM") || de.includes("PM")) &&
      (de = de.replace(" AM", "").replace(" PM", ""));
    const [Ae, L] = de.split(":");
    (A(g, M(Ae), !0), A(d, M(L), !0));
  });
  var ae = Rf();
  bt(ae, () => ({ class: t(y), ...u }));
  var K = p(ae),
    B = p(K),
    X = D(K, 2),
    Y = p(X),
    H = p(Y);
  {
    var ee = (de) => {
        Kt(de, {
          get label() {
            return t(C).hour;
          },
          get options() {
            return m;
          },
          get value() {
            return t(g);
          },
          onChange: U,
          get disabled() {
            return o();
          },
          sz: "sm",
        });
      },
      pe = (de) => {
        var Ae = jf(),
          L = Se(Ae);
        Kt(L, {
          get label() {
            return t(C).hour;
          },
          get options() {
            return E;
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
        (Kt(re, {
          get label() {
            return t(C).period;
          },
          get options() {
            return S;
          },
          get value() {
            return t(h);
          },
          onChange: ge,
          get disabled() {
            return o();
          },
          sz: "sm",
        }),
          w(de, Ae));
      };
    Z(H, (de) => {
      t(k) === "iso" ? de(ee) : de(pe, !1);
    });
  }
  var _e = D(H, 2);
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
    onChange: se,
    get disabled() {
      return o();
    },
    sz: "sm",
  });
  var ve = D(Y, 2),
    I = p(ve);
  ot(I, {
    onClick: be,
    get disabled() {
      return o();
    },
    sz: "xs",
    children: (de, Ae) => {
      var L = Re();
      (O(() => J(L, t(k) === "iso" ? t(C).switchTo12h : t(C).switchTo24h)),
        w(de, L));
    },
    $$slots: { default: !0 },
  });
  var P = D(I, 2);
  {
    var te = (de) => {
      {
        let Ae = v(() => !t(c) || o());
        ot(de, {
          onClick: $,
          variant: "danger",
          get disabled() {
            return t(Ae);
          },
          sz: "xs",
          children: (L, re) => {
            var le = Re();
            (O(() => J(le, t(C).clear)), w(L, le));
          },
          $$slots: { default: !0 },
        });
      }
    };
    Z(P, (de) => {
      s() && de(te);
    });
  }
  var N = D(X, 2),
    ne = p(N),
    ue = p(ne),
    oe = D(ne, 2),
    Fe = p(oe);
  {
    var Ce = (de) => {
        var Ae = Re();
        (O(() => J(Ae, a())), w(de, Ae));
      },
      Ee = (de) => {
        var Ae = Re();
        (O(() => J(Ae, t(x))), w(de, Ae));
      };
    Z(Fe, (de) => {
      t(c) ? de(Ce) : de(Ee, !1);
    });
  }
  (O(() => {
    (J(B, t(b)), J(ue, t(C).selectedTime));
  }),
    w(r, ae),
    je());
}
var qf = R('<div role="tooltip"> </div>'),
  Uf = R("<div><!> <!></div>");
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
    _ = fe(!1),
    C;
  const b = v(() => o() || t(f) || t(_));
  Ke(
    () => (
      C && clearTimeout(C),
      t(b)
        ? (C = setTimeout(() => {
            A(u, !0);
          }, n()))
        : A(u, !1),
      () => {
        C && clearTimeout(C);
      }
    ),
  );
  const x = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
    },
    y = v(() => j("relative inline-block", i())),
    k = v(() =>
      j(
        "absolute z-20 p-0.5 italic text-xs font-medium whitespace-nowrap rounded-[var(--radius-xs)]",
        "bg-[var(--color-bg-surface)] text-[var(--color-text-default)] shadow-lg border border-[var(--border-color-default)]",
        "transition-opacity duration-150 ease-linear",
        t(u) ? "opacity-100" : "opacity-0 pointer-events-none",
      ),
    );
  var g = Uf(),
    d = () => A(f, !0),
    h = () => A(f, !1),
    c = () => A(_, !0),
    m = () => A(_, !1);
  bt(g, () => ({
    class: t(y),
    onmouseenter: d,
    onmouseleave: h,
    onfocus: c,
    onblur: m,
    ...l,
  }));
  var E = p(g);
  Je(E, () => e.children ?? Q);
  var S = D(E, 2);
  {
    var z = (T) => {
      var M = qf(),
        q = p(M);
      (O(
        (U) => {
          (V(M, 1, U), J(q, s()));
        },
        [() => G(j(t(k), x[a()]))],
      ),
        w(T, M));
    };
    Z(S, (T) => {
      s() && t(u) && T(z);
    });
  }
  (w(r, g), je());
}
var Hf = R(
  '<header class="flex items-end justify-between gap-4 -mx-5 px-5 py-5 border-b border-[var(--border-color-default)]"><h2 class="text-2xl font-semibold tracking-tight"> </h2> <span class="text-sm [color:var(--color-text-muted)]"> </span></header> <div class="p-5 space-y-4 text-sm opacity-90 leading-relaxed"><p><strong> </strong> <strong> </strong> <strong> </strong> </p> <p> <code> </code> <code> </code> </p> <p> </p> <p> <strong> </strong><br/> <a><strong> </strong></a></p></div>',
  1,
);
function Kf(r, e) {
  Be(e, !0);
  const a = Gt("lang"),
    n = v(() => za[a.value]);
  (vn(r, {
    children: (o, s) => {
      var i = Hf(),
        l = Se(i),
        u = p(l),
        f = p(u),
        _ = D(u, 2),
        C = p(_),
        b = D(l, 2),
        x = p(b),
        y = p(x),
        k = p(y),
        g = D(y),
        d = D(g),
        h = p(d),
        c = D(d),
        m = D(c),
        E = p(m),
        S = D(m),
        z = D(x, 2),
        T = p(z),
        M = D(T),
        q = p(M),
        U = D(M),
        se = D(U),
        ce = p(se),
        ge = D(se),
        be = D(z, 2),
        $ = p(be),
        ae = D(be, 2),
        K = p(ae),
        B = D(K),
        X = p(B),
        Y = D(B, 2),
        H = D(Y),
        ee = p(H),
        pe = p(ee);
      (O(() => {
        (J(f, t(n).about.heading),
          J(C, t(n).about.meta),
          J(k, t(n).app.title),
          J(g, `${t(n).about.intro.description ?? ""} `),
          J(h, t(n).about.intro.frameworks.runes),
          J(c, ` ${t(n).about.intro.connector ?? ""} `),
          J(E, t(n).about.intro.frameworks.tailwind),
          J(S, ` ${t(n).about.intro.closing ?? ""}`),
          J(T, `${t(n).about.styling.beforeFile ?? ""} `),
          J(q, t(n).about.styling.file),
          J(U, `${t(n).about.styling.afterFile ?? ""} `),
          J(ce, t(n).about.styling.darkClass),
          J(ge, ` ${t(n).about.styling.afterDark ?? ""}`),
          J($, t(n).about.patterns),
          J(K, `${t(n).about.versionLabel ?? ""}: `),
          J(X, t(n).app.version),
          J(Y, ` ${t(n).about.authorLabel ?? ""}: `),
          he(H, "href", t(n).app.authorUrl),
          J(pe, t(n).about.authorName));
      }),
        w(o, i));
    },
    $$slots: { default: !0 },
  }),
    je());
}
var Gf = R(
  '<div><div class="flex flex-wrap items-baseline gap-3"><div class="shrink-0"><!></div> <!></div> <div class="codeview-shell w-full h-[320px] md:h-[480px]"><!></div></div>',
);
function Wf(r, e) {
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
  const _ = v(() => l[t(i)]),
    C = v(() => t(u).trimStart());
  Ke(() => {
    t(_) !== t(u) && A(u, t(_), !0);
  });
  var b = Gf(),
    x = p(b),
    y = p(x),
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
  var g = D(y, 2);
  Mi(g, {
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
  var d = D(x, 2),
    h = p(d);
  (Fi(h, {
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
    O(() => V(b, 1, `w-full flex flex-col gap-3 ${a() ?? ""}`)),
    w(r, b),
    je());
}
var Zf = R('<header class="p-[var(--spacing-md,1rem)]"><!></header>'),
  Yf = R(
    '<aside class="hidden lg:block p-[var(--spacing-md,1rem)]"><!></aside>',
  ),
  Xf = R(
    '<aside class="hidden lg:block p-[var(--spacing-md,1rem)]"><!></aside>',
  ),
  Jf = R('<footer class="p-[var(--spacing-md,1rem)]"><!></footer>'),
  Qf = R(
    '<div><div class="grid min-h-dvh grid-rows-[auto_1fr_auto]"><!> <!> <main class="p-[var(--spacing-md,1rem)]"><!></main> <!> <!></div></div>',
  );
function $f(r, e) {
  Be(e, !0);
  let a = F(e, "class", 3, "");
  const n =
      "min-h-dvh w-full bg-[var(--color-bg-page,oklch(98%_0_0))] text-[var(--color-text-default,oklch(15%_0_0))] transition-colors duration-[var(--transition-normal,300ms)]",
    o = v(() => j(n, a()));
  var s = Qf(),
    i = p(s),
    l = p(i);
  {
    var u = (d) => {
      var h = Zf(),
        c = p(h);
      (Je(c, () => e.header ?? Q), w(d, h));
    };
    Z(l, (d) => {
      e.header && d(u);
    });
  }
  var f = D(l, 2);
  {
    var _ = (d) => {
      var h = Yf(),
        c = p(h);
      (Je(c, () => e.left ?? Q), w(d, h));
    };
    Z(f, (d) => {
      e.left && d(_);
    });
  }
  var C = D(f, 2),
    b = p(C);
  Je(b, () => e.children ?? Q);
  var x = D(C, 2);
  {
    var y = (d) => {
      var h = Xf(),
        c = p(h);
      (Je(c, () => e.right ?? Q), w(d, h));
    };
    Z(x, (d) => {
      e.right && d(y);
    });
  }
  var k = D(x, 2);
  {
    var g = (d) => {
      var h = Jf(),
        c = p(h);
      (Je(c, () => e.footer ?? Q), w(d, h));
    };
    Z(k, (d) => {
      e.footer && d(g);
    });
  }
  (O(() => V(s, 1, G(t(o)))), w(r, s), je());
}
const Yo = Ru([]);
let ev = 0;
function An(r, e) {
  const a = ev++,
    n = ec(r, e?.message);
  Yo.update((o) => [
    ...o,
    {
      id: a,
      title: e?.title ?? n.title,
      message: e?.message ?? n.message,
      variant: r,
    },
  ]);
}
function tv(r) {
  Yo.update((e) => e.filter((a) => a.id !== r));
}
function rv(r) {
  An(r);
}
var av = R("<div><!></div> <!>", 1);
function nv(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "sm"),
    n = F(e, "class", 3, ""),
    o = F(e, "message", 3, ""),
    s = v(a);
  const i = Gt("lang"),
    l = v(() => za[i.value]);
  let u = fe(!1);
  Ke(() => {
    A(s, a());
  });
  function f() {
    A(u, !0);
  }
  function _() {
    (A(u, !1),
      An("success", {
        title: t(l).toasts.confirmTitle,
        message: t(l).toasts.confirmMessage,
      }));
  }
  function C() {
    (A(u, !1),
      An("warning", {
        title: t(l).toasts.cancelTitle,
        message: t(l).toasts.cancelMessage,
      }));
  }
  var b = av(),
    x = Se(b),
    y = p(x);
  ot(y, {
    variant: "primary",
    onClick: f,
    children: (g, d) => {
      var h = Re();
      (O(() => J(h, t(l).snippets.dialog.button)), w(g, h));
    },
    $$slots: { default: !0 },
  });
  var k = D(x, 2);
  (To(k, {
    get title() {
      return t(l).snippets.dialog.title;
    },
    get sz() {
      return t(s);
    },
    get open() {
      return t(u);
    },
    onConfirm: _,
    onCancel: C,
    get class() {
      return n();
    },
    get message() {
      return o();
    },
  }),
    O((g) => V(x, 1, g), [() => G(j("flex flex-wrap gap-3"))]),
    w(r, b),
    je());
}
var ov = R(
    '<div class="p-4 flex justify-center font-semibold text-[var(--color-text-default)] text-lg"> </div>',
  ),
  sv = R(
    '<div class="p-4 flex justify-center gap-[var(--spacing-sm)]"><!> <!> <!></div>',
  );
function iv(r, e) {
  Be(e, !0);
  const a = (y) => {
      var k = ov(),
        g = p(k);
      (O(() => J(g, t(i).form.header)), w(y, k));
    },
    n = (y) => {
      var k = sv(),
        g = p(k);
      Ft(g, {
        get text() {
          return t(i).form.footer.submit;
        },
        children: (c, m) => {
          ot(c, {
            variant: "primary",
            type: "submit",
            form: l,
            children: (E, S) => {
              var z = Re();
              (O(() => J(z, t(i).form.footer.submit)), w(E, z));
            },
            $$slots: { default: !0 },
          });
        },
        $$slots: { default: !0 },
      });
      var d = D(g, 2);
      Ft(d, {
        get text() {
          return t(i).form.footer.cancel;
        },
        children: (c, m) => {
          ot(c, {
            variant: "secondary",
            type: "button",
            onClick: C,
            children: (E, S) => {
              var z = Re();
              (O(() => J(z, t(i).form.footer.cancel)), w(E, z));
            },
            $$slots: { default: !0 },
          });
        },
        $$slots: { default: !0 },
      });
      var h = D(d, 2);
      (Ft(h, {
        get text() {
          return t(i).form.footer.random;
        },
        children: (c, m) => {
          ot(c, {
            variant: "info",
            type: "button",
            onClick: x,
            children: (E, S) => {
              var z = Re();
              (O(() => J(z, t(i).form.footer.random)), w(E, z));
            },
            $$slots: { default: !0 },
          });
        },
        $$slots: { default: !0 },
      }),
        w(y, k));
    };
  let o = F(e, "onSubmit", 3, () => {});
  const s = Gt("lang"),
    i = v(() => za[s.value]),
    l = "profile-form";
  let u = fe(null);
  const f = v(() => [
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
  function _(y) {
    o()(y);
  }
  function C() {
    t(u)?.reset();
  }
  function b(y) {
    A(u, y, !0);
  }
  function x() {
    if (!t(u)) return;
    const y = ["John", "Alex", "Tom", "Sam", "Anna", "Jessica", "Sarah"],
      k = ["Smith", "Williams", "Brown", "Johnson", "Miller"],
      g = (c) => c[Math.floor(Math.random() * c.length)],
      d = (c, m) => Math.floor(Math.random() * (m - c + 1)) + c,
      h = Math.random().toString(36).slice(2, 10);
    for (const c of t(f))
      switch (c.type) {
        case "text": {
          const m = c.name.toLowerCase();
          m.includes("first")
            ? t(u).setValue(c.name, g(y))
            : m.includes("last")
              ? t(u).setValue(c.name, g(k))
              : t(u).setValue(c.name, g(y));
          break;
        }
        case "password":
          t(u).setValue(c.name, h);
          break;
        case "number":
          t(u).setValue(c.name, d(18, 100));
          break;
        case "email":
          t(u).setValue(
            c.name,
            `${g(y).toLowerCase()}.${g(k).toLowerCase()}@example.com`,
          );
          break;
        case "select": {
          const m = c.options ?? [];
          if (m.length > 0) {
            const E = d(0, m.length - 1);
            t(u).setValue(c.name, String(m[E].value));
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
  (vn(r, {
    get header() {
      return a;
    },
    get footer() {
      return n;
    },
    children: (y, k) => {
      Fd(y, {
        get schema() {
          return t(f);
        },
        rowGap: "xl",
        onSubmit: _,
        formId: l,
        expose: b,
        labelAlign: "left",
        compact: !1,
      });
    },
    $$slots: { default: !0 },
  }),
    je());
}
var lv = R(
  '<div><div class="w-full border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] overflow-x-auto overflow-y-visible"><!></div> <div class="bg-[var(--color-bg-surface)] h-40 border border-[var(--border-color-default)] border-t-0 p-4 text-[var(--color-text-muted)]"> </div></div>',
);
function uv(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "sm"),
    n = F(e, "class", 3, ""),
    o = v(a);
  const s = Gt("lang"),
    i = v(() => za[s.value].menuDemo),
    l = v(() => [
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
  let u = v(() => "");
  function f(k, g) {
    const d = typeof g == "string" ? g : g.label || g.id || t(i).fallbackLabel,
      h = typeof g == "string" ? g : g.id;
    (h && ["xs", "sm", "md", "lg", "xl"].includes(h) && A(o, h),
      A(u, `${k}: ${d}`),
      console.log("Selected:", k, g));
  }
  (Ke(() => {
    A(o, a());
  }),
    Ke(() => {
      A(u, t(i).prompt);
    }));
  var _ = lv(),
    C = p(_),
    b = p(C);
  Ti(b, {
    get sz() {
      return t(o);
    },
    get menus() {
      return t(l);
    },
    onSelect: f,
  });
  var x = D(C, 2),
    y = p(x);
  (O(() => {
    (V(_, 1, `flex flex-col w-full ${n() ?? ""}`), J(y, t(u)));
  }),
    w(r, _),
    je());
}
var cv = R(
    "<div><div><span> </span> <span> </span> <span> </span> <span> </span></div> <div><span> </span> <span> </span></div></div>",
  ),
  dv = R("<div><p> </p> <div><!></div></div>"),
  fv = R(
    '<div><div class="overflow-x-auto overflow-y-visible w-full min-w-full bg-[var(--color-bg-surface)] border-b border-[var(--border-color-default)]"><!></div> <!> <!> <input type="file" class="hidden" accept=".txt,.md,.log,.html,.css,.js,.json,.py,.yml,.yaml,*/*"/> <!> <!> <!></div>',
  );
function vv(r, e) {
  Be(e, !0);
  let a = F(e, "L", 19, () => ({})),
    n = F(e, "lang", 7, "txt"),
    o = F(e, "sz", 7, "sm"),
    s = F(e, "class", 3, "");
  const i = v(() => a()?.notepad?.menu ?? {}),
    l = v(() => a()?.notepad?.actions ?? {}),
    u = v(() => a()?.menuItems ?? {}),
    f = v(() => t(i).file ?? t(u).file ?? "File"),
    _ = v(() => t(i).edit ?? t(u).edit ?? "Edit"),
    C = v(() => t(i).view ?? t(u).view ?? "View"),
    b = v(() => t(i).language ?? t(u).language ?? "Language"),
    x = v(() => t(i).help ?? t(u).help ?? "Help"),
    y = v(() => t(i).settings ?? t(u).settings ?? "Settings"),
    k = v(() => t(l).statusBar ?? t(u).statusBar ?? "Status bar"),
    g = v(() => t(l).about ?? t(u).about ?? "About"),
    d = v(() => t(l).options ?? t(u).options ?? "Options"),
    h = v(
      () =>
        a()?.notepad?.aboutText ??
        "A lightweight notepad demo using the component library.",
    ),
    c = v(
      () =>
        a()?.notepad?.optionsText ??
        "Change appearance options such as status bar visibility.",
    ),
    m = [
      { value: "txt", label: "Text" },
      { value: "html", label: "HTML" },
      { value: "css", label: "CSS" },
      { value: "js", label: "JavaScript" },
      { value: "json", label: "JSON" },
      { value: "python", label: "Python" },
    ],
    E = v(() =>
      m.map(({ value: ie, label: Pe }) => ({
        id: ie === n() ? o() : ie,
        real: ie,
        label: Pe,
      })),
    ),
    S = v(() => [
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
        name: t(_),
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
      { name: t(b), actions: t(E) },
      { name: t(y), actions: [{ id: "options", label: t(d) }] },
      { name: t(x), actions: [{ id: "about", label: t(g), shortcut: "F1" }] },
    ]);
  let z = fe(""),
    T = fe(null),
    M = fe(et([])),
    q = fe(et([])),
    U = fe(""),
    se = fe(!1),
    ce = fe(!1),
    ge = fe(et([])),
    be = 0,
    $ = null,
    ae = fe(!0),
    K = fe(!1),
    B = fe(!1),
    X = fe(1),
    Y = fe(1);
  const H = v(() => t(z).length),
    ee = v(() =>
      t(z) === ""
        ? 1
        : t(z).split(`
`).length,
    ),
    pe = v(() =>
      t(z).trim() ? t(z).trim().split(/\s+/).filter(Boolean).length : 0,
    );
  function _e(ie, Pe, De) {
    A(ge, [...t(ge), { id: be++, title: De, message: Pe, variant: ie }], !0);
  }
  function ve(ie) {
    A(
      ge,
      t(ge).filter((Pe) => Pe.id !== ie),
      !0,
    );
  }
  function I(ie) {
    (!t(M).length || t(M).at(-1) !== ie) && A(M, [...t(M), ie].slice(-3), !0);
  }
  function P(ie) {
    A(q, [...t(q), ie].slice(-3), !0);
  }
  function te() {
    A(q, [], !0);
  }
  Ke(() => {
    if (!t(se)) {
      (A(U, t(z), !0), A(se, !0));
      return;
    }
    if (t(ce)) {
      A(U, t(z), !0);
      return;
    }
    t(z) !== t(U) && (I(t(U)), te(), A(U, t(z), !0));
  });
  function N(ie) {
    (I(t(z)), te(), A(ce, !0), A(z, ie, !0), A(ce, !1), A(U, t(z), !0));
  }
  function ne() {
    const ie = a()?.notepad?.confirmNew ?? "";
    (t(z) && ie && !confirm(ie)) || (N(""), A(T, null));
  }
  async function ue() {
    try {
      const ie = window;
      if (ie.showOpenFilePicker) {
        const [Pe] = await ie.showOpenFilePicker({
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
      const ie = window;
      if (t(T) && ie.isSecureContext && t(T).createWritable) {
        const rt = await t(T).createWritable();
        (await rt.write(new Blob([t(z)], { type: "text/plain;charset=utf-8" })),
          await rt.close());
        return;
      }
      if (ie.showSaveFilePicker) {
        const rt = await ie.showSaveFilePicker({
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
  function Fe(ie) {
    return ie
      ? ie instanceof HTMLTextAreaElement
        ? !0
        : ie instanceof HTMLInputElement
          ? ["text", "search", "url", "tel", "password"].includes(ie.type)
          : !1
      : !1;
  }
  function Ce() {
    const ie = document.activeElement;
    return Fe(ie) ? ie : null;
  }
  function Ee() {
    const Pe = Ce()?.selectionStart ?? t(z).length,
      qe = t(z).slice(0, Pe).split(`
`);
    (A(X, Math.max(qe.length, 1), !0), A(Y, (qe.at(-1)?.length ?? 0) + 1));
  }
  async function de() {
    try {
      const ie = Ce(),
        Pe = ie ? (ie.selectionStart ?? 0) : 0,
        De = ie ? (ie.selectionEnd ?? 0) : 0;
      if (Pe === De) return;
      const qe = t(z).slice(Pe, De);
      await navigator.clipboard.writeText(qe);
      const rt = t(z).slice(0, Pe) + t(z).slice(De);
      (I(t(z)),
        te(),
        A(ce, !0),
        A(z, rt),
        A(ce, !1),
        A(U, t(z), !0),
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
      const ie = Ce(),
        Pe = ie ? (ie.selectionStart ?? 0) : 0,
        De = ie ? (ie.selectionEnd ?? 0) : 0;
      if (Pe === De) return;
      const qe = t(z).slice(Pe, De);
      await navigator.clipboard.writeText(qe);
    } catch {
      _e("danger", a()?.notepad?.copyError ?? "Error");
    }
  }
  async function L() {
    try {
      const ie = await navigator.clipboard.readText(),
        Pe = Ce(),
        De = Pe?.selectionStart ?? t(z).length,
        qe = Pe?.selectionEnd ?? t(z).length,
        rt = t(z).slice(0, De) + ie + t(z).slice(qe);
      (I(t(z)), te(), A(ce, !0), A(z, rt), A(ce, !1), A(U, t(z), !0));
      const at = De + ie.length;
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
      if (!t(M).length) return;
      const ie = t(M).at(-1);
      (A(M, t(M).slice(0, -1), !0),
        P(t(z)),
        A(ce, !0),
        A(z, ie, !0),
        A(ce, !1),
        A(U, t(z), !0));
    } catch {
      _e("danger", a()?.notepad?.undoError ?? "Error");
    }
  }
  function le() {
    try {
      if (!t(q).length) return;
      const ie = t(q).at(-1);
      (A(q, t(q).slice(0, -1), !0),
        I(t(z)),
        A(ce, !0),
        A(z, ie, !0),
        A(ce, !1),
        A(U, t(z), !0));
    } catch {
      _e("danger", a()?.notepad?.redoError ?? "Error");
    }
  }
  function me() {
    A(K, !0);
  }
  async function ke(ie) {
    const Pe = ie.target,
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
  function xe(ie, Pe) {
    const De = typeof Pe == "string" ? Pe : (Pe.real ?? Pe.id);
    if (De)
      switch (De) {
        case "new":
          ne();
          break;
        case "open":
          ue();
          break;
        case "save":
          oe();
          break;
        case "undo":
          re();
          break;
        case "redo":
          le();
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
          me();
          break;
        case "options":
          A(B, !0);
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
  const W = v(() => ({
    "ctrl+n": () => xe(t(f), "new"),
    "ctrl+o": () => xe(t(f), "open"),
    "ctrl+s": () => xe(t(f), "save"),
    "ctrl+z": () => xe(t(_), "undo"),
    "ctrl+y": () => xe(t(_), "redo"),
    "ctrl+x": () => xe(t(_), "cut"),
    "ctrl+c": () => xe(t(_), "copy"),
    "ctrl+v": () => xe(t(_), "paste"),
    "ctrl+b": () => xe(t(C), "toggle-statusbar"),
    f1: () => xe(t(x), "about"),
  }));
  function we(ie) {
    const Pe = ie.key.toLowerCase(),
      De = [];
    ((ie.ctrlKey || ie.metaKey) && De.push("ctrl"),
      ie.shiftKey && De.push("shift"),
      De.push(Pe));
    const qe = De.join("+"),
      rt = t(W)[qe] ?? t(W)[Pe];
    rt && (ie.preventDefault(), rt());
  }
  (Ke(() => {
    (t(z), Ee());
  }),
    Ke(() => {
      if (typeof document > "u") return;
      const ie = () => Ee();
      return (
        document.addEventListener("selectionchange", ie),
        () => document.removeEventListener("selectionchange", ie)
      );
    }));
  var Te = fv();
  kt("keydown", ko, we);
  var ze = p(Te),
    Ie = p(ze);
  Ti(Ie, {
    class: "block min-w-full bg-transparent border-0",
    get menus() {
      return t(S);
    },
    onSelect: xe,
    get sz() {
      return o();
    },
  });
  var He = D(ze, 2);
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
    set code(ie) {
      A(z, ie, !0);
    },
  });
  var Oe = D(He, 2);
  {
    var Me = (ie) => {
      var Pe = cv(),
        De = p(Pe),
        qe = p(De),
        rt = p(qe),
        at = D(qe, 2),
        Pt = p(at),
        tr = D(at, 2),
        Nt = p(tr),
        Zt = D(tr, 2),
        Et = p(Zt),
        rr = D(De, 2),
        We = p(rr),
        Ye = p(We),
        it = D(We, 2),
        $e = p(it);
      (O(
        (ar, Sr, ra, aa, Rt) => {
          (V(Pe, 1, ar),
            V(De, 1, Sr),
            J(rt, `Ln ${t(X) ?? ""}, Col ${t(Y) ?? ""}`),
            J(Pt, `${t(ee) ?? ""} lines`),
            J(Nt, `${t(pe) ?? ""} words`),
            J(Et, `${t(H) ?? ""} chars`),
            V(rr, 1, ra),
            J(Ye, aa),
            J($e, `Size ${Rt ?? ""}`));
        },
        [
          () =>
            G(
              j(
                "rounded-xs border border-[var(--border-color-default)] bg-[var(--color-bg-muted)]",
                "text-[var(--color-text-muted)] px-3 py-2",
                "flex flex-wrap items-center justify-between gap-3",
                Ne[o()],
              ),
            ),
          () => G(j("flex flex-wrap items-center gap-3")),
          () => G(j("flex flex-wrap items-center gap-3")),
          () => n().toUpperCase(),
          () => o().toUpperCase(),
        ],
      ),
        w(ie, Pe));
    };
    Z(Oe, (ie) => {
      t(ae) && ie(Me);
    });
  }
  var Xe = D(Oe, 2);
  ((Xe.__change = ke),
    ut(
      Xe,
      (ie) => ($ = ie),
      () => $,
    ));
  var Qe = D(Xe, 2);
  nt(
    Qe,
    17,
    () => t(ge),
    (ie) => ie.id,
    (ie, Pe) => {
      Zo(ie, {
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
  var dt = D(Qe, 2);
  {
    var Dt = (ie) => {
      To(ie, {
        open: !0,
        get title() {
          return t(g);
        },
        get message() {
          return t(h);
        },
        onClose: () => A(K, !1),
        onCancel: () => A(K, !1),
        onConfirm: () => A(K, !1),
        get sz() {
          return o();
        },
      });
    };
    Z(dt, (ie) => {
      t(K) && ie(Dt);
    });
  }
  var It = D(dt, 2);
  {
    var tt = (ie) => {
      To(ie, {
        open: !0,
        get title() {
          return t(d);
        },
        onClose: () => A(B, !1),
        onCancel: () => A(B, !1),
        onConfirm: () => A(B, !1),
        get sz() {
          return o();
        },
        children: (Pe, De) => {
          var qe = dv(),
            rt = p(qe),
            at = p(rt),
            Pt = D(rt, 2),
            tr = p(Pt);
          (an(tr, {
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
                () => G(j("flex flex-col gap-3")),
                () => G(j("text-[var(--color-text-muted)]", Ne[o()])),
                () => G(j("flex items-center justify-between px-1 py-2")),
              ],
            ),
            w(Pe, qe));
        },
        $$slots: { default: !0 },
      });
    };
    Z(It, (ie) => {
      t(B) && ie(tt);
    });
  }
  (O((ie) => V(Te, 1, ie), [() => G(j("block w-full min-w-full", s()))]),
    w(r, Te),
    je());
}
ct(["change"]);
var gv = R(
    '<div class="flex items-end gap-2"><!> <span class="text-xs text-[var(--color-text-muted)] mb-1"> </span></div>',
  ),
  pv = R(
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
    f = v(() => za[u.value].playground.controls),
    _ = v(() => wv[e.component]),
    C = v(() =>
      xv.map((c) => ({
        label: c.charAt(0).toUpperCase() + c.slice(1),
        value: c,
      })),
    );
  let b = fe("md"),
    x = fe(""),
    y = fe(""),
    k = fe(!1),
    g = fe("input"),
    d = fe(!1);
  Ke(() => {
    (A(b, o()), A(y, i()), A(k, l()), A(x, t(_).variants[0] ?? "", !0));
  });
  const h = v(() =>
    j(
      "w-full flex flex-col h-[480px]",
      e.component === "CodeView" ? "md:h-[800px]" : "md:h-[540px]",
      s(),
    ),
  );
  (vn(r, {
    get class() {
      return t(h);
    },
    children: (c, m) => {
      var E = pv(),
        S = p(E),
        z = p(S),
        T = p(z),
        M = D(z, 2),
        q = p(M),
        U = D(S, 2),
        se = p(U),
        ce = p(se);
      {
        var ge = (P) => {
          {
            let te = v(() =>
              t(_).sizes.map((N) => ({ label: N.toUpperCase(), value: N })),
            );
            Kt(P, {
              get label() {
                return t(f).size;
              },
              get options() {
                return t(te);
              },
              sz: "xs",
              class: "min-w-[4rem]",
              get value() {
                return t(b);
              },
              set value(N) {
                A(b, N, !0);
              },
            });
          }
        };
        Z(ce, (P) => {
          t(_).sizes.length && P(ge);
        });
      }
      var be = D(ce, 2);
      {
        var $ = (P) => {
          {
            let te = v(() =>
              t(_).variants.map((N) => ({
                label: N.charAt(0).toUpperCase() + N.slice(1),
                value: N,
              })),
            );
            Kt(P, {
              get label() {
                return t(f).variant;
              },
              get options() {
                return t(te);
              },
              sz: "xs",
              get value() {
                return t(x);
              },
              set value(N) {
                A(x, N, !0);
              },
            });
          }
        };
        Z(be, (P) => {
          t(_).variants.length && P($);
        });
      }
      var ae = D(be, 2);
      {
        var K = (P) => {
          var te = gv(),
            N = p(te);
          ma(N, {
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
          var ne = D(N, 2),
            ue = p(ne);
          (O(() => J(ue, `${t(y).length ?? ""}/20`)), w(P, te));
        };
        Z(ae, (P) => {
          t(_).supports.label && P(K);
        });
      }
      var B = D(ae, 2);
      {
        var X = (P) => {
          an(P, {
            get label() {
              return t(f).disabled;
            },
            sz: "sm",
            variant: "default",
            get checked() {
              return t(k);
            },
            set checked(te) {
              A(k, te, !0);
            },
          });
        };
        Z(B, (P) => {
          t(_).supports.disabled && P(X);
        });
      }
      var Y = D(B, 2);
      {
        var H = (P) => {
          Kt(P, {
            sz: "xs",
            variant: "default",
            get label() {
              return t(f).fieldType;
            },
            get options() {
              return t(C);
            },
            get value() {
              return t(g);
            },
            set value(te) {
              A(g, te, !0);
            },
          });
        };
        Z(Y, (P) => {
          e.component === "Field" && P(H);
        });
      }
      var ee = D(Y, 2);
      {
        var pe = (P) => {
          an(P, {
            get label() {
              return t(f).sliderShowValue;
            },
            sz: "sm",
            variant: "default",
            onChange: (te) => A(d, te, !0),
            get checked() {
              return t(d);
            },
            set checked(te) {
              A(d, te, !0);
            },
          });
        };
        Z(ee, (P) => {
          e.component === "Slider" && P(pe);
        });
      }
      var _e = D(U, 2),
        ve = p(_e),
        I = p(ve);
      (Je(
        I,
        () => e.children ?? Q,
        () => t(b),
        () => t(x),
        () => t(y),
        () => t(k),
        () => t(g),
        () => t(d),
      ),
        O(() => {
          (J(T, a() || t(f).playcardLabel), J(q, n() || t(f).playcardSubtitle));
        }),
        w(c, E));
    },
    $$slots: { default: !0 },
  }),
    je());
}
El();
const Ss = (r) => {
    var e = hv();
    w(r, e);
  },
  Ps = (r) => {
    var e = bv();
    w(r, e);
  };
var hv = R(`<div class="
      h-full
      p-[var(--spacing-lg)]
      bg-[var(--color-bg-surface)]
      text-[var(--color-text-default)]
      border-[var(--border-color-default)]
    ">First</div>`),
  bv = R(`<div class="
      h-full
      p-[var(--spacing-lg)]
      bg-[var(--color-bg-surface)]
      text-[var(--color-text-default)]
      border-[var(--border-color-default)]
    ">Second</div>`),
  mv =
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
function _v(r) {
  var e = mv(),
    a = p(e),
    n = p(a),
    o = p(n);
  ks(o, {
    direction: "horizontal",
    initialSize: 50,
    dividerSize: 3,
    minSize: 15,
    maxSize: 85,
    get first() {
      return Ss;
    },
    get second() {
      return Ps;
    },
  });
  var s = D(a, 4),
    i = p(s),
    l = p(i);
  (ks(l, {
    direction: "vertical",
    initialSize: 40,
    dividerSize: 3,
    minSize: 15,
    maxSize: 85,
    get first() {
      return Ss;
    },
    get second() {
      return Ps;
    },
  }),
    w(r, e));
}
const Es = [
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
  xv = ["input", "number", "textarea"],
  wv = {
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
var yv = R("<div><div> </div> <div> </div></div>"),
  kv = R("<div><!> <!> <span> </span></div>"),
  Cv = R("<div><p> </p></div>"),
  Sv = R('<div><p> </p> <p class="text-[var(--color-text-muted)]"> </p></div>'),
  Pv = R("<div><span> </span> <!></div>"),
  Ev = R("<!> <!>", 1),
  zv = R("<div> </div>"),
  Av = R("<div><!></div>"),
  Fv = R('<div><!> <div class="mt-4"><!></div></div>'),
  Tv = R('<div class="py-8"> </div>'),
  Lv = R('<div class="grid gap-4 max-w-3xl"><!></div>'),
  Mv = R(
    '<div class="overflow-x-auto w-full min-w-full min-h-[400px]"><!></div>',
  ),
  Dv = R('<div class="flex flex-col gap-2"><!> <!> <!></div>'),
  Iv = R('<div class="text-[var(--color-text-muted)]"> </div>'),
  Nv = R("<li> </li>"),
  Ov = R('<ul class="space-y-1"></ul>'),
  Bv = R('<div class="grid gap-3"><!> <div><!></div></div>'),
  jv = R(
    '<div><div><div class="flex items-center"><!></div> <div class="flex-1"></div> <!></div></div> <div><main><!></main></div>',
    1,
  );
function Rv(r, e) {
  Be(e, !0);
  const a = () => qu(Yo, "$toasts", n),
    [n, o] = Uu(),
    s = (ve) => {
      var I = yv(),
        P = p(I),
        te = p(P),
        N = D(P, 2),
        ne = p(N);
      (O(
        (ue, oe, Fe) => {
          (V(I, 1, ue),
            V(P, 1, oe),
            J(te, t(d).app.title),
            V(N, 1, Fe),
            J(ne, t(d).app.version));
        },
        [
          () => G(j("p-2 flex flex-col items-center text-center")),
          () => G(j("font-bold text-[var(--color-text-muted)]", Ne.lg)),
          () => G(j("text-[var(--color-text-muted)]", Ne.xs)),
        ],
      ),
        w(ve, I));
    },
    i = (ve) => {
      var I = kv(),
        P = p(I);
      Jd(P, { class: "w-fit" });
      var te = D(P, 2);
      Kt(te, {
        sz: "sm",
        get label() {
          return t(d).app.language.label;
        },
        get options() {
          return t(d).app.language.options;
        },
        get value() {
          return g.value;
        },
        set value(ue) {
          g.value = ue;
        },
      });
      var N = D(te, 2),
        ne = p(N);
      (O(
        (ue, oe) => {
          (V(I, 1, ue), V(N, 1, oe), J(ne, t(d).app.footer));
        },
        [
          () => G(j("text-center p-2 flex flex-col items-center gap-4")),
          () => G(j("italic text-[var(--color-text-muted)]", Ne.xs)),
        ],
      ),
        w(ve, I));
    },
    l = (ve) => {
      var I = Cv(),
        P = p(I),
        te = p(P);
      (O(
        (N, ne) => {
          (V(I, 1, N), V(P, 1, ne), J(te, t(d).snippets.card.header));
        },
        [
          () => G(j("flex items-center justify-between")),
          () => G(j("font-semibold text-[var(--color-text-default)]")),
        ],
      ),
        w(ve, I));
    },
    u = (ve) => {
      var I = Sv(),
        P = p(I),
        te = p(P),
        N = D(P, 2),
        ne = p(N);
      (O(
        (ue) => {
          (V(I, 1, ue),
            J(te, t(d).snippets.about.description),
            J(ne, t(d).snippets.about.helper));
        },
        [() => G(j("space-y-2 leading-relaxed", Ne.sm))],
      ),
        w(ve, I));
    },
    f = (ve) => {
      var I = Pv(),
        P = p(I),
        te = p(P),
        N = D(P, 2);
      (ot(N, {
        variant: "link",
        sz: "xs",
        children: (ne, ue) => {
          var oe = Re();
          (O(() => J(oe, t(d).snippets.card.docsLink)), w(ne, oe));
        },
        $$slots: { default: !0 },
      }),
        O(
          (ne) => {
            (V(I, 1, ne), J(te, t(d).snippets.card.updated));
          },
          [
            () =>
              G(
                j(
                  "flex items-center justify-between text-[var(--color-text-muted)]",
                  Ne.xs,
                ),
              ),
          ],
        ),
        w(ve, I));
    },
    _ = (ve, I = Q) => {
      wc(ve, {
        get items() {
          return t(H);
        },
        get sz() {
          return I();
        },
        autoplay: !0,
        showDots: !0,
        showArrows: !0,
        class: "w-full",
      });
    },
    C = (ve, I = Q, P = Q) => {
      var te = Ev(),
        N = Se(te);
      {
        let ue = v(() => `${t(d).snippets.toast.buttonPrefix}${P()}`);
        Ft(N, {
          get text() {
            return t(ue);
          },
          children: (oe, Fe) => {
            ot(oe, {
              get sz() {
                return I();
              },
              get variant() {
                return P();
              },
              onClick: () => rv(P()),
              children: (Ce, Ee) => {
                var de = Re();
                (O(() =>
                  J(
                    de,
                    `${t(d).snippets.toast.buttonPrefix ?? ""}${P() ?? ""}`,
                  ),
                ),
                  w(Ce, de));
              },
              $$slots: { default: !0 },
            });
          },
          $$slots: { default: !0 },
        });
      }
      var ne = D(N, 2);
      (nt(
        ne,
        1,
        a,
        (ue) => ue.id,
        (ue, oe) => {
          Zo(ue, {
            get title() {
              return t(oe).title;
            },
            get message() {
              return t(oe).message;
            },
            get variant() {
              return t(oe).variant;
            },
            onClose: () => tv(t(oe).id),
          });
        },
      ),
        w(ve, te));
    },
    b = (ve) => {
      var I = zv(),
        P = p(I);
      (O(
        (te) => {
          (V(I, 1, te), J(P, t(d).states.emptyPreview));
        },
        [() => G(j("text-center text-[var(--color-text-muted)] py-10"))],
      ),
        w(ve, I));
    },
    x = (ve, I = Q, P = Q, te = Q, N = Q, ne = Q) => {
      var ue = Av(),
        oe = p(ue);
      {
        var Fe = (Ee) => {
            {
              let de = v(() => te() || t(d).snippets.field.text);
              Ft(Ee, {
                get text() {
                  return t(de);
                },
                children: (Ae, L) => {
                  {
                    let re = v(() => te() || t(d).snippets.field.text);
                    ma(Ae, {
                      get sz() {
                        return I();
                      },
                      get variant() {
                        return P();
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
              var L = (le) => {
                  {
                    let me = v(() => te() || t(d).snippets.field.number);
                    Ft(le, {
                      get text() {
                        return t(me);
                      },
                      children: (ke, xe) => {
                        {
                          let W = v(() => te() || t(d).snippets.field.number);
                          ma(ke, {
                            get sz() {
                              return I();
                            },
                            get variant() {
                              return P();
                            },
                            type: "number",
                            parseNumber: !0,
                            get label() {
                              return t(W);
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
                re = (le) => {
                  var me = Le(),
                    ke = Se(me);
                  {
                    var xe = (W) => {
                      {
                        let we = v(() => te() || t(d).snippets.field.textarea);
                        Ft(W, {
                          get text() {
                            return t(we);
                          },
                          children: (Te, ze) => {
                            {
                              let Ie = v(
                                () => te() || t(d).snippets.field.textarea,
                              );
                              ma(Te, {
                                get sz() {
                                  return I();
                                },
                                get variant() {
                                  return P();
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
                    Z(
                      ke,
                      (W) => {
                        ne() === "textarea" && W(xe);
                      },
                      !0,
                    );
                  }
                  w(le, me);
                };
              Z(
                Ae,
                (le) => {
                  ne() === "number" ? le(L) : le(re, !1);
                },
                !0,
              );
            }
            w(Ee, de);
          };
        Z(oe, (Ee) => {
          ne() === "input" ? Ee(Fe) : Ee(Ce, !1);
        });
      }
      (O((Ee) => V(ue, 1, Ee), [() => G(j("grid gap-4"))]), w(ve, ue));
    },
    y = (ve, I = Q, P = Q) => {
      var te = Fv(),
        N = p(te);
      Lf(N, {
        get columns() {
          return t(S);
        },
        get rows() {
          return t(ce);
        },
        get sz() {
          return I();
        },
        get variant() {
          return P();
        },
      });
      var ne = D(N, 2),
        ue = p(ne);
      (Li(ue, {
        get currentPage() {
          return t(U);
        },
        get totalPages() {
          return t(se);
        },
        onPageChange: Y,
      }),
        O(
          (oe) => V(te, 1, oe),
          [
            () =>
              G(
                j(
                  "w-full max-w-3xl max-h-[320px] md:max-h-[360px] lg:max-h-[420px] overflow-auto",
                ),
              ),
          ],
        ),
        w(ve, te));
    },
    k = (ve, I = Q, P = Q) => {
      {
        let te = v(() =>
          t(d).snippets.tabs.labels.map((N, ne) => ({
            id: `t${ne + 1}`,
            label: N,
          })),
        );
        If(ve, {
          get tabs() {
            return t(te);
          },
          get sz() {
            return I();
          },
          get variant() {
            return P();
          },
          get activeTab() {
            return t(T);
          },
          onChange: (N) => A(T, N, !0),
          children: (N, ne) => {
            var ue = Le(),
              oe = Se(ue);
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
                    var le = Tv(),
                      me = p(le);
                    (O(() => J(me, t(Ce))), w(re, le));
                  };
                  Z(Ae, (re) => {
                    t(T) === `t${t(Ee) + 1}` && re(L);
                  });
                }
                w(Fe, de);
              },
            ),
              w(N, ue));
          },
          $$slots: { default: !0 },
        });
      }
    },
    g = et({ value: "en" });
  Fl("lang", g);
  const d = v(() => za[g.value]),
    h = v(() =>
      Es.filter((ve) => ve in t(d).pageLabels).map((ve) => ({
        id: ve,
        label: t(d).pageLabels[ve],
      })),
    );
  let c = fe("about");
  function m(ve) {
    Es.includes(ve) && A(c, ve, !0);
  }
  const E = v(() =>
      Fo(23, (ve) => ({
        id: ve + 1,
        item: `${t(d).table.positionPrefix} ${ve + 1}`,
        qty: (ve % 7) + 1,
        price: ((ve % 9) + 1) * 100,
      })),
    ),
    S = v(() => [
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
    M = fe(0),
    q = 5,
    U = fe(1);
  const se = v(() => Math.max(1, Math.ceil(t(E).length / q)));
  Ke(() => {
    t(U) > t(se) && A(U, Math.max(1, t(se)), !0);
  });
  const ce = v(() => t(E).slice((t(U) - 1) * q, t(U) * q));
  let ge = fe(null),
    be = fe(null),
    $ = fe(null),
    ae = fe("en");
  const K = new Date().toISOString().split("T")[0];
  let B = fe("");
  function X(ve) {
    An("success", {
      title: t(d).toasts.confirmTitle,
      message: t(d).toasts.confirmMessage,
    });
  }
  function Y(ve) {
    A(U, ve, !0);
  }
  const H = v(() => [...t(d).snippets.carousel.slides]),
    ee = v(() => [...t(d).snippets.accordion.items]),
    pe = v(() => [...t(d).snippets.searchInput.items]),
    _e = v(() =>
      t(pe).filter((ve) =>
        ve.toLowerCase().includes(t(B).trim().toLowerCase()),
      ),
    );
  ($f(r, {
    children: (ve, I) => {
      var P = jv(),
        te = Se(P),
        N = p(te),
        ne = p(N),
        ue = p(ne);
      Bd(ue, {
        get header() {
          return s;
        },
        get footer() {
          return i;
        },
        get menuItems() {
          return t(h);
        },
        get activeItem() {
          return t(c);
        },
        onSelect: m,
        closeOnSelect: !0,
        width: 300,
        get class() {
          return Ne.md;
        },
      });
      var oe = D(ne, 4);
      Cs(oe, {});
      var Fe = D(te, 2),
        Ce = p(Fe),
        Ee = p(Ce);
      {
        var de = (L) => {
            Kf(L, {});
          },
          Ae = (L) => {
            var re = Le(),
              le = Se(re);
            {
              var me = (xe) => {
                  Ze(xe, {
                    component: "Accordion",
                    get title() {
                      return t(d).pageLabels.accordion;
                    },
                    get subtitle() {
                      return t(d).snippets.accordionPlay.subtitle;
                    },
                    children: (we, Te = Q, ze = Q) => {
                      oc(we, {
                        get sz() {
                          return Te();
                        },
                        get class() {
                          return ze();
                        },
                        get items() {
                          return t(ee);
                        },
                      });
                    },
                    $$slots: { default: !0 },
                  });
                },
                ke = (xe) => {
                  var W = Le(),
                    we = Se(W);
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
                              let Dt = v(() => Qe() || `${Xe()} ${Me()}`);
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
                                    children: (ie, Pe) => {
                                      var De = Re();
                                      (O(() =>
                                        J(De, Qe() || `${Xe()} ${Me()}`),
                                      ),
                                        w(ie, De));
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
                                  var tt = Lv(),
                                    ie = p(tt);
                                  (vn(ie, {
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
                                    w(Dt, tt));
                                },
                                $$slots: { default: !0 },
                              });
                            },
                            Xe = (Qe) => {
                              var dt = Le(),
                                Dt = Se(dt);
                              {
                                var It = (ie) => {
                                    Ze(ie, {
                                      component: "Carousel",
                                      get title() {
                                        return t(d).pageLabels.carousel;
                                      },
                                      get subtitle() {
                                        return t(d).snippets.carouselPlay
                                          .subtitle;
                                      },
                                      children: (De, qe = Q) => {
                                        _(De, qe);
                                      },
                                      $$slots: { default: !0 },
                                    });
                                  },
                                  tt = (ie) => {
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
                                              tr,
                                              Nt = Q,
                                              Zt = Q,
                                              Et = Q,
                                              rr = Q,
                                            ) => {
                                              {
                                                let We = v(
                                                  () =>
                                                    Et() || `${Zt()} ${Nt()}`,
                                                );
                                                Ft(tr, {
                                                  get text() {
                                                    return t(We);
                                                  },
                                                  children: (Ye, it) => {
                                                    {
                                                      let $e = v(
                                                        () =>
                                                          Et() ||
                                                          `${Zt()} ${Nt()}`,
                                                      );
                                                      an(Ye, {
                                                        get sz() {
                                                          return Nt();
                                                        },
                                                        get variant() {
                                                          return Zt();
                                                        },
                                                        get disabled() {
                                                          return rr();
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
                                            tr = Se(Pt);
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
                                                    Wf(We, {
                                                      get sz() {
                                                        return Ye();
                                                      },
                                                    });
                                                  },
                                                  $$slots: { default: !0 },
                                                });
                                              },
                                              Zt = (Et) => {
                                                var rr = Le(),
                                                  We = Se(rr);
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
                                                          ra = Q,
                                                          aa = Q,
                                                          Rt = Q,
                                                          Vt = Q,
                                                        ) => {
                                                          {
                                                            let _t = v(
                                                              () =>
                                                                Rt() ||
                                                                t(d).components
                                                                  .colorPicker
                                                                  .label,
                                                            );
                                                            Oc(Sr, {
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
                                                      var ar = Le(),
                                                        Sr = Se(ar);
                                                      {
                                                        var ra = (Rt) => {
                                                            Ze(Rt, {
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
                                                                gn = Q,
                                                                nr = Q,
                                                                Pr = Q,
                                                              ) => {
                                                                {
                                                                  let Rr = v(
                                                                    () =>
                                                                      nr() ||
                                                                      t(d)
                                                                        .components
                                                                        .datePicker
                                                                        .label,
                                                                  );
                                                                  jc(_t, {
                                                                    get label() {
                                                                      return t(
                                                                        Rr,
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
                                                                        be,
                                                                      );
                                                                    },
                                                                    set value(
                                                                      Vr,
                                                                    ) {
                                                                      A(
                                                                        be,
                                                                        Vr,
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
                                                          aa = (Rt) => {
                                                            var Vt = Le(),
                                                              _t = Se(Vt);
                                                            {
                                                              var jr = (nr) => {
                                                                  Ze(nr, {
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
                                                                      Rr,
                                                                      Vr = Q,
                                                                      zt = Q,
                                                                    ) => {
                                                                      {
                                                                        let xt =
                                                                          v(
                                                                            () =>
                                                                              zt() ||
                                                                              t(
                                                                                d,
                                                                              )
                                                                                .snippets
                                                                                .dialog
                                                                                .confirm,
                                                                          );
                                                                        nv(Rr, {
                                                                          get sz() {
                                                                            return Vr();
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
                                                                gn = (nr) => {
                                                                  var Pr = Le(),
                                                                    Rr = Se(Pr);
                                                                  {
                                                                    var Vr = (
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
                                                                              Ta,
                                                                              La = Q,
                                                                              Nn = Q,
                                                                              Er = Q,
                                                                              Ma = Q,
                                                                              Da = Q,
                                                                            ) => {
                                                                              x(
                                                                                Ta,
                                                                                La,
                                                                                Nn,
                                                                                Er,
                                                                                Ma,
                                                                                Da,
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
                                                                        var Fa =
                                                                            Le(),
                                                                          Ta =
                                                                            Se(
                                                                              Fa,
                                                                            );
                                                                        {
                                                                          var La =
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
                                                                                        Da,
                                                                                        Xo = Q,
                                                                                        Jo = Q,
                                                                                        zr = Q,
                                                                                        pn = Q,
                                                                                      ) => {
                                                                                        {
                                                                                          let On =
                                                                                            v(
                                                                                              () =>
                                                                                                zr() ||
                                                                                                t(
                                                                                                  d,
                                                                                                )
                                                                                                  .components
                                                                                                  .filePicker
                                                                                                  .label,
                                                                                            );
                                                                                          nd(
                                                                                            Da,
                                                                                            {
                                                                                              get label() {
                                                                                                return t(
                                                                                                  On,
                                                                                                );
                                                                                              },
                                                                                              get disabled() {
                                                                                                return pn();
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
                                                                            Nn =
                                                                              (
                                                                                Er,
                                                                              ) => {
                                                                                var Ma =
                                                                                    Le(),
                                                                                  Da =
                                                                                    Se(
                                                                                      Ma,
                                                                                    );
                                                                                {
                                                                                  var Xo =
                                                                                      (
                                                                                        zr,
                                                                                      ) => {
                                                                                        iv(
                                                                                          zr,
                                                                                          {
                                                                                            onSubmit:
                                                                                              X,
                                                                                          },
                                                                                        );
                                                                                      },
                                                                                    Jo =
                                                                                      (
                                                                                        zr,
                                                                                      ) => {
                                                                                        var pn =
                                                                                            Le(),
                                                                                          On =
                                                                                            Se(
                                                                                              pn,
                                                                                            );
                                                                                        {
                                                                                          var Di =
                                                                                              (
                                                                                                na,
                                                                                              ) => {
                                                                                                Ze(
                                                                                                  na,
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
                                                                                                        jn,
                                                                                                        Rn = Q,
                                                                                                      ) => {
                                                                                                        uv(
                                                                                                          jn,
                                                                                                          {
                                                                                                            get sz() {
                                                                                                              return Rn();
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
                                                                                                na,
                                                                                              ) => {
                                                                                                var Bn =
                                                                                                    Le(),
                                                                                                  jn =
                                                                                                    Se(
                                                                                                      Bn,
                                                                                                    );
                                                                                                {
                                                                                                  var Rn =
                                                                                                      (
                                                                                                        oa,
                                                                                                      ) => {
                                                                                                        var Ia =
                                                                                                            Mv(),
                                                                                                          Vn =
                                                                                                            p(
                                                                                                              Ia,
                                                                                                            );
                                                                                                        (vv(
                                                                                                          Vn,
                                                                                                          {
                                                                                                            get L() {
                                                                                                              return t(
                                                                                                                d,
                                                                                                              );
                                                                                                            },
                                                                                                          },
                                                                                                        ),
                                                                                                          w(
                                                                                                            oa,
                                                                                                            Ia,
                                                                                                          ));
                                                                                                      },
                                                                                                    Ni =
                                                                                                      (
                                                                                                        oa,
                                                                                                      ) => {
                                                                                                        var Ia =
                                                                                                            Le(),
                                                                                                          Vn =
                                                                                                            Se(
                                                                                                              Ia,
                                                                                                            );
                                                                                                        {
                                                                                                          var Oi =
                                                                                                              (
                                                                                                                sa,
                                                                                                              ) => {
                                                                                                                Ze(
                                                                                                                  sa,
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
                                                                                                                        Un,
                                                                                                                        Hn = Q,
                                                                                                                        Kn = Q,
                                                                                                                        Ar = Q,
                                                                                                                        Na = Q,
                                                                                                                      ) => {
                                                                                                                        rf(
                                                                                                                          Un,
                                                                                                                          {
                                                                                                                            value: 75,
                                                                                                                            get sz() {
                                                                                                                              return Hn();
                                                                                                                            },
                                                                                                                            get variant() {
                                                                                                                              return Kn();
                                                                                                                            },
                                                                                                                            get label() {
                                                                                                                              return Ar();
                                                                                                                            },
                                                                                                                            get disabled() {
                                                                                                                              return Na();
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
                                                                                                                sa,
                                                                                                              ) => {
                                                                                                                var qn =
                                                                                                                    Le(),
                                                                                                                  Un =
                                                                                                                    Se(
                                                                                                                      qn,
                                                                                                                    );
                                                                                                                {
                                                                                                                  var Hn =
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
                                                                                                                                Gn,
                                                                                                                                Wn = Q,
                                                                                                                                Zn = Q,
                                                                                                                                Fr = Q,
                                                                                                                                Oa = Q,
                                                                                                                              ) => {
                                                                                                                                uf(
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
                                                                                                                                      return Fr();
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
                                                                                                                    Kn =
                                                                                                                      (
                                                                                                                        Ar,
                                                                                                                      ) => {
                                                                                                                        var Na =
                                                                                                                            Le(),
                                                                                                                          Gn =
                                                                                                                            Se(
                                                                                                                              Na,
                                                                                                                            );
                                                                                                                        {
                                                                                                                          var Wn =
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
                                                                                                                                        Yn,
                                                                                                                                        Ba = Q,
                                                                                                                                        ja = Q,
                                                                                                                                        qr = Q,
                                                                                                                                        Ur = Q,
                                                                                                                                      ) => {
                                                                                                                                        var ia =
                                                                                                                                            Dv(),
                                                                                                                                          la =
                                                                                                                                            p(
                                                                                                                                              ia,
                                                                                                                                            );
                                                                                                                                        mo(
                                                                                                                                          la,
                                                                                                                                          {
                                                                                                                                            get sz() {
                                                                                                                                              return Ba();
                                                                                                                                            },
                                                                                                                                            get variant() {
                                                                                                                                              return ja();
                                                                                                                                            },
                                                                                                                                            get disabled() {
                                                                                                                                              return Ur();
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
                                                                                                                                                  Re();
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
                                                                                                                                                  w(
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
                                                                                                                                        var ua =
                                                                                                                                          D(
                                                                                                                                            la,
                                                                                                                                            2,
                                                                                                                                          );
                                                                                                                                        mo(
                                                                                                                                          ua,
                                                                                                                                          {
                                                                                                                                            get sz() {
                                                                                                                                              return Ba();
                                                                                                                                            },
                                                                                                                                            get variant() {
                                                                                                                                              return ja();
                                                                                                                                            },
                                                                                                                                            get disabled() {
                                                                                                                                              return Ur();
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
                                                                                                                                                  Re();
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
                                                                                                                                                  w(
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
                                                                                                                                          D(
                                                                                                                                            ua,
                                                                                                                                            2,
                                                                                                                                          );
                                                                                                                                        (mo(
                                                                                                                                          Yt,
                                                                                                                                          {
                                                                                                                                            get sz() {
                                                                                                                                              return Ba();
                                                                                                                                            },
                                                                                                                                            get variant() {
                                                                                                                                              return ja();
                                                                                                                                            },
                                                                                                                                            get disabled() {
                                                                                                                                              return Ur();
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
                                                                                                                                                  Re();
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
                                                                                                                                                  w(
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
                                                                                                                                          w(
                                                                                                                                            Yn,
                                                                                                                                            ia,
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
                                                                                                                            Zn =
                                                                                                                              (
                                                                                                                                Fr,
                                                                                                                              ) => {
                                                                                                                                var Oa =
                                                                                                                                    Le(),
                                                                                                                                  Yn =
                                                                                                                                    Se(
                                                                                                                                      Oa,
                                                                                                                                    );
                                                                                                                                {
                                                                                                                                  var Ba =
                                                                                                                                      (
                                                                                                                                        qr,
                                                                                                                                      ) => {
                                                                                                                                        Ze(
                                                                                                                                          qr,
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
                                                                                                                                                ia,
                                                                                                                                                la = Q,
                                                                                                                                                ua = Q,
                                                                                                                                                Yt = Q,
                                                                                                                                                vt = Q,
                                                                                                                                              ) => {
                                                                                                                                                var gr =
                                                                                                                                                    Bv(),
                                                                                                                                                  wt =
                                                                                                                                                    p(
                                                                                                                                                      gr,
                                                                                                                                                    );
                                                                                                                                                {
                                                                                                                                                  let yt =
                                                                                                                                                    v(
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
                                                                                                                                                              v(
                                                                                                                                                                () =>
                                                                                                                                                                  Yt() ||
                                                                                                                                                                  t(
                                                                                                                                                                    d,
                                                                                                                                                                  )
                                                                                                                                                                    .snippets
                                                                                                                                                                    .searchInput
                                                                                                                                                                    .label,
                                                                                                                                                              );
                                                                                                                                                            pf(
                                                                                                                                                              Ot,
                                                                                                                                                              {
                                                                                                                                                                get sz() {
                                                                                                                                                                  return la();
                                                                                                                                                                },
                                                                                                                                                                get variant() {
                                                                                                                                                                  return ua();
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
                                                                                                                                                                    B,
                                                                                                                                                                  );
                                                                                                                                                                },
                                                                                                                                                                set value(
                                                                                                                                                                  Jt,
                                                                                                                                                                ) {
                                                                                                                                                                  A(
                                                                                                                                                                    B,
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
                                                                                                                                                var Hr =
                                                                                                                                                    D(
                                                                                                                                                      wt,
                                                                                                                                                      2,
                                                                                                                                                    ),
                                                                                                                                                  or =
                                                                                                                                                    p(
                                                                                                                                                      Hr,
                                                                                                                                                    );
                                                                                                                                                {
                                                                                                                                                  var Kr =
                                                                                                                                                      (
                                                                                                                                                        yt,
                                                                                                                                                      ) => {
                                                                                                                                                        var Ot =
                                                                                                                                                            Iv(),
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
                                                                                                                                                          w(
                                                                                                                                                            yt,
                                                                                                                                                            Ot,
                                                                                                                                                          ));
                                                                                                                                                      },
                                                                                                                                                    ca =
                                                                                                                                                      (
                                                                                                                                                        yt,
                                                                                                                                                      ) => {
                                                                                                                                                        var Ot =
                                                                                                                                                          Ov();
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
                                                                                                                                                                Nv(),
                                                                                                                                                              Gr =
                                                                                                                                                                p(
                                                                                                                                                                  Jt,
                                                                                                                                                                );
                                                                                                                                                            (O(
                                                                                                                                                              () =>
                                                                                                                                                                J(
                                                                                                                                                                  Gr,
                                                                                                                                                                  Xt,
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                              w(
                                                                                                                                                                ft,
                                                                                                                                                                Jt,
                                                                                                                                                              ));
                                                                                                                                                          },
                                                                                                                                                        ),
                                                                                                                                                          w(
                                                                                                                                                            yt,
                                                                                                                                                            Ot,
                                                                                                                                                          ));
                                                                                                                                                      };
                                                                                                                                                  Z(
                                                                                                                                                    or,
                                                                                                                                                    (
                                                                                                                                                      yt,
                                                                                                                                                    ) => {
                                                                                                                                                      t(
                                                                                                                                                        _e,
                                                                                                                                                      )
                                                                                                                                                        .length ===
                                                                                                                                                      0
                                                                                                                                                        ? yt(
                                                                                                                                                            Kr,
                                                                                                                                                          )
                                                                                                                                                        : yt(
                                                                                                                                                            ca,
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
                                                                                                                                                      Hr,
                                                                                                                                                      1,
                                                                                                                                                      yt,
                                                                                                                                                    ),
                                                                                                                                                  [
                                                                                                                                                    () =>
                                                                                                                                                      G(
                                                                                                                                                        j(
                                                                                                                                                          "rounded-md border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] px-3 py-2",
                                                                                                                                                          Ne.sm,
                                                                                                                                                        ),
                                                                                                                                                      ),
                                                                                                                                                  ],
                                                                                                                                                ),
                                                                                                                                                  w(
                                                                                                                                                    ia,
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
                                                                                                                                        qr,
                                                                                                                                      ) => {
                                                                                                                                        var Ur =
                                                                                                                                            Le(),
                                                                                                                                          ia =
                                                                                                                                            Se(
                                                                                                                                              Ur,
                                                                                                                                            );
                                                                                                                                        {
                                                                                                                                          var la =
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
                                                                                                                                                        Hr = Q,
                                                                                                                                                        or = Q,
                                                                                                                                                        Kr = Q,
                                                                                                                                                        ca = Q,
                                                                                                                                                        yt = Q,
                                                                                                                                                      ) => {
                                                                                                                                                        {
                                                                                                                                                          let Ot =
                                                                                                                                                            v(
                                                                                                                                                              () =>
                                                                                                                                                                String(
                                                                                                                                                                  t(
                                                                                                                                                                    M,
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
                                                                                                                                                                      v(
                                                                                                                                                                        () =>
                                                                                                                                                                          or() ||
                                                                                                                                                                          `${Hr() || t(d).snippets.slider.fallbackLabel} ${wt()}`,
                                                                                                                                                                      );
                                                                                                                                                                    mf(
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
                                                                                                                                                                          return Hr();
                                                                                                                                                                        },
                                                                                                                                                                        get title() {
                                                                                                                                                                          return t(
                                                                                                                                                                            Jt,
                                                                                                                                                                          );
                                                                                                                                                                        },
                                                                                                                                                                        get disabled() {
                                                                                                                                                                          return Kr();
                                                                                                                                                                        },
                                                                                                                                                                        get value() {
                                                                                                                                                                          return t(
                                                                                                                                                                            M,
                                                                                                                                                                          );
                                                                                                                                                                        },
                                                                                                                                                                        set value(
                                                                                                                                                                          Gr,
                                                                                                                                                                        ) {
                                                                                                                                                                          A(
                                                                                                                                                                            M,
                                                                                                                                                                            Gr,
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
                                                                                                                                            ua =
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
                                                                                                                                                        or,
                                                                                                                                                      ) => {
                                                                                                                                                        Ze(
                                                                                                                                                          or,
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
                                                                                                                                                                ca,
                                                                                                                                                                yt = Q,
                                                                                                                                                                Ot = Q,
                                                                                                                                                                ft = Q,
                                                                                                                                                                Xt = Q,
                                                                                                                                                              ) => {
                                                                                                                                                                {
                                                                                                                                                                  let Jt =
                                                                                                                                                                    v(
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
                                                                                                                                                                    ca,
                                                                                                                                                                    {
                                                                                                                                                                      get text() {
                                                                                                                                                                        return t(
                                                                                                                                                                          Jt,
                                                                                                                                                                        );
                                                                                                                                                                      },
                                                                                                                                                                      children:
                                                                                                                                                                        (
                                                                                                                                                                          Gr,
                                                                                                                                                                          Qo,
                                                                                                                                                                        ) => {
                                                                                                                                                                          {
                                                                                                                                                                            let Tr =
                                                                                                                                                                              v(
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
                                                                                                                                                                              Gr,
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
                                                                                                                                                                                  Ra,
                                                                                                                                                                                ) {
                                                                                                                                                                                  A(
                                                                                                                                                                                    ae,
                                                                                                                                                                                    Ra,
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
                                                                                                                                                    Hr =
                                                                                                                                                      (
                                                                                                                                                        or,
                                                                                                                                                      ) => {
                                                                                                                                                        var Kr =
                                                                                                                                                            Le(),
                                                                                                                                                          ca =
                                                                                                                                                            Se(
                                                                                                                                                              Kr,
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
                                                                                                                                                                        _v(
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
                                                                                                                                                                  var Gr =
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
                                                                                                                                                                                Xn,
                                                                                                                                                                                Va = Q,
                                                                                                                                                                                Jn = Q,
                                                                                                                                                                                pr = Q,
                                                                                                                                                                                qa = Q,
                                                                                                                                                                              ) => {
                                                                                                                                                                                {
                                                                                                                                                                                  let Ua =
                                                                                                                                                                                    v(
                                                                                                                                                                                      () =>
                                                                                                                                                                                        pr() ||
                                                                                                                                                                                        `${t(d).snippets.switch.labelPrefix} ${Va()}`,
                                                                                                                                                                                    );
                                                                                                                                                                                  Ft(
                                                                                                                                                                                    Xn,
                                                                                                                                                                                    {
                                                                                                                                                                                      get text() {
                                                                                                                                                                                        return t(
                                                                                                                                                                                          Ua,
                                                                                                                                                                                        );
                                                                                                                                                                                      },
                                                                                                                                                                                      children:
                                                                                                                                                                                        (
                                                                                                                                                                                          Ha,
                                                                                                                                                                                          hn,
                                                                                                                                                                                        ) => {
                                                                                                                                                                                          {
                                                                                                                                                                                            let Lr =
                                                                                                                                                                                                v(
                                                                                                                                                                                                  () =>
                                                                                                                                                                                                    Jn() ||
                                                                                                                                                                                                    void 0,
                                                                                                                                                                                                ),
                                                                                                                                                                                              Ka =
                                                                                                                                                                                                v(
                                                                                                                                                                                                  () =>
                                                                                                                                                                                                    pr() ||
                                                                                                                                                                                                    `${t(d).snippets.switch.labelPrefix} ${Va()}`,
                                                                                                                                                                                                );
                                                                                                                                                                                            Mi(
                                                                                                                                                                                              Ha,
                                                                                                                                                                                              {
                                                                                                                                                                                                get sz() {
                                                                                                                                                                                                  return Va();
                                                                                                                                                                                                },
                                                                                                                                                                                                get "data-variant"() {
                                                                                                                                                                                                  return t(
                                                                                                                                                                                                    Lr,
                                                                                                                                                                                                  );
                                                                                                                                                                                                },
                                                                                                                                                                                                get rightLabel() {
                                                                                                                                                                                                  return t(
                                                                                                                                                                                                    Ka,
                                                                                                                                                                                                  );
                                                                                                                                                                                                },
                                                                                                                                                                                                get disabled() {
                                                                                                                                                                                                  return qa();
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
                                                                                                                                                                    Qo =
                                                                                                                                                                      (
                                                                                                                                                                        Tr,
                                                                                                                                                                      ) => {
                                                                                                                                                                        var Ra =
                                                                                                                                                                            Le(),
                                                                                                                                                                          Xn =
                                                                                                                                                                            Se(
                                                                                                                                                                              Ra,
                                                                                                                                                                            );
                                                                                                                                                                        {
                                                                                                                                                                          var Va =
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
                                                                                                                                                                                        Ua,
                                                                                                                                                                                        Ha = Q,
                                                                                                                                                                                        hn = Q,
                                                                                                                                                                                      ) => {
                                                                                                                                                                                        y(
                                                                                                                                                                                          Ua,
                                                                                                                                                                                          Ha,
                                                                                                                                                                                          hn,
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
                                                                                                                                                                            Jn =
                                                                                                                                                                              (
                                                                                                                                                                                pr,
                                                                                                                                                                              ) => {
                                                                                                                                                                                var qa =
                                                                                                                                                                                    Le(),
                                                                                                                                                                                  Ua =
                                                                                                                                                                                    Se(
                                                                                                                                                                                      qa,
                                                                                                                                                                                    );
                                                                                                                                                                                {
                                                                                                                                                                                  var Ha =
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
                                                                                                                                                                                                Qn,
                                                                                                                                                                                                $n = Q,
                                                                                                                                                                                                eo = Q,
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                k(
                                                                                                                                                                                                  Qn,
                                                                                                                                                                                                  $n,
                                                                                                                                                                                                  eo,
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
                                                                                                                                                                                    hn =
                                                                                                                                                                                      (
                                                                                                                                                                                        Lr,
                                                                                                                                                                                      ) => {
                                                                                                                                                                                        var Ka =
                                                                                                                                                                                            Le(),
                                                                                                                                                                                          Qn =
                                                                                                                                                                                            Se(
                                                                                                                                                                                              Ka,
                                                                                                                                                                                            );
                                                                                                                                                                                        {
                                                                                                                                                                                          var $n =
                                                                                                                                                                                              (
                                                                                                                                                                                                da,
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                Ze(
                                                                                                                                                                                                  da,
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
                                                                                                                                                                                                        ro,
                                                                                                                                                                                                        ao = Q,
                                                                                                                                                                                                        no = Q,
                                                                                                                                                                                                        hr = Q,
                                                                                                                                                                                                        Ga = Q,
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        Ft(
                                                                                                                                                                                                          ro,
                                                                                                                                                                                                          {
                                                                                                                                                                                                            get text() {
                                                                                                                                                                                                              return hr();
                                                                                                                                                                                                            },
                                                                                                                                                                                                            children:
                                                                                                                                                                                                              (
                                                                                                                                                                                                                Wa,
                                                                                                                                                                                                                oo,
                                                                                                                                                                                                              ) => {
                                                                                                                                                                                                                {
                                                                                                                                                                                                                  let bn =
                                                                                                                                                                                                                      v(
                                                                                                                                                                                                                        () =>
                                                                                                                                                                                                                          no() ||
                                                                                                                                                                                                                          void 0,
                                                                                                                                                                                                                      ),
                                                                                                                                                                                                                    sr =
                                                                                                                                                                                                                      v(
                                                                                                                                                                                                                        () =>
                                                                                                                                                                                                                          hr() ||
                                                                                                                                                                                                                          t(
                                                                                                                                                                                                                            d,
                                                                                                                                                                                                                          )
                                                                                                                                                                                                                            .snippets
                                                                                                                                                                                                                            .themeToggle
                                                                                                                                                                                                                            .defaultLabel,
                                                                                                                                                                                                                      );
                                                                                                                                                                                                                  Cs(
                                                                                                                                                                                                                    Wa,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                      get sz() {
                                                                                                                                                                                                                        return ao();
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      get disabled() {
                                                                                                                                                                                                                        return Ga();
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      get "data-variant"() {
                                                                                                                                                                                                                        return t(
                                                                                                                                                                                                                          bn,
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      get title() {
                                                                                                                                                                                                                        return t(
                                                                                                                                                                                                                          sr,
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
                                                                                                                                                                                            eo =
                                                                                                                                                                                              (
                                                                                                                                                                                                da,
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                var to =
                                                                                                                                                                                                    Le(),
                                                                                                                                                                                                  ro =
                                                                                                                                                                                                    Se(
                                                                                                                                                                                                      to,
                                                                                                                                                                                                    );
                                                                                                                                                                                                {
                                                                                                                                                                                                  var ao =
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
                                                                                                                                                                                                                Wa,
                                                                                                                                                                                                                oo = Q,
                                                                                                                                                                                                                bn = Q,
                                                                                                                                                                                                                sr = Q,
                                                                                                                                                                                                                mn = Q,
                                                                                                                                                                                                              ) => {
                                                                                                                                                                                                                {
                                                                                                                                                                                                                  let _n =
                                                                                                                                                                                                                    v(
                                                                                                                                                                                                                      () =>
                                                                                                                                                                                                                        sr() ||
                                                                                                                                                                                                                        t(
                                                                                                                                                                                                                          d,
                                                                                                                                                                                                                        )
                                                                                                                                                                                                                          .components
                                                                                                                                                                                                                          .timePicker
                                                                                                                                                                                                                          .label,
                                                                                                                                                                                                                    );
                                                                                                                                                                                                                  Vf(
                                                                                                                                                                                                                    Wa,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                      get label() {
                                                                                                                                                                                                                        return t(
                                                                                                                                                                                                                          _n,
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      get disabled() {
                                                                                                                                                                                                                        return mn();
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
                                                                                                                                                                                                                        so,
                                                                                                                                                                                                                      ) {
                                                                                                                                                                                                                        A(
                                                                                                                                                                                                                          $,
                                                                                                                                                                                                                          so,
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
                                                                                                                                                                                                    no =
                                                                                                                                                                                                      (
                                                                                                                                                                                                        hr,
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        var Ga =
                                                                                                                                                                                                            Le(),
                                                                                                                                                                                                          Wa =
                                                                                                                                                                                                            Se(
                                                                                                                                                                                                              Ga,
                                                                                                                                                                                                            );
                                                                                                                                                                                                        {
                                                                                                                                                                                                          var oo =
                                                                                                                                                                                                              (
                                                                                                                                                                                                                sr,
                                                                                                                                                                                                              ) => {
                                                                                                                                                                                                                Ze(
                                                                                                                                                                                                                  sr,
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
                                                                                                                                                                                                                        _n,
                                                                                                                                                                                                                        so = Q,
                                                                                                                                                                                                                        ji = Q,
                                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                                        C(
                                                                                                                                                                                                                          _n,
                                                                                                                                                                                                                          so,
                                                                                                                                                                                                                          ji,
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
                                                                                                                                                                                                            bn =
                                                                                                                                                                                                              (
                                                                                                                                                                                                                sr,
                                                                                                                                                                                                              ) => {
                                                                                                                                                                                                                Ze(
                                                                                                                                                                                                                  sr,
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
                                                                                                                                                                                                                        mn,
                                                                                                                                                                                                                        _n,
                                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                                        b(
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
                                                                                                                                                                                                              };
                                                                                                                                                                                                          Z(
                                                                                                                                                                                                            Wa,
                                                                                                                                                                                                            (
                                                                                                                                                                                                              sr,
                                                                                                                                                                                                            ) => {
                                                                                                                                                                                                              t(
                                                                                                                                                                                                                c,
                                                                                                                                                                                                              ) ===
                                                                                                                                                                                                              "toast"
                                                                                                                                                                                                                ? sr(
                                                                                                                                                                                                                    oo,
                                                                                                                                                                                                                  )
                                                                                                                                                                                                                : sr(
                                                                                                                                                                                                                    bn,
                                                                                                                                                                                                                    !1,
                                                                                                                                                                                                                  );
                                                                                                                                                                                                            },
                                                                                                                                                                                                            !0,
                                                                                                                                                                                                          );
                                                                                                                                                                                                        }
                                                                                                                                                                                                        w(
                                                                                                                                                                                                          hr,
                                                                                                                                                                                                          Ga,
                                                                                                                                                                                                        );
                                                                                                                                                                                                      };
                                                                                                                                                                                                  Z(
                                                                                                                                                                                                    ro,
                                                                                                                                                                                                    (
                                                                                                                                                                                                      hr,
                                                                                                                                                                                                    ) => {
                                                                                                                                                                                                      t(
                                                                                                                                                                                                        c,
                                                                                                                                                                                                      ) ===
                                                                                                                                                                                                      "timePicker"
                                                                                                                                                                                                        ? hr(
                                                                                                                                                                                                            ao,
                                                                                                                                                                                                          )
                                                                                                                                                                                                        : hr(
                                                                                                                                                                                                            no,
                                                                                                                                                                                                            !1,
                                                                                                                                                                                                          );
                                                                                                                                                                                                    },
                                                                                                                                                                                                    !0,
                                                                                                                                                                                                  );
                                                                                                                                                                                                }
                                                                                                                                                                                                w(
                                                                                                                                                                                                  da,
                                                                                                                                                                                                  to,
                                                                                                                                                                                                );
                                                                                                                                                                                              };
                                                                                                                                                                                          Z(
                                                                                                                                                                                            Qn,
                                                                                                                                                                                            (
                                                                                                                                                                                              da,
                                                                                                                                                                                            ) => {
                                                                                                                                                                                              t(
                                                                                                                                                                                                c,
                                                                                                                                                                                              ) ===
                                                                                                                                                                                              "themeToggle"
                                                                                                                                                                                                ? da(
                                                                                                                                                                                                    $n,
                                                                                                                                                                                                  )
                                                                                                                                                                                                : da(
                                                                                                                                                                                                    eo,
                                                                                                                                                                                                    !1,
                                                                                                                                                                                                  );
                                                                                                                                                                                            },
                                                                                                                                                                                            !0,
                                                                                                                                                                                          );
                                                                                                                                                                                        }
                                                                                                                                                                                        w(
                                                                                                                                                                                          Lr,
                                                                                                                                                                                          Ka,
                                                                                                                                                                                        );
                                                                                                                                                                                      };
                                                                                                                                                                                  Z(
                                                                                                                                                                                    Ua,
                                                                                                                                                                                    (
                                                                                                                                                                                      Lr,
                                                                                                                                                                                    ) => {
                                                                                                                                                                                      t(
                                                                                                                                                                                        c,
                                                                                                                                                                                      ) ===
                                                                                                                                                                                      "tabs"
                                                                                                                                                                                        ? Lr(
                                                                                                                                                                                            Ha,
                                                                                                                                                                                          )
                                                                                                                                                                                        : Lr(
                                                                                                                                                                                            hn,
                                                                                                                                                                                            !1,
                                                                                                                                                                                          );
                                                                                                                                                                                    },
                                                                                                                                                                                    !0,
                                                                                                                                                                                  );
                                                                                                                                                                                }
                                                                                                                                                                                w(
                                                                                                                                                                                  pr,
                                                                                                                                                                                  qa,
                                                                                                                                                                                );
                                                                                                                                                                              };
                                                                                                                                                                          Z(
                                                                                                                                                                            Xn,
                                                                                                                                                                            (
                                                                                                                                                                              pr,
                                                                                                                                                                            ) => {
                                                                                                                                                                              t(
                                                                                                                                                                                c,
                                                                                                                                                                              ) ===
                                                                                                                                                                              "tablePagination"
                                                                                                                                                                                ? pr(
                                                                                                                                                                                    Va,
                                                                                                                                                                                  )
                                                                                                                                                                                : pr(
                                                                                                                                                                                    Jn,
                                                                                                                                                                                    !1,
                                                                                                                                                                                  );
                                                                                                                                                                            },
                                                                                                                                                                            !0,
                                                                                                                                                                          );
                                                                                                                                                                        }
                                                                                                                                                                        w(
                                                                                                                                                                          Tr,
                                                                                                                                                                          Ra,
                                                                                                                                                                        );
                                                                                                                                                                      };
                                                                                                                                                                  Z(
                                                                                                                                                                    Jt,
                                                                                                                                                                    (
                                                                                                                                                                      Tr,
                                                                                                                                                                    ) => {
                                                                                                                                                                      t(
                                                                                                                                                                        c,
                                                                                                                                                                      ) ===
                                                                                                                                                                      "switch"
                                                                                                                                                                        ? Tr(
                                                                                                                                                                            Gr,
                                                                                                                                                                          )
                                                                                                                                                                        : Tr(
                                                                                                                                                                            Qo,
                                                                                                                                                                            !1,
                                                                                                                                                                          );
                                                                                                                                                                    },
                                                                                                                                                                    !0,
                                                                                                                                                                  );
                                                                                                                                                                }
                                                                                                                                                                w(
                                                                                                                                                                  ft,
                                                                                                                                                                  Xt,
                                                                                                                                                                );
                                                                                                                                                              };
                                                                                                                                                          Z(
                                                                                                                                                            ca,
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
                                                                                                                                                        w(
                                                                                                                                                          or,
                                                                                                                                                          Kr,
                                                                                                                                                        );
                                                                                                                                                      };
                                                                                                                                                  Z(
                                                                                                                                                    gr,
                                                                                                                                                    (
                                                                                                                                                      or,
                                                                                                                                                    ) => {
                                                                                                                                                      t(
                                                                                                                                                        c,
                                                                                                                                                      ) ===
                                                                                                                                                      "select"
                                                                                                                                                        ? or(
                                                                                                                                                            wt,
                                                                                                                                                          )
                                                                                                                                                        : or(
                                                                                                                                                            Hr,
                                                                                                                                                            !1,
                                                                                                                                                          );
                                                                                                                                                    },
                                                                                                                                                    !0,
                                                                                                                                                  );
                                                                                                                                                }
                                                                                                                                                w(
                                                                                                                                                  Yt,
                                                                                                                                                  vt,
                                                                                                                                                );
                                                                                                                                              };
                                                                                                                                          Z(
                                                                                                                                            ia,
                                                                                                                                            (
                                                                                                                                              Yt,
                                                                                                                                            ) => {
                                                                                                                                              t(
                                                                                                                                                c,
                                                                                                                                              ) ===
                                                                                                                                              "slider"
                                                                                                                                                ? Yt(
                                                                                                                                                    la,
                                                                                                                                                  )
                                                                                                                                                : Yt(
                                                                                                                                                    ua,
                                                                                                                                                    !1,
                                                                                                                                                  );
                                                                                                                                            },
                                                                                                                                            !0,
                                                                                                                                          );
                                                                                                                                        }
                                                                                                                                        w(
                                                                                                                                          qr,
                                                                                                                                          Ur,
                                                                                                                                        );
                                                                                                                                      };
                                                                                                                                  Z(
                                                                                                                                    Yn,
                                                                                                                                    (
                                                                                                                                      qr,
                                                                                                                                    ) => {
                                                                                                                                      t(
                                                                                                                                        c,
                                                                                                                                      ) ===
                                                                                                                                      "searchInput"
                                                                                                                                        ? qr(
                                                                                                                                            Ba,
                                                                                                                                          )
                                                                                                                                        : qr(
                                                                                                                                            ja,
                                                                                                                                            !1,
                                                                                                                                          );
                                                                                                                                    },
                                                                                                                                    !0,
                                                                                                                                  );
                                                                                                                                }
                                                                                                                                w(
                                                                                                                                  Fr,
                                                                                                                                  Oa,
                                                                                                                                );
                                                                                                                              };
                                                                                                                          Z(
                                                                                                                            Gn,
                                                                                                                            (
                                                                                                                              Fr,
                                                                                                                            ) => {
                                                                                                                              t(
                                                                                                                                c,
                                                                                                                              ) ===
                                                                                                                              "radio"
                                                                                                                                ? Fr(
                                                                                                                                    Wn,
                                                                                                                                  )
                                                                                                                                : Fr(
                                                                                                                                    Zn,
                                                                                                                                    !1,
                                                                                                                                  );
                                                                                                                            },
                                                                                                                            !0,
                                                                                                                          );
                                                                                                                        }
                                                                                                                        w(
                                                                                                                          Ar,
                                                                                                                          Na,
                                                                                                                        );
                                                                                                                      };
                                                                                                                  Z(
                                                                                                                    Un,
                                                                                                                    (
                                                                                                                      Ar,
                                                                                                                    ) => {
                                                                                                                      t(
                                                                                                                        c,
                                                                                                                      ) ===
                                                                                                                      "progressCircle"
                                                                                                                        ? Ar(
                                                                                                                            Hn,
                                                                                                                          )
                                                                                                                        : Ar(
                                                                                                                            Kn,
                                                                                                                            !1,
                                                                                                                          );
                                                                                                                    },
                                                                                                                    !0,
                                                                                                                  );
                                                                                                                }
                                                                                                                w(
                                                                                                                  sa,
                                                                                                                  qn,
                                                                                                                );
                                                                                                              };
                                                                                                          Z(
                                                                                                            Vn,
                                                                                                            (
                                                                                                              sa,
                                                                                                            ) => {
                                                                                                              t(
                                                                                                                c,
                                                                                                              ) ===
                                                                                                              "progressBar"
                                                                                                                ? sa(
                                                                                                                    Oi,
                                                                                                                  )
                                                                                                                : sa(
                                                                                                                    Bi,
                                                                                                                    !1,
                                                                                                                  );
                                                                                                            },
                                                                                                            !0,
                                                                                                          );
                                                                                                        }
                                                                                                        w(
                                                                                                          oa,
                                                                                                          Ia,
                                                                                                        );
                                                                                                      };
                                                                                                  Z(
                                                                                                    jn,
                                                                                                    (
                                                                                                      oa,
                                                                                                    ) => {
                                                                                                      t(
                                                                                                        c,
                                                                                                      ) ===
                                                                                                      "notepad"
                                                                                                        ? oa(
                                                                                                            Rn,
                                                                                                          )
                                                                                                        : oa(
                                                                                                            Ni,
                                                                                                            !1,
                                                                                                          );
                                                                                                    },
                                                                                                    !0,
                                                                                                  );
                                                                                                }
                                                                                                w(
                                                                                                  na,
                                                                                                  Bn,
                                                                                                );
                                                                                              };
                                                                                          Z(
                                                                                            On,
                                                                                            (
                                                                                              na,
                                                                                            ) => {
                                                                                              t(
                                                                                                c,
                                                                                              ) ===
                                                                                              "menu"
                                                                                                ? na(
                                                                                                    Di,
                                                                                                  )
                                                                                                : na(
                                                                                                    Ii,
                                                                                                    !1,
                                                                                                  );
                                                                                            },
                                                                                            !0,
                                                                                          );
                                                                                        }
                                                                                        w(
                                                                                          zr,
                                                                                          pn,
                                                                                        );
                                                                                      };
                                                                                  Z(
                                                                                    Da,
                                                                                    (
                                                                                      zr,
                                                                                    ) => {
                                                                                      t(
                                                                                        c,
                                                                                      ) ===
                                                                                      "form"
                                                                                        ? zr(
                                                                                            Xo,
                                                                                          )
                                                                                        : zr(
                                                                                            Jo,
                                                                                            !1,
                                                                                          );
                                                                                    },
                                                                                    !0,
                                                                                  );
                                                                                }
                                                                                w(
                                                                                  Er,
                                                                                  Ma,
                                                                                );
                                                                              };
                                                                          Z(
                                                                            Ta,
                                                                            (
                                                                              Er,
                                                                            ) => {
                                                                              t(
                                                                                c,
                                                                              ) ===
                                                                              "filePicker"
                                                                                ? Er(
                                                                                    La,
                                                                                  )
                                                                                : Er(
                                                                                    Nn,
                                                                                    !1,
                                                                                  );
                                                                            },
                                                                            !0,
                                                                          );
                                                                        }
                                                                        w(
                                                                          xt,
                                                                          Fa,
                                                                        );
                                                                      };
                                                                    Z(
                                                                      Rr,
                                                                      (xt) => {
                                                                        t(c) ===
                                                                        "field"
                                                                          ? xt(
                                                                              Vr,
                                                                            )
                                                                          : xt(
                                                                              zt,
                                                                              !1,
                                                                            );
                                                                      },
                                                                      !0,
                                                                    );
                                                                  }
                                                                  w(nr, Pr);
                                                                };
                                                              Z(
                                                                _t,
                                                                (nr) => {
                                                                  t(c) ===
                                                                  "dialog"
                                                                    ? nr(jr)
                                                                    : nr(
                                                                        gn,
                                                                        !1,
                                                                      );
                                                                },
                                                                !0,
                                                              );
                                                            }
                                                            w(Rt, Vt);
                                                          };
                                                        Z(
                                                          Sr,
                                                          (Rt) => {
                                                            t(c) ===
                                                            "datePicker"
                                                              ? Rt(ra)
                                                              : Rt(aa, !1);
                                                          },
                                                          !0,
                                                        );
                                                      }
                                                      w($e, ar);
                                                    };
                                                  Z(
                                                    We,
                                                    ($e) => {
                                                      t(c) === "colorPicker"
                                                        ? $e(Ye)
                                                        : $e(it, !1);
                                                    },
                                                    !0,
                                                  );
                                                }
                                                w(Et, rr);
                                              };
                                            Z(
                                              tr,
                                              (Et) => {
                                                t(c) === "codeView"
                                                  ? Et(Nt)
                                                  : Et(Zt, !1);
                                              },
                                              !0,
                                            );
                                          }
                                          w(at, Pt);
                                        };
                                      Z(
                                        De,
                                        (at) => {
                                          t(c) === "checkbox"
                                            ? at(qe)
                                            : at(rt, !1);
                                        },
                                        !0,
                                      );
                                    }
                                    w(ie, Pe);
                                  };
                                Z(
                                  Dt,
                                  (ie) => {
                                    t(c) === "carousel" ? ie(It) : ie(tt, !1);
                                  },
                                  !0,
                                );
                              }
                              w(Qe, dt);
                            };
                          Z(
                            Oe,
                            (Qe) => {
                              t(c) === "card" ? Qe(Me) : Qe(Xe, !1);
                            },
                            !0,
                          );
                        }
                        w(Ie, He);
                      };
                    Z(
                      we,
                      (Ie) => {
                        t(c) === "button" ? Ie(Te) : Ie(ze, !1);
                      },
                      !0,
                    );
                  }
                  w(xe, W);
                };
              Z(
                le,
                (xe) => {
                  t(c) === "accordion" ? xe(me) : xe(ke, !1);
                },
                !0,
              );
            }
            w(L, re);
          };
        Z(Ee, (L) => {
          t(c) === "about" ? L(de) : L(Ae, !1);
        });
      }
      (O(
        (L, re, le, me) => {
          (V(te, 1, L), V(N, 1, re), V(Fe, 1, le), V(Ce, 1, me));
        },
        [
          () => G(j("p-6 md:p-6 lg:p-6")),
          () => G(j("flex items-center justify-between")),
          () => G(j("max-w-[640px] min-h-[560px] mx-auto p-4 md:p-6 lg:p-10")),
          () => G(j("grid gap-4 md:gap-6 lg:gap-8")),
        ],
      ),
        w(ve, P));
    },
    $$slots: { default: !0 },
  }),
    je(),
    o());
}
hu(Rv, { target: document.getElementById("app") });

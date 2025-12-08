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
const Ts = "production",
  we = !Ts.toLowerCase().startsWith("prod");
var Co = Array.isArray,
  Ls = Array.prototype.indexOf,
  So = Array.from,
  Tr = Object.defineProperty,
  pr = Object.getOwnPropertyDescriptor,
  Ms = Object.getOwnPropertyDescriptors,
  Ds = Object.prototype,
  Ns = Array.prototype,
  xi = Object.getPrototypeOf,
  Ko = Object.isExtensible;
function la(r) {
  return typeof r == "function";
}
const $ = () => {};
function Is(r) {
  for (var e = 0; e < r.length; e++) r[e]();
}
function wi() {
  var r,
    e,
    a = new Promise((n, o) => {
      ((r = n), (e = o));
    });
  return { promise: a, resolve: r, reject: e };
}
const bt = 2,
  Po = 4,
  Eo = 8,
  yi = 1 << 24,
  or = 16,
  _r = 32,
  Yr = 64,
  kn = 128,
  Wt = 512,
  xt = 1024,
  Ft = 2048,
  xr = 4096,
  Nt = 8192,
  br = 16384,
  Cn = 32768,
  Lr = 65536,
  hn = 1 << 17,
  ki = 1 << 18,
  ma = 1 << 19,
  Os = 1 << 20,
  Mr = 32768,
  co = 1 << 21,
  Sn = 1 << 22,
  zr = 1 << 23,
  Ar = Symbol("$state"),
  Ci = Symbol("legacy props"),
  Bs = Symbol(""),
  Si = Symbol("proxy path"),
  ua = new (class extends Error {
    name = "StaleReactionError";
    message =
      "The reaction that called `getAbortSignal()` was re-run or destroyed";
  })();
function Rs(r) {
  if (we) {
    const e = new Error(`lifecycle_outside_component
\`${r}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function js() {
  if (we) {
    const r = new Error(
      "async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Go() {
  if (we) {
    const r = new Error(
      "bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
function Vs() {
  if (we) {
    const r = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/derived_references_self");
}
function qs(r) {
  if (we) {
    const e = new Error(`effect_in_teardown
\`${r}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Us() {
  if (we) {
    const r = new Error(
      "effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Hs(r) {
  if (we) {
    const e = new Error(`effect_orphan
\`${r}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ks() {
  if (we) {
    const r = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Gs() {
  if (we) {
    const r = new Error(
      "invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/invalid_snippet");
}
function Ws(r) {
  if (we) {
    const e = new Error(`props_invalid_value
Cannot do \`bind:${r}={undefined}\` when \`${r}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Zs(r) {
  if (we) {
    const e = new Error(`props_rest_readonly
Rest element properties of \`$props()\` such as \`${r}\` are readonly
https://svelte.dev/e/props_rest_readonly`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/props_rest_readonly");
}
function Xs(r) {
  if (we) {
    const e = new Error(`rune_outside_svelte
The \`${r}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function Ys() {
  if (we) {
    const r = new Error(
      "state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Js() {
  if (we) {
    const r = new Error(
      "state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function $s() {
  if (we) {
    const r = new Error(
      "state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Qs() {
  if (we) {
    const r = new Error(
      "svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Pi = 1,
  Ei = 2,
  zi = 4,
  el = 8,
  tl = 16,
  rl = 1,
  al = 2,
  nl = 4,
  ol = 8,
  il = 16,
  sl = 1,
  ll = 2,
  ul = 4,
  cl = 1,
  dl = 2,
  gt = Symbol(),
  fl = Symbol("filename"),
  vl = "http://www.w3.org/1999/xhtml",
  gl = "@attach";
var zo = "font-weight: bold",
  Ao = "font-weight: normal";
function pl() {
  we
    ? console.warn(
        "%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value",
        zo,
        Ao
      )
    : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Qn(r) {
  we
    ? console.warn(
        `%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${r}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`,
        zo,
        Ao
      )
    : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
function bl() {
  we
    ? console.warn(
        "%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop",
        zo,
        Ao
      )
    : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ai(r) {
  return r === this.v;
}
function Fi(r, e) {
  return r != r
    ? e == e
    : r !== e || (r !== null && typeof r == "object") || typeof r == "function";
}
function Ti(r) {
  return !Fi(r, this.v);
}
let Ja = !1,
  hl = !1;
function ml() {
  Ja = !0;
}
function er(r, e) {
  return ((r.label = e), Li(r.v, e), r);
}
function Li(r, e) {
  return (r?.[Si]?.(e), r);
}
function _l(r) {
  const e = new Error(),
    a = xl();
  return a.length === 0
    ? null
    : (a.unshift(`
`),
      Tr(e, "stack", {
        value: a.join(`
`),
      }),
      Tr(e, "name", { value: r }),
      e);
}
function xl() {
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
function fa(r) {
  et = r;
}
let va = null;
function mn(r) {
  va = r;
}
let $a = null;
function Wo(r) {
  $a = r;
}
function Zt(r) {
  return Mi("getContext").get(r);
}
function wl(r, e) {
  return (Mi("setContext").set(r, e), e);
}
function Oe(r, e = !1, a) {
  ((et = {
    p: et,
    i: !1,
    c: null,
    e: null,
    s: r,
    x: null,
    l: Ja && !e ? { s: null, u: null, $: [] } : null,
  }),
    we && ((et.function = a), ($a = a)));
}
function Be(r) {
  var e = et,
    a = e.e;
  if (a !== null) {
    e.e = null;
    for (var n of a) Xi(n);
  }
  return ((e.i = !0), (et = e.p), we && ($a = et?.function ?? null), {});
}
function _a() {
  return !Ja || (et !== null && et.l === null);
}
function Mi(r) {
  return (et === null && Rs(r), (et.c ??= new Map(yl(et) || void 0)));
}
function yl(r) {
  let e = r.p;
  for (; e !== null; ) {
    const a = e.c;
    if (a !== null) return a;
    e = e.p;
  }
  return null;
}
let Kr = [];
function Di() {
  var r = Kr;
  ((Kr = []), Is(r));
}
function nr(r) {
  if (Kr.length === 0 && !Ua) {
    var e = Kr;
    queueMicrotask(() => {
      e === Kr && Di();
    });
  }
  Kr.push(r);
}
function kl() {
  for (; Kr.length > 0; ) Di();
}
const fo = new WeakMap();
function Ni(r) {
  var e = Ve;
  if (e === null) return ((Ue.f |= zr), r);
  if (
    (we && r instanceof Error && !fo.has(r) && fo.set(r, Cl(r, e)),
    (e.f & Cn) === 0)
  ) {
    if ((e.f & kn) === 0)
      throw (we && !e.parent && r instanceof Error && Ii(r), r);
    e.b.error(r);
  } else ga(r, e);
}
function ga(r, e) {
  for (; e !== null; ) {
    if ((e.f & kn) !== 0)
      try {
        e.b.error(r);
        return;
      } catch (a) {
        r = a;
      }
    e = e.parent;
  }
  throw (we && r instanceof Error && Ii(r), r);
}
function Cl(r, e) {
  const a = pr(r, "message");
  if (!(a && !a.configurable)) {
    for (
      var n = Mo ? "  " : "	",
        o = `
${n}in ${e.fn?.name || "<unknown>"}`,
        i = e.ctx;
      i !== null;
    )
      ((o += `
${n}in ${i.function?.[fl].split("/").pop()}`),
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
function Ii(r) {
  const e = fo.get(r);
  e &&
    (Tr(r, "message", { value: e.message }),
    Tr(r, "stack", { value: e.stack }));
}
const vn = new Set();
let Ke = null,
  bn = null,
  Bt = null,
  Ot = [],
  Pn = null,
  vo = !1,
  Ua = !1;
class tr {
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
    ((Ot = []), (bn = null), this.apply());
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
        : ((bn = this),
          (Ke = null),
          Zo(a.render_effects),
          Zo(a.effects),
          (bn = null),
          this.#l?.resolve()),
      (Bt = null));
  }
  #i(e, a) {
    e.f ^= xt;
    for (var n = e.first; n !== null; ) {
      var o = n.f,
        i = (o & (_r | Yr)) !== 0,
        s = i && (o & xt) !== 0,
        l = s || (o & Nt) !== 0 || this.skipped_effects.has(n);
      if (
        ((n.f & kn) !== 0 &&
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
          ? (n.f ^= xt)
          : (o & Po) !== 0
            ? a.effects.push(n)
            : an(n) && ((n.f & or) !== 0 && a.block_effects.push(n), Xa(n));
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
        wt(a, xt));
  }
  #u(e) {
    if (e !== null)
      for (const a of e)
        (a.f & bt) === 0 || (a.f & Mr) === 0 || ((a.f ^= Mr), this.#u(a.deps));
  }
  capture(e, a) {
    (this.previous.has(e) || this.previous.set(e, a),
      (e.f & zr) === 0 && (this.current.set(e, e.v), Bt?.set(e, e.v)));
  }
  activate() {
    ((Ke = this), this.apply());
  }
  deactivate() {
    Ke === this && ((Ke = null), (Bt = null));
  }
  flush() {
    if ((this.activate(), Ot.length > 0)) {
      if ((Oi(), Ke !== null && Ke !== this)) return;
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
    if (vn.size > 1) {
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
      for (const i of vn) {
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
          for (const _ of s) Bi(_, l, u, f);
          if (Ot.length > 0) {
            ((Ke = i), i.apply());
            for (const _ of Ot) i.#i(_, n);
            i.deactivate();
          }
          Ot = o;
        }
      }
      ((Ke = null), (Bt = e));
    }
    ((this.committed = !0), vn.delete(this));
  }
  increment(e) {
    ((this.#a += 1), e && (this.#r += 1));
  }
  decrement(e) {
    ((this.#a -= 1), e && (this.#r -= 1), this.revive());
  }
  revive() {
    for (const e of this.#o) (wt(e, Ft), Zr(e));
    for (const e of this.#n) (wt(e, xr), Zr(e));
    ((this.#o = []), (this.#n = []), this.flush());
  }
  oncommit(e) {
    this.#e.add(e);
  }
  ondiscard(e) {
    this.#t.add(e);
  }
  settled() {
    return (this.#l ??= wi()).promise;
  }
  static ensure() {
    if (Ke === null) {
      const e = (Ke = new tr());
      (vn.add(Ke),
        Ua ||
          tr.enqueue(() => {
            Ke === e && e.flush();
          }));
    }
    return Ke;
  }
  static enqueue(e) {
    nr(e);
  }
  apply() {}
}
function Sl(r) {
  var e = Ua;
  Ua = !0;
  try {
    for (var a; ; ) {
      if ((kl(), Ot.length === 0 && (Ke?.flush(), Ot.length === 0)))
        return ((Pn = null), a);
      Oi();
    }
  } finally {
    Ua = e;
  }
}
function Oi() {
  var r = Gr;
  vo = !0;
  var e = we ? new Set() : null;
  try {
    var a = 0;
    for (xn(!0); Ot.length > 0; ) {
      var n = tr.ensure();
      if (a++ > 1e3) {
        if (we) {
          var o = new Map();
          for (const s of n.current.keys())
            for (const [l, u] of s.updated ?? []) {
              var i = o.get(l);
              (i || ((i = { error: u.error, count: 0 }), o.set(l, i)),
                (i.count += u.count));
            }
          for (const s of o.values()) s.error && console.error(s.error);
        }
        Pl();
      }
      if ((n.process(Ot), Fr.clear(), we))
        for (const s of n.current.keys()) e.add(s);
    }
  } finally {
    if (((vo = !1), xn(r), (Pn = null), we))
      for (const s of e) s.updated = null;
  }
}
function Pl() {
  try {
    Ks();
  } catch (r) {
    (we && Tr(r, "stack", { value: "" }), ga(r, Pn));
  }
}
let vr = null;
function Zo(r) {
  var e = r.length;
  if (e !== 0) {
    for (var a = 0; a < e; ) {
      var n = r[a++];
      if (
        (n.f & (br | Nt)) === 0 &&
        an(n) &&
        ((vr = new Set()),
        Xa(n),
        n.deps === null &&
          n.first === null &&
          n.nodes === null &&
          (n.teardown === null && n.ac === null ? es(n) : (n.fn = null)),
        vr?.size > 0)
      ) {
        Fr.clear();
        for (const o of vr) {
          if ((o.f & (br | Nt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            (vr.has(s) && (vr.delete(s), i.push(s)), (s = s.parent));
          for (let l = i.length - 1; l >= 0; l--) {
            const u = i[l];
            (u.f & (br | Nt)) === 0 && Xa(u);
          }
        }
        vr.clear();
      }
    }
    vr = null;
  }
}
function Bi(r, e, a, n) {
  if (!a.has(r) && (a.add(r), r.reactions !== null))
    for (const o of r.reactions) {
      const i = o.f;
      (i & bt) !== 0
        ? Bi(o, e, a, n)
        : (i & (Sn | or)) !== 0 &&
          (i & Ft) === 0 &&
          Ri(o, e, n) &&
          (wt(o, Ft), Zr(o));
    }
}
function Ri(r, e, a) {
  const n = a.get(r);
  if (n !== void 0) return n;
  if (r.deps !== null)
    for (const o of r.deps) {
      if (e.includes(o)) return !0;
      if ((o.f & bt) !== 0 && Ri(o, e, a)) return (a.set(o, !0), !0);
    }
  return (a.set(r, !1), !1);
}
function Zr(r) {
  for (var e = (Pn = r); e.parent !== null; ) {
    e = e.parent;
    var a = e.f;
    if (vo && e === Ve && (a & or) !== 0 && (a & ki) === 0) return;
    if ((a & (Yr | _r)) !== 0) {
      if ((a & xt) === 0) return;
      e.f ^= xt;
    }
  }
  Ot.push(e);
}
function El(r) {
  let e = 0,
    a = Xr(0),
    n;
  return (
    we && er(a, "createSubscriber version"),
    () => {
      Wa() &&
        (t(a),
        tn(
          () => (
            e === 0 && (n = $r(() => r(() => Ha(a)))),
            (e += 1),
            () => {
              nr(() => {
                ((e -= 1), e === 0 && (n?.(), (n = void 0), Ha(a)));
              });
            }
          )
        ));
    }
  );
}
var zl = Lr | ma | kn;
function Al(r, e, a) {
  new Fl(r, e, a);
}
class Fl {
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
  #_ = El(
    () => (
      (this.#f = Xr(this.#d)),
      we && er(this.#f, "$effect.pending()"),
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
      (this.#o = rn(() => {
        Ve.b = this;
        {
          var o = this.#h();
          try {
            this.#n = zt(() => n(o));
          } catch (i) {
            this.error(i);
          }
          this.#v > 0 ? this.#b() : (this.#e = !1);
        }
        return () => {
          this.#c?.remove();
        };
      }, zl)));
  }
  #x() {
    try {
      this.#n = zt(() => this.#l(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#e = !1;
  }
  #w() {
    const e = this.#r.pending;
    e &&
      ((this.#i = zt(() => e(this.#t))),
      tr.enqueue(() => {
        var a = this.#h();
        ((this.#n = this.#p(() => (tr.ensure(), zt(() => this.#l(a))))),
          this.#v > 0
            ? this.#b()
            : (ca(this.#i, () => {
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
    (Gt(this.#o), At(this.#o), fa(this.#o.ctx));
    try {
      return e();
    } catch (i) {
      return (Ni(i), null);
    } finally {
      (Gt(a), At(n), fa(o));
    }
  }
  #b() {
    const e = this.#r.pending;
    (this.#n !== null &&
      ((this.#u = document.createDocumentFragment()),
      this.#u.append(this.#c),
      as(this.#n, this.#u)),
      this.#i === null && (this.#i = zt(() => e(this.#t))));
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
          ca(this.#i, () => {
            this.#i = null;
          }),
        this.#u && (this.#t.before(this.#u), (this.#u = null))));
  }
  update_pending_count(e) {
    (this.#m(e), (this.#d += e), this.#f && ba(this.#f, this.#d));
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
        bl();
        return;
      }
      ((o = !0),
        i && Qs(),
        tr.ensure(),
        (this.#d = 0),
        this.#s !== null &&
          ca(this.#s, () => {
            this.#s = null;
          }),
        (this.#e = this.has_pending_snippet()),
        (this.#n = this.#p(() => ((this.#g = !1), zt(() => this.#l(this.#t))))),
        this.#v > 0 ? this.#b() : (this.#e = !1));
    };
    var l = Ue;
    try {
      (At(null), (i = !0), a?.(e, s), (i = !1));
    } catch (u) {
      ga(u, this.#o && this.#o.parent);
    } finally {
      At(l);
    }
    n &&
      nr(() => {
        this.#s = this.#p(() => {
          (tr.ensure(), (this.#g = !0));
          try {
            return zt(() => {
              n(
                this.#t,
                () => e,
                () => s
              );
            });
          } catch (u) {
            return (ga(u, this.#o.parent), null);
          } finally {
            this.#g = !1;
          }
        });
      });
  }
}
function ji(r, e, a, n) {
  const o = _a() ? En : Fo;
  if (a.length === 0 && r.length === 0) {
    n(e.map(o));
    return;
  }
  var i = Ke,
    s = Ve,
    l = Tl();
  function u() {
    Promise.all(a.map((f) => Ml(f)))
      .then((f) => {
        l();
        try {
          n([...e.map(o), ...f]);
        } catch (_) {
          (s.f & br) === 0 && ga(_, s);
        }
        (i?.deactivate(), _n());
      })
      .catch((f) => {
        ga(f, s);
      });
  }
  r.length > 0
    ? Promise.all(r).then(() => {
        l();
        try {
          return u();
        } finally {
          (i?.deactivate(), _n());
        }
      })
    : u();
}
function Tl() {
  var r = Ve,
    e = Ue,
    a = et,
    n = Ke;
  if (we) var o = va;
  return function (s = !0) {
    (Gt(r), At(e), fa(a), s && n?.activate(), we && mn(o));
  };
}
function _n() {
  (Gt(null), At(null), fa(null), we && mn(null));
}
const Ll = new Set();
function En(r) {
  var e = bt | Ft,
    a = Ue !== null && (Ue.f & bt) !== 0 ? Ue : null;
  return (
    Ve !== null && (Ve.f |= ma),
    {
      ctx: et,
      deps: null,
      effects: null,
      equals: Ai,
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
function Ml(r, e) {
  let a = Ve;
  a === null && js();
  var n = a.b,
    o = void 0,
    i = Xr(gt),
    s = !Ue,
    l = new Map();
  return (
    Wl(() => {
      var u = wi();
      o = u.promise;
      try {
        Promise.resolve(r())
          .then(u.resolve, u.reject)
          .then(() => {
            (f === Ke && f.committed && f.deactivate(), _n());
          });
      } catch (b) {
        (u.reject(b), _n());
      }
      var f = Ke;
      if (s) {
        var _ = !n.is_pending();
        (n.update_pending_count(1),
          f.increment(_),
          l.get(f)?.reject(ua),
          l.delete(f),
          l.set(f, u));
      }
      const C = (b, w = void 0) => {
        if ((f.activate(), w)) w !== ua && ((i.f |= zr), ba(i, w));
        else {
          ((i.f & zr) !== 0 && (i.f ^= zr), ba(i, b));
          for (const [k, x] of l) {
            if ((l.delete(k), k === f)) break;
            x.reject(ua);
          }
        }
        s && (n.update_pending_count(-1), f.decrement(_));
      };
      u.promise.then(C, (b) => C(null, b || "unknown"));
    }),
    en(() => {
      for (const u of l.values()) u.reject(ua);
    }),
    we && (i.f |= Sn),
    new Promise((u) => {
      function f(_) {
        function C() {
          _ === o ? u(i) : f(o);
        }
        _.then(C, C);
      }
      f(o);
    })
  );
}
function h(r) {
  const e = En(r);
  return (ns(e), e);
}
function Fo(r) {
  const e = En(r);
  return ((e.equals = Ti), e);
}
function go(r) {
  var e = r.effects;
  if (e !== null) {
    r.effects = null;
    for (var a = 0; a < e.length; a += 1) pt(e[a]);
  }
}
let eo = [];
function Dl(r) {
  for (var e = r.parent; e !== null; ) {
    if ((e.f & bt) === 0) return (e.f & br) === 0 ? e : null;
    e = e.parent;
  }
  return null;
}
function To(r) {
  var e,
    a = Ve;
  if ((Gt(Dl(r)), we)) {
    let n = pa;
    Xo(new Set());
    try {
      (eo.includes(r) && Vs(), eo.push(r), (r.f &= ~Mr), go(r), (e = bo(r)));
    } finally {
      (Gt(a), Xo(n), eo.pop());
    }
  } else
    try {
      ((r.f &= ~Mr), go(r), (e = bo(r)));
    } finally {
      Gt(a);
    }
  return e;
}
function Vi(r) {
  var e = To(r);
  if ((r.equals(e) || (Ke?.is_fork || (r.v = e), (r.wv = is())), !Jr))
    if (Bt !== null) (Wa() || Ke?.is_fork) && Bt.set(r, e);
    else {
      var a = (r.f & Wt) === 0 ? xr : xt;
      wt(r, a);
    }
}
let pa = new Set();
const Fr = new Map();
function Xo(r) {
  pa = r;
}
let Lo = !1;
function Nl() {
  Lo = !0;
}
function Xr(r, e) {
  var a = { f: 0, v: r, reactions: null, equals: Ai, rv: 0, wv: 0 };
  return a;
}
function he(r, e) {
  const a = Xr(r);
  return (ns(a), a);
}
function qi(r, e = !1, a = !0) {
  const n = Xr(r);
  return (
    e || (n.equals = Ti),
    Ja && a && et !== null && et.l !== null && (et.l.s ??= []).push(n),
    n
  );
}
function A(r, e, a = !1) {
  Ue !== null &&
    (!ar || (Ue.f & hn) !== 0) &&
    _a() &&
    (Ue.f & (bt | or | Sn | hn)) !== 0 &&
    !hr?.includes(r) &&
    $s();
  let n = a ? Ye(e) : e;
  return (we && Li(n, r.label), ba(r, n));
}
function ba(r, e) {
  if (!r.equals(e)) {
    var a = r.v;
    (Jr ? Fr.set(r, e) : Fr.set(r, a), (r.v = e));
    var n = tr.ensure();
    if ((n.capture(r, a), we)) {
      if (Ve !== null) {
        r.updated ??= new Map();
        const o = (r.updated.get("")?.count ?? 0) + 1;
        if ((r.updated.set("", { error: null, count: o }), o > 5)) {
          const i = _l("updated at");
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
      ((r.f & Ft) !== 0 && To(r), wt(r, (r.f & Wt) !== 0 ? xt : xr)),
      (r.wv = is()),
      Hi(r, Ft),
      _a() &&
        Ve !== null &&
        (Ve.f & xt) !== 0 &&
        (Ve.f & (_r | Yr)) === 0 &&
        (It === null ? Xl([r]) : It.push(r)),
      !n.is_fork && pa.size > 0 && !Lo && Ui());
  }
  return e;
}
function Ui() {
  Lo = !1;
  var r = Gr;
  xn(!0);
  const e = Array.from(pa);
  try {
    for (const a of e) ((a.f & xt) !== 0 && wt(a, xr), an(a) && Xa(a));
  } finally {
    xn(r);
  }
  pa.clear();
}
function Ha(r) {
  A(r, r.v + 1);
}
function Hi(r, e) {
  var a = r.reactions;
  if (a !== null)
    for (var n = _a(), o = a.length, i = 0; i < o; i++) {
      var s = a[i],
        l = s.f;
      if (!(!n && s === Ve)) {
        if (we && (l & hn) !== 0) {
          pa.add(s);
          continue;
        }
        var u = (l & Ft) === 0;
        if ((u && wt(s, e), (l & bt) !== 0)) {
          var f = s;
          (Bt?.delete(f), (l & Mr) === 0 && (l & Wt && (s.f |= Mr), Hi(f, xr)));
        } else u && ((l & or) !== 0 && vr !== null && vr.add(s), Zr(s));
      }
    }
}
const Il = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function Ye(r) {
  if (typeof r != "object" || r === null || Ar in r) return r;
  const e = xi(r);
  if (e !== Ds && e !== Ns) return r;
  var a = new Map(),
    n = Co(r),
    o = he(0),
    i = Wr,
    s = (_) => {
      if (Wr === i) return _();
      var C = Ue,
        b = Wr;
      (At(null), $o(i));
      var w = _();
      return (At(C), $o(b), w);
    };
  n && (a.set("length", he(r.length)), we && (r = Bl(r)));
  var l = "";
  let u = !1;
  function f(_) {
    if (!u) {
      ((u = !0), (l = _), er(o, `${l} version`));
      for (const [C, b] of a) er(b, Hr(l, C));
      u = !1;
    }
  }
  return new Proxy(r, {
    defineProperty(_, C, b) {
      (!("value" in b) ||
        b.configurable === !1 ||
        b.enumerable === !1 ||
        b.writable === !1) &&
        Ys();
      var w = a.get(C);
      return (
        w === void 0
          ? (w = s(() => {
              var k = he(b.value);
              return (
                a.set(C, k),
                we && typeof C == "string" && er(k, Hr(l, C)),
                k
              );
            }))
          : A(w, b.value, !0),
        !0
      );
    },
    deleteProperty(_, C) {
      var b = a.get(C);
      if (b === void 0) {
        if (C in _) {
          const w = s(() => he(gt));
          (a.set(C, w), Ha(o), we && er(w, Hr(l, C)));
        }
      } else (A(b, gt), Ha(o));
      return !0;
    },
    get(_, C, b) {
      if (C === Ar) return r;
      if (we && C === Si) return f;
      var w = a.get(C),
        k = C in _;
      if (
        (w === void 0 &&
          (!k || pr(_, C)?.writable) &&
          ((w = s(() => {
            var g = Ye(k ? _[C] : gt),
              c = he(g);
            return (we && er(c, Hr(l, C)), c);
          })),
          a.set(C, w)),
        w !== void 0)
      ) {
        var x = t(w);
        return x === gt ? void 0 : x;
      }
      return Reflect.get(_, C, b);
    },
    getOwnPropertyDescriptor(_, C) {
      var b = Reflect.getOwnPropertyDescriptor(_, C);
      if (b && "value" in b) {
        var w = a.get(C);
        w && (b.value = t(w));
      } else if (b === void 0) {
        var k = a.get(C),
          x = k?.v;
        if (k !== void 0 && x !== gt)
          return { enumerable: !0, configurable: !0, value: x, writable: !0 };
      }
      return b;
    },
    has(_, C) {
      if (C === Ar) return !0;
      var b = a.get(C),
        w = (b !== void 0 && b.v !== gt) || Reflect.has(_, C);
      if (b !== void 0 || (Ve !== null && (!w || pr(_, C)?.writable))) {
        b === void 0 &&
          ((b = s(() => {
            var x = w ? Ye(_[C]) : gt,
              g = he(x);
            return (we && er(g, Hr(l, C)), g);
          })),
          a.set(C, b));
        var k = t(b);
        if (k === gt) return !1;
      }
      return w;
    },
    set(_, C, b, w) {
      var k = a.get(C),
        x = C in _;
      if (n && C === "length")
        for (var g = b; g < k.v; g += 1) {
          var c = a.get(g + "");
          c !== void 0
            ? A(c, gt)
            : g in _ &&
              ((c = s(() => he(gt))), a.set(g + "", c), we && er(c, Hr(l, g)));
        }
      if (k === void 0)
        (!x || pr(_, C)?.writable) &&
          ((k = s(() => he(void 0))),
          we && er(k, Hr(l, C)),
          A(k, Ye(b)),
          a.set(C, k));
      else {
        x = k.v !== gt;
        var v = s(() => Ye(b));
        A(k, v);
      }
      var d = Reflect.getOwnPropertyDescriptor(_, C);
      if ((d?.set && d.set.call(w, b), !x)) {
        if (n && typeof C == "string") {
          var p = a.get("length"),
            S = Number(C);
          Number.isInteger(S) && S >= p.v && A(p, S + 1);
        }
        Ha(o);
      }
      return !0;
    },
    ownKeys(_) {
      t(o);
      var C = Reflect.ownKeys(_).filter((k) => {
        var x = a.get(k);
        return x === void 0 || x.v !== gt;
      });
      for (var [b, w] of a) w.v !== gt && !(b in _) && C.push(b);
      return C;
    },
    setPrototypeOf() {
      Js();
    },
  });
}
function Hr(r, e) {
  return typeof e == "symbol"
    ? `${r}[Symbol(${e.description ?? ""})]`
    : Il.test(e)
      ? `${r}.${e}`
      : /^\d+$/.test(e)
        ? `${r}[${e}]`
        : `${r}['${e}']`;
}
function Ka(r) {
  try {
    if (r !== null && typeof r == "object" && Ar in r) return r[Ar];
  } catch {}
  return r;
}
function Ki(r, e) {
  return Object.is(Ka(r), Ka(e));
}
const Ol = new Set([
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
function Bl(r) {
  return new Proxy(r, {
    get(e, a, n) {
      var o = Reflect.get(e, a, n);
      return Ol.has(a)
        ? function (...i) {
            Nl();
            var s = o.apply(this, i);
            return (Ui(), s);
          }
        : o;
    },
  });
}
function Rl() {
  const r = Array.prototype,
    e = Array.__svelte_cleanup;
  e && e();
  const { indexOf: a, lastIndexOf: n, includes: o } = r;
  ((r.indexOf = function (i, s) {
    const l = a.call(this, i, s);
    if (l === -1) {
      for (let u = s ?? 0; u < this.length; u += 1)
        if (Ka(this[u]) === i) {
          Qn("array.indexOf(...)");
          break;
        }
    }
    return l;
  }),
    (r.lastIndexOf = function (i, s) {
      const l = n.call(this, i, s ?? this.length - 1);
      if (l === -1) {
        for (let u = 0; u <= (s ?? this.length - 1); u += 1)
          if (Ka(this[u]) === i) {
            Qn("array.lastIndexOf(...)");
            break;
          }
      }
      return l;
    }),
    (r.includes = function (i, s) {
      const l = o.call(this, i, s);
      if (!l) {
        for (let u = 0; u < this.length; u += 1)
          if (Ka(this[u]) === i) {
            Qn("array.includes(...)");
            break;
          }
      }
      return l;
    }),
    (Array.__svelte_cleanup = () => {
      ((r.indexOf = a), (r.lastIndexOf = n), (r.includes = o));
    }));
}
var po, Mo, Gi, Wi;
function jl() {
  if (po === void 0) {
    ((po = window), (Mo = /Firefox/.test(navigator.userAgent)));
    var r = Element.prototype,
      e = Node.prototype,
      a = Text.prototype;
    ((Gi = pr(e, "firstChild").get),
      (Wi = pr(e, "nextSibling").get),
      Ko(r) &&
        ((r.__click = void 0),
        (r.__className = void 0),
        (r.__attributes = null),
        (r.__style = void 0),
        (r.__e = void 0)),
      Ko(a) && (a.__t = void 0),
      we && ((r.__svelte_meta = null), Rl()));
  }
}
function mr(r = "") {
  return document.createTextNode(r);
}
function rr(r) {
  return Gi.call(r);
}
function Qa(r) {
  return Wi.call(r);
}
function m(r, e) {
  return rr(r);
}
function Ce(r, e = !1) {
  {
    var a = rr(r);
    return a instanceof Comment && a.data === "" ? Qa(a) : a;
  }
}
function D(r, e = 1, a = !1) {
  let n = r;
  for (; e--; ) n = Qa(n);
  return n;
}
function Vl(r) {
  r.textContent = "";
}
function Zi() {
  return !1;
}
function ql(r, e) {
  if (e) {
    const a = document.body;
    ((r.autofocus = !0),
      nr(() => {
        document.activeElement === a && r.focus();
      }));
  }
}
let Yo = !1;
function Ul() {
  Yo ||
    ((Yo = !0),
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
function xa(r) {
  var e = Ue,
    a = Ve;
  (At(null), Gt(null));
  try {
    return r();
  } finally {
    (At(e), Gt(a));
  }
}
function Do(r, e, a, n = a) {
  r.addEventListener(e, () => xa(a));
  const o = r.__on_r;
  (o
    ? (r.__on_r = () => {
        (o(), n(!0));
      })
    : (r.__on_r = () => n(!0)),
    Ul());
}
function Hl(r) {
  (Ve === null && (Ue === null && Hs(r), Us()), Jr && qs(r));
}
function Kl(r, e) {
  var a = e.last;
  a === null
    ? (e.last = e.first = r)
    : ((a.next = r), (r.prev = a), (e.last = r));
}
function ir(r, e, a) {
  var n = Ve;
  if (we) for (; n !== null && (n.f & hn) !== 0; ) n = n.parent;
  n !== null && (n.f & Nt) !== 0 && (r |= Nt);
  var o = {
    ctx: et,
    deps: null,
    nodes: null,
    f: r | Ft | Wt,
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
  if ((we && (o.component_function = $a), a))
    try {
      (Xa(o), (o.f |= Cn));
    } catch (l) {
      throw (pt(o), l);
    }
  else e !== null && Zr(o);
  var i = o;
  if (
    (a &&
      i.deps === null &&
      i.teardown === null &&
      i.nodes === null &&
      i.first === i.last &&
      (i.f & ma) === 0 &&
      ((i = i.first),
      (r & or) !== 0 && (r & Lr) !== 0 && i !== null && (i.f |= Lr)),
    i !== null &&
      ((i.parent = n),
      n !== null && Kl(i, n),
      Ue !== null && (Ue.f & bt) !== 0 && (r & Yr) === 0))
  ) {
    var s = Ue;
    (s.effects ??= []).push(i);
  }
  return o;
}
function Wa() {
  return Ue !== null && !ar;
}
function en(r) {
  const e = ir(Eo, null, !1);
  return (wt(e, xt), (e.teardown = r), e);
}
function We(r) {
  (Hl("$effect"), we && Tr(r, "name", { value: "$effect" }));
  var e = Ve.f,
    a = !Ue && (e & _r) !== 0 && (e & Cn) === 0;
  if (a) {
    var n = et;
    (n.e ??= []).push(r);
  } else return Xi(r);
}
function Xi(r) {
  return ir(Po | Os, r, !1);
}
function Gl(r) {
  tr.ensure();
  const e = ir(Yr | ma, r, !0);
  return (a = {}) =>
    new Promise((n) => {
      a.outro
        ? ca(e, () => {
            (pt(e), n(void 0));
          })
        : (pt(e), n(void 0));
    });
}
function zn(r) {
  return ir(Po, r, !1);
}
function Wl(r) {
  return ir(Sn | ma, r, !0);
}
function tn(r, e = 0) {
  return ir(Eo | e, r, !0);
}
function O(r, e = [], a = [], n = []) {
  ji(n, e, a, (o) => {
    ir(Eo, () => r(...o.map(t)), !0);
  });
}
function rn(r, e = 0) {
  var a = ir(or | e, r, !0);
  return (we && (a.dev_stack = va), a);
}
function Yi(r, e = 0) {
  var a = ir(yi | e, r, !0);
  return (we && (a.dev_stack = va), a);
}
function zt(r) {
  return ir(_r | ma, r, !0);
}
function Ji(r) {
  var e = r.teardown;
  if (e !== null) {
    const a = Jr,
      n = Ue;
    (Jo(!0), At(null));
    try {
      e.call(null);
    } finally {
      (Jo(a), At(n));
    }
  }
}
function $i(r, e = !1) {
  var a = r.first;
  for (r.first = r.last = null; a !== null; ) {
    const o = a.ac;
    o !== null &&
      xa(() => {
        o.abort(ua);
      });
    var n = a.next;
    ((a.f & Yr) !== 0 ? (a.parent = null) : pt(a, e), (a = n));
  }
}
function Zl(r) {
  for (var e = r.first; e !== null; ) {
    var a = e.next;
    ((e.f & _r) === 0 && pt(e), (e = a));
  }
}
function pt(r, e = !0) {
  var a = !1;
  ((e || (r.f & ki) !== 0) &&
    r.nodes !== null &&
    r.nodes.end !== null &&
    (Qi(r.nodes.start, r.nodes.end), (a = !0)),
    $i(r, e && !a),
    wn(r, 0),
    wt(r, br));
  var n = r.nodes && r.nodes.t;
  if (n !== null) for (const i of n) i.stop();
  Ji(r);
  var o = r.parent;
  (o !== null && o.first !== null && es(r),
    we && (r.component_function = null),
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
function Qi(r, e) {
  for (; r !== null; ) {
    var a = r === e ? null : Qa(r);
    (r.remove(), (r = a));
  }
}
function es(r) {
  var e = r.parent,
    a = r.prev,
    n = r.next;
  (a !== null && (a.next = n),
    n !== null && (n.prev = a),
    e !== null &&
      (e.first === r && (e.first = n), e.last === r && (e.last = a)));
}
function ca(r, e, a = !0) {
  var n = [];
  (No(r, n, !0),
    ts(n, () => {
      (a && pt(r), e && e());
    }));
}
function ts(r, e) {
  var a = r.length;
  if (a > 0) {
    var n = () => --a || e();
    for (var o of r) o.out(n);
  } else e();
}
function No(r, e, a) {
  if ((r.f & Nt) === 0) {
    r.f ^= Nt;
    var n = r.nodes && r.nodes.t;
    if (n !== null) for (const l of n) (l.is_global || a) && e.push(l);
    for (var o = r.first; o !== null; ) {
      var i = o.next,
        s = (o.f & Lr) !== 0 || ((o.f & _r) !== 0 && (r.f & or) !== 0);
      (No(o, e, s ? a : !1), (o = i));
    }
  }
}
function Io(r) {
  rs(r, !0);
}
function rs(r, e) {
  if ((r.f & Nt) !== 0) {
    ((r.f ^= Nt), (r.f & xt) === 0 && (wt(r, Ft), Zr(r)));
    for (var a = r.first; a !== null; ) {
      var n = a.next,
        o = (a.f & Lr) !== 0 || (a.f & _r) !== 0;
      (rs(a, o ? e : !1), (a = n));
    }
    var i = r.nodes && r.nodes.t;
    if (i !== null) for (const s of i) (s.is_global || e) && s.in();
  }
}
function as(r, e) {
  if (r.nodes)
    for (var a = r.nodes.start, n = r.nodes.end; a !== null; ) {
      var o = a === n ? null : Qa(a);
      (e.append(a), (a = o));
    }
}
let Gr = !1;
function xn(r) {
  Gr = r;
}
let Jr = !1;
function Jo(r) {
  Jr = r;
}
let Ue = null,
  ar = !1;
function At(r) {
  Ue = r;
}
let Ve = null;
function Gt(r) {
  Ve = r;
}
let hr = null;
function ns(r) {
  Ue !== null && (hr === null ? (hr = [r]) : hr.push(r));
}
let Ct = null,
  Mt = 0,
  It = null;
function Xl(r) {
  It = r;
}
let os = 1,
  Za = 0,
  Wr = Za;
function $o(r) {
  Wr = r;
}
function is() {
  return ++os;
}
function an(r) {
  var e = r.f;
  if ((e & Ft) !== 0) return !0;
  if ((e & bt && (r.f &= ~Mr), (e & xr) !== 0)) {
    var a = r.deps;
    if (a !== null)
      for (var n = a.length, o = 0; o < n; o++) {
        var i = a[o];
        if ((an(i) && Vi(i), i.wv > r.wv)) return !0;
      }
    (e & Wt) !== 0 && Bt === null && wt(r, xt);
  }
  return !1;
}
function ss(r, e, a = !0) {
  var n = r.reactions;
  if (n !== null && !hr?.includes(r))
    for (var o = 0; o < n.length; o++) {
      var i = n[o];
      (i.f & bt) !== 0
        ? ss(i, e, !1)
        : e === i && (a ? wt(i, Ft) : (i.f & xt) !== 0 && wt(i, xr), Zr(i));
    }
}
function bo(r) {
  var e = Ct,
    a = Mt,
    n = It,
    o = Ue,
    i = hr,
    s = et,
    l = ar,
    u = Wr,
    f = r.f;
  ((Ct = null),
    (Mt = 0),
    (It = null),
    (Ue = (f & (_r | Yr)) === 0 ? r : null),
    (hr = null),
    fa(r.ctx),
    (ar = !1),
    (Wr = ++Za),
    r.ac !== null &&
      (xa(() => {
        r.ac.abort(ua);
      }),
      (r.ac = null)));
  try {
    r.f |= co;
    var _ = r.fn,
      C = _(),
      b = r.deps;
    if (Ct !== null) {
      var w;
      if ((wn(r, Mt), b !== null && Mt > 0))
        for (b.length = Mt + Ct.length, w = 0; w < Ct.length; w++)
          b[Mt + w] = Ct[w];
      else r.deps = b = Ct;
      if (Wa() && (r.f & Wt) !== 0)
        for (w = Mt; w < b.length; w++) (b[w].reactions ??= []).push(r);
    } else b !== null && Mt < b.length && (wn(r, Mt), (b.length = Mt));
    if (
      _a() &&
      It !== null &&
      !ar &&
      b !== null &&
      (r.f & (bt | xr | Ft)) === 0
    )
      for (w = 0; w < It.length; w++) ss(It[w], r);
    return (
      o !== null &&
        o !== r &&
        (Za++, It !== null && (n === null ? (n = It) : n.push(...It))),
      (r.f & zr) !== 0 && (r.f ^= zr),
      C
    );
  } catch (k) {
    return Ni(k);
  } finally {
    ((r.f ^= co),
      (Ct = e),
      (Mt = a),
      (It = n),
      (Ue = o),
      (hr = i),
      fa(s),
      (ar = l),
      (Wr = u));
  }
}
function Yl(r, e) {
  let a = e.reactions;
  if (a !== null) {
    var n = Ls.call(a, r);
    if (n !== -1) {
      var o = a.length - 1;
      o === 0 ? (a = e.reactions = null) : ((a[n] = a[o]), a.pop());
    }
  }
  a === null &&
    (e.f & bt) !== 0 &&
    (Ct === null || !Ct.includes(e)) &&
    (wt(e, xr),
    (e.f & Wt) !== 0 && ((e.f ^= Wt), (e.f &= ~Mr)),
    go(e),
    wn(e, 0));
}
function wn(r, e) {
  var a = r.deps;
  if (a !== null) for (var n = e; n < a.length; n++) Yl(r, a[n]);
}
function Xa(r) {
  var e = r.f;
  if ((e & br) === 0) {
    wt(r, xt);
    var a = Ve,
      n = Gr;
    if (((Ve = r), (Gr = !0), we)) {
      var o = $a;
      Wo(r.component_function);
      var i = va;
      mn(r.dev_stack ?? va);
    }
    try {
      ((e & (or | yi)) !== 0 ? Zl(r) : $i(r), Ji(r));
      var s = bo(r);
      ((r.teardown = typeof s == "function" ? s : null), (r.wv = os));
      var l;
      we && hl && (r.f & Ft) !== 0 && r.deps;
    } finally {
      ((Gr = n), (Ve = a), we && (Wo(o), mn(i)));
    }
  }
}
async function Jl() {
  (await Promise.resolve(), Sl());
}
function t(r) {
  var e = r.f,
    a = (e & bt) !== 0;
  if (Ue !== null && !ar) {
    var n = Ve !== null && (Ve.f & br) !== 0;
    if (!n && !hr?.includes(r)) {
      var o = Ue.deps;
      if ((Ue.f & co) !== 0)
        r.rv < Za &&
          ((r.rv = Za),
          Ct === null && o !== null && o[Mt] === r
            ? Mt++
            : Ct === null
              ? (Ct = [r])
              : Ct.includes(r) || Ct.push(r));
      else {
        (Ue.deps ??= []).push(r);
        var i = r.reactions;
        i === null ? (r.reactions = [Ue]) : i.includes(Ue) || i.push(Ue);
      }
    }
  }
  if ((we && Ll.delete(r), Jr)) {
    if (Fr.has(r)) return Fr.get(r);
    if (a) {
      var s = r,
        l = s.v;
      return (
        (((s.f & xt) === 0 && s.reactions !== null) || us(s)) && (l = To(s)),
        Fr.set(s, l),
        l
      );
    }
  } else
    a &&
      (!Bt?.has(r) || (Ke?.is_fork && !Wa())) &&
      ((s = r), an(s) && Vi(s), Gr && Wa() && (s.f & Wt) === 0 && ls(s));
  if (Bt?.has(r)) return Bt.get(r);
  if ((r.f & zr) !== 0) throw r.v;
  return r.v;
}
function ls(r) {
  if (r.deps !== null) {
    r.f ^= Wt;
    for (const e of r.deps)
      ((e.reactions ??= []).push(r),
        (e.f & bt) !== 0 && (e.f & Wt) === 0 && ls(e));
  }
}
function us(r) {
  if (r.v === gt) return !0;
  if (r.deps === null) return !1;
  for (const e of r.deps)
    if (Fr.has(e) || ((e.f & bt) !== 0 && us(e))) return !0;
  return !1;
}
function $r(r) {
  var e = ar;
  try {
    return ((ar = !0), r());
  } finally {
    ar = e;
  }
}
const $l = -7169;
function wt(r, e) {
  r.f = (r.f & $l) | e;
}
function Ql(r) {
  return (
    r.endsWith("capture") &&
    r !== "gotpointercapture" &&
    r !== "lostpointercapture"
  );
}
const eu = [
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
function tu(r) {
  return eu.includes(r);
}
const ru = {
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
function au(r) {
  return ((r = r.toLowerCase()), ru[r] ?? r);
}
const nu = ["touchstart", "touchmove"];
function ou(r) {
  return nu.includes(r);
}
const cs = new Set(),
  ho = new Set();
function ds(r, e, a, n = {}) {
  function o(i) {
    if ((n.capture || qa.call(e, i), !i.cancelBubble))
      return xa(() => a?.call(this, i));
  }
  return (
    r.startsWith("pointer") || r.startsWith("touch") || r === "wheel"
      ? nr(() => {
          e.addEventListener(r, o, n);
        })
      : e.addEventListener(r, o, n),
    o
  );
}
function St(r, e, a, n, o) {
  var i = { capture: n, passive: o },
    s = ds(r, e, a, i);
  (e === document.body ||
    e === window ||
    e === document ||
    e instanceof HTMLMediaElement) &&
    en(() => {
      e.removeEventListener(r, s, i);
    });
}
function it(r) {
  for (var e = 0; e < r.length; e++) cs.add(r[e]);
  for (var a of ho) a(r);
}
let Qo = null;
function qa(r) {
  var e = this,
    a = e.ownerDocument,
    n = r.type,
    o = r.composedPath?.() || [],
    i = o[0] || r.target;
  Qo = r;
  var s = 0,
    l = Qo === r && r.__root;
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
    Tr(r, "currentTarget", {
      configurable: !0,
      get() {
        return i || a;
      },
    });
    var _ = Ue,
      C = Ve;
    (At(null), Gt(null));
    try {
      for (var b, w = []; i !== null; ) {
        var k = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var x = i["__" + n];
          x != null && (!i.disabled || r.target === i) && x.call(i, r);
        } catch (g) {
          b ? w.push(g) : (b = g);
        }
        if (r.cancelBubble || k === e || k === null) break;
        i = k;
      }
      if (b) {
        for (let g of w)
          queueMicrotask(() => {
            throw g;
          });
        throw b;
      }
    } finally {
      ((r.__root = e), delete r.currentTarget, At(_), Gt(C));
    }
  }
}
function Oo(r) {
  var e = document.createElement("template");
  return ((e.innerHTML = r.replaceAll("<!>", "<!---->")), e.content);
}
function ha(r, e) {
  var a = Ve;
  a.nodes === null && (a.nodes = { start: r, end: e, a: null, t: null });
}
function V(r, e) {
  var a = (e & cl) !== 0,
    n = (e & dl) !== 0,
    o,
    i = !r.startsWith("<!>");
  return () => {
    o === void 0 && ((o = Oo(i ? r : "<!>" + r)), a || (o = rr(o)));
    var s = n || Mo ? document.importNode(o, !0) : o.cloneNode(!0);
    if (a) {
      var l = rr(s),
        u = s.lastChild;
      ha(l, u);
    } else ha(s, s);
    return s;
  };
}
function iu(r, e, a = "svg") {
  var n = !r.startsWith("<!>"),
    o = `<${a}>${n ? r : "<!>" + r}</${a}>`,
    i;
  return () => {
    if (!i) {
      var s = Oo(o),
        l = rr(s);
      i = rr(l);
    }
    var u = i.cloneNode(!0);
    return (ha(u, u), u);
  };
}
function Rt(r, e) {
  return iu(r, e, "svg");
}
function Re(r = "") {
  {
    var e = mr(r + "");
    return (ha(e, e), e);
  }
}
function Le() {
  var r = document.createDocumentFragment(),
    e = document.createComment(""),
    a = mr();
  return (r.append(e, a), ha(e, a), r);
}
function y(r, e) {
  r !== null && r.before(e);
}
let mo = !0;
function X(r, e) {
  var a = e == null ? "" : typeof e == "object" ? e + "" : e;
  a !== (r.__t ??= r.nodeValue) && ((r.__t = a), (r.nodeValue = a + ""));
}
function su(r, e) {
  return lu(r, e);
}
const ia = new Map();
function lu(
  r,
  { target: e, anchor: a, props: n = {}, events: o, context: i, intro: s = !0 }
) {
  jl();
  var l = new Set(),
    u = (C) => {
      for (var b = 0; b < C.length; b++) {
        var w = C[b];
        if (!l.has(w)) {
          l.add(w);
          var k = ou(w);
          e.addEventListener(w, qa, { passive: k });
          var x = ia.get(w);
          x === void 0
            ? (document.addEventListener(w, qa, { passive: k }), ia.set(w, 1))
            : ia.set(w, x + 1);
        }
      }
    };
  (u(So(cs)), ho.add(u));
  var f = void 0,
    _ = Gl(() => {
      var C = a ?? e.appendChild(mr());
      return (
        Al(C, { pending: () => {} }, (b) => {
          if (i) {
            Oe({});
            var w = et;
            w.c = i;
          }
          (o && (n.$$events = o),
            (mo = s),
            (f = r(b, n) || {}),
            (mo = !0),
            i && Be());
        }),
        () => {
          for (var b of l) {
            e.removeEventListener(b, qa);
            var w = ia.get(b);
            --w === 0
              ? (document.removeEventListener(b, qa), ia.delete(b))
              : ia.set(b, w);
          }
          (ho.delete(u), C !== a && C.parentNode?.removeChild(C));
        }
      );
    });
  return (uu.set(f, _), f);
}
let uu = new WeakMap();
class Bo {
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
      if (n) (Io(n), this.#r.delete(a));
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
            (as(s, f),
              f.append(mr()),
              this.#a.set(i, { effect: s, fragment: f }));
          } else pt(s);
          (this.#r.delete(i), this.#t.delete(i));
        };
        this.#l || !n ? (this.#r.add(i), ca(s, l, !1)) : l();
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
      o = Zi();
    if (a && !this.#t.has(e) && !this.#a.has(e))
      if (o) {
        var i = document.createDocumentFragment(),
          s = mr();
        (i.append(s), this.#a.set(e, { effect: zt(() => a(s)), fragment: i }));
      } else
        this.#t.set(
          e,
          zt(() => a(this.anchor))
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
  var n = new Bo(r),
    o = a ? Lr : 0;
  function i(s, l) {
    n.ensure(s, l);
  }
  rn(() => {
    var s = !1;
    (e((l, u = !0) => {
      ((s = !0), i(u, l));
    }),
      s || i(!1, null));
  }, o);
}
function cu(r, e, a) {
  var n = new Bo(r),
    o = !_a();
  rn(() => {
    var i = e();
    (o && i !== null && typeof i == "object" && (i = {}), n.ensure(i, a));
  });
}
function du(r, e) {
  return e;
}
function fu(r, e, a) {
  for (var n = [], o = e.length, i = 0; i < o; i++) No(e[i].e, n, !0);
  ts(n, () => {
    var s = n.length === 0 && a !== null;
    if (s) {
      var l = a,
        u = l.parentNode;
      (Vl(u), u.append(l), r.items.clear(), Ht(r, e[0].prev, e[o - 1].next));
    }
    for (var f = 0; f < o; f++) {
      var _ = e[f];
      (s || (r.items.delete(_.k), Ht(r, _.prev, _.next)), pt(_.e, !s));
    }
    r.first === e[0] && (r.first = e[0].prev);
  });
}
function at(r, e, a, n, o, i = null) {
  var s = r,
    l = new Map(),
    u = null,
    f = (e & zi) !== 0,
    _ = (e & Pi) !== 0,
    C = (e & Ei) !== 0;
  if (f) {
    var b = r;
    s = b.appendChild(mr());
  }
  var w = null,
    k = Fo(() => {
      var p = a();
      return Co(p) ? p : p == null ? [] : So(p);
    }),
    x,
    g = !0;
  function c() {
    (vu(d, x, s, e, n),
      w !== null &&
        (x.length === 0
          ? (w.fragment
              ? (s.before(w.fragment), (w.fragment = null))
              : Io(w.effect),
            (v.first = w.effect))
          : ca(w.effect, () => {
              w = null;
            })));
  }
  var v = rn(() => {
      x = t(k);
      for (
        var p = x.length, S = new Set(), P = Ke, z = null, L = Zi(), T = 0;
        T < p;
        T += 1
      ) {
        var G = x[T],
          K = n(G, T),
          te = g ? null : l.get(K);
        (te
          ? (_ && ba(te.v, G),
            C && ba(te.i, T),
            L && P.skipped_effects.delete(te.e))
          : ((te = gu(g ? s : null, z, G, K, T, o, e, a)),
            g && ((te.o = !0), z === null ? (u = te) : (z.next = te), (z = te)),
            l.set(K, te)),
          S.add(K));
      }
      if (p === 0 && i && !w)
        if (g) w = { fragment: null, effect: zt(() => i(s)) };
        else {
          var ue = document.createDocumentFragment(),
            be = mr();
          (ue.append(be), (w = { fragment: ue, effect: zt(() => i(be)) }));
        }
      if (!g)
        if (L) {
          for (const [J, ee] of l) S.has(J) || P.skipped_effects.add(ee.e);
          (P.oncommit(c), P.ondiscard(() => {}));
        } else c();
      t(k);
    }),
    d = { effect: v, items: l, first: u };
  g = !1;
}
function vu(r, e, a, n, o) {
  var i = (n & el) !== 0,
    s = e.length,
    l = r.items,
    u = r.first,
    f,
    _ = null,
    C,
    b = [],
    w = [],
    k,
    x,
    g,
    c;
  if (i)
    for (c = 0; c < s; c += 1)
      ((k = e[c]),
        (x = o(k, c)),
        (g = l.get(x)),
        g.o && (g.e.nodes?.a?.measure(), (C ??= new Set()).add(g)));
  for (c = 0; c < s; c += 1) {
    if (((k = e[c]), (x = o(k, c)), (g = l.get(x)), (r.first ??= g), !g.o)) {
      g.o = !0;
      var v = _ ? _.next : u;
      (Ht(r, _, g),
        Ht(r, g, v),
        to(g, v, a),
        (_ = g),
        (b = []),
        (w = []),
        (u = _.next));
      continue;
    }
    if (
      ((g.e.f & Nt) !== 0 &&
        (Io(g.e), i && (g.e.nodes?.a?.unfix(), (C ??= new Set()).delete(g))),
      g !== u)
    ) {
      if (f !== void 0 && f.has(g)) {
        if (b.length < w.length) {
          var d = w[0],
            p;
          _ = d.prev;
          var S = b[0],
            P = b[b.length - 1];
          for (p = 0; p < b.length; p += 1) to(b[p], d, a);
          for (p = 0; p < w.length; p += 1) f.delete(w[p]);
          (Ht(r, S.prev, P.next),
            Ht(r, _, S),
            Ht(r, P, d),
            (u = d),
            (_ = P),
            (c -= 1),
            (b = []),
            (w = []));
        } else
          (f.delete(g),
            to(g, u, a),
            Ht(r, g.prev, g.next),
            Ht(r, g, _ === null ? r.first : _.next),
            Ht(r, _, g),
            (_ = g));
        continue;
      }
      for (b = [], w = []; u !== null && u !== g; )
        ((u.e.f & Nt) === 0 && (f ??= new Set()).add(u),
          w.push(u),
          (u = u.next));
      if (u === null) continue;
      g = u;
    }
    (b.push(g), (_ = g), (u = g.next));
  }
  let z = l.size > s;
  if (u !== null || f !== void 0) {
    for (var L = f === void 0 ? [] : So(f); u !== null; )
      ((u.e.f & Nt) === 0 && L.push(u), (u = u.next));
    var T = L.length;
    if (((z = l.size - T > s), T > 0)) {
      var G = (n & zi) !== 0 && s === 0 ? a : null;
      if (i) {
        for (c = 0; c < T; c += 1) L[c].e.nodes?.a?.measure();
        for (c = 0; c < T; c += 1) L[c].e.nodes?.a?.fix();
      }
      fu(r, L, G);
    }
  }
  if (z) for (const K of l.values()) K.o || (Ht(r, _, K), (_ = K));
  ((r.effect.last = _ && _.e),
    i &&
      nr(() => {
        if (C !== void 0) for (g of C) g.e.nodes?.a?.apply();
      }));
}
function gu(r, e, a, n, o, i, s, l) {
  var u = (s & Pi) !== 0,
    f = (s & tl) === 0,
    _ = u ? (f ? qi(a, !1, !1) : Xr(a)) : a,
    C = (s & Ei) === 0 ? o : Xr(o);
  we &&
    u &&
    (_.trace = () => {
      var k = typeof C == "number" ? o : C.v;
      l()[k];
    });
  var b = { i: C, v: _, k: n, e: null, o: !1, prev: e, next: null };
  if (r === null) {
    var w = document.createDocumentFragment();
    w.append((r = mr()));
  }
  return ((b.e = zt(() => i(r, _, C, l))), e !== null && (e.next = b), b);
}
function to(r, e, a) {
  if (r.e.nodes)
    for (
      var n = r.next ? r.next.e.nodes.start : a,
        o = e ? e.e.nodes.start : a,
        i = r.e.nodes.start;
      i !== null && i !== n;
    ) {
      var s = Qa(i);
      (o.before(i), (i = s));
    }
}
function Ht(r, e, a) {
  (e === null
    ? ((r.first = a), (r.effect.first = a && a.e))
    : (e.e.next && (e.e.next.prev = null), (e.next = a), (e.e.next = a && a.e)),
    a !== null &&
      (a.e.prev && (a.e.prev.next = null),
      (a.prev = e),
      (a.e.prev = e && e.e)));
}
function pu(r, e, a = !1, n = !1, o = !1) {
  var i = r,
    s = "";
  O(() => {
    var l = Ve;
    if (
      s !== (s = e() ?? "") &&
      (l.nodes !== null && (Qi(l.nodes.start, l.nodes.end), (l.nodes = null)),
      s !== "")
    ) {
      var u = s + "";
      a ? (u = `<svg>${u}</svg>`) : n && (u = `<math>${u}</math>`);
      var f = Oo(u);
      if (((a || n) && (f = rr(f)), ha(rr(f), f.lastChild), a || n))
        for (; rr(f); ) i.before(rr(f));
      else i.before(f);
    }
  });
}
function Je(r, e, ...a) {
  var n = new Bo(r);
  rn(() => {
    const o = e() ?? null;
    (we && o == null && Gs(), n.ensure(o, o && ((i) => o(i, ...a))));
  }, Lr);
}
const bu = () => performance.now(),
  gr = {
    tick: (r) => requestAnimationFrame(r),
    now: () => bu(),
    tasks: new Set(),
  };
function fs() {
  const r = gr.now();
  (gr.tasks.forEach((e) => {
    e.c(r) || (gr.tasks.delete(e), e.f());
  }),
    gr.tasks.size !== 0 && gr.tick(fs));
}
function hu(r) {
  let e;
  return (
    gr.tasks.size === 0 && gr.tick(fs),
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
function gn(r, e) {
  xa(() => {
    r.dispatchEvent(new CustomEvent(e));
  });
}
function mu(r) {
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
function ei(r) {
  const e = {},
    a = r.split(";");
  for (const n of a) {
    const [o, i] = n.split(":");
    if (!o || i === void 0) break;
    const s = mu(o.trim());
    e[s] = i.trim();
  }
  return e;
}
const _u = (r) => r;
function ti(r, e, a, n) {
  var o = (r & sl) !== 0,
    i = (r & ll) !== 0,
    s = o && i,
    l = (r & ul) !== 0,
    u = s ? "both" : o ? "in" : "out",
    f,
    _ = e.inert,
    C = e.style.overflow,
    b,
    w;
  function k() {
    return xa(() => (f ??= a()(e, n?.() ?? {}, { direction: u })));
  }
  var x = {
      is_global: l,
      in() {
        if (((e.inert = _), !o)) {
          (w?.abort(), w?.reset?.());
          return;
        }
        (i || b?.abort(),
          gn(e, "introstart"),
          (b = _o(e, k(), w, 1, () => {
            (gn(e, "introend"),
              b?.abort(),
              (b = f = void 0),
              (e.style.overflow = C));
          })));
      },
      out(d) {
        if (!i) {
          (d?.(), (f = void 0));
          return;
        }
        ((e.inert = !0),
          gn(e, "outrostart"),
          (w = _o(e, k(), b, 0, () => {
            (gn(e, "outroend"), d?.());
          })));
      },
      stop: () => {
        (b?.abort(), w?.abort());
      },
    },
    g = Ve;
  if (((g.nodes.t ??= []).push(x), o && mo)) {
    var c = l;
    if (!c) {
      for (var v = g.parent; v && (v.f & Lr) !== 0; )
        for (; (v = v.parent) && (v.f & or) === 0; );
      c = !v || (v.f & Cn) !== 0;
    }
    c &&
      zn(() => {
        $r(() => x.in());
      });
  }
}
function _o(r, e, a, n, o) {
  var i = n === 1;
  if (la(e)) {
    var s,
      l = !1;
    return (
      nr(() => {
        if (!l) {
          var g = e({ direction: i ? "in" : "out" });
          s = _o(r, g, a, n, o);
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
    return (o(), { abort: $, deactivate: $, reset: $, t: () => n });
  const { delay: u = 0, css: f, tick: _, easing: C = _u } = e;
  var b = [];
  if (i && a === void 0 && (_ && _(0, 1), f)) {
    var w = ei(f(0, 1));
    b.push(w, w);
  }
  var k = () => 1 - n,
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
            var z = g + c * C(P / S),
              L = ei(f(z, 1 - z));
            (d.push(L), (p ||= L.overflow === "hidden"));
          }
        (p && (r.style.overflow = "hidden"),
          (k = () => {
            var T = x.currentTime;
            return g + c * C(T / v);
          }),
          _ &&
            hu(() => {
              if (x.playState !== "running") return !1;
              var T = k();
              return (_(T, 1 - T), !0);
            }));
      }
      ((x = r.animate(d, { duration: v, fill: "forwards" })),
        (x.onfinish = () => {
          ((k = () => n), _?.(n, 1 - n), o());
        }));
    }),
    {
      abort: () => {
        x && (x.cancel(), (x.effect = null), (x.onfinish = $));
      },
      deactivate: () => {
        o = $;
      },
      reset: () => {
        n === 0 && _?.(1, 0);
      },
      t: () => k(),
    }
  );
}
function xu(r, e) {
  var a = void 0,
    n;
  Yi(() => {
    a !== (a = e()) &&
      (n && (pt(n), (n = null)),
      a &&
        (n = zt(() => {
          zn(() => a(r));
        })));
  });
}
function vs(r) {
  var e,
    a,
    n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var o = r.length;
      for (e = 0; e < o; e++)
        r[e] && (a = vs(r[e])) && (n && (n += " "), (n += a));
    } else for (a in r) r[a] && (n && (n += " "), (n += a));
  return n;
}
function wu() {
  for (var r, e, a = 0, n = "", o = arguments.length; a < o; a++)
    (r = arguments[a]) && (e = vs(r)) && (n && (n += " "), (n += e));
  return n;
}
function Y(r) {
  return typeof r == "object" ? wu(r) : (r ?? "");
}
const ri = [
  ...` 	
\r\f \v\uFEFF`,
];
function yu(r, e, a) {
  var n = r == null ? "" : "" + r;
  if ((e && (n = n ? n + " " + e : e), a)) {
    for (var o in a)
      if (a[o]) n = n ? n + " " + o : o;
      else if (n.length)
        for (var i = o.length, s = 0; (s = n.indexOf(o, s)) >= 0; ) {
          var l = s + i;
          (s === 0 || ri.includes(n[s - 1])) &&
          (l === n.length || ri.includes(n[l]))
            ? (n = (s === 0 ? "" : n.substring(0, s)) + n.substring(l + 1))
            : (s = l);
        }
  }
  return n === "" ? null : n;
}
function ai(r, e = !1) {
  var a = e ? " !important;" : ";",
    n = "";
  for (var o in r) {
    var i = r[o];
    i != null && i !== "" && (n += " " + o + ": " + i + a);
  }
  return n;
}
function ro(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function ku(r, e) {
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
      (n && u.push(...Object.keys(n).map(ro)),
        o && u.push(...Object.keys(o).map(ro)));
      var f = 0,
        _ = -1;
      const x = r.length;
      for (var C = 0; C < x; C++) {
        var b = r[C];
        if (
          (l
            ? b === "/" && r[C - 1] === "*" && (l = !1)
            : i
              ? i === b && (i = !1)
              : b === "/" && r[C + 1] === "*"
                ? (l = !0)
                : b === '"' || b === "'"
                  ? (i = b)
                  : b === "("
                    ? s++
                    : b === ")" && s--,
          !l && i === !1 && s === 0)
        ) {
          if (b === ":" && _ === -1) _ = C;
          else if (b === ";" || C === x - 1) {
            if (_ !== -1) {
              var w = ro(r.substring(f, _).trim());
              if (!u.includes(w)) {
                b !== ";" && C++;
                var k = r.substring(f, C).trim();
                a += " " + k + ";";
              }
            }
            ((f = C + 1), (_ = -1));
          }
        }
      }
    }
    return (
      n && (a += ai(n)),
      o && (a += ai(o, !0)),
      (a = a.trim()),
      a === "" ? null : a
    );
  }
  return r == null ? null : String(r);
}
function q(r, e, a, n, o, i) {
  var s = r.__className;
  if (s !== a || s === void 0) {
    var l = yu(a, n, i);
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
function ao(r, e = {}, a, n) {
  for (var o in a) {
    var i = a[o];
    e[o] !== i &&
      (a[o] == null ? r.style.removeProperty(o) : r.style.setProperty(o, i, n));
  }
}
function ut(r, e, a, n) {
  var o = r.__style;
  if (o !== e) {
    var i = ku(e, n);
    (i == null ? r.removeAttribute("style") : (r.style.cssText = i),
      (r.__style = e));
  } else
    n &&
      (Array.isArray(n)
        ? (ao(r, a?.[0], n[0]), ao(r, a?.[1], n[1], "important"))
        : ao(r, a, n));
  return n;
}
function xo(r, e, a = !1) {
  if (r.multiple) {
    if (e == null) return;
    if (!Co(e)) return pl();
    for (var n of r.options) n.selected = e.includes(ni(n));
    return;
  }
  for (n of r.options) {
    var o = ni(n);
    if (Ki(o, e)) {
      n.selected = !0;
      return;
    }
  }
  (!a || e !== void 0) && (r.selectedIndex = -1);
}
function Cu(r) {
  var e = new MutationObserver(() => {
    xo(r, r.__value);
  });
  (e.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"],
  }),
    en(() => {
      e.disconnect();
    }));
}
function ni(r) {
  return "__value" in r ? r.__value : r.value;
}
const ja = Symbol("class"),
  Va = Symbol("style"),
  gs = Symbol("is custom element"),
  ps = Symbol("is html");
function bs(r, e) {
  var a = Ro(r);
  a.value === (a.value = e ?? void 0) ||
    (r.value === e && (e !== 0 || r.nodeName !== "PROGRESS")) ||
    (r.value = e ?? "");
}
function Su(r, e) {
  e
    ? r.hasAttribute("selected") || r.setAttribute("selected", "")
    : r.removeAttribute("selected");
}
function me(r, e, a, n) {
  var o = Ro(r);
  o[e] !== (o[e] = a) &&
    (e === "loading" && (r[Bs] = a),
    a == null
      ? r.removeAttribute(e)
      : typeof a != "string" && hs(r).includes(e)
        ? (r[e] = a)
        : r.setAttribute(e, a));
}
function Pu(r, e, a, n, o = !1, i = !1) {
  var s = Ro(r),
    l = s[gs],
    u = !s[ps],
    f = e || {},
    _ = r.tagName === "OPTION";
  for (var C in e) C in a || (a[C] = null);
  (a.class ? (a.class = Y(a.class)) : (n || a[ja]) && (a.class = null),
    a[Va] && (a.style ??= null));
  var b = hs(r);
  for (const p in a) {
    let S = a[p];
    if (_ && p === "value" && S == null) {
      ((r.value = r.__value = ""), (f[p] = S));
      continue;
    }
    if (p === "class") {
      var w = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      (q(r, w, S, n, e?.[ja], a[ja]), (f[p] = S), (f[ja] = a[ja]));
      continue;
    }
    if (p === "style") {
      (ut(r, S, e?.[Va], a[Va]), (f[p] = S), (f[Va] = a[Va]));
      continue;
    }
    var k = f[p];
    if (!(S === k && !(S === void 0 && r.hasAttribute(p)))) {
      f[p] = S;
      var x = p[0] + p[1];
      if (x !== "$$")
        if (x === "on") {
          const P = {},
            z = "$$" + p;
          let L = p.slice(2);
          var g = tu(L);
          if ((Ql(L) && ((L = L.slice(0, -7)), (P.capture = !0)), !g && k)) {
            if (S != null) continue;
            (r.removeEventListener(L, f[z], P), (f[z] = null));
          }
          if (S != null)
            if (g) ((r[`__${L}`] = S), it([L]));
            else {
              let T = function (G) {
                f[p].call(this, G);
              };
              var d = T;
              f[z] = ds(L, r, T, P);
            }
          else g && (r[`__${L}`] = void 0);
        } else if (p === "style") me(r, p, S);
        else if (p === "autofocus") ql(r, !!S);
        else if (!l && (p === "__value" || (p === "value" && S != null)))
          r.value = r.__value = S;
        else if (p === "selected" && _) Su(r, S);
        else {
          var c = p;
          u || (c = au(c));
          var v = c === "defaultValue" || c === "defaultChecked";
          if (S == null && !l && !v)
            if (((s[p] = null), c === "value" || c === "checked")) {
              let P = r;
              const z = e === void 0;
              if (c === "value") {
                let L = P.defaultValue;
                (P.removeAttribute(c),
                  (P.defaultValue = L),
                  (P.value = P.__value = z ? L : null));
              } else {
                let L = P.defaultChecked;
                (P.removeAttribute(c),
                  (P.defaultChecked = L),
                  (P.checked = z ? L : !1));
              }
            } else r.removeAttribute(p);
          else
            v || (b.includes(c) && (l || typeof S != "string"))
              ? ((r[c] = S), c in s && (s[c] = gt))
              : typeof S != "function" && me(r, c, S);
        }
    }
  }
  return f;
}
function ht(r, e, a = [], n = [], o = [], i, s = !1, l = !1) {
  ji(o, a, n, (u) => {
    var f = void 0,
      _ = {},
      C = r.nodeName === "SELECT",
      b = !1;
    if (
      (Yi(() => {
        var k = e(...u.map(t)),
          x = Pu(r, f, k, i, s, l);
        b && C && "value" in k && xo(r, k.value);
        for (let c of Object.getOwnPropertySymbols(_)) k[c] || pt(_[c]);
        for (let c of Object.getOwnPropertySymbols(k)) {
          var g = k[c];
          (c.description === gl &&
            (!f || g !== f[c]) &&
            (_[c] && pt(_[c]), (_[c] = zt(() => xu(r, () => g)))),
            (x[c] = g));
        }
        f = x;
      }),
      C)
    ) {
      var w = r;
      zn(() => {
        (xo(w, f.value, !0), Cu(w));
      });
    }
    b = !0;
  });
}
function Ro(r) {
  return (r.__attributes ??= {
    [gs]: r.nodeName.includes("-"),
    [ps]: r.namespaceURI === vl,
  });
}
var oi = new Map();
function hs(r) {
  var e = r.getAttribute("is") || r.nodeName,
    a = oi.get(e);
  if (a) return a;
  oi.set(e, (a = []));
  for (var n, o = r, i = Element.prototype; i !== o; ) {
    n = Ms(o);
    for (var s in n) n[s].set && a.push(s);
    o = xi(o);
  }
  return a;
}
function Eu(r, e, a = e) {
  var n = new WeakSet();
  (Do(r, "input", async (o) => {
    we && r.type === "checkbox" && Go();
    var i = o ? r.defaultValue : r.value;
    if (
      ((i = oo(r) ? io(i) : i),
      a(i),
      Ke !== null && n.add(Ke),
      await Jl(),
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
    $r(e) == null &&
      r.value &&
      (a(oo(r) ? io(r.value) : r.value), Ke !== null && n.add(Ke)),
    tn(() => {
      we && r.type === "checkbox" && Go();
      var o = e();
      if (r === document.activeElement) {
        var i = bn ?? Ke;
        if (n.has(i)) return;
      }
      (oo(r) && o === io(r.value)) ||
        (r.type === "date" && !o && !r.value) ||
        (o !== r.value && (r.value = o ?? ""));
    }));
}
const no = new Set();
function zu(r, e, a, n, o = n) {
  var i = a.getAttribute("type") === "checkbox",
    s = r;
  if (e !== null) for (var l of e) s = s[l] ??= [];
  (s.push(a),
    Do(
      a,
      "change",
      () => {
        var u = a.__value;
        (i && (u = Fu(s, u, a.checked)), o(u));
      },
      () => o(i ? [] : null)
    ),
    tn(() => {
      var u = n();
      i
        ? ((u = u || []), (a.checked = u.includes(a.__value)))
        : (a.checked = Ki(a.__value, u));
    }),
    en(() => {
      var u = s.indexOf(a);
      u !== -1 && s.splice(u, 1);
    }),
    no.has(s) ||
      (no.add(s),
      nr(() => {
        (s.sort((u, f) => (u.compareDocumentPosition(f) === 4 ? -1 : 1)),
          no.delete(s));
      })),
    nr(() => {}));
}
function Au(r, e, a = e) {
  (Do(r, "change", (n) => {
    var o = n ? r.defaultChecked : r.checked;
    a(o);
  }),
    $r(e) == null && a(r.checked),
    tn(() => {
      var n = e();
      r.checked = !!n;
    }));
}
function Fu(r, e, a) {
  for (var n = new Set(), o = 0; o < r.length; o += 1)
    r[o].checked && n.add(r[o].__value);
  return (a || n.delete(e), Array.from(n));
}
function oo(r) {
  var e = r.type;
  return e === "number" || e === "range";
}
function io(r) {
  return r === "" ? null : +r;
}
function ii(r, e) {
  return r === e || r?.[Ar] === e;
}
function ot(r = {}, e, a, n) {
  return (
    zn(() => {
      var o, i;
      return (
        tn(() => {
          ((o = i),
            (i = n?.() || []),
            $r(() => {
              r !== a(...i) &&
                (e(r, ...i), o && ii(a(...o), r) && e(null, ...o));
            }));
        }),
        () => {
          nr(() => {
            i && ii(a(...i), r) && e(null, ...i);
          });
        }
      );
    }),
    r
  );
}
function ms(r, e, a) {
  if (r == null) return (e(void 0), $);
  const n = $r(() => r.subscribe(e, a));
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const sa = [];
function Tu(r, e = $) {
  let a = null;
  const n = new Set();
  function o(l) {
    if (Fi(r, l) && ((r = l), a)) {
      const u = !sa.length;
      for (const f of n) (f[1](), sa.push(f, r));
      if (u) {
        for (let f = 0; f < sa.length; f += 2) sa[f][0](sa[f + 1]);
        sa.length = 0;
      }
    }
  }
  function i(l) {
    o(l(r));
  }
  function s(l, u = $) {
    const f = [l, u];
    return (
      n.add(f),
      n.size === 1 && (a = e(o, i) || $),
      l(r),
      () => {
        (n.delete(f), n.size === 0 && a && (a(), (a = null)));
      }
    );
  }
  return { set: o, update: i, subscribe: s };
}
function Lu(r) {
  let e;
  return (ms(r, (a) => (e = a))(), e);
}
let pn = !1,
  wo = Symbol();
function Mu(r, e, a) {
  const n = (a[e] ??= { store: null, source: qi(void 0), unsubscribe: $ });
  if ((we && (n.source.label = e), n.store !== r && !(wo in a)))
    if ((n.unsubscribe(), (n.store = r ?? null), r == null))
      ((n.source.v = void 0), (n.unsubscribe = $));
    else {
      var o = !0;
      ((n.unsubscribe = ms(r, (i) => {
        o ? (n.source.v = i) : A(n.source, i);
      })),
        (o = !1));
    }
  return r && wo in a ? Lu(r) : t(n.source);
}
function Du() {
  const r = {};
  function e() {
    en(() => {
      for (var a in r) r[a].unsubscribe();
      Tr(r, wo, { enumerable: !1, value: !0 });
    });
  }
  return [r, e];
}
function Nu(r) {
  var e = pn;
  try {
    return ((pn = !1), [r(), pn]);
  } finally {
    pn = e;
  }
}
const Iu = {
  get(r, e) {
    if (!r.exclude.includes(e)) return r.props[e];
  },
  set(r, e) {
    return (we && Zs(`${r.name}.${String(e)}`), !1);
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
function yt(r, e, a) {
  return new Proxy(
    we
      ? { props: r, exclude: e, name: a, other: {}, to_proxy: [] }
      : { props: r, exclude: e },
    Iu
  );
}
const Ou = {
  get(r, e) {
    let a = r.props.length;
    for (; a--; ) {
      let n = r.props[a];
      if ((la(n) && (n = n()), typeof n == "object" && n !== null && e in n))
        return n[e];
    }
  },
  set(r, e, a) {
    let n = r.props.length;
    for (; n--; ) {
      let o = r.props[n];
      la(o) && (o = o());
      const i = pr(o, e);
      if (i && i.set) return (i.set(a), !0);
    }
    return !1;
  },
  getOwnPropertyDescriptor(r, e) {
    let a = r.props.length;
    for (; a--; ) {
      let n = r.props[a];
      if ((la(n) && (n = n()), typeof n == "object" && n !== null && e in n)) {
        const o = pr(n, e);
        return (o && !o.configurable && (o.configurable = !0), o);
      }
    }
  },
  has(r, e) {
    if (e === Ar || e === Ci) return !1;
    for (let a of r.props)
      if ((la(a) && (a = a()), a != null && e in a)) return !0;
    return !1;
  },
  ownKeys(r) {
    const e = [];
    for (let a of r.props)
      if ((la(a) && (a = a()), !!a)) {
        for (const n in a) e.includes(n) || e.push(n);
        for (const n of Object.getOwnPropertySymbols(a))
          e.includes(n) || e.push(n);
      }
    return e;
  },
};
function Bu(...r) {
  return new Proxy({ props: r }, Ou);
}
function F(r, e, a, n) {
  var o = !Ja || (a & al) !== 0,
    i = (a & ol) !== 0,
    s = (a & il) !== 0,
    l = n,
    u = !0,
    f = () => (u && ((u = !1), (l = s ? $r(n) : n)), l),
    _;
  if (i) {
    var C = Ar in r || Ci in r;
    _ = pr(r, e)?.set ?? (C && e in r ? (d) => (r[e] = d) : void 0);
  }
  var b,
    w = !1;
  (i ? ([b, w] = Nu(() => r[e])) : (b = r[e]),
    b === void 0 && n !== void 0 && ((b = f()), _ && (o && Ws(e), _(b))));
  var k;
  if (
    (o
      ? (k = () => {
          var d = r[e];
          return d === void 0 ? f() : ((u = !0), d);
        })
      : (k = () => {
          var d = r[e];
          return (d !== void 0 && (l = void 0), d === void 0 ? l : d);
        }),
    o && (a & nl) === 0)
  )
    return k;
  if (_) {
    var x = r.$$legacy;
    return function (d, p) {
      return arguments.length > 0
        ? ((!o || !p || x || w) && _(p ? k() : d), d)
        : k();
    };
  }
  var g = !1,
    c = ((a & rl) !== 0 ? En : Fo)(() => ((g = !1), k()));
  (we && (c.label = e), i && t(c));
  var v = Ve;
  return function (d, p) {
    if (arguments.length > 0) {
      const S = p ? t(c) : o && i ? Ye(d) : d;
      return (A(c, S), (g = !0), l !== void 0 && (l = S), d);
    }
    return (Jr && g) || (v.f & br) !== 0 ? c.v : t(c);
  };
}
if (we) {
  let r = function (e) {
    if (!(e in globalThis)) {
      let a;
      Object.defineProperty(globalThis, e, {
        configurable: !0,
        get: () => {
          if (a !== void 0) return a;
          Xs(e);
        },
        set: (n) => {
          a = n;
        },
      });
    }
  };
  var kv = r;
  (r("$state"),
    r("$effect"),
    r("$derived"),
    r("$inspect"),
    r("$props"),
    r("$bindable"));
}
const Ru = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set()).add(Ru);
const De = {
    xs: "[font-size:var(--text-xs)]",
    sm: "[font-size:var(--text-sm)]",
    md: "[font-size:var(--text-md)]",
    lg: "[font-size:var(--text-lg)]",
    xl: "[font-size:var(--text-xl)]",
  },
  nn = (r = "") => {
    const e = Date.now().toString(36),
      a = Math.random().toString(36).slice(2);
    return `${r}${e}_${a}`;
  };
function H(...r) {
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
function da(r, e, a) {
  return Math.min(a, Math.max(e, r));
}
function yo(r, e) {
  return Array.from({ length: r }, (a, n) => e(n));
}
function ju(r, e) {
  let a;
  return (...n) => {
    (clearTimeout(a), (a = setTimeout(() => r(...n), e)));
  };
}
function Vu(r, e) {
  let a;
  return (...n) => {
    a || (r(...n), (a = !0), setTimeout(() => (a = !1), e));
  };
}
const qu = typeof window < "u" && !!window.localStorage,
  so = () => (qu ? window.localStorage : null),
  si = {
    get: (r, e) => {
      const a = so();
      if (!a) return e;
      try {
        const n = a.getItem(r);
        return n ? JSON.parse(n) : e;
      } catch {
        return e;
      }
    },
    set: (r, e) => {
      const a = so();
      if (a)
        try {
          a.setItem(r, JSON.stringify(e));
        } catch (n) {
          console.warn("Storage set failed:", n);
        }
    },
    remove: (r) => {
      const e = so();
      if (e)
        try {
          e.removeItem(r);
        } catch (a) {
          console.warn("Storage remove failed:", a);
        }
    },
  },
  li = {
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
  Uu = (r, e) => ({ ...li[r], message: e || li[r].message });
function Hu(r) {
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
const Ku = (r, e = "en-US", a) => {
    const n = Hu(r);
    if (!n) return "";
    const o = a ?? { year: "numeric", month: "short", day: "numeric" };
    try {
      return new Intl.DateTimeFormat(e, o).format(n);
    } catch {
      return n.toLocaleDateString();
    }
  },
  _s = (r) => {
    r.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )?.focus();
  },
  xs = (r) => {
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
var Gu = V(
    '<section><h3><button type="button" class="flex w-full items-center justify-between gap-3 p-2 text-left font-medium text-[var(--color-text-default)] bg-transparent transition-colors hover:bg-[var(--color-bg-hover)] active:bg-[var(--color-bg-active)] focus:outline-none focus:ring-2 focus:ring-[var(--border-color-focus)] focus:ring-inset"><span> </span> <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.135l3.71-3.904a.75.75 0 111.08 1.04l-4.24 4.46a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button></h3> <div><div class="min-h-0"><div> </div></div></div></section>'
  ),
  Wu = V("<div></div>");
function Zu(r, e) {
  Oe(e, !0);
  let a = F(e, "items", 19, () => []),
    n = F(e, "multiple", 3, !1),
    o = F(e, "defaultOpen", 19, () => []),
    i = F(e, "sz", 3, "md"),
    s = F(e, "class", 3, "");
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
    C = h(() => H(l, u[i()], s())),
    b = h(() => _[i()]),
    w = h(() => H(f[i()], De[i()]));
  let k = h(o);
  const x = (v) => t(k).includes(v),
    g = (v) => {
      const d = x(v);
      (A(
        k,
        n() ? (d ? t(k).filter((p) => p !== v) : [...t(k), v]) : d ? [] : [v]
      ),
        e.onToggle?.(v, !d));
    };
  var c = Wu();
  (at(
    c,
    23,
    a,
    (v, d) => v.id ?? d,
    (v, d, p) => {
      var S = Gu();
      let P;
      var z = m(S),
        L = m(z);
      L.__click = () => g(t(p));
      var T = m(L),
        G = m(T),
        K = D(T, 2);
      let te;
      var ue = D(z, 2);
      let be;
      var J = m(ue),
        ee = m(J),
        le = m(ee);
      (O(
        (N, B, Q, R, ne) => {
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
            me(L, "aria-expanded", N),
            X(G, t(d).title),
            (te = q(K, 0, B, null, te, Q)),
            (be = q(
              ue,
              1,
              "grid overflow-hidden transition-[grid-template-rows] duration-200",
              null,
              be,
              R
            )),
            q(ee, 1, ne),
            X(le, t(d).content));
        },
        [
          () => x(t(p)),
          () =>
            Y(
              H(
                "shrink-0 transition-transform duration-200 text-[var(--color-text-muted)]",
                t(b)
              )
            ),
          () => ({ "rotate-180": x(t(p)) }),
          () => ({ "grid-rows-[1fr]": x(t(p)), "grid-rows-[0fr]": !x(t(p)) }),
          () => Y(H("leading-relaxed text-[var(--color-text-default)]", t(w))),
        ]
      ),
        y(v, S));
    }
  ),
    O(() => q(c, 1, Y(t(C)))),
    y(r, c),
    Be());
}
it(["click"]);
var Xu = V('<span aria-hidden="true"></span>'),
  Yu = V("<button><span><!></span> <!></button>");
function Qe(r, e) {
  Oe(e, !0);
  let a = F(e, "sz", 3, "md"),
    n = F(e, "variant", 3, "primary"),
    o = F(e, "type", 3, "button"),
    i = F(e, "loaded", 3, !1),
    s = F(e, "class", 3, ""),
    l = yt(e, [
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
    C = h(() => H(u, f[a()], De[a()], _[n()], s())),
    b = h(() => (i() ? "loading" : e.disabled ? "disabled" : "idle"));
  function w(p) {
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
          k()));
  }
  function k() {
    if (!e.link || typeof window > "u") return;
    const p = l;
    (typeof p.target == "string" ? p.target : void 0) === "_blank"
      ? window.open(e.link, "_blank", "noopener,noreferrer")
      : window.location.assign(e.link);
  }
  var x = Yu();
  ht(x, () => ({
    type: o(),
    disabled: e.disabled,
    "data-state": t(b),
    "aria-disabled": e.disabled || i() || void 0,
    "aria-busy": i() || void 0,
    onclick: w,
    class: t(C),
    ...l,
  }));
  var g = m(x),
    c = m(g);
  Je(c, () => e.children ?? $);
  var v = D(g, 2);
  {
    var d = (p) => {
      var S = Xu();
      (O(
        (P) => q(S, 1, P),
        [
          () =>
            Y(
              H(
                "absolute inset-0 m-auto w-[1em] h-[1em] border-2 [border-color:var(--color-spinner,currentColor)] border-r-transparent rounded-full motion-safe:[animation:spin_0.6s_linear_infinite]"
              )
            ),
        ]
      ),
        y(p, S));
    };
    W(v, (p) => {
      i() && p(d);
    });
  }
  (O((p) => q(g, 1, p), [() => Y(H({ "opacity-0 pointer-events-none": i() }))]),
    y(r, x),
    Be());
}
var Ju = V("<div><!></div>"),
  $u = V("<div><!></div>"),
  Qu = V("<div><!> <div><!></div> <!></div>");
function on(r, e) {
  Oe(e, !0);
  let a = F(e, "class", 3, ""),
    n = F(e, "sz", 3, "md"),
    o = F(e, "flushHeader", 3, !1),
    i = F(e, "flushFooter", 3, !1);
  const s = {
      xs: "px-3 py-2",
      sm: "px-4 py-2",
      md: "px-5 py-3",
      lg: "px-6 py-4",
      xl: "px-7 py-5",
    },
    l = h(() =>
      H(
        "bg-[var(--color-bg-surface)] border border-[var(--border-color-default)] rounded-xl shadow-sm overflow-hidden",
        De[n()],
        "flex flex-col",
        a()
      )
    ),
    u = h(() =>
      o() ? "" : H("border-b border-[var(--border-color-default)]", s[n()])
    ),
    f = h(() => H(s[n()], "flex-1 min-h-0")),
    _ = h(() =>
      i() ? "" : H("border-t border-[var(--border-color-default)]", s[n()])
    );
  var C = Qu(),
    b = m(C);
  {
    var w = (v) => {
      var d = Ju(),
        p = m(d);
      (Je(p, () => e.header ?? $), O(() => q(d, 1, Y(t(u)))), y(v, d));
    };
    W(b, (v) => {
      e.header && v(w);
    });
  }
  var k = D(b, 2),
    x = m(k);
  Je(x, () => e.children ?? $);
  var g = D(k, 2);
  {
    var c = (v) => {
      var d = $u(),
        p = m(d);
      (Je(p, () => e.footer ?? $), O(() => q(d, 1, Y(t(_)))), y(v, d));
    };
    W(g, (v) => {
      e.footer && v(c);
    });
  }
  (O(() => {
    (q(C, 1, Y(t(l))), q(k, 1, Y(t(f))));
  }),
    y(r, C),
    Be());
}
var ec = V("<img/>"),
  tc = V('<h3 class="font-semibold [color:var(--color-text-default)]"> </h3>'),
  rc = V('<p class="[color:var(--color-text-muted)]"> </p>'),
  ac = V("<div><!> <!> <!></div>"),
  nc = V("<div><!></div>"),
  oc = V(
    '<div class="flex items-center justify-center h-full [color:var(--color-text-muted)]">No items to display</div>'
  ),
  ic = V(
    '<button type="button" aria-label="Previous slide"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 12L6 8L10 4"></path></svg></button> <button type="button" aria-label="Next slide"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4L10 8L6 12"></path></svg></button>',
    1
  ),
  sc = V('<button type="button"></button>'),
  lc = V('<div class="flex justify-center gap-2 p-4"></div>'),
  uc = V('<div><div class="relative"><div><!> <!></div> <!></div> <!></div>');
function cc(r, e) {
  Oe(e, !0);
  let a = F(e, "items", 19, () => []),
    n = F(e, "sz", 3, "md"),
    o = F(e, "autoplay", 3, !1),
    i = F(e, "interval", 3, 5e3),
    s = F(e, "showDots", 3, !0),
    l = F(e, "showArrows", 3, !0),
    u = F(e, "class", 3, ""),
    f = yt(e, [
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
    _ = he(0),
    C = he(null);
  const b = h(() => a().length > 0),
    w =
      "relative w-full overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)]",
    k = {
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
    v = h(() => H(w, k[n()], u())),
    d = {
      xs: "min-h-[200px]",
      sm: "min-h-[240px]",
      md: "min-h-[300px]",
      lg: "min-h-[360px]",
      xl: "min-h-[420px]",
    },
    p = h(() => H("relative w-full", d[n()])),
    S = h(() => H("flex flex-col", x[n()])),
    P = {
      xs: "max-h-28",
      sm: "max-h-32",
      md: "max-h-40",
      lg: "max-h-48",
      xl: "max-h-56",
    },
    z = h(() => H("w-full object-cover", P[n()])),
    L = h(() =>
      H(
        g[n()],
        "rounded-full bg-[var(--color-bg-surface)] shadow-lg flex items-center justify-center [color:var(--color-text-default)] hover:bg-[var(--color-bg-hover)] transition-colors"
      )
    ),
    T = h(() => H(c[n()], "rounded-full transition-all duration-200"));
  We(() => {
    t(b)
      ? t(_) >= a().length
        ? A(_, a().length - 1)
        : t(_) < 0 && A(_, 0)
      : A(_, 0);
  });
  const G = () => {
      t(b) && A(_, (t(_) + 1) % a().length);
    },
    K = () => {
      t(b) && A(_, (t(_) - 1 + a().length) % a().length);
    },
    te = (I) => {
      I >= 0 && I < a().length && A(_, I, !0);
    };
  We(
    () => (
      o() && t(b) && a().length > 1 && A(C, setInterval(G, i()), !0),
      () => {
        t(C) && (clearInterval(t(C)), A(C, null));
      }
    )
  );
  let ue = 0,
    be = 0;
  function J(I) {
    ue = I.touches[0].clientX;
  }
  function ee(I) {
    be = I.changedTouches[0].clientX;
    const E = ue - be;
    Math.abs(E) <= 50 || (E > 0 ? G() : K());
  }
  var le = uc();
  ht(le, () => ({
    "aria-label": "Carousel",
    class: t(v),
    ontouchstart: J,
    ontouchend: ee,
    ...f,
  }));
  var N = m(le),
    B = m(N),
    Q = m(B);
  at(
    Q,
    19,
    a,
    (I, E) => I.id ?? E,
    (I, E, oe) => {
      var j = nc();
      const de = (Ae) => {
        var Pe = Le(),
          ze = Ce(Pe);
        {
          var ve = (Se) => {
            var M = ec();
            (O(() => {
              (me(M, "src", t(E).image),
                me(M, "alt", t(E).title || `Slide ${t(oe) + 1}`),
                q(M, 1, Y(t(z))));
            }),
              y(Se, M));
          };
          W(ze, (Se) => {
            t(E).image && Se(ve);
          });
        }
        y(Ae, Pe);
      };
      let fe;
      var ge = m(j);
      (on(ge, {
        get sz() {
          return n();
        },
        get header() {
          return de;
        },
        flushHeader: !0,
        class: "h-auto flex flex-col",
        children: (Ae, Pe) => {
          var ze = ac(),
            ve = m(ze);
          {
            var Se = (xe) => {
              var ye = tc(),
                U = m(ye);
              (O(() => X(U, t(E).title)), y(xe, ye));
            };
            W(ve, (xe) => {
              t(E).title && xe(Se);
            });
          }
          var M = D(ve, 2);
          {
            var ae = (xe) => {
              var ye = rc(),
                U = m(ye);
              (O(() => X(U, t(E).content)), y(xe, ye));
            };
            W(M, (xe) => {
              t(E).content && xe(ae);
            });
          }
          var ie = D(M, 2);
          (Je(ie, () => t(E).children ?? $),
            O(
              (xe) => q(ze, 1, xe),
              [() => Y(H(t(S), "flex-1 overflow-auto min-h-0"))]
            ),
            y(Ae, ze));
        },
        $$slots: { default: !0 },
      }),
        O(
          () =>
            (fe = q(
              j,
              1,
              "transition-opacity duration-300 ease-in-out",
              null,
              fe,
              {
                "opacity-100": t(oe) === t(_),
                "opacity-0": t(oe) !== t(_),
                block: t(oe) === t(_),
                hidden: t(oe) !== t(_),
              }
            ))
        ),
        y(I, j));
    }
  );
  var R = D(Q, 2);
  {
    var ne = (I) => {
      var E = oc();
      y(I, E);
    };
    W(R, (I) => {
      t(b) || I(ne);
    });
  }
  var Z = D(B, 2);
  {
    var re = (I) => {
      var E = ic(),
        oe = Ce(E);
      oe.__click = K;
      var j = D(oe, 2);
      ((j.__click = G),
        O(
          (de, fe) => {
            (q(oe, 1, de), q(j, 1, fe));
          },
          [
            () => Y(H("absolute left-2 top-1/2 -translate-y-1/2", t(L))),
            () => Y(H("absolute right-2 top-1/2 -translate-y-1/2", t(L))),
          ]
        ),
        y(I, E));
    };
    W(Z, (I) => {
      l() && t(b) && a().length > 1 && I(re);
    });
  }
  var se = D(N, 2);
  {
    var _e = (I) => {
      var E = lc();
      (at(
        E,
        23,
        a,
        (oe, j) => oe.id ?? j,
        (oe, j, de) => {
          var fe = sc();
          fe.__click = () => te(t(de));
          let ge;
          (O(() => {
            ((ge = q(fe, 1, Y(t(T)), null, ge, {
              "bg-[var(--color-bg-primary)]": t(de) === t(_),
              "bg-[var(--color-bg-secondary)]": t(de) !== t(_),
              "hover:bg-[var(--color-bg-primary)]": t(de) !== t(_),
            })),
              me(
                fe,
                "aria-label",
                `Go to slide ${t(j).title ?? `#${t(de) + 1}`}`
              ),
              me(fe, "aria-current", t(de) === t(_) ? "true" : void 0));
          }),
            y(oe, fe));
        }
      ),
        y(I, E));
    };
    W(se, (I) => {
      s() && t(b) && a().length > 1 && I(_e);
    });
  }
  (O(() => q(B, 1, Y(t(p)))), y(r, le), Be());
}
it(["click"]);
var dc = Rt(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round"><line x1="4" y1="12" x2="20" y2="12"></line></svg>'
  ),
  fc = Rt(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'
  ),
  vc = V("<span> </span>"),
  gc = V('<label><input/> <span aria-hidden="true"><!></span> <!></label>');
function Ya(r, e) {
  Oe(e, !0);
  let a = F(e, "sz", 3, "md"),
    n = F(e, "variant", 3, "default"),
    o = F(e, "indeterminate", 7, !1),
    i = F(e, "checked", 15, !1),
    s = F(e, "class", 3, ""),
    l = F(e, "invalid", 3, !1),
    u = yt(e, [
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
  const f = h(() => e.id ?? nn("chk-")),
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
    b = h(() =>
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
    w =
      "rounded-[var(--radius-sm)] border border-solid cursor-pointer transition-all duration-[var(--transition-fast)] ease-[var(--timing-default)] flex items-center justify-center",
    k =
      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--border-color-focus)] peer-focus-visible:border-[var(--border-color-focus)]",
    x = h(() => (o() ? "mixed" : i() ? "checked" : "unchecked")),
    g = h(() =>
      n() === "neutral"
        ? t(x) === "checked" || t(x) === "mixed"
          ? "var(--border-color-strong)"
          : "var(--border-color-default)"
        : "white"
    ),
    c = h(() =>
      H("inline-flex items-center cursor-pointer select-none", C[a()], s())
    ),
    v = h(() =>
      H(
        w,
        k,
        _[a()],
        t(x) === "checked" && t(b).checked,
        t(x) === "mixed" && t(b).mixed,
        t(x) === "unchecked" && t(b).unchecked,
        "peer-disabled:opacity-[var(--opacity-disabled)] peer-disabled:cursor-not-allowed"
      )
    ),
    d = h(() =>
      H(
        De[a()],
        "[color:var(--color-text-muted)] font-medium peer-disabled:cursor-not-allowed"
      )
    );
  function p(be) {
    o() && (be.preventDefault(), i(!0), o(!1), e.onChange?.(!0));
  }
  var S = gc(),
    P = m(S),
    z = () => {
      (o() && o(!1), e.onChange?.(i()));
    };
  ht(
    P,
    () => ({
      id: t(f),
      type: "checkbox",
      ...u,
      class: "sr-only peer",
      "aria-checked": o() ? "mixed" : i(),
      "aria-invalid": l() || void 0,
      "aria-describedby": e.describedBy,
      onchange: z,
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0
  );
  var L = D(P, 2);
  L.__click = p;
  var T = m(L);
  {
    var G = (be) => {
        var J = dc();
        (O(() => me(J, "stroke", t(g))), y(be, J));
      },
      K = (be) => {
        var J = Le(),
          ee = Ce(J);
        {
          var le = (N) => {
            var B = fc();
            (O(() => me(B, "stroke", t(g))), y(N, B));
          };
          W(
            ee,
            (N) => {
              i() && N(le);
            },
            !0
          );
        }
        y(be, J);
      };
    W(T, (be) => {
      o() ? be(G) : be(K, !1);
    });
  }
  var te = D(L, 2);
  {
    var ue = (be) => {
      var J = vc(),
        ee = m(J);
      (O(() => {
        (q(J, 1, Y(t(d))), X(ee, e.label));
      }),
        y(be, J));
    };
    W(te, (be) => {
      e.label && be(ue);
    });
  }
  (O(() => {
    (q(S, 1, Y(t(c))),
      me(S, "for", t(f)),
      me(L, "data-state", t(x)),
      q(L, 1, Y(t(v))));
  }),
    Au(P, i),
    y(r, S),
    Be());
}
it(["click"]);
var ui =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  lo = { exports: {} },
  ci;
function pc() {
  return (
    ci ||
      ((ci = 1),
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
                      for (var z in d)
                        d.hasOwnProperty(z) && (S[z] = v(d[z], p));
                      return S;
                    case "Array":
                      return (
                        (P = l.util.objId(d)),
                        p[P]
                          ? p[P]
                          : ((S = []),
                            (p[P] = S),
                            d.forEach(function (L, T) {
                              S[T] = v(L, p);
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
                    z = {};
                  for (var L in P)
                    if (P.hasOwnProperty(L)) {
                      if (L == d)
                        for (var T in p) p.hasOwnProperty(T) && (z[T] = p[T]);
                      p.hasOwnProperty(L) || (z[L] = P[L]);
                    }
                  var G = S[v];
                  return (
                    (S[v] = z),
                    l.languages.DFS(l.languages, function (K, te) {
                      te === G && K != v && (this[K] = z);
                    }),
                    z
                  );
                },
                DFS: function v(d, p, S, P) {
                  P = P || {};
                  var z = l.util.objId;
                  for (var L in d)
                    if (d.hasOwnProperty(L)) {
                      p.call(d, L, d[L], S || L);
                      var T = d[L],
                        G = l.util.type(T);
                      G === "Object" && !P[z(T)]
                        ? ((P[z(T)] = !0), v(T, p, null, P))
                        : G === "Array" &&
                          !P[z(T)] &&
                          ((P[z(T)] = !0), v(T, p, L, P));
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
                for (var P = 0, z; (z = S.elements[P++]); )
                  l.highlightElement(z, d === !0, S.callback);
              },
              highlightElement: function (v, d, p) {
                var S = l.util.getLanguage(v),
                  P = l.languages[S];
                l.util.setLanguage(v, S);
                var z = v.parentElement;
                z &&
                  z.nodeName.toLowerCase() === "pre" &&
                  l.util.setLanguage(z, S);
                var L = v.textContent,
                  T = { element: v, language: S, grammar: P, code: L };
                function G(te) {
                  ((T.highlightedCode = te),
                    l.hooks.run("before-insert", T),
                    (T.element.innerHTML = T.highlightedCode),
                    l.hooks.run("after-highlight", T),
                    l.hooks.run("complete", T),
                    p && p.call(T.element));
                }
                if (
                  (l.hooks.run("before-sanity-check", T),
                  (z = T.element.parentElement),
                  z &&
                    z.nodeName.toLowerCase() === "pre" &&
                    !z.hasAttribute("tabindex") &&
                    z.setAttribute("tabindex", "0"),
                  !T.code)
                ) {
                  (l.hooks.run("complete", T), p && p.call(T.element));
                  return;
                }
                if ((l.hooks.run("before-highlight", T), !T.grammar)) {
                  G(l.util.encode(T.code));
                  return;
                }
                if (d && n.Worker) {
                  var K = new Worker(l.filename);
                  ((K.onmessage = function (te) {
                    G(te.data);
                  }),
                    K.postMessage(
                      JSON.stringify({
                        language: T.language,
                        code: T.code,
                        immediateClose: !0,
                      })
                    ));
                } else G(l.highlight(T.code, T.grammar, T.language));
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
                var P = new C();
                return (b(P, P.head, v), _(v, P, d, P.head, 0), k(P));
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
                d.forEach(function (G) {
                  S += v(G, p);
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
              z = d.alias;
            (z &&
              (Array.isArray(z)
                ? Array.prototype.push.apply(P.classes, z)
                : P.classes.push(z)),
              l.hooks.run("wrap", P));
            var L = "";
            for (var T in P.attributes)
              L +=
                " " +
                T +
                '="' +
                (P.attributes[T] || "").replace(/"/g, "&quot;") +
                '"';
            return (
              "<" +
              P.tag +
              ' class="' +
              P.classes.join(" ") +
              '"' +
              L +
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
              var z = P[1].length;
              ((P.index += z), (P[0] = P[0].slice(z)));
            }
            return P;
          }
          function _(v, d, p, S, P, z) {
            for (var L in p)
              if (!(!p.hasOwnProperty(L) || !p[L])) {
                var T = p[L];
                T = Array.isArray(T) ? T : [T];
                for (var G = 0; G < T.length; ++G) {
                  if (z && z.cause == L + "," + G) return;
                  var K = T[G],
                    te = K.inside,
                    ue = !!K.lookbehind,
                    be = !!K.greedy,
                    J = K.alias;
                  if (be && !K.pattern.global) {
                    var ee = K.pattern.toString().match(/[imsuy]*$/)[0];
                    K.pattern = RegExp(K.pattern.source, ee + "g");
                  }
                  for (
                    var le = K.pattern || K, N = S.next, B = P;
                    N !== d.tail && !(z && B >= z.reach);
                    B += N.value.length, N = N.next
                  ) {
                    var Q = N.value;
                    if (d.length > v.length) return;
                    if (!(Q instanceof u)) {
                      var R = 1,
                        ne;
                      if (be) {
                        if (
                          ((ne = f(le, B, v, ue)), !ne || ne.index >= v.length)
                        )
                          break;
                        var _e = ne.index,
                          Z = ne.index + ne[0].length,
                          re = B;
                        for (re += N.value.length; _e >= re; )
                          ((N = N.next), (re += N.value.length));
                        if (
                          ((re -= N.value.length),
                          (B = re),
                          N.value instanceof u)
                        )
                          continue;
                        for (
                          var se = N;
                          se !== d.tail &&
                          (re < Z || typeof se.value == "string");
                          se = se.next
                        )
                          (R++, (re += se.value.length));
                        (R--, (Q = v.slice(B, re)), (ne.index -= B));
                      } else if (((ne = f(le, 0, Q, ue)), !ne)) continue;
                      var _e = ne.index,
                        I = ne[0],
                        E = Q.slice(0, _e),
                        oe = Q.slice(_e + I.length),
                        j = B + Q.length;
                      z && j > z.reach && (z.reach = j);
                      var de = N.prev;
                      (E && ((de = b(d, de, E)), (B += E.length)), w(d, de, R));
                      var fe = new u(L, te ? l.tokenize(I, te) : I, J, I);
                      if (((N = b(d, de, fe)), oe && b(d, N, oe), R > 1)) {
                        var ge = { cause: L + "," + G, reach: j };
                        (_(v, d, p, N.prev, B, ge),
                          z && ge.reach > z.reach && (z.reach = ge.reach));
                      }
                    }
                  }
                }
              }
          }
          function C() {
            var v = { value: null, prev: null, next: null },
              d = { value: null, prev: v, next: null };
            ((v.next = d), (this.head = v), (this.tail = d), (this.length = 0));
          }
          function b(v, d, p) {
            var S = d.next,
              P = { value: p, prev: d, next: S };
            return ((d.next = P), (S.prev = P), v.length++, P);
          }
          function w(v, d, p) {
            for (var S = d.next, P = 0; P < p && S !== v.tail; P++) S = S.next;
            ((d.next = S), (S.prev = d), (v.length -= P));
          }
          function k(v) {
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
          typeof ui < "u" && (ui.Prism = a),
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
            function w(x) {
              var g = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x || "");
              if (g) {
                var c = Number(g[1]),
                  v = g[2],
                  d = g[3];
                return v ? (d ? [c, Number(d)] : [c, void 0]) : [c, c];
              }
            }
            (a.hooks.add("before-highlightall", function (x) {
              x.selector += ", " + C;
            }),
              a.hooks.add("before-sanity-check", function (x) {
                var g = x.element;
                if (g.matches(C)) {
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
                        var z = w(g.getAttribute("data-range"));
                        if (z) {
                          var L = P.split(/\r\n?|\n/g),
                            T = z[0],
                            G = z[1] == null ? L.length : z[1];
                          (T < 0 && (T += L.length),
                            (T = Math.max(0, Math.min(T - 1, L.length))),
                            G < 0 && (G += L.length),
                            (G = Math.max(0, Math.min(G, L.length))),
                            (P = L.slice(T, G).join(`
`)),
                            g.hasAttribute("data-start") ||
                              g.setAttribute("data-start", String(T + 1)));
                        }
                        ((c.textContent = P), a.highlightElement(c));
                      },
                      function (P) {
                        (g.setAttribute(l, _), (c.textContent = P));
                      }
                    ));
                }
              }),
              (a.plugins.fileHighlight = {
                highlight: function (g) {
                  for (
                    var c = (g || document).querySelectorAll(C), v = 0, d;
                    (d = c[v++]);
                  )
                    a.highlightElement(d);
                },
              }));
            var k = !1;
            a.fileHighlight = function () {
              (k ||
                (console.warn(
                  "Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."
                ),
                (k = !0)),
                a.plugins.fileHighlight.highlight.apply(this, arguments));
            };
          })());
      })(lo)),
    lo.exports
  );
}
var di = pc();
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
var fi = {},
  vi;
function bc() {
  return (
    vi ||
      ((vi = 1),
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
    fi
  );
}
bc();
var hc = V("<button> </button>"),
  mc = V("<div><div> </div> <!></div>"),
  _c = V("<div></div>"),
  xc =
    V(`<div class="select-none px-3 py-[12px] border-r border-[var(--border-color-default)]
               text-[var(--color-text-muted)] text-right overflow-hidden
               bg-[var(--color-bg-surface)] tabular-nums min-h-[180px] max-h-[480px]"></div>`),
  wc = V(
    '<div class="w-full border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-default)]"><!> <div><!> <div class="relative flex-1 min-h-[180px] max-h-[480px]"><div aria-hidden="true"><!></div> <textarea spellcheck="false"></textarea></div></div></div>'
  );
function ws(r, e) {
  Oe(e, !0);
  let a = F(e, "code", 15, ""),
    n = F(e, "language", 3, "txt"),
    o = F(e, "title", 3, "Code"),
    i = F(e, "showCopyButton", 3, !0),
    s = F(e, "showLineNumbers", 3, !1),
    l = F(e, "editable", 3, !1),
    u = F(e, "activeLine", 3, !1),
    f = F(e, "sz", 3, "md"),
    _ = he(null),
    C = he(null),
    b = he(null),
    w = he(!1),
    k = he(0),
    x = he(0),
    g = he(12);
  const c = h(() =>
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
  let d = he(20);
  function p(R) {
    return R.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function S(R, ne) {
    if (R === "") return "";
    if (ne === "txt") return p(R);
    const Z = ne === "html" ? "markup" : ne,
      re = di.languages[Z];
    return di.highlight(R, re, Z);
  }
  const P = h(() => S(a(), n()));
  function z() {
    if (!u() || !t(_)) return;
    const R = t(_).selectionStart ?? 0,
      ne = a().slice(0, R);
    A(
      k,
      ne.split(`
`).length - 1
    );
  }
  function L(R) {
    const ne = R.currentTarget;
    (t(C) && (t(C).scrollTop = ne.scrollTop),
      t(b) &&
        ((t(b).scrollTop = ne.scrollTop),
        (t(b).scrollLeft = ne.scrollLeft),
        A(x, ne.scrollTop, !0)));
  }
  We(() => {
    if ((f(), !t(_))) return;
    const R = getComputedStyle(t(_)),
      ne = Number.parseFloat(R.lineHeight);
    Number.isNaN(ne) || A(d, ne, !0);
    const Z = Number.parseFloat(R.paddingTop);
    Number.isNaN(Z) || A(g, Z, !0);
  });
  async function T() {
    (await navigator.clipboard.writeText(a()),
      A(w, !0),
      setTimeout(() => A(w, !1), 1200));
  }
  var G = wc(),
    K = m(G);
  {
    var te = (R) => {
      var ne = mc(),
        Z = m(ne),
        re = m(Z),
        se = D(Z, 2);
      {
        var _e = (I) => {
          var E = hc();
          E.__click = T;
          let oe;
          var j = m(E);
          (O(() => {
            ((oe = q(
              E,
              1,
              "px-3 py-0.5 text-xs rounded bg-[var(--color-primary)] text-white hover:opacity-[var(--opacity-hover)] transition",
              null,
              oe,
              { "!bg-green-600": t(w) }
            )),
              X(j, t(w) ? "Copied" : "Copy"));
          }),
            y(I, E));
        };
        W(se, (I) => {
          i() && I(_e);
        });
      }
      (O(() => {
        (q(
          ne,
          1,
          `px-3 py-1 bg-[var(--color-bg-muted)] font-semibold uppercase flex items-center justify-between ${De[f()] ?? ""}`,
          "svelte-dvc4kn"
        ),
          X(re, o()));
      }),
        y(R, ne));
    };
    W(K, (R) => {
      o() && R(te);
    });
  }
  var ue = D(K, 2),
    be = m(ue);
  {
    var J = (R) => {
      var ne = xc();
      (at(
        ne,
        21,
        () => t(c),
        du,
        (Z, re, se) => {
          var _e = _c();
          ((_e.textContent = se + 1),
            O(() => q(_e, 1, Y(v[f()]), "svelte-dvc4kn")),
            y(Z, _e));
        }
      ),
        ot(
          ne,
          (Z) => A(C, Z),
          () => t(C)
        ),
        y(R, ne));
    };
    W(be, (R) => {
      s() && R(J);
    });
  }
  var ee = D(be, 2),
    le = m(ee);
  let N;
  var B = m(le);
  (pu(B, () => t(P)),
    ot(
      le,
      (R) => A(b, R),
      () => t(b)
    ));
  var Q = D(le, 2);
  ((Q.__input = function (...R) {
    (l() ? z : void 0)?.apply(this, R);
  }),
    (Q.__keyup = function (...R) {
      (l() ? z : void 0)?.apply(this, R);
    }),
    (Q.__click = function (...R) {
      (l() ? z : void 0)?.apply(this, R);
    }),
    (Q.__mouseup = function (...R) {
      (l() ? z : void 0)?.apply(this, R);
    }),
    ot(
      Q,
      (R) => A(_, R),
      () => t(_)
    ),
    O(() => {
      (q(
        ue,
        1,
        `flex font-mono ${De[f()] ?? ""} ${v[f()] ?? ""}`,
        "svelte-dvc4kn"
      ),
        (N = q(
          le,
          1,
          `cv-highlight cv-layer ${De[f()] ?? ""} ${v[f()] ?? ""}`,
          "svelte-dvc4kn",
          N,
          { "cv-active-line": u() && l() }
        )),
        ut(
          le,
          u() && l()
            ? `--cv-line-height: ${t(d)}px; --cv-active-line-top: ${t(g) + t(k) * t(d) - t(x)}px;`
            : void 0
        ),
        (Q.readOnly = !l()),
        q(
          Q,
          1,
          `cv-input cv-layer ${De[f()] ?? ""} ${v[f()] ?? ""}`,
          "svelte-dvc4kn"
        ));
    }),
    St("scroll", Q, L),
    St("focus", Q, function (...R) {
      (l() ? z : void 0)?.apply(this, R);
    }),
    Eu(Q, a),
    y(r, G),
    Be());
}
it(["click", "input", "keyup", "mouseup"]);
const yc = {
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
  kc = {
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
  Cc = {
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
  sn = { en: yc, ru: kc, es: Cc };
var Sc = V(
  '<div><div class="text-md font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <input type="color" class="invisible absolute w-px h-px" value="#000000"/> <div class="mt-3 p-4 border border-dashed border-[var(--border-color-default)] rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] flex items-center justify-between gap-3" aria-live="polite"><div><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div> <div class="w-12 h-12 rounded-[var(--radius-sm)] border border-[var(--border-color-default)] shadow-inner"></div></div></div>'
);
function Pc(r, e) {
  Oe(e, !0);
  let a = F(e, "value", 15, null),
    n = F(e, "disabled", 3, !1),
    o = F(e, "clearable", 3, !0),
    i = F(e, "class", 3, ""),
    s = yt(e, [
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
  const l = Zt("lang") ?? null,
    u = h(() => l?.value ?? "en"),
    f = h(() => sn[t(u)].components.colorPicker),
    _ = h(() => e.label ?? t(f).text),
    C = h(() => e.placeholder ?? t(f).placeholder);
  let b;
  const w = "inline-block w-full",
    k = h(() => H(w, i())),
    x = h(() => !!a()),
    g = h(() => a() ?? "transparent");
  We(() => {
    b && (b.value = a() || "#000000");
  });
  function c() {
    n() ||
      (typeof b?.showPicker == "function"
        ? b.showPicker()
        : (b?.focus(), b?.click()));
  }
  function v(R) {
    const Z = R.target.value || null;
    (a(Z), e.onChange?.(Z));
  }
  function d() {
    o() && (a(null), b && (b.value = "#000000"), e.onChange?.(null));
  }
  var p = Sc();
  ht(p, () => ({ class: t(k), ...s }));
  var S = m(p),
    P = m(S),
    z = D(S, 2),
    L = m(z);
  Qe(L, {
    onClick: c,
    get disabled() {
      return n();
    },
    sz: "xs",
    children: (R, ne) => {
      var Z = Re();
      (O(() => X(Z, t(f).color)), y(R, Z));
    },
    $$slots: { default: !0 },
  });
  var T = D(L, 2);
  {
    var G = (R) => {
      {
        let ne = h(() => !t(x) || n());
        Qe(R, {
          onClick: d,
          variant: "danger",
          get disabled() {
            return t(ne);
          },
          sz: "xs",
          children: (Z, re) => {
            var se = Re();
            (O(() => X(se, t(f).clear)), y(Z, se));
          },
          $$slots: { default: !0 },
        });
      }
    };
    W(T, (R) => {
      o() && R(G);
    });
  }
  var K = D(z, 2);
  ((K.__change = v),
    ot(
      K,
      (R) => (b = R),
      () => b
    ));
  var te = D(K, 2),
    ue = m(te),
    be = m(ue),
    J = m(be),
    ee = D(be, 2),
    le = m(ee);
  {
    var N = (R) => {
        var ne = Re();
        (O(() => X(ne, a())), y(R, ne));
      },
      B = (R) => {
        var ne = Re();
        (O(() => X(ne, t(C))), y(R, ne));
      };
    W(le, (R) => {
      t(x) ? R(N) : R(B, !1);
    });
  }
  var Q = D(ue, 2);
  (O(() => {
    (X(P, `${t(_) ?? ""}:`),
      (K.disabled = n()),
      X(J, t(f).selectedColor),
      me(Q, "aria-label", t(x) ? `Preview of ${a()}` : "No color selected"),
      ut(Q, `background:${t(g)}`));
  }),
    y(r, p),
    Be());
}
it(["change"]);
var Ec = V(
  '<div><div class="text-md font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <input type="date" class="invisible absolute w-px h-px"/> <div class="mt-3 p-4 bg-[var(--color-bg-surface)] text-center" aria-live="polite"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div></div>'
);
function zc(r, e) {
  Oe(e, !0);
  let a = F(e, "value", 15, null),
    n = F(e, "disabled", 3, !1),
    o = F(e, "clearable", 3, !0),
    i = F(e, "class", 3, ""),
    s = yt(e, [
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
  const l = Zt("lang") ?? null,
    u = h(() => l?.value ?? "en"),
    f = h(() => sn[t(u)].components.datePicker),
    _ = h(() => e.label ?? t(f).text),
    C = h(() => e.placeholder ?? t(f).placeholder);
  let b;
  const w = "inline-block w-full",
    k = h(() => H(w, i())),
    x = h(() => !!a()),
    g = h(() => Ku(a(), e.locale, e.formatOptions));
  We(() => {
    b && (b.value = a() ?? "");
  });
  function c() {
    n() ||
      (typeof b?.showPicker == "function"
        ? b.showPicker()
        : (b?.focus(), b?.click()));
  }
  function v(B) {
    const R = B.target.value || null;
    (a(R), e.onChange?.(R));
  }
  function d() {
    o() && (a(null), b && (b.value = ""), e.onChange?.(null));
  }
  var p = Ec();
  ht(p, () => ({ class: t(k), ...s }));
  var S = m(p),
    P = m(S),
    z = D(S, 2),
    L = m(z);
  Qe(L, {
    onClick: c,
    get disabled() {
      return n();
    },
    sz: "xs",
    children: (B, Q) => {
      var R = Re();
      (O(() => X(R, t(f).date)), y(B, R));
    },
    $$slots: { default: !0 },
  });
  var T = D(L, 2);
  {
    var G = (B) => {
      {
        let Q = h(() => !t(x) || n());
        Qe(B, {
          onClick: d,
          variant: "danger",
          get disabled() {
            return t(Q);
          },
          sz: "xs",
          children: (R, ne) => {
            var Z = Re();
            (O(() => X(Z, t(f).clear)), y(R, Z));
          },
          $$slots: { default: !0 },
        });
      }
    };
    W(T, (B) => {
      o() && B(G);
    });
  }
  var K = D(z, 2);
  ((K.__change = v),
    ot(
      K,
      (B) => (b = B),
      () => b
    ));
  var te = D(K, 2),
    ue = m(te),
    be = m(ue),
    J = D(ue, 2),
    ee = m(J);
  {
    var le = (B) => {
        var Q = Re();
        (O(() => X(Q, t(g))), y(B, Q));
      },
      N = (B) => {
        var Q = Re();
        (O(() => X(Q, t(C))), y(B, Q));
      };
    W(ee, (B) => {
      t(x) ? B(le) : B(N, !1);
    });
  }
  (O(() => {
    (X(P, `${t(_) ?? ""}:`),
      me(K, "min", e.min),
      me(K, "max", e.max),
      (K.disabled = n()),
      X(be, t(f).selectedDate));
  }),
    y(r, p),
    Be());
}
it(["change"]);
var Ac = V("<h3> </h3> <p> </p>", 1),
  Fc = V('<div class="mt-3"><!></div>'),
  Tc = V(
    '<div class="fixed inset-0 z-[var(--z-modal)] bg-oklch(0_0_0/var(--opacity-overlay)) flex items-center justify-center p-4" role="presentation" tabindex="-1"><div role="dialog" aria-modal="true"><div><!> <!></div> <div><!> <!></div></div></div>'
  ),
  Lc = V("<div><!></div>"),
  Mc = V(
    '<div class="fixed top-4 right-4 z-[var(--z-modal)]" role="dialog" aria-modal="false" tabindex="-1"><div><div><!> <!></div> <div><!> <!></div></div></div>'
  );
function ko(r, e) {
  Oe(e, !0);
  const a = (J) => {
    var ee = Ac(),
      le = Ce(ee),
      N = m(le),
      B = D(le, 2),
      Q = m(B);
    (O(
      (R, ne) => {
        (q(le, 1, R), X(N, o()), q(B, 1, ne), X(Q, i()));
      },
      [
        () =>
          Y(
            H(
              "mb-2 font-[var(--font-weight-semibold)] color-[var(--color-text-default)]",
              t(G)
            )
          ),
        () =>
          Y(
            H(
              "leading-[var(--line-height-normal)] color-[var(--color-text-muted)]",
              t(K)
            )
          ),
      ]
    ),
      y(J, ee));
  };
  let n = F(e, "open", 3, !1),
    o = F(e, "title", 3, ""),
    i = F(e, "message", 3, ""),
    s = F(e, "onConfirm", 3, () => {}),
    l = F(e, "onCancel", 3, () => {}),
    u = F(e, "onClose", 3, () => {}),
    f = F(e, "modal", 3, !0),
    _ = F(e, "class", 3, ""),
    C = F(e, "sz", 3, "md");
  const b = Zt("lang") ?? null,
    w = h(() => b?.value ?? "en"),
    k = h(() => sn[t(w)].components.dialog);
  let x = he(null),
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
    P = { xs: De.md, sm: De.md, md: De.xl, lg: De.xl, xl: "text-2xl" },
    z = h(() => H(p, _())),
    L = h(() => S[C()]),
    T = h(() => H(t(L), "pt-0")),
    G = h(() => P[C()]),
    K = h(() => De[C()]);
  We(
    () => (
      g?.(),
      n() && t(x)
        ? queueMicrotask(() => {
            (_s(t(x)), f() && (g = xs(t(x))));
          })
        : (g = null),
      () => {
        (g?.(), (g = null));
      }
    )
  );
  var te = Le(),
    ue = Ce(te);
  {
    var be = (J) => {
      var ee = Le(),
        le = Ce(ee);
      {
        var N = (Q) => {
            var R = Tc();
            R.__keydown = d;
            var ne = m(R),
              Z = m(ne),
              re = m(Z);
            a(re);
            var se = D(re, 2);
            {
              var _e = (j) => {
                var de = Fc(),
                  fe = m(de);
                (Je(fe, () => e.children ?? $, C), y(j, de));
              };
              W(se, (j) => {
                e.children && j(_e);
              });
            }
            var I = D(Z, 2),
              E = m(I);
            Qe(E, {
              get sz() {
                return C();
              },
              variant: "primary",
              onClick: c,
              children: (j, de) => {
                var fe = Re();
                (O(() => X(fe, t(k).ok)), y(j, fe));
              },
              $$slots: { default: !0 },
            });
            var oe = D(E, 2);
            (Qe(oe, {
              get sz() {
                return C();
              },
              variant: "secondary",
              onClick: v,
              children: (j, de) => {
                var fe = Re();
                (O(() => X(fe, t(k).cancel)), y(j, fe));
              },
              $$slots: { default: !0 },
            }),
              ot(
                ne,
                (j) => A(x, j),
                () => t(x)
              ),
              O(
                (j) => {
                  (q(ne, 1, Y(t(z))),
                    me(ne, "aria-label", o()),
                    q(Z, 1, Y(t(L))),
                    q(I, 1, j));
                },
                [() => Y(H("flex gap-2 justify-end", t(T)))]
              ),
              y(Q, R));
          },
          B = (Q) => {
            var R = Mc();
            R.__keydown = d;
            var ne = m(R),
              Z = m(ne),
              re = m(Z);
            a(re);
            var se = D(re, 2);
            {
              var _e = (j) => {
                var de = Lc(),
                  fe = m(de);
                (Je(fe, () => e.children ?? $, C),
                  O((ge) => q(de, 1, ge), [() => Y(H("mt-3", t(K)))]),
                  y(j, de));
              };
              W(se, (j) => {
                e.children && j(_e);
              });
            }
            var I = D(Z, 2),
              E = m(I);
            Qe(E, {
              get sz() {
                return C();
              },
              variant: "primary",
              onClick: c,
              children: (j, de) => {
                var fe = Re();
                (O(() => X(fe, t(k).ok)), y(j, fe));
              },
              $$slots: { default: !0 },
            });
            var oe = D(E, 2);
            (Qe(oe, {
              get sz() {
                return C();
              },
              variant: "secondary",
              onClick: v,
              children: (j, de) => {
                var fe = Re();
                (O(() => X(fe, t(k).cancel)), y(j, fe));
              },
              $$slots: { default: !0 },
            }),
              ot(
                ne,
                (j) => A(x, j),
                () => t(x)
              ),
              O(
                (j) => {
                  (me(R, "aria-label", o()),
                    q(ne, 1, Y(t(z))),
                    q(Z, 1, Y(t(L))),
                    q(I, 1, j));
                },
                [() => Y(H("flex gap-2 justify-end", t(T)))]
              ),
              y(Q, R));
          };
        W(le, (Q) => {
          f() ? Q(N) : Q(B, !1);
        });
      }
      y(J, ee);
    };
    W(ue, (J) => {
      n() && J(be);
    });
  }
  (y(r, te), Be());
}
it(["keydown"]);
var Dc = V("<span> </span>"),
  Nc = V('<div aria-hidden="true"><!></div>'),
  Ic = V("<textarea></textarea>"),
  Oc = V("<input/>"),
  Bc = V('<span aria-hidden="true"><!></span>'),
  Rc = Rt(
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 3L21 21" stroke="currentColor" stroke-width="2"></path><path d="M10.5 10.677a2 2 0 002.823 2.823" stroke="currentColor" stroke-width="2"></path><path d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c2.4 3.6 6 6 9 6 1.4 0 2.8-.5 4.1-1.2" stroke="currentColor" stroke-width="2"></path><path d="M12 6c3 0 6 2.4 9 6-.6.9-1.3 1.7-2 2.5" stroke="currentColor" stroke-width="2"></path></svg>'
  ),
  jc = Rt(
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"></path><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"></circle></svg>'
  ),
  Vc = V('<button type="button"><!></button>'),
  qc = V(
    '<button type="button" tabindex="-1" aria-label="Clear" title="Clear"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>'
  ),
  Uc = V("<label><!> <div><!> <!> <div><!> <!> <!></div></div></label>");
function Ga(r, e) {
  Oe(e, !0);
  let a = F(e, "as", 3, "input"),
    n = F(e, "sz", 3, "md"),
    o = F(e, "variant", 3, "default"),
    i = F(e, "clearable", 3, !0),
    s = F(e, "rows", 3, 3),
    l = F(e, "parseNumber", 3, !1),
    u = F(e, "value", 15, ""),
    f = F(e, "class", 3, ""),
    _ = F(e, "invalid", 3, !1),
    C = yt(e, [
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
    w = {
      xs: "px-2 h-6",
      sm: "px-3 h-7",
      md: "px-4 h-8",
      lg: "px-5 h-9",
      xl: "px-6 h-10",
    },
    k = {
      default:
        "bg-[var(--color-bg-surface)] [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-[var(--border-color-default)]",
      filled:
        "bg-[var(--color-bg-muted)] [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-[var(--border-color-default)]",
      neutral:
        "bg-transparent [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-transparent hover:border-[var(--border-color-default)] focus:border-[var(--border-color-focus)]",
    },
    x = h(() => H("flex flex-col gap-1", f())),
    g = h(() =>
      a() === "textarea"
        ? H(b, k[o()], De.md, "px-4")
        : H(b, w[n()], De[n()], k[o()])
    ),
    c = h(() =>
      H("relative flex items-stretch", a() === "textarea" && "items-start")
    ),
    v = h(() => e.id ?? nn("fld-")),
    d = h(() => (a() === "input" ? e.type || C.type || "text" : void 0)),
    p = h(() => a() === "input" && t(d) === "number"),
    S = h(() => a() === "input" && t(d) === "password");
  let P = he(!1);
  function z(j) {
    if (l() && t(p)) {
      if (j === "" || j === "-" || j === "." || j === "-.") return j;
      const de = Number(j);
      return Number.isNaN(de) ? "" : de;
    }
    return j;
  }
  function L(j) {
    const fe = j.target.value,
      ge = z(fe);
    (u(ge), e.onChange?.(ge));
  }
  function T() {
    const j = l() && t(p) ? 0 : "";
    (u(j), e.onChange?.(j));
  }
  const G = h(() => String(u() ?? "")),
    K = h(() => i() && a() === "input" && t(G).length > 0 && !t(p)),
    te = h(() => !!e.trailing || t(K) || t(S)),
    ue = "[color:var(--color-text-muted)]";
  var be = Uc(),
    J = m(be);
  {
    var ee = (j) => {
      var de = Dc(),
        fe = m(de);
      (O(
        (ge) => {
          (q(de, 1, ge), X(fe, e.label));
        },
        [() => Y(H(De[n()], "font-medium", ue))]
      ),
        y(j, de));
    };
    W(J, (j) => {
      e.label && j(ee);
    });
  }
  var le = D(J, 2),
    N = m(le);
  {
    var B = (j) => {
      const de = h(() => typeof e.leading == "function");
      var fe = Nc(),
        ge = m(fe);
      {
        var Ae = (ze) => {
            var ve = Le(),
              Se = Ce(ve);
            (Je(Se, () => e.leading), y(ze, ve));
          },
          Pe = (ze) => {
            var ve = Re();
            (O(() => X(ve, e.leading)), y(ze, ve));
          };
        W(ge, (ze) => {
          t(de) ? ze(Ae) : ze(Pe, !1);
        });
      }
      (O(
        (ze) => q(fe, 1, ze),
        [
          () =>
            Y(
              H(
                "absolute inset-y-0 left-2 flex items-center [color:var(--color-text-muted)]"
              )
            ),
        ]
      ),
        y(j, fe));
    };
    W(N, (j) => {
      e.leading && j(B);
    });
  }
  var Q = D(N, 2);
  {
    var R = (j) => {
        var de = Ic();
        (ht(
          de,
          (fe) => ({
            ...C,
            id: t(v),
            rows: s(),
            class: fe,
            value: t(G),
            "aria-invalid": _() || void 0,
            "aria-describedby": e.describedBy,
            oninput: L,
          }),
          [() => H(t(g), t(te) && "pr-8", e.leading && "pl-8")]
        ),
          y(j, de));
      },
      ne = (j) => {
        var de = Oc();
        (ht(
          de,
          (fe) => ({
            ...C,
            id: t(v),
            type: t(S) ? (t(P) ? "text" : "password") : t(d),
            inputmode: t(p) ? "decimal" : void 0,
            class: fe,
            value: t(G),
            "aria-invalid": _() || void 0,
            "aria-describedby": e.describedBy,
            oninput: L,
          }),
          [() => H(t(g), t(te) && "pr-8", e.leading && "pl-8")],
          void 0,
          void 0,
          void 0,
          !0
        ),
          y(j, de));
      };
    W(Q, (j) => {
      a() === "textarea" ? j(R) : j(ne, !1);
    });
  }
  var Z = D(Q, 2),
    re = m(Z);
  {
    var se = (j) => {
      const de = h(() => typeof e.trailing == "function");
      var fe = Bc(),
        ge = m(fe);
      {
        var Ae = (ze) => {
            var ve = Le(),
              Se = Ce(ve);
            (Je(Se, () => e.trailing), y(ze, ve));
          },
          Pe = (ze) => {
            var ve = Re();
            (O(() => X(ve, e.trailing)), y(ze, ve));
          };
        W(ge, (ze) => {
          t(de) ? ze(Ae) : ze(Pe, !1);
        });
      }
      y(j, fe);
    };
    W(re, (j) => {
      e.trailing && j(se);
    });
  }
  var _e = D(re, 2);
  {
    var I = (j) => {
      var de = Vc();
      ((de.__mousedown = (Pe) => Pe.preventDefault()),
        (de.__click = () => A(P, !t(P))));
      var fe = m(de);
      {
        var ge = (Pe) => {
            var ze = Rc();
            y(Pe, ze);
          },
          Ae = (Pe) => {
            var ze = jc();
            y(Pe, ze);
          };
        W(fe, (Pe) => {
          t(P) ? Pe(ge) : Pe(Ae, !1);
        });
      }
      (O(
        (Pe) => {
          (q(de, 1, Pe),
            me(de, "aria-label", t(P) ? "Hide password" : "Show password"));
        },
        [
          () =>
            Y(
              H(
                "password-toggle [color:var(--color-text-muted)] hover:opacity-[var(--opacity-hover)]"
              )
            ),
        ]
      ),
        y(j, de));
    };
    W(_e, (j) => {
      t(S) && j(I);
    });
  }
  var E = D(_e, 2);
  {
    var oe = (j) => {
      var de = qc();
      ((de.__mousedown = (fe) => fe.preventDefault()),
        (de.__click = T),
        O(
          (fe) => q(de, 1, fe),
          [
            () =>
              Y(
                H(
                  "[color:var(--color-text-muted)] hover:opacity-[var(--opacity-hover)]"
                )
              ),
          ]
        ),
        y(j, de));
    };
    W(E, (j) => {
      t(K) && j(oe);
    });
  }
  (O(
    (j) => {
      (me(be, "for", t(v)), q(be, 1, Y(t(x))), q(le, 1, Y(t(c))), q(Z, 1, j));
    },
    [() => Y(H("absolute inset-y-0 right-2 flex items-center gap-1"))]
  ),
    y(r, be),
    Be());
}
it(["mousedown", "click"]);
var Hc = V('<p class="text-xs mt-1 [color:var(--color-text-muted)]"> </p>'),
  Kc = V('<p class="text-sm mt-1 [color:var(--color-text-muted)]"> <!></p>'),
  Gc = V(
    '<div><input type="file" class="hidden"/> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <div role="button"><p class="text-sm [color:var(--color-text-muted)]"> </p> <!></div> <div class="mt-3 p-4 bg-[var(--color-bg-surface)] text-center" aria-live="polite"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)] break-words"><!></p> <!></div></div>'
  );
function Wc(r, e) {
  Oe(e, !0);
  let a = F(e, "accept", 3, "*/*"),
    n = F(e, "multiple", 3, !1),
    o = F(e, "disabled", 3, !1),
    i = F(e, "clearable", 3, !0),
    s = F(e, "value", 3, null),
    l = F(e, "class", 3, ""),
    u = yt(e, [
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
  const f = Zt("lang"),
    _ = h(() => sn[f.value].components.filePicker),
    C = h(() => e.label ?? t(_).text),
    b = h(() => e.placeholder ?? t(_).placeholder);
  let w,
    k = h(s),
    x = he(!1);
  const g = "inline-block w-full",
    c = h(() => H(g, l())),
    v = h(() => !!(t(k) && t(k).length > 0)),
    d = h(() =>
      t(k)
        ? Array.from(t(k))
            .map((ge) => ge.name)
            .join(", ")
        : ""
    );
  function p() {
    o() || w?.click();
  }
  function S(ge) {
    const Pe = ge.target.files;
    (A(k, Pe), Pe && Pe.length > 0 && e.onFilesSelected?.(Pe));
  }
  function P(ge) {
    if ((ge.preventDefault(), A(x, !1), o())) return;
    const Ae = ge.dataTransfer?.files;
    (A(k, Ae || null), Ae && Ae.length > 0 && e.onFilesSelected?.(Ae));
  }
  function z(ge) {
    ge.preventDefault();
  }
  function L(ge) {
    (ge.preventDefault(), o() || A(x, !0));
  }
  function T(ge) {
    (ge.preventDefault(), A(x, !1));
  }
  function G(ge) {
    o() ||
      ((ge.key === "Enter" || ge.key === " ") && (ge.preventDefault(), p()));
  }
  function K() {
    i() && (A(k, null), w && (w.value = ""), e.onFilesSelected?.(null));
  }
  var te = Gc();
  ht(te, () => ({ class: t(c), ...u }));
  var ue = m(te);
  ((ue.__change = S),
    ot(
      ue,
      (ge) => (w = ge),
      () => w
    ));
  var be = D(ue, 2),
    J = m(be);
  Qe(J, {
    get disabled() {
      return o();
    },
    onClick: p,
    class: "relative",
    sz: "xs",
    children: (ge, Ae) => {
      var Pe = Re();
      (O(() => X(Pe, t(C))), y(ge, Pe));
    },
    $$slots: { default: !0 },
  });
  var ee = D(J, 2);
  {
    var le = (ge) => {
      {
        let Ae = h(() => !t(v) || o());
        Qe(ge, {
          onClick: K,
          variant: "danger",
          get disabled() {
            return t(Ae);
          },
          sz: "xs",
          children: (Pe, ze) => {
            var ve = Re();
            (O(() => X(ve, t(_).clear)), y(Pe, ve));
          },
          $$slots: { default: !0 },
        });
      }
    };
    W(ee, (ge) => {
      i() && ge(le);
    });
  }
  var N = D(be, 2);
  let B;
  ((N.__click = p), (N.__keydown = G));
  var Q = m(N),
    R = m(Q),
    ne = D(Q, 2);
  {
    var Z = (ge) => {
      var Ae = Hc(),
        Pe = m(Ae);
      (O(() => X(Pe, `${t(_).accepted ?? ""}: ${a() ?? ""}`)), y(ge, Ae));
    };
    W(ne, (ge) => {
      a() !== "*/*" && ge(Z);
    });
  }
  var re = D(N, 2),
    se = m(re),
    _e = m(se),
    I = D(se, 2),
    E = m(I);
  {
    var oe = (ge) => {
        var Ae = Re();
        (O(() => X(Ae, t(d))), y(ge, Ae));
      },
      j = (ge) => {
        var Ae = Re();
        (O(() => X(Ae, t(b))), y(ge, Ae));
      };
    W(E, (ge) => {
      t(v) ? ge(oe) : ge(j, !1);
    });
  }
  var de = D(I, 2);
  {
    var fe = (ge) => {
      var Ae = Kc(),
        Pe = m(Ae),
        ze = D(Pe);
      {
        var ve = (Se) => {
          var M = Re();
          (O(
            (ae) => X(M, `• ${t(_).totalSize ?? ""}: ${ae ?? ""} MB`),
            [
              () =>
                (
                  Array.from(t(k)).reduce((ae, ie) => ae + ie.size, 0) /
                  1024 /
                  1024
                ).toFixed(2),
            ]
          ),
            y(Se, M));
        };
        W(ze, (Se) => {
          n() && t(k).length > 1 && Se(ve);
        });
      }
      (O(
        (Se) => X(Pe, `${Se ?? ""} `),
        [() => t(_).fileCount.replace("{n}", String(t(k).length))]
      ),
        y(ge, Ae));
    };
    W(de, (ge) => {
      t(v) && t(k) && ge(fe);
    });
  }
  (O(() => {
    (me(ue, "accept", a()),
      (ue.multiple = n()),
      (B = q(
        N,
        1,
        "mt-2 p-4 border-2 border-dashed rounded-[var(--radius-md)] text-center transition-colors duration-200",
        null,
        B,
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
      me(N, "tabindex", o() ? -1 : 0),
      me(N, "aria-disabled", o()),
      X(R, t(_).dragDrop),
      X(_e, t(_).selectedFiles));
  }),
    St("drop", N, P),
    St("dragover", N, z),
    St("dragenter", N, L),
    St("dragleave", N, T),
    y(r, te),
    Be());
}
it(["change", "click", "keydown"]);
var Zc = V("<label> </label>"),
  Xc = V('<span class="[color:var(--color-text-muted)]"> </span>'),
  Yc = V(
    '<li role="option"><button type="button" tabindex="0"> </button></li>'
  ),
  Jc = V(
    '<div role="presentation" tabindex="-1" class="fixed inset-0 z-40"></div> <ul role="listbox" tabindex="-1"></ul>',
    1
  ),
  $c = V("<div> </div>"),
  Qc = V(
    '<div><!> <div class="w-full"><button type="button" role="combobox" aria-haspopup="listbox"><span class="min-w-0 grow truncate"><!></span> <span><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span></button></div> <!> <input type="hidden"/> <!></div>'
  );
function Kt(r, e) {
  Oe(e, !0);
  let a = F(e, "options", 19, () => []),
    n = F(e, "sz", 3, "md"),
    o = F(e, "variant", 3, "default"),
    i = F(e, "value", 15, ""),
    s = F(e, "class", 3, ""),
    l = F(e, "invalid", 3, !1),
    u = F(e, "open", 15, !1);
  const f = Zt("BaseField"),
    _ = h(() => e.id ?? f?.id ?? nn("sel-")),
    C = h(() => f?.name ?? t(_)),
    b = h(() => `${t(_)}-listbox`);
  let w = he(null),
    k = he(null),
    x = he(-1),
    g = he(Ye([])),
    c = he("bottom");
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
    z = h(() => H("flex flex-col gap-1", s())),
    L = h(() => H(v, d[n()], De[n()], S[o()], "text-left")),
    T = h(() => e.maxHeight ?? p[n()]),
    G = h(() =>
      H(
        "z-50 border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] rounded-[var(--radius-md)] shadow-lg overflow-auto focus:outline-none"
      )
    ),
    K = h(() =>
      H(
        "w-full text-left px-4 py-2 transition-colors duration-[var(--transition-fast)] cursor-pointer",
        De[n()]
      )
    ),
    te = "opacity-[var(--opacity-disabled)] cursor-not-allowed";
  let ue = he(0),
    be = he(0),
    J = he(0);
  const ee = h(
    () =>
      `position:fixed;top:${t(ue)}px;left:${t(be)}px;min-width:${t(J)}px;max-height:${t(T)}px;`
  );
  (We(() => {
    const U = t(k),
      pe = t(w);
    if (u() && U && pe) {
      const ke = () => {
        const je = U.getBoundingClientRect(),
          Ie = window.innerHeight - je.bottom,
          Ne = je.top,
          nt = Math.min(pe.scrollHeight, t(T)),
          st = Ie < nt && Ne > Ie ? "top" : "bottom";
        (A(c, st, !0),
          (pe.dataset.position = st),
          st === "top"
            ? A(ue, Math.max(0, je.top - nt), !0)
            : A(ue, je.bottom, !0),
          A(be, je.left, !0),
          A(J, je.width, !0));
      };
      queueMicrotask(ke);
      const Fe = (je) => {
          U && pe && !U.contains(je.target) && !pe.contains(je.target) && R();
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
      const U = t(w);
      !u() ||
        !U ||
        queueMicrotask(() => {
          U ? A(g, Array.from(U.querySelectorAll("button")), !0) : A(g, [], !0);
        });
    }));
  function le(U) {
    if (!t(g).length || !a().length) return;
    const pe = a().length;
    let ke = U;
    for (let Fe = 0; Fe < pe; Fe++) {
      const Te = (ke + Fe) % pe;
      if (!a()[Te]?.disabled && t(g)[Te]) {
        (t(g)[Te].focus(), A(x, Te));
        return;
      }
    }
  }
  function N() {
    le(0);
  }
  function B() {
    if (!(!a().length || !t(g).length)) {
      for (let U = a().length - 1; U >= 0; U--)
        if (!a()[U]?.disabled && t(g)[U]) {
          (t(g)[U].focus(), A(x, U, !0));
          return;
        }
    }
  }
  function Q() {
    e.disabled || u(!0);
  }
  function R() {
    (u(!1), A(x, -1));
  }
  function ne() {
    u() ? R() : Q();
  }
  function Z(U) {
    if (!u() || !a().length) return;
    const pe = a().length;
    let ke = t(x);
    for (
      let Fe = 0;
      Fe < pe && ((ke = (ke + U + pe) % pe), !!a()[ke].disabled);
      Fe++
    );
    (A(x, ke, !0), t(g)[ke] && t(g)[ke].focus());
  }
  function re(U) {
    const pe = a()[U];
    !pe || pe.disabled || (i(pe.value), e.onChange?.(pe.value), R());
  }
  function se(U) {
    e.disabled ||
      (U.key === " " || U.key === "Enter"
        ? (U.preventDefault(), ne())
        : U.key === "ArrowDown"
          ? (U.preventDefault(), u() || Q(), Z(1))
          : U.key === "ArrowUp"
            ? (U.preventDefault(), u() || Q(), Z(-1))
            : U.key === "Escape" && u() && (U.preventDefault(), R()));
  }
  function _e(U) {
    if (u()) {
      if (U.key === "Tab") {
        const pe = document.activeElement,
          ke = t(g).findIndex((Te) => Te === pe);
        let Fe = -1;
        for (let Te = a().length - 1; Te >= 0; Te--)
          if (!a()[Te]?.disabled) {
            Fe = Te;
            break;
          }
        U.shiftKey
          ? ke <= 0 && (U.preventDefault(), B())
          : ke === Fe && (U.preventDefault(), N());
        return;
      }
      U.key === "ArrowDown"
        ? (U.preventDefault(), Z(1))
        : U.key === "ArrowUp"
          ? (U.preventDefault(), Z(-1))
          : U.key === "Home"
            ? (U.preventDefault(), N())
            : U.key === "End"
              ? (U.preventDefault(), B())
              : U.key === "Enter" || U.key === " "
                ? (U.preventDefault(), t(x) >= 0 && re(t(x)))
                : U.key === "Escape" && (U.preventDefault(), R());
    }
  }
  function I(U) {
    U.key === "Escape" && (U.preventDefault(), R());
  }
  var E = Qc(),
    oe = m(E);
  {
    var j = (U) => {
      var pe = Zc(),
        ke = m(pe);
      (O(
        (Fe) => {
          (me(pe, "for", `${t(_)}-hidden`), q(pe, 1, Fe), X(ke, e.label));
        },
        [() => Y(H(De[n()], "font-medium [color:var(--color-text-muted)]"))]
      ),
        y(U, pe));
    };
    W(oe, (U) => {
      e.label && U(j);
    });
  }
  var de = D(oe, 2),
    fe = m(de);
  ((fe.__click = () => {
    ne();
  }),
    (fe.__keydown = se));
  var ge = m(fe),
    Ae = m(ge);
  {
    var Pe = (U) => {
        var pe = Re();
        (O(
          (ke) => X(pe, ke),
          [() => a().find((ke) => ke.value === i())?.label]
        ),
          y(U, pe));
      },
      ze = (U) => {
        var pe = Xc(),
          ke = m(pe);
        (O(() => X(ke, e.placeholder)), y(U, pe));
      };
    W(Ae, (U) => {
      i() ? U(Pe) : U(ze, !1);
    });
  }
  var ve = D(ge, 2),
    Se = m(ve);
  ot(
    fe,
    (U) => A(k, U),
    () => t(k)
  );
  var M = D(de, 2);
  {
    var ae = (U) => {
      var pe = Jc(),
        ke = Ce(pe);
      ((ke.__click = R), (ke.__keydown = I));
      var Fe = D(ke, 2);
      ((Fe.__keydown = _e),
        at(
          Fe,
          23,
          a,
          (Te) => Te.value,
          (Te, Ge, je) => {
            var Ie = Yc(),
              Ne = m(Ie);
            Ne.__click = () => re(t(je));
            var nt = m(Ne);
            (O(
              (st, Pt) => {
                (me(Ie, "id", `${t(_)}-opt-${t(je)}`),
                  me(
                    Ie,
                    "aria-selected",
                    !t(Ge).disabled && t(Ge).value === i()
                  ),
                  me(Ie, "aria-disabled", t(Ge).disabled),
                  q(Ie, 1, st),
                  q(Ne, 1, Pt),
                  (Ne.disabled = t(Ge).disabled),
                  X(nt, t(Ge).label));
              },
              [
                () => Y(H(t(K), t(Ge).disabled ? te : "")),
                () =>
                  Y(
                    H(
                      "w-full text-left focus:outline-[3px] focus:outline-offset-3 focus:outline-[var(--border-color-focus)] rounded"
                    )
                  ),
              ]
            ),
              St("focus", Ne, () => A(x, t(je), !0)),
              St("mouseenter", Ne, () => A(x, t(je), !0)),
              y(Te, Ie));
          }
        ),
        ot(
          Fe,
          (Te) => A(w, Te),
          () => t(w)
        ),
        O(() => {
          (me(Fe, "id", t(b)),
            q(Fe, 1, Y(t(G))),
            ut(Fe, t(ee)),
            me(Fe, "data-position", t(c)),
            me(
              Fe,
              "aria-labelledby",
              e.label ? `${t(_)}-hidden-label` : void 0
            ),
            me(
              Fe,
              "aria-activedescendant",
              t(x) >= 0 ? `${t(_)}-opt-${t(x)}` : void 0
            ));
        }),
        y(U, pe));
    };
    W(M, (U) => {
      u() && U(ae);
    });
  }
  var ie = D(M, 2),
    xe = D(ie, 2);
  {
    var ye = (U) => {
      var pe = $c(),
        ke = m(pe);
      (O(
        (Fe) => {
          (me(pe, "id", e.describedBy), q(pe, 1, Fe), X(ke, e.help));
        },
        [() => Y(H("[color:var(--color-text-muted)]", De.sm))]
      ),
        y(U, pe));
    };
    W(xe, (U) => {
      e.help && U(ye);
    });
  }
  (O(
    (U) => {
      (q(E, 1, Y(t(z))),
        me(fe, "id", t(_)),
        q(fe, 1, Y(t(L))),
        me(fe, "aria-expanded", u()),
        me(fe, "aria-controls", t(b)),
        me(fe, "aria-describedby", e.describedBy),
        me(fe, "aria-invalid", l()),
        me(fe, "aria-required", e.required),
        (fe.disabled = e.disabled),
        q(ve, 1, U),
        q(Se, 0, Y(P[n()])),
        me(ie, "id", `${t(_)}-hidden`),
        me(ie, "name", t(C)),
        bs(ie, i() ?? ""));
    },
    [
      () =>
        Y(
          H(
            "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 [color:var(--color-text-default)]"
          )
        ),
    ]
  ),
    y(r, E),
    Be());
}
it(["click", "keydown"]);
const ed = (r) => r;
function gi(r, { delay: e = 0, duration: a = 400, easing: n = ed } = {}) {
  const o = +getComputedStyle(r).opacity;
  return { delay: e, duration: a, easing: n, css: (i) => `opacity: ${i * o}` };
}
var td = Rt(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M8.5 14L11.1 16.6" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M18.2 10L11.6 16.6" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path></svg>'
  ),
  rd = Rt(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M9 9.5L16.7 17.3" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M16.7 9.5L9 17.3" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path></svg>'
  ),
  ad = Rt(
    '<svg fill="none" viewBox="0 0 27 27"><path d="M4.6 25.925H22.5C25.2 25.925 26.8 23.022 25.6 20.6195L16.6 3.80194C15.3 1.29934 11.8 1.29934 10.5 3.80194L1.5 20.6195C0.299997 23.022 1.9 25.925 4.6 25.925Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M13.9 18.0168H13.2C12.5 18.0168 12.6 17.4162 12.6 16.7154L11.9 9.30769C11.9 8.60696 12.5 8.00635 13.2 8.00635H13.9C14.6 8.00635 15.2 8.60696 15.2 9.30769L14.5 16.7154C14.5 17.4162 14.6 18.0168 13.9 18.0168Z" fill="currentColor"></path><path d="M13.5 21.9208C14.4389 21.9208 15.2 21.3382 15.2 20.6195C15.2 19.9008 14.4389 19.3181 13.5 19.3181C12.5611 19.3181 11.8 19.9008 11.8 20.6195C11.8 21.3382 12.5611 21.9208 13.5 21.9208Z" fill="currentColor"></path></svg>'
  ),
  nd = Rt(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path><path d="M13 9.00003C13.718 9.00003 14.3 8.41801 14.3 7.70004C14.3 6.98207 13.718 6.40002 13 6.40002C12.282 6.40002 11.7 6.98207 11.7 7.70004C11.7 8.41801 12.282 9.00003 13 9.00003Z" fill="currentColor"></path><path d="M13 19.7C12.2 19.7 11.6 19.1 11.6 18.4V11.6C11.6 10.9 12.2 10.3 12.9 10.3H13C13.7 10.3 14.3 10.9 14.3 11.6V18.4C14.3 19.1 13.8 19.7 13 19.7Z" fill="currentColor"></path></svg>'
  ),
  od = V('<span class="w-5 h-5 flex-shrink-0" aria-hidden="true"><!></span>'),
  id = V(
    '<div class="font-[var(--font-weight-medium)] truncate [font-size:var(--text-md)] max-sm:[font-size:var(--text-sm)]"> </div>'
  ),
  sd = V(
    '<button class="opacity-70 hover:opacity-100 transition-opacity duration-[var(--transition-fast)] ml-3" aria-label="Close"><svg width="24" height="24" viewBox="0 0 20 20" fill="none"><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button>'
  ),
  ld = V(
    '<div role="status" aria-live="polite"><!> <div class="flex-1 min-w-0"><!> <div class="line-clamp-3 [font-size:var(--text-sm)] max-sm:[font-size:var(--text-xs)]"> </div></div> <!></div>'
  );
function jo(r, e) {
  Oe(e, !0);
  let a = F(e, "variant", 3, "info"),
    n = F(e, "showIcon", 3, !0),
    o = F(e, "closable", 3, !0),
    i = F(e, "timeout", 3, 3e3),
    s = F(e, "onClose", 3, () => {}),
    l = F(e, "class", 3, ""),
    u = he(!0);
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
  function _() {
    (A(u, !1), s()());
  }
  We(() => {
    if (i() > 0) {
      const x = setTimeout(() => _(), i());
      return () => clearTimeout(x);
    }
  });
  const C = h(() =>
    H(
      "fixed bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-[var(--radius-lg)] shadow-lg min-w-[220px] max-w-[calc(100vw-2rem)] border border-[var(--border-color-default)] backdrop-blur-sm",
      f(a()),
      l()
    )
  );
  var b = Le(),
    w = Ce(b);
  {
    var k = (x) => {
      var g = ld(),
        c = m(g);
      {
        var v = (G) => {
          var K = od(),
            te = m(K);
          {
            var ue = (J) => {
                var ee = td();
                y(J, ee);
              },
              be = (J) => {
                var ee = Le(),
                  le = Ce(ee);
                {
                  var N = (Q) => {
                      var R = rd();
                      y(Q, R);
                    },
                    B = (Q) => {
                      var R = Le(),
                        ne = Ce(R);
                      {
                        var Z = (se) => {
                            var _e = ad();
                            y(se, _e);
                          },
                          re = (se) => {
                            var _e = nd();
                            y(se, _e);
                          };
                        W(
                          ne,
                          (se) => {
                            a() === "warning" ? se(Z) : se(re, !1);
                          },
                          !0
                        );
                      }
                      y(Q, R);
                    };
                  W(
                    le,
                    (Q) => {
                      a() === "danger" ? Q(N) : Q(B, !1);
                    },
                    !0
                  );
                }
                y(J, ee);
              };
            W(te, (J) => {
              a() === "success" ? J(ue) : J(be, !1);
            });
          }
          y(G, K);
        };
        W(c, (G) => {
          n() && G(v);
        });
      }
      var d = D(c, 2),
        p = m(d);
      {
        var S = (G) => {
          var K = id(),
            te = m(K);
          (O(() => X(te, e.title)), y(G, K));
        };
        W(p, (G) => {
          e.title && G(S);
        });
      }
      var P = D(p, 2),
        z = m(P),
        L = D(d, 2);
      {
        var T = (G) => {
          var K = sd();
          ((K.__click = _), y(G, K));
        };
        W(L, (G) => {
          o() && G(T);
        });
      }
      (O(() => {
        (q(g, 1, Y(t(C))), me(P, "title", e.message), X(z, e.message));
      }),
        ti(
          1,
          g,
          () => gi,
          () => ({ duration: 200 })
        ),
        ti(
          2,
          g,
          () => gi,
          () => ({ duration: 200 })
        ),
        y(x, g));
    };
    W(w, (x) => {
      t(u) && x(k);
    });
  }
  (y(r, b), Be());
}
it(["click"]);
var ud = V('<span class="text-[var(--color-text-default)]">*</span>'),
  cd = V("<div> <!></div>"),
  dd = V("<div><!></div>"),
  fd = V("<li> </li>"),
  vd = V("<ul></ul>"),
  gd = V("<div><!> <!> <!></div>"),
  pd = V('<form novalidate=""></form> <!>', 1);
function bd(r, e) {
  Oe(e, !0);
  let a = F(e, "value", 19, () => ({})),
    n = F(e, "rowGap", 3, "md"),
    o = F(e, "validateOn", 3, "blur"),
    i = F(e, "labelAlign", 3, "left"),
    s = F(e, "labelWeight", 3, "medium"),
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
  let w = Ye({});
  const k = Ye({}),
    x = Ye({});
  let g = he(Ye([])),
    c = 0;
  const v = h(() => (u() ? "" : "w-full")),
    d = h(() => (typeof n() == "number" ? "" : (C[n()] ?? C.md))),
    p = h(() => (typeof n() == "number" ? n() + "px" : "")),
    S = (I) => {
      const E = w[I];
      return typeof E == "number" ? E : b(E);
    };
  function P(I) {
    return u() ? (f[I] ?? "md") : I;
  }
  let z = 0;
  const L = Ye(z++),
    T = h(() => {
      if (e.formId && e.formId.trim()) return e.formId.trim();
      const I = e.schema.map((j) => j.name).join("|");
      let E = 0;
      for (let j = 0; j < I.length; j += 1)
        ((E = (E << 5) - E + I.charCodeAt(j)), (E |= 0));
      return `form-${Math.abs(E >>> 0).toString(36) || "form"}`;
    }),
    G = h(() => (e.formId && e.formId.trim() ? t(T) : `${t(T)}-${L}`));
  We(() => {
    const I = new Set(e.schema.map((E) => E.name));
    for (const E of Object.keys(w))
      I.has(E) || (delete w[E], delete k[E], delete x[E]);
    for (const E of e.schema)
      (Object.prototype.hasOwnProperty.call(a(), E.name)
        ? (w[E.name] = a()[E.name])
        : E.name in w ||
          (w[E.name] = E.default ?? (E.type === "checkbox" ? !1 : "")),
        E.name in k || (k[E.name] = !1),
        x[E.name] || (x[E.name] = []));
  });
  const K = ju((I) => {
    ee(I);
  }, 150);
  function te(I, E) {
    w[I] !== E && ((w[I] = E), o() === "input" && K(I), e.onChange?.({ ...w }));
  }
  function ue(I) {
    (k[I] || (k[I] = !0), o() !== "submit" && ee(I));
  }
  function be(I) {
    A(
      g,
      t(g).filter((E) => E.id !== I),
      !0
    );
  }
  function J(I, E, oe) {
    const j = c++;
    A(g, [...t(g), { id: j, message: E, variant: I, title: oe }], !0);
  }
  async function ee(I) {
    const E = e.schema.find((de) => de.name === I);
    if (!E) return;
    const oe = w[I],
      j = [];
    if (
      (E.required &&
        (oe === "" || oe == null || (E.type === "checkbox" && !oe)) &&
        j.push("Required"),
      E.type === "number" &&
        oe !== "" &&
        Number.isNaN(Number(oe)) &&
        j.push("Must be a number"),
      E.type === "email" &&
        oe !== "" &&
        (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(oe)) ||
          j.push("Invalid email")),
      E.validators)
    )
      for (const de of E.validators) {
        const fe = await de(oe, w);
        fe && j.push(fe);
      }
    x[I] = j;
  }
  function le(I) {
    return I.when ? !!I.when(w) : !0;
  }
  const N = h(() => e.schema.filter(le)),
    B = h(() => t(N).map((I) => I.name));
  async function Q() {
    return (
      await Promise.all(t(B).map(ee)),
      t(B).every((I) => (x[I]?.length ?? 0) === 0)
    );
  }
  function R() {
    for (const I of e.schema)
      ((w[I.name] = I.default ?? (I.type === "checkbox" ? !1 : "")),
        (k[I.name] = !1),
        (x[I.name] = []));
    e.onChange?.({ ...w });
  }
  async function ne(I) {
    if ((I?.preventDefault?.(), !!(await Q())))
      try {
        (await e.onSubmit?.({ ...w }, { reset: R }),
          J("success", "Form submitted successfully"));
      } catch (oe) {
        throw (J("danger", "Form submission failed", "Error"), oe);
      }
  }
  We(() => {
    const I = {
      reset: R,
      submit: () => ne(),
      validate: () => Q(),
      getData: () => ({ ...w }),
      setValue: (E, oe) => te(E, oe),
    };
    e.expose?.(I);
  });
  var Z = pd(),
    re = Ce(Z);
  let se;
  at(
    re,
    21,
    () => t(N),
    (I) => I.name,
    (I, E) => {
      var oe = Le(),
        j = Ce(oe);
      (cu(
        j,
        () => t(E).name,
        (de) => {
          var fe = gd(),
            ge = m(fe);
          {
            var Ae = (ae) => {
              var ie = cd(),
                xe = m(ie),
                ye = D(xe);
              {
                var U = (pe) => {
                  var ke = ud();
                  y(pe, ke);
                };
                W(ye, (pe) => {
                  t(E).required && pe(U);
                });
              }
              (O(
                (pe) => {
                  (q(ie, 1, pe), X(xe, `${t(E).label ?? ""} `));
                },
                [
                  () =>
                    Y(
                      H(
                        _[s()],
                        u()
                          ? "text-xs -mb-1 text-center"
                          : [
                              De[l()],
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
                y(ae, ie));
            };
            W(ge, (ae) => {
              t(E).label && ae(Ae);
            });
          }
          var Pe = D(ge, 2);
          {
            var ze = (ae) => {
                const ie = h(
                    () =>
                      (k[t(E).name] || o() !== "submit") &&
                      x[t(E).name]?.length > 0
                  ),
                  xe = h(() => (t(ie) ? `${t(G)}-err-${t(E).name}` : void 0));
                {
                  let ye = h(() => H(t(E).class, t(v))),
                    U = h(() =>
                      (t(E).options ?? []).map((Te) => ({
                        label: b(Te.label),
                        value: b(Te.value),
                        disabled: Te.disabled,
                      }))
                    ),
                    pe = h(() => P(t(E).sz ?? "md")),
                    ke = h(() => t(E).variant ?? "default"),
                    Fe = h(() => b(w[t(E).name]));
                  Kt(ae, {
                    get class() {
                      return t(ye);
                    },
                    get options() {
                      return t(U);
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
                    onChange: (Te) => te(t(E).name, Te),
                    onblur: () => ue(t(E).name),
                    get invalid() {
                      return t(ie);
                    },
                    get describedBy() {
                      return t(xe);
                    },
                  });
                }
              },
              ve = (ae) => {
                var ie = Le(),
                  xe = Ce(ie);
                {
                  var ye = (pe) => {
                      var ke = dd(),
                        Fe = m(ke);
                      {
                        let Te = h(() => t(E).class ?? ""),
                          Ge = h(() => P(t(E).sz ?? "md")),
                          je = h(() => !!w[t(E).name]);
                        Ya(Fe, {
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
                          onChange: (Ie) => te(t(E).name, Ie),
                          onblur: () => ue(t(E).name),
                        });
                      }
                      (O(
                        (Te) => q(ke, 1, Te),
                        [
                          () =>
                            Y(
                              H(
                                t(E).class,
                                u() && "mx-auto justify-self-center"
                              )
                            ),
                        ]
                      ),
                        y(pe, ke));
                    },
                    U = (pe) => {
                      const ke = h(
                          () =>
                            (k[t(E).name] || o() !== "submit") &&
                            x[t(E).name]?.length > 0
                        ),
                        Fe = h(() =>
                          t(ke) ? `${t(G)}-err-${t(E).name}` : void 0
                        );
                      {
                        let Te = h(() => H(t(E).class, t(v))),
                          Ge = h(() =>
                            t(E).type === "textarea" ? "textarea" : "input"
                          ),
                          je = h(() =>
                            t(E).type === "number"
                              ? "number"
                              : t(E).type === "password"
                                ? "password"
                                : t(E).type === "email"
                                  ? "email"
                                  : "text"
                          ),
                          Ie = h(() => t(E).rows ?? 3),
                          Ne = h(() => t(E).type === "number"),
                          nt = h(() => P(t(E).sz ?? "md")),
                          st = h(() => t(E).variant ?? "default"),
                          Pt = h(() => S(t(E).name)),
                          mt = h(() =>
                            t(E).type === "email" ? "email" : void 0
                          ),
                          Xt = h(() =>
                            t(E).type === "email" ? "email" : void 0
                          );
                        Ga(pe, {
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
                            return t(Ne);
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
                          onChange: (ct) => te(t(E).name, ct),
                          onblur: () => ue(t(E).name),
                          get invalid() {
                            return t(ke);
                          },
                          get describedBy() {
                            return t(Fe);
                          },
                          get autocomplete() {
                            return t(mt);
                          },
                          get inputmode() {
                            return t(Xt);
                          },
                        });
                      }
                    };
                  W(
                    xe,
                    (pe) => {
                      t(E).type === "checkbox" ? pe(ye) : pe(U, !1);
                    },
                    !0
                  );
                }
                y(ae, ie);
              };
            W(Pe, (ae) => {
              t(E).type === "select" ? ae(ze) : ae(ve, !1);
            });
          }
          var Se = D(Pe, 2);
          {
            var M = (ae) => {
              var ie = vd();
              (at(
                ie,
                23,
                () => x[t(E).name] ?? [],
                (xe, ye) => `${t(E).name}-${ye}`,
                (xe, ye) => {
                  var U = fd(),
                    pe = m(U);
                  (O(
                    (ke) => {
                      (q(U, 1, ke), X(pe, t(ye)));
                    },
                    [
                      () =>
                        Y(
                          H(
                            "text-xs leading-tight mt-1 text-[var(--color-text-red)]",
                            u() && "text-[10px]"
                          )
                        ),
                    ]
                  ),
                    y(xe, U));
                }
              ),
                O(
                  (xe) => {
                    (me(ie, "id", `${t(G)}-err-${t(E).name}`), q(ie, 1, xe));
                  },
                  [() => Y(H("m-0 pl-4 list-none", u() && "text-center"))]
                ),
                y(ae, ie));
            };
            W(Se, (ae) => {
              (k[t(E).name] || o() !== "submit") &&
                x[t(E).name]?.length &&
                ae(M);
            });
          }
          (O(
            (ae) => q(fe, 1, ae),
            [
              () =>
                Y(
                  H(
                    "grid gap-1 w-full min-w-0",
                    u() ? "justify-items-center" : "justify-items-stretch"
                  )
                ),
            ]
          ),
            y(de, fe));
        }
      ),
        y(I, oe));
    }
  );
  var _e = D(re, 2);
  (at(
    _e,
    17,
    () => t(g),
    (I) => I.id,
    (I, E) => {
      jo(I, {
        get title() {
          return t(E).title;
        },
        get message() {
          return t(E).message;
        },
        get variant() {
          return t(E).variant;
        },
        onClose: () => be(t(E).id),
      });
    }
  ),
    O(
      (I) => {
        (me(re, "id", t(G)), q(re, 1, I), (se = ut(re, "", se, { gap: t(p) })));
      },
      [
        () =>
          Y(
            H(
              "grid font-sans w-full",
              t(d),
              u() && "gap-2 justify-items-center"
            )
          ),
      ]
    ),
    St("submit", re, ne),
    y(r, Z),
    Be());
}
var hd = V(
    '<div class="p-4 border-b border-[var(--border-color-default)]"><!></div>'
  ),
  md = V(
    '<div class="text-xs opacity-70 px-3 py-2 text-center">No items</div>'
  ),
  _d = V(
    '<li><button type="button" class="w-full text-left px-3 py-2 rounded-md hover:bg-[var(--color-bg-hover)] focus:outline-[var(--border-color-focus)] focus:outline-2 transition-colors"> </button></li>'
  ),
  xd = V('<ul class="grid gap-2 p-4"></ul>'),
  wd = V(
    '<div class="p-4 border-t border-[var(--border-color-default)]"><!></div>'
  ),
  yd = V(
    '<div class="fixed inset-0 z-[var(--z-overlay)] flex"><div role="dialog" aria-modal="true" tabindex="-1" class="flex flex-col h-full bg-[var(--color-bg-surface)] shadow-xl"><!> <div class="flex-1 overflow-y-auto" tabindex="-1"><!></div> <!></div> <button type="button" class="flex-1 bg-black/40" aria-hidden="true"></button></div>'
  ),
  kd = V(
    '<button type="button" aria-label="Toggle navigation"><span class="relative block w-5 h-3.5"><span></span> <span></span> <span></span></span></button> <!>',
    1
  );
function Cd(r, e) {
  Oe(e, !0);
  let a = F(e, "menuItems", 19, () => []),
    n = F(e, "activeItem", 3, ""),
    o = F(e, "closeOnSelect", 3, !0),
    i = F(e, "class", 3, ""),
    s = F(e, "width", 3, 300),
    l = he(void 0),
    u = he(void 0),
    f = null,
    _ = he(!1);
  const C = h(() => e.pressed ?? t(_));
  function b(K) {
    e.pressed === void 0 ? A(_, K, !0) : e.onOpenChange?.(K);
  }
  function w() {
    b(!t(C));
  }
  function k() {
    (b(!1), queueMicrotask(() => t(l)?.focus()));
  }
  const x = Vu(() => k(), 150);
  function g(K) {
    K.key === "Escape" && x();
  }
  We(
    () => (
      t(C) && t(u)
        ? (queueMicrotask(() => {
            _s(t(u));
          }),
          f?.(),
          (f = xs(t(u))),
          document.addEventListener("keydown", g))
        : (f?.(), (f = null), document.removeEventListener("keydown", g)),
      () => {
        (document.removeEventListener("keydown", g), f?.(), (f = null));
      }
    )
  );
  const c =
      "fixed top-4 left-4 inline-flex items-center justify-center h-8 w-8 rounded-md border border-[var(--border-color-default)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] transition-colors z-[var(--z-modal)]",
    v = h(() => H(c, i()));
  var d = kd(),
    p = Ce(d);
  p.__click = w;
  var S = m(p),
    P = m(S),
    z = D(P, 2),
    L = D(z, 2);
  ot(
    p,
    (K) => A(l, K),
    () => t(l)
  );
  var T = D(p, 2);
  {
    var G = (K) => {
      var te = yd(),
        ue = m(te),
        be = m(ue);
      {
        var J = (Z) => {
          var re = hd(),
            se = m(re);
          (Je(se, () => e.header ?? $), y(Z, re));
        };
        W(be, (Z) => {
          e.header && Z(J);
        });
      }
      var ee = D(be, 2),
        le = m(ee);
      {
        var N = (Z) => {
            var re = md();
            y(Z, re);
          },
          B = (Z) => {
            var re = xd();
            (at(
              re,
              21,
              a,
              (se) => se.id,
              (se, _e) => {
                var I = _d(),
                  E = m(I);
                E.__click = () => {
                  (e.onSelect?.(t(_e).id), o() && k());
                };
                var oe = m(E);
                (O(() => {
                  (me(E, "aria-current", n() === t(_e).id ? "page" : void 0),
                    X(oe, t(_e).label));
                }),
                  y(se, I));
              }
            ),
              y(Z, re));
          };
        W(le, (Z) => {
          a().length === 0 ? Z(N) : Z(B, !1);
        });
      }
      var Q = D(ee, 2);
      {
        var R = (Z) => {
          var re = wd(),
            se = m(re);
          (Je(se, () => e.footer ?? $), y(Z, re));
        };
        W(Q, (Z) => {
          e.footer && Z(R);
        });
      }
      ot(
        ue,
        (Z) => A(u, Z),
        () => t(u)
      );
      var ne = D(ue, 2);
      ((ne.__click = k),
        O(() => ut(ue, `width:${typeof s() == "number" ? `${s()}px` : s()}`)),
        y(K, te));
    };
    W(T, (K) => {
      t(C) && K(G);
    });
  }
  (O(
    (K, te, ue) => {
      (me(p, "aria-expanded", t(C)),
        q(p, 1, Y(t(v))),
        q(P, 1, K),
        q(z, 1, te),
        q(L, 1, ue));
    },
    [
      () =>
        Y(
          H(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform duration-200",
            t(C)
              ? "translate-y-[-50%] rotate-45"
              : "translate-y-[calc(-50%_-_6px)]"
          )
        ),
      () =>
        Y(
          H(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-opacity duration-200 translate-y-[-50%]",
            t(C) ? "opacity-0" : "opacity-100"
          )
        ),
      () =>
        Y(
          H(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform duration-200",
            t(C)
              ? "translate-y-[-50%] -rotate-45"
              : "translate-y-[calc(-50%_+_6px)]"
          )
        ),
    ]
  ),
    y(r, d),
    Be());
}
it(["click"]);
var Sd = V(
    '<div role="group" class="relative inline-block overflow-visible"><button type="button" aria-haspopup="menu"> </button></div>'
  ),
  Pd = V(
    '<div class="my-1 mx-1 border-t border-[var(--border-color-default)]" role="separator"></div>'
  ),
  Ed = V("<span> </span>"),
  zd = V("<span>&gt;</span>"),
  Ad = V(
    '<div class="my-1 mx-1 border-t border-[var(--border-color-default)]" role="separator"></div>'
  ),
  Fd = V("<span> </span>"),
  Td = V(
    '<button type="button" role="menuitem"><span class="flex items-center gap-2 flex-1 min-w-0"><span class="truncate"> </span></span> <span><!></span></button>'
  ),
  Ld = V('<div role="menu" tabindex="0"></div>'),
  Md = V(
    '<div class="relative"><button type="button" role="menuitem"><span class="flex items-center gap-2 flex-1 min-w-0"><span class="truncate"> </span></span> <span class="flex items-center shrink-0 ml-auto gap-1"><!> <!></span></button> <!></div>'
  ),
  Dd = V(
    '<div role="presentation" tabindex="-1" class="fixed inset-0 z-40"></div> <div role="menu" tabindex="-1"></div>',
    1
  ),
  Nd = V('<nav aria-label="Menu bar"></nav> <!>', 1);
function ys(r, e) {
  Oe(e, !0);
  let a = F(e, "menus", 19, () => []),
    n = F(e, "onSelect", 3, () => {}),
    o = F(e, "class", 3, ""),
    i = F(e, "sz", 3, "sm"),
    s = he(""),
    l = he(""),
    u = he(-1),
    f = he(-1),
    _ = Ye({}),
    C = Ye({}),
    b = Ye({}),
    w = Ye({}),
    k = he(0),
    x = he(0),
    g = Ye({}),
    c = he(0),
    v = he(0);
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
      "px-4 rounded-xs leading-none transition-colors outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]",
    z = "bg-[var(--color-bg-muted)] text-[var(--color-text-default)]",
    L = "hover:bg-[var(--color-bg-muted)] text-[var(--color-text-default)]",
    T = h(
      () =>
        `position:fixed; top:${t(k)}px; left:${t(x)}px; width:max-content; max-width:calc(100vw - 16px);`
    ),
    G = h(
      () =>
        `position:fixed; top:${t(c)}px; left:${t(v)}px; width:max-content; max-width:calc(100vw - 16px);`
    ),
    K = h(() => De[i()]),
    te = "flex items-center shrink-0",
    ue = h(() => H(p, d[i()], t(K), o())),
    be = h(() => H(P, d[i()], t(K)));
  function J(M) {
    return typeof M == "string" ? M : M.label;
  }
  function ee(M) {
    return typeof M == "string" ? M : (M.id ?? M.label ?? "");
  }
  function le(M) {
    return typeof M == "string" ? "" : (M.shortcut ?? "");
  }
  function N(M) {
    return typeof M != "string" && "type" in M && M.type === "separator";
  }
  function B(M) {
    return (
      typeof M != "string" && Array.isArray(M.submenu) && M.submenu.length > 0
    );
  }
  function Q(M, ae) {
    return ee(M) || `__action-${ae}`;
  }
  function R(M, ae) {
    (ne(), n()(M, ae));
  }
  function ne() {
    (A(s, ""), A(l, ""), A(u, -1), A(f, -1));
  }
  function Z(M, ae) {
    const ie = M.getBoundingClientRect(),
      xe = Math.min(
        ae?.getBoundingClientRect().width ?? ie.width,
        window.innerWidth - 16
      ),
      ye = window.innerWidth - ie.left,
      U = ie.right,
      pe = ye < xe && U > ye,
      ke = window.scrollX,
      Fe = window.scrollX + window.innerWidth;
    A(k, ie.bottom + window.scrollY);
    const Te = pe ? ie.right + window.scrollX - xe : ie.left + window.scrollX,
      Ge = Fe - xe;
    A(x, Math.max(ke, Math.min(Te, Ge)), !0);
  }
  function re(M, ae) {
    const ie = M.getBoundingClientRect(),
      xe = ae?.getBoundingClientRect(),
      ye = Math.min(xe?.width ?? ie.width, window.innerWidth - 16),
      U = window.innerWidth - ie.right,
      pe = ie.left,
      ke = U < ye && pe > U;
    A(c, ie.top + window.scrollY);
    const Fe = window.scrollX,
      Te = window.scrollX + window.innerWidth,
      Ge = ke
        ? ie.left + window.scrollX - ye - S
        : ie.right + window.scrollX + S,
      je = Te - ye - S;
    A(v, Math.max(Fe, Math.min(Ge, je)), !0);
  }
  function se(M) {
    return M.findIndex((ae) => !N(ae));
  }
  function _e(M, ae) {
    if (!M.length) return -1;
    let ie = ae;
    for (let xe = 0; xe < M.length; xe++)
      if (((ie = (ie + 1 + M.length) % M.length), !N(M[ie]))) return ie;
    return ae;
  }
  function I(M, ae) {
    if (!M.length) return -1;
    let ie = ae;
    for (let xe = 0; xe < M.length; xe++)
      if (((ie = (ie - 1 + M.length) % M.length), !N(M[ie]))) return ie;
    return ae;
  }
  function E(M, ae) {
    if (ae < 0 || ae >= M.actions.length) return;
    const ie = M.actions[ae];
    !ie ||
      N(ie) ||
      ((!B(ie) || t(l) !== ee(ie)) && (A(l, ""), A(f, -1)),
      A(u, ae, !0),
      queueMicrotask(() => {
        t(s) === M.name && b[ee(ie)]?.focus();
      }));
  }
  function oe(M, ae) {
    if (!B(M) || ae < 0 || ae >= M.submenu.length) return;
    const ie = M.submenu[ae];
    !ie ||
      N(ie) ||
      (A(f, ae, !0),
      queueMicrotask(() => {
        t(l) === ee(M) && w[ee(ie)]?.focus();
      }));
  }
  function j(M, ae = !1) {
    (A(s, M.name, !0), A(l, ""), A(f, -1));
    const ie = ae ? se(M.actions) : -1;
    A(u, ie, !0);
    const xe = _[M.name];
    (xe && Z(xe, C[M.name]), ae && ie !== -1 && E(M, ie));
  }
  function de(M, ae = !1) {
    if (!B(M)) return;
    A(l, ee(M), !0);
    const ie = b[ee(M)];
    ie && re(ie, g[ee(M)]);
    const xe = ae ? se(M.submenu) : -1;
    (A(f, xe, !0), ae && xe !== -1 && oe(M, xe));
  }
  function fe(M, ae, ie) {
    if (M.key === "Enter" || M.key === " " || M.key === "ArrowDown")
      (M.preventDefault(), j(ae, !0));
    else if (M.key === "ArrowRight") {
      M.preventDefault();
      const xe = (ie + 1) % a().length;
      _[a()[xe].name]?.focus();
    } else if (M.key === "ArrowLeft") {
      M.preventDefault();
      const xe = (ie - 1 + a().length) % a().length;
      _[a()[xe].name]?.focus();
    }
  }
  function ge(M, ae) {
    if ((M.stopPropagation(), !t(s))) return;
    const ie = ae.actions,
      xe = se(ie);
    if (xe === -1) return;
    const ye = t(u) === -1 ? xe : t(u);
    if (M.key === "Escape") (M.preventDefault(), ne(), _[ae.name]?.focus());
    else if (M.key === "ArrowDown") {
      M.preventDefault();
      const U = _e(ie, ye);
      E(ae, U);
    } else if (M.key === "ArrowUp") {
      M.preventDefault();
      const U = I(ie, ye);
      E(ae, U);
    } else if (M.key === "ArrowRight") {
      M.preventDefault();
      const U = ie[ye];
      U && B(U) && de(U, !0);
    } else if (M.key === "ArrowLeft" && t(l))
      (M.preventDefault(), A(l, ""), A(f, -1), E(ae, ye));
    else if (M.key === "Enter" || M.key === " ") {
      M.preventDefault();
      const U = ie[ye];
      U && (B(U) ? de(U, !0) : R(ae.name, U));
    } else if (M.key === "Tab") {
      M.preventDefault();
      const U = M.shiftKey ? I(ie, ye) : _e(ie, ye);
      E(ae, U);
    }
  }
  function Ae(M, ae, ie) {
    if ((M.stopPropagation(), !t(l) || !B(ae))) return;
    const xe = ae.submenu,
      ye = se(xe);
    if (ye === -1) return;
    const U = t(f) === -1 ? ye : t(f);
    if (M.key === "Escape")
      (M.preventDefault(), A(l, ""), A(f, -1), b[ee(ae)]?.focus());
    else if (M.key === "ArrowDown") {
      M.preventDefault();
      const pe = _e(xe, U);
      oe(ae, pe);
    } else if (M.key === "ArrowUp") {
      M.preventDefault();
      const pe = I(xe, U);
      oe(ae, pe);
    } else if (M.key === "ArrowLeft")
      (M.preventDefault(), A(l, ""), A(f, -1), b[ee(ae)]?.focus());
    else if (M.key === "Enter" || M.key === " ") {
      M.preventDefault();
      const pe = xe[U];
      pe && R(ie, pe);
    } else if (M.key === "Tab") {
      M.preventDefault();
      const pe = M.shiftKey ? I(xe, U) : _e(xe, U);
      oe(ae, pe);
    }
  }
  (We(() => {
    if (t(s)) {
      const M = _[t(s)];
      if (M) {
        Z(M, C[t(s)]);
        const ae = () => {
          Z(M, C[t(s)]);
        };
        return (
          window.addEventListener("scroll", ae, !0),
          window.addEventListener("resize", ae),
          () => {
            (window.removeEventListener("scroll", ae, !0),
              window.removeEventListener("resize", ae));
          }
        );
      }
    }
  }),
    We(() => {
      if (t(l)) {
        const M = b[t(l)],
          ae = g[t(l)];
        if (M) {
          re(M, ae);
          const ie = () => {
            re(M, g[t(l)]);
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
  var Pe = Nd(),
    ze = Ce(Pe);
  at(
    ze,
    23,
    a,
    (M) => M.name,
    (M, ae, ie) => {
      var xe = Sd(),
        ye = m(xe);
      ((ye.__mousedown = (pe) => pe.preventDefault()),
        (ye.__click = () => {
          t(s) === t(ae).name ? ne() : j(t(ae), !0);
        }),
        (ye.__keydown = (pe) => fe(pe, t(ae), t(ie))));
      var U = m(ye);
      (ot(
        ye,
        (pe, ke) => (_[ke.name] = pe),
        (pe) => _?.[pe.name],
        () => [t(ae)]
      ),
        O(
          (pe) => {
            (q(ye, 1, pe),
              me(ye, "aria-expanded", t(s) === t(ae).name),
              X(U, t(ae).name));
          },
          [() => Y(H(t(be), t(s) === t(ae).name ? z : L))]
        ),
        St("mouseenter", ye, () => {
          t(s) && t(s) !== t(ae).name && j(t(ae), !0);
        }),
        y(M, xe));
    }
  );
  var ve = D(ze, 2);
  {
    var Se = (M) => {
      var ae = Le(),
        ie = Ce(ae);
      (at(
        ie,
        17,
        a,
        (xe) => xe.name,
        (xe, ye) => {
          var U = Le(),
            pe = Ce(U);
          {
            var ke = (Fe) => {
              var Te = Dd(),
                Ge = Ce(Te);
              Ge.__mousedown = ne;
              var je = D(Ge, 2);
              ((je.__keydown = (Ie) => ge(Ie, t(ye))),
                at(
                  je,
                  23,
                  () => t(ye).actions,
                  (Ie, Ne) => Q(Ie, Ne),
                  (Ie, Ne, nt) => {
                    var st = Le(),
                      Pt = Ce(st);
                    {
                      var mt = (ct) => {
                          var ce = Pd();
                          y(ct, ce);
                        },
                        Xt = (ct) => {
                          var ce = Md(),
                            Ee = m(ce);
                          ((Ee.__mousedown = (He) => He.preventDefault()),
                            (Ee.__click = () => {
                              B(t(Ne))
                                ? (E(t(ye), t(nt)), de(t(Ne), !0))
                                : R(t(ye).name, t(Ne));
                            }));
                          var Me = m(Ee),
                            qe = m(Me),
                            Xe = m(qe),
                            tt = D(Me, 2),
                            dt = m(tt);
                          {
                            var _t = (He) => {
                              var $e = Ed(),
                                rt = m($e);
                              (O(
                                (ft, sr) => {
                                  (q($e, 1, ft), X(rt, sr));
                                },
                                [
                                  () =>
                                    Y(
                                      H(
                                        "text-[var(--color-text-muted)] text-right",
                                        t(K)
                                      )
                                    ),
                                  () => le(t(Ne)),
                                ]
                              ),
                                y(He, $e));
                            };
                            W(dt, (He) => {
                              le(t(Ne)) && He(_t);
                            });
                          }
                          var Tt = D(dt, 2);
                          {
                            var jt = (He) => {
                              var $e = zd();
                              (O(
                                (rt) => q($e, 1, rt),
                                [
                                  () =>
                                    Y(
                                      H(
                                        "text-[var(--color-text-muted)] flex-shrink-0",
                                        t(K)
                                      )
                                    ),
                                ]
                              ),
                                y(He, $e));
                            };
                            W(Tt, (He) => {
                              B(t(Ne)) && He(jt);
                            });
                          }
                          ot(
                            Ee,
                            (He, $e) => (b[ee($e)] = He),
                            (He) => b?.[ee(He)],
                            () => [t(Ne)]
                          );
                          var Vt = D(Ee, 2);
                          {
                            var Dr = (He) => {
                              var $e = Ld();
                              (($e.__keydown = (rt) =>
                                Ae(rt, t(Ne), t(ye).name)),
                                at(
                                  $e,
                                  23,
                                  () => t(Ne).submenu,
                                  (rt, ft) => Q(rt, ft),
                                  (rt, ft, sr) => {
                                    var Lt = Le(),
                                      lr = Ce(Lt);
                                    {
                                      var ur = (cr) => {
                                          var lt = Ad();
                                          y(cr, lt);
                                        },
                                        wr = (cr) => {
                                          var lt = Td();
                                          ((lt.__mousedown = (kt) =>
                                            kt.preventDefault()),
                                            (lt.__click = () =>
                                              R(t(ye).name, t(ft))));
                                          var yr = m(lt),
                                            Nr = m(yr),
                                            Ir = m(Nr),
                                            Qr = D(yr, 2);
                                          q(Qr, 1, Y(te));
                                          var Yt = m(Qr);
                                          {
                                            var ya = (kt) => {
                                              var qt = Fd(),
                                                ka = m(qt);
                                              (O(
                                                (Jt, Or) => {
                                                  (q(qt, 1, Jt), X(ka, Or));
                                                },
                                                [
                                                  () =>
                                                    Y(
                                                      H(
                                                        "text-[var(--color-text-muted)]",
                                                        t(K)
                                                      )
                                                    ),
                                                  () => le(t(ft)),
                                                ]
                                              ),
                                                y(kt, qt));
                                            };
                                            W(Yt, (kt) => {
                                              le(t(ft)) && kt(ya);
                                            });
                                          }
                                          (ot(
                                            lt,
                                            (kt, qt) => (w[ee(qt)] = kt),
                                            (kt) => w?.[ee(kt)],
                                            () => [t(ft)]
                                          ),
                                            O(
                                              (kt, qt) => {
                                                (q(lt, 1, kt), X(Ir, qt));
                                              },
                                              [
                                                () =>
                                                  Y(
                                                    H(
                                                      "relative text-left rounded-xs transition-colors outline-none px-1.5 py-0.5",
                                                      "my-1 mr-1 w-full flex items-center justify-between gap-3",
                                                      "hover:bg-[var(--color-bg-muted)] focus-visible:bg-[var(--color-bg-muted)]",
                                                      "focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]",
                                                      "decoration-[var(--color-text-default)]",
                                                      t(K)
                                                    )
                                                  ),
                                                () => J(t(ft)),
                                              ]
                                            ),
                                            St("mouseenter", lt, () =>
                                              A(f, t(sr), !0)
                                            ),
                                            St("focus", lt, () =>
                                              A(f, t(sr), !0)
                                            ),
                                            y(cr, lt));
                                        };
                                      W(lr, (cr) => {
                                        N(t(ft)) ? cr(ur) : cr(wr, !1);
                                      });
                                    }
                                    y(rt, Lt);
                                  }
                                ),
                                ot(
                                  $e,
                                  (rt, ft) => (g[ee(ft)] = rt),
                                  (rt) => g?.[ee(rt)],
                                  () => [t(Ne)]
                                ),
                                O(
                                  (rt) => {
                                    (q($e, 1, rt), ut($e, t(G)));
                                  },
                                  [
                                    () =>
                                      Y(
                                        H(
                                          "fixed z-50 min-w-44 p-2 rounded-xs shadow-[0_2px_4px_var(--shadow-color)]",
                                          "border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]"
                                        )
                                      ),
                                  ]
                                ),
                                y(He, $e));
                            };
                            W(Vt, (He) => {
                              B(t(Ne)) && t(l) === ee(t(Ne)) && He(Dr);
                            });
                          }
                          (O(
                            (He, $e) => {
                              (q(Ee, 1, He), X(Xe, $e));
                            },
                            [
                              () =>
                                Y(
                                  H(
                                    "relative text-left rounded-xs transition-colors outline-none px-1.5 py-0.5 my-1 mr-1 min-w-full flex items-center",
                                    "gap-3 hover:bg-[var(--color-bg-muted)] focus-visible:bg-[var(--color-bg-muted)]",
                                    "focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]",
                                    t(K)
                                  )
                                ),
                              () => J(t(Ne)),
                            ]
                          ),
                            St("mouseenter", Ee, () => {
                              (A(u, t(nt), !0),
                                B(t(Ne)) && t(l) !== ee(t(Ne))
                                  ? de(t(Ne))
                                  : B(t(Ne)) || (A(l, ""), A(f, -1)));
                            }),
                            St("focus", Ee, () => {
                              E(t(ye), t(nt));
                            }),
                            y(ct, ce));
                        };
                      W(Pt, (ct) => {
                        N(t(Ne)) ? ct(mt) : ct(Xt, !1);
                      });
                    }
                    y(Ie, st);
                  }
                ),
                ot(
                  je,
                  (Ie, Ne) => (C[Ne.name] = Ie),
                  (Ie) => C?.[Ie.name],
                  () => [t(ye)]
                ),
                O(
                  (Ie) => {
                    (q(je, 1, Ie), ut(je, t(T)));
                  },
                  [
                    () =>
                      Y(
                        H(
                          "fixed z-50 min-w-44 p-2 rounded-xs shadow-[0_2px_4px_var(--shadow-color)] ",
                          "border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]"
                        )
                      ),
                  ]
                ),
                y(Fe, Te));
            };
            W(pe, (Fe) => {
              t(s) === t(ye).name && Fe(ke);
            });
          }
          y(xe, U);
        }
      ),
        y(M, ae));
    };
    W(ve, (M) => {
      t(s) && M(Se);
    });
  }
  (O(() => q(ze, 1, Y(t(ue)))), y(r, Pe), Be());
}
it(["mousedown", "click", "keydown"]);
var Id = V("<div><span> </span> <!> <!> <!></div>");
function ks(r, e) {
  Oe(e, !0);
  let a = F(e, "class", 3, "");
  const n = h(() =>
    H(
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
    if (e.totalPages <= 3) return yo(e.totalPages, (x) => x + 1);
    let k = e.currentPage - 1;
    return (
      k < 1 && (k = 1),
      k + 3 - 1 > e.totalPages && (k = e.totalPages - 3 + 1),
      yo(3, (x) => k + x)
    );
  }
  var l = Id(),
    u = m(l),
    f = m(u),
    _ = D(u, 2);
  {
    let w = h(() => e.currentPage === 1);
    Qe(_, {
      onClick: i,
      get disabled() {
        return t(w);
      },
      sz: "xs",
      variant: "secondary",
      children: (k, x) => {
        var g = Re("<");
        y(k, g);
      },
      $$slots: { default: !0 },
    });
  }
  var C = D(_, 2);
  at(
    C,
    16,
    s,
    (w) => w,
    (w, k) => {
      {
        let x = h(() => (e.currentPage === k ? "primary" : "secondary")),
          g = h(() => (e.currentPage === k ? "page" : void 0));
        Qe(w, {
          onClick: () => e.onPageChange(k),
          sz: "xs",
          get variant() {
            return t(x);
          },
          get "aria-current"() {
            return t(g);
          },
          children: (c, v) => {
            var d = Re();
            (O(() => X(d, k)), y(c, d));
          },
          $$slots: { default: !0 },
        });
      }
    }
  );
  var b = D(C, 2);
  {
    let w = h(() => e.currentPage === e.totalPages);
    Qe(b, {
      onClick: o,
      get disabled() {
        return t(w);
      },
      sz: "xs",
      variant: "secondary",
      children: (k, x) => {
        var g = Re(">");
        y(k, g);
      },
      $$slots: { default: !0 },
    });
  }
  (O(() => {
    (q(l, 1, Y(t(n))),
      X(f, `Page ${e.currentPage ?? ""} of ${e.totalPages ?? ""}`));
  }),
    y(r, l),
    Be());
}
var Od = V("<span> </span>"),
  Bd = V("<div></div>"),
  Rd = V("<div></div>"),
  jd = V(
    '<div><!> <div class="relative w-full h-10"><div><!></div></div></div>'
  );
function Vd(r, e) {
  Oe(e, !0);
  let a = F(e, "value", 3, 0),
    n = F(e, "indeterminate", 3, !1),
    o = F(e, "sz", 3, "md"),
    i = F(e, "variant", 3, "default"),
    s = F(e, "class", 3, ""),
    l = F(e, "label", 3, ""),
    u = F(e, "disabled", 3, !1),
    f = yt(e, [
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
  const _ = h(() => `${da(a(), 0, 100)}%`),
    C = h(
      () =>
        ({
          xs: "h-[4px]",
          sm: "h-[5px]",
          md: "h-[6px]",
          lg: "h-[7px]",
          xl: "h-[8px]",
        })[o()]
    ),
    b = h(() =>
      i() === "neutral"
        ? "bg-[var(--color-bg-secondary)]"
        : "bg-[var(--color-bg-primary)]"
    ),
    w = h(() =>
      H(
        "relative flex flex-col gap-1 w-full data-[disabled=true]:opacity-[var(--opacity-disabled)] data-[disabled=true]:cursor-not-allowed",
        s()
      )
    ),
    k = h(() =>
      H(
        "absolute top-1/2 -translate-y-1/2 w-full bg-[var(--border-color-default)] rounded overflow-hidden",
        t(C)
      )
    ),
    x = h(() => H("h-full", t(b)));
  var g = jd();
  ht(
    g,
    (L) => ({
      class: t(w),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": L,
      "data-disabled": u() ? "true" : void 0,
      ...f,
    }),
    [() => (n() ? void 0 : Math.round(da(a(), 0, 100)))],
    void 0,
    void 0,
    "svelte-1lu0uwz"
  );
  var c = m(g);
  {
    var v = (L) => {
      var T = Od(),
        G = m(T);
      (O(() => {
        (q(
          T,
          1,
          `text-[var(--color-text-muted)] select-none ${De[o()] ?? ""}`,
          "svelte-1lu0uwz"
        ),
          X(G, l()));
      }),
        y(L, T));
    };
    W(c, (L) => {
      l() && L(v);
    });
  }
  var d = D(c, 2),
    p = m(d),
    S = m(p);
  {
    var P = (L) => {
        var T = Bd();
        (O((G) => q(T, 1, G, "svelte-1lu0uwz"), [() => Y(H(t(x), "pb-indet"))]),
          y(L, T));
      },
      z = (L) => {
        var T = Rd();
        (O(
          (G) => {
            (q(T, 1, G, "svelte-1lu0uwz"), ut(T, `width:${t(_)}`));
          },
          [() => Y(H(t(x), "transition-[width]"))]
        ),
          y(L, T));
      };
    W(S, (L) => {
      n() ? L(P) : L(z, !1);
    });
  }
  (O(() => q(p, 1, Y(t(k)), "svelte-1lu0uwz")), y(r, g), Be());
}
var qd = V("<span> </span>"),
  Ud = Rt("<circle></circle>"),
  Hd = Rt("<circle></circle>"),
  Kd = V("<div> </div>"),
  Gd = V(
    '<div><!> <div class="relative inline-flex items-center justify-center"><svg class="pc-svg svelte-10y2c7k" role="presentation" aria-hidden="true"><g class="pc-rot svelte-10y2c7k"><circle class="pc-track svelte-10y2c7k"></circle><!></g></svg> <!></div></div>'
  );
function Wd(r, e) {
  Oe(e, !0);
  let a = F(e, "value", 3, 0),
    n = F(e, "indeterminate", 3, !1),
    o = F(e, "sz", 3, "md"),
    i = F(e, "variant", 3, "default"),
    s = F(e, "class", 3, ""),
    l = F(e, "label", 3, ""),
    u = F(e, "disabled", 3, !1),
    f = yt(e, [
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
    C = h(() => da(a(), 0, 100)),
    b = h(() => Math.round(t(C))),
    w = h(() => _[o()]),
    k = h(() => t(w).diameter / 2),
    x = h(() => t(k) - t(w).stroke / 2),
    g = h(() => 2 * Math.PI * t(x)),
    c = h(() => ((100 - t(C)) / 100) * t(g)),
    v = h(() => `${t(g)} ${t(g)}`),
    d = h(() => `${t(g) * 0.3} ${t(g)}`),
    p = h(() =>
      i() === "neutral"
        ? "stroke-[var(--color-bg-secondary)]"
        : "stroke-[var(--color-bg-primary)]"
    ),
    S = h(() =>
      H(
        "inline-flex flex-col items-center gap-1 data-[disabled=true]:opacity-[var(--opacity-disabled)] data-[disabled=true]:cursor-not-allowed",
        s()
      )
    );
  var P = Gd();
  ht(
    P,
    () => ({
      class: t(S),
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
    "svelte-10y2c7k"
  );
  var z = m(P);
  {
    var L = (N) => {
      var B = qd(),
        Q = m(B);
      (O(() => {
        (q(
          B,
          1,
          `text-[var(--color-text-muted)] select-none ${De[o()] ?? ""}`,
          "svelte-10y2c7k"
        ),
          X(Q, l()));
      }),
        y(N, B));
    };
    W(z, (N) => {
      l() && N(L);
    });
  }
  var T = D(z, 2),
    G = m(T),
    K = m(G),
    te = m(K),
    ue = D(te);
  {
    var be = (N) => {
        var B = Ud();
        (O(
          (Q) => {
            (q(B, 0, Q, "svelte-10y2c7k"),
              me(B, "cx", t(k)),
              me(B, "cy", t(k)),
              me(B, "r", t(x)),
              me(B, "stroke-width", t(w).stroke),
              me(B, "stroke-dasharray", t(d)));
          },
          [() => Y(H("pc-bar pc-indet", t(p)))]
        ),
          y(N, B));
      },
      J = (N) => {
        var B = Hd();
        (O(
          (Q) => {
            (q(B, 0, Q, "svelte-10y2c7k"),
              me(B, "cx", t(k)),
              me(B, "cy", t(k)),
              me(B, "r", t(x)),
              me(B, "stroke-width", t(w).stroke),
              me(B, "stroke-dasharray", t(v)),
              me(B, "stroke-dashoffset", t(c)));
          },
          [() => Y(H("pc-bar", t(p)))]
        ),
          y(N, B));
      };
    W(ue, (N) => {
      n() ? N(be) : N(J, !1);
    });
  }
  var ee = D(G, 2);
  {
    var le = (N) => {
      var B = Kd(),
        Q = m(B);
      (O(() => {
        (q(
          B,
          1,
          `absolute inset-0 flex items-center justify-center text-[var(--color-text-muted)] font-medium select-none ${De[o()] ?? ""}`,
          "svelte-10y2c7k"
        ),
          X(Q, `${t(b) ?? ""}%`));
      }),
        y(N, B));
    };
    W(ee, (N) => {
      n() || N(le);
    });
  }
  (O(() => {
    (ut(T, `width:${t(w).diameter}px;height:${t(w).diameter}px;`),
      me(G, "viewBox", `0 0 ${t(w).diameter} ${t(w).diameter}`),
      me(te, "cx", t(k)),
      me(te, "cy", t(k)),
      me(te, "r", t(x)),
      me(te, "stroke-width", t(w).stroke));
  }),
    y(r, P),
    Be());
}
var Zd = V("<span><!></span>"),
  Xd = V("<span> </span>"),
  Yd = V(
    '<label><input/> <span aria-hidden="true"><span></span></span> <!></label>'
  );
function uo(r, e) {
  Oe(e, !0);
  const a = [];
  let n = F(e, "sz", 3, "md"),
    o = F(e, "variant", 3, "default"),
    i = F(e, "checked", 15, !1),
    s = F(e, "group", 15, void 0),
    l = F(e, "class", 3, ""),
    u = F(e, "value", 3, "on"),
    f = yt(e, [
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
  const _ = h(() => e.id ?? nn("rd-")),
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
    w = {
      xs: "gap-1.5",
      sm: "gap-2",
      md: "gap-2.5",
      lg: "gap-3",
      xl: "gap-3.5",
    },
    k = h(() =>
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
    c = h(() =>
      o() === "neutral"
        ? "bg-[var(--border-color-strong)]"
        : "bg-[var(--color-bg-primary)]"
    ),
    v = h(() => typeof s() < "u"),
    d = h(() => (t(v) ? s() === u() : i())),
    p = h(() => (t(d) ? "checked" : "unchecked")),
    S = h(() =>
      H("inline-flex items-center cursor-pointer select-none", w[n()], l())
    ),
    P = h(() =>
      H(
        x,
        g,
        C[n()],
        t(d) && t(k).checked,
        !t(d) && t(k).unchecked,
        "peer-disabled:opacity-[var(--opacity-disabled)] peer-disabled:cursor-not-allowed"
      )
    ),
    z = h(() =>
      H(
        "rounded-full transition-transform duration-[var(--transition-fast)] ease-[var(--timing-default)]",
        b[n()],
        t(c),
        t(d) ? "scale-100 opacity-100" : "scale-50 opacity-0"
      )
    ),
    L = h(() =>
      H(
        De[n()],
        "[color:var(--color-text-muted)] font-medium peer-disabled:cursor-not-allowed"
      )
    );
  var T = Yd(),
    G = m(T),
    K = (le) => {
      const N = le.currentTarget.checked;
      (i(N), e.onChange?.(N));
    };
  ht(
    G,
    () => ({
      id: t(_),
      type: "radio",
      value: u(),
      checked: t(d),
      ...f,
      class: "sr-only peer",
      "aria-checked": t(d),
      "aria-describedby": e.describedBy,
      onchange: K,
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0
  );
  var te = D(G, 2),
    ue = m(te),
    be = D(te, 2);
  {
    var J = (le) => {
        var N = Zd(),
          B = m(N);
        (Je(B, () => e.children ?? $), O(() => q(N, 1, Y(t(L)))), y(le, N));
      },
      ee = (le) => {
        var N = Le(),
          B = Ce(N);
        {
          var Q = (R) => {
            var ne = Xd(),
              Z = m(ne);
            (O(() => {
              (q(ne, 1, Y(t(L))), X(Z, e.label));
            }),
              y(R, ne));
          };
          W(
            B,
            (R) => {
              e.label && R(Q);
            },
            !0
          );
        }
        y(le, N);
      };
    W(be, (le) => {
      e.children ? le(J) : le(ee, !1);
    });
  }
  (O(() => {
    (q(T, 1, Y(t(S))),
      me(T, "for", t(_)),
      me(te, "data-state", t(p)),
      q(te, 1, Y(t(P))),
      q(ue, 1, Y(t(z))));
  }),
    zu(a, [], G, () => (u(), s()), s),
    y(r, T),
    Be());
}
var Jd = V('<div class="flex justify-end mt-1"><div> </div></div>'),
  $d = V(
    '<div><div class="relative flex items-center w-full h-10"><div><div></div></div> <input type="range" aria-label="slider"/></div> <!></div>'
  );
function Qd(r, e) {
  Oe(e, !0);
  let a = F(e, "value", 15, 0),
    n = F(e, "min", 3, 0),
    o = F(e, "max", 3, 100),
    i = F(e, "step", 3, 1),
    s = F(e, "sz", 3, "md"),
    l = F(e, "variant", 3, "default"),
    u = F(e, "disabled", 3, !1),
    f = F(e, "showValue", 3, !1),
    _ = F(e, "class", 3, ""),
    C = yt(e, [
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
  const b = h(
      () =>
        ({
          xs: "h-[4px]",
          sm: "h-[5px]",
          md: "h-[6px]",
          lg: "h-[7px]",
          xl: "h-[8px]",
        })[s()]
    ),
    w = h(
      () =>
        ({
          xs: "[&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3",
          sm: "[&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4",
          md: "[&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5",
          lg: "[&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6",
          xl: "[&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7",
        })[s()]
    ),
    k = h(() =>
      l() === "neutral"
        ? "bg-[var(--color-bg-secondary)]"
        : "bg-[var(--color-bg-primary)]"
    ),
    x = h(() =>
      l() === "neutral"
        ? "[&::-webkit-slider-thumb]:bg-[var(--color-bg-secondary)] [&::-moz-range-thumb]:bg-[var(--color-bg-secondary)]"
        : "[&::-webkit-slider-thumb]:bg-[var(--color-bg-primary)] [&::-moz-range-thumb]:bg-[var(--color-bg-primary)]"
    ),
    g = h(() => da(((a() - n()) / Math.max(1e-12, o() - n())) * 100, 0, 100)),
    c = h(() =>
      H(
        "relative w-full data-[disabled=true]:opacity-[var(--opacity-disabled)]",
        u() ? "cursor-not-allowed" : "cursor-pointer",
        _()
      )
    ),
    v = h(() =>
      H(
        "absolute top-1/2 -translate-y-1/2 w-full bg-[var(--color-bg-muted)] rounded overflow-hidden",
        t(b)
      )
    ),
    d =
      "relative z-10 w-full h-10 bg-transparent appearance-none cursor-pointer disabled:cursor-not-allowed [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-[var(--radius-full)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--color-bg-surface)] [&::-webkit-slider-thumb]:shadow-[var(--shadow-color)] [&::-moz-range-thumb]:rounded-[var(--radius-full)] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--color-bg-surface)] [&::-moz-range-thumb]:shadow-[var(--shadow-color)] hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-125 hover:[&::-moz-range-thumb]:scale-110 active:[&::-moz-range-thumb]:scale-125 focus:outline-none focus-visible:outline-none focus-visible:[&::-webkit-slider-thumb]:shadow-[0_0_0_3px_var(--border-color-focus)] focus-visible:[&::-moz-range-thumb]:shadow-[0_0_0_3px_var(--border-color-focus)] disabled:hover:[&::-webkit-slider-thumb]:scale-100 disabled:active:[&::-webkit-slider-thumb]:scale-100 disabled:hover:[&::-moz-range-thumb]:scale-100 disabled:active:[&::-moz-range-thumb]:scale-100",
    p = h(() => H(d, t(w), t(x)));
  function S(N) {
    const B = i() || 1,
      Q = Math.round((N - n()) / B),
      R = n() + Q * B;
    return da(Number(R.toFixed(6)), n(), o());
  }
  let P;
  function z(N) {
    const B = P.getBoundingClientRect(),
      Q = da((N - B.left) / B.width, 0, 1);
    (a(S(n() + Q * (o() - n()))), e.onInput?.(a()));
  }
  function L(N) {
    u() || z(N.clientX);
  }
  function T(N) {
    const B = N.currentTarget;
    (a(S(Number(B.value))), e.onInput?.(a()));
  }
  function G(N) {
    if (u()) return;
    const B = o() - n(),
      Q = Math.max(i() || 1, Math.round(B / 10));
    let R = a();
    switch (N.key) {
      case "ArrowLeft":
      case "ArrowDown":
        R = a() - (i() || 1);
        break;
      case "ArrowRight":
      case "ArrowUp":
        R = a() + (i() || 1);
        break;
      case "PageDown":
        R = a() - Q;
        break;
      case "PageUp":
        R = a() + Q;
        break;
      case "Home":
        R = n();
        break;
      case "End":
        R = o();
        break;
      default:
        return;
    }
    (a(S(R)), e.onInput?.(a()), N.preventDefault());
  }
  var K = $d();
  ht(K, () => ({
    class: t(c),
    onclick: L,
    "data-disabled": u() ? "true" : void 0,
    ...C,
  }));
  var te = m(K),
    ue = m(te),
    be = m(ue),
    J = D(ue, 2);
  ((J.__input = T), (J.__keydown = G));
  var ee = D(te, 2);
  {
    var le = (N) => {
      var B = Jd(),
        Q = m(B),
        R = m(Q);
      (O(() => {
        (q(
          Q,
          1,
          `font-[var(--font-mono)] text-[var(--color-text-muted)] select-none ${De[s()] ?? ""}`
        ),
          X(R, a()));
      }),
        y(N, B));
    };
    W(ee, (N) => {
      f() && N(le);
    });
  }
  (ot(
    K,
    (N) => (P = N),
    () => P
  ),
    O(
      (N) => {
        (q(ue, 1, Y(t(v))),
          q(be, 1, N),
          ut(be, `width:${t(g)}%`),
          q(J, 1, Y(t(p))),
          me(J, "min", n()),
          me(J, "max", o()),
          me(J, "step", i()),
          bs(J, a()),
          (J.disabled = u()),
          me(J, "aria-valuemin", n()),
          me(J, "aria-valuemax", o()),
          me(J, "aria-valuenow", a()));
      },
      [() => Y(H("w-full h-full transition-[width]", t(k)))]
    ),
    y(r, K),
    Be());
}
it(["input", "keydown"]);
var ef = V(
    '<div class="overflow-auto min-w-0 min-h-0"><!></div> <div class="touch-none select-none z-10 cursor-col-resize bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-hover)] transition-colors"></div> <div class="overflow-auto min-w-0 min-h-0 flex-1"><!></div>',
    1
  ),
  tf = V(
    '<div class="overflow-auto min-w-0 min-h-0"><!></div> <div class="touch-none select-none z-10 cursor-row-resize bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-hover)] transition-colors"></div> <div class="overflow-auto min-w-0 min-h-0"><!></div>',
    1
  ),
  rf = V("<div><!></div>");
function pi(r, e) {
  Oe(e, !0);
  let a = F(e, "direction", 3, "horizontal"),
    n = F(e, "initialSize", 3, 30),
    o = F(e, "dividerSize", 3, 4),
    i = F(e, "minSize", 3, 10),
    s = F(e, "maxSize", 3, 90),
    l,
    u = h(n),
    f = he(!1),
    _ = 0,
    C = 0,
    b = 0;
  function w() {
    return l ? (a() === "horizontal" ? l.offsetWidth : l.offsetHeight) : 0;
  }
  function k(P) {
    (A(f, !0),
      (_ = t(u)),
      (C = a() === "horizontal" ? P.clientX : P.clientY),
      (b = w()),
      document.addEventListener("pointermove", x),
      document.addEventListener("pointerup", g),
      document.addEventListener("pointercancel", g),
      P.preventDefault(),
      P.stopPropagation());
  }
  function x(P) {
    if (!t(f)) return;
    const T = (((a() === "horizontal" ? P.clientX : P.clientY) - C) / b) * 100,
      G = _ + T;
    (A(u, Math.max(i(), Math.min(s(), G))),
      P.preventDefault(),
      P.stopPropagation());
  }
  function g() {
    (A(f, !1),
      document.removeEventListener("pointermove", x),
      document.removeEventListener("pointerup", g),
      document.removeEventListener("pointercancel", g));
  }
  We(() => {
    const P = () => {
      b = w();
    };
    return (
      window.addEventListener("resize", P),
      () => window.removeEventListener("resize", P)
    );
  });
  var c = rf();
  let v;
  var d = m(c);
  {
    var p = (P) => {
        var z = ef(),
          L = Ce(z),
          T = m(L);
        Je(T, () => e.first ?? $);
        var G = D(L, 2);
        G.__pointerdown = k;
        var K = D(G, 2),
          te = m(K);
        (Je(te, () => e.second ?? $),
          O(() => {
            (ut(L, `width: ${t(u) ?? ""}%`), ut(G, `width: ${o() ?? ""}px`));
          }),
          y(P, z));
      },
      S = (P) => {
        var z = tf(),
          L = Ce(z),
          T = m(L);
        Je(T, () => e.first ?? $);
        var G = D(L, 2);
        G.__pointerdown = k;
        var K = D(G, 2),
          te = m(K);
        (Je(te, () => e.second ?? $),
          O(() => {
            (ut(L, `height: ${t(u) ?? ""}%`),
              ut(G, `height: ${o() ?? ""}px`),
              ut(K, `height: calc(100% - ${t(u) ?? ""}% - ${o() ?? ""}px)`));
          }),
          y(P, z));
      };
    W(d, (P) => {
      a() === "horizontal" ? P(p) : P(S, !1);
    });
  }
  (ot(
    c,
    (P) => (l = P),
    () => l
  ),
    O(
      () =>
        (v = q(c, 1, "w-full h-full overflow-hidden", null, v, {
          flex: a() === "horizontal",
          "flex-col": a() === "vertical",
        }))
    ),
    y(r, c),
    Be());
}
it(["pointerdown"]);
var af = V("<span> </span>"),
  nf = V("<span> </span>"),
  of = V("<span> </span>"),
  sf = V(
    '<label><!> <div class="inline-flex items-center gap-2"><!> <input/> <button type="button"><span></span></button> <!></div></label>'
  );
function Cs(r, e) {
  Oe(e, !0);
  let a = F(e, "sz", 3, "md"),
    n = F(e, "checked", 15, !1),
    o = F(e, "class", 3, ""),
    i = yt(e, [
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
  const s = h(() => e.id ?? nn("sw-")),
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
    _ = h(() => ("disabled" in i ? !!e.disabled : !1));
  function C() {
    t(_) || (n(!n()), e.onChange?.(n()));
  }
  const b = h(() => (n() ? "justify-end" : "justify-start")),
    w = h(() =>
      H(
        "relative inline-flex items-center rounded-full border transition focus:outline-none focus:ring-2 focus:ring-[var(--border-color-focus)]",
        l[a()],
        f[a()],
        n()
          ? "bg-[var(--color-bg-primary)] border-[var(--color-bg-primary)]"
          : "bg-[var(--color-bg-muted)] border-[var(--border-color-default)]",
        t(_)
          ? "opacity-[var(--opacity-disabled)] cursor-not-allowed"
          : "cursor-pointer",
        t(b)
      )
    ),
    k = h(() => H("inline-flex flex-col items-center gap-1 select-none", o())),
    x = h(() =>
      H(
        u[a()],
        "rounded-full bg-white border border-[var(--border-color-default)] shadow-sm"
      )
    );
  var g = sf(),
    c = m(g);
  {
    var v = (te) => {
      var ue = af(),
        be = m(ue);
      (O(() => {
        (q(ue, 1, `text-[var(--color-text-muted)] ${De[a()] ?? ""}`),
          X(be, e.topLabel));
      }),
        y(te, ue));
    };
    W(c, (te) => {
      e.topLabel && te(v);
    });
  }
  var d = D(c, 2),
    p = m(d);
  {
    var S = (te) => {
      var ue = nf(),
        be = m(ue);
      (O(() => {
        (q(ue, 1, `text-[var(--color-text-muted)] ${De[a()] ?? ""}`),
          X(be, e.leftLabel));
      }),
        y(te, ue));
    };
    W(p, (te) => {
      e.leftLabel && te(S);
    });
  }
  var P = D(p, 2),
    z = () => C();
  ht(
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
      onchange: z,
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0
  );
  var L = D(P, 2);
  L.__click = C;
  var T = m(L),
    G = D(L, 2);
  {
    var K = (te) => {
      var ue = of(),
        be = m(ue);
      (O(() => {
        (q(ue, 1, `text-[var(--color-text-muted)] ${De[a()] ?? ""}`),
          X(be, e.rightLabel));
      }),
        y(te, ue));
    };
    W(G, (te) => {
      e.rightLabel && te(K);
    });
  }
  (O(() => {
    (q(g, 1, Y(t(k))),
      me(g, "for", t(s)),
      q(L, 1, Y(t(w))),
      me(L, "aria-pressed", n()),
      me(
        L,
        "aria-label",
        typeof i["aria-label"] == "string" ? i["aria-label"] : "Switch"
      ),
      (L.disabled = t(_)),
      q(T, 1, Y(t(x))));
  }),
    y(r, g),
    Be());
}
it(["click"]);
var lf = V(
    '<th scope="col"><button type="button" class="flex items-center gap-2 select-none hover:bg-[var(--color-bg-hover)] rounded-none px-1 py-0.5 border border-transparent focus-visible:border-[var(--border-color-focus)] focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus-visible:outline-none"><span class="truncate min-w-0 text-left"> </span> <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5.23 11.77a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L10 8.31l-3.77 3.46a.75.75 0 0 1-1 0z" fill="currentColor"></path></svg></button></th>'
  ),
  uf = V("<tr></tr>"),
  cf = V("<td><div> </div></td>"),
  df = V("<tr></tr>"),
  ff = V('<div class="mt-3 flex justify-between items-center"><!></div>'),
  vf = V("<div><table><thead><!></thead><tbody></tbody></table> <!></div>");
function gf(r, e) {
  Oe(e, !0);
  let a = F(e, "columns", 19, () => []),
    n = F(e, "rows", 19, () => []),
    o = F(e, "class", 3, ""),
    i = F(e, "variant", 3, "default"),
    s = F(e, "stickyHeader", 3, !1),
    l = F(e, "sz", 3, "md"),
    u = he(null),
    f = he(null);
  function _(J) {
    const ee = J.key;
    t(u) !== ee
      ? (A(u, ee, !0), A(f, "asc"))
      : A(f, t(f) === "asc" ? "desc" : "asc", !0);
  }
  function C(J, ee) {
    const le = J == null || J === "",
      N = ee == null || ee === "";
    if (le && N) return 0;
    if (le) return 1;
    if (N) return -1;
    const B = Number(J),
      Q = Number(ee),
      R = !Number.isNaN(B),
      ne = !Number.isNaN(Q);
    return R && ne
      ? B - Q
      : String(J).localeCompare(String(ee), void 0, {
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
    w = h(() => {
      const J = Array.isArray(n()) ? n() : [];
      if (!t(u) || !t(f)) return J;
      const ee = t(u),
        le = J.map((N, B) => [N, B]);
      return (
        le.sort(([N, B], [Q, R]) => {
          const ne = C(N[ee], Q[ee]);
          return ne !== 0 ? (t(f) === "asc" ? ne : -ne) : B - R;
        }),
        le.map(([N]) => N)
      );
    }),
    k = (J) =>
      J === "end" ? "text-right" : J === "start" ? "text-left" : "text-center",
    x = h(() => H("overflow-x-auto", o())),
    g = h(() => De[l()]),
    c = h(i),
    v = h(() => t(c) === "list" || t(c) === "dense"),
    d = h(() => b[t(c)] ?? b.default),
    p = h(() =>
      H(
        t(v) ? "inline-table w-fit" : "min-w-full",
        "border-collapse",
        t(d).table,
        t(g),
        "text-[var(--color-text-default)]"
      )
    ),
    S = (J, ee) => {
      const le =
        typeof J.id == "string" || typeof J.id == "number"
          ? J.id
          : typeof J.key == "string" || typeof J.key == "number"
            ? J.key
            : ee;
      return String(le);
    },
    P = (J, ee) => String(J.key ?? ee);
  var z = vf(),
    L = m(z),
    T = m(L),
    G = m(T);
  {
    var K = (J) => {
      var ee = uf();
      (at(
        ee,
        23,
        a,
        (le, N) => P(le, N),
        (le, N) => {
          var B = lf(),
            Q = m(B);
          ((Q.__click = () => _(t(N))),
            (Q.__keydown = (re) => {
              (re.key === "Enter" || re.key === " ") &&
                (re.preventDefault(), _(t(N)));
            }));
          var R = m(Q),
            ne = m(R),
            Z = D(R, 2);
          (O(
            (re, se) => {
              (ut(B, !t(v) && t(N).width ? `width:${t(N).width}` : void 0),
                q(B, 1, re),
                me(
                  B,
                  "aria-sort",
                  t(u) === t(N).key
                    ? t(f) === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                ),
                me(Q, "aria-label", `Sort by ${t(N).label}`),
                X(ne, t(N).label),
                q(Z, 0, se));
            },
            [
              () => Y(H("px-3 font-semibold", t(d).padY, k(t(N).align))),
              () =>
                Y(
                  H(
                    "h-4 w-4 opacity-60 transition-transform",
                    t(u) === t(N).key && t(f) === "desc" && "rotate-180"
                  )
                ),
            ]
          ),
            y(le, B));
        }
      ),
        O((le) => q(ee, 1, le), [() => Y(H(s() && "sticky top-0 z-10"))]),
        y(J, ee));
    };
    W(G, (J) => {
      t(c) !== "noTitle" && t(c) !== "list" && J(K);
    });
  }
  var te = D(T);
  at(
    te,
    23,
    () => t(w),
    (J, ee) => S(J, ee),
    (J, ee) => {
      var le = df();
      (at(
        le,
        23,
        a,
        (N, B) => P(N, B),
        (N, B) => {
          var Q = cf(),
            R = m(Q),
            ne = m(R);
          (O(
            (Z, re) => {
              (ut(Q, !t(v) && t(B).width ? `width:${t(B).width}` : void 0),
                q(Q, 1, Z),
                q(R, 1, re),
                X(ne, t(ee)[t(B).key]));
            },
            [
              () => Y(H("px-3", t(d).padY, k(t(B).align), t(d).cell)),
              () => Y(H(t(v) && "break-words whitespace-normal")),
            ]
          ),
            y(N, Q));
        }
      ),
        O(
          (N) => q(le, 1, N),
          [() => Y(H("first:[&>td]:border-t-0", t(d).row))]
        ),
        y(J, le));
    }
  );
  var ue = D(L, 2);
  {
    var be = (J) => {
      var ee = ff(),
        le = m(ee);
      (ks(
        le,
        Bu(() => e.pagination)
      ),
        y(J, ee));
    };
    W(ue, (J) => {
      e.pagination && e.pagination.totalPages > 0 && J(be);
    });
  }
  (O(() => {
    (q(z, 1, Y(t(x))),
      q(L, 1, Y(t(p))),
      q(T, 1, Y(t(d).header)),
      q(te, 1, Y(t(d).body)));
  }),
    y(r, z),
    Be());
}
it(["click", "keydown"]);
var pf = V('<button type="button" role="tab"><span> </span></button>'),
  bf = V(
    '<div><div role="tablist" tabindex="0" aria-orientation="horizontal"></div> <div role="tabpanel" tabindex="0" class="w-full min-w-0 relative z-0 border-t border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-[var(--spacing-md)] rounded-b-[var(--radius-sm)] shadow-[0_1px_2px_0_var(--shadow-color)]"><!></div></div>'
  );
function hf(r, e) {
  Oe(e, !0);
  let a = F(e, "tabs", 19, () => []),
    n = F(e, "activeTab", 7, ""),
    o = F(e, "sz", 3, "md"),
    i = F(e, "variant", 3, "default"),
    s = F(e, "fitted", 3, !1),
    l = F(e, "class", 3, ""),
    u = yt(e, [
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
  function _(p) {
    const S = a().filter((T) => !T.disabled);
    if (!S.length) return;
    const P = Math.max(
      0,
      S.findIndex((T) => T.id === n())
    );
    let z = P;
    if (p.key === "ArrowRight") z = (P + 1) % S.length;
    else if (p.key === "ArrowLeft") z = (P - 1 + S.length) % S.length;
    else if (p.key === "Home") z = 0;
    else if (p.key === "End") z = S.length - 1;
    else return;
    p.preventDefault();
    const L = S[z].id;
    (n(L),
      e.onChange?.(L),
      queueMicrotask(() => {
        document.getElementById(`tab-${L}`)?.focus();
      }));
  }
  const C = {
      xs: "px-2 py-1",
      sm: "px-3 py-1.5",
      md: "px-4 py-2",
      lg: "px-5 py-2.5",
      xl: "px-6 py-3",
    },
    b =
      "inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--border-color-focus)] focus-visible:outline-offset-2 disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
    w = h(() => ({
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
    k = h(() => H("w-full self-stretch flex flex-col", De[o()], l())),
    x = h(() =>
      H(
        "flex w-full flex-nowrap overflow-x-auto whitespace-nowrap relative z-10 bg-[var(--color-bg-surface)]",
        De[o()],
        i() === "pills" && "gap-1",
        i() === "underline" && "gap-6",
        s() ? "justify-between" : "justify-start"
      )
    );
  var g = bf();
  ht(g, () => ({ class: t(k), ...u }));
  var c = m(g);
  ((c.__keydown = _),
    at(
      c,
      21,
      a,
      (p) => p.id,
      (p, S) => {
        var P = pf();
        ((P.__click = () => f(t(S))),
          (P.__keydown = (T) => {
            (T.key === "Enter" || T.key === " ") &&
              (T.preventDefault(), f(t(S)));
          }));
        var z = m(P),
          L = m(z);
        (O(
          (T) => {
            (me(P, "id", `tab-${t(S).id}`),
              me(P, "aria-selected", t(S).id === n() ? "true" : "false"),
              me(P, "aria-controls", `panel-${t(S).id}`),
              me(P, "aria-disabled", t(S).disabled ? "true" : "false"),
              me(P, "tabindex", t(S).id === n() ? 0 : -1),
              (P.disabled = t(S).disabled),
              q(P, 1, T),
              X(L, t(S).label));
          },
          [
            () =>
              Y(
                H(
                  "relative z-20",
                  b,
                  C[o()],
                  De[o()],
                  s() ? "basis-0 grow flex-1 min-w-0 text-center" : "shrink-0",
                  t(w)[i()]?.base,
                  t(S).id === n()
                    ? t(w)[i()]?.active
                    : t(S).disabled
                      ? ""
                      : t(w)[i()]?.hover
                )
              ),
          ]
        ),
          y(p, P));
      }
    ));
  var v = D(c, 2),
    d = m(v);
  (Je(d, () => e.children ?? $),
    O(() => {
      (q(c, 1, Y(t(x))),
        me(v, "id", `panel-${n()}`),
        me(v, "aria-labelledby", `tab-${n()}`));
    }),
    y(r, g),
    Be());
}
it(["keydown", "click"]);
var mf = Rt(
    '<svg class="w-[1em] h-[1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4" fill="currentColor"></circle><line x1="12" y1="1" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line></svg>'
  ),
  _f =
    Rt(`<svg class="w-[1em] h-[1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2
       A9 9 0 1 0 21 12
       A7.5 7.5 0 1 1 12 2
       Z" fill="currentColor"></path></svg>`),
  xf = V("<button><!></button>");
function bi(r, e) {
  Oe(e, !0);
  let a = F(e, "class", 3, ""),
    n = F(e, "sz", 3, "md"),
    o = F(e, "type", 3, "button"),
    i = yt(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "disabled",
      "class",
      "sz",
      "type",
    ]);
  const s = "theme-toggle:dark",
    l = si.get(s, !1);
  let u = he(Ye(l));
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
    b = h(() => H(a() ? null : C, f, _[n()], De[n()], a()));
  We(() => {
    (document.documentElement.classList.toggle("dark", t(u)), si.set(s, t(u)));
  });
  var w = xf(),
    k = () => A(u, !t(u));
  ht(w, () => ({
    type: o(),
    disabled: e.disabled,
    class: t(b),
    onclick: k,
    "aria-label": t(u) ? "Switch to light mode" : "Switch to dark mode",
    ...i,
  }));
  var x = m(w);
  {
    var g = (v) => {
        var d = mf();
        y(v, d);
      },
      c = (v) => {
        var d = _f();
        y(v, d);
      };
    W(x, (v) => {
      t(u) ? v(g) : v(c, !1);
    });
  }
  (y(r, w), Be());
}
var wf = V("<!> <!>", 1),
  yf = V(
    '<div><div class="text-sm font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex items-start gap-4"><div class="flex flex-wrap gap-3 min-w-[0]"><!> <!></div> <div class="flex items-center gap-3 pt-6"><!> <!></div></div> <div class="mt-4 p-4 bg-[var(--color-bg-surface)] text-center"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div></div>'
  );
function kf(r, e) {
  Oe(e, !0);
  let a = F(e, "value", 15, null),
    n = F(e, "step", 3, 60),
    o = F(e, "disabled", 3, !1),
    i = F(e, "clearable", 3, !0),
    s = F(e, "initialSystem", 3, "iso"),
    l = F(e, "class", 3, ""),
    u = yt(e, [
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
  const f = Zt("lang") ?? null,
    _ = h(() => f?.value ?? "en"),
    C = h(() => sn[t(_)].components.timePicker),
    b = h(() => e.label ?? t(C).text),
    w = h(() => e.placeholder ?? t(C).placeholder),
    k = h(() => H("inline-block w-full", l()));
  let x = h(s),
    g = he("00"),
    c = he("00"),
    v = he("AM");
  const d = h(() => a() != null),
    p = Array.from({ length: 24 }, (ve, Se) => {
      const M = Se.toString().padStart(2, "0");
      return { value: M, label: M };
    }),
    S = Array.from({ length: 12 }, (ve, Se) => {
      const M = (Se + 1).toString().padStart(2, "0");
      return { value: M, label: M };
    }),
    P = [
      { value: "AM", label: "AM" },
      { value: "PM", label: "PM" },
    ],
    z = h(() =>
      !n() || n() <= 0 ? 1 : Math.min(60, Math.max(1, Math.round(n() / 60)))
    ),
    L = h(() => {
      const ve = [];
      for (let Se = 0; Se < 60; Se += t(z)) {
        const M = Se.toString().padStart(2, "0");
        ve.push({ value: M, label: M });
      }
      return ve;
    });
  function T(ve) {
    return ve.padStart(2, "0").slice(-2);
  }
  function G() {
    const ve =
      t(x) === "english" ? `${t(g)}:${t(c)} ${t(v)}` : `${t(g)}:${t(c)}`;
    (a(ve), e.onChange?.(ve));
  }
  function K(ve) {
    (A(g, T(ve), !0), G());
  }
  function te(ve) {
    (A(c, T(ve), !0), G());
  }
  function ue(ve) {
    (A(g, T(ve), !0), G());
  }
  function be(ve) {
    (A(v, ve === "AM" || ve === "PM" ? ve : "AM", !0), G());
  }
  function J() {
    o() ||
      (t(x) === "iso"
        ? (A(x, "english"), parseInt(t(g), 10) >= 0 && A(g, "12"), be("AM"))
        : A(x, "iso"),
      G());
  }
  function ee() {
    i() && (A(g, "00"), A(c, "00"), A(v, "AM"), a(null), e.onChange?.(null));
  }
  We(() => {
    if (a() == null) return;
    let ve = a();
    (ve.includes("AM") || ve.includes("PM")) &&
      (ve = ve.replace(" AM", "").replace(" PM", ""));
    const [Se, M] = ve.split(":");
    (A(g, T(Se), !0), A(c, T(M), !0));
  });
  var le = yf();
  ht(le, () => ({ class: t(k), ...u }));
  var N = m(le),
    B = m(N),
    Q = D(N, 2),
    R = m(Q),
    ne = m(R);
  {
    var Z = (ve) => {
        Kt(ve, {
          get label() {
            return t(C).hour;
          },
          get options() {
            return p;
          },
          get value() {
            return t(g);
          },
          onChange: K,
          get disabled() {
            return o();
          },
          sz: "sm",
        });
      },
      re = (ve) => {
        var Se = wf(),
          M = Ce(Se);
        Kt(M, {
          get label() {
            return t(C).hour;
          },
          get options() {
            return S;
          },
          get value() {
            return t(g);
          },
          onChange: ue,
          get disabled() {
            return o();
          },
          sz: "sm",
        });
        var ae = D(M, 2);
        (Kt(ae, {
          get label() {
            return t(C).period;
          },
          get options() {
            return P;
          },
          get value() {
            return t(v);
          },
          onChange: be,
          get disabled() {
            return o();
          },
          sz: "sm",
        }),
          y(ve, Se));
      };
    W(ne, (ve) => {
      t(x) === "iso" ? ve(Z) : ve(re, !1);
    });
  }
  var se = D(ne, 2);
  Kt(se, {
    get label() {
      return t(C).minute;
    },
    get options() {
      return t(L);
    },
    get value() {
      return t(c);
    },
    onChange: te,
    get disabled() {
      return o();
    },
    sz: "sm",
  });
  var _e = D(R, 2),
    I = m(_e);
  Qe(I, {
    onClick: J,
    get disabled() {
      return o();
    },
    sz: "xs",
    children: (ve, Se) => {
      var M = Re();
      (O(() => X(M, t(x) === "iso" ? t(C).switchTo12h : t(C).switchTo24h)),
        y(ve, M));
    },
    $$slots: { default: !0 },
  });
  var E = D(I, 2);
  {
    var oe = (ve) => {
      {
        let Se = h(() => !t(d) || o());
        Qe(ve, {
          onClick: ee,
          variant: "danger",
          get disabled() {
            return t(Se);
          },
          sz: "xs",
          children: (M, ae) => {
            var ie = Re();
            (O(() => X(ie, t(C).clear)), y(M, ie));
          },
          $$slots: { default: !0 },
        });
      }
    };
    W(E, (ve) => {
      i() && ve(oe);
    });
  }
  var j = D(Q, 2),
    de = m(j),
    fe = m(de),
    ge = D(de, 2),
    Ae = m(ge);
  {
    var Pe = (ve) => {
        var Se = Re();
        (O(() => X(Se, a())), y(ve, Se));
      },
      ze = (ve) => {
        var Se = Re();
        (O(() => X(Se, t(w))), y(ve, Se));
      };
    W(Ae, (ve) => {
      t(d) ? ve(Pe) : ve(ze, !1);
    });
  }
  (O(() => {
    (X(B, t(b)), X(fe, t(C).selectedTime));
  }),
    y(r, le),
    Be());
}
var Cf = V('<div role="tooltip"> </div>'),
  Sf = V("<div><!> <!></div>");
function Dt(r, e) {
  Oe(e, !0);
  let a = F(e, "position", 3, "top"),
    n = F(e, "delay", 3, 300),
    o = F(e, "open", 3, !1),
    i = F(e, "text", 3, ""),
    s = F(e, "class", 3, ""),
    l = yt(e, [
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
    u = he(!1),
    f = he(!1),
    _ = he(!1),
    C;
  const b = h(() => o() || t(f) || t(_));
  We(
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
    )
  );
  const w = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
    },
    k = h(() => H("relative inline-block", s())),
    x = h(() =>
      H(
        "absolute z-20 p-0.5 italic text-xs font-medium whitespace-nowrap rounded-[var(--radius-xs)]",
        "bg-[var(--color-bg-surface)] text-[var(--color-text-default)] shadow-lg border border-[var(--border-color-default)]",
        "transition-opacity duration-150 ease-linear",
        t(u) ? "opacity-100" : "opacity-0 pointer-events-none"
      )
    );
  var g = Sf(),
    c = () => A(f, !0),
    v = () => A(f, !1),
    d = () => A(_, !0),
    p = () => A(_, !1);
  ht(g, () => ({
    class: t(k),
    onmouseenter: c,
    onmouseleave: v,
    onfocus: d,
    onblur: p,
    ...l,
  }));
  var S = m(g);
  Je(S, () => e.children ?? $);
  var P = D(S, 2);
  {
    var z = (L) => {
      var T = Cf(),
        G = m(T);
      (O(
        (K) => {
          (q(T, 1, K), X(G, i()));
        },
        [() => Y(H(t(x), w[a()]))]
      ),
        y(L, T));
    };
    W(P, (L) => {
      i() && t(u) && L(z);
    });
  }
  (y(r, g), Be());
}
const Pf = {
    app: {
      version: "v1.0.8",
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
  Ef = {
    app: {
      version: "v1.0.8",
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
  zf = {
    app: {
      version: "v1.0.8",
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
  wa = { en: Pf, ru: Ef, es: zf };
var Af = V(
  '<header class="flex items-end justify-between gap-4 -mx-5 px-5 py-5 border-b border-[var(--border-color-default)]"><h2 class="text-2xl font-semibold tracking-tight"> </h2> <span class="text-sm [color:var(--color-text-muted)]"> </span></header> <div class="p-5 space-y-4 text-sm opacity-90 leading-relaxed"><p><strong> </strong> <strong> </strong> <strong> </strong> </p> <p> <code> </code> <code> </code> </p> <p> </p> <p> <strong> </strong><br/> <a><strong> </strong></a></p></div>',
  1
);
function Ff(r, e) {
  Oe(e, !0);
  const a = Zt("lang"),
    n = h(() => wa[a.value]);
  (on(r, {
    children: (o, i) => {
      var s = Af(),
        l = Ce(s),
        u = m(l),
        f = m(u),
        _ = D(u, 2),
        C = m(_),
        b = D(l, 2),
        w = m(b),
        k = m(w),
        x = m(k),
        g = D(k),
        c = D(g),
        v = m(c),
        d = D(c),
        p = D(d),
        S = m(p),
        P = D(p),
        z = D(w, 2),
        L = m(z),
        T = D(L),
        G = m(T),
        K = D(T),
        te = D(K),
        ue = m(te),
        be = D(te),
        J = D(z, 2),
        ee = m(J),
        le = D(J, 2),
        N = m(le),
        B = D(N),
        Q = m(B),
        R = D(B, 2),
        ne = D(R),
        Z = m(ne),
        re = m(Z);
      (O(() => {
        (X(f, t(n).about.heading),
          X(C, t(n).about.meta),
          X(x, t(n).app.title),
          X(g, `${t(n).about.intro.description ?? ""} `),
          X(v, t(n).about.intro.frameworks.runes),
          X(d, ` ${t(n).about.intro.connector ?? ""} `),
          X(S, t(n).about.intro.frameworks.tailwind),
          X(P, ` ${t(n).about.intro.closing ?? ""}`),
          X(L, `${t(n).about.styling.beforeFile ?? ""} `),
          X(G, t(n).about.styling.file),
          X(K, `${t(n).about.styling.afterFile ?? ""} `),
          X(ue, t(n).about.styling.darkClass),
          X(be, ` ${t(n).about.styling.afterDark ?? ""}`),
          X(ee, t(n).about.patterns),
          X(N, `${t(n).about.versionLabel ?? ""}: `),
          X(Q, t(n).app.version),
          X(R, ` ${t(n).about.authorLabel ?? ""}: `),
          me(ne, "href", t(n).app.authorUrl),
          X(re, t(n).about.authorName));
      }),
        y(o, s));
    },
    $$slots: { default: !0 },
  }),
    Be());
}
var Tf = V(
  '<div><div class="flex flex-wrap items-baseline gap-3"><div class="shrink-0"><!></div> <!></div> <!></div>'
);
function Lf(r, e) {
  Oe(e, !0);
  let a = F(e, "class", 3, "");
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
  let s = he("html"),
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
    u = he(""),
    f = he(!1);
  const _ = h(() => l[t(s)]),
    C = h(() => t(u).trimStart());
  We(() => {
    t(_) !== t(u) && A(u, t(_), !0);
  });
  var b = Tf(),
    w = m(b),
    k = m(w),
    x = m(k);
  Kt(x, {
    label: "Language",
    get options() {
      return n;
    },
    onChange: (v) => A(s, v, !0),
    class: "min-w-[6rem]",
    sz: "xs",
    get value() {
      return t(s);
    },
    set value(v) {
      A(s, v, !0);
    },
  });
  var g = D(k, 2);
  Cs(g, {
    topLabel: "Editable",
    onChange: (v) => A(f, v, !0),
    sz: "xs",
    get checked() {
      return t(f);
    },
    set checked(v) {
      A(f, v, !0);
    },
  });
  var c = D(w, 2);
  (ws(c, {
    get code() {
      return t(C);
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
    O(() => q(b, 1, `w-full flex flex-col gap-3 ${a() ?? ""}`)),
    y(r, b),
    Be());
}
var Mf = V('<header class="p-[var(--spacing-md,1rem)]"><!></header>'),
  Df = V(
    '<aside class="hidden lg:block p-[var(--spacing-md,1rem)]"><!></aside>'
  ),
  Nf = V(
    '<aside class="hidden lg:block p-[var(--spacing-md,1rem)]"><!></aside>'
  ),
  If = V('<footer class="p-[var(--spacing-md,1rem)]"><!></footer>'),
  Of = V(
    '<div><div class="grid min-h-dvh grid-rows-[auto_1fr_auto]"><!> <!> <main class="p-[var(--spacing-md,1rem)]"><!></main> <!> <!></div></div>'
  );
function Bf(r, e) {
  Oe(e, !0);
  let a = F(e, "class", 3, "");
  const n =
      "min-h-dvh w-full bg-[var(--color-bg-page,oklch(98%_0_0))] text-[var(--color-text-default,oklch(15%_0_0))] transition-colors duration-[var(--transition-normal,300ms)]",
    o = h(() => H(n, a()));
  var i = Of(),
    s = m(i),
    l = m(s);
  {
    var u = (c) => {
      var v = Mf(),
        d = m(v);
      (Je(d, () => e.header ?? $), y(c, v));
    };
    W(l, (c) => {
      e.header && c(u);
    });
  }
  var f = D(l, 2);
  {
    var _ = (c) => {
      var v = Df(),
        d = m(v);
      (Je(d, () => e.left ?? $), y(c, v));
    };
    W(f, (c) => {
      e.left && c(_);
    });
  }
  var C = D(f, 2),
    b = m(C);
  Je(b, () => e.children ?? $);
  var w = D(C, 2);
  {
    var k = (c) => {
      var v = Nf(),
        d = m(v);
      (Je(d, () => e.right ?? $), y(c, v));
    };
    W(w, (c) => {
      e.right && c(k);
    });
  }
  var x = D(w, 2);
  {
    var g = (c) => {
      var v = If(),
        d = m(v);
      (Je(d, () => e.footer ?? $), y(c, v));
    };
    W(x, (c) => {
      e.footer && c(g);
    });
  }
  (O(() => q(i, 1, Y(t(o)))), y(r, i), Be());
}
const Vo = Tu([]);
let Rf = 0;
function yn(r, e) {
  const a = Rf++,
    n = Uu(r, e?.message);
  Vo.update((o) => [
    ...o,
    {
      id: a,
      title: e?.title ?? n.title,
      message: e?.message ?? n.message,
      variant: r,
    },
  ]);
}
function jf(r) {
  Vo.update((e) => e.filter((a) => a.id !== r));
}
function Vf(r) {
  yn(r);
}
var qf = V("<div><!></div> <!>", 1);
function Uf(r, e) {
  Oe(e, !0);
  let a = F(e, "sz", 3, "sm"),
    n = F(e, "class", 3, ""),
    o = F(e, "message", 3, ""),
    i = h(a);
  const s = Zt("lang"),
    l = h(() => wa[s.value]);
  let u = he(!1);
  We(() => {
    A(i, a());
  });
  function f() {
    A(u, !0);
  }
  function _() {
    (A(u, !1),
      yn("success", {
        title: t(l).toasts.confirmTitle,
        message: t(l).toasts.confirmMessage,
      }));
  }
  function C() {
    (A(u, !1),
      yn("warning", {
        title: t(l).toasts.cancelTitle,
        message: t(l).toasts.cancelMessage,
      }));
  }
  var b = qf(),
    w = Ce(b),
    k = m(w);
  Qe(k, {
    variant: "primary",
    onClick: f,
    children: (g, c) => {
      var v = Re();
      (O(() => X(v, t(l).snippets.dialog.button)), y(g, v));
    },
    $$slots: { default: !0 },
  });
  var x = D(w, 2);
  (ko(x, {
    get title() {
      return t(l).snippets.dialog.title;
    },
    get sz() {
      return t(i);
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
    O((g) => q(w, 1, g), [() => Y(H("flex flex-wrap gap-3"))]),
    y(r, b),
    Be());
}
var Hf = V(
    '<div class="p-4 flex justify-center font-semibold text-[var(--color-text-default)] text-lg"> </div>'
  ),
  Kf = V(
    '<div class="p-4 flex justify-center gap-[var(--spacing-sm)]"><!> <!> <!></div>'
  );
function Gf(r, e) {
  Oe(e, !0);
  const a = (k) => {
      var x = Hf(),
        g = m(x);
      (O(() => X(g, t(s).form.header)), y(k, x));
    },
    n = (k) => {
      var x = Kf(),
        g = m(x);
      Dt(g, {
        get text() {
          return t(s).form.footer.submit;
        },
        children: (d, p) => {
          Qe(d, {
            variant: "primary",
            type: "submit",
            form: l,
            children: (S, P) => {
              var z = Re();
              (O(() => X(z, t(s).form.footer.submit)), y(S, z));
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
          Qe(d, {
            variant: "secondary",
            type: "button",
            onClick: C,
            children: (S, P) => {
              var z = Re();
              (O(() => X(z, t(s).form.footer.cancel)), y(S, z));
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
          Qe(d, {
            variant: "info",
            type: "button",
            onClick: w,
            children: (S, P) => {
              var z = Re();
              (O(() => X(z, t(s).form.footer.random)), y(S, z));
            },
            $$slots: { default: !0 },
          });
        },
        $$slots: { default: !0 },
      }),
        y(k, x));
    };
  let o = F(e, "onSubmit", 3, () => {});
  const i = Zt("lang"),
    s = h(() => wa[i.value]),
    l = "profile-form";
  let u = he(null);
  const f = h(() => [
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
        (k) =>
          typeof k == "string" && k.length >= 6
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
        (k, x) =>
          typeof k == "string" &&
          x &&
          typeof x.password == "string" &&
          k === x.password
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
        (k) => {
          if (typeof k == "string" && k.trim() === "") return null;
          const x = typeof k == "number" ? k : Number(k);
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
  function _(k) {
    o()(k);
  }
  function C() {
    t(u)?.reset();
  }
  function b(k) {
    A(u, k, !0);
  }
  function w() {
    if (!t(u)) return;
    const k = ["John", "Alex", "Tom", "Sam", "Anna", "Jessica", "Sarah"],
      x = ["Smith", "Williams", "Brown", "Johnson", "Miller"],
      g = (d) => d[Math.floor(Math.random() * d.length)],
      c = (d, p) => Math.floor(Math.random() * (p - d + 1)) + d,
      v = Math.random().toString(36).slice(2, 10);
    for (const d of t(f))
      switch (d.type) {
        case "text": {
          const p = d.name.toLowerCase();
          p.includes("first")
            ? t(u).setValue(d.name, g(k))
            : p.includes("last")
              ? t(u).setValue(d.name, g(x))
              : t(u).setValue(d.name, g(k));
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
            `${g(k).toLowerCase()}.${g(x).toLowerCase()}@example.com`
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
  (on(r, {
    get header() {
      return a;
    },
    get footer() {
      return n;
    },
    children: (k, x) => {
      bd(k, {
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
    Be());
}
var Wf = V(
  '<div><div class="w-full border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] overflow-x-auto overflow-y-visible"><!></div> <div class="bg-[var(--color-bg-surface)] h-40 border border-[var(--border-color-default)] border-t-0 p-4 text-[var(--color-text-muted)]"> </div></div>'
);
function Zf(r, e) {
  Oe(e, !0);
  let a = F(e, "sz", 3, "sm"),
    n = F(e, "class", 3, ""),
    o = h(a);
  const i = Zt("lang"),
    s = h(() => wa[i.value].menuDemo),
    l = h(() => [
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
  let u = h(() => "");
  function f(x, g) {
    const c = typeof g == "string" ? g : g.label || g.id || t(s).fallbackLabel,
      v = typeof g == "string" ? g : g.id;
    (v && ["xs", "sm", "md", "lg", "xl"].includes(v) && A(o, v),
      A(u, `${x}: ${c}`),
      console.log("Selected:", x, g));
  }
  (We(() => {
    A(o, a());
  }),
    We(() => {
      A(u, t(s).prompt);
    }));
  var _ = Wf(),
    C = m(_),
    b = m(C);
  ys(b, {
    get sz() {
      return t(o);
    },
    get menus() {
      return t(l);
    },
    onSelect: f,
  });
  var w = D(C, 2),
    k = m(w);
  (O(() => {
    (q(_, 1, `flex flex-col w-full ${n() ?? ""}`), X(k, t(u)));
  }),
    y(r, _),
    Be());
}
var Xf = V(
    "<div><div><span> </span> <span> </span> <span> </span> <span> </span></div> <div><span> </span> <span> </span></div></div>"
  ),
  Yf = V("<div><p> </p> <div><!></div></div>"),
  Jf = V(
    '<div><div class="overflow-x-auto overflow-y-visible w-full min-w-full bg-[var(--color-bg-surface)] border-b border-[var(--border-color-default)]"><!></div> <!> <!> <input type="file" class="hidden" accept=".txt,.md,.log,.html,.css,.js,.json,.py,.yml,.yaml,*/*"/> <!> <!> <!></div>'
  );
function $f(r, e) {
  Oe(e, !0);
  let a = F(e, "L", 19, () => ({})),
    n = F(e, "lang", 7, "txt"),
    o = F(e, "sz", 7, "sm"),
    i = F(e, "class", 3, "");
  const s = h(() => a()?.notepad?.menu ?? {}),
    l = h(() => a()?.notepad?.actions ?? {}),
    u = h(() => a()?.menuItems ?? {}),
    f = h(() => t(s).file ?? t(u).file ?? "File"),
    _ = h(() => t(s).edit ?? t(u).edit ?? "Edit"),
    C = h(() => t(s).view ?? t(u).view ?? "View"),
    b = h(() => t(s).language ?? t(u).language ?? "Language"),
    w = h(() => t(s).help ?? t(u).help ?? "Help"),
    k = h(() => t(s).settings ?? t(u).settings ?? "Settings"),
    x = h(() => t(l).statusBar ?? t(u).statusBar ?? "Status bar"),
    g = h(() => t(l).about ?? t(u).about ?? "About"),
    c = h(() => t(l).options ?? t(u).options ?? "Options"),
    v = h(
      () =>
        a()?.notepad?.aboutText ??
        "A lightweight notepad demo using the component library."
    ),
    d = h(
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
    S = h(() =>
      p.map(({ value: ce, label: Ee }) => ({
        id: ce === n() ? o() : ce,
        real: ce,
        label: Ee,
      }))
    ),
    P = h(() => [
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
          { id: "toggle-statusbar", label: t(x), shortcut: "Ctrl+B" },
        ],
      },
      { name: t(b), actions: t(S) },
      { name: t(k), actions: [{ id: "options", label: t(c) }] },
      { name: t(w), actions: [{ id: "about", label: t(g), shortcut: "F1" }] },
    ]);
  let z = he(""),
    L = he(null),
    T = he(Ye([])),
    G = he(Ye([])),
    K = he(""),
    te = he(!1),
    ue = he(!1),
    be = he(Ye([])),
    J = 0,
    ee = null,
    le = he(!0),
    N = he(!1),
    B = he(!1),
    Q = he(1),
    R = he(1);
  const ne = h(() => t(z).length),
    Z = h(() =>
      t(z) === ""
        ? 1
        : t(z).split(`
`).length
    ),
    re = h(() =>
      t(z).trim() ? t(z).trim().split(/\s+/).filter(Boolean).length : 0
    );
  function se(ce, Ee, Me) {
    A(be, [...t(be), { id: J++, title: Me, message: Ee, variant: ce }], !0);
  }
  function _e(ce) {
    A(
      be,
      t(be).filter((Ee) => Ee.id !== ce),
      !0
    );
  }
  function I(ce) {
    (!t(T).length || t(T).at(-1) !== ce) && A(T, [...t(T), ce].slice(-3), !0);
  }
  function E(ce) {
    A(G, [...t(G), ce].slice(-3), !0);
  }
  function oe() {
    A(G, [], !0);
  }
  We(() => {
    if (!t(te)) {
      (A(K, t(z), !0), A(te, !0));
      return;
    }
    if (t(ue)) {
      A(K, t(z), !0);
      return;
    }
    t(z) !== t(K) && (I(t(K)), oe(), A(K, t(z), !0));
  });
  function j(ce) {
    (I(t(z)), oe(), A(ue, !0), A(z, ce, !0), A(ue, !1), A(K, t(z), !0));
  }
  function de() {
    const ce = a()?.notepad?.confirmNew ?? "";
    (t(z) && ce && !confirm(ce)) || (j(""), A(L, null));
  }
  async function fe() {
    try {
      const ce = window;
      if (ce.showOpenFilePicker) {
        const [Ee] = await ce.showOpenFilePicker({
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
        (j(qe), A(L, Ee, !0));
        return;
      }
      if (ee) {
        ((ee.value = ""), ee.click());
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
      const ce = window;
      if (t(L) && ce.isSecureContext && t(L).createWritable) {
        const Xe = await t(L).createWritable();
        (await Xe.write(new Blob([t(z)], { type: "text/plain;charset=utf-8" })),
          await Xe.close());
        return;
      }
      if (ce.showSaveFilePicker) {
        const Xe = await ce.showSaveFilePicker({
            suggestedName: "note.txt",
            types: [
              { description: "Text", accept: { "text/plain": [".txt"] } },
            ],
          }),
          tt = await Xe.createWritable();
        (await tt.write(new Blob([t(z)], { type: "text/plain;charset=utf-8" })),
          await tt.close(),
          A(L, Xe, !0));
        return;
      }
      const Ee = new Blob([t(z)], { type: "text/plain;charset=utf-8" }),
        Me = URL.createObjectURL(Ee),
        qe = document.createElement("a");
      ((qe.href = Me),
        (qe.download = "note.txt"),
        document.body.appendChild(qe),
        qe.click(),
        qe.remove(),
        URL.revokeObjectURL(Me));
    } catch {
      se("danger", a()?.notepad?.saveError ?? "Error");
    }
  }
  function Ae(ce) {
    return ce
      ? ce instanceof HTMLTextAreaElement
        ? !0
        : ce instanceof HTMLInputElement
          ? ["text", "search", "url", "tel", "password"].includes(ce.type)
          : !1
      : !1;
  }
  function Pe() {
    const ce = document.activeElement;
    return Ae(ce) ? ce : null;
  }
  function ze() {
    const Ee = Pe()?.selectionStart ?? t(z).length,
      qe = t(z).slice(0, Ee).split(`
`);
    (A(Q, Math.max(qe.length, 1), !0), A(R, (qe.at(-1)?.length ?? 0) + 1));
  }
  async function ve() {
    try {
      const ce = Pe(),
        Ee = ce ? (ce.selectionStart ?? 0) : 0,
        Me = ce ? (ce.selectionEnd ?? 0) : 0;
      if (Ee === Me) return;
      const qe = t(z).slice(Ee, Me);
      await navigator.clipboard.writeText(qe);
      const Xe = t(z).slice(0, Ee) + t(z).slice(Me);
      (I(t(z)),
        oe(),
        A(ue, !0),
        A(z, Xe),
        A(ue, !1),
        A(K, t(z), !0),
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
      const ce = Pe(),
        Ee = ce ? (ce.selectionStart ?? 0) : 0,
        Me = ce ? (ce.selectionEnd ?? 0) : 0;
      if (Ee === Me) return;
      const qe = t(z).slice(Ee, Me);
      await navigator.clipboard.writeText(qe);
    } catch {
      se("danger", a()?.notepad?.copyError ?? "Error");
    }
  }
  async function M() {
    try {
      const ce = await navigator.clipboard.readText(),
        Ee = Pe(),
        Me = Ee?.selectionStart ?? t(z).length,
        qe = Ee?.selectionEnd ?? t(z).length,
        Xe = t(z).slice(0, Me) + ce + t(z).slice(qe);
      (I(t(z)), oe(), A(ue, !0), A(z, Xe), A(ue, !1), A(K, t(z), !0));
      const tt = Me + ce.length;
      queueMicrotask(() => {
        const dt = Pe();
        dt && (dt.selectionStart = dt.selectionEnd = tt);
      });
    } catch {
      se("danger", a()?.notepad?.pasteError ?? "Error");
    }
  }
  function ae() {
    try {
      if (!t(T).length) return;
      const ce = t(T).at(-1);
      (A(T, t(T).slice(0, -1), !0),
        E(t(z)),
        A(ue, !0),
        A(z, ce, !0),
        A(ue, !1),
        A(K, t(z), !0));
    } catch {
      se("danger", a()?.notepad?.undoError ?? "Error");
    }
  }
  function ie() {
    try {
      if (!t(G).length) return;
      const ce = t(G).at(-1);
      (A(G, t(G).slice(0, -1), !0),
        I(t(z)),
        A(ue, !0),
        A(z, ce, !0),
        A(ue, !1),
        A(K, t(z), !0));
    } catch {
      se("danger", a()?.notepad?.redoError ?? "Error");
    }
  }
  function xe() {
    A(N, !0);
  }
  async function ye(ce) {
    const Ee = ce.target,
      Me = Ee?.files?.[0];
    if (Me)
      try {
        const qe = await Me.text();
        (j(qe), A(L, null));
      } catch {
        se("danger", a()?.notepad?.openError ?? "Error");
      } finally {
        Ee && (Ee.value = "");
      }
  }
  function U(ce, Ee) {
    const Me = typeof Ee == "string" ? Ee : (Ee.real ?? Ee.id);
    if (Me)
      switch (Me) {
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
          ae();
          break;
        case "redo":
          ie();
          break;
        case "cut":
          ve();
          break;
        case "copy":
          Se();
          break;
        case "paste":
          M();
          break;
        case "about":
          xe();
          break;
        case "options":
          A(B, !0);
          break;
        case "xs":
        case "sm":
        case "md":
        case "lg":
        case "xl":
          o(Me);
          break;
        case "txt":
        case "html":
        case "css":
        case "js":
        case "json":
        case "python":
          n(Me);
          break;
        case "toggle-statusbar":
          A(le, !t(le));
          break;
      }
  }
  const pe = h(() => ({
    "ctrl+n": () => U(t(f), "new"),
    "ctrl+o": () => U(t(f), "open"),
    "ctrl+s": () => U(t(f), "save"),
    "ctrl+z": () => U(t(_), "undo"),
    "ctrl+y": () => U(t(_), "redo"),
    "ctrl+x": () => U(t(_), "cut"),
    "ctrl+c": () => U(t(_), "copy"),
    "ctrl+v": () => U(t(_), "paste"),
    "ctrl+b": () => U(t(C), "toggle-statusbar"),
    f1: () => U(t(w), "about"),
  }));
  function ke(ce) {
    const Ee = ce.key.toLowerCase(),
      Me = [];
    ((ce.ctrlKey || ce.metaKey) && Me.push("ctrl"),
      ce.shiftKey && Me.push("shift"),
      Me.push(Ee));
    const qe = Me.join("+"),
      Xe = t(pe)[qe] ?? t(pe)[Ee];
    Xe && (ce.preventDefault(), Xe());
  }
  (We(() => {
    (t(z), ze());
  }),
    We(() => {
      if (typeof document > "u") return;
      const ce = () => ze();
      return (
        document.addEventListener("selectionchange", ce),
        () => document.removeEventListener("selectionchange", ce)
      );
    }));
  var Fe = Jf();
  St("keydown", po, ke);
  var Te = m(Fe),
    Ge = m(Te);
  ys(Ge, {
    class: "block min-w-full bg-transparent border-0",
    get menus() {
      return t(P);
    },
    onSelect: U,
    get sz() {
      return o();
    },
  });
  var je = D(Te, 2);
  ws(je, {
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
    set code(ce) {
      A(z, ce, !0);
    },
  });
  var Ie = D(je, 2);
  {
    var Ne = (ce) => {
      var Ee = Xf(),
        Me = m(Ee),
        qe = m(Me),
        Xe = m(qe),
        tt = D(qe, 2),
        dt = m(tt),
        _t = D(tt, 2),
        Tt = m(_t),
        jt = D(_t, 2),
        Vt = m(jt),
        Dr = D(Me, 2),
        He = m(Dr),
        $e = m(He),
        rt = D(He, 2),
        ft = m(rt);
      (O(
        (sr, Lt, lr, ur, wr) => {
          (q(Ee, 1, sr),
            q(Me, 1, Lt),
            X(Xe, `Ln ${t(Q) ?? ""}, Col ${t(R) ?? ""}`),
            X(dt, `${t(Z) ?? ""} lines`),
            X(Tt, `${t(re) ?? ""} words`),
            X(Vt, `${t(ne) ?? ""} chars`),
            q(Dr, 1, lr),
            X($e, ur),
            X(ft, `Size ${wr ?? ""}`));
        },
        [
          () =>
            Y(
              H(
                "rounded-xs border border-[var(--border-color-default)] bg-[var(--color-bg-muted)]",
                "text-[var(--color-text-muted)] px-3 py-2",
                "flex flex-wrap items-center justify-between gap-3",
                De[o()]
              )
            ),
          () => Y(H("flex flex-wrap items-center gap-3")),
          () => Y(H("flex flex-wrap items-center gap-3")),
          () => n().toUpperCase(),
          () => o().toUpperCase(),
        ]
      ),
        y(ce, Ee));
    };
    W(Ie, (ce) => {
      t(le) && ce(Ne);
    });
  }
  var nt = D(Ie, 2);
  ((nt.__change = ye),
    ot(
      nt,
      (ce) => (ee = ce),
      () => ee
    ));
  var st = D(nt, 2);
  at(
    st,
    17,
    () => t(be),
    (ce) => ce.id,
    (ce, Ee) => {
      jo(ce, {
        get title() {
          return t(Ee).title;
        },
        get message() {
          return t(Ee).message;
        },
        get variant() {
          return t(Ee).variant;
        },
        onClose: () => _e(t(Ee).id),
      });
    }
  );
  var Pt = D(st, 2);
  {
    var mt = (ce) => {
      ko(ce, {
        open: !0,
        get title() {
          return t(g);
        },
        get message() {
          return t(v);
        },
        onClose: () => A(N, !1),
        onCancel: () => A(N, !1),
        onConfirm: () => A(N, !1),
        get sz() {
          return o();
        },
      });
    };
    W(Pt, (ce) => {
      t(N) && ce(mt);
    });
  }
  var Xt = D(Pt, 2);
  {
    var ct = (ce) => {
      ko(ce, {
        open: !0,
        get title() {
          return t(c);
        },
        onClose: () => A(B, !1),
        onCancel: () => A(B, !1),
        onConfirm: () => A(B, !1),
        get sz() {
          return o();
        },
        children: (Ee, Me) => {
          var qe = Yf(),
            Xe = m(qe),
            tt = m(Xe),
            dt = D(Xe, 2),
            _t = m(dt);
          (Ya(_t, {
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
              A(le, Tt, !0);
            },
          }),
            O(
              (Tt, jt, Vt) => {
                (q(qe, 1, Tt), q(Xe, 1, jt), X(tt, t(d)), q(dt, 1, Vt));
              },
              [
                () => Y(H("flex flex-col gap-3")),
                () => Y(H("text-[var(--color-text-muted)]", De[o()])),
                () => Y(H("flex items-center justify-between px-1 py-2")),
              ]
            ),
            y(Ee, qe));
        },
        $$slots: { default: !0 },
      });
    };
    W(Xt, (ce) => {
      t(B) && ce(ct);
    });
  }
  (O((ce) => q(Fe, 1, ce), [() => Y(H("block w-full min-w-full", i()))]),
    y(r, Fe),
    Be());
}
it(["change"]);
var Qf = V(
    '<div class="flex items-end gap-2"><!> <span class="text-xs text-[var(--color-text-muted)] mb-1"> </span></div>'
  ),
  ev = V(
    '<header class="flex items-end justify-between gap-4 -mx-5 px-5 py-5 border-b border-[var(--border-color-default)]"><h2 class="text-2xl font-semibold tracking-tight"> </h2> <span class="text-sm [color:var(--color-text-muted)]"> </span></header> <section class="p-3 md:p-3 lg:p-3"><div class="flex gap-4 flex-wrap items-end"><!> <!> <!> <!> <!> <!></div></section> <section class="p-3 md:p-3 lg:p-3"><div class="bg-[var(--color-bg-surface)] rounded-[var(--radius-xl)] p-4 md:p-6 lg:p-10 shadow-lg w-full border border-[var(--border-color-default)] flex items-center justify-center"><!></div></section>',
    1
  );
function Ze(r, e) {
  Oe(e, !0);
  let a = F(e, "title", 3, ""),
    n = F(e, "subtitle", 3, ""),
    o = F(e, "sz", 3, "md"),
    i = F(e, "class", 3, ""),
    s = F(e, "label", 3, ""),
    l = F(e, "disabled", 3, !1);
  const u = Zt("lang"),
    f = h(() => wa[u.value].playground.controls),
    _ = h(() => iv[e.component]),
    C = h(() =>
      ov.map((d) => ({
        label: d.charAt(0).toUpperCase() + d.slice(1),
        value: d,
      }))
    );
  let b = he("md"),
    w = he(""),
    k = he(""),
    x = he(!1),
    g = he("input"),
    c = he(!1);
  We(() => {
    (A(b, o()), A(k, s()), A(x, l()), A(w, t(_).variants[0] ?? "", !0));
  });
  const v = h(() => H("w-full flex flex-col", i()));
  (on(r, {
    get class() {
      return t(v);
    },
    children: (d, p) => {
      var S = ev(),
        P = Ce(S),
        z = m(P),
        L = m(z),
        T = D(z, 2),
        G = m(T),
        K = D(P, 2),
        te = m(K),
        ue = m(te);
      {
        var be = (E) => {
          {
            let oe = h(() =>
              t(_).sizes.map((j) => ({ label: j.toUpperCase(), value: j }))
            );
            Kt(E, {
              get label() {
                return t(f).size;
              },
              get options() {
                return t(oe);
              },
              sz: "xs",
              class: "min-w-[4rem]",
              get value() {
                return t(b);
              },
              set value(j) {
                A(b, j, !0);
              },
            });
          }
        };
        W(ue, (E) => {
          t(_).sizes.length && E(be);
        });
      }
      var J = D(ue, 2);
      {
        var ee = (E) => {
          {
            let oe = h(() =>
              t(_).variants.map((j) => ({
                label: j.charAt(0).toUpperCase() + j.slice(1),
                value: j,
              }))
            );
            Kt(E, {
              get label() {
                return t(f).variant;
              },
              get options() {
                return t(oe);
              },
              sz: "xs",
              get value() {
                return t(w);
              },
              set value(j) {
                A(w, j, !0);
              },
            });
          }
        };
        W(J, (E) => {
          t(_).variants.length && E(ee);
        });
      }
      var le = D(J, 2);
      {
        var N = (E) => {
          var oe = Qf(),
            j = m(oe);
          Ga(j, {
            get label() {
              return t(f).label;
            },
            sz: "xs",
            variant: "default",
            maxlength: 20,
            class: "flex-1",
            get value() {
              return t(k);
            },
            set value(ge) {
              A(k, ge, !0);
            },
          });
          var de = D(j, 2),
            fe = m(de);
          (O(() => X(fe, `${t(k).length ?? ""}/20`)), y(E, oe));
        };
        W(le, (E) => {
          t(_).supports.label && E(N);
        });
      }
      var B = D(le, 2);
      {
        var Q = (E) => {
          Ya(E, {
            get label() {
              return t(f).disabled;
            },
            sz: "sm",
            variant: "default",
            get checked() {
              return t(x);
            },
            set checked(oe) {
              A(x, oe, !0);
            },
          });
        };
        W(B, (E) => {
          t(_).supports.disabled && E(Q);
        });
      }
      var R = D(B, 2);
      {
        var ne = (E) => {
          Kt(E, {
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
            set value(oe) {
              A(g, oe, !0);
            },
          });
        };
        W(R, (E) => {
          e.component === "Field" && E(ne);
        });
      }
      var Z = D(R, 2);
      {
        var re = (E) => {
          Ya(E, {
            get label() {
              return t(f).sliderShowValue;
            },
            sz: "sm",
            variant: "default",
            onChange: (oe) => A(c, oe, !0),
            get checked() {
              return t(c);
            },
            set checked(oe) {
              A(c, oe, !0);
            },
          });
        };
        W(Z, (E) => {
          e.component === "Slider" && E(re);
        });
      }
      var se = D(K, 2),
        _e = m(se),
        I = m(_e);
      (Je(
        I,
        () => e.children ?? $,
        () => t(b),
        () => t(w),
        () => t(k),
        () => t(x),
        () => t(g),
        () => t(c)
      ),
        O(() => {
          (X(L, a() || t(f).playcardLabel), X(G, n() || t(f).playcardSubtitle));
        }),
        y(d, S));
    },
    $$slots: { default: !0 },
  }),
    Be());
}
ml();
const hi = (r) => {
    var e = tv();
    y(r, e);
  },
  mi = (r) => {
    var e = rv();
    y(r, e);
  };
var tv = V(`<div class="
      h-full
      p-[var(--spacing-lg)]
      bg-[var(--color-bg-surface)]
      text-[var(--color-text-default)]
      border-[var(--border-color-default)]
    ">First</div>`),
  rv = V(`<div class="
      h-full
      p-[var(--spacing-lg)]
      bg-[var(--color-bg-surface)]
      text-[var(--color-text-default)]
      border-[var(--border-color-default)]
    ">Second</div>`),
  av =
    V(`<div class="w-full h-[400px] flex flex-col"><div class="h-1/2 mb-[var(--spacing-xl)]"><div class="
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
function nv(r) {
  var e = av(),
    a = m(e),
    n = m(a),
    o = m(n);
  pi(o, {
    direction: "horizontal",
    initialSize: 50,
    dividerSize: 3,
    minSize: 15,
    maxSize: 85,
    get first() {
      return hi;
    },
    get second() {
      return mi;
    },
  });
  var i = D(a, 4),
    s = m(i),
    l = m(s);
  (pi(l, {
    direction: "vertical",
    initialSize: 40,
    dividerSize: 3,
    minSize: 15,
    maxSize: 85,
    get first() {
      return hi;
    },
    get second() {
      return mi;
    },
  }),
    y(r, e));
}
const _i = [
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
  ov = ["input", "number", "textarea"],
  iv = {
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
var sv = V("<div><div> </div> <div> </div></div>"),
  lv = V("<div><!> <span> </span></div>"),
  uv = V("<div><p> </p></div>"),
  cv = V('<div><p> </p> <p class="text-[var(--color-text-muted)]"> </p></div>'),
  dv = V("<div><span> </span> <!></div>"),
  fv = V("<!> <!>", 1),
  vv = V("<div> </div>"),
  gv = V("<div><!></div>"),
  pv = V('<div><!> <div class="mt-4"><!></div></div>'),
  bv = V('<div class="py-8"> </div>'),
  hv = V('<div class="grid gap-4 max-w-3xl"><!></div>'),
  mv = V(
    '<div class="overflow-x-auto w-full min-w-full min-h-[400px]"><!></div>'
  ),
  _v = V('<div class="flex flex-col gap-2"><!> <!> <!></div>'),
  xv = V(
    '<div><div><div class="flex items-center"><!></div> <div class="flex-1"></div> <!></div></div> <div><main><!></main></div>',
    1
  );
function wv(r, e) {
  Oe(e, !0);
  const a = () => Mu(Vo, "$toasts", n),
    [n, o] = Du(),
    i = (Z) => {
      var re = sv(),
        se = m(re),
        _e = m(se),
        I = D(se, 2),
        E = m(I);
      (O(
        (oe, j, de) => {
          (q(re, 1, oe),
            q(se, 1, j),
            X(_e, t(c).app.title),
            q(I, 1, de),
            X(E, t(c).app.version));
        },
        [
          () => Y(H("p-2 flex flex-col items-center text-center")),
          () => Y(H("font-bold text-[var(--color-text-muted)]", De.lg)),
          () => Y(H("text-[var(--color-text-muted)]", De.xs)),
        ]
      ),
        y(Z, re));
    },
    s = (Z) => {
      var re = lv(),
        se = m(re);
      Kt(se, {
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
      var _e = D(se, 2),
        I = m(_e);
      (O(
        (E, oe) => {
          (q(re, 1, E), q(_e, 1, oe), X(I, t(c).app.footer));
        },
        [
          () => Y(H("text-center p-2 flex flex-col items-center gap-4")),
          () => Y(H("italic text-[var(--color-text-muted)]", De.xs)),
        ]
      ),
        y(Z, re));
    },
    l = (Z) => {
      var re = uv(),
        se = m(re),
        _e = m(se);
      (O(
        (I, E) => {
          (q(re, 1, I), q(se, 1, E), X(_e, t(c).snippets.card.header));
        },
        [
          () => Y(H("flex items-center justify-between")),
          () => Y(H("font-semibold text-[var(--color-text-default)]")),
        ]
      ),
        y(Z, re));
    },
    u = (Z) => {
      var re = cv(),
        se = m(re),
        _e = m(se),
        I = D(se, 2),
        E = m(I);
      (O(
        (oe) => {
          (q(re, 1, oe),
            X(_e, t(c).snippets.about.description),
            X(E, t(c).snippets.about.helper));
        },
        [() => Y(H("space-y-2 leading-relaxed", De.sm))]
      ),
        y(Z, re));
    },
    f = (Z) => {
      var re = dv(),
        se = m(re),
        _e = m(se),
        I = D(se, 2);
      (Qe(I, {
        variant: "link",
        sz: "xs",
        children: (E, oe) => {
          var j = Re();
          (O(() => X(j, t(c).snippets.card.docsLink)), y(E, j));
        },
        $$slots: { default: !0 },
      }),
        O(
          (E) => {
            (q(re, 1, E), X(_e, t(c).snippets.card.updated));
          },
          [
            () =>
              Y(
                H(
                  "flex items-center justify-between text-[var(--color-text-muted)]",
                  De.xs
                )
              ),
          ]
        ),
        y(Z, re));
    },
    _ = (Z, re = $) => {
      cc(Z, {
        get items() {
          return t(R);
        },
        get sz() {
          return re();
        },
        autoplay: !0,
        showDots: !0,
        showArrows: !0,
        class: "w-full",
      });
    },
    C = (Z, re = $, se = $) => {
      var _e = fv(),
        I = Ce(_e);
      {
        let oe = h(() => `${t(c).snippets.toast.buttonPrefix}${se()}`);
        Dt(I, {
          get text() {
            return t(oe);
          },
          children: (j, de) => {
            Qe(j, {
              get sz() {
                return re();
              },
              get variant() {
                return se();
              },
              onClick: () => Vf(se()),
              children: (fe, ge) => {
                var Ae = Re();
                (O(() =>
                  X(
                    Ae,
                    `${t(c).snippets.toast.buttonPrefix ?? ""}${se() ?? ""}`
                  )
                ),
                  y(fe, Ae));
              },
              $$slots: { default: !0 },
            });
          },
          $$slots: { default: !0 },
        });
      }
      var E = D(I, 2);
      (at(
        E,
        1,
        a,
        (oe) => oe.id,
        (oe, j) => {
          jo(oe, {
            get title() {
              return t(j).title;
            },
            get message() {
              return t(j).message;
            },
            get variant() {
              return t(j).variant;
            },
            onClose: () => jf(t(j).id),
          });
        }
      ),
        y(Z, _e));
    },
    b = (Z) => {
      var re = vv(),
        se = m(re);
      (O(
        (_e) => {
          (q(re, 1, _e), X(se, t(c).states.emptyPreview));
        },
        [() => Y(H("text-center text-[var(--color-text-muted)] py-10"))]
      ),
        y(Z, re));
    },
    w = (Z, re = $, se = $, _e = $, I = $, E = $) => {
      var oe = gv(),
        j = m(oe);
      {
        var de = (ge) => {
            {
              let Ae = h(() => _e() || t(c).snippets.field.text);
              Dt(ge, {
                get text() {
                  return t(Ae);
                },
                children: (Pe, ze) => {
                  {
                    let ve = h(() => _e() || t(c).snippets.field.text);
                    Ga(Pe, {
                      get sz() {
                        return re();
                      },
                      get variant() {
                        return se();
                      },
                      get label() {
                        return t(ve);
                      },
                      get disabled() {
                        return I();
                      },
                    });
                  }
                },
                $$slots: { default: !0 },
              });
            }
          },
          fe = (ge) => {
            var Ae = Le(),
              Pe = Ce(Ae);
            {
              var ze = (Se) => {
                  {
                    let M = h(() => _e() || t(c).snippets.field.number);
                    Dt(Se, {
                      get text() {
                        return t(M);
                      },
                      children: (ae, ie) => {
                        {
                          let xe = h(() => _e() || t(c).snippets.field.number);
                          Ga(ae, {
                            get sz() {
                              return re();
                            },
                            get variant() {
                              return se();
                            },
                            type: "number",
                            parseNumber: !0,
                            get label() {
                              return t(xe);
                            },
                            get placeholder() {
                              return t(c).snippets.field.placeholder;
                            },
                            get disabled() {
                              return I();
                            },
                          });
                        }
                      },
                      $$slots: { default: !0 },
                    });
                  }
                },
                ve = (Se) => {
                  var M = Le(),
                    ae = Ce(M);
                  {
                    var ie = (xe) => {
                      {
                        let ye = h(() => _e() || t(c).snippets.field.textarea);
                        Dt(xe, {
                          get text() {
                            return t(ye);
                          },
                          children: (U, pe) => {
                            {
                              let ke = h(
                                () => _e() || t(c).snippets.field.textarea
                              );
                              Ga(U, {
                                get sz() {
                                  return re();
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
                                  return I();
                                },
                              });
                            }
                          },
                          $$slots: { default: !0 },
                        });
                      }
                    };
                    W(
                      ae,
                      (xe) => {
                        E() === "textarea" && xe(ie);
                      },
                      !0
                    );
                  }
                  y(Se, M);
                };
              W(
                Pe,
                (Se) => {
                  E() === "number" ? Se(ze) : Se(ve, !1);
                },
                !0
              );
            }
            y(ge, Ae);
          };
        W(j, (ge) => {
          E() === "input" ? ge(de) : ge(fe, !1);
        });
      }
      (O((ge) => q(oe, 1, ge), [() => Y(H("grid gap-4"))]), y(Z, oe));
    },
    k = (Z, re = $, se = $) => {
      var _e = pv(),
        I = m(_e);
      gf(I, {
        get columns() {
          return t(P);
        },
        get rows() {
          return t(ue);
        },
        get sz() {
          return re();
        },
        get variant() {
          return se();
        },
      });
      var E = D(I, 2),
        oe = m(E);
      (ks(oe, {
        get currentPage() {
          return t(K);
        },
        get totalPages() {
          return t(te);
        },
        onPageChange: Q,
      }),
        O((j) => q(_e, 1, j), [() => Y(H("w-full max-w-3xl"))]),
        y(Z, _e));
    },
    x = (Z, re = $, se = $) => {
      {
        let _e = h(() =>
          t(c).snippets.tabs.labels.map((I, E) => ({
            id: `t${E + 1}`,
            label: I,
          }))
        );
        hf(Z, {
          get tabs() {
            return t(_e);
          },
          get sz() {
            return re();
          },
          get variant() {
            return se();
          },
          get activeTab() {
            return t(L);
          },
          onChange: (I) => A(L, I, !0),
          children: (I, E) => {
            var oe = Le(),
              j = Ce(oe);
            (at(
              j,
              19,
              () => t(c).snippets.tabs.contents,
              (de, fe) => `t${fe + 1}`,
              (de, fe, ge) => {
                var Ae = Le(),
                  Pe = Ce(Ae);
                {
                  var ze = (ve) => {
                    var Se = bv(),
                      M = m(Se);
                    (O(() => X(M, t(fe))), y(ve, Se));
                  };
                  W(Pe, (ve) => {
                    t(L) === `t${t(ge) + 1}` && ve(ze);
                  });
                }
                y(de, Ae);
              }
            ),
              y(I, oe));
          },
          $$slots: { default: !0 },
        });
      }
    },
    g = Ye({ value: "en" });
  wl("lang", g);
  const c = h(() => wa[g.value]),
    v = h(() =>
      _i
        .filter((Z) => Z in t(c).pageLabels)
        .map((Z) => ({ id: Z, label: t(c).pageLabels[Z] }))
    );
  let d = he("about");
  function p(Z) {
    _i.includes(Z) && A(d, Z, !0);
  }
  const S = Ye(
      yo(23, (Z) => ({
        id: Z + 1,
        item: `${t(c).table.positionPrefix} ${Z + 1}`,
        qty: (Z % 7) + 1,
        price: ((Z % 9) + 1) * 100,
      }))
    ),
    P = h(() => [
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
  let z = he("banana"),
    L = he("t1"),
    T = he(0),
    G = 5,
    K = he(1);
  const te = h(() => Math.max(1, Math.ceil(S.length / G)));
  We(() => {
    t(K) > t(te) && A(K, Math.max(1, t(te)), !0);
  });
  const ue = h(() => S.slice((t(K) - 1) * G, t(K) * G));
  let be = he(null),
    J = he(null),
    ee = he(null),
    le = he("en");
  const N = new Date().toISOString().split("T")[0];
  function B(Z) {
    yn("success", {
      title: t(c).toasts.confirmTitle,
      message: t(c).toasts.confirmMessage,
    });
  }
  function Q(Z) {
    A(K, Z, !0);
  }
  const R = h(() => [...t(c).snippets.carousel.slides]),
    ne = h(() => [...t(c).snippets.accordion.items]);
  (Bf(r, {
    children: (Z, re) => {
      var se = xv(),
        _e = Ce(se),
        I = m(_e),
        E = m(I),
        oe = m(E);
      Cd(oe, {
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
          return De.md;
        },
      });
      var j = D(E, 4);
      bi(j, {});
      var de = D(_e, 2),
        fe = m(de),
        ge = m(fe);
      {
        var Ae = (ze) => {
            Ff(ze, {});
          },
          Pe = (ze) => {
            var ve = Le(),
              Se = Ce(ve);
            {
              var M = (ie) => {
                  Ze(ie, {
                    component: "Accordion",
                    get title() {
                      return t(c).pageLabels.accordion;
                    },
                    get subtitle() {
                      return t(c).snippets.accordionPlay.subtitle;
                    },
                    children: (ye, U = $, pe = $) => {
                      Zu(ye, {
                        get sz() {
                          return U();
                        },
                        get class() {
                          return pe();
                        },
                        get items() {
                          return t(ne);
                        },
                      });
                    },
                    $$slots: { default: !0 },
                  });
                },
                ae = (ie) => {
                  var xe = Le(),
                    ye = Ce(xe);
                  {
                    var U = (ke) => {
                        Ze(ke, {
                          component: "Button",
                          get title() {
                            return t(c).pageLabels.button;
                          },
                          get subtitle() {
                            return t(c).snippets.button.subtitle;
                          },
                          children: (Te, Ge = $, je = $, Ie = $, Ne = $) => {
                            {
                              let nt = h(() => Ie() || `${je()} ${Ge()}`);
                              Dt(Te, {
                                get text() {
                                  return t(nt);
                                },
                                children: (st, Pt) => {
                                  Qe(st, {
                                    get sz() {
                                      return Ge();
                                    },
                                    get variant() {
                                      return je();
                                    },
                                    get disabled() {
                                      return Ne();
                                    },
                                    children: (mt, Xt) => {
                                      var ct = Re();
                                      (O(() =>
                                        X(ct, Ie() || `${je()} ${Ge()}`)
                                      ),
                                        y(mt, ct));
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
                        var Fe = Le(),
                          Te = Ce(Fe);
                        {
                          var Ge = (Ie) => {
                              Ze(Ie, {
                                component: "Card",
                                get title() {
                                  return t(c).pageLabels.card;
                                },
                                get subtitle() {
                                  return t(c).snippets.cardSnippet.subtitle;
                                },
                                children: (nt, st = $) => {
                                  var Pt = hv(),
                                    mt = m(Pt);
                                  (on(mt, {
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
                                    y(nt, Pt));
                                },
                                $$slots: { default: !0 },
                              });
                            },
                            je = (Ie) => {
                              var Ne = Le(),
                                nt = Ce(Ne);
                              {
                                var st = (mt) => {
                                    Ze(mt, {
                                      component: "Carousel",
                                      get title() {
                                        return t(c).pageLabels.carousel;
                                      },
                                      get subtitle() {
                                        return t(c).snippets.carouselPlay
                                          .subtitle;
                                      },
                                      children: (ct, ce = $) => {
                                        _(ct, ce);
                                      },
                                      $$slots: { default: !0 },
                                    });
                                  },
                                  Pt = (mt) => {
                                    var Xt = Le(),
                                      ct = Ce(Xt);
                                    {
                                      var ce = (Me) => {
                                          Ze(Me, {
                                            component: "CheckBox",
                                            get title() {
                                              return t(c).pageLabels.checkbox;
                                            },
                                            get subtitle() {
                                              return t(c).snippets.checkbox
                                                .subtitle;
                                            },
                                            children: (
                                              Xe,
                                              tt = $,
                                              dt = $,
                                              _t = $,
                                              Tt = $
                                            ) => {
                                              {
                                                let jt = h(
                                                  () =>
                                                    _t() || `${dt()} ${tt()}`
                                                );
                                                Dt(Xe, {
                                                  get text() {
                                                    return t(jt);
                                                  },
                                                  children: (Vt, Dr) => {
                                                    {
                                                      let He = h(
                                                        () =>
                                                          _t() ||
                                                          `${dt()} ${tt()}`
                                                      );
                                                      Ya(Vt, {
                                                        get sz() {
                                                          return tt();
                                                        },
                                                        get variant() {
                                                          return dt();
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
                                        Ee = (Me) => {
                                          var qe = Le(),
                                            Xe = Ce(qe);
                                          {
                                            var tt = (_t) => {
                                                Ze(_t, {
                                                  component: "CodeView",
                                                  get title() {
                                                    return t(c).pageLabels
                                                      .codeView;
                                                  },
                                                  get subtitle() {
                                                    return t(c).components
                                                      .codeView.subtitle;
                                                  },
                                                  children: (jt, Vt = $) => {
                                                    Lf(jt, {
                                                      get sz() {
                                                        return Vt();
                                                      },
                                                    });
                                                  },
                                                  $$slots: { default: !0 },
                                                });
                                              },
                                              dt = (_t) => {
                                                var Tt = Le(),
                                                  jt = Ce(Tt);
                                                {
                                                  var Vt = (He) => {
                                                      Ze(He, {
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
                                                          ft = $,
                                                          sr = $,
                                                          Lt = $,
                                                          lr = $
                                                        ) => {
                                                          {
                                                            let ur = h(
                                                              () =>
                                                                Lt() ||
                                                                t(c).components
                                                                  .colorPicker
                                                                  .label
                                                            );
                                                            Pc(rt, {
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
                                                                return t(be);
                                                              },
                                                              set value(wr) {
                                                                A(be, wr, !0);
                                                              },
                                                            });
                                                          }
                                                        },
                                                        $$slots: {
                                                          default: !0,
                                                        },
                                                      });
                                                    },
                                                    Dr = (He) => {
                                                      var $e = Le(),
                                                        rt = Ce($e);
                                                      {
                                                        var ft = (Lt) => {
                                                            Ze(Lt, {
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
                                                                wr = $,
                                                                cr = $,
                                                                lt = $,
                                                                yr = $
                                                              ) => {
                                                                {
                                                                  let Nr = h(
                                                                    () =>
                                                                      lt() ||
                                                                      t(c)
                                                                        .components
                                                                        .datePicker
                                                                        .label
                                                                  );
                                                                  zc(ur, {
                                                                    get label() {
                                                                      return t(
                                                                        Nr
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
                                                                      return N;
                                                                    },
                                                                    get value() {
                                                                      return t(
                                                                        J
                                                                      );
                                                                    },
                                                                    set value(
                                                                      Ir
                                                                    ) {
                                                                      A(
                                                                        J,
                                                                        Ir,
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
                                                            var lr = Le(),
                                                              ur = Ce(lr);
                                                            {
                                                              var wr = (lt) => {
                                                                  Ze(lt, {
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
                                                                      Nr,
                                                                      Ir = $,
                                                                      Qr = $
                                                                    ) => {
                                                                      {
                                                                        let Yt =
                                                                          h(
                                                                            () =>
                                                                              Qr() ||
                                                                              t(
                                                                                c
                                                                              )
                                                                                .snippets
                                                                                .dialog
                                                                                .confirm
                                                                          );
                                                                        Uf(Nr, {
                                                                          get sz() {
                                                                            return Ir();
                                                                          },
                                                                          get message() {
                                                                            return t(
                                                                              Yt
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
                                                                  var yr = Le(),
                                                                    Nr = Ce(yr);
                                                                  {
                                                                    var Ir = (
                                                                        Yt
                                                                      ) => {
                                                                        Ze(Yt, {
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
                                                                              kt,
                                                                              qt = $,
                                                                              ka = $,
                                                                              Jt = $,
                                                                              Or = $,
                                                                              Ca = $
                                                                            ) => {
                                                                              w(
                                                                                kt,
                                                                                qt,
                                                                                ka,
                                                                                Jt,
                                                                                Or,
                                                                                Ca
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
                                                                        Yt
                                                                      ) => {
                                                                        var ya =
                                                                            Le(),
                                                                          kt =
                                                                            Ce(
                                                                              ya
                                                                            );
                                                                        {
                                                                          var qt =
                                                                              (
                                                                                Jt
                                                                              ) => {
                                                                                Ze(
                                                                                  Jt,
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
                                                                                        Ca,
                                                                                        qo = $,
                                                                                        Uo = $,
                                                                                        kr = $,
                                                                                        ln = $
                                                                                      ) => {
                                                                                        {
                                                                                          let An =
                                                                                            h(
                                                                                              () =>
                                                                                                kr() ||
                                                                                                t(
                                                                                                  c
                                                                                                )
                                                                                                  .components
                                                                                                  .filePicker
                                                                                                  .label
                                                                                            );
                                                                                          Wc(
                                                                                            Ca,
                                                                                            {
                                                                                              get label() {
                                                                                                return t(
                                                                                                  An
                                                                                                );
                                                                                              },
                                                                                              get disabled() {
                                                                                                return ln();
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
                                                                            ka =
                                                                              (
                                                                                Jt
                                                                              ) => {
                                                                                var Or =
                                                                                    Le(),
                                                                                  Ca =
                                                                                    Ce(
                                                                                      Or
                                                                                    );
                                                                                {
                                                                                  var qo =
                                                                                      (
                                                                                        kr
                                                                                      ) => {
                                                                                        Gf(
                                                                                          kr,
                                                                                          {
                                                                                            onSubmit:
                                                                                              B,
                                                                                          }
                                                                                        );
                                                                                      },
                                                                                    Uo =
                                                                                      (
                                                                                        kr
                                                                                      ) => {
                                                                                        var ln =
                                                                                            Le(),
                                                                                          An =
                                                                                            Ce(
                                                                                              ln
                                                                                            );
                                                                                        {
                                                                                          var Ss =
                                                                                              (
                                                                                                ea
                                                                                              ) => {
                                                                                                Ze(
                                                                                                  ea,
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
                                                                                                        Tn,
                                                                                                        Ln = $
                                                                                                      ) => {
                                                                                                        Zf(
                                                                                                          Tn,
                                                                                                          {
                                                                                                            get sz() {
                                                                                                              return Ln();
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
                                                                                            Ps =
                                                                                              (
                                                                                                ea
                                                                                              ) => {
                                                                                                var Fn =
                                                                                                    Le(),
                                                                                                  Tn =
                                                                                                    Ce(
                                                                                                      Fn
                                                                                                    );
                                                                                                {
                                                                                                  var Ln =
                                                                                                      (
                                                                                                        ta
                                                                                                      ) => {
                                                                                                        var Sa =
                                                                                                            mv(),
                                                                                                          Mn =
                                                                                                            m(
                                                                                                              Sa
                                                                                                            );
                                                                                                        ($f(
                                                                                                          Mn,
                                                                                                          {
                                                                                                            get L() {
                                                                                                              return t(
                                                                                                                c
                                                                                                              );
                                                                                                            },
                                                                                                          }
                                                                                                        ),
                                                                                                          y(
                                                                                                            ta,
                                                                                                            Sa
                                                                                                          ));
                                                                                                      },
                                                                                                    Es =
                                                                                                      (
                                                                                                        ta
                                                                                                      ) => {
                                                                                                        var Sa =
                                                                                                            Le(),
                                                                                                          Mn =
                                                                                                            Ce(
                                                                                                              Sa
                                                                                                            );
                                                                                                        {
                                                                                                          var zs =
                                                                                                              (
                                                                                                                ra
                                                                                                              ) => {
                                                                                                                Ze(
                                                                                                                  ra,
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
                                                                                                                        Nn,
                                                                                                                        In = $,
                                                                                                                        On = $,
                                                                                                                        Cr = $,
                                                                                                                        Pa = $
                                                                                                                      ) => {
                                                                                                                        Vd(
                                                                                                                          Nn,
                                                                                                                          {
                                                                                                                            value: 75,
                                                                                                                            get sz() {
                                                                                                                              return In();
                                                                                                                            },
                                                                                                                            get variant() {
                                                                                                                              return On();
                                                                                                                            },
                                                                                                                            get label() {
                                                                                                                              return Cr();
                                                                                                                            },
                                                                                                                            get disabled() {
                                                                                                                              return Pa();
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
                                                                                                            As =
                                                                                                              (
                                                                                                                ra
                                                                                                              ) => {
                                                                                                                var Dn =
                                                                                                                    Le(),
                                                                                                                  Nn =
                                                                                                                    Ce(
                                                                                                                      Dn
                                                                                                                    );
                                                                                                                {
                                                                                                                  var In =
                                                                                                                      (
                                                                                                                        Cr
                                                                                                                      ) => {
                                                                                                                        Ze(
                                                                                                                          Cr,
                                                                                                                          {
                                                                                                                            component:
                                                                                                                              "ProgressCircle",
                                                                                                                            get title() {
                                                                                                                              return t(
                                                                                                                                c
                                                                                                                              )
                                                                                                                                .pageLabels
                                                                                                                                .progressCircle;
                                                                                                                            },
                                                                                                                            get subtitle() {
                                                                                                                              return t(
                                                                                                                                c
                                                                                                                              )
                                                                                                                                .snippets
                                                                                                                                .progressCircle
                                                                                                                                .subtitle;
                                                                                                                            },
                                                                                                                            children:
                                                                                                                              (
                                                                                                                                Bn,
                                                                                                                                Rn = $,
                                                                                                                                jn = $,
                                                                                                                                Sr = $,
                                                                                                                                Ea = $
                                                                                                                              ) => {
                                                                                                                                Wd(
                                                                                                                                  Bn,
                                                                                                                                  {
                                                                                                                                    value: 75,
                                                                                                                                    get sz() {
                                                                                                                                      return Rn();
                                                                                                                                    },
                                                                                                                                    get variant() {
                                                                                                                                      return jn();
                                                                                                                                    },
                                                                                                                                    get label() {
                                                                                                                                      return Sr();
                                                                                                                                    },
                                                                                                                                    get disabled() {
                                                                                                                                      return Ea();
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
                                                                                                                    On =
                                                                                                                      (
                                                                                                                        Cr
                                                                                                                      ) => {
                                                                                                                        var Pa =
                                                                                                                            Le(),
                                                                                                                          Bn =
                                                                                                                            Ce(
                                                                                                                              Pa
                                                                                                                            );
                                                                                                                        {
                                                                                                                          var Rn =
                                                                                                                              (
                                                                                                                                Sr
                                                                                                                              ) => {
                                                                                                                                Ze(
                                                                                                                                  Sr,
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
                                                                                                                                        Vn,
                                                                                                                                        za = $,
                                                                                                                                        Aa = $,
                                                                                                                                        Br = $,
                                                                                                                                        Rr = $
                                                                                                                                      ) => {
                                                                                                                                        var aa =
                                                                                                                                            _v(),
                                                                                                                                          jr =
                                                                                                                                            m(
                                                                                                                                              aa
                                                                                                                                            );
                                                                                                                                        uo(
                                                                                                                                          jr,
                                                                                                                                          {
                                                                                                                                            get sz() {
                                                                                                                                              return za();
                                                                                                                                            },
                                                                                                                                            get variant() {
                                                                                                                                              return Aa();
                                                                                                                                            },
                                                                                                                                            get disabled() {
                                                                                                                                              return Rr();
                                                                                                                                            },
                                                                                                                                            value:
                                                                                                                                              "apple",
                                                                                                                                            get group() {
                                                                                                                                              return t(
                                                                                                                                                z
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            set group(
                                                                                                                                              vt
                                                                                                                                            ) {
                                                                                                                                              A(
                                                                                                                                                z,
                                                                                                                                                vt,
                                                                                                                                                !0
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            children:
                                                                                                                                              (
                                                                                                                                                vt,
                                                                                                                                                qr
                                                                                                                                              ) => {
                                                                                                                                                var Et =
                                                                                                                                                  Re();
                                                                                                                                                (O(
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
                                                                                                                                                  y(
                                                                                                                                                    vt,
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
                                                                                                                                        var Vr =
                                                                                                                                          D(
                                                                                                                                            jr,
                                                                                                                                            2
                                                                                                                                          );
                                                                                                                                        uo(
                                                                                                                                          Vr,
                                                                                                                                          {
                                                                                                                                            get sz() {
                                                                                                                                              return za();
                                                                                                                                            },
                                                                                                                                            get variant() {
                                                                                                                                              return Aa();
                                                                                                                                            },
                                                                                                                                            get disabled() {
                                                                                                                                              return Rr();
                                                                                                                                            },
                                                                                                                                            value:
                                                                                                                                              "banana",
                                                                                                                                            get group() {
                                                                                                                                              return t(
                                                                                                                                                z
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            set group(
                                                                                                                                              vt
                                                                                                                                            ) {
                                                                                                                                              A(
                                                                                                                                                z,
                                                                                                                                                vt,
                                                                                                                                                !0
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            children:
                                                                                                                                              (
                                                                                                                                                vt,
                                                                                                                                                qr
                                                                                                                                              ) => {
                                                                                                                                                var Et =
                                                                                                                                                  Re();
                                                                                                                                                (O(
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
                                                                                                                                                  y(
                                                                                                                                                    vt,
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
                                                                                                                                        var $t =
                                                                                                                                          D(
                                                                                                                                            Vr,
                                                                                                                                            2
                                                                                                                                          );
                                                                                                                                        (uo(
                                                                                                                                          $t,
                                                                                                                                          {
                                                                                                                                            get sz() {
                                                                                                                                              return za();
                                                                                                                                            },
                                                                                                                                            get variant() {
                                                                                                                                              return Aa();
                                                                                                                                            },
                                                                                                                                            get disabled() {
                                                                                                                                              return Rr();
                                                                                                                                            },
                                                                                                                                            value:
                                                                                                                                              "cherry",
                                                                                                                                            get group() {
                                                                                                                                              return t(
                                                                                                                                                z
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            set group(
                                                                                                                                              vt
                                                                                                                                            ) {
                                                                                                                                              A(
                                                                                                                                                z,
                                                                                                                                                vt,
                                                                                                                                                !0
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            children:
                                                                                                                                              (
                                                                                                                                                vt,
                                                                                                                                                qr
                                                                                                                                              ) => {
                                                                                                                                                var Et =
                                                                                                                                                  Re();
                                                                                                                                                (O(
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
                                                                                                                                                  y(
                                                                                                                                                    vt,
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
                                                                                                                                          y(
                                                                                                                                            Vn,
                                                                                                                                            aa
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
                                                                                                                            jn =
                                                                                                                              (
                                                                                                                                Sr
                                                                                                                              ) => {
                                                                                                                                var Ea =
                                                                                                                                    Le(),
                                                                                                                                  Vn =
                                                                                                                                    Ce(
                                                                                                                                      Ea
                                                                                                                                    );
                                                                                                                                {
                                                                                                                                  var za =
                                                                                                                                      (
                                                                                                                                        Br
                                                                                                                                      ) => {
                                                                                                                                        Ze(
                                                                                                                                          Br,
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
                                                                                                                                                aa,
                                                                                                                                                jr = $,
                                                                                                                                                Vr = $,
                                                                                                                                                $t = $,
                                                                                                                                                vt = $,
                                                                                                                                                qr = $,
                                                                                                                                                Et = $
                                                                                                                                              ) => {
                                                                                                                                                {
                                                                                                                                                  let Fa =
                                                                                                                                                    h(
                                                                                                                                                      () =>
                                                                                                                                                        String(
                                                                                                                                                          t(
                                                                                                                                                            T
                                                                                                                                                          )
                                                                                                                                                        )
                                                                                                                                                    );
                                                                                                                                                  Dt(
                                                                                                                                                    aa,
                                                                                                                                                    {
                                                                                                                                                      get text() {
                                                                                                                                                        return t(
                                                                                                                                                          Fa
                                                                                                                                                        );
                                                                                                                                                      },
                                                                                                                                                      children:
                                                                                                                                                        (
                                                                                                                                                          Ut,
                                                                                                                                                          Ur
                                                                                                                                                        ) => {
                                                                                                                                                          {
                                                                                                                                                            let na =
                                                                                                                                                              h(
                                                                                                                                                                () =>
                                                                                                                                                                  $t() ||
                                                                                                                                                                  `${Vr() || t(c).snippets.slider.fallbackLabel} ${jr()}`
                                                                                                                                                              );
                                                                                                                                                            Qd(
                                                                                                                                                              Ut,
                                                                                                                                                              {
                                                                                                                                                                min: 0,
                                                                                                                                                                max: 100,
                                                                                                                                                                step: 1,
                                                                                                                                                                get showValue() {
                                                                                                                                                                  return Et();
                                                                                                                                                                },
                                                                                                                                                                get sz() {
                                                                                                                                                                  return jr();
                                                                                                                                                                },
                                                                                                                                                                get variant() {
                                                                                                                                                                  return Vr();
                                                                                                                                                                },
                                                                                                                                                                get title() {
                                                                                                                                                                  return t(
                                                                                                                                                                    na
                                                                                                                                                                  );
                                                                                                                                                                },
                                                                                                                                                                get disabled() {
                                                                                                                                                                  return vt();
                                                                                                                                                                },
                                                                                                                                                                get value() {
                                                                                                                                                                  return t(
                                                                                                                                                                    T
                                                                                                                                                                  );
                                                                                                                                                                },
                                                                                                                                                                set value(
                                                                                                                                                                  Ta
                                                                                                                                                                ) {
                                                                                                                                                                  A(
                                                                                                                                                                    T,
                                                                                                                                                                    Ta,
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
                                                                                                                                    Aa =
                                                                                                                                      (
                                                                                                                                        Br
                                                                                                                                      ) => {
                                                                                                                                        var Rr =
                                                                                                                                            Le(),
                                                                                                                                          aa =
                                                                                                                                            Ce(
                                                                                                                                              Rr
                                                                                                                                            );
                                                                                                                                        {
                                                                                                                                          var jr =
                                                                                                                                              (
                                                                                                                                                $t
                                                                                                                                              ) => {
                                                                                                                                                Ze(
                                                                                                                                                  $t,
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
                                                                                                                                                        qr,
                                                                                                                                                        Et = $,
                                                                                                                                                        Fa = $,
                                                                                                                                                        Ut = $,
                                                                                                                                                        Ur = $
                                                                                                                                                      ) => {
                                                                                                                                                        {
                                                                                                                                                          let na =
                                                                                                                                                            h(
                                                                                                                                                              () =>
                                                                                                                                                                Ut() ||
                                                                                                                                                                t(
                                                                                                                                                                  c
                                                                                                                                                                )
                                                                                                                                                                  .snippets
                                                                                                                                                                  .select
                                                                                                                                                                  .label
                                                                                                                                                            );
                                                                                                                                                          Dt(
                                                                                                                                                            qr,
                                                                                                                                                            {
                                                                                                                                                              get text() {
                                                                                                                                                                return t(
                                                                                                                                                                  na
                                                                                                                                                                );
                                                                                                                                                              },
                                                                                                                                                              children:
                                                                                                                                                                (
                                                                                                                                                                  Ta,
                                                                                                                                                                  Ho
                                                                                                                                                                ) => {
                                                                                                                                                                  {
                                                                                                                                                                    let Pr =
                                                                                                                                                                      h(
                                                                                                                                                                        () =>
                                                                                                                                                                          Ut() ||
                                                                                                                                                                          t(
                                                                                                                                                                            c
                                                                                                                                                                          )
                                                                                                                                                                            .snippets
                                                                                                                                                                            .select
                                                                                                                                                                            .label
                                                                                                                                                                      );
                                                                                                                                                                    Kt(
                                                                                                                                                                      Ta,
                                                                                                                                                                      {
                                                                                                                                                                        get sz() {
                                                                                                                                                                          return Et();
                                                                                                                                                                        },
                                                                                                                                                                        get variant() {
                                                                                                                                                                          return Fa();
                                                                                                                                                                        },
                                                                                                                                                                        get label() {
                                                                                                                                                                          return t(
                                                                                                                                                                            Pr
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
                                                                                                                                                                          return Ur();
                                                                                                                                                                        },
                                                                                                                                                                        get value() {
                                                                                                                                                                          return t(
                                                                                                                                                                            le
                                                                                                                                                                          );
                                                                                                                                                                        },
                                                                                                                                                                        set value(
                                                                                                                                                                          La
                                                                                                                                                                        ) {
                                                                                                                                                                          A(
                                                                                                                                                                            le,
                                                                                                                                                                            La,
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
                                                                                                                                            Vr =
                                                                                                                                              (
                                                                                                                                                $t
                                                                                                                                              ) => {
                                                                                                                                                var vt =
                                                                                                                                                    Le(),
                                                                                                                                                  qr =
                                                                                                                                                    Ce(
                                                                                                                                                      vt
                                                                                                                                                    );
                                                                                                                                                {
                                                                                                                                                  var Et =
                                                                                                                                                      (
                                                                                                                                                        Ut
                                                                                                                                                      ) => {
                                                                                                                                                        Ze(
                                                                                                                                                          Ut,
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
                                                                                                                                                                Ur,
                                                                                                                                                                na
                                                                                                                                                              ) => {
                                                                                                                                                                nv(
                                                                                                                                                                  Ur
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
                                                                                                                                                    Fa =
                                                                                                                                                      (
                                                                                                                                                        Ut
                                                                                                                                                      ) => {
                                                                                                                                                        var Ur =
                                                                                                                                                            Le(),
                                                                                                                                                          na =
                                                                                                                                                            Ce(
                                                                                                                                                              Ur
                                                                                                                                                            );
                                                                                                                                                        {
                                                                                                                                                          var Ta =
                                                                                                                                                              (
                                                                                                                                                                Pr
                                                                                                                                                              ) => {
                                                                                                                                                                Ze(
                                                                                                                                                                  Pr,
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
                                                                                                                                                                        qn,
                                                                                                                                                                        Ma = $,
                                                                                                                                                                        Un = $,
                                                                                                                                                                        dr = $,
                                                                                                                                                                        Da = $
                                                                                                                                                                      ) => {
                                                                                                                                                                        {
                                                                                                                                                                          let Na =
                                                                                                                                                                            h(
                                                                                                                                                                              () =>
                                                                                                                                                                                dr() ||
                                                                                                                                                                                `${t(c).snippets.switch.labelPrefix} ${Ma()}`
                                                                                                                                                                            );
                                                                                                                                                                          Dt(
                                                                                                                                                                            qn,
                                                                                                                                                                            {
                                                                                                                                                                              get text() {
                                                                                                                                                                                return t(
                                                                                                                                                                                  Na
                                                                                                                                                                                );
                                                                                                                                                                              },
                                                                                                                                                                              children:
                                                                                                                                                                                (
                                                                                                                                                                                  Ia,
                                                                                                                                                                                  un
                                                                                                                                                                                ) => {
                                                                                                                                                                                  {
                                                                                                                                                                                    let Er =
                                                                                                                                                                                        h(
                                                                                                                                                                                          () =>
                                                                                                                                                                                            Un() ||
                                                                                                                                                                                            void 0
                                                                                                                                                                                        ),
                                                                                                                                                                                      Oa =
                                                                                                                                                                                        h(
                                                                                                                                                                                          () =>
                                                                                                                                                                                            dr() ||
                                                                                                                                                                                            `${t(c).snippets.switch.labelPrefix} ${Ma()}`
                                                                                                                                                                                        );
                                                                                                                                                                                    Cs(
                                                                                                                                                                                      Ia,
                                                                                                                                                                                      {
                                                                                                                                                                                        get sz() {
                                                                                                                                                                                          return Ma();
                                                                                                                                                                                        },
                                                                                                                                                                                        get "data-variant"() {
                                                                                                                                                                                          return t(
                                                                                                                                                                                            Er
                                                                                                                                                                                          );
                                                                                                                                                                                        },
                                                                                                                                                                                        get rightLabel() {
                                                                                                                                                                                          return t(
                                                                                                                                                                                            Oa
                                                                                                                                                                                          );
                                                                                                                                                                                        },
                                                                                                                                                                                        get disabled() {
                                                                                                                                                                                          return Da();
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
                                                                                                                                                            Ho =
                                                                                                                                                              (
                                                                                                                                                                Pr
                                                                                                                                                              ) => {
                                                                                                                                                                var La =
                                                                                                                                                                    Le(),
                                                                                                                                                                  qn =
                                                                                                                                                                    Ce(
                                                                                                                                                                      La
                                                                                                                                                                    );
                                                                                                                                                                {
                                                                                                                                                                  var Ma =
                                                                                                                                                                      (
                                                                                                                                                                        dr
                                                                                                                                                                      ) => {
                                                                                                                                                                        Ze(
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
                                                                                                                                                                                Na,
                                                                                                                                                                                Ia = $,
                                                                                                                                                                                un = $
                                                                                                                                                                              ) => {
                                                                                                                                                                                k(
                                                                                                                                                                                  Na,
                                                                                                                                                                                  Ia,
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
                                                                                                                                                                      },
                                                                                                                                                                    Un =
                                                                                                                                                                      (
                                                                                                                                                                        dr
                                                                                                                                                                      ) => {
                                                                                                                                                                        var Da =
                                                                                                                                                                            Le(),
                                                                                                                                                                          Na =
                                                                                                                                                                            Ce(
                                                                                                                                                                              Da
                                                                                                                                                                            );
                                                                                                                                                                        {
                                                                                                                                                                          var Ia =
                                                                                                                                                                              (
                                                                                                                                                                                Er
                                                                                                                                                                              ) => {
                                                                                                                                                                                Ze(
                                                                                                                                                                                  Er,
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
                                                                                                                                                                                        Hn,
                                                                                                                                                                                        Kn = $,
                                                                                                                                                                                        Gn = $
                                                                                                                                                                                      ) => {
                                                                                                                                                                                        x(
                                                                                                                                                                                          Hn,
                                                                                                                                                                                          Kn,
                                                                                                                                                                                          Gn
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
                                                                                                                                                                            un =
                                                                                                                                                                              (
                                                                                                                                                                                Er
                                                                                                                                                                              ) => {
                                                                                                                                                                                var Oa =
                                                                                                                                                                                    Le(),
                                                                                                                                                                                  Hn =
                                                                                                                                                                                    Ce(
                                                                                                                                                                                      Oa
                                                                                                                                                                                    );
                                                                                                                                                                                {
                                                                                                                                                                                  var Kn =
                                                                                                                                                                                      (
                                                                                                                                                                                        oa
                                                                                                                                                                                      ) => {
                                                                                                                                                                                        Ze(
                                                                                                                                                                                          oa,
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
                                                                                                                                                                                                Zn,
                                                                                                                                                                                                Xn = $,
                                                                                                                                                                                                Yn = $,
                                                                                                                                                                                                fr = $,
                                                                                                                                                                                                Ba = $
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                Dt(
                                                                                                                                                                                                  Zn,
                                                                                                                                                                                                  {
                                                                                                                                                                                                    get text() {
                                                                                                                                                                                                      return fr();
                                                                                                                                                                                                    },
                                                                                                                                                                                                    children:
                                                                                                                                                                                                      (
                                                                                                                                                                                                        Ra,
                                                                                                                                                                                                        Jn
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        {
                                                                                                                                                                                                          let cn =
                                                                                                                                                                                                              h(
                                                                                                                                                                                                                () =>
                                                                                                                                                                                                                  Yn() ||
                                                                                                                                                                                                                  void 0
                                                                                                                                                                                                              ),
                                                                                                                                                                                                            Qt =
                                                                                                                                                                                                              h(
                                                                                                                                                                                                                () =>
                                                                                                                                                                                                                  fr() ||
                                                                                                                                                                                                                  t(
                                                                                                                                                                                                                    c
                                                                                                                                                                                                                  )
                                                                                                                                                                                                                    .snippets
                                                                                                                                                                                                                    .themeToggle
                                                                                                                                                                                                                    .defaultLabel
                                                                                                                                                                                                              );
                                                                                                                                                                                                          bi(
                                                                                                                                                                                                            Ra,
                                                                                                                                                                                                            {
                                                                                                                                                                                                              get sz() {
                                                                                                                                                                                                                return Xn();
                                                                                                                                                                                                              },
                                                                                                                                                                                                              get disabled() {
                                                                                                                                                                                                                return Ba();
                                                                                                                                                                                                              },
                                                                                                                                                                                                              get "data-variant"() {
                                                                                                                                                                                                                return t(
                                                                                                                                                                                                                  cn
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
                                                                                                                                                                                    Gn =
                                                                                                                                                                                      (
                                                                                                                                                                                        oa
                                                                                                                                                                                      ) => {
                                                                                                                                                                                        var Wn =
                                                                                                                                                                                            Le(),
                                                                                                                                                                                          Zn =
                                                                                                                                                                                            Ce(
                                                                                                                                                                                              Wn
                                                                                                                                                                                            );
                                                                                                                                                                                        {
                                                                                                                                                                                          var Xn =
                                                                                                                                                                                              (
                                                                                                                                                                                                fr
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                Ze(
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
                                                                                                                                                                                                        Ra,
                                                                                                                                                                                                        Jn = $,
                                                                                                                                                                                                        cn = $,
                                                                                                                                                                                                        Qt = $,
                                                                                                                                                                                                        dn = $
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        {
                                                                                                                                                                                                          let fn =
                                                                                                                                                                                                            h(
                                                                                                                                                                                                              () =>
                                                                                                                                                                                                                Qt() ||
                                                                                                                                                                                                                t(
                                                                                                                                                                                                                  c
                                                                                                                                                                                                                )
                                                                                                                                                                                                                  .components
                                                                                                                                                                                                                  .timePicker
                                                                                                                                                                                                                  .label
                                                                                                                                                                                                            );
                                                                                                                                                                                                          kf(
                                                                                                                                                                                                            Ra,
                                                                                                                                                                                                            {
                                                                                                                                                                                                              get label() {
                                                                                                                                                                                                                return t(
                                                                                                                                                                                                                  fn
                                                                                                                                                                                                                );
                                                                                                                                                                                                              },
                                                                                                                                                                                                              get disabled() {
                                                                                                                                                                                                                return dn();
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
                                                                                                                                                                                                                  ee
                                                                                                                                                                                                                );
                                                                                                                                                                                                              },
                                                                                                                                                                                                              set value(
                                                                                                                                                                                                                $n
                                                                                                                                                                                                              ) {
                                                                                                                                                                                                                A(
                                                                                                                                                                                                                  ee,
                                                                                                                                                                                                                  $n,
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
                                                                                                                                                                                            Yn =
                                                                                                                                                                                              (
                                                                                                                                                                                                fr
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                var Ba =
                                                                                                                                                                                                    Le(),
                                                                                                                                                                                                  Ra =
                                                                                                                                                                                                    Ce(
                                                                                                                                                                                                      Ba
                                                                                                                                                                                                    );
                                                                                                                                                                                                {
                                                                                                                                                                                                  var Jn =
                                                                                                                                                                                                      (
                                                                                                                                                                                                        Qt
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        Ze(
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
                                                                                                                                                                                                                fn,
                                                                                                                                                                                                                $n = $,
                                                                                                                                                                                                                Fs = $
                                                                                                                                                                                                              ) => {
                                                                                                                                                                                                                C(
                                                                                                                                                                                                                  fn,
                                                                                                                                                                                                                  $n,
                                                                                                                                                                                                                  Fs
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
                                                                                                                                                                                                    cn =
                                                                                                                                                                                                      (
                                                                                                                                                                                                        Qt
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        Ze(
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
                                                                                                                                                                                                                dn,
                                                                                                                                                                                                                fn
                                                                                                                                                                                                              ) => {
                                                                                                                                                                                                                b(
                                                                                                                                                                                                                  dn
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
                                                                                                                                                                                                  W(
                                                                                                                                                                                                    Ra,
                                                                                                                                                                                                    (
                                                                                                                                                                                                      Qt
                                                                                                                                                                                                    ) => {
                                                                                                                                                                                                      t(
                                                                                                                                                                                                        d
                                                                                                                                                                                                      ) ===
                                                                                                                                                                                                      "toast"
                                                                                                                                                                                                        ? Qt(
                                                                                                                                                                                                            Jn
                                                                                                                                                                                                          )
                                                                                                                                                                                                        : Qt(
                                                                                                                                                                                                            cn,
                                                                                                                                                                                                            !1
                                                                                                                                                                                                          );
                                                                                                                                                                                                    },
                                                                                                                                                                                                    !0
                                                                                                                                                                                                  );
                                                                                                                                                                                                }
                                                                                                                                                                                                y(
                                                                                                                                                                                                  fr,
                                                                                                                                                                                                  Ba
                                                                                                                                                                                                );
                                                                                                                                                                                              };
                                                                                                                                                                                          W(
                                                                                                                                                                                            Zn,
                                                                                                                                                                                            (
                                                                                                                                                                                              fr
                                                                                                                                                                                            ) => {
                                                                                                                                                                                              t(
                                                                                                                                                                                                d
                                                                                                                                                                                              ) ===
                                                                                                                                                                                              "timePicker"
                                                                                                                                                                                                ? fr(
                                                                                                                                                                                                    Xn
                                                                                                                                                                                                  )
                                                                                                                                                                                                : fr(
                                                                                                                                                                                                    Yn,
                                                                                                                                                                                                    !1
                                                                                                                                                                                                  );
                                                                                                                                                                                            },
                                                                                                                                                                                            !0
                                                                                                                                                                                          );
                                                                                                                                                                                        }
                                                                                                                                                                                        y(
                                                                                                                                                                                          oa,
                                                                                                                                                                                          Wn
                                                                                                                                                                                        );
                                                                                                                                                                                      };
                                                                                                                                                                                  W(
                                                                                                                                                                                    Hn,
                                                                                                                                                                                    (
                                                                                                                                                                                      oa
                                                                                                                                                                                    ) => {
                                                                                                                                                                                      t(
                                                                                                                                                                                        d
                                                                                                                                                                                      ) ===
                                                                                                                                                                                      "themeToggle"
                                                                                                                                                                                        ? oa(
                                                                                                                                                                                            Kn
                                                                                                                                                                                          )
                                                                                                                                                                                        : oa(
                                                                                                                                                                                            Gn,
                                                                                                                                                                                            !1
                                                                                                                                                                                          );
                                                                                                                                                                                    },
                                                                                                                                                                                    !0
                                                                                                                                                                                  );
                                                                                                                                                                                }
                                                                                                                                                                                y(
                                                                                                                                                                                  Er,
                                                                                                                                                                                  Oa
                                                                                                                                                                                );
                                                                                                                                                                              };
                                                                                                                                                                          W(
                                                                                                                                                                            Na,
                                                                                                                                                                            (
                                                                                                                                                                              Er
                                                                                                                                                                            ) => {
                                                                                                                                                                              t(
                                                                                                                                                                                d
                                                                                                                                                                              ) ===
                                                                                                                                                                              "tabs"
                                                                                                                                                                                ? Er(
                                                                                                                                                                                    Ia
                                                                                                                                                                                  )
                                                                                                                                                                                : Er(
                                                                                                                                                                                    un,
                                                                                                                                                                                    !1
                                                                                                                                                                                  );
                                                                                                                                                                            },
                                                                                                                                                                            !0
                                                                                                                                                                          );
                                                                                                                                                                        }
                                                                                                                                                                        y(
                                                                                                                                                                          dr,
                                                                                                                                                                          Da
                                                                                                                                                                        );
                                                                                                                                                                      };
                                                                                                                                                                  W(
                                                                                                                                                                    qn,
                                                                                                                                                                    (
                                                                                                                                                                      dr
                                                                                                                                                                    ) => {
                                                                                                                                                                      t(
                                                                                                                                                                        d
                                                                                                                                                                      ) ===
                                                                                                                                                                      "tablePagination"
                                                                                                                                                                        ? dr(
                                                                                                                                                                            Ma
                                                                                                                                                                          )
                                                                                                                                                                        : dr(
                                                                                                                                                                            Un,
                                                                                                                                                                            !1
                                                                                                                                                                          );
                                                                                                                                                                    },
                                                                                                                                                                    !0
                                                                                                                                                                  );
                                                                                                                                                                }
                                                                                                                                                                y(
                                                                                                                                                                  Pr,
                                                                                                                                                                  La
                                                                                                                                                                );
                                                                                                                                                              };
                                                                                                                                                          W(
                                                                                                                                                            na,
                                                                                                                                                            (
                                                                                                                                                              Pr
                                                                                                                                                            ) => {
                                                                                                                                                              t(
                                                                                                                                                                d
                                                                                                                                                              ) ===
                                                                                                                                                              "switch"
                                                                                                                                                                ? Pr(
                                                                                                                                                                    Ta
                                                                                                                                                                  )
                                                                                                                                                                : Pr(
                                                                                                                                                                    Ho,
                                                                                                                                                                    !1
                                                                                                                                                                  );
                                                                                                                                                            },
                                                                                                                                                            !0
                                                                                                                                                          );
                                                                                                                                                        }
                                                                                                                                                        y(
                                                                                                                                                          Ut,
                                                                                                                                                          Ur
                                                                                                                                                        );
                                                                                                                                                      };
                                                                                                                                                  W(
                                                                                                                                                    qr,
                                                                                                                                                    (
                                                                                                                                                      Ut
                                                                                                                                                    ) => {
                                                                                                                                                      t(
                                                                                                                                                        d
                                                                                                                                                      ) ===
                                                                                                                                                      "splitter"
                                                                                                                                                        ? Ut(
                                                                                                                                                            Et
                                                                                                                                                          )
                                                                                                                                                        : Ut(
                                                                                                                                                            Fa,
                                                                                                                                                            !1
                                                                                                                                                          );
                                                                                                                                                    },
                                                                                                                                                    !0
                                                                                                                                                  );
                                                                                                                                                }
                                                                                                                                                y(
                                                                                                                                                  $t,
                                                                                                                                                  vt
                                                                                                                                                );
                                                                                                                                              };
                                                                                                                                          W(
                                                                                                                                            aa,
                                                                                                                                            (
                                                                                                                                              $t
                                                                                                                                            ) => {
                                                                                                                                              t(
                                                                                                                                                d
                                                                                                                                              ) ===
                                                                                                                                              "select"
                                                                                                                                                ? $t(
                                                                                                                                                    jr
                                                                                                                                                  )
                                                                                                                                                : $t(
                                                                                                                                                    Vr,
                                                                                                                                                    !1
                                                                                                                                                  );
                                                                                                                                            },
                                                                                                                                            !0
                                                                                                                                          );
                                                                                                                                        }
                                                                                                                                        y(
                                                                                                                                          Br,
                                                                                                                                          Rr
                                                                                                                                        );
                                                                                                                                      };
                                                                                                                                  W(
                                                                                                                                    Vn,
                                                                                                                                    (
                                                                                                                                      Br
                                                                                                                                    ) => {
                                                                                                                                      t(
                                                                                                                                        d
                                                                                                                                      ) ===
                                                                                                                                      "slider"
                                                                                                                                        ? Br(
                                                                                                                                            za
                                                                                                                                          )
                                                                                                                                        : Br(
                                                                                                                                            Aa,
                                                                                                                                            !1
                                                                                                                                          );
                                                                                                                                    },
                                                                                                                                    !0
                                                                                                                                  );
                                                                                                                                }
                                                                                                                                y(
                                                                                                                                  Sr,
                                                                                                                                  Ea
                                                                                                                                );
                                                                                                                              };
                                                                                                                          W(
                                                                                                                            Bn,
                                                                                                                            (
                                                                                                                              Sr
                                                                                                                            ) => {
                                                                                                                              t(
                                                                                                                                d
                                                                                                                              ) ===
                                                                                                                              "radio"
                                                                                                                                ? Sr(
                                                                                                                                    Rn
                                                                                                                                  )
                                                                                                                                : Sr(
                                                                                                                                    jn,
                                                                                                                                    !1
                                                                                                                                  );
                                                                                                                            },
                                                                                                                            !0
                                                                                                                          );
                                                                                                                        }
                                                                                                                        y(
                                                                                                                          Cr,
                                                                                                                          Pa
                                                                                                                        );
                                                                                                                      };
                                                                                                                  W(
                                                                                                                    Nn,
                                                                                                                    (
                                                                                                                      Cr
                                                                                                                    ) => {
                                                                                                                      t(
                                                                                                                        d
                                                                                                                      ) ===
                                                                                                                      "progressCircle"
                                                                                                                        ? Cr(
                                                                                                                            In
                                                                                                                          )
                                                                                                                        : Cr(
                                                                                                                            On,
                                                                                                                            !1
                                                                                                                          );
                                                                                                                    },
                                                                                                                    !0
                                                                                                                  );
                                                                                                                }
                                                                                                                y(
                                                                                                                  ra,
                                                                                                                  Dn
                                                                                                                );
                                                                                                              };
                                                                                                          W(
                                                                                                            Mn,
                                                                                                            (
                                                                                                              ra
                                                                                                            ) => {
                                                                                                              t(
                                                                                                                d
                                                                                                              ) ===
                                                                                                              "progressBar"
                                                                                                                ? ra(
                                                                                                                    zs
                                                                                                                  )
                                                                                                                : ra(
                                                                                                                    As,
                                                                                                                    !1
                                                                                                                  );
                                                                                                            },
                                                                                                            !0
                                                                                                          );
                                                                                                        }
                                                                                                        y(
                                                                                                          ta,
                                                                                                          Sa
                                                                                                        );
                                                                                                      };
                                                                                                  W(
                                                                                                    Tn,
                                                                                                    (
                                                                                                      ta
                                                                                                    ) => {
                                                                                                      t(
                                                                                                        d
                                                                                                      ) ===
                                                                                                      "notepad"
                                                                                                        ? ta(
                                                                                                            Ln
                                                                                                          )
                                                                                                        : ta(
                                                                                                            Es,
                                                                                                            !1
                                                                                                          );
                                                                                                    },
                                                                                                    !0
                                                                                                  );
                                                                                                }
                                                                                                y(
                                                                                                  ea,
                                                                                                  Fn
                                                                                                );
                                                                                              };
                                                                                          W(
                                                                                            An,
                                                                                            (
                                                                                              ea
                                                                                            ) => {
                                                                                              t(
                                                                                                d
                                                                                              ) ===
                                                                                              "menu"
                                                                                                ? ea(
                                                                                                    Ss
                                                                                                  )
                                                                                                : ea(
                                                                                                    Ps,
                                                                                                    !1
                                                                                                  );
                                                                                            },
                                                                                            !0
                                                                                          );
                                                                                        }
                                                                                        y(
                                                                                          kr,
                                                                                          ln
                                                                                        );
                                                                                      };
                                                                                  W(
                                                                                    Ca,
                                                                                    (
                                                                                      kr
                                                                                    ) => {
                                                                                      t(
                                                                                        d
                                                                                      ) ===
                                                                                      "form"
                                                                                        ? kr(
                                                                                            qo
                                                                                          )
                                                                                        : kr(
                                                                                            Uo,
                                                                                            !1
                                                                                          );
                                                                                    },
                                                                                    !0
                                                                                  );
                                                                                }
                                                                                y(
                                                                                  Jt,
                                                                                  Or
                                                                                );
                                                                              };
                                                                          W(
                                                                            kt,
                                                                            (
                                                                              Jt
                                                                            ) => {
                                                                              t(
                                                                                d
                                                                              ) ===
                                                                              "filePicker"
                                                                                ? Jt(
                                                                                    qt
                                                                                  )
                                                                                : Jt(
                                                                                    ka,
                                                                                    !1
                                                                                  );
                                                                            },
                                                                            !0
                                                                          );
                                                                        }
                                                                        y(
                                                                          Yt,
                                                                          ya
                                                                        );
                                                                      };
                                                                    W(
                                                                      Nr,
                                                                      (Yt) => {
                                                                        t(d) ===
                                                                        "field"
                                                                          ? Yt(
                                                                              Ir
                                                                            )
                                                                          : Yt(
                                                                              Qr,
                                                                              !1
                                                                            );
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  y(lt, yr);
                                                                };
                                                              W(
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
                                                            y(Lt, lr);
                                                          };
                                                        W(
                                                          rt,
                                                          (Lt) => {
                                                            t(d) ===
                                                            "datePicker"
                                                              ? Lt(ft)
                                                              : Lt(sr, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      y(He, $e);
                                                    };
                                                  W(
                                                    jt,
                                                    (He) => {
                                                      t(d) === "colorPicker"
                                                        ? He(Vt)
                                                        : He(Dr, !1);
                                                    },
                                                    !0
                                                  );
                                                }
                                                y(_t, Tt);
                                              };
                                            W(
                                              Xe,
                                              (_t) => {
                                                t(d) === "codeView"
                                                  ? _t(tt)
                                                  : _t(dt, !1);
                                              },
                                              !0
                                            );
                                          }
                                          y(Me, qe);
                                        };
                                      W(
                                        ct,
                                        (Me) => {
                                          t(d) === "checkbox"
                                            ? Me(ce)
                                            : Me(Ee, !1);
                                        },
                                        !0
                                      );
                                    }
                                    y(mt, Xt);
                                  };
                                W(
                                  nt,
                                  (mt) => {
                                    t(d) === "carousel" ? mt(st) : mt(Pt, !1);
                                  },
                                  !0
                                );
                              }
                              y(Ie, Ne);
                            };
                          W(
                            Te,
                            (Ie) => {
                              t(d) === "card" ? Ie(Ge) : Ie(je, !1);
                            },
                            !0
                          );
                        }
                        y(ke, Fe);
                      };
                    W(
                      ye,
                      (ke) => {
                        t(d) === "button" ? ke(U) : ke(pe, !1);
                      },
                      !0
                    );
                  }
                  y(ie, xe);
                };
              W(
                Se,
                (ie) => {
                  t(d) === "accordion" ? ie(M) : ie(ae, !1);
                },
                !0
              );
            }
            y(ze, ve);
          };
        W(ge, (ze) => {
          t(d) === "about" ? ze(Ae) : ze(Pe, !1);
        });
      }
      (O(
        (ze, ve, Se, M) => {
          (q(_e, 1, ze), q(I, 1, ve), q(de, 1, Se), q(fe, 1, M));
        },
        [
          () => Y(H("p-6 md:p-6 lg:p-6")),
          () => Y(H("flex items-center justify-between")),
          () => Y(H("max-w-[640px] min-h-[560px] mx-auto p-4 md:p-6 lg:p-10")),
          () => Y(H("grid gap-4 md:gap-6 lg:gap-8")),
        ]
      ),
        y(Z, se));
    },
    $$slots: { default: !0 },
  }),
    Be(),
    o());
}
su(wv, { target: document.getElementById("app") });

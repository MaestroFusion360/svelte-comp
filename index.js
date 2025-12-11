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
const Q = () => {};
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
const mt = 2,
  Po = 4,
  Eo = 8,
  yi = 1 << 24,
  or = 16,
  _r = 32,
  Xr = 64,
  kn = 128,
  Yt = 512,
  yt = 1024,
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
function Ys(r) {
  if (we) {
    const e = new Error(`rune_outside_svelte
The \`${r}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function Xs() {
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
function Qs() {
  if (we) {
    const r = new Error(
      "state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation"
    );
    throw ((r.name = "Svelte error"), r);
  } else throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function $s() {
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
  bt = Symbol(),
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
function $n(r) {
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
let Qa = !1,
  hl = !1;
function ml() {
  Qa = !0;
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
let rt = null;
function fa(r) {
  rt = r;
}
let va = null;
function mn(r) {
  va = r;
}
let $a = null;
function Wo(r) {
  $a = r;
}
function Vt(r) {
  return Mi("getContext").get(r);
}
function wl(r, e) {
  return (Mi("setContext").set(r, e), e);
}
function Be(r, e = !1, a) {
  ((rt = {
    p: rt,
    i: !1,
    c: null,
    e: null,
    s: r,
    x: null,
    l: Qa && !e ? { s: null, u: null, $: [] } : null,
  }),
    we && ((rt.function = a), ($a = a)));
}
function Re(r) {
  var e = rt,
    a = e.e;
  if (a !== null) {
    e.e = null;
    for (var n of a) Yi(n);
  }
  return ((e.i = !0), (rt = e.p), we && ($a = rt?.function ?? null), {});
}
function _a() {
  return !Qa || (rt !== null && rt.l === null);
}
function Mi(r) {
  return (rt === null && Rs(r), (rt.c ??= new Map(yl(rt) || void 0)));
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
  if (Kr.length === 0 && !Ha) {
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
  var e = qe;
  if (e === null) return ((He.f |= zr), r);
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
let We = null,
  bn = null,
  Rt = null,
  Bt = [],
  Pn = null,
  vo = !1,
  Ha = !1;
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
    ((Bt = []), (bn = null), this.apply());
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
          (We = null),
          Zo(a.render_effects),
          Zo(a.effects),
          (bn = null),
          this.#l?.resolve()),
      (Rt = null));
  }
  #i(e, a) {
    e.f ^= yt;
    for (var n = e.first; n !== null; ) {
      var o = n.f,
        i = (o & (_r | Xr)) !== 0,
        s = i && (o & yt) !== 0,
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
          ? (n.f ^= yt)
          : (o & Po) !== 0
            ? a.effects.push(n)
            : nn(n) && ((n.f & or) !== 0 && a.block_effects.push(n), Xa(n));
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
        kt(a, yt));
  }
  #u(e) {
    if (e !== null)
      for (const a of e)
        (a.f & mt) === 0 || (a.f & Mr) === 0 || ((a.f ^= Mr), this.#u(a.deps));
  }
  capture(e, a) {
    (this.previous.has(e) || this.previous.set(e, a),
      (e.f & zr) === 0 && (this.current.set(e, e.v), Rt?.set(e, e.v)));
  }
  activate() {
    ((We = this), this.apply());
  }
  deactivate() {
    We === this && ((We = null), (Rt = null));
  }
  flush() {
    if ((this.activate(), Bt.length > 0)) {
      if ((Oi(), We !== null && We !== this)) return;
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
      var e = Rt,
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
          var o = Bt;
          Bt = [];
          const u = new Set(),
            f = new Map();
          for (const h of s) Bi(h, l, u, f);
          if (Bt.length > 0) {
            ((We = i), i.apply());
            for (const h of Bt) i.#i(h, n);
            i.deactivate();
          }
          Bt = o;
        }
      }
      ((We = null), (Rt = e));
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
    for (const e of this.#o) (kt(e, Ft), Zr(e));
    for (const e of this.#n) (kt(e, xr), Zr(e));
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
    if (We === null) {
      const e = (We = new tr());
      (vn.add(We),
        Ha ||
          tr.enqueue(() => {
            We === e && e.flush();
          }));
    }
    return We;
  }
  static enqueue(e) {
    nr(e);
  }
  apply() {}
}
function Sl(r) {
  var e = Ha;
  Ha = !0;
  try {
    for (var a; ; ) {
      if ((kl(), Bt.length === 0 && (We?.flush(), Bt.length === 0)))
        return ((Pn = null), a);
      Oi();
    }
  } finally {
    Ha = e;
  }
}
function Oi() {
  var r = Gr;
  vo = !0;
  var e = we ? new Set() : null;
  try {
    var a = 0;
    for (xn(!0); Bt.length > 0; ) {
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
      if ((n.process(Bt), Fr.clear(), we))
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
        nn(n) &&
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
      (i & mt) !== 0
        ? Bi(o, e, a, n)
        : (i & (Sn | or)) !== 0 &&
          (i & Ft) === 0 &&
          Ri(o, e, n) &&
          (kt(o, Ft), Zr(o));
    }
}
function Ri(r, e, a) {
  const n = a.get(r);
  if (n !== void 0) return n;
  if (r.deps !== null)
    for (const o of r.deps) {
      if (e.includes(o)) return !0;
      if ((o.f & mt) !== 0 && Ri(o, e, a)) return (a.set(o, !0), !0);
    }
  return (a.set(r, !1), !1);
}
function Zr(r) {
  for (var e = (Pn = r); e.parent !== null; ) {
    e = e.parent;
    var a = e.f;
    if (vo && e === qe && (a & or) !== 0 && (a & ki) === 0) return;
    if ((a & (Xr | _r)) !== 0) {
      if ((a & yt) === 0) return;
      e.f ^= yt;
    }
  }
  Bt.push(e);
}
function El(r) {
  let e = 0,
    a = Yr(0),
    n;
  return (
    we && er(a, "createSubscriber version"),
    () => {
      Za() &&
        (t(a),
        rn(
          () => (
            e === 0 && (n = Qr(() => r(() => Ka(a)))),
            (e += 1),
            () => {
              nr(() => {
                ((e -= 1), e === 0 && (n?.(), (n = void 0), Ka(a)));
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
      (this.#f = Yr(this.#d)),
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
      (this.parent = qe.b),
      (this.#e = !!this.#r.pending),
      (this.#o = an(() => {
        qe.b = this;
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
    var a = qe,
      n = He,
      o = rt;
    (Zt(this.#o), At(this.#o), fa(this.#o.ctx));
    try {
      return e();
    } catch (i) {
      return (Ni(i), null);
    } finally {
      (Zt(a), At(n), fa(o));
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
    (this.#n && (ht(this.#n), (this.#n = null)),
      this.#i && (ht(this.#i), (this.#i = null)),
      this.#s && (ht(this.#s), (this.#s = null)));
    var o = !1,
      i = !1;
    const s = () => {
      if (o) {
        bl();
        return;
      }
      ((o = !0),
        i && $s(),
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
    var l = He;
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
  var i = We,
    s = qe,
    l = Tl();
  function u() {
    Promise.all(a.map((f) => Ml(f)))
      .then((f) => {
        l();
        try {
          n([...e.map(o), ...f]);
        } catch (h) {
          (s.f & br) === 0 && ga(h, s);
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
  var r = qe,
    e = He,
    a = rt,
    n = We;
  if (we) var o = va;
  return function (s = !0) {
    (Zt(r), At(e), fa(a), s && n?.activate(), we && mn(o));
  };
}
function _n() {
  (Zt(null), At(null), fa(null), we && mn(null));
}
const Ll = new Set();
function En(r) {
  var e = mt | Ft,
    a = He !== null && (He.f & mt) !== 0 ? He : null;
  return (
    qe !== null && (qe.f |= ma),
    {
      ctx: rt,
      deps: null,
      effects: null,
      equals: Ai,
      f: e,
      fn: r,
      reactions: null,
      rv: 0,
      v: bt,
      wv: 0,
      parent: a ?? qe,
      ac: null,
    }
  );
}
function Ml(r, e) {
  let a = qe;
  a === null && js();
  var n = a.b,
    o = void 0,
    i = Yr(bt),
    s = !He,
    l = new Map();
  return (
    Wl(() => {
      var u = wi();
      o = u.promise;
      try {
        Promise.resolve(r())
          .then(u.resolve, u.reject)
          .then(() => {
            (f === We && f.committed && f.deactivate(), _n());
          });
      } catch (b) {
        (u.reject(b), _n());
      }
      var f = We;
      if (s) {
        var h = !n.is_pending();
        (n.update_pending_count(1),
          f.increment(h),
          l.get(f)?.reject(ua),
          l.delete(f),
          l.set(f, u));
      }
      const C = (b, _ = void 0) => {
        if ((f.activate(), _)) _ !== ua && ((i.f |= zr), ba(i, _));
        else {
          ((i.f & zr) !== 0 && (i.f ^= zr), ba(i, b));
          for (const [w, y] of l) {
            if ((l.delete(w), w === f)) break;
            y.reject(ua);
          }
        }
        s && (n.update_pending_count(-1), f.decrement(h));
      };
      u.promise.then(C, (b) => C(null, b || "unknown"));
    }),
    tn(() => {
      for (const u of l.values()) u.reject(ua);
    }),
    we && (i.f |= Sn),
    new Promise((u) => {
      function f(h) {
        function C() {
          h === o ? u(i) : f(o);
        }
        h.then(C, C);
      }
      f(o);
    })
  );
}
function p(r) {
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
    for (var a = 0; a < e.length; a += 1) ht(e[a]);
  }
}
let eo = [];
function Dl(r) {
  for (var e = r.parent; e !== null; ) {
    if ((e.f & mt) === 0) return (e.f & br) === 0 ? e : null;
    e = e.parent;
  }
  return null;
}
function To(r) {
  var e,
    a = qe;
  if ((Zt(Dl(r)), we)) {
    let n = pa;
    Yo(new Set());
    try {
      (eo.includes(r) && Vs(), eo.push(r), (r.f &= ~Mr), go(r), (e = bo(r)));
    } finally {
      (Zt(a), Yo(n), eo.pop());
    }
  } else
    try {
      ((r.f &= ~Mr), go(r), (e = bo(r)));
    } finally {
      Zt(a);
    }
  return e;
}
function Vi(r) {
  var e = To(r);
  if ((r.equals(e) || (We?.is_fork || (r.v = e), (r.wv = is())), !Jr))
    if (Rt !== null) (Za() || We?.is_fork) && Rt.set(r, e);
    else {
      var a = (r.f & Yt) === 0 ? xr : yt;
      kt(r, a);
    }
}
let pa = new Set();
const Fr = new Map();
function Yo(r) {
  pa = r;
}
let Lo = !1;
function Nl() {
  Lo = !0;
}
function Yr(r, e) {
  var a = { f: 0, v: r, reactions: null, equals: Ai, rv: 0, wv: 0 };
  return a;
}
function ge(r, e) {
  const a = Yr(r);
  return (ns(a), a);
}
function qi(r, e = !1, a = !0) {
  const n = Yr(r);
  return (
    e || (n.equals = Ti),
    Qa && a && rt !== null && rt.l !== null && (rt.l.s ??= []).push(n),
    n
  );
}
function A(r, e, a = !1) {
  He !== null &&
    (!ar || (He.f & hn) !== 0) &&
    _a() &&
    (He.f & (mt | or | Sn | hn)) !== 0 &&
    !hr?.includes(r) &&
    Qs();
  let n = a ? Je(e) : e;
  return (we && Li(n, r.label), ba(r, n));
}
function ba(r, e) {
  if (!r.equals(e)) {
    var a = r.v;
    (Jr ? Fr.set(r, e) : Fr.set(r, a), (r.v = e));
    var n = tr.ensure();
    if ((n.capture(r, a), we)) {
      if (qe !== null) {
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
      qe !== null && (r.set_during_effect = !0);
    }
    ((r.f & mt) !== 0 &&
      ((r.f & Ft) !== 0 && To(r), kt(r, (r.f & Yt) !== 0 ? yt : xr)),
      (r.wv = is()),
      Hi(r, Ft),
      _a() &&
        qe !== null &&
        (qe.f & yt) !== 0 &&
        (qe.f & (_r | Xr)) === 0 &&
        (Ot === null ? Yl([r]) : Ot.push(r)),
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
    for (const a of e) ((a.f & yt) !== 0 && kt(a, xr), nn(a) && Xa(a));
  } finally {
    xn(r);
  }
  pa.clear();
}
function Ka(r) {
  A(r, r.v + 1);
}
function Hi(r, e) {
  var a = r.reactions;
  if (a !== null)
    for (var n = _a(), o = a.length, i = 0; i < o; i++) {
      var s = a[i],
        l = s.f;
      if (!(!n && s === qe)) {
        if (we && (l & hn) !== 0) {
          pa.add(s);
          continue;
        }
        var u = (l & Ft) === 0;
        if ((u && kt(s, e), (l & mt) !== 0)) {
          var f = s;
          (Rt?.delete(f), (l & Mr) === 0 && (l & Yt && (s.f |= Mr), Hi(f, xr)));
        } else u && ((l & or) !== 0 && vr !== null && vr.add(s), Zr(s));
      }
    }
}
const Il = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function Je(r) {
  if (typeof r != "object" || r === null || Ar in r) return r;
  const e = xi(r);
  if (e !== Ds && e !== Ns) return r;
  var a = new Map(),
    n = Co(r),
    o = ge(0),
    i = Wr,
    s = (h) => {
      if (Wr === i) return h();
      var C = He,
        b = Wr;
      (At(null), Qo(i));
      var _ = h();
      return (At(C), Qo(b), _);
    };
  n && (a.set("length", ge(r.length)), we && (r = Bl(r)));
  var l = "";
  let u = !1;
  function f(h) {
    if (!u) {
      ((u = !0), (l = h), er(o, `${l} version`));
      for (const [C, b] of a) er(b, Hr(l, C));
      u = !1;
    }
  }
  return new Proxy(r, {
    defineProperty(h, C, b) {
      (!("value" in b) ||
        b.configurable === !1 ||
        b.enumerable === !1 ||
        b.writable === !1) &&
        Xs();
      var _ = a.get(C);
      return (
        _ === void 0
          ? (_ = s(() => {
              var w = ge(b.value);
              return (
                a.set(C, w),
                we && typeof C == "string" && er(w, Hr(l, C)),
                w
              );
            }))
          : A(_, b.value, !0),
        !0
      );
    },
    deleteProperty(h, C) {
      var b = a.get(C);
      if (b === void 0) {
        if (C in h) {
          const _ = s(() => ge(bt));
          (a.set(C, _), Ka(o), we && er(_, Hr(l, C)));
        }
      } else (A(b, bt), Ka(o));
      return !0;
    },
    get(h, C, b) {
      if (C === Ar) return r;
      if (we && C === Si) return f;
      var _ = a.get(C),
        w = C in h;
      if (
        (_ === void 0 &&
          (!w || pr(h, C)?.writable) &&
          ((_ = s(() => {
            var g = Je(w ? h[C] : bt),
              d = ge(g);
            return (we && er(d, Hr(l, C)), d);
          })),
          a.set(C, _)),
        _ !== void 0)
      ) {
        var y = t(_);
        return y === bt ? void 0 : y;
      }
      return Reflect.get(h, C, b);
    },
    getOwnPropertyDescriptor(h, C) {
      var b = Reflect.getOwnPropertyDescriptor(h, C);
      if (b && "value" in b) {
        var _ = a.get(C);
        _ && (b.value = t(_));
      } else if (b === void 0) {
        var w = a.get(C),
          y = w?.v;
        if (w !== void 0 && y !== bt)
          return { enumerable: !0, configurable: !0, value: y, writable: !0 };
      }
      return b;
    },
    has(h, C) {
      if (C === Ar) return !0;
      var b = a.get(C),
        _ = (b !== void 0 && b.v !== bt) || Reflect.has(h, C);
      if (b !== void 0 || (qe !== null && (!_ || pr(h, C)?.writable))) {
        b === void 0 &&
          ((b = s(() => {
            var y = _ ? Je(h[C]) : bt,
              g = ge(y);
            return (we && er(g, Hr(l, C)), g);
          })),
          a.set(C, b));
        var w = t(b);
        if (w === bt) return !1;
      }
      return _;
    },
    set(h, C, b, _) {
      var w = a.get(C),
        y = C in h;
      if (n && C === "length")
        for (var g = b; g < w.v; g += 1) {
          var d = a.get(g + "");
          d !== void 0
            ? A(d, bt)
            : g in h &&
              ((d = s(() => ge(bt))), a.set(g + "", d), we && er(d, Hr(l, g)));
        }
      if (w === void 0)
        (!y || pr(h, C)?.writable) &&
          ((w = s(() => ge(void 0))),
          we && er(w, Hr(l, C)),
          A(w, Je(b)),
          a.set(C, w));
      else {
        y = w.v !== bt;
        var v = s(() => Je(b));
        A(w, v);
      }
      var c = Reflect.getOwnPropertyDescriptor(h, C);
      if ((c?.set && c.set.call(_, b), !y)) {
        if (n && typeof C == "string") {
          var x = a.get("length"),
            P = Number(C);
          Number.isInteger(P) && P >= x.v && A(x, P + 1);
        }
        Ka(o);
      }
      return !0;
    },
    ownKeys(h) {
      t(o);
      var C = Reflect.ownKeys(h).filter((w) => {
        var y = a.get(w);
        return y === void 0 || y.v !== bt;
      });
      for (var [b, _] of a) _.v !== bt && !(b in h) && C.push(b);
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
function Ga(r) {
  try {
    if (r !== null && typeof r == "object" && Ar in r) return r[Ar];
  } catch {}
  return r;
}
function Ki(r, e) {
  return Object.is(Ga(r), Ga(e));
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
        if (Ga(this[u]) === i) {
          $n("array.indexOf(...)");
          break;
        }
    }
    return l;
  }),
    (r.lastIndexOf = function (i, s) {
      const l = n.call(this, i, s ?? this.length - 1);
      if (l === -1) {
        for (let u = 0; u <= (s ?? this.length - 1); u += 1)
          if (Ga(this[u]) === i) {
            $n("array.lastIndexOf(...)");
            break;
          }
      }
      return l;
    }),
    (r.includes = function (i, s) {
      const l = o.call(this, i, s);
      if (!l) {
        for (let u = 0; u < this.length; u += 1)
          if (Ga(this[u]) === i) {
            $n("array.includes(...)");
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
function en(r) {
  return Wi.call(r);
}
function m(r, e) {
  return rr(r);
}
function Ce(r, e = !1) {
  {
    var a = rr(r);
    return a instanceof Comment && a.data === "" ? en(a) : a;
  }
}
function D(r, e = 1, a = !1) {
  let n = r;
  for (; e--; ) n = en(n);
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
let Xo = !1;
function Ul() {
  Xo ||
    ((Xo = !0),
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
  var e = He,
    a = qe;
  (At(null), Zt(null));
  try {
    return r();
  } finally {
    (At(e), Zt(a));
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
  (qe === null && (He === null && Hs(r), Us()), Jr && qs(r));
}
function Kl(r, e) {
  var a = e.last;
  a === null
    ? (e.last = e.first = r)
    : ((a.next = r), (r.prev = a), (e.last = r));
}
function ir(r, e, a) {
  var n = qe;
  if (we) for (; n !== null && (n.f & hn) !== 0; ) n = n.parent;
  n !== null && (n.f & Nt) !== 0 && (r |= Nt);
  var o = {
    ctx: rt,
    deps: null,
    nodes: null,
    f: r | Ft | Yt,
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
      throw (ht(o), l);
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
      He !== null && (He.f & mt) !== 0 && (r & Xr) === 0))
  ) {
    var s = He;
    (s.effects ??= []).push(i);
  }
  return o;
}
function Za() {
  return He !== null && !ar;
}
function tn(r) {
  const e = ir(Eo, null, !1);
  return (kt(e, yt), (e.teardown = r), e);
}
function Ge(r) {
  (Hl("$effect"), we && Tr(r, "name", { value: "$effect" }));
  var e = qe.f,
    a = !He && (e & _r) !== 0 && (e & Cn) === 0;
  if (a) {
    var n = rt;
    (n.e ??= []).push(r);
  } else return Yi(r);
}
function Yi(r) {
  return ir(Po | Os, r, !1);
}
function Gl(r) {
  tr.ensure();
  const e = ir(Xr | ma, r, !0);
  return (a = {}) =>
    new Promise((n) => {
      a.outro
        ? ca(e, () => {
            (ht(e), n(void 0));
          })
        : (ht(e), n(void 0));
    });
}
function zn(r) {
  return ir(Po, r, !1);
}
function Wl(r) {
  return ir(Sn | ma, r, !0);
}
function rn(r, e = 0) {
  return ir(Eo | e, r, !0);
}
function O(r, e = [], a = [], n = []) {
  ji(n, e, a, (o) => {
    ir(Eo, () => r(...o.map(t)), !0);
  });
}
function an(r, e = 0) {
  var a = ir(or | e, r, !0);
  return (we && (a.dev_stack = va), a);
}
function Xi(r, e = 0) {
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
      n = He;
    (Jo(!0), At(null));
    try {
      e.call(null);
    } finally {
      (Jo(a), At(n));
    }
  }
}
function Qi(r, e = !1) {
  var a = r.first;
  for (r.first = r.last = null; a !== null; ) {
    const o = a.ac;
    o !== null &&
      xa(() => {
        o.abort(ua);
      });
    var n = a.next;
    ((a.f & Xr) !== 0 ? (a.parent = null) : ht(a, e), (a = n));
  }
}
function Zl(r) {
  for (var e = r.first; e !== null; ) {
    var a = e.next;
    ((e.f & _r) === 0 && ht(e), (e = a));
  }
}
function ht(r, e = !0) {
  var a = !1;
  ((e || (r.f & ki) !== 0) &&
    r.nodes !== null &&
    r.nodes.end !== null &&
    ($i(r.nodes.start, r.nodes.end), (a = !0)),
    Qi(r, e && !a),
    wn(r, 0),
    kt(r, br));
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
function $i(r, e) {
  for (; r !== null; ) {
    var a = r === e ? null : en(r);
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
      (a && ht(r), e && e());
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
    ((r.f ^= Nt), (r.f & yt) === 0 && (kt(r, Ft), Zr(r)));
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
      var o = a === n ? null : en(a);
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
let He = null,
  ar = !1;
function At(r) {
  He = r;
}
let qe = null;
function Zt(r) {
  qe = r;
}
let hr = null;
function ns(r) {
  He !== null && (hr === null ? (hr = [r]) : hr.push(r));
}
let Pt = null,
  Mt = 0,
  Ot = null;
function Yl(r) {
  Ot = r;
}
let os = 1,
  Ya = 0,
  Wr = Ya;
function Qo(r) {
  Wr = r;
}
function is() {
  return ++os;
}
function nn(r) {
  var e = r.f;
  if ((e & Ft) !== 0) return !0;
  if ((e & mt && (r.f &= ~Mr), (e & xr) !== 0)) {
    var a = r.deps;
    if (a !== null)
      for (var n = a.length, o = 0; o < n; o++) {
        var i = a[o];
        if ((nn(i) && Vi(i), i.wv > r.wv)) return !0;
      }
    (e & Yt) !== 0 && Rt === null && kt(r, yt);
  }
  return !1;
}
function ss(r, e, a = !0) {
  var n = r.reactions;
  if (n !== null && !hr?.includes(r))
    for (var o = 0; o < n.length; o++) {
      var i = n[o];
      (i.f & mt) !== 0
        ? ss(i, e, !1)
        : e === i && (a ? kt(i, Ft) : (i.f & yt) !== 0 && kt(i, xr), Zr(i));
    }
}
function bo(r) {
  var e = Pt,
    a = Mt,
    n = Ot,
    o = He,
    i = hr,
    s = rt,
    l = ar,
    u = Wr,
    f = r.f;
  ((Pt = null),
    (Mt = 0),
    (Ot = null),
    (He = (f & (_r | Xr)) === 0 ? r : null),
    (hr = null),
    fa(r.ctx),
    (ar = !1),
    (Wr = ++Ya),
    r.ac !== null &&
      (xa(() => {
        r.ac.abort(ua);
      }),
      (r.ac = null)));
  try {
    r.f |= co;
    var h = r.fn,
      C = h(),
      b = r.deps;
    if (Pt !== null) {
      var _;
      if ((wn(r, Mt), b !== null && Mt > 0))
        for (b.length = Mt + Pt.length, _ = 0; _ < Pt.length; _++)
          b[Mt + _] = Pt[_];
      else r.deps = b = Pt;
      if (Za() && (r.f & Yt) !== 0)
        for (_ = Mt; _ < b.length; _++) (b[_].reactions ??= []).push(r);
    } else b !== null && Mt < b.length && (wn(r, Mt), (b.length = Mt));
    if (
      _a() &&
      Ot !== null &&
      !ar &&
      b !== null &&
      (r.f & (mt | xr | Ft)) === 0
    )
      for (_ = 0; _ < Ot.length; _++) ss(Ot[_], r);
    return (
      o !== null &&
        o !== r &&
        (Ya++, Ot !== null && (n === null ? (n = Ot) : n.push(...Ot))),
      (r.f & zr) !== 0 && (r.f ^= zr),
      C
    );
  } catch (w) {
    return Ni(w);
  } finally {
    ((r.f ^= co),
      (Pt = e),
      (Mt = a),
      (Ot = n),
      (He = o),
      (hr = i),
      fa(s),
      (ar = l),
      (Wr = u));
  }
}
function Xl(r, e) {
  let a = e.reactions;
  if (a !== null) {
    var n = Ls.call(a, r);
    if (n !== -1) {
      var o = a.length - 1;
      o === 0 ? (a = e.reactions = null) : ((a[n] = a[o]), a.pop());
    }
  }
  a === null &&
    (e.f & mt) !== 0 &&
    (Pt === null || !Pt.includes(e)) &&
    (kt(e, xr),
    (e.f & Yt) !== 0 && ((e.f ^= Yt), (e.f &= ~Mr)),
    go(e),
    wn(e, 0));
}
function wn(r, e) {
  var a = r.deps;
  if (a !== null) for (var n = e; n < a.length; n++) Xl(r, a[n]);
}
function Xa(r) {
  var e = r.f;
  if ((e & br) === 0) {
    kt(r, yt);
    var a = qe,
      n = Gr;
    if (((qe = r), (Gr = !0), we)) {
      var o = $a;
      Wo(r.component_function);
      var i = va;
      mn(r.dev_stack ?? va);
    }
    try {
      ((e & (or | yi)) !== 0 ? Zl(r) : Qi(r), Ji(r));
      var s = bo(r);
      ((r.teardown = typeof s == "function" ? s : null), (r.wv = os));
      var l;
      we && hl && (r.f & Ft) !== 0 && r.deps;
    } finally {
      ((Gr = n), (qe = a), we && (Wo(o), mn(i)));
    }
  }
}
async function Jl() {
  (await Promise.resolve(), Sl());
}
function t(r) {
  var e = r.f,
    a = (e & mt) !== 0;
  if (He !== null && !ar) {
    var n = qe !== null && (qe.f & br) !== 0;
    if (!n && !hr?.includes(r)) {
      var o = He.deps;
      if ((He.f & co) !== 0)
        r.rv < Ya &&
          ((r.rv = Ya),
          Pt === null && o !== null && o[Mt] === r
            ? Mt++
            : Pt === null
              ? (Pt = [r])
              : Pt.includes(r) || Pt.push(r));
      else {
        (He.deps ??= []).push(r);
        var i = r.reactions;
        i === null ? (r.reactions = [He]) : i.includes(He) || i.push(He);
      }
    }
  }
  if ((we && Ll.delete(r), Jr)) {
    if (Fr.has(r)) return Fr.get(r);
    if (a) {
      var s = r,
        l = s.v;
      return (
        (((s.f & yt) === 0 && s.reactions !== null) || us(s)) && (l = To(s)),
        Fr.set(s, l),
        l
      );
    }
  } else
    a &&
      (!Rt?.has(r) || (We?.is_fork && !Za())) &&
      ((s = r), nn(s) && Vi(s), Gr && Za() && (s.f & Yt) === 0 && ls(s));
  if (Rt?.has(r)) return Rt.get(r);
  if ((r.f & zr) !== 0) throw r.v;
  return r.v;
}
function ls(r) {
  if (r.deps !== null) {
    r.f ^= Yt;
    for (const e of r.deps)
      ((e.reactions ??= []).push(r),
        (e.f & mt) !== 0 && (e.f & Yt) === 0 && ls(e));
  }
}
function us(r) {
  if (r.v === bt) return !0;
  if (r.deps === null) return !1;
  for (const e of r.deps)
    if (Fr.has(e) || ((e.f & mt) !== 0 && us(e))) return !0;
  return !1;
}
function Qr(r) {
  var e = ar;
  try {
    return ((ar = !0), r());
  } finally {
    ar = e;
  }
}
const Ql = -7169;
function kt(r, e) {
  r.f = (r.f & Ql) | e;
}
function $l(r) {
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
    if ((n.capture || Ua.call(e, i), !i.cancelBubble))
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
function wt(r, e, a, n, o) {
  var i = { capture: n, passive: o },
    s = ds(r, e, a, i);
  (e === document.body ||
    e === window ||
    e === document ||
    e instanceof HTMLMediaElement) &&
    tn(() => {
      e.removeEventListener(r, s, i);
    });
}
function lt(r) {
  for (var e = 0; e < r.length; e++) cs.add(r[e]);
  for (var a of ho) a(r);
}
let $o = null;
function Ua(r) {
  var e = this,
    a = e.ownerDocument,
    n = r.type,
    o = r.composedPath?.() || [],
    i = o[0] || r.target;
  $o = r;
  var s = 0,
    l = $o === r && r.__root;
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
    var h = He,
      C = qe;
    (At(null), Zt(null));
    try {
      for (var b, _ = []; i !== null; ) {
        var w = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var y = i["__" + n];
          y != null && (!i.disabled || r.target === i) && y.call(i, r);
        } catch (g) {
          b ? _.push(g) : (b = g);
        }
        if (r.cancelBubble || w === e || w === null) break;
        i = w;
      }
      if (b) {
        for (let g of _)
          queueMicrotask(() => {
            throw g;
          });
        throw b;
      }
    } finally {
      ((r.__root = e), delete r.currentTarget, At(h), Zt(C));
    }
  }
}
function Oo(r) {
  var e = document.createElement("template");
  return ((e.innerHTML = r.replaceAll("<!>", "<!---->")), e.content);
}
function ha(r, e) {
  var a = qe;
  a.nodes === null && (a.nodes = { start: r, end: e, a: null, t: null });
}
function j(r, e) {
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
function qt(r, e) {
  return iu(r, e, "svg");
}
function je(r = "") {
  {
    var e = mr(r + "");
    return (ha(e, e), e);
  }
}
function Me() {
  var r = document.createDocumentFragment(),
    e = document.createComment(""),
    a = mr();
  return (r.append(e, a), ha(e, a), r);
}
function k(r, e) {
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
        var _ = C[b];
        if (!l.has(_)) {
          l.add(_);
          var w = ou(_);
          e.addEventListener(_, Ua, { passive: w });
          var y = ia.get(_);
          y === void 0
            ? (document.addEventListener(_, Ua, { passive: w }), ia.set(_, 1))
            : ia.set(_, y + 1);
        }
      }
    };
  (u(So(cs)), ho.add(u));
  var f = void 0,
    h = Gl(() => {
      var C = a ?? e.appendChild(mr());
      return (
        Al(C, { pending: () => {} }, (b) => {
          if (i) {
            Be({});
            var _ = rt;
            _.c = i;
          }
          (o && (n.$$events = o),
            (mo = s),
            (f = r(b, n) || {}),
            (mo = !0),
            i && Re());
        }),
        () => {
          for (var b of l) {
            e.removeEventListener(b, Ua);
            var _ = ia.get(b);
            --_ === 0
              ? (document.removeEventListener(b, Ua), ia.delete(b))
              : ia.set(b, _);
          }
          (ho.delete(u), C !== a && C.parentNode?.removeChild(C));
        }
      );
    });
  return (uu.set(f, h), f);
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
    var e = We;
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
        l && (ht(l.effect), this.#a.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === a || this.#r.has(i)) continue;
        const l = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var f = document.createDocumentFragment();
            (as(s, f),
              f.append(mr()),
              this.#a.set(i, { effect: s, fragment: f }));
          } else ht(s);
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
      a.includes(n) || (ht(o.effect), this.#a.delete(n));
  };
  ensure(e, a) {
    var n = We,
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
function G(r, e, a = !1) {
  var n = new Bo(r),
    o = a ? Lr : 0;
  function i(s, l) {
    n.ensure(s, l);
  }
  an(() => {
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
  an(() => {
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
      (Vl(u), u.append(l), r.items.clear(), Wt(r, e[0].prev, e[o - 1].next));
    }
    for (var f = 0; f < o; f++) {
      var h = e[f];
      (s || (r.items.delete(h.k), Wt(r, h.prev, h.next)), ht(h.e, !s));
    }
    r.first === e[0] && (r.first = e[0].prev);
  });
}
function ot(r, e, a, n, o, i = null) {
  var s = r,
    l = new Map(),
    u = null,
    f = (e & zi) !== 0,
    h = (e & Pi) !== 0,
    C = (e & Ei) !== 0;
  if (f) {
    var b = r;
    s = b.appendChild(mr());
  }
  var _ = null,
    w = Fo(() => {
      var x = a();
      return Co(x) ? x : x == null ? [] : So(x);
    }),
    y,
    g = !0;
  function d() {
    (vu(c, y, s, e, n),
      _ !== null &&
        (y.length === 0
          ? (_.fragment
              ? (s.before(_.fragment), (_.fragment = null))
              : Io(_.effect),
            (v.first = _.effect))
          : ca(_.effect, () => {
              _ = null;
            })));
  }
  var v = an(() => {
      y = t(w);
      for (
        var x = y.length, P = new Set(), S = We, E = null, T = Zi(), L = 0;
        L < x;
        L += 1
      ) {
        var H = y[L],
          K = n(H, L),
          ae = g ? null : l.get(K);
        (ae
          ? (h && ba(ae.v, H),
            C && ba(ae.i, L),
            T && S.skipped_effects.delete(ae.e))
          : ((ae = gu(g ? s : null, E, H, K, L, o, e, a)),
            g && ((ae.o = !0), E === null ? (u = ae) : (E.next = ae), (E = ae)),
            l.set(K, ae)),
          P.add(K));
      }
      if (x === 0 && i && !_)
        if (g) _ = { fragment: null, effect: zt(() => i(s)) };
        else {
          var de = document.createDocumentFragment(),
            pe = mr();
          (de.append(pe), (_ = { fragment: de, effect: zt(() => i(pe)) }));
        }
      if (!g)
        if (T) {
          for (const [J, re] of l) P.has(J) || S.skipped_effects.add(re.e);
          (S.oncommit(d), S.ondiscard(() => {}));
        } else d();
      t(w);
    }),
    c = { effect: v, items: l, first: u };
  g = !1;
}
function vu(r, e, a, n, o) {
  var i = (n & el) !== 0,
    s = e.length,
    l = r.items,
    u = r.first,
    f,
    h = null,
    C,
    b = [],
    _ = [],
    w,
    y,
    g,
    d;
  if (i)
    for (d = 0; d < s; d += 1)
      ((w = e[d]),
        (y = o(w, d)),
        (g = l.get(y)),
        g.o && (g.e.nodes?.a?.measure(), (C ??= new Set()).add(g)));
  for (d = 0; d < s; d += 1) {
    if (((w = e[d]), (y = o(w, d)), (g = l.get(y)), (r.first ??= g), !g.o)) {
      g.o = !0;
      var v = h ? h.next : u;
      (Wt(r, h, g),
        Wt(r, g, v),
        to(g, v, a),
        (h = g),
        (b = []),
        (_ = []),
        (u = h.next));
      continue;
    }
    if (
      ((g.e.f & Nt) !== 0 &&
        (Io(g.e), i && (g.e.nodes?.a?.unfix(), (C ??= new Set()).delete(g))),
      g !== u)
    ) {
      if (f !== void 0 && f.has(g)) {
        if (b.length < _.length) {
          var c = _[0],
            x;
          h = c.prev;
          var P = b[0],
            S = b[b.length - 1];
          for (x = 0; x < b.length; x += 1) to(b[x], c, a);
          for (x = 0; x < _.length; x += 1) f.delete(_[x]);
          (Wt(r, P.prev, S.next),
            Wt(r, h, P),
            Wt(r, S, c),
            (u = c),
            (h = S),
            (d -= 1),
            (b = []),
            (_ = []));
        } else
          (f.delete(g),
            to(g, u, a),
            Wt(r, g.prev, g.next),
            Wt(r, g, h === null ? r.first : h.next),
            Wt(r, h, g),
            (h = g));
        continue;
      }
      for (b = [], _ = []; u !== null && u !== g; )
        ((u.e.f & Nt) === 0 && (f ??= new Set()).add(u),
          _.push(u),
          (u = u.next));
      if (u === null) continue;
      g = u;
    }
    (b.push(g), (h = g), (u = g.next));
  }
  let E = l.size > s;
  if (u !== null || f !== void 0) {
    for (var T = f === void 0 ? [] : So(f); u !== null; )
      ((u.e.f & Nt) === 0 && T.push(u), (u = u.next));
    var L = T.length;
    if (((E = l.size - L > s), L > 0)) {
      var H = (n & zi) !== 0 && s === 0 ? a : null;
      if (i) {
        for (d = 0; d < L; d += 1) T[d].e.nodes?.a?.measure();
        for (d = 0; d < L; d += 1) T[d].e.nodes?.a?.fix();
      }
      fu(r, T, H);
    }
  }
  if (E) for (const K of l.values()) K.o || (Wt(r, h, K), (h = K));
  ((r.effect.last = h && h.e),
    i &&
      nr(() => {
        if (C !== void 0) for (g of C) g.e.nodes?.a?.apply();
      }));
}
function gu(r, e, a, n, o, i, s, l) {
  var u = (s & Pi) !== 0,
    f = (s & tl) === 0,
    h = u ? (f ? qi(a, !1, !1) : Yr(a)) : a,
    C = (s & Ei) === 0 ? o : Yr(o);
  we &&
    u &&
    (h.trace = () => {
      var w = typeof C == "number" ? o : C.v;
      l()[w];
    });
  var b = { i: C, v: h, k: n, e: null, o: !1, prev: e, next: null };
  if (r === null) {
    var _ = document.createDocumentFragment();
    _.append((r = mr()));
  }
  return ((b.e = zt(() => i(r, h, C, l))), e !== null && (e.next = b), b);
}
function to(r, e, a) {
  if (r.e.nodes)
    for (
      var n = r.next ? r.next.e.nodes.start : a,
        o = e ? e.e.nodes.start : a,
        i = r.e.nodes.start;
      i !== null && i !== n;
    ) {
      var s = en(i);
      (o.before(i), (i = s));
    }
}
function Wt(r, e, a) {
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
    var l = qe;
    if (
      s !== (s = e() ?? "") &&
      (l.nodes !== null && ($i(l.nodes.start, l.nodes.end), (l.nodes = null)),
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
function Qe(r, e, ...a) {
  var n = new Bo(r);
  an(() => {
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
    h = e.inert,
    C = e.style.overflow,
    b,
    _;
  function w() {
    return xa(() => (f ??= a()(e, n?.() ?? {}, { direction: u })));
  }
  var y = {
      is_global: l,
      in() {
        if (((e.inert = h), !o)) {
          (_?.abort(), _?.reset?.());
          return;
        }
        (i || b?.abort(),
          gn(e, "introstart"),
          (b = _o(e, w(), _, 1, () => {
            (gn(e, "introend"),
              b?.abort(),
              (b = f = void 0),
              (e.style.overflow = C));
          })));
      },
      out(c) {
        if (!i) {
          (c?.(), (f = void 0));
          return;
        }
        ((e.inert = !0),
          gn(e, "outrostart"),
          (_ = _o(e, w(), b, 0, () => {
            (gn(e, "outroend"), c?.());
          })));
      },
      stop: () => {
        (b?.abort(), _?.abort());
      },
    },
    g = qe;
  if (((g.nodes.t ??= []).push(y), o && mo)) {
    var d = l;
    if (!d) {
      for (var v = g.parent; v && (v.f & Lr) !== 0; )
        for (; (v = v.parent) && (v.f & or) === 0; );
      d = !v || (v.f & Cn) !== 0;
    }
    d &&
      zn(() => {
        Qr(() => y.in());
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
    return (o(), { abort: Q, deactivate: Q, reset: Q, t: () => n });
  const { delay: u = 0, css: f, tick: h, easing: C = _u } = e;
  var b = [];
  if (i && a === void 0 && (h && h(0, 1), f)) {
    var _ = ei(f(0, 1));
    b.push(_, _);
  }
  var w = () => 1 - n,
    y = r.animate(b, { duration: u, fill: "forwards" });
  return (
    (y.onfinish = () => {
      y.cancel();
      var g = a?.t() ?? 1 - n;
      a?.abort();
      var d = n - g,
        v = e.duration * Math.abs(d),
        c = [];
      if (v > 0) {
        var x = !1;
        if (f)
          for (
            var P = Math.ceil(v / 16.666666666666668), S = 0;
            S <= P;
            S += 1
          ) {
            var E = g + d * C(S / P),
              T = ei(f(E, 1 - E));
            (c.push(T), (x ||= T.overflow === "hidden"));
          }
        (x && (r.style.overflow = "hidden"),
          (w = () => {
            var L = y.currentTime;
            return g + d * C(L / v);
          }),
          h &&
            hu(() => {
              if (y.playState !== "running") return !1;
              var L = w();
              return (h(L, 1 - L), !0);
            }));
      }
      ((y = r.animate(c, { duration: v, fill: "forwards" })),
        (y.onfinish = () => {
          ((w = () => n), h?.(n, 1 - n), o());
        }));
    }),
    {
      abort: () => {
        y && (y.cancel(), (y.effect = null), (y.onfinish = Q));
      },
      deactivate: () => {
        o = Q;
      },
      reset: () => {
        n === 0 && h?.(1, 0);
      },
      t: () => w(),
    }
  );
}
function xu(r, e) {
  var a = void 0,
    n;
  Xi(() => {
    a !== (a = e()) &&
      (n && (ht(n), (n = null)),
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
        h = -1;
      const y = r.length;
      for (var C = 0; C < y; C++) {
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
          if (b === ":" && h === -1) h = C;
          else if (b === ";" || C === y - 1) {
            if (h !== -1) {
              var _ = ro(r.substring(f, h).trim());
              if (!u.includes(_)) {
                b !== ";" && C++;
                var w = r.substring(f, C).trim();
                a += " " + w + ";";
              }
            }
            ((f = C + 1), (h = -1));
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
function it(r, e, a, n) {
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
    tn(() => {
      e.disconnect();
    }));
}
function ni(r) {
  return "__value" in r ? r.__value : r.value;
}
const Va = Symbol("class"),
  qa = Symbol("style"),
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
function be(r, e, a, n) {
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
    h = r.tagName === "OPTION";
  for (var C in e) C in a || (a[C] = null);
  (a.class ? (a.class = Y(a.class)) : (n || a[Va]) && (a.class = null),
    a[qa] && (a.style ??= null));
  var b = hs(r);
  for (const x in a) {
    let P = a[x];
    if (h && x === "value" && P == null) {
      ((r.value = r.__value = ""), (f[x] = P));
      continue;
    }
    if (x === "class") {
      var _ = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      (q(r, _, P, n, e?.[Va], a[Va]), (f[x] = P), (f[Va] = a[Va]));
      continue;
    }
    if (x === "style") {
      (it(r, P, e?.[qa], a[qa]), (f[x] = P), (f[qa] = a[qa]));
      continue;
    }
    var w = f[x];
    if (!(P === w && !(P === void 0 && r.hasAttribute(x)))) {
      f[x] = P;
      var y = x[0] + x[1];
      if (y !== "$$")
        if (y === "on") {
          const S = {},
            E = "$$" + x;
          let T = x.slice(2);
          var g = tu(T);
          if (($l(T) && ((T = T.slice(0, -7)), (S.capture = !0)), !g && w)) {
            if (P != null) continue;
            (r.removeEventListener(T, f[E], S), (f[E] = null));
          }
          if (P != null)
            if (g) ((r[`__${T}`] = P), lt([T]));
            else {
              let L = function (H) {
                f[x].call(this, H);
              };
              var c = L;
              f[E] = ds(T, r, L, S);
            }
          else g && (r[`__${T}`] = void 0);
        } else if (x === "style") be(r, x, P);
        else if (x === "autofocus") ql(r, !!P);
        else if (!l && (x === "__value" || (x === "value" && P != null)))
          r.value = r.__value = P;
        else if (x === "selected" && h) Su(r, P);
        else {
          var d = x;
          u || (d = au(d));
          var v = d === "defaultValue" || d === "defaultChecked";
          if (P == null && !l && !v)
            if (((s[x] = null), d === "value" || d === "checked")) {
              let S = r;
              const E = e === void 0;
              if (d === "value") {
                let T = S.defaultValue;
                (S.removeAttribute(d),
                  (S.defaultValue = T),
                  (S.value = S.__value = E ? T : null));
              } else {
                let T = S.defaultChecked;
                (S.removeAttribute(d),
                  (S.defaultChecked = T),
                  (S.checked = E ? T : !1));
              }
            } else r.removeAttribute(x);
          else
            v || (b.includes(d) && (l || typeof P != "string"))
              ? ((r[d] = P), d in s && (s[d] = bt))
              : typeof P != "function" && be(r, d, P);
        }
    }
  }
  return f;
}
function _t(r, e, a = [], n = [], o = [], i, s = !1, l = !1) {
  ji(o, a, n, (u) => {
    var f = void 0,
      h = {},
      C = r.nodeName === "SELECT",
      b = !1;
    if (
      (Xi(() => {
        var w = e(...u.map(t)),
          y = Pu(r, f, w, i, s, l);
        b && C && "value" in w && xo(r, w.value);
        for (let d of Object.getOwnPropertySymbols(h)) w[d] || ht(h[d]);
        for (let d of Object.getOwnPropertySymbols(w)) {
          var g = w[d];
          (d.description === gl &&
            (!f || g !== f[d]) &&
            (h[d] && ht(h[d]), (h[d] = zt(() => xu(r, () => g)))),
            (y[d] = g));
        }
        f = y;
      }),
      C)
    ) {
      var _ = r;
      zn(() => {
        (xo(_, f.value, !0), Cu(_));
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
      We !== null && n.add(We),
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
    Qr(e) == null &&
      r.value &&
      (a(oo(r) ? io(r.value) : r.value), We !== null && n.add(We)),
    rn(() => {
      we && r.type === "checkbox" && Go();
      var o = e();
      if (r === document.activeElement) {
        var i = bn ?? We;
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
    rn(() => {
      var u = n();
      i
        ? ((u = u || []), (a.checked = u.includes(a.__value)))
        : (a.checked = Ki(a.__value, u));
    }),
    tn(() => {
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
    Qr(e) == null && a(r.checked),
    rn(() => {
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
function st(r = {}, e, a, n) {
  return (
    zn(() => {
      var o, i;
      return (
        rn(() => {
          ((o = i),
            (i = n?.() || []),
            Qr(() => {
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
  if (r == null) return (e(void 0), Q);
  const n = Qr(() => r.subscribe(e, a));
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const sa = [];
function Tu(r, e = Q) {
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
function Lu(r) {
  let e;
  return (ms(r, (a) => (e = a))(), e);
}
let pn = !1,
  wo = Symbol();
function Mu(r, e, a) {
  const n = (a[e] ??= { store: null, source: qi(void 0), unsubscribe: Q });
  if ((we && (n.source.label = e), n.store !== r && !(wo in a)))
    if ((n.unsubscribe(), (n.store = r ?? null), r == null))
      ((n.source.v = void 0), (n.unsubscribe = Q));
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
    tn(() => {
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
function Ct(r, e, a) {
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
  var o = !Qa || (a & al) !== 0,
    i = (a & ol) !== 0,
    s = (a & il) !== 0,
    l = n,
    u = !0,
    f = () => (u && ((u = !1), (l = s ? Qr(n) : n)), l),
    h;
  if (i) {
    var C = Ar in r || Ci in r;
    h = pr(r, e)?.set ?? (C && e in r ? (c) => (r[e] = c) : void 0);
  }
  var b,
    _ = !1;
  (i ? ([b, _] = Nu(() => r[e])) : (b = r[e]),
    b === void 0 && n !== void 0 && ((b = f()), h && (o && Ws(e), h(b))));
  var w;
  if (
    (o
      ? (w = () => {
          var c = r[e];
          return c === void 0 ? f() : ((u = !0), c);
        })
      : (w = () => {
          var c = r[e];
          return (c !== void 0 && (l = void 0), c === void 0 ? l : c);
        }),
    o && (a & nl) === 0)
  )
    return w;
  if (h) {
    var y = r.$$legacy;
    return function (c, x) {
      return arguments.length > 0
        ? ((!o || !x || y || _) && h(x ? w() : c), c)
        : w();
    };
  }
  var g = !1,
    d = ((a & rl) !== 0 ? En : Fo)(() => ((g = !1), w()));
  (we && (d.label = e), i && t(d));
  var v = qe;
  return function (c, x) {
    if (arguments.length > 0) {
      const P = x ? t(d) : o && i ? Je(c) : c;
      return (A(d, P), (g = !0), l !== void 0 && (l = P), c);
    }
    return (Jr && g) || (v.f & br) !== 0 ? d.v : t(d);
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
          Ys(e);
        },
        set: (n) => {
          a = n;
        },
      });
    }
  };
  var Ev = r;
  (r("$state"),
    r("$effect"),
    r("$derived"),
    r("$inspect"),
    r("$props"),
    r("$bindable"));
}
const Ru = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set()).add(Ru);
const ju = {
    app: {
      version: "v1.1.2",
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
  Vu = {
    app: {
      version: "v1.1.2",
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
  qu = {
    app: {
      version: "v1.1.2",
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
  wa = { en: ju, ru: Vu, es: qu },
  Ie = {
    xs: "[font-size:var(--text-xs)]",
    sm: "[font-size:var(--text-sm)]",
    md: "[font-size:var(--text-md)]",
    lg: "[font-size:var(--text-lg)]",
    xl: "[font-size:var(--text-xl)]",
  },
  on = (r = "") => {
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
function da(r, e, a) {
  return Math.min(a, Math.max(e, r));
}
function yo(r, e) {
  return Array.from({ length: r }, (a, n) => e(n));
}
function Uu(r, e) {
  let a;
  return (...n) => {
    (clearTimeout(a), (a = setTimeout(() => r(...n), e)));
  };
}
function Hu(r, e) {
  let a;
  return (...n) => {
    a || (r(...n), (a = !0), setTimeout(() => (a = !1), e));
  };
}
const Ku = typeof window < "u" && !!window.localStorage,
  so = () => (Ku ? window.localStorage : null),
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
  Gu = (r, e) => ({ ...li[r], message: e || li[r].message });
function Wu(r) {
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
const Zu = (r, e = "en-US", a) => {
    const n = Wu(r);
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
var Yu = j(
    '<section><h3><button type="button" class="flex w-full items-center justify-between gap-3 p-2 text-left font-medium text-[var(--color-text-default)] bg-transparent transition-colors hover:bg-[var(--color-bg-hover)] active:bg-[var(--color-bg-active)] focus:outline-none focus:ring-2 focus:ring-[var(--border-color-focus)] focus:ring-inset"><span> </span> <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.135l3.71-3.904a.75.75 0 111.08 1.04l-4.24 4.46a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button></h3> <div><div class="min-h-0"><div> </div></div></div></section>'
  ),
  Xu = j("<div></div>");
function Ju(r, e) {
  Be(e, !0);
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
    h = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-[18px] h-[18px]",
      xl: "w-5 h-5",
    },
    C = p(() => U(l, u[i()], s())),
    b = p(() => h[i()]),
    _ = p(() => U(f[i()], Ie[i()]));
  let w = p(o);
  const y = (v) => t(w).includes(v),
    g = (v) => {
      const c = y(v);
      (A(
        w,
        n() ? (c ? t(w).filter((x) => x !== v) : [...t(w), v]) : c ? [] : [v]
      ),
        e.onToggle?.(v, !c));
    };
  var d = Xu();
  (ot(
    d,
    23,
    a,
    (v, c) => v.id ?? c,
    (v, c, x) => {
      var P = Yu();
      let S;
      var E = m(P),
        T = m(E);
      T.__click = () => g(t(x));
      var L = m(T),
        H = m(L),
        K = D(L, 2);
      let ae;
      var de = D(E, 2);
      let pe;
      var J = m(de),
        re = m(J),
        ue = m(re);
      (O(
        (N, B, $, V, ee) => {
          ((S = q(
            P,
            1,
            "group border-b border-[var(--border-color-default)] last:border-b-0 overflow-hidden",
            null,
            S,
            {
              "first-of-type:rounded-t": a().length > 1,
              "last-of-type:rounded-b": a().length > 1,
            }
          )),
            be(T, "aria-expanded", N),
            X(H, t(c).title),
            (ae = q(K, 0, B, null, ae, $)),
            (pe = q(
              de,
              1,
              "grid overflow-hidden transition-[grid-template-rows] duration-200",
              null,
              pe,
              V
            )),
            q(re, 1, ee),
            X(ue, t(c).content));
        },
        [
          () => y(t(x)),
          () =>
            Y(
              U(
                "shrink-0 transition-transform duration-200 text-[var(--color-text-muted)]",
                t(b)
              )
            ),
          () => ({ "rotate-180": y(t(x)) }),
          () => ({ "grid-rows-[1fr]": y(t(x)), "grid-rows-[0fr]": !y(t(x)) }),
          () => Y(U("leading-relaxed text-[var(--color-text-default)]", t(_))),
        ]
      ),
        k(v, P));
    }
  ),
    O(() => q(d, 1, Y(t(C)))),
    k(r, d),
    Re());
}
lt(["click"]);
var Qu = j('<span aria-hidden="true"></span>'),
  $u = j("<button><span><!></span> <!></button>");
function tt(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "md"),
    n = F(e, "variant", 3, "primary"),
    o = F(e, "type", 3, "button"),
    i = F(e, "loaded", 3, !1),
    s = F(e, "class", 3, ""),
    l = Ct(e, [
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
    C = p(() => U(u, f[a()], Ie[a()], h[n()], s())),
    b = p(() => (i() ? "loading" : e.disabled ? "disabled" : "idle"));
  function _(x) {
    if (e.disabled || i()) {
      x.preventDefault();
      return;
    }
    if (o() === "submit" || o() === "reset") {
      e.onClick?.(x);
      return;
    }
    (e.onClick?.(x),
      !(!e.link || x.defaultPrevented) &&
        (x.button !== 0 ||
          x.metaKey ||
          x.ctrlKey ||
          x.shiftKey ||
          x.altKey ||
          w()));
  }
  function w() {
    if (!e.link || typeof window > "u") return;
    const x = l;
    (typeof x.target == "string" ? x.target : void 0) === "_blank"
      ? window.open(e.link, "_blank", "noopener,noreferrer")
      : window.location.assign(e.link);
  }
  var y = $u();
  _t(y, () => ({
    type: o(),
    disabled: e.disabled,
    "data-state": t(b),
    "aria-disabled": e.disabled || i() || void 0,
    "aria-busy": i() || void 0,
    onclick: _,
    class: t(C),
    ...l,
  }));
  var g = m(y),
    d = m(g);
  Qe(d, () => e.children ?? Q);
  var v = D(g, 2);
  {
    var c = (x) => {
      var P = Qu();
      (O(
        (S) => q(P, 1, S),
        [
          () =>
            Y(
              U(
                "absolute inset-0 m-auto w-[1em] h-[1em] border-2 [border-color:var(--color-spinner,currentColor)] border-r-transparent rounded-full motion-safe:[animation:spin_0.6s_linear_infinite]"
              )
            ),
        ]
      ),
        k(x, P));
    };
    G(v, (x) => {
      i() && x(c);
    });
  }
  (O((x) => q(g, 1, x), [() => Y(U({ "opacity-0 pointer-events-none": i() }))]),
    k(r, y),
    Re());
}
var ec = j("<div><!></div>"),
  tc = j("<div><!></div>"),
  rc = j("<div><!> <div><!></div> <!></div>");
function sn(r, e) {
  Be(e, !0);
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
    l = p(() =>
      U(
        "bg-[var(--color-bg-surface)] border border-[var(--border-color-default)] rounded-xl shadow-sm overflow-hidden",
        Ie[n()],
        "flex flex-col",
        a()
      )
    ),
    u = p(() =>
      o() ? "" : U("border-b border-[var(--border-color-default)]", s[n()])
    ),
    f = p(() => U(s[n()], "flex-1 min-h-0")),
    h = p(() =>
      i() ? "" : U("border-t border-[var(--border-color-default)]", s[n()])
    );
  var C = rc(),
    b = m(C);
  {
    var _ = (v) => {
      var c = ec(),
        x = m(c);
      (Qe(x, () => e.header ?? Q), O(() => q(c, 1, Y(t(u)))), k(v, c));
    };
    G(b, (v) => {
      e.header && v(_);
    });
  }
  var w = D(b, 2),
    y = m(w);
  Qe(y, () => e.children ?? Q);
  var g = D(w, 2);
  {
    var d = (v) => {
      var c = tc(),
        x = m(c);
      (Qe(x, () => e.footer ?? Q), O(() => q(c, 1, Y(t(h)))), k(v, c));
    };
    G(g, (v) => {
      e.footer && v(d);
    });
  }
  (O(() => {
    (q(C, 1, Y(t(l))), q(w, 1, Y(t(f))));
  }),
    k(r, C),
    Re());
}
var ac = j("<img/>"),
  nc = j('<h3 class="font-semibold [color:var(--color-text-default)]"> </h3>'),
  oc = j('<p class="[color:var(--color-text-muted)]"> </p>'),
  ic = j("<div><!> <!> <!></div>"),
  sc = j("<div><!></div>"),
  lc = j(
    '<div class="flex items-center justify-center h-full [color:var(--color-text-muted)]">No items to display</div>'
  ),
  uc = j(
    '<button type="button" aria-label="Previous slide"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 12L6 8L10 4"></path></svg></button> <button type="button" aria-label="Next slide"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4L10 8L6 12"></path></svg></button>',
    1
  ),
  cc = j('<button type="button"></button>'),
  dc = j('<div class="flex justify-center gap-2 p-4"></div>'),
  fc = j('<div><div class="relative"><div><!> <!></div> <!></div> <!></div>');
function vc(r, e) {
  Be(e, !0);
  let a = F(e, "items", 19, () => []),
    n = F(e, "sz", 3, "md"),
    o = F(e, "autoplay", 3, !1),
    i = F(e, "interval", 3, 5e3),
    s = F(e, "showDots", 3, !0),
    l = F(e, "showArrows", 3, !0),
    u = F(e, "class", 3, ""),
    f = Ct(e, [
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
    h = ge(0),
    C = ge(null);
  const b = p(() => a().length > 0),
    _ =
      "relative w-full overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)]",
    w = {
      xs: "rounded-[var(--radius-md)] text-sm",
      sm: "rounded-[var(--radius-md)] text-base",
      md: "rounded-[var(--radius-lg)] text-lg",
      lg: "rounded-[var(--radius-lg)] text-xl",
      xl: "rounded-[var(--radius-xl)] text-2xl",
    },
    y = {
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
    v = p(() => U(_, w[n()], u())),
    c = {
      xs: "min-h-[200px]",
      sm: "min-h-[240px]",
      md: "min-h-[300px]",
      lg: "min-h-[360px]",
      xl: "min-h-[420px]",
    },
    x = p(() => U("relative w-full", c[n()])),
    P = p(() => U("flex flex-col", y[n()])),
    S = {
      xs: "max-h-28",
      sm: "max-h-32",
      md: "max-h-40",
      lg: "max-h-48",
      xl: "max-h-56",
    },
    E = p(() => U("w-full object-cover", S[n()])),
    T = p(() =>
      U(
        g[n()],
        "rounded-full bg-[var(--color-bg-surface)] shadow-lg flex items-center justify-center [color:var(--color-text-default)] hover:bg-[var(--color-bg-hover)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus:outline-none"
      )
    ),
    L = p(() =>
      U(
        d[n()],
        "rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus:outline-none"
      )
    );
  Ge(() => {
    t(b)
      ? t(h) >= a().length
        ? A(h, a().length - 1)
        : t(h) < 0 && A(h, 0)
      : A(h, 0);
  });
  const H = () => {
      t(b) && A(h, (t(h) + 1) % a().length);
    },
    K = () => {
      t(b) && A(h, (t(h) - 1 + a().length) % a().length);
    },
    ae = (I) => {
      I >= 0 && I < a().length && A(h, I, !0);
    };
  Ge(
    () => (
      o() && t(b) && a().length > 1 && A(C, setInterval(H, i()), !0),
      () => {
        t(C) && (clearInterval(t(C)), A(C, null));
      }
    )
  );
  let de = 0,
    pe = 0;
  function J(I) {
    de = I.touches[0].clientX;
  }
  function re(I) {
    pe = I.changedTouches[0].clientX;
    const z = de - pe;
    Math.abs(z) <= 50 || (z > 0 ? H() : K());
  }
  var ue = fc();
  _t(ue, () => ({
    "aria-label": "Carousel",
    class: t(v),
    ontouchstart: J,
    ontouchend: re,
    ...f,
  }));
  var N = m(ue),
    B = m(N),
    $ = m(B);
  ot(
    $,
    19,
    a,
    (I, z) => I.id ?? z,
    (I, z, ne) => {
      var R = sc();
      const fe = (Ae) => {
        var Pe = Me(),
          ze = Ce(Pe);
        {
          var ve = (Se) => {
            var M = ac();
            (O(() => {
              (be(M, "src", t(z).image),
                be(M, "alt", t(z).title || `Slide ${t(ne) + 1}`),
                q(M, 1, Y(t(E))));
            }),
              k(Se, M));
          };
          G(ze, (Se) => {
            t(z).image && Se(ve);
          });
        }
        k(Ae, Pe);
      };
      let he;
      var se = m(R);
      (sn(se, {
        get sz() {
          return n();
        },
        get header() {
          return fe;
        },
        flushHeader: !0,
        class: "h-auto flex flex-col",
        children: (Ae, Pe) => {
          var ze = ic(),
            ve = m(ze);
          {
            var Se = (me) => {
              var ke = nc(),
                ye = m(ke);
              (O(() => X(ye, t(z).title)), k(me, ke));
            };
            G(ve, (me) => {
              t(z).title && me(Se);
            });
          }
          var M = D(ve, 2);
          {
            var oe = (me) => {
              var ke = oc(),
                ye = m(ke);
              (O(() => X(ye, t(z).content)), k(me, ke));
            };
            G(M, (me) => {
              t(z).content && me(oe);
            });
          }
          var le = D(M, 2);
          (Qe(le, () => t(z).children ?? Q),
            O(
              (me) => q(ze, 1, me),
              [() => Y(U(t(P), "flex-1 overflow-auto min-h-0"))]
            ),
            k(Ae, ze));
        },
        $$slots: { default: !0 },
      }),
        O(
          () =>
            (he = q(
              R,
              1,
              "transition-opacity duration-300 ease-in-out",
              null,
              he,
              {
                "opacity-100": t(ne) === t(h),
                "opacity-0": t(ne) !== t(h),
                block: t(ne) === t(h),
                hidden: t(ne) !== t(h),
              }
            ))
        ),
        k(I, R));
    }
  );
  var V = D($, 2);
  {
    var ee = (I) => {
      var z = lc();
      k(I, z);
    };
    G(V, (I) => {
      t(b) || I(ee);
    });
  }
  var Z = D(B, 2);
  {
    var te = (I) => {
      var z = uc(),
        ne = Ce(z);
      ne.__click = K;
      var R = D(ne, 2);
      ((R.__click = H),
        O(
          (fe, he) => {
            (q(ne, 1, fe), q(R, 1, he));
          },
          [
            () => Y(U("absolute left-2 top-1/2 -translate-y-1/2", t(T))),
            () => Y(U("absolute right-2 top-1/2 -translate-y-1/2", t(T))),
          ]
        ),
        k(I, z));
    };
    G(Z, (I) => {
      l() && t(b) && a().length > 1 && I(te);
    });
  }
  var ie = D(N, 2);
  {
    var _e = (I) => {
      var z = dc();
      (ot(
        z,
        23,
        a,
        (ne, R) => ne.id ?? R,
        (ne, R, fe) => {
          var he = cc();
          he.__click = () => ae(t(fe));
          let se;
          (O(() => {
            ((se = q(he, 1, Y(t(L)), null, se, {
              "bg-[var(--color-bg-primary)]": t(fe) === t(h),
              "bg-[var(--color-bg-secondary)]": t(fe) !== t(h),
              "hover:bg-[var(--color-bg-primary)]": t(fe) !== t(h),
            })),
              be(
                he,
                "aria-label",
                `Go to slide ${t(R).title ?? `#${t(fe) + 1}`}`
              ),
              be(he, "aria-current", t(fe) === t(h) ? "true" : void 0));
          }),
            k(ne, he));
        }
      ),
        k(I, z));
    };
    G(ie, (I) => {
      s() && t(b) && a().length > 1 && I(_e);
    });
  }
  (O(() => q(B, 1, Y(t(x)))), k(r, ue), Re());
}
lt(["click"]);
var gc = qt(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round"><line x1="4" y1="12" x2="20" y2="12"></line></svg>'
  ),
  pc = qt(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'
  ),
  bc = j("<span> </span>"),
  hc = j('<label><input/> <span aria-hidden="true"><!></span> <!></label>');
function Ja(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "md"),
    n = F(e, "variant", 3, "default"),
    o = F(e, "indeterminate", 7, !1),
    i = F(e, "checked", 15, !1),
    s = F(e, "class", 3, ""),
    l = F(e, "invalid", 3, !1),
    u = Ct(e, [
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
  const f = p(() => e.id ?? on("chk-")),
    h = {
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
    b = p(() =>
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
    _ =
      "rounded-[var(--radius-sm)] border border-solid cursor-pointer transition-all duration-[var(--transition-fast)] ease-[var(--timing-default)] flex items-center justify-center",
    w =
      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--border-color-focus)] peer-focus-visible:border-[var(--border-color-focus)]",
    y = p(() => (o() ? "mixed" : i() ? "checked" : "unchecked")),
    g = p(() =>
      n() === "neutral"
        ? t(y) === "checked" || t(y) === "mixed"
          ? "var(--border-color-strong)"
          : "var(--border-color-default)"
        : "white"
    ),
    d = p(() =>
      U("inline-flex items-center cursor-pointer select-none", C[a()], s())
    ),
    v = p(() =>
      U(
        _,
        w,
        h[a()],
        t(y) === "checked" && t(b).checked,
        t(y) === "mixed" && t(b).mixed,
        t(y) === "unchecked" && t(b).unchecked,
        "peer-disabled:opacity-[var(--opacity-disabled)] peer-disabled:cursor-not-allowed"
      )
    ),
    c = p(() =>
      U(
        Ie[a()],
        "[color:var(--color-text-muted)] font-medium peer-disabled:cursor-not-allowed"
      )
    );
  function x(pe) {
    o() && (pe.preventDefault(), i(!0), o(!1), e.onChange?.(!0));
  }
  var P = hc(),
    S = m(P),
    E = () => {
      (o() && o(!1), e.onChange?.(i()));
    };
  _t(
    S,
    () => ({
      id: t(f),
      type: "checkbox",
      ...u,
      class: "sr-only peer",
      "aria-checked": o() ? "mixed" : i(),
      "aria-invalid": l() || void 0,
      "aria-describedby": e.describedBy,
      onchange: E,
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0
  );
  var T = D(S, 2);
  T.__click = x;
  var L = m(T);
  {
    var H = (pe) => {
        var J = gc();
        (O(() => be(J, "stroke", t(g))), k(pe, J));
      },
      K = (pe) => {
        var J = Me(),
          re = Ce(J);
        {
          var ue = (N) => {
            var B = pc();
            (O(() => be(B, "stroke", t(g))), k(N, B));
          };
          G(
            re,
            (N) => {
              i() && N(ue);
            },
            !0
          );
        }
        k(pe, J);
      };
    G(L, (pe) => {
      o() ? pe(H) : pe(K, !1);
    });
  }
  var ae = D(T, 2);
  {
    var de = (pe) => {
      var J = bc(),
        re = m(J);
      (O(() => {
        (q(J, 1, Y(t(c))), X(re, e.label));
      }),
        k(pe, J));
    };
    G(ae, (pe) => {
      e.label && pe(de);
    });
  }
  (O(() => {
    (q(P, 1, Y(t(d))),
      be(P, "for", t(f)),
      be(T, "data-state", t(y)),
      q(T, 1, Y(t(v))));
  }),
    Au(S, i),
    k(r, P),
    Re());
}
lt(["click"]);
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
function mc() {
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
                encode: function v(c) {
                  return c instanceof u
                    ? new u(c.type, v(c.content), c.alias)
                    : Array.isArray(c)
                      ? c.map(v)
                      : c
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
                clone: function v(c, x) {
                  x = x || {};
                  var P, S;
                  switch (l.util.type(c)) {
                    case "Object":
                      if (((S = l.util.objId(c)), x[S])) return x[S];
                      ((P = {}), (x[S] = P));
                      for (var E in c)
                        c.hasOwnProperty(E) && (P[E] = v(c[E], x));
                      return P;
                    case "Array":
                      return (
                        (S = l.util.objId(c)),
                        x[S]
                          ? x[S]
                          : ((P = []),
                            (x[S] = P),
                            c.forEach(function (T, L) {
                              P[L] = v(T, x);
                            }),
                            P)
                      );
                    default:
                      return c;
                  }
                },
                getLanguage: function (v) {
                  for (; v; ) {
                    var c = o.exec(v.className);
                    if (c) return c[1].toLowerCase();
                    v = v.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (v, c) {
                  ((v.className = v.className.replace(RegExp(o, "gi"), "")),
                    v.classList.add("language-" + c));
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
                    var v = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                      P.stack
                    ) || [])[1];
                    if (v) {
                      var c = document.getElementsByTagName("script");
                      for (var x in c) if (c[x].src == v) return c[x];
                    }
                    return null;
                  }
                },
                isActive: function (v, c, x) {
                  for (var P = "no-" + c; v; ) {
                    var S = v.classList;
                    if (S.contains(c)) return !0;
                    if (S.contains(P)) return !1;
                    v = v.parentElement;
                  }
                  return !!x;
                },
              },
              languages: {
                plain: s,
                plaintext: s,
                text: s,
                txt: s,
                extend: function (v, c) {
                  var x = l.util.clone(l.languages[v]);
                  for (var P in c) x[P] = c[P];
                  return x;
                },
                insertBefore: function (v, c, x, P) {
                  P = P || l.languages;
                  var S = P[v],
                    E = {};
                  for (var T in S)
                    if (S.hasOwnProperty(T)) {
                      if (T == c)
                        for (var L in x) x.hasOwnProperty(L) && (E[L] = x[L]);
                      x.hasOwnProperty(T) || (E[T] = S[T]);
                    }
                  var H = P[v];
                  return (
                    (P[v] = E),
                    l.languages.DFS(l.languages, function (K, ae) {
                      ae === H && K != v && (this[K] = E);
                    }),
                    E
                  );
                },
                DFS: function v(c, x, P, S) {
                  S = S || {};
                  var E = l.util.objId;
                  for (var T in c)
                    if (c.hasOwnProperty(T)) {
                      x.call(c, T, c[T], P || T);
                      var L = c[T],
                        H = l.util.type(L);
                      H === "Object" && !S[E(L)]
                        ? ((S[E(L)] = !0), v(L, x, null, S))
                        : H === "Array" &&
                          !S[E(L)] &&
                          ((S[E(L)] = !0), v(L, x, T, S));
                    }
                },
              },
              plugins: {},
              highlightAll: function (v, c) {
                l.highlightAllUnder(document, v, c);
              },
              highlightAllUnder: function (v, c, x) {
                var P = {
                  callback: x,
                  container: v,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                (l.hooks.run("before-highlightall", P),
                  (P.elements = Array.prototype.slice.apply(
                    P.container.querySelectorAll(P.selector)
                  )),
                  l.hooks.run("before-all-elements-highlight", P));
                for (var S = 0, E; (E = P.elements[S++]); )
                  l.highlightElement(E, c === !0, P.callback);
              },
              highlightElement: function (v, c, x) {
                var P = l.util.getLanguage(v),
                  S = l.languages[P];
                l.util.setLanguage(v, P);
                var E = v.parentElement;
                E &&
                  E.nodeName.toLowerCase() === "pre" &&
                  l.util.setLanguage(E, P);
                var T = v.textContent,
                  L = { element: v, language: P, grammar: S, code: T };
                function H(ae) {
                  ((L.highlightedCode = ae),
                    l.hooks.run("before-insert", L),
                    (L.element.innerHTML = L.highlightedCode),
                    l.hooks.run("after-highlight", L),
                    l.hooks.run("complete", L),
                    x && x.call(L.element));
                }
                if (
                  (l.hooks.run("before-sanity-check", L),
                  (E = L.element.parentElement),
                  E &&
                    E.nodeName.toLowerCase() === "pre" &&
                    !E.hasAttribute("tabindex") &&
                    E.setAttribute("tabindex", "0"),
                  !L.code)
                ) {
                  (l.hooks.run("complete", L), x && x.call(L.element));
                  return;
                }
                if ((l.hooks.run("before-highlight", L), !L.grammar)) {
                  H(l.util.encode(L.code));
                  return;
                }
                if (c && n.Worker) {
                  var K = new Worker(l.filename);
                  ((K.onmessage = function (ae) {
                    H(ae.data);
                  }),
                    K.postMessage(
                      JSON.stringify({
                        language: L.language,
                        code: L.code,
                        immediateClose: !0,
                      })
                    ));
                } else H(l.highlight(L.code, L.grammar, L.language));
              },
              highlight: function (v, c, x) {
                var P = { code: v, grammar: c, language: x };
                if ((l.hooks.run("before-tokenize", P), !P.grammar))
                  throw new Error(
                    'The language "' + P.language + '" has no grammar.'
                  );
                return (
                  (P.tokens = l.tokenize(P.code, P.grammar)),
                  l.hooks.run("after-tokenize", P),
                  u.stringify(l.util.encode(P.tokens), P.language)
                );
              },
              tokenize: function (v, c) {
                var x = c.rest;
                if (x) {
                  for (var P in x) c[P] = x[P];
                  delete c.rest;
                }
                var S = new C();
                return (b(S, S.head, v), h(v, S, c, S.head, 0), w(S));
              },
              hooks: {
                all: {},
                add: function (v, c) {
                  var x = l.hooks.all;
                  ((x[v] = x[v] || []), x[v].push(c));
                },
                run: function (v, c) {
                  var x = l.hooks.all[v];
                  if (!(!x || !x.length))
                    for (var P = 0, S; (S = x[P++]); ) S(c);
                },
              },
              Token: u,
            };
          n.Prism = l;
          function u(v, c, x, P) {
            ((this.type = v),
              (this.content = c),
              (this.alias = x),
              (this.length = (P || "").length | 0));
          }
          u.stringify = function v(c, x) {
            if (typeof c == "string") return c;
            if (Array.isArray(c)) {
              var P = "";
              return (
                c.forEach(function (H) {
                  P += v(H, x);
                }),
                P
              );
            }
            var S = {
                type: c.type,
                content: v(c.content, x),
                tag: "span",
                classes: ["token", c.type],
                attributes: {},
                language: x,
              },
              E = c.alias;
            (E &&
              (Array.isArray(E)
                ? Array.prototype.push.apply(S.classes, E)
                : S.classes.push(E)),
              l.hooks.run("wrap", S));
            var T = "";
            for (var L in S.attributes)
              T +=
                " " +
                L +
                '="' +
                (S.attributes[L] || "").replace(/"/g, "&quot;") +
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
          function f(v, c, x, P) {
            v.lastIndex = c;
            var S = v.exec(x);
            if (S && P && S[1]) {
              var E = S[1].length;
              ((S.index += E), (S[0] = S[0].slice(E)));
            }
            return S;
          }
          function h(v, c, x, P, S, E) {
            for (var T in x)
              if (!(!x.hasOwnProperty(T) || !x[T])) {
                var L = x[T];
                L = Array.isArray(L) ? L : [L];
                for (var H = 0; H < L.length; ++H) {
                  if (E && E.cause == T + "," + H) return;
                  var K = L[H],
                    ae = K.inside,
                    de = !!K.lookbehind,
                    pe = !!K.greedy,
                    J = K.alias;
                  if (pe && !K.pattern.global) {
                    var re = K.pattern.toString().match(/[imsuy]*$/)[0];
                    K.pattern = RegExp(K.pattern.source, re + "g");
                  }
                  for (
                    var ue = K.pattern || K, N = P.next, B = S;
                    N !== c.tail && !(E && B >= E.reach);
                    B += N.value.length, N = N.next
                  ) {
                    var $ = N.value;
                    if (c.length > v.length) return;
                    if (!($ instanceof u)) {
                      var V = 1,
                        ee;
                      if (pe) {
                        if (
                          ((ee = f(ue, B, v, de)), !ee || ee.index >= v.length)
                        )
                          break;
                        var _e = ee.index,
                          Z = ee.index + ee[0].length,
                          te = B;
                        for (te += N.value.length; _e >= te; )
                          ((N = N.next), (te += N.value.length));
                        if (
                          ((te -= N.value.length),
                          (B = te),
                          N.value instanceof u)
                        )
                          continue;
                        for (
                          var ie = N;
                          ie !== c.tail &&
                          (te < Z || typeof ie.value == "string");
                          ie = ie.next
                        )
                          (V++, (te += ie.value.length));
                        (V--, ($ = v.slice(B, te)), (ee.index -= B));
                      } else if (((ee = f(ue, 0, $, de)), !ee)) continue;
                      var _e = ee.index,
                        I = ee[0],
                        z = $.slice(0, _e),
                        ne = $.slice(_e + I.length),
                        R = B + $.length;
                      E && R > E.reach && (E.reach = R);
                      var fe = N.prev;
                      (z && ((fe = b(c, fe, z)), (B += z.length)), _(c, fe, V));
                      var he = new u(T, ae ? l.tokenize(I, ae) : I, J, I);
                      if (((N = b(c, fe, he)), ne && b(c, N, ne), V > 1)) {
                        var se = { cause: T + "," + H, reach: R };
                        (h(v, c, x, N.prev, B, se),
                          E && se.reach > E.reach && (E.reach = se.reach));
                      }
                    }
                  }
                }
              }
          }
          function C() {
            var v = { value: null, prev: null, next: null },
              c = { value: null, prev: v, next: null };
            ((v.next = c), (this.head = v), (this.tail = c), (this.length = 0));
          }
          function b(v, c, x) {
            var P = c.next,
              S = { value: x, prev: c, next: P };
            return ((c.next = S), (P.prev = S), v.length++, S);
          }
          function _(v, c, x) {
            for (var P = c.next, S = 0; S < x && P !== v.tail; S++) P = P.next;
            ((c.next = P), (P.prev = c), (v.length -= S));
          }
          function w(v) {
            for (var c = [], x = v.head.next; x !== v.tail; )
              (c.push(x.value), (x = x.next));
            return c;
          }
          if (!n.document)
            return (
              n.addEventListener &&
                (l.disableWorkerMessageHandler ||
                  n.addEventListener(
                    "message",
                    function (v) {
                      var c = JSON.parse(v.data),
                        x = c.language,
                        P = c.code,
                        S = c.immediateClose;
                      (n.postMessage(l.highlight(P, l.languages[x], x)),
                        S && n.close());
                    },
                    !1
                  )),
              l
            );
          var y = l.util.currentScript();
          y &&
            ((l.filename = y.src),
            y.hasAttribute("data-manual") && (l.manual = !0));
          function g() {
            l.manual || l.highlightAll();
          }
          if (!l.manual) {
            var d = document.readyState;
            d === "loading" || (d === "interactive" && y && y.defer)
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
              o = function (y, g) {
                return "✖ Error " + y + " while fetching file: " + g;
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
            function b(y, g, d) {
              var v = new XMLHttpRequest();
              (v.open("GET", y, !0),
                (v.onreadystatechange = function () {
                  v.readyState == 4 &&
                    (v.status < 400 && v.responseText
                      ? g(v.responseText)
                      : v.status >= 400
                        ? d(o(v.status, v.statusText))
                        : d(i));
                }),
                v.send(null));
            }
            function _(y) {
              var g = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y || "");
              if (g) {
                var d = Number(g[1]),
                  v = g[2],
                  c = g[3];
                return v ? (c ? [d, Number(c)] : [d, void 0]) : [d, d];
              }
            }
            (a.hooks.add("before-highlightall", function (y) {
              y.selector += ", " + C;
            }),
              a.hooks.add("before-sanity-check", function (y) {
                var g = y.element;
                if (g.matches(C)) {
                  ((y.code = ""), g.setAttribute(l, u));
                  var d = g.appendChild(document.createElement("CODE"));
                  d.textContent = n;
                  var v = g.getAttribute("data-src"),
                    c = y.language;
                  if (c === "none") {
                    var x = (/\.(\w+)$/.exec(v) || [, "none"])[1];
                    c = s[x] || x;
                  }
                  (a.util.setLanguage(d, c), a.util.setLanguage(g, c));
                  var P = a.plugins.autoloader;
                  (P && P.loadLanguages(c),
                    b(
                      v,
                      function (S) {
                        g.setAttribute(l, f);
                        var E = _(g.getAttribute("data-range"));
                        if (E) {
                          var T = S.split(/\r\n?|\n/g),
                            L = E[0],
                            H = E[1] == null ? T.length : E[1];
                          (L < 0 && (L += T.length),
                            (L = Math.max(0, Math.min(L - 1, T.length))),
                            H < 0 && (H += T.length),
                            (H = Math.max(0, Math.min(H, T.length))),
                            (S = T.slice(L, H).join(`
`)),
                            g.hasAttribute("data-start") ||
                              g.setAttribute("data-start", String(L + 1)));
                        }
                        ((d.textContent = S), a.highlightElement(d));
                      },
                      function (S) {
                        (g.setAttribute(l, h), (d.textContent = S));
                      }
                    ));
                }
              }),
              (a.plugins.fileHighlight = {
                highlight: function (g) {
                  for (
                    var d = (g || document).querySelectorAll(C), v = 0, c;
                    (c = d[v++]);
                  )
                    a.highlightElement(c);
                },
              }));
            var w = !1;
            a.fileHighlight = function () {
              (w ||
                (console.warn(
                  "Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."
                ),
                (w = !0)),
                a.plugins.fileHighlight.highlight.apply(this, arguments));
            };
          })());
      })(lo)),
    lo.exports
  );
}
var di = mc();
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
function _c() {
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
_c();
var xc = j("<button> </button>"),
  wc = j("<div><div> </div> <!></div>"),
  yc = j("<div></div>"),
  kc = j("<div></div>"),
  Cc = j(
    '<div><!> <div><!> <div class="relative flex-1 min-h-[180px] max-h-[480px]"><div aria-hidden="true"><!></div> <textarea spellcheck="false"></textarea></div></div></div>'
  );
function ws(r, e) {
  Be(e, !0);
  let a = F(e, "code", 15, ""),
    n = F(e, "language", 3, "txt"),
    o = F(e, "title", 3, "Code"),
    i = F(e, "showCopyButton", 3, !0),
    s = F(e, "showLineNumbers", 3, !1),
    l = F(e, "editable", 3, !1),
    u = F(e, "activeLine", 3, !1),
    f = F(e, "sz", 3, "md"),
    h = ge(null),
    C = ge(null),
    b = ge(null),
    _ = ge(!1),
    w = ge(0),
    y = ge(0),
    g = ge(12);
  const d = p(() =>
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
  let c = ge(20);
  function x(V) {
    return V.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function P(V, ee) {
    if (V === "") return "";
    if (ee === "txt") return x(V);
    const Z = ee === "html" ? "markup" : ee,
      te = di.languages[Z];
    return di.highlight(V, te, Z);
  }
  const S = p(() => P(a(), n()));
  function E() {
    if (!u() || !t(h)) return;
    const V = t(h).selectionStart ?? 0,
      ee = a().slice(0, V);
    A(
      w,
      ee.split(`
`).length - 1
    );
  }
  function T(V) {
    const ee = V.currentTarget;
    (t(C) && (t(C).scrollTop = ee.scrollTop),
      t(b) &&
        ((t(b).scrollTop = ee.scrollTop),
        (t(b).scrollLeft = ee.scrollLeft),
        A(y, ee.scrollTop, !0)));
  }
  Ge(() => {
    if ((f(), !t(h))) return;
    const V = getComputedStyle(t(h)),
      ee = Number.parseFloat(V.lineHeight);
    Number.isNaN(ee) || A(c, ee, !0);
    const Z = Number.parseFloat(V.paddingTop);
    Number.isNaN(Z) || A(g, Z, !0);
  });
  async function L() {
    (await navigator.clipboard.writeText(a()),
      A(_, !0),
      setTimeout(() => A(_, !1), 1200));
  }
  var H = Cc(),
    K = m(H);
  {
    var ae = (V) => {
      var ee = wc(),
        Z = m(ee),
        te = m(Z),
        ie = D(Z, 2);
      {
        var _e = (I) => {
          var z = xc();
          z.__click = L;
          let ne;
          var R = m(z);
          (O(
            (fe) => {
              ((ne = q(z, 1, fe, "svelte-dvc4kn", ne, {
                "!bg-green-600": t(_),
              })),
                X(R, t(_) ? "Copied" : "Copy"));
            },
            [
              () =>
                Y(
                  U(
                    "px-3 py-0.5 text-xs rounded bg-[var(--color-primary)] text-white hover:opacity-[var(--opacity-hover)]",
                    "transition focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus:outline-none"
                  )
                ),
            ]
          ),
            k(I, z));
        };
        G(ie, (I) => {
          i() && I(_e);
        });
      }
      (O(
        (I) => {
          (q(ee, 1, I, "svelte-dvc4kn"), X(te, o()));
        },
        [
          () =>
            Y(
              U(
                "px-3 py-1 bg-[var(--color-bg-muted)] font-semibold uppercase flex items-center justify-between",
                Ie[f()]
              )
            ),
        ]
      ),
        k(V, ee));
    };
    G(K, (V) => {
      o() && V(ae);
    });
  }
  var de = D(K, 2),
    pe = m(de);
  {
    var J = (V) => {
      var ee = kc();
      (ot(
        ee,
        21,
        () => t(d),
        du,
        (Z, te, ie) => {
          var _e = yc();
          ((_e.textContent = ie + 1),
            O(() => q(_e, 1, Y(v[f()]), "svelte-dvc4kn")),
            k(Z, _e));
        }
      ),
        st(
          ee,
          (Z) => A(C, Z),
          () => t(C)
        ),
        O(
          (Z) => q(ee, 1, Z, "svelte-dvc4kn"),
          [
            () =>
              Y(
                U(
                  "select-none px-3 py-[12px] border-r border-[var(--border-color-default)]",
                  "text-[var(--color-text-muted)] text-right overflow-hidden",
                  "bg-[var(--color-bg-surface)] tabular-nums min-h-[180px] max-h-[480px]"
                )
              ),
          ]
        ),
        k(V, ee));
    };
    G(pe, (V) => {
      s() && V(J);
    });
  }
  var re = D(pe, 2),
    ue = m(re);
  let N;
  var B = m(ue);
  (pu(B, () => t(S)),
    st(
      ue,
      (V) => A(b, V),
      () => t(b)
    ));
  var $ = D(ue, 2);
  (($.__input = function (...V) {
    (l() ? E : void 0)?.apply(this, V);
  }),
    ($.__keyup = function (...V) {
      (l() ? E : void 0)?.apply(this, V);
    }),
    ($.__click = function (...V) {
      (l() ? E : void 0)?.apply(this, V);
    }),
    ($.__mouseup = function (...V) {
      (l() ? E : void 0)?.apply(this, V);
    }),
    st(
      $,
      (V) => A(h, V),
      () => t(h)
    ),
    O(
      (V) => {
        (q(H, 1, V, "svelte-dvc4kn"),
          q(
            de,
            1,
            `flex font-mono ${Ie[f()] ?? ""} ${v[f()] ?? ""}`,
            "svelte-dvc4kn"
          ),
          (N = q(
            ue,
            1,
            `cv-highlight cv-layer ${Ie[f()] ?? ""} ${v[f()] ?? ""}`,
            "svelte-dvc4kn",
            N,
            { "cv-active-line": u() && l() }
          )),
          it(
            ue,
            u() && l()
              ? `--cv-line-height: ${t(c)}px; --cv-active-line-top: ${t(g) + t(w) * t(c) - t(y)}px;`
              : void 0
          ),
          ($.readOnly = !l()),
          q(
            $,
            1,
            `cv-input cv-layer ${Ie[f()] ?? ""} ${v[f()] ?? ""}`,
            "svelte-dvc4kn"
          ));
      },
      [
        () =>
          Y(
            U(
              "w-full border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]",
              "text-[var(--color-text-default)]"
            )
          ),
      ]
    ),
    wt("scroll", $, T),
    wt("focus", $, function (...V) {
      (l() ? E : void 0)?.apply(this, V);
    }),
    Eu($, a),
    k(r, H),
    Re());
}
lt(["click", "input", "keyup", "mouseup"]);
const Sc = {
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
  Pc = {
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
      primaryColorSelect: { text: "Основной цвет" },
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
  Ec = {
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
  ya = { en: Sc, ru: Pc, es: Ec };
var zc = j(
  '<div><div class="text-md font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <input type="color" class="invisible absolute w-px h-px" value="#000000"/> <div class="mt-3 p-4 border border-dashed border-[var(--border-color-default)] rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] flex items-center justify-between gap-3" aria-live="polite"><div><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div> <div class="w-12 h-12 rounded-[var(--radius-sm)] border border-[var(--border-color-default)] shadow-inner"></div></div></div>'
);
function Ac(r, e) {
  Be(e, !0);
  let a = F(e, "value", 15, null),
    n = F(e, "disabled", 3, !1),
    o = F(e, "clearable", 3, !0),
    i = F(e, "class", 3, ""),
    s = Ct(e, [
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
  const l = Vt("lang") ?? null,
    u = p(() => l?.value ?? "en"),
    f = p(() => ya[t(u)].components.colorPicker),
    h = p(() => e.label ?? t(f).text),
    C = p(() => e.placeholder ?? t(f).placeholder);
  let b;
  const _ = "inline-block w-full",
    w = p(() => U(_, i())),
    y = p(() => !!a()),
    g = p(() => a() ?? "transparent");
  Ge(() => {
    b && (b.value = a() || "#000000");
  });
  function d() {
    n() ||
      (typeof b?.showPicker == "function"
        ? b.showPicker()
        : (b?.focus(), b?.click()));
  }
  function v(V) {
    const Z = V.target.value || null;
    (a(Z), e.onChange?.(Z));
  }
  function c() {
    o() && (a(null), b && (b.value = "#000000"), e.onChange?.(null));
  }
  var x = zc();
  _t(x, () => ({ class: t(w), ...s }));
  var P = m(x),
    S = m(P),
    E = D(P, 2),
    T = m(E);
  tt(T, {
    onClick: d,
    get disabled() {
      return n();
    },
    sz: "xs",
    children: (V, ee) => {
      var Z = je();
      (O(() => X(Z, t(f).color)), k(V, Z));
    },
    $$slots: { default: !0 },
  });
  var L = D(T, 2);
  {
    var H = (V) => {
      {
        let ee = p(() => !t(y) || n());
        tt(V, {
          onClick: c,
          variant: "danger",
          get disabled() {
            return t(ee);
          },
          sz: "xs",
          children: (Z, te) => {
            var ie = je();
            (O(() => X(ie, t(f).clear)), k(Z, ie));
          },
          $$slots: { default: !0 },
        });
      }
    };
    G(L, (V) => {
      o() && V(H);
    });
  }
  var K = D(E, 2);
  ((K.__change = v),
    st(
      K,
      (V) => (b = V),
      () => b
    ));
  var ae = D(K, 2),
    de = m(ae),
    pe = m(de),
    J = m(pe),
    re = D(pe, 2),
    ue = m(re);
  {
    var N = (V) => {
        var ee = je();
        (O(() => X(ee, a())), k(V, ee));
      },
      B = (V) => {
        var ee = je();
        (O(() => X(ee, t(C))), k(V, ee));
      };
    G(ue, (V) => {
      t(y) ? V(N) : V(B, !1);
    });
  }
  var $ = D(de, 2);
  (O(() => {
    (X(S, `${t(h) ?? ""}:`),
      (K.disabled = n()),
      X(J, t(f).selectedColor),
      be($, "aria-label", t(y) ? `Preview of ${a()}` : "No color selected"),
      it($, `background:${t(g)}`));
  }),
    k(r, x),
    Re());
}
lt(["change"]);
var Fc = j(
  '<div><div class="text-md font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <input type="date" class="invisible absolute w-px h-px"/> <div class="mt-3 p-4 bg-[var(--color-bg-surface)] text-center" aria-live="polite"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div></div>'
);
function Tc(r, e) {
  Be(e, !0);
  let a = F(e, "value", 15, null),
    n = F(e, "disabled", 3, !1),
    o = F(e, "clearable", 3, !0),
    i = F(e, "class", 3, ""),
    s = Ct(e, [
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
  const l = Vt("lang") ?? null,
    u = p(() => l?.value ?? "en"),
    f = p(() => ya[t(u)].components.datePicker),
    h = p(() => e.label ?? t(f).text),
    C = p(() => e.placeholder ?? t(f).placeholder);
  let b;
  const _ = "inline-block w-full",
    w = p(() => U(_, i())),
    y = p(() => !!a()),
    g = p(() => Zu(a(), e.locale, e.formatOptions));
  Ge(() => {
    b && (b.value = a() ?? "");
  });
  function d() {
    n() ||
      (typeof b?.showPicker == "function"
        ? b.showPicker()
        : (b?.focus(), b?.click()));
  }
  function v(B) {
    const V = B.target.value || null;
    (a(V), e.onChange?.(V));
  }
  function c() {
    o() && (a(null), b && (b.value = ""), e.onChange?.(null));
  }
  var x = Fc();
  _t(x, () => ({ class: t(w), ...s }));
  var P = m(x),
    S = m(P),
    E = D(P, 2),
    T = m(E);
  tt(T, {
    onClick: d,
    get disabled() {
      return n();
    },
    sz: "xs",
    children: (B, $) => {
      var V = je();
      (O(() => X(V, t(f).date)), k(B, V));
    },
    $$slots: { default: !0 },
  });
  var L = D(T, 2);
  {
    var H = (B) => {
      {
        let $ = p(() => !t(y) || n());
        tt(B, {
          onClick: c,
          variant: "danger",
          get disabled() {
            return t($);
          },
          sz: "xs",
          children: (V, ee) => {
            var Z = je();
            (O(() => X(Z, t(f).clear)), k(V, Z));
          },
          $$slots: { default: !0 },
        });
      }
    };
    G(L, (B) => {
      o() && B(H);
    });
  }
  var K = D(E, 2);
  ((K.__change = v),
    st(
      K,
      (B) => (b = B),
      () => b
    ));
  var ae = D(K, 2),
    de = m(ae),
    pe = m(de),
    J = D(de, 2),
    re = m(J);
  {
    var ue = (B) => {
        var $ = je();
        (O(() => X($, t(g))), k(B, $));
      },
      N = (B) => {
        var $ = je();
        (O(() => X($, t(C))), k(B, $));
      };
    G(re, (B) => {
      t(y) ? B(ue) : B(N, !1);
    });
  }
  (O(() => {
    (X(S, `${t(h) ?? ""}:`),
      be(K, "min", e.min),
      be(K, "max", e.max),
      (K.disabled = n()),
      X(pe, t(f).selectedDate));
  }),
    k(r, x),
    Re());
}
lt(["change"]);
var Lc = j("<h3> </h3> <p> </p>", 1),
  Mc = j('<div class="mt-3"><!></div>'),
  Dc = j(
    '<div class="fixed inset-0 z-[var(--z-modal)] bg-oklch(0_0_0/var(--opacity-overlay)) flex items-center justify-center p-4" role="presentation" tabindex="-1"><div role="dialog" aria-modal="true"><div><!> <!></div> <div><!> <!></div></div></div>'
  ),
  Nc = j("<div><!></div>"),
  Ic = j(
    '<div class="fixed top-4 right-4 z-[var(--z-modal)]" role="dialog" aria-modal="false" tabindex="-1"><div><div><!> <!></div> <div><!> <!></div></div></div>'
  );
function ko(r, e) {
  Be(e, !0);
  const a = (J) => {
    var re = Lc(),
      ue = Ce(re),
      N = m(ue),
      B = D(ue, 2),
      $ = m(B);
    (O(
      (V, ee) => {
        (q(ue, 1, V), X(N, o()), q(B, 1, ee), X($, i()));
      },
      [
        () =>
          Y(
            U(
              "mb-2 font-[var(--font-weight-semibold)] color-[var(--color-text-default)]",
              t(H)
            )
          ),
        () =>
          Y(
            U(
              "leading-[var(--line-height-normal)] color-[var(--color-text-muted)]",
              t(K)
            )
          ),
      ]
    ),
      k(J, re));
  };
  let n = F(e, "open", 3, !1),
    o = F(e, "title", 3, ""),
    i = F(e, "message", 3, ""),
    s = F(e, "onConfirm", 3, () => {}),
    l = F(e, "onCancel", 3, () => {}),
    u = F(e, "onClose", 3, () => {}),
    f = F(e, "modal", 3, !0),
    h = F(e, "class", 3, ""),
    C = F(e, "sz", 3, "md");
  const b = Vt("lang") ?? null,
    _ = p(() => b?.value ?? "en"),
    w = p(() => ya[t(_)].components.dialog);
  let y = ge(null),
    g = null;
  function d() {
    (s()(), u()());
  }
  function v() {
    (l()(), u()());
  }
  function c(J) {
    J.key === "Escape" && (J.preventDefault(), v());
  }
  const x =
      "bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)] shadow-lg min-w-80 max-w-md w-full border border-[var(--border-color-default)]",
    P = {
      xs: "p-[var(--spacing-sm)]",
      sm: "p-[var(--spacing-md)]",
      md: "p-[var(--spacing-lg)]",
      lg: "p-[var(--spacing-xl)]",
      xl: "p-[var(--spacing-xl)]",
    },
    S = { xs: Ie.md, sm: Ie.md, md: Ie.xl, lg: Ie.xl, xl: "text-2xl" },
    E = p(() => U(x, h())),
    T = p(() => P[C()]),
    L = p(() => U(t(T), "pt-0")),
    H = p(() => S[C()]),
    K = p(() => Ie[C()]);
  Ge(
    () => (
      g?.(),
      n() && t(y)
        ? queueMicrotask(() => {
            (_s(t(y)), f() && (g = xs(t(y))));
          })
        : (g = null),
      () => {
        (g?.(), (g = null));
      }
    )
  );
  var ae = Me(),
    de = Ce(ae);
  {
    var pe = (J) => {
      var re = Me(),
        ue = Ce(re);
      {
        var N = ($) => {
            var V = Dc();
            V.__keydown = c;
            var ee = m(V),
              Z = m(ee),
              te = m(Z);
            a(te);
            var ie = D(te, 2);
            {
              var _e = (R) => {
                var fe = Mc(),
                  he = m(fe);
                (Qe(he, () => e.children ?? Q, C), k(R, fe));
              };
              G(ie, (R) => {
                e.children && R(_e);
              });
            }
            var I = D(Z, 2),
              z = m(I);
            tt(z, {
              get sz() {
                return C();
              },
              variant: "primary",
              onClick: d,
              children: (R, fe) => {
                var he = je();
                (O(() => X(he, t(w).ok)), k(R, he));
              },
              $$slots: { default: !0 },
            });
            var ne = D(z, 2);
            (tt(ne, {
              get sz() {
                return C();
              },
              variant: "secondary",
              onClick: v,
              children: (R, fe) => {
                var he = je();
                (O(() => X(he, t(w).cancel)), k(R, he));
              },
              $$slots: { default: !0 },
            }),
              st(
                ee,
                (R) => A(y, R),
                () => t(y)
              ),
              O(
                (R) => {
                  (q(ee, 1, Y(t(E))),
                    be(ee, "aria-label", o()),
                    q(Z, 1, Y(t(T))),
                    q(I, 1, R));
                },
                [() => Y(U("flex gap-2 justify-end", t(L)))]
              ),
              k($, V));
          },
          B = ($) => {
            var V = Ic();
            V.__keydown = c;
            var ee = m(V),
              Z = m(ee),
              te = m(Z);
            a(te);
            var ie = D(te, 2);
            {
              var _e = (R) => {
                var fe = Nc(),
                  he = m(fe);
                (Qe(he, () => e.children ?? Q, C),
                  O((se) => q(fe, 1, se), [() => Y(U("mt-3", t(K)))]),
                  k(R, fe));
              };
              G(ie, (R) => {
                e.children && R(_e);
              });
            }
            var I = D(Z, 2),
              z = m(I);
            tt(z, {
              get sz() {
                return C();
              },
              variant: "primary",
              onClick: d,
              children: (R, fe) => {
                var he = je();
                (O(() => X(he, t(w).ok)), k(R, he));
              },
              $$slots: { default: !0 },
            });
            var ne = D(z, 2);
            (tt(ne, {
              get sz() {
                return C();
              },
              variant: "secondary",
              onClick: v,
              children: (R, fe) => {
                var he = je();
                (O(() => X(he, t(w).cancel)), k(R, he));
              },
              $$slots: { default: !0 },
            }),
              st(
                ee,
                (R) => A(y, R),
                () => t(y)
              ),
              O(
                (R) => {
                  (be(V, "aria-label", o()),
                    q(ee, 1, Y(t(E))),
                    q(Z, 1, Y(t(T))),
                    q(I, 1, R));
                },
                [() => Y(U("flex gap-2 justify-end", t(L)))]
              ),
              k($, V));
          };
        G(ue, ($) => {
          f() ? $(N) : $(B, !1);
        });
      }
      k(J, re);
    };
    G(de, (J) => {
      n() && J(pe);
    });
  }
  (k(r, ae), Re());
}
lt(["keydown"]);
var Oc = j("<span> </span>"),
  Bc = j('<div aria-hidden="true"><!></div>'),
  Rc = j("<textarea></textarea>"),
  jc = j("<input/>"),
  Vc = j('<span aria-hidden="true"><!></span>'),
  qc = qt(
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 3L21 21" stroke="currentColor" stroke-width="2"></path><path d="M10.5 10.677a2 2 0 002.823 2.823" stroke="currentColor" stroke-width="2"></path><path d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c2.4 3.6 6 6 9 6 1.4 0 2.8-.5 4.1-1.2" stroke="currentColor" stroke-width="2"></path><path d="M12 6c3 0 6 2.4 9 6-.6.9-1.3 1.7-2 2.5" stroke="currentColor" stroke-width="2"></path></svg>'
  ),
  Uc = qt(
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"></path><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"></circle></svg>'
  ),
  Hc = j('<button type="button"><!></button>'),
  Kc = j(
    '<button type="button" tabindex="-1" aria-label="Clear" title="Clear"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>'
  ),
  Gc = j("<label><!> <div><!> <!> <div><!> <!> <!></div></div></label>");
function Wa(r, e) {
  Be(e, !0);
  let a = F(e, "as", 3, "input"),
    n = F(e, "sz", 3, "md"),
    o = F(e, "variant", 3, "default"),
    i = F(e, "clearable", 3, !0),
    s = F(e, "rows", 3, 3),
    l = F(e, "parseNumber", 3, !1),
    u = F(e, "value", 15, ""),
    f = F(e, "class", 3, ""),
    h = F(e, "invalid", 3, !1),
    C = Ct(e, [
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
    _ = {
      xs: "px-2 h-6",
      sm: "px-3 h-7",
      md: "px-4 h-8",
      lg: "px-5 h-9",
      xl: "px-6 h-10",
    },
    w = {
      default:
        "bg-[var(--color-bg-surface)] [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-[var(--border-color-default)]",
      filled:
        "bg-[var(--color-bg-muted)] [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-[var(--border-color-default)]",
      neutral:
        "bg-transparent [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-transparent hover:border-[var(--border-color-default)] focus:border-[var(--border-color-focus)]",
    },
    y = p(() => U("flex flex-col gap-1", f())),
    g = p(() =>
      a() === "textarea"
        ? U(b, w[o()], Ie.md, "px-4")
        : U(b, _[n()], Ie[n()], w[o()])
    ),
    d = p(() =>
      U("relative flex items-stretch", a() === "textarea" && "items-start")
    ),
    v = p(() => e.id ?? on("fld-")),
    c = p(() => (a() === "input" ? e.type || C.type || "text" : void 0)),
    x = p(() => a() === "input" && t(c) === "number"),
    P = p(() => a() === "input" && t(c) === "password");
  let S = ge(!1);
  function E(R) {
    if (l() && t(x)) {
      if (R === "" || R === "-" || R === "." || R === "-.") return R;
      const fe = Number(R);
      return Number.isNaN(fe) ? "" : fe;
    }
    return R;
  }
  function T(R) {
    const he = R.target.value,
      se = E(he);
    (u(se), e.onChange?.(se));
  }
  function L() {
    const R = l() && t(x) ? 0 : "";
    (u(R), e.onChange?.(R));
  }
  const H = p(() => String(u() ?? "")),
    K = p(() => i() && a() === "input" && t(H).length > 0 && !t(x)),
    ae = p(() => !!e.trailing || t(K) || t(P)),
    de = "[color:var(--color-text-muted)]";
  var pe = Gc(),
    J = m(pe);
  {
    var re = (R) => {
      var fe = Oc(),
        he = m(fe);
      (O(
        (se) => {
          (q(fe, 1, se), X(he, e.label));
        },
        [() => Y(U(Ie[n()], "font-medium", de))]
      ),
        k(R, fe));
    };
    G(J, (R) => {
      e.label && R(re);
    });
  }
  var ue = D(J, 2),
    N = m(ue);
  {
    var B = (R) => {
      const fe = p(() => typeof e.leading == "function");
      var he = Bc(),
        se = m(he);
      {
        var Ae = (ze) => {
            var ve = Me(),
              Se = Ce(ve);
            (Qe(Se, () => e.leading), k(ze, ve));
          },
          Pe = (ze) => {
            var ve = je();
            (O(() => X(ve, e.leading)), k(ze, ve));
          };
        G(se, (ze) => {
          t(fe) ? ze(Ae) : ze(Pe, !1);
        });
      }
      (O(
        (ze) => q(he, 1, ze),
        [
          () =>
            Y(
              U(
                "absolute inset-y-0 left-2 flex items-center [color:var(--color-text-muted)]"
              )
            ),
        ]
      ),
        k(R, he));
    };
    G(N, (R) => {
      e.leading && R(B);
    });
  }
  var $ = D(N, 2);
  {
    var V = (R) => {
        var fe = Rc();
        (_t(
          fe,
          (he) => ({
            ...C,
            id: t(v),
            rows: s(),
            class: he,
            value: t(H),
            "aria-invalid": h() || void 0,
            "aria-describedby": e.describedBy,
            oninput: T,
          }),
          [() => U(t(g), t(ae) && "pr-8", e.leading && "pl-8")]
        ),
          k(R, fe));
      },
      ee = (R) => {
        var fe = jc();
        (_t(
          fe,
          (he) => ({
            ...C,
            id: t(v),
            type: t(P) ? (t(S) ? "text" : "password") : t(c),
            inputmode: t(x) ? "decimal" : void 0,
            class: he,
            value: t(H),
            "aria-invalid": h() || void 0,
            "aria-describedby": e.describedBy,
            oninput: T,
          }),
          [() => U(t(g), t(ae) && "pr-8", e.leading && "pl-8")],
          void 0,
          void 0,
          void 0,
          !0
        ),
          k(R, fe));
      };
    G($, (R) => {
      a() === "textarea" ? R(V) : R(ee, !1);
    });
  }
  var Z = D($, 2),
    te = m(Z);
  {
    var ie = (R) => {
      const fe = p(() => typeof e.trailing == "function");
      var he = Vc(),
        se = m(he);
      {
        var Ae = (ze) => {
            var ve = Me(),
              Se = Ce(ve);
            (Qe(Se, () => e.trailing), k(ze, ve));
          },
          Pe = (ze) => {
            var ve = je();
            (O(() => X(ve, e.trailing)), k(ze, ve));
          };
        G(se, (ze) => {
          t(fe) ? ze(Ae) : ze(Pe, !1);
        });
      }
      k(R, he);
    };
    G(te, (R) => {
      e.trailing && R(ie);
    });
  }
  var _e = D(te, 2);
  {
    var I = (R) => {
      var fe = Hc();
      ((fe.__mousedown = (Pe) => Pe.preventDefault()),
        (fe.__click = () => A(S, !t(S))));
      var he = m(fe);
      {
        var se = (Pe) => {
            var ze = qc();
            k(Pe, ze);
          },
          Ae = (Pe) => {
            var ze = Uc();
            k(Pe, ze);
          };
        G(he, (Pe) => {
          t(S) ? Pe(se) : Pe(Ae, !1);
        });
      }
      (O(
        (Pe) => {
          (q(fe, 1, Pe),
            be(fe, "aria-label", t(S) ? "Hide password" : "Show password"));
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
        k(R, fe));
    };
    G(_e, (R) => {
      t(P) && R(I);
    });
  }
  var z = D(_e, 2);
  {
    var ne = (R) => {
      var fe = Kc();
      ((fe.__mousedown = (he) => he.preventDefault()),
        (fe.__click = L),
        O(
          (he) => q(fe, 1, he),
          [
            () =>
              Y(
                U(
                  "[color:var(--color-text-muted)] hover:opacity-[var(--opacity-hover)]"
                )
              ),
          ]
        ),
        k(R, fe));
    };
    G(z, (R) => {
      t(K) && R(ne);
    });
  }
  (O(
    (R) => {
      (be(pe, "for", t(v)), q(pe, 1, Y(t(y))), q(ue, 1, Y(t(d))), q(Z, 1, R));
    },
    [() => Y(U("absolute inset-y-0 right-2 flex items-center gap-1"))]
  ),
    k(r, pe),
    Re());
}
lt(["mousedown", "click"]);
var Wc = j('<p class="text-xs mt-1 [color:var(--color-text-muted)]"> </p>'),
  Zc = j('<p class="text-sm mt-1 [color:var(--color-text-muted)]"> <!></p>'),
  Yc = j(
    '<div><input type="file" class="hidden"/> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"><!> <!></div> <div role="button"><p class="text-sm [color:var(--color-text-muted)]"> </p> <!></div> <div class="mt-3 p-4 bg-[var(--color-bg-surface)] text-center" aria-live="polite"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)] break-words"><!></p> <!></div></div>'
  );
function Xc(r, e) {
  Be(e, !0);
  let a = F(e, "accept", 3, "*/*"),
    n = F(e, "multiple", 3, !1),
    o = F(e, "disabled", 3, !1),
    i = F(e, "clearable", 3, !0),
    s = F(e, "value", 3, null),
    l = F(e, "class", 3, ""),
    u = Ct(e, [
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
  const f = Vt("lang"),
    h = p(() => ya[f.value].components.filePicker),
    C = p(() => e.label ?? t(h).text),
    b = p(() => e.placeholder ?? t(h).placeholder);
  let _,
    w = p(s),
    y = ge(!1);
  const g = "inline-block w-full",
    d = p(() => U(g, l())),
    v = p(() => !!(t(w) && t(w).length > 0)),
    c = p(() =>
      t(w)
        ? Array.from(t(w))
            .map((se) => se.name)
            .join(", ")
        : ""
    );
  function x() {
    o() || _?.click();
  }
  function P(se) {
    const Pe = se.target.files;
    (A(w, Pe), Pe && Pe.length > 0 && e.onFilesSelected?.(Pe));
  }
  function S(se) {
    if ((se.preventDefault(), A(y, !1), o())) return;
    const Ae = se.dataTransfer?.files;
    (A(w, Ae || null), Ae && Ae.length > 0 && e.onFilesSelected?.(Ae));
  }
  function E(se) {
    se.preventDefault();
  }
  function T(se) {
    (se.preventDefault(), o() || A(y, !0));
  }
  function L(se) {
    (se.preventDefault(), A(y, !1));
  }
  function H(se) {
    o() ||
      ((se.key === "Enter" || se.key === " ") && (se.preventDefault(), x()));
  }
  function K() {
    i() && (A(w, null), _ && (_.value = ""), e.onFilesSelected?.(null));
  }
  var ae = Yc();
  _t(ae, () => ({ class: t(d), ...u }));
  var de = m(ae);
  ((de.__change = P),
    st(
      de,
      (se) => (_ = se),
      () => _
    ));
  var pe = D(de, 2),
    J = m(pe);
  tt(J, {
    get disabled() {
      return o();
    },
    onClick: x,
    class: "relative",
    sz: "xs",
    children: (se, Ae) => {
      var Pe = je();
      (O(() => X(Pe, t(C))), k(se, Pe));
    },
    $$slots: { default: !0 },
  });
  var re = D(J, 2);
  {
    var ue = (se) => {
      {
        let Ae = p(() => !t(v) || o());
        tt(se, {
          onClick: K,
          variant: "danger",
          get disabled() {
            return t(Ae);
          },
          sz: "xs",
          children: (Pe, ze) => {
            var ve = je();
            (O(() => X(ve, t(h).clear)), k(Pe, ve));
          },
          $$slots: { default: !0 },
        });
      }
    };
    G(re, (se) => {
      i() && se(ue);
    });
  }
  var N = D(pe, 2);
  let B;
  ((N.__click = x), (N.__keydown = H));
  var $ = m(N),
    V = m($),
    ee = D($, 2);
  {
    var Z = (se) => {
      var Ae = Wc(),
        Pe = m(Ae);
      (O(() => X(Pe, `${t(h).accepted ?? ""}: ${a() ?? ""}`)), k(se, Ae));
    };
    G(ee, (se) => {
      a() !== "*/*" && se(Z);
    });
  }
  var te = D(N, 2),
    ie = m(te),
    _e = m(ie),
    I = D(ie, 2),
    z = m(I);
  {
    var ne = (se) => {
        var Ae = je();
        (O(() => X(Ae, t(c))), k(se, Ae));
      },
      R = (se) => {
        var Ae = je();
        (O(() => X(Ae, t(b))), k(se, Ae));
      };
    G(z, (se) => {
      t(v) ? se(ne) : se(R, !1);
    });
  }
  var fe = D(I, 2);
  {
    var he = (se) => {
      var Ae = Zc(),
        Pe = m(Ae),
        ze = D(Pe);
      {
        var ve = (Se) => {
          var M = je();
          (O(
            (oe) => X(M, `• ${t(h).totalSize ?? ""}: ${oe ?? ""} MB`),
            [
              () =>
                (
                  Array.from(t(w)).reduce((oe, le) => oe + le.size, 0) /
                  1024 /
                  1024
                ).toFixed(2),
            ]
          ),
            k(Se, M));
        };
        G(ze, (Se) => {
          n() && t(w).length > 1 && Se(ve);
        });
      }
      (O(
        (Se) => X(Pe, `${Se ?? ""} `),
        [() => t(h).fileCount.replace("{n}", String(t(w).length))]
      ),
        k(se, Ae));
    };
    G(fe, (se) => {
      t(v) && t(w) && se(he);
    });
  }
  (O(() => {
    (be(de, "accept", a()),
      (de.multiple = n()),
      (B = q(
        N,
        1,
        "mt-2 p-4 border-2 border-dashed rounded-[var(--radius-md)] text-center transition-colors duration-200",
        null,
        B,
        {
          "border-[var(--color-primary)]": t(y) && !o(),
          "border-[var(--border-color-default)]": !t(y) || o(),
          "bg-[var(--color-bg-surface-hover)]": t(y) && !o(),
          "cursor-pointer": !o(),
          "opacity-[var(--opacity-disabled)]": o(),
          "cursor-not-allowed": o(),
          "cursor-copy": t(y) && !o(),
        }
      )),
      be(N, "tabindex", o() ? -1 : 0),
      be(N, "aria-disabled", o()),
      X(V, t(h).dragDrop),
      X(_e, t(h).selectedFiles));
  }),
    wt("drop", N, S),
    wt("dragover", N, E),
    wt("dragenter", N, T),
    wt("dragleave", N, L),
    k(r, ae),
    Re());
}
lt(["change", "click", "keydown"]);
var Jc = j("<label> </label>"),
  Qc = j(
    '<span aria-hidden="true" class="block w-3 h-3 rounded-[var(--radius-xs)] border border-[var(--border-color-default)] shadow-sm shrink-0"></span>'
  ),
  $c = j(
    '<span class="inline-flex items-center gap-2 min-w-0"><!> <span class="truncate"> </span></span>'
  ),
  ed = j('<span class="[color:var(--color-text-muted)]"> </span>'),
  td = j(
    '<span aria-hidden="true" class="block w-3 h-3 rounded-[var(--radius-xs)] border border-[var(--border-color-default)] shadow-sm shrink-0"></span>'
  ),
  rd = j(
    '<li role="option"><button type="button" tabindex="0"><!> <span class="truncate"> </span></button></li>'
  ),
  ad = j(
    '<div role="presentation" tabindex="-1" class="fixed inset-0 z-40"></div> <ul role="listbox" tabindex="-1"></ul>',
    1
  ),
  nd = j("<div> </div>"),
  od = j(
    '<div><!> <div class="w-full"><button type="button" role="combobox" aria-haspopup="listbox"><span class="min-w-0 grow truncate"><!></span> <span><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span></button></div> <!> <input type="hidden"/> <!></div>'
  );
function jt(r, e) {
  Be(e, !0);
  let a = F(e, "options", 19, () => []),
    n = F(e, "sz", 3, "md"),
    o = F(e, "variant", 3, "default"),
    i = F(e, "value", 15, ""),
    s = F(e, "class", 3, ""),
    l = F(e, "invalid", 3, !1),
    u = F(e, "open", 15, !1);
  const f = Vt("BaseField"),
    h = p(() => e.id ?? f?.id ?? on("sel-")),
    C = p(() => f?.name ?? t(h)),
    b = p(() => `${t(h)}-listbox`);
  let _ = ge(null),
    w = ge(null),
    y = ge(-1),
    g = ge(Je([])),
    d = ge("bottom");
  const v =
      "relative w-full outline-none appearance-none cursor-pointer transition-colors duration-[var(--transition-fast)] ease-[var(--timing-default)] box-border rounded-[var(--radius-md)] border focus:border-[var(--border-color-focus)] focus:ring-2 focus:ring-[var(--border-color-focus)] [color:var(--color-text-default)] disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
    c = {
      xs: "px-2 pr-6 h-6",
      sm: "px-3 pr-8 h-7",
      md: "px-4 pr-10 h-8",
      lg: "px-5 pr-12 h-9",
      xl: "px-6 pr-14 h-10",
    },
    x = { xs: 120, sm: 144, md: 168, lg: 192, xl: 216 },
    P = {
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
    E = p(() => U("flex flex-col gap-1", s())),
    T = p(() => U(v, c[n()], Ie[n()], P[o()], "text-left")),
    L = p(() => e.maxHeight ?? x[n()]),
    H = p(() =>
      U(
        "z-50 border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] rounded-[var(--radius-md)] shadow-lg overflow-auto focus:outline-none"
      )
    ),
    K = p(() =>
      U(
        "w-full text-left px-4 py-2 transition-colors duration-[var(--transition-fast)] cursor-pointer",
        Ie[n()]
      )
    ),
    ae = "opacity-[var(--opacity-disabled)] cursor-not-allowed";
  let de = ge(0),
    pe = ge(0),
    J = ge(0);
  const re = p(
      () =>
        `position:fixed;top:${t(de)}px;left:${t(pe)}px;min-width:${t(J)}px;max-height:${t(L)}px;`
    ),
    ue = p(() => a().find((W) => W.value === i()));
  (Ge(() => {
    const W = t(w),
      xe = t(_);
    if (u() && W && xe) {
      const Te = () => {
        const Le = W.getBoundingClientRect(),
          De = window.innerHeight - Le.bottom,
          Ye = Le.top,
          ut = Math.min(xe.scrollHeight, t(L)),
          dt = De < ut && Ye > De ? "top" : "bottom";
        (A(d, dt, !0),
          (xe.dataset.position = dt),
          dt === "top"
            ? A(de, Math.max(0, Le.top - ut), !0)
            : A(de, Le.bottom, !0),
          A(pe, Le.left, !0),
          A(J, Le.width, !0));
      };
      queueMicrotask(Te);
      const Fe = (Le) => {
          W && xe && !W.contains(Le.target) && !xe.contains(Le.target) && ee();
        },
        Oe = () => Te(),
        Ve = () => Te();
      return (
        document.addEventListener("mousedown", Fe),
        window.addEventListener("scroll", Oe, !0),
        window.addEventListener("resize", Ve),
        () => {
          (document.removeEventListener("mousedown", Fe),
            window.removeEventListener("scroll", Oe, !0),
            window.removeEventListener("resize", Ve));
        }
      );
    }
  }),
    Ge(() => {
      const W = t(_);
      !u() ||
        !W ||
        queueMicrotask(() => {
          W ? A(g, Array.from(W.querySelectorAll("button")), !0) : A(g, [], !0);
        });
    }));
  function N(W) {
    if (!t(g).length || !a().length) return;
    const xe = a().length;
    let Te = W;
    for (let Fe = 0; Fe < xe; Fe++) {
      const Oe = (Te + Fe) % xe;
      if (!a()[Oe]?.disabled && t(g)[Oe]) {
        (t(g)[Oe].focus(), A(y, Oe));
        return;
      }
    }
  }
  function B() {
    N(0);
  }
  function $() {
    if (!(!a().length || !t(g).length)) {
      for (let W = a().length - 1; W >= 0; W--)
        if (!a()[W]?.disabled && t(g)[W]) {
          (t(g)[W].focus(), A(y, W, !0));
          return;
        }
    }
  }
  function V() {
    e.disabled || u(!0);
  }
  function ee() {
    (u(!1), A(y, -1));
  }
  function Z() {
    u() ? ee() : V();
  }
  function te(W) {
    if (!u() || !a().length) return;
    const xe = a().length;
    let Te = t(y);
    for (
      let Fe = 0;
      Fe < xe && ((Te = (Te + W + xe) % xe), !!a()[Te].disabled);
      Fe++
    );
    (A(y, Te, !0), t(g)[Te] && t(g)[Te].focus());
  }
  function ie(W) {
    const xe = a()[W];
    !xe || xe.disabled || (i(xe.value), e.onChange?.(xe.value), ee());
  }
  function _e(W) {
    e.disabled ||
      (W.key === " " || W.key === "Enter"
        ? (W.preventDefault(), Z())
        : W.key === "ArrowDown"
          ? (W.preventDefault(), u() || V(), te(1))
          : W.key === "ArrowUp"
            ? (W.preventDefault(), u() || V(), te(-1))
            : W.key === "Escape" && u() && (W.preventDefault(), ee()));
  }
  function I(W) {
    if (u()) {
      if (W.key === "Tab") {
        const xe = document.activeElement,
          Te = t(g).findIndex((Oe) => Oe === xe);
        let Fe = -1;
        for (let Oe = a().length - 1; Oe >= 0; Oe--)
          if (!a()[Oe]?.disabled) {
            Fe = Oe;
            break;
          }
        W.shiftKey
          ? Te <= 0 && (W.preventDefault(), $())
          : Te === Fe && (W.preventDefault(), B());
        return;
      }
      W.key === "ArrowDown"
        ? (W.preventDefault(), te(1))
        : W.key === "ArrowUp"
          ? (W.preventDefault(), te(-1))
          : W.key === "Home"
            ? (W.preventDefault(), B())
            : W.key === "End"
              ? (W.preventDefault(), $())
              : W.key === "Enter" || W.key === " "
                ? (W.preventDefault(), t(y) >= 0 && ie(t(y)))
                : W.key === "Escape" && (W.preventDefault(), ee());
    }
  }
  function z(W) {
    W.key === "Escape" && (W.preventDefault(), ee());
  }
  var ne = od(),
    R = m(ne);
  {
    var fe = (W) => {
      var xe = Jc(),
        Te = m(xe);
      (O(
        (Fe) => {
          (be(xe, "for", `${t(h)}-hidden`), q(xe, 1, Fe), X(Te, e.label));
        },
        [() => Y(U(Ie[n()], "font-medium [color:var(--color-text-muted)]"))]
      ),
        k(W, xe));
    };
    G(R, (W) => {
      e.label && W(fe);
    });
  }
  var he = D(R, 2),
    se = m(he);
  ((se.__click = () => {
    Z();
  }),
    (se.__keydown = _e));
  var Ae = m(se),
    Pe = m(Ae);
  {
    var ze = (W) => {
        var xe = $c(),
          Te = m(xe);
        {
          var Fe = (Le) => {
            var De = Qc();
            (O(() => it(De, `background:${t(ue).swatch}`)), k(Le, De));
          };
          G(Te, (Le) => {
            t(ue).swatch && Le(Fe);
          });
        }
        var Oe = D(Te, 2),
          Ve = m(Oe);
        (O(() => X(Ve, t(ue).label)), k(W, xe));
      },
      ve = (W) => {
        var xe = ed(),
          Te = m(xe);
        (O(() => X(Te, e.placeholder)), k(W, xe));
      };
    G(Pe, (W) => {
      t(ue) ? W(ze) : W(ve, !1);
    });
  }
  var Se = D(Ae, 2),
    M = m(Se);
  st(
    se,
    (W) => A(w, W),
    () => t(w)
  );
  var oe = D(he, 2);
  {
    var le = (W) => {
      var xe = ad(),
        Te = Ce(xe);
      ((Te.__click = ee), (Te.__keydown = z));
      var Fe = D(Te, 2);
      ((Fe.__keydown = I),
        ot(
          Fe,
          23,
          a,
          (Oe) => Oe.value,
          (Oe, Ve, Le) => {
            var De = rd(),
              Ye = m(De);
            Ye.__click = () => ie(t(Le));
            var ut = m(Ye);
            {
              var dt = ($e) => {
                var ce = td();
                (O(() => it(ce, `background:${t(Ve).swatch}`)), k($e, ce));
              };
              G(ut, ($e) => {
                t(Ve).swatch && $e(dt);
              });
            }
            var ft = D(ut, 2),
              It = m(ft);
            (O(
              ($e, ce) => {
                (be(De, "id", `${t(h)}-opt-${t(Le)}`),
                  be(
                    De,
                    "aria-selected",
                    !t(Ve).disabled && t(Ve).value === i()
                  ),
                  be(De, "aria-disabled", t(Ve).disabled),
                  q(De, 1, $e),
                  q(Ye, 1, ce),
                  (Ye.disabled = t(Ve).disabled),
                  X(It, t(Ve).label));
              },
              [
                () => Y(U(t(K), t(Ve).disabled ? ae : "")),
                () =>
                  Y(
                    U(
                      "w-full text-left focus:outline-[3px] focus:outline-offset-3 focus:outline-[var(--border-color-focus)] rounded flex items-center gap-2"
                    )
                  ),
              ]
            ),
              wt("focus", Ye, () => A(y, t(Le), !0)),
              wt("mouseenter", Ye, () => A(y, t(Le), !0)),
              k(Oe, De));
          }
        ),
        st(
          Fe,
          (Oe) => A(_, Oe),
          () => t(_)
        ),
        O(() => {
          (be(Fe, "id", t(b)),
            q(Fe, 1, Y(t(H))),
            it(Fe, t(re)),
            be(Fe, "data-position", t(d)),
            be(
              Fe,
              "aria-labelledby",
              e.label ? `${t(h)}-hidden-label` : void 0
            ),
            be(
              Fe,
              "aria-activedescendant",
              t(y) >= 0 ? `${t(h)}-opt-${t(y)}` : void 0
            ));
        }),
        k(W, xe));
    };
    G(oe, (W) => {
      u() && W(le);
    });
  }
  var me = D(oe, 2),
    ke = D(me, 2);
  {
    var ye = (W) => {
      var xe = nd(),
        Te = m(xe);
      (O(
        (Fe) => {
          (be(xe, "id", e.describedBy), q(xe, 1, Fe), X(Te, e.help));
        },
        [() => Y(U("[color:var(--color-text-muted)]", Ie.sm))]
      ),
        k(W, xe));
    };
    G(ke, (W) => {
      e.help && W(ye);
    });
  }
  (O(
    (W) => {
      (q(ne, 1, Y(t(E))),
        be(se, "id", t(h)),
        q(se, 1, Y(t(T))),
        be(se, "aria-expanded", u()),
        be(se, "aria-controls", t(b)),
        be(se, "aria-describedby", e.describedBy),
        be(se, "aria-invalid", l()),
        be(se, "aria-required", e.required),
        (se.disabled = e.disabled),
        q(Se, 1, W),
        q(M, 0, Y(S[n()])),
        be(me, "id", `${t(h)}-hidden`),
        be(me, "name", t(C)),
        bs(me, i() ?? ""));
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
    k(r, ne),
    Re());
}
lt(["click", "keydown"]);
const id = (r) => r;
function gi(r, { delay: e = 0, duration: a = 400, easing: n = id } = {}) {
  const o = +getComputedStyle(r).opacity;
  return { delay: e, duration: a, easing: n, css: (i) => `opacity: ${i * o}` };
}
var sd = qt(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M8.5 14L11.1 16.6" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M18.2 10L11.6 16.6" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path></svg>'
  ),
  ld = qt(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M9 9.5L16.7 17.3" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M16.7 9.5L9 17.3" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path></svg>'
  ),
  ud = qt(
    '<svg fill="none" viewBox="0 0 27 27"><path d="M4.6 25.925H22.5C25.2 25.925 26.8 23.022 25.6 20.6195L16.6 3.80194C15.3 1.29934 11.8 1.29934 10.5 3.80194L1.5 20.6195C0.299997 23.022 1.9 25.925 4.6 25.925Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M13.9 18.0168H13.2C12.5 18.0168 12.6 17.4162 12.6 16.7154L11.9 9.30769C11.9 8.60696 12.5 8.00635 13.2 8.00635H13.9C14.6 8.00635 15.2 8.60696 15.2 9.30769L14.5 16.7154C14.5 17.4162 14.6 18.0168 13.9 18.0168Z" fill="currentColor"></path><path d="M13.5 21.9208C14.4389 21.9208 15.2 21.3382 15.2 20.6195C15.2 19.9008 14.4389 19.3181 13.5 19.3181C12.5611 19.3181 11.8 19.9008 11.8 20.6195C11.8 21.3382 12.5611 21.9208 13.5 21.9208Z" fill="currentColor"></path></svg>'
  ),
  cd = qt(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path><path d="M13 9.00003C13.718 9.00003 14.3 8.41801 14.3 7.70004C14.3 6.98207 13.718 6.40002 13 6.40002C12.282 6.40002 11.7 6.98207 11.7 7.70004C11.7 8.41801 12.282 9.00003 13 9.00003Z" fill="currentColor"></path><path d="M13 19.7C12.2 19.7 11.6 19.1 11.6 18.4V11.6C11.6 10.9 12.2 10.3 12.9 10.3H13C13.7 10.3 14.3 10.9 14.3 11.6V18.4C14.3 19.1 13.8 19.7 13 19.7Z" fill="currentColor"></path></svg>'
  ),
  dd = j('<span class="w-5 h-5 flex-shrink-0" aria-hidden="true"><!></span>'),
  fd = j(
    '<div class="font-[var(--font-weight-medium)] truncate [font-size:var(--text-md)] max-sm:[font-size:var(--text-sm)]"> </div>'
  ),
  vd = j(
    '<button class="opacity-70 hover:opacity-100 transition-opacity duration-[var(--transition-fast)] ml-3" aria-label="Close"><svg width="24" height="24" viewBox="0 0 20 20" fill="none"><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button>'
  ),
  gd = j(
    '<div role="status" aria-live="polite"><!> <div class="flex-1 min-w-0"><!> <div class="line-clamp-3 [font-size:var(--text-sm)] max-sm:[font-size:var(--text-xs)]"> </div></div> <!></div>'
  );
function jo(r, e) {
  Be(e, !0);
  let a = F(e, "variant", 3, "info"),
    n = F(e, "showIcon", 3, !0),
    o = F(e, "closable", 3, !0),
    i = F(e, "timeout", 3, 3e3),
    s = F(e, "onClose", 3, () => {}),
    l = F(e, "class", 3, ""),
    u = ge(!0);
  function f(y) {
    switch (y) {
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
    (A(u, !1), s()());
  }
  Ge(() => {
    if (i() > 0) {
      const y = setTimeout(() => h(), i());
      return () => clearTimeout(y);
    }
  });
  const C = p(() =>
    U(
      "fixed bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-[var(--radius-lg)] shadow-lg min-w-[220px] max-w-[calc(100vw-2rem)] border border-[var(--border-color-default)] backdrop-blur-sm",
      f(a()),
      l()
    )
  );
  var b = Me(),
    _ = Ce(b);
  {
    var w = (y) => {
      var g = gd(),
        d = m(g);
      {
        var v = (H) => {
          var K = dd(),
            ae = m(K);
          {
            var de = (J) => {
                var re = sd();
                k(J, re);
              },
              pe = (J) => {
                var re = Me(),
                  ue = Ce(re);
                {
                  var N = ($) => {
                      var V = ld();
                      k($, V);
                    },
                    B = ($) => {
                      var V = Me(),
                        ee = Ce(V);
                      {
                        var Z = (ie) => {
                            var _e = ud();
                            k(ie, _e);
                          },
                          te = (ie) => {
                            var _e = cd();
                            k(ie, _e);
                          };
                        G(
                          ee,
                          (ie) => {
                            a() === "warning" ? ie(Z) : ie(te, !1);
                          },
                          !0
                        );
                      }
                      k($, V);
                    };
                  G(
                    ue,
                    ($) => {
                      a() === "danger" ? $(N) : $(B, !1);
                    },
                    !0
                  );
                }
                k(J, re);
              };
            G(ae, (J) => {
              a() === "success" ? J(de) : J(pe, !1);
            });
          }
          k(H, K);
        };
        G(d, (H) => {
          n() && H(v);
        });
      }
      var c = D(d, 2),
        x = m(c);
      {
        var P = (H) => {
          var K = fd(),
            ae = m(K);
          (O(() => X(ae, e.title)), k(H, K));
        };
        G(x, (H) => {
          e.title && H(P);
        });
      }
      var S = D(x, 2),
        E = m(S),
        T = D(c, 2);
      {
        var L = (H) => {
          var K = vd();
          ((K.__click = h), k(H, K));
        };
        G(T, (H) => {
          o() && H(L);
        });
      }
      (O(() => {
        (q(g, 1, Y(t(C))), be(S, "title", e.message), X(E, e.message));
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
        k(y, g));
    };
    G(_, (y) => {
      t(u) && y(w);
    });
  }
  (k(r, b), Re());
}
lt(["click"]);
var pd = j('<span class="text-[var(--color-text-default)]">*</span>'),
  bd = j("<div> <!></div>"),
  hd = j("<div><!></div>"),
  md = j("<li> </li>"),
  _d = j("<ul></ul>"),
  xd = j("<div><!> <!> <!></div>"),
  wd = j('<form novalidate=""></form> <!>', 1);
function yd(r, e) {
  Be(e, !0);
  let a = F(e, "value", 19, () => ({})),
    n = F(e, "rowGap", 3, "md"),
    o = F(e, "validateOn", 3, "blur"),
    i = F(e, "labelAlign", 3, "left"),
    s = F(e, "labelWeight", 3, "medium"),
    l = F(e, "labelSize", 3, "md"),
    u = F(e, "compact", 3, !1);
  const f = { xs: "xs", sm: "xs", md: "sm", lg: "md", xl: "lg" },
    h = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    C = { xs: "gap-1", sm: "gap-2", md: "gap-4", lg: "gap-6", xl: "gap-8" },
    b = (I) => (I == null ? "" : String(I));
  let _ = Je({});
  const w = Je({}),
    y = Je({});
  let g = ge(Je([])),
    d = 0;
  const v = p(() => (u() ? "" : "w-full")),
    c = p(() => (typeof n() == "number" ? "" : (C[n()] ?? C.md))),
    x = p(() => (typeof n() == "number" ? n() + "px" : "")),
    P = (I) => {
      const z = _[I];
      return typeof z == "number" ? z : b(z);
    };
  function S(I) {
    return u() ? (f[I] ?? "md") : I;
  }
  let E = 0;
  const T = Je(E++),
    L = p(() => {
      if (e.formId && e.formId.trim()) return e.formId.trim();
      const I = e.schema.map((R) => R.name).join("|");
      let z = 0;
      for (let R = 0; R < I.length; R += 1)
        ((z = (z << 5) - z + I.charCodeAt(R)), (z |= 0));
      return `form-${Math.abs(z >>> 0).toString(36) || "form"}`;
    }),
    H = p(() => (e.formId && e.formId.trim() ? t(L) : `${t(L)}-${T}`));
  Ge(() => {
    const I = new Set(e.schema.map((z) => z.name));
    for (const z of Object.keys(_))
      I.has(z) || (delete _[z], delete w[z], delete y[z]);
    for (const z of e.schema)
      (Object.prototype.hasOwnProperty.call(a(), z.name)
        ? (_[z.name] = a()[z.name])
        : z.name in _ ||
          (_[z.name] = z.default ?? (z.type === "checkbox" ? !1 : "")),
        z.name in w || (w[z.name] = !1),
        y[z.name] || (y[z.name] = []));
  });
  const K = Uu((I) => {
    re(I);
  }, 150);
  function ae(I, z) {
    _[I] !== z && ((_[I] = z), o() === "input" && K(I), e.onChange?.({ ..._ }));
  }
  function de(I) {
    (w[I] || (w[I] = !0), o() !== "submit" && re(I));
  }
  function pe(I) {
    A(
      g,
      t(g).filter((z) => z.id !== I),
      !0
    );
  }
  function J(I, z, ne) {
    const R = d++;
    A(g, [...t(g), { id: R, message: z, variant: I, title: ne }], !0);
  }
  async function re(I) {
    const z = e.schema.find((fe) => fe.name === I);
    if (!z) return;
    const ne = _[I],
      R = [];
    if (
      (z.required &&
        (ne === "" || ne == null || (z.type === "checkbox" && !ne)) &&
        R.push("Required"),
      z.type === "number" &&
        ne !== "" &&
        Number.isNaN(Number(ne)) &&
        R.push("Must be a number"),
      z.type === "email" &&
        ne !== "" &&
        (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(ne)) ||
          R.push("Invalid email")),
      z.validators)
    )
      for (const fe of z.validators) {
        const he = await fe(ne, _);
        he && R.push(he);
      }
    y[I] = R;
  }
  function ue(I) {
    return I.when ? !!I.when(_) : !0;
  }
  const N = p(() => e.schema.filter(ue)),
    B = p(() => t(N).map((I) => I.name));
  async function $() {
    return (
      await Promise.all(t(B).map(re)),
      t(B).every((I) => (y[I]?.length ?? 0) === 0)
    );
  }
  function V() {
    for (const I of e.schema)
      ((_[I.name] = I.default ?? (I.type === "checkbox" ? !1 : "")),
        (w[I.name] = !1),
        (y[I.name] = []));
    e.onChange?.({ ..._ });
  }
  async function ee(I) {
    if ((I?.preventDefault?.(), !!(await $())))
      try {
        (await e.onSubmit?.({ ..._ }, { reset: V }),
          J("success", "Form submitted successfully"));
      } catch (ne) {
        throw (J("danger", "Form submission failed", "Error"), ne);
      }
  }
  Ge(() => {
    const I = {
      reset: V,
      submit: () => ee(),
      validate: () => $(),
      getData: () => ({ ..._ }),
      setValue: (z, ne) => ae(z, ne),
    };
    e.expose?.(I);
  });
  var Z = wd(),
    te = Ce(Z);
  let ie;
  ot(
    te,
    21,
    () => t(N),
    (I) => I.name,
    (I, z) => {
      var ne = Me(),
        R = Ce(ne);
      (cu(
        R,
        () => t(z).name,
        (fe) => {
          var he = xd(),
            se = m(he);
          {
            var Ae = (oe) => {
              var le = bd(),
                me = m(le),
                ke = D(me);
              {
                var ye = (W) => {
                  var xe = pd();
                  k(W, xe);
                };
                G(ke, (W) => {
                  t(z).required && W(ye);
                });
              }
              (O(
                (W) => {
                  (q(le, 1, W), X(me, `${t(z).label ?? ""} `));
                },
                [
                  () =>
                    Y(
                      U(
                        h[s()],
                        u()
                          ? "text-xs -mb-1 text-center"
                          : [
                              Ie[l()],
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
                k(oe, le));
            };
            G(se, (oe) => {
              t(z).label && oe(Ae);
            });
          }
          var Pe = D(se, 2);
          {
            var ze = (oe) => {
                const le = p(
                    () =>
                      (w[t(z).name] || o() !== "submit") &&
                      y[t(z).name]?.length > 0
                  ),
                  me = p(() => (t(le) ? `${t(H)}-err-${t(z).name}` : void 0));
                {
                  let ke = p(() => U(t(z).class, t(v))),
                    ye = p(() =>
                      (t(z).options ?? []).map((Fe) => ({
                        label: b(Fe.label),
                        value: b(Fe.value),
                        disabled: Fe.disabled,
                      }))
                    ),
                    W = p(() => S(t(z).sz ?? "md")),
                    xe = p(() => t(z).variant ?? "default"),
                    Te = p(() => b(_[t(z).name]));
                  jt(oe, {
                    get class() {
                      return t(ke);
                    },
                    get options() {
                      return t(ye);
                    },
                    get sz() {
                      return t(W);
                    },
                    get variant() {
                      return t(xe);
                    },
                    get value() {
                      return t(Te);
                    },
                    onChange: (Fe) => ae(t(z).name, Fe),
                    onblur: () => de(t(z).name),
                    get invalid() {
                      return t(le);
                    },
                    get describedBy() {
                      return t(me);
                    },
                  });
                }
              },
              ve = (oe) => {
                var le = Me(),
                  me = Ce(le);
                {
                  var ke = (W) => {
                      var xe = hd(),
                        Te = m(xe);
                      {
                        let Fe = p(() => t(z).class ?? ""),
                          Oe = p(() => S(t(z).sz ?? "md")),
                          Ve = p(() => !!_[t(z).name]);
                        Ja(Te, {
                          get class() {
                            return t(Fe);
                          },
                          get sz() {
                            return t(Oe);
                          },
                          variant: "default",
                          get checked() {
                            return t(Ve);
                          },
                          onChange: (Le) => ae(t(z).name, Le),
                          onblur: () => de(t(z).name),
                        });
                      }
                      (O(
                        (Fe) => q(xe, 1, Fe),
                        [
                          () =>
                            Y(
                              U(
                                t(z).class,
                                u() && "mx-auto justify-self-center"
                              )
                            ),
                        ]
                      ),
                        k(W, xe));
                    },
                    ye = (W) => {
                      const xe = p(
                          () =>
                            (w[t(z).name] || o() !== "submit") &&
                            y[t(z).name]?.length > 0
                        ),
                        Te = p(() =>
                          t(xe) ? `${t(H)}-err-${t(z).name}` : void 0
                        );
                      {
                        let Fe = p(() => U(t(z).class, t(v))),
                          Oe = p(() =>
                            t(z).type === "textarea" ? "textarea" : "input"
                          ),
                          Ve = p(() =>
                            t(z).type === "number"
                              ? "number"
                              : t(z).type === "password"
                                ? "password"
                                : t(z).type === "email"
                                  ? "email"
                                  : "text"
                          ),
                          Le = p(() => t(z).rows ?? 3),
                          De = p(() => t(z).type === "number"),
                          Ye = p(() => S(t(z).sz ?? "md")),
                          ut = p(() => t(z).variant ?? "default"),
                          dt = p(() => P(t(z).name)),
                          ft = p(() =>
                            t(z).type === "email" ? "email" : void 0
                          ),
                          It = p(() =>
                            t(z).type === "email" ? "email" : void 0
                          );
                        Wa(W, {
                          get class() {
                            return t(Fe);
                          },
                          get as() {
                            return t(Oe);
                          },
                          get type() {
                            return t(Ve);
                          },
                          get rows() {
                            return t(Le);
                          },
                          get parseNumber() {
                            return t(De);
                          },
                          get sz() {
                            return t(Ye);
                          },
                          get variant() {
                            return t(ut);
                          },
                          get value() {
                            return t(dt);
                          },
                          onChange: ($e) => ae(t(z).name, $e),
                          onblur: () => de(t(z).name),
                          get invalid() {
                            return t(xe);
                          },
                          get describedBy() {
                            return t(Te);
                          },
                          get autocomplete() {
                            return t(ft);
                          },
                          get inputmode() {
                            return t(It);
                          },
                        });
                      }
                    };
                  G(
                    me,
                    (W) => {
                      t(z).type === "checkbox" ? W(ke) : W(ye, !1);
                    },
                    !0
                  );
                }
                k(oe, le);
              };
            G(Pe, (oe) => {
              t(z).type === "select" ? oe(ze) : oe(ve, !1);
            });
          }
          var Se = D(Pe, 2);
          {
            var M = (oe) => {
              var le = _d();
              (ot(
                le,
                23,
                () => y[t(z).name] ?? [],
                (me, ke) => `${t(z).name}-${ke}`,
                (me, ke) => {
                  var ye = md(),
                    W = m(ye);
                  (O(
                    (xe) => {
                      (q(ye, 1, xe), X(W, t(ke)));
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
                    k(me, ye));
                }
              ),
                O(
                  (me) => {
                    (be(le, "id", `${t(H)}-err-${t(z).name}`), q(le, 1, me));
                  },
                  [() => Y(U("m-0 pl-4 list-none", u() && "text-center"))]
                ),
                k(oe, le));
            };
            G(Se, (oe) => {
              (w[t(z).name] || o() !== "submit") &&
                y[t(z).name]?.length &&
                oe(M);
            });
          }
          (O(
            (oe) => q(he, 1, oe),
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
            k(fe, he));
        }
      ),
        k(I, ne));
    }
  );
  var _e = D(te, 2);
  (ot(
    _e,
    17,
    () => t(g),
    (I) => I.id,
    (I, z) => {
      jo(I, {
        get title() {
          return t(z).title;
        },
        get message() {
          return t(z).message;
        },
        get variant() {
          return t(z).variant;
        },
        onClose: () => pe(t(z).id),
      });
    }
  ),
    O(
      (I) => {
        (be(te, "id", t(H)), q(te, 1, I), (ie = it(te, "", ie, { gap: t(x) })));
      },
      [
        () =>
          Y(
            U(
              "grid font-sans w-full",
              t(c),
              u() && "gap-2 justify-items-center"
            )
          ),
      ]
    ),
    wt("submit", te, ee),
    k(r, Z),
    Re());
}
var kd = j(
    '<div class="p-4 border-b border-[var(--border-color-default)]"><!></div>'
  ),
  Cd = j(
    '<div class="text-xs opacity-70 px-3 py-2 text-center">No items</div>'
  ),
  Sd = j(
    '<li><button type="button" class="w-full text-left px-3 py-2 rounded-md hover:bg-[var(--color-bg-hover)] focus:outline-[var(--border-color-focus)] focus:outline-2 transition-colors"> </button></li>'
  ),
  Pd = j('<ul class="grid gap-2 p-4"></ul>'),
  Ed = j(
    '<div class="p-4 border-t border-[var(--border-color-default)]"><!></div>'
  ),
  zd = j(
    '<div class="fixed inset-0 z-[var(--z-overlay)] flex"><div role="dialog" aria-modal="true" tabindex="-1" class="flex flex-col h-full bg-[var(--color-bg-surface)] shadow-xl"><!> <div class="flex-1 overflow-y-auto" tabindex="-1"><!></div> <!></div> <button type="button" class="flex-1 bg-black/40" aria-hidden="true"></button></div>'
  ),
  Ad = j(
    '<button type="button" aria-label="Toggle navigation"><span class="relative block w-5 h-3.5"><span></span> <span></span> <span></span></span></button> <!>',
    1
  );
function Fd(r, e) {
  Be(e, !0);
  let a = F(e, "menuItems", 19, () => []),
    n = F(e, "activeItem", 3, ""),
    o = F(e, "closeOnSelect", 3, !0),
    i = F(e, "class", 3, ""),
    s = F(e, "width", 3, 300),
    l = ge(void 0),
    u = ge(void 0),
    f = null,
    h = ge(!1);
  const C = p(() => e.pressed ?? t(h));
  function b(K) {
    e.pressed === void 0 ? A(h, K, !0) : e.onOpenChange?.(K);
  }
  function _() {
    b(!t(C));
  }
  function w() {
    (b(!1), queueMicrotask(() => t(l)?.focus()));
  }
  const y = Hu(() => w(), 150);
  function g(K) {
    K.key === "Escape" && y();
  }
  Ge(
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
  const d =
      "fixed top-4 left-4 inline-flex items-center justify-center h-8 w-8 rounded-md border border-[var(--border-color-default)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] transition-colors z-[var(--z-modal)]",
    v = p(() => U(d, i()));
  var c = Ad(),
    x = Ce(c);
  x.__click = _;
  var P = m(x),
    S = m(P),
    E = D(S, 2),
    T = D(E, 2);
  st(
    x,
    (K) => A(l, K),
    () => t(l)
  );
  var L = D(x, 2);
  {
    var H = (K) => {
      var ae = zd(),
        de = m(ae),
        pe = m(de);
      {
        var J = (Z) => {
          var te = kd(),
            ie = m(te);
          (Qe(ie, () => e.header ?? Q), k(Z, te));
        };
        G(pe, (Z) => {
          e.header && Z(J);
        });
      }
      var re = D(pe, 2),
        ue = m(re);
      {
        var N = (Z) => {
            var te = Cd();
            k(Z, te);
          },
          B = (Z) => {
            var te = Pd();
            (ot(
              te,
              21,
              a,
              (ie) => ie.id,
              (ie, _e) => {
                var I = Sd(),
                  z = m(I);
                z.__click = () => {
                  (e.onSelect?.(t(_e).id), o() && w());
                };
                var ne = m(z);
                (O(() => {
                  (be(z, "aria-current", n() === t(_e).id ? "page" : void 0),
                    X(ne, t(_e).label));
                }),
                  k(ie, I));
              }
            ),
              k(Z, te));
          };
        G(ue, (Z) => {
          a().length === 0 ? Z(N) : Z(B, !1);
        });
      }
      var $ = D(re, 2);
      {
        var V = (Z) => {
          var te = Ed(),
            ie = m(te);
          (Qe(ie, () => e.footer ?? Q), k(Z, te));
        };
        G($, (Z) => {
          e.footer && Z(V);
        });
      }
      st(
        de,
        (Z) => A(u, Z),
        () => t(u)
      );
      var ee = D(de, 2);
      ((ee.__click = w),
        O(() => it(de, `width:${typeof s() == "number" ? `${s()}px` : s()}`)),
        k(K, ae));
    };
    G(L, (K) => {
      t(C) && K(H);
    });
  }
  (O(
    (K, ae, de) => {
      (be(x, "aria-expanded", t(C)),
        q(x, 1, Y(t(v))),
        q(S, 1, K),
        q(E, 1, ae),
        q(T, 1, de));
    },
    [
      () =>
        Y(
          U(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform duration-200",
            t(C)
              ? "translate-y-[-50%] rotate-45"
              : "translate-y-[calc(-50%_-_6px)]"
          )
        ),
      () =>
        Y(
          U(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-opacity duration-200 translate-y-[-50%]",
            t(C) ? "opacity-0" : "opacity-100"
          )
        ),
      () =>
        Y(
          U(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform duration-200",
            t(C)
              ? "translate-y-[-50%] -rotate-45"
              : "translate-y-[calc(-50%_+_6px)]"
          )
        ),
    ]
  ),
    k(r, c),
    Re());
}
lt(["click"]);
var Td = j(
    '<div role="group" class="relative inline-block overflow-visible"><button type="button" aria-haspopup="menu"> </button></div>'
  ),
  Ld = j(
    '<div class="my-1 mx-1 border-t border-[var(--border-color-default)]" role="separator"></div>'
  ),
  Md = j("<span> </span>"),
  Dd = j("<span>&gt;</span>"),
  Nd = j(
    '<div class="my-1 mx-1 border-t border-[var(--border-color-default)]" role="separator"></div>'
  ),
  Id = j("<span> </span>"),
  Od = j(
    '<button type="button" role="menuitem"><span class="flex items-center gap-2 flex-1 min-w-0"><span class="truncate"> </span></span> <span><!></span></button>'
  ),
  Bd = j('<div role="menu" tabindex="0"></div>'),
  Rd = j(
    '<div class="relative"><button type="button" role="menuitem"><span class="flex items-center gap-2 flex-1 min-w-0"><span class="truncate"> </span></span> <span class="flex items-center shrink-0 ml-auto gap-1"><!> <!></span></button> <!></div>'
  ),
  jd = j(
    '<div role="presentation" tabindex="-1" class="fixed inset-0 z-40"></div> <div role="menu" tabindex="-1"></div>',
    1
  ),
  Vd = j('<nav aria-label="Menu bar"></nav> <!>', 1);
function ys(r, e) {
  Be(e, !0);
  let a = F(e, "menus", 19, () => []),
    n = F(e, "onSelect", 3, () => {}),
    o = F(e, "class", 3, ""),
    i = F(e, "sz", 3, "sm"),
    s = ge(""),
    l = ge(""),
    u = ge(-1),
    f = ge(-1),
    h = Je({}),
    C = Je({}),
    b = Je({}),
    _ = Je({}),
    w = ge(0),
    y = ge(0),
    g = Je({}),
    d = ge(0),
    v = ge(0);
  const c = {
      xs: "h-7 px-3",
      sm: "h-8 px-3",
      md: "h-9 px-4",
      lg: "h-10 px-4",
      xl: "h-11 px-5",
    },
    x =
      "flex items-stretch pl-2 gap-1 border-b relative z-10 bg-[var(--color-bg-surface)] text-[var(--color-text-default)] border-[var(--border-color-default)]",
    P = 8,
    S =
      "px-4 rounded-xs leading-none transition-colors outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]",
    E = "bg-[var(--color-bg-muted)] text-[var(--color-text-default)]",
    T = "hover:bg-[var(--color-bg-muted)] text-[var(--color-text-default)]",
    L = p(
      () =>
        `position:fixed; top:${t(w)}px; left:${t(y)}px; width:max-content; max-width:calc(100vw - 16px);`
    ),
    H = p(
      () =>
        `position:fixed; top:${t(d)}px; left:${t(v)}px; width:max-content; max-width:calc(100vw - 16px);`
    ),
    K = p(() => Ie[i()]),
    ae = "flex items-center shrink-0",
    de = p(() => U(x, c[i()], t(K), o())),
    pe = p(() => U(S, c[i()], t(K)));
  function J(M) {
    return typeof M == "string" ? M : M.label;
  }
  function re(M) {
    return typeof M == "string" ? M : (M.id ?? M.label ?? "");
  }
  function ue(M) {
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
  function $(M, oe) {
    return re(M) || `__action-${oe}`;
  }
  function V(M, oe) {
    (ee(), n()(M, oe));
  }
  function ee() {
    (A(s, ""), A(l, ""), A(u, -1), A(f, -1));
  }
  function Z(M, oe) {
    const le = M.getBoundingClientRect(),
      me = Math.min(
        oe?.getBoundingClientRect().width ?? le.width,
        window.innerWidth - 16
      ),
      ke = window.innerWidth - le.left,
      ye = le.right,
      W = ke < me && ye > ke,
      xe = window.scrollX,
      Te = window.scrollX + window.innerWidth;
    A(w, le.bottom + window.scrollY);
    const Fe = W ? le.right + window.scrollX - me : le.left + window.scrollX,
      Oe = Te - me;
    A(y, Math.max(xe, Math.min(Fe, Oe)), !0);
  }
  function te(M, oe) {
    const le = M.getBoundingClientRect(),
      me = oe?.getBoundingClientRect(),
      ke = Math.min(me?.width ?? le.width, window.innerWidth - 16),
      ye = window.innerWidth - le.right,
      W = le.left,
      xe = ye < ke && W > ye;
    A(d, le.top + window.scrollY);
    const Te = window.scrollX,
      Fe = window.scrollX + window.innerWidth,
      Oe = xe
        ? le.left + window.scrollX - ke - P
        : le.right + window.scrollX + P,
      Ve = Fe - ke - P;
    A(v, Math.max(Te, Math.min(Oe, Ve)), !0);
  }
  function ie(M) {
    return M.findIndex((oe) => !N(oe));
  }
  function _e(M, oe) {
    if (!M.length) return -1;
    let le = oe;
    for (let me = 0; me < M.length; me++)
      if (((le = (le + 1 + M.length) % M.length), !N(M[le]))) return le;
    return oe;
  }
  function I(M, oe) {
    if (!M.length) return -1;
    let le = oe;
    for (let me = 0; me < M.length; me++)
      if (((le = (le - 1 + M.length) % M.length), !N(M[le]))) return le;
    return oe;
  }
  function z(M, oe) {
    if (oe < 0 || oe >= M.actions.length) return;
    const le = M.actions[oe];
    !le ||
      N(le) ||
      ((!B(le) || t(l) !== re(le)) && (A(l, ""), A(f, -1)),
      A(u, oe, !0),
      queueMicrotask(() => {
        t(s) === M.name && b[re(le)]?.focus();
      }));
  }
  function ne(M, oe) {
    if (!B(M) || oe < 0 || oe >= M.submenu.length) return;
    const le = M.submenu[oe];
    !le ||
      N(le) ||
      (A(f, oe, !0),
      queueMicrotask(() => {
        t(l) === re(M) && _[re(le)]?.focus();
      }));
  }
  function R(M, oe = !1) {
    (A(s, M.name, !0), A(l, ""), A(f, -1));
    const le = oe ? ie(M.actions) : -1;
    A(u, le, !0);
    const me = h[M.name];
    (me && Z(me, C[M.name]), oe && le !== -1 && z(M, le));
  }
  function fe(M, oe = !1) {
    if (!B(M)) return;
    A(l, re(M), !0);
    const le = b[re(M)];
    le && te(le, g[re(M)]);
    const me = oe ? ie(M.submenu) : -1;
    (A(f, me, !0), oe && me !== -1 && ne(M, me));
  }
  function he(M, oe, le) {
    if (M.key === "Enter" || M.key === " " || M.key === "ArrowDown")
      (M.preventDefault(), R(oe, !0));
    else if (M.key === "ArrowRight") {
      M.preventDefault();
      const me = (le + 1) % a().length;
      h[a()[me].name]?.focus();
    } else if (M.key === "ArrowLeft") {
      M.preventDefault();
      const me = (le - 1 + a().length) % a().length;
      h[a()[me].name]?.focus();
    }
  }
  function se(M, oe) {
    if ((M.stopPropagation(), !t(s))) return;
    const le = oe.actions,
      me = ie(le);
    if (me === -1) return;
    const ke = t(u) === -1 ? me : t(u);
    if (M.key === "Escape") (M.preventDefault(), ee(), h[oe.name]?.focus());
    else if (M.key === "ArrowDown") {
      M.preventDefault();
      const ye = _e(le, ke);
      z(oe, ye);
    } else if (M.key === "ArrowUp") {
      M.preventDefault();
      const ye = I(le, ke);
      z(oe, ye);
    } else if (M.key === "ArrowRight") {
      M.preventDefault();
      const ye = le[ke];
      ye && B(ye) && fe(ye, !0);
    } else if (M.key === "ArrowLeft" && t(l))
      (M.preventDefault(), A(l, ""), A(f, -1), z(oe, ke));
    else if (M.key === "Enter" || M.key === " ") {
      M.preventDefault();
      const ye = le[ke];
      ye && (B(ye) ? fe(ye, !0) : V(oe.name, ye));
    } else if (M.key === "Tab") {
      M.preventDefault();
      const ye = M.shiftKey ? I(le, ke) : _e(le, ke);
      z(oe, ye);
    }
  }
  function Ae(M, oe, le) {
    if ((M.stopPropagation(), !t(l) || !B(oe))) return;
    const me = oe.submenu,
      ke = ie(me);
    if (ke === -1) return;
    const ye = t(f) === -1 ? ke : t(f);
    if (M.key === "Escape")
      (M.preventDefault(), A(l, ""), A(f, -1), b[re(oe)]?.focus());
    else if (M.key === "ArrowDown") {
      M.preventDefault();
      const W = _e(me, ye);
      ne(oe, W);
    } else if (M.key === "ArrowUp") {
      M.preventDefault();
      const W = I(me, ye);
      ne(oe, W);
    } else if (M.key === "ArrowLeft")
      (M.preventDefault(), A(l, ""), A(f, -1), b[re(oe)]?.focus());
    else if (M.key === "Enter" || M.key === " ") {
      M.preventDefault();
      const W = me[ye];
      W && V(le, W);
    } else if (M.key === "Tab") {
      M.preventDefault();
      const W = M.shiftKey ? I(me, ye) : _e(me, ye);
      ne(oe, W);
    }
  }
  (Ge(() => {
    if (t(s)) {
      const M = h[t(s)];
      if (M) {
        Z(M, C[t(s)]);
        const oe = () => {
          Z(M, C[t(s)]);
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
  }),
    Ge(() => {
      if (t(l)) {
        const M = b[t(l)],
          oe = g[t(l)];
        if (M) {
          te(M, oe);
          const le = () => {
            te(M, g[t(l)]);
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
  var Pe = Vd(),
    ze = Ce(Pe);
  ot(
    ze,
    23,
    a,
    (M) => M.name,
    (M, oe, le) => {
      var me = Td(),
        ke = m(me);
      ((ke.__mousedown = (W) => W.preventDefault()),
        (ke.__click = () => {
          t(s) === t(oe).name ? ee() : R(t(oe), !0);
        }),
        (ke.__keydown = (W) => he(W, t(oe), t(le))));
      var ye = m(ke);
      (st(
        ke,
        (W, xe) => (h[xe.name] = W),
        (W) => h?.[W.name],
        () => [t(oe)]
      ),
        O(
          (W) => {
            (q(ke, 1, W),
              be(ke, "aria-expanded", t(s) === t(oe).name),
              X(ye, t(oe).name));
          },
          [() => Y(U(t(pe), t(s) === t(oe).name ? E : T))]
        ),
        wt("mouseenter", ke, () => {
          t(s) && t(s) !== t(oe).name && R(t(oe), !0);
        }),
        k(M, me));
    }
  );
  var ve = D(ze, 2);
  {
    var Se = (M) => {
      var oe = Me(),
        le = Ce(oe);
      (ot(
        le,
        17,
        a,
        (me) => me.name,
        (me, ke) => {
          var ye = Me(),
            W = Ce(ye);
          {
            var xe = (Te) => {
              var Fe = jd(),
                Oe = Ce(Fe);
              Oe.__mousedown = ee;
              var Ve = D(Oe, 2);
              ((Ve.__keydown = (Le) => se(Le, t(ke))),
                ot(
                  Ve,
                  23,
                  () => t(ke).actions,
                  (Le, De) => $(Le, De),
                  (Le, De, Ye) => {
                    var ut = Me(),
                      dt = Ce(ut);
                    {
                      var ft = ($e) => {
                          var ce = Ld();
                          k($e, ce);
                        },
                        It = ($e) => {
                          var ce = Rd(),
                            Ee = m(ce);
                          ((Ee.__mousedown = (Ke) => Ke.preventDefault()),
                            (Ee.__click = () => {
                              B(t(De))
                                ? (z(t(ke), t(Ye)), fe(t(De), !0))
                                : V(t(ke).name, t(De));
                            }));
                          var Ne = m(Ee),
                            Ue = m(Ne),
                            Xe = m(Ue),
                            at = D(Ne, 2),
                            vt = m(at);
                          {
                            var xt = (Ke) => {
                              var et = Md(),
                                nt = m(et);
                              (O(
                                (gt, sr) => {
                                  (q(et, 1, gt), X(nt, sr));
                                },
                                [
                                  () =>
                                    Y(
                                      U(
                                        "text-[var(--color-text-muted)] text-right",
                                        t(K)
                                      )
                                    ),
                                  () => ue(t(De)),
                                ]
                              ),
                                k(Ke, et));
                            };
                            G(vt, (Ke) => {
                              ue(t(De)) && Ke(xt);
                            });
                          }
                          var Tt = D(vt, 2);
                          {
                            var Ut = (Ke) => {
                              var et = Dd();
                              (O(
                                (nt) => q(et, 1, nt),
                                [
                                  () =>
                                    Y(
                                      U(
                                        "text-[var(--color-text-muted)] flex-shrink-0",
                                        t(K)
                                      )
                                    ),
                                ]
                              ),
                                k(Ke, et));
                            };
                            G(Tt, (Ke) => {
                              B(t(De)) && Ke(Ut);
                            });
                          }
                          st(
                            Ee,
                            (Ke, et) => (b[re(et)] = Ke),
                            (Ke) => b?.[re(Ke)],
                            () => [t(De)]
                          );
                          var Ht = D(Ee, 2);
                          {
                            var Dr = (Ke) => {
                              var et = Bd();
                              ((et.__keydown = (nt) =>
                                Ae(nt, t(De), t(ke).name)),
                                ot(
                                  et,
                                  23,
                                  () => t(De).submenu,
                                  (nt, gt) => $(nt, gt),
                                  (nt, gt, sr) => {
                                    var Lt = Me(),
                                      lr = Ce(Lt);
                                    {
                                      var ur = (cr) => {
                                          var ct = Nd();
                                          k(cr, ct);
                                        },
                                        wr = (cr) => {
                                          var ct = Od();
                                          ((ct.__mousedown = (St) =>
                                            St.preventDefault()),
                                            (ct.__click = () =>
                                              V(t(ke).name, t(gt))));
                                          var yr = m(ct),
                                            Nr = m(yr),
                                            Ir = m(Nr),
                                            $r = D(yr, 2);
                                          q($r, 1, Y(ae));
                                          var Xt = m($r);
                                          {
                                            var ka = (St) => {
                                              var Kt = Id(),
                                                Ca = m(Kt);
                                              (O(
                                                (Jt, Or) => {
                                                  (q(Kt, 1, Jt), X(Ca, Or));
                                                },
                                                [
                                                  () =>
                                                    Y(
                                                      U(
                                                        "text-[var(--color-text-muted)]",
                                                        t(K)
                                                      )
                                                    ),
                                                  () => ue(t(gt)),
                                                ]
                                              ),
                                                k(St, Kt));
                                            };
                                            G(Xt, (St) => {
                                              ue(t(gt)) && St(ka);
                                            });
                                          }
                                          (st(
                                            ct,
                                            (St, Kt) => (_[re(Kt)] = St),
                                            (St) => _?.[re(St)],
                                            () => [t(gt)]
                                          ),
                                            O(
                                              (St, Kt) => {
                                                (q(ct, 1, St), X(Ir, Kt));
                                              },
                                              [
                                                () =>
                                                  Y(
                                                    U(
                                                      "relative text-left rounded-xs transition-colors outline-none px-1.5 py-0.5",
                                                      "my-1 mr-1 w-full flex items-center justify-between gap-3",
                                                      "hover:bg-[var(--color-bg-muted)] focus-visible:bg-[var(--color-bg-muted)]",
                                                      "focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]",
                                                      "decoration-[var(--color-text-default)]",
                                                      t(K)
                                                    )
                                                  ),
                                                () => J(t(gt)),
                                              ]
                                            ),
                                            wt("mouseenter", ct, () =>
                                              A(f, t(sr), !0)
                                            ),
                                            wt("focus", ct, () =>
                                              A(f, t(sr), !0)
                                            ),
                                            k(cr, ct));
                                        };
                                      G(lr, (cr) => {
                                        N(t(gt)) ? cr(ur) : cr(wr, !1);
                                      });
                                    }
                                    k(nt, Lt);
                                  }
                                ),
                                st(
                                  et,
                                  (nt, gt) => (g[re(gt)] = nt),
                                  (nt) => g?.[re(nt)],
                                  () => [t(De)]
                                ),
                                O(
                                  (nt) => {
                                    (q(et, 1, nt), it(et, t(H)));
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
                                k(Ke, et));
                            };
                            G(Ht, (Ke) => {
                              B(t(De)) && t(l) === re(t(De)) && Ke(Dr);
                            });
                          }
                          (O(
                            (Ke, et) => {
                              (q(Ee, 1, Ke), X(Xe, et));
                            },
                            [
                              () =>
                                Y(
                                  U(
                                    "relative text-left rounded-xs transition-colors outline-none px-1.5 py-0.5 my-1 mr-1 min-w-full flex items-center",
                                    "gap-3 hover:bg-[var(--color-bg-muted)] focus-visible:bg-[var(--color-bg-muted)]",
                                    "focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]",
                                    t(K)
                                  )
                                ),
                              () => J(t(De)),
                            ]
                          ),
                            wt("mouseenter", Ee, () => {
                              (A(u, t(Ye), !0),
                                B(t(De)) && t(l) !== re(t(De))
                                  ? fe(t(De))
                                  : B(t(De)) || (A(l, ""), A(f, -1)));
                            }),
                            wt("focus", Ee, () => {
                              z(t(ke), t(Ye));
                            }),
                            k($e, ce));
                        };
                      G(dt, ($e) => {
                        N(t(De)) ? $e(ft) : $e(It, !1);
                      });
                    }
                    k(Le, ut);
                  }
                ),
                st(
                  Ve,
                  (Le, De) => (C[De.name] = Le),
                  (Le) => C?.[Le.name],
                  () => [t(ke)]
                ),
                O(
                  (Le) => {
                    (q(Ve, 1, Le), it(Ve, t(L)));
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
                k(Te, Fe));
            };
            G(W, (Te) => {
              t(s) === t(ke).name && Te(xe);
            });
          }
          k(me, ye);
        }
      ),
        k(M, oe));
    };
    G(ve, (M) => {
      t(s) && M(Se);
    });
  }
  (O(() => q(ze, 1, Y(t(de)))), k(r, Pe), Re());
}
lt(["mousedown", "click", "keydown"]);
var qd = j("<div><span> </span> <!> <!> <!></div>");
function ks(r, e) {
  Be(e, !0);
  let a = F(e, "class", 3, "");
  const n = p(() =>
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
    if (e.totalPages <= 3) return yo(e.totalPages, (y) => y + 1);
    let w = e.currentPage - 1;
    return (
      w < 1 && (w = 1),
      w + 3 - 1 > e.totalPages && (w = e.totalPages - 3 + 1),
      yo(3, (y) => w + y)
    );
  }
  var l = qd(),
    u = m(l),
    f = m(u),
    h = D(u, 2);
  {
    let _ = p(() => e.currentPage === 1);
    tt(h, {
      onClick: i,
      get disabled() {
        return t(_);
      },
      sz: "xs",
      variant: "secondary",
      children: (w, y) => {
        var g = je("<");
        k(w, g);
      },
      $$slots: { default: !0 },
    });
  }
  var C = D(h, 2);
  ot(
    C,
    16,
    s,
    (_) => _,
    (_, w) => {
      {
        let y = p(() => (e.currentPage === w ? "primary" : "secondary")),
          g = p(() => (e.currentPage === w ? "page" : void 0));
        tt(_, {
          onClick: () => e.onPageChange(w),
          sz: "xs",
          get variant() {
            return t(y);
          },
          get "aria-current"() {
            return t(g);
          },
          children: (d, v) => {
            var c = je();
            (O(() => X(c, w)), k(d, c));
          },
          $$slots: { default: !0 },
        });
      }
    }
  );
  var b = D(C, 2);
  {
    let _ = p(() => e.currentPage === e.totalPages);
    tt(b, {
      onClick: o,
      get disabled() {
        return t(_);
      },
      sz: "xs",
      variant: "secondary",
      children: (w, y) => {
        var g = je(">");
        k(w, g);
      },
      $$slots: { default: !0 },
    });
  }
  (O(() => {
    (q(l, 1, Y(t(n))),
      X(f, `Page ${e.currentPage ?? ""} of ${e.totalPages ?? ""}`));
  }),
    k(r, l),
    Re());
}
function Ud(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "sm"),
    n = F(e, "class", 3, "");
  const o = Vt("lang") ?? null,
    i = p(() => o?.value ?? "en"),
    s = p(() => ya[t(i)].components.primaryColorSelect),
    l = p(() => e.label ?? t(s).text),
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
    f = u.reduce((_, w) => ((_[w.value] = w), _), {});
  let h = ge("default"),
    C = ge(!1);
  function b(_) {
    return typeof _ == "string" && _ in f;
  }
  (Ge(() => {
    if (!t(C)) {
      const _ = localStorage.getItem("primary");
      (b(_) && A(h, _, !0), A(C, !0));
    }
  }),
    Ge(() => {
      t(C) &&
        (document.documentElement.setAttribute("data-primary", t(h)),
        localStorage.setItem("primary", t(h)));
    }),
    jt(r, {
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
        return t(h);
      },
      onChange: (_) => {
        b(_) && A(h, _, !0);
      },
      get class() {
        return n();
      },
    }),
    Re());
}
var Hd = j("<span> </span>"),
  Kd = j("<div></div>"),
  Gd = j("<div></div>"),
  Wd = j(
    '<div><!> <div class="relative w-full h-10"><div><!></div></div></div>'
  );
function Zd(r, e) {
  Be(e, !0);
  let a = F(e, "value", 3, 0),
    n = F(e, "indeterminate", 3, !1),
    o = F(e, "sz", 3, "md"),
    i = F(e, "variant", 3, "default"),
    s = F(e, "class", 3, ""),
    l = F(e, "label", 3, ""),
    u = F(e, "disabled", 3, !1),
    f = Ct(e, [
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
  const h = p(() => `${da(a(), 0, 100)}%`),
    C = p(
      () =>
        ({
          xs: "h-[4px]",
          sm: "h-[5px]",
          md: "h-[6px]",
          lg: "h-[7px]",
          xl: "h-[8px]",
        })[o()]
    ),
    b = p(() =>
      i() === "neutral"
        ? "bg-[var(--color-bg-secondary)]"
        : "bg-[var(--color-bg-primary)]"
    ),
    _ = p(() =>
      U(
        "relative flex flex-col gap-1 w-full data-[disabled=true]:opacity-[var(--opacity-disabled)] data-[disabled=true]:cursor-not-allowed",
        s()
      )
    ),
    w = p(() =>
      U(
        "absolute top-1/2 -translate-y-1/2 w-full bg-[var(--border-color-default)] rounded overflow-hidden",
        t(C)
      )
    ),
    y = p(() => U("h-full", t(b)));
  var g = Wd();
  _t(
    g,
    (T) => ({
      class: t(_),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": T,
      "data-disabled": u() ? "true" : void 0,
      ...f,
    }),
    [() => (n() ? void 0 : Math.round(da(a(), 0, 100)))],
    void 0,
    void 0,
    "svelte-1lu0uwz"
  );
  var d = m(g);
  {
    var v = (T) => {
      var L = Hd(),
        H = m(L);
      (O(() => {
        (q(
          L,
          1,
          `text-[var(--color-text-muted)] select-none ${Ie[o()] ?? ""}`,
          "svelte-1lu0uwz"
        ),
          X(H, l()));
      }),
        k(T, L));
    };
    G(d, (T) => {
      l() && T(v);
    });
  }
  var c = D(d, 2),
    x = m(c),
    P = m(x);
  {
    var S = (T) => {
        var L = Kd();
        (O((H) => q(L, 1, H, "svelte-1lu0uwz"), [() => Y(U(t(y), "pb-indet"))]),
          k(T, L));
      },
      E = (T) => {
        var L = Gd();
        (O(
          (H) => {
            (q(L, 1, H, "svelte-1lu0uwz"), it(L, `width:${t(h)}`));
          },
          [() => Y(U(t(y), "transition-[width]"))]
        ),
          k(T, L));
      };
    G(P, (T) => {
      n() ? T(S) : T(E, !1);
    });
  }
  (O(() => q(x, 1, Y(t(w)), "svelte-1lu0uwz")), k(r, g), Re());
}
var Yd = j("<span> </span>"),
  Xd = qt("<circle></circle>"),
  Jd = qt("<circle></circle>"),
  Qd = j("<div> </div>"),
  $d = j(
    '<div><!> <div class="relative inline-flex items-center justify-center"><svg class="pc-svg svelte-10y2c7k" role="presentation" aria-hidden="true"><g class="pc-rot svelte-10y2c7k"><circle class="pc-track svelte-10y2c7k"></circle><!></g></svg> <!></div></div>'
  );
function ef(r, e) {
  Be(e, !0);
  let a = F(e, "value", 3, 0),
    n = F(e, "indeterminate", 3, !1),
    o = F(e, "sz", 3, "md"),
    i = F(e, "variant", 3, "default"),
    s = F(e, "class", 3, ""),
    l = F(e, "label", 3, ""),
    u = F(e, "disabled", 3, !1),
    f = Ct(e, [
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
  const h = {
      xs: { diameter: 40, stroke: 4 },
      sm: { diameter: 48, stroke: 5 },
      md: { diameter: 56, stroke: 6 },
      lg: { diameter: 64, stroke: 7 },
      xl: { diameter: 72, stroke: 8 },
    },
    C = p(() => da(a(), 0, 100)),
    b = p(() => Math.round(t(C))),
    _ = p(() => h[o()]),
    w = p(() => t(_).diameter / 2),
    y = p(() => t(w) - t(_).stroke / 2),
    g = p(() => 2 * Math.PI * t(y)),
    d = p(() => ((100 - t(C)) / 100) * t(g)),
    v = p(() => `${t(g)} ${t(g)}`),
    c = p(() => `${t(g) * 0.3} ${t(g)}`),
    x = p(() =>
      i() === "neutral"
        ? "stroke-[var(--color-bg-secondary)]"
        : "stroke-[var(--color-bg-primary)]"
    ),
    P = p(() =>
      U(
        "inline-flex flex-col items-center gap-1 data-[disabled=true]:opacity-[var(--opacity-disabled)] data-[disabled=true]:cursor-not-allowed",
        s()
      )
    );
  var S = $d();
  _t(
    S,
    () => ({
      class: t(P),
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
  var E = m(S);
  {
    var T = (N) => {
      var B = Yd(),
        $ = m(B);
      (O(() => {
        (q(
          B,
          1,
          `text-[var(--color-text-muted)] select-none ${Ie[o()] ?? ""}`,
          "svelte-10y2c7k"
        ),
          X($, l()));
      }),
        k(N, B));
    };
    G(E, (N) => {
      l() && N(T);
    });
  }
  var L = D(E, 2),
    H = m(L),
    K = m(H),
    ae = m(K),
    de = D(ae);
  {
    var pe = (N) => {
        var B = Xd();
        (O(
          ($) => {
            (q(B, 0, $, "svelte-10y2c7k"),
              be(B, "cx", t(w)),
              be(B, "cy", t(w)),
              be(B, "r", t(y)),
              be(B, "stroke-width", t(_).stroke),
              be(B, "stroke-dasharray", t(c)));
          },
          [() => Y(U("pc-bar pc-indet", t(x)))]
        ),
          k(N, B));
      },
      J = (N) => {
        var B = Jd();
        (O(
          ($) => {
            (q(B, 0, $, "svelte-10y2c7k"),
              be(B, "cx", t(w)),
              be(B, "cy", t(w)),
              be(B, "r", t(y)),
              be(B, "stroke-width", t(_).stroke),
              be(B, "stroke-dasharray", t(v)),
              be(B, "stroke-dashoffset", t(d)));
          },
          [() => Y(U("pc-bar", t(x)))]
        ),
          k(N, B));
      };
    G(de, (N) => {
      n() ? N(pe) : N(J, !1);
    });
  }
  var re = D(H, 2);
  {
    var ue = (N) => {
      var B = Qd(),
        $ = m(B);
      (O(() => {
        (q(
          B,
          1,
          `absolute inset-0 flex items-center justify-center text-[var(--color-text-muted)] font-medium select-none ${Ie[o()] ?? ""}`,
          "svelte-10y2c7k"
        ),
          X($, `${t(b) ?? ""}%`));
      }),
        k(N, B));
    };
    G(re, (N) => {
      n() || N(ue);
    });
  }
  (O(() => {
    (it(L, `width:${t(_).diameter}px;height:${t(_).diameter}px;`),
      be(H, "viewBox", `0 0 ${t(_).diameter} ${t(_).diameter}`),
      be(ae, "cx", t(w)),
      be(ae, "cy", t(w)),
      be(ae, "r", t(y)),
      be(ae, "stroke-width", t(_).stroke));
  }),
    k(r, S),
    Re());
}
var tf = j("<span><!></span>"),
  rf = j("<span> </span>"),
  af = j(
    '<label><input/> <span aria-hidden="true"><span></span></span> <!></label>'
  );
function uo(r, e) {
  Be(e, !0);
  const a = [];
  let n = F(e, "sz", 3, "md"),
    o = F(e, "variant", 3, "default"),
    i = F(e, "checked", 15, !1),
    s = F(e, "group", 15, void 0),
    l = F(e, "class", 3, ""),
    u = F(e, "value", 3, "on"),
    f = Ct(e, [
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
  const h = p(() => e.id ?? on("rd-")),
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
    _ = {
      xs: "gap-1.5",
      sm: "gap-2",
      md: "gap-2.5",
      lg: "gap-3",
      xl: "gap-3.5",
    },
    w = p(() =>
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
    y =
      "rounded-full border border-solid cursor-pointer transition-all duration-[var(--transition-fast)] ease-[var(--timing-default)] flex items-center justify-center",
    g =
      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--border-color-focus)] peer-focus-visible:border-[var(--border-color-focus)]",
    d = p(() =>
      o() === "neutral"
        ? "bg-[var(--border-color-strong)]"
        : "bg-[var(--color-bg-primary)]"
    ),
    v = p(() => typeof s() < "u"),
    c = p(() => (t(v) ? s() === u() : i())),
    x = p(() => (t(c) ? "checked" : "unchecked")),
    P = p(() =>
      U("inline-flex items-center cursor-pointer select-none", _[n()], l())
    ),
    S = p(() =>
      U(
        y,
        g,
        C[n()],
        t(c) && t(w).checked,
        !t(c) && t(w).unchecked,
        "peer-disabled:opacity-[var(--opacity-disabled)] peer-disabled:cursor-not-allowed"
      )
    ),
    E = p(() =>
      U(
        "rounded-full transition-transform duration-[var(--transition-fast)] ease-[var(--timing-default)]",
        b[n()],
        t(d),
        t(c) ? "scale-100 opacity-100" : "scale-50 opacity-0"
      )
    ),
    T = p(() =>
      U(
        Ie[n()],
        "[color:var(--color-text-muted)] font-medium peer-disabled:cursor-not-allowed"
      )
    );
  var L = af(),
    H = m(L),
    K = (ue) => {
      const N = ue.currentTarget.checked;
      (i(N), e.onChange?.(N));
    };
  _t(
    H,
    () => ({
      id: t(h),
      type: "radio",
      value: u(),
      checked: t(c),
      ...f,
      class: "sr-only peer",
      "aria-checked": t(c),
      "aria-describedby": e.describedBy,
      onchange: K,
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0
  );
  var ae = D(H, 2),
    de = m(ae),
    pe = D(ae, 2);
  {
    var J = (ue) => {
        var N = tf(),
          B = m(N);
        (Qe(B, () => e.children ?? Q), O(() => q(N, 1, Y(t(T)))), k(ue, N));
      },
      re = (ue) => {
        var N = Me(),
          B = Ce(N);
        {
          var $ = (V) => {
            var ee = rf(),
              Z = m(ee);
            (O(() => {
              (q(ee, 1, Y(t(T))), X(Z, e.label));
            }),
              k(V, ee));
          };
          G(
            B,
            (V) => {
              e.label && V($);
            },
            !0
          );
        }
        k(ue, N);
      };
    G(pe, (ue) => {
      e.children ? ue(J) : ue(re, !1);
    });
  }
  (O(() => {
    (q(L, 1, Y(t(P))),
      be(L, "for", t(h)),
      be(ae, "data-state", t(x)),
      q(ae, 1, Y(t(S))),
      q(de, 1, Y(t(E))));
  }),
    zu(a, [], H, () => (u(), s()), s),
    k(r, L),
    Re());
}
var nf = j('<div class="flex justify-end mt-1"><div> </div></div>'),
  of = j(
    '<div><div class="relative flex items-center w-full h-10"><div><div></div></div> <input type="range" aria-label="slider"/></div> <!></div>'
  );
function sf(r, e) {
  Be(e, !0);
  let a = F(e, "value", 15, 0),
    n = F(e, "min", 3, 0),
    o = F(e, "max", 3, 100),
    i = F(e, "step", 3, 1),
    s = F(e, "sz", 3, "md"),
    l = F(e, "variant", 3, "default"),
    u = F(e, "disabled", 3, !1),
    f = F(e, "showValue", 3, !1),
    h = F(e, "class", 3, ""),
    C = Ct(e, [
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
  const b = p(
      () =>
        ({
          xs: "h-[4px]",
          sm: "h-[5px]",
          md: "h-[6px]",
          lg: "h-[7px]",
          xl: "h-[8px]",
        })[s()]
    ),
    _ = p(
      () =>
        ({
          xs: "[&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3",
          sm: "[&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4",
          md: "[&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5",
          lg: "[&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6",
          xl: "[&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7",
        })[s()]
    ),
    w = p(() =>
      l() === "neutral"
        ? "bg-[var(--color-bg-secondary)]"
        : "bg-[var(--color-bg-primary)]"
    ),
    y = p(() =>
      l() === "neutral"
        ? "[&::-webkit-slider-thumb]:bg-[var(--color-bg-secondary)] [&::-moz-range-thumb]:bg-[var(--color-bg-secondary)]"
        : "[&::-webkit-slider-thumb]:bg-[var(--color-bg-primary)] [&::-moz-range-thumb]:bg-[var(--color-bg-primary)]"
    ),
    g = p(() => da(((a() - n()) / Math.max(1e-12, o() - n())) * 100, 0, 100)),
    d = p(() =>
      U(
        "relative w-full data-[disabled=true]:opacity-[var(--opacity-disabled)]",
        u() ? "cursor-not-allowed" : "cursor-pointer",
        h()
      )
    ),
    v = p(() =>
      U(
        "absolute top-1/2 -translate-y-1/2 w-full bg-[var(--color-bg-muted)] rounded overflow-hidden",
        t(b)
      )
    ),
    c =
      "relative z-10 w-full h-10 bg-transparent appearance-none cursor-pointer disabled:cursor-not-allowed [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-[var(--radius-full)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--color-bg-surface)] [&::-webkit-slider-thumb]:shadow-[var(--shadow-color)] [&::-moz-range-thumb]:rounded-[var(--radius-full)] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--color-bg-surface)] [&::-moz-range-thumb]:shadow-[var(--shadow-color)] hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-125 hover:[&::-moz-range-thumb]:scale-110 active:[&::-moz-range-thumb]:scale-125 focus:outline-none focus-visible:outline-none focus-visible:[&::-webkit-slider-thumb]:shadow-[0_0_0_3px_var(--border-color-focus)] focus-visible:[&::-moz-range-thumb]:shadow-[0_0_0_3px_var(--border-color-focus)] disabled:hover:[&::-webkit-slider-thumb]:scale-100 disabled:active:[&::-webkit-slider-thumb]:scale-100 disabled:hover:[&::-moz-range-thumb]:scale-100 disabled:active:[&::-moz-range-thumb]:scale-100",
    x = p(() => U(c, t(_), t(y)));
  function P(N) {
    const B = i() || 1,
      $ = Math.round((N - n()) / B),
      V = n() + $ * B;
    return da(Number(V.toFixed(6)), n(), o());
  }
  let S;
  function E(N) {
    const B = S.getBoundingClientRect(),
      $ = da((N - B.left) / B.width, 0, 1);
    (a(P(n() + $ * (o() - n()))), e.onInput?.(a()));
  }
  function T(N) {
    u() || E(N.clientX);
  }
  function L(N) {
    const B = N.currentTarget;
    (a(P(Number(B.value))), e.onInput?.(a()));
  }
  function H(N) {
    if (u()) return;
    const B = o() - n(),
      $ = Math.max(i() || 1, Math.round(B / 10));
    let V = a();
    switch (N.key) {
      case "ArrowLeft":
      case "ArrowDown":
        V = a() - (i() || 1);
        break;
      case "ArrowRight":
      case "ArrowUp":
        V = a() + (i() || 1);
        break;
      case "PageDown":
        V = a() - $;
        break;
      case "PageUp":
        V = a() + $;
        break;
      case "Home":
        V = n();
        break;
      case "End":
        V = o();
        break;
      default:
        return;
    }
    (a(P(V)), e.onInput?.(a()), N.preventDefault());
  }
  var K = of();
  _t(K, () => ({
    class: t(d),
    onclick: T,
    "data-disabled": u() ? "true" : void 0,
    ...C,
  }));
  var ae = m(K),
    de = m(ae),
    pe = m(de),
    J = D(de, 2);
  ((J.__input = L), (J.__keydown = H));
  var re = D(ae, 2);
  {
    var ue = (N) => {
      var B = nf(),
        $ = m(B),
        V = m($);
      (O(() => {
        (q(
          $,
          1,
          `font-[var(--font-mono)] text-[var(--color-text-muted)] select-none ${Ie[s()] ?? ""}`
        ),
          X(V, a()));
      }),
        k(N, B));
    };
    G(re, (N) => {
      f() && N(ue);
    });
  }
  (st(
    K,
    (N) => (S = N),
    () => S
  ),
    O(
      (N) => {
        (q(de, 1, Y(t(v))),
          q(pe, 1, N),
          it(pe, `width:${t(g)}%`),
          q(J, 1, Y(t(x))),
          be(J, "min", n()),
          be(J, "max", o()),
          be(J, "step", i()),
          bs(J, a()),
          (J.disabled = u()),
          be(J, "aria-valuemin", n()),
          be(J, "aria-valuemax", o()),
          be(J, "aria-valuenow", a()));
      },
      [() => Y(U("w-full h-full transition-[width]", t(w)))]
    ),
    k(r, K),
    Re());
}
lt(["input", "keydown"]);
var lf = j(
    '<div class="overflow-auto min-w-0 min-h-0"><!></div> <div class="touch-none select-none z-10 cursor-col-resize bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-hover)] transition-colors"></div> <div class="overflow-auto min-w-0 min-h-0 flex-1"><!></div>',
    1
  ),
  uf = j(
    '<div class="overflow-auto min-w-0 min-h-0"><!></div> <div class="touch-none select-none z-10 cursor-row-resize bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-hover)] transition-colors"></div> <div class="overflow-auto min-w-0 min-h-0"><!></div>',
    1
  ),
  cf = j("<div><!></div>");
function pi(r, e) {
  Be(e, !0);
  let a = F(e, "direction", 3, "horizontal"),
    n = F(e, "initialSize", 3, 30),
    o = F(e, "dividerSize", 3, 4),
    i = F(e, "minSize", 3, 10),
    s = F(e, "maxSize", 3, 90),
    l,
    u = p(n),
    f = ge(!1),
    h = 0,
    C = 0,
    b = 0;
  function _() {
    return l ? (a() === "horizontal" ? l.offsetWidth : l.offsetHeight) : 0;
  }
  function w(S) {
    (A(f, !0),
      (h = t(u)),
      (C = a() === "horizontal" ? S.clientX : S.clientY),
      (b = _()),
      document.addEventListener("pointermove", y),
      document.addEventListener("pointerup", g),
      document.addEventListener("pointercancel", g),
      S.preventDefault(),
      S.stopPropagation());
  }
  function y(S) {
    if (!t(f)) return;
    const L = (((a() === "horizontal" ? S.clientX : S.clientY) - C) / b) * 100,
      H = h + L;
    (A(u, Math.max(i(), Math.min(s(), H))),
      S.preventDefault(),
      S.stopPropagation());
  }
  function g() {
    (A(f, !1),
      document.removeEventListener("pointermove", y),
      document.removeEventListener("pointerup", g),
      document.removeEventListener("pointercancel", g));
  }
  Ge(() => {
    const S = () => {
      b = _();
    };
    return (
      window.addEventListener("resize", S),
      () => window.removeEventListener("resize", S)
    );
  });
  var d = cf();
  let v;
  var c = m(d);
  {
    var x = (S) => {
        var E = lf(),
          T = Ce(E),
          L = m(T);
        Qe(L, () => e.first ?? Q);
        var H = D(T, 2);
        H.__pointerdown = w;
        var K = D(H, 2),
          ae = m(K);
        (Qe(ae, () => e.second ?? Q),
          O(() => {
            (it(T, `width: ${t(u) ?? ""}%`), it(H, `width: ${o() ?? ""}px`));
          }),
          k(S, E));
      },
      P = (S) => {
        var E = uf(),
          T = Ce(E),
          L = m(T);
        Qe(L, () => e.first ?? Q);
        var H = D(T, 2);
        H.__pointerdown = w;
        var K = D(H, 2),
          ae = m(K);
        (Qe(ae, () => e.second ?? Q),
          O(() => {
            (it(T, `height: ${t(u) ?? ""}%`),
              it(H, `height: ${o() ?? ""}px`),
              it(K, `height: calc(100% - ${t(u) ?? ""}% - ${o() ?? ""}px)`));
          }),
          k(S, E));
      };
    G(c, (S) => {
      a() === "horizontal" ? S(x) : S(P, !1);
    });
  }
  (st(
    d,
    (S) => (l = S),
    () => l
  ),
    O(
      () =>
        (v = q(d, 1, "w-full h-full overflow-hidden", null, v, {
          flex: a() === "horizontal",
          "flex-col": a() === "vertical",
        }))
    ),
    k(r, d),
    Re());
}
lt(["pointerdown"]);
var df = j("<span> </span>"),
  ff = j("<span> </span>"),
  vf = j("<span> </span>"),
  gf = j(
    '<label><!> <div class="inline-flex items-center gap-2"><!> <input/> <button type="button"><span></span></button> <!></div></label>'
  );
function Cs(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "md"),
    n = F(e, "checked", 15, !1),
    o = F(e, "class", 3, ""),
    i = Ct(e, [
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
  const s = p(() => e.id ?? on("sw-")),
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
    h = p(() => ("disabled" in i ? !!e.disabled : !1));
  function C() {
    t(h) || (n(!n()), e.onChange?.(n()));
  }
  const b = p(() => (n() ? "justify-end" : "justify-start")),
    _ = p(() =>
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
    w = p(() => U("inline-flex flex-col items-center gap-1 select-none", o())),
    y = p(() =>
      U(
        u[a()],
        "rounded-full bg-white border border-[var(--border-color-default)] shadow-sm"
      )
    );
  var g = gf(),
    d = m(g);
  {
    var v = (ae) => {
      var de = df(),
        pe = m(de);
      (O(() => {
        (q(de, 1, `text-[var(--color-text-muted)] ${Ie[a()] ?? ""}`),
          X(pe, e.topLabel));
      }),
        k(ae, de));
    };
    G(d, (ae) => {
      e.topLabel && ae(v);
    });
  }
  var c = D(d, 2),
    x = m(c);
  {
    var P = (ae) => {
      var de = ff(),
        pe = m(de);
      (O(() => {
        (q(de, 1, `text-[var(--color-text-muted)] ${Ie[a()] ?? ""}`),
          X(pe, e.leftLabel));
      }),
        k(ae, de));
    };
    G(x, (ae) => {
      e.leftLabel && ae(P);
    });
  }
  var S = D(x, 2),
    E = () => C();
  _t(
    S,
    () => ({
      id: t(s),
      type: "checkbox",
      checked: n(),
      ...i,
      class: "sr-only",
      "aria-checked": n(),
      "aria-invalid": i["aria-invalid"] || void 0,
      "aria-describedby": i["aria-describedby"],
      onchange: E,
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0
  );
  var T = D(S, 2);
  T.__click = C;
  var L = m(T),
    H = D(T, 2);
  {
    var K = (ae) => {
      var de = vf(),
        pe = m(de);
      (O(() => {
        (q(de, 1, `text-[var(--color-text-muted)] ${Ie[a()] ?? ""}`),
          X(pe, e.rightLabel));
      }),
        k(ae, de));
    };
    G(H, (ae) => {
      e.rightLabel && ae(K);
    });
  }
  (O(() => {
    (q(g, 1, Y(t(w))),
      be(g, "for", t(s)),
      q(T, 1, Y(t(_))),
      be(T, "aria-pressed", n()),
      be(
        T,
        "aria-label",
        typeof i["aria-label"] == "string" ? i["aria-label"] : "Switch"
      ),
      (T.disabled = t(h)),
      q(L, 1, Y(t(y))));
  }),
    k(r, g),
    Re());
}
lt(["click"]);
var pf = j(
    '<th scope="col"><button type="button" class="flex items-center gap-2 select-none hover:bg-[var(--color-bg-hover)] rounded-none px-1 py-0.5 border border-transparent focus-visible:border-[var(--border-color-focus)] focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus-visible:outline-none"><span class="truncate min-w-0 text-left"> </span> <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5.23 11.77a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L10 8.31l-3.77 3.46a.75.75 0 0 1-1 0z" fill="currentColor"></path></svg></button></th>'
  ),
  bf = j("<tr></tr>"),
  hf = j("<td><div> </div></td>"),
  mf = j("<tr></tr>"),
  _f = j('<div class="mt-3 flex justify-between items-center"><!></div>'),
  xf = j(
    '<div tabindex="-1"><table><thead><!></thead><tbody></tbody></table> <!></div>'
  );
function wf(r, e) {
  Be(e, !0);
  let a = F(e, "columns", 19, () => []),
    n = F(e, "rows", 19, () => []),
    o = F(e, "class", 3, ""),
    i = F(e, "variant", 3, "default"),
    s = F(e, "stickyHeader", 3, !1),
    l = F(e, "sz", 3, "md"),
    u = ge(null),
    f = ge(null);
  function h(J) {
    const re = J.key;
    t(u) !== re
      ? (A(u, re, !0), A(f, "asc"))
      : A(f, t(f) === "asc" ? "desc" : "asc", !0);
  }
  function C(J, re) {
    const ue = J == null || J === "",
      N = re == null || re === "";
    if (ue && N) return 0;
    if (ue) return 1;
    if (N) return -1;
    const B = Number(J),
      $ = Number(re),
      V = !Number.isNaN(B),
      ee = !Number.isNaN($);
    return V && ee
      ? B - $
      : String(J).localeCompare(String(re), void 0, {
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
    _ = p(() => {
      const J = Array.isArray(n()) ? n() : [];
      if (!t(u) || !t(f)) return J;
      const re = t(u),
        ue = J.map((N, B) => [N, B]);
      return (
        ue.sort(([N, B], [$, V]) => {
          const ee = C(N[re], $[re]);
          return ee !== 0 ? (t(f) === "asc" ? ee : -ee) : B - V;
        }),
        ue.map(([N]) => N)
      );
    }),
    w = (J) =>
      J === "end" ? "text-right" : J === "start" ? "text-left" : "text-center",
    y = p(() => U("overflow-x-auto", o())),
    g = p(() => Ie[l()]),
    d = p(i),
    v = p(() => t(d) === "list" || t(d) === "dense"),
    c = p(() => b[t(d)] ?? b.default),
    x = p(() =>
      U(
        t(v) ? "inline-table w-fit" : "min-w-full",
        "border-collapse",
        t(c).table,
        t(g),
        "text-[var(--color-text-default)]"
      )
    ),
    P = (J, re) => {
      const ue =
        typeof J.id == "string" || typeof J.id == "number"
          ? J.id
          : typeof J.key == "string" || typeof J.key == "number"
            ? J.key
            : re;
      return String(ue);
    },
    S = (J, re) => String(J.key ?? re);
  var E = xf(),
    T = m(E),
    L = m(T),
    H = m(L);
  {
    var K = (J) => {
      var re = bf();
      (ot(
        re,
        23,
        a,
        (ue, N) => S(ue, N),
        (ue, N) => {
          var B = pf(),
            $ = m(B);
          (($.__click = () => h(t(N))),
            ($.__keydown = (te) => {
              (te.key === "Enter" || te.key === " ") &&
                (te.preventDefault(), h(t(N)));
            }));
          var V = m($),
            ee = m(V),
            Z = D(V, 2);
          (O(
            (te, ie) => {
              (it(B, !t(v) && t(N).width ? `width:${t(N).width}` : void 0),
                q(B, 1, te),
                be(
                  B,
                  "aria-sort",
                  t(u) === t(N).key
                    ? t(f) === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                ),
                be($, "aria-label", `Sort by ${t(N).label}`),
                X(ee, t(N).label),
                q(Z, 0, ie));
            },
            [
              () => Y(U("px-3 font-semibold", t(c).padY, w(t(N).align))),
              () =>
                Y(
                  U(
                    "h-4 w-4 opacity-60 transition-transform",
                    t(u) === t(N).key && t(f) === "desc" && "rotate-180"
                  )
                ),
            ]
          ),
            k(ue, B));
        }
      ),
        O((ue) => q(re, 1, ue), [() => Y(U(s() && "sticky top-0 z-10"))]),
        k(J, re));
    };
    G(H, (J) => {
      t(d) !== "noTitle" && t(d) !== "list" && J(K);
    });
  }
  var ae = D(L);
  ot(
    ae,
    23,
    () => t(_),
    (J, re) => P(J, re),
    (J, re) => {
      var ue = mf();
      (ot(
        ue,
        23,
        a,
        (N, B) => S(N, B),
        (N, B) => {
          var $ = hf(),
            V = m($),
            ee = m(V);
          (O(
            (Z, te) => {
              (it($, !t(v) && t(B).width ? `width:${t(B).width}` : void 0),
                q($, 1, Z),
                q(V, 1, te),
                X(ee, t(re)[t(B).key]));
            },
            [
              () => Y(U("px-3", t(c).padY, w(t(B).align), t(c).cell)),
              () => Y(U(t(v) && "break-words whitespace-normal")),
            ]
          ),
            k(N, $));
        }
      ),
        O(
          (N) => q(ue, 1, N),
          [() => Y(U("first:[&>td]:border-t-0", t(c).row))]
        ),
        k(J, ue));
    }
  );
  var de = D(T, 2);
  {
    var pe = (J) => {
      var re = _f(),
        ue = m(re);
      (ks(
        ue,
        Bu(() => e.pagination)
      ),
        k(J, re));
    };
    G(de, (J) => {
      e.pagination && e.pagination.totalPages > 0 && J(pe);
    });
  }
  (O(() => {
    (q(E, 1, Y(t(y))),
      q(T, 1, Y(t(x))),
      q(L, 1, Y(t(c).header)),
      q(ae, 1, Y(t(c).body)));
  }),
    k(r, E),
    Re());
}
lt(["click", "keydown"]);
var yf = j('<button type="button" role="tab"><span> </span></button>'),
  kf = j(
    '<div><div role="tablist" tabindex="0" aria-orientation="horizontal"></div> <div role="tabpanel" tabindex="-1" class="w-full min-w-0 relative z-0 border-t border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-[var(--spacing-md)] rounded-b-[var(--radius-sm)] shadow-[0_1px_2px_0_var(--shadow-color)]"><!></div></div>'
  );
function Cf(r, e) {
  Be(e, !0);
  let a = F(e, "tabs", 19, () => []),
    n = F(e, "activeTab", 7, ""),
    o = F(e, "sz", 3, "md"),
    i = F(e, "variant", 3, "default"),
    s = F(e, "fitted", 3, !1),
    l = F(e, "class", 3, ""),
    u = Ct(e, [
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
  Ge(() => {
    (!n() && a().length && n(a()[0].id),
      n() && !a().find((P) => P.id === n()) && a().length && n(a()[0].id));
  });
  function f() {
    if (!n()) return;
    document.getElementById(`tab-${n()}`)?.focus();
  }
  function h(P) {
    P.disabled || (n(P.id), e.onChange?.(P.id));
  }
  function C(P) {
    const S = a().filter((H) => !H.disabled);
    if (!S.length) return;
    const E = Math.max(
      0,
      S.findIndex((H) => H.id === n())
    );
    let T = E;
    if (P.key === "ArrowRight") T = (E + 1) % S.length;
    else if (P.key === "ArrowLeft") T = (E - 1 + S.length) % S.length;
    else if (P.key === "Home") T = 0;
    else if (P.key === "End") T = S.length - 1;
    else return;
    P.preventDefault();
    const L = S[T].id;
    (n(L), e.onChange?.(L), queueMicrotask(f));
  }
  const b = {
      xs: "px-2 py-1",
      sm: "px-3 py-1.5",
      md: "px-4 py-2",
      lg: "px-5 py-2.5",
      xl: "px-6 py-3",
    },
    _ =
      "inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus-visible:ring-offset-0 focus:outline-none disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
    w = p(() => ({
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
    y = p(() => U("w-full self-stretch flex flex-col", Ie[o()], l())),
    g = p(() =>
      U(
        "flex w-full flex-nowrap overflow-x-auto whitespace-nowrap relative z-10 bg-[var(--color-bg-surface)]",
        Ie[o()],
        i() === "pills" && "gap-1",
        i() === "underline" && "gap-6",
        s() ? "justify-between" : "justify-start"
      )
    );
  var d = kf();
  _t(d, () => ({ class: t(y), ...u }));
  var v = m(d);
  ((v.__keydown = C),
    ot(
      v,
      21,
      a,
      (P) => P.id,
      (P, S) => {
        var E = yf();
        ((E.__click = () => h(t(S))),
          (E.__keydown = (H) => {
            (H.key === "Enter" || H.key === " ") &&
              (H.preventDefault(), h(t(S)));
          }));
        var T = m(E),
          L = m(T);
        (O(
          (H) => {
            (be(E, "id", `tab-${t(S).id}`),
              be(E, "aria-selected", t(S).id === n() ? "true" : "false"),
              be(E, "aria-controls", `panel-${t(S).id}`),
              be(E, "aria-disabled", t(S).disabled ? "true" : "false"),
              be(E, "tabindex", t(S).id === n() ? 0 : -1),
              (E.disabled = t(S).disabled),
              q(E, 1, H),
              X(L, t(S).label));
          },
          [
            () =>
              Y(
                U(
                  "relative z-20",
                  _,
                  b[o()],
                  Ie[o()],
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
          k(P, E));
      }
    ));
  var c = D(v, 2),
    x = m(c);
  (Qe(x, () => e.children ?? Q),
    O(() => {
      (q(v, 1, Y(t(g))),
        be(c, "id", `panel-${n()}`),
        be(c, "aria-labelledby", `tab-${n()}`));
    }),
    wt("focus", v, f),
    k(r, d),
    Re());
}
lt(["keydown", "click"]);
var Sf = qt(
    '<svg class="w-[1em] h-[1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4" fill="currentColor"></circle><line x1="12" y1="1" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line></svg>'
  ),
  Pf =
    qt(`<svg class="w-[1em] h-[1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2
       A9 9 0 1 0 21 12
       A7.5 7.5 0 1 1 12 2
       Z" fill="currentColor"></path></svg>`),
  Ef = j("<button><!></button>");
function bi(r, e) {
  Be(e, !0);
  let a = F(e, "class", 3, ""),
    n = F(e, "sz", 3, "md"),
    o = F(e, "type", 3, "button"),
    i = Ct(e, [
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
  let u = ge(Je(l));
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
    C = "fixed top-4 right-4",
    b = p(() => U(a() ? null : C, f, h[n()], Ie[n()], a()));
  Ge(() => {
    (document.documentElement.classList.toggle("dark", t(u)), si.set(s, t(u)));
  });
  var _ = Ef(),
    w = () => A(u, !t(u));
  _t(_, () => ({
    type: o(),
    disabled: e.disabled,
    class: t(b),
    onclick: w,
    "aria-label": t(u) ? "Switch to light mode" : "Switch to dark mode",
    ...i,
  }));
  var y = m(_);
  {
    var g = (v) => {
        var c = Sf();
        k(v, c);
      },
      d = (v) => {
        var c = Pf();
        k(v, c);
      };
    G(y, (v) => {
      t(u) ? v(g) : v(d, !1);
    });
  }
  (k(r, _), Re());
}
var zf = j("<!> <!>", 1),
  Af = j(
    '<div><div class="text-sm font-medium mb-2 [color:var(--color-text-default)]"> </div> <div class="flex items-start gap-4"><div class="flex flex-wrap gap-3 min-w-[0]"><!> <!></div> <div class="flex items-center gap-3 pt-6"><!> <!></div></div> <div class="mt-4 p-4 bg-[var(--color-bg-surface)] text-center"><p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"> </p> <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]"><!></p></div></div>'
  );
function Ff(r, e) {
  Be(e, !0);
  let a = F(e, "value", 15, null),
    n = F(e, "step", 3, 60),
    o = F(e, "disabled", 3, !1),
    i = F(e, "clearable", 3, !0),
    s = F(e, "initialSystem", 3, "iso"),
    l = F(e, "class", 3, ""),
    u = Ct(e, [
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
  const f = Vt("lang") ?? null,
    h = p(() => f?.value ?? "en"),
    C = p(() => ya[t(h)].components.timePicker),
    b = p(() => e.label ?? t(C).text),
    _ = p(() => e.placeholder ?? t(C).placeholder),
    w = p(() => U("inline-block w-full", l()));
  let y = p(s),
    g = ge("00"),
    d = ge("00"),
    v = ge("AM");
  const c = p(() => a() != null),
    x = Array.from({ length: 24 }, (ve, Se) => {
      const M = Se.toString().padStart(2, "0");
      return { value: M, label: M };
    }),
    P = Array.from({ length: 12 }, (ve, Se) => {
      const M = (Se + 1).toString().padStart(2, "0");
      return { value: M, label: M };
    }),
    S = [
      { value: "AM", label: "AM" },
      { value: "PM", label: "PM" },
    ],
    E = p(() =>
      !n() || n() <= 0 ? 1 : Math.min(60, Math.max(1, Math.round(n() / 60)))
    ),
    T = p(() => {
      const ve = [];
      for (let Se = 0; Se < 60; Se += t(E)) {
        const M = Se.toString().padStart(2, "0");
        ve.push({ value: M, label: M });
      }
      return ve;
    });
  function L(ve) {
    return ve.padStart(2, "0").slice(-2);
  }
  function H() {
    const ve =
      t(y) === "english" ? `${t(g)}:${t(d)} ${t(v)}` : `${t(g)}:${t(d)}`;
    (a(ve), e.onChange?.(ve));
  }
  function K(ve) {
    (A(g, L(ve), !0), H());
  }
  function ae(ve) {
    (A(d, L(ve), !0), H());
  }
  function de(ve) {
    (A(g, L(ve), !0), H());
  }
  function pe(ve) {
    (A(v, ve === "AM" || ve === "PM" ? ve : "AM", !0), H());
  }
  function J() {
    o() ||
      (t(y) === "iso"
        ? (A(y, "english"), parseInt(t(g), 10) >= 0 && A(g, "12"), pe("AM"))
        : A(y, "iso"),
      H());
  }
  function re() {
    i() && (A(g, "00"), A(d, "00"), A(v, "AM"), a(null), e.onChange?.(null));
  }
  Ge(() => {
    if (a() == null) return;
    let ve = a();
    (ve.includes("AM") || ve.includes("PM")) &&
      (ve = ve.replace(" AM", "").replace(" PM", ""));
    const [Se, M] = ve.split(":");
    (A(g, L(Se), !0), A(d, L(M), !0));
  });
  var ue = Af();
  _t(ue, () => ({ class: t(w), ...u }));
  var N = m(ue),
    B = m(N),
    $ = D(N, 2),
    V = m($),
    ee = m(V);
  {
    var Z = (ve) => {
        jt(ve, {
          get label() {
            return t(C).hour;
          },
          get options() {
            return x;
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
      te = (ve) => {
        var Se = zf(),
          M = Ce(Se);
        jt(M, {
          get label() {
            return t(C).hour;
          },
          get options() {
            return P;
          },
          get value() {
            return t(g);
          },
          onChange: de,
          get disabled() {
            return o();
          },
          sz: "sm",
        });
        var oe = D(M, 2);
        (jt(oe, {
          get label() {
            return t(C).period;
          },
          get options() {
            return S;
          },
          get value() {
            return t(v);
          },
          onChange: pe,
          get disabled() {
            return o();
          },
          sz: "sm",
        }),
          k(ve, Se));
      };
    G(ee, (ve) => {
      t(y) === "iso" ? ve(Z) : ve(te, !1);
    });
  }
  var ie = D(ee, 2);
  jt(ie, {
    get label() {
      return t(C).minute;
    },
    get options() {
      return t(T);
    },
    get value() {
      return t(d);
    },
    onChange: ae,
    get disabled() {
      return o();
    },
    sz: "sm",
  });
  var _e = D(V, 2),
    I = m(_e);
  tt(I, {
    onClick: J,
    get disabled() {
      return o();
    },
    sz: "xs",
    children: (ve, Se) => {
      var M = je();
      (O(() => X(M, t(y) === "iso" ? t(C).switchTo12h : t(C).switchTo24h)),
        k(ve, M));
    },
    $$slots: { default: !0 },
  });
  var z = D(I, 2);
  {
    var ne = (ve) => {
      {
        let Se = p(() => !t(c) || o());
        tt(ve, {
          onClick: re,
          variant: "danger",
          get disabled() {
            return t(Se);
          },
          sz: "xs",
          children: (M, oe) => {
            var le = je();
            (O(() => X(le, t(C).clear)), k(M, le));
          },
          $$slots: { default: !0 },
        });
      }
    };
    G(z, (ve) => {
      i() && ve(ne);
    });
  }
  var R = D($, 2),
    fe = m(R),
    he = m(fe),
    se = D(fe, 2),
    Ae = m(se);
  {
    var Pe = (ve) => {
        var Se = je();
        (O(() => X(Se, a())), k(ve, Se));
      },
      ze = (ve) => {
        var Se = je();
        (O(() => X(Se, t(_))), k(ve, Se));
      };
    G(Ae, (ve) => {
      t(c) ? ve(Pe) : ve(ze, !1);
    });
  }
  (O(() => {
    (X(B, t(b)), X(he, t(C).selectedTime));
  }),
    k(r, ue),
    Re());
}
var Tf = j('<div role="tooltip"> </div>'),
  Lf = j("<div><!> <!></div>");
function Dt(r, e) {
  Be(e, !0);
  let a = F(e, "position", 3, "top"),
    n = F(e, "delay", 3, 300),
    o = F(e, "open", 3, !1),
    i = F(e, "text", 3, ""),
    s = F(e, "class", 3, ""),
    l = Ct(e, [
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
    u = ge(!1),
    f = ge(!1),
    h = ge(!1),
    C;
  const b = p(() => o() || t(f) || t(h));
  Ge(
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
  const _ = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
    },
    w = p(() => U("relative inline-block", s())),
    y = p(() =>
      U(
        "absolute z-20 p-0.5 italic text-xs font-medium whitespace-nowrap rounded-[var(--radius-xs)]",
        "bg-[var(--color-bg-surface)] text-[var(--color-text-default)] shadow-lg border border-[var(--border-color-default)]",
        "transition-opacity duration-150 ease-linear",
        t(u) ? "opacity-100" : "opacity-0 pointer-events-none"
      )
    );
  var g = Lf(),
    d = () => A(f, !0),
    v = () => A(f, !1),
    c = () => A(h, !0),
    x = () => A(h, !1);
  _t(g, () => ({
    class: t(w),
    onmouseenter: d,
    onmouseleave: v,
    onfocus: c,
    onblur: x,
    ...l,
  }));
  var P = m(g);
  Qe(P, () => e.children ?? Q);
  var S = D(P, 2);
  {
    var E = (T) => {
      var L = Tf(),
        H = m(L);
      (O(
        (K) => {
          (q(L, 1, K), X(H, i()));
        },
        [() => Y(U(t(y), _[a()]))]
      ),
        k(T, L));
    };
    G(S, (T) => {
      i() && t(u) && T(E);
    });
  }
  (k(r, g), Re());
}
var Mf = j(
  '<header class="flex items-end justify-between gap-4 -mx-5 px-5 py-5 border-b border-[var(--border-color-default)]"><h2 class="text-2xl font-semibold tracking-tight"> </h2> <span class="text-sm [color:var(--color-text-muted)]"> </span></header> <div class="p-5 space-y-4 text-sm opacity-90 leading-relaxed"><p><strong> </strong> <strong> </strong> <strong> </strong> </p> <p> <code> </code> <code> </code> </p> <p> </p> <p> <strong> </strong><br/> <a><strong> </strong></a></p></div>',
  1
);
function Df(r, e) {
  Be(e, !0);
  const a = Vt("lang"),
    n = p(() => wa[a.value]);
  (sn(r, {
    children: (o, i) => {
      var s = Mf(),
        l = Ce(s),
        u = m(l),
        f = m(u),
        h = D(u, 2),
        C = m(h),
        b = D(l, 2),
        _ = m(b),
        w = m(_),
        y = m(w),
        g = D(w),
        d = D(g),
        v = m(d),
        c = D(d),
        x = D(c),
        P = m(x),
        S = D(x),
        E = D(_, 2),
        T = m(E),
        L = D(T),
        H = m(L),
        K = D(L),
        ae = D(K),
        de = m(ae),
        pe = D(ae),
        J = D(E, 2),
        re = m(J),
        ue = D(J, 2),
        N = m(ue),
        B = D(N),
        $ = m(B),
        V = D(B, 2),
        ee = D(V),
        Z = m(ee),
        te = m(Z);
      (O(() => {
        (X(f, t(n).about.heading),
          X(C, t(n).about.meta),
          X(y, t(n).app.title),
          X(g, `${t(n).about.intro.description ?? ""} `),
          X(v, t(n).about.intro.frameworks.runes),
          X(c, ` ${t(n).about.intro.connector ?? ""} `),
          X(P, t(n).about.intro.frameworks.tailwind),
          X(S, ` ${t(n).about.intro.closing ?? ""}`),
          X(T, `${t(n).about.styling.beforeFile ?? ""} `),
          X(H, t(n).about.styling.file),
          X(K, `${t(n).about.styling.afterFile ?? ""} `),
          X(de, t(n).about.styling.darkClass),
          X(pe, ` ${t(n).about.styling.afterDark ?? ""}`),
          X(re, t(n).about.patterns),
          X(N, `${t(n).about.versionLabel ?? ""}: `),
          X($, t(n).app.version),
          X(V, ` ${t(n).about.authorLabel ?? ""}: `),
          be(ee, "href", t(n).app.authorUrl),
          X(te, t(n).about.authorName));
      }),
        k(o, s));
    },
    $$slots: { default: !0 },
  }),
    Re());
}
var Nf = j(
  '<div><div class="flex flex-wrap items-baseline gap-3"><div class="shrink-0"><!></div> <!></div> <!></div>'
);
function If(r, e) {
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
  let s = ge("html"),
    l = Je({
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
    u = ge(""),
    f = ge(!1);
  const h = p(() => l[t(s)]),
    C = p(() => t(u).trimStart());
  Ge(() => {
    t(h) !== t(u) && A(u, t(h), !0);
  });
  var b = Nf(),
    _ = m(b),
    w = m(_),
    y = m(w);
  jt(y, {
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
  var g = D(w, 2);
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
  var d = D(_, 2);
  (ws(d, {
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
    k(r, b),
    Re());
}
var Of = j('<header class="p-[var(--spacing-md,1rem)]"><!></header>'),
  Bf = j(
    '<aside class="hidden lg:block p-[var(--spacing-md,1rem)]"><!></aside>'
  ),
  Rf = j(
    '<aside class="hidden lg:block p-[var(--spacing-md,1rem)]"><!></aside>'
  ),
  jf = j('<footer class="p-[var(--spacing-md,1rem)]"><!></footer>'),
  Vf = j(
    '<div><div class="grid min-h-dvh grid-rows-[auto_1fr_auto]"><!> <!> <main class="p-[var(--spacing-md,1rem)]"><!></main> <!> <!></div></div>'
  );
function qf(r, e) {
  Be(e, !0);
  let a = F(e, "class", 3, "");
  const n =
      "min-h-dvh w-full bg-[var(--color-bg-page,oklch(98%_0_0))] text-[var(--color-text-default,oklch(15%_0_0))] transition-colors duration-[var(--transition-normal,300ms)]",
    o = p(() => U(n, a()));
  var i = Vf(),
    s = m(i),
    l = m(s);
  {
    var u = (d) => {
      var v = Of(),
        c = m(v);
      (Qe(c, () => e.header ?? Q), k(d, v));
    };
    G(l, (d) => {
      e.header && d(u);
    });
  }
  var f = D(l, 2);
  {
    var h = (d) => {
      var v = Bf(),
        c = m(v);
      (Qe(c, () => e.left ?? Q), k(d, v));
    };
    G(f, (d) => {
      e.left && d(h);
    });
  }
  var C = D(f, 2),
    b = m(C);
  Qe(b, () => e.children ?? Q);
  var _ = D(C, 2);
  {
    var w = (d) => {
      var v = Rf(),
        c = m(v);
      (Qe(c, () => e.right ?? Q), k(d, v));
    };
    G(_, (d) => {
      e.right && d(w);
    });
  }
  var y = D(_, 2);
  {
    var g = (d) => {
      var v = jf(),
        c = m(v);
      (Qe(c, () => e.footer ?? Q), k(d, v));
    };
    G(y, (d) => {
      e.footer && d(g);
    });
  }
  (O(() => q(i, 1, Y(t(o)))), k(r, i), Re());
}
const Vo = Tu([]);
let Uf = 0;
function yn(r, e) {
  const a = Uf++,
    n = Gu(r, e?.message);
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
function Hf(r) {
  Vo.update((e) => e.filter((a) => a.id !== r));
}
function Kf(r) {
  yn(r);
}
var Gf = j("<div><!></div> <!>", 1);
function Wf(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "sm"),
    n = F(e, "class", 3, ""),
    o = F(e, "message", 3, ""),
    i = p(a);
  const s = Vt("lang"),
    l = p(() => wa[s.value]);
  let u = ge(!1);
  Ge(() => {
    A(i, a());
  });
  function f() {
    A(u, !0);
  }
  function h() {
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
  var b = Gf(),
    _ = Ce(b),
    w = m(_);
  tt(w, {
    variant: "primary",
    onClick: f,
    children: (g, d) => {
      var v = je();
      (O(() => X(v, t(l).snippets.dialog.button)), k(g, v));
    },
    $$slots: { default: !0 },
  });
  var y = D(_, 2);
  (ko(y, {
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
    onCancel: C,
    get class() {
      return n();
    },
    get message() {
      return o();
    },
  }),
    O((g) => q(_, 1, g), [() => Y(U("flex flex-wrap gap-3"))]),
    k(r, b),
    Re());
}
var Zf = j(
    '<div class="p-4 flex justify-center font-semibold text-[var(--color-text-default)] text-lg"> </div>'
  ),
  Yf = j(
    '<div class="p-4 flex justify-center gap-[var(--spacing-sm)]"><!> <!> <!></div>'
  );
function Xf(r, e) {
  Be(e, !0);
  const a = (w) => {
      var y = Zf(),
        g = m(y);
      (O(() => X(g, t(s).form.header)), k(w, y));
    },
    n = (w) => {
      var y = Yf(),
        g = m(y);
      Dt(g, {
        get text() {
          return t(s).form.footer.submit;
        },
        children: (c, x) => {
          tt(c, {
            variant: "primary",
            type: "submit",
            form: l,
            children: (P, S) => {
              var E = je();
              (O(() => X(E, t(s).form.footer.submit)), k(P, E));
            },
            $$slots: { default: !0 },
          });
        },
        $$slots: { default: !0 },
      });
      var d = D(g, 2);
      Dt(d, {
        get text() {
          return t(s).form.footer.cancel;
        },
        children: (c, x) => {
          tt(c, {
            variant: "secondary",
            type: "button",
            onClick: C,
            children: (P, S) => {
              var E = je();
              (O(() => X(E, t(s).form.footer.cancel)), k(P, E));
            },
            $$slots: { default: !0 },
          });
        },
        $$slots: { default: !0 },
      });
      var v = D(d, 2);
      (Dt(v, {
        get text() {
          return t(s).form.footer.random;
        },
        children: (c, x) => {
          tt(c, {
            variant: "info",
            type: "button",
            onClick: _,
            children: (P, S) => {
              var E = je();
              (O(() => X(E, t(s).form.footer.random)), k(P, E));
            },
            $$slots: { default: !0 },
          });
        },
        $$slots: { default: !0 },
      }),
        k(w, y));
    };
  let o = F(e, "onSubmit", 3, () => {});
  const i = Vt("lang"),
    s = p(() => wa[i.value]),
    l = "profile-form";
  let u = ge(null);
  const f = p(() => [
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
        (w) =>
          typeof w == "string" && w.length >= 6
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
        (w, y) =>
          typeof w == "string" &&
          y &&
          typeof y.password == "string" &&
          w === y.password
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
        (w) => {
          if (typeof w == "string" && w.trim() === "") return null;
          const y = typeof w == "number" ? w : Number(w);
          return Number.isNaN(y) || y < 18
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
  function h(w) {
    o()(w);
  }
  function C() {
    t(u)?.reset();
  }
  function b(w) {
    A(u, w, !0);
  }
  function _() {
    if (!t(u)) return;
    const w = ["John", "Alex", "Tom", "Sam", "Anna", "Jessica", "Sarah"],
      y = ["Smith", "Williams", "Brown", "Johnson", "Miller"],
      g = (c) => c[Math.floor(Math.random() * c.length)],
      d = (c, x) => Math.floor(Math.random() * (x - c + 1)) + c,
      v = Math.random().toString(36).slice(2, 10);
    for (const c of t(f))
      switch (c.type) {
        case "text": {
          const x = c.name.toLowerCase();
          x.includes("first")
            ? t(u).setValue(c.name, g(w))
            : x.includes("last")
              ? t(u).setValue(c.name, g(y))
              : t(u).setValue(c.name, g(w));
          break;
        }
        case "password":
          t(u).setValue(c.name, v);
          break;
        case "number":
          t(u).setValue(c.name, d(18, 100));
          break;
        case "email":
          t(u).setValue(
            c.name,
            `${g(w).toLowerCase()}.${g(y).toLowerCase()}@example.com`
          );
          break;
        case "select": {
          const x = c.options ?? [];
          if (x.length > 0) {
            const P = d(0, x.length - 1);
            t(u).setValue(c.name, String(x[P].value));
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
  (sn(r, {
    get header() {
      return a;
    },
    get footer() {
      return n;
    },
    children: (w, y) => {
      yd(w, {
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
var Jf = j(
  '<div><div class="w-full border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] overflow-x-auto overflow-y-visible"><!></div> <div class="bg-[var(--color-bg-surface)] h-40 border border-[var(--border-color-default)] border-t-0 p-4 text-[var(--color-text-muted)]"> </div></div>'
);
function Qf(r, e) {
  Be(e, !0);
  let a = F(e, "sz", 3, "sm"),
    n = F(e, "class", 3, ""),
    o = p(a);
  const i = Vt("lang"),
    s = p(() => wa[i.value].menuDemo),
    l = p(() => [
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
  let u = p(() => "");
  function f(y, g) {
    const d = typeof g == "string" ? g : g.label || g.id || t(s).fallbackLabel,
      v = typeof g == "string" ? g : g.id;
    (v && ["xs", "sm", "md", "lg", "xl"].includes(v) && A(o, v),
      A(u, `${y}: ${d}`),
      console.log("Selected:", y, g));
  }
  (Ge(() => {
    A(o, a());
  }),
    Ge(() => {
      A(u, t(s).prompt);
    }));
  var h = Jf(),
    C = m(h),
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
  var _ = D(C, 2),
    w = m(_);
  (O(() => {
    (q(h, 1, `flex flex-col w-full ${n() ?? ""}`), X(w, t(u)));
  }),
    k(r, h),
    Re());
}
var $f = j(
    "<div><div><span> </span> <span> </span> <span> </span> <span> </span></div> <div><span> </span> <span> </span></div></div>"
  ),
  ev = j("<div><p> </p> <div><!></div></div>"),
  tv = j(
    '<div><div class="overflow-x-auto overflow-y-visible w-full min-w-full bg-[var(--color-bg-surface)] border-b border-[var(--border-color-default)]"><!></div> <!> <!> <input type="file" class="hidden" accept=".txt,.md,.log,.html,.css,.js,.json,.py,.yml,.yaml,*/*"/> <!> <!> <!></div>'
  );
function rv(r, e) {
  Be(e, !0);
  let a = F(e, "L", 19, () => ({})),
    n = F(e, "lang", 7, "txt"),
    o = F(e, "sz", 7, "sm"),
    i = F(e, "class", 3, "");
  const s = p(() => a()?.notepad?.menu ?? {}),
    l = p(() => a()?.notepad?.actions ?? {}),
    u = p(() => a()?.menuItems ?? {}),
    f = p(() => t(s).file ?? t(u).file ?? "File"),
    h = p(() => t(s).edit ?? t(u).edit ?? "Edit"),
    C = p(() => t(s).view ?? t(u).view ?? "View"),
    b = p(() => t(s).language ?? t(u).language ?? "Language"),
    _ = p(() => t(s).help ?? t(u).help ?? "Help"),
    w = p(() => t(s).settings ?? t(u).settings ?? "Settings"),
    y = p(() => t(l).statusBar ?? t(u).statusBar ?? "Status bar"),
    g = p(() => t(l).about ?? t(u).about ?? "About"),
    d = p(() => t(l).options ?? t(u).options ?? "Options"),
    v = p(
      () =>
        a()?.notepad?.aboutText ??
        "A lightweight notepad demo using the component library."
    ),
    c = p(
      () =>
        a()?.notepad?.optionsText ??
        "Change appearance options such as status bar visibility."
    ),
    x = [
      { value: "txt", label: "Text" },
      { value: "html", label: "HTML" },
      { value: "css", label: "CSS" },
      { value: "js", label: "JavaScript" },
      { value: "json", label: "JSON" },
      { value: "python", label: "Python" },
    ],
    P = p(() =>
      x.map(({ value: ce, label: Ee }) => ({
        id: ce === n() ? o() : ce,
        real: ce,
        label: Ee,
      }))
    ),
    S = p(() => [
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
        name: t(C),
        actions: [
          { id: "xs", label: t(l).xs ?? t(u).xs ?? "XS" },
          { id: "sm", label: t(l).sm ?? t(u).sm ?? "SM" },
          { id: "md", label: t(l).md ?? t(u).md ?? "MD" },
          { id: "lg", label: t(l).lg ?? t(u).lg ?? "LG" },
          { id: "xl", label: t(l).xl ?? t(u).xl ?? "XL" },
          { id: "separator", type: "separator" },
          { id: "toggle-statusbar", label: t(y), shortcut: "Ctrl+B" },
        ],
      },
      { name: t(b), actions: t(P) },
      { name: t(w), actions: [{ id: "options", label: t(d) }] },
      { name: t(_), actions: [{ id: "about", label: t(g), shortcut: "F1" }] },
    ]);
  let E = ge(""),
    T = ge(null),
    L = ge(Je([])),
    H = ge(Je([])),
    K = ge(""),
    ae = ge(!1),
    de = ge(!1),
    pe = ge(Je([])),
    J = 0,
    re = null,
    ue = ge(!0),
    N = ge(!1),
    B = ge(!1),
    $ = ge(1),
    V = ge(1);
  const ee = p(() => t(E).length),
    Z = p(() =>
      t(E) === ""
        ? 1
        : t(E).split(`
`).length
    ),
    te = p(() =>
      t(E).trim() ? t(E).trim().split(/\s+/).filter(Boolean).length : 0
    );
  function ie(ce, Ee, Ne) {
    A(pe, [...t(pe), { id: J++, title: Ne, message: Ee, variant: ce }], !0);
  }
  function _e(ce) {
    A(
      pe,
      t(pe).filter((Ee) => Ee.id !== ce),
      !0
    );
  }
  function I(ce) {
    (!t(L).length || t(L).at(-1) !== ce) && A(L, [...t(L), ce].slice(-3), !0);
  }
  function z(ce) {
    A(H, [...t(H), ce].slice(-3), !0);
  }
  function ne() {
    A(H, [], !0);
  }
  Ge(() => {
    if (!t(ae)) {
      (A(K, t(E), !0), A(ae, !0));
      return;
    }
    if (t(de)) {
      A(K, t(E), !0);
      return;
    }
    t(E) !== t(K) && (I(t(K)), ne(), A(K, t(E), !0));
  });
  function R(ce) {
    (I(t(E)), ne(), A(de, !0), A(E, ce, !0), A(de, !1), A(K, t(E), !0));
  }
  function fe() {
    const ce = a()?.notepad?.confirmNew ?? "";
    (t(E) && ce && !confirm(ce)) || (R(""), A(T, null));
  }
  async function he() {
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
          Ue = await (await Ee.getFile()).text();
        (R(Ue), A(T, Ee, !0));
        return;
      }
      if (re) {
        ((re.value = ""), re.click());
        return;
      }
      ie(
        "warning",
        a()?.notepad?.openError ??
          "File opening is not supported in this browser"
      );
    } catch {
      ie("danger", a()?.notepad?.openError ?? "Error");
    }
  }
  async function se() {
    try {
      const ce = window;
      if (t(T) && ce.isSecureContext && t(T).createWritable) {
        const Xe = await t(T).createWritable();
        (await Xe.write(new Blob([t(E)], { type: "text/plain;charset=utf-8" })),
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
          at = await Xe.createWritable();
        (await at.write(new Blob([t(E)], { type: "text/plain;charset=utf-8" })),
          await at.close(),
          A(T, Xe, !0));
        return;
      }
      const Ee = new Blob([t(E)], { type: "text/plain;charset=utf-8" }),
        Ne = URL.createObjectURL(Ee),
        Ue = document.createElement("a");
      ((Ue.href = Ne),
        (Ue.download = "note.txt"),
        document.body.appendChild(Ue),
        Ue.click(),
        Ue.remove(),
        URL.revokeObjectURL(Ne));
    } catch {
      ie("danger", a()?.notepad?.saveError ?? "Error");
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
    const Ee = Pe()?.selectionStart ?? t(E).length,
      Ue = t(E).slice(0, Ee).split(`
`);
    (A($, Math.max(Ue.length, 1), !0), A(V, (Ue.at(-1)?.length ?? 0) + 1));
  }
  async function ve() {
    try {
      const ce = Pe(),
        Ee = ce ? (ce.selectionStart ?? 0) : 0,
        Ne = ce ? (ce.selectionEnd ?? 0) : 0;
      if (Ee === Ne) return;
      const Ue = t(E).slice(Ee, Ne);
      await navigator.clipboard.writeText(Ue);
      const Xe = t(E).slice(0, Ee) + t(E).slice(Ne);
      (I(t(E)),
        ne(),
        A(de, !0),
        A(E, Xe),
        A(de, !1),
        A(K, t(E), !0),
        queueMicrotask(() => {
          const at = Pe();
          at && (at.selectionStart = at.selectionEnd = Ee);
        }));
    } catch {
      ie("danger", a()?.notepad?.cutError ?? "Error");
    }
  }
  async function Se() {
    try {
      const ce = Pe(),
        Ee = ce ? (ce.selectionStart ?? 0) : 0,
        Ne = ce ? (ce.selectionEnd ?? 0) : 0;
      if (Ee === Ne) return;
      const Ue = t(E).slice(Ee, Ne);
      await navigator.clipboard.writeText(Ue);
    } catch {
      ie("danger", a()?.notepad?.copyError ?? "Error");
    }
  }
  async function M() {
    try {
      const ce = await navigator.clipboard.readText(),
        Ee = Pe(),
        Ne = Ee?.selectionStart ?? t(E).length,
        Ue = Ee?.selectionEnd ?? t(E).length,
        Xe = t(E).slice(0, Ne) + ce + t(E).slice(Ue);
      (I(t(E)), ne(), A(de, !0), A(E, Xe), A(de, !1), A(K, t(E), !0));
      const at = Ne + ce.length;
      queueMicrotask(() => {
        const vt = Pe();
        vt && (vt.selectionStart = vt.selectionEnd = at);
      });
    } catch {
      ie("danger", a()?.notepad?.pasteError ?? "Error");
    }
  }
  function oe() {
    try {
      if (!t(L).length) return;
      const ce = t(L).at(-1);
      (A(L, t(L).slice(0, -1), !0),
        z(t(E)),
        A(de, !0),
        A(E, ce, !0),
        A(de, !1),
        A(K, t(E), !0));
    } catch {
      ie("danger", a()?.notepad?.undoError ?? "Error");
    }
  }
  function le() {
    try {
      if (!t(H).length) return;
      const ce = t(H).at(-1);
      (A(H, t(H).slice(0, -1), !0),
        I(t(E)),
        A(de, !0),
        A(E, ce, !0),
        A(de, !1),
        A(K, t(E), !0));
    } catch {
      ie("danger", a()?.notepad?.redoError ?? "Error");
    }
  }
  function me() {
    A(N, !0);
  }
  async function ke(ce) {
    const Ee = ce.target,
      Ne = Ee?.files?.[0];
    if (Ne)
      try {
        const Ue = await Ne.text();
        (R(Ue), A(T, null));
      } catch {
        ie("danger", a()?.notepad?.openError ?? "Error");
      } finally {
        Ee && (Ee.value = "");
      }
  }
  function ye(ce, Ee) {
    const Ne = typeof Ee == "string" ? Ee : (Ee.real ?? Ee.id);
    if (Ne)
      switch (Ne) {
        case "new":
          fe();
          break;
        case "open":
          he();
          break;
        case "save":
          se();
          break;
        case "undo":
          oe();
          break;
        case "redo":
          le();
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
          o(Ne);
          break;
        case "txt":
        case "html":
        case "css":
        case "js":
        case "json":
        case "python":
          n(Ne);
          break;
        case "toggle-statusbar":
          A(ue, !t(ue));
          break;
      }
  }
  const W = p(() => ({
    "ctrl+n": () => ye(t(f), "new"),
    "ctrl+o": () => ye(t(f), "open"),
    "ctrl+s": () => ye(t(f), "save"),
    "ctrl+z": () => ye(t(h), "undo"),
    "ctrl+y": () => ye(t(h), "redo"),
    "ctrl+x": () => ye(t(h), "cut"),
    "ctrl+c": () => ye(t(h), "copy"),
    "ctrl+v": () => ye(t(h), "paste"),
    "ctrl+b": () => ye(t(C), "toggle-statusbar"),
    f1: () => ye(t(_), "about"),
  }));
  function xe(ce) {
    const Ee = ce.key.toLowerCase(),
      Ne = [];
    ((ce.ctrlKey || ce.metaKey) && Ne.push("ctrl"),
      ce.shiftKey && Ne.push("shift"),
      Ne.push(Ee));
    const Ue = Ne.join("+"),
      Xe = t(W)[Ue] ?? t(W)[Ee];
    Xe && (ce.preventDefault(), Xe());
  }
  (Ge(() => {
    (t(E), ze());
  }),
    Ge(() => {
      if (typeof document > "u") return;
      const ce = () => ze();
      return (
        document.addEventListener("selectionchange", ce),
        () => document.removeEventListener("selectionchange", ce)
      );
    }));
  var Te = tv();
  wt("keydown", po, xe);
  var Fe = m(Te),
    Oe = m(Fe);
  ys(Oe, {
    class: "block min-w-full bg-transparent border-0",
    get menus() {
      return t(S);
    },
    onSelect: ye,
    get sz() {
      return o();
    },
  });
  var Ve = D(Fe, 2);
  ws(Ve, {
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
      return t(E);
    },
    set code(ce) {
      A(E, ce, !0);
    },
  });
  var Le = D(Ve, 2);
  {
    var De = (ce) => {
      var Ee = $f(),
        Ne = m(Ee),
        Ue = m(Ne),
        Xe = m(Ue),
        at = D(Ue, 2),
        vt = m(at),
        xt = D(at, 2),
        Tt = m(xt),
        Ut = D(xt, 2),
        Ht = m(Ut),
        Dr = D(Ne, 2),
        Ke = m(Dr),
        et = m(Ke),
        nt = D(Ke, 2),
        gt = m(nt);
      (O(
        (sr, Lt, lr, ur, wr) => {
          (q(Ee, 1, sr),
            q(Ne, 1, Lt),
            X(Xe, `Ln ${t($) ?? ""}, Col ${t(V) ?? ""}`),
            X(vt, `${t(Z) ?? ""} lines`),
            X(Tt, `${t(te) ?? ""} words`),
            X(Ht, `${t(ee) ?? ""} chars`),
            q(Dr, 1, lr),
            X(et, ur),
            X(gt, `Size ${wr ?? ""}`));
        },
        [
          () =>
            Y(
              U(
                "rounded-xs border border-[var(--border-color-default)] bg-[var(--color-bg-muted)]",
                "text-[var(--color-text-muted)] px-3 py-2",
                "flex flex-wrap items-center justify-between gap-3",
                Ie[o()]
              )
            ),
          () => Y(U("flex flex-wrap items-center gap-3")),
          () => Y(U("flex flex-wrap items-center gap-3")),
          () => n().toUpperCase(),
          () => o().toUpperCase(),
        ]
      ),
        k(ce, Ee));
    };
    G(Le, (ce) => {
      t(ue) && ce(De);
    });
  }
  var Ye = D(Le, 2);
  ((Ye.__change = ke),
    st(
      Ye,
      (ce) => (re = ce),
      () => re
    ));
  var ut = D(Ye, 2);
  ot(
    ut,
    17,
    () => t(pe),
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
  var dt = D(ut, 2);
  {
    var ft = (ce) => {
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
    G(dt, (ce) => {
      t(N) && ce(ft);
    });
  }
  var It = D(dt, 2);
  {
    var $e = (ce) => {
      ko(ce, {
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
        children: (Ee, Ne) => {
          var Ue = ev(),
            Xe = m(Ue),
            at = m(Xe),
            vt = D(Xe, 2),
            xt = m(vt);
          (Ja(xt, {
            get label() {
              return t(y);
            },
            get sz() {
              return o();
            },
            variant: "neutral",
            get checked() {
              return t(ue);
            },
            set checked(Tt) {
              A(ue, Tt, !0);
            },
          }),
            O(
              (Tt, Ut, Ht) => {
                (q(Ue, 1, Tt), q(Xe, 1, Ut), X(at, t(c)), q(vt, 1, Ht));
              },
              [
                () => Y(U("flex flex-col gap-3")),
                () => Y(U("text-[var(--color-text-muted)]", Ie[o()])),
                () => Y(U("flex items-center justify-between px-1 py-2")),
              ]
            ),
            k(Ee, Ue));
        },
        $$slots: { default: !0 },
      });
    };
    G(It, (ce) => {
      t(B) && ce($e);
    });
  }
  (O((ce) => q(Te, 1, ce), [() => Y(U("block w-full min-w-full", i()))]),
    k(r, Te),
    Re());
}
lt(["change"]);
var av = j(
    '<div class="flex items-end gap-2"><!> <span class="text-xs text-[var(--color-text-muted)] mb-1"> </span></div>'
  ),
  nv = j(
    '<header class="flex items-end justify-between gap-4 -mx-5 px-5 py-5 border-b border-[var(--border-color-default)]"><h2 class="text-2xl font-semibold tracking-tight"> </h2> <span class="text-sm [color:var(--color-text-muted)]"> </span></header> <section class="p-3 md:p-3 lg:p-3"><div class="flex gap-4 flex-wrap items-end"><!> <!> <!> <!> <!> <!></div></section> <section class="p-3 md:p-3 lg:p-3"><div class="bg-[var(--color-bg-surface)] rounded-[var(--radius-xl)] p-4 md:p-6 lg:p-10 shadow-lg w-full border border-[var(--border-color-default)] flex items-center justify-center"><!></div></section>',
    1
  );
function Ze(r, e) {
  Be(e, !0);
  let a = F(e, "title", 3, ""),
    n = F(e, "subtitle", 3, ""),
    o = F(e, "sz", 3, "md"),
    i = F(e, "class", 3, ""),
    s = F(e, "label", 3, ""),
    l = F(e, "disabled", 3, !1);
  const u = Vt("lang"),
    f = p(() => wa[u.value].playground.controls),
    h = p(() => cv[e.component]),
    C = p(() =>
      uv.map((c) => ({
        label: c.charAt(0).toUpperCase() + c.slice(1),
        value: c,
      }))
    );
  let b = ge("md"),
    _ = ge(""),
    w = ge(""),
    y = ge(!1),
    g = ge("input"),
    d = ge(!1);
  Ge(() => {
    (A(b, o()), A(w, s()), A(y, l()), A(_, t(h).variants[0] ?? "", !0));
  });
  const v = p(() => U("w-full flex flex-col", i()));
  (sn(r, {
    get class() {
      return t(v);
    },
    children: (c, x) => {
      var P = nv(),
        S = Ce(P),
        E = m(S),
        T = m(E),
        L = D(E, 2),
        H = m(L),
        K = D(S, 2),
        ae = m(K),
        de = m(ae);
      {
        var pe = (z) => {
          {
            let ne = p(() =>
              t(h).sizes.map((R) => ({ label: R.toUpperCase(), value: R }))
            );
            jt(z, {
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
              set value(R) {
                A(b, R, !0);
              },
            });
          }
        };
        G(de, (z) => {
          t(h).sizes.length && z(pe);
        });
      }
      var J = D(de, 2);
      {
        var re = (z) => {
          {
            let ne = p(() =>
              t(h).variants.map((R) => ({
                label: R.charAt(0).toUpperCase() + R.slice(1),
                value: R,
              }))
            );
            jt(z, {
              get label() {
                return t(f).variant;
              },
              get options() {
                return t(ne);
              },
              sz: "xs",
              get value() {
                return t(_);
              },
              set value(R) {
                A(_, R, !0);
              },
            });
          }
        };
        G(J, (z) => {
          t(h).variants.length && z(re);
        });
      }
      var ue = D(J, 2);
      {
        var N = (z) => {
          var ne = av(),
            R = m(ne);
          Wa(R, {
            get label() {
              return t(f).label;
            },
            sz: "xs",
            variant: "default",
            maxlength: 20,
            class: "flex-1",
            get value() {
              return t(w);
            },
            set value(se) {
              A(w, se, !0);
            },
          });
          var fe = D(R, 2),
            he = m(fe);
          (O(() => X(he, `${t(w).length ?? ""}/20`)), k(z, ne));
        };
        G(ue, (z) => {
          t(h).supports.label && z(N);
        });
      }
      var B = D(ue, 2);
      {
        var $ = (z) => {
          Ja(z, {
            get label() {
              return t(f).disabled;
            },
            sz: "sm",
            variant: "default",
            get checked() {
              return t(y);
            },
            set checked(ne) {
              A(y, ne, !0);
            },
          });
        };
        G(B, (z) => {
          t(h).supports.disabled && z($);
        });
      }
      var V = D(B, 2);
      {
        var ee = (z) => {
          jt(z, {
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
            set value(ne) {
              A(g, ne, !0);
            },
          });
        };
        G(V, (z) => {
          e.component === "Field" && z(ee);
        });
      }
      var Z = D(V, 2);
      {
        var te = (z) => {
          Ja(z, {
            get label() {
              return t(f).sliderShowValue;
            },
            sz: "sm",
            variant: "default",
            onChange: (ne) => A(d, ne, !0),
            get checked() {
              return t(d);
            },
            set checked(ne) {
              A(d, ne, !0);
            },
          });
        };
        G(Z, (z) => {
          e.component === "Slider" && z(te);
        });
      }
      var ie = D(K, 2),
        _e = m(ie),
        I = m(_e);
      (Qe(
        I,
        () => e.children ?? Q,
        () => t(b),
        () => t(_),
        () => t(w),
        () => t(y),
        () => t(g),
        () => t(d)
      ),
        O(() => {
          (X(T, a() || t(f).playcardLabel), X(H, n() || t(f).playcardSubtitle));
        }),
        k(c, P));
    },
    $$slots: { default: !0 },
  }),
    Re());
}
ml();
const hi = (r) => {
    var e = ov();
    k(r, e);
  },
  mi = (r) => {
    var e = iv();
    k(r, e);
  };
var ov = j(`<div class="
      h-full
      p-[var(--spacing-lg)]
      bg-[var(--color-bg-surface)]
      text-[var(--color-text-default)]
      border-[var(--border-color-default)]
    ">First</div>`),
  iv = j(`<div class="
      h-full
      p-[var(--spacing-lg)]
      bg-[var(--color-bg-surface)]
      text-[var(--color-text-default)]
      border-[var(--border-color-default)]
    ">Second</div>`),
  sv =
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
function lv(r) {
  var e = sv(),
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
    k(r, e));
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
  uv = ["input", "number", "textarea"],
  cv = {
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
var dv = j("<div><div> </div> <div> </div></div>"),
  fv = j("<div><!> <!> <span> </span></div>"),
  vv = j("<div><p> </p></div>"),
  gv = j('<div><p> </p> <p class="text-[var(--color-text-muted)]"> </p></div>'),
  pv = j("<div><span> </span> <!></div>"),
  bv = j("<!> <!>", 1),
  hv = j("<div> </div>"),
  mv = j("<div><!></div>"),
  _v = j('<div><!> <div class="mt-4"><!></div></div>'),
  xv = j('<div class="py-8"> </div>'),
  wv = j('<div class="grid gap-4 max-w-3xl"><!></div>'),
  yv = j(
    '<div class="overflow-x-auto w-full min-w-full min-h-[400px]"><!></div>'
  ),
  kv = j('<div class="flex flex-col gap-2"><!> <!> <!></div>'),
  Cv = j(
    '<div><div><div class="flex items-center"><!></div> <div class="flex-1"></div> <!></div></div> <div><main><!></main></div>',
    1
  );
function Sv(r, e) {
  Be(e, !0);
  const a = () => Mu(Vo, "$toasts", n),
    [n, o] = Du(),
    i = (Z) => {
      var te = dv(),
        ie = m(te),
        _e = m(ie),
        I = D(ie, 2),
        z = m(I);
      (O(
        (ne, R, fe) => {
          (q(te, 1, ne),
            q(ie, 1, R),
            X(_e, t(d).app.title),
            q(I, 1, fe),
            X(z, t(d).app.version));
        },
        [
          () => Y(U("p-2 flex flex-col items-center text-center")),
          () => Y(U("font-bold text-[var(--color-text-muted)]", Ie.lg)),
          () => Y(U("text-[var(--color-text-muted)]", Ie.xs)),
        ]
      ),
        k(Z, te));
    },
    s = (Z) => {
      var te = fv(),
        ie = m(te);
      Ud(ie, { class: "w-fit" });
      var _e = D(ie, 2);
      jt(_e, {
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
        set value(ne) {
          g.value = ne;
        },
      });
      var I = D(_e, 2),
        z = m(I);
      (O(
        (ne, R) => {
          (q(te, 1, ne), q(I, 1, R), X(z, t(d).app.footer));
        },
        [
          () => Y(U("text-center p-2 flex flex-col items-center gap-4")),
          () => Y(U("italic text-[var(--color-text-muted)]", Ie.xs)),
        ]
      ),
        k(Z, te));
    },
    l = (Z) => {
      var te = vv(),
        ie = m(te),
        _e = m(ie);
      (O(
        (I, z) => {
          (q(te, 1, I), q(ie, 1, z), X(_e, t(d).snippets.card.header));
        },
        [
          () => Y(U("flex items-center justify-between")),
          () => Y(U("font-semibold text-[var(--color-text-default)]")),
        ]
      ),
        k(Z, te));
    },
    u = (Z) => {
      var te = gv(),
        ie = m(te),
        _e = m(ie),
        I = D(ie, 2),
        z = m(I);
      (O(
        (ne) => {
          (q(te, 1, ne),
            X(_e, t(d).snippets.about.description),
            X(z, t(d).snippets.about.helper));
        },
        [() => Y(U("space-y-2 leading-relaxed", Ie.sm))]
      ),
        k(Z, te));
    },
    f = (Z) => {
      var te = pv(),
        ie = m(te),
        _e = m(ie),
        I = D(ie, 2);
      (tt(I, {
        variant: "link",
        sz: "xs",
        children: (z, ne) => {
          var R = je();
          (O(() => X(R, t(d).snippets.card.docsLink)), k(z, R));
        },
        $$slots: { default: !0 },
      }),
        O(
          (z) => {
            (q(te, 1, z), X(_e, t(d).snippets.card.updated));
          },
          [
            () =>
              Y(
                U(
                  "flex items-center justify-between text-[var(--color-text-muted)]",
                  Ie.xs
                )
              ),
          ]
        ),
        k(Z, te));
    },
    h = (Z, te = Q) => {
      vc(Z, {
        get items() {
          return t(V);
        },
        get sz() {
          return te();
        },
        autoplay: !0,
        showDots: !0,
        showArrows: !0,
        class: "w-full",
      });
    },
    C = (Z, te = Q, ie = Q) => {
      var _e = bv(),
        I = Ce(_e);
      {
        let ne = p(() => `${t(d).snippets.toast.buttonPrefix}${ie()}`);
        Dt(I, {
          get text() {
            return t(ne);
          },
          children: (R, fe) => {
            tt(R, {
              get sz() {
                return te();
              },
              get variant() {
                return ie();
              },
              onClick: () => Kf(ie()),
              children: (he, se) => {
                var Ae = je();
                (O(() =>
                  X(
                    Ae,
                    `${t(d).snippets.toast.buttonPrefix ?? ""}${ie() ?? ""}`
                  )
                ),
                  k(he, Ae));
              },
              $$slots: { default: !0 },
            });
          },
          $$slots: { default: !0 },
        });
      }
      var z = D(I, 2);
      (ot(
        z,
        1,
        a,
        (ne) => ne.id,
        (ne, R) => {
          jo(ne, {
            get title() {
              return t(R).title;
            },
            get message() {
              return t(R).message;
            },
            get variant() {
              return t(R).variant;
            },
            onClose: () => Hf(t(R).id),
          });
        }
      ),
        k(Z, _e));
    },
    b = (Z) => {
      var te = hv(),
        ie = m(te);
      (O(
        (_e) => {
          (q(te, 1, _e), X(ie, t(d).states.emptyPreview));
        },
        [() => Y(U("text-center text-[var(--color-text-muted)] py-10"))]
      ),
        k(Z, te));
    },
    _ = (Z, te = Q, ie = Q, _e = Q, I = Q, z = Q) => {
      var ne = mv(),
        R = m(ne);
      {
        var fe = (se) => {
            {
              let Ae = p(() => _e() || t(d).snippets.field.text);
              Dt(se, {
                get text() {
                  return t(Ae);
                },
                children: (Pe, ze) => {
                  {
                    let ve = p(() => _e() || t(d).snippets.field.text);
                    Wa(Pe, {
                      get sz() {
                        return te();
                      },
                      get variant() {
                        return ie();
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
          he = (se) => {
            var Ae = Me(),
              Pe = Ce(Ae);
            {
              var ze = (Se) => {
                  {
                    let M = p(() => _e() || t(d).snippets.field.number);
                    Dt(Se, {
                      get text() {
                        return t(M);
                      },
                      children: (oe, le) => {
                        {
                          let me = p(() => _e() || t(d).snippets.field.number);
                          Wa(oe, {
                            get sz() {
                              return te();
                            },
                            get variant() {
                              return ie();
                            },
                            type: "number",
                            parseNumber: !0,
                            get label() {
                              return t(me);
                            },
                            get placeholder() {
                              return t(d).snippets.field.placeholder;
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
                  var M = Me(),
                    oe = Ce(M);
                  {
                    var le = (me) => {
                      {
                        let ke = p(() => _e() || t(d).snippets.field.textarea);
                        Dt(me, {
                          get text() {
                            return t(ke);
                          },
                          children: (ye, W) => {
                            {
                              let xe = p(
                                () => _e() || t(d).snippets.field.textarea
                              );
                              Wa(ye, {
                                get sz() {
                                  return te();
                                },
                                get variant() {
                                  return ie();
                                },
                                as: "textarea",
                                rows: 3,
                                get label() {
                                  return t(xe);
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
                    G(
                      oe,
                      (me) => {
                        z() === "textarea" && me(le);
                      },
                      !0
                    );
                  }
                  k(Se, M);
                };
              G(
                Pe,
                (Se) => {
                  z() === "number" ? Se(ze) : Se(ve, !1);
                },
                !0
              );
            }
            k(se, Ae);
          };
        G(R, (se) => {
          z() === "input" ? se(fe) : se(he, !1);
        });
      }
      (O((se) => q(ne, 1, se), [() => Y(U("grid gap-4"))]), k(Z, ne));
    },
    w = (Z, te = Q, ie = Q) => {
      var _e = _v(),
        I = m(_e);
      wf(I, {
        get columns() {
          return t(S);
        },
        get rows() {
          return t(de);
        },
        get sz() {
          return te();
        },
        get variant() {
          return ie();
        },
      });
      var z = D(I, 2),
        ne = m(z);
      (ks(ne, {
        get currentPage() {
          return t(K);
        },
        get totalPages() {
          return t(ae);
        },
        onPageChange: $,
      }),
        O((R) => q(_e, 1, R), [() => Y(U("w-full max-w-3xl"))]),
        k(Z, _e));
    },
    y = (Z, te = Q, ie = Q) => {
      {
        let _e = p(() =>
          t(d).snippets.tabs.labels.map((I, z) => ({
            id: `t${z + 1}`,
            label: I,
          }))
        );
        Cf(Z, {
          get tabs() {
            return t(_e);
          },
          get sz() {
            return te();
          },
          get variant() {
            return ie();
          },
          get activeTab() {
            return t(T);
          },
          onChange: (I) => A(T, I, !0),
          children: (I, z) => {
            var ne = Me(),
              R = Ce(ne);
            (ot(
              R,
              19,
              () => t(d).snippets.tabs.contents,
              (fe, he) => `t${he + 1}`,
              (fe, he, se) => {
                var Ae = Me(),
                  Pe = Ce(Ae);
                {
                  var ze = (ve) => {
                    var Se = xv(),
                      M = m(Se);
                    (O(() => X(M, t(he))), k(ve, Se));
                  };
                  G(Pe, (ve) => {
                    t(T) === `t${t(se) + 1}` && ve(ze);
                  });
                }
                k(fe, Ae);
              }
            ),
              k(I, ne));
          },
          $$slots: { default: !0 },
        });
      }
    },
    g = Je({ value: "en" });
  wl("lang", g);
  const d = p(() => wa[g.value]),
    v = p(() =>
      _i
        .filter((Z) => Z in t(d).pageLabels)
        .map((Z) => ({ id: Z, label: t(d).pageLabels[Z] }))
    );
  let c = ge("about");
  function x(Z) {
    _i.includes(Z) && A(c, Z, !0);
  }
  const P = Je(
      yo(23, (Z) => ({
        id: Z + 1,
        item: `${t(d).table.positionPrefix} ${Z + 1}`,
        qty: (Z % 7) + 1,
        price: ((Z % 9) + 1) * 100,
      }))
    ),
    S = p(() => [
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
  let E = ge("banana"),
    T = ge("t1"),
    L = ge(0),
    H = 5,
    K = ge(1);
  const ae = p(() => Math.max(1, Math.ceil(P.length / H)));
  Ge(() => {
    t(K) > t(ae) && A(K, Math.max(1, t(ae)), !0);
  });
  const de = p(() => P.slice((t(K) - 1) * H, t(K) * H));
  let pe = ge(null),
    J = ge(null),
    re = ge(null),
    ue = ge("en");
  const N = new Date().toISOString().split("T")[0];
  function B(Z) {
    yn("success", {
      title: t(d).toasts.confirmTitle,
      message: t(d).toasts.confirmMessage,
    });
  }
  function $(Z) {
    A(K, Z, !0);
  }
  const V = p(() => [...t(d).snippets.carousel.slides]),
    ee = p(() => [...t(d).snippets.accordion.items]);
  (qf(r, {
    children: (Z, te) => {
      var ie = Cv(),
        _e = Ce(ie),
        I = m(_e),
        z = m(I),
        ne = m(z);
      Fd(ne, {
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
          return t(c);
        },
        onSelect: x,
        closeOnSelect: !0,
        width: 300,
        get class() {
          return Ie.md;
        },
      });
      var R = D(z, 4);
      bi(R, {});
      var fe = D(_e, 2),
        he = m(fe),
        se = m(he);
      {
        var Ae = (ze) => {
            Df(ze, {});
          },
          Pe = (ze) => {
            var ve = Me(),
              Se = Ce(ve);
            {
              var M = (le) => {
                  Ze(le, {
                    component: "Accordion",
                    get title() {
                      return t(d).pageLabels.accordion;
                    },
                    get subtitle() {
                      return t(d).snippets.accordionPlay.subtitle;
                    },
                    children: (ke, ye = Q, W = Q) => {
                      Ju(ke, {
                        get sz() {
                          return ye();
                        },
                        get class() {
                          return W();
                        },
                        get items() {
                          return t(ee);
                        },
                      });
                    },
                    $$slots: { default: !0 },
                  });
                },
                oe = (le) => {
                  var me = Me(),
                    ke = Ce(me);
                  {
                    var ye = (xe) => {
                        Ze(xe, {
                          component: "Button",
                          get title() {
                            return t(d).pageLabels.button;
                          },
                          get subtitle() {
                            return t(d).snippets.button.subtitle;
                          },
                          children: (Fe, Oe = Q, Ve = Q, Le = Q, De = Q) => {
                            {
                              let Ye = p(() => Le() || `${Ve()} ${Oe()}`);
                              Dt(Fe, {
                                get text() {
                                  return t(Ye);
                                },
                                children: (ut, dt) => {
                                  tt(ut, {
                                    get sz() {
                                      return Oe();
                                    },
                                    get variant() {
                                      return Ve();
                                    },
                                    get disabled() {
                                      return De();
                                    },
                                    children: (ft, It) => {
                                      var $e = je();
                                      (O(() =>
                                        X($e, Le() || `${Ve()} ${Oe()}`)
                                      ),
                                        k(ft, $e));
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
                      W = (xe) => {
                        var Te = Me(),
                          Fe = Ce(Te);
                        {
                          var Oe = (Le) => {
                              Ze(Le, {
                                component: "Card",
                                get title() {
                                  return t(d).pageLabels.card;
                                },
                                get subtitle() {
                                  return t(d).snippets.cardSnippet.subtitle;
                                },
                                children: (Ye, ut = Q) => {
                                  var dt = wv(),
                                    ft = m(dt);
                                  (sn(ft, {
                                    get sz() {
                                      return ut();
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
                                    k(Ye, dt));
                                },
                                $$slots: { default: !0 },
                              });
                            },
                            Ve = (Le) => {
                              var De = Me(),
                                Ye = Ce(De);
                              {
                                var ut = (ft) => {
                                    Ze(ft, {
                                      component: "Carousel",
                                      get title() {
                                        return t(d).pageLabels.carousel;
                                      },
                                      get subtitle() {
                                        return t(d).snippets.carouselPlay
                                          .subtitle;
                                      },
                                      children: ($e, ce = Q) => {
                                        h($e, ce);
                                      },
                                      $$slots: { default: !0 },
                                    });
                                  },
                                  dt = (ft) => {
                                    var It = Me(),
                                      $e = Ce(It);
                                    {
                                      var ce = (Ne) => {
                                          Ze(Ne, {
                                            component: "CheckBox",
                                            get title() {
                                              return t(d).pageLabels.checkbox;
                                            },
                                            get subtitle() {
                                              return t(d).snippets.checkbox
                                                .subtitle;
                                            },
                                            children: (
                                              Xe,
                                              at = Q,
                                              vt = Q,
                                              xt = Q,
                                              Tt = Q
                                            ) => {
                                              {
                                                let Ut = p(
                                                  () =>
                                                    xt() || `${vt()} ${at()}`
                                                );
                                                Dt(Xe, {
                                                  get text() {
                                                    return t(Ut);
                                                  },
                                                  children: (Ht, Dr) => {
                                                    {
                                                      let Ke = p(
                                                        () =>
                                                          xt() ||
                                                          `${vt()} ${at()}`
                                                      );
                                                      Ja(Ht, {
                                                        get sz() {
                                                          return at();
                                                        },
                                                        get variant() {
                                                          return vt();
                                                        },
                                                        get disabled() {
                                                          return Tt();
                                                        },
                                                        get label() {
                                                          return t(Ke);
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
                                        Ee = (Ne) => {
                                          var Ue = Me(),
                                            Xe = Ce(Ue);
                                          {
                                            var at = (xt) => {
                                                Ze(xt, {
                                                  component: "CodeView",
                                                  get title() {
                                                    return t(d).pageLabels
                                                      .codeView;
                                                  },
                                                  get subtitle() {
                                                    return t(d).components
                                                      .codeView.subtitle;
                                                  },
                                                  children: (Ut, Ht = Q) => {
                                                    If(Ut, {
                                                      get sz() {
                                                        return Ht();
                                                      },
                                                    });
                                                  },
                                                  $$slots: { default: !0 },
                                                });
                                              },
                                              vt = (xt) => {
                                                var Tt = Me(),
                                                  Ut = Ce(Tt);
                                                {
                                                  var Ht = (Ke) => {
                                                      Ze(Ke, {
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
                                                          nt,
                                                          gt = Q,
                                                          sr = Q,
                                                          Lt = Q,
                                                          lr = Q
                                                        ) => {
                                                          {
                                                            let ur = p(
                                                              () =>
                                                                Lt() ||
                                                                t(d).components
                                                                  .colorPicker
                                                                  .label
                                                            );
                                                            Ac(nt, {
                                                              get label() {
                                                                return t(ur);
                                                              },
                                                              get disabled() {
                                                                return lr();
                                                              },
                                                              get placeholder() {
                                                                return t(d)
                                                                  .components
                                                                  .colorPicker
                                                                  .placeholder;
                                                              },
                                                              get value() {
                                                                return t(pe);
                                                              },
                                                              set value(wr) {
                                                                A(pe, wr, !0);
                                                              },
                                                            });
                                                          }
                                                        },
                                                        $$slots: {
                                                          default: !0,
                                                        },
                                                      });
                                                    },
                                                    Dr = (Ke) => {
                                                      var et = Me(),
                                                        nt = Ce(et);
                                                      {
                                                        var gt = (Lt) => {
                                                            Ze(Lt, {
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
                                                                ur,
                                                                wr = Q,
                                                                cr = Q,
                                                                ct = Q,
                                                                yr = Q
                                                              ) => {
                                                                {
                                                                  let Nr = p(
                                                                    () =>
                                                                      ct() ||
                                                                      t(d)
                                                                        .components
                                                                        .datePicker
                                                                        .label
                                                                  );
                                                                  Tc(ur, {
                                                                    get label() {
                                                                      return t(
                                                                        Nr
                                                                      );
                                                                    },
                                                                    get placeholder() {
                                                                      return t(
                                                                        d
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
                                                            var lr = Me(),
                                                              ur = Ce(lr);
                                                            {
                                                              var wr = (ct) => {
                                                                  Ze(ct, {
                                                                    component:
                                                                      "Dialog",
                                                                    get title() {
                                                                      return t(
                                                                        d
                                                                      )
                                                                        .pageLabels
                                                                        .dialog;
                                                                    },
                                                                    get subtitle() {
                                                                      return t(
                                                                        d
                                                                      ).snippets
                                                                        .dialog
                                                                        .subtitle;
                                                                    },
                                                                    children: (
                                                                      Nr,
                                                                      Ir = Q,
                                                                      $r = Q
                                                                    ) => {
                                                                      {
                                                                        let Xt =
                                                                          p(
                                                                            () =>
                                                                              $r() ||
                                                                              t(
                                                                                d
                                                                              )
                                                                                .snippets
                                                                                .dialog
                                                                                .confirm
                                                                          );
                                                                        Wf(Nr, {
                                                                          get sz() {
                                                                            return Ir();
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
                                                                cr = (ct) => {
                                                                  var yr = Me(),
                                                                    Nr = Ce(yr);
                                                                  {
                                                                    var Ir = (
                                                                        Xt
                                                                      ) => {
                                                                        Ze(Xt, {
                                                                          component:
                                                                            "Field",
                                                                          get title() {
                                                                            return t(
                                                                              d
                                                                            )
                                                                              .pageLabels
                                                                              .field;
                                                                          },
                                                                          get subtitle() {
                                                                            return t(
                                                                              d
                                                                            )
                                                                              .snippets
                                                                              .field
                                                                              .subtitle;
                                                                          },
                                                                          children:
                                                                            (
                                                                              St,
                                                                              Kt = Q,
                                                                              Ca = Q,
                                                                              Jt = Q,
                                                                              Or = Q,
                                                                              Sa = Q
                                                                            ) => {
                                                                              _(
                                                                                St,
                                                                                Kt,
                                                                                Ca,
                                                                                Jt,
                                                                                Or,
                                                                                Sa
                                                                              );
                                                                            },
                                                                          $$slots:
                                                                            {
                                                                              default:
                                                                                !0,
                                                                            },
                                                                        });
                                                                      },
                                                                      $r = (
                                                                        Xt
                                                                      ) => {
                                                                        var ka =
                                                                            Me(),
                                                                          St =
                                                                            Ce(
                                                                              ka
                                                                            );
                                                                        {
                                                                          var Kt =
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
                                                                                        d
                                                                                      )
                                                                                        .pageLabels
                                                                                        .filePicker;
                                                                                    },
                                                                                    get subtitle() {
                                                                                      return t(
                                                                                        d
                                                                                      )
                                                                                        .components
                                                                                        .filePicker
                                                                                        .subtitle;
                                                                                    },
                                                                                    children:
                                                                                      (
                                                                                        Sa,
                                                                                        qo = Q,
                                                                                        Uo = Q,
                                                                                        kr = Q,
                                                                                        ln = Q
                                                                                      ) => {
                                                                                        {
                                                                                          let An =
                                                                                            p(
                                                                                              () =>
                                                                                                kr() ||
                                                                                                t(
                                                                                                  d
                                                                                                )
                                                                                                  .components
                                                                                                  .filePicker
                                                                                                  .label
                                                                                            );
                                                                                          Xc(
                                                                                            Sa,
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
                                                                            Ca =
                                                                              (
                                                                                Jt
                                                                              ) => {
                                                                                var Or =
                                                                                    Me(),
                                                                                  Sa =
                                                                                    Ce(
                                                                                      Or
                                                                                    );
                                                                                {
                                                                                  var qo =
                                                                                      (
                                                                                        kr
                                                                                      ) => {
                                                                                        Xf(
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
                                                                                            Me(),
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
                                                                                                        d
                                                                                                      )
                                                                                                        .pageLabels
                                                                                                        .menu;
                                                                                                    },
                                                                                                    get subtitle() {
                                                                                                      return t(
                                                                                                        d
                                                                                                      )
                                                                                                        .components
                                                                                                        .menu
                                                                                                        .subtitle;
                                                                                                    },
                                                                                                    children:
                                                                                                      (
                                                                                                        Tn,
                                                                                                        Ln = Q
                                                                                                      ) => {
                                                                                                        Qf(
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
                                                                                                    Me(),
                                                                                                  Tn =
                                                                                                    Ce(
                                                                                                      Fn
                                                                                                    );
                                                                                                {
                                                                                                  var Ln =
                                                                                                      (
                                                                                                        ta
                                                                                                      ) => {
                                                                                                        var Pa =
                                                                                                            yv(),
                                                                                                          Mn =
                                                                                                            m(
                                                                                                              Pa
                                                                                                            );
                                                                                                        (rv(
                                                                                                          Mn,
                                                                                                          {
                                                                                                            get L() {
                                                                                                              return t(
                                                                                                                d
                                                                                                              );
                                                                                                            },
                                                                                                          }
                                                                                                        ),
                                                                                                          k(
                                                                                                            ta,
                                                                                                            Pa
                                                                                                          ));
                                                                                                      },
                                                                                                    Es =
                                                                                                      (
                                                                                                        ta
                                                                                                      ) => {
                                                                                                        var Pa =
                                                                                                            Me(),
                                                                                                          Mn =
                                                                                                            Ce(
                                                                                                              Pa
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
                                                                                                                        d
                                                                                                                      )
                                                                                                                        .pageLabels
                                                                                                                        .progressBar;
                                                                                                                    },
                                                                                                                    get subtitle() {
                                                                                                                      return t(
                                                                                                                        d
                                                                                                                      )
                                                                                                                        .snippets
                                                                                                                        .progressBar
                                                                                                                        .subtitle;
                                                                                                                    },
                                                                                                                    children:
                                                                                                                      (
                                                                                                                        Nn,
                                                                                                                        In = Q,
                                                                                                                        On = Q,
                                                                                                                        Cr = Q,
                                                                                                                        Ea = Q
                                                                                                                      ) => {
                                                                                                                        Zd(
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
                                                                                                            As =
                                                                                                              (
                                                                                                                ra
                                                                                                              ) => {
                                                                                                                var Dn =
                                                                                                                    Me(),
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
                                                                                                                                d
                                                                                                                              )
                                                                                                                                .pageLabels
                                                                                                                                .progressCircle;
                                                                                                                            },
                                                                                                                            get subtitle() {
                                                                                                                              return t(
                                                                                                                                d
                                                                                                                              )
                                                                                                                                .snippets
                                                                                                                                .progressCircle
                                                                                                                                .subtitle;
                                                                                                                            },
                                                                                                                            children:
                                                                                                                              (
                                                                                                                                Bn,
                                                                                                                                Rn = Q,
                                                                                                                                jn = Q,
                                                                                                                                Sr = Q,
                                                                                                                                za = Q
                                                                                                                              ) => {
                                                                                                                                ef(
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
                                                                                                                                      return za();
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
                                                                                                                        var Ea =
                                                                                                                            Me(),
                                                                                                                          Bn =
                                                                                                                            Ce(
                                                                                                                              Ea
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
                                                                                                                                        d
                                                                                                                                      )
                                                                                                                                        .pageLabels
                                                                                                                                        .radio;
                                                                                                                                    },
                                                                                                                                    get subtitle() {
                                                                                                                                      return t(
                                                                                                                                        d
                                                                                                                                      )
                                                                                                                                        .snippets
                                                                                                                                        .radio
                                                                                                                                        .subtitle;
                                                                                                                                    },
                                                                                                                                    children:
                                                                                                                                      (
                                                                                                                                        Vn,
                                                                                                                                        Aa = Q,
                                                                                                                                        Fa = Q,
                                                                                                                                        Br = Q,
                                                                                                                                        Rr = Q
                                                                                                                                      ) => {
                                                                                                                                        var aa =
                                                                                                                                            kv(),
                                                                                                                                          jr =
                                                                                                                                            m(
                                                                                                                                              aa
                                                                                                                                            );
                                                                                                                                        uo(
                                                                                                                                          jr,
                                                                                                                                          {
                                                                                                                                            get sz() {
                                                                                                                                              return Aa();
                                                                                                                                            },
                                                                                                                                            get variant() {
                                                                                                                                              return Fa();
                                                                                                                                            },
                                                                                                                                            get disabled() {
                                                                                                                                              return Rr();
                                                                                                                                            },
                                                                                                                                            value:
                                                                                                                                              "apple",
                                                                                                                                            get group() {
                                                                                                                                              return t(
                                                                                                                                                E
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            set group(
                                                                                                                                              pt
                                                                                                                                            ) {
                                                                                                                                              A(
                                                                                                                                                E,
                                                                                                                                                pt,
                                                                                                                                                !0
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            children:
                                                                                                                                              (
                                                                                                                                                pt,
                                                                                                                                                qr
                                                                                                                                              ) => {
                                                                                                                                                var Et =
                                                                                                                                                  je();
                                                                                                                                                (O(
                                                                                                                                                  () =>
                                                                                                                                                    X(
                                                                                                                                                      Et,
                                                                                                                                                      t(
                                                                                                                                                        d
                                                                                                                                                      )
                                                                                                                                                        .snippets
                                                                                                                                                        .radio
                                                                                                                                                        .apple
                                                                                                                                                    )
                                                                                                                                                ),
                                                                                                                                                  k(
                                                                                                                                                    pt,
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
                                                                                                                                              return Aa();
                                                                                                                                            },
                                                                                                                                            get variant() {
                                                                                                                                              return Fa();
                                                                                                                                            },
                                                                                                                                            get disabled() {
                                                                                                                                              return Rr();
                                                                                                                                            },
                                                                                                                                            value:
                                                                                                                                              "banana",
                                                                                                                                            get group() {
                                                                                                                                              return t(
                                                                                                                                                E
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            set group(
                                                                                                                                              pt
                                                                                                                                            ) {
                                                                                                                                              A(
                                                                                                                                                E,
                                                                                                                                                pt,
                                                                                                                                                !0
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            children:
                                                                                                                                              (
                                                                                                                                                pt,
                                                                                                                                                qr
                                                                                                                                              ) => {
                                                                                                                                                var Et =
                                                                                                                                                  je();
                                                                                                                                                (O(
                                                                                                                                                  () =>
                                                                                                                                                    X(
                                                                                                                                                      Et,
                                                                                                                                                      t(
                                                                                                                                                        d
                                                                                                                                                      )
                                                                                                                                                        .snippets
                                                                                                                                                        .radio
                                                                                                                                                        .banana
                                                                                                                                                    )
                                                                                                                                                ),
                                                                                                                                                  k(
                                                                                                                                                    pt,
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
                                                                                                                                        var Qt =
                                                                                                                                          D(
                                                                                                                                            Vr,
                                                                                                                                            2
                                                                                                                                          );
                                                                                                                                        (uo(
                                                                                                                                          Qt,
                                                                                                                                          {
                                                                                                                                            get sz() {
                                                                                                                                              return Aa();
                                                                                                                                            },
                                                                                                                                            get variant() {
                                                                                                                                              return Fa();
                                                                                                                                            },
                                                                                                                                            get disabled() {
                                                                                                                                              return Rr();
                                                                                                                                            },
                                                                                                                                            value:
                                                                                                                                              "cherry",
                                                                                                                                            get group() {
                                                                                                                                              return t(
                                                                                                                                                E
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            set group(
                                                                                                                                              pt
                                                                                                                                            ) {
                                                                                                                                              A(
                                                                                                                                                E,
                                                                                                                                                pt,
                                                                                                                                                !0
                                                                                                                                              );
                                                                                                                                            },
                                                                                                                                            children:
                                                                                                                                              (
                                                                                                                                                pt,
                                                                                                                                                qr
                                                                                                                                              ) => {
                                                                                                                                                var Et =
                                                                                                                                                  je();
                                                                                                                                                (O(
                                                                                                                                                  () =>
                                                                                                                                                    X(
                                                                                                                                                      Et,
                                                                                                                                                      t(
                                                                                                                                                        d
                                                                                                                                                      )
                                                                                                                                                        .snippets
                                                                                                                                                        .radio
                                                                                                                                                        .cherry
                                                                                                                                                    )
                                                                                                                                                ),
                                                                                                                                                  k(
                                                                                                                                                    pt,
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
                                                                                                                                          k(
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
                                                                                                                                var za =
                                                                                                                                    Me(),
                                                                                                                                  Vn =
                                                                                                                                    Ce(
                                                                                                                                      za
                                                                                                                                    );
                                                                                                                                {
                                                                                                                                  var Aa =
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
                                                                                                                                                d
                                                                                                                                              )
                                                                                                                                                .pageLabels
                                                                                                                                                .slider;
                                                                                                                                            },
                                                                                                                                            get subtitle() {
                                                                                                                                              return t(
                                                                                                                                                d
                                                                                                                                              )
                                                                                                                                                .snippets
                                                                                                                                                .slider
                                                                                                                                                .subtitle;
                                                                                                                                            },
                                                                                                                                            children:
                                                                                                                                              (
                                                                                                                                                aa,
                                                                                                                                                jr = Q,
                                                                                                                                                Vr = Q,
                                                                                                                                                Qt = Q,
                                                                                                                                                pt = Q,
                                                                                                                                                qr = Q,
                                                                                                                                                Et = Q
                                                                                                                                              ) => {
                                                                                                                                                {
                                                                                                                                                  let Ta =
                                                                                                                                                    p(
                                                                                                                                                      () =>
                                                                                                                                                        String(
                                                                                                                                                          t(
                                                                                                                                                            L
                                                                                                                                                          )
                                                                                                                                                        )
                                                                                                                                                    );
                                                                                                                                                  Dt(
                                                                                                                                                    aa,
                                                                                                                                                    {
                                                                                                                                                      get text() {
                                                                                                                                                        return t(
                                                                                                                                                          Ta
                                                                                                                                                        );
                                                                                                                                                      },
                                                                                                                                                      children:
                                                                                                                                                        (
                                                                                                                                                          Gt,
                                                                                                                                                          Ur
                                                                                                                                                        ) => {
                                                                                                                                                          {
                                                                                                                                                            let na =
                                                                                                                                                              p(
                                                                                                                                                                () =>
                                                                                                                                                                  Qt() ||
                                                                                                                                                                  `${Vr() || t(d).snippets.slider.fallbackLabel} ${jr()}`
                                                                                                                                                              );
                                                                                                                                                            sf(
                                                                                                                                                              Gt,
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
                                                                                                                                                                  return pt();
                                                                                                                                                                },
                                                                                                                                                                get value() {
                                                                                                                                                                  return t(
                                                                                                                                                                    L
                                                                                                                                                                  );
                                                                                                                                                                },
                                                                                                                                                                set value(
                                                                                                                                                                  La
                                                                                                                                                                ) {
                                                                                                                                                                  A(
                                                                                                                                                                    L,
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
                                                                                                                                    Fa =
                                                                                                                                      (
                                                                                                                                        Br
                                                                                                                                      ) => {
                                                                                                                                        var Rr =
                                                                                                                                            Me(),
                                                                                                                                          aa =
                                                                                                                                            Ce(
                                                                                                                                              Rr
                                                                                                                                            );
                                                                                                                                        {
                                                                                                                                          var jr =
                                                                                                                                              (
                                                                                                                                                Qt
                                                                                                                                              ) => {
                                                                                                                                                Ze(
                                                                                                                                                  Qt,
                                                                                                                                                  {
                                                                                                                                                    component:
                                                                                                                                                      "Select",
                                                                                                                                                    get title() {
                                                                                                                                                      return t(
                                                                                                                                                        d
                                                                                                                                                      )
                                                                                                                                                        .pageLabels
                                                                                                                                                        .select;
                                                                                                                                                    },
                                                                                                                                                    get subtitle() {
                                                                                                                                                      return t(
                                                                                                                                                        d
                                                                                                                                                      )
                                                                                                                                                        .snippets
                                                                                                                                                        .select
                                                                                                                                                        .subtitle;
                                                                                                                                                    },
                                                                                                                                                    children:
                                                                                                                                                      (
                                                                                                                                                        qr,
                                                                                                                                                        Et = Q,
                                                                                                                                                        Ta = Q,
                                                                                                                                                        Gt = Q,
                                                                                                                                                        Ur = Q
                                                                                                                                                      ) => {
                                                                                                                                                        {
                                                                                                                                                          let na =
                                                                                                                                                            p(
                                                                                                                                                              () =>
                                                                                                                                                                Gt() ||
                                                                                                                                                                t(
                                                                                                                                                                  d
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
                                                                                                                                                                  La,
                                                                                                                                                                  Ho
                                                                                                                                                                ) => {
                                                                                                                                                                  {
                                                                                                                                                                    let Pr =
                                                                                                                                                                      p(
                                                                                                                                                                        () =>
                                                                                                                                                                          Gt() ||
                                                                                                                                                                          t(
                                                                                                                                                                            d
                                                                                                                                                                          )
                                                                                                                                                                            .snippets
                                                                                                                                                                            .select
                                                                                                                                                                            .label
                                                                                                                                                                      );
                                                                                                                                                                    jt(
                                                                                                                                                                      La,
                                                                                                                                                                      {
                                                                                                                                                                        get sz() {
                                                                                                                                                                          return Et();
                                                                                                                                                                        },
                                                                                                                                                                        get variant() {
                                                                                                                                                                          return Ta();
                                                                                                                                                                        },
                                                                                                                                                                        get label() {
                                                                                                                                                                          return t(
                                                                                                                                                                            Pr
                                                                                                                                                                          );
                                                                                                                                                                        },
                                                                                                                                                                        get options() {
                                                                                                                                                                          return t(
                                                                                                                                                                            d
                                                                                                                                                                          )
                                                                                                                                                                            .options
                                                                                                                                                                            .selectCountries;
                                                                                                                                                                        },
                                                                                                                                                                        get disabled() {
                                                                                                                                                                          return Ur();
                                                                                                                                                                        },
                                                                                                                                                                        get value() {
                                                                                                                                                                          return t(
                                                                                                                                                                            ue
                                                                                                                                                                          );
                                                                                                                                                                        },
                                                                                                                                                                        set value(
                                                                                                                                                                          Ma
                                                                                                                                                                        ) {
                                                                                                                                                                          A(
                                                                                                                                                                            ue,
                                                                                                                                                                            Ma,
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
                                                                                                                                                Qt
                                                                                                                                              ) => {
                                                                                                                                                var pt =
                                                                                                                                                    Me(),
                                                                                                                                                  qr =
                                                                                                                                                    Ce(
                                                                                                                                                      pt
                                                                                                                                                    );
                                                                                                                                                {
                                                                                                                                                  var Et =
                                                                                                                                                      (
                                                                                                                                                        Gt
                                                                                                                                                      ) => {
                                                                                                                                                        Ze(
                                                                                                                                                          Gt,
                                                                                                                                                          {
                                                                                                                                                            component:
                                                                                                                                                              "Splitter",
                                                                                                                                                            get title() {
                                                                                                                                                              return t(
                                                                                                                                                                d
                                                                                                                                                              )
                                                                                                                                                                .pageLabels
                                                                                                                                                                .splitter;
                                                                                                                                                            },
                                                                                                                                                            get subtitle() {
                                                                                                                                                              return t(
                                                                                                                                                                d
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
                                                                                                                                                                lv(
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
                                                                                                                                                    Ta =
                                                                                                                                                      (
                                                                                                                                                        Gt
                                                                                                                                                      ) => {
                                                                                                                                                        var Ur =
                                                                                                                                                            Me(),
                                                                                                                                                          na =
                                                                                                                                                            Ce(
                                                                                                                                                              Ur
                                                                                                                                                            );
                                                                                                                                                        {
                                                                                                                                                          var La =
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
                                                                                                                                                                        d
                                                                                                                                                                      )
                                                                                                                                                                        .pageLabels
                                                                                                                                                                        .switch;
                                                                                                                                                                    },
                                                                                                                                                                    get subtitle() {
                                                                                                                                                                      return t(
                                                                                                                                                                        d
                                                                                                                                                                      )
                                                                                                                                                                        .snippets
                                                                                                                                                                        .switch
                                                                                                                                                                        .subtitle;
                                                                                                                                                                    },
                                                                                                                                                                    children:
                                                                                                                                                                      (
                                                                                                                                                                        qn,
                                                                                                                                                                        Da = Q,
                                                                                                                                                                        Un = Q,
                                                                                                                                                                        dr = Q,
                                                                                                                                                                        Na = Q
                                                                                                                                                                      ) => {
                                                                                                                                                                        {
                                                                                                                                                                          let Ia =
                                                                                                                                                                            p(
                                                                                                                                                                              () =>
                                                                                                                                                                                dr() ||
                                                                                                                                                                                `${t(d).snippets.switch.labelPrefix} ${Da()}`
                                                                                                                                                                            );
                                                                                                                                                                          Dt(
                                                                                                                                                                            qn,
                                                                                                                                                                            {
                                                                                                                                                                              get text() {
                                                                                                                                                                                return t(
                                                                                                                                                                                  Ia
                                                                                                                                                                                );
                                                                                                                                                                              },
                                                                                                                                                                              children:
                                                                                                                                                                                (
                                                                                                                                                                                  Oa,
                                                                                                                                                                                  un
                                                                                                                                                                                ) => {
                                                                                                                                                                                  {
                                                                                                                                                                                    let Er =
                                                                                                                                                                                        p(
                                                                                                                                                                                          () =>
                                                                                                                                                                                            Un() ||
                                                                                                                                                                                            void 0
                                                                                                                                                                                        ),
                                                                                                                                                                                      Ba =
                                                                                                                                                                                        p(
                                                                                                                                                                                          () =>
                                                                                                                                                                                            dr() ||
                                                                                                                                                                                            `${t(d).snippets.switch.labelPrefix} ${Da()}`
                                                                                                                                                                                        );
                                                                                                                                                                                    Cs(
                                                                                                                                                                                      Oa,
                                                                                                                                                                                      {
                                                                                                                                                                                        get sz() {
                                                                                                                                                                                          return Da();
                                                                                                                                                                                        },
                                                                                                                                                                                        get "data-variant"() {
                                                                                                                                                                                          return t(
                                                                                                                                                                                            Er
                                                                                                                                                                                          );
                                                                                                                                                                                        },
                                                                                                                                                                                        get rightLabel() {
                                                                                                                                                                                          return t(
                                                                                                                                                                                            Ba
                                                                                                                                                                                          );
                                                                                                                                                                                        },
                                                                                                                                                                                        get disabled() {
                                                                                                                                                                                          return Na();
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
                                                                                                                                                                var Ma =
                                                                                                                                                                    Me(),
                                                                                                                                                                  qn =
                                                                                                                                                                    Ce(
                                                                                                                                                                      Ma
                                                                                                                                                                    );
                                                                                                                                                                {
                                                                                                                                                                  var Da =
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
                                                                                                                                                                                d
                                                                                                                                                                              )
                                                                                                                                                                                .pageLabels
                                                                                                                                                                                .tablePagination;
                                                                                                                                                                            },
                                                                                                                                                                            subtitle:
                                                                                                                                                                              "Paginated data table",
                                                                                                                                                                            children:
                                                                                                                                                                              (
                                                                                                                                                                                Ia,
                                                                                                                                                                                Oa = Q,
                                                                                                                                                                                un = Q
                                                                                                                                                                              ) => {
                                                                                                                                                                                w(
                                                                                                                                                                                  Ia,
                                                                                                                                                                                  Oa,
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
                                                                                                                                                                        var Na =
                                                                                                                                                                            Me(),
                                                                                                                                                                          Ia =
                                                                                                                                                                            Ce(
                                                                                                                                                                              Na
                                                                                                                                                                            );
                                                                                                                                                                        {
                                                                                                                                                                          var Oa =
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
                                                                                                                                                                                        d
                                                                                                                                                                                      )
                                                                                                                                                                                        .pageLabels
                                                                                                                                                                                        .tabs;
                                                                                                                                                                                    },
                                                                                                                                                                                    get subtitle() {
                                                                                                                                                                                      return t(
                                                                                                                                                                                        d
                                                                                                                                                                                      )
                                                                                                                                                                                        .snippets
                                                                                                                                                                                        .tabs
                                                                                                                                                                                        .subtitle;
                                                                                                                                                                                    },
                                                                                                                                                                                    children:
                                                                                                                                                                                      (
                                                                                                                                                                                        Hn,
                                                                                                                                                                                        Kn = Q,
                                                                                                                                                                                        Gn = Q
                                                                                                                                                                                      ) => {
                                                                                                                                                                                        y(
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
                                                                                                                                                                                var Ba =
                                                                                                                                                                                    Me(),
                                                                                                                                                                                  Hn =
                                                                                                                                                                                    Ce(
                                                                                                                                                                                      Ba
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
                                                                                                                                                                                                d
                                                                                                                                                                                              )
                                                                                                                                                                                                .pageLabels
                                                                                                                                                                                                .themeToggle;
                                                                                                                                                                                            },
                                                                                                                                                                                            get subtitle() {
                                                                                                                                                                                              return t(
                                                                                                                                                                                                d
                                                                                                                                                                                              )
                                                                                                                                                                                                .snippets
                                                                                                                                                                                                .themeToggle
                                                                                                                                                                                                .subtitle;
                                                                                                                                                                                            },
                                                                                                                                                                                            children:
                                                                                                                                                                                              (
                                                                                                                                                                                                Zn,
                                                                                                                                                                                                Yn = Q,
                                                                                                                                                                                                Xn = Q,
                                                                                                                                                                                                fr = Q,
                                                                                                                                                                                                Ra = Q
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                Dt(
                                                                                                                                                                                                  Zn,
                                                                                                                                                                                                  {
                                                                                                                                                                                                    get text() {
                                                                                                                                                                                                      return fr();
                                                                                                                                                                                                    },
                                                                                                                                                                                                    children:
                                                                                                                                                                                                      (
                                                                                                                                                                                                        ja,
                                                                                                                                                                                                        Jn
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        {
                                                                                                                                                                                                          let cn =
                                                                                                                                                                                                              p(
                                                                                                                                                                                                                () =>
                                                                                                                                                                                                                  Xn() ||
                                                                                                                                                                                                                  void 0
                                                                                                                                                                                                              ),
                                                                                                                                                                                                            $t =
                                                                                                                                                                                                              p(
                                                                                                                                                                                                                () =>
                                                                                                                                                                                                                  fr() ||
                                                                                                                                                                                                                  t(
                                                                                                                                                                                                                    d
                                                                                                                                                                                                                  )
                                                                                                                                                                                                                    .snippets
                                                                                                                                                                                                                    .themeToggle
                                                                                                                                                                                                                    .defaultLabel
                                                                                                                                                                                                              );
                                                                                                                                                                                                          bi(
                                                                                                                                                                                                            ja,
                                                                                                                                                                                                            {
                                                                                                                                                                                                              get sz() {
                                                                                                                                                                                                                return Yn();
                                                                                                                                                                                                              },
                                                                                                                                                                                                              get disabled() {
                                                                                                                                                                                                                return Ra();
                                                                                                                                                                                                              },
                                                                                                                                                                                                              get "data-variant"() {
                                                                                                                                                                                                                return t(
                                                                                                                                                                                                                  cn
                                                                                                                                                                                                                );
                                                                                                                                                                                                              },
                                                                                                                                                                                                              get title() {
                                                                                                                                                                                                                return t(
                                                                                                                                                                                                                  $t
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
                                                                                                                                                                                            Me(),
                                                                                                                                                                                          Zn =
                                                                                                                                                                                            Ce(
                                                                                                                                                                                              Wn
                                                                                                                                                                                            );
                                                                                                                                                                                        {
                                                                                                                                                                                          var Yn =
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
                                                                                                                                                                                                        d
                                                                                                                                                                                                      )
                                                                                                                                                                                                        .pageLabels
                                                                                                                                                                                                        .timePicker;
                                                                                                                                                                                                    },
                                                                                                                                                                                                    get subtitle() {
                                                                                                                                                                                                      return t(
                                                                                                                                                                                                        d
                                                                                                                                                                                                      )
                                                                                                                                                                                                        .components
                                                                                                                                                                                                        .timePicker
                                                                                                                                                                                                        .subtitle;
                                                                                                                                                                                                    },
                                                                                                                                                                                                    children:
                                                                                                                                                                                                      (
                                                                                                                                                                                                        ja,
                                                                                                                                                                                                        Jn = Q,
                                                                                                                                                                                                        cn = Q,
                                                                                                                                                                                                        $t = Q,
                                                                                                                                                                                                        dn = Q
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        {
                                                                                                                                                                                                          let fn =
                                                                                                                                                                                                            p(
                                                                                                                                                                                                              () =>
                                                                                                                                                                                                                $t() ||
                                                                                                                                                                                                                t(
                                                                                                                                                                                                                  d
                                                                                                                                                                                                                )
                                                                                                                                                                                                                  .components
                                                                                                                                                                                                                  .timePicker
                                                                                                                                                                                                                  .label
                                                                                                                                                                                                            );
                                                                                                                                                                                                          Ff(
                                                                                                                                                                                                            ja,
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
                                                                                                                                                                                                                  d
                                                                                                                                                                                                                )
                                                                                                                                                                                                                  .components
                                                                                                                                                                                                                  .timePicker
                                                                                                                                                                                                                  .placeholder;
                                                                                                                                                                                                              },
                                                                                                                                                                                                              get value() {
                                                                                                                                                                                                                return t(
                                                                                                                                                                                                                  re
                                                                                                                                                                                                                );
                                                                                                                                                                                                              },
                                                                                                                                                                                                              set value(
                                                                                                                                                                                                                Qn
                                                                                                                                                                                                              ) {
                                                                                                                                                                                                                A(
                                                                                                                                                                                                                  re,
                                                                                                                                                                                                                  Qn,
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
                                                                                                                                                                                            Xn =
                                                                                                                                                                                              (
                                                                                                                                                                                                fr
                                                                                                                                                                                              ) => {
                                                                                                                                                                                                var Ra =
                                                                                                                                                                                                    Me(),
                                                                                                                                                                                                  ja =
                                                                                                                                                                                                    Ce(
                                                                                                                                                                                                      Ra
                                                                                                                                                                                                    );
                                                                                                                                                                                                {
                                                                                                                                                                                                  var Jn =
                                                                                                                                                                                                      (
                                                                                                                                                                                                        $t
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        Ze(
                                                                                                                                                                                                          $t,
                                                                                                                                                                                                          {
                                                                                                                                                                                                            component:
                                                                                                                                                                                                              "Toast",
                                                                                                                                                                                                            get title() {
                                                                                                                                                                                                              return t(
                                                                                                                                                                                                                d
                                                                                                                                                                                                              )
                                                                                                                                                                                                                .pageLabels
                                                                                                                                                                                                                .toast;
                                                                                                                                                                                                            },
                                                                                                                                                                                                            get subtitle() {
                                                                                                                                                                                                              return t(
                                                                                                                                                                                                                d
                                                                                                                                                                                                              )
                                                                                                                                                                                                                .snippets
                                                                                                                                                                                                                .toast
                                                                                                                                                                                                                .subtitle;
                                                                                                                                                                                                            },
                                                                                                                                                                                                            children:
                                                                                                                                                                                                              (
                                                                                                                                                                                                                fn,
                                                                                                                                                                                                                Qn = Q,
                                                                                                                                                                                                                Fs = Q
                                                                                                                                                                                                              ) => {
                                                                                                                                                                                                                C(
                                                                                                                                                                                                                  fn,
                                                                                                                                                                                                                  Qn,
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
                                                                                                                                                                                                        $t
                                                                                                                                                                                                      ) => {
                                                                                                                                                                                                        Ze(
                                                                                                                                                                                                          $t,
                                                                                                                                                                                                          {
                                                                                                                                                                                                            component:
                                                                                                                                                                                                              "Unknown",
                                                                                                                                                                                                            title:
                                                                                                                                                                                                              "Unknown",
                                                                                                                                                                                                            get subtitle() {
                                                                                                                                                                                                              return t(
                                                                                                                                                                                                                d
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
                                                                                                                                                                                                  G(
                                                                                                                                                                                                    ja,
                                                                                                                                                                                                    (
                                                                                                                                                                                                      $t
                                                                                                                                                                                                    ) => {
                                                                                                                                                                                                      t(
                                                                                                                                                                                                        c
                                                                                                                                                                                                      ) ===
                                                                                                                                                                                                      "toast"
                                                                                                                                                                                                        ? $t(
                                                                                                                                                                                                            Jn
                                                                                                                                                                                                          )
                                                                                                                                                                                                        : $t(
                                                                                                                                                                                                            cn,
                                                                                                                                                                                                            !1
                                                                                                                                                                                                          );
                                                                                                                                                                                                    },
                                                                                                                                                                                                    !0
                                                                                                                                                                                                  );
                                                                                                                                                                                                }
                                                                                                                                                                                                k(
                                                                                                                                                                                                  fr,
                                                                                                                                                                                                  Ra
                                                                                                                                                                                                );
                                                                                                                                                                                              };
                                                                                                                                                                                          G(
                                                                                                                                                                                            Zn,
                                                                                                                                                                                            (
                                                                                                                                                                                              fr
                                                                                                                                                                                            ) => {
                                                                                                                                                                                              t(
                                                                                                                                                                                                c
                                                                                                                                                                                              ) ===
                                                                                                                                                                                              "timePicker"
                                                                                                                                                                                                ? fr(
                                                                                                                                                                                                    Yn
                                                                                                                                                                                                  )
                                                                                                                                                                                                : fr(
                                                                                                                                                                                                    Xn,
                                                                                                                                                                                                    !1
                                                                                                                                                                                                  );
                                                                                                                                                                                            },
                                                                                                                                                                                            !0
                                                                                                                                                                                          );
                                                                                                                                                                                        }
                                                                                                                                                                                        k(
                                                                                                                                                                                          oa,
                                                                                                                                                                                          Wn
                                                                                                                                                                                        );
                                                                                                                                                                                      };
                                                                                                                                                                                  G(
                                                                                                                                                                                    Hn,
                                                                                                                                                                                    (
                                                                                                                                                                                      oa
                                                                                                                                                                                    ) => {
                                                                                                                                                                                      t(
                                                                                                                                                                                        c
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
                                                                                                                                                                                k(
                                                                                                                                                                                  Er,
                                                                                                                                                                                  Ba
                                                                                                                                                                                );
                                                                                                                                                                              };
                                                                                                                                                                          G(
                                                                                                                                                                            Ia,
                                                                                                                                                                            (
                                                                                                                                                                              Er
                                                                                                                                                                            ) => {
                                                                                                                                                                              t(
                                                                                                                                                                                c
                                                                                                                                                                              ) ===
                                                                                                                                                                              "tabs"
                                                                                                                                                                                ? Er(
                                                                                                                                                                                    Oa
                                                                                                                                                                                  )
                                                                                                                                                                                : Er(
                                                                                                                                                                                    un,
                                                                                                                                                                                    !1
                                                                                                                                                                                  );
                                                                                                                                                                            },
                                                                                                                                                                            !0
                                                                                                                                                                          );
                                                                                                                                                                        }
                                                                                                                                                                        k(
                                                                                                                                                                          dr,
                                                                                                                                                                          Na
                                                                                                                                                                        );
                                                                                                                                                                      };
                                                                                                                                                                  G(
                                                                                                                                                                    qn,
                                                                                                                                                                    (
                                                                                                                                                                      dr
                                                                                                                                                                    ) => {
                                                                                                                                                                      t(
                                                                                                                                                                        c
                                                                                                                                                                      ) ===
                                                                                                                                                                      "tablePagination"
                                                                                                                                                                        ? dr(
                                                                                                                                                                            Da
                                                                                                                                                                          )
                                                                                                                                                                        : dr(
                                                                                                                                                                            Un,
                                                                                                                                                                            !1
                                                                                                                                                                          );
                                                                                                                                                                    },
                                                                                                                                                                    !0
                                                                                                                                                                  );
                                                                                                                                                                }
                                                                                                                                                                k(
                                                                                                                                                                  Pr,
                                                                                                                                                                  Ma
                                                                                                                                                                );
                                                                                                                                                              };
                                                                                                                                                          G(
                                                                                                                                                            na,
                                                                                                                                                            (
                                                                                                                                                              Pr
                                                                                                                                                            ) => {
                                                                                                                                                              t(
                                                                                                                                                                c
                                                                                                                                                              ) ===
                                                                                                                                                              "switch"
                                                                                                                                                                ? Pr(
                                                                                                                                                                    La
                                                                                                                                                                  )
                                                                                                                                                                : Pr(
                                                                                                                                                                    Ho,
                                                                                                                                                                    !1
                                                                                                                                                                  );
                                                                                                                                                            },
                                                                                                                                                            !0
                                                                                                                                                          );
                                                                                                                                                        }
                                                                                                                                                        k(
                                                                                                                                                          Gt,
                                                                                                                                                          Ur
                                                                                                                                                        );
                                                                                                                                                      };
                                                                                                                                                  G(
                                                                                                                                                    qr,
                                                                                                                                                    (
                                                                                                                                                      Gt
                                                                                                                                                    ) => {
                                                                                                                                                      t(
                                                                                                                                                        c
                                                                                                                                                      ) ===
                                                                                                                                                      "splitter"
                                                                                                                                                        ? Gt(
                                                                                                                                                            Et
                                                                                                                                                          )
                                                                                                                                                        : Gt(
                                                                                                                                                            Ta,
                                                                                                                                                            !1
                                                                                                                                                          );
                                                                                                                                                    },
                                                                                                                                                    !0
                                                                                                                                                  );
                                                                                                                                                }
                                                                                                                                                k(
                                                                                                                                                  Qt,
                                                                                                                                                  pt
                                                                                                                                                );
                                                                                                                                              };
                                                                                                                                          G(
                                                                                                                                            aa,
                                                                                                                                            (
                                                                                                                                              Qt
                                                                                                                                            ) => {
                                                                                                                                              t(
                                                                                                                                                c
                                                                                                                                              ) ===
                                                                                                                                              "select"
                                                                                                                                                ? Qt(
                                                                                                                                                    jr
                                                                                                                                                  )
                                                                                                                                                : Qt(
                                                                                                                                                    Vr,
                                                                                                                                                    !1
                                                                                                                                                  );
                                                                                                                                            },
                                                                                                                                            !0
                                                                                                                                          );
                                                                                                                                        }
                                                                                                                                        k(
                                                                                                                                          Br,
                                                                                                                                          Rr
                                                                                                                                        );
                                                                                                                                      };
                                                                                                                                  G(
                                                                                                                                    Vn,
                                                                                                                                    (
                                                                                                                                      Br
                                                                                                                                    ) => {
                                                                                                                                      t(
                                                                                                                                        c
                                                                                                                                      ) ===
                                                                                                                                      "slider"
                                                                                                                                        ? Br(
                                                                                                                                            Aa
                                                                                                                                          )
                                                                                                                                        : Br(
                                                                                                                                            Fa,
                                                                                                                                            !1
                                                                                                                                          );
                                                                                                                                    },
                                                                                                                                    !0
                                                                                                                                  );
                                                                                                                                }
                                                                                                                                k(
                                                                                                                                  Sr,
                                                                                                                                  za
                                                                                                                                );
                                                                                                                              };
                                                                                                                          G(
                                                                                                                            Bn,
                                                                                                                            (
                                                                                                                              Sr
                                                                                                                            ) => {
                                                                                                                              t(
                                                                                                                                c
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
                                                                                                                        k(
                                                                                                                          Cr,
                                                                                                                          Ea
                                                                                                                        );
                                                                                                                      };
                                                                                                                  G(
                                                                                                                    Nn,
                                                                                                                    (
                                                                                                                      Cr
                                                                                                                    ) => {
                                                                                                                      t(
                                                                                                                        c
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
                                                                                                                k(
                                                                                                                  ra,
                                                                                                                  Dn
                                                                                                                );
                                                                                                              };
                                                                                                          G(
                                                                                                            Mn,
                                                                                                            (
                                                                                                              ra
                                                                                                            ) => {
                                                                                                              t(
                                                                                                                c
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
                                                                                                        k(
                                                                                                          ta,
                                                                                                          Pa
                                                                                                        );
                                                                                                      };
                                                                                                  G(
                                                                                                    Tn,
                                                                                                    (
                                                                                                      ta
                                                                                                    ) => {
                                                                                                      t(
                                                                                                        c
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
                                                                                                k(
                                                                                                  ea,
                                                                                                  Fn
                                                                                                );
                                                                                              };
                                                                                          G(
                                                                                            An,
                                                                                            (
                                                                                              ea
                                                                                            ) => {
                                                                                              t(
                                                                                                c
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
                                                                                        k(
                                                                                          kr,
                                                                                          ln
                                                                                        );
                                                                                      };
                                                                                  G(
                                                                                    Sa,
                                                                                    (
                                                                                      kr
                                                                                    ) => {
                                                                                      t(
                                                                                        c
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
                                                                                k(
                                                                                  Jt,
                                                                                  Or
                                                                                );
                                                                              };
                                                                          G(
                                                                            St,
                                                                            (
                                                                              Jt
                                                                            ) => {
                                                                              t(
                                                                                c
                                                                              ) ===
                                                                              "filePicker"
                                                                                ? Jt(
                                                                                    Kt
                                                                                  )
                                                                                : Jt(
                                                                                    Ca,
                                                                                    !1
                                                                                  );
                                                                            },
                                                                            !0
                                                                          );
                                                                        }
                                                                        k(
                                                                          Xt,
                                                                          ka
                                                                        );
                                                                      };
                                                                    G(
                                                                      Nr,
                                                                      (Xt) => {
                                                                        t(c) ===
                                                                        "field"
                                                                          ? Xt(
                                                                              Ir
                                                                            )
                                                                          : Xt(
                                                                              $r,
                                                                              !1
                                                                            );
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  k(ct, yr);
                                                                };
                                                              G(
                                                                ur,
                                                                (ct) => {
                                                                  t(c) ===
                                                                  "dialog"
                                                                    ? ct(wr)
                                                                    : ct(
                                                                        cr,
                                                                        !1
                                                                      );
                                                                },
                                                                !0
                                                              );
                                                            }
                                                            k(Lt, lr);
                                                          };
                                                        G(
                                                          nt,
                                                          (Lt) => {
                                                            t(c) ===
                                                            "datePicker"
                                                              ? Lt(gt)
                                                              : Lt(sr, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      k(Ke, et);
                                                    };
                                                  G(
                                                    Ut,
                                                    (Ke) => {
                                                      t(c) === "colorPicker"
                                                        ? Ke(Ht)
                                                        : Ke(Dr, !1);
                                                    },
                                                    !0
                                                  );
                                                }
                                                k(xt, Tt);
                                              };
                                            G(
                                              Xe,
                                              (xt) => {
                                                t(c) === "codeView"
                                                  ? xt(at)
                                                  : xt(vt, !1);
                                              },
                                              !0
                                            );
                                          }
                                          k(Ne, Ue);
                                        };
                                      G(
                                        $e,
                                        (Ne) => {
                                          t(c) === "checkbox"
                                            ? Ne(ce)
                                            : Ne(Ee, !1);
                                        },
                                        !0
                                      );
                                    }
                                    k(ft, It);
                                  };
                                G(
                                  Ye,
                                  (ft) => {
                                    t(c) === "carousel" ? ft(ut) : ft(dt, !1);
                                  },
                                  !0
                                );
                              }
                              k(Le, De);
                            };
                          G(
                            Fe,
                            (Le) => {
                              t(c) === "card" ? Le(Oe) : Le(Ve, !1);
                            },
                            !0
                          );
                        }
                        k(xe, Te);
                      };
                    G(
                      ke,
                      (xe) => {
                        t(c) === "button" ? xe(ye) : xe(W, !1);
                      },
                      !0
                    );
                  }
                  k(le, me);
                };
              G(
                Se,
                (le) => {
                  t(c) === "accordion" ? le(M) : le(oe, !1);
                },
                !0
              );
            }
            k(ze, ve);
          };
        G(se, (ze) => {
          t(c) === "about" ? ze(Ae) : ze(Pe, !1);
        });
      }
      (O(
        (ze, ve, Se, M) => {
          (q(_e, 1, ze), q(I, 1, ve), q(fe, 1, Se), q(he, 1, M));
        },
        [
          () => Y(U("p-6 md:p-6 lg:p-6")),
          () => Y(U("flex items-center justify-between")),
          () => Y(U("max-w-[640px] min-h-[560px] mx-auto p-4 md:p-6 lg:p-10")),
          () => Y(U("grid gap-4 md:gap-6 lg:gap-8")),
        ]
      ),
        k(Z, ie));
    },
    $$slots: { default: !0 },
  }),
    Re(),
    o());
}
su(Sv, { target: document.getElementById("app") });

function J() {}
function Z(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function K(t) {
	return t();
}
function I() {
	return Object.create(null);
}
function $(t) {
	t.forEach(K);
}
function tt(t) {
	return typeof t == 'function';
}
function gt(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let S;
function xt(t, e) {
	return S || (S = document.createElement('a')), (S.href = e), t === S.href;
}
function et(t) {
	return Object.keys(t).length === 0;
}
function wt(t, e, n, i) {
	if (t) {
		const r = Q(t, e, n, i);
		return t[0](r);
	}
}
function Q(t, e, n, i) {
	return t[1] && i ? Z(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function bt(t, e, n, i) {
	if (t[2] && i) {
		const r = t[2](i(n));
		if (e.dirty === void 0) return r;
		if (typeof r == 'object') {
			const a = [],
				l = Math.max(e.dirty.length, r.length);
			for (let o = 0; o < l; o += 1) a[o] = e.dirty[o] | r[o];
			return a;
		}
		return e.dirty | r;
	}
	return e.dirty;
}
function $t(t, e, n, i, r, a) {
	if (r) {
		const l = Q(e, n, i, a);
		t.p(l, r);
	}
}
function vt(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let i = 0; i < n; i++) e[i] = -1;
		return e;
	}
	return -1;
}
let C = !1;
function nt() {
	C = !0;
}
function it() {
	C = !1;
}
function ct(t, e, n, i) {
	for (; t < e; ) {
		const r = t + ((e - t) >> 1);
		n(r) <= i ? (t = r + 1) : (e = r);
	}
	return t;
}
function rt(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let e = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const c = [];
		for (let s = 0; s < e.length; s++) {
			const f = e[s];
			f.claim_order !== void 0 && c.push(f);
		}
		e = c;
	}
	const n = new Int32Array(e.length + 1),
		i = new Int32Array(e.length);
	n[0] = -1;
	let r = 0;
	for (let c = 0; c < e.length; c++) {
		const s = e[c].claim_order,
			f = (r > 0 && e[n[r]].claim_order <= s ? r + 1 : ct(1, r, (_) => e[n[_]].claim_order, s)) - 1;
		i[c] = n[f] + 1;
		const d = f + 1;
		(n[d] = c), (r = Math.max(d, r));
	}
	const a = [],
		l = [];
	let o = e.length - 1;
	for (let c = n[r] + 1; c != 0; c = i[c - 1]) {
		for (a.push(e[c - 1]); o >= c; o--) l.push(e[o]);
		o--;
	}
	for (; o >= 0; o--) l.push(e[o]);
	a.reverse(), l.sort((c, s) => c.claim_order - s.claim_order);
	for (let c = 0, s = 0; c < l.length; c++) {
		for (; s < a.length && l[c].claim_order >= a[s].claim_order; ) s++;
		const f = s < a.length ? a[s] : null;
		t.insertBefore(l[c], f);
	}
}
function lt(t, e) {
	if (C) {
		for (
			rt(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentElement !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function kt(t, e, n) {
	C && !n ? lt(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function ot(t) {
	t.parentNode.removeChild(t);
}
function Et(t, e) {
	for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function st(t) {
	return document.createElement(t);
}
function at(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function z(t) {
	return document.createTextNode(t);
}
function St() {
	return z(' ');
}
function Nt() {
	return z('');
}
function jt(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function ut(t) {
	return Array.from(t.childNodes);
}
function ft(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function R(t, e, n, i, r = !1) {
	ft(t);
	const a = (() => {
		for (let l = t.claim_info.last_index; l < t.length; l++) {
			const o = t[l];
			if (e(o)) {
				const c = n(o);
				return c === void 0 ? t.splice(l, 1) : (t[l] = c), r || (t.claim_info.last_index = l), o;
			}
		}
		for (let l = t.claim_info.last_index - 1; l >= 0; l--) {
			const o = t[l];
			if (e(o)) {
				const c = n(o);
				return (
					c === void 0 ? t.splice(l, 1) : (t[l] = c),
					r ? c === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = l),
					o
				);
			}
		}
		return i();
	})();
	return (a.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), a;
}
function W(t, e, n, i) {
	return R(
		t,
		(r) => r.nodeName === e,
		(r) => {
			const a = [];
			for (let l = 0; l < r.attributes.length; l++) {
				const o = r.attributes[l];
				n[o.name] || a.push(o.name);
			}
			a.forEach((l) => r.removeAttribute(l));
		},
		() => i(e)
	);
}
function At(t, e, n) {
	return W(t, e, n, st);
}
function Ct(t, e, n) {
	return W(t, e, n, at);
}
function _t(t, e) {
	return R(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + e;
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length);
			} else n.data = i;
		},
		() => z(e),
		!0
	);
}
function Mt(t) {
	return _t(t, ' ');
}
function Tt(t, e) {
	(e = '' + e), t.wholeText !== e && (t.data = e);
}
function qt(t, e, n, i) {
	n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '');
}
function dt(t, e, n = !1) {
	const i = document.createEvent('CustomEvent');
	return i.initCustomEvent(t, n, !1, e), i;
}
let b;
function w(t) {
	b = t;
}
function v() {
	if (!b) throw new Error('Function called outside component initialization');
	return b;
}
function Bt(t) {
	v().$$.on_mount.push(t);
}
function Dt(t) {
	v().$$.after_update.push(t);
}
function Ot(t) {
	v().$$.on_destroy.push(t);
}
function Pt() {
	const t = v();
	return (e, n) => {
		const i = t.$$.callbacks[e];
		if (i) {
			const r = dt(e, n);
			i.slice().forEach((a) => {
				a.call(t, r);
			});
		}
	};
}
function zt(t, e) {
	v().$$.context.set(t, e);
}
const x = [],
	L = [],
	j = [],
	G = [],
	U = Promise.resolve();
let O = !1;
function V() {
	O || ((O = !0), U.then(X));
}
function Ft() {
	return V(), U;
}
function P(t) {
	j.push(t);
}
const D = new Set();
let N = 0;
function X() {
	const t = b;
	do {
		for (; N < x.length; ) {
			const e = x[N];
			N++, w(e), ht(e.$$);
		}
		for (w(null), x.length = 0, N = 0; L.length; ) L.pop()();
		for (let e = 0; e < j.length; e += 1) {
			const n = j[e];
			D.has(n) || (D.add(n), n());
		}
		j.length = 0;
	} while (x.length);
	for (; G.length; ) G.pop()();
	(O = !1), D.clear(), w(t);
}
function ht(t) {
	if (t.fragment !== null) {
		t.update(), $(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(P);
	}
}
const A = new Set();
let g;
function Ht() {
	g = { r: 0, c: [], p: g };
}
function It() {
	g.r || $(g.c), (g = g.p);
}
function Y(t, e) {
	t && t.i && (A.delete(t), t.i(e));
}
function Lt(t, e, n, i) {
	if (t && t.o) {
		if (A.has(t)) return;
		A.add(t),
			g.c.push(() => {
				A.delete(t), i && (n && t.d(1), i());
			}),
			t.o(e);
	}
}
function Gt(t, e) {
	t.d(1), e.delete(t.key);
}
function Jt(t, e, n, i, r, a, l, o, c, s, f, d) {
	let _ = t.length,
		m = a.length,
		h = _;
	const M = {};
	for (; h--; ) M[t[h].key] = h;
	const k = [],
		T = new Map(),
		q = new Map();
	for (h = m; h--; ) {
		const u = d(r, a, h),
			p = n(u);
		let y = l.get(p);
		y ? i && y.p(u, e) : ((y = s(p, u)), y.c()),
			T.set(p, (k[h] = y)),
			p in M && q.set(p, Math.abs(h - M[p]));
	}
	const F = new Set(),
		H = new Set();
	function B(u) {
		Y(u, 1), u.m(o, f), l.set(u.key, u), (f = u.first), m--;
	}
	for (; _ && m; ) {
		const u = k[m - 1],
			p = t[_ - 1],
			y = u.key,
			E = p.key;
		u === p
			? ((f = u.first), _--, m--)
			: T.has(E)
			? !l.has(y) || F.has(y)
				? B(u)
				: H.has(E)
				? _--
				: q.get(y) > q.get(E)
				? (H.add(y), B(u))
				: (F.add(E), _--)
			: (c(p, l), _--);
	}
	for (; _--; ) {
		const u = t[_];
		T.has(u.key) || c(u, l);
	}
	for (; m; ) B(k[m - 1]);
	return k;
}
function Kt(t, e) {
	const n = {},
		i = {},
		r = { $$scope: 1 };
	let a = t.length;
	for (; a--; ) {
		const l = t[a],
			o = e[a];
		if (o) {
			for (const c in l) c in o || (i[c] = 1);
			for (const c in o) r[c] || ((n[c] = o[c]), (r[c] = 1));
			t[a] = o;
		} else for (const c in l) r[c] = 1;
	}
	for (const l in i) l in n || (n[l] = void 0);
	return n;
}
function Qt(t) {
	return typeof t == 'object' && t !== null ? t : {};
}
function Rt(t) {
	t && t.c();
}
function Wt(t, e) {
	t && t.l(e);
}
function mt(t, e, n, i) {
	const { fragment: r, on_mount: a, on_destroy: l, after_update: o } = t.$$;
	r && r.m(e, n),
		i ||
			P(() => {
				const c = a.map(K).filter(tt);
				l ? l.push(...c) : $(c), (t.$$.on_mount = []);
			}),
		o.forEach(P);
}
function pt(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		($(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function yt(t, e) {
	t.$$.dirty[0] === -1 && (x.push(t), V(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Ut(t, e, n, i, r, a, l, o = [-1]) {
	const c = b;
	w(t);
	const s = (t.$$ = {
		fragment: null,
		ctx: null,
		props: a,
		update: J,
		not_equal: r,
		bound: I(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (c ? c.$$.context : [])),
		callbacks: I(),
		dirty: o,
		skip_bound: !1,
		root: e.target || c.$$.root
	});
	l && l(s.root);
	let f = !1;
	if (
		((s.ctx = n
			? n(t, e.props || {}, (d, _, ...m) => {
					const h = m.length ? m[0] : _;
					return (
						s.ctx &&
							r(s.ctx[d], (s.ctx[d] = h)) &&
							(!s.skip_bound && s.bound[d] && s.bound[d](h), f && yt(t, d)),
						_
					);
			  })
			: []),
		s.update(),
		(f = !0),
		$(s.before_update),
		(s.fragment = i ? i(s.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			nt();
			const d = ut(e.target);
			s.fragment && s.fragment.l(d), d.forEach(ot);
		} else s.fragment && s.fragment.c();
		e.intro && Y(t.$$.fragment), mt(t, e.target, e.anchor, e.customElement), it(), X();
	}
	w(c);
}
class Vt {
	$destroy() {
		pt(this, 1), (this.$destroy = J);
	}
	$on(e, n) {
		const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			i.push(n),
			() => {
				const r = i.indexOf(n);
				r !== -1 && i.splice(r, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !et(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
export {
	Kt as A,
	Qt as B,
	pt as C,
	Z as D,
	Ft as E,
	wt as F,
	lt as G,
	$t as H,
	vt as I,
	bt as J,
	Pt as K,
	Ot as L,
	L as M,
	at as N,
	Ct as O,
	xt as P,
	Jt as Q,
	Et as R,
	Vt as S,
	Gt as T,
	ut as a,
	jt as b,
	At as c,
	ot as d,
	st as e,
	qt as f,
	kt as g,
	_t as h,
	Ut as i,
	Tt as j,
	St as k,
	Nt as l,
	Mt as m,
	J as n,
	Ht as o,
	Lt as p,
	It as q,
	Y as r,
	gt as s,
	z as t,
	zt as u,
	Dt as v,
	Bt as w,
	Rt as x,
	Wt as y,
	mt as z
};

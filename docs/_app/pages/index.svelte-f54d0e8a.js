import {
	S as Pe,
	i as Ce,
	s as Oe,
	e as g,
	c as p,
	a as f,
	d as a,
	b as r,
	f as Re,
	g as x,
	n as be,
	l as ee,
	K as We,
	w as qe,
	L as Qe,
	M as Je,
	k as V,
	t as z,
	N as Z,
	m as T,
	h as I,
	O as $,
	P as xe,
	G as i,
	j as ae,
	Q as Fe,
	R as Ue,
	x as Xe,
	y as Ye,
	z as Ze,
	r as $e,
	p as et,
	C as tt,
	T as Ge
} from '../chunks/index-974193a7.js';
function Me(n) {
	let e;
	return {
		c() {
			(e = g('div')), this.h();
		},
		l(l) {
			(e = p(l, 'DIV', { id: !0, style: !0 })), f(e).forEach(a), this.h();
		},
		h() {
			r(e, 'id', 'svelte-infinite-scroll'), Re(e, 'width', '0');
		},
		m(l, t) {
			x(l, e, t), n[11](e);
		},
		p: be,
		d(l) {
			l && a(e), n[11](null);
		}
	};
}
function lt(n) {
	let e,
		l = !n[1] && !n[0] && Me(n);
	return {
		c() {
			l && l.c(), (e = ee());
		},
		l(t) {
			l && l.l(t), (e = ee());
		},
		m(t, s) {
			l && l.m(t, s), x(t, e, s);
		},
		p(t, [s]) {
			!t[1] && !t[0]
				? l
					? l.p(t, s)
					: ((l = Me(t)), l.c(), l.m(e.parentNode, e))
				: l && (l.d(1), (l = null));
		},
		i: be,
		o: be,
		d(t) {
			l && l.d(t), t && a(e);
		}
	};
}
function st(n, e, l) {
	let { threshold: t = 0 } = e,
		{ horizontal: s = !1 } = e,
		{ elementScroll: o = null } = e,
		{ hasMore: d = !0 } = e,
		{ reverse: c = !1 } = e,
		{ window: v = !1 } = e;
	const y = We();
	let w = !1,
		E,
		_,
		u,
		h;
	const H = (m) => {
			if (!d) return;
			const O = m.target;
			N(O, c, s) <= t
				? (!w && d && (y('loadMore'), l(8, (_ = O.scrollHeight)), l(9, (u = O.scrollTop))),
				  l(7, (w = !0)))
				: l(7, (w = !1));
		},
		N = (m, O, R) => {
			const M = m.documentElement ? m.documentElement : m;
			return O
				? R
					? M.scrollLeft
					: M.scrollTop
				: R
				? M.scrollWidth - M.clientWidth - M.scrollLeft
				: M.scrollHeight - M.clientHeight - M.scrollTop;
		};
	qe(() => {
		v ? l(10, (h = document)) : o ? l(10, (h = o)) : l(10, (h = E.parentNode));
	}),
		Qe(() => {
			h && (h.removeEventListener('scroll', H), h.removeEventListener('resize', H));
		});
	function L(m) {
		Je[m ? 'unshift' : 'push'](() => {
			(E = m), l(2, E);
		});
	}
	return (
		(n.$$set = (m) => {
			'threshold' in m && l(3, (t = m.threshold)),
				'horizontal' in m && l(4, (s = m.horizontal)),
				'elementScroll' in m && l(0, (o = m.elementScroll)),
				'hasMore' in m && l(5, (d = m.hasMore)),
				'reverse' in m && l(6, (c = m.reverse)),
				'window' in m && l(1, (v = m.window));
		}),
		(n.$$.update = () => {
			n.$$.dirty & 1088 &&
				h &&
				(c && l(10, (h.scrollTop = h.scrollHeight), h),
				h.addEventListener('scroll', H),
				h.addEventListener('resize', H)),
				n.$$.dirty & 1984 && w && c && l(10, (h.scrollTop = h.scrollHeight - _ + u), h);
		}),
		[o, v, E, t, s, d, c, w, _, u, h, L]
	);
}
class rt extends Pe {
	constructor(e) {
		super();
		Ce(this, e, st, lt, Oe, {
			threshold: 3,
			horizontal: 4,
			elementScroll: 0,
			hasMore: 5,
			reverse: 6,
			window: 1
		});
	}
}
function ze(n, e, l) {
	const t = n.slice();
	return (t[5] = e[l]), (t[7] = l), t;
}
function Ie(n, e, l) {
	const t = n.slice();
	return (t[8] = e[l]), (t[10] = l), t;
}
function De(n, e, l) {
	const t = n.slice();
	return (t[11] = e[l]), t;
}
function Ve(n) {
	let e, l;
	return {
		c() {
			(e = g('h2')), (l = z('Demo')), this.h();
		},
		l(t) {
			e = p(t, 'H2', { class: !0 });
			var s = f(e);
			(l = I(s, 'Demo')), s.forEach(a), this.h();
		},
		h() {
			r(e, 'class', 'my-0.5');
		},
		m(t, s) {
			x(t, e, s), i(e, l);
		},
		d(t) {
			t && a(e);
		}
	};
}
function Te(n) {
	let e, l;
	return {
		c() {
			(e = g('h2')), (l = z('Featured')), this.h();
		},
		l(t) {
			e = p(t, 'H2', { class: !0 });
			var s = f(e);
			(l = I(s, 'Featured')), s.forEach(a), this.h();
		},
		h() {
			r(e, 'class', 'my-0.5');
		},
		m(t, s) {
			x(t, e, s), i(e, l);
		},
		d(t) {
			t && a(e);
		}
	};
}
function at(n) {
	let e, l;
	return {
		c() {
			(e = g('h2')), (l = z('Misc.: Troll         ')), this.h();
		},
		l(t) {
			e = p(t, 'H2', { class: !0 });
			var s = f(e);
			(l = I(s, 'Misc.: Troll         ')), s.forEach(a), this.h();
		},
		h() {
			r(e, 'class', 'my-0.5 text-gray-400');
		},
		m(t, s) {
			x(t, e, s), i(e, l);
		},
		d(t) {
			t && a(e);
		}
	};
}
function it(n) {
	let e, l;
	return {
		c() {
			(e = g('h2')), (l = z('Tool-Assisted: Pit   ')), this.h();
		},
		l(t) {
			e = p(t, 'H2', { class: !0 });
			var s = f(e);
			(l = I(s, 'Tool-Assisted: Pit   ')), s.forEach(a), this.h();
		},
		h() {
			r(e, 'class', 'my-0.5 text-gray-400');
		},
		m(t, s) {
			x(t, e, s), i(e, l);
		},
		d(t) {
			t && a(e);
		}
	};
}
function nt(n) {
	let e, l;
	return {
		c() {
			(e = g('h2')), (l = z('Tool-Assisted: Kaizo ')), this.h();
		},
		l(t) {
			e = p(t, 'H2', { class: !0 });
			var s = f(e);
			(l = I(s, 'Tool-Assisted: Kaizo ')), s.forEach(a), this.h();
		},
		h() {
			r(e, 'class', 'my-0.5 text-gray-400');
		},
		m(t, s) {
			x(t, e, s), i(e, l);
		},
		d(t) {
			t && a(e);
		}
	};
}
function ot(n) {
	let e, l;
	return {
		c() {
			(e = g('h2')), (l = z('Kaizo: Expert        ')), this.h();
		},
		l(t) {
			e = p(t, 'H2', { class: !0 });
			var s = f(e);
			(l = I(s, 'Kaizo: Expert        ')), s.forEach(a), this.h();
		},
		h() {
			r(e, 'class', 'my-0.5 text-pink-400');
		},
		m(t, s) {
			x(t, e, s), i(e, l);
		},
		d(t) {
			t && a(e);
		}
	};
}
function ct(n) {
	let e, l;
	return {
		c() {
			(e = g('h2')), (l = z('Kaizo: Intermediate  ')), this.h();
		},
		l(t) {
			e = p(t, 'H2', { class: !0 });
			var s = f(e);
			(l = I(s, 'Kaizo: Intermediate  ')), s.forEach(a), this.h();
		},
		h() {
			r(e, 'class', 'my-0.5 text-violet-400');
		},
		m(t, s) {
			x(t, e, s), i(e, l);
		},
		d(t) {
			t && a(e);
		}
	};
}
function ht(n) {
	let e, l;
	return {
		c() {
			(e = g('h2')), (l = z('Kaizo: Beginner      ')), this.h();
		},
		l(t) {
			e = p(t, 'H2', { class: !0 });
			var s = f(e);
			(l = I(s, 'Kaizo: Beginner      ')), s.forEach(a), this.h();
		},
		h() {
			r(e, 'class', 'my-0.5 text-sky-400');
		},
		m(t, s) {
			x(t, e, s), i(e, l);
		},
		d(t) {
			t && a(e);
		}
	};
}
function ft(n) {
	let e, l;
	return {
		c() {
			(e = g('h2')), (l = z('Standard: Very Hard  ')), this.h();
		},
		l(t) {
			e = p(t, 'H2', { class: !0 });
			var s = f(e);
			(l = I(s, 'Standard: Very Hard  ')), s.forEach(a), this.h();
		},
		h() {
			r(e, 'class', 'my-0.5 text-red-400');
		},
		m(t, s) {
			x(t, e, s), i(e, l);
		},
		d(t) {
			t && a(e);
		}
	};
}
function ut(n) {
	let e, l;
	return {
		c() {
			(e = g('h2')), (l = z('Standard: Hard       ')), this.h();
		},
		l(t) {
			e = p(t, 'H2', { class: !0 });
			var s = f(e);
			(l = I(s, 'Standard: Hard       ')), s.forEach(a), this.h();
		},
		h() {
			r(e, 'class', 'my-0.5 text-orange-400');
		},
		m(t, s) {
			x(t, e, s), i(e, l);
		},
		d(t) {
			t && a(e);
		}
	};
}
function dt(n) {
	let e, l;
	return {
		c() {
			(e = g('h2')), (l = z('Standard: Normal     ')), this.h();
		},
		l(t) {
			e = p(t, 'H2', { class: !0 });
			var s = f(e);
			(l = I(s, 'Standard: Normal     ')), s.forEach(a), this.h();
		},
		h() {
			r(e, 'class', 'my-0.5 text-amber-400');
		},
		m(t, s) {
			x(t, e, s), i(e, l);
		},
		d(t) {
			t && a(e);
		}
	};
}
function _t(n) {
	let e, l;
	return {
		c() {
			(e = g('h2')), (l = z('Standard: Easy       ')), this.h();
		},
		l(t) {
			e = p(t, 'H2', { class: !0 });
			var s = f(e);
			(l = I(s, 'Standard: Easy       ')), s.forEach(a), this.h();
		},
		h() {
			r(e, 'class', 'my-0.5 text-green-400');
		},
		m(t, s) {
			x(t, e, s), i(e, l);
		},
		d(t) {
			t && a(e);
		}
	};
}
function Ne(n) {
	let e;
	function l(o, d) {
		if (o[11] === 0) return _t;
		if (o[11] === 1) return dt;
		if (o[11] === 2) return ut;
		if (o[11] === 3) return ft;
		if (o[11] === 4) return ht;
		if (o[11] === 5) return ct;
		if (o[11] === 6) return ot;
		if (o[11] === 7) return nt;
		if (o[11] === 8) return it;
		if (o[11] === 9) return at;
	}
	let t = l(n),
		s = t && t(n);
	return {
		c() {
			s && s.c(), (e = ee());
		},
		l(o) {
			s && s.l(o), (e = ee());
		},
		m(o, d) {
			s && s.m(o, d), x(o, e, d);
		},
		p(o, d) {
			t !== (t = l(o)) && (s && s.d(1), (s = t && t(o)), s && (s.c(), s.m(e.parentNode, e)));
		},
		d(o) {
			s && s.d(o), o && a(e);
		}
	};
}
function Be(n) {
	let e;
	return {
		c() {
			e = z(',\xA0');
		},
		l(l) {
			e = I(l, ',\xA0');
		},
		m(l, t) {
			x(l, e, t);
		},
		d(l) {
			l && a(e);
		}
	};
}
function je(n, e) {
	let l,
		t = e[8].name + '',
		s,
		o,
		d,
		c,
		v,
		y = e[10] !== e[5].authors.length - 1 && Be();
	return {
		key: n,
		first: null,
		c() {
			(l = g('a')), (s = z(t)), (c = V()), y && y.c(), (v = ee()), this.h();
		},
		l(w) {
			l = p(w, 'A', { class: !0, style: !0, href: !0, target: !0 });
			var E = f(l);
			(s = I(E, t)), E.forEach(a), (c = T(w)), y && y.l(w), (v = ee()), this.h();
		},
		h() {
			r(l, 'class', 'font-bold hover:underline'),
				r(l, 'style', (o = e[8].style)),
				r(l, 'href', (d = 'https://www.smwcentral.net/?p=profile&id=' + e[8].id)),
				r(l, 'target', '_blank'),
				(this.first = l);
		},
		m(w, E) {
			x(w, l, E), i(l, s), x(w, c, E), y && y.m(w, E), x(w, v, E);
		},
		p(w, E) {
			(e = w),
				E & 2 && t !== (t = e[8].name + '') && ae(s, t),
				E & 2 && o !== (o = e[8].style) && r(l, 'style', o),
				E & 2 &&
					d !== (d = 'https://www.smwcentral.net/?p=profile&id=' + e[8].id) &&
					r(l, 'href', d),
				e[10] !== e[5].authors.length - 1
					? y || ((y = Be()), y.c(), y.m(v.parentNode, v))
					: y && (y.d(1), (y = null));
		},
		d(w) {
			w && a(l), w && a(c), y && y.d(w), w && a(v);
		}
	};
}
function Le(n, e) {
	let l,
		t,
		s,
		o,
		d,
		c,
		v,
		y = e[5].name + '',
		w,
		E,
		_,
		u,
		h,
		H,
		N,
		L,
		m = [],
		O = new Map(),
		R,
		M,
		q,
		A,
		W,
		_e,
		te = e[5].downloads + '',
		ie,
		me,
		F,
		K,
		le,
		ve,
		se = e[5].rating + '',
		ne,
		ge,
		G,
		P,
		Q,
		pe,
		re = e[5].length + '',
		oe,
		ce,
		B = e[5].demo && Ve(),
		j = e[5].featured && Te(),
		U = e[5].types,
		D = [];
	for (let k = 0; k < U.length; k += 1) D[k] = Ne(De(e, U, k));
	let he = e[5].authors;
	const ye = (k) => k[8].id;
	for (let k = 0; k < he.length; k += 1) {
		let S = Ie(e, he, k),
			b = ye(S);
		O.set(b, (m[k] = je(b, S)));
	}
	return {
		key: n,
		first: null,
		c() {
			(l = g('div')),
				(t = g('a')),
				(s = g('img')),
				(d = V()),
				(c = g('div')),
				(v = g('h1')),
				(w = z(y)),
				(E = V()),
				(_ = g('div')),
				B && B.c(),
				(u = V()),
				j && j.c(),
				(h = V());
			for (let k = 0; k < D.length; k += 1) D[k].c();
			(H = V()),
				(N = g('p')),
				(L = z(`By\xA0
                `));
			for (let k = 0; k < m.length; k += 1) m[k].c();
			(R = V()),
				(M = g('div')),
				(q = g('span')),
				(A = Z('svg')),
				(W = Z('path')),
				(_e = V()),
				(ie = z(te)),
				(me = V()),
				(F = g('span')),
				(K = Z('svg')),
				(le = Z('path')),
				(ve = V()),
				(ne = z(se)),
				(ge = V()),
				(G = g('span')),
				(P = Z('svg')),
				(Q = Z('path')),
				(pe = V()),
				(oe = z(re)),
				this.h();
		},
		l(k) {
			l = p(k, 'DIV', { class: !0 });
			var S = f(l);
			t = p(S, 'A', { class: !0, href: !0, target: !0 });
			var b = f(t);
			(s = p(b, 'IMG', { class: !0, src: !0, alt: !0 })),
				(d = T(b)),
				(c = p(b, 'DIV', { class: !0 }));
			var C = f(c);
			v = p(C, 'H1', { class: !0 });
			var ke = f(v);
			(w = I(ke, y)), ke.forEach(a), (E = T(C)), (_ = p(C, 'DIV', { class: !0 }));
			var X = f(_);
			B && B.l(X), (u = T(X)), j && j.l(X), (h = T(X));
			for (let J = 0; J < D.length; J += 1) D[J].l(X);
			X.forEach(a), (H = T(C)), (N = p(C, 'P', { class: !0 }));
			var we = f(N);
			L = I(
				we,
				`By\xA0
                `
			);
			for (let J = 0; J < m.length; J += 1) m[J].l(we);
			we.forEach(a), C.forEach(a), (R = T(b)), (M = p(b, 'DIV', { class: !0 }));
			var Y = f(M);
			q = p(Y, 'SPAN', { class: !0 });
			var fe = f(q);
			A = $(fe, 'svg', { class: !0, fill: !0, viewBox: !0, xmlns: !0 });
			var Ee = f(A);
			(W = $(Ee, 'path', { 'fill-rule': !0, d: !0, 'clip-rule': !0 })),
				f(W).forEach(a),
				Ee.forEach(a),
				(_e = T(fe)),
				(ie = I(fe, te)),
				fe.forEach(a),
				(me = T(Y)),
				(F = p(Y, 'SPAN', { class: !0 }));
			var ue = f(F);
			K = $(ue, 'svg', { class: !0, fill: !0, viewBox: !0, xmlns: !0 });
			var He = f(K);
			(le = $(He, 'path', { d: !0 })),
				f(le).forEach(a),
				He.forEach(a),
				(ve = T(ue)),
				(ne = I(ue, se)),
				ue.forEach(a),
				(ge = T(Y)),
				(G = p(Y, 'SPAN', { class: !0 }));
			var de = f(G);
			P = $(de, 'svg', { class: !0, fill: !0, viewBox: !0, xmlns: !0 });
			var Se = f(P);
			(Q = $(Se, 'path', { 'fill-rule': !0, d: !0, 'clip-rule': !0 })),
				f(Q).forEach(a),
				Se.forEach(a),
				(pe = T(de)),
				(oe = I(de, re)),
				de.forEach(a),
				Y.forEach(a),
				b.forEach(a),
				S.forEach(a),
				this.h();
		},
		h() {
			r(s, 'class', 'w-full object-cover object-center [image-rendering:pixelated]'),
				xe(s.src, (o = e[5].screenshot)) || r(s, 'src', o),
				r(s, 'alt', 'Preview'),
				r(v, 'class', 'title-font text-lg font-bold text-white'),
				r(_, 'class', 'mb-2 tracking-widest text-xs title-font font-bold'),
				r(N, 'class', 'mb-12 inline-flex flex-wrap text-sm'),
				r(c, 'class', 'p-4 flex flex-col'),
				r(W, 'fill-rule', 'evenodd'),
				r(
					W,
					'd',
					'M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
				),
				r(W, 'clip-rule', 'evenodd'),
				r(A, 'class', 'w-4 h-4 mr-0.5'),
				r(A, 'fill', 'currentColor'),
				r(A, 'viewBox', '0 0 20 20'),
				r(A, 'xmlns', 'http://www.w3.org/2000/svg'),
				r(q, 'class', 'inline-flex items-center mx-1.5'),
				r(
					le,
					'd',
					'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
				),
				r(K, 'class', 'w-4 h-4 mr-0.5'),
				r(K, 'fill', 'currentColor'),
				r(K, 'viewBox', '0 0 20 20'),
				r(K, 'xmlns', 'http://www.w3.org/2000/svg'),
				r(F, 'class', 'inline-flex items-center mx-1.5'),
				r(Q, 'fill-rule', 'evenodd'),
				r(
					Q,
					'd',
					'M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z'
				),
				r(Q, 'clip-rule', 'evenodd'),
				r(P, 'class', 'w-4 h-4 mr-0.5'),
				r(P, 'fill', 'currentColor'),
				r(P, 'viewBox', '0 0 20 20'),
				r(P, 'xmlns', 'http://www.w3.org/2000/svg'),
				r(G, 'class', 'inline-flex items-center mx-1.5'),
				r(M, 'class', 'absolute bottom-6 left-0 right-0 flex justify-center text-ms text-gray-500'),
				r(
					t,
					'class',
					'block h-full bg-gray-800 hover:bg-gray-700 duration-200 overflow-hidden rounded-lg drop-shadow-md hover:scale-105 relative'
				),
				r(t, 'href', (ce = 'https://www.smwcentral.net/?p=section&a=details&id=' + e[5].id)),
				r(t, 'target', '_blank'),
				r(l, 'class', 'p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'),
				(this.first = l);
		},
		m(k, S) {
			x(k, l, S),
				i(l, t),
				i(t, s),
				i(t, d),
				i(t, c),
				i(c, v),
				i(v, w),
				i(c, E),
				i(c, _),
				B && B.m(_, null),
				i(_, u),
				j && j.m(_, null),
				i(_, h);
			for (let b = 0; b < D.length; b += 1) D[b].m(_, null);
			i(c, H), i(c, N), i(N, L);
			for (let b = 0; b < m.length; b += 1) m[b].m(N, null);
			i(t, R),
				i(t, M),
				i(M, q),
				i(q, A),
				i(A, W),
				i(q, _e),
				i(q, ie),
				i(M, me),
				i(M, F),
				i(F, K),
				i(K, le),
				i(F, ve),
				i(F, ne),
				i(M, ge),
				i(M, G),
				i(G, P),
				i(P, Q),
				i(G, pe),
				i(G, oe);
		},
		p(k, S) {
			if (
				((e = k),
				S & 2 && !xe(s.src, (o = e[5].screenshot)) && r(s, 'src', o),
				S & 2 && y !== (y = e[5].name + '') && ae(w, y),
				e[5].demo ? B || ((B = Ve()), B.c(), B.m(_, u)) : B && (B.d(1), (B = null)),
				e[5].featured ? j || ((j = Te()), j.c(), j.m(_, h)) : j && (j.d(1), (j = null)),
				S & 2)
			) {
				U = e[5].types;
				let b;
				for (b = 0; b < U.length; b += 1) {
					const C = De(e, U, b);
					D[b] ? D[b].p(C, S) : ((D[b] = Ne(C)), D[b].c(), D[b].m(_, null));
				}
				for (; b < D.length; b += 1) D[b].d(1);
				D.length = U.length;
			}
			S & 2 && ((he = e[5].authors), (m = Fe(m, S, ye, 1, e, he, O, N, Ge, je, null, Ie))),
				S & 2 && te !== (te = e[5].downloads + '') && ae(ie, te),
				S & 2 && se !== (se = e[5].rating + '') && ae(ne, se),
				S & 2 && re !== (re = e[5].length + '') && ae(oe, re),
				S & 2 &&
					ce !== (ce = 'https://www.smwcentral.net/?p=section&a=details&id=' + e[5].id) &&
					r(t, 'href', ce);
		},
		d(k) {
			k && a(l), B && B.d(), j && j.d(), Ue(D, k);
			for (let S = 0; S < m.length; S += 1) m[S].d();
		}
	};
}
function Ae(n) {
	let e, l, t, s, o, d;
	return {
		c() {
			(e = g('div')),
				(l = g('div')),
				(t = V()),
				(s = g('div')),
				(o = V()),
				(d = g('div')),
				this.h();
		},
		l(c) {
			e = p(c, 'DIV', { class: !0 });
			var v = f(e);
			(l = p(v, 'DIV', { class: !0 })),
				f(l).forEach(a),
				(t = T(v)),
				(s = p(v, 'DIV', { class: !0 })),
				f(s).forEach(a),
				(o = T(v)),
				(d = p(v, 'DIV', { class: !0 })),
				f(d).forEach(a),
				v.forEach(a),
				this.h();
		},
		h() {
			r(l, 'class', 'bounce1 svelte-1bbotj8'),
				r(s, 'class', 'bounce2 svelte-1bbotj8'),
				r(d, 'class', 'bounce3 svelte-1bbotj8'),
				r(e, 'class', 'spinner svelte-1bbotj8');
		},
		m(c, v) {
			x(c, e, v), i(e, l), i(e, t), i(e, s), i(e, o), i(e, d);
		},
		d(c) {
			c && a(e);
		}
	};
}
function mt(n) {
	let e,
		l,
		t,
		s = [],
		o = new Map(),
		d,
		c,
		v,
		y,
		w = n[1];
	const E = (u) => u[5].id;
	for (let u = 0; u < w.length; u += 1) {
		let h = ze(n, w, u),
			H = E(h);
		o.set(H, (s[u] = Le(H, h)));
	}
	(c = new rt({ props: { hasMore: n[2].length, window: !0 } })), c.$on('loadMore', n[4]);
	let _ = n[2].length && Ae();
	return {
		c() {
			(e = g('section')), (l = g('div')), (t = g('div'));
			for (let u = 0; u < s.length; u += 1) s[u].c();
			(d = V()), Xe(c.$$.fragment), (v = V()), _ && _.c(), this.h();
		},
		l(u) {
			e = p(u, 'SECTION', { class: !0 });
			var h = f(e);
			l = p(h, 'DIV', { class: !0 });
			var H = f(l);
			t = p(H, 'DIV', { class: !0 });
			var N = f(t);
			for (let L = 0; L < s.length; L += 1) s[L].l(N);
			(d = T(N)),
				Ye(c.$$.fragment, N),
				N.forEach(a),
				(v = T(H)),
				_ && _.l(H),
				H.forEach(a),
				h.forEach(a),
				this.h();
		},
		h() {
			r(t, 'class', 'flex flex-wrap justify-center'),
				r(l, 'class', 'container px-5 py-24 mx-auto'),
				r(e, 'class', 'text-gray-400 bg-gray-900 body-font');
		},
		m(u, h) {
			x(u, e, h), i(e, l), i(l, t);
			for (let H = 0; H < s.length; H += 1) s[H].m(t, null);
			i(t, d), Ze(c, t, null), i(l, v), _ && _.m(l, null), (y = !0);
		},
		p(u, [h]) {
			h & 2 && ((w = u[1]), (s = Fe(s, h, E, 1, u, w, o, t, Ge, Le, d, ze)));
			const H = {};
			h & 4 && (H.hasMore = u[2].length),
				c.$set(H),
				u[2].length ? _ || ((_ = Ae()), _.c(), _.m(l, null)) : _ && (_.d(1), (_ = null));
		},
		i(u) {
			y || ($e(c.$$.fragment, u), (y = !0));
		},
		o(u) {
			et(c.$$.fragment, u), (y = !1);
		},
		d(u) {
			u && a(e);
			for (let h = 0; h < s.length; h += 1) s[h].d();
			tt(c), _ && _.d();
		}
	};
}
const Ke = 32;
function vt(n, e, l) {
	let t = 0,
		s = [];
	qe(async () => {
		const v = await fetch('https://raw.githubusercontent.com/NNBnh/smwc-api/main/smw.json');
		l(3, (s = await v.json()));
	});
	let o = [],
		d = [];
	const c = () => l(0, t++, t);
	return (
		(n.$$.update = () => {
			n.$$.dirty & 15 && (l(2, (d = s.splice(Ke * t, Ke * (t + 1)))), l(1, (o = [...o, ...d])));
		}),
		[t, o, d, s, c]
	);
}
class pt extends Pe {
	constructor(e) {
		super();
		Ce(this, e, vt, mt, Oe, {});
	}
}
export { pt as default };

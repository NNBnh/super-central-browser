import {
	S as V,
	i as j,
	s as L,
	F as O,
	e as p,
	k as D,
	t as H,
	c as _,
	a as h,
	d as s,
	m as M,
	h as k,
	b as o,
	g as E,
	G as i,
	H as P,
	I as R,
	J as q,
	r as G,
	p as J
} from '../chunks/index-974193a7.js';
function Y(n) {
	let a, m, f, v, x, c, l, y, $, u, d, N, B, z, g;
	const A = n[3].default,
		t = O(A, n, n[2], null);
	return {
		c() {
			(a = p('header')),
				(m = p('div')),
				(f = p('a')),
				(v = D()),
				t && t.c(),
				(x = D()),
				(c = p('footer')),
				(l = p('div')),
				(y = p('p')),
				($ = D()),
				(u = p('p')),
				(d = p('a')),
				(N = H('NNB')),
				(B = H(`
      \xA9 2022-`)),
				(z = H(n[1])),
				this.h();
		},
		l(e) {
			a = _(e, 'HEADER', { class: !0 });
			var r = h(a);
			m = _(r, 'DIV', { class: !0 });
			var C = h(m);
			f = _(C, 'A', { class: !0, href: !0 });
			var S = h(f);
			S.forEach(s),
				C.forEach(s),
				r.forEach(s),
				(v = M(e)),
				t && t.l(e),
				(x = M(e)),
				(c = _(e, 'FOOTER', { class: !0 }));
			var F = h(c);
			l = _(F, 'DIV', { class: !0 });
			var w = h(l);
			y = _(w, 'P', { class: !0 });
			var T = h(y);
			T.forEach(s), ($ = M(w)), (u = _(w, 'P', { class: !0 }));
			var b = h(u);
			d = _(b, 'A', { class: !0, href: !0, target: !0 });
			var I = h(d);
			(N = k(I, 'NNB')),
				I.forEach(s),
				(B = k(
					b,
					`
      \xA9 2022-`
				)),
				(z = k(b, n[1])),
				b.forEach(s),
				w.forEach(s),
				F.forEach(s),
				this.h();
		},
		h() {
			o(f, 'class', 'flex title-font font-medium items-center text-xl text-white mb-4 md:mb-0'),
				o(f, 'href', '/super-central-browser'),
				o(m, 'class', 'container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'),
				o(a, 'class', 'text-gray-400 bg-sky-500 drop-shadow-md body-font'),
				o(
					y,
					'class',
					'ml-3 flex title-font font-medium items-center md:justify-start justify-center text-xl text-grey'
				),
				o(d, 'class', 'text-gray-500 ml-1'),
				o(d, 'href', 'https://NNBnh.github.io'),
				o(d, 'target', '_blank'),
				o(
					u,
					'class',
					'text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4'
				),
				o(l, 'class', 'container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'),
				o(c, 'class', 'text-gray-400 bg-gray-900 body-font');
		},
		m(e, r) {
			E(e, a, r),
				i(a, m),
				i(m, f),
				(f.innerHTML = n[0]),
				E(e, v, r),
				t && t.m(e, r),
				E(e, x, r),
				E(e, c, r),
				i(c, l),
				i(l, y),
				(y.innerHTML = n[0]),
				i(l, $),
				i(l, u),
				i(u, d),
				i(d, N),
				i(u, B),
				i(u, z),
				(g = !0);
		},
		p(e, [r]) {
			t && t.p && (!g || r & 4) && P(t, A, e, e[2], g ? q(A, e[2], r, null) : R(e[2]), null);
		},
		i(e) {
			g || (G(t, e), (g = !0));
		},
		o(e) {
			J(t, e), (g = !1);
		},
		d(e) {
			e && s(a), e && s(v), t && t.d(e), e && s(x), e && s(c);
		}
	};
}
function K(n, a, m) {
	let { $$slots: f = {}, $$scope: v } = a;
	const x = `
    <svg class="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
    <h1>Super Central Browser</h1>
  `,
		c = new Date().getFullYear();
	return (
		(n.$$set = (l) => {
			'$$scope' in l && m(2, (v = l.$$scope));
		}),
		[x, c, v, f]
	);
}
class U extends V {
	constructor(a) {
		super();
		j(this, a, K, Y, L, {});
	}
}
export { U as default };

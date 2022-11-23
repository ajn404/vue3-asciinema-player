import { ref as l, onMounted as i, openBlock as c, createElementBlock as _, createElementVNode as p, Fragment as m, renderList as u } from "vue";
const f = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [o, n] of e)
    r[o] = n;
  return r;
}, y = { class: "starry-sky-bg" }, h = { class: "stars" }, g = {
  __name: "index",
  props: {
    starsCount: {
      type: [Number, String],
      default: () => 800
    },
    distance: {
      type: [Number, String],
      default: () => 800
    }
  },
  setup(t) {
    const e = t, r = l();
    return i(() => {
      r.value.forEach((n) => {
        let a = 0.1 + Math.random() * 1, d = e.distance + Math.random() * 300;
        n.style.transformOrigin = `0 0 ${d}px`, n.style.transform = `translate3d(0,0,-${d}px) rotateY(${Math.random() * 360}deg) rotateX(${Math.random() * -50}deg) scale(${a},${a})`;
      });
    }), (o, n) => (c(), _("div", y, [
      p("div", h, [
        (c(!0), _(m, null, u(t.starsCount, (a) => (c(), _("div", {
          key: a,
          class: "star",
          ref_for: !0,
          ref_key: "star",
          ref: r
        }))), 128))
      ])
    ]));
  }
}, s = /* @__PURE__ */ f(g, [["__scopeId", "data-v-58e5eed5"]]);
s.install = (t) => {
  t.component(s.__name || s.__name, s);
};
const v = [s], x = (t) => {
  v.forEach((e) => {
    t.component(e.__name, e);
  });
}, $ = {
  install: x
};
export {
  $ as default,
  s as player
};

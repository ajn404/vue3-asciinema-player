(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n["Vue3-asciinema-player"]={},n.Vue))})(this,function(n,e){"use strict";const m="",i=(t,r)=>{const o=t.__vccOpts||t;for(const[l,a]of r)o[l]=a;return o},_={class:"starry-sky-bg"},f={class:"stars"},s=i({__name:"index",props:{starsCount:{type:[Number,String],default:()=>800},distance:{type:[Number,String],default:()=>800}},setup(t){const r=t,o=e.ref();return e.onMounted(()=>{o.value.forEach(a=>{let c=.1+Math.random()*1,d=r.distance+Math.random()*300;a.style.transformOrigin=`0 0 ${d}px`,a.style.transform=`translate3d(0,0,-${d}px) rotateY(${Math.random()*360}deg) rotateX(${Math.random()*-50}deg) scale(${c},${c})`})}),(l,a)=>(e.openBlock(),e.createElementBlock("div",_,[e.createElementVNode("div",f,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.starsCount,c=>(e.openBlock(),e.createElementBlock("div",{key:c,class:"star",ref_for:!0,ref_key:"star",ref:o}))),128))])]))}},[["__scopeId","data-v-58e5eed5"]]);s.install=t=>{t.component(s.__name||s.__name,s)};const p=[s],u={install:t=>{p.forEach(r=>{t.component(r.__name,r)})}};n.default=u,n.player=s,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
import{S as V,i as _,s as B,d as E,v as C,bG as z,bH as D,bI as O,bJ as S,w as G,k as I,l as R,p as h,m as N,t as x,n as F,q as p,x as b,y as w,z as $,ac as g,C as v,ad as q,E as H,F as J,G as K,bK as L,bL as M,bM as A}from"./vendor.be1a9245.js";const k="src/lib/components/general/Toast.svelte";function T(s){let e,i,t,l,c,n,r;const f=s[5].default,a=G(f,s,s[4],null),o={c:function(){e=b("div"),i=b("div"),t=b("div"),a&&a.c(),this.h()},l:function(u){e=w(u,"DIV",{class:!0});var d=$(e);i=w(d,"DIV",{class:!0});var j=$(i);t=w(j,"DIV",{class:!0});var P=$(t);a&&a.l(P),P.forEach(p),j.forEach(p),d.forEach(p),this.h()},h:function(){g(t,"class",l=s[1]+" bottom-0 pointer-events-auto flex absolute py-2 px-4 z-30 mb-4 content-between mx-auto rounded items-center shadow-sm h-12"),v(t,k,21,6,632),g(i,"class","text-white fixed w-full h-full flex items-center justify-center pointer-events-none"),v(i,k,20,4,528),g(e,"class","fixed w-full h-full top-0 left-0 z-30 pointer-events-none"),v(e,k,19,2,452)},m:function(u,d){R(u,e,d),q(e,i),q(i,t),a&&a.m(t,null),r=!0},p:function(u,d){s=u,a&&a.p&&(!r||d&16)&&H(a,f,s,s[4],r?K(f,s[4],d,null):J(s[4]),null),(!r||d&2&&l!==(l=s[1]+" bottom-0 pointer-events-auto flex absolute py-2 px-4 z-30 mb-4 content-between mx-auto rounded items-center shadow-sm h-12"))&&g(t,"class",l)},i:function(u){r||(h(a,u),L(()=>{r&&(n&&n.end(1),c=M(t,D,{duration:100,easing:O}),c.start())}),r=!0)},o:function(u){x(a,u),c&&c.invalidate(),n=A(t,z,{duration:100,easing:S,delay:150}),r=!1},d:function(u){u&&p(e),a&&a.d(u),u&&n&&n.end()}};return E("SvelteRegisterBlock",{block:o,id:T.name,type:"if",source:"(19:0) {#if running}",ctx:s}),o}function y(s){let e,i,t=s[0]&&T(s);const l={c:function(){t&&t.c(),e=I()},l:function(n){t&&t.l(n),e=I()},m:function(n,r){t&&t.m(n,r),R(n,e,r),i=!0},p:function(n,[r]){n[0]?t?(t.p(n,r),r&1&&h(t,1)):(t=T(n),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(N(),x(t,1,1,()=>{t=null}),F())},i:function(n){i||(h(t),i=!0)},o:function(n){x(t),i=!1},d:function(n){t&&t.d(n),n&&p(e)}};return E("SvelteRegisterBlock",{block:l,id:y.name,type:"component",source:"",ctx:s}),l}function Q(s,e,i){let{$$slots:t={},$$scope:l}=e;C("Toast",t,["default"]);let{timeout:c=5e3}=e,{running:n=!1}=e,{background:r="bg-red-800"}=e,f;const a=["timeout","running","background"];return Object.keys(e).forEach(o=>{!~a.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<Toast> was created with unknown prop '${o}'`)}),s.$$set=o=>{"timeout"in o&&i(2,c=o.timeout),"running"in o&&i(0,n=o.running),"background"in o&&i(1,r=o.background),"$$scope"in o&&i(4,l=o.$$scope)},s.$capture_state=()=>({fade:z,scale:D,quadIn:O,quadOut:S,timeout:c,running:n,background:r,currentTimeout:f}),s.$inject_state=o=>{"timeout"in o&&i(2,c=o.timeout),"running"in o&&i(0,n=o.running),"background"in o&&i(1,r=o.background),"currentTimeout"in o&&i(3,f=o.currentTimeout)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),s.$$.update=()=>{s.$$.dirty&13&&(f&&clearTimeout(f),n&&i(3,f=setTimeout(()=>{i(0,n=!1)},c)))},[n,r,c,f,l,t]}class W extends V{constructor(e){super(e),_(this,e,Q,y,B,{timeout:2,running:0,background:1}),E("SvelteRegisterComponent",{component:this,tagName:"Toast",options:e,id:y.name})}get timeout(){throw new Error("<Toast>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set timeout(e){throw new Error("<Toast>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get running(){throw new Error("<Toast>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set running(e){throw new Error("<Toast>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get background(){throw new Error("<Toast>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set background(e){throw new Error("<Toast>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{W as T};
//# sourceMappingURL=Toast.ea9e6037.js.map

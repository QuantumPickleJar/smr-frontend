import{S as et,i as ot,s as nt,d as k,v as it,ak as J,a1 as dt,aq as Q,e as w,J as _,b as I,g as v,h as E,L as N,k as X,j as d,N as h,m as x,n as A,O as P,Q as y,Z as st,r as M,t as R,R as O,u as at,x as bt,H as D,W,M as q,X as Y,Y as Z,f as G}from"./vendor.4474e4ea.js";import{F as ct}from"./FicsitCard.7da80b16.js";import{i as K}from"./launcher.dcacdd57.js";import{a as V}from"./formatting.28d70897.js";import{C as F,a as tt,O as lt}from"./CompatibilityModal.62774677.js";import{T as rt}from"./TagList.898f2e85.js";const ht="src/lib/components/mods/compatibility/CompatibilityButton.svelte";function L(i){let t,e,s,a,n,o,c,r;e=new F({props:{compatibility:i[0]?.EA},$$inline:!0}),a=new F({props:{compatibility:i[0]?.EXP,EXP:!0},$$inline:!0});const l={c:function(){t=w("button"),_(e.$$.fragment),s=I(),_(a.$$.fragment),this.h()},l:function(f){t=v(f,"BUTTON",{class:!0,title:!0});var m=E(t);N(e.$$.fragment,m),s=X(m),N(a.$$.fragment,m),m.forEach(d),this.h()},h:function(){h(t,"class","btn text-xs px-1 py-0 variant-soft-surface min-w-0 m-0"),h(t,"title",n=i[2]("compatibility-info.button")),x(t,ht,25,0,593)},m:function(f,m){A(f,t,m),P(e,t,null),y(t,s),P(a,t,null),o=!0,c||(r=st(t,"click",i[3],!1,!1,!1,!1),c=!0)},p:function(f,[m]){const u={};m&1&&(u.compatibility=f[0]?.EA),e.$set(u);const g={};m&1&&(g.compatibility=f[0]?.EXP),a.$set(g),(!o||m&4&&n!==(n=f[2]("compatibility-info.button")))&&h(t,"title",n)},i:function(f){o||(M(e.$$.fragment,f),M(a.$$.fragment,f),o=!0)},o:function(f){R(e.$$.fragment,f),R(a.$$.fragment,f),o=!1},d:function(f){f&&d(t),O(e),O(a),c=!1,r()}};return k("SvelteRegisterBlock",{block:l,id:L.name,type:"component",source:"",ctx:i}),l}function gt(i,t,e){let s,a=at,n=()=>(a(),a=bt(l,u=>e(2,s=u)),l);i.$$.on_destroy.push(()=>a());let{$$slots:o={},$$scope:c}=t;it("CompatibilityButton",o,[]);let{compatibility:r}=t;const{t:l}=J();dt(l,"t"),n();const p=Q(),f=()=>{p.trigger({type:"component",component:{ref:tt,props:{compatibility:r}}})};i.$$.on_mount.push(function(){r===void 0&&!("compatibility"in t||i.$$.bound[i.$$.props.compatibility])&&console.warn("<CompatibilityButton> was created without expected prop 'compatibility'")});const m=["compatibility"];return Object.keys(t).forEach(u=>{!~m.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<CompatibilityButton> was created with unknown prop '${u}'`)}),i.$$set=u=>{"compatibility"in u&&e(0,r=u.compatibility)},i.$capture_state=()=>({CompatibilityIcon:F,getTranslate:J,getModalStore:Q,CompatibilityModal:tt,compatibility:r,t:l,modalStore:p,openCompatibility:f,$t:s}),i.$inject_state=u=>{"compatibility"in u&&e(0,r=u.compatibility)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),[r,l,s,f]}class ft extends et{constructor(t){super(t),ot(this,t,gt,L,nt,{compatibility:0,t:1}),k("SvelteRegisterComponent",{component:this,tagName:"CompatibilityButton",options:t,id:L.name})}get compatibility(){throw new Error("<CompatibilityButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<CompatibilityButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const C="src/lib/components/mods/ModCard.svelte";function ut(i){let t,e,s,a="visibility",n=V(i[0].views)+"",o,c,r,l,p="download",f=V(i[0].downloads)+"",m,u,g,S;g=new ft({props:{compatibility:i[0].compatibility},$$inline:!0});const H={c:function(){t=w("div"),e=w("span"),s=w("span"),s.textContent=a,o=W(n),c=I(),r=w("span"),l=w("span"),l.textContent=p,m=W(f),u=I(),_(g.$$.fragment),this.h()},l:function($){t=v($,"DIV",{slot:!0,class:!0});var b=E(t);e=v(b,"SPAN",{});var j=E(e);s=v(j,"SPAN",{class:!0,"data-svelte-h":!0}),q(s)!=="svelte-ejfr6v"&&(s.textContent=a),o=Y(j,n),j.forEach(d),c=X(b),r=v(b,"SPAN",{});var T=E(r);l=v(T,"SPAN",{class:!0,"data-svelte-h":!0}),q(l)!=="svelte-4dmd5j"&&(l.textContent=p),m=Y(T,f),T.forEach(d),u=X(b),N(g.$$.fragment,b),b.forEach(d),this.h()},h:function(){h(s,"class","material-icons align-middle text-sm mr-1"),x(s,C,31,10,838),x(e,C,31,4,832),h(l,"class","material-icons align-middle text-sm mr-1"),x(l,C,32,10,953),x(r,C,32,4,947),h(t,"slot","stats"),h(t,"class","flex flex-row items-center gap-2"),x(t,C,30,2,768)},m:function($,b){A($,t,b),y(t,e),y(e,s),y(e,o),y(t,c),y(t,r),y(r,l),y(r,m),y(t,u),P(g,t,null),S=!0},p:function($,b){(!S||b&1)&&n!==(n=V($[0].views)+"")&&Z(o,n),(!S||b&1)&&f!==(f=V($[0].downloads)+"")&&Z(m,f);const j={};b&1&&(j.compatibility=$[0].compatibility),g.$set(j)},i:function($){S||(M(g.$$.fragment,$),S=!0)},o:function($){R(g.$$.fragment,$),S=!1},d:function($){$&&d(t),O(g)}};return k("SvelteRegisterBlock",{block:H,id:ut.name,type:"slot",source:"(18:2) ",ctx:i}),H}function mt(i){let t,e,s;e=new rt({props:{tags:i[0].tags},$$inline:!0});const a={c:function(){t=w("div"),_(e.$$.fragment),this.h()},l:function(o){t=v(o,"DIV",{slot:!0});var c=E(t);N(e.$$.fragment,c),c.forEach(d),this.h()},h:function(){h(t,"slot","tags"),x(t,C,35,2,1133)},m:function(o,c){A(o,t,c),P(e,t,null),s=!0},p:function(o,c){const r={};c&1&&(r.tags=o[0].tags),e.$set(r)},i:function(o){s||(M(e.$$.fragment,o),s=!0)},o:function(o){R(e.$$.fragment,o),s=!1},d:function(o){o&&d(t),O(e)}};return k("SvelteRegisterBlock",{block:a,id:mt.name,type:"slot",source:"(23:2) ",ctx:i}),a}function U(i){let t,e,s="download",a,n;const o={c:function(){t=w("button"),e=w("span"),e.textContent=s,this.h()},l:function(r){t=v(r,"BUTTON",{class:!0,title:!0});var l=E(t);e=v(l,"SPAN",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-rqt9z7"&&(e.textContent=s),l.forEach(d),this.h()},h:function(){h(e,"class","material-icons"),x(e,C,41,8,1375),h(t,"class","btn btn-sm variant-soft-surface"),h(t,"title","Install"),x(t,C,40,6,1255)},m:function(r,l){A(r,t,l),y(t,e),a||(n=st(t,"click",i[2],!1,!1,!1,!1),a=!0)},p:at,d:function(r){r&&d(t),a=!1,n()}};return k("SvelteRegisterBlock",{block:o,id:U.name,type:"if",source:"(27:4) {#if installable}",ctx:i}),o}function pt(i){let t,e=i[1]&&U(i);const s={c:function(){e&&e.c(),t=G()},l:function(n){e&&e.l(n),t=G()},m:function(n,o){e&&e.m(n,o),A(n,t,o)},p:function(n,o){n[1]?e?e.p(n,o):(e=U(n),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d:function(n){n&&d(t),e&&e.d(n)}};return k("SvelteRegisterBlock",{block:s,id:pt.name,type:"slot",source:'(26:2) <svelte:fragment slot=\\"actions\\">',ctx:i}),s}function $t(i){let t,e,s;e=new lt({props:{compatibility:i[0].compatibility},$$inline:!0});const a={c:function(){t=w("div"),_(e.$$.fragment),this.h()},l:function(o){t=v(o,"DIV",{slot:!0});var c=E(t);N(e.$$.fragment,c),c.forEach(d),this.h()},h:function(){h(t,"slot","outer"),x(t,C,45,2,1469)},m:function(o,c){A(o,t,c),P(e,t,null),s=!0},p:function(o,c){const r={};c&1&&(r.compatibility=o[0].compatibility),e.$set(r)},i:function(o){s||(M(e.$$.fragment,o),s=!0)},o:function(o){R(e.$$.fragment,o),s=!1},d:function(o){o&&d(t),O(e)}};return k("SvelteRegisterBlock",{block:a,id:$t.name,type:"slot",source:"(33:2) ",ctx:i}),a}function z(i){let t,e;t=new ct({props:{name:i[0].name,link:D+"/mod/"+i[0].mod_reference,logo:i[0].logo,description:i[0].short_description,$$slots:{outer:[$t],actions:[pt],tags:[mt],stats:[ut]},$$scope:{ctx:i}},$$inline:!0});const s={c:function(){_(t.$$.fragment)},l:function(n){N(t.$$.fragment,n)},m:function(n,o){P(t,n,o),e=!0},p:function(n,[o]){const c={};o&1&&(c.name=n[0].name),o&1&&(c.link=D+"/mod/"+n[0].mod_reference),o&1&&(c.logo=n[0].logo),o&1&&(c.description=n[0].short_description),o&11&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){e||(M(t.$$.fragment,n),e=!0)},o:function(n){R(t.$$.fragment,n),e=!1},d:function(n){O(t,n)}};return k("SvelteRegisterBlock",{block:s,id:z.name,type:"component",source:"",ctx:i}),s}function yt(i,t,e){let s,{$$slots:a={},$$scope:n}=t;it("ModCard",a,[]);let{mod:o}=t;i.$$.on_mount.push(function(){o===void 0&&!("mod"in t||i.$$.bound[i.$$.props.mod])&&console.warn("<ModCard> was created without expected prop 'mod'")});const c=["mod"];Object.keys(t).forEach(l=>{!~c.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<ModCard> was created with unknown prop '${l}'`)});const r=()=>K(o.mod_reference);return i.$$set=l=>{"mod"in l&&e(0,o=l.mod)},i.$capture_state=()=>({base:D,FicsitCard:ct,installMod:K,prettyNumber:V,OutdatedBanner:lt,CompatibilityButton:ft,TagList:rt,mod:o,installable:s}),i.$inject_state=l=>{"mod"in l&&e(0,o=l.mod),"installable"in l&&e(1,s=l.installable)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),i.$$.update=()=>{i.$$.dirty&1&&e(1,s="latestVersions"in o?o.latestVersions.alpha||o.latestVersions.beta||o.latestVersions.release:!1)},[o,s,r]}class Et extends et{constructor(t){super(t),ot(this,t,yt,z,nt,{mod:0}),k("SvelteRegisterComponent",{component:this,tagName:"ModCard",options:t,id:z.name})}get mod(){throw new Error("<ModCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set mod(t){throw new Error("<ModCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Et as M};
//# sourceMappingURL=ModCard.5cb72b08.js.map

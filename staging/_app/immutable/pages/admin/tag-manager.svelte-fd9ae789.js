import{S as st,i as ot,s as lt,bf as $t,a as L,Z as p,g as A,_ as h,j as v,$ as x,t as d,l as j,m,f as w,a1 as y,aC as ft,al as it,aB as k,aD as ct,k as B,u as I,bg as ut,e as C,aa as _,c as P,d as Z,ab as q,a5 as O,ac as D,q as F,bh as z,aM as mt,b2 as G,bi as J,aH as dt,bj as gt,aR as K,b1 as pt,ad as ht,ae as xt}from"../../chunks/vendor-22698a15.js";import{T as yt,a as wt}from"../../chunks/forms-099cb473.js";import{g as Tt,h as vt,C as bt,i as Nt}from"../../chunks/graphql-32ca0bd6.js";function S(s,t,n){const e=s.slice();return e[21]=t[n],e[22]=t,e[23]=n,e}function _t(s){let t,n;return t=new ut({props:{$$slots:{default:[Bt]},$$scope:{ctx:s}}}),{c(){p(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){x(t,e,r),n=!0},p(e,r){const a={};r&16777223&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}function qt(s){let t,n,e=s[5].error.message+"",r;return{c(){t=C("h1"),n=_("Failed to load tags: "),r=_(e)},l(a){t=P(a,"H1",{});var i=Z(t);n=q(i,"Failed to load tags: "),r=q(i,e),i.forEach(w)},m(a,i){v(a,t,i),O(t,n),O(t,r)},p(a,i){i&32&&e!==(e=a[5].error.message+"")&&D(r,e)},i:F,o:F,d(a){a&&w(t)}}}function Et(s){let t,n;return{c(){t=C("h1"),n=_("Loading tags...")},l(e){t=P(e,"H1",{});var r=Z(t);n=q(r,"Loading tags..."),r.forEach(w)},m(e,r){v(e,t,r),O(t,n)},p:F,i:F,o:F,d(e){e&&w(t)}}}function Ft(s){let t=s[21].name+"",n;return{c(){n=_(t)},l(e){n=q(e,t)},m(e,r){v(e,n,r)},p(e,r){r&1&&t!==(t=e[21].name+"")&&D(n,t)},d(e){e&&w(n)}}}function Ht(s){let t;return{c(){t=_("delete_forever")},l(n){t=q(n,"delete_forever")},m(n,e){v(n,t,e)},d(n){n&&w(t)}}}function It(s){let t,n;return t=new K({props:{class:"material-icons",$$slots:{default:[Ht]},$$scope:{ctx:s}}}),{c(){p(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){x(t,e,r),n=!0},p(e,r){const a={};r&16777216&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}function Lt(s){let t,n;function e(...r){return s[10](s[21],...r)}return t=new pt({props:{slot:"icon",$$slots:{default:[It]},$$scope:{ctx:s}}}),t.$on("click",e),{c(){p(t.$$.fragment)},l(r){h(t.$$.fragment,r)},m(r,a){x(t,r,a),n=!0},p(r,a){s=r;const i={};a&16777216&&(i.$$scope={dirty:a,ctx:s}),t.$set(i)},i(r){n||(m(t.$$.fragment,r),n=!0)},o(r){d(t.$$.fragment,r),n=!1},d(r){y(t,r)}}}function At(s){let t;return{c(){t=_("Human-Readable name of the tag that is shown in UI")},l(n){t=q(n,"Human-Readable name of the tag that is shown in UI")},m(n,e){v(n,t,e)},d(n){n&&w(t)}}}function kt(s){let t,n;return t=new wt({props:{slot:"helper",$$slots:{default:[At]},$$scope:{ctx:s}}}),{c(){p(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){x(t,e,r),n=!0},p(e,r){const a={};r&16777216&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}function Ot(s){let t,n,e=s[21],r;function a(l){s[11](l,s[21])}const i=()=>s[12](t,e),o=()=>s[12](null,e);function $(){return s[13](s[21])}let g={label:"Tag-Name",$$slots:{helper:[kt]},$$scope:{ctx:s}};return s[21].name!==void 0&&(g.value=s[21].name),t=new yt({props:g}),I.push(()=>ht(t,"value",a)),i(),t.$on("change",$),{c(){p(t.$$.fragment)},l(l){h(t.$$.fragment,l)},m(l,u){x(t,l,u),r=!0},p(l,u){s=l,e!==s[21]&&(o(),e=s[21],i());const b={};u&16777216&&(b.$$scope={dirty:u,ctx:s}),!n&&u&1&&(n=!0,b.value=s[21].name,xt(()=>n=!1)),t.$set(b)},i(l){r||(m(t.$$.fragment,l),r=!0)},o(l){d(t.$$.fragment,l),r=!1},d(l){o(),y(t,l)}}}function Dt(s){let t,n,e,r;return t=new J({props:{$$slots:{icon:[Lt],default:[Ft]},$$scope:{ctx:s}}}),e=new gt({props:{$$slots:{default:[Ot]},$$scope:{ctx:s}}}),{c(){p(t.$$.fragment),n=L(),p(e.$$.fragment)},l(a){h(t.$$.fragment,a),n=A(a),h(e.$$.fragment,a)},m(a,i){x(t,a,i),v(a,n,i),x(e,a,i),r=!0},p(a,i){const o={};i&16777217&&(o.$$scope={dirty:i,ctx:a}),t.$set(o);const $={};i&16777221&&($.$$scope={dirty:i,ctx:a}),e.$set($)},i(a){r||(m(t.$$.fragment,a),m(e.$$.fragment,a),r=!0)},o(a){d(t.$$.fragment,a),d(e.$$.fragment,a),r=!1},d(a){y(t,a),a&&w(n),y(e,a)}}}function U(s){let t,n=s[21],e;const r=()=>s[14](t,n),a=()=>s[14](null,n);let i={$$slots:{default:[Dt]},$$scope:{ctx:s}};return t=new z({props:i}),r(),{c(){p(t.$$.fragment)},l(o){h(t.$$.fragment,o)},m(o,$){x(t,o,$),e=!0},p(o,$){n!==o[21]&&(a(),n=o[21],r());const g={};$&16777221&&(g.$$scope={dirty:$,ctx:o}),t.$set(g)},i(o){e||(m(t.$$.fragment,o),e=!0)},o(o){d(t.$$.fragment,o),e=!1},d(o){a(),y(t,o)}}}function Mt(s){let t;return{c(){t=_("Add new tag")},l(n){t=q(n,"Add new tag")},m(n,e){v(n,t,e)},d(n){n&&w(t)}}}function Rt(s){let t;return{c(){t=_("add")},l(n){t=q(n,"add")},m(n,e){v(n,t,e)},d(n){n&&w(t)}}}function St(s){let t,n,e,r;return t=new G({props:{$$slots:{default:[Mt]},$$scope:{ctx:s}}}),e=new K({props:{class:"material-icons",$$slots:{default:[Rt]},$$scope:{ctx:s}}}),{c(){p(t.$$.fragment),n=L(),p(e.$$.fragment)},l(a){h(t.$$.fragment,a),n=A(a),h(e.$$.fragment,a)},m(a,i){x(t,a,i),v(a,n,i),x(e,a,i),r=!0},p(a,i){const o={};i&16777216&&(o.$$scope={dirty:i,ctx:a}),t.$set(o);const $={};i&16777216&&($.$$scope={dirty:i,ctx:a}),e.$set($)},i(a){r||(m(t.$$.fragment,a),m(e.$$.fragment,a),r=!0)},o(a){d(t.$$.fragment,a),d(e.$$.fragment,a),r=!1},d(a){y(t,a),a&&w(n),y(e,a)}}}function Ut(s){let t,n;return t=new dt({props:{variant:"outlined",$$slots:{default:[St]},$$scope:{ctx:s}}}),t.$on("click",s[7]),{c(){p(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){x(t,e,r),n=!0},p(e,r){const a={};r&16777216&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}function jt(s){let t,n;return t=new J({props:{ripple:!1,$$slots:{default:[Ut]},$$scope:{ctx:s}}}),{c(){p(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){x(t,e,r),n=!0},p(e,r){const a={};r&16777216&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}function Bt(s){let t,n,e,r=s[0],a=[];for(let o=0;o<r.length;o+=1)a[o]=U(S(s,r,o));const i=o=>d(a[o],1,1,()=>{a[o]=null});return n=new z({props:{nonInteractive:!0,$$slots:{default:[jt]},$$scope:{ctx:s}}}),{c(){for(let o=0;o<a.length;o+=1)a[o].c();t=L(),p(n.$$.fragment)},l(o){for(let $=0;$<a.length;$+=1)a[$].l(o);t=A(o),h(n.$$.fragment,o)},m(o,$){for(let g=0;g<a.length;g+=1)a[g].m(o,$);v(o,t,$),x(n,o,$),e=!0},p(o,$){if($&775){r=o[0];let l;for(l=0;l<r.length;l+=1){const u=S(o,r,l);a[l]?(a[l].p(u,$),m(a[l],1)):(a[l]=U(u),a[l].c(),m(a[l],1),a[l].m(t.parentNode,t))}for(B(),l=r.length;l<a.length;l+=1)i(l);j()}const g={};$&16777216&&(g.$$scope={dirty:$,ctx:o}),n.$set(g)},i(o){if(!e){for(let $=0;$<r.length;$+=1)m(a[$]);m(n.$$.fragment,o),e=!0}},o(o){a=a.filter(Boolean);for(let $=0;$<a.length;$+=1)d(a[$]);d(n.$$.fragment,o),e=!1},d(o){mt(a,o),o&&w(t),y(n,o)}}}function Ct(s){let t;return{c(){t=_(s[3])},l(n){t=q(n,s[3])},m(n,e){v(n,t,e)},p(n,e){e&8&&D(t,n[3])},d(n){n&&w(t)}}}function Pt(s){let t,n;return t=new G({props:{$$slots:{default:[Ct]},$$scope:{ctx:s}}}),{c(){p(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){x(t,e,r),n=!0},p(e,r){const a={};r&16777224&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}function Zt(s){let t,n,e,r,a;const i=[Et,qt,_t],o=[];function $(l,u){return l[5].fetching?0:l[6].error?1:2}t=$(s),n=o[t]=i[t](s);let g={timeoutMs:4e3,$$slots:{default:[Pt]},$$scope:{ctx:s}};return r=new $t({props:g}),s[15](r),{c(){n.c(),e=L(),p(r.$$.fragment)},l(l){n.l(l),e=A(l),h(r.$$.fragment,l)},m(l,u){o[t].m(l,u),v(l,e,u),x(r,l,u),a=!0},p(l,[u]){let b=t;t=$(l),t===b?o[t].p(l,u):(B(),d(o[b],1,1,()=>{o[b]=null}),j(),n=o[t],n?n.p(l,u):(n=o[t]=i[t](l),n.c()),m(n,1),n.m(e.parentNode,e));const H={};u&16777224&&(H.$$scope={dirty:u,ctx:l}),r.$set(H)},i(l){a||(m(n),m(r.$$.fragment,l),a=!0)},o(l){d(n),d(r.$$.fragment,l),a=!1},d(l){o[t].d(l),l&&w(e),s[15](null),y(r,l)}}}function zt(s,t,n){let e,r=[];const a={},i={};let o="",$,g=-1;const l=ft(Tt);it(s,l,f=>n(5,e=f));const u=k({query:vt}),b=k({query:bt}),H=k({query:Nt});l.subscribe(()=>{const f=e.data;n(0,r=f&&f.getTags||[])}),ct(l);function Q(){if(r.find(f=>f.name=="New Tag"))a[r[r.length-1].id].setOpen(!0),i[r[r.length-1].id].focus();else{const f={id:g--,name:"New Tag"};r.push(f),n(0,r),setTimeout(()=>{a[f.id].setOpen(!0);const c=i[f.id];c.focus(),c.getElement().querySelectorAll("input")[0].select()},0)}}async function M(f){if(f.name=="New Tag")return;let c=!1;if(f.id<0){try{const N=await b({tagName:f.name});N.data&&(f.id=N.data.createTag.id,c=!0)}catch(N){console.log(N)}if(!c){n(3,o=`Failed to create Tag '${f.name}'!`),$.open(),setTimeout(()=>$.close(),2e3);return}}else{try{c=(await H({tagID:f.id,tagName:f.name})).data.updateTag!=null}catch{}if(!c){n(3,o=`Failed to update Tag '${f.name}'!`),$.open(),setTimeout(()=>$.close(),2e3);return}}n(3,o=`Tag '${f.name}' saved!`),$.open(),setTimeout(()=>$.close(),2e3)}async function V(f){if(f.name!="New Tag"){let T=!1;try{T=(await u({tagID:f.id})).data.deleteTag}catch{T=!1}if(!T){n(3,o=`Failed to remove Tag '${f.name}'!`),$.open(),setTimeout(()=>$.close(),2e3);return}}const c=()=>{const T=a[f.id].getElement(),E=T.scrollHeight;T.classList.add("smui-accordion__panel--removed"),T.style.height=E+"px",requestAnimationFrame(()=>T.style.height=0+"px"),T.addEventListener("transitionend",at=>{at.propertyName=="height"&&(T.classList.remove("smui-accordion__panel--removed"),T.style.height="auto",n(0,r=r.filter(rt=>rt.id!=f.id)))})};let N=!1;for(const T in a){const E=a[T];E?.isOpen()&&(E.setOpen(!1),N||E.getElement().addEventListener("SMUIAccordionPanel:closed",()=>{c()},{once:!0}),N=!0)}N||c(),n(3,o=`Tag '${f.name}' removed!`),$.open(),setTimeout(()=>$.close(),2e3)}function R(f,c){f.stopPropagation(),V(c)}const W=(f,c)=>R(c,f);function X(f,c){s.$$.not_equal(c.name,f)&&(c.name=f,n(0,r))}function Y(f,c){I[f?"unshift":"push"](()=>{i[c.id]=f,n(2,i)})}const tt=f=>M(f);function et(f,c){I[f?"unshift":"push"](()=>{a[c.id]=f,n(1,a)})}function nt(f){I[f?"unshift":"push"](()=>{$=f,n(4,$)})}return[r,a,i,o,$,e,l,Q,M,R,W,X,Y,tt,et,nt]}class Qt extends st{constructor(t){super(),ot(this,t,zt,Zt,lt,{})}}export{Qt as default};
//# sourceMappingURL=tag-manager.svelte-fd9ae789.js.map

import{S as Oe,i as We,s as Ye,d as R,v as ze,aI as Pe,aJ as De,be as fe,k as zt,l as T,L as Z,q as f,am as Rn,x as k,aa as W,y as S,z as E,ab as Y,a8 as y,B as _,a7 as m,a0 as D,a1 as F,ac as ct,r as ot,a9 as st,bi as Fe,aS as ye,aO as Xt,af as Mn,ag as An,b9 as xe,aR as ke,ak as le,aZ as Te,a2 as N,a3 as q,a4 as C,C as In,ad as rt,bj as Pn,p as w,m as Ht,t as B,n as Ot,a6 as L,a_ as Dn}from"./vendor.81901611.js";import{o as Ut,s as it,d as jt,e as Fn,l as Tn,f as Ne,g as Nn,T as At,V as yt,c as qe,v as Ce,r as Le,b as Xe}from"./forms.88e3f85a.js";import{t as Ue}from"./forms.9aa4e56b.js";import{m as $e}from"./markdown.623802d0.js";import{S as je,T as ae}from"./graphql.769656ab.js";import{T as Ze}from"./TagList.f0ec202d.js";import{M as Je}from"./ModCompatibilityEdit.56e1299e.js";const ue=Ut({name:it().min(3).max(32),mod_reference:it().min(3).max(32).regex(/^([a-zA-Z][a-zA-Z0-9_]*)$/).refine(async()=>!0),short_description:it().min(16).max(128),full_description:jt(it()),logo:jt(Fn().refine(e=>"name"in e&&"size"in e&&"type"in e)),source_url:it().url().optional().or(Tn("")),authors:jt(Ut({role:it(),user_id:it()}).array()),compatibility:jt(Ut({EA:Ut({state:it(),note:Ne()}),EXP:Ut({state:it(),note:Ne()})})),hidden:Nn(),tagIDs:jt(it().array())}),It="src/lib/components/mods/ModAuthor.svelte";function Ge(e){let t,n;const r={c:function(){t=k("p"),n=W("Unknown User ID"),this.h()},l:function(o){t=S(o,"P",{class:!0});var s=E(t);n=Y(s,"Unknown User ID"),s.forEach(f),this.h()},h:function(){y(t,"class","mr-2 whitespace-nowrap"),_(t,It,26,2,846)},m:function(o,s){T(o,t,s),m(t,n)},p:Z,d:function(o){o&&f(t)}};return R("SvelteRegisterBlock",{block:r,id:Ge.name,type:"else",source:"(26:0) {:else}",ctx:e}),r}function Qe(e){let t,n,r,i,o,s,c=e[1].data.getUser.username+"",l;const b={c:function(){t=k("div"),n=k("div"),i=D(),o=k("div"),s=k("span"),l=W(c),this.h()},l:function(u){t=S(u,"DIV",{class:!0});var g=E(t);n=S(g,"DIV",{class:!0,style:!0}),E(n).forEach(f),i=F(g),o=S(g,"DIV",{class:!0});var $=E(o);s=S($,"SPAN",{class:!0});var M=E(s);l=Y(M,c),M.forEach(f),$.forEach(f),g.forEach(f),this.h()},h:function(){y(n,"class","rounded-full bg-cover w-7 h-7"),y(n,"style",r=`background-image: url("${e[1].data.getUser.avatar||fe+"/images/no_image.webp"}")`),_(n,It,18,4,548),y(s,"class","text-yellow-500"),_(s,It,22,6,749),y(o,"class","grid grid-flow-row"),_(o,It,21,4,710),y(t,"class","grid grid-flow-col auto-cols-max gap-x-2 mr-2"),_(t,It,17,2,484)},m:function(u,g){T(u,t,g),m(t,n),m(t,i),m(t,o),m(o,s),m(s,l)},p:function(u,g){g&2&&r!==(r=`background-image: url("${u[1].data.getUser.avatar||fe+"/images/no_image.webp"}")`)&&y(n,"style",r),g&2&&c!==(c=u[1].data.getUser.username+"")&&ct(l,c)},d:function(u){u&&f(t)}};return R("SvelteRegisterBlock",{block:b,id:Qe.name,type:"if",source:"(17:29) ",ctx:e}),b}function Ke(e){let t,n,r=e[1].error.message+"",i;const o={c:function(){t=k("p"),n=W("Oh no... "),i=W(r),this.h()},l:function(c){t=S(c,"P",{class:!0});var l=E(t);n=Y(l,"Oh no... "),i=Y(l,r),l.forEach(f),this.h()},h:function(){y(t,"class","mr-2"),_(t,It,15,2,401)},m:function(c,l){T(c,t,l),m(t,n),m(t,i)},p:function(c,l){l&2&&r!==(r=c[1].error.message+"")&&ct(i,r)},d:function(c){c&&f(t)}};return R("SvelteRegisterBlock",{block:o,id:Ke.name,type:"if",source:"(15:22) ",ctx:e}),o}function tn(e){let t,n;const r={c:function(){t=k("p"),n=W("Loading..."),this.h()},l:function(o){t=S(o,"P",{class:!0});var s=E(t);n=Y(s,"Loading..."),s.forEach(f),this.h()},h:function(){y(t,"class","mr-2"),_(t,It,13,2,345)},m:function(o,s){T(o,t,s),m(t,n)},p:Z,d:function(o){o&&f(t)}};return R("SvelteRegisterBlock",{block:r,id:tn.name,type:"if",source:"(13:0) {#if $user.fetching}",ctx:e}),r}function me(e){let t;function n(s,c){return s[1].fetching?tn:s[1].error?Ke:s[1].data.getUser?Qe:Ge}let r=n(e),i=r(e);const o={c:function(){i.c(),t=zt()},l:function(c){i.l(c),t=zt()},m:function(c,l){i.m(c,l),T(c,t,l)},p:function(c,[l]){r===(r=n(c))&&i?i.p(c,l):(i.d(1),i=r(c),i&&(i.c(),i.m(t.parentNode,t)))},i:Z,o:Z,d:function(c){i.d(c),c&&f(t)}};return R("SvelteRegisterBlock",{block:o,id:me.name,type:"component",source:"",ctx:e}),o}function qn(e,t,n){let r,i,o=Z,s=()=>(o(),o=Rn(r,g=>n(1,i=g)),r);e.$$.on_destroy.push(()=>o());let{$$slots:c={},$$scope:l}=t;ze("ModAuthor",c,[]);let{id:b}=t;const p=Pe();e.$$.on_mount.push(function(){b===void 0&&!("id"in t||e.$$.bound[e.$$.props.id])&&console.warn("<ModAuthor> was created without expected prop 'id'")});const u=["id"];return Object.keys(t).forEach(g=>{!~u.indexOf(g)&&g.slice(0,2)!=="$$"&&g!=="slot"&&console.warn(`<ModAuthor> was created with unknown prop '${g}'`)}),e.$$set=g=>{"id"in g&&n(2,b=g.id)},e.$capture_state=()=>({queryStore:De,getContextClient:Pe,GetUserDocument:je,assets:fe,id:b,client:p,user:r,$user:i}),e.$inject_state=g=>{"id"in g&&n(2,b=g.id),"user"in g&&s(n(0,r=g.user))},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{e.$$.dirty&4&&s(n(0,r=De({query:je,client:p,variables:{user:b}})))},[r,i,b]}class en extends Oe{constructor(t){super(t),We(this,t,qn,me,Ye,{id:2}),R("SvelteRegisterComponent",{component:this,tagName:"ModAuthor",options:t,id:me.name})}get id(){throw new Error("<ModAuthor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set id(t){throw new Error("<ModAuthor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const I="src/lib/components/mods/ModForm.svelte";function He(e,t,n){const r=e.slice();return r[25]=t[n],r[26]=t,r[27]=n,r}function nn(e){let t,n=(e[28]||"")+"",r;const i={c:function(){t=k("span"),r=W(n),this.h()},l:function(s){t=S(s,"SPAN",{class:!0});var c=E(t);r=Y(c,n),c.forEach(f),this.h()},h:function(){y(t,"class","validation-message"),_(t,I,77,8,2545)},m:function(s,c){T(s,t,c),m(t,r)},p:function(s,c){c&268435456&&n!==(n=(s[28]||"")+"")&&ct(r,n)},d:function(s){s&&f(t)}};return R("SvelteRegisterBlock",{block:i,id:nn.name,type:"slot",source:'(77:6) <ValidationMessage for=\\"name\\" let:messages={message}>',ctx:e}),i}function de(e){let t;const n={c:function(){t=W(`Warning! You will not be able to change this after creating the mod! Please ensure this is a unique modifier
            that closely matches the name of your mod!`)},l:function(i){t=Y(i,`Warning! You will not be able to change this after creating the mod! Please ensure this is a unique modifier
            that closely matches the name of your mod!`)},m:function(i,o){T(i,t,o)},d:function(i){i&&f(t)}};return R("SvelteRegisterBlock",{block:n,id:de.name,type:"if",source:"(85:10) {#if !editing}",ctx:e}),n}function on(e){let t,n=!e[1]&&de(e);const r={c:function(){n&&n.c(),t=zt()},l:function(o){n&&n.l(o),t=zt()},m:function(o,s){n&&n.m(o,s),T(o,t,s)},p:function(o,s){o[1]?n&&(n.d(1),n=null):n||(n=de(o),n.c(),n.m(t.parentNode,t))},d:function(o){n&&n.d(o),o&&f(t)}};return R("SvelteRegisterBlock",{block:r,id:on.name,type:"slot",source:'(84:8) <HelperText persistent={!editing} slot=\\"helper\\">',ctx:e}),r}function sn(e){let t,n;t=new Xe({props:{persistent:!e[1],slot:"helper",$$slots:{default:[on]},$$scope:{ctx:e}},$$inline:!0});const r={c:function(){N(t.$$.fragment)},l:function(o){q(t.$$.fragment,o)},m:function(o,s){C(t,o,s),n=!0},p:function(o,s){const c={};s&2&&(c.persistent=!o[1]),s&1073741826&&(c.$$scope={dirty:s,ctx:o}),t.$set(c)},i:function(o){n||(w(t.$$.fragment,o),n=!0)},o:function(o){B(t.$$.fragment,o),n=!1},d:function(o){L(t,o)}};return R("SvelteRegisterBlock",{block:r,id:sn.name,type:"slot",source:"(84:8) ",ctx:e}),r}function rn(e){let t,n=(e[28]||"")+"",r;const i={c:function(){t=k("span"),r=W(n),this.h()},l:function(s){t=S(s,"SPAN",{class:!0});var c=E(t);r=Y(c,n),c.forEach(f),this.h()},h:function(){y(t,"class","validation-message"),_(t,I,91,8,3176)},m:function(s,c){T(s,t,c),m(t,r)},p:function(s,c){c&268435456&&n!==(n=(s[28]||"")+"")&&ct(r,n)},d:function(s){s&&f(t)}};return R("SvelteRegisterBlock",{block:i,id:rn.name,type:"slot",source:'(91:6) <ValidationMessage for=\\"mod_reference\\" let:messages={message}>',ctx:e}),i}function cn(e){let t,n=(e[28]||"")+"",r;const i={c:function(){t=k("span"),r=W(n),this.h()},l:function(s){t=S(s,"SPAN",{class:!0});var c=E(t);r=Y(c,n),c.forEach(f),this.h()},h:function(){y(t,"class","validation-message"),_(t,I,98,8,3487)},m:function(s,c){T(s,t,c),m(t,r)},p:function(s,c){c&268435456&&n!==(n=(s[28]||"")+"")&&ct(r,n)},d:function(s){s&&f(t)}};return R("SvelteRegisterBlock",{block:i,id:cn.name,type:"slot",source:'(98:6) <ValidationMessage for=\\"short_description\\" let:messages={message}>',ctx:e}),i}function ln(e){let t,n=(e[28]||"")+"",r;const i={c:function(){t=k("span"),r=W(n),this.h()},l:function(s){t=S(s,"SPAN",{class:!0});var c=E(t);r=Y(c,n),c.forEach(f),this.h()},h:function(){y(t,"class","validation-message"),_(t,I,112,10,3963)},m:function(s,c){T(s,t,c),m(t,r)},p:function(s,c){c&268435456&&n!==(n=(s[28]||"")+"")&&ct(r,n)},d:function(s){s&&f(t)}};return R("SvelteRegisterBlock",{block:i,id:ln.name,type:"slot",source:'(112:8) <ValidationMessage for=\\"full_description\\" let:messages={message}>',ctx:e}),i}function an(e){const t={c:Z,l:Z,m:Z,p:Z,d:Z};return R("SvelteRegisterBlock",{block:t,id:an.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:e}),t}function un(e){let t,n=e[29]+"";const r={c:function(){t=k("div"),this.h()},l:function(o){t=S(o,"DIV",{class:!0});var s=E(t);s.forEach(f),this.h()},h:function(){y(t,"class","markdown-content right s-YtrVF1HCE9t3"),_(t,I,118,10,4216)},m:function(o,s){T(o,t,s),t.innerHTML=n},p:function(o,s){s&32&&n!==(n=o[29]+"")&&(t.innerHTML=n)},d:function(o){o&&f(t)}};return R("SvelteRegisterBlock",{block:r,id:un.name,type:"then",source:'(118:55)            <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:e}),r}function fn(e){const t={c:Z,l:Z,m:Z,p:Z,d:Z};return R("SvelteRegisterBlock",{block:t,id:fn.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:e}),t}function $n(e){let t,n=(e[28]||"")+"",r;const i={c:function(){t=k("span"),r=W(n),this.h()},l:function(s){t=S(s,"SPAN",{class:!0});var c=E(t);r=Y(c,n),c.forEach(f),this.h()},h:function(){y(t,"class","validation-message"),_(t,I,137,8,4748)},m:function(s,c){T(s,t,c),m(t,r)},p:function(s,c){c&268435456&&n!==(n=(s[28]||"")+"")&&ct(r,n)},d:function(s){s&&f(t)}};return R("SvelteRegisterBlock",{block:i,id:$n.name,type:"slot",source:'(137:6) <ValidationMessage for=\\"logo\\" let:messages={message}>',ctx:e}),i}function mn(e){let t,n=(e[28]||"")+"",r;const i={c:function(){t=k("span"),r=W(n),this.h()},l:function(s){t=S(s,"SPAN",{class:!0});var c=E(t);r=Y(c,n),c.forEach(f),this.h()},h:function(){y(t,"class","validation-message"),_(t,I,144,8,5029)},m:function(s,c){T(s,t,c),m(t,r)},p:function(s,c){c&268435456&&n!==(n=(s[28]||"")+"")&&ct(r,n)},d:function(s){s&&f(t)}};return R("SvelteRegisterBlock",{block:i,id:mn.name,type:"slot",source:'(144:6) <ValidationMessage for=\\"source_url\\" let:messages={message}>',ctx:e}),i}function dn(e){let t,n,r;function i(c){e[19](c)}let o={};e[3].hidden!==void 0&&(o.checked=e[3].hidden),t=new ke({props:o,$$inline:!0}),ot.push(()=>st(t,"checked",i));const s={c:function(){N(t.$$.fragment)},l:function(l){q(t.$$.fragment,l)},m:function(l,b){C(t,l,b),r=!0},p:function(l,b){const p={};!n&&b&8&&(n=!0,p.checked=l[3].hidden,rt(()=>n=!1)),t.$set(p)},i:function(l){r||(w(t.$$.fragment,l),r=!0)},o:function(l){B(t.$$.fragment,l),r=!1},d:function(l){L(t,l)}};return R("SvelteRegisterBlock",{block:s,id:dn.name,type:"slot",source:"(150:6) <FormField>",ctx:e}),s}function pn(e){let t,n;const r={c:function(){t=k("span"),n=W("Hidden"),this.h()},l:function(o){t=S(o,"SPAN",{slot:!0});var s=E(t);n=Y(s,"Hidden"),s.forEach(f),this.h()},h:function(){y(t,"slot","label"),_(t,I,151,8,5240)},m:function(o,s){T(o,t,s),m(t,n)},p:Z,d:function(o){o&&f(t)}};return R("SvelteRegisterBlock",{block:r,id:pn.name,type:"slot",source:"(152:8) ",ctx:e}),r}function gn(e){let t,n=(e[28]||"")+"",r;const i={c:function(){t=k("span"),r=W(n),this.h()},l:function(s){t=S(s,"SPAN",{class:!0});var c=E(t);r=Y(c,n),c.forEach(f),this.h()},h:function(){y(t,"class","validation-message"),_(t,I,154,8,5362)},m:function(s,c){T(s,t,c),m(t,r)},p:function(s,c){c&268435456&&n!==(n=(s[28]||"")+"")&&ct(r,n)},d:function(s){s&&f(t)}};return R("SvelteRegisterBlock",{block:i,id:gn.name,type:"slot",source:'(154:6) <ValidationMessage for=\\"hidden\\" let:messages={message}>',ctx:e}),i}function pe(e){let t,n,r,i,o,s,c,l,b,p,u,g;n=new ye({props:{align:"start",$$slots:{default:[hn]},$$scope:{ctx:e}},$$inline:!0});let $=e[4]&&ge(e);p=new Xt({props:{type:"button",$$slots:{default:[bn]},$$scope:{ctx:e}},$$inline:!0}),p.$on("click",e[8]);let M=e[3].authors;Te(M);let d=[];for(let O=0;O<M.length;O+=1)d[O]=be(He(e,M,O));const H=O=>B(d[O],1,1,()=>{d[O]=null}),tt={c:function(){t=k("div"),N(n.$$.fragment),r=D(),$&&$.c(),i=D(),o=k("div"),s=k("div"),c=k("h4"),l=W("Authors"),b=D(),N(p.$$.fragment),u=D();for(let h=0;h<d.length;h+=1)d[h].c();this.h()},l:function(h){t=S(h,"DIV",{});var A=E(t);q(n.$$.fragment,A),A.forEach(f),r=F(h),$&&$.l(h),i=F(h),o=S(h,"DIV",{class:!0});var U=E(o);s=S(U,"DIV",{class:!0});var X=E(s);c=S(X,"H4",{class:!0});var P=E(c);l=Y(P,"Authors"),P.forEach(f),b=F(X),q(p.$$.fragment,X),X.forEach(f),u=F(U);for(let G=0;G<d.length;G+=1)d[G].l(U);U.forEach(f),this.h()},h:function(){_(t,I,158,6,5480),y(c,"class","mr-4"),_(c,I,175,10,6037),y(s,"class","flex items-baseline"),_(s,I,174,8,5993),y(o,"class","grid grid-flow-row gap-2"),_(o,I,173,6,5946)},m:function(h,A){T(h,t,A),C(n,t,null),T(h,r,A),$&&$.m(h,A),T(h,i,A),T(h,o,A),m(o,s),m(s,c),m(c,l),m(s,b),C(p,s,null),m(o,u);for(let U=0;U<d.length;U+=1)d[U]&&d[U].m(o,null);g=!0},p:function(h,A){const U={};A&1073741848&&(U.$$scope={dirty:A,ctx:h}),n.$set(U),h[4]?$?($.p(h,A),A&16&&w($,1)):($=ge(h),$.c(),w($,1),$.m(i.parentNode,i)):$&&(Ht(),B($,1,1,()=>{$=null}),Ot());const X={};if(A&1073741824&&(X.$$scope={dirty:A,ctx:h}),p.$set(X),A&520){M=h[3].authors,Te(M);let P;for(P=0;P<M.length;P+=1){const G=He(h,M,P);d[P]?(d[P].p(G,A),w(d[P],1)):(d[P]=be(G),d[P].c(),w(d[P],1),d[P].m(o,null))}for(Ht(),P=M.length;P<d.length;P+=1)H(P);Ot()}},i:function(h){if(!g){w(n.$$.fragment,h),w($),w(p.$$.fragment,h);for(let A=0;A<M.length;A+=1)w(d[A]);g=!0}},o:function(h){B(n.$$.fragment,h),B($),B(p.$$.fragment,h),d=d.filter(Boolean);for(let A=0;A<d.length;A+=1)B(d[A]);g=!1},d:function(h){h&&f(t),L(n),h&&f(r),$&&$.d(h),h&&f(i),h&&f(o),L(p),Dn(d,h)}};return R("SvelteRegisterBlock",{block:tt,id:pe.name,type:"if",source:"(158:4) {#if editing}",ctx:e}),tt}function hn(e){let t,n,r,i,o,s;function c(p){e[20](p)}let l={};e[4]!==void 0&&(l.checked=e[4]),t=new ke({props:l,$$inline:!0}),ot.push(()=>st(t,"checked",c)),t.$on("SMUISwitch:change",e[21]);const b={c:function(){N(t.$$.fragment),r=D(),i=k("span"),o=W("Edit compatibility information"),this.h()},l:function(u){q(t.$$.fragment,u),r=F(u),i=S(u,"SPAN",{});var g=E(i);o=Y(g,"Edit compatibility information"),g.forEach(f),this.h()},h:function(){_(i,I,165,10,5744)},m:function(u,g){C(t,u,g),T(u,r,g),T(u,i,g),m(i,o),s=!0},p:function(u,g){const $={};!n&&g&16&&(n=!0,$.checked=u[4],rt(()=>n=!1)),t.$set($)},i:function(u){s||(w(t.$$.fragment,u),s=!0)},o:function(u){B(t.$$.fragment,u),s=!1},d:function(u){L(t,u),u&&f(r),u&&f(i)}};return R("SvelteRegisterBlock",{block:b,id:hn.name,type:"slot",source:'(160:8) <FormField align=\\"start\\">',ctx:e}),b}function ge(e){let t,n,r;function i(c){e[22](c)}let o={};e[3].compatibility!==void 0&&(o.compatibilityInfo=e[3].compatibility),t=new Je({props:o,$$inline:!0}),ot.push(()=>st(t,"compatibilityInfo",i));const s={c:function(){N(t.$$.fragment)},l:function(l){q(t.$$.fragment,l)},m:function(l,b){C(t,l,b),r=!0},p:function(l,b){const p={};!n&&b&8&&(n=!0,p.compatibilityInfo=l[3].compatibility,rt(()=>n=!1)),t.$set(p)},i:function(l){r||(w(t.$$.fragment,l),r=!0)},o:function(l){B(t.$$.fragment,l),r=!1},d:function(l){L(t,l)}};return R("SvelteRegisterBlock",{block:s,id:ge.name,type:"if",source:"(170:6) {#if editCompatibility}",ctx:e}),s}function vn(e){let t;const n={c:function(){t=W("Add")},l:function(i){t=Y(i,"Add")},m:function(i,o){T(i,t,o)},d:function(i){i&&f(t)}};return R("SvelteRegisterBlock",{block:n,id:vn.name,type:"slot",source:"(178:12) <Label>",ctx:e}),n}function bn(e){let t,n;t=new xe({props:{$$slots:{default:[vn]},$$scope:{ctx:e}},$$inline:!0});const r={c:function(){N(t.$$.fragment)},l:function(o){q(t.$$.fragment,o)},m:function(o,s){C(t,o,s),n=!0},p:function(o,s){const c={};s&1073741824&&(c.$$scope={dirty:s,ctx:o}),t.$set(c)},i:function(o){n||(w(t.$$.fragment,o),n=!0)},o:function(o){B(t.$$.fragment,o),n=!1},d:function(o){L(t,o)}};return R("SvelteRegisterBlock",{block:r,id:bn.name,type:"slot",source:'(177:10) <Button type=\\"button\\" on:click={addAuthor}>',ctx:e}),r}function he(e){let t,n;t=new en({props:{id:e[3].authors[e[27]].user_id},$$inline:!0});const r={c:function(){N(t.$$.fragment)},l:function(o){q(t.$$.fragment,o)},m:function(o,s){C(t,o,s),n=!0},p:function(o,s){const c={};s&8&&(c.id=o[3].authors[o[27]].user_id),t.$set(c)},i:function(o){n||(w(t.$$.fragment,o),n=!0)},o:function(o){B(t.$$.fragment,o),n=!1},d:function(o){L(t,o)}};return R("SvelteRegisterBlock",{block:r,id:he.name,type:"if",source:"(183:12) {#if $data.authors[i].user_id}",ctx:e}),r}function ve(e){let t,n;function r(){return e[24](e[27])}t=new Xt({props:{type:"button",variant:"raised",$$slots:{default:[yn]},$$scope:{ctx:e}},$$inline:!0}),t.$on("click",r);const i={c:function(){N(t.$$.fragment)},l:function(s){q(t.$$.fragment,s)},m:function(s,c){C(t,s,c),n=!0},p:function(s,c){e=s;const l={};c&1073741824&&(l.$$scope={dirty:c,ctx:e}),t.$set(l)},i:function(s){n||(w(t.$$.fragment,s),n=!0)},o:function(s){B(t.$$.fragment,s),n=!1},d:function(s){L(t,s)}};return R("SvelteRegisterBlock",{block:i,id:ve.name,type:"if",source:"(191:12) {#if author.role !== 'creator'}",ctx:e}),i}function wn(e){let t;const n={c:function(){t=W("Remove")},l:function(i){t=Y(i,"Remove")},m:function(i,o){T(i,t,o)},d:function(i){i&&f(t)}};return R("SvelteRegisterBlock",{block:n,id:wn.name,type:"slot",source:"(193:16) <Label>",ctx:e}),n}function yn(e){let t,n;t=new xe({props:{$$slots:{default:[wn]},$$scope:{ctx:e}},$$inline:!0});const r={c:function(){N(t.$$.fragment)},l:function(o){q(t.$$.fragment,o)},m:function(o,s){C(t,o,s),n=!0},p:function(o,s){const c={};s&1073741824&&(c.$$scope={dirty:s,ctx:o}),t.$set(c)},i:function(o){n||(w(t.$$.fragment,o),n=!0)},o:function(o){B(t.$$.fragment,o),n=!1},d:function(o){L(t,o)}};return R("SvelteRegisterBlock",{block:r,id:yn.name,type:"slot",source:'(192:14) <Button type=\\"button\\" on:click={() => removeAuthor(i)} variant=\\"raised\\">',ctx:e}),r}function be(e){let t,n,r,i,o,s,c,l=e[3].authors[e[27]].user_id&&he(e);function b($){e[23]($,e[27])}let p={label:"User ID",class:"mr-4 w-full",disabled:e[25].role==="creator"};e[3].authors[e[27]].user_id!==void 0&&(p.value=e[3].authors[e[27]].user_id),r=new At({props:p,$$inline:!0}),ot.push(()=>st(r,"value",b));let u=e[25].role!=="creator"&&ve(e);const g={c:function(){t=k("div"),l&&l.c(),n=D(),N(r.$$.fragment),o=D(),u&&u.c(),s=D(),this.h()},l:function(M){t=S(M,"DIV",{class:!0});var d=E(t);l&&l.l(d),n=F(d),q(r.$$.fragment,d),o=F(d),u&&u.l(d),s=F(d),d.forEach(f),this.h()},h:function(){y(t,"class","flex items-baseline"),_(t,I,181,10,6240)},m:function(M,d){T(M,t,d),l&&l.m(t,null),m(t,n),C(r,t,null),m(t,o),u&&u.m(t,null),m(t,s),c=!0},p:function(M,d){e=M,e[3].authors[e[27]].user_id?l?(l.p(e,d),d&8&&w(l,1)):(l=he(e),l.c(),w(l,1),l.m(t,n)):l&&(Ht(),B(l,1,1,()=>{l=null}),Ot());const H={};d&8&&(H.disabled=e[25].role==="creator"),!i&&d&8&&(i=!0,H.value=e[3].authors[e[27]].user_id,rt(()=>i=!1)),r.$set(H),e[25].role!=="creator"?u?(u.p(e,d),d&8&&w(u,1)):(u=ve(e),u.c(),w(u,1),u.m(t,s)):u&&(Ht(),B(u,1,1,()=>{u=null}),Ot())},i:function(M){c||(w(l),w(r.$$.fragment,M),w(u),c=!0)},o:function(M){B(l),B(r.$$.fragment,M),B(u),c=!1},d:function(M){M&&f(t),l&&l.d(),L(r),u&&u.d()}};return R("SvelteRegisterBlock",{block:g,id:be.name,type:"each",source:"(181:8) {#each $data.authors as author, i}",ctx:e}),g}function xn(e){let t;const n={c:function(){t=W(e[0])},l:function(i){t=Y(i,e[0])},m:function(i,o){T(i,t,o)},p:function(i,o){o&1&&ct(t,i[0])},d:function(i){i&&f(t)}};return R("SvelteRegisterBlock",{block:n,id:xn.name,type:"slot",source:'(202:6) <Button variant=\\"outlined\\" type=\\"submit\\">',ctx:e}),n}function we(e){let t,n,r,i,o,s,c,l,b,p,u,g,$,M,d,H,tt,O,h,A,U,X,P,G,Dt,et,Ft,Q,pt,Tt,a,lt,Zt,xt,at,Jt,Gt,K,kt,Qt,Kt,nt,te,gt,ee,ut,ft,ne,ie,ht,oe,$t,vt,se,bt,re,Wt,Pt,wt,Yt,ce,Se;function kn(v){e[13](v)}let _e={label:"Name",required:!0};e[3].name!==void 0&&(_e.value=e[3].name),i=new At({props:_e,$$inline:!0}),ot.push(()=>st(i,"value",kn)),c=new yt({props:{for:"name",$$slots:{default:[nn,({messages:v})=>({28:v}),({messages:v})=>v?268435456:0]},$$scope:{ctx:e}},$$inline:!0});function Sn(v){e[14](v)}let Ee={label:"Mod Reference",required:!0,disabled:e[1],$$slots:{helper:[sn]},$$scope:{ctx:e}};e[3].mod_reference!==void 0&&(Ee.value=e[3].mod_reference),p=new At({props:Ee,$$inline:!0}),ot.push(()=>st(p,"value",Sn)),$=new yt({props:{for:"mod_reference",$$slots:{default:[rn,({messages:v})=>({28:v}),({messages:v})=>v?268435456:0]},$$scope:{ctx:e}},$$inline:!0});function _n(v){e[15](v)}let Ve={label:"Short Description",required:!0};e[3].short_description!==void 0&&(Ve.value=e[3].short_description),H=new At({props:Ve,$$inline:!0}),ot.push(()=>st(H,"value",_n)),h=new yt({props:{for:"short_description",$$slots:{default:[cn,({messages:v})=>({28:v}),({messages:v})=>v?268435456:0]},$$scope:{ctx:e}},$$inline:!0});function En(v){e[16](v)}let Be={textarea:!0,class:"vertical-textarea",label:"Full Description",required:!0,input$rows:10};e[3].full_description!==void 0&&(Be.value=e[3].full_description),P=new At({props:Be,$$inline:!0}),ot.push(()=>st(P,"value",En)),et=new yt({props:{for:"full_description",$$slots:{default:[ln,({messages:v})=>({28:v}),({messages:v})=>v?268435456:0]},$$scope:{ctx:e}},$$inline:!0});let J={ctx:e,current:null,token:null,hasCatch:!1,pending:fn,then:un,catch:an,value:29};Fe(lt=$e(e[5]),J);function Vn(v){e[17](v)}let Re={editable:!0};e[2]!==void 0&&(Re.tags=e[2]),at=new Ze({props:Re,$$inline:!0}),ot.push(()=>st(at,"tags",Vn)),gt=new yt({props:{for:"logo",$$slots:{default:[$n,({messages:v})=>({28:v}),({messages:v})=>v?268435456:0]},$$scope:{ctx:e}},$$inline:!0});function Bn(v){e[18](v)}let Me={label:"Source URL"};e[3].source_url!==void 0&&(Me.value=e[3].source_url),ft=new At({props:Me,$$inline:!0}),ot.push(()=>st(ft,"value",Bn)),ht=new yt({props:{for:"source_url",$$slots:{default:[mn,({messages:v})=>({28:v}),({messages:v})=>v?268435456:0]},$$scope:{ctx:e}},$$inline:!0}),vt=new ye({props:{$$slots:{label:[pn],default:[dn]},$$scope:{ctx:e}},$$inline:!0}),bt=new yt({props:{for:"hidden",$$slots:{default:[gn,({messages:v})=>({28:v}),({messages:v})=>v?268435456:0]},$$scope:{ctx:e}},$$inline:!0});let z=e[1]&&pe(e);wt=new Xt({props:{variant:"outlined",type:"submit",$$slots:{default:[xn]},$$scope:{ctx:e}},$$inline:!0});const Ae={c:function(){t=k("form"),n=k("div"),r=k("div"),N(i.$$.fragment),s=D(),N(c.$$.fragment),l=D(),b=k("div"),N(p.$$.fragment),g=D(),N($.$$.fragment),M=D(),d=k("div"),N(H.$$.fragment),O=D(),N(h.$$.fragment),A=D(),U=k("div"),X=k("div"),N(P.$$.fragment),Dt=D(),N(et.$$.fragment),Ft=D(),Q=k("div"),pt=k("span"),Tt=W("Preview:"),a=D(),J.block.c(),Zt=D(),xt=k("div"),N(at.$$.fragment),Gt=D(),K=k("div"),kt=k("label"),Qt=W("Logo:"),Kt=D(),nt=k("input"),te=D(),N(gt.$$.fragment),ee=D(),ut=k("div"),N(ft.$$.fragment),ie=D(),N(ht.$$.fragment),oe=D(),$t=k("div"),N(vt.$$.fragment),se=D(),N(bt.$$.fragment),re=D(),z&&z.c(),Wt=D(),Pt=k("div"),N(wt.$$.fragment),this.h()},l:function(x){t=S(x,"FORM",{});var V=E(t);n=S(V,"DIV",{class:!0});var j=E(n);r=S(j,"DIV",{class:!0});var St=E(r);q(i.$$.fragment,St),s=F(St),q(c.$$.fragment,St),St.forEach(f),l=F(j),b=S(j,"DIV",{class:!0});var mt=E(b);q(p.$$.fragment,mt),g=F(mt),q($.$$.fragment,mt),mt.forEach(f),M=F(j),d=S(j,"DIV",{class:!0});var _t=E(d);q(H.$$.fragment,_t),O=F(_t),q(h.$$.fragment,_t),_t.forEach(f),A=F(j),U=S(j,"DIV",{class:!0});var Et=E(U);X=S(Et,"DIV",{class:!0});var Vt=E(X);q(P.$$.fragment,Vt),Dt=F(Vt),q(et.$$.fragment,Vt),Vt.forEach(f),Ft=F(Et),Q=S(Et,"DIV",{class:!0});var Bt=E(Q);pt=S(Bt,"SPAN",{});var Nt=E(pt);Tt=Y(Nt,"Preview:"),Nt.forEach(f),a=F(Bt),J.block.l(Bt),Bt.forEach(f),Et.forEach(f),Zt=F(j),xt=S(j,"DIV",{class:!0});var qt=E(xt);q(at.$$.fragment,qt),qt.forEach(f),Gt=F(j),K=S(j,"DIV",{class:!0});var dt=E(K);kt=S(dt,"LABEL",{for:!0});var Ct=E(kt);Qt=Y(Ct,"Logo:"),Ct.forEach(f),Kt=F(dt),nt=S(dt,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),te=F(dt),q(gt.$$.fragment,dt),dt.forEach(f),ee=F(j),ut=S(j,"DIV",{class:!0});var Rt=E(ut);q(ft.$$.fragment,Rt),ie=F(Rt),q(ht.$$.fragment,Rt),Rt.forEach(f),oe=F(j),$t=S(j,"DIV",{class:!0});var Mt=E($t);q(vt.$$.fragment,Mt),se=F(Mt),q(bt.$$.fragment,Mt),Mt.forEach(f),re=F(j),z&&z.l(j),Wt=F(j),Pt=S(j,"DIV",{});var Lt=E(Pt);q(wt.$$.fragment,Lt),Lt.forEach(f),j.forEach(f),V.forEach(f),this.h()},h:function(){y(r,"class","grid grid-flow-row gap-2"),_(r,I,74,4,2372),y(b,"class","grid grid-flow-row gap-2"),_(b,I,81,4,2644),y(d,"class","grid grid-flow-row gap-2"),_(d,I,95,4,3275),y(X,"class","grid grid-flow-row gap-2 auto-rows-max"),_(X,I,103,6,3623),_(pt,I,116,8,4128),y(Q,"class","grid grid-flow-row gap-2 auto-rows-max"),_(Q,I,115,6,4067),y(U,"class","grid gap-6 split s-YtrVF1HCE9t3"),_(U,I,102,4,3586),y(xt,"class","grid grid-flow-row gap-2"),_(xt,I,123,4,4328),y(kt,"for","logo"),_(kt,I,128,6,4472),y(nt,"id","logo"),y(nt,"class","base-input"),y(nt,"name","logo"),y(nt,"type","file"),y(nt,"accept","image/png,image/jpeg,image/gif"),y(nt,"placeholder","Logo"),_(nt,I,129,6,4510),y(K,"class","grid grid-flow-row gap-2"),_(K,I,127,4,4427),y(ut,"class","grid grid-flow-row gap-2"),_(ut,I,141,4,4847),y($t,"class","grid grid-flow-row gap-2"),_($t,I,148,4,5128),_(Pt,I,200,4,6858),y(n,"class","grid grid-flow-row gap-6"),_(n,I,73,2,2329),_(t,I,72,0,2311)},m:function(x,V){T(x,t,V),m(t,n),m(n,r),C(i,r,null),m(r,s),C(c,r,null),m(n,l),m(n,b),C(p,b,null),m(b,g),C($,b,null),m(n,M),m(n,d),C(H,d,null),m(d,O),C(h,d,null),m(n,A),m(n,U),m(U,X),C(P,X,null),m(X,Dt),C(et,X,null),m(U,Ft),m(U,Q),m(Q,pt),m(pt,Tt),m(Q,a),J.block.m(Q,J.anchor=null),J.mount=()=>Q,J.anchor=null,m(n,Zt),m(n,xt),C(at,xt,null),m(n,Gt),m(n,K),m(K,kt),m(kt,Qt),m(K,Kt),m(K,nt),m(K,te),C(gt,K,null),m(n,ee),m(n,ut),C(ft,ut,null),m(ut,ie),C(ht,ut,null),m(n,oe),m(n,$t),C(vt,$t,null),m($t,se),C(bt,$t,null),m(n,re),z&&z.m(n,null),m(n,Wt),m(n,Pt),C(wt,Pt,null),Yt=!0,ce||(Se=In(e[6].call(null,t)),ce=!0)},p:function(x,[V]){e=x;const j={};!o&&V&8&&(o=!0,j.value=e[3].name,rt(()=>o=!1)),i.$set(j);const St={};V&1342177280&&(St.$$scope={dirty:V,ctx:e}),c.$set(St);const mt={};V&2&&(mt.disabled=e[1]),V&1073741826&&(mt.$$scope={dirty:V,ctx:e}),!u&&V&8&&(u=!0,mt.value=e[3].mod_reference,rt(()=>u=!1)),p.$set(mt);const _t={};V&1342177280&&(_t.$$scope={dirty:V,ctx:e}),$.$set(_t);const Et={};!tt&&V&8&&(tt=!0,Et.value=e[3].short_description,rt(()=>tt=!1)),H.$set(Et);const Vt={};V&1342177280&&(Vt.$$scope={dirty:V,ctx:e}),h.$set(Vt);const Bt={};!G&&V&8&&(G=!0,Bt.value=e[3].full_description,rt(()=>G=!1)),P.$set(Bt);const Nt={};V&1342177280&&(Nt.$$scope={dirty:V,ctx:e}),et.$set(Nt),J.ctx=e,V&32&&lt!==(lt=$e(e[5]))&&Fe(lt,J)||Pn(J,e,V);const qt={};!Jt&&V&4&&(Jt=!0,qt.tags=e[2],rt(()=>Jt=!1)),at.$set(qt);const dt={};V&1342177280&&(dt.$$scope={dirty:V,ctx:e}),gt.$set(dt);const Ct={};!ne&&V&8&&(ne=!0,Ct.value=e[3].source_url,rt(()=>ne=!1)),ft.$set(Ct);const Rt={};V&1342177280&&(Rt.$$scope={dirty:V,ctx:e}),ht.$set(Rt);const Mt={};V&1073741832&&(Mt.$$scope={dirty:V,ctx:e}),vt.$set(Mt);const Lt={};V&1342177280&&(Lt.$$scope={dirty:V,ctx:e}),bt.$set(Lt),e[1]?z?(z.p(e,V),V&2&&w(z,1)):(z=pe(e),z.c(),w(z,1),z.m(n,Wt)):z&&(Ht(),B(z,1,1,()=>{z=null}),Ot());const Ie={};V&1073741825&&(Ie.$$scope={dirty:V,ctx:e}),wt.$set(Ie)},i:function(x){Yt||(w(i.$$.fragment,x),w(c.$$.fragment,x),w(p.$$.fragment,x),w($.$$.fragment,x),w(H.$$.fragment,x),w(h.$$.fragment,x),w(P.$$.fragment,x),w(et.$$.fragment,x),w(at.$$.fragment,x),w(gt.$$.fragment,x),w(ft.$$.fragment,x),w(ht.$$.fragment,x),w(vt.$$.fragment,x),w(bt.$$.fragment,x),w(z),w(wt.$$.fragment,x),Yt=!0)},o:function(x){B(i.$$.fragment,x),B(c.$$.fragment,x),B(p.$$.fragment,x),B($.$$.fragment,x),B(H.$$.fragment,x),B(h.$$.fragment,x),B(P.$$.fragment,x),B(et.$$.fragment,x),B(at.$$.fragment,x),B(gt.$$.fragment,x),B(ft.$$.fragment,x),B(ht.$$.fragment,x),B(vt.$$.fragment,x),B(bt.$$.fragment,x),B(z),B(wt.$$.fragment,x),Yt=!1},d:function(x){x&&f(t),L(i),L(c),L(p),L($),L(H),L(h),L(P),L(et),J.block.d(),J.token=null,J=null,L(at),L(gt),L(ft),L(ht),L(vt),L(bt),z&&z.d(),L(wt),ce=!1,Se()}};return R("SvelteRegisterBlock",{block:Ae,id:we.name,type:"component",source:"",ctx:e}),Ae}function Cn(e,t,n){let r,i,{$$slots:o={},$$scope:s}=t;ze("ModForm",o,[]);let{onSubmit:c}=t,{initialValues:l={full_description:"",mod_reference:"",name:"",short_description:"",source_url:"",hidden:!1,tagIDs:[],compatibility:{EA:{state:ae.Works,note:""},EXP:{state:ae.Works,note:""}}}}=t,{submitText:b="Create"}=t,{editing:p=!1}=t,u=[];const{form:g,data:$}=qe({initialValues:l,extend:[Ce({schema:ue}),Le],onSubmit:a=>c(Ue(a,ue))});Mn($,"data"),An(e,$,a=>n(3,i=a));const M=()=>{i.authors.push({role:"editor",user_id:"",key:""}),$.set(i)},d=a=>{i.authors.splice(a,1),$.set(i)};let H=!1;const tt=i.compatibility;e.$$.on_mount.push(function(){c===void 0&&!("onSubmit"in t||e.$$.bound[e.$$.props.onSubmit])&&console.warn("<ModForm> was created without expected prop 'onSubmit'")});const O=["onSubmit","initialValues","submitText","editing"];Object.keys(t).forEach(a=>{!~O.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<ModForm> was created with unknown prop '${a}'`)});function h(a){e.$$.not_equal(i.name,a)&&(i.name=a,$.set(i))}function A(a){e.$$.not_equal(i.mod_reference,a)&&(i.mod_reference=a,$.set(i))}function U(a){e.$$.not_equal(i.short_description,a)&&(i.short_description=a,$.set(i))}function X(a){e.$$.not_equal(i.full_description,a)&&(i.full_description=a,$.set(i))}function P(a){u=a,n(2,u),n(3,i)}function G(a){e.$$.not_equal(i.source_url,a)&&(i.source_url=a,$.set(i))}function Dt(a){e.$$.not_equal(i.hidden,a)&&(i.hidden=a,$.set(i))}function et(a){H=a,n(4,H)}const Ft=()=>{le($,i.compatibility=H?tt:void 0,i)};function Q(a){e.$$.not_equal(i.compatibility,a)&&(i.compatibility=a,$.set(i))}function pt(a,lt){e.$$.not_equal(i.authors[lt].user_id,a)&&(i.authors[lt].user_id=a,$.set(i))}const Tt=a=>d(a);return e.$$set=a=>{"onSubmit"in a&&n(11,c=a.onSubmit),"initialValues"in a&&n(12,l=a.initialValues),"submitText"in a&&n(0,b=a.submitText),"editing"in a&&n(1,p=a.editing)},e.$capture_state=()=>({createForm:qe,validator:Ce,reporter:Le,ValidationMessage:yt,modSchema:ue,trimNonSchema:Ue,markdown:$e,Textfield:At,HelperText:Xe,Button:Xt,Label:xe,ModAuthor:en,FormField:ye,Switch:ke,TagList:Ze,CompatibilityState:ae,ModCompatibility:Je,onSubmit:c,initialValues:l,submitText:b,editing:p,tags:u,form:g,data:$,addAuthor:M,removeAuthor:d,editCompatibility:H,originalCompatibility:tt,preview:r,$data:i}),e.$inject_state=a=>{"onSubmit"in a&&n(11,c=a.onSubmit),"initialValues"in a&&n(12,l=a.initialValues),"submitText"in a&&n(0,b=a.submitText),"editing"in a&&n(1,p=a.editing),"tags"in a&&n(2,u=a.tags),"editCompatibility"in a&&n(4,H=a.editCompatibility),"preview"in a&&n(5,r=a.preview)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{if(e.$$.dirty&12){const a=i;a.tags&&(n(2,u=a.tags),delete a.tags),le($,i.tagIDs=u.map(lt=>lt.id),i)}e.$$.dirty&8&&le($,i.compatibility=i.compatibility?i.compatibility:void 0,i),e.$$.dirty&10&&(p||delete i.compatibility),e.$$.dirty&8&&n(5,r=i.full_description||"")},[b,p,u,i,H,r,g,$,M,d,tt,c,l,h,A,U,X,P,G,Dt,et,Ft,Q,pt,Tt]}class zn extends Oe{constructor(t){super(t),We(this,t,Cn,we,Ye,{onSubmit:11,initialValues:12,submitText:0,editing:1}),R("SvelteRegisterComponent",{component:this,tagName:"ModForm",options:t,id:we.name})}get onSubmit(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(t){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(t){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(t){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editing(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editing(t){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{zn as M};
//# sourceMappingURL=ModForm.46cdfb7a.js.map
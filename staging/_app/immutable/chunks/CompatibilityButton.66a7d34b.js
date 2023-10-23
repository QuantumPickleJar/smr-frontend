import{S as st,i as at,s as rt,d as k,v as lt,k as z,l as g,P as h,q as $,x as j,y as R,z as O,ac as nt,av as pt,b2 as T,C as X,aK as it,Y as xt,L as S,N as P,ad as C,O as L,aw as vt,a6 as A,a9 as V,m as Ht,t as q,n as Jt,p as F,bq as ft,a8 as H,ab as J,ae as K,aj as G,br as St,bx as Pt,by as Bt,aQ as It,aH as jt,r as Kt,T as Gt,aP as Rt,aO as Tt,ai as Qt}from"./vendor.ce4edcbf.js";import{W as E}from"./graphql.04d4ab78.js";import{m as ct}from"./markdown.0e2d05e8.js";const Yt="src/lib/components/mods/compatibility/OutdatedBanner.svelte";function mt(e){let t;const i={c:function(){t=j("div"),this.h()},l:function(a){t=R(a,"DIV",{class:!0,style:!0}),O(t).forEach($),this.h()},h:function(){nt(t,"class","mod-outdated-stripe"),pt(t,"max-width","inherit"),T(t,"mod-damaged",e[1]===E.Damaged),T(t,"mod-broken",e[1]===E.Broken),T(t,"mod-logo-outdated",e[0]),X(t,Yt,29,2,780)},m:function(a,o){g(a,t,o)},p:function(a,o){o&2&&T(t,"mod-damaged",a[1]===E.Damaged),o&2&&T(t,"mod-broken",a[1]===E.Broken),o&1&&T(t,"mod-logo-outdated",a[0])},d:function(a){a&&$(t)}};return k("SvelteRegisterBlock",{block:i,id:mt.name,type:"if",source:"(29:0) {#if !works}",ctx:e}),i}function ut(e){let t,i=!e[2]&&mt(e);const c={c:function(){i&&i.c(),t=z()},l:function(o){i&&i.l(o),t=z()},m:function(o,n){i&&i.m(o,n),g(o,t,n)},p:function(o,[n]){o[2]?i&&(i.d(1),i=null):i?i.p(o,n):(i=mt(o),i.c(),i.m(t.parentNode,t))},i:h,o:h,d:function(o){i&&i.d(o),o&&$(t)}};return k("SvelteRegisterBlock",{block:c,id:ut.name,type:"component",source:"",ctx:e}),c}function Mt(e,t,i){let c,{$$slots:a={},$$scope:o}=t;lt("OutdatedBanner",a,[]);let{compatibility:n}=t,{logo:s=!1}=t;function p(l){const u=l.EA.state;return u==E.Broken?u:u==E.Works||l.EXP.state!=E.Works?l.EXP.state:u}let r=E.Works;e.$$.on_mount.push(function(){n===void 0&&!("compatibility"in t||e.$$.bound[e.$$.props.compatibility])&&console.warn("<OutdatedBanner> was created without expected prop 'compatibility'")});const m=["compatibility","logo"];return Object.keys(t).forEach(l=>{!~m.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<OutdatedBanner> was created with unknown prop '${l}'`)}),e.$$set=l=>{"compatibility"in l&&i(3,n=l.compatibility),"logo"in l&&i(0,s=l.logo)},e.$capture_state=()=>({CompatibilityState:E,compatibility:n,logo:s,Worst:p,worst:r,works:c}),e.$inject_state=l=>{"compatibility"in l&&i(3,n=l.compatibility),"logo"in l&&i(0,s=l.logo),"worst"in l&&i(1,r=l.worst),"works"in l&&i(2,c=l.works)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{e.$$.dirty&8&&(n?i(1,r=p(n)):i(1,r=E.Works)),e.$$.dirty&2&&i(2,c=r===E.Works)},[s,r,c,n]}class re extends st{constructor(t){super(t),at(this,t,Mt,ut,rt,{compatibility:3,logo:0}),k("SvelteRegisterComponent",{component:this,tagName:"OutdatedBanner",options:t,id:ut.name})}get compatibility(){throw new Error("<OutdatedBanner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<OutdatedBanner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get logo(){throw new Error("<OutdatedBanner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set logo(t){throw new Error("<OutdatedBanner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Zt="src/lib/components/mods/compatibility/CompatibilityStateText.svelte";function $t(e){let t,i=e[1](`compatibility-info.state.${e[2].toString().toLowerCase()}`)+"",c;const a={c:function(){t=j("p"),c=S(i),this.h()},l:function(n){t=R(n,"P",{class:!0});var s=O(t);c=P(s,i),s.forEach($),this.h()},h:function(){nt(t,"class",e[3](e[2])+" mod-state"),X(t,Zt,7,0,251)},m:function(n,s){g(n,t,s),C(t,c)},p:function(n,[s]){s&2&&i!==(i=n[1](`compatibility-info.state.${n[2].toString().toLowerCase()}`)+"")&&L(c,i)},i:h,o:h,d:function(n){n&&$(t)}};return k("SvelteRegisterBlock",{block:a,id:$t.name,type:"component",source:"",ctx:e}),a}function te(e,t,i){let c,a=h,o=()=>(a(),a=vt(r,d=>i(1,c=d)),r);e.$$.on_destroy.push(()=>a());let{$$slots:n={},$$scope:s}=t;lt("CompatibilityStateText",n,[]);let{state:p=null}=t;const{t:r}=it();xt(r,"t"),o();const m=p??"Unknown",l=d=>`mod-state-${d.toString().toLowerCase()}`,u=["state"];return Object.keys(t).forEach(d=>{!~u.indexOf(d)&&d.slice(0,2)!=="$$"&&d!=="slot"&&console.warn(`<CompatibilityStateText> was created with unknown prop '${d}'`)}),e.$$set=d=>{"state"in d&&i(4,p=d.state)},e.$capture_state=()=>({getTranslate:it,state:p,t:r,textForState:m,classForState:l,$t:c}),e.$inject_state=d=>{"state"in d&&i(4,p=d.state)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[r,c,m,l,p]}class dt extends st{constructor(t){super(t),at(this,t,te,$t,rt,{state:4,t:0}),k("SvelteRegisterComponent",{component:this,tagName:"CompatibilityStateText",options:t,id:$t.name})}get state(){throw new Error("<CompatibilityStateText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set state(t){throw new Error("<CompatibilityStateText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[0]}set t(t){throw new Error("<CompatibilityStateText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const U="src/lib/components/mods/compatibility/CompatibilityInfo.svelte";function Xt(e){let t,i=e[2].Unknown+"",c;const a={c:function(){t=j("div"),c=S(i),this.h()},l:function(n){t=R(n,"DIV",{});var s=O(t);c=P(s,i),s.forEach($),this.h()},h:function(){X(t,U,43,2,1641)},m:function(n,s){g(n,t,s),C(t,c)},p:h,i:h,o:h,d:function(n){n&&$(t)}};return k("SvelteRegisterBlock",{block:a,id:Xt.name,type:"else",source:"(43:0) {:else}",ctx:e}),a}function Ot(e){let t,i=e[3]("early-access")+"",c,a,o,n,s,p=e[2][e[0]?.EA?.state||"Unknown"]+"",r,m,l,u,d,b,_=e[3]("experimental")+"",Y,D,N,M,v,y=e[2][e[0]?.EXP?.state||"Unknown"]+"",x,W,et,Q;o=new dt({props:{state:e[0]?.EA?.state},$$inline:!0});let B=e[0].EA.note&&bt(e);N=new dt({props:{state:e[0]?.EXP?.state},$$inline:!0});let I=e[0].EXP.note&&yt(e);const Et={c:function(){t=j("div"),c=S(i),a=S(": "),H(o.$$.fragment),n=A(),s=j("div"),r=S(p),m=A(),B&&B.c(),l=A(),u=j("br"),d=A(),b=j("div"),Y=S(_),D=S(": "),H(N.$$.fragment),M=A(),v=j("div"),x=S(y),W=A(),I&&I.c(),et=z(),this.h()},l:function(f){t=R(f,"DIV",{});var w=O(t);c=P(w,i),a=P(w,": "),J(o.$$.fragment,w),w.forEach($),n=V(f),s=R(f,"DIV",{class:!0});var ot=O(s);r=P(ot,p),ot.forEach($),m=V(f),B&&B.l(f),l=V(f),u=R(f,"BR",{}),d=V(f),b=R(f,"DIV",{});var tt=O(b);Y=P(tt,_),D=P(tt,": "),J(N.$$.fragment,tt),tt.forEach($),M=V(f),v=R(f,"DIV",{class:!0});var Ct=O(v);x=P(Ct,y),Ct.forEach($),W=V(f),I&&I.l(f),et=z(),this.h()},h:function(){X(t,U,19,2,778),nt(s,"class","compatibility-state-description"),X(s,U,20,2,873),X(u,U,30,2,1199),X(b,U,31,2,1208),nt(v,"class","compatibility-state-description"),X(v,U,32,2,1304)},m:function(f,w){g(f,t,w),C(t,c),C(t,a),K(o,t,null),g(f,n,w),g(f,s,w),C(s,r),g(f,m,w),B&&B.m(f,w),g(f,l,w),g(f,u,w),g(f,d,w),g(f,b,w),C(b,Y),C(b,D),K(N,b,null),g(f,M,w),g(f,v,w),C(v,x),g(f,W,w),I&&I.m(f,w),g(f,et,w),Q=!0},p:function(f,w){(!Q||w&8)&&i!==(i=f[3]("early-access")+"")&&L(c,i);const ot={};w&1&&(ot.state=f[0]?.EA?.state),o.$set(ot),(!Q||w&1)&&p!==(p=f[2][f[0]?.EA?.state||"Unknown"]+"")&&L(r,p),f[0].EA.note?B?B.p(f,w):(B=bt(f),B.c(),B.m(l.parentNode,l)):B&&(B.d(1),B=null),(!Q||w&8)&&_!==(_=f[3]("experimental")+"")&&L(Y,_);const tt={};w&1&&(tt.state=f[0]?.EXP?.state),N.$set(tt),(!Q||w&1)&&y!==(y=f[2][f[0]?.EXP?.state||"Unknown"]+"")&&L(x,y),f[0].EXP.note?I?I.p(f,w):(I=yt(f),I.c(),I.m(et.parentNode,et)):I&&(I.d(1),I=null)},i:function(f){Q||(F(o.$$.fragment,f),F(N.$$.fragment,f),Q=!0)},o:function(f){q(o.$$.fragment,f),q(N.$$.fragment,f),Q=!1},d:function(f){f&&$(t),G(o),f&&$(n),f&&$(s),f&&$(m),B&&B.d(f),f&&$(l),f&&$(u),f&&$(d),f&&$(b),G(N),f&&$(M),f&&$(v),f&&$(W),I&&I.d(f),f&&$(et)}};return k("SvelteRegisterBlock",{block:Et,id:Ot.name,type:"if",source:"(19:0) {#if compatibility}",ctx:e}),Et}function bt(e){let t,i=e[3]("compatibility-info.note")+"",c,a,o,n={ctx:e,current:null,token:null,hasCatch:!1,pending:At,then:Dt,catch:_t,value:4};ft(o=ct(e[0].EA.note),n);const s={c:function(){t=j("div"),c=S(i),a=S(": "),n.block.c(),this.h()},l:function(r){t=R(r,"DIV",{});var m=O(t);c=P(m,i),a=P(m,": "),n.block.l(m),m.forEach($),this.h()},h:function(){X(t,U,24,4,1038)},m:function(r,m){g(r,t,m),C(t,c),C(t,a),n.block.m(t,n.anchor=null),n.mount=()=>t,n.anchor=null},p:function(r,m){e=r,m&8&&i!==(i=e[3]("compatibility-info.note")+"")&&L(c,i),n.ctx=e,m&1&&o!==(o=ct(e[0].EA.note))&&ft(o,n)||St(n,e,m)},d:function(r){r&&$(t),n.block.d(),n.token=null,n=null}};return k("SvelteRegisterBlock",{block:s,id:bt.name,type:"if",source:"(24:2) {#if compatibility.EA.note}",ctx:e}),s}function _t(e){const t={c:h,l:h,m:h,p:h,d:h};return k("SvelteRegisterBlock",{block:t,id:_t.name,type:"catch",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:e}),t}function Dt(e){let t,i=e[4]+"",c;const a={c:function(){t=new Pt(!1),c=z(),this.h()},l:function(n){t=Bt(n,!1),c=z(),this.h()},h:function(){t.a=c},m:function(n,s){t.m(i,n,s),g(n,c,s)},p:function(n,s){s&1&&i!==(i=n[4]+"")&&t.p(i)},d:function(n){n&&$(c),n&&t.d()}};return k("SvelteRegisterBlock",{block:a,id:Dt.name,type:"then",source:"(26:93)          {@html rendered}",ctx:e}),a}function At(e){const t={c:h,l:h,m:h,p:h,d:h};return k("SvelteRegisterBlock",{block:t,id:At.name,type:"pending",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:e}),t}function yt(e){let t,i=e[3]("compatibility-info.note")+"",c,a,o,n={ctx:e,current:null,token:null,hasCatch:!1,pending:Wt,then:Nt,catch:Vt,value:4};ft(o=ct(e[0].EXP.note),n);const s={c:function(){t=j("div"),c=S(i),a=S(": "),n.block.c(),this.h()},l:function(r){t=R(r,"DIV",{});var m=O(t);c=P(m,i),a=P(m,": "),n.block.l(m),m.forEach($),this.h()},h:function(){X(t,U,36,4,1471)},m:function(r,m){g(r,t,m),C(t,c),C(t,a),n.block.m(t,n.anchor=null),n.mount=()=>t,n.anchor=null},p:function(r,m){e=r,m&8&&i!==(i=e[3]("compatibility-info.note")+"")&&L(c,i),n.ctx=e,m&1&&o!==(o=ct(e[0].EXP.note))&&ft(o,n)||St(n,e,m)},d:function(r){r&&$(t),n.block.d(),n.token=null,n=null}};return k("SvelteRegisterBlock",{block:s,id:yt.name,type:"if",source:"(36:2) {#if compatibility.EXP.note}",ctx:e}),s}function Vt(e){const t={c:h,l:h,m:h,p:h,d:h};return k("SvelteRegisterBlock",{block:t,id:Vt.name,type:"catch",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:e}),t}function Nt(e){let t,i=e[4]+"",c;const a={c:function(){t=new Pt(!1),c=z(),this.h()},l:function(n){t=Bt(n,!1),c=z(),this.h()},h:function(){t.a=c},m:function(n,s){t.m(i,n,s),g(n,c,s)},p:function(n,s){s&1&&i!==(i=n[4]+"")&&t.p(i)},d:function(n){n&&$(c),n&&t.d()}};return k("SvelteRegisterBlock",{block:a,id:Nt.name,type:"then",source:"(38:94)          {@html rendered}",ctx:e}),a}function Wt(e){const t={c:h,l:h,m:h,p:h,d:h};return k("SvelteRegisterBlock",{block:t,id:Wt.name,type:"pending",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:e}),t}function ht(e){let t,i=e[3]("compatibility-info.maintained-by")+"",c,a,o,n=e[3]("discord")+"",s,p,r,m,l,u,d,b,_;const Y=[Ot,Xt],D=[];function N(v,y){return v[0]?0:1}u=N(e),d=D[u]=Y[u](e);const M={c:function(){t=j("div"),c=S(i),a=A(),o=j("a"),s=S(n),p=S("!"),r=A(),m=j("br"),l=A(),d.c(),b=z(),this.h()},l:function(y){t=R(y,"DIV",{});var x=O(t);c=P(x,i),a=V(x),o=R(x,"A",{href:!0,style:!0});var W=O(o);s=P(W,n),W.forEach($),p=P(x,"!"),x.forEach($),r=V(y),m=R(y,"BR",{}),l=V(y),d.l(y),b=z(),this.h()},h:function(){nt(o,"href","https://discord.gg/xkVJ73E"),pt(o,"text-decoration","underline"),X(o,U,15,2,649),X(t,U,13,0,598),X(m,U,17,0,749)},m:function(y,x){g(y,t,x),C(t,c),C(t,a),C(t,o),C(o,s),C(t,p),g(y,r,x),g(y,m,x),g(y,l,x),D[u].m(y,x),g(y,b,x),_=!0},p:function(y,[x]){(!_||x&8)&&i!==(i=y[3]("compatibility-info.maintained-by")+"")&&L(c,i),(!_||x&8)&&n!==(n=y[3]("discord")+"")&&L(s,n);let W=u;u=N(y),u===W?D[u].p(y,x):(Ht(),q(D[W],1,1,()=>{D[W]=null}),Jt(),d=D[u],d?d.p(y,x):(d=D[u]=Y[u](y),d.c()),F(d,1),d.m(b.parentNode,b))},i:function(y){_||(F(d),_=!0)},o:function(y){q(d),_=!1},d:function(y){y&&$(t),y&&$(r),y&&$(m),y&&$(l),D[u].d(y),y&&$(b)}};return k("SvelteRegisterBlock",{block:M,id:ht.name,type:"component",source:"",ctx:e}),M}function ee(e,t,i){let c,a=h,o=()=>(a(),a=vt(r,u=>i(3,c=u)),r);e.$$.on_destroy.push(()=>a());let{$$slots:n={},$$scope:s}=t;lt("CompatibilityInfo",n,[]);let{compatibility:p}=t;const{t:r}=it();xt(r,"t"),o();const m={Works:c("compatibility-info.state.works.description"),Damaged:c("compatibility-info.state.damaged.description"),Broken:c("compatibility-info.state.broken.description"),Unknown:c("compatibility-info.state.unknown.description")};e.$$.on_mount.push(function(){p===void 0&&!("compatibility"in t||e.$$.bound[e.$$.props.compatibility])&&console.warn("<CompatibilityInfo> was created without expected prop 'compatibility'")});const l=["compatibility"];return Object.keys(t).forEach(u=>{!~l.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<CompatibilityInfo> was created with unknown prop '${u}'`)}),e.$$set=u=>{"compatibility"in u&&i(0,p=u.compatibility)},e.$capture_state=()=>({CompatibilityStateText:dt,markdown:ct,getTranslate:it,compatibility:p,t:r,compatibilityStateDescriptions:m,$t:c}),e.$inject_state=u=>{"compatibility"in u&&i(0,p=u.compatibility)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[p,r,m,c]}class Ut extends st{constructor(t){super(t),at(this,t,ee,ht,rt,{compatibility:0,t:1,compatibilityStateDescriptions:2}),k("SvelteRegisterComponent",{component:this,tagName:"CompatibilityInfo",options:t,id:ht.name})}get compatibility(){throw new Error("<CompatibilityInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<CompatibilityInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get compatibilityStateDescriptions(){return this.$$.ctx[2]}set compatibilityStateDescriptions(t){throw new Error("<CompatibilityInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const ne="src/lib/components/mods/compatibility/CompatibilityIcon.svelte";function gt(e){let t,i;const c={c:function(){t=j("p"),i=S(e[1]),this.h()},l:function(o){t=R(o,"P",{class:!0});var n=O(t);i=P(n,e[1]),n.forEach($),this.h()},h:function(){nt(t,"class","material-icons text-base"),T(t,"mod-state-works",e[0]?.state===E.Works),T(t,"mod-state-damaged",e[0]?.state===E.Damaged),T(t,"mod-state-broken",e[0]?.state===E.Broken),T(t,"mod-state-unknown",!e[0]),X(t,ne,9,0,210)},m:function(o,n){g(o,t,n),C(t,i)},p:function(o,[n]){n&2&&L(i,o[1]),n&1&&T(t,"mod-state-works",o[0]?.state===E.Works),n&1&&T(t,"mod-state-damaged",o[0]?.state===E.Damaged),n&1&&T(t,"mod-state-broken",o[0]?.state===E.Broken),n&1&&T(t,"mod-state-unknown",!o[0])},i:h,o:h,d:function(o){o&&$(t)}};return k("SvelteRegisterBlock",{block:c,id:gt.name,type:"component",source:"",ctx:e}),c}function ie(e,t,i){let{$$slots:c={},$$scope:a}=t;lt("CompatibilityIcon",c,[]);let{compatibility:o=null}=t,{EXP:n=!1}=t,s="rocket_launch";n&&(s="science");const p=["compatibility","EXP"];return Object.keys(t).forEach(r=>{!~p.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<CompatibilityIcon> was created with unknown prop '${r}'`)}),e.$$set=r=>{"compatibility"in r&&i(0,o=r.compatibility),"EXP"in r&&i(2,n=r.EXP)},e.$capture_state=()=>({CompatibilityState:E,compatibility:o,EXP:n,iconText:s}),e.$inject_state=r=>{"compatibility"in r&&i(0,o=r.compatibility),"EXP"in r&&i(2,n=r.EXP),"iconText"in r&&i(1,s=r.iconText)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[o,s,n]}class wt extends st{constructor(t){super(t),at(this,t,ie,gt,rt,{compatibility:0,EXP:2}),k("SvelteRegisterComponent",{component:this,tagName:"CompatibilityIcon",options:t,id:gt.name})}get compatibility(){throw new Error("<CompatibilityIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get EXP(){throw new Error("<CompatibilityIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set EXP(t){throw new Error("<CompatibilityIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function Lt(e){let t,i,c,a;t=new wt({props:{compatibility:e[0]?.EA},$$inline:!0}),c=new wt({props:{compatibility:e[0]?.EXP,EXP:!0},$$inline:!0});const o={c:function(){H(t.$$.fragment),i=A(),H(c.$$.fragment)},l:function(s){J(t.$$.fragment,s),i=V(s),J(c.$$.fragment,s)},m:function(s,p){K(t,s,p),g(s,i,p),K(c,s,p),a=!0},p:function(s,p){const r={};p&1&&(r.compatibility=s[0]?.EA),t.$set(r);const m={};p&1&&(m.compatibility=s[0]?.EXP),c.$set(m)},i:function(s){a||(F(t.$$.fragment,s),F(c.$$.fragment,s),a=!0)},o:function(s){q(t.$$.fragment,s),q(c.$$.fragment,s),a=!1},d:function(s){G(t,s),s&&$(i),G(c,s)}};return k("SvelteRegisterBlock",{block:o,id:Lt.name,type:"slot",source:`(11:0) <Button   --mdc-text-button-container-height=\\"20px\\"   class=\\"min-w-0 m-0\\"   title={$t('compatibility-info.button')}   on:click={() => {     open = true;   }}>`,ctx:e}),o}function qt(e){let t=e[3]("compatibility-info")+"",i;const c={c:function(){i=S(t)},l:function(o){i=P(o,t)},m:function(o,n){g(o,i,n)},p:function(o,n){n&8&&t!==(t=o[3]("compatibility-info")+"")&&L(i,t)},d:function(o){o&&$(i)}};return k("SvelteRegisterBlock",{block:c,id:qt.name,type:"slot",source:"(23:2) <Title>",ctx:e}),c}function Ft(e){let t,i;t=new Ut({props:{compatibility:e[0]},$$inline:!0});const c={c:function(){H(t.$$.fragment)},l:function(o){J(t.$$.fragment,o)},m:function(o,n){K(t,o,n),i=!0},p:function(o,n){const s={};n&1&&(s.compatibility=o[0]),t.$set(s)},i:function(o){i||(F(t.$$.fragment,o),i=!0)},o:function(o){q(t.$$.fragment,o),i=!1},d:function(o){G(t,o)}};return k("SvelteRegisterBlock",{block:c,id:Ft.name,type:"slot",source:"(24:2) <Content>",ctx:e}),c}function zt(e){let t,i,c,a;t=new Tt({props:{$$slots:{default:[qt]},$$scope:{ctx:e}},$$inline:!0}),c=new Rt({props:{$$slots:{default:[Ft]},$$scope:{ctx:e}},$$inline:!0});const o={c:function(){H(t.$$.fragment),i=A(),H(c.$$.fragment)},l:function(s){J(t.$$.fragment,s),i=V(s),J(c.$$.fragment,s)},m:function(s,p){K(t,s,p),g(s,i,p),K(c,s,p),a=!0},p:function(s,p){const r={};p&72&&(r.$$scope={dirty:p,ctx:s}),t.$set(r);const m={};p&65&&(m.$$scope={dirty:p,ctx:s}),c.$set(m)},i:function(s){a||(F(t.$$.fragment,s),F(c.$$.fragment,s),a=!0)},o:function(s){q(t.$$.fragment,s),q(c.$$.fragment,s),a=!1},d:function(s){G(t,s),s&&$(i),G(c,s)}};return k("SvelteRegisterBlock",{block:o,id:zt.name,type:"slot",source:"(22:0) <Dialog bind:open>",ctx:e}),o}function kt(e){let t,i,c,a,o,n;t=new It({props:{class:"min-w-0 m-0",title:e[3]("compatibility-info.button"),$$slots:{default:[Lt]},$$scope:{ctx:e}},$$inline:!0}),t.$on("click",e[4]);function s(m){e[5](m)}let p={$$slots:{default:[zt]},$$scope:{ctx:e}};e[2]!==void 0&&(p.open=e[2]),a=new jt({props:p,$$inline:!0}),Kt.push(()=>Gt(a,"open",s));const r={c:function(){i=j("div"),H(t.$$.fragment),c=A(),H(a.$$.fragment),this.h()},l:function(l){i=R(l,"DIV",{style:!0});var u=O(i);J(t.$$.fragment,u),c=V(l),J(a.$$.fragment,l),this.h()},h:function(){pt(i,"display","contents"),pt(i,"--mdc-text-button-container-height","20px")},m:function(l,u){g(l,i,u),K(t,i,null),g(l,c,u),K(a,l,u),n=!0},p:function(l,[u]){const d={};u&8&&(d.title=l[3]("compatibility-info.button")),u&65&&(d.$$scope={dirty:u,ctx:l}),t.$set(d);const b={};u&73&&(b.$$scope={dirty:u,ctx:l}),!o&&u&4&&(o=!0,b.open=l[2],Qt(()=>o=!1)),a.$set(b)},i:function(l){n||(F(t.$$.fragment,l),F(a.$$.fragment,l),n=!0)},o:function(l){q(t.$$.fragment,l),q(a.$$.fragment,l),n=!1},d:function(l){l&&t&&$(i),G(t,l),l&&$(c),G(a,l)}};return k("SvelteRegisterBlock",{block:r,id:kt.name,type:"component",source:"",ctx:e}),r}function oe(e,t,i){let c,a=h,o=()=>(a(),a=vt(m,b=>i(3,c=b)),m);e.$$.on_destroy.push(()=>a());let{$$slots:n={},$$scope:s}=t;lt("CompatibilityButton",n,[]);let p=!1,{compatibility:r}=t;const{t:m}=it();xt(m,"t"),o(),e.$$.on_mount.push(function(){r===void 0&&!("compatibility"in t||e.$$.bound[e.$$.props.compatibility])&&console.warn("<CompatibilityButton> was created without expected prop 'compatibility'")});const l=["compatibility"];Object.keys(t).forEach(b=>{!~l.indexOf(b)&&b.slice(0,2)!=="$$"&&b!=="slot"&&console.warn(`<CompatibilityButton> was created with unknown prop '${b}'`)});const u=()=>{i(2,p=!0)};function d(b){p=b,i(2,p)}return e.$$set=b=>{"compatibility"in b&&i(0,r=b.compatibility)},e.$capture_state=()=>({Dialog:jt,Content:Rt,Title:Tt,CompatibilityInfo:Ut,Button:It,CompatibilityIcon:wt,getTranslate:it,open:p,compatibility:r,t:m,$t:c}),e.$inject_state=b=>{"open"in b&&i(2,p=b.open),"compatibility"in b&&i(0,r=b.compatibility)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[r,m,p,c,u,d]}class le extends st{constructor(t){super(t),at(this,t,oe,kt,rt,{compatibility:0,t:1}),k("SvelteRegisterComponent",{component:this,tagName:"CompatibilityButton",options:t,id:kt.name})}get compatibility(){throw new Error("<CompatibilityButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<CompatibilityButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{le as C,re as O,Ut as a,dt as b,wt as c};
//# sourceMappingURL=CompatibilityButton.66a7d34b.js.map

import{S as zt,i as Lt,s as Wt,d as W,a6 as at,v as Ut,aa as ft,H as Le,I as ut,w as mt,O as Ae,e as v,X as E,b as N,P as We,g as b,h as V,Y as k,j as p,k as B,R as he,Q as Ue,m as $,$ as ye,N as I,am as Jt,n as O,U as r,an as dt,T as Je,V as pt,ad as Xt,Z as j,r as ve,p as Ht,t as Se,q as Qt,a7 as Yt,az as Zt,W as Xe,a0 as Kt,u as ie,x as en,ao as tn,f as ht,_ as Pt,a8 as nn,a9 as sn}from"./vendor.Czei42k5.js";import{o as on,a as ln,b as rn,e as gt,s as vt,V as Fe,c as bt,v as $t,r as wt}from"./forms.L71L-9ga.js";import{J as cn}from"./jszip.Dunw9h5H.js";import{v as an}from"./uplugin.DHrKEgZQ.js";import{T as yt,V as St}from"./graphql.DSJZyne3.js";import{t as xt}from"./forms.DFefcPfb.js";import{m as He}from"./markdown.D1OBRoE3.js";import{b as Qe}from"./formatting.CJGi6h9M.js";const fn=Object.keys(yt).map(n=>yt[n]).filter(n=>typeof n=="string"),Vt=async(n,e)=>{const t=await an(n);if(t.length!=0)return{message:`invalid ${e}.uplugin`,extended:t};const s=JSON.parse(n),c=s.Plugins?.some(i=>i.Name==="SML"),o=!!s.GameVersion;return!c&&!o?{message:`either GameVersion or SML dependency must be present in ${e}.uplugin`}:s};function un(n){const e=n.split("/");return e[e.length-1]}function mn(n){const e=n.split("/");return e.slice(0,e.length-1).join("/")}const dn=async(n,e)=>new cn().loadAsync(n).then(async s=>{const c=s.filter(f=>un(f)==e+".uplugin");if(c.length===0)return{message:"Mod does not contain any "+e+".uplugin files"};if(c.length===1&&c[0].name===e+".uplugin"){const f=await Vt(await c[0].async("string"),e);return"message"in f?f:{uplugin:f,objects:Object.keys(s.files).filter(m=>m.endsWith(".so")||m.endsWith(".dll")||m.endsWith(".pak")),targets:["Windows"]}}if(c.some(f=>f.name===e+".uplugin"))return{message:"Mod contains "+e+".uplugin files in the root directory. New uploads must use the multi-target format. Read more on the docs: https://docs.ficsit.app/satisfactory-modding/latest/Development/UpdatingToDedi.html"};const o=c.map(f=>mn(f.name)),i=o.filter(f=>!fn.includes(f));if(i.length!==0)return{message:`invalid target(s): ${i.join(", ")}`};const l=s.filter(f=>!o.some(m=>f.startsWith(m+"/")));if(l.length!==0)return{message:`file(s) outside target directories: ${l.map(f=>f.name).join(", ")}`};const h=await Promise.all(c.map(f=>f.async("string").catch(m=>{throw new Error(`invalid ${e}.uplugin: ${m}`)})));if(!h.every(f=>f===h[0]))return{message:"Mod contains "+e+".uplugin files with different contents"};const a=await Vt(h[0],e);return"message"in a?a:{uplugin:a,objects:Object.keys(s.files).filter(f=>f.endsWith(".so")||f.endsWith(".dll")||f.endsWith(".pak")),targets:o}}).catch(s=>({message:"invalid zip/smod file: "+s})),Et=(n,e)=>on({file:ln(rn().superRefine(async(t,s)=>{if(!("name"in t&&"size"in t&&"type"in t)){s.addIssue({message:"Unknown file error",code:gt.custom});return}const c=await dn(t,n);if("message"in c){s.addIssue({message:c.message,code:gt.custom});return}e.set(c)})),changelog:vt(),stability:vt()}),w="src/lib/components/versions/VersionForm.svelte";function kt(n,e,t){const s=n.slice();return s[21]=e[t],s}function Rt(n,e,t){const s=n.slice();return s[24]=e[t],s}function Nt(n){let e,t=(n[20]||"")+"",s;const c={c:function(){e=v("span"),s=E(t),this.h()},l:function(i){e=b(i,"SPAN",{class:!0});var l=V(e);s=k(l,t),l.forEach(p),this.h()},h:function(){I(e,"class","validation-message"),$(e,w,56,8,1815)},m:function(i,l){O(i,e,l),r(e,s)},p:function(i,l){l&1048576&&t!==(t=(i[20]||"")+"")&&j(s,t)},d:function(i){i&&p(e)}};return W("SvelteRegisterBlock",{block:c,id:Nt.name,type:"slot",source:'(47:6) <ValidationMessage for=\\"stability\\" let:messages={message}>',ctx:n}),c}function Ye(n){let e,t,s=n[9]("file")+"",c,o,i,l,h,a,f,m,g,d;a=new Fe({props:{for:"file",$$slots:{default:[Bt,({messages:A})=>({20:A}),({messages:A})=>A?1048576:0]},$$scope:{ctx:n}},$$inline:!0});let u=n[5].file&&Ze(n),y=n[4]&&Ke(n);const C={c:function(){e=v("div"),t=v("label"),c=E(s),o=E(" *"),i=N(),l=v("input"),h=N(),We(a.$$.fragment),f=N(),u&&u.c(),m=N(),y&&y.c(),g=ht(),this.h()},l:function(x){e=b(x,"DIV",{class:!0});var R=V(e);t=b(R,"LABEL",{for:!0});var M=V(t);c=k(M,s),o=k(M," *"),M.forEach(p),i=B(R),l=b(R,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),h=B(R),Ue(a.$$.fragment,R),R.forEach(p),f=B(x),u&&u.l(x),m=B(x),y&&y.l(x),g=ht(),this.h()},h:function(){I(t,"for","file"),$(t,w,62,8,1982),I(l,"id","file"),I(l,"class","base-input"),I(l,"name","file"),I(l,"type","file"),I(l,"accept",".zip,.smod"),I(l,"placeholder","File"),$(l,w,63,8,2031),I(e,"class","grid grid-flow-row gap-2"),$(e,w,61,6,1935)},m:function(x,R){O(x,e,R),r(e,t),r(t,c),r(t,o),r(e,i),r(e,l),r(e,h),Je(a,e,null),O(x,f,R),u&&u.m(x,R),O(x,m,R),y&&y.m(x,R),O(x,g,R),d=!0},p:function(x,R){(!d||R&512)&&s!==(s=x[9]("file")+"")&&j(c,s);const M={};R&135266304&&(M.$$scope={dirty:R,ctx:x}),a.$set(M),x[5].file?u?u.p(x,R):(u=Ze(x),u.c(),u.m(m.parentNode,m)):u&&(u.d(1),u=null),x[4]?y?y.p(x,R):(y=Ke(x),y.c(),y.m(g.parentNode,g)):y&&(y.d(1),y=null)},i:function(x){d||(ve(a.$$.fragment,x),d=!0)},o:function(x){Se(a.$$.fragment,x),d=!1},d:function(x){x&&(p(e),p(f),p(m),p(g)),Xe(a),u&&u.d(x),y&&y.d(x)}};return W("SvelteRegisterBlock",{block:C,id:Ye.name,type:"if",source:"(52:4) {#if !editing}",ctx:n}),C}function Bt(n){let e,t=(n[20]||"")+"",s;const c={c:function(){e=v("span"),s=E(t),this.h()},l:function(i){e=b(i,"SPAN",{class:!0});var l=V(e);s=k(l,t),l.forEach(p),this.h()},h:function(){I(e,"class","validation-message"),$(e,w,65,10,2205)},m:function(i,l){O(i,e,l),r(e,s)},p:function(i,l){l&1048576&&t!==(t=(i[20]||"")+"")&&j(s,t)},d:function(i){i&&p(e)}};return W("SvelteRegisterBlock",{block:c,id:Bt.name,type:"slot",source:'(56:8) <ValidationMessage for=\\"file\\" let:messages={message}>',ctx:n}),c}function Ze(n){let e,t,s,c=n[9]("file-type")+"",o,i,l,h=(n[5].file.type||"Unknown")+"",a,f,m,g,d,u=n[9]("file-size")+"",y,C,A,x=Qe(n[5].file.size)+"",R;const M={c:function(){e=v("div"),t=v("span"),s=v("strong"),o=E(c),i=E(":"),l=N(),a=E(h),f=v("br"),m=N(),g=v("span"),d=v("strong"),y=E(u),C=E(":"),A=N(),R=E(x),this.h()},l:function(F){e=b(F,"DIV",{});var P=V(e);t=b(P,"SPAN",{});var H=V(t);s=b(H,"STRONG",{});var Q=V(s);o=k(Q,c),i=k(Q,":"),Q.forEach(p),l=B(H),a=k(H,h),H.forEach(p),f=b(P,"BR",{}),m=B(P),g=b(P,"SPAN",{});var G=V(g);d=b(G,"STRONG",{});var S=V(d);y=k(S,u),C=k(S,":"),S.forEach(p),A=B(G),R=k(G,x),G.forEach(p),P.forEach(p),this.h()},h:function(){$(s,w,71,16,2357),$(t,w,71,10,2351),$(f,w,71,89,2430),$(d,w,72,16,2453),$(g,w,72,10,2447),$(e,w,70,8,2335)},m:function(F,P){O(F,e,P),r(e,t),r(t,s),r(s,o),r(s,i),r(t,l),r(t,a),r(e,f),r(e,m),r(e,g),r(g,d),r(d,y),r(d,C),r(g,A),r(g,R)},p:function(F,P){P&512&&c!==(c=F[9]("file-type")+"")&&j(o,c),P&32&&h!==(h=(F[5].file.type||"Unknown")+"")&&j(a,h),P&512&&u!==(u=F[9]("file-size")+"")&&j(y,u),P&32&&x!==(x=Qe(F[5].file.size)+"")&&j(R,x)},d:function(F){F&&p(e)}};return W("SvelteRegisterBlock",{block:M,id:Ze.name,type:"if",source:"(61:6) {#if $data.file}",ctx:n}),M}function Ke(n){let e,t,s,c,o=n[9]("version")+"",i,l,h,a=n[4].uplugin.Version+"",f,m,g,d,u,y,C,A="Targets:",x,R=n[4].targets.join(", ")+"",M,_,F,P;function H(X,T){return X[4].uplugin.SemVersion!==void 0?Tt:It}let Q=H(n),G=Q(n);function S(X,T){return X[4].uplugin.GameVersion!==void 0?At:jt}let ae=S(n),D=ae(n),U=n[4].uplugin.Plugins!==void 0&&et(n);function oe(X,T){return X[4].objects&&X[4].objects.length>0?_t:Mt}let fe=oe(n),z=fe(n);const le={c:function(){e=v("div"),t=v("p"),s=v("span"),c=v("strong"),i=E(o),l=E(":"),h=N(),f=E(a),m=v("br"),g=N(),G.c(),d=N(),D.c(),u=N(),y=v("span"),C=v("strong"),C.textContent=A,x=N(),M=E(R),_=v("br"),F=N(),U&&U.c(),P=N(),z.c(),this.h()},l:function(T){e=b(T,"DIV",{});var L=V(e);t=b(L,"P",{class:!0});var re=V(t);s=b(re,"SPAN",{});var ce=V(s);c=b(ce,"STRONG",{});var me=V(c);i=k(me,o),l=k(me,":"),me.forEach(p),h=B(ce),f=k(ce,a),m=b(ce,"BR",{}),ce.forEach(p),g=B(re),G.l(re),d=B(re),D.l(re),re.forEach(p),u=B(L),y=b(L,"SPAN",{});var Y=V(y);C=b(Y,"STRONG",{"data-svelte-h":!0}),he(C)!=="svelte-8zo0qs"&&(C.textContent=A),x=B(Y),M=k(Y,R),_=b(Y,"BR",{}),Y.forEach(p),F=B(L),U&&U.l(L),P=B(L),z.l(L),L.forEach(p),this.h()},h:function(){$(c,w,79,18,2635),$(m,w,79,78,2695),$(s,w,79,12,2629),I(t,"class","mb-4"),$(t,w,78,10,2600),$(C,w,99,16,3423),$(_,w,99,71,3478),$(y,w,99,10,3417),$(e,w,77,8,2584)},m:function(T,L){O(T,e,L),r(e,t),r(t,s),r(s,c),r(c,i),r(c,l),r(s,h),r(s,f),r(s,m),r(t,g),G.m(t,null),r(t,d),D.m(t,null),r(e,u),r(e,y),r(y,C),r(y,x),r(y,M),r(y,_),r(e,F),U&&U.m(e,null),r(e,P),z.m(e,null)},p:function(T,L){L&512&&o!==(o=T[9]("version")+"")&&j(i,o),L&16&&a!==(a=T[4].uplugin.Version+"")&&j(f,a),Q===(Q=H(T))&&G?G.p(T,L):(G.d(1),G=Q(T),G&&(G.c(),G.m(t,d))),ae===(ae=S(T))&&D?D.p(T,L):(D.d(1),D=ae(T),D&&(D.c(),D.m(t,null))),L&16&&R!==(R=T[4].targets.join(", ")+"")&&j(M,R),T[4].uplugin.Plugins!==void 0?U?U.p(T,L):(U=et(T),U.c(),U.m(e,P)):U&&(U.d(1),U=null),fe===(fe=oe(T))&&z?z.p(T,L):(z.d(1),z=fe(T),z&&(z.c(),z.m(e,null)))},d:function(T){T&&p(e),G.d(),D.d(),U&&U.d(),z.d()}};return W("SvelteRegisterBlock",{block:le,id:Ke.name,type:"if",source:"(68:6) {#if $modMeta}",ctx:n}),le}function It(n){let e,t=n[9]("version-form.missing-sem-version")+"",s,c,o=n[4].uplugin.Version+"",i,l;const h={c:function(){e=v("span"),s=E(t),c=N(),i=E(o),l=E(".0.0"),this.h()},l:function(f){e=b(f,"SPAN",{class:!0});var m=V(e);s=k(m,t),c=B(m),i=k(m,o),l=k(m,".0.0"),m.forEach(p),this.h()},h:function(){I(e,"class","text-yellow-600"),$(e,w,84,14,2896)},m:function(f,m){O(f,e,m),r(e,s),r(e,c),r(e,i),r(e,l)},p:function(f,m){m&512&&t!==(t=f[9]("version-form.missing-sem-version")+"")&&j(s,t),m&16&&o!==(o=f[4].uplugin.Version+"")&&j(i,o)},d:function(f){f&&p(e)}};return W("SvelteRegisterBlock",{block:h,id:It.name,type:"else",source:"(75:12) {:else}",ctx:n}),h}function Tt(n){let e,t,s="SemVersion:",c,o=n[4].uplugin.SemVersion+"",i,l;const h={c:function(){e=v("span"),t=v("strong"),t.textContent=s,c=N(),i=E(o),l=v("br"),this.h()},l:function(f){e=b(f,"SPAN",{});var m=V(e);t=b(m,"STRONG",{"data-svelte-h":!0}),he(t)!=="svelte-1q9kpdp"&&(t.textContent=s),c=B(m),i=k(m,o),l=b(m,"BR",{}),m.forEach(p),this.h()},h:function(){$(t,w,82,20,2790),$(l,w,82,78,2848),$(e,w,82,14,2784)},m:function(f,m){O(f,e,m),r(e,t),r(e,c),r(e,i),r(e,l)},p:function(f,m){m&16&&o!==(o=f[4].uplugin.SemVersion+"")&&j(i,o)},d:function(f){f&&p(e)}};return W("SvelteRegisterBlock",{block:h,id:Tt.name,type:"if",source:"(73:12) {#if $modMeta.uplugin.SemVersion !== undefined}",ctx:n}),h}function jt(n){let e,t=n[9]("version-form.missing-game-version")+"",s;const c={c:function(){e=v("span"),s=E(t),this.h()},l:function(i){e=b(i,"SPAN",{class:!0});var l=V(e);s=k(l,t),l.forEach(p),this.h()},h:function(){I(e,"class","text-yellow-600"),$(e,w,93,14,3262)},m:function(i,l){O(i,e,l),r(e,s)},p:function(i,l){l&512&&t!==(t=i[9]("version-form.missing-game-version")+"")&&j(s,t)},d:function(i){i&&p(e)}};return W("SvelteRegisterBlock",{block:c,id:jt.name,type:"else",source:"(84:12) {:else}",ctx:n}),c}function At(n){let e,t,s="Game version:",c,o=n[4].uplugin.GameVersion+"",i,l;const h={c:function(){e=v("span"),t=v("strong"),t.textContent=s,c=N(),i=E(o),l=v("br"),this.h()},l:function(f){e=b(f,"SPAN",{});var m=V(e);t=b(m,"STRONG",{"data-svelte-h":!0}),he(t)!=="svelte-182gpem"&&(t.textContent=s),c=B(m),i=k(m,o),l=b(m,"BR",{}),m.forEach(p),this.h()},h:function(){$(t,w,91,20,3153),$(l,w,91,81,3214),$(e,w,91,14,3147)},m:function(f,m){O(f,e,m),r(e,t),r(e,c),r(e,i),r(e,l)},p:function(f,m){m&16&&o!==(o=f[4].uplugin.GameVersion+"")&&j(i,o)},d:function(f){f&&p(e)}};return W("SvelteRegisterBlock",{block:h,id:At.name,type:"if",source:"(82:12) {#if $modMeta.uplugin.GameVersion !== undefined}",ctx:n}),h}function et(n){let e,t,s=n[9]("dependencies")+"",c,o,i,l,h=Ae(n[7]),a=[];for(let m=0;m<h.length;m+=1)a[m]=tt(Rt(n,h,m));const f={c:function(){e=v("p"),t=v("strong"),c=E(s),o=E(":"),i=v("br"),l=N();for(let g=0;g<a.length;g+=1)a[g].c();this.h()},l:function(g){e=b(g,"P",{});var d=V(e);t=b(d,"STRONG",{});var u=V(t);c=k(u,s),o=k(u,":"),u.forEach(p),i=b(d,"BR",{}),l=B(d);for(let y=0;y<a.length;y+=1)a[y].l(d);d.forEach(p),this.h()},h:function(){$(t,w,103,14,3578),$(i,w,103,52,3616),$(e,w,102,12,3560)},m:function(g,d){O(g,e,d),r(e,t),r(t,c),r(t,o),r(e,i),r(e,l);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(e,null)},p:function(g,d){if(d&512&&s!==(s=g[9]("dependencies")+"")&&j(c,s),d&128){h=Ae(g[7]);let u;for(u=0;u<h.length;u+=1){const y=Rt(g,h,u);a[u]?a[u].p(y,d):(a[u]=tt(y),a[u].c(),a[u].m(e,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=h.length}},d:function(g){g&&p(e),Pt(a,g)}};return W("SvelteRegisterBlock",{block:f,id:et.name,type:"if",source:"(93:10) {#if $modMeta.uplugin.Plugins !== undefined}",ctx:n}),f}function Ft(n){let e,t="*";const s={c:function(){e=v("span"),e.textContent=t,this.h()},l:function(o){e=b(o,"SPAN",{"data-svelte-h":!0}),he(e)!=="svelte-140b0co"&&(e.textContent=t),this.h()},h:function(){$(e,w,109,18,3866)},m:function(o,i){O(o,e,i)},p:ie,d:function(o){o&&p(e)}};return W("SvelteRegisterBlock",{block:s,id:Ft.name,type:"else",source:"(100:16) {:else}",ctx:n}),s}function Ot(n){let e,t=n[24].SemVersion+"",s;const c={c:function(){e=v("span"),s=E(t),this.h()},l:function(i){e=b(i,"SPAN",{});var l=V(e);s=k(l,t),l.forEach(p),this.h()},h:function(){$(e,w,107,18,3787)},m:function(i,l){O(i,e,l),r(e,s)},p:function(i,l){l&128&&t!==(t=i[24].SemVersion+"")&&j(s,t)},d:function(i){i&&p(e)}};return W("SvelteRegisterBlock",{block:c,id:Ot.name,type:"if",source:"(98:16) {#if dependency.SemVersion}",ctx:n}),c}function tt(n){let e,t=n[24].Name+"",s,c,o,i,l;function h(g,d){return g[24].SemVersion?Ot:Ft}let a=h(n),f=a(n);const m={c:function(){e=v("strong"),s=E(t),c=E(":"),o=N(),f.c(),i=N(),l=v("br"),this.h()},l:function(d){e=b(d,"STRONG",{});var u=V(e);s=k(u,t),c=k(u,":"),u.forEach(p),o=B(d),f.l(d),i=B(d),l=b(d,"BR",{}),this.h()},h:function(){$(e,w,105,16,3688),$(l,w,111,16,3919)},m:function(d,u){O(d,e,u),r(e,s),r(e,c),O(d,o,u),f.m(d,u),O(d,i,u),O(d,l,u)},p:function(d,u){u&128&&t!==(t=d[24].Name+"")&&j(s,t),a===(a=h(d))&&f?f.p(d,u):(f.d(1),f=a(d),f&&(f.c(),f.m(i.parentNode,i)))},d:function(d){d&&(p(e),p(o),p(i),p(l)),f.d(d)}};return W("SvelteRegisterBlock",{block:m,id:tt.name,type:"each",source:"(96:14) {#each dependencies as dependency}",ctx:n}),m}function Mt(n){let e,t,s=n[9]("version-form.missing-sem-version")+"",c;const o={c:function(){e=v("p"),t=v("span"),c=E(s),this.h()},l:function(l){e=b(l,"P",{});var h=V(e);t=b(h,"SPAN",{class:!0});var a=V(t);c=k(a,s),a.forEach(p),h.forEach(p),this.h()},h:function(){I(t,"class","text-yellow-600"),$(t,w,126,14,4313),$(e,w,125,12,4295)},m:function(l,h){O(l,e,h),r(e,t),r(t,c)},p:function(l,h){h&512&&s!==(s=l[9]("version-form.missing-sem-version")+"")&&j(c,s)},d:function(l){l&&p(e)}};return W("SvelteRegisterBlock",{block:o,id:Mt.name,type:"else",source:"(116:10) {:else}",ctx:n}),o}function _t(n){let e,t,s=n[9]("objects")+"",c,o,i,l,h=Ae(n[4].objects),a=[];for(let m=0;m<h.length;m+=1)a[m]=nt(kt(n,h,m));const f={c:function(){e=v("p"),t=v("strong"),c=E(s),o=E(":"),i=v("br"),l=N();for(let g=0;g<a.length;g+=1)a[g].c();this.h()},l:function(g){e=b(g,"P",{});var d=V(e);t=b(d,"STRONG",{});var u=V(t);c=k(u,s),o=k(u,":"),u.forEach(p),i=b(d,"BR",{}),l=B(d);for(let y=0;y<a.length;y+=1)a[y].l(d);d.forEach(p),this.h()},h:function(){$(t,w,118,14,4076),$(i,w,118,47,4109),$(e,w,117,12,4058)},m:function(g,d){O(g,e,d),r(e,t),r(t,c),r(t,o),r(e,i),r(e,l);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(e,null)},p:function(g,d){if(d&512&&s!==(s=g[9]("objects")+"")&&j(c,s),d&16){h=Ae(g[4].objects);let u;for(u=0;u<h.length;u+=1){const y=kt(g,h,u);a[u]?a[u].p(y,d):(a[u]=nt(y),a[u].c(),a[u].m(e,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=h.length}},d:function(g){g&&p(e),Pt(a,g)}};return W("SvelteRegisterBlock",{block:f,id:_t.name,type:"if",source:"(108:10) {#if $modMeta.objects && $modMeta.objects.length > 0}",ctx:n}),f}function nt(n){let e,t=n[21]+"",s,c,o;const i={c:function(){e=v("span"),s=E(t),c=N(),o=v("br"),this.h()},l:function(h){e=b(h,"SPAN",{});var a=V(e);s=k(a,t),a.forEach(p),c=B(h),o=b(h,"BR",{}),this.h()},h:function(){$(e,w,120,16,4181),$(o,w,121,16,4219)},m:function(h,a){O(h,e,a),r(e,s),O(h,c,a),O(h,o,a)},p:function(h,a){a&16&&t!==(t=h[21]+"")&&j(s,t)},d:function(h){h&&(p(e),p(c),p(o))}};return W("SvelteRegisterBlock",{block:i,id:nt.name,type:"each",source:"(111:14) {#each $modMeta.objects as object}",ctx:n}),i}function Ct(n){let e,t=(n[20]||"")+"",s;const c={c:function(){e=v("span"),s=E(t),this.h()},l:function(i){e=b(i,"SPAN",{class:!0});var l=V(e);s=k(l,t),l.forEach(p),this.h()},h:function(){I(e,"class","validation-message"),$(e,w,142,10,4865)},m:function(i,l){O(i,e,l),r(e,s)},p:function(i,l){l&1048576&&t!==(t=(i[20]||"")+"")&&j(s,t)},d:function(i){i&&p(e)}};return W("SvelteRegisterBlock",{block:c,id:Ct.name,type:"slot",source:'(133:8) <ValidationMessage for=\\"changelog\\" let:messages={message}>',ctx:n}),c}function Gt(n){const e={c:ie,l:ie,m:ie,p:ie,d:ie};return W("SvelteRegisterBlock",{block:e,id:Gt.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function Dt(n){let e,t,s=n[19]+"";const c={c:function(){e=v("div"),t=new nn(!1),this.h()},l:function(i){e=b(i,"DIV",{class:!0});var l=V(e);t=sn(l,!1),l.forEach(p),this.h()},h:function(){t.a=null,I(e,"class","markdown-content right svelte-1q5q8ki"),$(e,w,149,10,5160)},m:function(i,l){O(i,e,l),t.m(s,e)},p:function(i,l){l&256&&s!==(s=i[19]+"")&&t.p(s)},d:function(i){i&&p(e)}};return W("SvelteRegisterBlock",{block:c,id:Dt.name,type:"then",source:'(139:55)            <!-- eslint-disable -->           <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:n}),c}function qt(n){const e={c:ie,l:ie,m:ie,p:ie,d:ie};return W("SvelteRegisterBlock",{block:e,id:qt.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function st(n){let e,t,s,c,o,i=n[9]("stability")+"",l,h,a,f,m,g="Alpha",d,u="Beta",y,C="Release",A,x,R,M,_,F,P,H,Q=n[9]("changelog")+"",G,S,ae,D,U,oe,fe,z,le,X=n[9]("preview")+"",T,L,re,ce,me,Y,be=n[9]("version-form.agreement-to")+"",xe,Oe,ue,$e=n[9]("content-policy")+"",Ve,Me,_e,ge,ne,de,Ee,Ce,ke,se,Ge,it;x=new Fe({props:{for:"stability",$$slots:{default:[Nt,({messages:Z})=>({20:Z}),({messages:Z})=>Z?1048576:0]},$$scope:{ctx:n}},$$inline:!0});let J=!n[3]&&Ye(n);oe=new Fe({props:{for:"changelog",$$slots:{default:[Ct,({messages:Z})=>({20:Z}),({messages:Z})=>Z?1048576:0]},$$scope:{ctx:n}},$$inline:!0});let K={ctx:n,current:null,token:null,hasCatch:!1,pending:qt,then:Dt,catch:Gt,value:19};at(ce=He(n[8]),K);const ot={c:function(){e=v("form"),t=v("div"),s=v("div"),c=v("label"),o=v("span"),l=E(i),h=E(" *"),a=N(),f=v("select"),m=v("option"),m.textContent=g,d=v("option"),d.textContent=u,y=v("option"),y.textContent=C,A=N(),We(x.$$.fragment),R=N(),J&&J.c(),M=N(),_=v("div"),F=v("div"),P=v("label"),H=v("span"),G=E(Q),S=E(" *"),ae=N(),D=v("textarea"),U=N(),We(oe.$$.fragment),fe=N(),z=v("div"),le=v("span"),T=E(X),L=E(":"),re=N(),K.block.c(),me=N(),Y=v("div"),xe=E(be),Oe=N(),ue=v("a"),Ve=E($e),Me=E("."),_e=N(),ge=v("div"),ne=v("button"),de=v("span"),Ee=E(n[1]),Ce=N(),ke=E(n[2]),this.h()},l:function(ee){e=b(ee,"FORM",{});var q=V(e);t=b(q,"DIV",{class:!0});var te=V(t);s=b(te,"DIV",{class:!0});var pe=V(s);c=b(pe,"LABEL",{class:!0});var Re=V(c);o=b(Re,"SPAN",{});var De=V(o);l=k(De,i),h=k(De," *"),De.forEach(p),a=B(Re),f=b(Re,"SELECT",{class:!0});var Pe=V(f);m=b(Pe,"OPTION",{"data-svelte-h":!0}),he(m)!=="svelte-4emh7a"&&(m.textContent=g),d=b(Pe,"OPTION",{"data-svelte-h":!0}),he(d)!=="svelte-14mt04m"&&(d.textContent=u),y=b(Pe,"OPTION",{"data-svelte-h":!0}),he(y)!=="svelte-zdik1o"&&(y.textContent=C),Pe.forEach(p),Re.forEach(p),A=B(pe),Ue(x.$$.fragment,pe),pe.forEach(p),R=B(te),J&&J.l(te),M=B(te),_=b(te,"DIV",{class:!0});var Ne=V(_);F=b(Ne,"DIV",{class:!0});var Be=V(F);P=b(Be,"LABEL",{class:!0});var Ie=V(P);H=b(Ie,"SPAN",{});var qe=V(H);G=k(qe,Q),S=k(qe," *"),qe.forEach(p),ae=B(Ie),D=b(Ie,"TEXTAREA",{class:!0,rows:!0}),V(D).forEach(p),Ie.forEach(p),U=B(Be),Ue(oe.$$.fragment,Be),Be.forEach(p),fe=B(Ne),z=b(Ne,"DIV",{class:!0});var Te=V(z);le=b(Te,"SPAN",{});var ze=V(le);T=k(ze,X),L=k(ze,":"),ze.forEach(p),re=B(Te),K.block.l(Te),Te.forEach(p),Ne.forEach(p),me=B(te),Y=b(te,"DIV",{class:!0});var we=V(Y);xe=k(we,be),Oe=B(we),ue=b(we,"A",{href:!0,class:!0});var lt=V(ue);Ve=k(lt,$e),lt.forEach(p),Me=k(we,"."),we.forEach(p),_e=B(te),ge=b(te,"DIV",{});var rt=V(ge);ne=b(rt,"BUTTON",{class:!0,type:!0});var je=V(ne);de=b(je,"SPAN",{class:!0});var ct=V(de);Ee=k(ct,n[1]),ct.forEach(p),Ce=B(je),ke=k(je,n[2]),je.forEach(p),rt.forEach(p),te.forEach(p),q.forEach(p),this.h()},h:function(){$(o,w,48,8,1472),m.__value="alpha",ye(m,m.__value),$(m,w,50,10,1576),d.__value="beta",ye(d,d.__value),$(d,w,51,10,1623),y.__value="release",ye(y,y.__value),$(y,w,52,10,1668),I(f,"class","select"),n[5].stability===void 0&&Jt(()=>n[16].call(f)),$(f,w,49,8,1513),I(c,"class","label"),$(c,w,47,6,1442),I(s,"class","grid grid-flow-row gap-2"),$(s,w,46,4,1397),$(H,w,138,10,4628),I(D,"class","vertical-textarea textarea p-2"),D.required=!0,I(D,"rows",10),$(D,w,139,10,4671),I(P,"class","label"),$(P,w,137,8,4596),I(F,"class","grid grid-flow-row auto-rows-max gap-2"),$(F,w,136,6,4535),$(le,w,146,8,5030),I(z,"class","grid grid-flow-row auto-rows-max gap-2"),$(z,w,145,6,4969),I(_,"class","split grid gap-6 svelte-1q5q8ki"),$(_,w,135,4,4498),I(ue,"href","/content-policy"),I(ue,"class","svelte-1q5q8ki"),$(ue,w,155,40,5337),I(Y,"class","text-muted"),$(Y,w,154,4,5272),I(de,"class","material-icons pr-2"),$(de,w,160,8,5495),I(ne,"class","variant-ghost-primary btn"),I(ne,"type","submit"),ne.disabled=n[6],$(ne,w,159,6,5419),$(ge,w,158,4,5407),I(t,"class","grid grid-flow-row gap-6"),$(t,w,45,2,1354),$(e,w,44,0,1336)},m:function(ee,q){O(ee,e,q),r(e,t),r(t,s),r(s,c),r(c,o),r(o,l),r(o,h),r(c,a),r(c,f),r(f,m),r(f,d),r(f,y),dt(f,n[5].stability,!0),r(s,A),Je(x,s,null),r(t,R),J&&J.m(t,null),r(t,M),r(t,_),r(_,F),r(F,P),r(P,H),r(H,G),r(H,S),r(P,ae),r(P,D),ye(D,n[5].changelog),r(F,U),Je(oe,F,null),r(_,fe),r(_,z),r(z,le),r(le,T),r(le,L),r(z,re),K.block.m(z,K.anchor=null),K.mount=()=>z,K.anchor=null,r(t,me),r(t,Y),r(Y,xe),r(Y,Oe),r(Y,ue),r(ue,Ve),r(Y,Me),r(t,_e),r(t,ge),r(ge,ne),r(ne,de),r(de,Ee),r(ne,Ce),r(ne,ke),se=!0,Ge||(it=[pt(f,"change",n[16]),pt(D,"input",n[17]),Xt(n[11].call(null,e))],Ge=!0)},p:function(ee,[q]){n=ee,(!se||q&512)&&i!==(i=n[9]("stability")+"")&&j(l,i),q&32&&dt(f,n[5].stability);const te={};q&135266304&&(te.$$scope={dirty:q,ctx:n}),x.$set(te),n[3]?J&&(Ht(),Se(J,1,1,()=>{J=null}),Qt()):J?(J.p(n,q),q&8&&ve(J,1)):(J=Ye(n),J.c(),ve(J,1),J.m(t,M)),(!se||q&512)&&Q!==(Q=n[9]("changelog")+"")&&j(G,Q),q&32&&ye(D,n[5].changelog);const pe={};q&135266304&&(pe.$$scope={dirty:q,ctx:n}),oe.$set(pe),(!se||q&512)&&X!==(X=n[9]("preview")+"")&&j(T,X),K.ctx=n,q&256&&ce!==(ce=He(n[8]))&&at(ce,K)||Yt(K,n,q),(!se||q&512)&&be!==(be=n[9]("version-form.agreement-to")+"")&&j(xe,be),(!se||q&512)&&$e!==($e=n[9]("content-policy")+"")&&j(Ve,$e),(!se||q&2)&&j(Ee,n[1]),(!se||q&4)&&j(ke,n[2]),(!se||q&64)&&Zt(ne,"disabled",n[6])},i:function(ee){se||(ve(x.$$.fragment,ee),ve(J),ve(oe.$$.fragment,ee),se=!0)},o:function(ee){Se(x.$$.fragment,ee),Se(J),Se(oe.$$.fragment,ee),se=!1},d:function(ee){ee&&p(e),Xe(x),J&&J.d(),Xe(oe),K.block.d(),K.token=null,K=null,Ge=!1,Kt(it)}};return W("SvelteRegisterBlock",{block:ot,id:st.name,type:"component",source:"",ctx:n}),ot}function pn(n,e,t){let s,c,o,i,l,h=ie,a=()=>(h(),h=en(g,S=>t(9,l=S)),g);n.$$.on_destroy.push(()=>h());let{$$slots:f={},$$scope:m}=e;Ut("VersionForm",f,[]);const{t:g}=ft();Le(g,"t"),a();let{modReference:d}=e,{onSubmit:u}=e,{initialValues:y={changelog:"",stability:St.Release}}=e,{submitIcon:C}=e,{submitText:A=l("entry.create")}=e,{editing:x=!1}=e;const R=mt();Le(R,"modMeta"),ut(n,R,S=>t(4,o=S));let M=!1;const _=Et(d,R),{form:F,data:P}=bt({initialValues:y,extend:[$t({schema:_}),wt],onSubmit:S=>{t(6,M=!0),u(xt(S,_)).then(()=>t(6,M=!1))}});Le(P,"data"),ut(n,P,S=>t(5,i=S)),n.$$.on_mount.push(function(){d===void 0&&!("modReference"in e||n.$$.bound[n.$$.props.modReference])&&console.warn("<VersionForm> was created without expected prop 'modReference'"),u===void 0&&!("onSubmit"in e||n.$$.bound[n.$$.props.onSubmit])&&console.warn("<VersionForm> was created without expected prop 'onSubmit'"),C===void 0&&!("submitIcon"in e||n.$$.bound[n.$$.props.submitIcon])&&console.warn("<VersionForm> was created without expected prop 'submitIcon'")});const H=["modReference","onSubmit","initialValues","submitIcon","submitText","editing"];Object.keys(e).forEach(S=>{!~H.indexOf(S)&&S.slice(0,2)!=="$$"&&S!=="slot"&&console.warn(`<VersionForm> was created with unknown prop '${S}'`)});function Q(){i.stability=tn(this),P.set(i)}function G(){i.changelog=this.value,P.set(i)}return n.$$set=S=>{"modReference"in S&&t(13,d=S.modReference),"onSubmit"in S&&t(14,u=S.onSubmit),"initialValues"in S&&t(15,y=S.initialValues),"submitIcon"in S&&t(1,C=S.submitIcon),"submitText"in S&&t(2,A=S.submitText),"editing"in S&&t(3,x=S.editing)},n.$capture_state=()=>({createForm:bt,validator:$t,reporter:wt,ValidationMessage:Fe,constructVersionSchema:Et,trimNonSchema:xt,markdown:He,writable:mt,VersionStabilities:St,prettyBytes:Qe,getTranslate:ft,t:g,modReference:d,onSubmit:u,initialValues:y,submitIcon:C,submitText:A,editing:x,modMeta:R,disabled:M,versionSchema:_,form:F,data:P,dependencies:c,preview:s,$modMeta:o,$data:i,$t:l}),n.$inject_state=S=>{"modReference"in S&&t(13,d=S.modReference),"onSubmit"in S&&t(14,u=S.onSubmit),"initialValues"in S&&t(15,y=S.initialValues),"submitIcon"in S&&t(1,C=S.submitIcon),"submitText"in S&&t(2,A=S.submitText),"editing"in S&&t(3,x=S.editing),"disabled"in S&&t(6,M=S.disabled),"dependencies"in S&&t(7,c=S.dependencies),"preview"in S&&t(8,s=S.preview)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&32&&t(8,s=i.changelog||""),n.$$.dirty&16&&t(7,c=o?.uplugin?.Plugins?.filter(S=>!S.BasePlugin)||[])},[g,C,A,x,o,i,M,c,s,l,R,F,P,d,u,y,Q,G]}class xn extends zt{constructor(e){super(e),Lt(this,e,pn,st,Wt,{t:0,modReference:13,onSubmit:14,initialValues:15,submitIcon:1,submitText:2,editing:3}),W("SvelteRegisterComponent",{component:this,tagName:"VersionForm",options:e,id:st.name})}get t(){return this.$$.ctx[0]}set t(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get modReference(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set modReference(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitIcon(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitIcon(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editing(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editing(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{xn as V};
//# sourceMappingURL=VersionForm.BWYauK6C.js.map
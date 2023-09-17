import{S as jt,i as Ft,s as Ot,d as G,a7 as st,v as Mt,ak as it,a1 as Me,a2 as ot,w as lt,U as Ee,e as $,W as R,b as j,J as Ie,g as w,h as V,X as P,j as h,k as F,M as de,L as _e,m as S,a5 as ue,N as A,am as It,n as _,Q as f,an as rt,O as Ce,Z as ct,ab as _t,Y as I,r as le,p as Ct,t as me,q as Dt,a8 as Lt,ax as zt,R as De,a6 as Gt,u as J,x as Ut,ao as Wt,f as at,V as wt,a9 as Qt,aa as qt}from"./vendor.e9fb1d0e.js";import{o as Ht,a as Jt,b as Kt,e as ft,s as ut,V as ke,c as mt,v as dt,r as ht}from"./forms.3822fb1f.js";import{J as Xt}from"./jszip.aa2ec942.js";import{v as Yt}from"./uplugin.fd127df1.js";import{t as pt}from"./forms.c31a3afb.js";import{m as Le}from"./markdown.98a663d8.js";import{V as gt}from"./graphql.fef59309.js";import{b as ze}from"./formatting.6f84ef8f.js";const Zt=async(n,e,t)=>e.async("string").then(async s=>{const c=await Yt(s);if(c.length!=0)return{message:`invalid ${t}.uplugin`,extended:c};const a=JSON.parse(s);let i=!1;for(const o of a.Plugins)if(o.Name==="SML"){i=!0;break}return i?{uplugin:a,objects:Object.keys(n.files).filter(o=>o.endsWith(".so")||o.endsWith(".dll")||o.endsWith(".pak"))}:{message:"mod must depend on SML"}}).catch(s=>({message:`invalid ${t}.uplugin: ${s}`})),en=async(n,e)=>new Xt().loadAsync(n).then(s=>{const c=s.file("WindowsNoEditor/"+e+".uplugin");return c?Zt(s,c,e):{message:"WindowsNoEditor/"+e+".uplugin missing from mod"}}).catch(s=>({message:"invalid zip/smod file: "+s})),vt=(n,e)=>Ht({file:Jt(Kt().superRefine(async(t,s)=>{if(!("name"in t&&"size"in t&&"type"in t)){s.addIssue({message:"Unknown file error",code:ft.custom});return}const c=await en(t,n);if("message"in c){s.addIssue({message:c.message,code:ft.custom});return}e.set(c)})),changelog:ut(),stability:ut()});const y="src/lib/components/versions/VersionForm.svelte";function bt(n,e,t){const s=n.slice();return s[19]=e[t],s}function $t(n,e,t){const s=n.slice();return s[22]=e[t],s}function St(n){let e,t=(n[18]||"")+"",s;const c={c:function(){e=$("span"),s=R(t),this.h()},l:function(i){e=w(i,"SPAN",{class:!0});var o=V(e);s=P(o,t),o.forEach(h),this.h()},h:function(){A(e,"class","validation-message"),S(e,y,55,8,1784)},m:function(i,o){_(i,e,o),f(e,s)},p:function(i,o){o&262144&&t!==(t=(i[18]||"")+"")&&I(s,t)},d:function(i){i&&h(e)}};return G("SvelteRegisterBlock",{block:c,id:St.name,type:"slot",source:'(46:6) <ValidationMessage for=\\"stability\\" let:messages={message}>',ctx:n}),c}function Ge(n){let e,t,s=n[6]("file")+"",c,a,i,o,p,r,b,d,u,m;r=new ke({props:{for:"file",$$slots:{default:[yt,({messages:E})=>({18:E}),({messages:E})=>E?262144:0]},$$scope:{ctx:n}},$$inline:!0});let l=n[3].file&&Ue(n),x=n[7]&&We(n);const L={c:function(){e=$("div"),t=$("label"),c=R(s),a=R(":"),i=j(),o=$("input"),p=j(),Ie(r.$$.fragment),b=j(),l&&l.c(),d=j(),x&&x.c(),u=at(),this.h()},l:function(g){e=w(g,"DIV",{class:!0});var k=V(e);t=w(k,"LABEL",{for:!0});var O=V(t);c=P(O,s),a=P(O,":"),O.forEach(h),i=F(k),o=w(k,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),p=F(k),_e(r.$$.fragment,k),k.forEach(h),b=F(g),l&&l.l(g),d=F(g),x&&x.l(g),u=at(),this.h()},h:function(){A(t,"for","file"),S(t,y,61,8,1951),A(o,"id","file"),A(o,"class","base-input"),A(o,"name","file"),A(o,"type","file"),A(o,"accept",".zip,.smod"),A(o,"placeholder","File"),S(o,y,62,8,1999),A(e,"class","grid grid-flow-row gap-2"),S(e,y,60,6,1904)},m:function(g,k){_(g,e,k),f(e,t),f(t,c),f(t,a),f(e,i),f(e,o),f(e,p),Ce(r,e,null),_(g,b,k),l&&l.m(g,k),_(g,d,k),x&&x.m(g,k),_(g,u,k),m=!0},p:function(g,k){(!m||k&64)&&s!==(s=g[6]("file")+"")&&I(c,s);const O={};k&33816576&&(O.$$scope={dirty:k,ctx:g}),r.$set(O),g[3].file?l?l.p(g,k):(l=Ue(g),l.c(),l.m(d.parentNode,d)):l&&(l.d(1),l=null),g[7]?x?x.p(g,k):(x=We(g),x.c(),x.m(u.parentNode,u)):x&&(x.d(1),x=null)},i:function(g){m||(le(r.$$.fragment,g),m=!0)},o:function(g){me(r.$$.fragment,g),m=!1},d:function(g){g&&(h(e),h(b),h(d),h(u)),De(r),l&&l.d(g),x&&x.d(g)}};return G("SvelteRegisterBlock",{block:L,id:Ge.name,type:"if",source:"(51:4) {#if !editing}",ctx:n}),L}function yt(n){let e,t=(n[18]||"")+"",s;const c={c:function(){e=$("span"),s=R(t),this.h()},l:function(i){e=w(i,"SPAN",{class:!0});var o=V(e);s=P(o,t),o.forEach(h),this.h()},h:function(){A(e,"class","validation-message"),S(e,y,64,10,2173)},m:function(i,o){_(i,e,o),f(e,s)},p:function(i,o){o&262144&&t!==(t=(i[18]||"")+"")&&I(s,t)},d:function(i){i&&h(e)}};return G("SvelteRegisterBlock",{block:c,id:yt.name,type:"slot",source:'(55:8) <ValidationMessage for=\\"file\\" let:messages={message}>',ctx:n}),c}function Ue(n){let e,t,s,c=n[6]("file-type")+"",a,i,o,p=(n[3].file.type||"Unknown")+"",r,b,d,u,m,l=n[6]("file-size")+"",x,L,E,g=ze(n[3].file.size)+"",k;const O={c:function(){e=$("div"),t=$("span"),s=$("strong"),a=R(c),i=R(":"),o=j(),r=R(p),b=$("br"),d=j(),u=$("span"),m=$("strong"),x=R(l),L=R(":"),E=j(),k=R(g),this.h()},l:function(M){e=w(M,"DIV",{});var B=V(e);t=w(B,"SPAN",{});var T=V(t);s=w(T,"STRONG",{});var v=V(s);a=P(v,c),i=P(v,":"),v.forEach(h),o=F(T),r=P(T,p),T.forEach(h),b=w(B,"BR",{}),d=F(B),u=w(B,"SPAN",{});var W=V(u);m=w(W,"STRONG",{});var D=V(m);x=P(D,l),L=P(D,":"),D.forEach(h),E=F(W),k=P(W,g),W.forEach(h),B.forEach(h),this.h()},h:function(){S(s,y,70,16,2325),S(t,y,70,10,2319),S(b,y,70,89,2398),S(m,y,71,16,2421),S(u,y,71,10,2415),S(e,y,69,8,2303)},m:function(M,B){_(M,e,B),f(e,t),f(t,s),f(s,a),f(s,i),f(t,o),f(t,r),f(e,b),f(e,d),f(e,u),f(u,m),f(m,x),f(m,L),f(u,E),f(u,k)},p:function(M,B){B&64&&c!==(c=M[6]("file-type")+"")&&I(a,c),B&8&&p!==(p=(M[3].file.type||"Unknown")+"")&&I(r,p),B&64&&l!==(l=M[6]("file-size")+"")&&I(x,l),B&8&&g!==(g=ze(M[3].file.size)+"")&&I(k,g)},d:function(M){M&&h(e)}};return G("SvelteRegisterBlock",{block:O,id:Ue.name,type:"if",source:"(60:6) {#if $data.file}",ctx:n}),O}function We(n){let e,t,s,c,a=n[6]("version")+"",i,o,p,r=n[7].uplugin.Version+"",b,d,u,m,l;function x(B,T){return B[7].uplugin.SemVersion!==void 0?Vt:xt}let L=x(n),E=L(n),g=n[7].uplugin.Plugins!==void 0&&Qe(n);function k(B,T){return B[7].objects&&B[7].objects.length>0?Pt:Rt}let O=k(n),N=O(n);const M={c:function(){e=$("div"),t=$("p"),s=$("span"),c=$("strong"),i=R(a),o=R(":"),p=j(),b=R(r),d=$("br"),u=j(),E.c(),m=j(),g&&g.c(),l=j(),N.c(),this.h()},l:function(T){e=w(T,"DIV",{});var v=V(e);t=w(v,"P",{class:!0});var W=V(t);s=w(W,"SPAN",{});var D=V(s);c=w(D,"STRONG",{});var ne=V(c);i=P(ne,a),o=P(ne,":"),ne.forEach(h),p=F(D),b=P(D,r),d=w(D,"BR",{}),D.forEach(h),u=F(W),E.l(W),W.forEach(h),m=F(v),g&&g.l(v),l=F(v),N.l(v),v.forEach(h),this.h()},h:function(){S(c,y,78,18,2603),S(d,y,78,78,2663),S(s,y,78,12,2597),A(t,"class","mb-4"),S(t,y,77,10,2568),S(e,y,76,8,2552)},m:function(T,v){_(T,e,v),f(e,t),f(t,s),f(s,c),f(c,i),f(c,o),f(s,p),f(s,b),f(s,d),f(t,u),E.m(t,null),f(e,m),g&&g.m(e,null),f(e,l),N.m(e,null)},p:function(T,v){v&64&&a!==(a=T[6]("version")+"")&&I(i,a),v&128&&r!==(r=T[7].uplugin.Version+"")&&I(b,r),L===(L=x(T))&&E?E.p(T,v):(E.d(1),E=L(T),E&&(E.c(),E.m(t,null))),T[7].uplugin.Plugins!==void 0?g?g.p(T,v):(g=Qe(T),g.c(),g.m(e,l)):g&&(g.d(1),g=null),O===(O=k(T))&&N?N.p(T,v):(N.d(1),N=O(T),N&&(N.c(),N.m(e,null)))},d:function(T){T&&h(e),E.d(),g&&g.d(),N.d()}};return G("SvelteRegisterBlock",{block:M,id:We.name,type:"if",source:"(67:6) {#if $modMeta}",ctx:n}),M}function xt(n){let e,t=n[6]("version-form.missing-sem-version")+"",s,c,a=n[7].uplugin.Version+"",i,o;const p={c:function(){e=$("span"),s=R(t),c=j(),i=R(a),o=R(".0.0"),this.h()},l:function(b){e=w(b,"SPAN",{class:!0});var d=V(e);s=P(d,t),c=F(d),i=P(d,a),o=P(d,".0.0"),d.forEach(h),this.h()},h:function(){A(e,"class","text-yellow-600"),S(e,y,83,14,2864)},m:function(b,d){_(b,e,d),f(e,s),f(e,c),f(e,i),f(e,o)},p:function(b,d){d&64&&t!==(t=b[6]("version-form.missing-sem-version")+"")&&I(s,t),d&128&&a!==(a=b[7].uplugin.Version+"")&&I(i,a)},d:function(b){b&&h(e)}};return G("SvelteRegisterBlock",{block:p,id:xt.name,type:"else",source:"(74:12) {:else}",ctx:n}),p}function Vt(n){let e,t,s="SemVersion:",c,a=n[7].uplugin.SemVersion+"",i,o;const p={c:function(){e=$("span"),t=$("strong"),t.textContent=s,c=j(),i=R(a),o=$("br"),this.h()},l:function(b){e=w(b,"SPAN",{});var d=V(e);t=w(d,"STRONG",{"data-svelte-h":!0}),de(t)!=="svelte-1q9kpdp"&&(t.textContent=s),c=F(d),i=P(d,a),o=w(d,"BR",{}),d.forEach(h),this.h()},h:function(){S(t,y,81,20,2758),S(o,y,81,78,2816),S(e,y,81,14,2752)},m:function(b,d){_(b,e,d),f(e,t),f(e,c),f(e,i),f(e,o)},p:function(b,d){d&128&&a!==(a=b[7].uplugin.SemVersion+"")&&I(i,a)},d:function(b){b&&h(e)}};return G("SvelteRegisterBlock",{block:p,id:Vt.name,type:"if",source:"(72:12) {#if $modMeta.uplugin.SemVersion !== undefined}",ctx:n}),p}function Qe(n){let e,t,s=n[6]("dependencies")+"",c,a,i,o,p=Ee(n[7].uplugin.Plugins),r=[];for(let d=0;d<p.length;d+=1)r[d]=qe($t(n,p,d));const b={c:function(){e=$("p"),t=$("strong"),c=R(s),a=R(":"),i=$("br"),o=j();for(let u=0;u<r.length;u+=1)r[u].c();this.h()},l:function(u){e=w(u,"P",{});var m=V(e);t=w(m,"STRONG",{});var l=V(t);c=P(l,s),a=P(l,":"),l.forEach(h),i=w(m,"BR",{}),o=F(m);for(let x=0;x<r.length;x+=1)r[x].l(m);m.forEach(h),this.h()},h:function(){S(t,y,92,14,3140),S(i,y,92,52,3178),S(e,y,91,12,3122)},m:function(u,m){_(u,e,m),f(e,t),f(t,c),f(t,a),f(e,i),f(e,o);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null)},p:function(u,m){if(m&64&&s!==(s=u[6]("dependencies")+"")&&I(c,s),m&128){p=Ee(u[7].uplugin.Plugins);let l;for(l=0;l<p.length;l+=1){const x=$t(u,p,l);r[l]?r[l].p(x,m):(r[l]=qe(x),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=p.length}},d:function(u){u&&h(e),wt(r,u)}};return G("SvelteRegisterBlock",{block:b,id:Qe.name,type:"if",source:"(82:10) {#if $modMeta.uplugin.Plugins !== undefined}",ctx:n}),b}function Et(n){let e,t="*";const s={c:function(){e=$("span"),e.textContent=t,this.h()},l:function(a){e=w(a,"SPAN",{"data-svelte-h":!0}),de(e)!=="svelte-140b0co"&&(e.textContent=t),this.h()},h:function(){S(e,y,98,18,3440)},m:function(a,i){_(a,e,i)},p:J,d:function(a){a&&h(e)}};return G("SvelteRegisterBlock",{block:s,id:Et.name,type:"else",source:"(89:16) {:else}",ctx:n}),s}function kt(n){let e,t=n[22].SemVersion+"",s;const c={c:function(){e=$("span"),s=R(t),this.h()},l:function(i){e=w(i,"SPAN",{});var o=V(e);s=P(o,t),o.forEach(h),this.h()},h:function(){S(e,y,96,18,3361)},m:function(i,o){_(i,e,o),f(e,s)},p:function(i,o){o&128&&t!==(t=i[22].SemVersion+"")&&I(s,t)},d:function(i){i&&h(e)}};return G("SvelteRegisterBlock",{block:c,id:kt.name,type:"if",source:"(87:16) {#if dependency.SemVersion}",ctx:n}),c}function qe(n){let e,t=n[22].Name+"",s,c,a,i,o;function p(u,m){return u[22].SemVersion?kt:Et}let r=p(n),b=r(n);const d={c:function(){e=$("strong"),s=R(t),c=R(":"),a=j(),b.c(),i=j(),o=$("br"),this.h()},l:function(m){e=w(m,"STRONG",{});var l=V(e);s=P(l,t),c=P(l,":"),l.forEach(h),a=F(m),b.l(m),i=F(m),o=w(m,"BR",{}),this.h()},h:function(){S(e,y,94,16,3262),S(o,y,100,16,3493)},m:function(m,l){_(m,e,l),f(e,s),f(e,c),_(m,a,l),b.m(m,l),_(m,i,l),_(m,o,l)},p:function(m,l){l&128&&t!==(t=m[22].Name+"")&&I(s,t),r===(r=p(m))&&b?b.p(m,l):(b.d(1),b=r(m),b&&(b.c(),b.m(i.parentNode,i)))},d:function(m){m&&(h(e),h(a),h(i),h(o)),b.d(m)}};return G("SvelteRegisterBlock",{block:d,id:qe.name,type:"each",source:"(85:14) {#each $modMeta.uplugin.Plugins as dependency}",ctx:n}),d}function Rt(n){let e,t,s=n[6]("version-form.missing-sem-version")+"",c;const a={c:function(){e=$("p"),t=$("span"),c=R(s),this.h()},l:function(o){e=w(o,"P",{});var p=V(e);t=w(p,"SPAN",{class:!0});var r=V(t);c=P(r,s),r.forEach(h),p.forEach(h),this.h()},h:function(){A(t,"class","text-yellow-600"),S(t,y,115,14,3887),S(e,y,114,12,3869)},m:function(o,p){_(o,e,p),f(e,t),f(t,c)},p:function(o,p){p&64&&s!==(s=o[6]("version-form.missing-sem-version")+"")&&I(c,s)},d:function(o){o&&h(e)}};return G("SvelteRegisterBlock",{block:a,id:Rt.name,type:"else",source:"(105:10) {:else}",ctx:n}),a}function Pt(n){let e,t,s=n[6]("objects")+"",c,a,i,o,p=Ee(n[7].objects),r=[];for(let d=0;d<p.length;d+=1)r[d]=He(bt(n,p,d));const b={c:function(){e=$("p"),t=$("strong"),c=R(s),a=R(":"),i=$("br"),o=j();for(let u=0;u<r.length;u+=1)r[u].c();this.h()},l:function(u){e=w(u,"P",{});var m=V(e);t=w(m,"STRONG",{});var l=V(t);c=P(l,s),a=P(l,":"),l.forEach(h),i=w(m,"BR",{}),o=F(m);for(let x=0;x<r.length;x+=1)r[x].l(m);m.forEach(h),this.h()},h:function(){S(t,y,107,14,3650),S(i,y,107,47,3683),S(e,y,106,12,3632)},m:function(u,m){_(u,e,m),f(e,t),f(t,c),f(t,a),f(e,i),f(e,o);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null)},p:function(u,m){if(m&64&&s!==(s=u[6]("objects")+"")&&I(c,s),m&128){p=Ee(u[7].objects);let l;for(l=0;l<p.length;l+=1){const x=bt(u,p,l);r[l]?r[l].p(x,m):(r[l]=He(x),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=p.length}},d:function(u){u&&h(e),wt(r,u)}};return G("SvelteRegisterBlock",{block:b,id:Pt.name,type:"if",source:"(97:10) {#if $modMeta.objects && $modMeta.objects.length > 0}",ctx:n}),b}function He(n){let e,t=n[19]+"",s,c,a;const i={c:function(){e=$("span"),s=R(t),c=j(),a=$("br"),this.h()},l:function(p){e=w(p,"SPAN",{});var r=V(e);s=P(r,t),r.forEach(h),c=F(p),a=w(p,"BR",{}),this.h()},h:function(){S(e,y,109,16,3755),S(a,y,110,16,3793)},m:function(p,r){_(p,e,r),f(e,s),_(p,c,r),_(p,a,r)},p:function(p,r){r&128&&t!==(t=p[19]+"")&&I(s,t)},d:function(p){p&&(h(e),h(c),h(a))}};return G("SvelteRegisterBlock",{block:i,id:He.name,type:"each",source:"(100:14) {#each $modMeta.objects as object}",ctx:n}),i}function Nt(n){let e,t=(n[18]||"")+"",s;const c={c:function(){e=$("span"),s=R(t),this.h()},l:function(i){e=w(i,"SPAN",{class:!0});var o=V(e);s=P(o,t),o.forEach(h),this.h()},h:function(){A(e,"class","validation-message"),S(e,y,131,10,4437)},m:function(i,o){_(i,e,o),f(e,s)},p:function(i,o){o&262144&&t!==(t=(i[18]||"")+"")&&I(s,t)},d:function(i){i&&h(e)}};return G("SvelteRegisterBlock",{block:c,id:Nt.name,type:"slot",source:'(122:8) <ValidationMessage for=\\"changelog\\" let:messages={message}>',ctx:n}),c}function Bt(n){const e={c:J,l:J,m:J,p:J,d:J};return G("SvelteRegisterBlock",{block:e,id:Bt.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function Tt(n){let e,t,s=n[17]+"";const c={c:function(){e=$("div"),t=new Qt(!1),this.h()},l:function(i){e=w(i,"DIV",{class:!0});var o=V(e);t=qt(o,!1),o.forEach(h),this.h()},h:function(){t.a=null,A(e,"class","markdown-content right s-Aj89xH93RQKp"),S(e,y,138,10,4732)},m:function(i,o){_(i,e,o),t.m(s,e)},p:function(i,o){o&32&&s!==(s=i[17]+"")&&t.p(s)},d:function(i){i&&h(e)}};return G("SvelteRegisterBlock",{block:c,id:Tt.name,type:"then",source:'(128:55)            <!-- eslint-disable -->           <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:n}),c}function At(n){const e={c:J,l:J,m:J,p:J,d:J};return G("SvelteRegisterBlock",{block:e,id:At.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function Je(n){let e,t,s,c,a,i=n[6]("stability")+"",o,p,r,b,d="Alpha",u,m="Beta",l,x="Release",L,E,g,k,O,N,M,B,T=n[6]("changelog")+"",v,W,D,ne,ee,Re,X,se,re=n[6]("preview")+"",he,Pe,Ne,pe,Be,Y,ce=n[6]("version-form.agreement-to")+"",ge,Te,te,ae=n[6]("content-policy")+"",ve,Ae,je,oe,Z,be,K,Fe,Ke;E=new ke({props:{for:"stability",$$slots:{default:[St,({messages:U})=>({18:U}),({messages:U})=>U?262144:0]},$$scope:{ctx:n}},$$inline:!0});let z=!n[2]&&Ge(n);ee=new ke({props:{for:"changelog",$$slots:{default:[Nt,({messages:U})=>({18:U}),({messages:U})=>U?262144:0]},$$scope:{ctx:n}},$$inline:!0});let Q={ctx:n,current:null,token:null,hasCatch:!1,pending:At,then:Tt,catch:Bt,value:17};st(pe=Le(n[5]),Q);const Xe={c:function(){e=$("form"),t=$("div"),s=$("div"),c=$("label"),a=$("span"),o=R(i),p=j(),r=$("select"),b=$("option"),b.textContent=d,u=$("option"),u.textContent=m,l=$("option"),l.textContent=x,L=j(),Ie(E.$$.fragment),g=j(),z&&z.c(),k=j(),O=$("div"),N=$("div"),M=$("label"),B=$("span"),v=R(T),W=j(),D=$("textarea"),ne=j(),Ie(ee.$$.fragment),Re=j(),X=$("div"),se=$("span"),he=R(re),Pe=R(":"),Ne=j(),Q.block.c(),Be=j(),Y=$("div"),ge=R(ce),Te=j(),te=$("a"),ve=R(ae),Ae=R("."),je=j(),oe=$("div"),Z=$("button"),be=R(n[1]),this.h()},l:function(q){e=w(q,"FORM",{});var C=V(e);t=w(C,"DIV",{class:!0});var H=V(t);s=w(H,"DIV",{class:!0});var ie=V(s);c=w(ie,"LABEL",{class:!0});var $e=V(c);a=w($e,"SPAN",{});var Ye=V(a);o=P(Ye,i),Ye.forEach(h),p=F($e),r=w($e,"SELECT",{class:!0});var we=V(r);b=w(we,"OPTION",{"data-svelte-h":!0}),de(b)!=="svelte-4emh7a"&&(b.textContent=d),u=w(we,"OPTION",{"data-svelte-h":!0}),de(u)!=="svelte-14mt04m"&&(u.textContent=m),l=w(we,"OPTION",{"data-svelte-h":!0}),de(l)!=="svelte-zdik1o"&&(l.textContent=x),we.forEach(h),$e.forEach(h),L=F(ie),_e(E.$$.fragment,ie),ie.forEach(h),g=F(H),z&&z.l(H),k=F(H),O=w(H,"DIV",{class:!0});var Se=V(O);N=w(Se,"DIV",{class:!0});var ye=V(N);M=w(ye,"LABEL",{class:!0});var xe=V(M);B=w(xe,"SPAN",{});var Ze=V(B);v=P(Ze,T),Ze.forEach(h),W=F(xe),D=w(xe,"TEXTAREA",{class:!0,rows:!0}),V(D).forEach(h),xe.forEach(h),ne=F(ye),_e(ee.$$.fragment,ye),ye.forEach(h),Re=F(Se),X=w(Se,"DIV",{class:!0});var Ve=V(X);se=w(Ve,"SPAN",{});var Oe=V(se);he=P(Oe,re),Pe=P(Oe,":"),Oe.forEach(h),Ne=F(Ve),Q.block.l(Ve),Ve.forEach(h),Se.forEach(h),Be=F(H),Y=w(H,"DIV",{class:!0});var fe=V(Y);ge=P(fe,ce),Te=F(fe),te=w(fe,"A",{href:!0,class:!0});var et=V(te);ve=P(et,ae),et.forEach(h),Ae=P(fe,"."),fe.forEach(h),je=F(H),oe=w(H,"DIV",{});var tt=V(oe);Z=w(tt,"BUTTON",{class:!0,type:!0});var nt=V(Z);be=P(nt,n[1]),nt.forEach(h),tt.forEach(h),H.forEach(h),C.forEach(h),this.h()},h:function(){S(a,y,47,8,1443),b.__value="alpha",ue(b,b.__value),S(b,y,49,10,1545),u.__value="beta",ue(u,u.__value),S(u,y,50,10,1592),l.__value="release",ue(l,l.__value),S(l,y,51,10,1637),A(r,"class","select"),n[3].stability===void 0&&It(()=>n[14].call(r)),S(r,y,48,8,1482),A(c,"class","label"),S(c,y,46,6,1413),A(s,"class","grid grid-flow-row gap-2"),S(s,y,45,4,1368),S(B,y,127,10,4202),A(D,"class","vertical-textarea textarea p-2"),D.required=!0,A(D,"rows",10),S(D,y,128,10,4243),A(M,"class","label"),S(M,y,126,8,4170),A(N,"class","grid grid-flow-row gap-2 auto-rows-max"),S(N,y,125,6,4109),S(se,y,135,8,4602),A(X,"class","grid grid-flow-row gap-2 auto-rows-max"),S(X,y,134,6,4541),A(O,"class","grid gap-6 split s-Aj89xH93RQKp"),S(O,y,124,4,4072),A(te,"href","/content-policy"),A(te,"class","s-Aj89xH93RQKp"),S(te,y,144,40,4909),A(Y,"class","text-muted"),S(Y,y,143,4,4844),A(Z,"class","btn variant-ghost-primary"),A(Z,"type","submit"),Z.disabled=n[4],S(Z,y,148,6,4991),S(oe,y,147,4,4979),A(t,"class","grid grid-flow-row gap-6"),S(t,y,44,2,1325),S(e,y,43,0,1307)},m:function(q,C){_(q,e,C),f(e,t),f(t,s),f(s,c),f(c,a),f(a,o),f(c,p),f(c,r),f(r,b),f(r,u),f(r,l),rt(r,n[3].stability,!0),f(s,L),Ce(E,s,null),f(t,g),z&&z.m(t,null),f(t,k),f(t,O),f(O,N),f(N,M),f(M,B),f(B,v),f(M,W),f(M,D),ue(D,n[3].changelog),f(N,ne),Ce(ee,N,null),f(O,Re),f(O,X),f(X,se),f(se,he),f(se,Pe),f(X,Ne),Q.block.m(X,Q.anchor=null),Q.mount=()=>X,Q.anchor=null,f(t,Be),f(t,Y),f(Y,ge),f(Y,Te),f(Y,te),f(te,ve),f(Y,Ae),f(t,je),f(t,oe),f(oe,Z),f(Z,be),K=!0,Fe||(Ke=[ct(r,"change",n[14]),ct(D,"input",n[15]),_t(n[9].call(null,e))],Fe=!0)},p:function(q,[C]){n=q,(!K||C&64)&&i!==(i=n[6]("stability")+"")&&I(o,i),C&8&&rt(r,n[3].stability);const H={};C&33816576&&(H.$$scope={dirty:C,ctx:n}),E.$set(H),n[2]?z&&(Ct(),me(z,1,1,()=>{z=null}),Dt()):z?(z.p(n,C),C&4&&le(z,1)):(z=Ge(n),z.c(),le(z,1),z.m(t,k)),(!K||C&64)&&T!==(T=n[6]("changelog")+"")&&I(v,T),C&8&&ue(D,n[3].changelog);const ie={};C&33816576&&(ie.$$scope={dirty:C,ctx:n}),ee.$set(ie),(!K||C&64)&&re!==(re=n[6]("preview")+"")&&I(he,re),Q.ctx=n,C&32&&pe!==(pe=Le(n[5]))&&st(pe,Q)||Lt(Q,n,C),(!K||C&64)&&ce!==(ce=n[6]("version-form.agreement-to")+"")&&I(ge,ce),(!K||C&64)&&ae!==(ae=n[6]("content-policy")+"")&&I(ve,ae),(!K||C&2)&&I(be,n[1]),(!K||C&16)&&zt(Z,"disabled",n[4])},i:function(q){K||(le(E.$$.fragment,q),le(z),le(ee.$$.fragment,q),K=!0)},o:function(q){me(E.$$.fragment,q),me(z),me(ee.$$.fragment,q),K=!1},d:function(q){q&&h(e),De(E),z&&z.d(),De(ee),Q.block.d(),Q.token=null,Q=null,Fe=!1,Gt(Ke)}};return G("SvelteRegisterBlock",{block:Xe,id:Je.name,type:"component",source:"",ctx:n}),Xe}function tn(n,e,t){let s,c,a,i=J,o=()=>(i(),i=Ut(d,v=>t(6,a=v)),d),p;n.$$.on_destroy.push(()=>i());let{$$slots:r={},$$scope:b}=e;Mt("VersionForm",r,[]);const{t:d}=it();Me(d,"t"),o();let{modReference:u}=e,{onSubmit:m}=e,{initialValues:l={arch:[{ModVersionID:"",platform:"",asset:"",hash:"",size:0}],changelog:"",stability:gt.Alpha}}=e,{submitText:x=a("entry.create")}=e,{editing:L=!1}=e;const E=lt();Me(E,"modMeta"),ot(n,E,v=>t(7,p=v));let g=!1;const k=vt(u,E),{form:O,data:N}=mt({initialValues:l,extend:[dt({schema:k}),ht],onSubmit:v=>{t(4,g=!0),m(pt(v,k)).then(()=>t(4,g=!1))}});Me(N,"data"),ot(n,N,v=>t(3,c=v)),n.$$.on_mount.push(function(){u===void 0&&!("modReference"in e||n.$$.bound[n.$$.props.modReference])&&console.warn("<VersionForm> was created without expected prop 'modReference'"),m===void 0&&!("onSubmit"in e||n.$$.bound[n.$$.props.onSubmit])&&console.warn("<VersionForm> was created without expected prop 'onSubmit'")});const M=["modReference","onSubmit","initialValues","submitText","editing"];Object.keys(e).forEach(v=>{!~M.indexOf(v)&&v.slice(0,2)!=="$$"&&v!=="slot"&&console.warn(`<VersionForm> was created with unknown prop '${v}'`)});function B(){c.stability=Wt(this),N.set(c)}function T(){c.changelog=this.value,N.set(c)}return n.$$set=v=>{"modReference"in v&&t(11,u=v.modReference),"onSubmit"in v&&t(12,m=v.onSubmit),"initialValues"in v&&t(13,l=v.initialValues),"submitText"in v&&t(1,x=v.submitText),"editing"in v&&t(2,L=v.editing)},n.$capture_state=()=>({createForm:mt,validator:dt,reporter:ht,ValidationMessage:ke,constructVersionSchema:vt,trimNonSchema:pt,markdown:Le,writable:lt,VersionStabilities:gt,prettyBytes:ze,getTranslate:it,t:d,modReference:u,onSubmit:m,initialValues:l,submitText:x,editing:L,modMeta:E,disabled:g,versionSchema:k,form:O,data:N,preview:s,$data:c,$t:a,$modMeta:p}),n.$inject_state=v=>{"modReference"in v&&t(11,u=v.modReference),"onSubmit"in v&&t(12,m=v.onSubmit),"initialValues"in v&&t(13,l=v.initialValues),"submitText"in v&&t(1,x=v.submitText),"editing"in v&&t(2,L=v.editing),"disabled"in v&&t(4,g=v.disabled),"preview"in v&&t(5,s=v.preview)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&8&&t(5,s=c.changelog||"")},[d,x,L,c,g,s,a,p,E,O,N,u,m,l,B,T]}class un extends jt{constructor(e){super(e),Ft(this,e,tn,Je,Ot,{t:0,modReference:11,onSubmit:12,initialValues:13,submitText:1,editing:2}),G("SvelteRegisterComponent",{component:this,tagName:"VersionForm",options:e,id:Je.name})}get t(){return this.$$.ctx[0]}set t(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get modReference(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set modReference(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editing(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editing(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{un as V};
//# sourceMappingURL=VersionForm.977295da.js.map
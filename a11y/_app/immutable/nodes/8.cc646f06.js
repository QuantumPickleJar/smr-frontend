import{S as It,i as Ut,d as y,s as Vt,bo as st,v as Nt,aJ as et,aL as nt,a_ as z,bp as W,aQ as O,a8 as k,a6 as R,k as _,bi as Ot,ab as h,q as d,a9 as S,ae as b,l as x,p,t as g,n as A,aj as w,P as At,aw as Lt,x as E,y as I,z as U,C as V,ac as X,ad as L,m as q,a$ as ot,L as M,N as D,O as T,b0 as qt}from"../chunks/vendor.be1a9245.js";import{l as ct,m as it,n as ft}from"../chunks/graphql.cb6ec208.js";import{P as Y}from"../chunks/PageControls.47e06805.js";import{M as lt}from"../chunks/MetaDescriptors.9971f5e8.js";import{D as ut,H as $t,B as at,R as Z,C as P}from"../chunks/forms.c0306580.js";import{p as G}from"../chunks/formatting.6f84ef8f.js";const N="src/routes/admin/unapproved-mods/+page.svelte";function rt(s,t,c){const o=s.slice();return o[8]=t[c],o}function J(s){let t,c,o,e;o=new Y({props:{totalPages:Math.ceil(s[2]/j),currentPage:H},$$inline:!0});const n={c:function(){t=E("div"),c=E("div"),k(o.$$.fragment),this.h()},l:function(r){t=I(r,"DIV",{class:!0});var l=U(t);c=I(l,"DIV",{});var u=U(c);h(o.$$.fragment,u),u.forEach(d),l.forEach(d),this.h()},h:function(){V(c,N,50,4,1464),X(t,"class","mb-5 ml-auto flex justify-end"),V(t,N,49,2,1416)},m:function(r,l){x(r,t,l),L(t,c),b(o,c,null),e=!0},p:function(r,l){const u={};l&4&&(u.totalPages=Math.ceil(r[2]/j)),o.$set(u)},i:function(r){e||(p(o.$$.fragment,r),e=!0)},o:function(r){g(o.$$.fragment,r),e=!1},d:function(r){r&&d(t),w(o)}};return y("SvelteRegisterBlock",{block:n,id:J.name,type:"if",source:"(49:0) {#if totalMods}",ctx:s}),n}function mt(s){let t,c;t=new ut({props:{class:"max-w-full",$$slots:{default:[Pt]},$$scope:{ctx:s}},$$inline:!0});const o={c:function(){k(t.$$.fragment)},l:function(n){h(t.$$.fragment,n)},m:function(n,f){b(t,n,f),c=!0},p:function(n,f){const r={};f&2049&&(r.$$scope={dirty:f,ctx:n}),t.$set(r)},i:function(n){c||(p(t.$$.fragment,n),c=!0)},o:function(n){g(t.$$.fragment,n),c=!1},d:function(n){w(t,n)}};return y("SvelteRegisterBlock",{block:o,id:mt.name,type:"else",source:"(62:2) {:else}",ctx:s}),o}function dt(s){let t,c;t=new W({props:{$$slots:{default:[jt]},$$scope:{ctx:s}},$$inline:!0});const o={c:function(){k(t.$$.fragment)},l:function(n){h(t.$$.fragment,n)},m:function(n,f){b(t,n,f),c=!0},p:function(n,f){const r={};f&2049&&(r.$$scope={dirty:f,ctx:n}),t.$set(r)},i:function(n){c||(p(t.$$.fragment,n),c=!0)},o:function(n){g(t.$$.fragment,n),c=!1},d:function(n){w(t,n)}};return y("SvelteRegisterBlock",{block:o,id:dt.name,type:"if",source:"(60:24) ",ctx:s}),o}function pt(s){let t,c;t=new W({props:{$$slots:{default:[_t]},$$scope:{ctx:s}},$$inline:!0});const o={c:function(){k(t.$$.fragment)},l:function(n){h(t.$$.fragment,n)},m:function(n,f){b(t,n,f),c=!0},p:function(n,f){const r={};f&2048&&(r.$$scope={dirty:f,ctx:n}),t.$set(r)},i:function(n){c||(p(t.$$.fragment,n),c=!0)},o:function(n){g(t.$$.fragment,n),c=!1},d:function(n){w(t,n)}};return y("SvelteRegisterBlock",{block:o,id:pt.name,type:"if",source:"(58:2) {#if $mods.fetching}",ctx:s}),o}function gt(s){let t;const c={c:function(){t=M("Mod")},l:function(e){t=D(e,"Mod")},m:function(e,n){x(e,t,n)},d:function(e){e&&d(t)}};return y("SvelteRegisterBlock",{block:c,id:gt.name,type:"slot",source:"(66:10) <Cell>",ctx:s}),c}function xt(s){let t;const c={c:function(){t=M("Description")},l:function(e){t=D(e,"Description")},m:function(e,n){x(e,t,n)},d:function(e){e&&d(t)}};return y("SvelteRegisterBlock",{block:c,id:xt.name,type:"slot",source:"(67:10) <Cell>",ctx:s}),c}function vt(s){let t;const c={c:function(){t=M("Release Date")},l:function(e){t=D(e,"Release Date")},m:function(e,n){x(e,t,n)},d:function(e){e&&d(t)}};return y("SvelteRegisterBlock",{block:c,id:vt.name,type:"slot",source:"(68:10) <Cell>",ctx:s}),c}function yt(s){let t,c,o,e,n,f,r,l;t=new P({props:{$$slots:{default:[gt]},$$scope:{ctx:s}},$$inline:!0}),o=new P({props:{$$slots:{default:[xt]},$$scope:{ctx:s}},$$inline:!0}),n=new P({props:{$$slots:{default:[vt]},$$scope:{ctx:s}},$$inline:!0}),r=new P({$$inline:!0});const u={c:function(){k(t.$$.fragment),c=R(),k(o.$$.fragment),e=R(),k(n.$$.fragment),f=R(),k(r.$$.fragment)},l:function($){h(t.$$.fragment,$),c=S($),h(o.$$.fragment,$),e=S($),h(n.$$.fragment,$),f=S($),h(r.$$.fragment,$)},m:function($,i){b(t,$,i),x($,c,i),b(o,$,i),x($,e,i),b(n,$,i),x($,f,i),b(r,$,i),l=!0},p:function($,i){const m={};i&2048&&(m.$$scope={dirty:i,ctx:$}),t.$set(m);const B={};i&2048&&(B.$$scope={dirty:i,ctx:$}),o.$set(B);const C={};i&2048&&(C.$$scope={dirty:i,ctx:$}),n.$set(C)},i:function($){l||(p(t.$$.fragment,$),p(o.$$.fragment,$),p(n.$$.fragment,$),p(r.$$.fragment,$),l=!0)},o:function($){g(t.$$.fragment,$),g(o.$$.fragment,$),g(n.$$.fragment,$),g(r.$$.fragment,$),l=!1},d:function($){w(t,$),$&&d(c),w(o,$),$&&d(e),w(n,$),$&&d(f),w(r,$)}};return y("SvelteRegisterBlock",{block:u,id:yt.name,type:"slot",source:"(65:8) <Row>",ctx:s}),u}function kt(s){let t,c;t=new Z({props:{$$slots:{default:[yt]},$$scope:{ctx:s}},$$inline:!0});const o={c:function(){k(t.$$.fragment)},l:function(n){h(t.$$.fragment,n)},m:function(n,f){b(t,n,f),c=!0},p:function(n,f){const r={};f&2048&&(r.$$scope={dirty:f,ctx:n}),t.$set(r)},i:function(n){c||(p(t.$$.fragment,n),c=!0)},o:function(n){g(t.$$.fragment,n),c=!1},d:function(n){w(t,n)}};return y("SvelteRegisterBlock",{block:o,id:kt.name,type:"slot",source:"(64:6) <Head>",ctx:s}),o}function ht(s){let t=s[8].name+"",c;const o={c:function(){c=M(t)},l:function(n){c=D(n,t)},m:function(n,f){x(n,c,f)},p:function(n,f){f&1&&t!==(t=n[8].name+"")&&T(c,t)},d:function(n){n&&d(c)}};return y("SvelteRegisterBlock",{block:o,id:ht.name,type:"slot",source:"(75:12) <Cell>",ctx:s}),o}function bt(s){let t=s[8].short_description+"",c;const o={c:function(){c=M(t)},l:function(n){c=D(n,t)},m:function(n,f){x(n,c,f)},p:function(n,f){f&1&&t!==(t=n[8].short_description+"")&&T(c,t)},d:function(n){n&&d(c)}};return y("SvelteRegisterBlock",{block:o,id:bt.name,type:"slot",source:"(76:12) <Cell>",ctx:s}),o}function wt(s){let t=G(s[8].created_at)+"",c;const o={c:function(){c=M(t)},l:function(n){c=D(n,t)},m:function(n,f){x(n,c,f)},p:function(n,f){f&1&&t!==(t=G(n[8].created_at)+"")&&T(c,t)},d:function(n){n&&d(c)}};return y("SvelteRegisterBlock",{block:o,id:wt.name,type:"slot",source:"(77:12) <Cell>",ctx:s}),o}function Bt(s){let t;const c={c:function(){t=M("Approve")},l:function(e){t=D(e,"Approve")},m:function(e,n){x(e,t,n)},d:function(e){e&&d(t)}};return y("SvelteRegisterBlock",{block:c,id:Bt.name,type:"slot",source:'(80:16) <Button variant=\\"outlined\\" on:click={() => approveMod(mod.id)}>',ctx:s}),c}function Rt(s){let t;const c={c:function(){t=M("Deny")},l:function(e){t=D(e,"Deny")},m:function(e,n){x(e,t,n)},d:function(e){e&&d(t)}};return y("SvelteRegisterBlock",{block:c,id:Rt.name,type:"slot",source:'(81:16) <Button variant=\\"outlined\\" on:click={() => denyMod(mod.id)}>',ctx:s}),c}function St(s){let t;const c={c:function(){t=M("View")},l:function(e){t=D(e,"View")},m:function(e,n){x(e,t,n)},d:function(e){e&&d(t)}};return y("SvelteRegisterBlock",{block:c,id:St.name,type:"slot",source:`(82:16) <Button variant=\\"outlined\\" href={base + '/mod/' + mod.id}>`,ctx:s}),c}function Mt(s){let t,c,o,e,n,f,r;function l(){return s[5](s[8])}c=new O({props:{variant:"outlined",$$slots:{default:[Bt]},$$scope:{ctx:s}},$$inline:!0}),c.$on("click",l);function u(){return s[6](s[8])}e=new O({props:{variant:"outlined",$$slots:{default:[Rt]},$$scope:{ctx:s}},$$inline:!0}),e.$on("click",u),f=new O({props:{variant:"outlined",href:z+"/mod/"+s[8].id,$$slots:{default:[St]},$$scope:{ctx:s}},$$inline:!0});const a={c:function(){t=E("div"),k(c.$$.fragment),o=R(),k(e.$$.fragment),n=R(),k(f.$$.fragment),this.h()},l:function(i){t=I(i,"DIV",{class:!0});var m=U(t);h(c.$$.fragment,m),o=S(m),h(e.$$.fragment,m),n=S(m),h(f.$$.fragment,m),m.forEach(d),this.h()},h:function(){X(t,"class","grid grid-flow-col gap-4"),V(t,N,78,14,2223)},m:function(i,m){x(i,t,m),b(c,t,null),L(t,o),b(e,t,null),L(t,n),b(f,t,null),r=!0},p:function(i,m){s=i;const B={};m&2048&&(B.$$scope={dirty:m,ctx:s}),c.$set(B);const C={};m&2048&&(C.$$scope={dirty:m,ctx:s}),e.$set(C);const v={};m&1&&(v.href=z+"/mod/"+s[8].id),m&2048&&(v.$$scope={dirty:m,ctx:s}),f.$set(v)},i:function(i){r||(p(c.$$.fragment,i),p(e.$$.fragment,i),p(f.$$.fragment,i),r=!0)},o:function(i){g(c.$$.fragment,i),g(e.$$.fragment,i),g(f.$$.fragment,i),r=!1},d:function(i){i&&d(t),w(c),w(e),w(f)}};return y("SvelteRegisterBlock",{block:a,id:Mt.name,type:"slot",source:"(78:12) <Cell>",ctx:s}),a}function Dt(s){let t,c,o,e,n,f,r,l,u;t=new P({props:{$$slots:{default:[ht]},$$scope:{ctx:s}},$$inline:!0}),o=new P({props:{$$slots:{default:[bt]},$$scope:{ctx:s}},$$inline:!0}),n=new P({props:{$$slots:{default:[wt]},$$scope:{ctx:s}},$$inline:!0}),r=new P({props:{$$slots:{default:[Mt]},$$scope:{ctx:s}},$$inline:!0});const a={c:function(){k(t.$$.fragment),c=R(),k(o.$$.fragment),e=R(),k(n.$$.fragment),f=R(),k(r.$$.fragment),l=R()},l:function(i){h(t.$$.fragment,i),c=S(i),h(o.$$.fragment,i),e=S(i),h(n.$$.fragment,i),f=S(i),h(r.$$.fragment,i),l=S(i)},m:function(i,m){b(t,i,m),x(i,c,m),b(o,i,m),x(i,e,m),b(n,i,m),x(i,f,m),b(r,i,m),x(i,l,m),u=!0},p:function(i,m){const B={};m&2049&&(B.$$scope={dirty:m,ctx:i}),t.$set(B);const C={};m&2049&&(C.$$scope={dirty:m,ctx:i}),o.$set(C);const v={};m&2049&&(v.$$scope={dirty:m,ctx:i}),n.$set(v);const tt={};m&2049&&(tt.$$scope={dirty:m,ctx:i}),r.$set(tt)},i:function(i){u||(p(t.$$.fragment,i),p(o.$$.fragment,i),p(n.$$.fragment,i),p(r.$$.fragment,i),u=!0)},o:function(i){g(t.$$.fragment,i),g(o.$$.fragment,i),g(n.$$.fragment,i),g(r.$$.fragment,i),u=!1},d:function(i){w(t,i),i&&d(c),w(o,i),i&&d(e),w(n,i),i&&d(f),w(r,i),i&&d(l)}};return y("SvelteRegisterBlock",{block:a,id:Dt.name,type:"slot",source:"(74:10) <Row>",ctx:s}),a}function Q(s){let t,c;t=new Z({props:{$$slots:{default:[Dt]},$$scope:{ctx:s}},$$inline:!0});const o={c:function(){k(t.$$.fragment)},l:function(n){h(t.$$.fragment,n)},m:function(n,f){b(t,n,f),c=!0},p:function(n,f){const r={};f&2049&&(r.$$scope={dirty:f,ctx:n}),t.$set(r)},i:function(n){c||(p(t.$$.fragment,n),c=!0)},o:function(n){g(t.$$.fragment,n),c=!1},d:function(n){w(t,n)}};return y("SvelteRegisterBlock",{block:o,id:Q.name,type:"each",source:"(73:8) {#each $mods.data.getUnapprovedMods.mods as mod}",ctx:s}),o}function Ct(s){let t,c,o=s[0].data.getUnapprovedMods.mods;ot(o);let e=[];for(let r=0;r<o.length;r+=1)e[r]=Q(rt(s,o,r));const n=r=>g(e[r],1,1,()=>{e[r]=null}),f={c:function(){for(let l=0;l<e.length;l+=1)e[l].c();t=_()},l:function(l){for(let u=0;u<e.length;u+=1)e[u].l(l);t=_()},m:function(l,u){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(l,u);x(l,t,u),c=!0},p:function(l,u){if(u&25){o=l[0].data.getUnapprovedMods.mods,ot(o);let a;for(a=0;a<o.length;a+=1){const $=rt(l,o,a);e[a]?(e[a].p($,u),p(e[a],1)):(e[a]=Q($),e[a].c(),p(e[a],1),e[a].m(t.parentNode,t))}for(q(),a=o.length;a<e.length;a+=1)n(a);A()}},i:function(l){if(!c){for(let u=0;u<o.length;u+=1)p(e[u]);c=!0}},o:function(l){e=e.filter(Boolean);for(let u=0;u<e.length;u+=1)g(e[u]);c=!1},d:function(l){qt(e,l),l&&d(t)}};return y("SvelteRegisterBlock",{block:f,id:Ct.name,type:"slot",source:"(72:6) <Body>",ctx:s}),f}function Pt(s){let t,c,o,e;t=new $t({props:{$$slots:{default:[kt]},$$scope:{ctx:s}},$$inline:!0}),o=new at({props:{$$slots:{default:[Ct]},$$scope:{ctx:s}},$$inline:!0});const n={c:function(){k(t.$$.fragment),c=R(),k(o.$$.fragment)},l:function(r){h(t.$$.fragment,r),c=S(r),h(o.$$.fragment,r)},m:function(r,l){b(t,r,l),x(r,c,l),b(o,r,l),e=!0},p:function(r,l){const u={};l&2048&&(u.$$scope={dirty:l,ctx:r}),t.$set(u);const a={};l&2049&&(a.$$scope={dirty:l,ctx:r}),o.$set(a)},i:function(r){e||(p(t.$$.fragment,r),p(o.$$.fragment,r),e=!0)},o:function(r){g(t.$$.fragment,r),g(o.$$.fragment,r),e=!1},d:function(r){w(t,r),r&&d(c),w(o,r)}};return y("SvelteRegisterBlock",{block:n,id:Pt.name,type:"slot",source:'(63:4) <DataTable class=\\"max-w-full\\">',ctx:s}),n}function jt(s){let t,c=s[0].error.message+"",o;const e={c:function(){t=M("Oh no... "),o=M(c)},l:function(f){t=D(f,"Oh no... "),o=D(f,c)},m:function(f,r){x(f,t,r),x(f,o,r)},p:function(f,r){r&1&&c!==(c=f[0].error.message+"")&&T(o,c)},d:function(f){f&&d(t),f&&d(o)}};return y("SvelteRegisterBlock",{block:e,id:jt.name,type:"slot",source:"(61:4) <Content>",ctx:s}),e}function _t(s){let t;const c={c:function(){t=M("Loading...")},l:function(e){t=D(e,"Loading...")},m:function(e,n){x(e,t,n)},d:function(e){e&&d(t)}};return y("SvelteRegisterBlock",{block:c,id:_t.name,type:"slot",source:"(59:4) <Content>",ctx:s}),c}function Et(s){let t,c,o,e;const n=[pt,dt,mt],f=[];function r(u,a){return u[0].fetching?0:u[0].error?1:2}t=r(s),c=f[t]=n[t](s);const l={c:function(){c.c(),o=_()},l:function(a){c.l(a),o=_()},m:function(a,$){f[t].m(a,$),x(a,o,$),e=!0},p:function(a,$){let i=t;t=r(a),t===i?f[t].p(a,$):(q(),g(f[i],1,1,()=>{f[i]=null}),A(),c=f[t],c?c.p(a,$):(c=f[t]=n[t](a),c.c()),p(c,1),c.m(o.parentNode,o))},i:function(a){e||(p(c),e=!0)},o:function(a){g(c),e=!1},d:function(a){f[t].d(a),a&&d(o)}};return y("SvelteRegisterBlock",{block:l,id:Et.name,type:"slot",source:"(57:0) <Card>",ctx:s}),l}function F(s){let t,c,o,e;o=new Y({props:{totalPages:Math.ceil(s[2]/j),currentPage:H},$$inline:!0});const n={c:function(){t=E("div"),c=E("div"),k(o.$$.fragment),this.h()},l:function(r){t=I(r,"DIV",{class:!0});var l=U(t);c=I(l,"DIV",{});var u=U(c);h(o.$$.fragment,u),u.forEach(d),l.forEach(d),this.h()},h:function(){V(c,N,93,4,2724),X(t,"class","mt-5 ml-auto flex justify-end"),V(t,N,92,2,2676)},m:function(r,l){x(r,t,l),L(t,c),b(o,c,null),e=!0},p:function(r,l){const u={};l&4&&(u.totalPages=Math.ceil(r[2]/j)),o.$set(u)},i:function(r){e||(p(o.$$.fragment,r),e=!0)},o:function(r){g(o.$$.fragment,r),e=!1},d:function(r){r&&d(t),w(o)}};return y("SvelteRegisterBlock",{block:n,id:F.name,type:"if",source:"(92:0) {#if totalMods}",ctx:s}),n}function K(s){let t,c,o,e,n,f,r;t=new lt({props:{description:"Unapproved mods",title:"Admin: Unapproved Mods"},$$inline:!0});let l=s[2]&&J(s);e=new st({props:{$$slots:{default:[Et]},$$scope:{ctx:s}},$$inline:!0});let u=s[2]&&F(s);const a={c:function(){k(t.$$.fragment),c=R(),l&&l.c(),o=R(),k(e.$$.fragment),n=R(),u&&u.c(),f=_()},l:function(i){const m=Ot("svelte-g9j975",document.head);h(t.$$.fragment,m),m.forEach(d),c=S(i),l&&l.l(i),o=S(i),h(e.$$.fragment,i),n=S(i),u&&u.l(i),f=_()},m:function(i,m){b(t,document.head,null),x(i,c,m),l&&l.m(i,m),x(i,o,m),b(e,i,m),x(i,n,m),u&&u.m(i,m),x(i,f,m),r=!0},p:function(i,[m]){i[2]?l?(l.p(i,m),m&4&&p(l,1)):(l=J(i),l.c(),p(l,1),l.m(o.parentNode,o)):l&&(q(),g(l,1,1,()=>{l=null}),A());const B={};m&2049&&(B.$$scope={dirty:m,ctx:i}),e.$set(B),i[2]?u?(u.p(i,m),m&4&&p(u,1)):(u=F(i),u.c(),p(u,1),u.m(f.parentNode,f)):u&&(q(),g(u,1,1,()=>{u=null}),A())},i:function(i){r||(p(t.$$.fragment,i),p(l),p(e.$$.fragment,i),p(u),r=!0)},o:function(i){g(t.$$.fragment,i),g(l),g(e.$$.fragment,i),g(u),r=!1},d:function(i){w(t),i&&d(c),l&&l.d(i),i&&d(o),w(e,i),i&&d(n),u&&u.d(i),i&&d(f)}};return y("SvelteRegisterBlock",{block:a,id:K.name,type:"component",source:"",ctx:s}),a}const j=20,H=1;function Ht(s,t,c){let o,e,n,f=At,r=()=>(f(),f=Lt(o,v=>c(0,n=v)),o);s.$$.on_destroy.push(()=>f());let{$$slots:l={},$$scope:u}=t;Nt("Page",l,[]);const a=et(),$=v=>{a.mutation(ct,{modId:v}).toPromise().then(()=>{o.pause(),o.resume()})},i=v=>{a.mutation(it,{modId:v}).toPromise().then(()=>{o.pause(),o.resume()})},m=[];Object.keys(t).forEach(v=>{!~m.indexOf(v)&&v.slice(0,2)!=="$$"&&v!=="slot"&&console.warn(`<Page> was created with unknown prop '${v}'`)});const B=v=>$(v.id),C=v=>i(v.id);return s.$capture_state=()=>({ApproveModDocument:ct,DenyModDocument:it,GetUnapprovedModsDocument:ft,getContextClient:et,queryStore:nt,PageControls:Y,base:z,MetaDescriptors:lt,Card:st,Content:W,DataTable:ut,Head:$t,Body:at,Row:Z,Cell:P,Button:O,prettyDate:G,client:a,perPage:j,page:H,approveMod:$,denyMod:i,mods:o,totalMods:e,$mods:n}),s.$inject_state=v=>{"mods"in v&&r(c(1,o=v.mods)),"totalMods"in v&&c(2,e=v.totalMods)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),s.$$.update=()=>{s.$$.dirty&1&&c(2,e=n?.data?.getUnapprovedMods?.count)},r(c(1,o=nt({query:ft,client:a,variables:{filter:{offset:(H-1)*j,limit:j}}}))),[n,o,e,$,i,B,C]}class Kt extends It{constructor(t){super(t),Ut(this,t,Ht,K,Vt,{}),y("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:K.name})}}export{Kt as component};
//# sourceMappingURL=8.cc646f06.js.map

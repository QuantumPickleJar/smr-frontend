import{S as Bn,i as In,s as Mn,d as U,v as Nn,ab as $e,a1 as Ze,F as vn,G as bn,ae as Je,f as yn,n as X,u as tt,j as c,x as Qe,e as p,g as h,M as Tn,N as d,m as g,b as P,W as I,h as b,k as B,X as M,Q as a,Y as j,a7 as wn,y as ve,I as be,aC as cn,a2 as ii,aD as Ye,U as xn,J as rt,L as lt,a5 as st,O as at,Z as Dt,ad as oi,aB as Dn,a8 as si,T as ye,r as O,p as we,t as Z,q as xe,R as ct,a6 as ri,V as li,a9 as ai,aa as ci}from"./vendor.ibgMb1_Q.js";import{o as ee,s as gt,a as ne,b as ui,l as fi,g as En,h as di,V as Tt,c as kn,v as Sn,r as _n}from"./forms.uKJ-hjEP.js";import{t as Vn}from"./forms.Og2uGB1T.js";import{m as Ke}from"./markdown.MzMK-Dpa.js";import{I as An,v as Ge}from"./graphql.fqwMiF4t.js";import{T as Rn}from"./TagList.nyod_nU-.js";import{M as Cn}from"./ModCompatibilityEdit.QKCQTTK-.js";const We=ee({name:gt().min(3).max(32),mod_reference:gt().min(3).max(32).regex(/^([a-zA-Z][a-zA-Z0-9_]*)$/).refine(async()=>!0),short_description:gt().min(16).max(128),full_description:ne(gt()),logo:ne(ui().refine(e=>"name"in e&&"size"in e&&"type"in e)),source_url:gt().url().optional().or(fi("")),authors:ne(ee({role:gt(),user_id:gt()}).array()),compatibility:ne(ee({EA:ee({state:gt(),note:En()}),EXP:ee({state:gt(),note:En()})})),hidden:di(),tagIDs:ne(gt().array())}),Xt="src/lib/components/mods/ModAuthor.svelte";function Fn(e){let t,n="Unknown User ID";const l={c:function(){t=p("p"),t.textContent=n,this.h()},l:function(r){t=h(r,"P",{class:!0,"data-svelte-h":!0}),Tn(t)!=="svelte-12dp6bw"&&(t.textContent=n),this.h()},h:function(){d(t,"class","mr-2 whitespace-nowrap"),g(t,Xt,33,2,952)},m:function(r,i){X(r,t,i)},p:tt,d:function(r){r&&c(t)}};return U("SvelteRegisterBlock",{block:l,id:Fn.name,type:"else",source:"(28:0) {:else}",ctx:e}),l}function Un(e){let t,n,l,s,r,i,o=e[2].data.getUser.username+"",f;const S={c:function(){t=p("div"),n=p("div"),s=P(),r=p("div"),i=p("span"),f=I(o),this.h()},l:function(_){t=h(_,"DIV",{class:!0});var w=b(t);n=h(w,"DIV",{class:!0,style:!0}),b(n).forEach(c),s=B(w),r=h(w,"DIV",{class:!0});var D=b(r);i=h(D,"SPAN",{class:!0});var x=b(i);f=M(x,o),x.forEach(c),D.forEach(c),w.forEach(c),this.h()},h:function(){d(n,"class","h-7 w-7 rounded-full bg-cover"),d(n,"style",l=`background-image: url("${e[2].data.getUser.avatar||Je+"/images/no_image.webp"}")`),g(n,Xt,25,4,654),d(i,"class","text-yellow-500"),g(i,Xt,29,6,855),d(r,"class","grid grid-flow-row"),g(r,Xt,28,4,816),d(t,"class","mr-2 grid auto-cols-max grid-flow-col gap-x-2"),g(t,Xt,24,2,590)},m:function(_,w){X(_,t,w),a(t,n),a(t,s),a(t,r),a(r,i),a(i,f)},p:function(_,w){w&4&&l!==(l=`background-image: url("${_[2].data.getUser.avatar||Je+"/images/no_image.webp"}")`)&&d(n,"style",l),w&4&&o!==(o=_[2].data.getUser.username+"")&&j(f,o)},d:function(_){_&&c(t)}};return U("SvelteRegisterBlock",{block:S,id:Un.name,type:"if",source:"(19:29) ",ctx:e}),S}function Ln(e){let t,n=e[3]("error.oh-no")+"",l,s,r=e[2].error.message+"",i;const o={c:function(){t=p("p"),l=I(n),s=I("... "),i=I(r),this.h()},l:function(S){t=h(S,"P",{class:!0});var $=b(t);l=M($,n),s=M($,"... "),i=M($,r),$.forEach(c),this.h()},h:function(){d(t,"class","mr-2"),g(t,Xt,22,2,493)},m:function(S,$){X(S,t,$),a(t,l),a(t,s),a(t,i)},p:function(S,$){$&8&&n!==(n=S[3]("error.oh-no")+"")&&j(l,n),$&4&&r!==(r=S[2].error.message+"")&&j(i,r)},d:function(S){S&&c(t)}};return U("SvelteRegisterBlock",{block:o,id:Ln.name,type:"if",source:"(17:22) ",ctx:e}),o}function jn(e){let t,n=e[3]("loading")+"",l,s;const r={c:function(){t=p("p"),l=I(n),s=I("..."),this.h()},l:function(o){t=h(o,"P",{class:!0});var f=b(t);l=M(f,n),s=M(f,"..."),f.forEach(c),this.h()},h:function(){d(t,"class","mr-2"),g(t,Xt,20,2,429)},m:function(o,f){X(o,t,f),a(t,l),a(t,s)},p:function(o,f){f&8&&n!==(n=o[3]("loading")+"")&&j(l,n)},d:function(o){o&&c(t)}};return U("SvelteRegisterBlock",{block:r,id:jn.name,type:"if",source:"(15:0) {#if $user.fetching}",ctx:e}),r}function tn(e){let t;function n(i,o){return i[2].fetching?jn:i[2].error?Ln:i[2].data.getUser?Un:Fn}let l=n(e),s=l(e);const r={c:function(){s.c(),t=yn()},l:function(o){s.l(o),t=yn()},m:function(o,f){s.m(o,f),X(o,t,f)},p:function(o,[f]){l===(l=n(o))&&s?s.p(o,f):(s.d(1),s=l(o),s&&(s.c(),s.m(t.parentNode,t)))},i:tt,o:tt,d:function(o){o&&c(t),s.d(o)}};return U("SvelteRegisterBlock",{block:r,id:tn.name,type:"component",source:"",ctx:e}),r}function mi(e,t,n){let l,s,r=tt,i=()=>(r(),r=Qe(l,m=>n(2,s=m)),l),o,f=tt,S=()=>(f(),f=Qe(D,m=>n(3,o=m)),D);e.$$.on_destroy.push(()=>r()),e.$$.on_destroy.push(()=>f());let{$$slots:$={},$$scope:_}=t;Nn("ModAuthor",$,[]);let{id:w}=t;const{t:D}=$e();Ze(D,"t"),S();const x=vn();e.$$.on_mount.push(function(){w===void 0&&!("id"in t||e.$$.bound[e.$$.props.id])&&console.warn("<ModAuthor> was created without expected prop 'id'")});const q=["id"];return Object.keys(t).forEach(m=>{!~q.indexOf(m)&&m.slice(0,2)!=="$$"&&m!=="slot"&&console.warn(`<ModAuthor> was created with unknown prop '${m}'`)}),e.$$set=m=>{"id"in m&&n(4,w=m.id)},e.$capture_state=()=>({queryStore:bn,getContextClient:vn,GetUserDocument:An,assets:Je,getTranslate:$e,id:w,t:D,client:x,user:l,$user:s,$t:o}),e.$inject_state=m=>{"id"in m&&n(4,w=m.id),"user"in m&&i(n(1,l=m.user))},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{e.$$.dirty&16&&i(n(1,l=bn({query:An,client:x,variables:{user:w}})))},[D,l,s,o,w]}class qn extends Bn{constructor(t){super(t),In(this,t,mi,tn,Mn,{id:4,t:0}),U("SvelteRegisterComponent",{component:this,tagName:"ModAuthor",options:t,id:tn.name})}get id(){throw new Error("<ModAuthor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set id(t){throw new Error("<ModAuthor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[0]}set t(t){throw new Error("<ModAuthor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const v="src/lib/components/mods/ModForm.svelte";function Pn(e,t,n){const l=e.slice();return l[27]=t[n],l[28]=t,l[29]=n,l}function On(e){let t,n=(e[30]||"")+"",l;const s={c:function(){t=p("span"),l=I(n),this.h()},l:function(i){t=h(i,"SPAN",{class:!0});var o=b(t);l=M(o,n),o.forEach(c),this.h()},h:function(){d(t,"class","validation-message"),g(t,v,90,8,2575)},m:function(i,o){X(i,t,o),a(t,l)},p:function(i,o){o[0]&1073741824&&n!==(n=(i[30]||"")+"")&&j(l,n)},d:function(i){i&&c(t)}};return U("SvelteRegisterBlock",{block:s,id:On.name,type:"slot",source:'(78:6) <ValidationMessage for=\\"name\\" let:messages={message}>',ctx:e}),s}function en(e){let t,n=e[7]("mod.reference-warning")+"",l;const s={c:function(){t=p("span"),l=I(n),this.h()},l:function(i){t=h(i,"SPAN",{});var o=b(t);l=M(o,n),o.forEach(c),this.h()},h:function(){g(t,v,99,10,2928)},m:function(i,o){X(i,t,o),a(t,l)},p:function(i,o){o[0]&128&&n!==(n=i[7]("mod.reference-warning")+"")&&j(l,n)},d:function(i){i&&c(t)}};return U("SvelteRegisterBlock",{block:s,id:en.name,type:"if",source:"(87:8) {#if !editing}",ctx:e}),s}function Xn(e){let t,n=(e[30]||"")+"",l;const s={c:function(){t=p("span"),l=I(n),this.h()},l:function(i){t=h(i,"SPAN",{class:!0});var o=b(t);l=M(o,n),o.forEach(c),this.h()},h:function(){d(t,"class","validation-message"),g(t,v,103,8,3077)},m:function(i,o){X(i,t,o),a(t,l)},p:function(i,o){o[0]&1073741824&&n!==(n=(i[30]||"")+"")&&j(l,n)},d:function(i){i&&c(t)}};return U("SvelteRegisterBlock",{block:s,id:Xn.name,type:"slot",source:'(91:6) <ValidationMessage for=\\"mod_reference\\" let:messages={message}>',ctx:e}),s}function zn(e){let t,n=(e[30]||"")+"",l;const s={c:function(){t=p("span"),l=I(n),this.h()},l:function(i){t=h(i,"SPAN",{class:!0});var o=b(t);l=M(o,n),o.forEach(c),this.h()},h:function(){d(t,"class","validation-message"),g(t,v,113,8,3488)},m:function(i,o){X(i,t,o),a(t,l)},p:function(i,o){o[0]&1073741824&&n!==(n=(i[30]||"")+"")&&j(l,n)},d:function(i){i&&c(t)}};return U("SvelteRegisterBlock",{block:s,id:zn.name,type:"slot",source:'(101:6) <ValidationMessage for=\\"short_description\\" let:messages={message}>',ctx:e}),s}function Hn(e){let t,n=(e[30]||"")+"",l;const s={c:function(){t=p("span"),l=I(n),this.h()},l:function(i){t=h(i,"SPAN",{class:!0});var o=b(t);l=M(o,n),o.forEach(c),this.h()},h:function(){d(t,"class","validation-message"),g(t,v,124,10,3981)},m:function(i,o){X(i,t,o),a(t,l)},p:function(i,o){o[0]&1073741824&&n!==(n=(i[30]||"")+"")&&j(l,n)},d:function(i){i&&c(t)}};return U("SvelteRegisterBlock",{block:s,id:Hn.name,type:"slot",source:'(112:8) <ValidationMessage for=\\"full_description\\" let:messages={message}>',ctx:e}),s}function Yn(e){const t={c:tt,l:tt,m:tt,p:tt,d:tt};return U("SvelteRegisterBlock",{block:t,id:Yn.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:e}),t}function Gn(e){let t,n,l=e[31]+"";const s={c:function(){t=p("div"),n=new ai(!1),this.h()},l:function(i){t=h(i,"DIV",{class:!0});var o=b(t);n=ci(o,!1),o.forEach(c),this.h()},h:function(){n.a=null,d(t,"class","markdown-content right s-YtrVF1HCE9t3"),g(t,v,131,10,4276)},m:function(i,o){X(i,t,o),n.m(l,t)},p:function(i,o){o[0]&64&&l!==(l=i[31]+"")&&n.p(l)},d:function(i){i&&c(t)}};return U("SvelteRegisterBlock",{block:s,id:Gn.name,type:"then",source:'(118:55)            <!-- eslint-disable -->           <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:e}),s}function Wn(e){const t={c:tt,l:tt,m:tt,p:tt,d:tt};return U("SvelteRegisterBlock",{block:t,id:Wn.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:e}),t}function Zn(e){let t,n=(e[30]||"")+"",l;const s={c:function(){t=p("span"),l=I(n),this.h()},l:function(i){t=h(i,"SPAN",{class:!0});var o=b(t);l=M(o,n),o.forEach(c),this.h()},h:function(){d(t,"class","validation-message"),g(t,v,150,8,4816)},m:function(i,o){X(i,t,o),a(t,l)},p:function(i,o){o[0]&1073741824&&n!==(n=(i[30]||"")+"")&&j(l,n)},d:function(i){i&&c(t)}};return U("SvelteRegisterBlock",{block:s,id:Zn.name,type:"slot",source:'(138:6) <ValidationMessage for=\\"logo\\" let:messages={message}>',ctx:e}),s}function Jn(e){let t,n=(e[30]||"")+"",l;const s={c:function(){t=p("span"),l=I(n),this.h()},l:function(i){t=h(i,"SPAN",{class:!0});var o=b(t);l=M(o,n),o.forEach(c),this.h()},h:function(){d(t,"class","validation-message"),g(t,v,160,8,5204)},m:function(i,o){X(i,t,o),a(t,l)},p:function(i,o){o[0]&1073741824&&n!==(n=(i[30]||"")+"")&&j(l,n)},d:function(i){i&&c(t)}};return U("SvelteRegisterBlock",{block:s,id:Jn.name,type:"slot",source:'(148:6) <ValidationMessage for=\\"source_url\\" let:messages={message}>',ctx:e}),s}function Qn(e){let t=e[7]("entry.hidden")+"",n;const l={c:function(){n=I(t)},l:function(r){n=M(r,t)},m:function(r,i){X(r,n,i)},p:function(r,i){i[0]&128&&t!==(t=r[7]("entry.hidden")+"")&&j(n,t)},d:function(r){r&&c(n)}};return U("SvelteRegisterBlock",{block:l,id:Qn.name,type:"slot",source:'(154:6) <SlideToggle name=\\"slider-label\\" bind:checked={$data.hidden}>',ctx:e}),l}function Kn(e){let t,n=(e[30]||"")+"",l;const s={c:function(){t=p("span"),l=I(n),this.h()},l:function(i){t=h(i,"SPAN",{class:!0});var o=b(t);l=M(o,n),o.forEach(c),this.h()},h:function(){d(t,"class","validation-message"),g(t,v,169,8,5530)},m:function(i,o){X(i,t,o),a(t,l)},p:function(i,o){o[0]&1073741824&&n!==(n=(i[30]||"")+"")&&j(l,n)},d:function(i){i&&c(t)}};return U("SvelteRegisterBlock",{block:s,id:Kn.name,type:"slot",source:'(157:6) <ValidationMessage for=\\"hidden\\" let:messages={message}>',ctx:e}),s}function nn(e){let t,n,l,s,r,i,o,f,S=e[7]("authors")+"",$,_,w,D,x=e[7]("add")+"",q,m,z,J,Y;function T(N){e[22](N)}let L={name:"slider-label",$$slots:{default:[ti]},$$scope:{ctx:e}};e[5]!==void 0&&(L.checked=e[5]),n=new cn({props:L,$$inline:!0}),ve.push(()=>be(n,"checked",T)),n.$on("change",e[23]);let C=e[5]&&on(e),nt=xn(e[4].authors),V=[];for(let N=0;N<nt.length;N+=1)V[N]=ln(Pn(e,nt,N));const Rt=N=>Z(V[N],1,1,()=>{V[N]=null}),et={c:function(){t=p("div"),rt(n.$$.fragment),s=P(),C&&C.c(),r=P(),i=p("div"),o=p("div"),f=p("h4"),$=I(S),_=P(),w=p("button"),D=p("span"),q=I(x),m=P();for(let E=0;E<V.length;E+=1)V[E].c();this.h()},l:function(E){t=h(E,"DIV",{});var A=b(t);lt(n.$$.fragment,A),A.forEach(c),s=B(E),C&&C.l(E),r=B(E),i=h(E,"DIV",{class:!0});var G=b(i);o=h(G,"DIV",{class:!0});var F=b(o);f=h(F,"H4",{class:!0});var ut=b(f);$=M(ut,S),ut.forEach(c),_=B(F),w=h(F,"BUTTON",{class:!0,type:!0});var Q=b(w);D=h(Q,"SPAN",{});var _t=b(D);q=M(_t,x),_t.forEach(c),Q.forEach(c),F.forEach(c),m=B(G);for(let u=0;u<V.length;u+=1)V[u].l(G);G.forEach(c),this.h()},h:function(){g(t,v,173,6,5648),d(f,"class","mr-4"),g(f,v,190,10,6171),g(D,v,192,12,6309),d(w,"class","variant-ghost-primary btn"),d(w,"type","button"),g(w,v,191,10,6219),d(o,"class","flex items-center"),g(o,v,189,8,6129),d(i,"class","grid grid-flow-row gap-2"),g(i,v,188,6,6082)},m:function(E,A){X(E,t,A),at(n,t,null),X(E,s,A),C&&C.m(E,A),X(E,r,A),X(E,i,A),a(i,o),a(o,f),a(f,$),a(o,_),a(o,w),a(w,D),a(D,q),a(i,m);for(let G=0;G<V.length;G+=1)V[G]&&V[G].m(i,null);z=!0,J||(Y=Dt(w,"click",e[10],!1,!1,!1,!1),J=!0)},p:function(E,A){const G={};if(A[0]&128|A[1]&2&&(G.$$scope={dirty:A,ctx:E}),!l&&A[0]&32&&(l=!0,G.checked=E[5],ye(()=>l=!1)),n.$set(G),E[5]?C?(C.p(E,A),A[0]&32&&O(C,1)):(C=on(E),C.c(),O(C,1),C.m(r.parentNode,r)):C&&(we(),Z(C,1,1,()=>{C=null}),xe()),(!z||A[0]&128)&&S!==(S=E[7]("authors")+"")&&j($,S),(!z||A[0]&128)&&x!==(x=E[7]("add")+"")&&j(q,x),A[0]&2192){nt=xn(E[4].authors);let F;for(F=0;F<nt.length;F+=1){const ut=Pn(E,nt,F);V[F]?(V[F].p(ut,A),O(V[F],1)):(V[F]=ln(ut),V[F].c(),O(V[F],1),V[F].m(i,null))}for(we(),F=nt.length;F<V.length;F+=1)Rt(F);xe()}},i:function(E){if(!z){O(n.$$.fragment,E),O(C);for(let A=0;A<nt.length;A+=1)O(V[A]);z=!0}},o:function(E){Z(n.$$.fragment,E),Z(C),V=V.filter(Boolean);for(let A=0;A<V.length;A+=1)Z(V[A]);z=!1},d:function(E){E&&(c(t),c(s),c(r),c(i)),ct(n),C&&C.d(E),li(V,E),J=!1,Y()}};return U("SvelteRegisterBlock",{block:et,id:nn.name,type:"if",source:"(161:4) {#if editing}",ctx:e}),et}function ti(e){let t=e[7]("compatibility-info.edit")+"",n;const l={c:function(){n=I(t)},l:function(r){n=M(r,t)},m:function(r,i){X(r,n,i)},p:function(r,i){i[0]&128&&t!==(t=r[7]("compatibility-info.edit")+"")&&j(n,t)},d:function(r){r&&c(n)}};return U("SvelteRegisterBlock",{block:l,id:ti.name,type:"slot",source:'(163:8) <SlideToggle           name=\\"slider-label\\"           bind:checked={editCompatibility}           on:change={() => {             $data.compatibility = editCompatibility ? originalCompatibility : undefined;           }}>',ctx:e}),l}function on(e){let t,n,l;function s(o){e[24](o)}let r={};e[4].compatibility!==void 0&&(r.compatibilityInfo=e[4].compatibility),t=new Cn({props:r,$$inline:!0}),ve.push(()=>be(t,"compatibilityInfo",s));const i={c:function(){rt(t.$$.fragment)},l:function(f){lt(t.$$.fragment,f)},m:function(f,S){at(t,f,S),l=!0},p:function(f,S){const $={};!n&&S[0]&16&&(n=!0,$.compatibilityInfo=f[4].compatibility,ye(()=>n=!1)),t.$set($)},i:function(f){l||(O(t.$$.fragment,f),l=!0)},o:function(f){Z(t.$$.fragment,f),l=!1},d:function(f){ct(t,f)}};return U("SvelteRegisterBlock",{block:i,id:on.name,type:"if",source:"(173:6) {#if editCompatibility}",ctx:e}),i}function sn(e){let t,n,l;n=new qn({props:{id:e[4].authors[e[29]].user_id},$$inline:!0});const s={c:function(){t=p("div"),rt(n.$$.fragment),this.h()},l:function(i){t=h(i,"DIV",{class:!0});var o=b(t);lt(n.$$.fragment,o),o.forEach(c),this.h()},h:function(){d(t,"class","p-2"),g(t,v,198,14,6508)},m:function(i,o){X(i,t,o),at(n,t,null),l=!0},p:function(i,o){const f={};o[0]&16&&(f.id=i[4].authors[i[29]].user_id),n.$set(f)},i:function(i){l||(O(n.$$.fragment,i),l=!0)},o:function(i){Z(n.$$.fragment,i),l=!1},d:function(i){i&&c(t),ct(n)}};return U("SvelteRegisterBlock",{block:s,id:sn.name,type:"if",source:"(186:12) {#if $data.authors[i].user_id}",ctx:e}),s}function rn(e){let t,n,l=e[7]("remove")+"",s,r,i;function o(){return e[26](e[29])}const f={c:function(){t=p("button"),n=p("span"),s=I(l),this.h()},l:function($){t=h($,"BUTTON",{class:!0,type:!0});var _=b(t);n=h(_,"SPAN",{});var w=b(n);s=M(w,l),w.forEach(c),_.forEach(c),this.h()},h:function(){g(n,v,213,16,7097),d(t,"class","variant-ghost-primary btn"),d(t,"type","button"),g(t,v,212,14,6991)},m:function($,_){X($,t,_),a(t,n),a(n,s),r||(i=Dt(t,"click",o,!1,!1,!1,!1),r=!0)},p:function($,_){e=$,_[0]&128&&l!==(l=e[7]("remove")+"")&&j(s,l)},d:function($){$&&c(t),r=!1,i()}};return U("SvelteRegisterBlock",{block:f,id:rn.name,type:"if",source:"(200:12) {#if author.role !== 'creator'}",ctx:e}),f}function ln(e){let t,n,l,s,r="User ID",i,o,f,S,$,_,w,D,x=e[4].authors[e[29]].user_id&&sn(e);function q(){e[25].call(o,e[29])}let m=e[27].role!=="creator"&&rn(e);const z={c:function(){t=p("div"),x&&x.c(),n=P(),l=p("label"),s=p("span"),s.textContent=r,i=P(),o=p("input"),S=P(),m&&m.c(),$=P(),this.h()},l:function(Y){t=h(Y,"DIV",{class:!0});var T=b(t);x&&x.l(T),n=B(T),l=h(T,"LABEL",{class:!0});var L=b(l);s=h(L,"SPAN",{"data-svelte-h":!0}),Tn(s)!=="svelte-5fmcbq"&&(s.textContent=r),i=B(L),o=h(L,"INPUT",{type:!0,class:!0}),L.forEach(c),S=B(T),m&&m.l(T),$=B(T),T.forEach(c),this.h()},h:function(){g(s,v,203,14,6673),d(o,"type","text"),o.required=!0,d(o,"class","input p-2"),o.disabled=f=e[27].role==="creator",g(o,v,204,14,6708),d(l,"class","label"),g(l,v,202,12,6637),d(t,"class","flex items-end"),g(t,v,196,10,6422)},m:function(Y,T){X(Y,t,T),x&&x.m(t,null),a(t,n),a(t,l),a(l,s),a(l,i),a(l,o),st(o,e[4].authors[e[29]].user_id),a(t,S),m&&m.m(t,null),a(t,$),_=!0,w||(D=Dt(o,"input",q),w=!0)},p:function(Y,T){e=Y,e[4].authors[e[29]].user_id?x?(x.p(e,T),T[0]&16&&O(x,1)):(x=sn(e),x.c(),O(x,1),x.m(t,n)):x&&(we(),Z(x,1,1,()=>{x=null}),xe()),(!_||T[0]&16&&f!==(f=e[27].role==="creator"))&&Dn(o,"disabled",f),T[0]&16&&o.value!==e[4].authors[e[29]].user_id&&st(o,e[4].authors[e[29]].user_id),e[27].role!=="creator"?m?m.p(e,T):(m=rn(e),m.c(),m.m(t,$)):m&&(m.d(1),m=null)},i:function(Y){_||(O(x),_=!0)},o:function(Y){Z(x),_=!1},d:function(Y){Y&&c(t),x&&x.d(),m&&m.d(),w=!1,D()}};return U("SvelteRegisterBlock",{block:z,id:ln.name,type:"each",source:"(184:8) {#each $data.authors as author, i}",ctx:e}),z}function an(e){let t,n,l,s,r,i=e[7]("entry.name")+"",o,f,S,$,_,w,D,x,q,m,z=e[7]("mod.reference")+"",J,Y,T,L,C,nt,V,Rt,et,N,E,A=e[7]("entry.short-description")+"",G,F,ut,Q,_t,u,Zt,$t,vt,bt,Ct,Jt=e[7]("entry.full-description")+"",ie,Ee,ke,ft,Se,Vt,_e,pt,Ft,Qt=e[7]("preview")+"",oe,Ve,Ae,se,Pe,Ut,yt,Be,Ie,dt,At,Kt=e[7]("logo")+"",re,Me,Ne,ht,Te,Pt,De,wt,xt,zt,te=e[7]("entry.source-url")+"",le,Re,mt,Ce,Bt,Fe,Et,kt,Ue,Le,It,je,ae,Ht,Mt,ce,it,qe,un;w=new Tt({props:{for:"name",$$slots:{default:[On,({messages:k})=>({30:k}),({messages:k})=>[k?1073741824:0]]},$$scope:{ctx:e}},$$inline:!0});let K=!e[2]&&en(e);V=new Tt({props:{for:"mod_reference",$$slots:{default:[Xn,({messages:k})=>({30:k}),({messages:k})=>[k?1073741824:0]]},$$scope:{ctx:e}},$$inline:!0}),u=new Tt({props:{for:"short_description",$$slots:{default:[zn,({messages:k})=>({30:k}),({messages:k})=>[k?1073741824:0]]},$$scope:{ctx:e}},$$inline:!0}),Vt=new Tt({props:{for:"full_description",$$slots:{default:[Hn,({messages:k})=>({30:k}),({messages:k})=>[k?1073741824:0]]},$$scope:{ctx:e}},$$inline:!0});let ot={ctx:e,current:null,token:null,hasCatch:!1,pending:Wn,then:Gn,catch:Yn,value:31};wn(se=Ke(e[6]),ot);function ei(k){e[19](k)}let fn={editable:!0};e[3]!==void 0&&(fn.tags=e[3]),yt=new Rn({props:fn,$$inline:!0}),ve.push(()=>be(yt,"tags",ei)),Pt=new Tt({props:{for:"logo",$$slots:{default:[Zn,({messages:k})=>({30:k}),({messages:k})=>[k?1073741824:0]]},$$scope:{ctx:e}},$$inline:!0}),Bt=new Tt({props:{for:"source_url",$$slots:{default:[Jn,({messages:k})=>({30:k}),({messages:k})=>[k?1073741824:0]]},$$scope:{ctx:e}},$$inline:!0});function ni(k){e[21](k)}let dn={name:"slider-label",$$slots:{default:[Qn]},$$scope:{ctx:e}};e[4].hidden!==void 0&&(dn.checked=e[4].hidden),kt=new cn({props:dn,$$inline:!0}),ve.push(()=>be(kt,"checked",ni)),It=new Tt({props:{for:"hidden",$$slots:{default:[Kn,({messages:k})=>({30:k}),({messages:k})=>[k?1073741824:0]]},$$scope:{ctx:e}},$$inline:!0});let W=e[2]&&nn(e);const mn={c:function(){t=p("form"),n=p("div"),l=p("div"),s=p("label"),r=p("span"),o=I(i),f=I(" *"),S=P(),$=p("input"),_=P(),rt(w.$$.fragment),D=P(),x=p("div"),q=p("label"),m=p("span"),J=I(z),Y=I(" *"),T=P(),L=p("input"),C=P(),K&&K.c(),nt=P(),rt(V.$$.fragment),Rt=P(),et=p("div"),N=p("label"),E=p("span"),G=I(A),F=I(" *"),ut=P(),Q=p("input"),_t=P(),rt(u.$$.fragment),Zt=P(),$t=p("div"),vt=p("div"),bt=p("label"),Ct=p("span"),ie=I(Jt),Ee=I(" *"),ke=P(),ft=p("textarea"),Se=P(),rt(Vt.$$.fragment),_e=P(),pt=p("div"),Ft=p("span"),oe=I(Qt),Ve=I(":"),Ae=P(),ot.block.c(),Pe=P(),Ut=p("div"),rt(yt.$$.fragment),Ie=P(),dt=p("div"),At=p("label"),re=I(Kt),Me=I(":"),Ne=P(),ht=p("input"),Te=P(),rt(Pt.$$.fragment),De=P(),wt=p("div"),xt=p("label"),zt=p("span"),le=I(te),Re=P(),mt=p("input"),Ce=P(),rt(Bt.$$.fragment),Fe=P(),Et=p("div"),rt(kt.$$.fragment),Le=P(),rt(It.$$.fragment),je=P(),W&&W.c(),ae=P(),Ht=p("div"),Mt=p("button"),ce=I(e[1]),this.h()},l:function(R){t=h(R,"FORM",{});var y=b(t);n=h(y,"DIV",{class:!0});var H=b(n);l=h(H,"DIV",{class:!0});var Lt=b(l);s=h(Lt,"LABEL",{class:!0});var jt=b(s);r=h(jt,"SPAN",{});var Yt=b(r);o=M(Yt,i),f=M(Yt," *"),Yt.forEach(c),S=B(jt),$=h(jt,"INPUT",{type:!0,class:!0}),jt.forEach(c),_=B(Lt),lt(w.$$.fragment,Lt),Lt.forEach(c),D=B(H),x=h(H,"DIV",{class:!0});var qt=b(x);q=h(qt,"LABEL",{class:!0});var St=b(q);m=h(St,"SPAN",{});var Gt=b(m);J=M(Gt,z),Y=M(Gt," *"),Gt.forEach(c),T=B(St),L=h(St,"INPUT",{type:!0,class:!0}),C=B(St),K&&K.l(St),St.forEach(c),nt=B(qt),lt(V.$$.fragment,qt),qt.forEach(c),Rt=B(H),et=h(H,"DIV",{class:!0});var Nt=b(et);N=h(Nt,"LABEL",{class:!0});var Ot=b(N);E=h(Ot,"SPAN",{});var Oe=b(E);G=M(Oe,A),F=M(Oe," *"),Oe.forEach(c),ut=B(Ot),Q=h(Ot,"INPUT",{type:!0,class:!0}),Ot.forEach(c),_t=B(Nt),lt(u.$$.fragment,Nt),Nt.forEach(c),Zt=B(H),$t=h(H,"DIV",{class:!0});var ue=b($t);vt=h(ue,"DIV",{class:!0});var fe=b(vt);bt=h(fe,"LABEL",{class:!0});var de=b(bt);Ct=h(de,"SPAN",{});var Xe=b(Ct);ie=M(Xe,Jt),Ee=M(Xe," *"),Xe.forEach(c),ke=B(de),ft=h(de,"TEXTAREA",{class:!0,rows:!0}),b(ft).forEach(c),de.forEach(c),Se=B(fe),lt(Vt.$$.fragment,fe),fe.forEach(c),_e=B(ue),pt=h(ue,"DIV",{class:!0});var me=b(pt);Ft=h(me,"SPAN",{});var ze=b(Ft);oe=M(ze,Qt),Ve=M(ze,":"),ze.forEach(c),Ae=B(me),ot.block.l(me),me.forEach(c),ue.forEach(c),Pe=B(H),Ut=h(H,"DIV",{class:!0});var pn=b(Ut);lt(yt.$$.fragment,pn),pn.forEach(c),Ie=B(H),dt=h(H,"DIV",{class:!0});var Wt=b(dt);At=h(Wt,"LABEL",{for:!0});var He=b(At);re=M(He,Kt),Me=M(He,":"),He.forEach(c),Ne=B(Wt),ht=h(Wt,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),Te=B(Wt),lt(Pt.$$.fragment,Wt),Wt.forEach(c),De=B(H),wt=h(H,"DIV",{class:!0});var pe=b(wt);xt=h(pe,"LABEL",{class:!0});var he=b(xt);zt=h(he,"SPAN",{});var hn=b(zt);le=M(hn,te),hn.forEach(c),Re=B(he),mt=h(he,"INPUT",{type:!0,class:!0}),he.forEach(c),Ce=B(pe),lt(Bt.$$.fragment,pe),pe.forEach(c),Fe=B(H),Et=h(H,"DIV",{class:!0});var ge=b(Et);lt(kt.$$.fragment,ge),Le=B(ge),lt(It.$$.fragment,ge),ge.forEach(c),je=B(H),W&&W.l(H),ae=B(H),Ht=h(H,"DIV",{});var gn=b(Ht);Mt=h(gn,"BUTTON",{class:!0,type:!0});var $n=b(Mt);ce=M($n,e[1]),$n.forEach(c),gn.forEach(c),H.forEach(c),y.forEach(c),this.h()},h:function(){g(r,v,86,8,2377),d($,"type","text"),$.required=!0,d($,"class","input p-2"),g($,v,87,8,2419),d(s,"class","label"),g(s,v,85,6,2347),d(l,"class","grid grid-flow-row gap-2"),g(l,v,84,4,2302),g(m,v,96,8,2749),d(L,"type","text"),L.required=!0,d(L,"class","input p-2"),L.disabled=e[2],g(L,v,97,8,2794),d(q,"class","label"),g(q,v,95,6,2719),d(x,"class","grid grid-flow-row gap-2"),g(x,v,94,4,2674),g(E,v,109,8,3251),d(Q,"type","text"),Q.required=!0,d(Q,"class","input p-2"),g(Q,v,110,8,3306),d(N,"class","label"),g(N,v,108,6,3221),d(et,"class","grid grid-flow-row gap-2"),g(et,v,107,4,3176),g(Ct,v,120,10,3717),d(ft,"class","vertical-textarea textarea p-2"),ft.required=!0,d(ft,"rows",10),g(ft,v,121,10,3773),d(bt,"class","label"),g(bt,v,119,8,3685),d(vt,"class","grid grid-flow-row auto-rows-max gap-2"),g(vt,v,118,6,3624),g(Ft,v,128,8,4146),d(pt,"class","grid grid-flow-row auto-rows-max gap-2"),g(pt,v,127,6,4085),d($t,"class","split grid gap-6 s-YtrVF1HCE9t3"),g($t,v,117,4,3587),d(Ut,"class","grid grid-flow-row gap-2"),g(Ut,v,136,4,4388),d(At,"for","logo"),g(At,v,141,6,4532),d(ht,"id","logo"),d(ht,"class","base-input"),d(ht,"name","logo"),d(ht,"type","file"),d(ht,"accept","image/png,image/jpeg,image/gif"),d(ht,"placeholder","Logo"),g(ht,v,142,6,4578),d(dt,"class","grid grid-flow-row gap-2"),g(dt,v,140,4,4487),g(zt,v,156,8,4990),d(mt,"type","text"),mt.required=!0,d(mt,"class","input p-2"),g(mt,v,157,8,5036),d(xt,"class","label"),g(xt,v,155,6,4960),d(wt,"class","grid grid-flow-row gap-2"),g(wt,v,154,4,4915),d(Et,"class","grid grid-flow-row gap-2"),g(Et,v,164,4,5303),d(Mt,"class","variant-ghost-primary btn"),d(Mt,"type","submit"),g(Mt,v,222,6,7240),g(Ht,v,221,4,7228),d(n,"class","grid grid-flow-row gap-6"),g(n,v,83,2,2259),g(t,v,82,0,2241)},m:function(R,y){X(R,t,y),a(t,n),a(n,l),a(l,s),a(s,r),a(r,o),a(r,f),a(s,S),a(s,$),st($,e[4].name),a(l,_),at(w,l,null),a(n,D),a(n,x),a(x,q),a(q,m),a(m,J),a(m,Y),a(q,T),a(q,L),st(L,e[4].mod_reference),a(q,C),K&&K.m(q,null),a(x,nt),at(V,x,null),a(n,Rt),a(n,et),a(et,N),a(N,E),a(E,G),a(E,F),a(N,ut),a(N,Q),st(Q,e[4].short_description),a(et,_t),at(u,et,null),a(n,Zt),a(n,$t),a($t,vt),a(vt,bt),a(bt,Ct),a(Ct,ie),a(Ct,Ee),a(bt,ke),a(bt,ft),st(ft,e[4].full_description),a(vt,Se),at(Vt,vt,null),a($t,_e),a($t,pt),a(pt,Ft),a(Ft,oe),a(Ft,Ve),a(pt,Ae),ot.block.m(pt,ot.anchor=null),ot.mount=()=>pt,ot.anchor=null,a(n,Pe),a(n,Ut),at(yt,Ut,null),a(n,Ie),a(n,dt),a(dt,At),a(At,re),a(At,Me),a(dt,Ne),a(dt,ht),a(dt,Te),at(Pt,dt,null),a(n,De),a(n,wt),a(wt,xt),a(xt,zt),a(zt,le),a(xt,Re),a(xt,mt),st(mt,e[4].source_url),a(wt,Ce),at(Bt,wt,null),a(n,Fe),a(n,Et),at(kt,Et,null),a(Et,Le),at(It,Et,null),a(n,je),W&&W.m(n,null),a(n,ae),a(n,Ht),a(Ht,Mt),a(Mt,ce),it=!0,qe||(un=[Dt($,"input",e[15]),Dt(L,"input",e[16]),Dt(Q,"input",e[17]),Dt(ft,"input",e[18]),Dt(mt,"input",e[20]),oi(e[8].call(null,t))],qe=!0)},p:function(R,y){e=R,(!it||y[0]&128)&&i!==(i=e[7]("entry.name")+"")&&j(o,i),y[0]&16&&$.value!==e[4].name&&st($,e[4].name);const H={};y[0]&1073741824|y[1]&2&&(H.$$scope={dirty:y,ctx:e}),w.$set(H),(!it||y[0]&128)&&z!==(z=e[7]("mod.reference")+"")&&j(J,z),(!it||y[0]&4)&&Dn(L,"disabled",e[2]),y[0]&16&&L.value!==e[4].mod_reference&&st(L,e[4].mod_reference),e[2]?K&&(K.d(1),K=null):K?K.p(e,y):(K=en(e),K.c(),K.m(q,null));const Lt={};y[0]&1073741824|y[1]&2&&(Lt.$$scope={dirty:y,ctx:e}),V.$set(Lt),(!it||y[0]&128)&&A!==(A=e[7]("entry.short-description")+"")&&j(G,A),y[0]&16&&Q.value!==e[4].short_description&&st(Q,e[4].short_description);const jt={};y[0]&1073741824|y[1]&2&&(jt.$$scope={dirty:y,ctx:e}),u.$set(jt),(!it||y[0]&128)&&Jt!==(Jt=e[7]("entry.full-description")+"")&&j(ie,Jt),y[0]&16&&st(ft,e[4].full_description);const Yt={};y[0]&1073741824|y[1]&2&&(Yt.$$scope={dirty:y,ctx:e}),Vt.$set(Yt),(!it||y[0]&128)&&Qt!==(Qt=e[7]("preview")+"")&&j(oe,Qt),ot.ctx=e,y[0]&64&&se!==(se=Ke(e[6]))&&wn(se,ot)||si(ot,e,y);const qt={};!Be&&y[0]&8&&(Be=!0,qt.tags=e[3],ye(()=>Be=!1)),yt.$set(qt),(!it||y[0]&128)&&Kt!==(Kt=e[7]("logo")+"")&&j(re,Kt);const St={};y[0]&1073741824|y[1]&2&&(St.$$scope={dirty:y,ctx:e}),Pt.$set(St),(!it||y[0]&128)&&te!==(te=e[7]("entry.source-url")+"")&&j(le,te),y[0]&16&&mt.value!==e[4].source_url&&st(mt,e[4].source_url);const Gt={};y[0]&1073741824|y[1]&2&&(Gt.$$scope={dirty:y,ctx:e}),Bt.$set(Gt);const Nt={};y[0]&128|y[1]&2&&(Nt.$$scope={dirty:y,ctx:e}),!Ue&&y[0]&16&&(Ue=!0,Nt.checked=e[4].hidden,ye(()=>Ue=!1)),kt.$set(Nt);const Ot={};y[0]&1073741824|y[1]&2&&(Ot.$$scope={dirty:y,ctx:e}),It.$set(Ot),e[2]?W?(W.p(e,y),y[0]&4&&O(W,1)):(W=nn(e),W.c(),O(W,1),W.m(n,ae)):W&&(we(),Z(W,1,1,()=>{W=null}),xe()),(!it||y[0]&2)&&j(ce,e[1])},i:function(R){it||(O(w.$$.fragment,R),O(V.$$.fragment,R),O(u.$$.fragment,R),O(Vt.$$.fragment,R),O(yt.$$.fragment,R),O(Pt.$$.fragment,R),O(Bt.$$.fragment,R),O(kt.$$.fragment,R),O(It.$$.fragment,R),O(W),it=!0)},o:function(R){Z(w.$$.fragment,R),Z(V.$$.fragment,R),Z(u.$$.fragment,R),Z(Vt.$$.fragment,R),Z(yt.$$.fragment,R),Z(Pt.$$.fragment,R),Z(Bt.$$.fragment,R),Z(kt.$$.fragment,R),Z(It.$$.fragment,R),Z(W),it=!1},d:function(R){R&&c(t),ct(w),K&&K.d(),ct(V),ct(u),ct(Vt),ot.block.d(),ot.token=null,ot=null,ct(yt),ct(Pt),ct(Bt),ct(kt),ct(It),W&&W.d(),qe=!1,ri(un)}};return U("SvelteRegisterBlock",{block:mn,id:an.name,type:"component",source:"",ctx:e}),mn}function pi(e,t,n){let l,s,r,i=tt,o=()=>(i(),i=Qe($,u=>n(7,r=u)),$);e.$$.on_destroy.push(()=>i());let{$$slots:f={},$$scope:S}=t;Nn("ModForm",f,[]);const{t:$}=$e();Ze($,"t"),o();let{onSubmit:_}=t,{initialValues:w={full_description:"",mod_reference:"",name:"",short_description:"",source_url:"",hidden:!1,tagIDs:[],compatibility:{EA:{state:Ge.Works,note:""},EXP:{state:Ge.Works,note:""}}}}=t,{submitText:D=r("entry.create")}=t,{editing:x=!1}=t;const{form:q,data:m}=kn({initialValues:w,extend:[Sn({schema:We}),_n],onSubmit:u=>_(Vn(u,We))});Ze(m,"data"),ii(e,m,u=>n(4,s=u));let z=[];const J=()=>{s.authors.push({role:"editor",user_id:"",key:""}),m.set(s)},Y=u=>{s.authors.splice(u,1),m.set(s)};let T=!1;const L=s.compatibility;e.$$.on_mount.push(function(){_===void 0&&!("onSubmit"in t||e.$$.bound[e.$$.props.onSubmit])&&console.warn("<ModForm> was created without expected prop 'onSubmit'")});const C=["onSubmit","initialValues","submitText","editing"];Object.keys(t).forEach(u=>{!~C.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<ModForm> was created with unknown prop '${u}'`)});function nt(){s.name=this.value,m.set(s)}function V(){s.mod_reference=this.value,m.set(s)}function Rt(){s.short_description=this.value,m.set(s)}function et(){s.full_description=this.value,m.set(s)}function N(u){z=u,n(3,z),n(4,s)}function E(){s.source_url=this.value,m.set(s)}function A(u){e.$$.not_equal(s.hidden,u)&&(s.hidden=u,m.set(s))}function G(u){T=u,n(5,T)}const F=()=>{Ye(m,s.compatibility=T?L:void 0,s)};function ut(u){e.$$.not_equal(s.compatibility,u)&&(s.compatibility=u,m.set(s))}function Q(u){s.authors[u].user_id=this.value,m.set(s)}const _t=u=>Y(u);return e.$$set=u=>{"onSubmit"in u&&n(13,_=u.onSubmit),"initialValues"in u&&n(14,w=u.initialValues),"submitText"in u&&n(1,D=u.submitText),"editing"in u&&n(2,x=u.editing)},e.$capture_state=()=>({createForm:kn,validator:Sn,reporter:_n,ValidationMessage:Tt,modSchema:We,trimNonSchema:Vn,markdown:Ke,ModAuthor:qn,TagList:Rn,CompatibilityState:Ge,ModCompatibility:Cn,getTranslate:$e,SlideToggle:cn,t:$,onSubmit:_,initialValues:w,submitText:D,editing:x,form:q,data:m,tags:z,addAuthor:J,removeAuthor:Y,editCompatibility:T,originalCompatibility:L,preview:l,$data:s,$t:r}),e.$inject_state=u=>{"onSubmit"in u&&n(13,_=u.onSubmit),"initialValues"in u&&n(14,w=u.initialValues),"submitText"in u&&n(1,D=u.submitText),"editing"in u&&n(2,x=u.editing),"tags"in u&&n(3,z=u.tags),"editCompatibility"in u&&n(5,T=u.editCompatibility),"preview"in u&&n(6,l=u.preview)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{if(e.$$.dirty[0]&24){const u=s;u.tags&&(n(3,z=u.tags),delete u.tags),Ye(m,s.tagIDs=z.map(Zt=>Zt.id),s)}e.$$.dirty[0]&16&&Ye(m,s.compatibility=s.compatibility?s.compatibility:void 0,s),e.$$.dirty[0]&20&&(x||delete s.compatibility),e.$$.dirty[0]&16&&n(6,l=s.full_description||"")},[$,D,x,z,s,T,l,r,q,m,J,Y,L,_,w,nt,V,Rt,et,N,E,A,G,F,ut,Q,_t]}class xi extends Bn{constructor(t){super(t),In(this,t,pi,an,Mn,{t:0,onSubmit:13,initialValues:14,submitText:1,editing:2},null,[-1,-1]),U("SvelteRegisterComponent",{component:this,tagName:"ModForm",options:t,id:an.name})}get t(){return this.$$.ctx[0]}set t(t){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(t){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(t){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(t){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editing(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editing(t){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{xi as M};
//# sourceMappingURL=ModForm.rep2xECY.js.map

import{S as ee,i as te,s as re,ap as se,j as M,m as P,o as S,x as j,u as C,v as H,aq as ne,e as v,t as q,k as O,c as b,a as k,g as N,d as c,n as y,b as G,f as A,R as u,h as K,N as be,l as Y,_ as ke,w as ae,M as ie,aC as we,Q as Ee,O as De,r as oe,V,C as Ge,J as ue,K as ce,L as fe,aa as de,ay as ge,az as Ie,U as _e,W as je}from"../../../chunks/vendor-5e5b2079.js";import{M as Ve}from"../../../chunks/MetaDescriptors-20105bba.js";import{l as Te}from"../../../chunks/gql-7e09f6ed.js";import{q as Ce,r as qe}from"../../../chunks/graphql-8fe081d6.js";import{p as Ne}from"../../../chunks/routing-1d144003.js";import{b as Z}from"../../../chunks/paths-6758d194.js";import{a as Ae}from"../../../chunks/user-ba47f179.js";import{g as $e}from"../../../chunks/navigation-51f4a605.js";import{D as Oe}from"../../../chunks/Dialog-9cd5ee7b.js";import{T as ye}from"../../../chunks/Toast-c7c36427.js";import{m as pe}from"../../../chunks/markdown-e6b630bd.js";import"../../../chunks/stores-0968c272.js";import"../../../chunks/singletons-12a22614.js";function Me(a){let e,r,t,s,n,l,i,$,_=a[0].created_at+"",m,o;return{c(){e=v("div"),r=v("h3"),t=q("Info"),s=O(),n=v("span"),l=v("strong"),i=q("Created:"),$=O(),m=q(_),o=v("br"),this.h()},l(f){e=b(f,"DIV",{class:!0});var h=k(e);r=b(h,"H3",{class:!0});var w=k(r);t=N(w,"Info"),w.forEach(c),s=y(h),n=b(h,"SPAN",{});var I=k(n);l=b(I,"STRONG",{});var p=k(l);i=N(p,"Created:"),p.forEach(c),$=y(I),m=N(I,_),I.forEach(c),o=b(h,"BR",{}),h.forEach(c),this.h()},h(){G(r,"class","text-2xl my-4 font-bold"),G(e,"class","text-lg")},m(f,h){A(f,e,h),u(e,r),u(r,t),u(e,s),u(e,n),u(n,l),u(l,i),u(n,$),u(n,m),u(e,o)},p(f,h){h&1&&_!==(_=f[0].created_at+"")&&K(m,_)},d(f){f&&c(e)}}}function Pe(a){let e,r;return e=new ne({props:{$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){S(e,t,s),r=!0},p(t,s){const n={};s&3&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Se(a){let e,r;return e=new se({props:{$$slots:{default:[Pe]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){S(e,t,s),r=!0},p(t,[s]){const n={};s&3&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function He(a,e,r){let{guide:t}=e;return a.$$set=s=>{"guide"in s&&r(0,t=s.guide)},[t]}class Be extends ee{constructor(e){super();te(this,e,He,Se,re,{guide:0})}}function Le(a){let e,r,t,s,n,l,i,$,_,m,o,f=a[0].username+"",h,w,I,p,B;return{c(){e=v("div"),r=v("h3"),t=q("Author"),s=O(),n=v("div"),l=v("div"),i=v("div"),_=O(),m=v("div"),o=v("a"),h=q(f),I=O(),p=v("div"),B=q("Writer"),this.h()},l(T){e=b(T,"DIV",{class:!0});var E=k(e);r=b(E,"H3",{class:!0});var L=k(r);t=N(L,"Author"),L.forEach(c),s=y(E),n=b(E,"DIV",{class:!0});var U=k(n);l=b(U,"DIV",{class:!0});var g=k(l);i=b(g,"DIV",{class:!0,style:!0}),k(i).forEach(c),_=y(g),m=b(g,"DIV",{class:!0});var Q=k(m);o=b(Q,"A",{href:!0,class:!0});var z=k(o);h=N(z,f),z.forEach(c),I=y(Q),p=b(Q,"DIV",{});var X=k(p);B=N(X,"Writer"),X.forEach(c),Q.forEach(c),g.forEach(c),U.forEach(c),E.forEach(c),this.h()},h(){G(r,"class","text-2xl my-4 font-bold"),G(i,"class","rounded-full bg-cover w-14 h-14"),G(i,"style",$=`background-image: url("${a[0].avatar}")`),G(o,"href",w=""+(Z+"/user/"+a[0].id+"/")),G(o,"class","text-yellow-500 underline"),G(m,"class","grid grid-flow-row"),G(l,"class","grid grid-flow-col auto-cols-min gap-x-4"),G(n,"class","grid auto-rows-min text-lg gap-y-4"),G(e,"class","grid grid-flow-row gap-y-2")},m(T,E){A(T,e,E),u(e,r),u(r,t),u(e,s),u(e,n),u(n,l),u(l,i),u(l,_),u(l,m),u(m,o),u(o,h),u(m,I),u(m,p),u(p,B)},p(T,E){E&1&&$!==($=`background-image: url("${T[0].avatar}")`)&&G(i,"style",$),E&1&&f!==(f=T[0].username+"")&&K(h,f),E&1&&w!==(w=""+(Z+"/user/"+T[0].id+"/"))&&G(o,"href",w)},d(T){T&&c(e)}}}function Ue(a){let e,r;return e=new ne({props:{$$slots:{default:[Le]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){S(e,t,s),r=!0},p(t,s){const n={};s&3&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function We(a){let e,r;return e=new se({props:{$$slots:{default:[Ue]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){S(e,t,s),r=!0},p(t,[s]){const n={};s&3&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Fe(a,e,r){let{author:t}=e;return a.$$set=s=>{"author"in s&&r(0,t=s.author)},[t]}class Re extends ee{constructor(e){super();te(this,e,Fe,We,re,{author:0})}}function me(a){let e,r;return e=new Ve({props:{description:a[3].data.getGuide.short_description,title:a[3].data.getGuide.name}}),{c(){M(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){S(e,t,s),r=!0},p(t,s){const n={};s&8&&(n.description=t[3].data.getGuide.short_description),s&8&&(n.title=t[3].data.getGuide.name),e.$set(n)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Qe(a){let e;return{c(){e=q("404")},l(r){e=N(r,"404")},m(r,t){A(r,e,t)},p:V,i:V,o:V,d(r){r&&c(e)}}}function ze(a){let e,r,t,s,n=a[3].data.getGuide.name+"",l,i,$,_,m,o,f,h,w,I,p,B,T,E,L,U,g=a[5]&&he(a);_=new se({props:{$$slots:{default:[rt]},$$scope:{ctx:a}}}),f=new Be({props:{guide:a[3].data.getGuide}}),w=new Re({props:{author:a[3].data.getGuide.user}});function Q(d){a[14](d)}let z={$$slots:{default:[st]},$$scope:{ctx:a}};a[6]!==void 0&&(z.open=a[6]),p=new Oe({props:z}),ue.push(()=>ce(p,"open",Q));function X(d){a[15](d)}let le={$$slots:{default:[nt]},$$scope:{ctx:a}};return a[2]!==void 0&&(le.running=a[2]),E=new ye({props:le}),ue.push(()=>ce(E,"running",X)),{c(){e=v("div"),r=v("div"),t=v("div"),s=v("h1"),l=q(n),i=O(),g&&g.c(),$=O(),M(_.$$.fragment),m=O(),o=v("div"),M(f.$$.fragment),h=O(),M(w.$$.fragment),I=O(),M(p.$$.fragment),T=O(),M(E.$$.fragment),this.h()},l(d){e=b(d,"DIV",{class:!0});var D=k(e);r=b(D,"DIV",{class:!0});var F=k(r);t=b(F,"DIV",{class:!0});var R=k(t);s=b(R,"H1",{class:!0});var J=k(s);l=N(J,n),J.forEach(c),i=y(R),g&&g.l(R),R.forEach(c),$=y(F),P(_.$$.fragment,F),F.forEach(c),m=y(D),o=b(D,"DIV",{class:!0});var W=k(o);P(f.$$.fragment,W),h=y(W),P(w.$$.fragment,W),W.forEach(c),D.forEach(c),I=y(d),P(p.$$.fragment,d),T=y(d),P(E.$$.fragment,d),this.h()},h(){G(s,"class","text-4xl my-4 font-bold"),G(t,"class","grid grid-flow-col grid-auto-max h-auto gap-4 items-center svelte-1sejgqw"),G(r,"class","grid grid-cols-1 auto-rows-min gap-4"),G(o,"class","grid grid-cols-1 auto-rows-min gap-8"),G(e,"class","grid gap-8 grid-auto-max svelte-1sejgqw")},m(d,D){A(d,e,D),u(e,r),u(r,t),u(t,s),u(s,l),u(t,i),g&&g.m(t,null),u(r,$),S(_,r,null),u(e,m),u(e,o),S(f,o,null),u(o,h),S(w,o,null),A(d,I,D),S(p,d,D),A(d,T,D),S(E,d,D),U=!0},p(d,D){(!U||D&8)&&n!==(n=d[3].data.getGuide.name+"")&&K(l,n),d[5]?g?(g.p(d,D),D&32&&j(g,1)):(g=he(d),g.c(),j(g,1),g.m(t,null)):g&&(oe(),C(g,1,1,()=>{g=null}),ae());const F={};D&262152&&(F.$$scope={dirty:D,ctx:d}),_.$set(F);const R={};D&8&&(R.guide=d[3].data.getGuide),f.$set(R);const J={};D&8&&(J.author=d[3].data.getGuide.user),w.$set(J);const W={};D&262144&&(W.$$scope={dirty:D,ctx:d}),!B&&D&64&&(B=!0,W.open=d[6],fe(()=>B=!1)),p.$set(W);const x={};D&262160&&(x.$$scope={dirty:D,ctx:d}),!L&&D&4&&(L=!0,x.running=d[2],fe(()=>L=!1)),E.$set(x)},i(d){U||(j(g),j(_.$$.fragment,d),j(f.$$.fragment,d),j(w.$$.fragment,d),j(p.$$.fragment,d),j(E.$$.fragment,d),U=!0)},o(d){C(g),C(_.$$.fragment,d),C(f.$$.fragment,d),C(w.$$.fragment,d),C(p.$$.fragment,d),C(E.$$.fragment,d),U=!1},d(d){d&&c(e),g&&g.d(),H(_),H(f),H(w),d&&c(I),H(p,d),d&&c(T),H(E,d)}}}function Je(a){let e,r,t=a[3].error.message+"",s;return{c(){e=v("p"),r=q("Oh no... "),s=q(t)},l(n){e=b(n,"P",{});var l=k(e);r=N(l,"Oh no... "),s=N(l,t),l.forEach(c)},m(n,l){A(n,e,l),u(e,r),u(e,s)},p(n,l){l&8&&t!==(t=n[3].error.message+"")&&K(s,t)},i:V,o:V,d(n){n&&c(e)}}}function Ke(a){let e,r;return{c(){e=v("p"),r=q("Loading...")},l(t){e=b(t,"P",{});var s=k(e);r=N(s,"Loading..."),s.forEach(c)},m(t,s){A(t,e,s),u(e,r)},p:V,i:V,o:V,d(t){t&&c(e)}}}function he(a){let e,r,t,s;return e=new de({props:{variant:"outlined",$$slots:{default:[Xe]},$$scope:{ctx:a}}}),e.$on("click",a[10]),t=new de({props:{variant:"outlined",$$slots:{default:[Ye]},$$scope:{ctx:a}}}),t.$on("click",a[11]),{c(){M(e.$$.fragment),r=O(),M(t.$$.fragment)},l(n){P(e.$$.fragment,n),r=y(n),P(t.$$.fragment,n)},m(n,l){S(e,n,l),A(n,r,l),S(t,n,l),s=!0},p(n,l){const i={};l&262144&&(i.$$scope={dirty:l,ctx:n}),e.$set(i);const $={};l&262144&&($.$$scope={dirty:l,ctx:n}),t.$set($)},i(n){s||(j(e.$$.fragment,n),j(t.$$.fragment,n),s=!0)},o(n){C(e.$$.fragment,n),C(t.$$.fragment,n),s=!1},d(n){H(e,n),n&&c(r),H(t,n)}}}function Xe(a){let e;return{c(){e=q("Edit")},l(r){e=N(r,"Edit")},m(r,t){A(r,e,t)},d(r){r&&c(e)}}}function Ye(a){let e;return{c(){e=q("Delete")},l(r){e=N(r,"Delete")},m(r,t){A(r,e,t)},d(r){r&&c(e)}}}function Ze(a){return{c:V,l:V,m:V,p:V,d:V}}function xe(a){let e,r=a[17]+"";return{c(){e=v("p")},l(t){e=b(t,"P",{});var s=k(e);s.forEach(c)},m(t,s){A(t,e,s),e.innerHTML=r},p(t,s){s&8&&r!==(r=t[17]+"")&&(e.innerHTML=r)},d(t){t&&c(e)}}}function et(a){return{c:V,l:V,m:V,p:V,d:V}}function tt(a){let e,r,t={ctx:a,current:null,token:null,hasCatch:!1,pending:et,then:xe,catch:Ze,value:17};return ge(r=pe(a[3].data.getGuide.guide),t),{c(){e=v("div"),t.block.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var n=k(e);t.block.l(n),n.forEach(c),this.h()},h(){G(e,"class","markdown-content")},m(s,n){A(s,e,n),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=null},p(s,n){a=s,t.ctx=a,n&8&&r!==(r=pe(a[3].data.getGuide.guide))&&ge(r,t)||Ie(t,a,n)},d(s){s&&c(e),t.block.d(),t.token=null,t=null}}}function rt(a){let e,r;return e=new ne({props:{$$slots:{default:[tt]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){S(e,t,s),r=!0},p(t,s){const n={};s&262152&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function st(a){let e,r,t,s,n,l,i,$,_,m,o,f,h,w;return{c(){e=v("div"),r=v("h3"),t=q("Delete Guide?"),s=O(),n=v("span"),l=q("Are you sure you wish to delete this guide"),i=O(),$=v("button"),_=q("Cancel"),m=O(),o=v("button"),f=q("Delete"),this.h()},l(I){e=b(I,"DIV",{class:!0});var p=k(e);r=b(p,"H3",{class:!0});var B=k(r);t=N(B,"Delete Guide?"),B.forEach(c),s=y(p),n=b(p,"SPAN",{});var T=k(n);l=N(T,"Are you sure you wish to delete this guide"),T.forEach(c),i=y(p),$=b(p,"BUTTON",{class:!0});var E=k($);_=N(E,"Cancel"),E.forEach(c),m=y(p),o=b(p,"BUTTON",{class:!0});var L=k(o);f=N(L,"Delete"),L.forEach(c),p.forEach(c),this.h()},h(){G(r,"class","text-2xl font-bold"),G($,"class","py-1 px-4 rounded text-base bg-yellow-600"),G(o,"class","py-1 px-4 rounded text-base bg-red-500"),G(e,"class","grid grid-flow-row gap-4")},m(I,p){A(I,e,p),u(e,r),u(r,t),u(e,s),u(e,n),u(n,l),u(e,i),u(e,$),u($,_),u(e,m),u(e,o),u(o,f),h||(w=[_e($,"click",a[12]),_e(o,"click",a[13])],h=!0)},p:V,d(I){I&&c(e),h=!1,je(w)}}}function nt(a){let e,r;return{c(){e=v("span"),r=q(a[4])},l(t){e=b(t,"SPAN",{});var s=k(e);r=N(s,a[4]),s.forEach(c)},m(t,s){A(t,e,s),u(e,r)},p(t,s){s&16&&K(r,t[4])},d(t){t&&c(e)}}}function at(a){let e,r,t,s,n,l,i=!a[3].fetching&&!a[3].error&&a[3].data.getGuide&&me(a);const $=[Ke,Je,ze,Qe],_=[];function m(o,f){return o[3].fetching?0:o[3].error?1:o[3].data.getGuide?2:3}return t=m(a),s=_[t]=$[t](a),{c(){i&&i.c(),e=Y(),r=O(),s.c(),n=Y()},l(o){const f=ke('[data-svelte="svelte-bhfvpi"]',document.head);i&&i.l(f),e=Y(),f.forEach(c),r=y(o),s.l(o),n=Y()},m(o,f){i&&i.m(document.head,null),u(document.head,e),A(o,r,f),_[t].m(o,f),A(o,n,f),l=!0},p(o,[f]){!o[3].fetching&&!o[3].error&&o[3].data.getGuide?i?(i.p(o,f),f&8&&j(i,1)):(i=me(o),i.c(),j(i,1),i.m(e.parentNode,e)):i&&(oe(),C(i,1,1,()=>{i=null}),ae());let h=t;t=m(o),t===h?_[t].p(o,f):(oe(),C(_[h],1,1,()=>{_[h]=null}),ae(),s=_[t],s?s.p(o,f):(s=_[t]=$[t](o),s.c()),j(s,1),s.m(n.parentNode,n))},i(o){l||(j(i),j(s),l=!0)},o(o){C(i),C(s),l=!1},d(o){i&&i.d(o),c(e),o&&c(r),_[t].d(o),o&&c(n)}}}const ve=be(Ce,{guide:void 0}),bt=Ne(async a=>(ve.variables.guide=a.page.params.guideId,Te({guide:ve})(a)));function ot(a,e,r){let t,s,n=V,l=()=>(n(),n=we(m,g=>r(3,s=g)),m),i,$;ie(a,Ae,g=>r(9,i=g)),a.$$.on_destroy.push(()=>n());let{guideId:_}=e,{guide:m}=e;l();let o="",f=!1;const h=Ee({query:qe}),w=Ge(!1);ie(a,w,g=>r(6,$=g));const I=()=>{h({guideId:_}).then(g=>{g.error?(console.error(g.error.message),r(4,o="Error deleting guide: "+g.error.message),r(2,f=!0)):$e(Z+"/guides")})};De(m);const p=()=>$e(Z+"/guide/"+_+"/edit"),B=()=>w.set(!0),T=()=>w.set(!1),E=()=>I();function L(g){$=g,w.set($)}function U(g){f=g,r(2,f)}return a.$$set=g=>{"guideId"in g&&r(0,_=g.guideId),"guide"in g&&l(r(1,m=g.guide))},a.$$.update=()=>{a.$$.dirty&520&&r(5,t=i?.roles?.deleteContent||i?.id===s?.data?.getGuide?.user?.id),a.$$.dirty&4&&(f||r(4,o=""))},[_,m,f,s,o,t,$,w,I,i,p,B,T,E,L,U]}class kt extends ee{constructor(e){super();te(this,e,ot,at,re,{guideId:0,guide:1})}}export{kt as default,bt as load};
//# sourceMappingURL=index.svelte-583d87bb.js.map

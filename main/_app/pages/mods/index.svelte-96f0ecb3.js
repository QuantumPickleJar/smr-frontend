import{S as A,i as H,s as J,j as w,m as M,o as P,x as _,u as h,v as j,e as S,k as V,c as q,a as y,n as N,d as p,b as E,f as v,V as I,r as R,w as W,N as Q,O as ae,ar as U,P as oe,W as ne,t as L,g as O,a_ as le,a$ as ce,ae as Y,b0 as ie,K as fe,L as ue,M as me,C as de,aw as _e,h as pe,X as B,$ as ge}from"../../chunks/vendor-287bac90.js";import{d as $e}from"../../chunks/graphql-7003d634.js";import{M as he}from"../../chunks/ModCard-a912cf41.js";import{P as Z}from"../../chunks/PageControls-7a6832cc.js";import{b as X}from"../../chunks/paths-6758d194.js";import{g as x}from"../../chunks/navigation-51f4a605.js";import{p as ve}from"../../chunks/stores-44c857e3.js";import{M as ke}from"../../chunks/MetaDescriptors-33a7a5ce.js";import"../../chunks/singletons-12a22614.js";function ee(l,e,s){const t=l.slice();return t[15]=e[s],t}function te(l){let e,s;return e=new ne({props:{variant:"outlined",href:""+(X+"/new-mod"),$$slots:{default:[be]},$$scope:{ctx:l}}}),{c(){w(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){P(e,t,a),s=!0},p(t,a){const r={};a&262144&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function be(l){let e;return{c(){e=L("New Mod")},l(s){e=O(s,"New Mod")},m(s,t){v(s,e,t)},d(s){s&&p(e)}}}function se(l){let e,s,t,a,r;return s=new le({props:{class:"search-paper",elevation:6,$$slots:{default:[Me]},$$scope:{ctx:l}}}),a=new ce({props:{color:"primary",mini:!0,class:"solo-fab",$$slots:{default:[je]},$$scope:{ctx:l}}}),a.$on("click",l[13]),{c(){e=S("div"),w(s.$$.fragment),t=V(),w(a.$$.fragment),this.h()},l(i){e=q(i,"DIV",{class:!0});var n=y(e);M(s.$$.fragment,n),t=N(n),M(a.$$.fragment,n),n.forEach(p),this.h()},h(){E(e,"class","search-container svelte-kfkuec")},m(i,n){v(i,e,n),P(s,e,null),I(e,t),P(a,e,null),r=!0},p(i,n){const o={};n&262152&&(o.$$scope={dirty:n,ctx:i}),s.$set(o);const c={};n&262144&&(c.$$scope={dirty:n,ctx:i}),a.$set(c)},i(i){r||(_(s.$$.fragment,i),_(a.$$.fragment,i),r=!0)},o(i){h(s.$$.fragment,i),h(a.$$.fragment,i),r=!1},d(i){i&&p(e),j(s),j(a)}}}function we(l){let e;return{c(){e=L("search")},l(s){e=O(s,"search")},m(s,t){v(s,e,t)},d(s){s&&p(e)}}}function Me(l){let e,s,t,a,r;e=new Y({props:{class:"material-icons",$$slots:{default:[we]},$$scope:{ctx:l}}});function i(o){l[12](o)}let n={placeholder:"Search",class:"solo-input"};return l[3]!==void 0&&(n.value=l[3]),t=new ie({props:n}),fe.push(()=>ue(t,"value",i)),t.$on("keypress",l[9]),{c(){w(e.$$.fragment),s=V(),w(t.$$.fragment)},l(o){M(e.$$.fragment,o),s=N(o),M(t.$$.fragment,o)},m(o,c){P(e,o,c),v(o,s,c),P(t,o,c),r=!0},p(o,c){const g={};c&262144&&(g.$$scope={dirty:c,ctx:o}),e.$set(g);const k={};!a&&c&8&&(a=!0,k.value=o[3],me(()=>a=!1)),t.$set(k)},i(o){r||(_(e.$$.fragment,o),_(t.$$.fragment,o),r=!0)},o(o){h(e.$$.fragment,o),h(t.$$.fragment,o),r=!1},d(o){j(e,o),o&&p(s),j(t,o)}}}function Pe(l){let e;return{c(){e=L("arrow_forward")},l(s){e=O(s,"arrow_forward")},m(s,t){v(s,e,t)},d(s){s&&p(e)}}}function je(l){let e,s;return e=new Y({props:{class:"material-icons",$$slots:{default:[Pe]},$$scope:{ctx:l}}}),{c(){w(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){P(e,t,a),s=!0},p(t,a){const r={};a&262144&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function Ce(l){let e,s,t,a=l[4].data.getMods.mods,r=[];for(let n=0;n<a.length;n+=1)r[n]=re(ee(l,a,n));const i=n=>h(r[n],1,1,()=>{r[n]=null});return{c(){e=S("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=q(n,"DIV",{class:!0});var o=y(e);for(let c=0;c<r.length;c+=1)r[c].l(o);o.forEach(p),this.h()},h(){E(e,"class",s="grid "+l[6]+" gap-4 svelte-kfkuec")},m(n,o){v(n,e,o);for(let c=0;c<r.length;c+=1)r[c].m(e,null);t=!0},p(n,o){if(o&16){a=n[4].data.getMods.mods;let c;for(c=0;c<a.length;c+=1){const g=ee(n,a,c);r[c]?(r[c].p(g,o),_(r[c],1)):(r[c]=re(g),r[c].c(),_(r[c],1),r[c].m(e,null))}for(R(),c=a.length;c<r.length;c+=1)i(c);W()}(!t||o&64&&s!==(s="grid "+n[6]+" gap-4 svelte-kfkuec"))&&E(e,"class",s)},i(n){if(!t){for(let o=0;o<a.length;o+=1)_(r[o]);t=!0}},o(n){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)h(r[o]);t=!1},d(n){n&&p(e),_e(r,n)}}}function De(l){let e,s,t=l[4].error.message+"",a;return{c(){e=S("p"),s=L("Oh no... "),a=L(t),this.h()},l(r){e=q(r,"P",{class:!0});var i=y(e);s=O(i,"Oh no... "),a=O(i,t),i.forEach(p),this.h()},h(){E(e,"class","svelte-kfkuec")},m(r,i){v(r,e,i),I(e,s),I(e,a)},p(r,i){i&16&&t!==(t=r[4].error.message+"")&&pe(a,t)},i:B,o:B,d(r){r&&p(e)}}}function Ee(l){let e,s;return{c(){e=S("p"),s=L("Loading..."),this.h()},l(t){e=q(t,"P",{class:!0});var a=y(e);s=O(a,"Loading..."),a.forEach(p),this.h()},h(){E(e,"class","svelte-kfkuec")},m(t,a){v(t,e,a),I(e,s)},p:B,i:B,o:B,d(t){t&&p(e)}}}function re(l){let e,s;return e=new he({props:{mod:l[15]}}),{c(){w(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){P(e,t,a),s=!0},p(t,a){const r={};a&16&&(r.mod=t[15]),e.$set(r)},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function Se(l){let e,s,t,a,r,i,n,o,c,g,k,b,D,u=l[0]&&te(l),m=l[1]&&se(l);r=new Z({props:{totalPages:Math.ceil(l[5]/F),currentPage:l[8]}});const z=[Ee,De,Ce],C=[];function $(f,d){return f[4].fetching?0:f[4].error?1:2}return n=$(l),o=C[n]=z[n](l),b=new Z({props:{totalPages:Math.ceil(l[5]/F),currentPage:l[8]}}),{c(){e=S("div"),u&&u.c(),s=V(),m&&m.c(),t=V(),a=S("div"),w(r.$$.fragment),i=V(),o.c(),c=V(),g=S("div"),k=S("div"),w(b.$$.fragment),this.h()},l(f){e=q(f,"DIV",{class:!0});var d=y(e);u&&u.l(d),s=N(d),m&&m.l(d),t=N(d),a=q(d,"DIV",{class:!0});var K=y(a);M(r.$$.fragment,K),K.forEach(p),d.forEach(p),i=N(f),o.l(f),c=N(f),g=q(f,"DIV",{class:!0});var G=y(g);k=q(G,"DIV",{class:!0});var T=y(k);M(b.$$.fragment,T),T.forEach(p),G.forEach(p),this.h()},h(){E(a,"class","svelte-kfkuec"),E(e,"class","mb-5 ml-auto flex justify-between svelte-kfkuec"),E(k,"class","svelte-kfkuec"),E(g,"class","mt-5 ml-auto flex justify-end svelte-kfkuec")},m(f,d){v(f,e,d),u&&u.m(e,null),I(e,s),m&&m.m(e,null),I(e,t),I(e,a),P(r,a,null),v(f,i,d),C[n].m(f,d),v(f,c,d),v(f,g,d),I(g,k),P(b,k,null),D=!0},p(f,[d]){f[0]?u?(u.p(f,d),d&1&&_(u,1)):(u=te(f),u.c(),_(u,1),u.m(e,s)):u&&(R(),h(u,1,1,()=>{u=null}),W()),f[1]?m?(m.p(f,d),d&2&&_(m,1)):(m=se(f),m.c(),_(m,1),m.m(e,t)):m&&(R(),h(m,1,1,()=>{m=null}),W());const K={};d&32&&(K.totalPages=Math.ceil(f[5]/F)),r.$set(K);let G=n;n=$(f),n===G?C[n].p(f,d):(R(),h(C[G],1,1,()=>{C[G]=null}),W(),o=C[n],o?o.p(f,d):(o=C[n]=z[n](f),o.c()),_(o,1),o.m(c.parentNode,c));const T={};d&32&&(T.totalPages=Math.ceil(f[5]/F)),b.$set(T)},i(f){D||(_(u),_(m),_(r.$$.fragment,f),_(o),_(b.$$.fragment,f),D=!0)},o(f){h(u),h(m),h(r.$$.fragment,f),h(o),h(b.$$.fragment,f),D=!1},d(f){f&&p(e),u&&u.d(),m&&m.d(),j(r),f&&p(i),C[n].d(f),f&&p(c),f&&p(g),j(b)}}}const F=40;function qe(l,e,s){let t,a,r;Q(l,ve,$=>s(14,r=$));let{colCount:i=4}=e,{newMod:n=!1}=e,{showSearch:o=!1}=e,c=r.query.get("q");const g=ae($e,{offset:0,limit:F,search:c});Q(l,g,$=>s(4,a=$));const k=de(1);let b,D=c,u;k.subscribe($=>{U(g,a.variables.offset=($-1)*F,a),a.reexecute()}),oe(g);function m($){$.key==="Enter"&&x(X+"/mods?q="+c)}function z($){D=$,s(3,D)}const C=()=>x(X+"/mods?q="+c);return l.$$set=$=>{"colCount"in $&&s(10,i=$.colCount),"newMod"in $&&s(0,n=$.newMod),"showSearch"in $&&s(1,o=$.showSearch)},l.$$.update=()=>{l.$$.dirty&2056&&(clearTimeout(u),s(11,u=setTimeout(()=>{s(2,c=D)},250))),l.$$.dirty&20&&(U(g,a.variables.search=c,a),a.reexecute()),l.$$.dirty&16&&s(5,b=a?.data?.getMods?.count||0),l.$$.dirty&1024&&s(6,t=i==4?"3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1":"3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1")},[n,o,c,D,a,b,t,g,k,m,i,u,z,C]}class ye extends A{constructor(e){super();H(this,e,qe,Se,J,{colCount:10,newMod:0,showSearch:1})}}function Ie(l){let e,s,t,a;return e=new ke({props:{description:"Mods available from the Satisfactory Mod Repository",title:"Mods"}}),t=new ye({props:{showSearch:!0,newMod:!0,colCount:4}}),{c(){w(e.$$.fragment),s=V(),w(t.$$.fragment)},l(r){const i=ge('[data-svelte="svelte-p791zc"]',document.head);M(e.$$.fragment,i),i.forEach(p),s=N(r),M(t.$$.fragment,r)},m(r,i){P(e,document.head,null),v(r,s,i),P(t,r,i),a=!0},p:B,i(r){a||(_(e.$$.fragment,r),_(t.$$.fragment,r),a=!0)},o(r){h(e.$$.fragment,r),h(t.$$.fragment,r),a=!1},d(r){j(e),r&&p(s),j(t,r)}}}class ze extends A{constructor(e){super();H(this,e,null,Ie,J,{})}}export{ze as default};
//# sourceMappingURL=index.svelte-96f0ecb3.js.map

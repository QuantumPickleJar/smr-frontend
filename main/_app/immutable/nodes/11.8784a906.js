import{aE as ve,S as ae,i as se,s as ne,bh as le,U as N,X as j,_ as S,b as v,t as E,a5 as C,bi as ie,u as x,I as P,R as L,v as w,w as b,J as A,d as f,V as O,Y as V,a as I,Z as g,K as U,aN as F,e as Z,a_ as xe,c as Q,a9 as re,aD as we,a8 as ye,g as ee,aG as oe,L as _,p as me,P as pe,a4 as he,aJ as te,aB as Ee,bj as fe,bk as be,aH as De,aI as Ge}from"../chunks/vendor.d26e534c.js";import{r as Ie,s as Ve}from"../chunks/graphql.eeb20993.js";import{l as ke}from"../chunks/gql.ff9241aa.js";import{p as ce}from"../chunks/formatting.6003925c.js";import{a as _e}from"../chunks/user.75b0ef58.js";import{T as Pe}from"../chunks/Toast.641a8e0d.js";import{m as ue}from"../chunks/markdown.b3e429f1.js";import{M as Ae}from"../chunks/MetaDescriptors.c81cf98a.js";const Ne=async({params:n,parent:e})=>({...n,...await ke({guide:ve({query:Ie,client:(await e()).client,variables:{guide:n.guideId}})})}),pt=Object.freeze(Object.defineProperty({__proto__:null,load:Ne},Symbol.toStringTag,{value:"Module"}));function je(n){let e,r,t,s,a,l,i,p,c=ce(n[0].created_at)+"",d,o;return{c(){e=x("div"),r=x("h3"),t=P("Info"),s=L(),a=x("span"),l=x("strong"),i=P("Created:"),p=L(),d=P(c),o=x("br"),this.h()},l($){e=w($,"DIV",{class:!0});var h=b(e);r=w(h,"H3",{class:!0});var M=b(r);t=A(M,"Info"),M.forEach(f),s=O(h),a=w(h,"SPAN",{});var k=b(a);l=w(k,"STRONG",{});var T=b(l);i=A(T,"Created:"),T.forEach(f),p=O(k),d=A(k,c),k.forEach(f),o=w(h,"BR",{}),h.forEach(f),this.h()},h(){V(r,"class","text-2xl my-4 font-bold"),V(e,"class","text-lg")},m($,h){I($,e,h),g(e,r),g(r,t),g(e,s),g(e,a),g(a,l),g(l,i),g(a,p),g(a,d),g(e,o)},p($,h){h&1&&c!==(c=ce($[0].created_at)+"")&&U(d,c)},d($){$&&f(e)}}}function Se(n){let e,r;return e=new ie({props:{$$slots:{default:[je]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){S(e,t,s),r=!0},p(t,s){const a={};s&3&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function Ce(n){let e,r;return e=new le({props:{$$slots:{default:[Se]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){S(e,t,s),r=!0},p(t,[s]){const a={};s&3&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function He(n,e,r){let{guide:t}=e;return n.$$set=s=>{"guide"in s&&r(0,t=s.guide)},[t]}class Le extends ae{constructor(e){super(),se(this,e,He,Ce,ne,{guide:0})}}function Oe(n){let e,r,t,s,a,l,i,p,c,d,o,$=n[0].username+"",h,M,k,T,R;return{c(){e=x("div"),r=x("h3"),t=P("Author"),s=L(),a=x("div"),l=x("div"),i=x("div"),c=L(),d=x("div"),o=x("a"),h=P($),k=L(),T=x("div"),R=P("Writer"),this.h()},l(G){e=w(G,"DIV",{class:!0});var H=b(e);r=w(H,"H3",{class:!0});var B=b(r);t=A(B,"Author"),B.forEach(f),s=O(H),a=w(H,"DIV",{class:!0});var m=b(a);l=w(m,"DIV",{class:!0});var y=b(l);i=w(y,"DIV",{class:!0,style:!0}),b(i).forEach(f),c=O(y),d=w(y,"DIV",{class:!0});var q=b(d);o=w(q,"A",{href:!0,class:!0});var z=b(o);h=A(z,$),z.forEach(f),k=O(q),T=w(q,"DIV",{});var u=b(T);R=A(u,"Writer"),u.forEach(f),q.forEach(f),y.forEach(f),m.forEach(f),H.forEach(f),this.h()},h(){V(r,"class","text-2xl my-4 font-bold"),V(i,"class","rounded-full bg-cover w-14 h-14"),V(i,"style",p=`background-image: url("${n[0].avatar}")`),V(o,"href",M=F+"/user/"+n[0].id+"/"),V(o,"class","text-yellow-500 underline"),V(d,"class","grid grid-flow-row"),V(l,"class","grid grid-flow-col auto-cols-min gap-x-4"),V(a,"class","grid auto-rows-min text-lg gap-y-4"),V(e,"class","grid grid-flow-row gap-y-2")},m(G,H){I(G,e,H),g(e,r),g(r,t),g(e,s),g(e,a),g(a,l),g(l,i),g(l,c),g(l,d),g(d,o),g(o,h),g(d,k),g(d,T),g(T,R)},p(G,H){H&1&&p!==(p=`background-image: url("${G[0].avatar}")`)&&V(i,"style",p),H&1&&$!==($=G[0].username+"")&&U(h,$),H&1&&M!==(M=F+"/user/"+G[0].id+"/")&&V(o,"href",M)},d(G){G&&f(e)}}}function Te(n){let e,r;return e=new ie({props:{$$slots:{default:[Oe]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){S(e,t,s),r=!0},p(t,s){const a={};s&3&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function Me(n){let e,r;return e=new le({props:{$$slots:{default:[Te]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){S(e,t,s),r=!0},p(t,[s]){const a={};s&3&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function Re(n,e,r){let{author:t}=e;return n.$$set=s=>{"author"in s&&r(0,t=s.author)},[t]}class Be extends ae{constructor(e){super(),se(this,e,Re,Me,ne,{author:0})}}function $e(n){let e,r;return e=new Ae({props:{description:n[1].data.getGuide.short_description,title:n[1].data.getGuide.name}}),{c(){N(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){S(e,t,s),r=!0},p(t,s){const a={};s&2&&(a.description=t[1].data.getGuide.short_description),s&2&&(a.title=t[1].data.getGuide.name),e.$set(a)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function Je(n){let e;return{c(){e=P("404")},l(r){e=A(r,"404")},m(r,t){I(r,e,t)},p:_,i:_,o:_,d(r){r&&f(e)}}}function We(n){let e,r,t,s=n[1].data.getGuide.name+"",a,l,i,p,c,d,o,$,h,M,k,T,R,G,H,B,m=n[3]&&de(n);d=new le({props:{class:"h-fit",$$slots:{default:[Qe]},$$scope:{ctx:n}}}),h=new Le({props:{guide:n[1].data.getGuide}}),k=new Be({props:{author:n[1].data.getGuide.user}});let y=n[3]&&ge(n);function q(u){n[16](u)}let z={$$slots:{default:[nt]},$$scope:{ctx:n}};return n[0]!==void 0&&(z.running=n[0]),G=new Pe({props:z}),me.push(()=>pe(G,"running",q)),{c(){e=x("div"),r=x("div"),t=x("h1"),a=P(s),l=L(),i=x("div"),m&&m.c(),p=L(),c=x("div"),N(d.$$.fragment),o=L(),$=x("div"),N(h.$$.fragment),M=L(),N(k.$$.fragment),T=L(),y&&y.c(),R=L(),N(G.$$.fragment),this.h()},l(u){e=w(u,"DIV",{class:!0});var D=b(e);r=w(D,"DIV",{class:!0});var W=b(r);t=w(W,"H1",{class:!0});var K=b(t);a=A(K,s),K.forEach(f),l=O(W),i=w(W,"DIV",{});var X=b(i);m&&m.l(X),X.forEach(f),W.forEach(f),p=O(D),c=w(D,"DIV",{class:!0});var J=b(c);j(d.$$.fragment,J),o=O(J),$=w(J,"DIV",{class:!0});var Y=b($);j(h.$$.fragment,Y),M=O(Y),j(k.$$.fragment,Y),Y.forEach(f),J.forEach(f),D.forEach(f),T=O(u),y&&y.l(u),R=O(u),j(G.$$.fragment,u),this.h()},h(){V(t,"class","text-4xl font-bold"),V(r,"class","flex flex-wrap h-auto justify-between items-center"),V($,"class","grid grid-cols-1 auto-rows-min gap-8"),V(c,"class","grid grid-auto-max auto-cols-fr gap-4"),V(e,"class","grid gap-6 xlx:grid-flow-row")},m(u,D){I(u,e,D),g(e,r),g(r,t),g(t,a),g(r,l),g(r,i),m&&m.m(i,null),g(e,p),g(e,c),S(d,c,null),g(c,o),g(c,$),S(h,$,null),g($,M),S(k,$,null),I(u,T,D),y&&y.m(u,D),I(u,R,D),S(G,u,D),B=!0},p(u,D){(!B||D&2)&&s!==(s=u[1].data.getGuide.name+"")&&U(a,s),u[3]?m?(m.p(u,D),D&8&&v(m,1)):(m=de(u),m.c(),v(m,1),m.m(i,null)):m&&(ee(),E(m,1,1,()=>{m=null}),Q());const W={};D&524290&&(W.$$scope={dirty:D,ctx:u}),d.$set(W);const K={};D&2&&(K.guide=u[1].data.getGuide),h.$set(K);const X={};D&2&&(X.author=u[1].data.getGuide.user),k.$set(X),u[3]?y?(y.p(u,D),D&8&&v(y,1)):(y=ge(u),y.c(),v(y,1),y.m(R.parentNode,R)):y&&(ee(),E(y,1,1,()=>{y=null}),Q());const J={};D&524292&&(J.$$scope={dirty:D,ctx:u}),!H&&D&1&&(H=!0,J.running=u[0],he(()=>H=!1)),G.$set(J)},i(u){B||(v(m),v(d.$$.fragment,u),v(h.$$.fragment,u),v(k.$$.fragment,u),v(y),v(G.$$.fragment,u),B=!0)},o(u){E(m),E(d.$$.fragment,u),E(h.$$.fragment,u),E(k.$$.fragment,u),E(y),E(G.$$.fragment,u),B=!1},d(u){u&&f(e),m&&m.d(),C(d),C(h),C(k),u&&f(T),y&&y.d(u),u&&f(R),C(G,u)}}}function qe(n){let e,r,t=n[1].error.message+"",s;return{c(){e=x("p"),r=P("Oh no... "),s=P(t)},l(a){e=w(a,"P",{});var l=b(e);r=A(l,"Oh no... "),s=A(l,t),l.forEach(f)},m(a,l){I(a,e,l),g(e,r),g(e,s)},p(a,l){l&2&&t!==(t=a[1].error.message+"")&&U(s,t)},i:_,o:_,d(a){a&&f(e)}}}function ze(n){let e,r;return{c(){e=x("p"),r=P("Loading...")},l(t){e=w(t,"P",{});var s=b(e);r=A(s,"Loading..."),s.forEach(f)},m(t,s){I(t,e,s),g(e,r)},p:_,i:_,o:_,d(t){t&&f(e)}}}function de(n){let e,r,t,s;return e=new te({props:{variant:"outlined",$$slots:{default:[Ke]},$$scope:{ctx:n}}}),e.$on("click",n[11]),t=new te({props:{variant:"outlined",$$slots:{default:[Xe]},$$scope:{ctx:n}}}),t.$on("click",n[12]),{c(){N(e.$$.fragment),r=L(),N(t.$$.fragment)},l(a){j(e.$$.fragment,a),r=O(a),j(t.$$.fragment,a)},m(a,l){S(e,a,l),I(a,r,l),S(t,a,l),s=!0},p(a,l){const i={};l&524288&&(i.$$scope={dirty:l,ctx:a}),e.$set(i);const p={};l&524288&&(p.$$scope={dirty:l,ctx:a}),t.$set(p)},i(a){s||(v(e.$$.fragment,a),v(t.$$.fragment,a),s=!0)},o(a){E(e.$$.fragment,a),E(t.$$.fragment,a),s=!1},d(a){C(e,a),a&&f(r),C(t,a)}}}function Ke(n){let e;return{c(){e=P("Edit")},l(r){e=A(r,"Edit")},m(r,t){I(r,e,t)},d(r){r&&f(e)}}}function Xe(n){let e;return{c(){e=P("Delete")},l(r){e=A(r,"Delete")},m(r,t){I(r,e,t)},d(r){r&&f(e)}}}function Ue(n){return{c:_,l:_,m:_,p:_,d:_}}function Ye(n){let e,r=n[18]+"";return{c(){e=x("p")},l(t){e=w(t,"P",{});var s=b(e);s.forEach(f)},m(t,s){I(t,e,s),e.innerHTML=r},p(t,s){s&2&&r!==(r=t[18]+"")&&(e.innerHTML=r)},d(t){t&&f(e)}}}function Ze(n){return{c:_,l:_,m:_,p:_,d:_}}function Fe(n){let e,r,t={ctx:n,current:null,token:null,hasCatch:!1,pending:Ze,then:Ye,catch:Ue,value:18};return fe(r=ue(n[1].data.getGuide.guide),t),{c(){e=x("div"),t.block.c(),this.h()},l(s){e=w(s,"DIV",{class:!0});var a=b(e);t.block.l(a),a.forEach(f),this.h()},h(){V(e,"class","markdown-content break-words")},m(s,a){I(s,e,a),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=null},p(s,a){n=s,t.ctx=n,a&2&&r!==(r=ue(n[1].data.getGuide.guide))&&fe(r,t)||be(t,n,a)},d(s){s&&f(e),t.block.d(),t.token=null,t=null}}}function Qe(n){let e,r;return e=new ie({props:{$$slots:{default:[Fe]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){S(e,t,s),r=!0},p(t,s){const a={};s&524290&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function ge(n){let e,r,t;function s(l){n[15](l)}let a={$$slots:{default:[st]},$$scope:{ctx:n}};return n[4]!==void 0&&(a.open=n[4]),e=new Ee({props:a}),me.push(()=>pe(e,"open",s)),{c(){N(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,i){S(e,l,i),t=!0},p(l,i){const p={};i&524288&&(p.$$scope={dirty:i,ctx:l}),!r&&i&16&&(r=!0,p.open=l[4],he(()=>r=!1)),e.$set(p)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){E(e.$$.fragment,l),t=!1},d(l){C(e,l)}}}function et(n){let e;return{c(){e=P("Delete Guide?")},l(r){e=A(r,"Delete Guide?")},m(r,t){I(r,e,t)},d(r){r&&f(e)}}}function tt(n){let e;return{c(){e=P("Cancel")},l(r){e=A(r,"Cancel")},m(r,t){I(r,e,t)},d(r){r&&f(e)}}}function rt(n){let e;return{c(){e=P("Delete")},l(r){e=A(r,"Delete")},m(r,t){I(r,e,t)},d(r){r&&f(e)}}}function at(n){let e,r,t,s,a,l,i,p;return a=new te({props:{variant:"outlined",$$slots:{default:[tt]},$$scope:{ctx:n}}}),a.$on("click",n[13]),i=new te({props:{variant:"outlined",$$slots:{default:[rt]},$$scope:{ctx:n}}}),i.$on("click",n[14]),{c(){e=x("div"),r=x("span"),t=P("Are you sure you wish to delete this guide"),s=L(),N(a.$$.fragment),l=L(),N(i.$$.fragment),this.h()},l(c){e=w(c,"DIV",{class:!0});var d=b(e);r=w(d,"SPAN",{});var o=b(r);t=A(o,"Are you sure you wish to delete this guide"),o.forEach(f),s=O(d),j(a.$$.fragment,d),l=O(d),j(i.$$.fragment,d),d.forEach(f),this.h()},h(){V(e,"class","grid grid-flow-row gap-4")},m(c,d){I(c,e,d),g(e,r),g(r,t),g(e,s),S(a,e,null),g(e,l),S(i,e,null),p=!0},p(c,d){const o={};d&524288&&(o.$$scope={dirty:d,ctx:c}),a.$set(o);const $={};d&524288&&($.$$scope={dirty:d,ctx:c}),i.$set($)},i(c){p||(v(a.$$.fragment,c),v(i.$$.fragment,c),p=!0)},o(c){E(a.$$.fragment,c),E(i.$$.fragment,c),p=!1},d(c){c&&f(e),C(a),C(i)}}}function st(n){let e,r,t,s;return e=new De({props:{$$slots:{default:[et]},$$scope:{ctx:n}}}),t=new Ge({props:{$$slots:{default:[at]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment),r=L(),N(t.$$.fragment)},l(a){j(e.$$.fragment,a),r=O(a),j(t.$$.fragment,a)},m(a,l){S(e,a,l),I(a,r,l),S(t,a,l),s=!0},p(a,l){const i={};l&524288&&(i.$$scope={dirty:l,ctx:a}),e.$set(i);const p={};l&524288&&(p.$$scope={dirty:l,ctx:a}),t.$set(p)},i(a){s||(v(e.$$.fragment,a),v(t.$$.fragment,a),s=!0)},o(a){E(e.$$.fragment,a),E(t.$$.fragment,a),s=!1},d(a){C(e,a),a&&f(r),C(t,a)}}}function nt(n){let e,r;return{c(){e=x("span"),r=P(n[2])},l(t){e=w(t,"SPAN",{});var s=b(e);r=A(s,n[2]),s.forEach(f)},m(t,s){I(t,e,s),g(e,r)},p(t,s){s&4&&U(r,t[2])},d(t){t&&f(e)}}}function lt(n){let e,r,t,s,a,l,i=!n[1].fetching&&!n[1].error&&n[1].data.getGuide&&$e(n);const p=[ze,qe,We,Je],c=[];function d(o,$){return o[1].fetching?0:o[1].error?1:o[1].data.getGuide?2:3}return t=d(n),s=c[t]=p[t](n),{c(){i&&i.c(),e=Z(),r=L(),s.c(),a=Z()},l(o){const $=xe("svelte-bhfvpi",document.head);i&&i.l($),e=Z(),$.forEach(f),r=O(o),s.l(o),a=Z()},m(o,$){i&&i.m(document.head,null),g(document.head,e),I(o,r,$),c[t].m(o,$),I(o,a,$),l=!0},p(o,[$]){!o[1].fetching&&!o[1].error&&o[1].data.getGuide?i?(i.p(o,$),$&2&&v(i,1)):(i=$e(o),i.c(),v(i,1),i.m(e.parentNode,e)):i&&(ee(),E(i,1,1,()=>{i=null}),Q());let h=t;t=d(o),t===h?c[t].p(o,$):(ee(),E(c[h],1,1,()=>{c[h]=null}),Q(),s=c[t],s?s.p(o,$):(s=c[t]=p[t](o),s.c()),v(s,1),s.m(a.parentNode,a))},i(o){l||(v(i),v(s),l=!0)},o(o){E(i),E(s),l=!1},d(o){i&&i.d(o),f(e),o&&f(r),c[t].d(o),o&&f(a)}}}function it(n,e,r){let t,s,a,l;re(n,_e,m=>r(10,a=m));let{data:i}=e;const{guideId:p,guide:c}=i;re(n,c,m=>r(1,s=m));const d=we();let o="",$=!1;const h=ye(!1);re(n,h,m=>r(4,l=m));const M=()=>{d.mutation(Ve,{guideId:p}).toPromise().then(m=>{m.error?(console.error(m.error.message),r(2,o="Error deleting guide: "+m.error.message),r(0,$=!0)):oe(F+"/guides")})},k=()=>oe(F+"/guide/"+p+"/edit"),T=()=>h.set(!0),R=()=>h.set(!1),G=()=>M();function H(m){l=m,h.set(l)}function B(m){$=m,r(0,$)}return n.$$set=m=>{"data"in m&&r(9,i=m.data)},n.$$.update=()=>{n.$$.dirty&1026&&r(3,t=a?.roles?.deleteContent||a?.id===s?.data?.getGuide?.user?.id),n.$$.dirty&1&&($||r(2,o=""))},[$,s,o,t,l,p,c,h,M,i,a,k,T,R,G,H,B]}class ht extends ae{constructor(e){super(),se(this,e,it,lt,ne,{data:9})}}export{ht as component,pt as universal};
//# sourceMappingURL=11.8784a906.js.map

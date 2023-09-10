import{S as Y,i as Z,s as z,e as S,a as u,L as d,d as f,u as v,v as P,w as I,Y as _,aX as x,I as A,J as V,Z as B,K as F,R as W,V as U,aq as Q,g as fe,t as C,c as ce,b as N,U as J,X as T,_ as q,a5 as j,bj as G,bk as se,bq as re,br as le,aJ as me,aB as ue,p as de,P as pe,a4 as $e,aH as he,aI as ge}from"./vendor.96815c21.js";import{T as w}from"./graphql.22d32a05.js";import{m as M}from"./markdown.cb9fc94b.js";function te(a){let e;return{c(){e=v("div"),this.h()},l(o){e=P(o,"DIV",{class:!0}),I(e).forEach(f),this.h()},h(){_(e,"class","mod-outdated-stripe"),x(e,"mod-damaged",a[1]===w.Damaged),x(e,"mod-broken",a[1]===w.Broken),x(e,"mod-logo-outdated",a[0])},m(o,t){u(o,e,t)},p(o,t){t&2&&x(e,"mod-damaged",o[1]===w.Damaged),t&2&&x(e,"mod-broken",o[1]===w.Broken),t&1&&x(e,"mod-logo-outdated",o[0])},d(o){o&&f(e)}}}function be(a){let e,o=!a[2]&&te(a);return{c(){o&&o.c(),e=S()},l(t){o&&o.l(t),e=S()},m(t,i){o&&o.m(t,i),u(t,e,i)},p(t,[i]){t[2]?o&&(o.d(1),o=null):o?o.p(t,i):(o=te(t),o.c(),o.m(e.parentNode,e))},i:d,o:d,d(t){o&&o.d(t),t&&f(e)}}}function ye(a,e,o){let t,{compatibility:i}=e,{logo:n=!1}=e;function s(p){const l=p.EA.state;return l==w.Broken?l:l==w.Works||p.EXP.state!=w.Works?p.EXP.state:l}let $=w.Works;return a.$$set=p=>{"compatibility"in p&&o(3,i=p.compatibility),"logo"in p&&o(0,n=p.logo)},a.$$.update=()=>{a.$$.dirty&8&&(i?o(1,$=s(i)):o(1,$=w.Works)),a.$$.dirty&2&&o(2,t=$===w.Works)},[n,$,t,i]}class He extends Y{constructor(e){super(),Z(this,e,ye,be,z,{compatibility:3,logo:0})}}function ke(a){let e,o,t;return{c(){e=v("p"),o=A(a[0]),this.h()},l(i){e=P(i,"P",{class:!0});var n=I(e);o=V(n,a[0]),n.forEach(f),this.h()},h(){_(e,"class",t=a[1](a[0])+" mod-state")},m(i,n){u(i,e,n),B(e,o)},p(i,[n]){n&1&&F(o,i[0]),n&1&&t!==(t=i[1](i[0])+" mod-state")&&_(e,"class",t)},i:d,o:d,d(i){i&&f(e)}}}function Ee(a,e,o){let{state:t}=e;const i=n=>`mod-state-${n.toString().toLowerCase()}`;return a.$$set=n=>{"state"in n&&o(0,t=n.state)},[t,i]}class ie extends Y{constructor(e){super(),Z(this,e,Ee,ke,z,{state:0})}}function we(a){let e,o=a[1].Unknown+"",t;return{c(){e=v("div"),t=A(o)},l(i){e=P(i,"DIV",{});var n=I(e);t=V(n,o),n.forEach(f)},m(i,n){u(i,e,n),B(e,t)},p:d,i:d,o:d,d(i){i&&f(e)}}}function xe(a){let e,o,t,i,n,s=a[1][a[0]?.EA?.state||"Unknown"]+"",$,p,l,m,X,b,R,y,L=a[1][a[0]?.EXP?.state||"Unknown"]+"",c,g,D,H;t=new ie({props:{state:a[0]?.EA?.state}});let k=a[0].EA.note&&ne(a);b=new ie({props:{state:a[0]?.EXP?.state}});let E=a[0].EXP.note&&oe(a);return{c(){e=v("div"),o=A("Early Access: "),J(t.$$.fragment),i=W(),n=v("div"),$=A(s),p=W(),k&&k.c(),l=W(),m=v("div"),X=A("Experimental: "),J(b.$$.fragment),R=W(),y=v("div"),c=A(L),g=W(),E&&E.c(),D=S(),this.h()},l(r){e=P(r,"DIV",{});var h=I(e);o=V(h,"Early Access: "),T(t.$$.fragment,h),h.forEach(f),i=U(r),n=P(r,"DIV",{class:!0});var O=I(n);$=V(O,s),O.forEach(f),p=U(r),k&&k.l(r),l=U(r),m=P(r,"DIV",{});var K=I(m);X=V(K,"Experimental: "),T(b.$$.fragment,K),K.forEach(f),R=U(r),y=P(r,"DIV",{class:!0});var ee=I(y);c=V(ee,L),ee.forEach(f),g=U(r),E&&E.l(r),D=S(),this.h()},h(){_(n,"class","compatibility-state-description"),_(y,"class","compatibility-state-description")},m(r,h){u(r,e,h),B(e,o),q(t,e,null),u(r,i,h),u(r,n,h),B(n,$),u(r,p,h),k&&k.m(r,h),u(r,l,h),u(r,m,h),B(m,X),q(b,m,null),u(r,R,h),u(r,y,h),B(y,c),u(r,g,h),E&&E.m(r,h),u(r,D,h),H=!0},p(r,h){const O={};h&1&&(O.state=r[0]?.EA?.state),t.$set(O),(!H||h&1)&&s!==(s=r[1][r[0]?.EA?.state||"Unknown"]+"")&&F($,s),r[0].EA.note?k?k.p(r,h):(k=ne(r),k.c(),k.m(l.parentNode,l)):k&&(k.d(1),k=null);const K={};h&1&&(K.state=r[0]?.EXP?.state),b.$set(K),(!H||h&1)&&L!==(L=r[1][r[0]?.EXP?.state||"Unknown"]+"")&&F(c,L),r[0].EXP.note?E?E.p(r,h):(E=oe(r),E.c(),E.m(D.parentNode,D)):E&&(E.d(1),E=null)},i(r){H||(N(t.$$.fragment,r),N(b.$$.fragment,r),H=!0)},o(r){C(t.$$.fragment,r),C(b.$$.fragment,r),H=!1},d(r){r&&f(e),j(t),r&&f(i),r&&f(n),r&&f(p),k&&k.d(r),r&&f(l),r&&f(m),j(b),r&&f(R),r&&f(y),r&&f(g),E&&E.d(r),r&&f(D)}}}function ne(a){let e,o,t,i={ctx:a,current:null,token:null,hasCatch:!1,pending:Xe,then:Pe,catch:ve,value:2};return G(t=M(a[0].EA.note),i),{c(){e=v("div"),o=A("Note: "),i.block.c()},l(n){e=P(n,"DIV",{});var s=I(e);o=V(s,"Note: "),i.block.l(s),s.forEach(f)},m(n,s){u(n,e,s),B(e,o),i.block.m(e,i.anchor=null),i.mount=()=>e,i.anchor=null},p(n,s){a=n,i.ctx=a,s&1&&t!==(t=M(a[0].EA.note))&&G(t,i)||se(i,a,s)},d(n){n&&f(e),i.block.d(),i.token=null,i=null}}}function ve(a){return{c:d,l:d,m:d,p:d,d}}function Pe(a){let e,o=a[2]+"",t;return{c(){e=new re(!1),t=S(),this.h()},l(i){e=le(i,!1),t=S(),this.h()},h(){e.a=t},m(i,n){e.m(o,i,n),u(i,t,n)},p(i,n){n&1&&o!==(o=i[2]+"")&&e.p(o)},d(i){i&&f(t),i&&e.d()}}}function Xe(a){return{c:d,l:d,m:d,p:d,d}}function oe(a){let e,o,t,i={ctx:a,current:null,token:null,hasCatch:!1,pending:Ae,then:Ie,catch:De,value:2};return G(t=M(a[0].EXP.note),i),{c(){e=v("div"),o=A("Note: "),i.block.c()},l(n){e=P(n,"DIV",{});var s=I(e);o=V(s,"Note: "),i.block.l(s),s.forEach(f)},m(n,s){u(n,e,s),B(e,o),i.block.m(e,i.anchor=null),i.mount=()=>e,i.anchor=null},p(n,s){a=n,i.ctx=a,s&1&&t!==(t=M(a[0].EXP.note))&&G(t,i)||se(i,a,s)},d(n){n&&f(e),i.block.d(),i.token=null,i=null}}}function De(a){return{c:d,l:d,m:d,p:d,d}}function Ie(a){let e,o=a[2]+"",t;return{c(){e=new re(!1),t=S(),this.h()},l(i){e=le(i,!1),t=S(),this.h()},h(){e.a=t},m(i,n){e.m(o,i,n),u(i,t,n)},p(i,n){n&1&&o!==(o=i[2]+"")&&e.p(o)},d(i){i&&f(t),i&&e.d()}}}function Ae(a){return{c:d,l:d,m:d,p:d,d}}function Ve(a){let e,o,t,i,n,s,$,p,l,m,X,b;const R=[xe,we],y=[];function L(c,g){return c[0]?0:1}return l=L(a),m=y[l]=R[l](a),{c(){e=v("div"),o=A("Compatibility information is maintained by the community. If you encounter issues with a mod, please report it on the "),t=v("a"),i=A("Discord"),n=A("!"),s=W(),$=v("br"),p=W(),m.c(),X=S(),this.h()},l(c){e=P(c,"DIV",{});var g=I(e);o=V(g,"Compatibility information is maintained by the community. If you encounter issues with a mod, please report it on the "),t=P(g,"A",{href:!0,style:!0});var D=I(t);i=V(D,"Discord"),D.forEach(f),n=V(g,"!"),g.forEach(f),s=U(c),$=P(c,"BR",{}),p=U(c),m.l(c),X=S(),this.h()},h(){_(t,"href","https://discord.gg/xkVJ73E"),Q(t,"text-decoration","underline")},m(c,g){u(c,e,g),B(e,o),B(e,t),B(t,i),B(e,n),u(c,s,g),u(c,$,g),u(c,p,g),y[l].m(c,g),u(c,X,g),b=!0},p(c,[g]){let D=l;l=L(c),l===D?y[l].p(c,g):(fe(),C(y[D],1,1,()=>{y[D]=null}),ce(),m=y[l],m?m.p(c,g):(m=y[l]=R[l](c),m.c()),N(m,1),m.m(X.parentNode,X))},i(c){b||(N(m),b=!0)},o(c){C(m),b=!1},d(c){c&&f(e),c&&f(s),c&&f($),c&&f(p),y[l].d(c),c&&f(X)}}}function Be(a,e,o){let{compatibility:t}=e;const i={Works:"The mod should be functioning as intended.",Damaged:"Something is causing the mod to work improperly, but it is partially working. Be sure to read the note and see an explanation of what is going wrong!",Broken:"The mod is suffering from a critical problem and could do things like crash your game at launch if you were to install it. Be sure to read the note and see an explanation of what is going wrong!",Unknown:"No compatibility information has been reported for this mod yet. Try it out and contact us on the Discord so it can be updated!"};return a.$$set=n=>{"compatibility"in n&&o(0,t=n.compatibility)},[t,i]}class Ce extends Y{constructor(e){super(),Z(this,e,Be,Ve,z,{compatibility:0,compatibilityStateDescriptions:1})}get compatibilityStateDescriptions(){return this.$$.ctx[1]}}function Ne(a){let e,o;return{c(){e=v("p"),o=A(a[1]),this.h()},l(t){e=P(t,"P",{class:!0});var i=I(e);o=V(i,a[1]),i.forEach(f),this.h()},h(){_(e,"class","material-icons text-base"),x(e,"mod-state-works",a[0]?.state===w.Works),x(e,"mod-state-damaged",a[0]?.state===w.Damaged),x(e,"mod-state-broken",a[0]?.state===w.Broken),x(e,"mod-state-unknown",!a[0])},m(t,i){u(t,e,i),B(e,o)},p(t,[i]){i&2&&F(o,t[1]),i&1&&x(e,"mod-state-works",t[0]?.state===w.Works),i&1&&x(e,"mod-state-damaged",t[0]?.state===w.Damaged),i&1&&x(e,"mod-state-broken",t[0]?.state===w.Broken),i&1&&x(e,"mod-state-unknown",!t[0])},i:d,o:d,d(t){t&&f(e)}}}function We(a,e,o){let{compatibility:t}=e,{EXP:i=!1}=e,n="rocket_launch";return i&&(n="science"),a.$$set=s=>{"compatibility"in s&&o(0,t=s.compatibility),"EXP"in s&&o(2,i=s.EXP)},[t,n,i]}class ae extends Y{constructor(e){super(),Z(this,e,We,Ne,z,{compatibility:0,EXP:2})}}function Ue(a){let e,o,t,i;return e=new ae({props:{compatibility:a[0]?.EA}}),t=new ae({props:{compatibility:a[0]?.EXP,EXP:!0}}),{c(){J(e.$$.fragment),o=W(),J(t.$$.fragment)},l(n){T(e.$$.fragment,n),o=U(n),T(t.$$.fragment,n)},m(n,s){q(e,n,s),u(n,o,s),q(t,n,s),i=!0},p(n,s){const $={};s&1&&($.compatibility=n[0]?.EA),e.$set($);const p={};s&1&&(p.compatibility=n[0]?.EXP),t.$set(p)},i(n){i||(N(e.$$.fragment,n),N(t.$$.fragment,n),i=!0)},o(n){C(e.$$.fragment,n),C(t.$$.fragment,n),i=!1},d(n){j(e,n),n&&f(o),j(t,n)}}}function Se(a){let e;return{c(){e=A("Compatibility Information")},l(o){e=V(o,"Compatibility Information")},m(o,t){u(o,e,t)},d(o){o&&f(e)}}}function Je(a){let e,o;return e=new Ce({props:{compatibility:a[0]}}),{c(){J(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,i){q(e,t,i),o=!0},p(t,i){const n={};i&1&&(n.compatibility=t[0]),e.$set(n)},i(t){o||(N(e.$$.fragment,t),o=!0)},o(t){C(e.$$.fragment,t),o=!1},d(t){j(e,t)}}}function Te(a){let e,o,t,i;return e=new he({props:{$$slots:{default:[Se]},$$scope:{ctx:a}}}),t=new ge({props:{$$slots:{default:[Je]},$$scope:{ctx:a}}}),{c(){J(e.$$.fragment),o=W(),J(t.$$.fragment)},l(n){T(e.$$.fragment,n),o=U(n),T(t.$$.fragment,n)},m(n,s){q(e,n,s),u(n,o,s),q(t,n,s),i=!0},p(n,s){const $={};s&16&&($.$$scope={dirty:s,ctx:n}),e.$set($);const p={};s&17&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){i||(N(e.$$.fragment,n),N(t.$$.fragment,n),i=!0)},o(n){C(e.$$.fragment,n),C(t.$$.fragment,n),i=!1},d(n){j(e,n),n&&f(o),j(t,n)}}}function qe(a){let e,o,t,i,n,s;e=new me({props:{class:"min-w-0 m-0",title:"Compatibility information (click to view more info)",$$slots:{default:[Ue]},$$scope:{ctx:a}}}),e.$on("click",a[2]);function $(l){a[3](l)}let p={$$slots:{default:[Te]},$$scope:{ctx:a}};return a[1]!==void 0&&(p.open=a[1]),i=new ue({props:p}),de.push(()=>pe(i,"open",$)),{c(){o=v("div"),J(e.$$.fragment),t=W(),J(i.$$.fragment),this.h()},l(l){o=P(l,"DIV",{style:!0});var m=I(o);T(e.$$.fragment,m),t=U(l),T(i.$$.fragment,l),this.h()},h(){Q(o,"display","contents"),Q(o,"--mdc-text-button-container-height","20px")},m(l,m){u(l,o,m),q(e,o,null),u(l,t,m),q(i,l,m),s=!0},p(l,[m]){const X={};m&17&&(X.$$scope={dirty:m,ctx:l}),e.$set(X);const b={};m&17&&(b.$$scope={dirty:m,ctx:l}),!n&&m&2&&(n=!0,b.open=l[1],$e(()=>n=!1)),i.$set(b)},i(l){s||(N(e.$$.fragment,l),N(i.$$.fragment,l),s=!0)},o(l){C(e.$$.fragment,l),C(i.$$.fragment,l),s=!1},d(l){l&&e&&f(o),j(e,l),l&&f(t),j(i,l)}}}function je(a,e,o){let t=!1,{compatibility:i}=e;const n=()=>{o(1,t=!0)};function s($){t=$,o(1,t)}return a.$$set=$=>{"compatibility"in $&&o(0,i=$.compatibility)},[i,t,n,s]}class Ke extends Y{constructor(e){super(),Z(this,e,je,qe,z,{compatibility:0})}}export{Ke as C,He as O};
//# sourceMappingURL=CompatibilityButton.fc1ee342.js.map
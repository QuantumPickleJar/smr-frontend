import{S as Ie,i as De,s as Ve,e as jt,a as A,L as W,d as o,aD as Me,aE as Re,ar as He,u as b,I as R,v as y,w as _,J as H,Y as w,Z as f,R as k,V as P,bf as $e,K as et,p as G,P as Q,bj as me,aU as ke,aJ as se,U as N,X as U,_ as q,y as je,a4 as tt,bk as ze,b as v,g as Lt,t as I,c as Tt,a5 as L,a9 as Oe,ab as re,aV as Pe,aR as We,bc as Se}from"./vendor.d26e534c.js";import{o as Ut,s as K,b as qt,d as Xe,l as Ce,e as de,f as Ye,T as Et,V as yt,c as Ze,v as Be,r as Fe,a as Je}from"./forms.1cb5b5c1.js";import{t as Ke}from"./forms.9cb28b63.js";import{m as pe}from"./markdown.b3e429f1.js";import{S as Ge,T as ge}from"./graphql.eeb20993.js";import{T as Qe}from"./TagList.d8851828.js";import{M as tr}from"./ModCompatibilityEdit.22e3e905.js";const he=Ut({name:K().min(3).max(32),mod_reference:K().min(3).max(32).regex(/^([a-zA-Z][a-zA-Z0-9_]*)$/).refine(async()=>!0),short_description:K().min(16).max(128),full_description:qt(K()),logo:qt(Xe().refine(a=>"name"in a&&"size"in a&&"type"in a)),source_url:K().url().optional().or(Ce("")),authors:qt(Ut({role:K(),user_id:K()}).array()),compatibility:qt(Ut({EA:Ut({state:K(),note:de()}),EXP:Ut({state:K(),note:de()})})),hidden:Ye(),tagIDs:qt(K().array())});function er(a){let t,r;return{c(){t=b("p"),r=R("Unknown User ID"),this.h()},l(s){t=y(s,"P",{class:!0});var e=_(t);r=H(e,"Unknown User ID"),e.forEach(o),this.h()},h(){w(t,"class","mr-2 whitespace-nowrap")},m(s,e){A(s,t,e),f(t,r)},p:W,d(s){s&&o(t)}}}function rr(a){let t,r,s,e,l,i,g=a[1].data.getUser.username+"",p;return{c(){t=b("div"),r=b("div"),e=k(),l=b("div"),i=b("span"),p=R(g),this.h()},l(u){t=y(u,"DIV",{class:!0});var h=_(t);r=y(h,"DIV",{class:!0,style:!0}),_(r).forEach(o),e=P(h),l=y(h,"DIV",{class:!0});var $=_(l);i=y($,"SPAN",{class:!0});var S=_(i);p=H(S,g),S.forEach(o),$.forEach(o),h.forEach(o),this.h()},h(){w(r,"class","rounded-full bg-cover w-7 h-7"),w(r,"style",s=`background-image: url("${a[1].data.getUser.avatar||$e+"/images/no_image.webp"}")`),w(i,"class","text-yellow-500"),w(l,"class","grid grid-flow-row"),w(t,"class","grid grid-flow-col auto-cols-max gap-x-2 mr-2")},m(u,h){A(u,t,h),f(t,r),f(t,e),f(t,l),f(l,i),f(i,p)},p(u,h){h&2&&s!==(s=`background-image: url("${u[1].data.getUser.avatar||$e+"/images/no_image.webp"}")`)&&w(r,"style",s),h&2&&g!==(g=u[1].data.getUser.username+"")&&et(p,g)},d(u){u&&o(t)}}}function sr(a){let t,r,s=a[1].error.message+"",e;return{c(){t=b("p"),r=R("Oh no... "),e=R(s),this.h()},l(l){t=y(l,"P",{class:!0});var i=_(t);r=H(i,"Oh no... "),e=H(i,s),i.forEach(o),this.h()},h(){w(t,"class","mr-2")},m(l,i){A(l,t,i),f(t,r),f(t,e)},p(l,i){i&2&&s!==(s=l[1].error.message+"")&&et(e,s)},d(l){l&&o(t)}}}function ar(a){let t,r;return{c(){t=b("p"),r=R("Loading..."),this.h()},l(s){t=y(s,"P",{class:!0});var e=_(t);r=H(e,"Loading..."),e.forEach(o),this.h()},h(){w(t,"class","mr-2")},m(s,e){A(s,t,e),f(t,r)},p:W,d(s){s&&o(t)}}}function lr(a){let t;function r(l,i){return l[1].fetching?ar:l[1].error?sr:l[1].data.getUser?rr:er}let s=r(a),e=s(a);return{c(){e.c(),t=jt()},l(l){e.l(l),t=jt()},m(l,i){e.m(l,i),A(l,t,i)},p(l,[i]){s===(s=r(l))&&e?e.p(l,i):(e.d(1),e=s(l),e&&(e.c(),e.m(t.parentNode,t)))},i:W,o:W,d(l){e.d(l),l&&o(t)}}}function ir(a,t,r){let s,e,l=W,i=()=>(l(),l=He(s,u=>r(1,e=u)),s);a.$$.on_destroy.push(()=>l());let{id:g}=t;const p=Me();return a.$$set=u=>{"id"in u&&r(2,g=u.id)},a.$$.update=()=>{a.$$.dirty&4&&i(r(0,s=Re({query:Ge,client:p,variables:{user:g}})))},[s,e,g]}class nr extends Ie{constructor(t){super(),De(this,t,ir,lr,Ve,{id:2})}}function ve(a,t,r){const s=a.slice();return s[25]=t[r],s[26]=t,s[27]=r,s}function or(a){let t,r=(a[28]||"")+"",s;return{c(){t=b("span"),s=R(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=_(t);s=H(l,r),l.forEach(o),this.h()},h(){w(t,"class","validation-message")},m(e,l){A(e,t,l),f(t,s)},p(e,l){l&268435456&&r!==(r=(e[28]||"")+"")&&et(s,r)},d(e){e&&o(t)}}}function we(a){let t;return{c(){t=R(`Warning! You will not be able to change this after creating the mod! Please ensure this is a unique modifier
            that closely matches the name of your mod!`)},l(r){t=H(r,`Warning! You will not be able to change this after creating the mod! Please ensure this is a unique modifier
            that closely matches the name of your mod!`)},m(r,s){A(r,t,s)},d(r){r&&o(t)}}}function fr(a){let t,r=!a[1]&&we();return{c(){r&&r.c(),t=jt()},l(s){r&&r.l(s),t=jt()},m(s,e){r&&r.m(s,e),A(s,t,e)},p(s,e){s[1]?r&&(r.d(1),r=null):r||(r=we(),r.c(),r.m(t.parentNode,t))},d(s){r&&r.d(s),s&&o(t)}}}function cr(a){let t,r;return t=new Je({props:{persistent:!a[1],slot:"helper",$$slots:{default:[fr]},$$scope:{ctx:a}}}),{c(){N(t.$$.fragment)},l(s){U(t.$$.fragment,s)},m(s,e){q(t,s,e),r=!0},p(s,e){const l={};e&2&&(l.persistent=!s[1]),e&1073741826&&(l.$$scope={dirty:e,ctx:s}),t.$set(l)},i(s){r||(v(t.$$.fragment,s),r=!0)},o(s){I(t.$$.fragment,s),r=!1},d(s){L(t,s)}}}function ur(a){let t,r=(a[28]||"")+"",s;return{c(){t=b("span"),s=R(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=_(t);s=H(l,r),l.forEach(o),this.h()},h(){w(t,"class","validation-message")},m(e,l){A(e,t,l),f(t,s)},p(e,l){l&268435456&&r!==(r=(e[28]||"")+"")&&et(s,r)},d(e){e&&o(t)}}}function $r(a){let t,r=(a[28]||"")+"",s;return{c(){t=b("span"),s=R(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=_(t);s=H(l,r),l.forEach(o),this.h()},h(){w(t,"class","validation-message")},m(e,l){A(e,t,l),f(t,s)},p(e,l){l&268435456&&r!==(r=(e[28]||"")+"")&&et(s,r)},d(e){e&&o(t)}}}function mr(a){let t,r=(a[28]||"")+"",s;return{c(){t=b("span"),s=R(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=_(t);s=H(l,r),l.forEach(o),this.h()},h(){w(t,"class","validation-message")},m(e,l){A(e,t,l),f(t,s)},p(e,l){l&268435456&&r!==(r=(e[28]||"")+"")&&et(s,r)},d(e){e&&o(t)}}}function dr(a){return{c:W,l:W,m:W,p:W,d:W}}function pr(a){let t,r=a[29]+"";return{c(){t=b("div"),this.h()},l(s){t=y(s,"DIV",{class:!0});var e=_(t);e.forEach(o),this.h()},h(){w(t,"class","markdown-content right svelte-k92wki")},m(s,e){A(s,t,e),t.innerHTML=r},p(s,e){e&32&&r!==(r=s[29]+"")&&(t.innerHTML=r)},d(s){s&&o(t)}}}function gr(a){return{c:W,l:W,m:W,p:W,d:W}}function hr(a){let t,r=(a[28]||"")+"",s;return{c(){t=b("span"),s=R(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=_(t);s=H(l,r),l.forEach(o),this.h()},h(){w(t,"class","validation-message")},m(e,l){A(e,t,l),f(t,s)},p(e,l){l&268435456&&r!==(r=(e[28]||"")+"")&&et(s,r)},d(e){e&&o(t)}}}function vr(a){let t,r=(a[28]||"")+"",s;return{c(){t=b("span"),s=R(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=_(t);s=H(l,r),l.forEach(o),this.h()},h(){w(t,"class","validation-message")},m(e,l){A(e,t,l),f(t,s)},p(e,l){l&268435456&&r!==(r=(e[28]||"")+"")&&et(s,r)},d(e){e&&o(t)}}}function wr(a){let t,r,s;function e(i){a[19](i)}let l={};return a[3].hidden!==void 0&&(l.checked=a[3].hidden),t=new Pe({props:l}),G.push(()=>Q(t,"checked",e)),{c(){N(t.$$.fragment)},l(i){U(t.$$.fragment,i)},m(i,g){q(t,i,g),s=!0},p(i,g){const p={};!r&&g&8&&(r=!0,p.checked=i[3].hidden,tt(()=>r=!1)),t.$set(p)},i(i){s||(v(t.$$.fragment,i),s=!0)},o(i){I(t.$$.fragment,i),s=!1},d(i){L(t,i)}}}function br(a){let t,r;return{c(){t=b("span"),r=R("Hidden"),this.h()},l(s){t=y(s,"SPAN",{slot:!0});var e=_(t);r=H(e,"Hidden"),e.forEach(o),this.h()},h(){w(t,"slot","label")},m(s,e){A(s,t,e),f(t,r)},p:W,d(s){s&&o(t)}}}function yr(a){let t,r=(a[28]||"")+"",s;return{c(){t=b("span"),s=R(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=_(t);s=H(l,r),l.forEach(o),this.h()},h(){w(t,"class","validation-message")},m(e,l){A(e,t,l),f(t,s)},p(e,l){l&268435456&&r!==(r=(e[28]||"")+"")&&et(s,r)},d(e){e&&o(t)}}}function be(a){let t,r,s,e,l,i,g,p,u,h,$,S;r=new ke({props:{align:"start",$$slots:{default:[_r]},$$scope:{ctx:a}}});let d=a[4]&&ye(a);h=new se({props:{type:"button",$$slots:{default:[Er]},$$scope:{ctx:a}}}),h.$on("click",a[8]);let j=a[3].authors,x=[];for(let m=0;m<j.length;m+=1)x[m]=Ee(ve(a,j,m));const X=m=>I(x[m],1,1,()=>{x[m]=null});return{c(){t=b("div"),N(r.$$.fragment),s=k(),d&&d.c(),e=k(),l=b("div"),i=b("div"),g=b("h4"),p=R("Authors"),u=k(),N(h.$$.fragment),$=k();for(let m=0;m<x.length;m+=1)x[m].c();this.h()},l(m){t=y(m,"DIV",{});var D=_(t);U(r.$$.fragment,D),D.forEach(o),s=P(m),d&&d.l(m),e=P(m),l=y(m,"DIV",{class:!0});var T=_(l);i=y(T,"DIV",{class:!0});var C=_(i);g=y(C,"H4",{class:!0});var V=_(g);p=H(V,"Authors"),V.forEach(o),u=P(C),U(h.$$.fragment,C),C.forEach(o),$=P(T);for(let O=0;O<x.length;O+=1)x[O].l(T);T.forEach(o),this.h()},h(){w(g,"class","mr-4"),w(i,"class","flex items-baseline"),w(l,"class","grid grid-flow-row gap-2")},m(m,D){A(m,t,D),q(r,t,null),A(m,s,D),d&&d.m(m,D),A(m,e,D),A(m,l,D),f(l,i),f(i,g),f(g,p),f(i,u),q(h,i,null),f(l,$);for(let T=0;T<x.length;T+=1)x[T]&&x[T].m(l,null);S=!0},p(m,D){const T={};D&1073741848&&(T.$$scope={dirty:D,ctx:m}),r.$set(T),m[4]?d?(d.p(m,D),D&16&&v(d,1)):(d=ye(m),d.c(),v(d,1),d.m(e.parentNode,e)):d&&(Lt(),I(d,1,1,()=>{d=null}),Tt());const C={};if(D&1073741824&&(C.$$scope={dirty:D,ctx:m}),h.$set(C),D&520){j=m[3].authors;let V;for(V=0;V<j.length;V+=1){const O=ve(m,j,V);x[V]?(x[V].p(O,D),v(x[V],1)):(x[V]=Ee(O),x[V].c(),v(x[V],1),x[V].m(l,null))}for(Lt(),V=j.length;V<x.length;V+=1)X(V);Tt()}},i(m){if(!S){v(r.$$.fragment,m),v(d),v(h.$$.fragment,m);for(let D=0;D<j.length;D+=1)v(x[D]);S=!0}},o(m){I(r.$$.fragment,m),I(d),I(h.$$.fragment,m),x=x.filter(Boolean);for(let D=0;D<x.length;D+=1)I(x[D]);S=!1},d(m){m&&o(t),L(r),m&&o(s),d&&d.d(m),m&&o(e),m&&o(l),L(h),We(x,m)}}}function _r(a){let t,r,s,e,l,i;function g(u){a[20](u)}let p={};return a[4]!==void 0&&(p.checked=a[4]),t=new Pe({props:p}),G.push(()=>Q(t,"checked",g)),t.$on("SMUISwitch:change",a[21]),{c(){N(t.$$.fragment),s=k(),e=b("span"),l=R("Edit compatibility information")},l(u){U(t.$$.fragment,u),s=P(u),e=y(u,"SPAN",{});var h=_(e);l=H(h,"Edit compatibility information"),h.forEach(o)},m(u,h){q(t,u,h),A(u,s,h),A(u,e,h),f(e,l),i=!0},p(u,h){const $={};!r&&h&16&&(r=!0,$.checked=u[4],tt(()=>r=!1)),t.$set($)},i(u){i||(v(t.$$.fragment,u),i=!0)},o(u){I(t.$$.fragment,u),i=!1},d(u){L(t,u),u&&o(s),u&&o(e)}}}function ye(a){let t,r,s;function e(i){a[22](i)}let l={};return a[3].compatibility!==void 0&&(l.compatibilityInfo=a[3].compatibility),t=new tr({props:l}),G.push(()=>Q(t,"compatibilityInfo",e)),{c(){N(t.$$.fragment)},l(i){U(t.$$.fragment,i)},m(i,g){q(t,i,g),s=!0},p(i,g){const p={};!r&&g&8&&(r=!0,p.compatibilityInfo=i[3].compatibility,tt(()=>r=!1)),t.$set(p)},i(i){s||(v(t.$$.fragment,i),s=!0)},o(i){I(t.$$.fragment,i),s=!1},d(i){L(t,i)}}}function xr(a){let t;return{c(){t=R("Add")},l(r){t=H(r,"Add")},m(r,s){A(r,t,s)},d(r){r&&o(t)}}}function Er(a){let t,r;return t=new Se({props:{$$slots:{default:[xr]},$$scope:{ctx:a}}}),{c(){N(t.$$.fragment)},l(s){U(t.$$.fragment,s)},m(s,e){q(t,s,e),r=!0},p(s,e){const l={};e&1073741824&&(l.$$scope={dirty:e,ctx:s}),t.$set(l)},i(s){r||(v(t.$$.fragment,s),r=!0)},o(s){I(t.$$.fragment,s),r=!1},d(s){L(t,s)}}}function _e(a){let t,r;return t=new nr({props:{id:a[3].authors[a[27]].user_id}}),{c(){N(t.$$.fragment)},l(s){U(t.$$.fragment,s)},m(s,e){q(t,s,e),r=!0},p(s,e){const l={};e&8&&(l.id=s[3].authors[s[27]].user_id),t.$set(l)},i(s){r||(v(t.$$.fragment,s),r=!0)},o(s){I(t.$$.fragment,s),r=!1},d(s){L(t,s)}}}function xe(a){let t,r;function s(){return a[24](a[27])}return t=new se({props:{type:"button",variant:"raised",$$slots:{default:[Dr]},$$scope:{ctx:a}}}),t.$on("click",s),{c(){N(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,l){q(t,e,l),r=!0},p(e,l){a=e;const i={};l&1073741824&&(i.$$scope={dirty:l,ctx:a}),t.$set(i)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Ir(a){let t;return{c(){t=R("Remove")},l(r){t=H(r,"Remove")},m(r,s){A(r,t,s)},d(r){r&&o(t)}}}function Dr(a){let t,r;return t=new Se({props:{$$slots:{default:[Ir]},$$scope:{ctx:a}}}),{c(){N(t.$$.fragment)},l(s){U(t.$$.fragment,s)},m(s,e){q(t,s,e),r=!0},p(s,e){const l={};e&1073741824&&(l.$$scope={dirty:e,ctx:s}),t.$set(l)},i(s){r||(v(t.$$.fragment,s),r=!0)},o(s){I(t.$$.fragment,s),r=!1},d(s){L(t,s)}}}function Ee(a){let t,r,s,e,l,i,g,p=a[3].authors[a[27]].user_id&&_e(a);function u(S){a[23](S,a[27])}let h={label:"User ID",class:"mr-4 w-full",disabled:a[25].role==="creator"};a[3].authors[a[27]].user_id!==void 0&&(h.value=a[3].authors[a[27]].user_id),s=new Et({props:h}),G.push(()=>Q(s,"value",u));let $=a[25].role!=="creator"&&xe(a);return{c(){t=b("div"),p&&p.c(),r=k(),N(s.$$.fragment),l=k(),$&&$.c(),i=k(),this.h()},l(S){t=y(S,"DIV",{class:!0});var d=_(t);p&&p.l(d),r=P(d),U(s.$$.fragment,d),l=P(d),$&&$.l(d),i=P(d),d.forEach(o),this.h()},h(){w(t,"class","flex items-baseline")},m(S,d){A(S,t,d),p&&p.m(t,null),f(t,r),q(s,t,null),f(t,l),$&&$.m(t,null),f(t,i),g=!0},p(S,d){a=S,a[3].authors[a[27]].user_id?p?(p.p(a,d),d&8&&v(p,1)):(p=_e(a),p.c(),v(p,1),p.m(t,r)):p&&(Lt(),I(p,1,1,()=>{p=null}),Tt());const j={};d&8&&(j.disabled=a[25].role==="creator"),!e&&d&8&&(e=!0,j.value=a[3].authors[a[27]].user_id,tt(()=>e=!1)),s.$set(j),a[25].role!=="creator"?$?($.p(a,d),d&8&&v($,1)):($=xe(a),$.c(),v($,1),$.m(t,i)):$&&(Lt(),I($,1,1,()=>{$=null}),Tt())},i(S){g||(v(p),v(s.$$.fragment,S),v($),g=!0)},o(S){I(p),I(s.$$.fragment,S),I($),g=!1},d(S){S&&o(t),p&&p.d(),L(s),$&&$.d()}}}function Vr(a){let t;return{c(){t=R(a[0])},l(r){t=H(r,a[0])},m(r,s){A(r,t,s)},p(r,s){s&1&&et(t,r[0])},d(r){r&&o(t)}}}function kr(a){let t,r,s,e,l,i,g,p,u,h,$,S,d,j,x,X,m,D,T,C,V,O,Z,It,Dt,B,Vt,c,F,zt,Ot,Mt,Wt,_t,rt,Xt,Ct,J,xt,Yt,Zt,st,Bt,nt,Ft,ot,at,Jt,Kt,ft,Gt,ct,ut,Qt,$t,te,Rt,kt,mt,Ht,ee,ae;function Ae(n){a[13](n)}let le={label:"Name",required:!0};a[3].name!==void 0&&(le.value=a[3].name),e=new Et({props:le}),G.push(()=>Q(e,"value",Ae)),g=new yt({props:{for:"name",$$slots:{default:[or,({messages:n})=>({28:n}),({messages:n})=>n?268435456:0]},$$scope:{ctx:a}}});function Ne(n){a[14](n)}let ie={label:"Mod Reference",required:!0,disabled:a[1],$$slots:{helper:[cr]},$$scope:{ctx:a}};a[3].mod_reference!==void 0&&(ie.value=a[3].mod_reference),h=new Et({props:ie}),G.push(()=>Q(h,"value",Ne)),d=new yt({props:{for:"mod_reference",$$slots:{default:[ur,({messages:n})=>({28:n}),({messages:n})=>n?268435456:0]},$$scope:{ctx:a}}});function Ue(n){a[15](n)}let ne={label:"Short Description",required:!0};a[3].short_description!==void 0&&(ne.value=a[3].short_description),X=new Et({props:ne}),G.push(()=>Q(X,"value",Ue)),T=new yt({props:{for:"short_description",$$slots:{default:[$r,({messages:n})=>({28:n}),({messages:n})=>n?268435456:0]},$$scope:{ctx:a}}});function qe(n){a[16](n)}let oe={textarea:!0,class:"vertical-textarea",label:"Full Description",required:!0,input$rows:10};a[3].full_description!==void 0&&(oe.value=a[3].full_description),Z=new Et({props:oe}),G.push(()=>Q(Z,"value",qe)),B=new yt({props:{for:"full_description",$$slots:{default:[mr,({messages:n})=>({28:n}),({messages:n})=>n?268435456:0]},$$scope:{ctx:a}}});let Y={ctx:a,current:null,token:null,hasCatch:!1,pending:gr,then:pr,catch:dr,value:29};me(Mt=pe(a[5]),Y);function Le(n){a[17](n)}let fe={editable:!0};a[2]!==void 0&&(fe.tags=a[2]),rt=new Qe({props:fe}),G.push(()=>Q(rt,"tags",Le)),nt=new yt({props:{for:"logo",$$slots:{default:[hr,({messages:n})=>({28:n}),({messages:n})=>n?268435456:0]},$$scope:{ctx:a}}});function Te(n){a[18](n)}let ce={label:"Source URL"};a[3].source_url!==void 0&&(ce.value=a[3].source_url),at=new Et({props:ce}),G.push(()=>Q(at,"value",Te)),ft=new yt({props:{for:"source_url",$$slots:{default:[vr,({messages:n})=>({28:n}),({messages:n})=>n?268435456:0]},$$scope:{ctx:a}}}),ut=new ke({props:{$$slots:{label:[br],default:[wr]},$$scope:{ctx:a}}}),$t=new yt({props:{for:"hidden",$$slots:{default:[yr,({messages:n})=>({28:n}),({messages:n})=>n?268435456:0]},$$scope:{ctx:a}}});let z=a[1]&&be(a);return mt=new se({props:{variant:"outlined",type:"submit",$$slots:{default:[Vr]},$$scope:{ctx:a}}}),{c(){t=b("form"),r=b("div"),s=b("div"),N(e.$$.fragment),i=k(),N(g.$$.fragment),p=k(),u=b("div"),N(h.$$.fragment),S=k(),N(d.$$.fragment),j=k(),x=b("div"),N(X.$$.fragment),D=k(),N(T.$$.fragment),C=k(),V=b("div"),O=b("div"),N(Z.$$.fragment),Dt=k(),N(B.$$.fragment),Vt=k(),c=b("div"),F=b("span"),zt=R("Preview:"),Ot=k(),Y.block.c(),Wt=k(),_t=b("div"),N(rt.$$.fragment),Ct=k(),J=b("div"),xt=b("label"),Yt=R("Logo:"),Zt=k(),st=b("input"),Bt=k(),N(nt.$$.fragment),Ft=k(),ot=b("div"),N(at.$$.fragment),Kt=k(),N(ft.$$.fragment),Gt=k(),ct=b("div"),N(ut.$$.fragment),Qt=k(),N($t.$$.fragment),te=k(),z&&z.c(),Rt=k(),kt=b("div"),N(mt.$$.fragment),this.h()},l(n){t=y(n,"FORM",{});var E=_(t);r=y(E,"DIV",{class:!0});var M=_(r);s=y(M,"DIV",{class:!0});var dt=_(s);U(e.$$.fragment,dt),i=P(dt),U(g.$$.fragment,dt),dt.forEach(o),p=P(M),u=y(M,"DIV",{class:!0});var lt=_(u);U(h.$$.fragment,lt),S=P(lt),U(d.$$.fragment,lt),lt.forEach(o),j=P(M),x=y(M,"DIV",{class:!0});var pt=_(x);U(X.$$.fragment,pt),D=P(pt),U(T.$$.fragment,pt),pt.forEach(o),C=P(M),V=y(M,"DIV",{class:!0});var gt=_(V);O=y(gt,"DIV",{class:!0});var ht=_(O);U(Z.$$.fragment,ht),Dt=P(ht),U(B.$$.fragment,ht),ht.forEach(o),Vt=P(gt),c=y(gt,"DIV",{class:!0});var vt=_(c);F=y(vt,"SPAN",{});var Pt=_(F);zt=H(Pt,"Preview:"),Pt.forEach(o),Ot=P(vt),Y.block.l(vt),vt.forEach(o),gt.forEach(o),Wt=P(M),_t=y(M,"DIV",{class:!0});var St=_(_t);U(rt.$$.fragment,St),St.forEach(o),Ct=P(M),J=y(M,"DIV",{class:!0});var it=_(J);xt=y(it,"LABEL",{for:!0});var At=_(xt);Yt=H(At,"Logo:"),At.forEach(o),Zt=P(it),st=y(it,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),Bt=P(it),U(nt.$$.fragment,it),it.forEach(o),Ft=P(M),ot=y(M,"DIV",{class:!0});var wt=_(ot);U(at.$$.fragment,wt),Kt=P(wt),U(ft.$$.fragment,wt),wt.forEach(o),Gt=P(M),ct=y(M,"DIV",{class:!0});var bt=_(ct);U(ut.$$.fragment,bt),Qt=P(bt),U($t.$$.fragment,bt),bt.forEach(o),te=P(M),z&&z.l(M),Rt=P(M),kt=y(M,"DIV",{});var Nt=_(kt);U(mt.$$.fragment,Nt),Nt.forEach(o),M.forEach(o),E.forEach(o),this.h()},h(){w(s,"class","grid grid-flow-row gap-2"),w(u,"class","grid grid-flow-row gap-2"),w(x,"class","grid grid-flow-row gap-2"),w(O,"class","grid grid-flow-row gap-2 auto-rows-max"),w(c,"class","grid grid-flow-row gap-2 auto-rows-max"),w(V,"class","grid gap-6 split svelte-k92wki"),w(_t,"class","grid grid-flow-row gap-2"),w(xt,"for","logo"),w(st,"id","logo"),w(st,"class","base-input"),w(st,"name","logo"),w(st,"type","file"),w(st,"accept","image/png,image/jpeg,image/gif"),w(st,"placeholder","Logo"),w(J,"class","grid grid-flow-row gap-2"),w(ot,"class","grid grid-flow-row gap-2"),w(ct,"class","grid grid-flow-row gap-2"),w(r,"class","grid grid-flow-row gap-6")},m(n,E){A(n,t,E),f(t,r),f(r,s),q(e,s,null),f(s,i),q(g,s,null),f(r,p),f(r,u),q(h,u,null),f(u,S),q(d,u,null),f(r,j),f(r,x),q(X,x,null),f(x,D),q(T,x,null),f(r,C),f(r,V),f(V,O),q(Z,O,null),f(O,Dt),q(B,O,null),f(V,Vt),f(V,c),f(c,F),f(F,zt),f(c,Ot),Y.block.m(c,Y.anchor=null),Y.mount=()=>c,Y.anchor=null,f(r,Wt),f(r,_t),q(rt,_t,null),f(r,Ct),f(r,J),f(J,xt),f(xt,Yt),f(J,Zt),f(J,st),f(J,Bt),q(nt,J,null),f(r,Ft),f(r,ot),q(at,ot,null),f(ot,Kt),q(ft,ot,null),f(r,Gt),f(r,ct),q(ut,ct,null),f(ct,Qt),q($t,ct,null),f(r,te),z&&z.m(r,null),f(r,Rt),f(r,kt),q(mt,kt,null),Ht=!0,ee||(ae=je(a[6].call(null,t)),ee=!0)},p(n,[E]){a=n;const M={};!l&&E&8&&(l=!0,M.value=a[3].name,tt(()=>l=!1)),e.$set(M);const dt={};E&1342177280&&(dt.$$scope={dirty:E,ctx:a}),g.$set(dt);const lt={};E&2&&(lt.disabled=a[1]),E&1073741826&&(lt.$$scope={dirty:E,ctx:a}),!$&&E&8&&($=!0,lt.value=a[3].mod_reference,tt(()=>$=!1)),h.$set(lt);const pt={};E&1342177280&&(pt.$$scope={dirty:E,ctx:a}),d.$set(pt);const gt={};!m&&E&8&&(m=!0,gt.value=a[3].short_description,tt(()=>m=!1)),X.$set(gt);const ht={};E&1342177280&&(ht.$$scope={dirty:E,ctx:a}),T.$set(ht);const vt={};!It&&E&8&&(It=!0,vt.value=a[3].full_description,tt(()=>It=!1)),Z.$set(vt);const Pt={};E&1342177280&&(Pt.$$scope={dirty:E,ctx:a}),B.$set(Pt),Y.ctx=a,E&32&&Mt!==(Mt=pe(a[5]))&&me(Mt,Y)||ze(Y,a,E);const St={};!Xt&&E&4&&(Xt=!0,St.tags=a[2],tt(()=>Xt=!1)),rt.$set(St);const it={};E&1342177280&&(it.$$scope={dirty:E,ctx:a}),nt.$set(it);const At={};!Jt&&E&8&&(Jt=!0,At.value=a[3].source_url,tt(()=>Jt=!1)),at.$set(At);const wt={};E&1342177280&&(wt.$$scope={dirty:E,ctx:a}),ft.$set(wt);const bt={};E&1073741832&&(bt.$$scope={dirty:E,ctx:a}),ut.$set(bt);const Nt={};E&1342177280&&(Nt.$$scope={dirty:E,ctx:a}),$t.$set(Nt),a[1]?z?(z.p(a,E),E&2&&v(z,1)):(z=be(a),z.c(),v(z,1),z.m(r,Rt)):z&&(Lt(),I(z,1,1,()=>{z=null}),Tt());const ue={};E&1073741825&&(ue.$$scope={dirty:E,ctx:a}),mt.$set(ue)},i(n){Ht||(v(e.$$.fragment,n),v(g.$$.fragment,n),v(h.$$.fragment,n),v(d.$$.fragment,n),v(X.$$.fragment,n),v(T.$$.fragment,n),v(Z.$$.fragment,n),v(B.$$.fragment,n),v(rt.$$.fragment,n),v(nt.$$.fragment,n),v(at.$$.fragment,n),v(ft.$$.fragment,n),v(ut.$$.fragment,n),v($t.$$.fragment,n),v(z),v(mt.$$.fragment,n),Ht=!0)},o(n){I(e.$$.fragment,n),I(g.$$.fragment,n),I(h.$$.fragment,n),I(d.$$.fragment,n),I(X.$$.fragment,n),I(T.$$.fragment,n),I(Z.$$.fragment,n),I(B.$$.fragment,n),I(rt.$$.fragment,n),I(nt.$$.fragment,n),I(at.$$.fragment,n),I(ft.$$.fragment,n),I(ut.$$.fragment,n),I($t.$$.fragment,n),I(z),I(mt.$$.fragment,n),Ht=!1},d(n){n&&o(t),L(e),L(g),L(h),L(d),L(X),L(T),L(Z),L(B),Y.block.d(),Y.token=null,Y=null,L(rt),L(nt),L(at),L(ft),L(ut),L($t),z&&z.d(),L(mt),ee=!1,ae()}}}function Pr(a,t,r){let s,e,{onSubmit:l}=t,{initialValues:i={full_description:"",mod_reference:"",name:"",short_description:"",source_url:"",hidden:!1,tagIDs:[],compatibility:{EA:{state:ge.Works,note:""},EXP:{state:ge.Works,note:""}}}}=t,{submitText:g="Create"}=t,{editing:p=!1}=t,u=[];const{form:h,data:$}=Ze({initialValues:i,extend:[Be({schema:he}),Fe],onSubmit:c=>l(Ke(c,he))});Oe(a,$,c=>r(3,e=c));const S=()=>{e.authors.push({role:"editor",user_id:"",key:""}),$.set(e)},d=c=>{e.authors.splice(c,1),$.set(e)};let j=!1;const x=e.compatibility;function X(c){a.$$.not_equal(e.name,c)&&(e.name=c,$.set(e))}function m(c){a.$$.not_equal(e.mod_reference,c)&&(e.mod_reference=c,$.set(e))}function D(c){a.$$.not_equal(e.short_description,c)&&(e.short_description=c,$.set(e))}function T(c){a.$$.not_equal(e.full_description,c)&&(e.full_description=c,$.set(e))}function C(c){u=c,r(2,u),r(3,e)}function V(c){a.$$.not_equal(e.source_url,c)&&(e.source_url=c,$.set(e))}function O(c){a.$$.not_equal(e.hidden,c)&&(e.hidden=c,$.set(e))}function Z(c){j=c,r(4,j)}const It=()=>{re($,e.compatibility=j?x:void 0,e)};function Dt(c){a.$$.not_equal(e.compatibility,c)&&(e.compatibility=c,$.set(e))}function B(c,F){a.$$.not_equal(e.authors[F].user_id,c)&&(e.authors[F].user_id=c,$.set(e))}const Vt=c=>d(c);return a.$$set=c=>{"onSubmit"in c&&r(11,l=c.onSubmit),"initialValues"in c&&r(12,i=c.initialValues),"submitText"in c&&r(0,g=c.submitText),"editing"in c&&r(1,p=c.editing)},a.$$.update=()=>{if(a.$$.dirty&12){const c=e;c.tags&&(r(2,u=c.tags),delete c.tags),re($,e.tagIDs=u.map(F=>F.id),e)}a.$$.dirty&8&&re($,e.compatibility=e.compatibility?e.compatibility:void 0,e),a.$$.dirty&10&&(p||delete e.compatibility),a.$$.dirty&8&&r(5,s=e.full_description||"")},[g,p,u,e,j,s,h,$,S,d,x,l,i,X,m,D,T,C,V,O,Z,It,Dt,B,Vt]}class Mr extends Ie{constructor(t){super(),De(this,t,Pr,kr,Ve,{onSubmit:11,initialValues:12,submitText:0,editing:1})}}export{Mr as M};
//# sourceMappingURL=ModForm.66803560.js.map

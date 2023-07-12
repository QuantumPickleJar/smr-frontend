import{S as nn,i as on,s as sn,d as S,r as ut,T as $t,bq as ge,a$ as de,aQ as Dt,v as ln,aK as he,Y as ve,Z as rn,x as T,a8 as _,a6 as P,L as C,y as N,z as D,ab as B,a9 as F,q as m,N as H,ac as j,C as O,l as M,ad as g,ae as E,D as an,ai as mt,p as v,m as Yt,t as b,n as Xt,O as G,br as cn,aj as R,b0 as fn,P as ot,aw as un}from"./vendor.be1a9245.js";import{o as _e,s as xt,n as $n,a as mn,T as kt,V as pt,S as ie,c as be,v as we,r as xe,O as Bt}from"./forms.c0306580.js";import{t as ke}from"./forms.37eeb699.js";import{m as Jt}from"./markdown.bebacd19.js";import{V as ye}from"./graphql.cb6ec208.js";const Se=/^(<=|<|>|>=|\^)?(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,pn=_e({platform:xt(),link:xt().url()}),Kt=_e({version:xt().regex(Se),satisfactory_version:$n(),bootstrap_version:xt().regex(Se),stability:xt(),link:xt().url(),arch:mn(pn),changelog:xt(),date:xt()});const z="src/lib/components/sml-versions/SMLVersionForm.svelte";function Ve(e,t,n){const s=e.slice();return s[23]=t[n],s[24]=t,s[25]=n,s}function Be(e){let t,n=(e[22]||"")+"",s;const i={c:function(){t=T("span"),s=C(n),this.h()},l:function(l){t=N(l,"SPAN",{class:!0});var a=D(t);s=H(a,n),a.forEach(m),this.h()},h:function(){j(t,"class","validation-message"),O(t,z,46,8,1643)},m:function(l,a){M(l,t,a),g(t,s)},p:function(l,a){a&4194304&&n!==(n=(l[22]||"")+"")&&G(s,n)},d:function(l){l&&m(t)}};return S("SvelteRegisterBlock",{block:i,id:Be.name,type:"slot",source:'(46:6) <ValidationMessage for=\\"version\\" let:messages={message}>',ctx:e}),i}function Ee(e){let t,n=(e[22]||"")+"",s;const i={c:function(){t=T("span"),s=C(n),this.h()},l:function(l){t=N(l,"SPAN",{class:!0});var a=D(t);s=H(a,n),a.forEach(m),this.h()},h:function(){j(t,"class","validation-message"),O(t,z,53,8,1985)},m:function(l,a){M(l,t,a),g(t,s)},p:function(l,a){a&4194304&&n!==(n=(l[22]||"")+"")&&G(s,n)},d:function(l){l&&m(t)}};return S("SvelteRegisterBlock",{block:i,id:Ee.name,type:"slot",source:'(53:6) <ValidationMessage for=\\"satisfactory_version\\" let:messages={message}>',ctx:e}),i}function te(e){let t,n,s,i,o,l;function a(f){e[14](f)}let u={label:"Bootstrap "+e[5]("version"),required:!0};e[3].bootstrap_version!==void 0&&(u.value=e[3].bootstrap_version),n=new kt({props:u,$$inline:!0}),ut.push(()=>$t(n,"value",a)),o=new pt({props:{for:"bootstrap_version",$$slots:{default:[Re,({messages:f})=>({22:f}),({messages:f})=>f?4194304:0]},$$scope:{ctx:e}},$$inline:!0});const r={c:function(){t=T("div"),_(n.$$.fragment),i=P(),_(o.$$.fragment),this.h()},l:function(h){t=N(h,"DIV",{class:!0});var w=D(t);B(n.$$.fragment,w),i=F(w),B(o.$$.fragment,w),w.forEach(m),this.h()},h:function(){j(t,"class","grid grid-flow-row gap-2"),O(t,z,58,6,2132)},m:function(h,w){M(h,t,w),E(n,t,null),g(t,i),E(o,t,null),l=!0},p:function(h,w){const V={};w&32&&(V.label="Bootstrap "+h[5]("version")),!s&&w&8&&(s=!0,V.value=h[3].bootstrap_version,mt(()=>s=!1)),n.$set(V);const Q={};w&138412032&&(Q.$$scope={dirty:w,ctx:h}),o.$set(Q)},i:function(h){l||(v(n.$$.fragment,h),v(o.$$.fragment,h),l=!0)},o:function(h){b(n.$$.fragment,h),b(o.$$.fragment,h),l=!1},d:function(h){h&&m(t),R(n),R(o)}};return S("SvelteRegisterBlock",{block:r,id:te.name,type:"if",source:"(58:4) {#if $data.bootstrap_version !== '0.0.0'}",ctx:e}),r}function Re(e){let t,n=(e[22]||"")+"",s;const i={c:function(){t=T("span"),s=C(n),this.h()},l:function(l){t=N(l,"SPAN",{class:!0});var a=D(t);s=H(a,n),a.forEach(m),this.h()},h:function(){j(t,"class","validation-message"),O(t,z,61,10,2358)},m:function(l,a){M(l,t,a),g(t,s)},p:function(l,a){a&4194304&&n!==(n=(l[22]||"")+"")&&G(s,n)},d:function(l){l&&m(t)}};return S("SvelteRegisterBlock",{block:i,id:Re.name,type:"slot",source:'(61:8) <ValidationMessage for=\\"bootstrap_version\\" let:messages={message}>',ctx:e}),i}function Me(e){let t;const n={c:function(){t=C("Alpha")},l:function(i){t=H(i,"Alpha")},m:function(i,o){M(i,t,o)},d:function(i){i&&m(t)}};return S("SvelteRegisterBlock",{block:n,id:Me.name,type:"slot",source:'(69:8) <Option value=\\"alpha\\">',ctx:e}),n}function Ae(e){let t;const n={c:function(){t=C("Beta")},l:function(i){t=H(i,"Beta")},m:function(i,o){M(i,t,o)},d:function(i){i&&m(t)}};return S("SvelteRegisterBlock",{block:n,id:Ae.name,type:"slot",source:'(70:8) <Option value=\\"beta\\">',ctx:e}),n}function Le(e){let t;const n={c:function(){t=C("Release")},l:function(i){t=H(i,"Release")},m:function(i,o){M(i,t,o)},d:function(i){i&&m(t)}};return S("SvelteRegisterBlock",{block:n,id:Le.name,type:"slot",source:'(71:8) <Option value=\\"release\\">',ctx:e}),n}function Pe(e){let t,n,s,i,o,l;t=new Bt({props:{value:"alpha",$$slots:{default:[Me]},$$scope:{ctx:e}},$$inline:!0}),s=new Bt({props:{value:"beta",$$slots:{default:[Ae]},$$scope:{ctx:e}},$$inline:!0}),o=new Bt({props:{value:"release",$$slots:{default:[Le]},$$scope:{ctx:e}},$$inline:!0});const a={c:function(){_(t.$$.fragment),n=P(),_(s.$$.fragment),i=P(),_(o.$$.fragment)},l:function(r){B(t.$$.fragment,r),n=F(r),B(s.$$.fragment,r),i=F(r),B(o.$$.fragment,r)},m:function(r,f){E(t,r,f),M(r,n,f),E(s,r,f),M(r,i,f),E(o,r,f),l=!0},p:function(r,f){const h={};f&134217728&&(h.$$scope={dirty:f,ctx:r}),t.$set(h);const w={};f&134217728&&(w.$$scope={dirty:f,ctx:r}),s.$set(w);const V={};f&134217728&&(V.$$scope={dirty:f,ctx:r}),o.$set(V)},i:function(r){l||(v(t.$$.fragment,r),v(s.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o:function(r){b(t.$$.fragment,r),b(s.$$.fragment,r),b(o.$$.fragment,r),l=!1},d:function(r){R(t,r),r&&m(n),R(s,r),r&&m(i),R(o,r)}};return S("SvelteRegisterBlock",{block:a,id:Pe.name,type:"slot",source:"(68:6) <Select bind:value={$data.stability} label={$t('stability')}>",ctx:e}),a}function Fe(e){let t,n=(e[22]||"")+"",s;const i={c:function(){t=T("span"),s=C(n),this.h()},l:function(l){t=N(l,"SPAN",{class:!0});var a=D(t);s=H(a,n),a.forEach(m),this.h()},h:function(){j(t,"class","validation-message"),O(t,z,73,8,2804)},m:function(l,a){M(l,t,a),g(t,s)},p:function(l,a){a&4194304&&n!==(n=(l[22]||"")+"")&&G(s,n)},d:function(l){l&&m(t)}};return S("SvelteRegisterBlock",{block:i,id:Fe.name,type:"slot",source:'(73:6) <ValidationMessage for=\\"stability\\" let:messages={message}>',ctx:e}),i}function qe(e){let t,n=(e[22]||"")+"",s;const i={c:function(){t=T("span"),s=C(n),this.h()},l:function(l){t=N(l,"SPAN",{class:!0});var a=D(t);s=H(a,n),a.forEach(m),this.h()},h:function(){j(t,"class","validation-message"),O(t,z,87,10,3265)},m:function(l,a){M(l,t,a),g(t,s)},p:function(l,a){a&4194304&&n!==(n=(l[22]||"")+"")&&G(s,n)},d:function(l){l&&m(t)}};return S("SvelteRegisterBlock",{block:i,id:qe.name,type:"slot",source:'(87:8) <ValidationMessage for=\\"changelog\\" let:messages={message}>',ctx:e}),i}function Ie(e){const t={c:ot,l:ot,m:ot,p:ot,d:ot};return S("SvelteRegisterBlock",{block:t,id:Ie.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:e}),t}function Te(e){let t,n=e[26]+"";const s={c:function(){t=T("div"),this.h()},l:function(o){t=N(o,"DIV",{class:!0});var l=D(t);l.forEach(m),this.h()},h:function(){j(t,"class","markdown-content right s-N2rIGQHR_ehr"),O(t,z,93,10,3526)},m:function(o,l){M(o,t,l),t.innerHTML=n},p:function(o,l){l&16&&n!==(n=o[26]+"")&&(t.innerHTML=n)},d:function(o){o&&m(t)}};return S("SvelteRegisterBlock",{block:s,id:Te.name,type:"then",source:'(93:55)            <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:e}),s}function Ne(e){const t={c:ot,l:ot,m:ot,p:ot,d:ot};return S("SvelteRegisterBlock",{block:t,id:Ne.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:e}),t}function De(e){let t=e[5]("arch.windows-client")+"",n;const s={c:function(){n=C(t)},l:function(o){n=H(o,t)},m:function(o,l){M(o,n,l)},p:function(o,l){l&32&&t!==(t=o[5]("arch.windows-client")+"")&&G(n,t)},d:function(o){o&&m(n)}};return S("SvelteRegisterBlock",{block:s,id:De.name,type:"slot",source:'(103:12) <Option value=\\"WindowsNoEditor\\">',ctx:e}),s}function Oe(e){let t=e[5]("arch.windows-server")+"",n;const s={c:function(){n=C(t)},l:function(o){n=H(o,t)},m:function(o,l){M(o,n,l)},p:function(o,l){l&32&&t!==(t=o[5]("arch.windows-server")+"")&&G(n,t)},d:function(o){o&&m(n)}};return S("SvelteRegisterBlock",{block:s,id:Oe.name,type:"slot",source:'(104:12) <Option value=\\"WindowsServer\\">',ctx:e}),s}function ze(e){let t=e[5]("arch.linux-server")+"",n;const s={c:function(){n=C(t)},l:function(o){n=H(o,t)},m:function(o,l){M(o,n,l)},p:function(o,l){l&32&&t!==(t=o[5]("arch.linux-server")+"")&&G(n,t)},d:function(o){o&&m(n)}};return S("SvelteRegisterBlock",{block:s,id:ze.name,type:"slot",source:'(105:12) <Option value=\\"LinuxServer\\">',ctx:e}),s}function Ze(e){let t,n,s,i,o,l;t=new Bt({props:{value:"WindowsNoEditor",$$slots:{default:[De]},$$scope:{ctx:e}},$$inline:!0}),s=new Bt({props:{value:"WindowsServer",$$slots:{default:[Oe]},$$scope:{ctx:e}},$$inline:!0}),o=new Bt({props:{value:"LinuxServer",$$slots:{default:[ze]},$$scope:{ctx:e}},$$inline:!0});const a={c:function(){_(t.$$.fragment),n=P(),_(s.$$.fragment),i=P(),_(o.$$.fragment)},l:function(r){B(t.$$.fragment,r),n=F(r),B(s.$$.fragment,r),i=F(r),B(o.$$.fragment,r)},m:function(r,f){E(t,r,f),M(r,n,f),E(s,r,f),M(r,i,f),E(o,r,f),l=!0},p:function(r,f){const h={};f&134217760&&(h.$$scope={dirty:f,ctx:r}),t.$set(h);const w={};f&134217760&&(w.$$scope={dirty:f,ctx:r}),s.$set(w);const V={};f&134217760&&(V.$$scope={dirty:f,ctx:r}),o.$set(V)},i:function(r){l||(v(t.$$.fragment,r),v(s.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o:function(r){b(t.$$.fragment,r),b(s.$$.fragment,r),b(o.$$.fragment,r),l=!1},d:function(r){R(t,r),r&&m(n),R(s,r),r&&m(i),R(o,r)}};return S("SvelteRegisterBlock",{block:a,id:Ze.name,type:"slot",source:'(102:10) <Select bind:value={data_link.platform} label=\\"Platform\\">',ctx:e}),a}function je(e){let t,n=(e[22]||"")+"",s;const i={c:function(){t=T("span"),s=C(n),this.h()},l:function(l){t=N(l,"SPAN",{class:!0});var a=D(t);s=H(a,n),a.forEach(m),this.h()},h:function(){j(t,"class","validation-message"),O(t,z,114,12,4362)},m:function(l,a){M(l,t,a),g(t,s)},p:function(l,a){a&4194304&&n!==(n=(l[22]||"")+"")&&G(s,n)},d:function(l){l&&m(t)}};return S("SvelteRegisterBlock",{block:i,id:je.name,type:"slot",source:'(114:10) <ValidationMessage for=\\"data_link.link\\" let:messages={message}>',ctx:e}),i}function ee(e){let t,n,s,i;t=new Dt({props:{type:"button",$$slots:{default:[Ce]},$$scope:{ctx:e}},$$inline:!0}),t.$on("click",e[8]);function o(){return e[19](e[25])}s=new Dt({props:{type:"button",disabled:e[3].arch.length==1,$$slots:{default:[He]},$$scope:{ctx:e}},$$inline:!0}),s.$on("click",o);const l={c:function(){_(t.$$.fragment),n=P(),_(s.$$.fragment)},l:function(u){B(t.$$.fragment,u),n=F(u),B(s.$$.fragment,u)},m:function(u,r){E(t,u,r),M(u,n,r),E(s,u,r),i=!0},p:function(u,r){e=u;const f={};r&134217760&&(f.$$scope={dirty:r,ctx:e}),t.$set(f);const h={};r&8&&(h.disabled=e[3].arch.length==1),r&134217760&&(h.$$scope={dirty:r,ctx:e}),s.$set(h)},i:function(u){i||(v(t.$$.fragment,u),v(s.$$.fragment,u),i=!0)},o:function(u){b(t.$$.fragment,u),b(s.$$.fragment,u),i=!1},d:function(u){R(t,u),u&&m(n),R(s,u)}};return S("SvelteRegisterBlock",{block:l,id:ee.name,type:"if",source:"(118:10) {#if !editing}",ctx:e}),l}function Ce(e){let t=e[5]("add")+"",n;const s={c:function(){n=C(t)},l:function(o){n=H(o,t)},m:function(o,l){M(o,n,l)},p:function(o,l){l&32&&t!==(t=o[5]("add")+"")&&G(n,t)},d:function(o){o&&m(n)}};return S("SvelteRegisterBlock",{block:s,id:Ce.name,type:"slot",source:'(119:12) <Button type=\\"button\\" on:click={addArch}>',ctx:e}),s}function He(e){let t=e[5]("remove")+"",n;const s={c:function(){n=C(t)},l:function(o){n=H(o,t)},m:function(o,l){M(o,n,l)},p:function(o,l){l&32&&t!==(t=o[5]("remove")+"")&&G(n,t)},d:function(o){o&&m(n)}};return S("SvelteRegisterBlock",{block:s,id:He.name,type:"slot",source:'(120:12) <Button type=\\"button\\" disabled={$data.arch.length == 1} on:click={() => removeArch(i)}               >',ctx:e}),s}function ne(e){let t,n,s,i,o,l,a,u,r,f;function h(y){e[17](y,e[23])}let w={label:"Platform",$$slots:{default:[Ze]},$$scope:{ctx:e}};e[23].platform!==void 0&&(w.value=e[23].platform),n=new ie({props:w,$$inline:!0}),ut.push(()=>$t(n,"value",h));function V(y){e[18](y,e[23])}let Q={name:"data_link.link",placeholder:"URL",style:"min-width: 850px;",label:"URL"};e[23].link!==void 0&&(Q.value=e[23].link),o=new kt({props:Q,$$inline:!0}),ut.push(()=>$t(o,"value",V)),u=new pt({props:{for:"data_link.link",$$slots:{default:[je,({messages:y})=>({22:y}),({messages:y})=>y?4194304:0]},$$scope:{ctx:e}},$$inline:!0});let x=!e[1]&&ee(e);const k={c:function(){t=T("div"),_(n.$$.fragment),i=P(),_(o.$$.fragment),a=P(),_(u.$$.fragment),r=P(),x&&x.c(),this.h()},l:function(I){t=N(I,"DIV",{class:!0});var A=D(t);B(n.$$.fragment,A),i=F(A),B(o.$$.fragment,A),a=F(A),B(u.$$.fragment,A),r=F(A),x&&x.l(A),A.forEach(m),this.h()},h:function(){j(t,"class","gap-6 auto-rows-max"),O(t,z,100,8,3726)},m:function(I,A){M(I,t,A),E(n,t,null),g(t,i),E(o,t,null),g(t,a),E(u,t,null),g(t,r),x&&x.m(t,null),f=!0},p:function(I,A){e=I;const U={};A&134217760&&(U.$$scope={dirty:A,ctx:e}),!s&&A&8&&(s=!0,U.value=e[23].platform,mt(()=>s=!1)),n.$set(U);const gt={};!l&&A&8&&(l=!0,gt.value=e[23].link,mt(()=>l=!1)),o.$set(gt);const K={};A&138412032&&(K.$$scope={dirty:A,ctx:e}),u.$set(K),e[1]?x&&(Yt(),b(x,1,1,()=>{x=null}),Xt()):x?(x.p(e,A),A&2&&v(x,1)):(x=ee(e),x.c(),v(x,1),x.m(t,null))},i:function(I){f||(v(n.$$.fragment,I),v(o.$$.fragment,I),v(u.$$.fragment,I),v(x),f=!0)},o:function(I){b(n.$$.fragment,I),b(o.$$.fragment,I),b(u.$$.fragment,I),b(x),f=!1},d:function(I){I&&m(t),R(n),R(o),R(u),x&&x.d()}};return S("SvelteRegisterBlock",{block:k,id:ne.name,type:"each",source:"(100:6) {#each $data.arch as data_link, i}",ctx:e}),k}function We(e){let t,n=(e[22]||"")+"",s;const i={c:function(){t=T("span"),s=C(n),this.h()},l:function(l){t=N(l,"SPAN",{class:!0});var a=D(t);s=H(a,n),a.forEach(m),this.h()},h:function(){j(t,"class","validation-message"),O(t,z,127,8,4864)},m:function(l,a){M(l,t,a),g(t,s)},p:function(l,a){a&4194304&&n!==(n=(l[22]||"")+"")&&G(s,n)},d:function(l){l&&m(t)}};return S("SvelteRegisterBlock",{block:i,id:We.name,type:"slot",source:'(127:6) <ValidationMessage for=\\"link\\" let:messages={message}>',ctx:e}),i}function Ge(e){let t,n=(e[22]||"")+"",s;const i={c:function(){t=T("span"),s=C(n),this.h()},l:function(l){t=N(l,"SPAN",{class:!0});var a=D(t);s=H(a,n),a.forEach(m),this.h()},h:function(){j(t,"class","validation-message"),O(t,z,134,8,5151)},m:function(l,a){M(l,t,a),g(t,s)},p:function(l,a){a&4194304&&n!==(n=(l[22]||"")+"")&&G(s,n)},d:function(l){l&&m(t)}};return S("SvelteRegisterBlock",{block:i,id:Ge.name,type:"slot",source:'(134:6) <ValidationMessage for=\\"date\\" let:messages={message}>',ctx:e}),i}function Qe(e){let t;const n={c:function(){t=C(e[2])},l:function(i){t=H(i,e[2])},m:function(i,o){M(i,t,o)},p:function(i,o){o&4&&G(t,i[2])},d:function(i){i&&m(t)}};return S("SvelteRegisterBlock",{block:n,id:Qe.name,type:"slot",source:'(140:6) <Button variant=\\"outlined\\" type=\\"submit\\">',ctx:e}),n}function oe(e){let t,n,s,i,o,l,a,u,r,f,h,w,V,Q,x,k,y,I,A,U,gt,K,tt,et,Lt,Pt,it,Ft,X,c,nt=e[5]("preview")+"",It,Ot,zt,Tt,Zt,J,Nt,lt,jt,Ct,dt,Ht,rt,at,Wt,Gt,ht,Qt,Et,vt,qt,Ut,se;function Ue($){e[12]($)}let le={label:e[5]("version"),required:!0};e[3].version!==void 0&&(le.value=e[3].version),i=new kt({props:le,$$inline:!0}),ut.push(()=>$t(i,"value",Ue)),a=new pt({props:{for:"version",$$slots:{default:[Be,({messages:$})=>({22:$}),({messages:$})=>$?4194304:0]},$$scope:{ctx:e}},$$inline:!0});function Ke($){e[13]($)}let re={label:"Satisfactory "+e[5]("version"),required:!0,type:"number"};e[3].satisfactory_version!==void 0&&(re.value=e[3].satisfactory_version),f=new kt({props:re,$$inline:!0}),ut.push(()=>$t(f,"value",Ke)),V=new pt({props:{for:"satisfactory_version",$$slots:{default:[Ee,({messages:$})=>({22:$}),({messages:$})=>$?4194304:0]},$$scope:{ctx:e}},$$inline:!0});let Z=e[3].bootstrap_version!=="0.0.0"&&te(e);function Ye($){e[15]($)}let ae={label:e[5]("stability"),$$slots:{default:[Pe]},$$scope:{ctx:e}};e[3].stability!==void 0&&(ae.value=e[3].stability),y=new ie({props:ae,$$inline:!0}),ut.push(()=>$t(y,"value",Ye)),U=new pt({props:{for:"stability",$$slots:{default:[Fe,({messages:$})=>({22:$}),({messages:$})=>$?4194304:0]},$$scope:{ctx:e}},$$inline:!0});function Xe($){e[16]($)}let ce={textarea:!0,class:"vertical-textarea",label:e[5]("changelog"),required:!0,input$rows:10};e[3].changelog!==void 0&&(ce.value=e[3].changelog),et=new kt({props:ce,$$inline:!0}),ut.push(()=>$t(et,"value",Xe)),it=new pt({props:{for:"changelog",$$slots:{default:[qe,({messages:$})=>({22:$}),({messages:$})=>$?4194304:0]},$$scope:{ctx:e}},$$inline:!0});let Y={ctx:e,current:null,token:null,hasCatch:!1,pending:Ne,then:Te,catch:Ie,value:26};ge(Tt=Jt(e[4]),Y);let ct=e[3].arch;de(ct);let q=[];for(let $=0;$<ct.length;$+=1)q[$]=ne(Ve(e,ct,$));const Je=$=>b(q[$],1,1,()=>{q[$]=null});function tn($){e[20]($)}let fe={label:e[5]("link")};e[3].link!==void 0&&(fe.value=e[3].link),lt=new kt({props:fe,$$inline:!0}),ut.push(()=>$t(lt,"value",tn)),dt=new pt({props:{for:"link",$$slots:{default:[We,({messages:$})=>({22:$}),({messages:$})=>$?4194304:0]},$$scope:{ctx:e}},$$inline:!0});function en($){e[21]($)}let ue={label:e[5]("date-and-time"),required:!0};e[3].date!==void 0&&(ue.value=e[3].date),at=new kt({props:ue,$$inline:!0}),ut.push(()=>$t(at,"value",en)),ht=new pt({props:{for:"date",$$slots:{default:[Ge,({messages:$})=>({22:$}),({messages:$})=>$?4194304:0]},$$scope:{ctx:e}},$$inline:!0}),vt=new Dt({props:{variant:"outlined",type:"submit",$$slots:{default:[Qe]},$$scope:{ctx:e}},$$inline:!0});const $e={c:function(){t=T("form"),n=T("div"),s=T("div"),_(i.$$.fragment),l=P(),_(a.$$.fragment),u=P(),r=T("div"),_(f.$$.fragment),w=P(),_(V.$$.fragment),Q=P(),Z&&Z.c(),x=P(),k=T("div"),_(y.$$.fragment),A=P(),_(U.$$.fragment),gt=P(),K=T("div"),tt=T("div"),_(et.$$.fragment),Pt=P(),_(it.$$.fragment),Ft=P(),X=T("div"),c=T("span"),It=C(nt),Ot=C(":"),zt=P(),Y.block.c(),Zt=P(),J=T("div");for(let d=0;d<q.length;d+=1)q[d].c();Nt=P(),_(lt.$$.fragment),Ct=P(),_(dt.$$.fragment),Ht=P(),rt=T("div"),_(at.$$.fragment),Gt=P(),_(ht.$$.fragment),Qt=P(),Et=T("div"),_(vt.$$.fragment),this.h()},l:function(d){t=N(d,"FORM",{});var p=D(t);n=N(p,"DIV",{class:!0});var L=D(n);s=N(L,"DIV",{class:!0});var yt=D(s);B(i.$$.fragment,yt),l=F(yt),B(a.$$.fragment,yt),yt.forEach(m),u=F(L),r=N(L,"DIV",{class:!0});var bt=D(r);B(f.$$.fragment,bt),w=F(bt),B(V.$$.fragment,bt),bt.forEach(m),Q=F(L),Z&&Z.l(L),x=F(L),k=N(L,"DIV",{class:!0});var St=D(k);B(y.$$.fragment,St),A=F(St),B(U.$$.fragment,St),St.forEach(m),gt=F(L),K=N(L,"DIV",{class:!0});var ft=D(K);tt=N(ft,"DIV",{class:!0});var Vt=D(tt);B(et.$$.fragment,Vt),Pt=F(Vt),B(it.$$.fragment,Vt),Vt.forEach(m),Ft=F(ft),X=N(ft,"DIV",{class:!0});var wt=D(X);c=N(wt,"SPAN",{});var Rt=D(c);It=H(Rt,nt),Ot=H(Rt,":"),Rt.forEach(m),zt=F(wt),Y.block.l(wt),wt.forEach(m),ft.forEach(m),Zt=F(L),J=N(L,"DIV",{class:!0});var st=D(J);for(let At=0;At<q.length;At+=1)q[At].l(st);Nt=F(st),B(lt.$$.fragment,st),Ct=F(st),B(dt.$$.fragment,st),st.forEach(m),Ht=F(L),rt=N(L,"DIV",{class:!0});var _t=D(rt);B(at.$$.fragment,_t),Gt=F(_t),B(ht.$$.fragment,_t),_t.forEach(m),Qt=F(L),Et=N(L,"DIV",{});var Mt=D(Et);B(vt.$$.fragment,Mt),Mt.forEach(m),L.forEach(m),p.forEach(m),this.h()},h:function(){j(s,"class","grid grid-flow-row gap-2"),O(s,z,43,4,1455),j(r,"class","grid grid-flow-row gap-2"),O(r,z,50,4,1742),j(k,"class","grid grid-flow-row gap-2"),O(k,z,66,4,2471),j(tt,"class","grid grid-flow-row gap-2 auto-rows-max"),O(tt,z,78,6,2940),O(c,z,91,8,3430),j(X,"class","grid grid-flow-row gap-2 auto-rows-max"),O(X,z,90,6,3369),j(K,"class","grid gap-6 split s-N2rIGQHR_ehr"),O(K,z,77,4,2903),j(J,"class","grid grid-flow-row gap-2"),O(J,z,98,4,3638),j(rt,"class","grid grid-flow-row gap-2"),O(rt,z,131,4,4963),O(Et,z,138,4,5250),j(n,"class","grid grid-flow-row gap-6"),O(n,z,42,2,1412),O(t,z,41,0,1394)},m:function(d,p){M(d,t,p),g(t,n),g(n,s),E(i,s,null),g(s,l),E(a,s,null),g(n,u),g(n,r),E(f,r,null),g(r,w),E(V,r,null),g(n,Q),Z&&Z.m(n,null),g(n,x),g(n,k),E(y,k,null),g(k,A),E(U,k,null),g(n,gt),g(n,K),g(K,tt),E(et,tt,null),g(tt,Pt),E(it,tt,null),g(K,Ft),g(K,X),g(X,c),g(c,It),g(c,Ot),g(X,zt),Y.block.m(X,Y.anchor=null),Y.mount=()=>X,Y.anchor=null,g(n,Zt),g(n,J);for(let L=0;L<q.length;L+=1)q[L]&&q[L].m(J,null);g(J,Nt),E(lt,J,null),g(J,Ct),E(dt,J,null),g(n,Ht),g(n,rt),E(at,rt,null),g(rt,Gt),E(ht,rt,null),g(n,Qt),g(n,Et),E(vt,Et,null),qt=!0,Ut||(se=an(e[6].call(null,t)),Ut=!0)},p:function(d,[p]){e=d;const L={};p&32&&(L.label=e[5]("version")),!o&&p&8&&(o=!0,L.value=e[3].version,mt(()=>o=!1)),i.$set(L);const yt={};p&138412032&&(yt.$$scope={dirty:p,ctx:e}),a.$set(yt);const bt={};p&32&&(bt.label="Satisfactory "+e[5]("version")),!h&&p&8&&(h=!0,bt.value=e[3].satisfactory_version,mt(()=>h=!1)),f.$set(bt);const St={};p&138412032&&(St.$$scope={dirty:p,ctx:e}),V.$set(St),e[3].bootstrap_version!=="0.0.0"?Z?(Z.p(e,p),p&8&&v(Z,1)):(Z=te(e),Z.c(),v(Z,1),Z.m(n,x)):Z&&(Yt(),b(Z,1,1,()=>{Z=null}),Xt());const ft={};p&32&&(ft.label=e[5]("stability")),p&134217728&&(ft.$$scope={dirty:p,ctx:e}),!I&&p&8&&(I=!0,ft.value=e[3].stability,mt(()=>I=!1)),y.$set(ft);const Vt={};p&138412032&&(Vt.$$scope={dirty:p,ctx:e}),U.$set(Vt);const wt={};p&32&&(wt.label=e[5]("changelog")),!Lt&&p&8&&(Lt=!0,wt.value=e[3].changelog,mt(()=>Lt=!1)),et.$set(wt);const Rt={};if(p&138412032&&(Rt.$$scope={dirty:p,ctx:e}),it.$set(Rt),(!qt||p&32)&&nt!==(nt=e[5]("preview")+"")&&G(It,nt),Y.ctx=e,p&16&&Tt!==(Tt=Jt(e[4]))&&ge(Tt,Y)||cn(Y,e,p),p&4195114){ct=e[3].arch,de(ct);let W;for(W=0;W<ct.length;W+=1){const pe=Ve(e,ct,W);q[W]?(q[W].p(pe,p),v(q[W],1)):(q[W]=ne(pe),q[W].c(),v(q[W],1),q[W].m(J,Nt))}for(Yt(),W=ct.length;W<q.length;W+=1)Je(W);Xt()}const st={};p&32&&(st.label=e[5]("link")),!jt&&p&8&&(jt=!0,st.value=e[3].link,mt(()=>jt=!1)),lt.$set(st);const _t={};p&138412032&&(_t.$$scope={dirty:p,ctx:e}),dt.$set(_t);const Mt={};p&32&&(Mt.label=e[5]("date-and-time")),!Wt&&p&8&&(Wt=!0,Mt.value=e[3].date,mt(()=>Wt=!1)),at.$set(Mt);const At={};p&138412032&&(At.$$scope={dirty:p,ctx:e}),ht.$set(At);const me={};p&134217732&&(me.$$scope={dirty:p,ctx:e}),vt.$set(me)},i:function(d){if(!qt){v(i.$$.fragment,d),v(a.$$.fragment,d),v(f.$$.fragment,d),v(V.$$.fragment,d),v(Z),v(y.$$.fragment,d),v(U.$$.fragment,d),v(et.$$.fragment,d),v(it.$$.fragment,d);for(let p=0;p<ct.length;p+=1)v(q[p]);v(lt.$$.fragment,d),v(dt.$$.fragment,d),v(at.$$.fragment,d),v(ht.$$.fragment,d),v(vt.$$.fragment,d),qt=!0}},o:function(d){b(i.$$.fragment,d),b(a.$$.fragment,d),b(f.$$.fragment,d),b(V.$$.fragment,d),b(Z),b(y.$$.fragment,d),b(U.$$.fragment,d),b(et.$$.fragment,d),b(it.$$.fragment,d),q=q.filter(Boolean);for(let p=0;p<q.length;p+=1)b(q[p]);b(lt.$$.fragment,d),b(dt.$$.fragment,d),b(at.$$.fragment,d),b(ht.$$.fragment,d),b(vt.$$.fragment,d),qt=!1},d:function(d){d&&m(t),R(i),R(a),R(f),R(V),Z&&Z.d(),R(y),R(U),R(et),R(it),Y.block.d(),Y.token=null,Y=null,fn(q,d),R(lt),R(dt),R(at),R(ht),R(vt),Ut=!1,se()}};return S("SvelteRegisterBlock",{block:$e,id:oe.name,type:"component",source:"",ctx:e}),$e}function gn(e,t,n){let s,i,o,l=ot,a=()=>(l(),l=un(f,c=>n(5,o=c)),f);e.$$.on_destroy.push(()=>l());let{$$slots:u={},$$scope:r}=t;ln("SMLVersionForm",u,[]);const{t:f}=he();ve(f,"t"),a();let{onSubmit:h}=t,{editing:w=!1}=t,{initialValues:V={link:"",bootstrap_version:"0.0.0",date:"",changelog:"",satisfactory_version:0,stability:ye.Alpha,version:"",arch:[{platform:"",link:""}]}}=t,{submitText:Q=o("entry.create")}=t;const{form:x,data:k}=be({initialValues:V,extend:[we({schema:Kt}),xe],onSubmit:c=>h(ke(c,Kt))});ve(k,"data"),rn(e,k,c=>n(3,i=c));const y=()=>{i.arch.push({platform:"",link:"",key:""}),k.set(i)},I=c=>{i.arch.splice(c,1),k.set(i)};e.$$.on_mount.push(function(){h===void 0&&!("onSubmit"in t||e.$$.bound[e.$$.props.onSubmit])&&console.warn("<SMLVersionForm> was created without expected prop 'onSubmit'")});const A=["onSubmit","editing","initialValues","submitText"];Object.keys(t).forEach(c=>{!~A.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<SMLVersionForm> was created with unknown prop '${c}'`)});function U(c){e.$$.not_equal(i.version,c)&&(i.version=c,k.set(i))}function gt(c){e.$$.not_equal(i.satisfactory_version,c)&&(i.satisfactory_version=c,k.set(i))}function K(c){e.$$.not_equal(i.bootstrap_version,c)&&(i.bootstrap_version=c,k.set(i))}function tt(c){e.$$.not_equal(i.stability,c)&&(i.stability=c,k.set(i))}function et(c){e.$$.not_equal(i.changelog,c)&&(i.changelog=c,k.set(i))}function Lt(c,nt){e.$$.not_equal(nt.platform,c)&&(nt.platform=c,k.set(i))}function Pt(c,nt){e.$$.not_equal(nt.link,c)&&(nt.link=c,k.set(i))}const it=c=>I(c);function Ft(c){e.$$.not_equal(i.link,c)&&(i.link=c,k.set(i))}function X(c){e.$$.not_equal(i.date,c)&&(i.date=c,k.set(i))}return e.$$set=c=>{"onSubmit"in c&&n(10,h=c.onSubmit),"editing"in c&&n(1,w=c.editing),"initialValues"in c&&n(11,V=c.initialValues),"submitText"in c&&n(2,Q=c.submitText)},e.$capture_state=()=>({createForm:be,validator:we,reporter:xe,ValidationMessage:pt,trimNonSchema:ke,markdown:Jt,smlVersionSchema:Kt,Textfield:kt,Button:Dt,VersionStabilities:ye,Select:ie,Option:Bt,getTranslate:he,t:f,onSubmit:h,editing:w,initialValues:V,submitText:Q,form:x,data:k,addArch:y,removeArch:I,preview:s,$data:i,$t:o}),e.$inject_state=c=>{"onSubmit"in c&&n(10,h=c.onSubmit),"editing"in c&&n(1,w=c.editing),"initialValues"in c&&n(11,V=c.initialValues),"submitText"in c&&n(2,Q=c.submitText),"preview"in c&&n(4,s=c.preview)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{e.$$.dirty&8&&n(4,s=i.changelog||"")},[f,w,Q,i,s,o,x,k,y,I,h,V,U,gt,K,tt,et,Lt,Pt,it,Ft,X]}class xn extends nn{constructor(t){super(t),on(this,t,gn,oe,sn,{t:0,onSubmit:10,editing:1,initialValues:11,submitText:2}),S("SvelteRegisterComponent",{component:this,tagName:"SMLVersionForm",options:t,id:oe.name})}get t(){return this.$$.ctx[0]}set t(t){throw new Error("<SMLVersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<SMLVersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(t){throw new Error("<SMLVersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editing(){throw new Error("<SMLVersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editing(t){throw new Error("<SMLVersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<SMLVersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(t){throw new Error("<SMLVersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<SMLVersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(t){throw new Error("<SMLVersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{xn as S};
//# sourceMappingURL=SMLVersionForm.6dec8747.js.map

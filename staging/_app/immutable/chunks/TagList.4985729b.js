import{S as lt,i as ct,s as ot,d as k,v as at,aJ as me,aL as ve,Y as ft,Z as rt,bO as re,bP as se,bQ as ue,bR as Re,a4 as Ee,x as R,y as E,z as A,q as x,ac as C,C as B,l as U,af as W,m as ut,t as j,n as pt,p as D,J as pe,r as Q,T as xe,a$ as te,a8 as F,ab as O,ae as V,ai as Te,aj as _,k as we,P as be,b0 as Ae,L as N,a6 as J,N as q,a9 as K,ad as b,O as ne,av as gt}from"./vendor.c98c5c78.js";import{i as ye}from"./graphql.cb6ec208.js";import{T as Be,I as Le,F as Ce}from"./forms.61813dbf.js";const L="src/lib/components/utils/TagList.svelte";function ke(i,e,t){const l=i.slice();return l[39]=e[t],l}function Se(i,e,t){const l=i.slice();return l[39]=e[t],l}function Ie(i){let e,t,l,c;function n(u){i[29](u)}function s(u){i[30](u)}let f={class:"tags overflow-visible",style:"z-index: 9999",$$slots:{ripple:[ze],label:[qe],default:[Ue]},$$scope:{ctx:i}};i[3]!==void 0&&(f.lineRipple=i[3]),i[2]!==void 0&&(f.input=i[2]),e=new Be({props:f,$$inline:!0}),Q.push(()=>xe(e,"lineRipple",n)),Q.push(()=>xe(e,"input",s));const a={c:function(){F(e.$$.fragment)},l:function(p){O(e.$$.fragment,p)},m:function(p,g){V(e,p,g),c=!0},p:function(p,g){const r={};g[0]&2045|g[1]&16384&&(r.$$scope={dirty:g,ctx:p}),!t&&g[0]&8&&(t=!0,r.lineRipple=p[3],Te(()=>t=!1)),!l&&g[0]&4&&(l=!0,r.input=p[2],Te(()=>l=!1)),e.$set(r)},i:function(p){c||(D(e.$$.fragment,p),c=!0)},o:function(p){j(e.$$.fragment,p),c=!1},d:function(p){_(e,p)}};return k("SvelteRegisterBlock",{block:a,id:Ie.name,type:"else",source:"(148:2) {:else}",ctx:i}),a}function je(i){let e,t=i[0].length>0&&oe(i);const l={c:function(){t&&t.c(),e=we()},l:function(n){t&&t.l(n),e=we()},m:function(n,s){t&&t.m(n,s),U(n,e,s)},p:function(n,s){n[0].length>0?t?t.p(n,s):(t=oe(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:be,o:be,d:function(n){t&&t.d(n),n&&x(e)}};return k("SvelteRegisterBlock",{block:l,id:je.name,type:"if",source:"(138:2) {#if !editable}",ctx:i}),l}function le(i){let e,t,l,c,n,s,f,a,u,p=i[39].name+"",g,r,h;function $(){return i[21](i[39])}function S(){return i[22](i[39])}const y={c:function(){e=R("div"),t=R("span"),l=N("#"),c=J(),n=R("span"),s=R("i"),f=N("cancel"),a=J(),u=R("p"),g=N(p),this.h()},l:function(d){e=E(d,"DIV",{class:!0});var v=A(e);t=E(v,"SPAN",{class:!0});var w=A(t);l=q(w,"#"),w.forEach(x),c=K(v),n=E(v,"SPAN",{class:!0});var I=A(n);s=E(I,"I",{class:!0});var T=A(s);f=q(T,"cancel"),T.forEach(x),I.forEach(x),a=K(v),u=E(v,"P",{});var z=A(u);g=q(z,p),z.forEach(x),v.forEach(x),this.h()},h:function(){C(t,"class","hashtag text-orange-500 s-Tm78wrj2jLBF"),B(t,L,157,12,4886),C(s,"class","material-icons mdc-chip__icon mdc-chip__icon--trailing s-Tm78wrj2jLBF"),B(s,L,159,14,4981),C(n,"class","cancel s-Tm78wrj2jLBF"),B(n,L,158,12,4945),B(u,L,164,12,5205),C(e,"class","text-neutral-300 whitespace-nowrap flex removable-tag s-Tm78wrj2jLBF"),B(e,L,156,10,4806)},m:function(d,v){U(d,e,v),b(e,t),b(t,l),b(e,c),b(e,n),b(n,s),b(s,f),b(e,a),b(e,u),b(u,g),r||(h=[W(s,"click",$,!1,!1,!1,!1),W(s,"keypress",S,!1,!1,!1,!1)],r=!0)},p:function(d,v){i=d,v[0]&1&&p!==(p=i[39].name+"")&&ne(g,p)},d:function(d){d&&x(e),r=!1,pe(h)}};return k("SvelteRegisterBlock",{block:y,id:le.name,type:"each",source:"(156:8) {#each tags as tag}",ctx:i}),y}function De(i){let e=i[42].name+"",t;const l={c:function(){t=N(e)},l:function(n){t=q(n,e)},m:function(n,s){U(n,t,s)},p:function(n,s){s[1]&2048&&e!==(e=n[42].name+"")&&ne(t,e)},d:function(n){n&&x(t)}};return k("SvelteRegisterBlock",{block:l,id:De.name,type:"slot",source:"(180:20) <Text>",ctx:i}),l}function Pe(i){let e,t;e=new ue({props:{$$slots:{default:[De]},$$scope:{ctx:i}},$$inline:!0});const l={c:function(){F(e.$$.fragment)},l:function(n){O(e.$$.fragment,n)},m:function(n,s){V(e,n,s),t=!0},p:function(n,s){const f={};s[1]&18432&&(f.$$scope={dirty:s,ctx:n}),e.$set(f)},i:function(n){t||(D(e.$$.fragment,n),t=!0)},o:function(n){j(e.$$.fragment,n),t=!1},d:function(n){_(e,n)}};return k("SvelteRegisterBlock",{block:l,id:Pe.name,type:"slot",source:"(179:18) <Chip {chip} on:SMUIChip:interaction={() => addTag(chip.name)}>",ctx:i}),l}function Me(i){let e,t;function l(){return i[23](i[42])}e=new re({props:{chip:i[42],$$slots:{default:[Pe]},$$scope:{ctx:i}},$$inline:!0}),e.$on("SMUIChip:interaction",l);const c={c:function(){F(e.$$.fragment)},l:function(s){O(e.$$.fragment,s)},m:function(s,f){V(e,s,f),t=!0},p:function(s,f){i=s;const a={};f[1]&2048&&(a.chip=i[42]),f[1]&18432&&(a.$$scope={dirty:f,ctx:i}),e.$set(a)},i:function(s){t||(D(e.$$.fragment,s),t=!0)},o:function(s){j(e.$$.fragment,s),t=!1},d:function(s){_(e,s)}};return k("SvelteRegisterBlock",{block:c,id:Me.name,type:"slot",source:"(178:16) <Set chips={filteredTagsMatched} let:chip key={(tag) => tag.name}>",ctx:i}),c}function Fe(i){let e=i[42].name+"",t;const l={c:function(){t=N(e)},l:function(n){t=q(n,e)},m:function(n,s){U(n,t,s)},p:function(n,s){s[1]&2048&&e!==(e=n[42].name+"")&&ne(t,e)},d:function(n){n&&x(t)}};return k("SvelteRegisterBlock",{block:l,id:Fe.name,type:"slot",source:"(187:20) <Text>",ctx:i}),l}function Oe(i){let e,t;e=new ue({props:{$$slots:{default:[Fe]},$$scope:{ctx:i}},$$inline:!0});const l={c:function(){F(e.$$.fragment)},l:function(n){O(e.$$.fragment,n)},m:function(n,s){V(e,n,s),t=!0},p:function(n,s){const f={};s[1]&18432&&(f.$$scope={dirty:s,ctx:n}),e.$set(f)},i:function(n){t||(D(e.$$.fragment,n),t=!0)},o:function(n){j(e.$$.fragment,n),t=!1},d:function(n){_(e,n)}};return k("SvelteRegisterBlock",{block:l,id:Oe.name,type:"slot",source:"(186:18) <Chip {chip} on:SMUIChip:interaction={() => addTag(chip.name)}>",ctx:i}),l}function Ve(i){let e,t;function l(){return i[24](i[42])}e=new re({props:{chip:i[42],$$slots:{default:[Oe]},$$scope:{ctx:i}},$$inline:!0}),e.$on("SMUIChip:interaction",l);const c={c:function(){F(e.$$.fragment)},l:function(s){O(e.$$.fragment,s)},m:function(s,f){V(e,s,f),t=!0},p:function(s,f){i=s;const a={};f[1]&2048&&(a.chip=i[42]),f[1]&18432&&(a.$$scope={dirty:f,ctx:i}),e.$set(a)},i:function(s){t||(D(e.$$.fragment,s),t=!0)},o:function(s){j(e.$$.fragment,s),t=!1},d:function(s){_(e,s)}};return k("SvelteRegisterBlock",{block:c,id:Ve.name,type:"slot",source:"(185:16) <Set chips={filteredTagsUnmatched} let:chip key={(tag) => tag.name}>",ctx:i}),c}function _e(i){let e,t,l,c,n,s,f,a,u,p;s=new se({props:{chips:i[5],key:$t,$$slots:{default:[Me,({chip:r})=>({42:r}),({chip:r})=>[0,r?2048:0]]},$$scope:{ctx:i}},$$inline:!0}),u=new se({props:{chips:i[6],key:dt,$$slots:{default:[Ve,({chip:r})=>({42:r}),({chip:r})=>[0,r?2048:0]]},$$scope:{ctx:i}},$$inline:!0});const g={c:function(){e=R("div"),t=R("h1"),l=N("Available Tags"),c=J(),n=R("div"),F(s.$$.fragment),f=J(),a=R("div"),F(u.$$.fragment),this.h()},l:function(h){e=E(h,"DIV",{style:!0});var $=A(e);t=E($,"H1",{});var S=A(t);l=q(S,"Available Tags"),S.forEach(x),c=K($),n=E($,"DIV",{class:!0});var y=A(n);O(s.$$.fragment,y),y.forEach(x),f=K($),a=E($,"DIV",{class:!0});var m=A(a);O(u.$$.fragment,m),m.forEach(x),$.forEach(x),this.h()},h:function(){B(t,L,175,14,5646),C(n,"class","flex flex-wrap m-1"),B(n,L,176,14,5684),C(a,"class","flex flex-wrap m-1"),B(a,L,183,14,6011),gt(e,"margin","1rem"),B(e,L,174,12,5605)},m:function(h,$){U(h,e,$),b(e,t),b(t,l),b(e,c),b(e,n),V(s,n,null),b(e,f),b(e,a),V(u,a,null),p=!0},p:function(h,$){const S={};$[0]&32&&(S.chips=h[5]),$[1]&18432&&(S.$$scope={dirty:$,ctx:h}),s.$set(S);const y={};$[0]&64&&(y.chips=h[6]),$[1]&18432&&(y.$$scope={dirty:$,ctx:h}),u.$set(y)},i:function(h){p||(D(s.$$.fragment,h),D(u.$$.fragment,h),p=!0)},o:function(h){j(s.$$.fragment,h),j(u.$$.fragment,h),p=!1},d:function(h){h&&x(e),_(s),_(u)}};return k("SvelteRegisterBlock",{block:g,id:_e.name,type:"slot",source:'(174:10) <MenuSurface bind:this={surface} managed={true} anchorCorner=\\"BOTTOM_LEFT\\" anchorElement={newTag}>',ctx:i}),g}function ce(i){let e,t;const l={c:function(){e=R("span"),t=N("#"),this.h()},l:function(n){e=E(n,"SPAN",{class:!0});var s=A(e);t=q(s,"#"),s.forEach(x),this.h()},h:function(){C(e,"class","text-orange-500"),B(e,L,193,12,6406)},m:function(n,s){U(n,e,s),b(e,t)},d:function(n){n&&x(e)}};return k("SvelteRegisterBlock",{block:l,id:ce.name,type:"if",source:"(193:10) {#if focused}",ctx:i}),l}function Ue(i){let e,t,l,c,n,s,f,a,u,p,g=i[0];te(g);let r=[];for(let m=0;m<g.length;m+=1)r[m]=le(ke(i,g,m));let h={managed:!0,anchorCorner:"BOTTOM_LEFT",anchorElement:i[7],$$slots:{default:[_e]},$$scope:{ctx:i}};c=new Re({props:h,$$inline:!0}),i[25](c);let $=i[10]&&ce(i),S={id:"input-manual-a",spellcheck:"false",autocomplete:"off",class:"inline text-sm text-neutral-300 "+(i[4]?"shake":""),style:"height: initial"};f=new Le({props:S,$$inline:!0}),i[26](f),f.$on("keydown",i[14]),f.$on("input",i[16]);const y={c:function(){e=R("div");for(let d=0;d<r.length;d+=1)r[d].c();t=J(),l=R("div"),F(c.$$.fragment),n=J(),$&&$.c(),s=J(),F(f.$$.fragment),this.h()},l:function(d){e=E(d,"DIV",{class:!0});var v=A(e);for(let I=0;I<r.length;I+=1)r[I].l(v);t=K(v),l=E(v,"DIV",{id:!0,class:!0});var w=A(l);O(c.$$.fragment,w),n=K(w),$&&$.l(w),s=K(w),O(f.$$.fragment,w),w.forEach(x),v.forEach(x),this.h()},h:function(){C(l,"id","newTagContainer"),C(l,"class","text-neutral-300 whitespace-nowrap flex"),B(l,L,167,8,5264),C(e,"class","flex flex-row flex-wrap text-sm gap-1 mr-2"),B(e,L,154,6,4711)},m:function(d,v){U(d,e,v);for(let w=0;w<r.length;w+=1)r[w]&&r[w].m(e,null);b(e,t),b(e,l),V(c,l,null),b(l,n),$&&$.m(l,null),b(l,s),V(f,l,null),i[27](l),a=!0,u||(p=[W(l,"focusin",i[28],!1,!1,!1,!1),W(l,"focusout",i[15],!1,!1,!1,!1)],u=!0)},p:function(d,v){if(v[0]&8193){g=d[0],te(g);let T;for(T=0;T<g.length;T+=1){const z=ke(d,g,T);r[T]?r[T].p(z,v):(r[T]=le(z),r[T].c(),r[T].m(e,t))}for(;T<r.length;T+=1)r[T].d(1);r.length=g.length}const w={};v[0]&128&&(w.anchorElement=d[7]),v[0]&96|v[1]&16384&&(w.$$scope={dirty:v,ctx:d}),c.$set(w),d[10]?$||($=ce(d),$.c(),$.m(l,s)):$&&($.d(1),$=null);const I={};v[0]&16&&(I.class="inline text-sm text-neutral-300 "+(d[4]?"shake":"")),f.$set(I)},i:function(d){a||(D(c.$$.fragment,d),D(f.$$.fragment,d),a=!0)},o:function(d){j(c.$$.fragment,d),j(f.$$.fragment,d),a=!1},d:function(d){d&&x(e),Ae(r,d),i[25](null),_(c),$&&$.d(),i[26](null),_(f),i[27](null),u=!1,pe(p)}};return k("SvelteRegisterBlock",{block:y,id:Ue.name,type:"slot",source:'(149:4) <Textfield class=\\"tags overflow-visible\\" bind:lineRipple={lineRippleA} bind:input={inputA} style=\\"z-index: 9999\\">',ctx:i}),y}function Ne(i){let e;const t={c:function(){e=N("Tags")},l:function(c){e=q(c,"Tags")},m:function(c,n){U(c,e,n)},d:function(c){c&&x(e)}};return k("SvelteRegisterBlock",{block:t,id:Ne.name,type:"slot",source:'(150:6) <FloatingLabel         class=\\"pb-2\\"         for=\\"input-manual-a\\"         slot=\\"label\\"         floatAbove={(newTag && newTag.value.length > 0) || focused || tags.length > 0}>',ctx:i}),t}function qe(i){let e,t;e=new Ce({props:{class:"pb-2",for:"input-manual-a",slot:"label",floatAbove:i[7]&&i[7].value.length>0||i[10]||i[0].length>0,$$slots:{default:[Ne]},$$scope:{ctx:i}},$$inline:!0});const l={c:function(){F(e.$$.fragment)},l:function(n){O(e.$$.fragment,n)},m:function(n,s){V(e,n,s),t=!0},p:function(n,s){const f={};s[0]&1153&&(f.floatAbove=n[7]&&n[7].value.length>0||n[10]||n[0].length>0),s[1]&16384&&(f.$$scope={dirty:s,ctx:n}),e.$set(f)},i:function(n){t||(D(e.$$.fragment,n),t=!0)},o:function(n){j(e.$$.fragment,n),t=!1},d:function(n){_(e,n)}};return k("SvelteRegisterBlock",{block:l,id:qe.name,type:"slot",source:"(150:6) ",ctx:i}),l}function ze(i){let e,t,l={slot:"ripple"};e=new Ee({props:l,$$inline:!0}),i[20](e);const c={c:function(){F(e.$$.fragment)},l:function(s){O(e.$$.fragment,s)},m:function(s,f){V(e,s,f),t=!0},p:function(s,f){const a={};e.$set(a)},i:function(s){t||(D(e.$$.fragment,s),t=!0)},o:function(s){j(e.$$.fragment,s),t=!1},d:function(s){i[20](null),_(e,s)}};return k("SvelteRegisterBlock",{block:c,id:ze.name,type:"slot",source:"(207:6) ",ctx:i}),c}function oe(i){let e,t=i[0];te(t);let l=[];for(let n=0;n<t.length;n+=1)l[n]=ae(Se(i,t,n));const c={c:function(){e=R("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l:function(s){e=E(s,"DIV",{class:!0});var f=A(e);for(let a=0;a<l.length;a+=1)l[a].l(f);f.forEach(x),this.h()},h:function(){C(e,"class","flex flex-row flex-wrap text-sm gap-1"),B(e,L,139,6,4129)},m:function(s,f){U(s,e,f);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null)},p:function(s,f){if(f[0]&1){t=s[0],te(t);let a;for(a=0;a<t.length;a+=1){const u=Se(s,t,a);l[a]?l[a].p(u,f):(l[a]=ae(u),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},d:function(s){s&&x(e),Ae(l,s)}};return k("SvelteRegisterBlock",{block:c,id:oe.name,type:"if",source:"(139:4) {#if tags.length > 0}",ctx:i}),c}function ae(i){let e,t,l,c=i[39].name+"",n,s;const f={c:function(){e=R("div"),t=R("span"),l=N("#"),n=N(c),s=J(),this.h()},l:function(u){e=E(u,"DIV",{class:!0});var p=A(e);t=E(p,"SPAN",{class:!0});var g=A(t);l=q(g,"#"),g.forEach(x),n=q(p,c),s=K(p),p.forEach(x),this.h()},h:function(){C(t,"class","text-orange-500"),B(t,L,142,12,4272),C(e,"class","text-neutral-300 lowercase"),B(e,L,141,10,4219)},m:function(u,p){U(u,e,p),b(e,t),b(t,l),b(e,n),b(e,s)},p:function(u,p){p[0]&1&&c!==(c=u[39].name+"")&&ne(n,c)},d:function(u){u&&x(e)}};return k("SvelteRegisterBlock",{block:f,id:ae.name,type:"each",source:"(141:8) {#each tags as tag}",ctx:i}),f}function fe(i){let e,t,l,c,n,s;const f=[je,Ie],a=[];function u(g,r){return g[1]?1:0}t=u(i),l=a[t]=f[t](i);const p={c:function(){e=R("div"),l.c(),this.h()},l:function(r){e=E(r,"DIV",{class:!0});var h=A(e);l.l(h),h.forEach(x),this.h()},h:function(){C(e,"class","tags"),B(e,L,136,0,3986)},m:function(r,h){U(r,e,h),a[t].m(e,null),c=!0,n||(s=[W(e,"focusin",i[31],!1,!1,!1,!1),W(e,"focusout",i[32],!1,!1,!1,!1)],n=!0)},p:function(r,h){let $=t;t=u(r),t===$?a[t].p(r,h):(ut(),j(a[$],1,1,()=>{a[$]=null}),pt(),l=a[t],l?l.p(r,h):(l=a[t]=f[t](r),l.c()),D(l,1),l.m(e,null))},i:function(r){c||(D(l),c=!0)},o:function(r){j(l),c=!1},d:function(r){r&&x(e),a[t].d(),n=!1,pe(s)}};return k("SvelteRegisterBlock",{block:p,id:fe.name,type:"component",source:"",ctx:i}),p}function X(i,e,t){i.focus(),typeof window.getSelection<"u"&&typeof document.createRange<"u"&&i.setSelectionRange(e,t)}function ee(i){i.focus(),typeof window.getSelection<"u"&&typeof document.createRange<"u"&&i.setSelectionRange(i.value.length,i.value.length)}const $t=i=>i.name,dt=i=>i.name;function ht(i,e,t){let l,{$$slots:c={},$$scope:n}=e;at("TagList",c,[]);const s=me(),f=ve({query:ye,client:s,variables:{}});ft(f,"getAllTags"),rt(i,f,o=>t(19,l=o));let{tags:a=[]}=e,{editable:u=!1}=e,p,g,r=!1,h=[],$=[],S=[],y,m,d=null,v,w=!1;function I(o,P,M){if(!o||!P)return[o,o];let H=o.filter(Z=>!P.find(ie=>ie.id==Z.id));const he=H.filter(Z=>!m||Z.name.startsWith(M));return H=H.filter(Z=>he.findIndex(ie=>ie.id===Z.id)===-1),[he,H]}function T(){t(0,a),t(5,[$,S]=I(h,a,y),$,t(6,S))}function z(o){y=o,t(7,m.value=y,m)}function Y(o){if(!h)return!1;const P=h.find(M=>typeof o=="string"?o==M.name||o==M.id:o.id==M.id);return P&&!a.find(M=>M.id==P.id)?(a.push(P),T(),!0):(T(),!1)}function G(o){t(0,a=a.filter(P=>P!=o)),T()}function ge(o){if(o instanceof KeyboardEvent)if(o.code=="Backspace")m.value==""&&(z(a.pop().name),ee(m),t(0,a),o.preventDefault(),T());else if(o.code=="Enter")o.preventDefault(),Y(m.value)?(z(""),T()):(t(4,r=!0),setTimeout(()=>t(4,r=!1),500));else{const P=y+o.key,[M]=I(h,a,P);M&&M.length>0&&(t(7,m.value=M[0].name,m),X(m,y.length+1,m.value.length),o.preventDefault(),y=P,T())}}function $e(){setTimeout(()=>{d&&!d.contains(document.activeElement)&&v.setOpen(!1)},200)}function de(o){y=m.value,T(),o.preventDefault()}const Je=["tags","editable"];Object.keys(e).forEach(o=>{!~Je.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<TagList> was created with unknown prop '${o}'`)});function Ke(o){Q[o?"unshift":"push"](()=>{g=o,t(3,g)})}const Qe=o=>G(o),We=o=>G(o),Ye=o=>Y(o.name),Ze=o=>Y(o.name);function Ge(o){Q[o?"unshift":"push"](()=>{v=o,t(9,v)})}function He(o){Q[o?"unshift":"push"](()=>{p=o,t(2,p)})}function Xe(o){Q[o?"unshift":"push"](()=>{d=o,t(8,d)})}const et=()=>v.setOpen(!0);function tt(o){g=o,t(3,g)}function nt(o){p=o,t(2,p)}const it=()=>t(10,w=!0),st=()=>t(10,w=!1);return i.$$set=o=>{"tags"in o&&t(0,a=o.tags),"editable"in o&&t(1,u=o.editable)},i.$capture_state=()=>({GetTagsDocument:ye,Chip:re,Set:se,Text:ue,MenuSurface:Re,queryStore:ve,getContextClient:me,Textfield:Be,Input:Le,FloatingLabel:Ce,LineRipple:Ee,client:s,getAllTags:f,tags:a,editable:u,inputA:p,lineRippleA:g,shake:r,allTags:h,filteredTagsMatched:$,filteredTagsUnmatched:S,newTagText:y,newTag:m,newTagContainer:d,surface:v,focused:w,filterAvailableTags:I,updateTags:T,setTagText:z,setTextRange:X,placeCaretAtEnd:ee,addTag:Y,deleteTag:G,newTagKeydown:ge,onFocusLost:$e,onInput:de,$getAllTags:l}),i.$inject_state=o=>{"tags"in o&&t(0,a=o.tags),"editable"in o&&t(1,u=o.editable),"inputA"in o&&t(2,p=o.inputA),"lineRippleA"in o&&t(3,g=o.lineRippleA),"shake"in o&&t(4,r=o.shake),"allTags"in o&&(h=o.allTags),"filteredTagsMatched"in o&&t(5,$=o.filteredTagsMatched),"filteredTagsUnmatched"in o&&t(6,S=o.filteredTagsUnmatched),"newTagText"in o&&(y=o.newTagText),"newTag"in o&&t(7,m=o.newTag),"newTagContainer"in o&&t(8,d=o.newTagContainer),"surface"in o&&t(9,v=o.surface),"focused"in o&&t(10,w=o.focused)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),i.$$.update=()=>{i.$$.dirty[0]&4&&t(7,m=p?.getElement()),i.$$.dirty[0]&524290&&u&&!l.fetching&&!l.error&&(h=l.data?.getTags||[],T())},[a,u,p,g,r,$,S,m,d,v,w,f,Y,G,ge,$e,de,X,ee,l,Ke,Qe,We,Ye,Ze,Ge,He,Xe,et,tt,nt,it,st]}class Tt extends lt{constructor(e){super(e),ct(this,e,ht,fe,ot,{tags:0,editable:1,setTextRange:17,placeCaretAtEnd:18},null,[-1,-1]),k("SvelteRegisterComponent",{component:this,tagName:"TagList",options:e,id:fe.name})}get tags(){throw new Error("<TagList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set tags(e){throw new Error("<TagList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editable(){throw new Error("<TagList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editable(e){throw new Error("<TagList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get setTextRange(){return X}set setTextRange(e){throw new Error("<TagList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get placeCaretAtEnd(){return ee}set placeCaretAtEnd(e){throw new Error("<TagList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Tt as T};
//# sourceMappingURL=TagList.4985729b.js.map

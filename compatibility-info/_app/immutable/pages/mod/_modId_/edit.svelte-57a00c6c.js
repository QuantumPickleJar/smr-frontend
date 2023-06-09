import{S as B,i as H,s as Z,bb as _,u as F,ad as G,b as V,a as z,e as L,aa as w,Z as I,aV as J,f as l,g as C,c as N,d as O,ab as M,_ as S,a7 as K,a5 as b,j as E,$ as q,m as g,t as h,l as j,ae as Q,a1 as P,aC as R,al as U,aB as W,aD as X,bc as Y,k,az as ee,ac as A,q as y}from"../../../chunks/vendor-5faff0be.js";import{p as re}from"../../../chunks/routing-c6322149.js";import{v as te,w as ae}from"../../../chunks/graphql-39b507e4.js";import{T as oe}from"../../../chunks/Toast-13eea52f.js";import{g as ie}from"../../../chunks/navigation-ce539261.js";import{M as ne}from"../../../chunks/ModForm-5978db4c.js";import{b as se}from"../../../chunks/paths-1c47712a.js";import{M as fe}from"../../../chunks/MetaDescriptors-5e0585a5.js";import"../../../chunks/singletons-cdeec3fd.js";import"../../../chunks/forms-a09581a5.js";import"../../../chunks/forms-694c548d.js";import"../../../chunks/markdown-6a2ff7f0.js";import"../../../chunks/extras-8984d02f.js";import"../../../chunks/TagList-f09044fd.js";import"../../../chunks/ModCompatibilityEdit-ff23b44f.js";import"../../../chunks/stores-a6f790a9.js";function D(i){let r,t;return r=new fe({props:{description:"Editing mod "+i[1].data.mod.name,title:"Edit mod "+i[1].data.mod.name,image:i[1].data.mod.logo}}),{c(){I(r.$$.fragment)},l(e){S(r.$$.fragment,e)},m(e,a){q(r,e,a),t=!0},p(e,a){const s={};a&2&&(s.description="Editing mod "+e[1].data.mod.name),a&2&&(s.title="Edit mod "+e[1].data.mod.name),a&2&&(s.image=e[1].data.mod.logo),r.$set(s)},i(e){t||(g(r.$$.fragment,e),t=!0)},o(e){h(r.$$.fragment,e),t=!1},d(e){P(r,e)}}}function de(i){let r,t;return r=new ne({props:{onSubmit:i[5],initialValues:i[3],editing:!0,submitText:"Save"}}),{c(){I(r.$$.fragment)},l(e){S(r.$$.fragment,e)},m(e,a){q(r,e,a),t=!0},p(e,a){const s={};a&8&&(s.initialValues=e[3]),r.$set(s)},i(e){t||(g(r.$$.fragment,e),t=!0)},o(e){h(r.$$.fragment,e),t=!1},d(e){P(r,e)}}}function me(i){let r,t,e=i[1].error.message+"",a;return{c(){r=L("p"),t=w("Oh no... "),a=w(e)},l(s){r=N(s,"P",{});var f=O(r);t=M(f,"Oh no... "),a=M(f,e),f.forEach(l)},m(s,f){E(s,r,f),b(r,t),b(r,a)},p(s,f){f&2&&e!==(e=s[1].error.message+"")&&A(a,e)},i:y,o:y,d(s){s&&l(r)}}}function le(i){let r,t;return{c(){r=L("p"),t=w("Loading...")},l(e){r=N(e,"P",{});var a=O(r);t=M(a,"Loading..."),a.forEach(l)},m(e,a){E(e,r,a),b(r,t)},p:y,i:y,o:y,d(e){e&&l(r)}}}function $e(i){let r,t,e,a;const s=[le,me,de],f=[];function $(n,c){return n[1].fetching?0:n[1].error?1:2}return r=$(i),t=f[r]=s[r](i),{c(){t.c(),e=V()},l(n){t.l(n),e=V()},m(n,c){f[r].m(n,c),E(n,e,c),a=!0},p(n,c){let u=r;r=$(n),r===u?f[r].p(n,c):(k(),h(f[u],1,1,()=>{f[u]=null}),j(),t=f[r],t?t.p(n,c):(t=f[r]=s[r](n),t.c()),g(t,1),t.m(e.parentNode,e))},i(n){a||(g(t),a=!0)},o(n){h(t),a=!1},d(n){f[r].d(n),n&&l(e)}}}function ce(i){let r,t;return r=new Y({props:{$$slots:{default:[$e]},$$scope:{ctx:i}}}),{c(){I(r.$$.fragment)},l(e){S(r.$$.fragment,e)},m(e,a){q(r,e,a),t=!0},p(e,a){const s={};a&522&&(s.$$scope={dirty:a,ctx:e}),r.$set(s)},i(e){t||(g(r.$$.fragment,e),t=!0)},o(e){h(r.$$.fragment,e),t=!1},d(e){P(r,e)}}}function ue(i){let r,t;return{c(){r=L("span"),t=w(i[2])},l(e){r=N(e,"SPAN",{});var a=O(r);t=M(a,i[2]),a.forEach(l)},m(e,a){E(e,r,a),b(r,t)},p(e,a){a&4&&A(t,e[2])},d(e){e&&l(r)}}}function pe(i){let r,t,e,a,s,f,$,n,c,u,d=!i[1].fetching&&!i[1].error&&i[1].data.mod&&D(i);f=new _({props:{$$slots:{default:[ce]},$$scope:{ctx:i}}});function p(o){i[7](o)}let x={$$slots:{default:[ue]},$$scope:{ctx:i}};return i[0]!==void 0&&(x.running=i[0]),n=new oe({props:x}),F.push(()=>G(n,"running",p)),{c(){d&&d.c(),r=V(),t=z(),e=L("h1"),a=w("Edit Mod"),s=z(),I(f.$$.fragment),$=z(),I(n.$$.fragment),this.h()},l(o){const m=J('[data-svelte="svelte-q8g25b"]',document.head);d&&d.l(m),r=V(),m.forEach(l),t=C(o),e=N(o,"H1",{class:!0});var v=O(e);a=M(v,"Edit Mod"),v.forEach(l),s=C(o),S(f.$$.fragment,o),$=C(o),S(n.$$.fragment,o),this.h()},h(){K(e,"class","text-4xl my-4 font-bold")},m(o,m){d&&d.m(document.head,null),b(document.head,r),E(o,t,m),E(o,e,m),b(e,a),E(o,s,m),q(f,o,m),E(o,$,m),q(n,o,m),u=!0},p(o,[m]){!o[1].fetching&&!o[1].error&&o[1].data.mod?d?(d.p(o,m),m&2&&g(d,1)):(d=D(o),d.c(),g(d,1),d.m(r.parentNode,r)):d&&(k(),h(d,1,1,()=>{d=null}),j());const v={};m&522&&(v.$$scope={dirty:m,ctx:o}),f.$set(v);const T={};m&516&&(T.$$scope={dirty:m,ctx:o}),!c&&m&1&&(c=!0,T.running=o[0],Q(()=>c=!1)),n.$set(T)},i(o){u||(g(d),g(f.$$.fragment,o),g(n.$$.fragment,o),u=!0)},o(o){h(d),h(f.$$.fragment,o),h(n.$$.fragment,o),u=!1},d(o){d&&d.d(o),l(r),o&&l(t),o&&l(e),o&&l(s),P(f,o),o&&l($),P(n,o)}}}const Te=re();function ge(i,r,t){let e,a,{modId:s}=r,f="",$=!1;const n=R(te,{mod:s});U(i,n,p=>t(1,a=p));const c=W({query:ae}),u=p=>{c({modId:ee(n).data.mod.id,mod:p}).then(x=>{x.error?(console.error(x.error.message),t(2,f="Error editing mod: "+x.error.message),t(0,$=!0)):ie(se+"/mod/"+x.data.updateMod.id)})};X(n);function d(p){$=p,t(0,$)}return i.$$set=p=>{"modId"in p&&t(6,s=p.modId)},i.$$.update=()=>{i.$$.dirty&1&&($||t(2,f="")),i.$$.dirty&2&&t(3,e=a.data?{...a.data.mod,logo:void 0}:void 0)},[$,a,f,e,n,u,s,d]}class ze extends B{constructor(r){super(),H(this,r,ge,pe,Z,{modId:6})}}export{ze as default,Te as load};
//# sourceMappingURL=edit.svelte-57a00c6c.js.map

import{S as C,i as F,s as O,d as B,v as q,e as $,X as E,b as U,g as b,h as v,Y as j,j as g,k as X,N as x,m as A,ak as I,n as Y,U as u,Z as _,u as W}from"./vendor.Czei42k5.js";import{q as f}from"./graphql.DSJZyne3.js";const y="src/lib/components/announcements/AnnouncementRow.svelte";function S(e){let n,o,c,l=e[3][e[0]]+"",d,R,s,m,i,p,w,t;const D={c:function(){n=$("div"),o=$("div"),c=$("span"),d=E(l),R=U(),s=$("div"),m=$("b"),i=E(e[0]),p=E(": "),w=E(e[2]),this.h()},l:function(a){n=b(a,"DIV",{class:!0});var r=v(n);o=b(r,"DIV",{class:!0});var k=v(o);c=b(k,"SPAN",{class:!0});var V=v(c);d=j(V,l),V.forEach(g),R=X(k),s=b(k,"DIV",{class:!0});var M=v(s);m=b(M,"B",{});var P=v(m);i=j(P,e[0]),p=j(P,": "),P.forEach(g),w=j(M,e[2]),M.forEach(g),k.forEach(g),r.forEach(g),this.h()},h:function(){x(c,"class","material-icons align-middle text-2xl"),A(c,y,27,4,911),A(m,y,32,6,1156),x(s,"class","text-l inline-block max-w-full break-words align-middle"),I(s,"font-mono",e[1]),I(s,"whitespace-pre",e[1]),A(s,y,28,4,997),x(o,"class","striped p-1 text-black svelte-1y2swsp"),A(o,y,26,2,870),x(n,"class",t=e[4][e[0]]+" max-h-64 overflow-hidden rounded-sm svelte-1y2swsp"),A(n,y,25,0,787)},m:function(a,r){Y(a,n,r),u(n,o),u(o,c),u(c,d),u(o,R),u(o,s),u(s,m),u(m,i),u(m,p),u(s,w)},p:function(a,[r]){r&1&&l!==(l=a[3][a[0]]+"")&&_(d,l),r&1&&_(i,a[0]),r&4&&_(w,a[2]),r&2&&I(s,"font-mono",a[1]),r&2&&I(s,"whitespace-pre",a[1]),r&1&&t!==(t=a[4][a[0]]+" max-h-64 overflow-hidden rounded-sm svelte-1y2swsp")&&x(n,"class",t)},i:W,o:W,d:function(a){a&&g(n)}};return B("SvelteRegisterBlock",{block:D,id:S.name,type:"component",source:"",ctx:e}),D}const N="monotext:";function Z(e,n,o){let c,l,{$$slots:d={},$$scope:R}=n;q("AnnouncementRow",d,[]);const s={[f.Info]:"info",[f.Alert]:"error",[f.Warning]:"warning",[f.Fix]:"build_circle"},m={[f.Info]:"bg-sky-500",[f.Alert]:"bg-red-600",[f.Warning]:"bg-yellow-400",[f.Fix]:"bg-green-600"};let{message:i}=n,{importance:p}=n;e.$$.on_mount.push(function(){i===void 0&&!("message"in n||e.$$.bound[e.$$.props.message])&&console.warn("<AnnouncementRow> was created without expected prop 'message'"),p===void 0&&!("importance"in n||e.$$.bound[e.$$.props.importance])&&console.warn("<AnnouncementRow> was created without expected prop 'importance'")});const w=["message","importance"];return Object.keys(n).forEach(t=>{!~w.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<AnnouncementRow> was created with unknown prop '${t}'`)}),e.$$set=t=>{"message"in t&&o(5,i=t.message),"importance"in t&&o(0,p=t.importance)},e.$capture_state=()=>({AnnouncementImportance:f,iconNames:s,backgroundColors:m,monospacePrefix:N,message:i,importance:p,isMonospace:c,finalMessage:l}),e.$inject_state=t=>{"message"in t&&o(5,i=t.message),"importance"in t&&o(0,p=t.importance),"isMonospace"in t&&o(1,c=t.isMonospace),"finalMessage"in t&&o(2,l=t.finalMessage)},n&&"$$inject"in n&&e.$inject_state(n.$$inject),e.$$.update=()=>{e.$$.dirty&32&&o(1,c=i.startsWith(N)),e.$$.dirty&34&&o(2,l=c?i.replaceAll(N,""):i)},[p,c,l,s,m,i]}class H extends C{constructor(n){super(n),F(this,n,Z,S,O,{message:5,importance:0}),B("SvelteRegisterComponent",{component:this,tagName:"AnnouncementRow",options:n,id:S.name})}get message(){throw new Error("<AnnouncementRow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set message(n){throw new Error("<AnnouncementRow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get importance(){throw new Error("<AnnouncementRow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set importance(n){throw new Error("<AnnouncementRow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{H as A};
//# sourceMappingURL=AnnouncementRow.p89Y_0kB.js.map
import{S as R,i as j,s as N,e as b,k as d,c as h,n as y,b as m,f as c,d as a,t as k,a as v,g as E,R as T,h as q,X as M,M as C}from"./vendor-bd04eeb5.js";import{p as D}from"./stores-44ecde00.js";import{b as I}from"./paths-6758d194.js";function A(s){let e,t,n;return{c(){e=b("meta"),t=d(),n=b("meta"),this.h()},l(r){e=h(r,"META",{property:!0,content:!0}),t=y(r),n=h(r,"META",{property:!0,content:!0}),this.h()},h(){m(e,"property","description"),m(e,"content",s[0]),m(n,"property","og:description"),m(n,"content",s[0])},m(r,l){c(r,e,l),c(r,t,l),c(r,n,l)},p(r,l){l&1&&m(e,"content",r[0]),l&1&&m(n,"content",r[0])},d(r){r&&a(e),r&&a(t),r&&a(n)}}}function L(s){let e;return{c(){e=b("meta"),this.h()},l(t){e=h(t,"META",{property:!0,content:!0}),this.h()},h(){m(e,"property","og:image"),m(e,"content",""+(I+"/assets/favicon.ico"))},m(t,n){c(t,e,n)},p:M,d(t){t&&a(e)}}}function U(s){let e;return{c(){e=b("meta"),this.h()},l(t){e=h(t,"META",{property:!0,content:!0}),this.h()},h(){m(e,"property","og:image"),m(e,"content",s[1])},m(t,n){c(t,e,n)},p(t,n){n&2&&m(e,"content",t[1])},d(t){t&&a(e)}}}function S(s){let e,t,n,r,l,_;return{c(){e=b("title"),t=k(s[2]),n=k(" - SMR"),r=d(),l=b("meta"),this.h()},l(p){e=h(p,"TITLE",{});var f=v(e);t=E(f,s[2]),n=E(f," - SMR"),f.forEach(a),r=y(p),l=h(p,"META",{property:!0,content:!0}),this.h()},h(){m(l,"property","og:title"),m(l,"content",_=""+(s[2]+" - SMR"))},m(p,f){c(p,e,f),T(e,t),T(e,n),c(p,r,f),c(p,l,f)},p(p,f){f&4&&q(t,p[2]),f&4&&_!==(_=""+(p[2]+" - SMR"))&&m(l,"content",_)},d(p){p&&a(e),p&&a(r),p&&a(l)}}}function X(s){let e,t,n,r,l=s[0]&&A(s);function _(i,u){return i[1]?U:L}let p=_(s),f=p(s),o=s[2]&&S(s);return{c(){l&&l.c(),e=d(),f.c(),t=d(),o&&o.c(),n=d(),r=b("meta"),this.h()},l(i){l&&l.l(i),e=y(i),f.l(i),t=y(i),o&&o.l(i),n=y(i),r=h(i,"META",{property:!0,content:!0}),this.h()},h(){m(r,"property","og:url"),m(r,"content",""+(s[3]+s[4]))},m(i,u){l&&l.m(i,u),c(i,e,u),f.m(i,u),c(i,t,u),o&&o.m(i,u),c(i,n,u),c(i,r,u)},p(i,[u]){i[0]?l?l.p(i,u):(l=A(i),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),p===(p=_(i))&&f?f.p(i,u):(f.d(1),f=p(i),f&&(f.c(),f.m(t.parentNode,t))),i[2]?o?o.p(i,u):(o=S(i),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:M,o:M,d(i){l&&l.d(i),i&&a(e),f.d(i),i&&a(t),o&&o.d(i),i&&a(n),i&&a(r)}}}function w(s,e,t){let n;C(s,D,o=>t(5,n=o));let r=n.host,l=n.path,{description:_=void 0}=e,{image:p=void 0}=e,{title:f=void 0}=e;return s.$$set=o=>{"description"in o&&t(0,_=o.description),"image"in o&&t(1,p=o.image),"title"in o&&t(2,f=o.title)},[_,p,f,r,l]}class G extends R{constructor(e){super();j(this,e,w,X,N,{description:0,image:1,title:2})}}export{G as M};
//# sourceMappingURL=MetaDescriptors-99b66b31.js.map
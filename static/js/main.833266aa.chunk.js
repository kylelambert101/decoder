(this.webpackJsonpdecoder=this.webpackJsonpdecoder||[]).push([[0],{44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(1),a=n.n(c),s=n(23),i=n.n(s),o=(n(44),n(28)),u=n(67),j=n(66),l=n(60),d=n(68),b=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],h=n(10),O=function(e){return e.split("").map((function(e,t){return{rawValue:e,codeLetter:b.find((function(t){return t===e.toUpperCase()})),position:t,transform:e.toUpperCase()===e?function(e){return e.toUpperCase()}:function(e){return e.toLowerCase()}}}))},f=function(e,t,n){return e.map((function(e){return"undefined"===typeof e.codeLetter?e.rawValue:e.transform(n[(t||b).indexOf(e.codeLetter)])}))},m=function(e,t){var n=O(e),r=[].concat(Object(h.a)(b.slice(t)),Object(h.a)(b.slice(0,t)));return f(n,b,r).join("")},p=function(e){var t=O(e),n=Object(h.a)(b).reverse();return f(t,b,n).join("")},x=function(e,t){return Object(h.a)(e.matchAll(/(\d+|[^\d])/g)).map((function(e,n){return{rawValue:e[0],codeNumber:" "===e[0]||isNaN(Number(e[0].toString()))?void 0:Number(e[0])-1,codeLetter:void 0,position:n,transform:function(e){return e===t?"":e.toUpperCase()}}})).map((function(e){return e.transform("undefined"===typeof e.codeNumber?e.rawValue:b[e.codeNumber])})).join("")},g=function(e,t){var n=0;return O(e).map((function(e){return"undefined"!==typeof e.codeLetter?f([e],function(e){var t=b.indexOf(e);return[].concat(Object(h.a)(b.slice(t)),Object(h.a)(b.slice(0,t)))}(t[n++%t.length]),b):e.rawValue})).join("")},v=function(e){var t=e.message,n=Object(l.a)("resultStack");return Object(r.jsxs)(u.a,{children:[Object(r.jsx)(d.a,{htmlFor:n,children:"Caesar Cipher Results"}),Object(r.jsxs)(u.a,{horizontal:!0,tokens:{childrenGap:"1em"},children:[Object(r.jsx)(u.a,{tokens:{childrenGap:"0.25em"},children:b.map((function(e,t){return Object(r.jsxs)("span",{children:["(Offset ",t,")"]})}))}),Object(r.jsx)(u.a,{tokens:{childrenGap:"0.25em"},children:b.map((function(e,n){return Object(r.jsx)("span",{children:m(t,n)})}))})]})]})},C=function(e){var t=e.message,n=Object(l.a)("resultStack");return Object(r.jsxs)(u.a,{children:[Object(r.jsx)(d.a,{htmlFor:n,children:"Atbash Cipher Results"}),Object(r.jsx)("span",{children:p(t)})]})},F=function(e){var t=e.message,n=Object(l.a)("resultStack");return Object(r.jsxs)(u.a,{children:[Object(r.jsx)(d.a,{htmlFor:n,children:"A1Z26 Cipher Results"}),Object(r.jsx)("span",{children:x(t,"-")})]})},L=function(e){var t=e.message,n=Object(l.a)("resultStack");return Object(r.jsxs)(u.a,{children:[Object(r.jsx)(d.a,{htmlFor:n,children:"Vigen\xe8re Cipher Results"}),Object(r.jsx)("span",{children:g(t,"SHIFTER")})]})},S=function(e){var t=c.useState(""),n=Object(o.a)(t,2),a=n[0],s=n[1];return Object(r.jsxs)(u.a,{style:{paddingLeft:"1em"},children:[Object(r.jsx)(u.a.Item,{children:Object(r.jsx)(u.a,{horizontal:!0,horizontalAlign:"start",children:Object(r.jsx)(j.a,{label:"Message",value:a,onChange:function(e,t){return s(t||"")},style:{width:400}})})}),Object(r.jsx)(u.a.Item,{children:Object(r.jsx)(C,{message:a})}),Object(r.jsx)(u.a.Item,{children:Object(r.jsx)(F,{message:a})}),Object(r.jsx)(u.a.Item,{children:Object(r.jsx)(L,{message:a})}),Object(r.jsx)(u.a.Item,{children:Object(r.jsx)(v,{message:a})})]})};var k=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(S,{})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),w()}},[[46,1,2]]]);
//# sourceMappingURL=main.833266aa.chunk.js.map
var __webpack_modules__={2417:(o,d,i)=>{Promise.all([i.e(944),i.e(806),i.e(294),i.e(683)]).then(i.bind(i,683)).catch(f=>console.error(f))}},__webpack_module_cache__={};function __webpack_require__(o){var d=__webpack_module_cache__[o];if(void 0!==d)return d.exports;var i=__webpack_module_cache__[o]={exports:{}};return __webpack_modules__[o](i,i.exports,__webpack_require__),i.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.d=(o,d)=>{for(var i in d)__webpack_require__.o(d,i)&&!__webpack_require__.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:d[i]})},__webpack_require__.f={},__webpack_require__.e=o=>Promise.all(Object.keys(__webpack_require__.f).reduce((d,i)=>(__webpack_require__.f[i](o,d),d),[])),__webpack_require__.u=o=>(592===o?"common":o)+"."+{222:"d70eb04ab6f5293d",274:"f00f19225f8a8de9",294:"46f398d08fd8dbeb",322:"9096bb672eb9bed4",417:"c7f25da0509f56c3",481:"0cbfaa0dadd988e9",592:"3fe60b0bdcfbcfd5",683:"78a2c0dc4e05887e",806:"ab9a363844a23a94",895:"2995e6cc361257df",941:"9d9514d1e5119048",944:"9693e749463278e9"}[o]+".js",__webpack_require__.miniCssF=o=>{},__webpack_require__.o=(o,d)=>Object.prototype.hasOwnProperty.call(o,d),(()=>{var o={},d="plugins-calendar:";__webpack_require__.l=(i,f,b,h)=>{if(o[i])o[i].push(f);else{var u,P;if(void 0!==b)for(var p=document.getElementsByTagName("script"),S=0;S<p.length;S++){var c=p[S];if(c.getAttribute("src")==i||c.getAttribute("data-webpack")==d+b){u=c;break}}u||(P=!0,(u=document.createElement("script")).type="module",u.charset="utf-8",u.timeout=120,__webpack_require__.nc&&u.setAttribute("nonce",__webpack_require__.nc),u.setAttribute("data-webpack",d+b),u.src=__webpack_require__.tu(i)),o[i]=[f];var g=(C,y)=>{u.onerror=u.onload=null,clearTimeout(w);var m=o[i];if(delete o[i],u.parentNode&&u.parentNode.removeChild(u),m&&m.forEach(v=>v(y)),C)return C(y)},w=setTimeout(g.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=g.bind(null,u.onerror),u.onload=g.bind(null,u.onload),P&&document.head.appendChild(u)}}})(),__webpack_require__.r=o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},(()=>{__webpack_require__.S={};var o={},d={};__webpack_require__.I=(i,f)=>{f||(f=[]);var b=d[i];if(b||(b=d[i]={}),!(f.indexOf(b)>=0)){if(f.push(b),o[i])return o[i];__webpack_require__.o(__webpack_require__.S,i)||(__webpack_require__.S[i]={});var h=__webpack_require__.S[i],P="plugins-calendar",p=(g,w,C,y)=>{var m=h[g]=h[g]||{},v=m[w];(!v||!v.loaded&&(!y!=!v.eager?y:P>v.from))&&(m[w]={get:C,from:P,eager:!!y})},c=[];return"default"===i&&(p("@angular/common","14.2.8",()=>Promise.all([__webpack_require__.e(944),__webpack_require__.e(895)]).then(()=>()=>__webpack_require__(6895))),p("@angular/core","14.2.8",()=>Promise.all([__webpack_require__.e(222),__webpack_require__.e(592),__webpack_require__.e(274)]).then(()=>()=>__webpack_require__(8274))),p("@angular/platform-browser","14.2.8",()=>Promise.all([__webpack_require__.e(417),__webpack_require__.e(944),__webpack_require__.e(481)]).then(()=>()=>__webpack_require__(1481))),p("@angular/router","14.2.8",()=>Promise.all([__webpack_require__.e(417),__webpack_require__.e(944),__webpack_require__.e(222),__webpack_require__.e(806),__webpack_require__.e(322)]).then(()=>()=>__webpack_require__(5322))),p("@ng-mfa/shared/data-access/random","1.0.0",()=>Promise.all([__webpack_require__.e(417),__webpack_require__.e(944),__webpack_require__.e(222),__webpack_require__.e(592)]).then(()=>()=>__webpack_require__(5439)))),o[i]=c.length?Promise.all(c).then(()=>o[i]=1):1}}})(),(()=>{var o;__webpack_require__.tt=()=>(void 0===o&&(o={createScriptURL:d=>d},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("angular#bundler",o))),o)})(),__webpack_require__.tu=o=>__webpack_require__.tt().createScriptURL(o),(()=>{var o;if("string"==typeof import.meta.url&&(o=import.meta.url),!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=o})(),(()=>{var o=e=>{var t=a=>a.split(".").map(l=>+l==l?+l:l),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},i=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(s=e[a]))[0]?"-":(n>0?".":"")+(n=2,s);return r}var l=[];for(a=1;a<e.length;a++){var s=e[a];l.push(0===s?"not("+V()+")":1===s?"("+V()+" || "+V()+")":2===s?l.pop()+" "+l.pop():i(s))}return V();function V(){return l.pop().replace(/^\((.+)\)$/,"$1")}},f=(e,t)=>{if(0 in e){t=o(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var a=0,l=1,s=!0;;l++,a++){var V,T,E=l<e.length?(typeof e[l])[0]:"";if(a>=t.length||"o"==(T=(typeof(V=t[a]))[0]))return!s||("u"==E?l>r&&!n:""==E!=n);if("u"==T){if(!s||"u"!=E)return!1}else if(s)if(E==T)if(l<=r){if(V!=e[l])return!1}else{if(n?V>e[l]:V<e[l])return!1;V!=e[l]&&(s=!1)}else if("s"!=E&&"n"!=E){if(n||l<=r)return!1;s=!1,l--}else{if(l<=r||T<E!=n)return!1;s=!1}else"s"!=E&&"n"!=E&&(s=!1,l--)}}var _=[],j=_.pop.bind(_);for(a=1;a<e.length;a++){var M=e[a];_.push(1==M?j()|j():2==M?j()&j():M?f(M,t):!j())}return!!j()},u=(e,t)=>{var r=e[t];return Object.keys(r).reduce((n,a)=>!n||!r[n].loaded&&((e,t)=>{e=o(e),t=o(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],a=(typeof n)[0];if(r>=t.length)return"u"==a;var l=t[r],s=(typeof l)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&n!=l)return n<l;r++}})(n,a)?a:n,0)},c=(e,t,r,n)=>{var a=u(e,r);if(!f(n,a))throw new Error(((e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+i(n)+")")(e,r,a,n));return m(e[r][a])},m=e=>(e.loaded=1,e.get()),O=(e=>function(t,r,n,a){var l=__webpack_require__.I(t);return l&&l.then?l.then(e.bind(e,t,__webpack_require__.S[t],r,n,a)):e(t,__webpack_require__.S[t],r,n,a)})((e,t,r,n,a)=>t&&__webpack_require__.o(t,r)?c(t,0,r,n):a()),x={},F={8944:()=>O("default","@angular/core",[2,14,2,0],()=>Promise.all([__webpack_require__.e(222),__webpack_require__.e(592),__webpack_require__.e(274)]).then(()=>()=>__webpack_require__(8274))),9806:()=>O("default","@angular/platform-browser",[2,14,2,0],()=>Promise.all([__webpack_require__.e(417),__webpack_require__.e(481)]).then(()=>()=>__webpack_require__(1481))),5294:()=>O("default","@angular/router",[2,14,2,0],()=>Promise.all([__webpack_require__.e(417),__webpack_require__.e(222),__webpack_require__.e(806),__webpack_require__.e(322)]).then(()=>()=>__webpack_require__(5322))),417:()=>O("default","@angular/common",[2,14,2,0],()=>__webpack_require__.e(895).then(()=>()=>__webpack_require__(6895)))},A={294:[5294],417:[417],806:[9806],944:[8944]};__webpack_require__.f.consumes=(e,t)=>{__webpack_require__.o(A,e)&&A[e].forEach(r=>{if(__webpack_require__.o(x,r))return t.push(x[r]);var n=s=>{x[r]=0,__webpack_require__.m[r]=V=>{delete __webpack_require__.c[r],V.exports=s()}},a=s=>{delete x[r],__webpack_require__.m[r]=V=>{throw delete __webpack_require__.c[r],s}};try{var l=F[r]();l.then?t.push(x[r]=l.then(n).catch(a)):n(l)}catch(s){a(s)}})}})(),(()=>{var o={179:0};__webpack_require__.f.j=(f,b)=>{var h=__webpack_require__.o(o,f)?o[f]:void 0;if(0!==h)if(h)b.push(h[2]);else if(/^(294|417|806|944)$/.test(f))o[f]=0;else{var u=new Promise((c,g)=>h=o[f]=[c,g]);b.push(h[2]=u);var P=__webpack_require__.p+__webpack_require__.u(f),p=new Error;__webpack_require__.l(P,c=>{if(__webpack_require__.o(o,f)&&(0!==(h=o[f])&&(o[f]=void 0),h)){var g=c&&("load"===c.type?"missing":c.type),w=c&&c.target&&c.target.src;p.message="Loading chunk "+f+" failed.\n("+g+": "+w+")",p.name="ChunkLoadError",p.type=g,p.request=w,h[1](p)}},"chunk-"+f,f)}};var d=(f,b)=>{var p,S,[h,u,P]=b,c=0;if(h.some(w=>0!==o[w])){for(p in u)__webpack_require__.o(u,p)&&(__webpack_require__.m[p]=u[p]);P&&P(__webpack_require__)}for(f&&f(b);c<h.length;c++)__webpack_require__.o(o,S=h[c])&&o[S]&&o[S][0](),o[S]=0},i=self.webpackChunkplugins_calendar=self.webpackChunkplugins_calendar||[];i.forEach(d.bind(null,0)),i.push=d.bind(null,i.push.bind(i))})();var __webpack_exports__=__webpack_require__(2417);
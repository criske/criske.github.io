(this["webpackJsonpmy-git-feed-client"]=this["webpackJsonpmy-git-feed-client"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var c,r,i=n(33),s=n.n(i),a=(n(40),n(5)),o=n(2),l=n(1);!function(e){e.LOADING="loading",e.FETCH="fetch",e.USER="user",e.SELECTED="selected",e.ASSIGNMENTS="assignments",e.COMMITS="commits",e.REPOS="repos",e.READY="ready",e.NONE=""}(c||(c={})),function(e){e[e.home=0]="home",e[e.assignments=1]="assignments",e[e.commits=2]="commits",e[e.repos=3]="repos"}(r||(r={}));var j={fetch:{loading:!1,call:{name:null,args:[],stateActionType:c.NONE}},ready:!1,provider:{name:"Github",user:{name:"",avatar:null,link:"",provider:"Github"}},pages:{selected:r.home,home:{},assignments:{paging:{current:1,max:1},entries:[]},commits:{paging:{current:1,max:1},entries:[]},repos:{paging:{current:1,max:1},entries:[]}}},u=n(0),d=Object(l.createContext)({state:j,actions:{loading:function(){},fetch:function(){},select:function(){},dispatch:function(){}}});function b(e,t){var n=null!==e.last?e.last:null==e.first?1:t.max;return{current:null!==e.prev?e.prev+1:1,max:n}}var h=function(e){var t=e.children,n=Object(l.useReducer)((function(e,t){switch(t.type){case c.READY:return Object(o.a)(Object(o.a)({},e),{},{ready:!0});case c.LOADING:return Object(o.a)(Object(o.a)({},e),{},{fetch:Object(o.a)(Object(o.a)({},e.fetch),{},{loading:t.payload})});case c.FETCH:return Object(o.a)(Object(o.a)({},e),{},{fetch:Object(o.a)(Object(o.a)({},e.fetch),{},{call:t.payload})});case c.USER:var n;return Object(o.a)(Object(o.a)({},e),{},{provider:{name:null===(n=t.payload)||void 0===n?void 0:n.provider,user:t.payload},pages:j.pages});case c.SELECTED:return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{selected:t.payload})});case c.ASSIGNMENTS:var r=b(t.payload.paging,e.pages.assignments.paging);return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{assignments:{paging:r,entries:t.payload.entries||[]}})});case c.COMMITS:var i=b(t.payload.paging,e.pages.commits.paging);return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{commits:{paging:i,entries:t.payload.entries||[]}})});case c.REPOS:var s=b(t.payload.paging,e.pages.repos.paging);return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{repos:{paging:s,entries:t.payload.entries||[]}})});default:return e}}),j),r=Object(a.a)(n,2),i=r[0],s=r[1],h={loading:function(e){s({type:c.LOADING,payload:e})},select:function(e){return s({type:c.SELECTED,payload:e})},fetch:function(e,t,n){s({type:c.FETCH,payload:{name:"".concat(e,"#").concat(1e7*Math.random()),args:n||[],stateActionType:t}})},dispatch:function(e,t){s({type:e,payload:t})}};return Object(u.jsxs)(d.Provider,{value:{state:i,actions:h},children:[" ",t," "]})},p=n(10),O=(n(42),function(e){var t=e.error,n=e.onRetry,c=e.onClose;return Object(u.jsxs)("div",{className:"error-box",children:[Object(u.jsx)("svg",{onClick:c,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),Object(u.jsx)("p",{children:t}),Object(u.jsx)("a",{onClick:n,children:"Retry"})]})}),m=function(){return Object(u.jsx)("div",{className:"loading-spinner"})};function g(e){var t=e.isLoading,n=e.error,c=e.onRetry,r=Object(l.useState)(!t&&null!==n),i=Object(a.a)(r,2),s=(i[0],i[1],Object(l.useState)(!1)),o=Object(a.a)(s,2),j=o[0],d=o[1];return Object(l.useEffect)((function(){d(!t&&null!=n)}),[t,n]),Object(u.jsxs)("div",{className:"fetch-container",children:[t&&Object(u.jsx)(m,{}),j&&Object(u.jsx)(O,{error:n,onRetry:c,onClose:function(){return d(!1)}})]})}var f,x=n(34),v=Object(l.createContext)({isLoading:!1,error:null,onRetry:function(){},onCancel:function(){}}),k=function(e){var t=e.children,n=Object(l.useContext)(d),c=n.state,r=n.actions,i=Object(l.useState)(0),s=Object(a.a)(i,2),o=s[0],j=s[1],b=Object(l.useState)((function(){})),h=Object(a.a)(b,2),p=h[0],O=h[1],m=Object(l.useState)(null),g=Object(a.a)(m,2),f=g[0],k=g[1],y=c.fetch.call.name;Object(l.useEffect)((function(){if(null!=y){var e=y.split("#")[0];null===p||void 0===p||p.call(null),r.loading(!0),k(null);var t=x.a[e].apply(null,c.fetch.call.args);t.request.then((function(e){var t=c.fetch.call.stateActionType;r.dispatch(t,e)})).catch(k).finally((function(){return r.loading(!1)})),O((function(){return t.cancel}))}}),[o,y]);var N={isLoading:c.fetch.loading,error:f,onRetry:function(){j(o+1)},onCancel:function(){p(),r.loading(!1),k("Canceled")}};return Object(u.jsxs)(v.Provider,{value:N,children:[" ",t," "]})};function y(){var e=Object(l.useContext)(v);return Object(u.jsx)(g,Object(o.a)({},e))}!function(e){e[e.HEAD=0]="HEAD",e[e.MENU=1]="MENU"}(f||(f={}));n(44);function N(e){var t=e.item,n=e.section,c=e.renderer,r=e.onSelect;return Object(u.jsx)("div",{className:"__select-menu-item",onClick:function(e){e.preventDefault(),r(t)},children:c(t,n)})}function w(e){var t=e.items,n=e.renderer,c=e.onSelect;return Object(u.jsx)("div",{className:"__select-menu-anchor",children:Object(u.jsx)("div",{className:"__select-menu",children:t.map((function(e,t){return Object(u.jsx)(N,{item:e,section:f.MENU,renderer:n,onSelect:c},t)}))})})}function _(e){return Object(u.jsx)("div",{className:"__select-menu-header",children:Object(u.jsx)(N,Object(o.a)(Object(o.a)({},e),{},{section:f.HEAD}))})}function S(e){return Object(u.jsx)("div",{className:"__select-simple-renderer",children:e})}function C(e){var t=Object(l.useState)({selected:e.selected,visible:!1}),n=Object(a.a)(t,2),c=n[0],r=n[1],i=e.renderer||S,s=Object(l.useRef)(null);return Object(l.useEffect)((function(){function e(e){s.current&&!s.current.contains(e.target)&&r((function(e){return Object(o.a)(Object(o.a)({},e),{},{visible:!1})}))}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[s]),e.items.length?Object(u.jsxs)("div",{className:"__select-container",ref:s,tabIndex:0,children:[Object(u.jsx)(_,{item:c.selected,renderer:i,onSelect:function(){r((function(e){return Object(o.a)(Object(o.a)({},e),{},{visible:!e.visible})}))}}),c.visible&&Object(u.jsx)(w,{items:e.items,renderer:i,onSelect:function(t){r({selected:t,visible:!1}),e.onSelect(t)}})]}):Object(u.jsx)(u.Fragment,{})}n(45);function E(e){var t=e.hasRounter,n=e.provider,c=e.onSelect,r=t?p.a:l.Fragment,i=Object(l.useRef)(null);return Object(u.jsx)(r,{children:Object(u.jsxs)("nav",{children:[Object(u.jsx)("input",{type:"checkbox",ref:i,className:"menuToggle",id:"menuToggle"}),Object(u.jsx)("label",{htmlFor:"menuToggle",children:Object(u.jsxs)("div",{className:"user",children:[n.user.avatar?Object(u.jsx)("img",{src:n.user.avatar}):Object(u.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{strokeLinecap:"round",stroke:"white",strokeLinejoin:"round",strokeWidth:"1",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),Object(u.jsx)("div",{className:"provider",children:n.name}),Object(u.jsx)("a",{href:n.user.link,children:n.user.name})]})}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/",onClick:function(){i.current.checked=!1},children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/assignments",onClick:function(){i.current.checked=!1},children:"Assignments"})}),Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/repos",onClick:function(){i.current.checked=!1},children:"Repos"})}),Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/commits",onClick:function(){i.current.checked=!1},children:"Commits"})})]}),Object(u.jsx)("div",{className:"providers",children:Object(u.jsx)(C,{items:["Github","Gitlab","Bitbucket"],onSelect:function(e){c(e)},selected:n.name})})]})})}function T(){var e=Object(l.useContext)(d),t=e.state,n=e.actions,r=Object(l.useState)({name:t.provider.name,refresh:0}),i=Object(a.a)(r,2),s=i[0],o=i[1];return Object(l.useEffect)((function(){n.fetch("user",c.USER,[s.name])}),[s]),Object(u.jsx)(E,{provider:t.provider,onSelect:function(e){return o((function(t){return{name:e,refresh:t.refresh+1}}))},hasRounter:!1})}T.defaultProps={hasRounter:!1};var M,L=n(4);n(23);function R(e){var t=e.href;if("string"===typeof t)return Object(u.jsx)(u.Fragment,{children:t});var n=t.target||M.BLANK;return Object(u.jsx)("a",{href:t.href,target:n,children:t.title})}function A(e){var t=e.title,n=e.subtitle;return Object(u.jsxs)("div",{className:"__card-header-content",children:[Object(u.jsx)("div",{className:"__card-header-content-title",children:Object(u.jsx)(R,{href:t})}),Object(u.jsx)("div",{className:"__card-header-content-subtitle",children:Object(u.jsx)(R,{href:n})})]})}function D(e){var t=e.hideDivider?"":"__card-header-divider";return Object(u.jsxs)("div",{className:"__card-container",children:[Object(u.jsxs)("div",{className:"__card ".concat(e.className||""),children:[(e.header||e.title||e.subtitle)&&Object(u.jsx)("div",{className:"__card-header ".concat(t),children:!e.title&&!e.subtitle||e.header?e.header:Object(u.jsx)(A,{title:e.title||"",subtitle:e.subtitle||""})}),Object(u.jsx)("div",{className:"__card-body",children:e.body}),e.footer&&Object(u.jsx)("div",{className:"__card-footer",children:e.footer})]}),e.children]})}!function(e){e.BLANK="_blank",e.SELF="_self",e.PARENT="_parent",e.TOP="_top"}(M||(M={}));var I=n(13),F=n.n(I);function P(e){var t=Object(l.useMemo)((function(){return F()()}),[]),n=Object(l.useMemo)((function(){return t.render(e.body)}),[e.body]);return Object(u.jsx)(D,{title:e.title,body:Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})})}n(105);function G(e){var t=function(t){return function(){t>=1&&t<=e.max&&e.onSelect(t)}};return Object(u.jsxs)("div",{className:"__heading-pages",children:[Object(u.jsx)("div",{className:"__heading-pages-button",onClick:t(1),children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})})}),Object(u.jsx)("div",{className:"__heading-pages-button",onClick:t(e.current-1),children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),Object(u.jsx)("div",{className:"__heading-pages-current",children:e.current}),Object(u.jsx)("div",{className:"__heading-pages-button",onClick:t(e.current+1),children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),Object(u.jsx)("div",{className:"__heading-pages-button",onClick:t(e.max),children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 5l7 7-7 7M5 5l7 7-7 7"})})})]})}function B(e){var t=!!e.paging&&e.paging.max>1;return Object(u.jsxs)("div",{className:"__heading-container",children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsxs)("div",{className:"__heading-actions",children:[e.filter&&Object(u.jsx)("div",{className:"__heading-filter",children:Object(u.jsx)(C,Object(o.a)({},e.filter))}),t?e.paging&&Object(u.jsx)(G,Object(o.a)({},e.paging)):Object(u.jsx)(u.Fragment,{})]})]})}function z(e){var t=e.assignments,n=e.paging,c=e.filter;return Object(u.jsxs)("div",{children:[Object(u.jsx)(B,{title:"Assignments",paging:n,filter:c}),Object(u.jsx)("div",{className:"grid-container",children:t.map((function(e,t){return Object(u.jsx)(P,Object(o.a)({},e),t)}))})]})}function H(e){return new Date(e).toLocaleString()}function W(e){var t=Object(l.useMemo)((function(){return F()()}),[]),n=Object(l.useMemo)((function(){return t.render(e.message||"")}),[e.message]);return Object(u.jsx)(D,{title:e.repo,subtitle:e.sha,body:Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:n}}),footer:H(e.date)})}function U(e){var t=e.commits,n=e.paging;return Object(u.jsxs)("div",{children:[Object(u.jsx)(B,{title:"Commits",paging:n}),Object(u.jsx)("div",{className:"grid-container",children:t.map((function(e,t){return Object(u.jsx)(W,Object(o.a)({},e),t)}))})]})}n(106);function J(){return Object(u.jsxs)("div",{className:"__about",children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"My-Git-Feed"})," is an app that aggregates all my activity on different git version control providers: \xa0",Object(u.jsx)("a",{href:"https://github.com/criske",target:"_blank",children:"Github"}),", ",Object(u.jsx)("a",{href:"https://bitbucket.org/cristianpela",target:"_blank",children:"Bitbucket"})," and ",Object(u.jsx)("a",{href:"https://gitlab.com/criske",target:"_blank",children:"Gitlab"}),"."]}),Object(u.jsxs)("p",{children:["In order to extract relevant data, the app uses APIs offered by these providers. This data is then processed by the app's backed layer into a common REST API. This way, by keeping the domain logic on the backend, the front-end implementation is decoupled and can be any of a simple webpage, native mobile app or a desktop app. The backend layer also provides caching, leveraging ",Object(u.jsx)("i",{children:"conditional-requests"})," imposed by providers and thus ensuring a better response and rate limit saves."]}),Object(u.jsxs)("p",{children:["The whole project's source code can be found ",Object(u.jsx)("a",{href:"https://github.com/criske?tab=projects",children:"here"}),"."]}),Object(u.jsx)("p",{children:Object(u.jsx)("h3",{children:Object(u.jsx)("a",{href:"https://github.com/criske/my-git-feed-server",children:"Backend"})})}),Object(u.jsx)("p",{children:"The backend is written in Kotlin using Spring Framework and consists in three modules basically: the domain, implementation and presentation."}),Object(u.jsxs)("p",{children:["The domain contains all the bussiness logic, unit testable, decoupled from implementation layer(caching and networking). Input validation is also performed here with the help of a functional validation library of mine called ",Object(u.jsx)("a",{href:"https://github.com/criske/inval-id",children:"inval-id"}),". This module communicates with implementation layers via interfaces and DTOs (Data Transfer Objects). The DTOs are simple and easly serializable to JSON an vice-versa."]}),Object(u.jsx)("p",{children:"The implementation, as the names says, implements the communication interfaces offered by the domain. These are mainly the cache (Redis and Ehcache clients) and networking with git providers (Spring RestTemplate). Right know the caching is managed by Ehcache, the Redis client being disabled."}),Object(u.jsx)("p",{children:"The presentation offers the REST endpoints and is representated by Spring Controllers. The Controllers communicates with domain via interfaces injected by Spring."}),Object(u.jsx)("p",{children:"For now only Github is fully supported, Bitbucket being in the works..."}),Object(u.jsx)("p",{children:Object(u.jsx)("h3",{children:Object(u.jsx)("a",{href:"https://github.com/criske/my-git-feed-client",children:"Frontend"})})}),Object(u.jsx)("p",{children:"Frontend is a SPA (Single page application) written in Typescript using React Hooks."}),Object(u.jsx)("p",{children:"In the future there are plans for a Android native app, multiplatform Flutter app, and a Jetpack Compose Desktop app."}),Object(u.jsx)("p",{children:Object(u.jsx)("h3",{children:"Hosting"})}),Object(u.jsx)("p",{children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["The backend REST API is hosted on heroku: ",Object(u.jsx)("a",{href:"https://my-git-feed.herokuapp.com/",target:"_blank",children:"https://my-git-feed.herokuapp.com/"})]}),Object(u.jsxs)("li",{children:["The frontend is hosted on Github pages: ",Object(u.jsx)("a",{href:"https://criske.github.io/",target:"_blank",children:"https://criske.github.io/"})]})]})})]})}n(107);function Y(){return Object(u.jsx)("h2",{children:"Not found"})}n(108);function q(){return Object(u.jsx)("div",{className:"under-construction",children:Object(u.jsx)("span",{children:"Page under construction..."})})}n(32);function K(e){var t=e.stars;return Object(u.jsxs)("div",{className:"__repo-stars",children:[Object(u.jsx)("svg",{fill:"gold",stroke:"lightgray",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})}),Object(u.jsx)("span",{children:t})]})}function Q(e){var t=e.language;return Object(u.jsx)("span",{className:"__repo-language-pill",children:t})}function V(e){Object(l.useMemo)((function(){return H(e.createdAt)}),[e.createdAt]),Object(l.useMemo)((function(){return H(e.updatedAt)}),[e.updatedAt]);return Object(u.jsx)(D,{title:e.name,body:Object(u.jsx)("div",{children:e.description||"No description"}),footer:Object(u.jsx)("div",{className:"__repo-footer",children:Object(u.jsx)(K,{stars:e.stars})}),children:Object(u.jsx)(Q,{language:e.language})})}function X(e){var t=e.repos,n=e.paging;return Object(u.jsxs)("div",{children:[Object(u.jsx)(B,{title:"Owned Repositories",paging:n}),Object(u.jsx)("div",{className:"grid-container",children:t.map((function(e,t){return Object(u.jsx)(V,Object(o.a)({},e),t)}))})]})}var Z=[{path:"/",component:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(B,{title:"My Git Feed"}),Object(u.jsx)(J,{})]})}},{path:"/commits",component:function(e){var t=e.location,n=Object(l.useContext)(d),r=n.state,i=n.actions,s=Object(l.useState)(1),o=Object(a.a)(s,2),j=o[0],b=o[1];Object(l.useEffect)((function(){i.fetch("commits",c.COMMITS,[r.provider.name,j])}),[t.key]),Object(l.useEffect)((function(){i.fetch("commits",c.COMMITS,[r.provider.name,1])}),[r.provider.name]),Object(l.useEffect)((function(){i.fetch("commits",c.COMMITS,[r.provider.name,j])}),[j]);var h=(r.pages.commits.entries||[]).map((function(e){return{date:e.date,sha:{title:e.sha,href:e.url},message:e.message,repo:{title:e.repo.fullName,href:e.repo.url}}})),p={current:r.pages.commits.paging.current,max:r.pages.commits.paging.max,onSelect:b};return Object(u.jsx)(U,{commits:h,paging:p})}},{path:"/repos",component:function(e){var t=e.location,n=Object(l.useContext)(d),r=n.state,i=n.actions,s=Object(l.useState)(1),o=Object(a.a)(s,2),j=o[0],b=o[1];Object(l.useEffect)((function(){i.fetch("repos",c.REPOS,[r.provider.name,j])}),[t.key,r.provider.name,j]);var h=(r.pages.repos.entries||[]).map((function(e){return{name:{title:e.simple.name,href:e.simple.url},language:e.language,description:null===e.description?void 0:e.description,organization:null===e.organization?void 0:e.organization,createdAt:e.createdAt,updatedAt:e.updatedAt,stars:e.stars}})),p={current:r.pages.repos.paging.current,max:r.pages.repos.paging.max,onSelect:b};return Object(u.jsx)(X,{repos:h,paging:p})}},{path:"/assignments",component:function(e){var t,n=e.location,r=Object(l.useContext)(d),i=r.state,s=r.actions,j=Object(l.useState)({page:1,filter:(null===(t=i.pages.assignments)||void 0===t?void 0:t.filter)||"OPEN"}),b=Object(a.a)(j,2),h=b[0],p=b[1];Object(l.useEffect)((function(){s.fetch("assignments",c.ASSIGNMENTS,[i.provider.name,h.page,h.filter])}),[n.key,i.provider.name,h]);var O=(i.pages.assignments.entries||[]).map((function(e){return{title:{title:e.title,href:e.url},body:e.body||"",repo:{title:e.repo.fullName,href:e.repo.url},author:{name:e.author.name,avatar:e.author.avatar,url:e.author.url}}})),m={current:i.pages.assignments.paging.current,max:i.pages.assignments.paging.max,onSelect:function(e){p((function(t){return Object(o.a)(Object(o.a)({},t),{},{page:e})}))}},g={items:["ALL","CLOSED","OPEN"],selected:h.filter,onSelect:function(e){p({page:1,filter:e})}};return Object(u.jsx)(z,{assignments:O,paging:m,filter:g})}}];function $(){return Object(u.jsxs)(L.c,{children:[Z.map((function(e,t){return Object(u.jsx)(L.a,{exact:!0,path:e.path,render:function(t){return Object(u.jsx)(e.component,Object(o.a)(Object(o.a)({},t),{},{routes:e.routes}))}},t)})),Object(u.jsx)(L.a,{component:Y})]})}n(109),n(110);function ee(){var e=(new Date).getFullYear(),t=Object(l.useMemo)((function(){var t=2021;return e>t?"".concat(t,"-").concat(e):t.toString()}),[e]);return Object(u.jsx)("footer",{children:Object(u.jsxs)("span",{children:["\xa9 Copyright ",t," Cristian Pela"]})})}function te(){return Object(u.jsxs)(p.a,{children:[Object(u.jsx)("header",{children:Object(u.jsx)(T,{})}),Object(u.jsxs)("main",{children:[Object(u.jsx)("section",{children:Object(u.jsx)($,{})}),Object(u.jsx)(ee,{})]}),Object(u.jsx)(y,{})]})}n(111);function ne(e){var t=e.isLoading,n=e.error,c=e.onRetry,r=e.onCancel;return Object(u.jsxs)("div",{className:"splash-container",children:[Object(u.jsx)("div",{className:"splash-waking",children:t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Waking up the server"}),Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"})}),Object(u.jsx)("button",{onClick:r,children:"Cancel"})]}):Object(u.jsxs)("div",{children:[n," ",Object(u.jsx)("button",{onClick:c,children:"Retry"})," "]})}),Object(u.jsx)("div",{className:"splash-about",children:Object(u.jsx)(J,{})})]})}function ce(){var e=Object(l.useContext)(d).actions,t=Object(l.useContext)(v);return Object(l.useEffect)((function(){e.fetch("ping",c.READY)}),[]),Object(u.jsx)(ne,Object(o.a)({},t))}function re(){var e=Object(l.useContext)(d).state;return Object(u.jsx)(u.Fragment,{children:e.ready?Object(u.jsx)(te,{}):Object(u.jsx)(ce,{})})}ne.defaultProps={onCancel:function(){},onRetry:function(){},error:null,isLoading:!1};var ie=function(){return Object(u.jsx)(h,{children:Object(u.jsxs)(k,{children:[Object(u.jsx)(re,{}),Object(u.jsx)(q,{})]})})};s.a.render(Object(u.jsx)(ie,{}),document.getElementById("root"))},23:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";(function(e){var n=function(e){var t=new AbortController,n=t.signal;return{request:fetch("".concat("https://my-git-feed.herokuapp.com").concat(e),{signal:n,headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject({message:e.error})}))})).catch((function(e){return Promise.reject(e.message)})),cancel:function(){try{t.abort()}catch(e){console.error(e)}}}},c={ping:function(){return n("/check/ping")},user:function(e){return n("/api/".concat(e,"/me"))},assignments:function(e,t,c){return n("/api/".concat(e,"/assignments?page=").concat(t||1,"&state=").concat(c||"all"))},commits:function(e,t){return n("/api/".concat(e,"/commits?page=").concat(t||1))},repos:function(e,t){return n("/api/".concat(e,"/repos?page=").concat(t||1))}};t.a=c}).call(this,n(43))},40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.4216872d.chunk.js.map
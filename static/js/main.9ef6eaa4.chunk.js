(this["webpackJsonpmy-git-feed-client"]=this["webpackJsonpmy-git-feed-client"]||[]).push([[0],{17:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i,a,c=n(18),r=n.n(c),s=(n(24),n(5)),o=n(2),u=n(1);!function(e){e.LOADING="loading",e.FETCH="fetch",e.USER="user",e.SELECTED="selected",e.ASSIGNMENTS="assignments",e.COMMITS="commits",e.REPOS="repos",e.READY="ready",e.NONE=""}(i||(i={})),function(e){e[e.home=0]="home",e[e.assignments=1]="assignments",e[e.commits=2]="commits",e[e.repos=3]="repos"}(a||(a={}));var l={fetch:{loading:!1,call:{name:null,args:[],stateActionType:i.NONE}},ready:!1,provider:{name:"Github",user:{name:"",avatar:null,link:"",provider:"Github"}},pages:{selected:a.home,home:{},assignments:{},commits:{},repos:{}}},d=n(0),m=Object(u.createContext)({state:l,actions:{loading:function(){},fetch:function(){},select:function(){},dispatch:function(){}}}),j=function(e){var t=e.children,n=Object(u.useReducer)((function(e,t){switch(t.type){case i.READY:return Object(o.a)(Object(o.a)({},e),{},{ready:!0});case i.LOADING:return Object(o.a)(Object(o.a)({},e),{},{fetch:Object(o.a)(Object(o.a)({},e.fetch),{},{loading:t.payload})});case i.FETCH:return Object(o.a)(Object(o.a)({},e),{},{fetch:Object(o.a)(Object(o.a)({},e.fetch),{},{call:t.payload})});case i.USER:var n;return Object(o.a)(Object(o.a)({},e),{},{provider:{name:null===(n=t.payload)||void 0===n?void 0:n.provider,user:t.payload}});case i.SELECTED:return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{selected:t.payload})});case i.ASSIGNMENTS:return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{assignments:t.payload})});case i.COMMITS:return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{commits:t.payload})});case i.REPOS:return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{repos:t.payload})});default:return e}}),l),a=Object(s.a)(n,2),c=a[0],r=a[1],j={loading:function(e){r({type:i.LOADING,payload:e})},select:function(e){return r({type:i.SELECTED,payload:e})},fetch:function(e,t,n){r({type:i.FETCH,payload:{name:"".concat(e,"#").concat(1e7*Math.random()),args:n||[],stateActionType:t}})},dispatch:function(e,t){r({type:e,payload:t})}};return Object(d.jsxs)(m.Provider,{value:{state:c,actions:j},children:[" ",t," "]})},b=n(9),p=(n(26),function(e){var t=e.error,n=e.onRetry,i=e.onClose;return Object(d.jsxs)("div",{className:"error-box",children:[Object(d.jsx)("svg",{onClick:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),Object(d.jsx)("p",{children:t}),Object(d.jsx)("a",{onClick:n,children:"Retry"})]})}),O=function(){return Object(d.jsx)("div",{className:"loading-spinner"})};function h(e){var t=e.isLoading,n=e.error,i=e.onRetry,a=Object(u.useState)(!t&&null!==n),c=Object(s.a)(a,2),r=(c[0],c[1],Object(u.useState)(!1)),o=Object(s.a)(r,2),l=o[0],m=o[1];return Object(u.useEffect)((function(){m(!t&&null!=n)}),[t,n]),Object(d.jsxs)("div",{className:"fetch-container",children:[t&&Object(d.jsx)(O,{}),l&&Object(d.jsx)(p,{error:n,onRetry:i,onClose:function(){return m(!1)}})]})}var f=function(e){var t=new AbortController,n=t.signal;return{request:fetch("".concat("https://my-git-feed.herokuapp.com").concat(e),{signal:n,headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject({message:e.error})}))})).catch((function(e){return Promise.reject(e.message)})),cancel:function(){try{t.abort()}catch(e){console.error(e)}}}},x={ping:function(){return f("/check/ping")},user:function(e){return f("/api/".concat(e,"/me"))},assignments:function(e){return f("/api/".concat(e,"/assignments"))},commits:function(e){return f("/api/".concat(e,"/commits"))},repos:function(e){return f("/api/".concat(e,"/repos"))}},v=Object(u.createContext)({isLoading:!1,error:null,onRetry:function(){},onCancel:function(){}}),g=function(e){var t=e.children,n=Object(u.useContext)(m),i=n.state,a=n.actions,c=Object(u.useState)(0),r=Object(s.a)(c,2),o=r[0],l=r[1],j=Object(u.useState)((function(){})),b=Object(s.a)(j,2),p=b[0],O=b[1],h=Object(u.useState)(null),f=Object(s.a)(h,2),g=f[0],q=f[1],C=i.fetch.call.name;Object(u.useEffect)((function(){if(null!=C){var e=C.split("#")[0];null===p||void 0===p||p.call(null),a.loading(!0),q(null);var t=x[e].call(null,i.fetch.call.args);t.request.then((function(e){var t=i.fetch.call.stateActionType;a.dispatch(t,e)})).catch(q).finally((function(){return a.loading(!1)})),O((function(){return t.cancel}))}}),[o,C]);var y={isLoading:i.fetch.loading,error:g,onRetry:function(){l(o+1)},onCancel:function(){p(),a.loading(!1),q("Canceled")}};return Object(d.jsxs)(v.Provider,{value:y,children:[" ",t," "]})};function q(){var e=Object(u.useContext)(v);return Object(d.jsx)(h,Object(o.a)({},e))}n(27);function C(e){var t=e.hasRounter,n=e.provider,i=e.onSelect,a=t?b.a:u.Fragment,c=Object(u.useRef)(null);return Object(d.jsx)(a,{children:Object(d.jsxs)("nav",{children:[Object(d.jsx)("input",{type:"checkbox",ref:c,className:"menuToggle",id:"menuToggle"}),Object(d.jsx)("label",{htmlFor:"menuToggle",children:Object(d.jsxs)("div",{className:"user",children:[n.user.avatar?Object(d.jsx)("img",{src:n.user.avatar}):Object(d.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{strokeLinecap:"round",stroke:"white",strokeLinejoin:"round",strokeWidth:"1",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),Object(d.jsx)("div",{className:"provider",children:n.name}),Object(d.jsx)("a",{href:n.user.link,children:n.user.name})]})}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/",onClick:function(){c.current.checked=!1},children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/assignments",onClick:function(){c.current.checked=!1},children:"Assignments"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/repos",onClick:function(){c.current.checked=!1},children:"Repos"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/commits",onClick:function(){c.current.checked=!1},children:"Commits"})})]}),Object(d.jsx)("div",{className:"providers",children:Object(d.jsxs)("select",{value:n.name,onChange:function(e){i(e.target.value)},children:[Object(d.jsx)("option",{value:"Github",children:"Github"}),Object(d.jsx)("option",{value:"Gitlab",children:"Gitlab"}),Object(d.jsx)("option",{value:"Bitbucket",children:"Bitbucket"})]})})]})})}function y(){var e=Object(u.useContext)(m),t=e.state,n=e.actions,a=Object(u.useState)(t.provider.name),c=Object(s.a)(a,2),r=c[0],o=c[1];return Object(u.useEffect)((function(){n.fetch("user",i.USER,[r])}),[r]),Object(d.jsx)(C,{provider:t.provider,onSelect:o,hasRounter:!1})}y.defaultProps={hasRounter:!1};var N=n(3);function E(e){return Object(d.jsx)("div",{className:"card assignment",children:e.title})}function k(e){var t=e.assignments;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Assignments"}),Object(d.jsx)("div",{className:"grid-container",children:t.map((function(e,t){return Object(d.jsx)(E,Object(o.a)({},e),t)}))})]})}function S(e){return new Date(e).toLocaleString()}function R(e){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:e.repo.name}),Object(d.jsxs)("div",{children:[" ",e.sha," "]}),Object(d.jsxs)("div",{children:[" ",S(e.date)]})]}),Object(d.jsx)("div",{children:e.message||"No message"})]})}function A(e){var t=e.commits;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Commits"}),Object(d.jsx)("div",{className:"grid-container",children:t.map((function(e,t){return Object(d.jsx)(R,Object(o.a)({},e),e.sha)}))})]})}function w(){return Object(d.jsx)("h2",{children:"Not found"})}n(33);function L(){return Object(d.jsx)("div",{className:"under-construction",children:Object(d.jsx)("span",{children:"Page under construction..."})})}n(17);function M(e){var t=Object(u.useMemo)((function(){return S(e.createdAt)}),[e.createdAt]),n=Object(u.useMemo)((function(){return S(e.updatedAt)}),[e.updatedAt]);return Object(d.jsxs)("div",{className:"card repo",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("a",{href:e.url,children:e.name}),Object(d.jsx)("div",{children:e.language}),Object(d.jsx)("div",{children:e.stars})]}),Object(d.jsx)("div",{children:e.description||"No description"}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:["Created: ",t]}),Object(d.jsxs)("div",{children:["Updated: ",n]})]})]})}function T(e){var t=e.repos;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Owned repositories"}),Object(d.jsx)("div",{className:"grid-container",children:t.map((function(e){return Object(d.jsx)(M,Object(o.a)({},e),e.name)}))})]})}var I=[{path:"/",component:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"My Git Feed"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, saepe ut veritatis tempora ipsam et exercitationem at magni, quis, voluptates nostrum necessitatibus temporibus consequatur aliquam excepturi explicabo dignissimos? Numquam, quibusdam. Impedit unde placeat voluptatem ab nemo qui, dicta sequi, vel pariatur rem porro odio veritatis dignissimos nesciunt aspernatur recusandae, quaerat libero assumenda nostrum. Earum esse ex ullam cum ratione soluta dolorum provident maxime maiores. Nulla hic ullam, debitis explicabo minima amet numquam voluptatibus eos culpa recusandae cum magnam ducimus cupiditate labore doloribus facere! Impedit architecto nostrum molestias distinctio quo aperiam omnis cumque expedita, exercitationem ea illum earum commodi veniam soluta quis sint, dignissimos iste ut hic officia quidem ratione pariatur? Voluptatibus aliquam enim distinctio culpa natus placeat similique ipsam voluptatum recusandae perferendis, totam commodi quaerat impedit asperiores. Ad, ipsa beatae obcaecati amet tempora, numquam eius asperiores quisquam dolorum laborum, nobis distinctio? Enim voluptas excepturi, quas beatae quidem doloribus, sed numquam velit cum magni reprehenderit. Recusandae ipsa quisquam fugiat vitae incidunt labore iusto rerum non fuga! Culpa praesentium nam explicabo veritatis tempore, inventore quod suscipit distinctio nihil cum voluptatibus voluptatem iste officia tenetur doloribus impedit quisquam est tempora molestias omnis nostrum! Illo fuga odio non labore minima dolor? Fugit, natus magnam?"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, saepe ut veritatis tempora ipsam et exercitationem at magni, quis, voluptates nostrum necessitatibus temporibus consequatur aliquam excepturi explicabo dignissimos? Numquam, quibusdam. Impedit unde placeat voluptatem ab nemo qui, dicta sequi, vel pariatur rem porro odio veritatis dignissimos nesciunt aspernatur recusandae, quaerat libero assumenda nostrum. Earum esse ex ullam cum ratione soluta dolorum provident maxime maiores. Nulla hic ullam, debitis explicabo minima amet numquam voluptatibus eos culpa recusandae cum magnam ducimus cupiditate labore doloribus facere! Impedit architecto nostrum molestias distinctio quo aperiam omnis cumque expedita, exercitationem ea illum earum commodi veniam soluta quis sint, dignissimos iste ut hic officia quidem ratione pariatur? Voluptatibus aliquam enim distinctio culpa natus placeat similique ipsam voluptatum recusandae perferendis, totam commodi quaerat impedit asperiores. Ad, ipsa beatae obcaecati amet tempora, numquam eius asperiores quisquam dolorum laborum, nobis distinctio? Enim voluptas excepturi, quas beatae quidem doloribus, sed numquam velit cum magni reprehenderit. Recusandae ipsa quisquam fugiat vitae incidunt labore iusto rerum non fuga! Culpa praesentium nam explicabo veritatis tempore, inventore quod suscipit distinctio nihil cum voluptatibus voluptatem iste officia tenetur doloribus impedit quisquam est tempora molestias omnis nostrum! Illo fuga odio non labore minima dolor? Fugit, natus magnam?"})]})}},{path:"/commits",component:function(e){var t=e.location,n=Object(u.useContext)(m),a=n.state,c=n.actions;Object(u.useEffect)((function(){c.fetch("commits",i.COMMITS,[a.provider.name])}),[t.key,a.provider.name]);var r=(a.pages.commits.entries||[]).map((function(e){return{date:e.date,sha:e.sha,url:e.url,message:e.message,repo:{name:e.repo.fullName,url:e.repo.url}}}));return Object(d.jsx)(A,{commits:r})}},{path:"/repos",component:function(e){var t=e.location,n=Object(u.useContext)(m),a=n.state,c=n.actions;Object(u.useEffect)((function(){c.fetch("repos",i.REPOS,[a.provider.name])}),[t.key,a.provider.name]);var r=(a.pages.repos.entries||[]).map((function(e){return{name:e.simple.name,url:e.simple.url,language:e.language,description:null===e.description?void 0:e.description,organization:null===e.organization?void 0:e.organization,createdAt:e.createdAt,updatedAt:e.updatedAt,stars:e.stars}}));return Object(d.jsx)(T,{repos:r})}},{path:"/assignments",component:function(e){var t=e.location,n=Object(u.useContext)(m),a=n.state,c=n.actions;Object(u.useEffect)((function(){c.fetch("assignments",i.ASSIGNMENTS,[a.provider.name])}),[t.key,a.provider.name]);var r=(a.pages.assignments.entries||[]).map((function(e){return{title:e.title,body:e.body,repo:{name:e.repo.fullName,url:e.repo.url},author:{name:e.author.name,avatar:e.author.avatar,url:e.author.url}}}));return Object(d.jsx)(k,{assignments:r})}}];function G(){return Object(d.jsxs)(N.c,{children:[I.map((function(e,t){return Object(d.jsx)(N.a,{exact:!0,path:e.path,render:function(t){return Object(d.jsx)(e.component,Object(o.a)(Object(o.a)({},t),{},{routes:e.routes}))}},t)})),Object(d.jsx)(N.a,{component:w})]})}n(34),n(35);function F(){var e=(new Date).getFullYear(),t=Object(u.useMemo)((function(){var t=2021;return e>t?"".concat(t,"-").concat(e):t.toString()}),[e]);return Object(d.jsx)("footer",{children:Object(d.jsxs)("span",{children:["\xa9 Copyright ",t," Cristian Pela"]})})}function D(){return Object(d.jsxs)(b.a,{children:[Object(d.jsx)("header",{children:Object(d.jsx)(y,{})}),Object(d.jsxs)("main",{children:[Object(d.jsx)("section",{children:Object(d.jsx)(G,{})}),Object(d.jsx)(F,{})]}),Object(d.jsx)(q,{})]})}n(36);function P(e){var t=e.isLoading,n=e.error,i=e.onRetry,a=e.onCancel;return Object(d.jsx)("div",{className:"splash-container",children:t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Waking up the server"}),Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"})}),Object(d.jsx)("button",{onClick:a,children:"Cancel"})]}):Object(d.jsxs)("div",{children:[n," ",Object(d.jsx)("button",{onClick:i,children:"Retry"})," "]})})}function z(){var e=Object(u.useContext)(m).actions,t=Object(u.useContext)(v);return Object(u.useEffect)((function(){e.fetch("ping",i.READY)}),[]),Object(d.jsx)(P,Object(o.a)({},t))}function B(){var e=Object(u.useContext)(m).state;return Object(d.jsx)(d.Fragment,{children:e.ready?Object(d.jsx)(D,{}):Object(d.jsx)(z,{})})}P.defaultProps={onCancel:function(){},onRetry:function(){},error:null,isLoading:!1};var H=function(){return Object(d.jsx)(j,{children:Object(d.jsxs)(g,{children:[Object(d.jsx)(B,{}),Object(d.jsx)(L,{})]})})};r.a.render(Object(d.jsx)(H,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.9ef6eaa4.chunk.js.map
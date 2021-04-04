(this["webpackJsonpmy-git-feed-client"]=this["webpackJsonpmy-git-feed-client"]||[]).push([[0],{17:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var i,a,c=n(18),r=n.n(c),s=(n(24),n(5)),o=n(2),u=n(1);!function(e){e.LOADING="loading",e.FETCH="fetch",e.USER="user",e.SELECTED="selected",e.ASSIGNMENTS="assignments",e.COMMITS="commits",e.REPOS="repos",e.READY="ready",e.NONE=""}(i||(i={})),function(e){e[e.home=0]="home",e[e.assignments=1]="assignments",e[e.commits=2]="commits",e[e.repos=3]="repos"}(a||(a={}));var l={fetch:{loading:!1,call:{name:null,args:[],stateActionType:i.NONE}},ready:!1,provider:{name:"Github",user:{name:"",avatar:null,link:"",provider:"Github"}},pages:{selected:a.home,home:{},assignments:{},commits:{},repos:{}}},m=n(0),d=Object(u.createContext)({state:l,actions:{loading:function(){},fetch:function(){},select:function(){},dispatch:function(){}}}),j=function(e){var t=e.children,n=Object(u.useReducer)((function(e,t){switch(t.type){case i.READY:return Object(o.a)(Object(o.a)({},e),{},{ready:!0});case i.LOADING:return Object(o.a)(Object(o.a)({},e),{},{fetch:Object(o.a)(Object(o.a)({},e.fetch),{},{loading:t.payload})});case i.FETCH:return Object(o.a)(Object(o.a)({},e),{},{fetch:Object(o.a)(Object(o.a)({},e.fetch),{},{call:t.payload})});case i.USER:var n;return Object(o.a)(Object(o.a)({},e),{},{provider:{name:null===(n=t.payload)||void 0===n?void 0:n.provider,user:t.payload}});case i.SELECTED:return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{selected:t.payload})});case i.ASSIGNMENTS:return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{assignments:t.payload})});case i.COMMITS:return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{commits:t.payload})});case i.REPOS:return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{repos:t.payload})});default:return e}}),l),a=Object(s.a)(n,2),c=a[0],r=a[1],j={loading:function(e){r({type:i.LOADING,payload:e})},select:function(e){return r({type:i.SELECTED,payload:e})},fetch:function(e,t,n){r({type:i.FETCH,payload:{name:"".concat(e,"#").concat(1e7*Math.random()),args:n||[],stateActionType:t}})},dispatch:function(e,t){r({type:e,payload:t})}};return Object(m.jsxs)(d.Provider,{value:{state:c,actions:j},children:[" ",t," "]})},p=n(9),b=(n(26),function(e){var t=e.error,n=e.onRetry,i=e.onClose;return Object(m.jsxs)("div",{className:"error-box",children:[Object(m.jsx)("svg",{onClick:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),Object(m.jsx)("p",{children:t}),Object(m.jsx)("a",{onClick:n,children:"Retry"})]})}),O=function(){return Object(m.jsx)("div",{className:"loading-spinner"})};function h(e){var t=e.isLoading,n=e.error,i=e.onRetry,a=Object(u.useState)(!t&&null!==n),c=Object(s.a)(a,2),r=(c[0],c[1],Object(u.useState)(!1)),o=Object(s.a)(r,2),l=o[0],d=o[1];return Object(u.useEffect)((function(){d(!t&&null!=n)}),[t,n]),Object(m.jsxs)("div",{className:"fetch-container",children:[t&&Object(m.jsx)(O,{}),l&&Object(m.jsx)(b,{error:n,onRetry:i,onClose:function(){return d(!1)}})]})}var f=function(e){var t=new AbortController,n=t.signal;return{request:fetch("".concat("https://my-git-feed.herokuapp.com").concat(e),{signal:n,headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject({message:e.error})}))})).catch((function(e){return Promise.reject(e.message)})),cancel:function(){try{t.abort()}catch(e){console.error(e)}}}},v={ping:function(){return f("/check/ping")},user:function(e){return f("/api/".concat(e,"/me"))},assignments:function(e){return f("/api/".concat(e,"/assignments"))},commits:function(e){return f("/api/".concat(e,"/commits"))},repos:function(e){return f("/api/".concat(e,"/repos"))}},x=Object(u.createContext)({isLoading:!1,error:null,onRetry:function(){},onCancel:function(){}}),g=function(e){var t=e.children,n=Object(u.useContext)(d),i=n.state,a=n.actions,c=Object(u.useState)(0),r=Object(s.a)(c,2),o=r[0],l=r[1],j=Object(u.useState)((function(){})),p=Object(s.a)(j,2),b=p[0],O=p[1],h=Object(u.useState)(null),f=Object(s.a)(h,2),g=f[0],q=f[1],y=i.fetch.call.name;Object(u.useEffect)((function(){if(null!=y){var e=y.split("#")[0];null===b||void 0===b||b.call(null),a.loading(!0),q(null);var t=v[e].call(null,i.fetch.call.args);t.request.then((function(e){var t=i.fetch.call.stateActionType;a.dispatch(t,e)})).catch(q).finally((function(){return a.loading(!1)})),O((function(){return t.cancel}))}}),[o,y]);var C={isLoading:i.fetch.loading,error:g,onRetry:function(){l(o+1)},onCancel:function(){b(),a.loading(!1),q("Canceled")}};return Object(m.jsxs)(x.Provider,{value:C,children:[" ",t," "]})};function q(){var e=Object(u.useContext)(x);return Object(m.jsx)(h,Object(o.a)({},e))}n(27);function y(e){var t=e.hasRounter,n=e.provider,i=e.onSelect,a=t?p.a:u.Fragment;return Object(m.jsx)(a,{children:Object(m.jsxs)("nav",{children:[Object(m.jsxs)("div",{className:"user",children:[n.user.avatar?Object(m.jsx)("img",{src:n.user.avatar}):Object(m.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{strokeLinecap:"round",stroke:"white",strokeLinejoin:"round",strokeWidth:"1",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),Object(m.jsx)("div",{className:"provider",children:n.name}),Object(m.jsx)("a",{href:n.user.link,children:n.user.name})]}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(p.b,{to:"/",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(p.b,{to:"/assignments",children:"Assignments"})}),Object(m.jsx)("li",{children:Object(m.jsx)(p.b,{to:"/repos",children:"Repos"})}),Object(m.jsx)("li",{children:Object(m.jsx)(p.b,{to:"/commits",children:"Commits"})})]}),Object(m.jsx)("div",{className:"providers",children:Object(m.jsxs)("select",{value:n.name,onChange:function(e){i(e.target.value)},children:[Object(m.jsx)("option",{value:"Github",children:"Github"}),Object(m.jsx)("option",{value:"Gitlab",children:"Gitlab"}),Object(m.jsx)("option",{value:"Bitbucket",children:"Bitbucket"})]})})]})})}function C(){var e=Object(u.useContext)(d),t=e.state,n=e.actions,a=Object(u.useState)(t.provider.name),c=Object(s.a)(a,2),r=c[0],o=c[1];return Object(u.useEffect)((function(){n.fetch("user",i.USER,[r])}),[r]),Object(m.jsx)(y,{provider:t.provider,onSelect:o,hasRounter:!1})}C.defaultProps={hasRounter:!1};var N=n(3);function E(e){return Object(m.jsx)("div",{className:"card assignment",children:e.title})}function S(e){var t=e.assignments;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Assignments"}),Object(m.jsx)("div",{className:"grid-container",children:t.map((function(e,t){return Object(m.jsx)(E,Object(o.a)({},e),t)}))})]})}function R(e){return new Date(e).toLocaleString()}function k(e){return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:e.repo.name}),Object(m.jsxs)("div",{children:[" ",e.sha," "]}),Object(m.jsxs)("div",{children:[" ",R(e.date)]})]}),Object(m.jsx)("div",{children:e.message||"No message"})]})}function w(e){var t=e.commits;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Commits"}),Object(m.jsx)("div",{className:"grid-container",children:t.map((function(e,t){return Object(m.jsx)(k,Object(o.a)({},e),e.sha)}))})]})}function A(){return Object(m.jsx)("h2",{children:"Not found"})}n(17);function L(e){var t=Object(u.useMemo)((function(){return R(e.createdAt)}),[e.createdAt]),n=Object(u.useMemo)((function(){return R(e.updatedAt)}),[e.updatedAt]);return Object(m.jsxs)("div",{className:"card repo",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("a",{href:e.url,children:e.name}),Object(m.jsx)("div",{children:e.language}),Object(m.jsx)("div",{children:e.stars})]}),Object(m.jsx)("div",{children:e.description||"No description"}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:["Created: ",t]}),Object(m.jsxs)("div",{children:["Updated: ",n]})]})]})}function M(e){var t=e.repos;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Owned repositories"}),Object(m.jsx)("div",{className:"grid-container",children:t.map((function(e){return Object(m.jsx)(L,Object(o.a)({},e),e.name)}))})]})}var I=[{path:"/",component:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"My Git Feed"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, saepe ut veritatis tempora ipsam et exercitationem at magni, quis, voluptates nostrum necessitatibus temporibus consequatur aliquam excepturi explicabo dignissimos? Numquam, quibusdam. Impedit unde placeat voluptatem ab nemo qui, dicta sequi, vel pariatur rem porro odio veritatis dignissimos nesciunt aspernatur recusandae, quaerat libero assumenda nostrum. Earum esse ex ullam cum ratione soluta dolorum provident maxime maiores. Nulla hic ullam, debitis explicabo minima amet numquam voluptatibus eos culpa recusandae cum magnam ducimus cupiditate labore doloribus facere! Impedit architecto nostrum molestias distinctio quo aperiam omnis cumque expedita, exercitationem ea illum earum commodi veniam soluta quis sint, dignissimos iste ut hic officia quidem ratione pariatur? Voluptatibus aliquam enim distinctio culpa natus placeat similique ipsam voluptatum recusandae perferendis, totam commodi quaerat impedit asperiores. Ad, ipsa beatae obcaecati amet tempora, numquam eius asperiores quisquam dolorum laborum, nobis distinctio? Enim voluptas excepturi, quas beatae quidem doloribus, sed numquam velit cum magni reprehenderit. Recusandae ipsa quisquam fugiat vitae incidunt labore iusto rerum non fuga! Culpa praesentium nam explicabo veritatis tempore, inventore quod suscipit distinctio nihil cum voluptatibus voluptatem iste officia tenetur doloribus impedit quisquam est tempora molestias omnis nostrum! Illo fuga odio non labore minima dolor? Fugit, natus magnam?"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, saepe ut veritatis tempora ipsam et exercitationem at magni, quis, voluptates nostrum necessitatibus temporibus consequatur aliquam excepturi explicabo dignissimos? Numquam, quibusdam. Impedit unde placeat voluptatem ab nemo qui, dicta sequi, vel pariatur rem porro odio veritatis dignissimos nesciunt aspernatur recusandae, quaerat libero assumenda nostrum. Earum esse ex ullam cum ratione soluta dolorum provident maxime maiores. Nulla hic ullam, debitis explicabo minima amet numquam voluptatibus eos culpa recusandae cum magnam ducimus cupiditate labore doloribus facere! Impedit architecto nostrum molestias distinctio quo aperiam omnis cumque expedita, exercitationem ea illum earum commodi veniam soluta quis sint, dignissimos iste ut hic officia quidem ratione pariatur? Voluptatibus aliquam enim distinctio culpa natus placeat similique ipsam voluptatum recusandae perferendis, totam commodi quaerat impedit asperiores. Ad, ipsa beatae obcaecati amet tempora, numquam eius asperiores quisquam dolorum laborum, nobis distinctio? Enim voluptas excepturi, quas beatae quidem doloribus, sed numquam velit cum magni reprehenderit. Recusandae ipsa quisquam fugiat vitae incidunt labore iusto rerum non fuga! Culpa praesentium nam explicabo veritatis tempore, inventore quod suscipit distinctio nihil cum voluptatibus voluptatem iste officia tenetur doloribus impedit quisquam est tempora molestias omnis nostrum! Illo fuga odio non labore minima dolor? Fugit, natus magnam?"})]})}},{path:"/commits",component:function(e){var t=e.location,n=Object(u.useContext)(d),a=n.state,c=n.actions;Object(u.useEffect)((function(){c.fetch("commits",i.COMMITS,[a.provider.name])}),[t.key,a.provider.name]);var r=(a.pages.commits.entries||[]).map((function(e){return{date:e.date,sha:e.sha,url:e.url,message:e.message,repo:{name:e.repo.fullName,url:e.repo.url}}}));return Object(m.jsx)(w,{commits:r})}},{path:"/repos",component:function(e){var t=e.location,n=Object(u.useContext)(d),a=n.state,c=n.actions;Object(u.useEffect)((function(){c.fetch("repos",i.REPOS,[a.provider.name])}),[t.key,a.provider.name]);var r=(a.pages.repos.entries||[]).map((function(e){return{name:e.simple.name,url:e.simple.url,language:e.language,description:null===e.description?void 0:e.description,organization:null===e.organization?void 0:e.organization,createdAt:e.createdAt,updatedAt:e.updatedAt,stars:e.stars}}));return Object(m.jsx)(M,{repos:r})}},{path:"/assignments",component:function(e){var t=e.location,n=Object(u.useContext)(d),a=n.state,c=n.actions;Object(u.useEffect)((function(){c.fetch("assignments",i.ASSIGNMENTS,[a.provider.name])}),[t.key,a.provider.name]);var r=(a.pages.assignments.entries||[]).map((function(e){return{title:e.title,body:e.body,repo:{name:e.repo.fullName,url:e.repo.url},author:{name:e.author.name,avatar:e.author.avatar,url:e.author.url}}}));return Object(m.jsx)(S,{assignments:r})}}];function T(){return Object(m.jsx)("div",{style:{minHeight:"72vh",width:"100%"},children:Object(m.jsxs)(N.c,{children:[I.map((function(e,t){return Object(m.jsx)(N.a,{exact:!0,path:e.path,render:function(t){return Object(m.jsx)(e.component,Object(o.a)(Object(o.a)({},t),{},{routes:e.routes}))}},t)})),Object(m.jsx)(N.a,{component:A})]})})}n(33),n(34);function G(){var e=(new Date).getFullYear(),t=Object(u.useMemo)((function(){var t=2021;return e>t?"".concat(t,"-").concat(e):t.toString()}),[e]);return Object(m.jsx)("footer",{children:Object(m.jsxs)("span",{children:["\xa9 Copyright ",t," Cristian Pela"]})})}function D(){return Object(m.jsx)(p.a,{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(C,{}),Object(m.jsxs)("div",{className:"nav-content",children:[Object(m.jsx)(T,{}),Object(m.jsx)(G,{})]}),Object(m.jsx)(q,{})]})})}n(35);function F(e){var t=e.isLoading,n=e.error,i=e.onRetry,a=e.onCancel;return Object(m.jsx)("div",{className:"splash-container",children:t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Waking up the server"}),Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"})}),Object(m.jsx)("button",{onClick:a,children:"Cancel"})]}):Object(m.jsxs)("div",{children:[n," ",Object(m.jsx)("button",{onClick:i,children:"Retry"})," "]})})}function z(){var e=Object(u.useContext)(d).actions,t=Object(u.useContext)(x);return Object(u.useEffect)((function(){e.fetch("ping",i.READY)}),[]),Object(m.jsx)(F,Object(o.a)({},t))}function P(){var e=Object(u.useContext)(d).state;return Object(m.jsx)(m.Fragment,{children:e.ready?Object(m.jsx)(D,{}):Object(m.jsx)(z,{})})}F.defaultProps={onCancel:function(){},onRetry:function(){},error:null,isLoading:!1};var B=function(){return Object(m.jsx)(j,{children:Object(m.jsx)(g,{children:Object(m.jsx)(P,{})})})};r.a.render(Object(m.jsx)(B,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.bee4b9fd.chunk.js.map
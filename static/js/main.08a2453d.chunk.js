(this["webpackJsonpmy-git-feed-client"]=this["webpackJsonpmy-git-feed-client"]||[]).push([[0],{17:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c,r,a=n(18),s=n.n(a),i=(n(24),n(5)),o=n(2),j=n(1);!function(e){e.LOADING="loading",e.FETCH="fetch",e.USER="user",e.SELECTED="selected",e.ASSIGNMENTS="assignments",e.COMMITS="commits",e.REPOS="repos",e.READY="ready",e.NONE=""}(c||(c={})),function(e){e[e.home=0]="home",e[e.assignments=1]="assignments",e[e.commits=2]="commits",e[e.repos=3]="repos"}(r||(r={}));var l={fetch:{loading:!1,call:{name:null,args:[],stateActionType:c.NONE}},ready:!1,provider:{name:"Github",user:{name:"",avatar:null,link:"",provider:"Github"}},pages:{selected:r.home,home:{},assignments:{},commits:{},repos:{}}},u=n(0),d=Object(j.createContext)({state:l,actions:{loading:function(){},fetch:function(){},select:function(){},dispatch:function(){}}}),b=function(e){var t=e.children,n=Object(j.useReducer)((function(e,t){switch(t.type){case c.READY:return Object(o.a)(Object(o.a)({},e),{},{ready:!0});case c.LOADING:return Object(o.a)(Object(o.a)({},e),{},{fetch:Object(o.a)(Object(o.a)({},e.fetch),{},{loading:t.payload})});case c.FETCH:return Object(o.a)(Object(o.a)({},e),{},{fetch:Object(o.a)(Object(o.a)({},e.fetch),{},{call:t.payload})});case c.USER:var n;return Object(o.a)(Object(o.a)({},e),{},{provider:{name:null===(n=t.payload)||void 0===n?void 0:n.provider,user:t.payload}});case c.SELECTED:return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{selected:t.payload})});case c.ASSIGNMENTS:return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{assignments:t.payload})});case c.COMMITS:return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{commits:t.payload})});case c.REPOS:return Object(o.a)(Object(o.a)({},e),{},{pages:Object(o.a)(Object(o.a)({},e.pages),{},{repos:t.payload})});default:return e}}),l),r=Object(i.a)(n,2),a=r[0],s=r[1],b={loading:function(e){s({type:c.LOADING,payload:e})},select:function(e){return s({type:c.SELECTED,payload:e})},fetch:function(e,t,n){s({type:c.FETCH,payload:{name:"".concat(e,"#").concat(1e7*Math.random()),args:n||[],stateActionType:t}})},dispatch:function(e,t){s({type:e,payload:t})}};return Object(u.jsxs)(d.Provider,{value:{state:a,actions:b},children:[" ",t," "]})},O=n(9),h=(n(26),function(e){var t=e.error,n=e.onRetry,c=e.onClose;return Object(u.jsxs)("div",{className:"error-box",children:[Object(u.jsx)("svg",{onClick:c,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),Object(u.jsx)("p",{children:t}),Object(u.jsx)("a",{onClick:n,children:"Retry"})]})}),p=function(){return Object(u.jsx)("div",{className:"loading-spinner"})};function f(e){var t=e.isLoading,n=e.error,c=e.onRetry,r=Object(j.useState)(!t&&null!==n),a=Object(i.a)(r,2),s=(a[0],a[1],Object(j.useState)(!1)),o=Object(i.a)(s,2),l=o[0],d=o[1];return Object(j.useEffect)((function(){d(!t&&null!=n)}),[t,n]),Object(u.jsxs)("div",{className:"fetch-container",children:[t&&Object(u.jsx)(p,{}),l&&Object(u.jsx)(h,{error:n,onRetry:c,onClose:function(){return d(!1)}})]})}var m=function(e){var t=new AbortController,n=t.signal;return{request:fetch("".concat("https://my-git-feed.herokuapp.com").concat(e),{signal:n,headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject({message:e.error})}))})).catch((function(e){return Promise.reject(e.message)})),cancel:function(){try{t.abort()}catch(e){console.error(e)}}}},x={ping:function(){return m("/check/ping")},user:function(e){return m("/api/".concat(e,"/me"))},assignments:function(e){return m("/api/".concat(e,"/assignments"))},commits:function(e){return m("/api/".concat(e,"/commits"))},repos:function(e){return m("/api/".concat(e,"/repos"))}},v=Object(j.createContext)({isLoading:!1,error:null,onRetry:function(){},onCancel:function(){}}),g=function(e){var t=e.children,n=Object(j.useContext)(d),c=n.state,r=n.actions,a=Object(j.useState)(0),s=Object(i.a)(a,2),o=s[0],l=s[1],b=Object(j.useState)((function(){})),O=Object(i.a)(b,2),h=O[0],p=O[1],f=Object(j.useState)(null),m=Object(i.a)(f,2),g=m[0],y=m[1],C=c.fetch.call.name;Object(j.useEffect)((function(){if(null!=C){var e=C.split("#")[0];null===h||void 0===h||h.call(null),r.loading(!0),y(null);var t=x[e].call(null,c.fetch.call.args);t.request.then((function(e){var t=c.fetch.call.stateActionType;r.dispatch(t,e)})).catch(y).finally((function(){return r.loading(!1)})),p((function(){return t.cancel}))}}),[o,C]);var E={isLoading:c.fetch.loading,error:g,onRetry:function(){l(o+1)},onCancel:function(){h(),r.loading(!1),y("Canceled")}};return Object(u.jsxs)(v.Provider,{value:E,children:[" ",t," "]})};function y(){var e=Object(j.useContext)(v);return Object(u.jsx)(f,Object(o.a)({},e))}n(27);function C(e){var t=e.hasRounter,n=e.provider,c=e.onSelect,r=t?O.a:j.Fragment;return Object(u.jsx)(r,{children:Object(u.jsxs)("nav",{children:[Object(u.jsxs)("div",{className:"user",children:[n.user.avatar?Object(u.jsx)("img",{src:n.user.avatar}):Object(u.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{strokeLinecap:"round",stroke:"white",strokeLinejoin:"round",strokeWidth:"1",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),Object(u.jsx)("div",{className:"provider",children:n.name}),Object(u.jsx)("a",{href:n.user.link,children:n.user.name})]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(O.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.b,{to:"/assignments",children:"Assignments"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.b,{to:"/repos",children:"Repos"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.b,{to:"/commits",children:"Commits"})})]}),Object(u.jsx)("div",{className:"providers",children:Object(u.jsxs)("select",{value:n.name,onChange:function(e){c(e.target.value)},children:[Object(u.jsx)("option",{value:"Github",children:"Github"}),Object(u.jsx)("option",{value:"Gitlab",children:"Gitlab"}),Object(u.jsx)("option",{value:"Bitbucket",children:"Bitbucket"})]})})]})})}function E(){var e=Object(j.useContext)(d),t=e.state,n=e.actions,r=Object(j.useState)(t.provider.name),a=Object(i.a)(r,2),s=a[0],o=a[1];return Object(j.useEffect)((function(){n.fetch("user",c.USER,[s])}),[s]),Object(u.jsx)(C,{provider:t.provider,onSelect:o,hasRounter:!1})}E.defaultProps={hasRounter:!1};var S=n(3);var N=function(){return Object(u.jsx)("div",{children:"Home"})};n(17);function k(e){return new Date(e).toLocaleString()}function R(e){var t=Object(j.useMemo)((function(){return k(e.createdAt)}),[e.createdAt]),n=Object(j.useMemo)((function(){return k(e.updatedAt)}),[e.updatedAt]);return Object(u.jsxs)("div",{className:"repo",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{href:e.url,children:e.name}),Object(u.jsx)("div",{children:e.language}),Object(u.jsx)("div",{children:e.stars})]}),Object(u.jsx)("div",{children:e.description||"No description"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:["Created: ",t]}),Object(u.jsxs)("div",{children:["Updated: ",n]})]})]})}function w(e){var t=e.repos;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Owned repositories"}),Object(u.jsx)("div",{className:"repos",children:t.map((function(e){return Object(u.jsx)(R,Object(o.a)({},e),e.name)}))})]})}var A=[{path:"/",component:N},{path:"/commits",component:function(e){var t=e.location,n=Object(j.useContext)(d),r=n.state,a=n.actions;return Object(j.useEffect)((function(){a.fetch("commits",c.COMMITS,[r.provider.name])}),[t.key,r.provider.name]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Commits"}),Object(u.jsx)("p",{children:JSON.stringify(r.pages.commits)})]})}},{path:"/repos",component:function(e){var t=e.location,n=Object(j.useContext)(d),r=n.state,a=n.actions;Object(j.useEffect)((function(){a.fetch("repos",c.REPOS,[r.provider.name])}),[t.key,r.provider.name]);var s=(r.pages.repos.entries||[]).map((function(e){return{name:e.simple.name,url:e.simple.url,language:e.language,description:null===e.description?void 0:e.description,organization:null===e.organization?void 0:e.organization,createdAt:e.createdAt,updatedAt:e.updatedAt,stars:e.stars}}));return Object(u.jsx)(w,{repos:s})}},{path:"/assignments",component:function(e){var t=e.location,n=Object(j.useContext)(d),r=n.state,a=n.actions;return Object(j.useEffect)((function(){a.fetch("assignments",c.ASSIGNMENTS,[r.provider.name])}),[t.key,r.provider.name]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Assignments"}),Object(u.jsx)("p",{children:JSON.stringify(r.pages.assignments)})]})}}];function L(){return Object(u.jsx)(S.c,{children:A.map((function(e,t){return Object(u.jsx)(S.a,{exact:!0,path:e.path,render:function(t){return Object(u.jsx)(e.component,Object(o.a)(Object(o.a)({},t),{},{routes:e.routes}))}},t)}))})}n(33);function M(){return Object(u.jsx)(O.a,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(E,{}),Object(u.jsx)("div",{className:"nav-content",children:Object(u.jsx)(L,{})}),Object(u.jsx)(y,{})]})})}n(34);function T(e){var t=e.isLoading,n=e.error,c=e.onRetry,r=e.onCancel;return Object(u.jsx)("div",{className:"splash-container",children:t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Waking up the server"}),Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"})}),Object(u.jsx)("button",{onClick:r,children:"Cancel"})]}):Object(u.jsxs)("div",{children:[n," ",Object(u.jsx)("button",{onClick:c,children:"Retry"})," "]})})}function G(){var e=Object(j.useContext)(d).actions,t=Object(j.useContext)(v);return Object(j.useEffect)((function(){e.fetch("ping",c.READY)}),[]),Object(u.jsx)(T,Object(o.a)({},t))}function z(){var e=Object(j.useContext)(d).state;return Object(u.jsx)(u.Fragment,{children:e.ready?Object(u.jsx)(M,{}):Object(u.jsx)(G,{})})}T.defaultProps={onCancel:function(){},onRetry:function(){},error:null,isLoading:!1};var D=function(){return Object(u.jsx)(b,{children:Object(u.jsx)(g,{children:Object(u.jsx)(z,{})})})};s.a.render(Object(u.jsx)(D,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.08a2453d.chunk.js.map
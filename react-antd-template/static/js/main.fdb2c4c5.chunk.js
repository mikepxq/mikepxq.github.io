(this["webpackJsonpreact-antd-template"]=this["webpackJsonpreact-antd-template"]||[]).push([[3],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=.5},122:function(e,t,n){"use strict";var r=n(44),a=n(74),c=n(42),o=n(90),i=Object(r.b)({user:c.a,consoleLayout:o.a}),u=Object(a.a)({reducer:function(e,t){return"RESET_STORE"==t.type&&(e=void 0),i(e,t)}});t.a=u},130:function(e,t,n){"use strict";n.d(t,"h",(function(){return h})),n.d(t,"k",(function(){return O})),n.d(t,"e",(function(){return v})),n.d(t,"g",(function(){return x})),n.d(t,"f",(function(){return g})),n.d(t,"i",(function(){return k})),n.d(t,"j",(function(){return y})),n.d(t,"l",(function(){return C})),n.d(t,"m",(function(){return w})),n.d(t,"a",(function(){return N})),n.d(t,"d",(function(){return S})),n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return I}));var r=n(25),a=n.n(r),c=n(38),o=n(17),i=n(145),u=n(102),s=n(95),l=n(186),d=n.n(l),f=n(55),b={400:function(e){f.a.error(e.message||"\u7528\u6237\u5931\u6548\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55\uff01")}},j=function(e){return Object.keys(b).includes(String(e.code))&&b[e.code](e),e},m=d.a.create({baseURL:"",timeout:1e4});m.interceptors.request.use((function(e){return Object(o.a)(Object(o.a)({},e),{},{token:localStorage.getItem("token")||""})})),m.interceptors.response.use(function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i.c.mockApi.test(t.config.url||"")){e.next=3;break}return e.next=3,Object(s.d)(u.a);case 3:return e.abrupt("return",j(t.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return console.log("err :>> ",e),j({code:7e3,message:"\u7f51\u7edc\u9519\u8bef",data:void 0})}));var p=function(e,t){return m({url:e,method:"post",data:t})},h=function(){return m({url:"/mock/api/role/option-list",method:"get",params:e});var e},O=function(e){return p("/mock/api/user/info",e)},v=function(e){return p("/mock/api/user/login",e)},x=function(e){return p("/mock/api/role/list",e)},g=function(e){return p("/mock/api/role/create",e)},k=function(e){return p("/mock/api/role/update",e)},y=function(e){return p("/mock/api/user/create",e)},C=function(e){return p("/mock/api/user/list",e)},w=function(e){return p("/mock/api/user/update",e)},N=function(e){return p("/mock/api/article/create",e)},S=function(e){return p("/mock/api/article/update",e)},E=function(e){return p("/mock/api/article/list",e)},I=function(e){return p("/mock/api/article/info",e)}},143:function(e,t,n){"use strict";var r=n(17),a=n(304),c=(n(0),n(6));t.a=function(e){var t=e.className,n=void 0===t?"":t,o=e.onChange,i=e.autoComplete,u=e.name;return Object(c.jsxs)(c.Fragment,{children:["off"==i&&Object(c.jsx)("input",{tabIndex:-1,name:u,style:{position:"fixed",top:-100}}),Object(c.jsx)(a.a,Object(r.a)(Object(r.a)({},e),{},{className:n,onChange:function(e){e.target.value=e.target.value.trim(),o&&o(e)}}))]})}},144:function(e,t,n){"use strict";var r=n(293),a=(n(0),n(6));t.a=function(e){var t=e.className,n=void 0===t?"":t;return Object(a.jsx)(r.a,{size:"large",className:"position-center ".concat(n)})}},145:function(e,t,n){"use strict";n.d(t,"c",(function(){return c}));n(147);var r=n(102);n.d(t,"a",(function(){return r.a}));var a=n(148);n.d(t,"b",(function(){return a.a}));var c={mockApi:/^\/mock/,alpha_number_:/^[\u4e00-\u9fa5a-zA-Z0-9_]$/,appVersion:/^(\d+\.)+\d+$/}},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.filter((function(e){return void 0===e.isAuth?n.isAuth:e.isAuth})).map((function(t){var r={isAuth:void 0===t.isAuth?n.isAuth:t.isAuth,key:t.path,title:t.title||t.name||""};return t.children&&(r.children=e(t.children,r)),r}))}},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)\n\n# Awesome Editor!\n\nIt has been _released as opensource in 2018_ and has ~~continually~~ evolved to **receive 10k GitHub \u2b50\ufe0f Stars**.\n\n## Create Instance\n\nYou can create an instance with the following code and use `getHtml()` and `getMarkdown()` of the [Editor](https://github.com/nhn/tui.editor).\n\n```js\nconst editor = new Editor(options);\n```\n\n> See the table below for default options\n> > More API information can be found in the document\n\n| name | type | description |\n| --- | --- | --- |\n| el | `HTMLElement` | container element |\n\n## Features\n\n* CommonMark + GFM Specifications\n   * Live Preview\n   * Scroll Sync\n   * Auto Indent\n   * Syntax Highlight\n        1. Markdown\n        2. Preview\n\n## Support Wrappers\n\n> * Wrappers\n>    1. [x] React\n>    2. [x] Vue\n>    3. [ ] Ember"},196:function(e,t,n){},221:function(e,t,n){},292:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);var r=n(22),a=n(0),c=n(24),o=n.n(c),i=(n(196),n(25)),u=n.n(i),s=n(38),l=n(40),d=n(23),f=n(42),b=n(54),j=n.n(b),m=n(6),p=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e;n||null===(e=document.getElementById("init"))||void 0===e||e.classList.remove("initEnd")}),[n]),Object(a.useEffect)((function(){return j.a.start(),c(!1),function(){var e;j.a.done(),null===(e=document.getElementById("init"))||void 0===e||e.classList.add("initEnd")}}),[]),o.a.createPortal(Object(m.jsx)("div",{className:"init",children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h1",{children:"\u7cfb\u7edf\u51c6\u5907\u4e2d\u2026\u2026"}),Object(m.jsx)("p",{children:"mock api \u7761\u7720\u65f6\u95f4 1.5s"})]})}),document.body)},h=function(){var e=Object(l.g)().routeList,t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],o=n[1],i=Object(f.b)(),b=Object(f.c)().fetchUserInfo,j=function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.token){e.next=2;break}return e.abrupt("return",o(!0));case 2:return e.next=4,b({id:i.id});case 4:o(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){j()}),[]),Object(a.useEffect)((function(){var e;c&&(null===(e=document.getElementById("init"))||void 0===e||e.classList.add("initEnd"))}),[c]),Object(m.jsx)(m.Fragment,{children:c&&Object(m.jsx)(a.Suspense,{fallback:Object(m.jsx)(p,{}),children:Object(m.jsx)(d.b,{history:l.b,children:Object(m.jsx)(l.c,{routes:e,className:"m-page"})})})})},O=function(e){e&&e instanceof Function&&n.e(25).then(n.bind(null,386)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},v=n(91),x=n(122),g=n(14),k=n(189),y=n.n(k),C=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),c=t[0],o=t[1];return Object(a.useEffect)((function(){Promise.all([n.e(24),n.e(21)]).then(n.bind(null,392)).then((function(){return o(!0)}))}),[]),Object(m.jsx)(m.Fragment,{children:c&&Object(m.jsx)(h,{})})};o.a.render(Object(m.jsx)(g.a,{locale:y.a,children:Object(m.jsx)(v.a,{store:x.a,children:Object(m.jsx)(l.a,{children:Object(m.jsx)(C,{})})})}),document.getElementById("app")),O()},40:function(e,t,n){"use strict";n.d(t,"f",(function(){return de})),n.d(t,"e",(function(){return fe})),n.d(t,"d",(function(){return be})),n.d(t,"a",(function(){return je})),n.d(t,"g",(function(){return U})),n.d(t,"h",(function(){return V})),n.d(t,"c",(function(){return R})),n.d(t,"b",(function(){return me}));var r=n(25),a=n.n(r),c=n(38),o=n(22),i=n(143),u=n(17),s=n(304),l=n(0),d=n.n(l),f=n(6),b=function(e){var t=e.className,n=void 0===t?"":t,r=e.autoComplete,a=e.name,c=e.onChange;return Object(f.jsxs)(f.Fragment,{children:["off"==r&&Object(f.jsx)("input",{tabIndex:-1,type:"password",autoComplete:r,name:a,style:{position:"fixed",top:-100}}),Object(f.jsx)(s.a.Password,Object(u.a)(Object(u.a)({},e),{},{className:n,onChange:function(e){e.target.value=e.target.value.trim(),c&&c(e)}}))]})},j=n(55),m=n(42),p=n(312),h=n(313),O=n(308),v=n(64),x=n(310),g=n(23),k=(n(221),[{username:"superAdmin",password:"superAdmin"},{username:"common",password:"common"}]),y=function(e){var t=e.className,n=O.a.useForm(),r=Object(o.a)(n,1)[0];Object(l.useEffect)((function(){r.setFieldsValue({username:k[0].username,password:k[0].password})}),[]);var u=Object(l.useState)(!1),s=Object(o.a)(u,2),d=s[0],y=s[1],C=Object(m.c)().fetchLogin,w=Object(g.f)(),N=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.validateFields().catch((function(){}));case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:if(!d){e.next=7;break}return e.abrupt("return");case 7:return y(!0),e.next=10,C(t);case 10:if(n=e.sent,y(!1),200==n.code){e.next=14;break}return e.abrupt("return",j.a.error(n.message||"\u767b\u5f55\u5931\u8d25"));case 14:j.b.success({message:"\u767b\u5f55\u6210\u529f"}),w.push("/");case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"".concat(t," login-page"),children:Object(f.jsxs)("div",{className:"form-wrap",children:[Object(f.jsx)("h1",{children:"\u7528\u6237\u767b\u5f55"}),Object(f.jsxs)(O.a,{className:"form",form:r,children:[Object(f.jsx)(O.a.Item,{name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}],children:Object(f.jsx)(i.a,{name:"username",autoComplete:"off",prefix:Object(f.jsx)(p.a,{}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"})}),Object(f.jsx)(O.a.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],children:Object(f.jsx)(b,{name:"password",autoComplete:"off",prefix:Object(f.jsx)(h.a,{}),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})}),Object(f.jsx)(O.a.Item,{children:Object(f.jsx)(v.a,{loading:d,type:"primary",style:{display:"block",width:"100%"},onClick:N,children:"\u63d0\u4ea4"})})]}),Object(f.jsxs)("footer",{children:[Object(f.jsx)("p",{children:"\u6d4b\u8bd5\u7528\u6237\u6570\u636e"}),Object(f.jsx)(x.b,{children:k.map((function(e,t){return Object(f.jsx)(v.a,{onClick:function(){r.setFieldsValue({username:e.username,password:e.password})},children:e.username},"".concat(e.password,"-").concat(t))}))})]})]})})},C=function(){return Object(f.jsx)("div",{children:"Page404"})},w=n(307),N=n(56),S=n(138),E=n(314),I=(n(292),n(87)),L=n(54),M=n.n(L),A=function(e){var t=e.to,n=Object(g.f)(),r=Object(m.b)().authList,a=H().is404;return Object(l.useEffect)((function(){return M.a.start(),a?(M.a.done(),r?n.replace("/404"):n.replace("/login")):t.redirect?(M.a.done(),n.replace(t.redirect)):void M.a.done()}),[t.path]),!t.component||a?Object(f.jsx)(f.Fragment,{}):Object(f.jsx)(t.component,Object(u.a)({},e))},R=function(e){var t,n=e.routes;return n=n||(null===(t=e.to)||void 0===t?void 0:t.children)||[],Object(f.jsx)(g.c,{children:n.map((function(t,n){return Object(f.jsx)(g.a,{path:t.path,exact:t.exact,render:function(){return Object(f.jsx)(A,{to:t,className:e.className})}},"route-".concat(n))}))})},P=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return t.forEach((function(t){var a;(t.breadCrumbRoutes=[t],t.exact=!0,r)&&(t.parent=r,t.breadCrumbRoutes=null===(a=r.breadCrumbRoutes)||void 0===a?void 0:a.concat(t.breadCrumbRoutes));if(t.children)return t.component=t.component||R,t.children=e(t.children,[],t),n.push(t),n.push(Object(u.a)(Object(u.a)({},t),{},{exact:!1,isHidden:!0,redirect:void 0,isAuth:!1,path:"".concat(t.path,"/:content"),name:"".concat(t.name,"-content")}));n.push(t)})),n},z=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.forEach((function(t){t.children&&e(t.children,n),n[t.path]=t})),n},F=function(e){var t=P(Object(I.cloneDeep)(e));return{list:t,map:z(t)}},_=d.a.createContext({}),T=d.a.createContext({}),U=function(){return d.a.useContext(_)},V=function(){return d.a.useContext(T)},H=function(){return{is404:!d.a.useContext(_).routeMap[location.pathname]}},B=function(){var e=Object(g.g)();return{currentRoute:d.a.useContext(_).routeMap[e.pathname]}},D=n(95),q=w.a.Sider,G=function(e){var t=e.collapsed,n=e.routes,r=void 0===n?[]:n,a=B().currentRoute,c=Object(l.useState)({}),i=Object(o.a)(c,2),s=i[0],d=i[1],b=Object(l.useState)([]),j=Object(o.a)(b,2),m=j[0],p=j[1];Object(l.useEffect)((function(){if(a.breadCrumbRoutes){var e=a.breadCrumbRoutes.map((function(e){return e.path}));p(e);var t={};e.forEach((function(e){return t[e]=!0})),d(Object(u.a)(Object(u.a)({},s),t))}}),[a]);var h=Object(l.useState)(),O=Object(o.a)(h,2),v=O[0],x=O[1];Object(l.useEffect)((function(){if(t)return x(void 0);x(Object(D.a)(s))}),[t,s]);var k=Object(g.f)();return Object(f.jsxs)(q,{className:"aside",trigger:null,collapsible:!0,collapsed:t,children:[Object(f.jsx)("div",{className:"logo"}),Object(f.jsx)(S.a,{className:"m-menu",theme:"dark",mode:"inline",openKeys:v,selectedKeys:m,children:function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.filter((function(e){return!e.isHidden})).map((function(n){return n.children?Object(f.jsx)(S.a.SubMenu,{icon:Object(f.jsx)(E.a,{}),title:n.title||n.name,onTitleClick:function(){d(Object(u.a)(Object(u.a)({},s),{},Object(N.a)({},n.path,!s[n.path]))),e.onChange&&e.onChange(n)},children:t(n.children)},n.path):Object(f.jsx)(S.a.Item,{icon:Object(f.jsx)(E.a,{}),onClick:function(){k.push(n.path),e.onChange&&e.onChange(n)},children:n.title||n.name},n.path)}))}(r)})]})},J=d.a.memo(G),K=n(315),W=n(90),$=n(311),Y=n(139),Z=function(e){var t=e.className,n=void 0===t?"":t,r=Object(g.g)(),a=Object(g.f)(),c=Object(W.c)().visitedList,o=Object(W.b)().setVisitedMap,i=B().currentRoute;return Object(l.useEffect)((function(){i.redirect||o({name:i.name,title:i.title,path:i.path})}),[i]),Object(f.jsxs)("nav",{className:"tag-nav ".concat(n),children:[Object(f.jsxs)($.a,{className:"item",onClick:function(){return a.goBack()},children:[Object(f.jsx)(Y.a,{})," \u8fd4\u56de"]}),Object(f.jsx)($.a,{className:"item",onClick:function(){return a.push("/home")},children:"\u9996\u9875"}),c.map((function(e,t){return Object(f.jsx)($.a,{onClick:function(){a.push(e.path)},className:"item ".concat(r.pathname==e.path?"active":""),closable:t>0,onClose:function(t){if(t.preventDefault(),o(Object(u.a)(Object(u.a)({},e),{},{isDelete:!0})),r.pathname==c[c.length-1].path)return a.push(c[c.length-2].path);r.pathname==e.path&&a.push(c[c.length-1].path)},children:e.title||e.name},"".concat(e.path))}))]})},Q=d.a.memo(Z),X=n(309),ee=function(){var e=B().currentRoute,t=Object(l.useState)([]),n=Object(o.a)(t,2),r=n[0],a=n[1];Object(l.useEffect)((function(){e.breadCrumbRoutes&&a(e.breadCrumbRoutes)}),[e]);var c=Object(g.f)();return Object(f.jsx)(X.a,{className:"bread-crumbs",children:r.map((function(e,t){return Object(f.jsx)(X.a.Item,{children:!1!==e.isLinkBreadCrumb&&r.length-1!=t?Object(f.jsx)("a",{onClick:function(){c.push(e.redirect||e.path)},children:e.title||e.name}):e.title||e.name},"".concat(e.path,"-index"))}))})},te=n(122),ne=n(152),re=n(305),ae=n(46),ce=[{title:"\u9000\u51fa",onclick:function(){te.a.dispatch({type:"RESET_STORE"}),localStorage.clear(),me.replace("/login"),j.b.success({message:"\u9000\u51fa\u6210\u529f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55\uff01"})}}],oe=function(e){var t=e.className,n=void 0===t?"":t,r=Object(m.b)(),a=Object(f.jsx)(S.a,{children:ce.map((function(e){return Object(f.jsx)(S.a.Item,{onClick:e.onclick,children:e.to?Object(f.jsx)(ae.a,{to:e.to,children:e.title}):e.title},e.title)}))});return Object(f.jsx)("div",{className:n,children:Object(f.jsx)(re.a,{overlay:a,trigger:["click"],children:Object(f.jsxs)("a",{children:["\u7528\u6237",r.username," ",Object(f.jsx)(ne.a,{})]})})})},ie=function(e){var t=e.collapsed,n=e.onChangeCollapsed,r=e.className,a=void 0===r?"":r;return Object(f.jsxs)("header",{className:"header ".concat(a),children:[Object(f.jsxs)("section",{className:"top-nav",children:[Object(f.jsxs)("div",{className:"left",children:[Object(f.jsx)(K.a,{className:"icon ".concat(t?"collapsed":""),onClick:function(){n&&n(!t)}}),Object(f.jsx)(ee,{})]}),Object(f.jsx)("div",{className:"right",children:Object(f.jsx)(oe,{})})]}),Object(f.jsx)(Q,{})]})},ue=n(144),se=function(e){var t,n,r=e.className,a=void 0===r?"":r,c=Object(l.useState)(!1),i=Object(o.a)(c,2),u=i[0],s=i[1];return Object(f.jsxs)(w.a,{className:"layout ".concat(a),children:[Object(f.jsx)(J,{collapsed:u,routes:null===(t=e.to)||void 0===t?void 0:t.children}),Object(f.jsxs)(w.a.Content,{className:"container",children:[Object(f.jsx)(ie,{collapsed:u,onChangeCollapsed:function(e){s(e)}}),Object(f.jsx)(l.Suspense,{fallback:Object(f.jsx)(ue.a,{}),children:Object(f.jsx)(R,{routes:(null===(n=e.to)||void 0===n?void 0:n.children)||[]})})]})]})},le=n(33),de=[{path:"/",exact:!0,redirect:"/console"},{path:"/home",name:"home",exact:!0,component:d.a.lazy(Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.e(15).then(n.bind(null,396)));case 1:case"end":return e.stop()}}),e)}))))},{path:"/login",name:"login",exact:!0,component:y},{path:"/404",name:"404",exact:!0,component:C}],fe={path:"*",redirect:"/404"},be=[{path:"/console",name:"console",title:"\u63a7\u5236\u53f0",component:se,isAuth:!0,redirect:"/console/auth-manage",children:[{path:"/console/doing",name:"doing",isAuth:!1,component:d.a.lazy(Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([n.e(16),n.e(19)]).then(n.bind(null,377)));case 1:case"end":return e.stop()}}),e)})))),icon:p.a},{path:"/console/demo",name:"demo",component:d.a.lazy((function(){return n.e(18).then(n.bind(null,378))})),icon:p.a,children:[{path:"/console/demo/hook-modal",name:"hook-modal",component:d.a.lazy((function(){return Promise.all([n.e(1),n.e(7)]).then(n.bind(null,397))})),icon:p.a},{path:"/console/demo/hook-log",name:"hook-log",component:d.a.lazy((function(){return n.e(23).then(n.bind(null,379))})),icon:p.a},{path:"/console/demo/vs-version",name:"vs-version",component:d.a.lazy((function(){return Promise.all([n.e(9),n.e(14)]).then(n.bind(null,380))})),icon:p.a}]},{path:"/console/auth-manage",name:"auth-manage",title:"\u6743\u9650\u7ba1\u7406",component:d.a.lazy((function(){return n.e(17).then(n.bind(null,381))})),icon:p.a,redirect:"/console/auth-manage/role-manage",children:[{path:"/console/auth-manage/role-manage",name:"role-manage",title:"\u89d2\u8272\u7ba1\u7406",component:d.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(20),n.e(10)]).then(n.bind(null,393))})),icon:p.a},{path:"/console/auth-manage/user-manage",name:"UserManage",title:"\u7528\u6237\u7ba1\u7406",component:d.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,394))})),icon:p.a}]},{path:"/console/regular",name:"Regular",title:"\u6b63\u5219",component:d.a.lazy((function(){return n.e(13).then(n.bind(null,382))})),icon:p.a},{path:"/console/article",name:"ArticleManage",title:"\u6587\u7ae0\u7ba1\u7406",component:d.a.lazy((function(){return n.e(22).then(n.bind(null,383))})),icon:p.a,redirect:"/console/article/list",children:[{path:"/console/article/list",name:"ArticleList",title:"\u6587\u7ae0\u5217\u8868",component:d.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,395))})),icon:p.a},{path:"/console/article/create",name:"ArticleCreate",title:"\u65b0\u5efa\u6587\u7ae0",component:d.a.lazy((function(){return Promise.all([n.e(2),n.e(12)]).then(n.bind(null,384))})),icon:p.a,isHidden:!0},{path:"/console/article/update",name:"ArticleUpdate",title:"\u7f16\u8f91\u6587\u7ae0",component:d.a.lazy((function(){return Promise.all([n.e(2),n.e(6)]).then(n.bind(null,385))})),icon:p.a,isHidden:!0}]}]}],je=(de.map((function(e){return e.path})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=function(t){var n=F(e),r=n.list,a=n.map,c=Object(l.useState)(r),i=Object(o.a)(c,2),u=i[0],s=i[1],d=Object(l.useState)(a),b=Object(o.a)(d,2),j=b[0],m=b[1];return Object(f.jsx)(_.Provider,{value:{routeList:u,routeMap:j},children:Object(f.jsx)(T.Provider,{value:{setRoutes:function(e){var t=F(e),n=t.list,r=t.map;s(n),m(r)}},children:t.children})})};return t}([].concat(de,[fe]))),me=Object(le.a)()},42:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return h}));var r=n(25),a=n.n(r),c=n(38),o=n(123),i=n(17),u=n(130),s=n(40),l=n(87),d=function e(t,n){return n.filter((function(n){return!!t.includes(n.path)&&(n.children&&(n.children=e(t,n.children)),!0)}))},f=n(76),b=n(74),j={username:"",authList:void 0,token:localStorage.getItem("token")||"",id:localStorage.getItem("userId")||""},m=Object(b.b)({name:"user",initialState:j,reducers:{setUserInfo:function(e,t){var n=t.payload;return Object(i.a)(Object(i.a)({},e),n)}}}),p=function(){return Object(f.b)((function(e){return e.user}))},h=(m.actions,function(){var e=Object(f.a)(),t=Object(s.h)().setRoutes,n=function(e){var n=function(e,t){return"superAdmin"==e.roleName?Object(l.cloneDeep)(t):e.authList[0]?d(e.authList,Object(l.cloneDeep)(t)):[]}(e,Object(o.a)(s.d));t([].concat(Object(o.a)(s.f),Object(o.a)(n),[s.e]))};return{fetchUserInfo:function(){var t=Object(c.a)(a.a.mark((function t(r){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.k)(r);case 2:if(200==(c=t.sent).code){t.next=6;break}return e(m.actions.setUserInfo({authList:[]})),t.abrupt("return",c);case 6:return n(c.data),e(m.actions.setUserInfo(c.data)),t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),fetchLogin:function(){var t=Object(c.a)(a.a.mark((function t(r){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.e)(r);case 2:if(200==(c=t.sent).code){t.next=5;break}return t.abrupt("return",c);case 5:return localStorage.setItem("token",c.data.token),localStorage.setItem("userId",String(c.data.id)),n(c.data),e(m.actions.setUserInfo(c.data)),t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}});t.a=m.reducer},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(128),a=n(129),c=function(e,t){r.b.destroy(),r.b[e](t)},o=function(e,t){a.a.destroy(),a.a[e](t)},i={success:function(e){return o("success",e)},warn:function(e){return o("warn",e)},error:function(e){return o("error",e)},info:function(e){return o("info",e)}},u={success:function(e){return c("success",e)},warn:function(e){return c("warn",e)},error:function(e){return c("error",e)},info:function(e){return c("info",e)}}},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(91),a=function(){return Object(r.b)()},c=r.c},90:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(56),a=n(17),c=n(76),o=n(74),i=Object(o.b)({name:"consoleLayout",initialState:{visitedMap:{}},reducers:{_setVisitedMap:function(e,t){return Object(a.a)(Object(a.a)({},e),{},{visitedMap:Object(a.a)(Object(a.a)({},e.visitedMap),{},Object(r.a)({},t.payload.path,t.payload))})},_removeVisitedRoute:function(e,t){return Object(a.a)(Object(a.a)({},e),{},{visitedMap:Object(a.a)(Object(a.a)({},e.visitedMap),{},Object(r.a)({},t.payload.path,t.payload))})}}}),u=function(){return Object(c.b)((function(e){var t=e.consoleLayout;return Object(a.a)(Object(a.a)({},t),{},{get visitedList(){return Object.keys(t.visitedMap).filter((function(e){return!t.visitedMap[e].isDelete})).map((function(e){return t.visitedMap[e]}))}})}))},s=function(){var e=Object(c.a)();return{setVisitedMap:function(t){e(i.actions._setVisitedMap(t))}}};t.a=i.reducer},95:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(22),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return new Promise((function(t){setTimeout((function(){t(!0)}),1e3*e)}))},c=function(e){return e.replace(/\n/,"")},o=function(e,t){return(Number(e.current)-1)*Number(e.pageSize)+t+1},i=function(e){return Object.entries(e).filter((function(e){return Object(r.a)(e,2)[1]})).map((function(e){return Object(r.a)(e,1)[0]}))}}},[[303,4,5]]]);
//# sourceMappingURL=main.fdb2c4c5.chunk.js.map
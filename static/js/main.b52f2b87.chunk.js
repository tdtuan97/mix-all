(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){"use strict";var n=a(49),r=a(127),c=a(115),o=a(57),l=a(62),i={},s=[];var u={},m=[];var d={count:0,redditList:[],fetchRedditListPending:!1,fetchRedditListError:null},h=a(75),f=a(76),p=a(77),E=a(78),b=[h.a,f.a,p.a,E.a];var v={router:Object(l.b)(o.a),home:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,a=arguments.length>1?arguments[1]:void 0;return a.type,e=t,s.reduce(function(e,t){return t(e,a)},e)},common:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;return a.type,e=t,m.reduce(function(e,t){return t(e,a)},e)},examples:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;return a.type,e=t,b.reduce(function(e,t){return t(e,a)},e)}},g=Object(n.c)(v),O=Object(c.a)(o.a),j=[r.a,O],R=function(e){return e};var N;t.a=Object(n.e)(g,N,Object(n.d)(n.a.apply(void 0,j),R))},125:function(e,t,a){"use strict";(function(e){var n=a(0),r=a.n(n),c=a(21),o=a(7),l=a(62),i=a(221),s=a(105),u=a(242),m=a(57);function d(e,t){var a=[];return e.forEach(function(e){return function e(t,n){var c;if(c=(c=/^\//.test(t.path)?t.path:"".concat(n,"/").concat(t.path)).replace(/\/+/g,"/"),t.component&&t.childRoutes){var l=d(t.childRoutes,c);a.push(r.a.createElement(o.a,{key:c,render:function(e){return r.a.createElement(t.component,e,l)},path:c}))}else t.component?a.push(r.a.createElement(o.a,{key:c,component:t.component,path:c,exact:!0})):t.childRoutes&&t.childRoutes.forEach(function(t){return e(t,c)})}(e,t)}),r.a.createElement(o.c,null,a)}Object(i.setConfig)({logLevel:"debug"}),t.a=Object(i.hot)(e)(function(){var e=d(u.a,"/");return r.a.createElement(c.a,{store:s.a},r.a.createElement(l.a,{history:m.a},e))})}).call(this,a(109)(e))},138:function(e,t,a){e.exports=a(336)},164:function(e,t,a){},166:function(e,t,a){},168:function(e,t,a){},170:function(e,t,a){e.exports=a.p+"static/media/banner_background.7dfac08d.jpg"},171:function(e,t,a){e.exports=a.p+"static/media/banner_title.f1dd3d62.png"},213:function(e,t,a){},215:function(e,t,a){},22:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r}),a.d(t,"c",function(){return c}),a.d(t,"d",function(){return o}),a.d(t,"g",function(){return l}),a.d(t,"f",function(){return i}),a.d(t,"e",function(){return s});var n="EXAMPLES_COUNTER_PLUS_ONE",r="EXAMPLES_COUNTER_MINUS_ONE",c="EXAMPLES_COUNTER_RESET",o="EXAMPLES_FETCH_REDDIT_LIST_BEGIN",l="EXAMPLES_FETCH_REDDIT_LIST_SUCCESS",i="EXAMPLES_FETCH_REDDIT_LIST_FAILURE",s="EXAMPLES_FETCH_REDDIT_LIST_DISMISS_ERROR"},242:function(e,t,a){"use strict";var n=a(36),r=a(136),c=a(0),o=a.n(c);var l=a(27),i=a(28),s=a(30),u=a(29),m=a(31),d=a(25),h=(a(164),a(166),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("img",{src:a(88),className:"common-logo-spin",alt:"logo"})}}]),t}(c.Component)),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={phoneOpen:void 0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"header-content"},o.a.createElement("div",{className:"header-logo"},o.a.createElement(h,null)),o.a.createElement("div",{className:"header-menu"},o.a.createElement("ul",{className:"menu-content"},o.a.createElement("li",{className:"menu-item"},o.a.createElement(d.a,{to:"/"},"Home")),o.a.createElement("li",{className:"menu-item"},o.a.createElement(d.a,{to:"/"},"Detail")),o.a.createElement("li",{className:"menu-item"},o.a.createElement(d.a,{to:"/"},"About")),o.a.createElement("li",{className:"menu-item"},o.a.createElement(d.a,{to:"/"},"Contact"))))))}}]),t}(o.a.Component),p=(a(168),a(106)),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=a(170),t=a(171);return o.a.createElement("div",{className:"home-banner",style:{backgroundImage:"url(".concat(e,")")}},o.a.createElement("div",{className:"banner-content-wrapper"},o.a.createElement("div",{className:"banner-title"},o.a.createElement("img",{src:t,alt:""})),o.a.createElement("div",{className:"banner-content"},o.a.createElement("span",null,"\u4e00\u4e2a\u9ad8\u6548\u7684\u9875\u9762\u52a8\u753b\u89e3\u51b3\u65b9\u6848")),o.a.createElement(p.a,{className:"banner-button"},"Learn More")))}}]),t}(c.Component),b=(a(213),{path:"",childRoutes:[{path:"welcome-page",component:function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"home-welcome-page"},o.a.createElement(f,null),o.a.createElement(E,null))}}]),t}(c.Component),isIndex:!0}]});function v(){return o.a.createElement("div",{className:"examples-side-panel"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(d.a,{to:"/examples"},"Welcome")),o.a.createElement("li",null,o.a.createElement(d.a,{to:"/examples/counter"},"Counter Demo")),o.a.createElement("li",null,o.a.createElement(d.a,{to:"/examples/reddit"},"Reddit API Demo")),o.a.createElement("li",null,o.a.createElement(d.a,{to:"/"},"Back to start page"))),o.a.createElement("div",{className:"memo"},"This is a Rekit feature that contains some examples for you to quick learn how Rekit works. To remove it just delete the feature."))}var g=a(78),O=a(75),j=a(76),R=a(77);var N={path:"examples",component:function(e){var t=e.children;return o.a.createElement("div",{className:"examples-layout"},o.a.createElement(v,null),o.a.createElement("div",{className:"examples-page-container"},t))},childRoutes:[{path:"",component:function(){return o.a.createElement("div",{className:"examples-welcome-page"},o.a.createElement("a",{href:"http://github.com/supnate/rekit"},o.a.createElement("img",{src:a(88),className:"app-logo",alt:"logo"})),o.a.createElement("h1",null,"Welcome to Rekit!"),o.a.createElement("p",null,"Contratulations! You have created your Rekit React app successfully! Seeing this page means everything works well now."),o.a.createElement("p",null,"This is an example feature showing about how to layout the container, how to use Redux and React Router. If you want to remove all sample code, just delete the feature from Rekit Studio. Alternatively you can run\xa0",o.a.createElement("code",null,'"rekit remove feature examples"')," via command line under the project folder."),o.a.createElement("p",null,"To learn more about how to get started, you can visit:"," ",o.a.createElement("a",{href:"http://docs.rekit.org/app-types/rekit-react"},"Get started")))},isIndex:!0},{path:"counter",component:function(){var e=Object(O.b)(),t=e.count,a=e.counterPlusOne,n=Object(j.b)().counterMinusOne,r=Object(R.b)().counterReset;return o.a.createElement("div",{className:"examples-counter-page"},o.a.createElement("h1",null,"Counter"),o.a.createElement("p",null,"This is simple counter demo to show how Redux sync actions work."),o.a.createElement("button",{className:"btn-minus-one",onClick:n,disabled:0===t},"-"),o.a.createElement("span",null,t),o.a.createElement("button",{className:"btn-plus-one",onClick:a},"+"),o.a.createElement("button",{className:"btn-reset",onClick:r},"Reset"))}},{path:"reddit",component:function(){var e=Object(g.b)(),t=e.redditList,a=e.fetchRedditList,n=e.fetchRedditListPending,r=e.fetchRedditListError;return o.a.createElement("div",{className:"examples-reddit-list-page"},o.a.createElement("h1",null,"Reddit API Usage"),o.a.createElement("p",null,"This demo shows how to use Redux async actions to fetch data from Reddit's REST API."),o.a.createElement("button",{className:"btn-fetch-reddit",disabled:n,onClick:a},n?"Fetching...":"Fetch reactjs topics"),r&&o.a.createElement("div",{className:"fetch-list-error"},"Failed to load: ",r.toString()),t.length>0?o.a.createElement("ul",{className:"examples-reddit-list"},t.map(function(e){return o.a.createElement("li",{key:e.data.id},o.a.createElement("a",{href:e.data.url},e.data.title))})):o.a.createElement("div",{className:"no-items-tip"},"No items yet."))}}]},y=a(130),k=a.n(y),L=(a(215),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("img",{src:a(88),className:"common-logo",alt:"logo"})}}]),t}(c.Component)),w=a(339),x=a(338),S=a(341),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(){!0===a.state.hasError?a.setState({hasError:!1}):a.setState({hasError:!0})},a.state={hasError:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.hasError;return o.a.createElement(w.a,{className:"card-authentication"},o.a.createElement("div",{className:"form-title form-block"},o.a.createElement(d.a,{to:"/"},o.a.createElement(L,null)),o.a.createElement("div",{className:"title"},"Register")),o.a.createElement(x.a,{className:"form-login form-block"},o.a.createElement(x.a.Item,{name:"full_name",validateStatus:e?"error":"",help:e?"Message error":null},o.a.createElement(S.a,{placeholder:"Full name"})),o.a.createElement(x.a.Item,{name:"email",validateStatus:e?"error":"",help:e?"Message error":null},o.a.createElement(S.a,{placeholder:"Email"})),o.a.createElement(x.a.Item,{name:"username",validateStatus:e?"error":"",help:e?"Message error":null},o.a.createElement(S.a,{placeholder:"Username"})),o.a.createElement(x.a.Item,{name:"Password",validateStatus:e?"error":"",help:e?"Message error":null},o.a.createElement(S.a,{placeholder:"Password"}))),o.a.createElement(p.a,{onClick:this.handleSubmit,type:"primary",htmlType:"submit",className:"form-action",block:!0},"Register"),o.a.createElement("div",{className:"form-other"},o.a.createElement(d.a,{to:"/login"},"Login")))}}]),t}(c.Component),I=a(342),P=a(343),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(){!0===a.state.hasError?a.setState({hasError:!1}):a.setState({hasError:!0})},a.state={hasError:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.hasError;return o.a.createElement(w.a,{className:"card-authentication"},o.a.createElement("div",{className:"form-title form-block"},o.a.createElement(d.a,{to:"/"},o.a.createElement(L,null)),o.a.createElement("div",{className:"title"},"Login")),o.a.createElement(x.a,{className:"form-login form-block"},o.a.createElement(x.a.Item,{name:"username",validateStatus:e?"error":"",help:e?"Message error":null},o.a.createElement(S.a,{placeholder:"Username",prefix:o.a.createElement(I.a,null)})),o.a.createElement(x.a.Item,{name:"Password",validateStatus:e?"error":"",help:e?"Message error":null},o.a.createElement(S.a,{placeholder:"Password",prefix:o.a.createElement(P.a,null)}))),o.a.createElement(p.a,{onClick:this.handleSubmit,type:"primary",className:"form-action",block:!0},"Login"),o.a.createElement("div",{className:"form-other"},o.a.createElement(d.a,{to:"/register"},"Register")))}}]),t}(c.Component),T=(a(329),a(217)),M=a(218),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"authentication-layout"},o.a.createElement(T.a,{justify:"center"},o.a.createElement(M.a,{xs:16,md:12,xxl:8},o.a.createElement("div",{className:"authentication-page-container"},this.props.children))))}}]),t}(c.Component),D=[{path:"login",component:A,childRoutes:[{path:"",component:_,isIndex:!0}]},{path:"register",component:A,childRoutes:[{path:"",component:C,isIndex:!0}]}],F=[{path:"/redux-react",component:function(e){var t=e.children;return o.a.createElement("div",{className:"root-app h-100"},o.a.createElement("div",{className:"page-container h-100"},t))},childRoutes:[].concat([b,{path:"common",name:"Common",childRoutes:[]},N],Object(r.a)(D),[{path:"*",name:"Page not found",component:function(){return o.a.createElement("div",{className:"common-page-not-found"},"Page not found.")}}]).filter(function(e){return e.component||e.childRoutes&&e.childRoutes.length>0})}];F.forEach(function e(t){if(t.childRoutes&&t.childRoutes.length){var a=k.a.find(t.childRoutes,function(e){return e.isIndex});if(a){var r=Object(n.a)({},a);r.path="",r.exact=!0,r.autoIndexRoute=!0,t.childRoutes.unshift(r)}t.childRoutes.forEach(e)}});t.a=F},329:function(e,t,a){},332:function(e,t,a){},334:function(e,t,a){},336:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),l=a(125);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(332),a(334);o.a.render(r.a.createElement(l.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,t,a){"use strict";var n=a(35),r=Object(n.a)();t.a=r},75:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return i});var n=a(36),r=a(0),c=a(21),o=a(22);function l(){var e=Object(c.e)();return{count:Object(c.f)(function(e){return e.examples.count}),counterPlusOne:Object(r.useCallback)(function(){return e({type:o.b})},[e])}}function i(e,t){switch(t.type){case o.b:return Object(n.a)({},e,{count:e.count+1});default:return e}}},76:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return i});var n=a(36),r=a(0),c=a(21),o=a(22);function l(){var e=Object(c.e)();return{count:Object(c.f)(function(e){return e.examples.count}),counterMinusOne:Object(r.useCallback)(function(){return e({type:o.a})},[e])}}function i(e,t){switch(t.type){case o.a:return Object(n.a)({},e,{count:e.count-1});default:return e}}},77:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return i});var n=a(36),r=a(0),c=a(21),o=a(22);function l(){var e=Object(c.e)();return{count:Object(c.f)(function(e){return e.examples.count}),counterReset:Object(r.useCallback)(function(){return e({type:o.c})},[e])}}function i(e,t){switch(t.type){case o.c:return Object(n.a)({},e,{count:0});default:return e}}},78:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return u});var n=a(36),r=a(128),c=a.n(r),o=a(0),l=a(21),i=a(22);function s(){var e=Object(l.e)(),t=Object(l.f)(function(e){return{redditList:e.examples.redditList,fetchRedditListPending:e.examples.fetchRedditListPending,fetchRedditListError:e.examples.fetchRedditListError}},l.d),a=t.redditList,n=t.fetchRedditListPending,r=t.fetchRedditListError;return{redditList:a,fetchRedditList:Object(o.useCallback)(function(){e(function(e){return e({type:i.d}),new Promise(function(t,a){c.a.get("http://www.reddit.com/r/reactjs.json").then(function(a){e({type:i.g,data:a.data}),t(a)},function(t){e({type:i.f,data:{error:t}}),a(t)})})})},[e]),fetchRedditListPending:n,fetchRedditListError:r,dismissFetchRedditListError:Object(o.useCallback)(function(){e({type:i.e})},[e])}}function u(e,t){switch(t.type){case i.d:return Object(n.a)({},e,{fetchRedditListPending:!0,fetchRedditListError:null});case i.g:return Object(n.a)({},e,{redditList:t.data.data.children,fetchRedditListPending:!1,fetchRedditListError:null});case i.f:return Object(n.a)({},e,{fetchRedditListPending:!1,fetchRedditListError:t.data.error});case i.e:return Object(n.a)({},e,{fetchRedditListError:null});default:return e}}},88:function(e,t,a){e.exports=a.p+"static/media/rekit-react.5c11e8db.png"}},[[138,2,1]]]);
//# sourceMappingURL=main.b52f2b87.chunk.js.map
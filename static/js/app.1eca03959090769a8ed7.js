webpackJsonp([3],{Hm5I:function(e,t){},IcnI:function(e,t,n){"use strict";var a=n("mvHQ"),s=n.n(a),i=n("7+uW"),r=n("NYxO");i.default.use(r.a);var o={pageOpendList:[{path:"/dashboard",name:"dashboard_index",component:function(){return n.e(0).then(n.bind(null,"Nlv2"))},meta:{title:"首页",isTabView:!0}}]},u={setOpenedList:function(e){sessionStorage.pageOpendList&&JSON.parse(sessionStorage.pageOpendList).length>0&&(e.pageOpendList=JSON.parse(sessionStorage.pageOpendList))},setPageOpendList:function(e,t){var n=t.index,a=t.query,i=t.params,r=t.meta,o=t.path,u=e.pageOpendList[n];i&&(u.params=i),a&&(u.query=a),r&&(u.meta=r),o&&(u.path=o),e.pageOpendList.splice(n,1,u),sessionStorage.pageOpendList=s()(e.pageOpendList)},increateTag:function(e,t){e.pageOpendList.push(t)},closeOpendList:function(e,t){var n=e.pageOpendList;if("dashboard_index"!==t.name)for(var a=0;a<n.length;a++)if(n[a].name===t.name){var i=e.pageOpendList[a-1].name;e.pageOpendList.splice(a,1),sessionStorage.setItem("pageOpendList",s()(e.pageOpendList)),t.vm.$router.push({name:i})}}},c=new r.a.Store({state:o,mutations:u});t.a=c},KWv7:function(e,t,n){"use strict";t.a=[{path:"/",name:"home_index",component:function(){return new Promise(function(e){e()}).then(n.bind(null,"eYrN"))},redirect:"/dashboard",children:[{path:"dashboard",name:"dashboard_index",component:function(){return n.e(0).then(n.bind(null,"Nlv2"))},meta:{isTabView:!0,title:"首页"}}]}]},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s=n("mQFi"),i={name:"app",data:function(){return{}},beforeCreate:function(){var e=this;Object(s.b)(this),setTimeout(function(){e.$store.commit("setOpenedList")},0)}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view",{key:Date.now()})],1)},staticRenderFns:[]};var o=n("VU/8")(i,r,!1,function(e){n("kPuq")},null,null).exports,u=n("/ocq"),c=n("IcnI"),m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",r=c.a.state.pageOpendList,o=r.length,u=0,m=!1;if(o>0)for(;u<o;u++)if(t===r[u].name){e.$store.commit("setPageOpendList",{index:u,params:n,query:a,meta:s}),m=!0;break}if(!m&&t){var d={name:t};if(n&&(d.params=n),a&&(d.query=a),s&&s.isTabView)d.meta=s;else if(s&&!s.isTabView)return;i&&(d.path=i),c.a.commit("increateTag",d)}},d=n("KWv7");a.default.use(u.a);var p=new u.a({mode:"hash",routes:d.a});p.beforeEach(function(e,t,n){n()}),p.afterEach(function(e,t,n){m(p.app,e.name,e.params,e.query,e.meta,e.path)});var l=p,f=n("zL8q"),h=n.n(f);n("tvR6");a.default.use(h.a),new a.default({el:"#app",router:l,store:c.a,render:function(e){return e(o)}})},PO3b:function(e,t){},eYrN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"header-pan"},[this._v("\n  我是Header\n")])},staticRenderFns:[]};var s=n("VU/8")({},a,!1,function(e){n("qLj/")},"data-v-2f4c94d9",null).exports,i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"aside-pan"},[this._v("\n  我是侧边栏\n")])},staticRenderFns:[]};var r=n("VU/8")({},i,!1,function(e){n("qbEW")},"data-v-b825c6f6",null).exports,o=n("mvHQ"),u=n.n(o),c=n("Gu7T"),m=n.n(c),d=n("/ocq"),p=n("mQFi"),l=n("KWv7"),f=n("IcnI"),h=function(e){var t=[].concat(m()(l.a)),n=new d.a({mode:"hash",routes:t});e.$router.matcher=n.matcher},v=function(e){var t=sessionStorage.getItem("dynamic")&&JSON.parse(sessionStorage.getItem("dynamic"));if(t&&t.length>0)for(var n=0;n<t.length;n++)if(t[n].name===e){t.splice(n,1),sessionStorage.setItem("dynamic",u()(t));break}};var g={computed:{tagList:function(){return this.$store.state.pageOpendList}},methods:{jump:function(e){var t=e.params,n=e.query;t?this.$router.push({name:e.name,params:t}):n?this.$router.push({name:e.name,query:n}):n&&t?this.$router.push({name:e.name,params:t,query:n}):this.$router.push({name:e.name})},close:function(e){console.log(e),function(e,t){v(t),h(e),Object(p.b)(e),f.a.commit("closeOpendList",{vm:e,name:t})}(this,e)}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tag-view-wrap"},e._l(e.tagList,function(t){return n("el-tag",{key:t.id,staticClass:"tag-view",class:{active:t.name===e.$route.name},attrs:{closable:"dashboard_index"!==t.name},on:{close:function(n){e.close(t.name)}},nativeOn:{click:function(n){e.jump(t)}}},[e._v("\n    "+e._s(t.meta.title)+"\n  ")])}))},staticRenderFns:[]};var O={data:function(){return{}},components:{HeaderArea:s,AsideArea:r,TabView:n("VU/8")(g,b,!1,function(e){n("Hm5I")},null,null).exports}},L={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-tabs"},[t("header-area"),this._v(" "),t("aside-area"),this._v(" "),t("div",{staticClass:"main-content"},[t("tab-view"),this._v(" "),t("router-view")],1)],1)},staticRenderFns:[]};var y=n("VU/8")(O,L,!1,function(e){n("PO3b")},null,null);t.default=y.exports},kPuq:function(e,t){},mQFi:function(e,t,n){"use strict";var a=n("mvHQ"),s=n.n(a),i=n("eYrN"),r={GoodDetail:function(){return n.e(1).then(n.bind(null,"CmFY"))}};t.a=function(e){!function(e){var t=e.vm,n=e.com,a=e.name,r=e.params,o=e.query,u=e.component,c={name:a,path:"/"+a,component:u,meta:{component:n,title:a,isTabView:!0,params:r,query:o}},m=!1,d=[],p={path:"/",name:"dynamic",component:i.default,children:[]},l=sessionStorage.getItem("dynamic")&&JSON.parse(sessionStorage.getItem("dynamic"))||[];if(l.length>0)for(var f=l.length,h=0;h<f;h++)if(l[h].name===a){m=!0;break}m||(p.children.push(c),d.push(p),l.push(c),sessionStorage.setItem("dynamic",s()(l)),t.$router.addRoutes(d));t.$router.push({name:a,params:r,query:o})}({vm:e.vm,component:r[e.component],com:e.com,name:e.name,params:e.params,query:e.query})},t.b=function(e){var t=sessionStorage.getItem("dynamic")&&JSON.parse(sessionStorage.getItem("dynamic"))||[],n=[],a={path:"/",name:"dynamic",component:i.default,children:[]};if(t.length>0){for(var s=0;s<t.length;s++){var o=t[s].meta.component,u=o.substring(o.lastIndexOf("/")+1,o.lastIndexOf("."));t[s].component=r[u],a.children.push(t[s])}n.push(a),e.$router.addRoutes(n)}}},"qLj/":function(e,t){},qbEW:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1eca03959090769a8ed7.js.map
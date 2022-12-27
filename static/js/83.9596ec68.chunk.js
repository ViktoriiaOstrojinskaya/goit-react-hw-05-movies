"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[83],{4672:function(n,e,r){r.d(e,{Z:function(){return i}});var t,a=r(1087),u=r(168),c=r(7402).Z.ul(t||(t=(0,u.Z)(["\n  padding: 10px;\n  line-height: 1.5;\n"]))),o=r(184),i=function(n){var e=n.movies,r=n.location;return(0,o.jsx)(c,{children:e.map((function(n){var e=n.title,t=n.id;return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:r},children:e})},t)}))})}},1757:function(n,e,r){r.d(e,{Hg:function(){return i},TP:function(){return s},tx:function(){return l},z1:function(){return f},zv:function(){return p}});var t=r(5861),a=r(4687),u=r.n(a),c=r(2388),o="500d9ce9bd19caed28c8e80a6fa70303";c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.headers.common.Authorization=o,c.Z.defaults.params={api_key:"".concat(o)};var i=function(){var n=(0,t.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("trending/movie/day");case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(e));case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(e,"/credits"));case 3:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(e,"/reviews"));case 3:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/search/movie/",{params:{query:e,language:"en-US"}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},2083:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t,a,u,c=r(5861),o=r(9439),i=r(4687),s=r.n(i),p=r(1087),l=r(7689),f=r(2791),v=r(168),d=r(8789),h=d.ZP.form(t||(t=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),m=d.ZP.input(a||(a=(0,v.Z)(["\n  height: 25px;\n  padding: 5px;\n  border-radius: 4px;\n  border: 1px solid black;\n  font: inherit;\n"]))),x=d.ZP.button(u||(u=(0,v.Z)(["\n  display: inline-block;\n  width: 55px;\n  height: 38px;\n  padding: 3px;\n  margin-left: 3px;\n\n  justify-content: center;\n  border: none;\n  border-radius: 4px;\n  text-decoration: none;\n  background-color: #d5d0c6;\n\n  &:hover,\n  &:focus {\n    background-color: orange;\n    color: white;\n  }\n"]))),g=r(184),Z=function(n){var e=n.onSubmit,r=n.value,t=n.onChange;return(0,g.jsxs)(h,{onSubmit:e,children:[(0,g.jsx)(m,{type:"text",autoComplete:"off",placeholder:"Search movies",name:"request",value:r,onChange:t}),(0,g.jsx)(x,{type:"submit",children:"Search"})]})},b=r(7596),w=r(7649),k=r(4672),y=r(1757),j=function(){var n,e=(0,f.useState)(""),r=(0,o.Z)(e,2),t=r[0],a=r[1],u=(0,f.useState)([]),i=(0,o.Z)(u,2),v=i[0],d=i[1],h=(0,f.useState)(!1),m=(0,o.Z)(h,2),x=m[0],j=m[1],S=(0,f.useState)(null),q=(0,o.Z)(S,2),C=q[0],P=q[1],_=(0,p.lr)(),z=(0,o.Z)(_,2),A=z[0],U=z[1],H=(0,l.TH)(),T=null!==(n=A.get("query"))&&void 0!==n?n:"",D=""!==t?{query:t}:{};return(0,f.useEffect)((function(){if(""!==T){var n=function(){var n=(0,c.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.z1(T);case 3:if(0!==(e=n.sent).length){n.next=7;break}return b.Am.warn("Sorry, we can`t find information by your request \ud83d\ude13"),n.abrupt("return");case 7:j(!0),P(null),d(e),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),P(n.t0);case 15:return n.prev=15,j(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}}),[T]),(0,g.jsxs)("main",{children:[(0,g.jsx)(Z,{onSubmit:function(n){n.preventDefault(),""!==t.trim()?(d([]),U(D),a("")):b.Am.warn("Please, enter a request! \ud83d\udd75\ufe0f\u200d\u2640\ufe0f")},value:t,onChange:function(n){a(n.target.value)}}),v.length>0&&(0,g.jsx)(k.Z,{movies:v,location:H}),x&&(0,g.jsx)(w.Z,{}),C&&C.message]})}}}]);
//# sourceMappingURL=83.9596ec68.chunk.js.map
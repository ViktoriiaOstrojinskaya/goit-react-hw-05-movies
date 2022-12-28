"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[857],{5545:function(r,e,n){n.d(e,{Z:function(){return o}});var t,a=n(5243),c=n(168),u=n(7402).Z.div(t||(t=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),s=n(184),o=function(){return(0,s.jsx)(u,{children:(0,s.jsx)(a.g4,{height:"80",width:"80",radius:"9",color:"orange",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},9857:function(r,e,n){n.r(e),n.d(e,{default:function(){return j}});var t,a,c,u,s=n(5861),o=n(9439),i=n(4687),p=n.n(i),f=n(7596),l=n(7689),v=n(2791),h=n(168),d=n(7402),m=d.Z.div(t||(t=(0,h.Z)(["\n  margin-top: 20px;\n"]))),x=d.Z.li(a||(a=(0,h.Z)(["\n  margin-bottom: 15px;\n\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n"]))),Z=d.Z.p(c||(c=(0,h.Z)(["\n  margin-bottom: 5px;\n"]))),w=n(184),g=function(r){var e=r.reviews;return(0,w.jsx)(m,{children:e&&e.map((function(r){var e=r.id,n=r.author,t=r.content;return(0,w.jsxs)(x,{children:[(0,w.jsxs)(Z,{children:[(0,w.jsx)("b",{children:"Author:"})," ",n]}),(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"Review:"})," ",t]})]},e)}))})},b=n(5545),k=n(1757),y=d.Z.ul(u||(u=(0,h.Z)(["\n  margin-top: 30px;\n"]))),j=function(){var r=(0,v.useState)([]),e=(0,o.Z)(r,2),n=e[0],t=e[1],a=(0,v.useState)(!1),c=(0,o.Z)(a,2),u=c[0],i=c[1],h=(0,v.useState)(null),d=(0,o.Z)(h,2),m=d[0],x=d[1],Z=(0,l.UO)().movieId;return(0,v.useEffect)((function(){if(Z){var r=function(){var r=(0,s.Z)(p().mark((function r(){var e;return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i(!0),r.prev=1,r.next=4,k.tx(Z);case 4:if(0!==(e=r.sent).length){r.next=8;break}return f.Am.warn("Sorry, we don`t have information about cast \ud83d\ude13"),r.abrupt("return");case 8:t(e),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(1),x(r.t0),f.Am.error("Oops, something went wrong \ud83e\udee3 Try again!");case 15:return r.prev=15,i(!1),r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[1,11,15,18]])})));return function(){return r.apply(this,arguments)}}();r()}}),[Z]),(0,w.jsxs)(y,{children:[u&&(0,w.jsx)(b.Z,{}),m&&(0,w.jsx)("p",{children:m.message}),(0,w.jsx)(g,{reviews:n})]})}},1757:function(r,e,n){n.d(e,{Hg:function(){return o},TP:function(){return i},tx:function(){return f},z1:function(){return l},zv:function(){return p}});var t=n(5861),a=n(4687),c=n.n(a),u=n(2388),s="500d9ce9bd19caed28c8e80a6fa70303";u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.headers.common.Authorization=s,u.Z.defaults.params={api_key:"".concat(s)};var o=function(){var r=(0,t.Z)(c().mark((function r(){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("trending/movie/day");case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/movie/".concat(e));case 3:return n=r.sent,t=n.data,r.abrupt("return",t);case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/credits"));case 3:return n=r.sent,t=n.data,r.abrupt("return",t.cast);case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/reviews"));case 3:return n=r.sent,t=n.data,r.abrupt("return",t.results);case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/search/movie/",{params:{query:e,language:"en-US"}});case 3:return n=r.sent,t=n.data,r.abrupt("return",t.results);case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=857.feffec94.chunk.js.map
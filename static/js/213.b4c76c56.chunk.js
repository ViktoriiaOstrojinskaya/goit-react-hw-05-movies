"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[213],{1757:function(e,n,r){r.d(n,{Hg:function(){return i},TP:function(){return u},tx:function(){return l},z1:function(){return d},zv:function(){return p}});var t=r(5861),a=r(4687),o=r.n(a),c=r(2388),s="500d9ce9bd19caed28c8e80a6fa70303";c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.headers.common.Authorization=s,c.Z.defaults.params={api_key:"".concat(s)};var i=function(){var e=(0,t.Z)(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("trending/movie/day");case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(o().mark((function e(n){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n));case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(o().mark((function e(n){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(n,"/credits"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t.cast);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(o().mark((function e(n){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(n,"/reviews"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(o().mark((function e(n){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie/",{params:{query:n,language:"en-US"}});case 3:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()},2213:function(e,n,r){r.r(n),r.d(n,{default:function(){return A}});var t,a,o,c,s,i,u,p=r(5861),l=r(9439),d=r(4687),v=r.n(d),f=r(7596),h=r(1087),x=r(7689),m=r(2791),g=r(168),Z=r(7402),b=Z.Z.div(t||(t=(0,g.Z)(["\n  display: flex;\n"]))),w=Z.Z.div(a||(a=(0,g.Z)(["\n  display: block;\n  padding: 20px;\n"]))),j=Z.Z.h2(o||(o=(0,g.Z)(["\n  text-align: center;\n  margin-bottom: 30px;\n"]))),k=Z.Z.h3(c||(c=(0,g.Z)(["\n  margin-bottom: 10px;\n"]))),y=Z.Z.p(s||(s=(0,g.Z)(["\n  font-style: italic;\n  margin-bottom: 20px;\n\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n"]))),_=r(184),U=function(e){var n=e.movieDetails,r=n.poster_path,t=n.title,a=n.release_date,o=n.vote_average,c=n.overview,s=n.genres,i=new Date(a).getFullYear(),u=Math.round(o).toFixed(1);return(0,_.jsxs)(b,{children:[(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w300"+r,alt:t}),(0,_.jsxs)(w,{children:[(0,_.jsxs)(j,{children:[t,"(",i,")"]}),(0,_.jsxs)(y,{children:["User score: ",u]}),(0,_.jsx)(k,{children:"Overview"}),(0,_.jsx)(y,{children:c}),(0,_.jsx)(k,{children:"Genres"}),(0,_.jsx)(y,{children:s&&s.map((function(e){return e.name})).join(", ")})]})]})},O=(0,Z.Z)(h.OL)(i||(i=(0,g.Z)(["\n  display: flex;\n  width: 70px;\n  padding: 5px;\n\n  justify-content: center;\n  border-radius: 4px;\n  text-decoration: none;\n  color: white;\n  background-color: #767573;\n  margin-bottom: 10px;\n\n  &:hover,\n  &:focus {\n    background-color: orange;\n  }\n"]))),S=function(e){var n=e.to;return(0,_.jsx)(O,{to:n,children:"Go Back"})},T=r(8789).ZP.ul(u||(u=(0,g.Z)(["\n  margin-top: 30px;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  padding: 10px;\n"]))),z=r(1757),A=function(){var e,n,r=(0,m.useState)([]),t=(0,l.Z)(r,2),a=t[0],o=t[1],c=(0,m.useState)(null),s=(0,l.Z)(c,2),i=s[0],u=s[1],d=(0,x.UO)().movieId,g=null!==(e=null===(n=(0,x.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,m.useEffect)((function(){if(d){var e=function(){var e=(0,p.Z)(v().mark((function e(){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.TP(d);case 3:if(n=e.sent){e.next=7;break}return f.Am.error("Sorry, we don`t have information of this movie \ud83d\ude13"),e.abrupt("return");case 7:o(n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),u(e.t0),f.Am.error("Oops, something went wrong \ud83e\udee3 Try again!");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[d]),(0,_.jsxs)("div",{children:[(0,_.jsxs)("main",{children:[(0,_.jsx)(S,{to:g}),a&&(0,_.jsx)(U,{movieDetails:a})]}),(0,_.jsxs)(T,{children:[(0,_.jsx)("li",{children:(0,_.jsx)(h.rU,{to:"cast",state:{from:g},children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(h.rU,{to:"reviews",state:{from:g},children:"Review"})})]}),(0,_.jsx)(x.j3,{}),i&&(0,_.jsx)("p",{children:i.message})]})}}}]);
//# sourceMappingURL=213.b4c76c56.chunk.js.map
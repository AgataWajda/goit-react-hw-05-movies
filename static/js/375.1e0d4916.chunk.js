"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[375],{443:function(n,e,t){t.d(e,{IO:function(){return i},IQ:function(){return c},Jh:function(){return s},Pg:function(){return o},qz:function(){return a}});var r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWNjZjMzMzVmZDU5YTNhYzRlYzFjYWFkZjZlYmFkOCIsInN1YiI6IjY1ODBjNzM5Y2VkYWM0MDgyNzdkNzg3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Jv2bkKP8rPp7N7NGgB2vb1RhAzWq8LfGK9DtcKMe6c"}},i=function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",r).then((function(n){return n.json()})).catch((function(n){return console.error(n)}))},o=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"language=en-US"),r).then((function(n){return n.json()})).catch((function(n){return console.error(n)}))},c=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),r).then((function(n){return n.json()})).then((function(n){return n.cast})).catch((function(n){return console.error(n)}))},s=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1"),r).then((function(n){return n.json()})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))},a=function(n){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=true&language=en-US&page=1"),r).then((function(n){return n.json()})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))}},375:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,i,o=t(439),c=t(443),s=t(689),a=t(791),u=t(168),h=t(867),l=t(87),d=h.ZP.div(r||(r=(0,u.Z)(["\n  padding-left: 20px;\n  display: flex;\n  gap: 20px;\n"]))),f=(0,h.ZP)(l.rU)(i||(i=(0,u.Z)(["\n  color: black;\n  text-decoration: none;\n  padding-top: 4px;\n  font-size: 16px;\n  font-weight: 500;\n\n  &:hover {\n    color: orange;\n  }\n"]))),g=t(184),j=function(){var n,e,t=(0,a.useState)([]),r=(0,o.Z)(t,2),i=r[0],u=r[1],h=(0,s.UO)().movieId,j=null!==(n=null===(e=(0,s.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/home";return(0,a.useEffect)((function(){0===i.length&&(0,c.Pg)(h).then((function(n){u(n)}))}),[h,i]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l.rU,{to:j,children:"Go Back"}),(0,g.jsxs)(d,{children:[i.poster_path?(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(i.poster_path),alt:i.original_title}):(0,g.jsx)(g.Fragment,{}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("h2",{children:[i.original_title," (",i.release_date?i.release_date.slice(0,4):(0,g.jsx)(g.Fragment,{}),")"]}),(0,g.jsxs)("p",{children:["User Score: ",Math.round(10*i.vote_average),"%"]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("span",{children:i.overview})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{children:"Genres"}),(0,g.jsx)("span",{children:i.genres?i.genres.map((function(n){return n.name})).join(", "):(0,g.jsx)(g.Fragment,{})})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{children:"Additional information"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)(f,{to:"cast",state:{from:j},children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(f,{to:"reviews",state:{from:j},children:"Reviews"})})]})]})]})]}),(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)("div",{children:"Lodading"}),children:(0,g.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=375.1e0d4916.chunk.js.map
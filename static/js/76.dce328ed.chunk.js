"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{443:function(n,t,e){e.d(t,{IO:function(){return c},IQ:function(){return i},Jh:function(){return u},Pg:function(){return o},qz:function(){return a}});var r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWNjZjMzMzVmZDU5YTNhYzRlYzFjYWFkZjZlYmFkOCIsInN1YiI6IjY1ODBjNzM5Y2VkYWM0MDgyNzdkNzg3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Jv2bkKP8rPp7N7NGgB2vb1RhAzWq8LfGK9DtcKMe6c"}},c=function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",r).then((function(n){return n.json()})).catch((function(n){return console.error(n)}))},o=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"language=en-US"),r).then((function(n){return n.json()})).catch((function(n){return console.error(n)}))},i=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),r).then((function(n){return n.json()})).then((function(n){return n.cast})).catch((function(n){return console.error(n)}))},u=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1"),r).then((function(n){return n.json()})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))},a=function(n){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=true&language=en-US&page=1"),r).then((function(n){return n.json()})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))}},76:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(439),c=e(443),o=e(791),i=e(689),u="Cast_list__GlWio",a="Cast_item__a0CDL",s="Cast_photo__lvFLf",h="Cast_description__uN0VA",f=e(184),l=function(){var n=(0,i.UO)().movieId,t=(0,o.useState)([]),e=(0,r.Z)(t,2),l=e[0],p=e[1];return(0,o.useEffect)((function(){0===l.length&&(0,c.IQ)(n).then((function(n){return p(n)}))}),[n,l]),(0,f.jsx)("ul",{className:u,children:l.map((function(n){return(0,f.jsxs)("li",{className:a,children:[n.profile_path?(0,f.jsx)("img",{className:s,src:"https://image.tmdb.org/t/p/w300".concat(n.profile_path),alt:n.name}):(0,f.jsx)(f.Fragment,{}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("p",{children:n.name}),(0,f.jsxs)("p",{children:["Character: ",n.character]})]})]},n.id)}))})}}}]);
//# sourceMappingURL=76.dce328ed.chunk.js.map
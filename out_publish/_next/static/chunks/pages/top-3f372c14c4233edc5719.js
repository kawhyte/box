_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{ALTb:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/top",function(){return r("woae")}])},rePB:function(e,t,r){"use strict";function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return c}))},woae:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return x}));var c=r("rePB"),a=r("nKUr"),n=r("q1tI"),o=r("g4pe"),i=r.n(o),s=r("ATyU"),l=r("YFqc"),d=r.n(l),u=function(e){var t=e.todo,r=e.toggleTodo;console.log(null===t||void 0===t?void 0:t.cover.url);var c="lg:text-green-300 text-green-500   text-xl leading-lg  pr-2",n="lg:text-gray-300 text-gray-500  text-xl leading-lg pr-2";return Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)(d.a,{href:"/games/".concat(t.id),children:Object(a.jsxs)("div",{className:"relative cursor-pointer",children:[Object(a.jsx)("span",{className:t.complete?" w-full h-full absolute z-10  opacity-80 bg-gray-900  ":"w-full h-full absolute z-10  opacity-0 bg-gray-900  ",children:Object(a.jsxs)("p",{className:"grid place-items-center rounded-lg bg-gray-700 text-sm my-2  mx-12 p-2",children:[" ","I played this game"," "]})}),Object(a.jsx)(s.a.img,{initial:{rotateY:180,opacity:0},animate:{rotateY:0,opacity:1},transition:{delay:.3},className:"w-full col-span-2  block rounded ",src:null===t||void 0===t?void 0:t.cover.url.replace("t_thumb","t_cover_big"),alt:t.name})]},t.id)},t.id),Object(a.jsx)(d.a,{href:"/games/".concat(t.id),children:Object(a.jsx)("div",{className:"grid place-items-center pt-4 cursor-pointer",children:Object(a.jsxs)("h2",{className:"text-gray-100 font-semibold ",children:[" ",t.name]})})},t.id),Object(a.jsx)("div",{className:"grid grid-2 place-items-center gap-2 pt-2",children:Object(a.jsxs)("div",{className:"flex flex-row justify-between  container ",children:[Object(a.jsxs)("button",{onClick:function(){return r(t)},className:"outline-none  flex-auto",children:[Object(a.jsx)("i",{onClick:function(){return r(t)},className:t.complete?c+" far fa-check-circle":n+" far fa-check-circle"}),Object(a.jsx)("p",{className:"py-1 text-sm",children:"Played"})]}),Object(a.jsxs)("button",{className:"text-white opacity flex-auto",children:[Object(a.jsx)("i",{className:t.complete?c+" fas fa-bookmark":n+" fas fa-bookmark"})," ",Object(a.jsx)("p",{className:"py-1 text-sm",children:" Watchlist"})]})]})})]})},b=function(e){var t=e.todos,r=e.toggleTodo;return Object(a.jsx)("main",{className:"grid container mx-auto pb-3  content-start items-center justify-center",children:Object(a.jsx)(s.a.div,{className:"relative w-full  grid grid-cols-2 sm:grid-col-3 md:grid-cols-3 lg:grid-cols-5 gap-2 overflow-hidden",children:t.map((function(e){return Object(a.jsx)(u,{todo:e,toggleTodo:r},e.id)}))})})},j=r("xooM");function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=!0;t.default=function(e){var t=e.games.sort((function(e,t){return t.total_rating-e.total_rating})).sort((function(e,t){return t.rating_count-e.rating_count})),r=Object(n.useState)(t),c=r[0],o=r[1];return Object(a.jsxs)("div",{className:"color-change-4x",children:[Object(a.jsxs)(i.a,{children:[Object(a.jsx)("title",{children:"GameBox | Video Game Bucket List"}),Object(a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(a.jsx)(j.a,{headerText:" Top 100 Video Game Bucket List",paragraphText:"Highest rated video game of the decade. How many of these games have you played? "}),Object(a.jsx)(b,{todos:c,toggleTodo:function(e){var t=c.map((function(t){return t===e?p(p({},t),{},{complete:!t.complete}):t}));o(t)}})]})}},xooM:function(e,t,r){"use strict";var c=r("nKUr");r("q1tI");t.a=function(e){var t=e.headerText,r=e.paragraphText;return Object(c.jsxs)("div",{id:"casual",className:"container container flex lg:bg-transparent\tflex-col justify-center bg-bgcolor text-textwhite text-center py-10 rounded-xl my-3 max-w-md  md:max-w-xl lg:max-w-7xl",children:[Object(c.jsx)("h1",{className:" pb-6 text-base font-bold tracking-widest headings uppercase",children:"Trends"}),Object(c.jsx)("h1",{className:"pb-6 text-3xl font-black headings uppercase",children:t}),Object(c.jsx)("p",{className:" py-2 text-xl font-light leading-relaxed mt-0 mb-6 ",children:r})]})}}},[["ALTb",0,2,1,3,4]]]);
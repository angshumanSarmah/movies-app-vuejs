(function(){"use strict";var t={2399:function(t,e,o){var r=o(6369),n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{id:"app"}},[e("TopNavigation",{staticClass:"header"}),e("router-view",{staticClass:"main-view"})],1)},i=[],s=o(9203),a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"top-navigation"},[e("nav",[e("router-link",{staticClass:"home",attrs:{to:"/"}},[e("span",[t._v("Movie")]),e("span",{staticStyle:{color:"#fff"}},[t._v("App")])])],1),e("div",{staticClass:"right-side-items"},[e("div",{staticClass:"search-holder"},[e("input",{attrs:{type:"text",name:"search",placeholder:"Search..."}}),e("font-awesome-icon",{attrs:{icon:["fas","magnifying-glass"]}})],1),t._m(0)])])},c=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("button",{staticClass:"login-btn"},[t._v("LOGIN")])])}],l=o(2482),u=function(t,e,o,r){var n,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,o,s):n(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s};let f=class extends s.w3{constructor(...t){super(...t),(0,l.Z)(this,"msg",void 0)}};u([(0,s.fI)()],f.prototype,"msg",void 0),f=u([s.wA],f);var v=f,d=v,p=o(1001),h=(0,p.Z)(d,a,c,!1,null,"0fed57ee",null),m=h.exports,g=function(t,e,o,r){var n,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,o,s):n(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s};let b=class extends s.w3{mounted(){this.$store.dispatch("loadPopularMovies")}};b=g([(0,s.wA)({components:{TopNavigation:m}})],b);var y=b,_=y,w=(0,p.Z)(_,n,i,!1,null,null,null),C=w.exports,P=o(2631),O=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"home"},[e("CustomMovieRow",{attrs:{"list-of-movie":t.currentMovieList,category:t.movieCategories.mostPopular}}),e("CustomMovieRow",{attrs:{"list-of-movie":t.currentMovieList,category:t.movieCategories.mostPopular}})],1)},j=[],M=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("div",{staticClass:"category"},[e("h3",[t._v(t._s(t.category))])]),t.scrollAmount>0?e("button",{staticClass:"goto-left-btn",on:{click:function(e){return t.goLeft()}}},[e("div",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)]):t._e(),e("div",{ref:"row",staticClass:"row"},[t.currentMovieList&&0!==t.currentMovieList.length?t._l(t.currentMovieList,(function(t,o){return e("span",{key:o},[e("Card",{staticClass:"card-holder",attrs:{movie:t}})],1)})):e("span",[t._v(" Loading data... ")])],2),t.scrollAmount<2700?e("button",{staticClass:"goto-right-btn",on:{click:function(e){return t.goRight()}}},[e("div",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-right"]}})],1)]):t._e()])},R=[],x=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"card"},[e("router-link",{attrs:{to:""}},[e("img",{staticClass:"image",attrs:{src:t.movieDetails?.poster_path,alt:""}}),e("div",{staticClass:"detail"},[e("h3",[t._v(t._s(t.movieDetails?.title))]),e("p",[t._v(" "+t._s(t.movieDetails?.overview)+" ")])])])],1)},Z=[],A=o(6265),k=o.n(A);const L="https://api.themoviedb.org/3",T="/discover/movie?sort_by=popularity.desc",D="https://image.tmdb.org/t/p/w500",$={async loadPopularMovies({commit:t,state:e}){try{if(!e.moviesApiCalled){const e=await k().get(`${L}${T}&api_key=a2ff32d7bd0bb246b3b0986abe39ddb3`),o=e.data.results.map((t=>{const{title:e,overview:o,poster_path:r}=t;return{title:e,overview:o,poster_path:r}}));t("setMovies",o),t("setMoviesLoaded")}}catch(o){console.error("Error fetching data",o)}}};var S=o(6281),E=o.n(S),N=function(t,e,o,r){var n,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,o,s):n(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s};let I=class extends s.w3{constructor(...t){super(...t),(0,l.Z)(this,"movie",void 0),(0,l.Z)(this,"movieData",void 0)}get movieDetails(){const t=E()(this.movie);return console.log("movieDetails: ",t),t.poster_path=`${D}${this.movie.poster_path}`,t}};N([(0,s.fI)()],I.prototype,"movie",void 0),I=N([s.wA],I);var F=I,B=F,G=(0,p.Z)(B,x,Z,!1,null,"727ba4c1",null),q=G.exports,H=function(t,e,o,r){var n,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,o,s):n(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s};let z=class extends s.w3{constructor(...t){super(...t),(0,l.Z)(this,"listOfMovie",void 0),(0,l.Z)(this,"category",void 0),(0,l.Z)(this,"row",void 0),(0,l.Z)(this,"scrollAmount",0)}mounted(){this.row=this.$refs.row}goRight(){this.scrollAmount<2700&&this.row.scrollTo({left:this.scrollAmount+=900,behavior:"smooth"})}goLeft(){this.scrollAmount>0&&this.row.scrollTo({left:this.scrollAmount-=900,behavior:"smooth"})}get currentMovieList(){return console.log("listOfMovie: ",this.listOfMovie),this.listOfMovie}};H([(0,s.fI)()],z.prototype,"listOfMovie",void 0),H([(0,s.fI)()],z.prototype,"category",void 0),z=H([(0,s.wA)({components:{Card:q}})],z);var J,K=z,Q=K,U=(0,p.Z)(Q,M,R,!1,null,"0c648d7e",null),V=U.exports;(function(t){t["mostPopular"]="Most Popular"})(J||(J={}));var W=function(t,e,o,r){var n,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,o,s):n(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s};let X=class extends s.w3{get currentMovieList(){return console.log("From Home getter: ",this.$store.getters.getMovies),this.$store.getters.getMovies}get movieCategories(){return J}};X=W([(0,s.wA)({components:{Card:q,CustomMovieRow:V}})],X);var Y=X,tt=Y,et=(0,p.Z)(tt,O,j,!1,null,"bc14f2b6",null),ot=et.exports;r.ZP.use(P.ZP);const rt=[{path:"/",name:"home",component:ot},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,2323))}],nt=new P.ZP({mode:"history",base:"/",routes:rt});var it=nt,st=o(3822);const at={getMovies(t){return t.moviesRecord}},ct={setMovies(t,e){console.log("payload to mutater: ",e),t.moviesRecord=e},setMoviesLoaded(t,e=!0){t.moviesApiCalled=e}};var lt=ct;const ut={moviesApiCalled:!1,moviesRecord:[]},ft={state:ut,getters:at,actions:$,mutations:lt};r.ZP.use(st.ZP);const vt={modules:{movies:ft}};var dt=new st.ZP.Store(vt),pt=o(3494),ht=o(8539),mt=o(7749);pt.vI.add(ht.mRB),r.ZP.component("font-awesome-icon",mt.GN),r.ZP.config.productionTip=!1,new r.ZP({router:it,store:dt,render:t=>t(C)}).$mount("#app")}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r](i,i.exports,o),i.loaded=!0,i.exports}o.m=t,function(){var t=[];o.O=function(e,r,n,i){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],n=t[u][1],i=t[u][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(o.O).every((function(t){return o.O[t](r[c])}))?r.splice(c--,1):(a=!1,i<s&&(s=i));if(a){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,n,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,r){return o.f[r](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.024671a4.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="movie-app-vuejs:";o.l=function(r,n,i,s){if(t[r])t[r].push(n);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var f=l[u];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",e+i),a.src=r),t[r]=[n];var v=function(e,o){a.onerror=a.onload=null,clearTimeout(d);var n=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((function(t){return t(o)})),e)return e(o)},d=setTimeout(v.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=v.bind(null,a.onerror),a.onload=v.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){o.p="/"}(),function(){var t={143:0};o.f.j=function(e,r){var n=o.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise((function(o,r){n=t[e]=[o,r]}));r.push(n[2]=i);var s=o.p+o.u(e),a=new Error,c=function(r){if(o.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,n[1](a)}};o.l(s,c,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,i,s=r[0],a=r[1],c=r[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(c)var u=c(o)}for(e&&e(r);l<s.length;l++)i=s[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(u)},r=self["webpackChunkmovie_app_vuejs"]=self["webpackChunkmovie_app_vuejs"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(2399)}));r=o.O(r)})();
//# sourceMappingURL=app.6f6d0b2b.js.map
(function(e){function t(t){for(var a,o,s=t[0],c=t[1],u=t[2],d=0,h=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Lazarvs/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0355":function(e,t,n){},"192c":function(e,t,n){},"2b62":function(e,t,n){"use strict";n("bc1c")},"31e8":function(e,t,n){var a={"./back.svg":"ccfe","./bandcamp.svg":"fe1f","./en.svg":"bc04","./facebook.svg":"aaa3","./hu.svg":"3681","./instagram.svg":"54e6","./spotify.svg":"9451","./twitter.svg":"a3df","./uparrow.svg":"7a27","./youtube.svg":"73dd"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="31e8"},3681:function(e,t,n){e.exports=n.p+"img/hu.svg"},"3c67":function(e,t,n){"use strict";n("0355")},"4a1b":function(e,t,n){"use strict";n("5ee3")},"54d3":function(e,t,n){"use strict";n("192c")},"54e6":function(e,t,n){e.exports=n.p+"img/instagram.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view"),n("Footer")],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{attrs:{toggleable:"lg"}},[a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",[a("router-link",{attrs:{to:"/bio"}},[e._v("BIO")])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/"}},[e._v("LIVE")])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/concerts"}},[e._v("CONCERTS")])],1),a("b-nav-item",{attrs:{href:"https://lazarvs.empiremerch.com"}},[e._v("STORE")]),a("b-nav-item",{attrs:{href:"https://urlzs.com/cKAVW"}},[a("img",{attrs:{height:"70",width:"40",src:n("9451"),alt:"Spotify"}})]),a("b-nav-item",{attrs:{href:"https://www.facebook.com/lazarvsofficial"}},[a("img",{attrs:{height:"70",width:"40",src:n("aaa3"),alt:"Facebook"}})]),a("b-nav-item",{attrs:{href:"https://twitter.com/lazarvs666"}},[a("img",{attrs:{height:"70",width:"40",src:n("a3df"),alt:"Twitter"}})]),a("b-nav-item",{attrs:{href:"https://urlzs.com/iSyHE"}},[a("img",{attrs:{height:"70",width:"40",src:n("73dd"),alt:"Youtube"}})]),a("b-nav-item",{attrs:{href:"https://www.instagram.com/lazarvsofficial"}},[a("img",{attrs:{height:"70",width:"40",src:n("54e6"),alt:"Instagram"}})])],1)],1)],1)},s=[],c={name:"NavBar"},u=c,l=(n("54d3"),n("2877")),d=Object(l["a"])(u,o,s,!1,null,"32bf686a",null),h=d.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"footer"}},[a("div",{staticClass:"centered"},[a("img",{staticClass:"cursor",attrs:{width:"35",height:"35",src:n("7a27"),alt:"up"},on:{click:e.scrollToTop}})]),a("div",{staticClass:"centered-bottom"},[e._v(" © 2009-2021 LAZARVS ")])])},p=[],g={name:"Footer",methods:{scrollToTop:function(){window.scroll({top:0,left:0,behavior:"smooth"})}}},v=g,m=(n("edb1"),Object(l["a"])(v,f,p,!1,null,"2195dc9c",null)),b=m.exports,w={name:"App",components:{Footer:b,NavBar:h}},y=w,_=(n("034f"),Object(l["a"])(y,r,i,!1,null,null,null)),k=_.exports,x=n("8c4f"),O=n("5f5b"),z=n("b1e0"),E=(n("f9e3"),n("2dd8"),n("9955")),L=n.n(E),C=n("2ef0"),S=n.n(C),B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"index"}})},T=[],j={name:"Index"},R=j,A=(n("4a1b"),Object(l["a"])(R,B,T,!1,null,"00cad282",null)),P=A.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"template"},[a("b-container",{staticClass:"container",style:{"margin-top":e.height+"px"}},[a("a",{staticClass:"button languageButton",on:{click:function(t){return e.updateLanguage(e.oppositeLanguage)}}},[a("img",{attrs:{height:"40",width:"40",src:n("31e8")("./"+e.oppositeLanguage+".svg"),alt:e.oppositeLanguage}})]),"en"===e.language?a("div",[a("h1",[e._v("LAZARVS")]),e._v(" formerly known as Apey & the Pea (changed their name in 2019) is a power trio formed in 2008 in the heart of Budapest, after the breakup of a Pantera tribute band where the three founding members met. The band succeeded far from their original plans after releasing four albums, and one EP, serving heavy riffs, loud amps, and sweaty live performances for over a decade. Throughout the years the band mastered their skills with their extremely aggressive live performances, and the commitment to their riff oriented devotion to give their audience the best live experience to walk home with. Such influences like Pantera, High on Fire, and Slayer gave the perfect combination to get on to the top acts in Hungary. LAZARVS became the biggest local metal act in the country selling 1500+ tickets in Budapest. Supported legendary metal acts like Saint Vitus, or Crowbar, Dopethrone, Weedater, Bongripper, Primitive Man at London’s The Underworld several times, played at Desertfest London, and did a 25 date European nightliner tour in 2019. The band also played at Sziget Festival’s main stage, and won the Hungarian music contest ‘Nagyszínpad’. They achieved the best metal album twice throughout their 12 year career at the ‘Hungarian Grammys’ Fonogram Awards, and played at professional showcase festivals like ESNS19’ or Tallinn Music Week in 2019. ")]):e._e(),"hu"===e.language?a("div",[a("h1",[e._v("LAZARVS")]),e._v(" test ")]):e._e(),a("br"),a("br"),a("a",{staticClass:"cursor back",attrs:{href:"/"}},[a("img",{attrs:{height:"25",width:"20",src:n("ccfe"),alt:"Back"}}),e._v("Back")]),a("br")]),a("br"),a("br")],1)},F=[],D={name:"Bio",data:function(){return{height:0,language:"en",oppositeLanguage:"hu"}},created:function(){window.addEventListener("resize",this.handleResize)},mounted:function(){this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.height=document.getElementsByClassName("navbar")[0].clientHeight+20},updateLanguage:function(e){this.oppositeLanguage=this.language,this.language=e}}},H=D,M=(n("2b62"),Object(l["a"])(H,N,F,!1,null,"2d59e1de",null)),V=M.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"template"},[a("b-container",{staticClass:"container",style:{"margin-top":e.height+"px"}},[e.concerts.length?a("div",[a("b-table-simple",{attrs:{striped:"",responsive:""}},[a("b-tbody",e._l(e.concerts,(function(t){return a("b-tr",{key:t.id},[a("b-td",[e._v(e._s(t.date))]),a("b-td",[e._v(e._s(t.name))]),a("b-td",[e._v(e._s(t.place))]),a("b-td",[a("a",{attrs:{href:t.link}},[a("img",{attrs:{height:"25",width:"25",src:n("aaa3"),alt:"Facebook"}})])])],1)})),1)],1)],1):a("div",{staticClass:"center"},[e._v(" No Concerts ")]),a("br"),a("br"),a("a",{staticClass:"cursor back",attrs:{href:"/"}},[a("img",{attrs:{height:"25",width:"20",src:n("ccfe"),alt:"Back"}}),e._v("Back")]),a("br")])],1)},I=[],Z=(n("4de4"),n("d3b7"),n("fb6a"),{name:"Concerts",data:function(){return{all:!1,concerts:[],height:0}},created:function(){window.addEventListener("resize",this.handleResize)},mounted:function(){this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.height=document.getElementsByClassName("navbar")[0].clientHeight+20},getConcertData:function(){var e=this;this.axios.get("https://api.momgmt.hu/concerts/lazarvs").then((function(t){var n=t.data.filter((function(e){return new Date(e.date)>new Date}));n.length&&(e.concerts=e._.sortBy(n,"date"),e.all||(e.concerts=e.concerts.slice(0,10)))})).catch((function(){}))}}}),U=Z,W=(n("3c67"),Object(l["a"])(U,$,I,!1,null,"2bb01226",null)),J=W.exports;a["default"].use(x["a"]),a["default"].use(O["a"]),a["default"].use(z["a"]),a["default"].use(L.a,{lodash:S.a});var G=new x["a"]({mode:"history",base:"/Lazarvs/",routes:[{path:"/",name:"index",component:P},{path:"/bio",name:"bio",component:V},{path:"/concerts",name:"concerts",component:J}],scrollBehavior:function(){return{x:0,y:0}}});a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(k)},router:G}).$mount("#app")},"5ee3":function(e,t,n){},"73dd":function(e,t,n){e.exports=n.p+"img/youtube.svg"},"7a27":function(e,t,n){e.exports=n.p+"img/uparrow.svg"},"85ec":function(e,t,n){},9451:function(e,t,n){e.exports=n.p+"img/spotify.svg"},a3df:function(e,t,n){e.exports=n.p+"img/twitter.svg"},aaa3:function(e,t,n){e.exports=n.p+"img/facebook.svg"},bc04:function(e,t,n){e.exports=n.p+"img/en.svg"},bc1c:function(e,t,n){},c76a:function(e,t,n){},ccfe:function(e,t,n){e.exports=n.p+"img/back.svg"},edb1:function(e,t,n){"use strict";n("c76a")},fe1f:function(e,t,n){e.exports=n.p+"img/bandcamp.svg"}});
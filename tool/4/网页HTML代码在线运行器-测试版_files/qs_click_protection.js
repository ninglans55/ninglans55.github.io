(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function k(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function ba(a){if(!(a instanceof Array)){a=k(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)}; 
function ea(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var fa=ea(this);function ha(a,b){if(b){var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}} 
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};ha("Object.assign",function(a){return a||ia});var n=this||self;function ja(){} 
function ka(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null"; 
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function la(a,b,c){return a.call.apply(a.bind,arguments)}function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}} 
function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=la:r=ma;return r.apply(null,arguments)}var na=Date.now||function(){return+new Date};function t(a,b){function c(){}c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a};var u=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};function oa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};function x(a,b){this.b=a===y&&b||"";this.c=pa}x.prototype.f=!0;x.prototype.a=function(){return this.b.toString()};var qa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function ra(a){if(a instanceof x)return a;a="object"==typeof a&&a.f?a.a():String(a);qa.test(a)||(a="about:invalid#zClosurez");return new x(y,a)}var pa={},y={};function A(a){A[" "](a);return a}A[" "]=ja;function B(){}var ta="function"==typeof Uint8Array;function D(a,b,c){a.a=null;b||(b=[]);a.j=void 0;a.f=-1;a.b=b;a:{if(b=a.b.length){--b;var d=a.b[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||ta&&d instanceof Uint8Array)){a.g=b-a.f;a.c=d;break a}}a.g=Number.MAX_VALUE}a.i={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.g)d+=a.f,a.b[d]=a.b[d]||F;else{var e=a.g+a.f;a.b[e]||(a.c=a.b[e]={});a.c[d]=a.c[d]||F}}var F=[]; 
function G(a,b){if(b<a.g){b+=a.f;var c=a.b[b];return c===F?a.b[b]=[]:c}if(a.c)return c=a.c[b],c===F?a.c[b]=[]:c}function H(a,b,c){a=G(a,b);return null==a?c:a}function I(a,b){a=G(a,b);a=null==a?a:!!a;return null==a?!1:a}function ua(a){var b=va;a.a||(a.a={});if(!a.a[1]){var c=G(a,1);c&&(a.a[1]=new b(c))}return a.a[1]}function wa(a){var b=xa;a.a||(a.a={});if(!a.a[1]){for(var c=G(a,1),d=[],e=0;e<c.length;e++)d[e]=new b(c[e]);a.a[1]=d}b=a.a[1];b==F&&(b=a.a[1]=[]);return b}B.prototype.toString=function(){return this.b.toString()};function va(a){D(this,a,ya)}t(va,B);function xa(a){D(this,a,null)}t(xa,B);var ya=[1];function za(a){D(this,a,null)}t(za,B);var Aa={capture:!0},Ba={passive:!0},Ca=oa(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});n.addEventListener("test",null,b)}catch(c){}return a});function Da(a){return a?a.passive&&Ca()?a:a.capture||!1:!1}function J(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Da(d))};var K=document,N=window;function Ea(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ea(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};function Fa(){var a=O;try{var b;if(b=!!a&&null!=a.location.href)a:{try{A(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Ga(a){"complete"===K.readyState||"interactive"===K.readyState?a():K.addEventListener("DOMContentLoaded",a)};var Ha=/^((market|itms|intent|itms-appss):\/\/)/i;function Ia(){var a=(Ja()?"http:":"https:")+"//pagead2.googlesyndication.com/pagead/gen_204";return function(b){b={id:"unsafeurl",ctx:625,url:b};var c=[];for(d in b)Ea(d,b[d],c);var d=c.join("&");if(d){b=a.indexOf("#");0>b&&(b=a.length);c=a.indexOf("?");if(0>c||c>b){c=b;var e=""}else e=a.substring(c+1,b);b=[a.substr(0,c),e,a.substr(b)];c=b[1];b[1]=d?c?c+"&"+d:d:c;d=b[0]+(b[1]?"?"+b[1]:"")+b[2]}else d=a;navigator.sendBeacon&&navigator.sendBeacon(d,"")}};function Ka(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}function Ja(){var a=void 0===a?N:a;return"http:"===a.location.protocol}var La=!!window.google_async_iframe_id,O=La&&window.parent||window;function Ma(a,b){a&&Ka(b,function(c,d){a.style[d]=c})}function Na(a){for(var b=K.body,c=document.createDocumentFragment(),d=a.length,e=0;e<d;++e)c.appendChild(a[e]);b.appendChild(c)};function Oa(a){a=void 0===a?[]:a;n.google_logging_queue||(n.google_logging_queue=[]);n.google_logging_queue.push([12,a])};var P=null;function Pa(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var Q=n.performance,Qa=!!(Q&&Q.mark&&Q.measure&&Q.clearMarks),R=oa(function(){var a;if(a=Qa){var b;if(null===P){P="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(P=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=P;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); 
function Ra(){var a=S;this.a=[];this.c=a||n;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.a=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=R()||(null!=b?b:1>Math.random())}function Sa(a){a&&Q&&R()&&(Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))} 
Ra.prototype.start=function(a,b){if(!this.b)return null;var c=void 0===c?n:c;c=c.performance;(c=c&&c.now?c.now():null)||(c=(c=n.performance)&&c.now&&c.timing?Math.floor(c.now()+c.timing.navigationStart):na());a=new Pa(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";Q&&R()&&Q.mark(b);return a};if(La&&!Fa()){var T="."+K.domain;try{for(;2<T.split(".").length&&!Fa();)K.domain=T=T.substr(T.indexOf(".")+1),O=window.parent}catch(a){}Fa()||(O=window)}var S=O,U=new Ra;function Ta(){S.google_measure_js_timing||(U.b=!1,U.a!=U.c.google_js_reporting_queue&&(R()&&u(U.a,Sa),U.a.length=0))}"number"!==typeof S.google_srt&&(S.google_srt=Math.random());"complete"==S.document.readyState?Ta():U.b&&J(S,"load",function(){Ta()});function Ua(a){var b=void 0===b?null:b;J(N,"message",function(c){try{var d=JSON.parse(c.data)}catch(e){return}!d||"ig"!==d.googMsgType||b&&/[:|%3A]javascript\(/i.test(c.data)&&!b(d,c)||a(d,c)})};function W(){this.b=this.b;this.c=this.c}W.prototype.b=!1;function Va(a){a.b||(a.b=!0,a.f())}W.prototype.f=function(){if(this.c)for(;this.c.length;)this.c.shift()()};function X(a,b,c){W.call(this);this.g=a;this.u=b||0;this.i=c;this.j=r(this.o,this)}t(X,W);X.prototype.a=0;X.prototype.f=function(){X.C.f.call(this);this.stop();delete this.g;delete this.i};X.prototype.start=function(a){this.stop();var b=this.j;a=void 0!==a?a:this.u;if("function"!=ka(b))if(b&&"function"==typeof b.handleEvent)b=r(b.handleEvent,b);else throw Error("Invalid listener argument");this.a=2147483647<Number(a)?-1:n.setTimeout(b,a||0)}; 
X.prototype.stop=function(){0!=this.a&&n.clearTimeout(this.a);this.a=0};X.prototype.o=function(){this.a=0;this.g&&this.g.call(this.i)};var Wa={display:"inline-block",position:"absolute"},Xa={display:"none",width:"100%",height:"100%",top:"0",left:"0"};function Y(a,b){a&&(a.style.display=b?"inline-block":"none")}function Ya(a,b){if(a)return N.getComputedStyle(a).getPropertyValue(b)}function Za(){this.f=[];this.g=this.b=null;this.A=[];this.a=null;this.u=[];this.c=[];this.j=[];this.o={};this.B=[];this.i=null} 
Za.prototype.init=function(a){var b=this;Oa([a]);this.a=new za(a);a=ua(this.a);u(wa(a),function(m){b.j.push({v:0,m:!1,w:0,h:m,s:-1})});try{var c=K.querySelectorAll("*[data-ifc]")}catch(m){c=[]}this.c=c;var d=!1;c=this.c.length;for(a={l:0};a.l<c;a={l:a.l},++a.l){var e=new va(JSON.parse(this.c[a.l].getAttribute("data-ifc")||"[]"));u(wa(e),function(m){return function(f){b.j.push({v:0,m:!1,w:0,h:f,s:m.l});1===H(f,4,1)&&(d=!0)}}(a))}c=!1;a=k(this.j);for(e=a.next();!e.done;e=a.next()){e=e.value;var v=e.h; 
0<H(v,2,0)&&0<H(v,5,1)?(!this.b&&I(v,9)&&(this.b=$a(this,Xa)),ab(this,e)):H(v,1,"")&&I(v,9)&&bb(this,H(v,1,""));H(v,1,"")&&(c=!0)}a=[];this.b&&a.push(this.b);!d&&a.push.apply(a,ba(this.f));K.body&&Na(a);I(this.a,13)&&Ga(function(){for(var m=K.body.querySelectorAll(".amp-fcp, .amp-bcp"),f=0;f<m.length;++f)"absolute"===Ya(m[f],"position")&&Y(m[f],!1)});J(K,"click",function(m){for(var f,L=-1,da=[],sa=k(b.j),w=sa.next();!w.done;w=sa.next()){w=w.value;var h=w.s,l=-1!==h;if(!(H(w.h,3,0)<=L||w.m||l&&!1=== 
da[h])){var E=!l||da[h]||b.c[h].contains(m.target);l&&E&&(da[h]=!0);if(h=E){h=m;var p=w;l=p.h;if(0<H(l,2,0)&&0<H(l,5,1))h=b.o[H(l,5,1)],h=void 0!==h&&Date.now()<h+H(l,2,0);else if(H(l,1,"")){l=(0<=p.s?b.c[p.s]:K.body).getBoundingClientRect();E=parseFloat(Ya(K.body,"zoom")||1);var q=k([h.clientX,h.clientY]),M=q.next().value;q=q.next().value;q=k([M/E-l.left,q/E-l.top,l.width,l.height]);var C=q.next().value,V=q.next().value;M=q.next().value;q=q.next().value;!(0<M&&0<q)||isNaN(C)||isNaN(V)||0>C||0>V? 
h=!1:(p=cb(H(p.h,1,"")),C=!(C>=p.left&&M-C>p.right&&V>=p.top&&q-V>p.bottom),b.i&&I(b.a,12)&&500>h.timeStamp-b.i.timeStamp&&(h=b.i.changedTouches[0],l=k([h.clientX/E-l.left,h.clientY/E-l.top]),h=l.next().value,l=l.next().value,!isNaN(h)&&!isNaN(l)&&0<=h&&0<=l&&(C=C||!(h>=p.left&&M-h>p.right&&l>=p.top&&q-l>p.bottom))),h=C)}else h=!0}h&&(f=w,L=H(w.h,3,0))}}if(f)switch(L=f.h,H(L,4,1)){case 2:case 3:var g=void 0===g?!1:g;m.preventDefault?m.preventDefault():m.returnValue=!1;g&&m.stopPropagation();g=Date.now(); 
500<g-f.w&&(f.w=g,++f.v);g=f.h;if(H(g,8,0)&&f.v>=H(g,8,0))if(f.m=!0,b.b&&0<H(g,2,0))db(b);else if(0<b.f.length&&H(g,1,""))for(g=k(b.f),f=g.next();!f.done;f=g.next())Y(f.value,!1);var z=void 0===z?.01:z;if(!(Math.random()>z)){g=document.currentScript;g=(g=void 0===g?null:g)&&23==g.getAttribute("data-jc")?g:document.querySelector('[data-jc="23"]');z="https://pagead2.googleadservices.com/pagead/gen_204?id=jca&jc=23&version="+(g&&g.getAttribute("data-jc-version")||"unknown")+"&sample="+z;g=window;if(f= 
g.navigator)f=g.navigator.userAgent,f=/Chrome/.test(f)&&!/Edge/.test(f)?!0:!1;f&&g.navigator.sendBeacon?g.navigator.sendBeacon(z):(g.google_image_requests||(g.google_image_requests=[]),f=g.document.createElement("img"),f.src=z,g.google_image_requests.push(f))}z=L.b;g=k(b.u);for(f=g.next();!f.done;f=g.next())f=f.value,f(m,z)}},Aa);c&&I(this.a,12)&&J(K,"touchend",function(m){b.i=m},Ba)};Za.prototype.registerCallback=function(a){this.u.push(a)}; 
function bb(a,b){b=cb(b);var c=H(a.a,9,0);a.f=[{width:"100%",height:b.top+c+"px",top:-c+"px",left:"0"},{width:b.right+c+"px",height:"100%",top:"0",right:-c+"px"},{width:"100%",height:b.bottom+c+"px",bottom:-c+"px",left:"0"},{width:b.left+c+"px",height:"100%",top:"0",left:-c+"px"}].map(function(d){return $a(a,d,9019)})}function Z(a,b){if(!b.m){var c=H(b.h,5,1);a.o[c]=Date.now();I(b.h,9)&&(a.A.push(b),db(a))}} 
function ab(a,b){switch(H(b.h,5,1)){case 2:N.AFMA_Communicator&&N.AFMA_Communicator.addEventListener&&N.AFMA_Communicator.addEventListener("onshow",function(){Z(a,b)});break;case 10:J(N,"i-creative-view",function(){Z(a,b)});break;case 4:J(K,"DOMContentLoaded",function(){Z(a,b)});break;case 8:Ua(function(d){d.rr&&Z(a,b)});break;case 9:if(N.IntersectionObserver){var c=new IntersectionObserver(function(d){d=k(d);for(var e=d.next();!e.done;e=d.next())if(0<e.value.intersectionRatio){Z(a,b);break}});c.observe(K.body); 
a.B.push(c)}break;case 11:N.AFMA_Communicator&&N.AFMA_Communicator.addEventListener&&N.AFMA_Communicator.addEventListener("onAdVisibilityChanged",function(){Z(a,b)})}}function db(a){for(var b=0,c=k(a.A),d=c.next();!d.done;d=c.next()){d=d.value;var e=d.h,v=a.o[H(e,5,1)];d.m||void 0===v||(b=Math.max(b,v+H(e,2,0)))}a.g&&Va(a.g);b-=Date.now();var m=a.b;0<b?(Y(m,!0),a.g=new X(function(){Y(m,!1)},b),a.g.start()):Y(m,!1)} 
function $a(a,b,c){var d=K.createElement("DIV");Ma(d,Object.assign(Wa,{"z-index":void 0===c?2147483647:c},b));I(a.a,10)&&J(d,"click",ja);if(I(a.a,11)){a=K.createElement("A");b=Ia();var e;Ha.test("#")?e=new x(y,"#"):e="#";"about:invalid#zClosurez"===(e instanceof x?e:ra(e)).a()&&b(String(e));e=e instanceof x?e:ra(e);a.href=e instanceof x&&e.constructor===x&&e.c===pa?e.b:"type_error:SafeUrl";a.appendChild(d);return a}return d} 
function cb(a){a=void 0===a?"":a;var b={top:0,right:0,bottom:0,left:0};a&&(a=a.split(","),4==a.length&&a.reduce(function(c,d){return c&&!isNaN(d)},!0)&&(a=k(a.map(function(c){return+c})),b.top=a.next().value,b.right=a.next().value,b.bottom=a.next().value,b.left=a.next().value));return b};window.googqscp=new Za;}).call(this);

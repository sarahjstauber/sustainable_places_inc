/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundsize-bgpositionshorthand-bgpositionxy-bgsizecover-borderradius-boxshadow-csstransitions-fontface-formvalidation-htmlimports-inputtypes-overflowscrolling-picture-setclasses !*/
!function(e,t,n){function i(e,t){return typeof e===t}function o(){var e,t,n,o,r,s,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],t=w[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=i(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)s=e[r],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),b.push((o?"":"no-")+a.join("-"))}}function r(e){var t=T.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?T.className.baseVal=t:T.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){if("object"==typeof e)for(var n in e)E(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),o=Modernizr[i[0]];if(2==i.length&&(o=o[i[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),r([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function l(){var e=t.body;return e||(e=s(C?"svg":"body"),e.fake=!0),e}function u(e,n,i,o){var r,a,u,d,f="modernizr",c=s("div"),p=l();if(parseInt(i,10))for(;i--;)u=s("div"),u.id=o?o[i]:f+(i+1),c.appendChild(u);return r=s("style"),r.type="text/css",r.id="s"+f,(p.fake?p:c).appendChild(r),p.appendChild(c),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",d=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),a=n(c,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=d,T.offsetHeight):c.parentNode.removeChild(c),!!a}function d(e,t){return!!~(""+e).indexOf(t)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var r in e)if(e[r]in t)return n===!1?e[r]:(o=t[e[r]],i(o,"function")?c(o,n||t):o);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(t,i){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(t[o]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];o--;)r.push("("+m(t[o])+":"+i+")");return r=r.join(" or "),u("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,o,r){function a(){u&&(delete R.style,delete R.modElem)}if(r=i(r,"undefined")?!1:r,!i(o,"undefined")){var l=g(e,o);if(!i(l,"undefined"))return l}for(var u,c,p,m,h,v=["modernizr","tspan"];!R.style;)u=!0,R.modElem=s(v.shift()),R.style=R.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],h=R.style[m],d(m,"-")&&(m=f(m)),R.style[m]!==n){if(r||i(o,"undefined"))return a(),"pfx"==t?m:!0;try{R.style[m]=o}catch(y){}if(R.style[m]!=h)return a(),"pfx"==t?m:!0}return a(),!1}function v(e,t,n,o,r){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+N.join(s+" ")+s).split(" ");return i(t,"string")||i(t,"undefined")?h(a,t,o,r):(a=(e+" "+A.join(s+" ")+s).split(" "),p(a,t,n))}function y(e,t,i){return v(e,n,n,t,i)}var b=[],w=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("picture","HTMLPictureElement"in e);var T=t.documentElement,C="svg"===T.nodeName.toLowerCase();Modernizr.addTest("bgpositionshorthand",function(){var e=s("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n});var _=s("input"),S="search tel url email datetime date month week time datetime-local number range color".split(" "),k={};Modernizr.inputtypes=function(e){for(var i,o,r,s=e.length,a="1)",l=0;s>l;l++)_.setAttribute("type",i=e[l]),r="text"!==_.type&&"style"in _,r&&(_.value=a,_.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&_.style.WebkitAppearance!==n?(T.appendChild(_),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(_,null).WebkitAppearance&&0!==_.offsetHeight,T.removeChild(_)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?_.checkValidity&&_.checkValidity()===!1:_.value!=a)),k[e[l]]=!!r;return k}(S);var E;!function(){var e={}.hasOwnProperty;E=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},x._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){x.addTest=a}),a("htmlimports","import"in s("link"));var P=x.testStyles=u,z=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),i=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return n||o||i}();z?Modernizr.addTest("fontface",!1):P('@font-face {font-family:"font";src:url("https://")}',function(e,n){var i=t.getElementById("smodernizr"),o=i.sheet||i.styleSheet,r=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",s=/src/i.test(r)&&0===r.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",s)}),Modernizr.addTest("formvalidation",function(){var t=s("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,i=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',P("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){i=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),i});var L="Moz O ms Webkit",N=x._config.usePrefixes?L.split(" "):[];x._cssomPrefixes=N;var A=x._config.usePrefixes?L.toLowerCase().split(" "):[];x._domPrefixes=A;var j={elem:s("modernizr")};Modernizr._q.push(function(){delete j.elem});var R={style:j.elem.style};Modernizr._q.unshift(function(){delete R.style}),x.testAllProps=v,x.testAllProps=y,Modernizr.addTest("bgpositionxy",function(){return y("backgroundPositionX","3px",!0)&&y("backgroundPositionY","5px",!0)}),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",y("backgroundSize","cover")),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("overflowscrolling",y("overflowScrolling","touch",!0)),Modernizr.addTest("csstransitions",y("transition","all",!0)),o(),r(b),delete x.addTest,delete x.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);
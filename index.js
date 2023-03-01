// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).group=r()}(this,(function(){"use strict";var t=Math.floor;function r(r){return t(r)===r}function e(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&r(t.length)&&t.length>=0&&t.length<=9007199254740991}function n(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function u(){return o&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var c=Object.prototype.hasOwnProperty;function f(t,r){return null!=t&&c.call(t,r)}var l="function"==typeof Symbol?Symbol.toStringTag:"";var a=u()?function(t){var r,e,n;if(null==t)return i.call(t);e=t[l],r=f(t,l);try{t[l]=void 0}catch(r){return i.call(t)}return n=i.call(t),r?t[l]=e:delete t[l],n}:function(t){return i.call(t)};var s=Array.isArray?Array.isArray:function(t){return"[object Array]"===a(t)};var p=/./,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var b,v=Object.defineProperty,g=Object.prototype,j=g.toString,h=g.__defineGetter__,d=g.__defineSetter__,m=g.__lookupGetter__,w=g.__lookupSetter__;b=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?v:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===j.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===j.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(m.call(t,r)||w.call(t,r)?(n=t.__proto__,t.__proto__=g,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&h&&h.call(t,r,e.get),i&&d&&d.call(t,r,e.set),t};var _=b;function O(t,r,e){_(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function S(t){return"boolean"==typeof t}var E=Boolean.prototype.toString;var T=u();function P(t){return"object"==typeof t&&(t instanceof Boolean||(T?function(t){try{return E.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===a(t)))}function I(t){return S(t)||P(t)}function k(){return new Function("return this;")()}O(I,"isPrimitive",S),O(I,"isObject",P);var A="object"==typeof self?self:null,B="object"==typeof window?window:null,N="object"==typeof global?global:null;var V=function(t){if(arguments.length){if(!S(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return k()}if(A)return A;if(B)return B;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),F=V.document&&V.document.childNodes,x=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;function L(t){return null!==t&&"object"==typeof t}function M(t){var r,e,n,o;if(("Object"===(e=a(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=G.exec(n.toString()))return r[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}O(C,"REGEXP",G),O(L,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!s(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(L));var R="function"==typeof p||"object"==typeof x||"function"==typeof F?function(t){return M(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?M(t).toLowerCase():r};function U(t){return"function"===R(t)}var Y,X=Object.getPrototypeOf;Y=U(Object.getPrototypeOf)?X:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===a(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var q=Y;var z=Object.prototype;function D(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!s(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),q(t))}(t),!r||!f(t,"constructor")&&f(r,"constructor")&&U(r.constructor)&&"[object Function]"===a(r.constructor)&&f(r,"isPrototypeOf")&&U(r.isPrototypeOf)&&(r===z||function(t){var r;for(r in t)if(!f(t,r))return!1;return!0}(t)))}function H(t){return"number"==typeof t}var J=Number,K=J.prototype.toString;var Q=u();function W(t){return"object"==typeof t&&(t instanceof J||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object Number]"===a(t)))}function Z(t){return H(t)||W(t)}function $(t){return t!=t}function tt(t){return H(t)&&$(t)}function rt(t){return W(t)&&$(t.valueOf())}function et(t){return tt(t)||rt(t)}function nt(t){return"string"==typeof t}O(Z,"isPrimitive",H),O(Z,"isObject",W),O(et,"isPrimitive",tt),O(et,"isObject",rt);var ot=String.prototype.valueOf;var ut=u();function it(t){return"object"==typeof t&&(t instanceof String||(ut?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object String]"===a(t)))}function ct(t){return nt(t)||it(t)}O(ct,"isPrimitive",nt),O(ct,"isObject",it);var ft=Number.POSITIVE_INFINITY,lt=J.NEGATIVE_INFINITY;function at(t){return t<ft&&t>lt&&r(t)}function st(t){return H(t)&&at(t)}function pt(t){return W(t)&&at(t.valueOf())}function yt(t){return st(t)||pt(t)}O(yt,"isPrimitive",st),O(yt,"isObject",pt);var bt=["values","indices","*"];function vt(t,r){return D(r)?f(r,"returns")&&(t.returns=r.returns,-1===function(t,r,n){var o,u;if(!e(t)&&!nt(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(o=t.length))return-1;if(3===arguments.length){if(!st(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=o)return-1;u=n}else(u=o+n)<0&&(u=0)}else u=0;if(et(r)){for(;u<o;u++)if(et(t[u]))return u}else for(;u<o;u++)if(t[u]===r)return u;return-1}(bt,t.returns))?new TypeError(n("0k03t","returns",bt.join('", "'),t.returns)):null:new TypeError(n("0k02h",r))}function gt(t,r){var e,n,o,u;for(n=t.length,e={},u=0;u<n;u++)f(e,o=r[u].toString())?e[o].push(t[u]):e[o]=[t[u]];return e}function jt(t,r){var e,n,o,u;for(n=t.length,e={},u=0;u<n;u++)f(e,o=r[u].toString())?e[o].push(u):e[o]=[u];return e}function ht(t,r){var e,n,o,u;for(n=t.length,e={},u=0;u<n;u++)f(e,o=r[u].toString())?e[o].push([u,t[u]]):e[o]=[[u,t[u]]];return e}return function(t,r,o){var u,i,c;if(!e(t))throw new TypeError(n("0k0BO",t));if(u={returns:"values"},2===arguments.length)c=r;else{if(i=vt(u,r))throw i;c=o}if(!e(c))throw new TypeError(n("0k0BT",c));if(t.length!==c.length)throw new RangeError(n("0k01k"));return"values"===u.returns?gt(t,c):"indices"===u.returns?jt(t,c):ht(t,c)}}));
//# sourceMappingURL=index.js.map
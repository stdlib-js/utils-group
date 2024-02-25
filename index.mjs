// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-group-values@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-group-indices@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-group-entries@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.2.1-esm/index.mjs";var m=["values","indices","*"];function l(l,p,j){var h,a,u;if(!r(l))throw new TypeError(n("1UJAh",l));if(h={returns:"values"},2===arguments.length)u=p;else{if(a=function(r,s){return i(s)?o(s,"returns")&&(r.returns=s.returns,-1===d(m,r.returns))?new TypeError(n("1UJ4S","returns",m.join('", "'),r.returns)):null:new TypeError(n("1UJ2V",s))}(h,p),a)throw a;u=j}if(!r(u))throw new TypeError(n("1UJAm",u));if(l.length!==u.length)throw new RangeError(n("1UJ1a"));return"values"===h.returns?s(l,u):"indices"===h.returns?e(l,u):t(l,u)}export{l as default};
//# sourceMappingURL=index.mjs.map

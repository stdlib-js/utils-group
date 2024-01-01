"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=a(function(V,v){
var h=require('@stdlib/assert-is-plain-object/dist'),q=require('@stdlib/assert-has-own-property/dist'),w=require('@stdlib/utils-index-of/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist'),s=["values","indices","*"];function p(r,e){return h(e)?q(e,"returns")&&(r.returns=e.returns,w(s,r.returns)===-1)?new TypeError(i('1UJ4S',"returns",s.join('", "'),r.returns)):null:new TypeError(i('1UJ2V',e));}v.exports=p
});var o=a(function(j,g){
var m=require('@stdlib/assert-is-collection/dist'),b=require('@stdlib/array-base-group-values/dist'),c=require('@stdlib/array-base-group-indices/dist'),E=require('@stdlib/array-base-group-entries/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist'),O=l();function x(r,e,d){var u,n,t;if(!m(r))throw new TypeError(f('1UJAh',r));if(u={returns:"values"},arguments.length===2)t=e;else{if(n=O(u,e),n)throw n;t=d}if(!m(t))throw new TypeError(f('1UJAm',t));if(r.length!==t.length)throw new RangeError(f('1UJ1a'));return u.returns==="values"?b(r,t):u.returns==="indices"?c(r,t):E(r,t)}g.exports=x
});var y=o();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

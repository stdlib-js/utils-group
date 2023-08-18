"use strict";var i=function(e,u){return function(){return u||e((u={exports:{}}).exports,u),u.exports}};var g=i(function(B,o){
var x=require('@stdlib/assert-is-plain-object/dist'),E=require('@stdlib/assert-has-own-property/dist'),P=require('@stdlib/utils-index-of/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist'),v=["values","indices","*"];function y(e,u){return x(u)?E(u,"returns")&&(e.returns=u.returns,P(v,e.returns)===-1)?new TypeError(s('1UJ4S',"returns",v.join('", "'),e.returns)):null:new TypeError(s('1UJ2V',u));}o.exports=y
});var l=i(function(D,f){
var T=require('@stdlib/assert-has-own-property/dist');function V(e,u){var t,a,n,r;for(a=e.length,t={},r=0;r<a;r++)n=u[r].toString(),T(t,n)?t[n].push(e[r]):t[n]=[e[r]];return t}f.exports=V
});var p=i(function(G,h){
var c=require('@stdlib/assert-has-own-property/dist');function j(e,u){var t,a,n,r;for(a=e.length,t={},r=0;r<a;r++)n=u[r].toString(),c(t,n)?t[n].push(r):t[n]=[r];return t}h.exports=j
});var q=i(function(H,m){
var S=require('@stdlib/assert-has-own-property/dist');function F(e,u){var t,a,n,r;for(a=e.length,t={},r=0;r<a;r++)n=u[r].toString(),S(t,n)?t[n].push([r,e[r]]):t[n]=[[r,e[r]]];return t}m.exports=F
});var b=i(function(J,O){
var w=require('@stdlib/assert-is-collection/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),C=g(),I=l(),L=p(),R=q();function k(e,u,t){var a,n,r;if(!w(e))throw new TypeError(d('1UJAh',e));if(a={returns:"values"},arguments.length===2)r=u;else{if(n=C(a,u),n)throw n;r=t}if(!w(r))throw new TypeError(d('1UJAm',r));if(e.length!==r.length)throw new RangeError(format('1UJ1a'));return a.returns==="values"?I(e,r):a.returns==="indices"?L(e,r):R(e,r)}O.exports=k
});var z=b();module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

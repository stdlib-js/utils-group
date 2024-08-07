"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=a(function(V,v){"use strict";var h=require("@stdlib/assert-is-plain-object"),q=require("@stdlib/assert-has-own-property"),w=require("@stdlib/utils-index-of"),i=require("@stdlib/string-format"),s=["values","indices","*"];function p(r,e){return h(e)?q(e,"returns")&&(r.returns=e.returns,w(s,r.returns)===-1)?new TypeError(i('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",s.join('", "'),r.returns)):null:new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",e))}v.exports=p});var o=a(function(j,g){"use strict";var m=require("@stdlib/assert-is-collection"),b=require("@stdlib/array-base-group-values"),c=require("@stdlib/array-base-group-indices"),E=require("@stdlib/array-base-group-entries"),f=require("@stdlib/string-format"),O=l();function x(r,e,d){var u,n,t;if(!m(r))throw new TypeError(f("invalid argument. First argument must be a collection. Value: `%s`.",r));if(u={returns:"values"},arguments.length===2)t=e;else{if(n=O(u,e),n)throw n;t=d}if(!m(t))throw new TypeError(f("invalid argument. Last argument must be a collection. Value: `%s`.",t));if(r.length!==t.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return u.returns==="values"?b(r,t):u.returns==="indices"?c(r,t):E(r,t)}g.exports=x});var y=o();module.exports=y;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map

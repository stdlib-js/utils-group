<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# group

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Group values as arrays associated with distinct keys.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-group
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var group = require( '@stdlib/utils-group' );
```

#### group( collection, \[options,] groups )

Groups values as arrays associated with distinct keys.

```javascript
var arr = [ 'beep', 'boop', 'foo', 'bar' ];
var groups = [ 'b', 'b', 'f', 'b' ];

var out = group( arr, groups );
// returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
```

The function accepts the following `options`:

-   `returns`: specifies the output format. If the option equals `'values'`, the function outputs element values. If the option equals `'indices'`, the function outputs element indices. If the option equals `'*'`, the function outputs both element indices and values. Default: `'values'`.

By default, the function returns element values. To return element indices, set the `returns` option to `'indices'`.

```javascript
var arr = [ 'beep', 'boop', 'foo', 'bar' ];
var groups = [ 'b', 'b', 'f', 'b' ];

var opts = {
    'returns': 'indices'
};
var out = group( arr, opts, groups );
// returns { 'b': [ 0, 1, 3 ], 'f': [ 2 ] }
```

To return index-element pairs, set the `returns` option to `'*'`.

```javascript
var arr = [ 'beep', 'boop', 'foo', 'bar' ];
var groups = [ 'b', 'b', 'f', 'b' ];

var opts = {
    'returns': '*'
};
var out = group( arr, opts, groups );
// returns { 'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], 'f': [ [ 2, 'foo' ] ] }
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Both `collection` and `groups` **must** be collections. A collection may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   Each value in `groups` should resolve to a value which can be serialized as an `object` key. As a counterexample,

    ```javascript
    var arr = [ 'beep', 'boop', 'foo', 'bar' ];
    var groups = [ {}, {}, {}, {} ];

    var out = group( arr, groups );
    // returns { '[object Object]': [ 'beep', 'boop', 'foo', 'bar' ] }
    ```

    while each "group" is unique, all collection elements resolve to the same group because each group identifier serializes to the same `string`. 

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var floor = require( '@stdlib/math-base-special-floor' );
var group = require( '@stdlib/utils-group' );

var vals;
var arr;
var out;
var g;
var i;
var j;

vals = [ 'beep', 'boop', 'foo', 'bar', 'woot', 'woot' ];

// Generate a random collection...
arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    j = floor( randu()*vals.length );
    arr[ i ] = vals[ j ];
}

// Randomly assign collection values to groups...
g = new Array( arr.length );
for ( i = 0; i < arr.length; i++ ) {
    g[ i ] = floor( randu()*vals.length );
}

// Compute the groups:
out = group( arr, g );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/bifurcate`][@stdlib/utils/bifurcate]</span><span class="delimiter">: </span><span class="description">split values into two groups.</span>
-   <span class="package-name">[`@stdlib/utils/count-by`][@stdlib/utils/count-by]</span><span class="delimiter">: </span><span class="description">group values according to an indicator function and return group counts.</span>
-   <span class="package-name">[`@stdlib/utils/group-by`][@stdlib/utils/group-by]</span><span class="delimiter">: </span><span class="description">group values according to an indicator function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-group.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-group

[test-image]: https://github.com/stdlib-js/utils-group/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-group/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-group/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-group?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-group.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-group/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-group/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-group/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-group/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-group/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-group/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/bifurcate]: https://github.com/stdlib-js/utils-bifurcate

[@stdlib/utils/count-by]: https://github.com/stdlib-js/utils-count-by

[@stdlib/utils/group-by]: https://github.com/stdlib-js/utils-group-by

<!-- </related-links> -->

</section>

<!-- /.links -->

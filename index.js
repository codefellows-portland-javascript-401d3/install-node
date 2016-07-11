var cache = require( './cache-me' );

console.log( cache.foo );
cache.foo = 'BAR';

var cache2 = require( './cache-me' );

console.log( cache2.foo );

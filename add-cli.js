var add = require( './add' );

var result = add( +process.argv[2], +process.argv[3] );

console.log( result );
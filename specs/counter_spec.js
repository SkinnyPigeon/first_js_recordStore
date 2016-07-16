var Counter = require('../counter');

var assert = require( 'chai' ).assert;

describe( "The Counter: ", function() {
  beforeEach( function() {
    counter = new Counter( 19.52 );
  })

  it( "Should return the total", function() {
    // counter.total( 19.52 )
    assert.equal( 19.52, counter.total )
  })

 

})
var Counter = require('../counter');

var assert = require( 'chai' ).assert;

describe( "The Counter: ", function() {
  beforeEach( function() {
    counter = new Counter( 1000 );
  })

  it( "Should return the total", function() {
    assert.equal( 1000, counter.total )
  })

 

})
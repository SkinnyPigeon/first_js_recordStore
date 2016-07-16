var Record = require('../record');
var assert = require('chai').assert;

describe( "The Records: ", function() {
  beforeEach( function() {
    bleach = new Record( "Nirvana", "Bleach", 8 );
  })

  it( "Should have an artist", function() {
    assert.equal( "Nirvana", bleach.artist );
  })

  it( "Should have a title", function() {
    assert.equal( "Bleach", bleach.title );
  })

  it( "Should have a price", function() {
    assert.equal( 8, bleach.price );
  })

})
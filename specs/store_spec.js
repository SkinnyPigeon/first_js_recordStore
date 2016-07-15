var Record = require( '../record' );
var Store = require( '../store' );
var assert = require( 'chai' ).assert;

describe( "The Store: ", function() {
  beforeEach( function() {
    bleach = new Record( "Nirvana", "Bleach", 8 )
    point = new Record( "Cornelius", "Point", 10 )
    likeClockwork = new Record( "QOTSA", "Like Clockwork", 9 )

    bigDaves = new Store( "Big Dave's", "Dundee")
  })

  it( "Should have a name", function() {
    assert.equal( "Big Dave's", bigDaves.name )
  })

  it( "Should have a location", function() {
    assert.equal( "Dundee", bigDaves.location )
  })

  it( "Should have an empty opening balance", function() {
    assert.equal( 0, bigDaves.balance )
  })

  it( "Should have no stock to start with", function() {
    assert.deepEqual( [], bigDaves.stock )
  })

  it( "Should be able to add stock", function() {
    bigDaves.addStock( bleach );
    assert.deepEqual( bleach, bigDaves.stock[0] )
  })

  it( "Should search its inventory", function() {
    bigDaves.addStock( bleach );
    assert.deepEqual( bleach, bigDaves.search( "Bleach" ) )
  })

  it( "Should list all its inventory", function() {
    bigDaves.addStock( bleach );
    bigDaves.addStock( point );
    assert.deepEqual( ( bleach, point ), bigDaves.inventory() )
  })

  it( "Should sell goods and increase balance", function() {
    bigDaves.addStock( bleach );
    bigDaves.sell( bleach );
    assert.equal( 8, bigDaves.balance )
  })

  it( "Should remove item from stock", function() {
    bigDaves.addStock( bleach );
    bigDaves.sell( bleach );
    assert.deepEqual( [], bigDaves.stock )
  })



} )



















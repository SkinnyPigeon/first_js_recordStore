var _ = require( 'lodash' )

var Store = function( name, location ) {
  this.name = name;
  this.location = location;
  this.balance = 0;
  this.stock = [];
}

Store.prototype = {
  addStock: function( record ) {
    this.stock.push( record );
  },

  search: function( stock ) { 
    if( !stock ) return this.stock;
    var foundRecord = 0;
    this.stock.forEach( function( record ) { 
      if( record.title === stock ){
        foundRecord = record;
      }
    } )
    return foundRecord;
  },

  inventory: function() {
    var listAll = 0
    _.forEach( this.stock, function( item ) {
      listAll = item;
    })
    return listAll
  }

}
module.exports = Store;











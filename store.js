var _ = require( 'lodash' )

var Store = function( name, location ) {
  this.name = name;
  this.location = location;
  this.balance = 0;
  this.stock = [];
}

Store.prototype = {
  addStock: function( record, quantity ) {
    for( var i = 0; i < quantity; i++ ) {
      this.stock.push( record );
    }
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
  },

  sell: function( album ) {
    for( sold_album of this.stock ) {
      if( album.title == sold_album.title ) {
        this.balance += sold_album.price;
        this.stock.splice( sold_album.index, 1);
        break
      }
      console.log( this.stock )
    }
  },

  totesValue: function() {
    this.total = 0;
    this.stock.forEach( function( album ) {
      this.total += album.price;
    }.bind( this ) );
    return this.total += this.balance;
  },



}
module.exports = Store;


















var Store = function( name, location ) {
  this.name = name;
  this.location = location;
  this.balance = 0;
  this.stock = [];
}

Store.prototype = {
  addStock: function( record ) {
    this.stock.push( record );
  }
}


module.exports = Store;
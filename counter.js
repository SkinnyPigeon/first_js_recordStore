var Counter = function( total ) {
  this.total = total;
  this.output = [];
}

Counter.prototype = {
  sNumber: function() {
    console.this.total.toString();
  },

  convert: function() {
    for( var i = 0; i < this.sNumber.length; i += 1 ) {
      this.output.push( this.sNumber.charAt( i ));
    }
    return this.output 
  },

}

// var number = 12354987,
//     output = [],
//     sNumber = number.toString();

// for (var i = 0, len = sNumber.length; i < len; i += 1) {
//     output.push(+sNumber.charAt(i));
// }

// console.log(output);

module.exports = Counter;
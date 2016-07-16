var Counter = function() {
  this.change  = function( total ) {
    var multiply = 100 * total;

    console.log( "Total: £" + total )
    console.log( "£10: " + Math.floor( multiply / 1000 ) )
    console.log( "£5: " + Math.floor( multiply % 1000 / 500 ) )
    console.log( "£2: " + Math.floor( multiply % 1000 % 500 / 200 ) )
    console.log( "£1: " + Math.floor( multiply % 1000 % 500 % 200 / 100 ) )
    console.log( "50p: " + Math.floor( multiply % 1000 % 500 % 200 % 100 / 50 ) )
    console.log( "20p: " + Math.floor( multiply % 1000 % 500 % 200 % 100 % 50 / 20 ) )
    console.log( "10p: " + Math.floor( multiply % 1000 % 500 % 200 % 100 % 50 % 20 / 10 ) )
    console.log( "5p: " + Math.floor( multiply % 1000 % 500 % 200 % 100 % 50 % 20 % 10 / 5 ) )
    console.log( "2p: " + Math.floor( multiply % 1000 % 500 % 200 % 100 % 50 % 20 % 10 % 5 / 2) )
    console.log( "1p: " + Math.floor( multiply % 1000 % 500 % 200 % 100 % 50 % 20 % 10 % 5 % 2 / 1 ) )

    return this.change

  }
}

module.exports = Counter;
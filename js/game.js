
function Game() {
  this.sequence = [];
  this.temp_sequence = [];

  this.colorAdd();
  this.temp_sequence = this.sequence.slice();

}

Game.prototype.colorAdd = function() {
  var colors = ["red", "blue", "yellow"];
  this.sequence.push(colors[Math.floor(Math.random(3))]);
};


Game.prototype.checkEntry = function(input) {
  if(input == this.temp_sequence.shift()) {
    // we matched, move on
    console.log("worked");
  } else {
    // trigger end game routine
    console.log('nope.');
  }
};


exports.gameModule = Game;

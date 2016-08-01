var Game = require('./../js/game.js').gameModule;


$(document).ready( function() {
  var thisGame = new Object();

  $('#start_game').submit( function(event) {
    thisGame = new Game();
  });

  $('button').click(function(event) {
    event.preventDefault();

    // <button class="color" id="red_button">
    // <button class="color" id="blue_button">
    // <button class="color" id="yellow_button">
    var color =  (this.id.split("_"))[0];
    // var color = button_id[0];
    thisGame.checkEntry(color);
    $('#simon_text').append(color)
  });
});

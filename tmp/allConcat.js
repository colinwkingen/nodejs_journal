var Game = require('./../js/game.js').gameModule;


$(document).ready( function() {
  $('#start_game').submit( function(event) {

  });
  $('button').click(function(event) {
    event.preventDefault();
    var thisGame = new Game();
    // <button class="color" id="red_button">
    // <button class="color" id="blue_button">
    // <button class="color" id="yellow_button">
    var color =  (this.id.split("_"))[0];
    // var color = button_id[0];
    thisGame.checkEntry(color);
    $('#simon_text').append(color)
  });
});

var Entry = require('./../js/journal.js').entryModule;

$(document).ready( function() {
  $('#journal_entry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var journal_text = $('#journal_text').val();
    var new_entry = new Entry(journal_text,title);
    $('#text_display').append('<p>Word Count: ' + new_entry.wordCount() +
                              '</p><p>Consonant Count: ' + new_entry.consonantCount() +
                              '</p><p>Vowel Count: ' + new_entry.vowelCount() +
                              '</p><p>Teaser: ' + new_entry.getTeaser() + '</p>');
  });
});

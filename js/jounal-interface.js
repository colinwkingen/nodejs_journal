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

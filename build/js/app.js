(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function Entry(entry, entryTitle) {
  this.entry = entry;
  this.entryTitle = title;
}

Entry.prototype.wordCount = function () {
  return this.entry.split(" ").length;
};

Entry.prototype.vowelCount = function () {
  return this.entry.split(/[aeiou]/ig).length - 1;
};

Entry.prototype.consonantCount = function() {
  return this.entry.split(/[bcdfghjklmnpqrstvwxyz]/ig).length - 1;
};

Entry.prototype.getTeaser = function() {
  var sentences = this.entry.split(". ");

  var words = sentences[0].split(" ");
  var result = "";
  if(words.length > 8) {
    var teaser = words.slice(0, 8);
    result += teaser.join(" ");
    result += "...";
  } else {
    // return words
    result += words.join(" ");
  }
  return result;
};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);

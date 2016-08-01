(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{}],2:[function(require,module,exports){

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

},{}],3:[function(require,module,exports){
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

},{"./../js/game.js":1,"./../js/journal.js":2}]},{},[3]);

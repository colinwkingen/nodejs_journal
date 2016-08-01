
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

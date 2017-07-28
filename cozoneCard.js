//making a constructor for cozoneCard
var ClozeCard = function(text, cloze){

  //cloze-deleted
  this.Cloze = cloze;

  //full text
  this.Full = text;

  //partial text
    //find the index of the cloze, in text
    var ind = text.search(cloze);
    //remove it from the text
    var partial = text.substring(0,ind) + "... " + text.substring(ind + cloze.length + 1, text.length + 1);
  this.Partial = partial;

};

module.exports = ClozeCard;

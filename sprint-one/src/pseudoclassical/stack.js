var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
};


//Stack.prototype.index = 0;

Stack.prototype.push = function(item) {
  this[this.index] = item;
  this.index++;
}

Stack.prototype.pop = function() {
  var removedItem = this[this.index - 1];
  delete this[this.index - 1];
  this.index--;
  return removedItem;
}

Stack.prototype.size = function() {
  return Object.keys(this).length - 1; 
}

new Stack();
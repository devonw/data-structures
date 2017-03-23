var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
  this.currentLast = 0;
};

Queue.prototype.enqueue = function(item) {
  this[this.index] = item;
  this.index++;
};

Queue.prototype.dequeue = function() {
  var removedItem = this[this.currentLast];
  delete this[this.currentLast];
  this.currentLast++;
  return removedItem;
};

Queue.prototype.size = function() {
  return Object.keys(this).length - 2;
};

new Queue();



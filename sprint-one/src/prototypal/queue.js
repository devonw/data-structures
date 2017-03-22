var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  return obj;
};

var queueMethods = {
  index: 0,
  currentFirst: undefined,
  enqueue: function(value) { 
    this[this.index] = value;
    this.index++;
    this.currentFirst = this.currentFirst++ || 0;
  },
  dequeue: function() {
    var removedItem = this[this.currentFirst];
    delete this[this.currentFirst];
    this.currentFirst++;
    return removedItem;

  },
  size: function() {
    if (this.currentFirst === undefined) {
      var size = Object.keys(this).length;	
    } else {
      size = Object.keys(this).length - 2;
    }
    
    return size;
  }
};



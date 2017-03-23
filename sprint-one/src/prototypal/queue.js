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
    this.currentFirst = 0;
  },
  dequeue: function() {
    var removedItem = this[this.currentFirst];
    delete this[this.currentFirst];
    for (var key in this) {
      var nonStringKey = Number(key);
      if (!isNaN(nonStringKey)) {
        console.log(nonStringKey);
        var indexShift = nonStringKey - 1;
        this[indexShift] = this[key];
        delete this[key];
      }
    
    }
    this.index--;
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



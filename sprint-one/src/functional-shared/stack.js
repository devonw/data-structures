var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  index: 0,
  push: function(value) {
    this[this.index] = value;
    this.index++;

  },
  pop: function() {
    var removedItem = this[this.index - 1];
    delete this[this.index - 1];
    this.index--;
    return removedItem;

  },
  size: function() {
    var sizeOfObj = Object.keys(this).length - 4;
    return sizeOfObj;
  }
};



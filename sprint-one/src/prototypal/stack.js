var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  return obj;

};

var stackMethods = {
  index: 0,
  push: function(value) {
    this[this.index] = value;
    this.index++;

  },
  pop: function() {
    var removedValue = this[this.index - 1];
    delete this[this.index - 1];
    this.index--;
    return removedValue;

  },
  size: function() {
    if (this.index === 0) {
      var size = Object.keys(this).length;
    } else {
      size = Object.keys(this).length - 1;
    }
    return size;
  }
};



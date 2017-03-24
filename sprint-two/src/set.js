var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this[item] = item;
};

setPrototype.contains = function(item) {
  var keys = Object.keys(this);
  return keys.some(function(key) {
    return key === item;
  });
};

setPrototype.remove = function(item) {
  if (this[item]) {
    delete this[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

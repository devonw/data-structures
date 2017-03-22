var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  var firstItem = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    var removedItem = storage[firstItem];
    delete storage[firstItem];
    firstItem++;
    return removedItem;
  };

  someInstance.size = function() {
    var sizeOfStorage = Object.keys(storage).length;
    return sizeOfStorage;
  };

  return someInstance;
};

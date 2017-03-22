var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    var removedItem = storage[index - 1];
    delete storage[index - 1];
    index--;
    return removedItem;
  };

  someInstance.size = function() {
    var lengthOfStorage = Object.keys(storage).length;
    return lengthOfStorage;
  };

  return someInstance;
};

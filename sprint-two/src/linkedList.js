var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(!this.head && !this.tail){
      this.head = Node(value);
      this.head.next = Node(value)
    } else {
      var currentNext = this.head;
      while (currentNext.next !== null) {
        currentNext = currentNext.next;
      }
      currentNext.next = Node(value);
    }
    this.tail = Node(value);
  };

  list.removeHead = function() {
    var removedHeadValue = this.head.value;
    if(!this.head.next){
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next.next;
    }
    return removedHeadValue;
    
  };

  list.contains = function(target) {
    var current = this.head;
    while(!!current.value && !!current.next) {
      if(current.value === target) {
        return true;
      } else {
        current = current.next;
        if(current.value === target) {
          return true;
        }
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

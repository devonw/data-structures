var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  
  var truthTest = false;
  
  var recursiveCheck = function (branch) {
    if (branch.value === target) {
      truthTest = true;
    }
    var nextChildren = branch.children;
    if (nextChildren.some(function(childObj) {
      return childObj.value === target;
    })) {
      return true;
    }
    nextChildren.forEach(function(childObj) {
      childObj.children.forEach(function(obj) {
        recursiveCheck(obj);
      });
    });
    return truthTest;
  };
  
  return recursiveCheck(this);
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newBranch = Tree(value);
  newBranch.parent = this;
  this.children.push(newBranch);
};

treeMethods.removeFromParent = function() {
  var recurseDownParents = function (node) {
    delete node.parent;
    if(node.children.length > 0) {
      node.children.forEach(function(children) {
        recurseDownParents(children)
      });
    }
  }
  return recurseDownParents(this);
  
};

treeMethods.traverse = function(callback) {
  var applyCallbackRecursively = function (node) {
    callback(node.value);
    if (node.children.length > 0) {
      node.children.forEach(function(child) {
        applyCallbackRecursively(child);
      })
    }
  }
  return applyCallbackRecursively(this);
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

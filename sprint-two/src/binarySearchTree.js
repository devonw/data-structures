var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryTreePrototype);
  binaryTree.value = value;
  return binaryTree;
};

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(value) {
  
  
  var recurseDownTree = function(node) {
    if (node.value > value) {
      if (!node.left) {
        node.left = BinarySearchTree(value);
      } else {
        recurseDownTree(node.left);
      }
    }
    if (node.value < value) {
      if (!node.right) {
        node.right = BinarySearchTree(value);
      } else {
        recurseDownTree(node.right);
      }
    }
  };
  
  return recurseDownTree(this);
  
  

};

binaryTreePrototype.contains = function(value) {
  var searchDownTree = function(node) {
    if (!node) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    if (node.value > value) {
      return searchDownTree(node.left);
    }
    if (node.value < value) {
      return searchDownTree(node.right);
    }
  };
  return searchDownTree(this);

};

binaryTreePrototype.breadthFirstLog = function() {
  var breadthFirstRecurse = function(node) {
    if(node) {
      console.log(node.value);
      if(node.left) {
        console.log(node.left.value);
      }
      if(node.right) {
        console.log(node.right.value);
      }
      if(node.left) {
        breadthFirstRecurse(node.left.left);
        breadthFirstRecurse(node.left.right);
      }
      if(node.right) {
        breadthFirstRecurse(node.right.right)
        breadthFirstRecurse(node.right.left);
      }
    }
    //console.log(node.value);
    
  }
  return breadthFirstRecurse(this);
}

binaryTreePrototype.depthFirstLog = function(callback) {
  var applyFuncDownTree = function (node) {
    callback(node.value);
    if (node.right) {
      applyFuncDownTree(node.right);
    }
    if (node.left) {
      applyFuncDownTree(node.left);
    }
  };
  return applyFuncDownTree(this);

};

binaryTreePrototype.left = null;

binaryTreePrototype.right = null;


/*
 * Complexity: What is the time complexity of the above functions?
 */

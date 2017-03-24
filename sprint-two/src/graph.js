

// Instantiate a new graph

var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
  if (!!this.edges) {
    this.edges.forEach(function(edgeObj, index, collection) {
      var key = Object.keys(edgeObj)[0];
      var nonStringKey = Number(key);
      var value = edgeObj[key];
      if (nonStringKey === node || value === node) {
        collection.splice(index, 1);
      }
    });
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.edges === undefined) {
    return false;
  }
  return this.edges.some(function(edgeConnection) {
    return edgeConnection[fromNode] === toNode || edgeConnection[toNode] === fromNode;
  });
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.edges === undefined) {
    this.edges = [];
  }
  var newEdge = {};
  newEdge[fromNode] = toNode;
  this.edges.push(newEdge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (!!this.edges) {
    this.edges.forEach(function(edgeObj, index, collection) {
      var key = Object.keys(edgeObj)[0];
      var value = edgeObj[key];
      var nonStringKey = Number(key);
      if (nonStringKey === fromNode && value === toNode) {
        collection.splice(index, 1);
      }

    });
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var keys = Object.keys(this);
  keys.forEach(function(nodeKey) {
    if (nodeKey !== 'edges') {
      cb(nodeKey);
    }
  });
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



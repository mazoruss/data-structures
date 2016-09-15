

// Instantiate a new graph
var Graph = function() {
  this.nodeArray = [];
  this.edgeArray = [];
};
/*
var graphNode = function(value) {
  this.value = value;
  this.edges = [];
}; */

var graphEdge = function(node1, node2) {
  this.node1 = node1;
  this.node2 = node2;
}; 

// Add a node to the graph, pass ing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeArray.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var result = false;
  this.nodeArray.forEach(x => x === node ? result = true : null);
  return result; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  //find 
  for (var i = 0; i < this.nodeArray.length; i++) {
    if (this.nodeArray[i] === value) {
      this.nodeArray.splice(i, 1);
    }
  }

  for (var i = 0; i < this.edgeArray.length; i++) {
    if (this.edgeArray[i].node1 === value || this.edgeArray[i].node2 === value) {
      this.edgeArray.splice(i, 1);
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  this.edgeArray.forEach(function(edge) {
    if (((edge.node1 === fromNode) && (edge.node2 === toNode)) || 
      (edge.node2 === fromNode) && (edge.node1 === toNode)) {
      result = true;
    } 
  });
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edge = new graphEdge(fromNode, toNode);
  this.edgeArray.push(edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edgeArray.length; i++) {
    if (((this.edgeArray[i].node1 === fromNode) && (this.edgeArray[i].node2 === toNode)) ||
      (this.edgeArray[i].node2 === fromNode) && (this.edgeArray[i].node1 === toNode) ) {
      this.edgeArray.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodeArray.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



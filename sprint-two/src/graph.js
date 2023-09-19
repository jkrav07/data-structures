

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes.includes(node)) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (!this.nodes.includes(node)) {
    return undefined;
  }
  let index = this.nodes.indexOf(node);
  this.nodes.splice(index, 1);
  //remove any edges that have the node

  this.edges.forEach((edge, i) => { //O(n)
    if (edge.includes(node)) {
      this.edges.splice(i, 1);
    }
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { //O(n)
  for (let i = 0; i < this.edges.length; i++) {
    let currentEdge = this.edges[i];
    if (currentEdge.includes(fromNode) && currentEdge.includes(toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {  //O(1)
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { //O(n)
  let index;
  for (let i = 0; i < this.edges.length; i++) {
    let currentEdge = this.edges[i];
    if (currentEdge.includes(fromNode) && currentEdge.includes(toNode)) {
      index = i;
    }
  }
  this.edges.splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { //O(n)
  this.nodes.forEach(node => {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



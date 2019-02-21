// Instantiate a new graph
var Graph = function () {
  this.graph = {};
};

var Element = function (node) {
  this.node = node;
  this.edges = [];
}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.graph[node] = new Element(node)
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return !!this.graph[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {

  if (!!this.graph[node]) {
    delete this.graph[node]
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
    // for (let i = 0; i < this.graph[fromNode].edges.length; i++) {
      if (this.graph[fromNode].edges.indexOf(toNode) > -1) {
        console.log(this.graph[fromNode].edges.length)
        return true;
      } else {
        return false
      }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
 
  this.graph[fromNode].edges.push(toNode)
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  console.log(this.hasEdge(fromNode, toNode))

  if(this.hasEdge(fromNode, toNode)){
    delete this.graph[fromNode].edges[toNode]
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 var graph = new Graph()
 console.log(graph)
 graph.addNode(5)
 graph.addNode(6)
 console.log(graph)
 graph.addEdge(5, 6)
 console.log(graph.hasEdge(5, 6))
 graph.removeEdge(5, 6)
 console.log(graph.hasEdge(5, 6))
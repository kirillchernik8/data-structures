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
  return this.graph.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  //in this method we need to handle two things: 
    // 1) deletion of the node itself [check if it exists first] 
  if (this.graph.hasOwnProperty(node)) {
    delete this.graph[node];
  };
   // 2) delete all the references to this node
        // .. meaning that the deleted node might have had been connected to other nodes
        // in th current graph
  for (var key in this.graph) {

    if (this.graph[key].edges.includes(node)) {
      delete this.graph[key].edges;
    }
  }
  return true;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  // one possible approach here is to create an array
  // which will keep all the occurances of the node en question
  let result = [];
  if (this.graph[fromNode].edges !== undefined) {
    for (let i = 0; i < this.graph[fromNode].edges.length; i++) {
      if (this.graph[fromNode].edges[i] === toNode) {
        result.push(this.graph[fromNode].edges[i])
      }
    }
  }
  // here we can just return whether or not the resulting array is empty
  return result.length >= 1;
}

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.graph[fromNode].edges.push(toNode)
  this.graph[toNode].edges.push(fromNode)
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  if (this.graph[fromNode] && this.graph[toNode]) {
    if (this.hasEdge(fromNode, toNode)) {
      delete(this.graph[fromNode].edges = toNode);
      delete(this.graph[toNode].edges = fromNode);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (let key in this.graph) {
    cb(this.graph[key].node)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
   1) addNode --> constant as we are just creating a new instance
   2) contains also constant. Our graph is an object and a object[key] look up is constant
   3) removeNode is, quadratic [potentionally can be improved to be linear]. Here we are checking every node
      to see if any element in this node's edges array equals to the deleted node
   4) hasEdge - linear. Here, we only have a single for loop to loop through the edges array
      of a given element
   5) addEdge - constant. Only pushing elements to 2 separate arrays
   6) removeEdge - linear. Here we are using hasEdge method which adds up to the time complexity
   7. forEachNode complexity is at least linear. Complexity can be increased based on the callback; 
 */

var graph = new Graph()




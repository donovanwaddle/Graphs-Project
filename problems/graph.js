
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addEdges(srcValue, destValue) {
    if (!this.adjList[srcValue]) this.addVertex(srcValue);
    if (!this.adjList[destValue]) this.addVertex(destValue);

    this.adjList[srcValue].push(destValue);
    this.adjList[destValue].push(srcValue);
  }

  buildGraph(edges) {
    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      this.addEdges(edge[0], edge[1]);
    }
    return this.adjList;
  }




  breadthFirstTraversal(startingVertex) {
    let queue = [startingVertex];
    let visited = new Set();
    let order = [];
    while(queue.length) {
      let vertex = queue.shift();
      if (visited.has(vertex)) continue;
      visited.add(vertex);
      order.push(vertex);
      let neighbors = this.adjList[vertex];
      queue.push(...neighbors);
    }
    console.log(order);
    return order;

  }

  depthFirstTraversalIterative(startingVertex) {
    let stack = [startingVertex];
    let visited = new Set();
    let order = [];
    while(stack.length) {
      let vertex = stack.pop();
      if (visited.has(vertex)) continue;
      visited.add(vertex);
      order.push(vertex);
      let neighbors = this.adjList[vertex];
      stack.push(...neighbors);
    }
    console.log(order);
    return order;

  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    if (visited.has(startingVertex)) return;
    let neighbors = this.adjList[startingVertex];
    neighbors.forEach(neighbor => {

    });

    this.depthFirstTraversalRecursive()

  }

}


module.exports = {
  Graph
};

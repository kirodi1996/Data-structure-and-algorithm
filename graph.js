class Graph {
    constructor() {
        this.adjancencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjancencyList[vertex]) {
            this.adjancencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2) {
        if(this.adjancencyList[vertex1] && this.adjancencyList[vertex2]) {
            if(!this.adjancencyList[vertex1].includes(vertex2)) {
                this.adjancencyList[vertex1].push(vertex2);
            }
            if(!this.adjancencyList[vertex2].includes(vertex1)){
                this.adjancencyList[vertex2].push(vertex1);
            }

        }
        return this
    }

    removeVertex(vertex) {
        while(this.adjancencyList[vertex].length) {
            let adjacentVertex = this.adjancencyList[vertex].pop();
            this.removeEdge(adjacentVertex, vertex);
        }
        delete this.adjancencyList[vertex];
        return this;
    }

    removeEdge(ver1, ver2) {
        this.adjancencyList[ver1] = this.adjancencyList[ver1].filter((v) =>  v !== ver2);
        this.adjancencyList[ver2] = this.adjancencyList[ver2].filter((v) =>  v !== ver1);
    }

    DFSRecursive(start) {
        if(!this.adjancencyList[start]) {
            return undefined
        }

        let adjancencyList = this.adjancencyList;
        let visited = {};
        let result = [];

        (function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjancencyList[vertex].forEach(vert => {
                if(!visited[vert]) {
                    return dfs(vert)
                }
            })
        })(start);
        return result;
    }

    DFSStack(start) {
        let stack = [start];

      
        let adjancencyList = this.adjancencyList;
        let result = [];
        let visited = {};
        if(!adjancencyList[start]) {
            return null;
        }   
        visited[start] = true;
        while(stack.length) {
            let currentNode = stack.pop();
            result.push(currentNode);
            adjancencyList[currentNode].forEach( (neighbour) => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            })
        }
        return result;
    }

    BFS(start) {
        let queue = [start];
        let result = [];
        let visited = {};
        visited[start] = true;
            
        if(!this.adjancencyList[start]) {
            return null;
        }   
        while(queue.length) {
            let currentNode = queue.shift();
            
            result.push(currentNode);
            this.adjancencyList[currentNode].forEach( (neighbour) => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            })
        }
        return result;
    }

}

var g= new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
// console.log(g.DFSRecursive('J'));
console.log(g.BFS('A'));
console.log(g.DFSStack('A'));

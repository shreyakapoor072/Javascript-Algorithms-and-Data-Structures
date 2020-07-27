// graphs implementation

class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex])
        this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2){
        const list = this.adjacencyList;
        if(list[v1]){
            list[v1].push(v2);
        }
        if(list[v2]){
            list[v2].push(v1);
        }

    }

    removeEdge(v1,v2){
        const list = this.adjacencyList;
        if(list[v1]){
            const index = list[v1].indexOf(v2);
            list[v1].splice(index,1);
        }
        if(list[v2]){
            const index = list[v2].indexOf(v1);
            list[v2].splice(index,1);
        }

    }

    removeVertex(v1){
        const list = this.adjacencyList[v1];

        list.forEach((item) => this.removeEdge(v1, item));

        delete this.adjacencyList[v1];
    }

    DFSRecursive(vertex){
        let results = {}, list = this.adjacencyList;

        function DFS(vertex){
            if(!vertex) return;

            let i = 0, newList = list[vertex];
            results[vertex] = true;
            while(i < newList.length) {
                if(results[newList[i]]) {
                    i++;
                } else {
                    results[newList[i]] = true;
                    break;
                }
            }

            DFS(newList[i]);
        }

        DFS(vertex);
        return results;
    }

    BFSRecursive(vertex){
        let results ={}, list = this.adjacencyList;
        results[vertex] = true;

        function BFS(vertex){
            if(!vertex) return;

            let newList = list[vertex];
            newList.forEach(item => {
                if(!results[item]) {
                    results[item] = true;
                    BFS(item);
                }
            })
        }

        BFS(vertex);
        return results;
    }
}



let g = new Graph();

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
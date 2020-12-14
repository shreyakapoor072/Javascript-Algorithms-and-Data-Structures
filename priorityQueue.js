class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    insertInto(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        if(this.values.length === 1) return;
        let idx = this.values.length - 1;
        while(idx > 0){
           let parentIdx = Math.floor(idx-1/2);
           if(this.values[idx].priority > this.values[parentIdx].priority) break;
            let temp = this.values[parentIdx];
            this.values[parentIdx] = this.values[idx];
            this.values[idx] = temp;
            idx = parentIdx;
        }
    }
}

let newHeap = new PriorityQueue();
newHeap.insertInto(20, 3);
newHeap.insertInto(40, 4);
newHeap.insertInto(10, 5);
newHeap.insertInto(50, 6);
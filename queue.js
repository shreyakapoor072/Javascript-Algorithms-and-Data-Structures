// queue implementation FIFO

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if(this.last === null){
            this.first = this.last = newNode;
        } else {
            this.first.next = newNode;
            this.first = newNode;
        }
        this.size++;

    }

    deque() {
        if(!this.last) return null;
        let temp = this.last;
        if(this.last === this.first){
            this.first = null;
        }

        this.last = this.last.next;
        temp.next = null;
        this.size --;
        return temp;
    }
}
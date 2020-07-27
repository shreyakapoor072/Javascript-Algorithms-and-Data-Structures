//doubly linked list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(this.head === null) {
            this.head = this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop() {
        if(this.head === null) return;
        let poppedNode = this.tail;
        if(this.length === 1) { 
            this.tail = null;
            this.head = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length --;
        return poppedNode;
    }

    //removing from front
    shift() {
        if(this.head === null) return;
        let poppedNode = this.head;
        if(this.length === 1) { 
            this.tail = null;
            this.head = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            poppedNode.next = null;
        }
        this.length--;
        return poppedNode;
    }

    //adding node in front
    unshift(val) {
        let newNode = new Node(val);
        if(this.head === null){
            this.head = this.tail = newNode;
        }else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index > this.length - 1){
            return;
        }
        let mid = Math.floor(this.length/2);
        let counter, current;

        if(index <= mid){
            counter = 0; 
            current = this.head;
            while(counter!== index){
                counter++;
                current = current.next

            }
        } else {
            counter = this.length -1;
            current = this.tail;
            while(counter !== index){
                counter --;
                current = current.prev;
            }
        }
        return current;
    }

    set(index, val){
        let node = this.get(index);
        if(node) {
            node.val = val;
        }
        return this;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;

        if(index === 0){
            this.unshift(val);
            return true;
        }else if(index === this.length){
            this.push(val);
            return true;
        }else {
            let prevNode = this.get(index-1);
            let newNode = new Node(val);
            newNode.next = prevNode.next;
            newNode.prev = prevNode;
            prevNode.next.prev = newNode;
            prevNode.next = newNode;
        }
        this.length++;
    }

    remove(index){
        if(index < 0 || index >= this.length) return false;

        if(index === 0) {
            this.shift();
            return true;
        } else if(index === this.length - 1){
            this.pop();
            return true;
        } else{
            let removedNode = this.get(index);
            removedNode.prev.next = removedNode.next;
            removedNode.next.prev = removedNode.prev;
            removedNode.next = removedNode.prev = null
            this.length --;
            return removedNode;
        }
    }

    reverse(){
        let curr, temp;
        curr = this.head;
        this.tail = this.head;

        while(curr !== null){
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }
        this.head = temp.prev;
      

    }
}


var newDoubleList = new DoublyLinkedList();
newDoubleList.push(2);
newDoubleList.push(3);
newDoubleList.push(5);


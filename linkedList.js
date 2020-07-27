//linked list

class Node {
    constructor(val){
        this.val = val;
        this.next= null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);

        if(this.head === null){
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        
    }

    pop(){
        let currentHead = this.head, prevNode;

        if(this.head === null) return;
        while(currentHead.next !== null) {
            prevNode = currentHead;
            currentHead = currentHead.next;
        }

        if(prevNode) { prevNode.next = null; }
        this.tail = prevNode;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }


    }

    //remove from forward
    shift() {
        if(!this.head) return;

        const removedEle = this.head.val;
        this.head = this.head.next;
        if(this.head === null) this.tail === null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return removedEle;
    }

    //insert from forward
    unshift(val){
        const tempNode = new Node(val);
        if(!this.head) {
            this.head = this.tail = tempNode;
        } else {
            tempNode.next = this.head;
            this.head = tempNode;
        }
        this.length++;
    }

    // get element at a particular index
    get(index){
        if(index < 0 || index >= this.length){
            return;
        } else {
            let counter = 0, currentHead = this.head;
            while(counter !== index){
                counter++;
                currentHead = currentHead.next;
            }

            return currentHead;
            
        }
    }

    set(index, val) {
        let node = this.get(index);
        if(node) {
            node.val = val;
        }
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;

        let prevNode;
        //insert at beginning 
        if(index === 0){
            this.unshift(val);
            return true;
        } else if(index === this.length){ //insert at the end
            this.push(val);
            return true;
        } else { // insert in between
            prevNode = this.get(index-1);
            let newNode = new Node(val);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            return true;
        }
        this.length++;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false;

        if(index === 0) {
            this.shift();
            return true;
        } else if(index === this.length - 1){
            this.pop();
            return true;
        } else {
            let prevNode = this.get(index - 1);
            prevNode.next = prevNode.next.next;
            return true;
        }

        this.length--;

    }

    reverse(){
        let prev,curr,next;
         this.tail = prev = this.head;
         curr = prev.next; 

         if(this.length === 1) return;

        while(curr !== null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
        this.tail.next = null;
    }

}

let newList = new SinglyLinkedList();

newList.push(3);
newList.push(4);
newList.push(5);
newList.push(7);
newList.push(9);

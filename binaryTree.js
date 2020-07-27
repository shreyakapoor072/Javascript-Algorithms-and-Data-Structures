//binary search tree implementation

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val) {
        var newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
            let currRoot = this.root;
            while(currRoot !== null){
                if(val === currRoot.val) return;
                if(val > currRoot.val){
                    if(!currRoot.right){
                        currRoot.right = newNode;
                        break;
                    } 
                    currRoot = currRoot.right;
                } else if(val < currRoot.val) {
                    if(!currRoot.left){
                        currRoot.left = newNode;
                        break;
                    } 
                    currRoot = currRoot.left;
                } 
            }
            return this;
        }

    }

    find(val) {
        let currRoot = this.root;
        if(!this.root) return false;
        while(currRoot !== null){
            if(currRoot.val === val) {
                return true;
            } else if( val < currRoot.val){
                currRoot = currRoot.left
            } else {
                currRoot = currRoot.right;
            }
        }

        return false;
    } 

    traverseBFS() {
        let data =[],
        queue = [];

        queue.push(this.root);
        while(queue.length){
            let node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    //Root left right
    preOrder() {
        let arr = [];

        function traverse(node) {
            arr.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return arr;
    }

    //left right root
    postOrder() {
        let arr = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            arr.push(node.val);
        }

        traverse(this.root);
        return arr;
    }

    //left root right
    inOrder() {
        let arr = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            arr.push(node.val);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return arr;
    }

    invert() {
        let arr = [], currRoot = this.root;
    
        function invertTree(root) {
            let temp;
            temp = root.left;
            root.left = root.right;
            root.right = temp;

            if(root.left) {
                invertTree(root.left);
            }
            if(root.right) {
                invertTree(root.right);
            }
        }
        invertTree(currRoot);
        return currRoot;

    }
}

let newBst = new BinarySearchTree();
newBst.insert(20);
newBst.insert(30);
newBst.insert(10);
newBst.insert(15);
newBst.insert(25);





class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
            let temp = this.root;
            while(true) {
                if (val === temp.val) return undefined;
                if(temp.val < val) {
                    if(temp.right === null) {
                        temp.right = newNode;
                        return this;
                    }
                    temp = temp.right   
                }
                else {
                    if(temp.left === null) {
                        temp.left = newNode;
                        return this;
                    }
                    temp = temp.left   
                }
        }
    }

    find(val) {
        if (!this.root) return false;
        let temp = this.root;
        let found = false;
        while(temp) {
            if(temp.val < val) {
                temp = temp.left;
            }
            else if(temp.val > temp) {
                temp = temp.right;
            }
            else {
                found = true;
                return found;
            }
        }
        return found;
       
    }

    BFS() {
       let queue = [];
       let data = [];
       queue.push(this.root);
       while(queue.length) {
         let node = queue.shift();
         if(node.left) { queue.push(node.left); } 
         if(node.right) { queue.push(node.right); }
         data.push(node.val);
       }

       return data;
    }

    DFSpreOrder() {
        let data = [];
        
        function traverse(node) {
            data.push(node.val)
            if(node.left) {traverse(node.left)}
            if(node.right) {traverse(node.right)}
        }

        traverse(this.root);
        return data;
    }

   

    DFSpostOrder() {
        let data = [];
        function traverse(node) {
            
            if(node.left) {traverse(node.left)}
            if(node.right) {traverse(node.right)}
            data.push(node.val)
        }
        traverse(this.root);
        return data;
    }

    DFSinOrder() {
        let data = [];
        function traverse(node) {
            if(node.left) {traverse(node.left)};
            data.push(node.val);
            if(node.right) {traverse(node.right)};
        }
        traverse(this.root);
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(23);
tree.insert(18);
tree.insert(30);
console.log(tree.BFS())
console.log(tree.DFSpreOrder())
console.log(tree.DFSpostOrder())
console.log(tree.DFSinOrder())
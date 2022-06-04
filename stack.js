class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        } 
        return ++this.size;
    }

    pop() {
        let node;
        if(!this.head) {
            return null;
        } 
        else if(this.first === this.last) {
            this.last = null;
            this.first = null;
        }
        else {
            node = this.first;
            this.first = this.first.next;
        }
        this.length--;
        return node.val;
    }
}

var stack = new Stack();
stack.push(12)
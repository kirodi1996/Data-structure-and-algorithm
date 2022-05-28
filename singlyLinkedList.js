class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next =  node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        var currentNode = this.head;
        var newTail = currentNode;
        while(currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null
        }
        return currentHead;
    }

    unshifting(val) {
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if( index< 0 || this.index > this.length) return null;
        let counter = 0;
        let currentNode = this.head;
        while(counter != index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    set(val, index) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.data = val;
            return true
        }
        return false;
    }

    insert(index, val) {
        if (index > this.length || index<0) return false;
        if( index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshifting(val);
        let newNode= new Node(val);
        let prev = get(index-1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index > this.length || index<0) return false;
        if(index === 0) return this.shift();
        if(index === this.length) return this.pop();
        let prev = this.get(index-1)
        let removedNode = prev.next;
        prev.next = removedNode.next
        removedNode.next = null;
        this.length--;
        return removedNode
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        var next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}


var node = new singlyLinkedList();
node.push(3);
node.push(5);
node.push(7);
// console.log(node.pop());
// console.log(node.pop());
//console.log(node.unshifting(15));
// console.log(node.set(2111, 2))
// console.log(node)
console.log(node.reverse())
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
       let newNode = new Node(val);
       if (!this.head) {
           this.head = newNode;
           this.tail = newNode;
       }
       else {
           this.tail.next = newNode;
           this.tail = newNode;
       }
       this.length++;
       return this;
    }

    dequeue() {
        var firstNode = this.head;
        if (!this.head) return null;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        this.head = this.head.next;
        firstNode.next = null;
        this.length--;
        return firstNode;
    }
}
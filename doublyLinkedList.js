class Node {
    constructor(data) {
        this.data = data;
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
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    pop() {
        var poppedNode = this.tail;
        if(!this.head) {
            return undefined
        }
        else if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (this.length === 0) return undefined
        var oldHead = this.head;        
        if (this.length ===1) return this.pop()

        else {
            this.head = this.head.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(this.length===0) {
            this.push(val)
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx) {   
        let getNode;
        if(idx <0 || idx>=this.length) {
            return null;
        }
       
            if(idx < this.length/2) {
                let counter = 0;
                getNode = this.head;
                while(idx !== counter) {
                    getNode = getNode.next
                    counter++;
                }
            }
            else{
                getNode = this.tail;
                let counter = this.length-1;
                while(idx !== counter) {
                    getNode = getNode.prev;
                    counter--;
                }
            }
        return getNode;
    }

    set(data, idx) {
        let newNode = new Node(data);
        let node = this.get(idx);
        if(node) {
            node.data = newNode.data;
            return true
        }
        return false;
    }

    insert(data, idx) {
        if(idx<0 || idx>this.length) return false;
        if(idx === 0) return !!this.unshift(data);
        if(idx === this.length) return !!this.push(data)
        let prevNode = this.get(idx-1);
        let afterNode = prevNode.next;
        let newNode = new Node(data);
        newNode.prev = prevNode;
        newNode.next = afterNode;
        prevNode.next = newNode;
        afterNode.prev = newNode;
        this.length++;
        return true;    
    }

    remove(idx) {
        if(idx<0 || idx>this.length-1) return false;
        if(idx === 0) return !!this.shift();
        if(idx === this.length-1) return !!this.pop();
        let node = this.get(idx);
        let prevNode = node.prev 
        let nextNode = node.next;
        prevNode.next = node.next;
        nextNode.prev = prevNode;
        node.next = null;
        node.prev = null;
        this.length--;
        return node;
    }
} 
var node = new DoublyLinkedList();
node.push(5)
node.push(7);
node.push(10);
console.log(node);
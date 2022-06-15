class priorityQueue {
    constructor() {
        this.values = [];
    }

    insert(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);

        let index = this.values.length-1;
        while(index) {
            let parentIdx = Math.floor((index-1)/2);
            if(this.values[parentIdx].priority > this.values[index].priority ) {
                [this.values[parentIdx] , this.values[index]] = [this.values[index], this.values[parentIdx]];
            }
            index = parentIdx
        }
    }

    dequeue() {
        let lastIdx = this.values.length-1;
        let minPriority = this.values[lastIdx];
        let maxPriority = this.values[0];
        this.values[0] = minPriority;
        idx = 0;
        while(idx) {
            let length = this.values.length - 1;
            let left = (idx * 2) + 1;
            let right = (idx * 2) + 2;
            let swapNode = null
            if(left <= length) {
                if(minPriority.priority > this.values[left]) {
                    swapNode = left
                }
            }
            if(right <= length) {
                if((swapNode && this.values[swapNode].priority > this.values[right]) || (!swapNode && minPriority.priority > this.values[right]  )) {
                    swapNode = right;
                }
            }

            if(swapNode == null) break;
            idx = swapNode;
           

        }
        return maxPriority
    }
}

class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
    }
}
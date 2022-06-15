class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(data) {
        this.values.push(data)
        this.bubbleUp()
    }

    bubbleUp() {
        let lastIndex = this.values.length - 1;
        let parentNode = Math.floor((lastIndex-1)/2);
        while(this.values[lastIndex] >  this.values[parentNode] && lastIndex) {
            [this.values[lastIndex], this.values[parentNode]] = [this.values[parentNode], this.values[lastIndex]]
            lastIndex = parentNode;
            parentNode = Math.floor((lastIndex-1)/2);
        }
    }

    extractMax() {
        let lastIndex = this.data.length-1;
        [this.values[lastIndex], this.values[0]] = [this.values[0], this.values[lastIndex]];
        let max =this.values.pop();
        if(this.values.length > 0) {
            sinkingDown();
            
        } 
        return max;
    }

    sinkingDown() {
        let index = 0;
        let arrLength = this.values.length;
        let element = this.values[0];

        while(index) {
            let left = (2*index) + 1;
            let right = (2*index) + 2;
            let leftChild, rightChild, swap;
            if(left <= arrLength) {
                leftChild = this.values[left];
                if(element < leftChild ) {
                    swap = left;
                }
            }
            if (right <= arrLength) {
                rightChild = this.values[right];
                if((swap === null && element < rightChild) || (swap !== null && this.values[swap] < rightChild ) ) {
                    swap = right
                }            
            }

            if (swap === null) break;

            [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
            index = swap;
            
        }
    }

}
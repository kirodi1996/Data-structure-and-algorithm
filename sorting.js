class Sort{

    constructor(arr) {
        this.arr = arr
    }

    bubbleSort(){
        for(let i = this.arr.length; i>0; i--){
            let swap = false
            for (let j = 0; j < i-1; j++) {
               
                if(this.arr[j]>this.arr[j+1]){
                    swap = true
                    let temp = this.arr[j]
                    this.arr[j] = this.arr[j+1]
                    this.arr[j+1] = temp
                }
                   
            }
            if(!swap){
                break
            }
        }
        return this.arr
    }

    swap (arr, index, low) {
        ([arr[index], arr[low]] = [arr[low], arr[index]])
    }

    selectionSort() {
        for (let i = 0; i < this.arr.length; i++) {
          let lowest = i;
          for (let j = i + 1; j < this.arr.length; j++) {   
            if (this.arr[lowest] > this.arr[j]) {
              lowest = j;
            }
          }
          if (i !== lowest) {
            let temp = this.arr[i]
            this.arr[i] = this.arr[lowest]
            this.arr[lowest] = temp
          }
        }
        return this.arr;
    }

    insertionSort(){

    }



}

//console.log(new Sort([4,3,0,9,5]).bubbleSort())
console.log(new Sort([4,3,0,9,5]).selectionSort())
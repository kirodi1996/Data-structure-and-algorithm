function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        for(var j = i-1; j >= 0 && currentVal < arr[j] ; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr
}

console.log(insertionSort([41, 35, 20, 15, 8]));
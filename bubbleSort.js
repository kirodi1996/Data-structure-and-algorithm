function bubbleSort(arr) {
    let arrLen = arr.length;
    for (let i = 0; i < arrLen; i++) {
        for (j=0; j<arrLen-1; j++) {
            if(arr[j]> arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }

    // more optimized way
    for (let i = arrLen; i > 0; i--) {
        let noSwap = true;
        for (j=0; j<i-1; j++) {
            if(arr[j]> arr[j+1]) {[arr[j], arr[j+1]] = [arr[j+1], arr[j]]; noSwap = false}
        }
        if(noSwap) break;
    }

    return arr
}

console.log(bubbleSort([7, 15, 21, 34, 100]));
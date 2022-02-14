function slidingWindow (arr, slideSize) {
    
    let len = arr.length
    if(slideSize>len) 
        return null;

    let tempMax = 0;
    let max = 0;

    for (let i=0; i<slideSize; i++){
        tempMax += arr[i];
    }
    max = tempMax;
    for (let i=slideSize; i <len; i++) {
        tempMax = tempMax - arr[i-slideSize] + arr[i]
        max = Math.max(tempMax, max)
    }
    return max

}

console.log(slidingWindow([1,2,3,2,1], 3))

function maxSubArraySum(arr, num) {
    var totalSum = 0;
    var i = 0;
    if(num> arr.length) 
    {
        return null;
    }
    while(i<num) {
        totalSum+=arr[i++];
    }
    var tempSum = totalSum;
    while(i<arr.length) {
        console.log(tempSum, arr[i], arr[i-num]);
        tempSum = tempSum + arr[i] - arr[i-num]; 
        // console.log(tempSum, totalSum)
        i++;
        totalSum = Math.max(totalSum, tempSum);
        
    }
    return totalSum;
}

console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2));
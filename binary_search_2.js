function binary_search(arr, num) {
    var start = 0;
    var end = arr.length-1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if(arr[mid] < num) {
            start = mid+1;
        }
        else if (arr[mid] > num ) {
            end = mid-1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

console.log(binary_search([1, 2, 3, 4, 8, 10], 10));

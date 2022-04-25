function binarySearch(arr, num){
    let first = 0;
    let last = arr.length;
    return findNumber(arr, num, first, last);
}

function findNumber(arr, num, first, last) {
    let mid = Math.floor((first+last)/2);
    if (arr[mid] === num)
        return mid;
    else if (arr[mid]> num) {
        last = mid
        mid =findNumber(arr, num, first, last)
    }
    else if (arr[mid]< num) {
        first = mid
        mid = findNumber(arr, num, first, last)
    }
    else if (first === last ) {
        return -1;
    }
    return mid
}

binarySearch([1, 2, 3, 4, 5], 3)
     
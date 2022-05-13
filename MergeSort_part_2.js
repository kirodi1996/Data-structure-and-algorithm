// break the array for merge sort

function breakArr(arr) {
    if (arr.length === 1) return arr
    let mid = Math.floor(arr.length/2);
    breakArr(arr.slice(0, mid));
    breakArr(arr.slice(mid));
}

breakArr([32, 21, 15, 45, 100, 22])
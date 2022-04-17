function averagePair(arr, avrg) {
    var start = 0;
    var arrLen = arr.length;
    var end = arrLen-1;
    while (start<end ) {
       let tempAvrg = (arr[start] + arr[end]) / 2;
       console.log(tempAvrg);
       if(tempAvrg == avrg) {
           return true;
       }
       else if(tempAvrg >  avrg ) {
        end--;
       }
       else {
        start++;
       }
       
       
    }
    return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
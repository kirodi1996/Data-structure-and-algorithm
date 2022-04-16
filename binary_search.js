function binary_search(arr, start, end, num){
    if(start>end){
        return -1
    }
     

    let mid = start + Math.floor((end - start)/2)
    if(arr[mid] == num){
        return mid
    }
    if(start == end && arr[start] > num){
        return start
    }
    else if(start == end ) {
        return start+1
    }  
    if(num < arr[mid]){
       return  binary_search(arr, start, mid, num)
    } 
    else if (num > arr[mid]){
       return binary_search(arr, mid+1, end, num)
    }

}

console.log(binary_search([1,2,5,6,8], 0, 5,2));
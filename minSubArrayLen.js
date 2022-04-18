function minSubArrayLen(arr, num) {
    var len = 0;
    var total = 0;
    var arrLen = arr.length;
    var ans = Infinity;
    var start = 0;
    var end = 0;


    while(start < arrLen) {
        console.log(start, end);
        
        if(total < num && end<arrLen) {
            total+= arr[end++];
            len++;
        }

        else if(total >= num) {
                ans = Math.min(len, ans);   
                total -= arr[start]; 
                start++;
                len--;
        }
        
        else break;
    }

    
   return ans === Infinity ? 0 : ans;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7)


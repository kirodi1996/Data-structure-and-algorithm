function sumZero(arr) {
    let len = arr.length;
    let left = 0;
    let right = len - 1;
    let sum
    while (left < right) {
        sum = arr[left] + arr[right]        
        if (sum > 0 ) {
            right--;
        }
        else if (sum < 0) {
            left++;
        }
        else if (sum == 0) {
            return [left, right]
        }
    }
}

console.log(sumZero([-4, -2, -1, 0, 1, 2 ,5, 3, 4]))
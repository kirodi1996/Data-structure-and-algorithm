function isPalindrome(x) {
    x = JSON.stringify(x).split('')
    var length = x.length
    let start = 0
    let end = length-1
    for(start;start<=Math.floor(length/2);start++,end--){
        
        if(x[start] !== x[end]) {
            return false
        }
    }
    return true
};
console.log(isPalindrome(1000030001))

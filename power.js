function power(num, pow) {
    if (pow === 0) return 1;
    else if (pow === 1 ) return num;
    pow--;
    var ans = num * power(num,pow)    
    return ans 
     
}
console.log(power(2, 5))


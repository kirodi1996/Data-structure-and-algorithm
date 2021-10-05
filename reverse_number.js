var reverse = function(x) {
    let num = 0
    let isNegative = false
    if(x<0){
        isNegative = true
        x = -x 
    }
    while(x!=0)
    {
       
        let remainder = x % 10 
        x = Math.floor(x/10)
        num = num * 10 + remainder 
    }

    if(isNegative){
        num = -num
    }

    if(num>2147483647 || num<-2147483648){
        num = 0
    }
    return num

};
console.log(reverse(-1232322133312130))
function sameFrequency(num1, num2) {
    var x = num1.toString().split('');
    var y = num2.toString().split('');
    var num1Obj = {};
    var num2Obj = {};

    for (let num of x) {
        num1Obj[num] = num1Obj[num]+1 || 1;
    }
    for (let num of y) {
        num2Obj[num] = num2Obj[num]+1 || 1;
    }

    for (let key in num1Obj) {
        if(num1Obj[key] !== num2Obj[key]) {
            return false;
        }
    }
    return true;

}

console.log(sameFrequency(182, 281));
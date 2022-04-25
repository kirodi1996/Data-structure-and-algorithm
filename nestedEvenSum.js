function nestedEvenSum(obj) {
    let sum = 0
    for (let data in obj) {
        if (typeof(obj[data]) === 'number') {
            if (obj[data] % 2 === 0)
                sum+= obj[data];
        }
        else if (typeof(obj[data]) === 'object') {
           sum = sum + nestedEvenSum(obj[data])
        }
    }
    return sum;

}

var obj = {
    a: 2,
    b: {c: { d: 'acd' }}
}

nestedEvenSum(obj);
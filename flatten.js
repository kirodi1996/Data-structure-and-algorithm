function flatten(arr) {
    let data = [];
    if (arr.length === 0) {
        return data;
    }
    for (let item of arr) {
        if (typeof(item) !== 'object') {
            data.push(item)
        }
        else {
           data = data.concat(flatten(item))
        }
    }
    return data;

}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))
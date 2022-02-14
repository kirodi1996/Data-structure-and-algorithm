let arr = [1,1,1,1,14,4,4,4,5,5,5,2,3,4,5,1]
function countUnique(arr) {
    let mapArr = {}
    count = 0;
    for (let val of arr) {
        if (!mapArr[val]) {
            mapArr[val] = 1;
            count++;
        }
    }
    return count
}

console.log(countUnique(arr))





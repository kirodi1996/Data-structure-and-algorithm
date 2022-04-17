function areThereDuplicate(...num) {
    let duplicate = {}
    for (let data of num) {
        if (duplicate[data]) {
            return true;
        }
        duplicate[data] = 1;
    }
    return false;
}

console.log(areThereDuplicate(1, 2, 3))
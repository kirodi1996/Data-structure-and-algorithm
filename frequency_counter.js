function frequencyCount (arr1, arr2) {

    let arrMap = {};
    for (let i=0; i<arr2.length; i++) {
        if(arrMap[arr2[i]]) {
            arrMap[arr2[i]]++;
        }
        else {
            arrMap[arr2[i]] = 1;
        }
    }

    for (let i=0; i<arr1.length; i++) {
        if(arrMap[arr1[i] * arr1[i]]) {
            arrMap[arr1[i] * arr1[i]]--;
            if(arrMap[arr1[i] * arr1[i]] == 0) {
                delete arrMap[arr1[i] * arr1[i]]
            }
        }
        else {
            return false;
        }
    }
    
    if(Object.keys(arrMap).length > 0) {
        return false
    }

    return true;
}

console.log(frequencyCount( [1,2,3] , [1,4] ))

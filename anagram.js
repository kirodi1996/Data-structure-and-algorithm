function anagram(str1, str2) {
    if (str1.length != str2.length ) {
        return false
    }
    let mapStr1 = {}
    let mapStr2 = {}
    let len = str1.length
    for (let i=0; i<len; i++) {
        mapStr1[str1[i]] =  (mapStr1[str1[i]] || 0) + 1
    }
    for (let i=0; i<len; i++) {
        mapStr2[str2[i]] =  (mapStr2[str2[i]] || 0) + 1
    }
    console.log(mapStr1)
    console.log(mapStr2)
    for (let key in mapStr2) {
        if(mapStr2[key] !== mapStr1[key]){
            return false
        }
    }
    return true
}

console.log(anagram('aabccde', 'dbcacaz')); 
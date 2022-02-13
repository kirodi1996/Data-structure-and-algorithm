function countChar(str) {

    let strMap = {};
    
    for( let i=0; i< str.length; i++) {
        let char = str[i];
        strMap[char] ? strMap[char]++ : strMap[char] = 1;
    }
    return strMap;  
}

console.log(countChar('aaabcccbadmdsas'));
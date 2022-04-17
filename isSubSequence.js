function isSubSequence(str1, str2) {
    var str1Arr = str1.split('');
    var str2Arr = str2.split('');
    let match = 0;
    var str1Length = str1Arr.length;
    var str2Length = str2Arr.length;
    if(str1Length> str2Length) return false;
    
    let n = 0;
    let m = 0;

    while (n< str1Length && m < str2Length) {
        if(str1Arr[n] === str2Arr[m] ) {
            console.log(str1Arr[n]);
            n++;
            match++;
            
        }
        m++;
    }
            
        
    
    if (match === str1Length) {
        return true;
    }
    return false;
}

console.log(isSubSequence('abc', 'abracadabra'));
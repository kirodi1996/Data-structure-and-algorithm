function findLongestSubString(str) {
    var strArr = str.split('');
    var strLen = strArr.length;
    var obj = {};
    var ans = 0;
    var start = 0;
    for (let i=0; i< strLen; i++) {
        if(obj[strArr[i]]) {
            start = Math.max(start, obj[strArr[i]]);
        }

        ans = Math.max(ans, i-start+1);
        obj[strArr[i]] = i+1;
    }   
    return ans;
}
console.log(findLongestSubString('thisisawesome'));
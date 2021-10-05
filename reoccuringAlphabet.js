function reoccuringAlphabet(arr){
    let mapping = {}
    let ans = null
    for (let i=0;i<arr.length;i++){
        if(!mapping[arr[i]]) {
            mapping[arr[i]] = true
        }
        else{
            ans = arr[i]
            break
        }
    }
    console.log(ans)
    return ans
}

reoccuringAlphabet(['a','b','c','d','d','d','c','b'])
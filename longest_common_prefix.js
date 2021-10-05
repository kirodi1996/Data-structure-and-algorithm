var longestCommonPrefix = function(strs) {
   
    let minLength = strs[0].length
    let index = 0
    for(let i=0; i<strs.length; i++){
        if(minLength>=strs[i].length){
            minLength = strs[i].length
            index =  i
        }
    }
    let maxMatch = strs[index]
    for(let i=0; i<strs.length; i++){
        if(i==index){
            continue
        }
        for(let j = 0; j<minLength; j++){
            
            if(strs[i][j]!=maxMatch[j]){
                
                
                maxMatch = maxMatch.slice(0,j)
                
                break
                
            }
            
        }
             
    }
    return maxMatch
};

console.log(longestCommonPrefix(["flower","flow","flight",""]))

var twoSum = function(nums, target) {
    let remainTargetMap = {}
    let ans = []
    for (let i=0;i<nums.length;i++){
        remainTargetMap[nums[i]] = i 
    }
    for(let i=0;i<nums.length;i++){
        let remaining = target - nums [i]
        if(remainTargetMap[remaining] && remainTargetMap[remaining]!=i){
            ans.push(i) 
            ans.push(remainTargetMap[remaining])
            break;
        }
    }
    return (ans)
};

console.log(twoSum([1,3,4,2],6))
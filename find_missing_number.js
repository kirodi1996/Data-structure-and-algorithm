var arr =[11,12,13,15,16,18,19,20]


function findMissingNumber(){
    let missingNumber = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]+1!=arr[i+1]){
            missingNumber.push(arr[i]+1)
        }
    }
    console.log(missingNumber)

}


findMissingNumber(arr)
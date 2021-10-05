arr = [
    [1,2,3,4],
    [4,5,6,10],
    [7,8,9,11],
    [1,0,10,99]
]


function printSprialMatrix(arr){
    let i = 0;
    let j = 0;
    let lastMaxColumn = arr[0].length
    let lastMaxRow = arr.length
    let lastMinRow = 0
    let lastMinColumn = 0
    while(true){
        

        while(j<lastMaxColumn){
            console.log(arr[i][j++])
        }
        j--;
        lastMaxColumn = j
        while (i<lastMaxRow-1){
            
           console.log(arr[++i][j])
        }
        j--
        lastMaxRow = i
        while(j>=lastMinColumn ){
            console.log(arr[i][j--])
        }
        
        j++;
        i--;
        lastMinColumn = j
        while (i>lastMinRow){
            console.log(arr[i--][j])
        }
        
        lastMinRow = i

        console.log(lastMaxColumn,lastMaxRow,lastMinColumn,lastMinRow)

        
    }


}
printSprialMatrix(arr)



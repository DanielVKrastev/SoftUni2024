function solve(arr){

    for (let i = 0; i < arr.length; i++) {
        if(arr.length !== arr[i].length){
            return false;
        }
        
    }

    const sum = arr[0].reduce((acc, num) => acc + Number(num), 0);

    for (let i = 0; i < arr.length; i++) {  
        
        let sumRow = 0;
        let sumCol = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sumCol += Number(arr[j][i]);
            sumRow += Number(arr[i][j]);
        }
        
        if(sumRow !== sum || sumCol !== sum){
            return false;
        }
    }

    return true;
}

console.log(solve([[1, 1, 1],
    [1, 2, 1],
    [1, 1, 1]]
   ));


function matrix(num){

    
    let matrixArr = [];
    for(let i = 0; i < num; i++){
        matrixArr[i] = [];
        for(let j = 0; j < num; j++){
            matrixArr[i][j] = num;
        }
    }


   for(let i = 0; i < num; i++){
        let matrixString = '';
        for(let j = 0; j < num; j++){
            matrixString += matrixArr[i][j] + ' ';
        }
        console.log(matrixString);
    }
}
matrix(7);
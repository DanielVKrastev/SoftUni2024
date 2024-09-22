function solve(arr, numberInd){
    let newArr = [];
    for (let i = 0; i < arr.length; i += numberInd) {
        newArr.push(arr[i]);
    }

    return newArr;
    
}

solve(['1', 
    '2',
    '3', 
    '4', 
    '5'], 
    6
    
    )
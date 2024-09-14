function solve(arr){
    //sort input array
    arr.sort((a, b) => a - b);

    //find middle
    let middle = Math.floor(arr.length / 2);

    //create new array staing from the middle until the end of the array
    let result = [];

    for (let i = middle; i < arr.length; i++){
        result.push(arr[i]);
    }
    //return result
    return result;
}

solve([4, 7, 2, 5, 2])
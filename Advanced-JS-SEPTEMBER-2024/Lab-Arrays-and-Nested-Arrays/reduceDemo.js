function reduce(arr, reduceFn, accumulator){
    // take the accumulator and an element of the array and pass them to reducer function
    // the result is the new accoumulator
    // repeat until there are no more elements in the array

    for(let i = 0; i < arr.length; i++){
        accumulator = reduceFn(accumulator, arr[i]);
    }

    return accumulator;
}

function add(a, b){
    return a + b;
}

let myArr = [3, 0,10,4,7,3];

console.log(reduce(myArr, add, 0));

console.log(myArr.reduce(add, 0));



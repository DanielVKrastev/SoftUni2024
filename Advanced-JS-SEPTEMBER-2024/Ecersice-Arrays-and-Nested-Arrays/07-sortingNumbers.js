function solve(arr){
    /*
    arr.sort((a, b) => a - b)
    let result = [];
    let length = Math.floor(arr.length / 2);

    for(let i = 0; i < length; i++){
        result.push(arr[i]);
        result.push(arr[arr.length - (i + 1)]);
        if(arr.length % 2 !== 0 && i + 1 === length){
            result.push(arr[arr.length - (i + 2)]);
        }
    }

    return (result);
    */

    /*
    let result = [];
    arr.sort((a, b) => a - b);
    let index = 0;

    while(arr.length !== 0){
        if(index % 2 === 0){
            result.push(arr.shift());
        }else{
            result.push(arr.pop());
        }

        index++;
    }
    
    return (result);
    */

    let newArr = arr.slice();
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            newArr = newArr.sort((a, b) => a - b);
            result.push(newArr.shift());
        }else{
            newArr = newArr.sort((a, b) => b- a);
            result.push(newArr.shift());
        }
    }

    return (result);
    
    
    
}
solve([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])
//      [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
//       [2, 63, 3, 54, 9, 22, 11, 21, 18, 19]
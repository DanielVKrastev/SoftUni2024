function solve(arr){
    /*
    let biggestOne = arr.shift();
    let result = [];
    result.push(biggestOne);

    for(let el of arr){
        if(el >= biggestOne){
            result.push(el);
            biggestOne = el;
        }
        
    }

    return (result);
    */

    let biggestOne = Number.MIN_SAFE_INTEGER;
    return arr.reduce((acc, el) => {
        if (el >= biggestOne){
            acc.push(el);
            biggestOne = el;
        }
        return acc;
    }, [])
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ))
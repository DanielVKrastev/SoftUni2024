function solve(arr){
    const first = Number(arr.shift());
    const last = Number(arr.pop());

    const sum = first + last;
    console.log(sum);
    
}

solve(['20'])
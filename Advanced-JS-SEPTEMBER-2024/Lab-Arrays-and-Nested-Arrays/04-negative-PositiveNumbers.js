function solve(arr){

    let result = [];
    for(let element of arr){
        if(element < 0){
            result.unshift(element);
        }else{
            result.push(element);
        }
    }

    for(let element of result){
        console.log(element);
        
    }
}

solve([3, -2, 0, -1]);
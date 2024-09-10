function solve(argument){
    let isNumber = typeof(argument);
    let result;
    if(isNumber === 'number'){
        result = Math.pow(argument, 2) * Math.PI;
        console.log(result.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${isNumber}.`);
        
    }
    
}

solve(5)
solve('name')
solve([])
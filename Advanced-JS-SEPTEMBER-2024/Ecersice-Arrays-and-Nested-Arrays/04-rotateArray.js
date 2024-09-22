function solve(array, number){

    for (let i = 0; i < number; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement)
        
    }
    console.log(array.join(' '));
    
}

solve(['1', 
    '2', 
    '3', 
    '4'], 
    2
    )

    solve(['Banana', 
        'Orange', 
        'Coconut', 
        'Apple'], 
        15
        )
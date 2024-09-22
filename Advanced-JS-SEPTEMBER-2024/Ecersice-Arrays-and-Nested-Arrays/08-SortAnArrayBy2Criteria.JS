function solve(arr){
    /*
    arr.sort((a, b) => {
        if(a.length !== b.length){
            return a.length - b.length;
        }else{
            return a.localeCompare(b);
        }
    })
*/

    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    return arr.join('\n');
}

console.log(solve(['test', 
    'Deny', 
    'omen', 
    'Default']
    
    
    
    ))
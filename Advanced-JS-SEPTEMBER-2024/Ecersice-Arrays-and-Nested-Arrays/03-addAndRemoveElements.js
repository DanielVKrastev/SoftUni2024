function solve(commands){
/*    let n = 1;
    let result = [];

    for (let i = 0; i < commands.length; i++) {
        if(commands[i] === 'add'){
            result.push(n);
        }else{
            result.pop();
        }
        n++;
    }
    if(result.length === 0){
        console.log('Empty');
        
    }else{
        console.log(result.join('\n'));

    }
  */
 
    let n = 1;
    let result = [];

    commands.forEach(command => {
        command === 'add' ? result.push(n) : result.pop();
        n++;
    });

    result.length ? console.log(result.join('\n')) : console.log('Empty');;
}

solve(['remove', 
    'remove', 
    'remove']
    
    
    )
    
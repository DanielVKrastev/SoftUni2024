function solve(arr){
    let numbers = arr.shift().split(' ').map(Number);
    let command = arr.shift();

    while(command !== 'Finish'){
        let tokens = command.split(' ');
        const action = tokens.shift();
        const value = Number(tokens.shift());

        if(action === 'Add'){
            numbers.push(value);
        }else if(action === 'Remove'){
            const indexVal = numbers.indexOf(value);
            numbers.splice(indexVal, 1);
        }else if(action === 'Replace'){
            const replacement = Number(tokens.shift());
            const indexVal = numbers.indexOf(value);
            if (!(indexVal < 0 || indexVal >= numbers.length)) {
                numbers.splice(indexVal, 1, replacement);
            }
        }else if(action === 'Collapse'){
            for(let i = 0; i < numbers.length; i++){
                if(numbers[i] < value){
                    const indexVal = numbers.indexOf(numbers[i]);
                    numbers.splice(indexVal, 1);
                }
            }
            if(numbers.length === 1 && numbers[0] < value){
                numbers.shift();
            }
        }
        
        command = arr.shift();
    }

    console.log(numbers.join(' '));    
}

function solve(arr) {
    let numbers = arr.shift().split(' ').map(Number);
    let command = arr.shift();

    while (command !== 'Finish') {
        let tokens = command.split(' ');
        const action = tokens.shift();
        const value = Number(tokens.shift());

        if (action === 'Add') {
            numbers.push(value);
        } else if (action === 'Remove') {
            const indexVal = numbers.indexOf(value);
            if (indexVal !== -1) {
                numbers.splice(indexVal, 1);
            }
        } else if (action === 'Replace') {
            const replacement = Number(tokens.shift());
            const indexVal = numbers.indexOf(value);
            if (indexVal !== -1) {
                numbers.splice(indexVal, 1, replacement);
            }
        } else if (action === 'Collapse') {
            for (let i = numbers.length - 1; i >= 0; i--) {
                if (numbers[i] < value) {
                    numbers.splice(i, 1);
                }
            }
        }

        command = arr.shift();
    }

    console.log(numbers.join(' '));
}
solve(["21",
    "Replace 21 2",
    "Finish"])
    
    
    
    
    
    
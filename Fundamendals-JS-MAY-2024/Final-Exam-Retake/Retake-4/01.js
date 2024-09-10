function solve(arr){
    let activationKey = arr.shift();
 //  let rawActivationKey = activationKey;
    let command = arr.shift();

    while(command !== 'Generate'){
        const tokens = command.split('>>>');
        const action = tokens.shift();

        if(action === 'Slice'){
            const startIndex = Number(tokens.shift());
            const endIndex = Number(tokens.shift());
            
            const sliceKey = activationKey.slice(startIndex, endIndex);
            activationKey = activationKey.split(sliceKey).join('');
            console.log(activationKey);

        }else if(action === 'Flip'){
            const cases = tokens.shift();
            const startIndex = Number(tokens.shift());
            const endIndex = Number(tokens.shift());

            let oldFlipKey = activationKey.slice(startIndex, endIndex);
            let newFlipKey = '';

            if(cases === 'Upper'){
                newFlipKey = oldFlipKey.toUpperCase();
            }else if(cases === 'Lower'){
                newFlipKey = oldFlipKey.toLowerCase();
            }

            activationKey = activationKey.replace(oldFlipKey, newFlipKey);
            console.log(activationKey);

        }else if(action === 'Contains'){
            const substring = tokens.shift();
            
            if(activationKey.includes(substring)){
                console.log(`${activationKey} contains ${substring}`);
            }else{
                console.log("Substring not found!");
            }
        }

        command = arr.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}

solve(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>2",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
    
    
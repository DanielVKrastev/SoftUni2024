function solve(arr){
    let username = arr.shift();
    let command = arr.shift();

    while(command !== 'Registration'){
        const tokens = command.split(' ');
        const action = tokens.shift();
        
        if(action === 'Letters'){
            const operation = tokens.shift();
            
            if(operation === 'Lower'){
                username = username.toLowerCase();
            }else if(operation === 'Upper'){
                username = username.toUpperCase();
            }
            console.log(username);

        }else if(action === 'Reverse'){
            const startIndex = Number(tokens.shift());
            const endIndex = Number(tokens.shift());
            const usernameLeng = username.length;
            
            if(startIndex <= usernameLeng && startIndex >= 0 && endIndex + 1 <= usernameLeng && endIndex + 1 >= 0){
                const reverseStr = username.slice(startIndex, endIndex + 1).split('').reverse().join('');
                console.log(reverseStr);
            }

        }else if(action === 'Substring'){
            const substring = tokens.shift();
            
            if(username.includes(substring)){
                username = username.split(substring).join('');
                console.log(username);
            }else{
                console.log(`The username ${username} doesn't contain ${substring}.`);
            }

        }else if(action === 'Replace'){
            const replaceStr = tokens.shift();
            
            for (const char of username) {
                if(char === replaceStr){
                   username = username.replace(replaceStr, '-');
                   
                }
            }
            console.log(username);

        }else if(action === 'IsValid'){
            const charValid = tokens.shift();
            
            if(username.includes(charValid)){
                console.log("Valid username.");
            }else{
                console.log(`${charValid} must be contained in your username.`);
            }
        }

        command = arr.shift();
    }
}
/*
solve([
    'John',
    'Letters Lower',
    'Substring SA',
    'IsValid @',
    'Registration',
    ]
)*/

/*
solve([
    'ThisIsSoftUni',
    'Reverse 1 3',
    'Replace S',
    'Substring hi',
    'Registration',
]
)
*/
solve([
    'Daniell',
    'Letters Lower',
    'Substring A',
    'Replace l',
    'Reverse 1 0',
    'Registration',
]
)
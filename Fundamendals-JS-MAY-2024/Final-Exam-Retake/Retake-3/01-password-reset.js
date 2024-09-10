function solve(arr){
    let password = arr.shift();
    
    let command = arr.shift();

    while(command !== 'Done'){
        const tokens = command.split(' ');
        const action = tokens.shift();

        if(action === 'TakeOdd'){

            const passwordArr = password.split('');
            let passwordNewArr = [];
            for(let i = 0; i < passwordArr.length; i++){
                if(i % 2 !== 0){
                    passwordNewArr.push(passwordArr[i]);
                }
            }
            password = passwordNewArr.join('');
            console.log(password);

        }else if(action === 'Cut'){
            const index = Number(tokens.shift());
            const length = Number(tokens.shift());
            
            const cutPass = password.slice(index, index + length);
            
            if(password.indexOf(cutPass) !== -1){
               password = password.replace(cutPass, '');
            }
            console.log(password);
            
        }else if(action === 'Substitute'){
            const substring = tokens.shift();
            const substitute = tokens.shift();

            if(password.includes(substring)){
                password = password.split(substring).join(substitute);
                console.log(password);
            }else{
                console.log("Nothing to replace!");
            }
        }

        command = arr.shift();
    }

    console.log(`Your password is: ${password}`);
}

solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
    "TakeOdd",
    "Cut 15 3",
   "Substitute :: -",
    "Substitute | ^",
    "Done"])
    
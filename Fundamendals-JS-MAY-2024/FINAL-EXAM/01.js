function solve(arr){
    let string = arr.shift();
    
    let command = arr.shift();

    while(command !== 'Done'){
        const tokens = command.split(' ');
        const action = tokens.shift();

        if(action === 'Change'){
            const char = Number(tokens.shift());
            const replacement = tokens.shift();

            string = string.split(char).join(replacement);
            console.log(string);
            
        }else if(action === 'Includes'){
            const substring = tokens.shift();
            
            if(string.includes(substring)){
                console.log('True');
            }else{
                console.log('False');
            }

        }else if(action === 'End'){
            const endSubstring = tokens.shift();            
            const lengthSubstring = endSubstring.length;

            let endStringArr = [];
            for(let i = lengthSubstring; i > 0; i--){
                endStringArr.push(string[string.length - i]);
            }
            const endString = endStringArr.join('');
            
            if(endString === endSubstring){
                console.log('True');
            }else{
                console.log('False');
            }
            
        }else if(action === 'Uppercase'){
            string = string.toUpperCase();

            console.log(string);
            
        }else if(action === 'FindIndex'){
            const char = tokens.shift();
            
            let stringArr = string.split('');
            console.log(stringArr.indexOf(char));
            
        }else if(action === 'Cut'){
            const startIndex = Number(tokens.shift());
            const count = Number(tokens.shift());

            console.log(string.slice(startIndex, startIndex + count));
            
        }
        
        

        command = arr.shift();
    }
    
}

/*solve(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"])
    */

solve(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"])
    
    
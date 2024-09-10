function solve(arr){
    let message = arr.shift();
    let command = arr.shift();

    while(command !== 'Decode'){
        const tokens = command.split('|');
        const action = tokens.shift();
        
        if(action === 'Move'){
            const letterCount = tokens.shift();
            const lettersToMove = message.substring(0, letterCount);

            message = message.replace(lettersToMove, '');
            message += lettersToMove;
        }else if(action === 'Insert'){
            const index = Number(tokens.shift());
            const value = tokens.shift();
            
            message = message.substring(0, index) + value + message.substring(index);

        }else if(action === 'ChangeAll'){
            const substring = tokens.shift();
            const replacement = tokens.shift();

            message = message.split(substring).join(replacement);
            /*
            while (message.includes(substring)){
                message = message.replace(substring, replacement);
            }
            */
        }
        command = arr.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]
  )

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
  ) 
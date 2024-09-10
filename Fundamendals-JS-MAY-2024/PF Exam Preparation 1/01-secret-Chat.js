function solve(input){
    let msg = input.shift();

    while(input[0] != 'Reveal'){
        const line = input.shift();
        const tokens = line.split(':|:');
        const cmd = tokens[0];

        switch(cmd){
            case 'InsertSpace':
                const index = Number(tokens[1]);
                const firstPart = msg.slice(0, index);
                const secondPart = msg.slice(index);
                msg = `${firstPart} ${secondPart}`;
                break;
            case 'Reverse':
                const substring = tokens[1];
                const firstIndex = msg.indexOf(substring);
                
                if(firstIndex === -1){
                    console.log('error');
                    continue;
                }

                const left = msg.slice(0, firstIndex);
                const indexToContinueFrom = firstIndex + substring.length;
                const right = msg.slice(indexToContinueFrom);
                const reversedSubst = substring.split('').reverse().join('');
                msg = `${left}${right}${reversedSubst}`;
                break;
            case 'ChangeAll':
                const [_, match ,replacement] = tokens;
                
                msg = (msg.split(match).join(replacement));
                break;
        }
       console.log(msg);
    }
    console.log(`You have a new text message: ${msg}`);
}

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )

/* OUTPUT
hellodar!gnil
hellodarling!
hello darling!
You have a new text message: hello darling!

*/
function houseParty(arr){
    let guests = [];

    for (const command of arr) {
        let tokens = command.split(' ');
        const name = tokens.shift(); //tokens[0]

        if(tokens.includes('not')){
            const nameIdx = guests.indexOf(name);

            if(nameIdx !== -1){
                guests.splice(nameIdx, 1);
            } else{
                console.log(`${name} is not in the list!`);
            }
        }else{
            if(guests.includes(name)){
                console.log(`${name} is already in the list!`);
            }else{
                guests.push(name);
            }
        }
    }
    console.log(guests.join('\n'));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
    );
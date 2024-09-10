function solve(arr){
    let cards = arr.shift().split(', ');
    let numberCommands = Number(arr.shift());
    
    for(let i = 1; i <= numberCommands; i++) {

        let tokens = arr.shift().split(', ');
        const command = tokens.shift();
        const card = tokens.shift();



        switch(command){
            case 'Add':
                if(!cards.includes(card) === true){
                    cards.push(card);
                    console.log('Card successfully added');
                }else{
                    console.log('Card is already in the deck');
                }
                break;
            case 'Remove':
                const indexCard = cards.indexOf(card);
                if(indexCard !== -1){
                    cards.splice(indexCard, 1);
                    console.log("Card successfully removed");
                }else{
                    console.log("Card not found");
                }
                break;
            case 'Remove At':
                const removeIndex = card;

                if (removeIndex < 0 || removeIndex >= cards.length) {
                    console.log("Index out of range");
                }else{
                    cards.splice(removeIndex, 1);
                    console.log('Card successfully removed');
                }
                break;
            case 'Insert':
                const indexInsertCard = card;
                const newCard = tokens.shift();
                
                if (indexInsertCard < 0 || indexInsertCard >= cards.length) {
                    console.log("Index out of range");
                } else {

                    if(cards.includes(newCard)){
                        console.log('Card is already added');
                    }else{
                        cards.splice(indexInsertCard, 0, newCard);
                        console.log('Card successfully added');
                    }
                }
                break;
        }
    }
    console.log(cards.join(', '));
}
solve(["Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"])
    
    
    

    
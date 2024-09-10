function solve(arr){
    function collectLoot(curItems, newItems){
        for(const newItem of newItems){
            if(!curItems.includes(newItem)){
                curItems.unshift(newItem);
            }
        }
    }

    function dropItem(curItem, index){
        if(index >= 0 && index < curItem.length){
            const deletedItem = curItem.splice(index, 1)[0]; //or shift()
            curItem.push(deletedItem);
        }
    }

    function stealItems(curItems, countToSteal){
        const stolenItems = curItems.splice(-countToSteal);
        console.log(stolenItems.join(', '));
    }

    let items = arr.shift().split("|");
    let command = arr.shift();

    while(command !== 'Yohoho!'){
        let tokens = command.split(" ");
        const action = tokens.shift();

        switch(action){
            case 'Loot':
                const newItems = tokens;
                collectLoot(items, newItems);
                
                break;
            case 'Drop':
                const index = Number(tokens.shift());
                dropItem(items, index);
                
                break;
            case 'Steal':
                const countTodelete = Number(tokens.shift());
                stealItems(items, countTodelete);
                break;
        }

        command = arr.shift();
    }

    let gainSum = 0;

    for (const item of items) {
        gainSum += item.length;
    }

    const averageGain = gainSum / items.length;

    if(items.length === 0){
        console.log('Failed treasure hunt.');
    }else{
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}
solve(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
    
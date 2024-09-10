resources = {
    'Gold': 155,
    'Silver': 10,
}

function solve(input){
    const resourceQty = {};

    for(let i = 0; i < input.length; i += 2){
        const resource = input[i];
        const qty = Number(input[i+1]);

        if(resource in resourceQty){
            resourceQty[resource] += qty;
        }else{
            resourceQty[resource] = qty;
        }
    }

    const resourceEntries = Object.entries(resourceQty);
    
    for (const [resource, qty] of resourceEntries) {
        console.log(`${resource} -> ${qty}`);
    }
} 
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    )
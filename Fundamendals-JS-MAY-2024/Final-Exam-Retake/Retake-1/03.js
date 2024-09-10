/*
bakeryShop = {
    'cookies': 105,
    'donuts': 10
}
*/

function solve(arr){

    let command = arr.shift();

    let bakeryShop = {};
    let totalSold = 0;

    while(command !== 'Complete'){
        const tokens = command.split(' ');
        const action = tokens.shift();
        
        if(action === 'Receive'){
            const quantity = Number(tokens.shift());
            let foodName = tokens.shift();

            if(quantity >= 0){
                
                if(foodName in bakeryShop){
                    bakeryShop[foodName] += quantity;
                }else{
                    bakeryShop[foodName] = quantity;
                }

            }

        }else if(action === 'Sell'){
            const quantitySell = Number(tokens.shift());
            const foodSell = tokens.shift();

            if(foodSell in bakeryShop){

                if(quantitySell > bakeryShop[foodSell]){
                    console.log(`There aren't enough ${foodSell}. You sold the last ${bakeryShop[foodSell]} of them.`);
                    totalSold += Number(bakeryShop[foodSell]);
                    delete bakeryShop[foodSell];
                }else{
                    console.log(`You sold ${quantitySell} ${foodSell}.` );
                    totalSold += quantitySell;
                    if(quantitySell < bakeryShop[foodSell]){
                        bakeryShop[foodSell] -= quantitySell;
                    }else{
                        delete bakeryShop[foodSell];
                    }
                }
                
            }else{
                console.log(`You do not have any ${foodSell}.`);
            }
        }

        command = arr.shift();
    }

    let entries = Object.entries(bakeryShop);
    for (const [food, qty] of entries) {
        console.log(`${food}: ${qty}`);
    }
    
    console.log(`All sold: ${totalSold} goods`);
}

solve([
    'Receive 105 cookies',
    'Receive 10 donuts',
    'Sell 10 donuts',
    'Sell 1 bread',
    'Complete'
])
    
    /*
solve([
    'Receive 10 muffins',
    'Receive 23 bagels',
    'Sell 5 muffins',
    'Sell 10 bagels',
    'Complete'
])
    */
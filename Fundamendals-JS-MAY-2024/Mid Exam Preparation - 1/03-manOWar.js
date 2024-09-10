function solve(input){
    //input
    const pirateShip = input.shift().split(">").map(Number);
    const warShip = input.shift().split(">").map(Number);
    const maxHealthCapacity = Number(input.shift()); // 100%
    const critical = maxHealthCapacity * 0.2; //20%

    //loop input
    for(const el of input){
        
        if(el === 'Retire'){
            break;
        }

        const tokens = el.split(" ");
        const command = tokens.shift();

        //business logic
        switch(command){
            case 'Fire':
               fire(tokens);

                if(warShip.includes(0)){
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
                break;
            case 'Defend':
                defend(tokens);
                if(pirateShip.includes(0)){
                    console.log(`You lost! The pirate ship has sunken.`);
                    return;
                }
                break;
            case 'Repair':
                repair(tokens);
                break;
            case 'Status':
                status();
                break;
        }
    }

    
    const pirateShipStatus = sumShips(pirateShip);
    const warShipStatus = sumShips(warShip);

    console.log(`Pirate ship status: ${pirateShipStatus}`);
    console.log(`Warship status: ${warShipStatus}`);

    function fire(tokens){
        const index = Number(tokens[0]);
        const warShipDmg = Number(tokens[1]);

        if(warShip[index]){
            if(warShip[index] - warShipDmg < 0){
                warShip[index] = 0;
            }else{
                warShip[index] -= warShipDmg;
            }
        }
    }

    function defend(tokens){
        const startIndex = Number(tokens[0]);
                const endIndex = Number(tokens[1]);
                const pirateShipDmg = Number(tokens[2]);

                if(pirateShip[startIndex] >= 0&& pirateShip[endIndex] >= 0){

                    for(let index = startIndex; index <= endIndex; index++){
                        
                        if(pirateShip[index] - pirateShipDmg <= 0){
                            pirateShip[index] = 0;
                        }else{
                            pirateShip[index] -= pirateShipDmg;
                        }
                    }
                }
    }

    function repair(tokens){
        const repairIndex = Number(tokens[0]);
        const health = Number(tokens[1]);

        if(pirateShip[repairIndex]){
            if(pirateShip[repairIndex] + health > maxHealthCapacity) {
                pirateShip[repairIndex] = maxHealthCapacity
            } else {
                pirateShip[repairIndex] += health;
            }
        }
    }

    function status(){
        const allASectionForRepair = pirateShip.filter((s) => s < critical);

                console.log(`${allASectionForRepair.length} sections need repair.`);
    }

    function sumShips(ships){
        let statusSum = 0;
        for (const ship of ships) {
            statusSum += ship;
        }
        return statusSum
    }
}
//input
solve((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
    )
//output
/*
2 sections need repair.
Pirate ship status: 135
Warship status: 205
*/

//input
/*
solve(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])
*/
//output
/*
3 sections need repair.
You lost! The pirate ship has sunken.
*/
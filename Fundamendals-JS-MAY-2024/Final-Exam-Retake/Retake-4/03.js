/*cities = {
    Tortuga: {population: 345000, gold: 1250}
}*/

function solve(arr){
    let command = arr.shift();

    let cities = {};
    while(command !== 'Sail'){
        const tokens = command.split('||');
        const nameCity = tokens.shift();
        const populationCity = Number(tokens.shift());
        const goldCity = Number(tokens.shift());

        if(nameCity in cities){
            cities[nameCity].population += populationCity;
            cities[nameCity].gold += goldCity;
        }else{
            cities[nameCity] = {population: populationCity, gold: goldCity};
        }

        command = arr.shift();
    }

    command = arr.shift();
    while(command !== 'End'){
        const tokens = command.split('=>');
        const action = tokens.shift();

        if(action === 'Plunder'){ 
            const attackCity = tokens.shift();
            const killedPeoples = Number(tokens.shift());
            const goldStolen = Number(tokens.shift());
            
            if(killedPeoples <= cities[attackCity].population && goldStolen <= cities[attackCity].gold){
                cities[attackCity].population -= killedPeoples
                cities[attackCity].gold -= goldStolen
                //console.log(cities[attackCity].population, cities[attackCity].gold);
                console.log(`${attackCity} plundered! ${goldStolen} gold stolen, ${killedPeoples} citizens killed.`);
                if(cities[attackCity].population === 0 || cities[attackCity].gold === 0){
                    console.log(`${attackCity} has been wiped off the map!`);
                    delete cities[attackCity];
                }
            }
            
        }else if(action === 'Prosper'){
            const cityName = tokens.shift();
            const addGold = Number(tokens.shift());

            if(addGold < 0){
                console.log("Gold added cannot be a negative number!");
            }else{
                cities[cityName].gold += addGold
                console.log(`${addGold} gold added to the city treasury. ${cityName} now has ${cities[cityName].gold} gold.`);
            }
        }
        command = arr.shift();
    }

    let cityArr = [];
    let count = 0;
    for (const cityName in cities) {
       const population = cities[cityName].population;
       const gold = cities[cityName].gold;
        count++;
       cityArr.push(`${cityName} -> Population: ${population} citizens, Gold: ${gold} kg`)
    }

    if(cityArr.length > 0){
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
        console.log(cityArr.join('\n'));
    }else{
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
/*solve(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])*/

solve(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
    
    
    
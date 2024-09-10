/*citiesData = {
    'Tortuga': {population: 345000, gold: 1250},
    'Santa Domingo': {population: 240000, gold: 630}
}
*/

function solve(arr){
    let citiesData = {};

    //stage 1: target cities
    let command = arr.shift();

    while(command !== 'Sail'){
        const tokens = command.split('||');
        const cityName = tokens.shift();
        const cityPopulation =  Number(tokens.shift());
        const cityGold = Number(tokens.shift());

        if(cityName in citiesData){
            citiesData[cityName].population += cityPopulation;
            citiesData[cityName].gold += cityGold;
        }else {
            citiesData[cityName] = {population: cityPopulation, gold: cityGold};
        }

        command = arr.shift();
    }

    //console.log(citiesData);

    //stage 2: attack cities

    command = arr.shift();

    while(command !== 'End'){
        const tokens = command.split('=>')
        const action = tokens.shift();
        const cityName = tokens.shift();

        if(action === 'Plunder'){
            const peopleKilled = Number(tokens.shift());
            const goldStolen = Number(tokens.shift());

            citiesData[cityName].population -= peopleKilled;
            citiesData[cityName].gold -= goldStolen;

            console.log(`${cityName} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);

            if(citiesData[cityName].population <= 0 || citiesData[cityName].gold <= 0){
                console.log(`${cityName} has been wiped off the map!`);
                delete citiesData[cityName];
            }
        }
        else if(action === 'Prosper'){
            const goldAdd = Number(tokens.shift());

            if(goldAdd < 0){
                console.log("Gold added cannot be a negative number!");
            }else{
                citiesData[cityName].gold += goldAdd;
                console.log(`${goldAdd} gold added to the city treasury. ${cityName} now has ${citiesData[cityName].gold} gold.`);
            }
        }

        command = arr.shift();
    }

    const cityEntries = Object.entries(citiesData);

    if(cityEntries.length === 0){
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }else{
        console.log(`Ahoy, Captain! There are ${cityEntries.length} wealthy settlements to go to:`);
    
        for (let [cityName, cityStats] of cityEntries) {
            console.log(`${cityName} -> Population: ${cityStats.population} citizens, Gold: ${cityStats.gold} kg`);
        }
    }
}

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
    
    
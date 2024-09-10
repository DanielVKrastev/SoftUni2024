function starEnigma(arr){
    const messagesCount = Number(arr.shift());
    const patternsCountLetter = /[starSTAR]/g;
    const patternPlanet = /[^@\-!:>]*@(?<planet_name>[A-Z][a-z]+)[^@\-!:>]*:[^\d@\-!:>]*(?<population>\d+)[^@\-!:>]*\!(?<action>[A|D])\![^@\-!:>]*->[^\d@\-!:>]*(?<soldiers>\d+)[^@\-!:>]*/;

    let planets = [];

    for(let i = 0; i < messagesCount; i++){
        const decryptMsg = arr.shift();
        const matchCountLetter = decryptMsg.match(patternsCountLetter);
        const decryptionKey = matchCountLetter ? matchCountLetter.length : 0;

        let afterDecryptArr = [];
        for(let j = 0; j < decryptMsg.length; j++){
            const charASCII = decryptMsg.charCodeAt(j);
            afterDecryptArr.push(String.fromCharCode(charASCII - decryptionKey));
        }

        const afterDecrypt = afterDecryptArr.join('');

        const matchPlanet = patternPlanet.exec(afterDecrypt);

        if(matchPlanet){
            const planetName = matchPlanet.groups.planet_name;
            const population = matchPlanet.groups.population;
            const action = matchPlanet.groups.action;
            const soldiers = matchPlanet.groups.soldiers;

            planets.push({planetName: planetName, population: population, action: action, soldiers: soldiers})
        }
    }
    //console.log(planets);
    

    let countAttack = 0;
    let countDestroyed = 0;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (const planet of planets) {
        if(planet.action === 'A'){
            countAttack++;
            attackedPlanets.push(planet.planetName);
        }else if(planet.action === 'D'){
            countDestroyed++;
            destroyedPlanets.push(planet.planetName);
        }
    }

    attackedPlanets.sort();
    destroyedPlanets.sort();

    console.log(`Attacked planets: ${countAttack}`);
    for (const attackedPlanet of attackedPlanets) {
        console.log(`-> ${attackedPlanet}`);
    }
    console.log(`Destroyed planets: ${countDestroyed}`);
    for (const destroyedPlanet of destroyedPlanets) {
        console.log(`-> ${destroyedPlanet}`);
    }
    
}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']
    
    )
/*plants = {
    'TropicalZone': {plant: 'Orchid', waterNeed: 300},
    'FernGully': {plant: 'Fern', waterNeed: 200},
}
*/

/*
plants = {
    'Orchid': {waterNeed: 300, section: 'TropicalZone'},
    'Fern': {waterNeed: 200, section: 'FernGully'},
    'Orchid2': {waterNeed: 200, section: 'TropicalZone'},
}
*/

/*countSection = {
    FlowerBed: 1,
    FernGully: 2
}
*/

function solve(arr){
    let command = arr.shift();

    let plantsObj = {};
    let countSection = {};

    while(command !== 'EndDay'){
        const tokens = command.split(': ');
        const [action, plants] = tokens;

        if(action === 'Plant'){
            const tokensPlants = plants.split('-');
            const plantName = tokensPlants.shift();
            const waterNeed = Number(tokensPlants.shift());
            const section = tokensPlants.shift();
            

            if(plantName in plantsObj){
                plantsObj[plantName].waterNeed += waterNeed;
            }else{
                plantsObj[plantName] = {waterNeed: waterNeed, section: section};

                if(section in countSection){
                    countSection[section]++;
                }else{
                    countSection[section] = 1;
                }
            }
            
        }else if(action === 'Water'){
           const tokensPlants = plants.split('-');
           const plantName = tokensPlants.shift();
           const water = Number(tokensPlants.shift());

           if(plantName in plantsObj){
                plantsObj[plantName].waterNeed -= water;

                const section = plantsObj[plantName].section;

                if(plantsObj[plantName].waterNeed <= 0){
                    console.log(`${plantName} has been sufficiently watered.`);
                    countSection[section]--;
                    delete plantsObj[plantName];
                   }
           }
           
        }
        
        command = arr.shift();
    }

    console.log("Plants needing water:");

    const plantEntries = Object.entries(plantsObj);
    for (const plant of plantEntries) {
        const namePlant = plant.shift();
        const plantInfo = plant.shift();

        console.log(` ${namePlant} -> ${plantInfo.waterNeed}ml left`);
    }

    const countSectionEntries = Object.entries(countSection);

    console.log("Sections with thirsty plants:");
    
    for (const sectionData of countSectionEntries) {
        const section = sectionData.shift();
        const count = sectionData.shift();
        
        if(count > 0){
            console.log(` ${section}: ${count}`);
        }
    }
    

}

solve(["Plant: Orchid-300-TropicalZone",
    "Plant: Fern-200-FernGully",
    "Plant: Orchid-100-TropicalZone",
    "Water: Daisy-50",
    "Water: Orchid-200",
    "EndDay"])
    

    
    
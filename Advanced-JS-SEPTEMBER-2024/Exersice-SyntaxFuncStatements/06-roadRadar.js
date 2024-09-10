function solve(speed, area){
    const motorway = 130;
    const interstate = 90;
    const city = 50;
    const residential = 20;

    let speedLimit = 0;
    switch(area){
        case 'motorway': 
            speedLimit = motorway;
            break;
        case 'interstate': 
            speedLimit = interstate;
            break;
        case 'city':
            speedLimit = city;
            break;
        case 'residential': 
            speedLimit = residential;
            break;
    }

    if(speed <= speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }else{
        let status = '';
        if(speed - speedLimit <= 20){
            status = 'speeding';
        }else if(speed - speedLimit <= 40){
            status = 'excessive speeding';
        }else{
            status = 'reckless driving';
        }
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}
solve(120, 'interstate')
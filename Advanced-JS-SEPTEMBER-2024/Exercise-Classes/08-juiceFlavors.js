function processJuices(input){

    const juices = new Map;
    const juiceBottles = new Map;

    for (const line of input){
        let [juice, qty] = line.split(' => ');
        qty = Number(qty);
        if( ! juices.has(juice)){
            juices.set(juice, 0);
        }

        juices.set(juice, juices.get(juice) + qty);

        if( juices.get(juice) >= 1000){

          // const juiceBottle = parseInt(juices.get(juice) / 1000);
           const juiceBottle = Math.floor(juices.get(juice) / 1000);
            
            if( ! juiceBottles.has(juice)){
                juiceBottles.set(juice, 0);
            }

            juiceBottles.set(juice, juiceBottles.get(juice) + Number(juiceBottle));
            juices.set(juice, juices.get(juice) - Number(juiceBottle * 1000));
        
        }
    }
    
    for(const [juice, bottleCount] of juiceBottles) {
        console.log(`${juice} => ${bottleCount}`);
        
    }
    
}

processJuices(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
    )
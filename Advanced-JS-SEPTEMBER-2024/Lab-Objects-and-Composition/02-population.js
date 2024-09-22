function solve(townArray){
    const result = {};

    for(const entry of townArray){
        const [name, population] = entry.split(' <-> ');

      //  population = Number(population);

        if(!result.hasOwnProperty(name)){
            result[name] = 0;
        }

        result[name] += Number(population);

        /*
        if(result.hasOwnProperty(name)){
            result[name] += population;
        }else{
            result[name] = population;
        }*/
    }

    console.log(Object.entries(result).map(([k,v]) => `${k} : ${v}`).join('\n'));
    

  /*  for (const name in result) {
        console.log(name, ':', result[name]);
        
    }
   */
    
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
    )
    console.log('------------------');
    
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
    )    
function solve(arr){
    let result = [];

    class Town{
        constructor(town, latitude, longitude){
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude);
        }
    }

    for (let i = 1; i < arr.length; i++) {
        const array = arr[i].split('|').map(t => t.trim()).filter(x=> x.length != 0);
        const townName = array.shift();
        const latitude = Number(array.shift()).toFixed(2);
        const longitude = Number(array.shift()).toFixed(2);
        
        const town = new Town(townName, latitude, longitude);
        result.push(town);
    }
    return JSON.stringify(result);

}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
    ));

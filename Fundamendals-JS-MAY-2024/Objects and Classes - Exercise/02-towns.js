function towns(arr){

    for (const townStr of arr) {
        const tokens = townStr.split(' | ');
        const townName = tokens[0];
        const townLatitude = Number(tokens[1]);
        const townLongitude = Number(tokens[2]);

        const curTown = {
            town: townName,
            latitude: townLatitude.toFixed(2),
            longitude: townLongitude.toFixed(2)
        };

        console.log(curTown);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    )
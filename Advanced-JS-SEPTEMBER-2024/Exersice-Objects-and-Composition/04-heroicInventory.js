function solve(arr){

    let result = [];
    for (const iterator of arr) {

        if (iterator.trim() === '') {
            continue;
        }

        let [name, level, items] = iterator.split(' / ');
        
        items = items ? items.split(', ') : [];
        level = Number(level);

        result.push({name, level, items});
    }

    return (JSON.stringify(result));
    
}
    console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']
    ));
    

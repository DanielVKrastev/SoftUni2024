function solve(arr){
    let obj = {};

    for (let i = 0; i < arr.length; i += 2) {
        let product = arr[i];        
        let calories = arr[i + 1];

        obj[product] = Number(calories);
    }

    console.log(obj);
    
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])


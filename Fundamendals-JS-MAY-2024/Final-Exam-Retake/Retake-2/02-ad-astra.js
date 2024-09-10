function solve(arr){
    const pattern = /([|#])(?<item>[A-Za-z\s]+)\1(?<exp_date>\d{2}\/\d{2}\/\d{2})\1(?<cals>\d+)\1/g;
    const str = arr.shift();

    let totalCalories = 0;
    let match = pattern.exec(str);
    let items = [];

    while(match){
        const itemName = match.groups.item;
        const expirationDate = match.groups.exp_date;
        const calories = Number(match.groups.cals);

        totalCalories += calories;
        
        items.push(`Item: ${itemName}, Best before: ${expirationDate}, Nutrition: ${calories}`)

      //console.log(itemName, expirationDate, calories);

        match = pattern.exec(str);
    }

    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(items.join('\n'));


}

solve(['Hello|#Invalid food#19/03/20#450|$5*(@' ]
    )
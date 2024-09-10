function furtinture(arr){
    const patterns = />>(?<furniture_name>[A-Za-z]{1,})<<(?<price>[\d{1,}]*[.]?\d+)!(?<qty>\d{1,})/g;
    let command = arr.shift();
    let totalMoney = 0;
    console.log("Bought furniture:");

    while(command !== 'Purchase'){

        let match = patterns.exec(command);
        while(match){
            console.log(match.groups.furniture_name);
            const price = match.groups.price;
            const quantity = match.groups.qty;
            totalMoney += price * quantity;
            match = patterns.exec(command);
        }

        command = arr.shift();
    }

    console.log("Total money spend: "+totalMoney.toFixed(2));
}

furtinture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>TV<<3!5',
    '>>Invalid<<!!5',
    'Purchase']
    
    )
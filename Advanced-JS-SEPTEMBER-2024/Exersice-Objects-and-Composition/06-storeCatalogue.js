function solve(arr){
    let obj = {}
    // { letter (A): { Appricot: 20.4, Apple: 1.25 }}

    for (const line of arr) {
        const [product, price] = line.split(' : ');
        
        const letter = product[0];
        if(!obj.hasOwnProperty(letter)){
            obj[letter] = {};
        }

        //obj[letter] = {product: price}
        obj[letter][product] = price;
        
    }

    let sortedLetters = Object.keys(obj).sort((a,b) => a.localeCompare(b));

    for (const letter of sortedLetters) {
        console.log(letter);
        let sortedProducts = Object.keys(obj[letter]).sort((a,b) => a.localeCompare(b));
        
        for (const product of sortedProducts) {
            console.log(`  ${product}: ${obj[letter][product]}`);
        }
        
    }
    
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
    )
function solve(arr){
    let obj = {};
    //key: { product -> { town, price}}
    for (let i = 0; i < arr.length; i++) {
        const text = arr[i];
        const productInfo = text.split(' | ');
        const town = productInfo.shift();
        const product = productInfo.shift();
        const price = Number(productInfo.shift());
        
        //obj[product] -> undefined == false
        //obj.hasOwnProperty(product)
        if(!obj.hasOwnProperty(product)) {
            obj[product] = {town, price};
        }else{
            if(price < obj[product].price){
                obj[product] = {town, price};
            }
        }
        
    }

    //Sample Product -> 1000 (Sample Town)
   let productNames = Object.keys(obj);
   
   for (let i = 0; i < productNames.length; i++) {
        let productName = productNames[i];
        console.log(`${productName} -> ${obj[productName].price} (${obj[productName].town})`);
   }
   
    
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
    )
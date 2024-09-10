function storage(input){
   
   const mapProducts = new Map();

    for (const item of input) {
        const splitItem = item.split(' ');
        const product = splitItem[0];
        let qty = Number(splitItem[1]);
    
        if(mapProducts.has(product)){
            const oldQty = mapProducts.get(product);
            mapProducts.set(product, qty += oldQty);
        }else{
            mapProducts.set(product, qty);
        }
    }

    for (const item of mapProducts) {
        console.log(`${item[0]} -> ${item[1]}`);
    }
    
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
    
    
    
    
    )
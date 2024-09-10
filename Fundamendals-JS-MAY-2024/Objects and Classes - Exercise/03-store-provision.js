function store(arr1, arr2){
    const storeObj = [];
    const deliveryObj = [];

    for (let i = 0; i < arr1.length; i+=2) {
        storeObj.push(
            {
                name: arr1[i],
                quantity: Number(arr1[i+1])
            }
        )

    }

    for (let i = 0; i < arr2.length; i+=2) {
        deliveryObj.push(
            {
                name: arr2[i],
                quantity: Number(arr2[i+1])
            }
        )
    }

    for (const productInStore of storeObj) {
        
        for (const productInDelivery of deliveryObj) {

            if(productInStore.name === productInDelivery.name){
                productInStore.quantity += productInDelivery.quantity;
                deliveryObj.splice(deliveryObj.indexOf(productInDelivery), 1);
            }

        }
        
        console.log(`${productInStore.name} -> ${productInStore.quantity}`);
    }

    for (const productInDelivery of deliveryObj) {
        console.log(`${productInDelivery.name} -> ${productInDelivery.quantity}`);
    }

}
store([
'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
[
'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
]

    )
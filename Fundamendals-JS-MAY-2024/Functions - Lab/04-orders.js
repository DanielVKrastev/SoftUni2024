function orders(product, quantity){

    function productPrice(product) {
        switch (product) {
            case 'coffee': return (1.50).toFixed(2);
                break;
            case 'water': return (1.00).toFixed(2);
                break;
            case 'coke': return (1.40).toFixed(2);
                break;
            case 'snacks': return (2.00).toFixed(2);
                break;
        }
    }

    function totalPrice(product, quantity){
        return (productPrice(product) * quantity).toFixed(2);
    }

    console.log(totalPrice(product, quantity));
    
}
orders("water", 5);
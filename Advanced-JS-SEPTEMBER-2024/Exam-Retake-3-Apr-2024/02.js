class BikeRentalService{
    constructor(name, location){
        this.name = name;
        this.location = location;
        this.availableBikes  = new Map();
    }

    addBikes (bikes){
        let output = [];

        for (const bike of bikes) {
            let [brand, newQuantity, newPrice] = bike.split('-');
            newQuantity = Number(newQuantity);
            newPrice = Number(newPrice);

            if(this.availableBikes.has(brand)){
                this.availableBikes.get(brand).quantity += newQuantity;
                if(this.availableBikes.get(brand).price < newPrice){
                    this.availableBikes.get(brand).price = newPrice;
                }
            }else{
                this.availableBikes.set(brand, {quantity: newQuantity, price: newPrice});
                output.push(brand);
            }
        }

        return `Successfully added ${output.join(', ')}`;
    }

    rentBikes(selectedBikes){
        let totalPrice = 0;
        for (const rentBike of selectedBikes) {
            let [brand, rentQuantity] = rentBike.split('-');
            rentQuantity = Number(rentQuantity);
            
            if( ! this.availableBikes.has(brand)){
                return "Some of the bikes are unavailable or low on quantity in the bike rental service.";
            }

            if( this.availableBikes.get(brand).quantity < rentQuantity){
                return "Some of the bikes are unavailable or low on quantity in the bike rental service.";
            }

            totalPrice += rentQuantity * this.availableBikes.get(brand).price;
            this.availableBikes.set(brand, {quantity: this.availableBikes.get(brand).quantity - rentQuantity, price: this.availableBikes.get(brand).price});
            
        }

        return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    returnBikes (returnedBikes){
        for (const returnBike of returnedBikes) {
            let [brand, returnQuantity] = returnBike.split('-');
            returnQuantity = Number(returnQuantity);
            
            if( ! this.availableBikes.has(brand) ){
                return "Some of the returned bikes are not from our selection.";
            }
            this.availableBikes.set(brand, {quantity: this.availableBikes.get(brand).quantity + returnQuantity, price: this.availableBikes.get(brand).price});
        }

        return "Thank you for returning!";
    }

    revision (){
        let output = "Available bikes:";

        const sortedBikes = [...this.availableBikes.entries()].sort((a,b) => a[1].price - b[1].price);
        for (const [brand, data] of sortedBikes) {
            output += `\n${brand} quantity:${data.quantity} price:$${data.price}`;
        }

        output += `\nThe name of the bike rental service is ${this.name}, and the location is ${this.location}.`;

        return output;
    }
}

const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());






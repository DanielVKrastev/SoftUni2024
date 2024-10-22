class Hotel{
    constructor(initialBudget){
        this.initialBudget = initialBudget;
        this.roomAvailability = {}
        this.supplyStock = {};
    }

    restockSupplies(supplies) {
        let output = [];

        supplies.forEach(supply => {
            let [supplyName, supplyQuantity, supplyTotalPrice] = supply.split(" ");
            supplyQuantity = Number(supplyQuantity);
            supplyTotalPrice = Number(supplyTotalPrice);

            if (this.initialBudget >= supplyTotalPrice) {
                // restock supply if budget allows
                if (this.supplyStock[supplyName]) {
                    this.supplyStock[supplyName] += supplyQuantity;
                } else {
                    this.supplyStock[supplyName] = supplyQuantity;
                }
                this.initialBudget -= supplyTotalPrice;
                output.push(`Successfully stocked ${supplyQuantity} ${supplyName}`);
            } else {
                // not enough budget to restock
                output.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`);
                return output.join('\n');
            }
        })

        return output.join('\n');
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (this.roomAvailability[roomType]) {
            return `The ${roomType} is already available in our hotel, try something different.`;
        }

        let parsedSupplies = neededSupplies.map(supply => {
            let [supplyName, supplyQuantity] = supply.split(" ");
            return {
                supplyName,
                supplyQuantity: parseInt(supplyQuantity)
            };
        });

        this.roomAvailability[roomType] = {
            neededSupplies: parsedSupplies,
            pricePerNight: pricePerNight
        };

        let roomTypesCount = Object.keys(this.roomAvailability).length;
        return `Great idea! Now with the ${roomType}, we have ${roomTypesCount} types of rooms available, any other ideas?`;
    }

    showAvailableRooms(){
        let output = [];
        for (const room in this.roomAvailability) {
           output.push(`${room} - $ ${this.roomAvailability[room].pricePerNight}`)
        }

        if(Object.keys(this.roomAvailability).length){
            return output.join('\n');
        }else{
            return "Our rooms are not ready yet, please come back later...";
        }
    }

    bookRoom(roomType){
        if ( ! this.roomAvailability[roomType]) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        let roomDetails = this.roomAvailability[roomType];
        
        for (let supply of roomDetails.neededSupplies) {
            let { supplyName, supplyQuantity } = supply;

            if (!this.supplyStock[supplyName] || this.supplyStock[supplyName] < supplyQuantity) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }

        return `Your booking for ${roomType} has been confirmed! The price is $${roomDetails.pricePerNight} per night.`;
    }
}
let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));




class Vehicle {

    constructor(type, model, parts, fuel){
        this.type = type;
        this.model = model;
        this.fuel = fuel;

        parts.quality = parts.engine * parts.power;
        this.parts = parts;
    }

    drive(fuelLoss){
        this.fuel -= fuelLoss;
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

//output
//100
//600

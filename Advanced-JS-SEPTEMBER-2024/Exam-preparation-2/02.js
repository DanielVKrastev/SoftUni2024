class FlightBookingSystem{
    constructor(agencyName){
        this.agencyName = agencyName;
	    this.flights = [];
	    this.bookings = [];
	    this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price){

        if( typeof flightNumber !== 'string'){
            throw Error('Invalid input: flightNumber is not a string');
        }

        if( typeof destination !== 'string'){
            throw Error('Invalid input: destination is not a string');
        }

        if( typeof departureTime !== 'string'){
            throw Error('Invalid input: departureTime is not a string');
        }

        if(this.flights[flightNumber]){
            return (`Flight ${flightNumber} to ${destination} is already available.`);
        }else {

            const flight = {
                number: flightNumber,
                destination: destination,
                departureTime: departureTime,
                price: Number(price)
            };

            this.flights[flightNumber] = flight;
            return (`Flight ${flightNumber} to ${destination} has been added to the system.`);
        }
    }

    bookFlight(passengerName, flightNumber){
        
        if( typeof passengerName !== 'string'){
            throw Error('Invalid input: passengerName is not a string');
        }

        if( typeof flightNumber !== 'string'){
            throw Error('Invalid input: flightNumber is not a string');
        }

        if(! this.flights[flightNumber]){
            return `Flight ${flightNumber} is not available for booking.`;
        }else{

            const booking = {
                passengerName: passengerName,
                flightNumber: flightNumber,
                price: this.flights[flightNumber].price
            }

            this.bookings[passengerName + '-' + flightNumber] = booking;
            this.bookingsCount++;

            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
        }
    }

    cancelBooking(passengerName, flightNumber){
        if( typeof passengerName !== 'string'){
            throw Error('Invalid input: passengerName is not a string');
        }

        if( typeof flightNumber !== 'string'){
            throw Error('Invalid input: flightNumber is not a string');
        }

        if(this.bookings[passengerName + '-' + flightNumber]){

            delete this.bookings[passengerName + '-' + flightNumber];
            this.bookingsCount--;

            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }else{
            throw Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);   
        }
    }

    showBookings(criteria){

        if( typeof criteria !== 'string'){
            throw Error('Invalid input: criteria is not a string');
        }

        if(this.bookingsCount == 0){
            throw Error(`No bookings have been made yet.`);
        }

        if(criteria === 'all'){
            let output = `All bookings(${this.bookingsCount}):`
            
            for (const entry in this.bookings){
                output += '\n' + `${this.bookings[entry].passengerName} booked for flight ${this.bookings[entry].flightNumber}.`;
            }

            return output;
        }
        
        if(criteria === 'cheap'){

            const cheapBookings = Object.keys(this.bookings).filter((entry) => this.bookings[entry].price <= 100);

            let output = '';

            if(cheapBookings.length > 0){
                output += "Cheap bookings:";

                cheapBookings.forEach((entry) => {
                    output += "\n" + `${this.bookings[entry].passengerName} booked for flight ${this.bookings[entry].flightNumber}.`
                });

            }else{
                return "No cheap bookings found.";
            }

            return output;
        }
        
        if(criteria === 'expensive'){

            const cheapBookings = Object.keys(this.bookings).filter((entry) => this.bookings[entry].price > 100);

            let output = '';

            if(cheapBookings.length > 0){
                output += "Expensive bookings:";

                cheapBookings.forEach((entry) => {
                    output += "\n" + `${this.bookings[entry].passengerName} booked for flight ${this.bookings[entry].flightNumber}.`
                });

            }else{
                return "No expensive bookings found."
            }

            return output;
        }

    }
}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.cancelBooking("Alice", "AA101"));



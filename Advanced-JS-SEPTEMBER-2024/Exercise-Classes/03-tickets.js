function processTickets(input, criteria){

    const criteriaOptions = ['price', 'destinaton', 'status'];
    const tickets = [];

    if( ! Array.isArray(input) || typeof criteria != 'string'){
        throw Error('Invalid Argument: One or more of the supplied arguments doues not match the required type.');
    }

    if( ! criteriaOptions.indexOf(criteria) == -1){
        throw Error('Invalid sorting argument. Valid options: '+ criteriaOptions.join(' ,'));
    }

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static sort(tickets, criteria){
            if (criteria == 'price') {
                tickets.sort((a,b) => a[criteria] - b[criteria]);
            } else {
                tickets.sort((a,b) => a[criteria].localeCompare(b[criteria]));
            }
        }
    }

    for (const line of input){
        let [destination, price, curStatus] = line.split('|');
        price = Number(price);
        const ticket = new Ticket(destination, price, curStatus);
        tickets.push(ticket);
    }

    Ticket.sort(tickets, criteria);

    return tickets;
    
}

const testArr = ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'];
   
console.log(processTickets(testArr, 'status'));

function burgerBus(input) {
    let cityNumbers = Number(input.shift());
    let endProfit = 0;

    for (let i = 0; i < cityNumbers; i++) {
        let city = input.shift();
        let income = Number(input.shift());
        let expense = Number(input.shift());
        let profit = income - expense;

        if ((i+1)%5===0){
            profit -=income*0.1;
        }
        if ((i+1)%3===0){
            profit-=expense*0.5;
        }

        endProfit += profit;
        console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`);
    }

    console.log(`Burger Bus total profit: ${endProfit.toFixed(2)} leva.`);
}

burgerBus(["3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"])
    
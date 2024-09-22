function cityTaxes(name, population, treasury){
    const city = {};

    city.name = name;
    city.population = population;
    city.treasury = treasury;
    city.taxRate = 10;

    city.collectTaxes = function() {
        this.treasury += Math.floor(this.population * this.taxRate);
    };

    city.applyGrowth = function(percent) {
        this.population += Math.floor((percent / 100) * this.population);
    };
    city.applyRecession = function(percent) {
        this.treasury -= Math.ceil((percent / 100) * this.treasury);
    };

    return city;
}

const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);

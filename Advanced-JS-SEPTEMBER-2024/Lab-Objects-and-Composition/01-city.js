function createCity(name, population, treasury){
    const city = {};

    city.name = name;
    city.population = population;
    city.treasury = treasury;

    return city;
}

console.log(createCity('Tortuga',
7000,
15000
));

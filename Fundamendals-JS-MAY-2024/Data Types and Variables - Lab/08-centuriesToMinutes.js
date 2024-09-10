function centuriesToMinutes(centuries){
    const years = centuries * 100;
    const days = Math.trunc(years * 365.2422);
    const hours = 24 * days;
    const minutes = 60 * hours;

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
centuriesToMinutes(1);
centuriesToMinutes(5)
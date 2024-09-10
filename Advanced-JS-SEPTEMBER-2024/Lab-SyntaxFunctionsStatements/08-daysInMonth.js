function solve(month, year){
    const dates = new Date(year, month, 0);
    console.log(dates.getDate());
     
}
solve(2, 2022)
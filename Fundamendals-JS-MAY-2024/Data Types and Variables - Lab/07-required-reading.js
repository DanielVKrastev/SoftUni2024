function requiredReading(numberPages, pagesReadForHour, numberDays){
    const totalTime = numberPages / pagesReadForHour;
    
    const requiredPerDay = totalTime / numberDays;

    console.log(requiredPerDay);
}
requiredReading(212,
    20 ,
    2 
    )

requiredReading(432,
    15 ,
    4 
    )
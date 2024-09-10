function spice(startingYield){
    let day = 0;
    let totalYield = 0;

    while(startingYield >= 100){
        day++;

        totalYield += startingYield - 26;
        startingYield -= 10;
    }

    totalYield -= 26;

    console.log(day);
    if(day !== 0){
        console.log(totalYield);
    }else{
        console.log('0');
    }
}
spice(100);
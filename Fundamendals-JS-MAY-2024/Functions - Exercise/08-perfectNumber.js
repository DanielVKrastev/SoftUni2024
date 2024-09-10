function perfectNumber(num){
    let sumProperDivisors = 0;

    for(let divisors = 1; divisors < num; divisors++){
        if(num % divisors === 0){
            sumProperDivisors += divisors;
        }
    }

    if(sumProperDivisors === num){
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");
    }
}
perfectNumber(284);
function factorialDivision(num1, num2){

    function calculateFactorial(num){
        let factorial = 1;

        for(let factor = 2; factor <= num; factor++){
            factorial *= factor;
        }
        return factorial;
    }

    const factorial1 = calculateFactorial(num1);
    const factorial2 = calculateFactorial(num2);

    const quotient = factorial1 / factorial2;   
    console.log(quotient.toFixed(2));
}
factorialDivision(5,2)
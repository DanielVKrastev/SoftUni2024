function solve(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);

    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    console.log(sum);
    
}

solve('-8', '20');
function solve(numA, numB){
    let a = numA;
    let b = numB;
    let gcd = a % b;

    while(gcd !== 0){
        a = b;
        b = gcd;
        gcd = a % b;
    }

    console.log(b);
}

solve(15, 5)
solve(2154, 458)
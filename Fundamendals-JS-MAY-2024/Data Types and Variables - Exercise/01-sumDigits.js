function sumDigits(num){
    let sum = 0;
    let numToString = String(num);

    for(let i = 0; i < numToString.length; i++){
        let curDigit = Number(numToString[i]);
        sum += curDigit;
    }
    console.log(sum);
}
sumDigits(245678)
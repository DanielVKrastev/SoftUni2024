function triangleOfNumbers(number){
    let str = '';
    for(let i = 1; i <= number; i++){
        for(let j = 1; j <= i; j++){
            str += i + ' ';
        }
        console.log(str);
        str = '';
    }
}
triangleOfNumbers(3)
//triangleOfNumbers(5)
//triangleOfNumbers(6)
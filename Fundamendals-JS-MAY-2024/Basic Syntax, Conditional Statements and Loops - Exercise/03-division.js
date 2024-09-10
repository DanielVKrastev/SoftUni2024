function division(number){
    let arr = [10, 7, 6, 3, 2];

    for(let i = 0; i < arr.length; i++){
        if(number % arr[i] === 0){
            console.log(`The number is divisible by ${arr[i]}`);
            return;
        }
    }
    console.log(`Not divisible`);
}
division(30);
division(15);
division(12)
division(1643)
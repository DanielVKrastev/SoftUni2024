function sumOfOddNumbers(number){
    let sum = 0;
    for(let i = 1; i <= number*2; i += 2){
        sum += i;
        console.log(i);
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
console.log('---------------');
sumOfOddNumbers(3);
console.log('---------------');
sumOfOddNumbers(7);
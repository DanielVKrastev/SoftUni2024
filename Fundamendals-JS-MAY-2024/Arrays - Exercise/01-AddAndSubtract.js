function AddAndSubtract(numbers){

    let sumOriginal = 0;
    let sumModified = 0;
    for (let i = 0; i < numbers.length; i++){

        sumOriginal += numbers[i];

        if(numbers[i] % 2 === 0){
            numbers[i] += i;
            sumModified += numbers[i];
        }else{
            numbers[i] -= i;
            sumModified += numbers[i];
        }

    }
    console.log(numbers);
    console.log(sumOriginal);
    console.log(sumModified);
}
AddAndSubtract([5, 15, 23, 56, 35]);
console.log('-------');
AddAndSubtract([-5, 11, 3, 0, 2]);
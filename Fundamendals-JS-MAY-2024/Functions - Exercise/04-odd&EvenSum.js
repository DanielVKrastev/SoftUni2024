function solve(number){

    function sumEvenOdd(num){
        const numberToString = String(num);
        let sumEven = 0
        let sumOdd = 0;

        for(let i = 0; i < numberToString.length; i++){
            const stringToNumber = Number(numberToString[i]);
            if(stringToNumber % 2 === 0){
                sumEven += stringToNumber;
            }else{
                sumOdd += stringToNumber;
            }
        }

        console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
    }

    sumEvenOdd(number);

}
solve(3495892137259234)
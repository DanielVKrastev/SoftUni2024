function simpleCalculator(number1, number2, operator){

const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;


    switch (operator) {
        case 'multiply':
           console.log(multiply(number1, number2)); 
            break;
        case 'divide':
            console.log(divide(number1, number2));
            break;
        case 'add':
            console.log(add(number1, number2));
            break;
        case 'subtract':
            console.log(subtract(number1, number2));
            break;
    }

}
simpleCalculator(5,
    10,
    'multiply' 
    )
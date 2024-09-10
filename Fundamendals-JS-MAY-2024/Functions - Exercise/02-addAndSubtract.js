function addAndSubtract(num1, num2, num3){

    function add(x, y){
        return x + y;
    }

    function subtract(x, y){
        return x - y;
    }

    const sumNum1Num2 = add(num1, num2);

    const result = subtract(sumNum1Num2, num3);

    console.log(result);
}

addAndSubtract(1,17,30);
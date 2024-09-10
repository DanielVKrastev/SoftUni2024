function signCheck(numOne, numTwo, numThree){

    function isNegative(number){
        if(number < 0){
            return true;
        }else{
            return false;
        }
    }
    let result = '';
    if(isNegative(numOne) && isNegative(numTwo) && isNegative(numThree)){
        result ='Negative';
    }else if(!isNegative(numOne) && !isNegative(numTwo) && isNegative(numThree)){
        result ='Negative';
    }else if(!isNegative(numOne) && isNegative(numTwo) && !isNegative(numThree)){
        result ='Negative';
    }else if(isNegative(numOne) && !isNegative(numTwo) && !isNegative(numThree)){
        result ='Negative';
    }else if(!isNegative(numOne) && isNegative(numTwo) && isNegative(numThree)){
        result ='Positive';
    }else if(isNegative(numOne) && !isNegative(numTwo) && isNegative(numThree)){
        result ='Positive';
    }else if(isNegative(numOne) && isNegative(numTwo) && !isNegative(numThree)){
        result ='Positive';
    }else if(!isNegative(numOne) && !isNegative(numTwo) && !isNegative(numThree)){
        result ='Positive';
    }
    console.log(result);
}
signCheck( -1,
    -2,
    -3
    
    
   );
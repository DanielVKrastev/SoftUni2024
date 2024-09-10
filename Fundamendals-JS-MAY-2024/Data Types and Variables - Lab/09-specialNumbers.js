function specialNumbers(num){

    for(let i = 1; i <= num; i++){
        let numToString = String(i);
        let sum = 0;
        for(let j = 0; j < numToString.length; j++){
            sum += Number(numToString[j]);
        }
        
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
        
    }
}
specialNumbers(20)
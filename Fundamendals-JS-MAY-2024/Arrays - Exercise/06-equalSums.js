function equalSums(arr){
    let isFound = false;

    for(let i = 0; i < arr.length; i++){
        let sumToLeft = 0;
        let sumToRight = 0;

        for(let j = 0; j < i; j++){
            let numToLeft = arr[j];
            sumToLeft += numToLeft;
        }

        for(let k = i + 1; k < arr.length; k++){
            let numToRight = arr[k];
            sumToRight += numToRight;
        }

        if(sumToLeft === sumToRight){
            console.log(i);
            isFound = true;
            break;
        }
    }

    if(!isFound){
        console.log('no');
    }
}
equalSums([1,2,3,3]);
equalSums([1,2])

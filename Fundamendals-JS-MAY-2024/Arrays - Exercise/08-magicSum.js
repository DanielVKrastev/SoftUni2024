function magicSum(arr, number){

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i !== j){
                sum = Number(arr[i]) + Number(arr[j]);

                if(sum === number){
                    console.log(`${arr[i]} ${arr[j]}`);
                    arr[i] = undefined;
                    arr[j] = undefined;
                    break;
                }
            }
        }
    }
    console.log(arr);

/*
    for(let i = 0; i < arr.length; i++){
        if(i !== 0){
            let prevNum = Number(arr[i - 1]);

            for(let j = i; j < arr.length; j++){
                let currentNum = arr[j];
                sum = currentNum + prevNum;

                if(sum === number){
                    console.log(`${prevNum} ${currentNum}`);
                }
            }
        }
    }
    */
}
magicSum([1,3,3,4],7);
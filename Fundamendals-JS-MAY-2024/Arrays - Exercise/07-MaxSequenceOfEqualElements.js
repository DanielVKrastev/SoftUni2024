function solve(arr){
    let longestSequence = [];
    let curSequence = [arr[0]];

    for(let i = 1; i < arr.length; i++){
        let curNum = arr[i];

        if(curNum === curSequence[0]){
            curSequence.push(curNum);

            if(curSequence.length > longestSequence.length){
                longestSequence = curSequence;
            }
        }else{
            curSequence = [curNum];
        }
    }

    console.log(longestSequence.join(' '));
}
solve([2,1,1,2,3,3,2,2,2,1]);
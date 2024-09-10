function maxNumber(num){

    let topNums = [];

    for(let i = 0; i < num.length; i++){
        let curNum = num[i];
        let isTop = true;

        for(let j = i + 1; j < num.length; j++){
            let numToRight = num[j];

            if(curNum <= numToRight){
                isTop = false;
                break;
            }
        }

        if(isTop){
            topNums.push(curNum);
        }
    }
    console.log(topNums.join(' '));
}
maxNumber([1,4,3,2])
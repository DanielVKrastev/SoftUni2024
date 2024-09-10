function sorting(arr){

    let sortedArr = arr.sort((a, b) =>  b - a);
    //console.log(sortedArr);

    let resultArr = [];

    while(sortedArr.length > 0){
        const firstElement = sortedArr.shift();
        resultArr.push(firstElement);

        if(sortedArr.length > 0){
            const lastElement = sortedArr.pop();
            resultArr.push(lastElement);
        }
        
    }

    console.log(resultArr.join(' '));
}
sorting([1, 21, 3])
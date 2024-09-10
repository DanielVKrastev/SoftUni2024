function solve(str){
    let numsArr = str.split(' ').map(Number);
    
    let numsSum = 0;
    for (const num of numsArr) {
        numsSum += num;
    }
    const numsAvg = numsSum / numsArr.length;
    
    const filteredNums = numsArr.filter(n => n > numsAvg);
    if(filteredNums.length === 0){
        console.log('No');
    }else{
        const sortArrNums = filteredNums.sort((a, b) => b - a);
        const top5Nums = sortArrNums.slice(0, 5);
        console.log(top5Nums.join(' '));
    }

}
solve('-1')
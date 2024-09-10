function disticntArrays(arr){
    let uniqueNum = [];

    for(const num of arr){

        if (!uniqueNum.includes(num)){
            uniqueNum.push(num);
        }
    }

    console.log(uniqueNum.join(' '));
}
disticntArrays([7,8,9,7,2,3,4,1,2])
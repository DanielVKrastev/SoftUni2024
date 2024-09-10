function mergeArrays(arr1, arr2){
    
    let mergeArray = [];

    for(let i = 0; i < arr1.length; i++){

        if(i % 2 === 0){
            const mergeNum = Number(arr1[i]) + Number(arr2[i]);
            mergeArray.push(mergeNum);
        }else{
            const mergeString = arr1[i] + arr2[i];
            mergeArray.push(mergeString);
        }
    }
    console.log(mergeArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)
console.log('-----------');
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
)
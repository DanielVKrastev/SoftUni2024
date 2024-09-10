function solve(arr1, arr2){
    const takeNums = arr2[0];
    const deleteNums = arr2[1];
    const searchNum = arr2[2];

    let takeArr = arr1.slice(0, takeNums);
    takeArr.splice(0, deleteNums);

    
    console.log(`Number ${searchNum} occurs ${takeArr.filter((n) => (n === searchNum)).length} times.`);
}
solve([7, 1, 5, 5, ,5 ,8, 2, 7],
    [5, 1, 5]
    
    )
function printAndSum(start, end){
    let sum = 0;

    let str = "";
    for(let i = start; i <= end; i++){
        sum += i;
        str += i+" ";
    }
    console.log(str);
    console.log(`Sum: ${sum}`);

}

printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)
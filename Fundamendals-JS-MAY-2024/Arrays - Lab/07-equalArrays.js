/*function equalArrays(arr1, arr2){
    let areEqual = true;
    let sum = 0;
    for(let i = 0; i < arr1.length; i++){
        arr1[i] = Number(arr1[i]);
        sum += arr1[i];
    }

    for(let i = 0; i < arr2.length; i++){
        arr2[i] = Number(arr2[i]);
    }

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }

    if(areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}*/

function equalArrays(arr1, arr2) {
    let sum = 0;
 
    for (let i = 0; i < arr1.length; i++) {
      let currNum1 = Number(arr1[i]);
      let currNum2 = Number(arr2[i]);
 
      if (currNum1 !== currNum2) {
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        return;
      }
 
      sum += currNum1;
    }
        console.log(`Arrays are identical. Sum: ${sum}`);

}
equalArrays(['10','20','30'], ['10','20','30'])
console.log('-------');
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])
console.log('--------');
equalArrays(['1'], ['10'])
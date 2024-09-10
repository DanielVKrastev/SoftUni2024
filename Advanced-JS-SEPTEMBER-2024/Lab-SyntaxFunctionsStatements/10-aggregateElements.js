function solve(elements){
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1/b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(arr, initVal, func){
        let sum = initVal;
        for (let i = 0; i < arr.length; i++) {
            sum = func(sum, arr[i]);
        }
        console.log(sum);
    }
}

solve([2, 4, 8, 16])
function solve(arr, start, end){
    //find starting and ending indexes
    let startingIndex = arr.indexOf(start);
    let endingIndex = arr.indexOf(end) + 1;

   //return part ot the input array starting from some index and stop some index
    const result = arr.slice(startingIndex, endingIndex);

    return result;
}

solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
   'Key Lime Pie',
   'Lemon Meringue Pie'
   )
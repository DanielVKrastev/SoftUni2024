function solve(arr){
    //find elements at odd indexes
    let filtered = arr.filter((x, i) => i % 2);

    //double them
    let doubled = filtered.map(x => x * 2);
    
    //reverse them
    let reversed = doubled.reverse();
    
    //print on single line
    console.log(reversed.join(' '));
    
}
//const solve = arr => (arr.filter((x, i) => i % 2).map(x => x * 2).reverse().join(' '));

solve([10, 15, 20, 25]);
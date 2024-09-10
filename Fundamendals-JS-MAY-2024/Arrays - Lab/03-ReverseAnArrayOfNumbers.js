function solve(n, nums){
        
    let result = '';
    for(let i = n - 1; i >= 0; i--){
        result += nums[i] + ' ';
    }

    console.log(result);
    
}  
solve(3, [10, 20, 30, 40, 50]);
solve(2, [66, 43, 75, 89, 47]);
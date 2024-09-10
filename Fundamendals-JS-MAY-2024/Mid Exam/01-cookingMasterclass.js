function solve(arr){
    let budget = Number(arr.shift());
    const students = Number(arr.shift());
    let flourPrice = Number(arr.shift());
    let eggPrice = Number(arr.shift());
    let apronPrice = Number(arr.shift());

    let freePackages = 0;
    for(let i = 4; i <= students; i++){
        if(i % 5 === 0){
            freePackages++;
        }
    }

    let total = apronPrice * (Math.ceil(students * 0.20 + students)) + eggPrice * 10 * students + flourPrice * (students - freePackages);

    if(total <= budget){
        console.log(`Items purchased for ${total.toFixed(2)}$.`);
    }else{
        console.log(`${(total - budget).toFixed(2)}$ more needed.`);
    }
}
solve(['946',
    '20',
    '12.05',
    '0.42',
    '27.89'])
    
    
    
    
    
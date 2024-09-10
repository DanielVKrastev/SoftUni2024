function bombNumbers(numbers, bombNumber){
    const bombNum = bombNumber.shift();
    const bombPower = bombNumber.shift();

    let sumRemainingElement = 0;
    for (const num of numbers) {
        let bombNumIndex = numbers.indexOf(bombNum);
       // console.log(bombNumIndex);
        if(bombNumIndex !== -1){
            if(bombNumIndex - bombPower > -1){
                numbers.splice(bombNumIndex - bombPower, bombPower);
                bombNumIndex = numbers.indexOf(bombNum);
            }
            numbers.splice(bombNumIndex, bombPower);
            bombNumIndex = numbers.indexOf(bombNum);
            
            numbers.splice(bombNumIndex - 1, 1);

        }
        if(numbers.length === 0){
            sumRemainingElement = 0;
        }else{
            sumRemainingElement += num;
        }
        
    }
    console.log(sumRemainingElement);
}
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
    
    
    
    
    
    
    
    )
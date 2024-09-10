function solve(stars){

    
    for (let i = 0; i < stars; i++) {
        let rowStars = '';
        for (let j = 0; j < stars; j++) {
            rowStars += ' *';
        }
        console.log(rowStars);
    }
}
solve(7)
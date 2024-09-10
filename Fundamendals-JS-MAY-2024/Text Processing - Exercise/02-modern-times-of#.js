function solve(text){
    const words = text.split(' ');
    const hashWords = words.filter(word => word.startsWith('#') && word.length > 1);
    
    //word boundaries
    const pattern = /\b[A-Za-z]+\b/;

    for (let hashtage of hashWords) {
        hashtage = hashtage.substring(1);
        
        if(pattern.test(hashtage)){
            console.log(hashtage);
        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
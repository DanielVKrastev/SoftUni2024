/*{
    'java': 2,
    'c#': 3,
    'php' : 3
}*/

function oddOcurrences(str){
    const wordOccurences = new Map();
    const words = str.split(' ').map(word => word.toLowerCase());
    
    for (const word of words) {

        if(wordOccurences.has(word)){
            const currentOccurences = wordOccurences.get(word);
            wordOccurences.set(word, currentOccurences + 1);
        }else{
            wordOccurences.set(word, 1);
        }
    }

    const wordEntries = wordOccurences.entries();
    
    const validWords = [];
    for (const [word, occurrences] of wordEntries) {
        
        if(occurrences % 2 !== 0){
            validWords.push(word);
        }
    }

    console.log(validWords.join(' '));
}
oddOcurrences('Cake IS SWEET is Soft CAKE sweet Food')
wordOccurrences = {
    'this': 3,
    'sentence': 2
}

function wordsTracker(arr){
    const targetWords = arr.shift().split(' ');
    const wordOccurrences = {};

    for (const targetWord of targetWords) {
        wordOccurrences[targetWord] = 0;
    }

    for (const word of arr) {
        if (word in wordOccurrences){
            wordOccurrences[word]++;
        }
    }

    const wordEntries = Object.entries(wordOccurrences);
    wordEntries.sort((a, b) => b[1] - a[1]);
    for (const [word, count] of wordEntries) {
        console.log(`${word} - ${count}`);
    }
}
wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )
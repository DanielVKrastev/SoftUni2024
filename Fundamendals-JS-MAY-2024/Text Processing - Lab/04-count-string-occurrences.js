function countString(sentence, word){
    let count = 0;
    const wordsArr = sentence.split(' ');
 //   console.log(wordsArr);

    for (const w of wordsArr) {
        if(w === word){
            count += 1;
        }
    }

    console.log(count);
}
countString('This is a word and it also is a sentence',
'is'
)
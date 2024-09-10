function censored(text, word){

    //let result = text;
    const censoredWord = '*'.repeat(word.length);
    while(text.includes(word)){
        text = text.replace(word, censoredWord);
    }
    console.log(text);
}
censored('Find the hidden word hidden', 'hidden')
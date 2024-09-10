function solve(wordsStr, text){

    const wordsToFill = wordsStr.split(', ');
    const textWords = text.split(' ');
    
    const templates = textWords.filter(word => word.includes('*'));
    
    for (const template of templates) {
        const righthWord = wordsToFill.find(word => word.length === template.length);
        text = text.replace(template, righthWord);
    }
    console.log(text);
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)
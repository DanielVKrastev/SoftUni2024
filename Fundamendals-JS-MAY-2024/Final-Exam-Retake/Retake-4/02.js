function solve(arr){
    const string = arr.shift();
    const patternEmoji = /([*]{2}|[\:]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;

    let matchNumbers = string.match(/\d/g);
    let sumNum = 1;
    for (const number of matchNumbers) {
        sumNum *= Number(number);
    }
    console.log(`Cool threshold: ${sumNum}`);

    let matchEmoji = string.match(patternEmoji);
    let countEmojis = matchEmoji ? matchEmoji.length : 0;

    console.log(`${countEmojis} emojis found in the text. The cool ones are:`);
    
    if(matchEmoji){
        for (let emoji of matchEmoji) {
            let sumASCIICode = 0;
            for(let i = 2; i < emoji.length - 2; i++){
                sumASCIICode += emoji.charCodeAt(i);
            }
    
            if(sumASCIICode >= sumNum){
                console.log(emoji);
            }
           
        }
    }
}
solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
//solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
//solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
//solve(["Nothing to see here! 1 Just some random text. **Hi** **Bye** ::Hey::"])
//solve(["NoEmojis1234"]);
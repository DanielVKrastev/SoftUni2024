function replace(str){
    let nonRepeatedChars = '';
    let currentLastChar = '';

    for (const char of str) {

        if (char !== currentLastChar){
            nonRepeatedChars += char;
            currentLastChar = char;
        }
    }

    console.log(nonRepeatedChars);
}

replace('qqqwerqwecccwd')
function triplesOfLatinLetters(num){
    const stringToNumber = Number(num);

    let firstLetter = '';
    let secondLetter = '';
    let thirtLetter = '';
    for(let i = 97; i < 97 + stringToNumber; i++){ //ascii code (97 -> a)
        firstLetter =  String.fromCharCode(i);
        for(let j = 97; j < 97 + stringToNumber; j++){
            secondLetter = String.fromCharCode(j);
            for(let m = 97; m < 97 + stringToNumber; m++){
                thirtLetter = String.fromCharCode(m);
                console.log(firstLetter + secondLetter + thirtLetter);
            }
        }
    }
}
triplesOfLatinLetters('2');
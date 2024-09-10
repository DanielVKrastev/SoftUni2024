function solve(arr){
    let count = Number(arr.shift());
    const pattern = /(@#+)([A-Z][A-Za-z0-9]{4,}[A-Z])(@#+)/g
   //               /(@{1,}#{1,})(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])\1/g
    const patternNumber = /\d/g;

    for(let i = 0; i < count; i++){
       let matchWord = arr[i].match(pattern);
       
       if(matchWord){
            let matchNumber = matchWord[0].match(patternNumber);
            if(matchNumber){
                console.log('Product group:',matchNumber.join(''));
            }else{
                console.log('Product group: 00');
            }
       }else{
            console.log('Invalid barcode');
       }
       
    }

    //let barcodeStr = arr.join('');

   // console.log(barcodeStr);

   // let wordsObj = [];
    /*
    while(match){
        wordsObj[match.groups.barcode] = '00';
       match = pattern.exec(barcodeStr);
    
       for (const word in wordsObj) {
   
           let matchNumber = word.match(patternNumber);
           if(matchNumber){
               wordsObj[word] = matchNumber.join('');
           }
       }
    }

        console.log(wordsObj);
    */
    //let match = barcodeStr.match(pattern);

}

/*
solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
    */

    
solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
    
    
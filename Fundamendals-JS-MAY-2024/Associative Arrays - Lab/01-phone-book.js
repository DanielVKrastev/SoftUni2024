function phoneBook(input){
    
    const phoneBook = {};
    for (const personDetails of input) {
        const detailsArray = personDetails.split(' ');
        const name = detailsArray[0];
        const number = detailsArray[1];

        phoneBook[name] = number;
    }

   // console.log(phoneBook);

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
        console.log(phoneBook.hasOwnProperty("Tim")); 
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   )
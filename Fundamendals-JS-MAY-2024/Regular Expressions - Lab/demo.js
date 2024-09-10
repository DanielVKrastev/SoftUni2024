//let pattern = /\d{2}-\d{2}-\d{4}/g
//let pattern = /\W+/g
//let text = 'Today is a good day and is 20-02-1999!';


//testing regex
//const isDateValid = pattern.test(text);
//console.log('is date valid:',isDateValid);

//matching
//const matchDate = text.match(pattern);
//for (const date of matchDate) {
//    console.log(date);
//}

//EXEC REGEX 
/*
let text = "Peter: 123 Mark: 456 Cool: 321";
const pattern = /([A-Z][a-z]+): (\d+)/g;
const firstMatch = pattern.exec(text);
const x = pattern.exec(text);
const secondMatch = pattern.exec(text);

console.log('---------First match ------------');
for (const match of firstMatch) {
    console.log(match);
}

console.log('---------Second match ------------');
for (const match of secondMatch) {
    console.log(match);
}
    */

//REPLACE REGEX
/*
let text = "Peter: 123 Mark: 456";
const pattern = /\d{3}/g;

const newReplaceText = text.replace(pattern, 'Kitten');
console.log(newReplaceText);
*/

//MATCHALL REGEX 
/*
const text = 'test123test123';
const regex = /t(e)(st(\d?))/g\\

const matched = [...text.matchAll(regex)];
console.log(matched[0]);
*/

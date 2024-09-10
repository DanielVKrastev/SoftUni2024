/*function solve(num){

    let numAsString = String(num);
    let sum = 0;
    let isSame = true;
    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
        for (let j = 1; j < numAsString.length; j++) {
            if(numAsString[i] !== numAsString[j]) isSame = false;
            break;
        }
        
    }

    console.log(isSame);
    console.log(sum);
}*/

function solve(num){
    let sum = 0;
    let isSame = true;
    num.toString().split('').map(Number).forEach((x,i,self)=> {
        if(x !== self[0]) {
            isSame = false;
        }
        sum += x;
    });

    console.log(isSame);
    console.log(sum);
}

//solve(2222222)
solve(1234)
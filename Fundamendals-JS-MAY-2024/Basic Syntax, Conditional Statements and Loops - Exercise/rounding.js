function rounding(num, precision){
    if(precision > 15){
        precision = 15;
    }

    let rounedNum = num.toFixed(precision);
    let trimmedNum = parseFloat(rounedNum);

    console.log(trimmedNum);
}

rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);
rounding(10.5,23);
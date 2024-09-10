function solve(x1, y1, x2, y2){
    const result = (x1, y1, x2, y2) => {
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        let output = "";

        if(Number.isInteger(distance)){
            output = (`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }else{
            output = (`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }

        console.log(output);
    }

    result(x1, y1, 0, 0);
    result(x2, y2, 0, 0);
    result(x1, y1, x2, y2);
}

solve(2,1,1,1)
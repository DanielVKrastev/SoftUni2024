/*function solve(arg1, arg2, arg3, arg4, arg5, arg6){
    
    let num = Number(arg1);
    let opArr = [arg2, arg3, arg4, arg5, arg6];

    for (let i = 0; i < opArr.length; i++) {
        let op = opArr[i];
        switch(op){
            case "chop": num/= 2; break;
            case "dice": num = Math.sqrt(num); break;
            case "spice": num += 1; break;
            case "bake": num *= 3; break;
            case "fillet": num *= 0.80; break;
        }
        console.log(num);
        
    }
}*/
function solve(str, arg1, arg2, arg3, arg4, arg5){
    let num = Number(str);
    const operationObj = {
        "chop": (a) => {
            let res = a/2;
            console.log(res);
            return res;
        },
        "dice": (a) => {
            let res = Math.sqrt(a);
            console.log(res);
            return res;
        },
        "spice": (a) => {
            let res = a + 1;
            console.log(res);
            return res;
        },
        "bake": (a) => {
            let res = a * 3;
            console.log(res);
            return res;
        },
        "fillet": (a) => {
            let res = a * 0.80;
            console.log(res);
            return res;
        }
    }
   num = operationObj[arg1](num);
   num = operationObj[arg2](num);
   num = operationObj[arg3](num);
   num = operationObj[arg4](num);
   num = operationObj[arg5](num);
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
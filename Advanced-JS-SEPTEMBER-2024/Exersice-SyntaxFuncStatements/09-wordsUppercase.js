function solve(str){
    const pattern = /[A-Za-z0-9]+/g;
        let res = pattern.exec(str);

        let bufferArr = [];
    while(res){
        bufferArr.push(res[0]);
        res = pattern.exec(str);
    }
        
    console.log(bufferArr.join(', ').toUpperCase());
}

solve('Hi, how are you?')
solve('hello')
function commandProcessor(){
    let str = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(value){
        str += value;
    }

    function removeStart(n){
        str = str.slice(n);
    }

    function removeEnd(n){
        str = str.slice(0, -n);
    }

    function print(){
        console.log(str);
    }
}

const proc = commandProcessor();

proc.append('hello');
proc.print();
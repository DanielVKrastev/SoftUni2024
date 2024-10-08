class Stringer{
    constructor(string, initialLength){
        this.innerString = string;
        this.innerLength = initialLength;
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        this.innerLength -= length;
        
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }

    toString(){
        let result = '';
        if( this.innerLength == 0){
            result = '...';
        }

        if( this.innerString.length > this.innerLength ) {
            result = this.innerString.slice(0, this.innerLength) + '...';
        } else {
            result = this.innerString;
        }

        return result;
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test

function repeatString(string, count){

    function writeString(string, count){
        let stringCon = '';
        for (let i = 0; i < count; i++) {
            stringCon += string;
        }
        return(stringCon);
    }
    
    console.log(writeString(string, count));
}
repeatString("abc", 3)
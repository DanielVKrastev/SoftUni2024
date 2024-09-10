function passwordValidator(password){

    function checkIfValidLength(pass){
        if (pass.length >= 6 && pass.length <= 10){
            return true;
        }else{
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkIfAlphanumeric(pass){
        const pattern = /^[A-Za-z0-9]+$/;

        if(pattern.test(pass)){
            return true;
        }else{
            console.log("Password must consist only of letters and digits");
            return false;
        }
    }

    function checkIfMin2Digits(pass){
        let digitCount = 0;

        //iterate over password for every symbol, check if its numeric
        const pattern = /[0-9]{2,}/;

        if (pattern.test(pass)){
            return true;
        }else{
            console.log("Password must have at least 2 digits");
            return false;
        }
    }

    const isValidLenght = checkIfValidLength(password);
    const isAlphanumeric = checkIfAlphanumeric(password);
    const hasMin2Digits = checkIfMin2Digits(password);

    if(isValidLenght && isAlphanumeric && hasMin2Digits){
        console.log("Password is valid");
    }

}
passwordValidator('logIn');
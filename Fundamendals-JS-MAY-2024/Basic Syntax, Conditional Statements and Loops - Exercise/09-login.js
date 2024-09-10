function login(input){
    let username = input[0];
    
    let password = "";
    for(let i = username.length - 1; i >= 0; i--){
        password += username[i];
    }

    let incorrectPass = 0;
    for(let i = 1; i < input.length; i++){
        let inputPassword = input[i];

        
        if(password !== inputPassword && incorrectPass <= 3){
            console.log(`Incorrect password. Try again.`);
            incorrectPass++;
        }
        else if(password === inputPassword){
            console.log(`User ${username} logged in.`);
        }
        else if(incorrectPass === 3){
            console.log(`User ${username} blocked!`);
            return;
        }
    }
}
login(['Acer','login','go','let me in','recA']);
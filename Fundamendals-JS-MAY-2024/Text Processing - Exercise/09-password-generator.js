function pass(arr){
    const [str1, str2, replacementStr] = arr;
    let password = str1 + str2;
    let replacementIndex = 0;

    for (const char of password) {
        if(/[aeoui]/.test(char)){
            const replacementChar = replacementStr[replacementIndex];
            replacementIndex++;
            password = password.replace(char, replacementChar.toUpperCase());

            if(replacementIndex === replacementStr.length){
                replacementIndex = 0;
            }

        }
    }
    const reversedPass = password.split('').reverse().join('');
    console.log(`Your generated password is ${reversedPass}`);
}
pass([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    )
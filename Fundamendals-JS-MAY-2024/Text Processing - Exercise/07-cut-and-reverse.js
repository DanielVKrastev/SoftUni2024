function cutAndReverse(str){
    const middleIndex = str.length / 2;
    const leftHalf = str.substring(0, middleIndex)
        .split('')
        .reverse()
        .join('');
    const rightHalf = str.substring(middleIndex)
        .split('')
        .reverse()
        .join('');

    console.log(leftHalf);
    console.log(rightHalf);
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
function arrayRotation(arr, rotation){

    for(let i = 0; i < rotation; i++){
            arr.push(arr[i]);
    }

    for(let i = 0; i < rotation; i++){
        arr.shift(arr[i]);
}
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5)
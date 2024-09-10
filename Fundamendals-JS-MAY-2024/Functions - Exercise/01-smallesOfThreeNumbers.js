function solve(num1, num2, num3){

    function smallestOfThreeNumbers(n1, n2, n3){
        let smallest = 0;
        if(n1 < n2 && n1 < n3){
            smallest = n1;
        }else if(n2 < n1 && n2 < n3){
            smallest = n2
        }else{
            smallest = n3;
        }
        return smallest;
    }
    console.log(smallestOfThreeNumbers(num1, num2, num3));

}
solve(2,2,2);
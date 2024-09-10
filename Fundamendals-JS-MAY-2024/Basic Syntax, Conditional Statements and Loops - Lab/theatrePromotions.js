function theatrePromotions(day, age){

    if(age < 0 || age > 122){
        console.log('Error!');
    }else if((age <= 18)){

        switch(day){
            case "Weekday":
                console.log('12$');
                break;
            case "Weekend":
                console.log('15$');
                break;
            case "Holiday":
                console.log('5$');
                break;
        }

    }else if(age <= 64){

        switch(day){
            case "Weekday":
                console.log('18$');
                break;
            case "Weekend":
                console.log('20$');
                break;
            case "Holiday":
                console.log('12$');
                break;
        }

    }else{

        switch(day){
            case "Weekday":
                console.log('12$');
                break;
            case "Weekend":
                console.log('15$');
                break;
            case "Holiday":
                console.log('10$');
                break;
        }
    }
}

theatrePromotions("Weekday", 2);
theatrePromotions("Weekday", 42);
theatrePromotions("Weekday", 82);
console.log('------------------');

theatrePromotions("Holiday", 2);
theatrePromotions("Holiday", 42);
theatrePromotions("Holiday", -82);
console.log('------------------');

theatrePromotions("Weekend", 2);
theatrePromotions("Weekend", 42);
theatrePromotions("Weekend", -82);
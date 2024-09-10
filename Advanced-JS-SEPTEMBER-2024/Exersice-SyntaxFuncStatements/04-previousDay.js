function solve(year, month, day){
    let date = new Date(year, month - 1, day - 1);
    const newYear = date.getFullYear();
    const newMonth = date.getMonth() + 1;
    const newDay = date.getDate();
 //   let date2 = new Date(`${year}/${month}/${day}`)

    console.log(`${newYear}-${newMonth}-${newDay}`);
    
}

solve(2016, 3, 1);
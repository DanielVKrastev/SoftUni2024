function schoolGrades(input){
    const studentObj = {};

    for (const row of input) {
        const studentArr = row.split(' ');
        const name = studentArr.shift();
        const grades = studentArr.map(Number);

        let avgGrades = 0;
        for (const grade of grades) {
            avgGrades += Number(grade);
        }
        
        avgGrades = avgGrades / grades.length;
       // console.log(grades);
        if(studentObj.hasOwnProperty(name)){
            //console.log((studentObj[name] + avgGrades) / 2);
            studentObj[name] = (studentObj[name] + avgGrades) / 2;
        }else{
            studentObj[name] = avgGrades;
        }
        

    }
    const entries = Object.entries(studentObj);
    entries.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    })

    for (const [name, avgGrade] of entries) {
        console.log(`${name}: ${avgGrade.toFixed(2)}`);
    }  
}
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3 3',
    'Steven 6 2']
    )
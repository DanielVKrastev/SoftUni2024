function solve(arr){
    const studentCount = Number(arr.shift());
    const totalLecureCount = Number(arr.shift());
    const additionalBonus = Number(arr.shift());

    let maxBonus = 0;
    let maxAttendanceCount = 0;

    for(let curStudent = 1; curStudent <= studentCount; curStudent++){
        const curAttendanceCount = Number(arr.shift());

        const totalBonus = curAttendanceCount / totalLecureCount * (5 + additionalBonus);

        if(totalBonus > maxBonus){
            maxBonus = totalBonus;
            maxAttendanceCount = curAttendanceCount;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendanceCount} lectures.`);
}
solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  )

  //Max Bonus: 34.
  //The student has attended 24 lectures.

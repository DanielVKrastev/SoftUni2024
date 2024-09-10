function employees(arr){
    let allEmployees = [];

    //read
    for (const employeeName of arr) {
        const personalNumber = employeeName.length;

        const employee = {
            name: employeeName,
            personalNumber
        };
        
        allEmployees.push(employee);
    }

    //print
    for (const employeeObj of allEmployees) {
        console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.personalNumber}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
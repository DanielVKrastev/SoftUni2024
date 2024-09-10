companyEmployeess = {
    'HP': ['BB12345'],
    'Microsoft': ['CC13456'],
    'SoftUni': ['AA12345', 'BB123']
}

function companyUsers(arr){
    const companyEmployeess = {};

    for (const employeData of arr) {
        const [company, employeeId] = employeData.split(' -> ');
        
        if(company in companyEmployeess){
            if(!companyEmployeess[company].includes(employeeId)){
                companyEmployeess[company].push(employeeId);
            }
        }else{
            companyEmployeess[company] = [employeeId];
        }
    }

    const companyEntries = Object.entries(companyEmployeess);
    companyEntries.sort((a,b) => a[0].localeCompare(b[0]));

    for (const [name, employeeIdArr] of companyEntries) {
        console.log(name);
        
        for (const employeeId of employeeIdArr) {
            console.log(`-- ${employeeId}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
    )
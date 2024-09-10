/*function race(arr){
    const participants = arr.shift().split(', ');
    
    let participantsObj = {};
    for(let i = 0; i < participants.length; i++){
        participantsObj[participants[i]] = 0;
    }

    const patternsName = /[^ &!%#^@$0-9]/g;
    const patternsNumber = /[^ &!%#^@$A-Za-z]/gm
    
    let command = arr.shift();

    while(command !== 'end of race'){
        const matchName = command.match(patternsName).join('');
        const matchNumbers = command.match(patternsNumber);
        let totalKm = 0;
        
        for(let i = 0; i < matchNumbers.length; i++){
            totalKm += Number(matchNumbers[i]);
        }
        
        for (const name in participantsObj) {
                if(name === matchName){
                    //console.log(name);
                    participantsObj[name] += totalKm;
                }
        }

        command = arr.shift();
    }

    console.log(participantsObj.sort(function(a,b){
        return a;
    }));
}*/

function race(arr){
    const participants = arr.shift().split(', ');
    
    let participantsArr = [];
    for(let i = 0; i < participants.length; i++){
        participantsArr.push({name: participants[i], km: 0})
    }

    const patternsName = /[^ &!%*#^@()$0-9]/g;
    const patternsNumber = /[^ &!*%#^@()$A-Za-z]/g;
    
    let command = arr.shift();

    while(command !== 'end of race'){
        const matchName = command.match(patternsName).join('');
        const matchNumbers = command.match(patternsNumber);
        let totalKm = 0;
        
        for(let i = 0; i < matchNumbers.length; i++){
            totalKm += Number(matchNumbers[i]);
        }
        
        for (const participants of participantsArr) {
            if(participants.name === matchName){
                participants.km += totalKm;
            }
        }

        command = arr.shift();
    }

    participantsArr.sort(function(a,b) {
        return b.km - a.km;
    })

    console.log(`1st place: ${participantsArr[0].name}`);
    console.log(`2nd place: ${participantsArr[1].name}`);
    console.log(`3rd place: ${participantsArr[2].name}`);
    
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
    
    )
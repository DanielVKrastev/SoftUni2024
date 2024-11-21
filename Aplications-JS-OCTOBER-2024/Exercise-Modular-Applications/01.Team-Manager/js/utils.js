export function saveUserData(data){
    const userData = {
        email: data.email,
        id: data._id,
        username: data.username,
        accessToken: data.accessToken
    }

    localStorage.setItem('userData', JSON.stringify(userData));
}

export function getUserData(){
    return JSON.parse(localStorage.getItem('userData')); 
}

export function clearUserData() {
    localStorage.removeItem('userData');
}

export function addMembersToTeams(teams, members) {
    const teamsMap = {};

    for(let member of members){
        const teamId = member.teamId;

        if(! teamsMap[teamId]) {
            teamsMap[teamId] = [];
        }

        teamsMap[teamId].push(member);
    }

    
    if(Array.isArray(teams)){
        for (let team of teams){
            team.members = teamsMap[team._id] || [];
        }
    }else{
        teams.members = teamsMap[teams._id] || [];
    }
}

class footballTeam{
    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = new Map();
    }

    newAdditions(footballPlayers){
        let output = [];

        for (const player of footballPlayers) {
            let [name, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            if(this.invitedPlayers.has(name)){
                const currentPlayer = this.invitedPlayers.get(name);
                if(currentPlayer.playerValue < playerValue){
                    currentPlayer.playerValue = playerValue;
                }

            }else{
                this.invitedPlayers.set(name, {age: age, playerValue: playerValue});
                output.push(name);
            }

        }

        return `You successfully invite ${output.join(', ')}.`;
    }

    signContract(selectedPlayer){

        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        if( ! this.invitedPlayers.has(name)){
            throw new Error(`${name} is not invited to the selection list!`);
        }

        const currentPlayer = this.invitedPlayers.get(name);
        if(currentPlayer.playerValue > playerOffer){
            const priceDifference = currentPlayer.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
        }

        currentPlayer.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age){

        if( ! this.invitedPlayers.has(name)){
            throw new Error(`${name} is not invited to the selection list!`);
        }

        const currentPlayer = this.invitedPlayers.get(name);
        const ageDifference = age - currentPlayer.age;
        if(ageDifference < 5 && ageDifference > 0){
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
        }else if(ageDifference > 5){
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }else if(currentPlayer.age == age || currentPlayer.age > age){
            return `${name} is above age limit!`;
        }

    }

    transferWindowResult(){
        let output = 'Players list:';

        const sortedPlayerArr = [...this.invitedPlayers.entries()].sort((a,b) => a[0].localeCompare(b[0]));
        
        for (const [playerName, data] of sortedPlayerArr) {
            output += `\nPlayer ${playerName}-${data.playerValue}`;
        }

        return output;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));




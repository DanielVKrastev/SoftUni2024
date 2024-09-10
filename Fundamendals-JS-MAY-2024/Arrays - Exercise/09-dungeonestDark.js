function dungeonestDark(arr) {

    const arrToString = arr[0];
    //console.log(arrToString);

    const commands = arrToString.split('|');
    //console.log(commands);

    let coins = 0;
    let currHealth = 100;
    let countRooms = 1;
    for (const command of commands) {
        const room = command.split(' ');

        if (room[0] === 'potion') {

            let healing = Number(room[1]);
            if (currHealth + healing > 100) {
                healing = 100 - currHealth;
            }

            currHealth += healing;
            console.log(`You healed for ${healing} hp.`);
            console.log(`Current health: ${currHealth} hp.`);

            countRooms++;
        }
        else if (room[0] === 'chest') {
            const foundCoins = Number(room[1]);
            coins += foundCoins;
            console.log(`You found ${foundCoins} coins.`);

            countRooms++;
        } else {
            const monsterName = room[0];
            const attackHP = Number(room[1]);
            currHealth -= attackHP;

            if (currHealth > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${countRooms}`);
                return;
            }

            countRooms++;

        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${currHealth}`);
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log('-----------');
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
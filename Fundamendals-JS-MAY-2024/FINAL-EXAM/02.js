function solve(arr){
    let string = arr.shift();
    const patterns = /[#@]+(?<color>[a-z]{3,})[#@][^a-z\d]*\/(?<amount>\d+)\//g;
                
    let matchEggs = patterns.exec(string);
   
    while(matchEggs){
        const colorEggs = matchEggs.groups.color;
        const amountEggs = Number(matchEggs.groups.amount);

        console.log(`You found ${amountEggs} ${colorEggs} eggs!`);
        
        matchEggs = patterns.exec(string);
    }
    
}

//solve(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
solve(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);
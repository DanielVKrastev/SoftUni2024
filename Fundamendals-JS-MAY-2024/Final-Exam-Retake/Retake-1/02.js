function solve(arr){
    const string = arr.shift();
    const pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    
    let match = pattern.exec(string);

    let destinations = [];
    let travelPoints = 0;
    while(match){
        const destination = match.groups.destination;
        travelPoints += destination.length;
        destinations.push(destination);

        match = pattern.exec(string);
    }
 
    console.log("Destinations:",destinations.join(', '));
    console.log(`Travel Points: ${travelPoints}`);
}
solve(['=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i='])
solve([
'ThisIs some InvalidInput'
])
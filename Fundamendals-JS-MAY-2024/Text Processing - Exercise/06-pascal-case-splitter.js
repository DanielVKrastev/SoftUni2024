function solve(str){
    const pattern = /[A-Z][a-z]*/g;
    const allMatches = str.matchAll(pattern);
    const matchWords = [];

    for (const matchObj of allMatches) {
        matchWords.push(matchObj[0]);
    }
    console.log(matchWords.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
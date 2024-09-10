/*piecesObj = {
    'Fur Elise': {composer: 'Beethoven', key: 'A minor'},
    'Moonlight Sonata': {composer: 'Beethoven', key: 'C# Minor'}
}*/

function solve(arr){
    const numberPieces = arr.shift();

    let piecesObj = {};

    for(let i = 1; i <= numberPieces; i++){
        const [piece, composer, key] = arr.shift().split('|');
        
        piecesObj[piece] = {composer: composer, key: key}
    }
    
    let command = arr.shift();

    while(command !== 'Stop'){
        const tokens = command.split('|');
        const action = tokens.shift();

        if(action === 'Add'){
            const addPiece = tokens.shift();
            const addComposer = tokens.shift();
            const addKey = tokens.shift();

            if(addPiece in piecesObj){
                console.log(`${addPiece} is already in the collection!`);
            }else{
                piecesObj[addPiece] = {composer: addComposer, key: addKey};
                console.log(`${addPiece} by ${addComposer} in ${addKey} added to the collection!`);
            }

        }else if(action === 'Remove'){
            const removePiece = tokens.shift();

            if(removePiece in piecesObj){
                console.log(`Successfully removed ${removePiece}!`);
                delete piecesObj[removePiece];
            }else{
                console.log(`Invalid operation! ${removePiece} does not exist in the collection.`);
            }

        }else if(action === 'ChangeKey'){
            const changePiece = tokens.shift();
            const newKey = tokens.shift();
            
            if(changePiece in piecesObj){
                console.log(`Changed the key of ${changePiece} to ${newKey}!`);
                piecesObj[changePiece].key = newKey;
            }else{
                console.log(`Invalid operation! ${changePiece} does not exist in the collection.`);
            }
        }

        command = arr.shift();
    }
    
    let entries = Object.entries(piecesObj);

    for (const [piece, pieceInfo] of entries) {
        console.log(`${piece} -> Composer: ${pieceInfo.composer}, Key: ${pieceInfo.key}`);
    }
}
/*
solve(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'  
      ]
      
)*/

solve(
    [
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'
      ]
      
)
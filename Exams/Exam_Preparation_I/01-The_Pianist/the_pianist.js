function solve(array) {
    const numberOfPieces = Number(array.shift())
    const pieces = {}

    const operations = {
        Add: ([piece, composer, key]) => {
            if (pieces[piece]) {
                console.log(`${piece} is already in the collection!`);
                return
            }
            pieces[piece] = {composer, key}
            console.log(`${piece} by ${composer} in ${key} added to the collection!`)
        },
        Remove: ([piece]) => {
            if (!pieces[piece]) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                return
            }

            delete pieces[piece]
            console.log(`Successfully removed ${piece}!`)
        },
        ChangeKey: ([piece, newKey]) => {
            if (!pieces[piece]) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                return
            }

            pieces[piece].key = newKey
            console.log(`Changed the key of ${piece} to ${newKey}!`)
        },
    }

    for (let i = 0; i < numberOfPieces; i++) {
        let pieceProp = array.shift()
        let [piece, composer, key] = pieceProp.split('|')
        pieces[piece] = {composer, key}
    }

    for (const arrayElement of array) {

        if (arrayElement === 'Stop') {
            break
        }

        let command = arrayElement.split('|')
        let operation = command.shift()
        operations[operation](command)
    }

    for (const piecesKey in pieces) {
        console.log(`${piecesKey} -> Composer: ${pieces[piecesKey].composer}, Key: ${pieces[piecesKey].key}`)
    }
}

solve([
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
)
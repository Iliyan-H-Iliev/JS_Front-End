function solve(input) {
    let searchedWords = input.shift().split(' ')
    let trackedWords = {}

    for (const word  of searchedWords) {
        trackedWords[word] = 0
        for (const element of input) {
            if (element === word) {
                trackedWords[word] += 1
            }
        }
    }

    let arrayOfTrackedWords = Object.entries(trackedWords)
    arrayOfTrackedWords.sort((a, b) => b[1] - a[1])

    for (const word of arrayOfTrackedWords) {
        console.log(`${word[0]} - ${word[1]}`)
    }
}

solve([
'this sentence',
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)

solve([
'is the',
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)
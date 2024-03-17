function solve(input) {
    let text = input.toLowerCase().split(' ')
    let foundWords = {}
    let words = []

    for (const word of text) {
        if (!foundWords[word]) {
            foundWords[word] = 0
        }

        foundWords[word] += 1
    }

    let filteredFoundWords = Object.entries(foundWords)
        .filter(([word, count]) => count % 2 !== 0)

    filteredFoundWords.forEach(([word, count]) => words.push(word))
    console.log(words.join(' '))
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
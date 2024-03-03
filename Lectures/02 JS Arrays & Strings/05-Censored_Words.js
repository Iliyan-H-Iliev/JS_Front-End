function solve(text, word) {
    let censoredWord = new RegExp(word, 'g')
    let newText = text.replace(censoredWord, (match) => '*'.repeat(match.length))
    console.log(newText)
}

solve('A small sentence with some words small', 'small')
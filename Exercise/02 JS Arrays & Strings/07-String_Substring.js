function solve(searchingWord, text) {
    let pattern = new RegExp(`\\b${searchingWord}\\b`, 'i')

    if (pattern.test(text)) {
        console.log(searchingWord)
    } else {
        console.log(`${searchingWord} not found!`)
    }
}

solve('javascript',
'JavaScript is the best programming language'
)

solve('python',
'JavaScript is the best programming language'
)
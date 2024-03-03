function solve(words, text) {
    let wordsArray = words.split(', ')

    // let pattern = new  RegExp('\\*+')
    // let match = pattern.exec(text)

    let pattern = '\\*+'
    let match = text.match(pattern)

    while (match !== null) {
        let replaceWord = wordsArray.filter((element) => element.length === match[0].length)

        text = text.replace(match[0], replaceWord[0])
        // match = pattern.exec(text)
        match = text.match(pattern)
    }

    console.log(text)
}


solve('great',
'softuni is ***** place for learning new programming languages'

)

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)
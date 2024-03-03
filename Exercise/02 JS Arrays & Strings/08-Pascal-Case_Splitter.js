function solve(text) {
    let pattern = /[A-Z][a-z]*/g
    let match = text.match(pattern)

    // while (match !== null) {
    //     words.push(match[0])
    //     text = text.replace(match[0], '')
    //     match = text.match(pattern)
    // }

    console.log(match.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
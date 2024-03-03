function solve(text) {
    let pattern = /#[A-Za-z]+/

    for (let word of text.split(' ')) {
        if (pattern.test(word)) {
            console.log(word.substring(1))
        }
    }
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')
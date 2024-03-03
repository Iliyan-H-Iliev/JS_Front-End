function solve(text, start, count) {
    let subString =  text.substring(start, start + count)
    console.log(subString)
}

solve('ASentence', 1, 8)
solve('SkipWord', 4, 7)
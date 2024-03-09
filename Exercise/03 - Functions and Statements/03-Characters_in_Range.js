function solve(char1, char2) {
    let sortChar = (char1, char2) => char1 < char2 ? [char1, char2] : [char2, char1]

    let findCharacters = function (arrayOfTwoChars) {
        let characters = []

        for (let i = arrayOfTwoChars[0].charCodeAt(0) + 1; i < arrayOfTwoChars[1].charCodeAt(0) ; i++) {
            characters.push(String.fromCharCode(i))
        }

        return `${characters.join(' ')}`
    }

    console.log(findCharacters(sortChar(char1, char2)))
}

solve('#', ':')
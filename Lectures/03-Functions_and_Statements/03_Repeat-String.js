function solve(text, repeat) {
    function repeatText(text, repeat) {
        let result = ''

        for (let i = 0; i < repeat; i++) {
            result += text
        }

        return result
    }

    console.log(repeatText(text, repeat))
}

solve('abc', 3)
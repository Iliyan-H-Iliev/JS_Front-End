function solve(number) {
    function createRow(number) {
        let row = []

        for (let i = 0; i < number; i++) {
            row.push(number)
        }
        return row.join(' ')
    }

    function createMatrix(number) {
        let matrix = []
        for (let i = 0; i < number; i++) {
            matrix.push(createRow(number))
        }

        return matrix.join(`\n`)
    }

    console.log(createMatrix(number))
}

solve(10)
function solve(number) {
    function splitNumber(number) {
        return number.toString().split('').map(a => Number(a))
    }

    function sumOddNumbers(number) {
        return splitNumber(number).reduce((acc, x) => x % 2 === 1 ? acc + x : acc, 0)
    }

    function sumEvenNumbers(numbers) {
        return splitNumber(numbers).reduce((acc, x) => x % 2 === 0 ? acc + x : acc , 0)
    }

    console.log(`Odd sum = ${sumOddNumbers(number)}, Even sum = ${sumEvenNumbers(number)}`)
}

solve(1000435)
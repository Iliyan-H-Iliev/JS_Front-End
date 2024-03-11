function solve(number) {

    function numberToDigits() {
        return number.toString().split('').map(x => Number(x))
    }

    function digitsToNumber(numberDigits) {
        return Number(numberDigits.join(''))
    }

    function checkNumber(numberInArray) {
        let higherThan = 5
         let number = numberInArray.reduce((acc, x) => acc + x, 0)
        return number / numberInArray.length > higherThan
    }

    function numberModification(number) {
        let numberDigits = numberToDigits(number)

        while (!checkNumber(numberDigits))
            numberDigits.push(9)

        return numberDigits
    }

    console.log(digitsToNumber(numberModification(number)))
}

solve(101)
solve(5835)
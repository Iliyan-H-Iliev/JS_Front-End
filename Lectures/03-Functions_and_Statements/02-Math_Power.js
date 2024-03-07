function solve(number, power) {

    function poweredNumber(number, power) {
        let result = number
        for (let i = 0; i < power - 1; i++) {
        result *= number
        }
        return result
    }

    console.log(poweredNumber(number, power))
}

solve(2, 8)
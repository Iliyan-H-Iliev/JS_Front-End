function solve(num1, num2) {
    let factorial = x => x === 0 ? 1 : x * factorial(x - 1)

    console.log((factorial(num1) / factorial(num2)).toFixed(2))
}

solve(5, 2)
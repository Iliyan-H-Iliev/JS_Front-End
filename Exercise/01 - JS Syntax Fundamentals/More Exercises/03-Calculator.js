function solve(num1, operator, num2) {
    let operators = {
        '+': (n1, n2) => n1 + n2,
        '-': (n1, n2) => n1 - n2,
        '/': (n1, n2) => n1 / n2,
        '*': (n1, n2) => n1 * n2,
    }

    console.log((operators[operator](num1, num2)).toFixed(2))

}

solve(5,
'+',
10
)

solve(25.5,
'-',
3
)
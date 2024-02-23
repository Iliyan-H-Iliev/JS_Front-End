function solve(num1, num2) {
    let numSum = 0
    let allNum = ""

    for (let i = num1; i <= num2 ; i++) {
        allNum += i < num2 ? `${i} ` : `${i}`
        numSum += i
    }

    console.log(allNum)
    console.log(`Sum: ${numSum}`)
}

solve(5, 10)
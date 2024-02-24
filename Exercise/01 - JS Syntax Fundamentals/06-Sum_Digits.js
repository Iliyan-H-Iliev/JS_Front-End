function solve(num) {
    let numString = num.toString()
    let numSum = 0

    for (let i = 0; i < numString.length; i++) {
        numSum += Number(numString[i])
    }
    console.log(numSum)
}

solve(245678)
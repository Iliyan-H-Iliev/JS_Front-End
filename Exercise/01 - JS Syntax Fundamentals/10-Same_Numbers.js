function solve(intNumber) {
    let strNumber = intNumber.toString()
    const targe = strNumber[0]
    let sumNum = Number(strNumber[0])
    let itTheSame = true

    for (let i = 1; i < strNumber.length; i++) {
        if (strNumber[i] !== targe) {
            itTheSame = false
        }
        sumNum += Number(strNumber[i])
    }
    console.log(itTheSame)
    console.log(sumNum)
}

solve(2222222)
solve(1234)
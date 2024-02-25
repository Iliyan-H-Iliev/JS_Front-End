function solve(startingYield) {
    let workingDays = 0
    let totalAmount = 0
    let crewConsumes = 26

    while (startingYield >= 100) {
        totalAmount += startingYield - crewConsumes
        workingDays += 1
        startingYield -= 10
    }

    totalAmount -= Math.min(totalAmount, crewConsumes)

    console.log(workingDays)
    console.log(totalAmount)
}

solve(111)
solve(450)
solve(5)
function solve(grade) {
    let formatGrade = function (grade) {
        if (grade < 3) {
            return Math.floor(grade)
        } else {
           return  grade.toFixed(2)
        }
    }

    function printGrade(grade) {
        if (grade < 3) {
            return `Fail (${formatGrade(grade)})`
        }
        if (grade < 3.5) {
            return `Poor (${formatGrade(grade)})`
        }
        if (grade < 4.5) {
            return `Good (${formatGrade(grade)})`
        }
        if (grade < 5.5) {
            return `Very good (${formatGrade(grade)})`
        }
        if (grade >= 5.5) {
            return `Excellent (${formatGrade(grade)})`
        }
    }

    console.log(printGrade(grade))
}

solve(2.5)
solve(3.3333)
solve(3.5)
solve(4.5)
solve(5.5)
function solve(number) {
    function loadingBar(number) {
       let percent = number / 10
        return `[${"%".repeat(percent)}${'.'.repeat(10 - percent)}]`
    }

    console.log(loadingBar(number))
}

solve(20)
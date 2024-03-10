function solve(number) {
    function loadingBar(number) {
       let percent = number / 10
        return `[${"%".repeat(percent)}${'.'.repeat(10 - percent)}]`
    }

    function printingLoadingBar(number) {
        let message = ''

        if  (number === 100) {
            message = `${number}% Complete!\n${loadingBar(number)}`
        } else {
            message = `${number}% ${loadingBar(number)}\nStill loading...`
        }

        return message
    }

    console.log(printingLoadingBar(number))
}

solve(120)
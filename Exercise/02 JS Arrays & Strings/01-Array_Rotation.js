function solve(arr, rotation) {
    for (let i = 0; i < rotation; i++) {
        let firstNum = arr.shift()
        arr.push(firstNum)
    }

    console.log(arr.join(' '))
}

solve([51, 47, 32, 61, 21], 2)
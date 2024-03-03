function solve(arr, step) {
    let newArr = []
    for (let i = 0; i < arr.length ; i += step) {
        newArr.push(arr[i])
    }
    return newArr
}

function quickSolve(arr, step) {
    return arr.filter((element, index) => index % step === 0)
}

console.log(quickSolve(['5',
'20',
'31',
'4',
'20'],
2
))

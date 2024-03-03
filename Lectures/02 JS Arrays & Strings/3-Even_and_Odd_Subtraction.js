function solve(arr) {
    let evenMinusOdd = 0
    for (let i = 0; i < arr.length; i++) {
        evenMinusOdd += arr[i] % 2 === 0 ? arr[i] : -arr[i]
        // if (arr[i] % 2 === 0) {
        //     evenMinusOdd += arr[i]
        // } else {
        //     evenMinusOdd -= arr[i]
        // }
    }
    console.log(evenMinusOdd)
}

solve([3,5,7,9])
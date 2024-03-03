function solve(numbers) {
    let newSortedArray = []
    numbers.sort((a, b ) => a - b)

    while (numbers.length > 0) {
        newSortedArray.push(numbers.shift())
        newSortedArray.push(numbers.pop())
    }

    if (numbers.length > 1) {
        newSortedArray.push(numbers.shift())
    }

    // console.log(newSortedArray)
    return newSortedArray
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 8])
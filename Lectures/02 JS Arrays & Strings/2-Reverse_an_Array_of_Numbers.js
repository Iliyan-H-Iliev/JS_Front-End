function solve (num, arr) {
    let newArr = arr.slice(0, num)
    console.log(newArr.reverse().join(' '))
}

solve(3, [1, 2, 3, 4, 5, 6])
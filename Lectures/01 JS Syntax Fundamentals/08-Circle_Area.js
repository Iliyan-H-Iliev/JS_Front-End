function solve(input) {
    let result = ""

    if (typeof(input) !== "number") {
        result = `We can not calculate the circle area, because we receive a ${typeof(input)}.`;
    } else {
        result = (Math.PI * input ** 2).toFixed(2).toString()
    }

    console.log(result)

}

solve(5)
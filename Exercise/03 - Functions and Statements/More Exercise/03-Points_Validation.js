function solve(arrayOfPoints) {
   let [x1, y1, x2, y2] = arrayOfPoints

    function decart(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isValid(num) {
        let isValid = 'invalid';

        if (num % 1 === 0) {
            isValid = 'valid';
        }
        return isValid;
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid(decart(x1, y1, 0, 0))}`)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid((decart(x2, y2, 0, 0)))}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(decart(x1, y1, x2, y2))}`)
}

solve([3, 0, 0, 4])
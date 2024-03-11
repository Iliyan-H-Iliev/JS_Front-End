function solve(arrayOfNumbers) {
    let result = [];
    let finalThickness = arrayOfNumbers.shift();
    let operationsArray = ['Cut', 'Lap', 'Grind', 'Etch'];
    let operations = {
        'Cut': x => x / 4,
        'Lap': x => x * 0.8,
        'Grind': x=> x - 20,
        'Etch': x => x - 2,
    }
    let xRay =  x => x + 1;
    let wash = x => Math.floor(x);

    for (let element of arrayOfNumbers) {
    result.push(`Processing chunk ${element} microns`);

    if (finalThickness === wash(element)) {
        result.push('Transporting and washing');
        element = wash(element);
    }

        for (const operation of operationsArray) {
            let operationCount = 0;

            while (element > finalThickness) {

                if (operations[operation](element) < finalThickness ) {
                    break;
                }

                operationCount += 1;
                element = operations[operation](element);
            }

            if (operationCount === 0) {
                continue;
            }

            result.push(`${operation} x${operationCount}`);
            element = wash(element);
            result.push('Transporting and washing');
        }

        if (element < finalThickness) {
            element = xRay(element);
            result.push('X-ray x1');
        }

        result.push(`Finished crystal ${element} microns`);
    }

    console.log(result.join('\n'));
}

// solve([100, 101.9])

solve([100, 99])
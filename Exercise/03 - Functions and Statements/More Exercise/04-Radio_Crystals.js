function solve(arrayOfNumbers) {
    let result = []
    let finalThickness = arrayOfNumbers.shift()
    let operations = {
        'Cut': x => x / 4,
        'Lap': x => x * 0.8,
        'Grind': x=> x - 20,
        'Etch': x => x - 2,
        'X-ray': x => x + 1,
    }

    let operationsArray = ['Cut', 'Lap', 'Grind', 'Etch', 'X-ray']

    for (let element of arrayOfNumbers) {
        result.push(`Processing chunk ${element} microns`)
        if (Math.floor(element) === finalThickness) {
            result.push('Transporting and washing')
            element = Math.floor(element)
        }
        for (const operation of operationsArray) {
            let operationCount = 0
            while (element > finalThickness ) {

                if (operations[operation](element) < finalThickness - 1) {
                    break
                }
                operationCount += 1
                element = operations[operation](element)
            }
            if (operationCount === 0) {
                break
            }

            result.push(`${operation} x${operationCount}`)

            result.push('Transporting and washing')
            element = Math.floor(element)
        }
        if (element < finalThickness) {
            element = operations['X-ray'](element)
            result.push('X-ray x1')
        }
        result.push(`Finished crystal ${element} microns`)
    }

    console.log(result.join('\n'))
}

solve([1375, 50000, 1375.5, 10])
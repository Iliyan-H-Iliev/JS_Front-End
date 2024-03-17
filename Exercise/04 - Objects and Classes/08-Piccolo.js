function solve(input) {
    let carPark = {}
    let parkedCars = []

    for (const row of input) {
        let [direction, car] = row.split(', ')
        carPark[car] = direction === 'IN'
    }

    Object
        .entries(carPark)
        .filter(([car, isParked]) => isParked)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([car, isParked]) => parkedCars.push(car))

    if (parkedCars.length < 1) {
        return console.log('Parking Lot is Empty')
    }

    console.log(parkedCars.join('\n'))
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)
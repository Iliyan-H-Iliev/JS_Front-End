function solve(currentSpeed, place) {
    const speedLimits = {
    'motorway': 130,
    'interstate': 90,
    'city': 50,
    'residential': 20
}

    let overSpeed = currentSpeed - speedLimits[place]
    let status = ""

    if (overSpeed <= 20) {
        status = 'speeding'
    } else if (overSpeed <= 40) {
        status = 'excessive speeding'
    } else {
        status = 'reckless driving'
    }


    if (overSpeed <= 0) {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimits[place]} zone`)
    } else {
       console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimits[place]} - ${status}`)
    }
}

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')
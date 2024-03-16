function solve(input) {
    let appointments = {}
    for (const element of input) {
        const [day, name] = element.split(' ')

        if (appointments[day]) {
            console.log(`Conflict on ${day}!`)
        } else {
            appointments[day] = name
            console.log(`Scheduled for ${day}`)
        }
    }

    for (const day in appointments) {
        console.log(`${day} -> ${appointments[day]}`)
    }
}

solve(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']
)
// function solve(input) {
//     const riders = []
//
//     const num = input.shift()
//
//     const commands = {
//         'StopForFuel': (name, minimumFuel, changedPosition) => {
//             let rider = riders.find(rider => Object.keys(rider)[0] === name)
//
//             if (rider[name].fuelCapacity >= Number(minimumFuel)) {
//                 console.log(`${name} does not need to stop for fuel!`)
//                 return
//             }
//             rider[name].position = Number(changedPosition)
//             console.log(`${name} stopped to refuel but lost his position, now he is ${changedPosition}.`)
//         },
//         'Overtaking': (name1, name2) => {
//             let rider1Index = riders.findIndex(rider => Object.keys(rider)[0] === name1)
//             let rider2Index = riders.findIndex(rider => Object.keys(rider)[0] === name2)
//
//             if (rider2Index < rider1Index) {
//                 return
//             }
//
//             let rider1Position = Object.values(riders[rider1Index])[0].position
//             Object.values(riders[rider1Index])[0].position = Object.values(riders[rider2Index])[0].position
//             Object.values(riders[rider2Index])[0].position = rider1Position
//
//             console.log(`${name1} overtook ${name2}!`)
//
//
//         },
//         'EngineFail': (name, lapsLeft) => {
//             let riderIndex = riders.findIndex(rider => Object.keys(rider)[0] === name)
//             riders.splice(riderIndex, 1)
//             console.log(`${name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
//         },
//     }
//
//
//     for (let i = 0; i < num; i++) {
//         let [name, fuelCapacity, position] = input.shift().split('|')
//         fuelCapacity = Number(fuelCapacity) <= 100 ? Number(fuelCapacity): 100
//
//         riders.push({[name]: {fuelCapacity: Number(fuelCapacity), position: Number(position)}})
//
//     }
//
//     for (const inputElement of input) {
//
//         if (inputElement === 'Finish') {
//             break
//         }
//
//         let [command, ...res] = inputElement.split(' - ')
//
//         commands[command](...res)
//     }
//     for (const obj of riders) {
//         let rider = Object.entries(obj)
//         console.log(`${rider[0][0]}\n  Final position: ${rider[0][1].position}`)
//     }
//

// }


function solve(input) {
    const ricerNumber = Number(input.shift())

    const ricers = {}

    const commands = {
        'StopForFuel': (name, minimumFuel, changedPosition) => {
            if (ricers[name].fuelCapacity > minimumFuel) {
                console.log(`${name} does not need to stop for fuel!`)
                return
            }

            ricers[name].position = Number(changedPosition)
            console.log(`${name} stopped to refuel but lost his position, now he is ${changedPosition}.`)
        },
        'Overtaking': (name1, name2) => {
            if (ricers[name1].position > ricers[name2].position) {
                return
            }

            [ricers[name1].position, ricers[name2].position] = [ricers[name2].position, ricers[name1].position]
            console.log(`${name1} overtook ${name2}!`)
        },
        'EngineFail': (name, lapsLeft) => {
            delete(ricers[name])
            console.log(`${name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
        },
    }

    for (let i = 0; i < ricerNumber; i++) {
        const [name, fuelCapacity, position] = input.shift().split('|')
        ricers[name] = {fuelCapacity: Number(fuelCapacity), position: Number(position)}
    }

    for (const inputElement of input) {

        if (inputElement === 'Finish') {
            break
        }

        let [command, ...res] = inputElement.split(' - ')

        commands[command](...res)
    }

    for (const ricersKey in ricers) {
        console.log(`${ricersKey}\n  Final position: ${ricers[ricersKey].position}`)
    }

}


solve(["3",
        "Valentino Rossi|101|1",
        "Marc Marquez|90|2",
        "Jorge Lorenzo|80|3",
        "StopForFuel - Valentino Rossi - 50 - 1",
        "Overtaking - Marc Marquez - Jorge Lorenzo",
        "EngineFail - Marc Marquez - 10",
        "Finish"])

solve(["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])

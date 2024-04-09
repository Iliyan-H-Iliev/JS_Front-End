function solve(input) {
    const numbOfBaristas = Number(input.shift())
    const baristas = {}

    const baristaFunctions = {
        'Prepare': (name, shift, coffeeType) => {

            if (baristas[name].shift === shift && baristas[name].coffeeType.includes(coffeeType)) {
                console.log(`${name} has prepared a ${coffeeType} for you!`)
            } else {
                console.log(`${name} is not available to prepare a ${coffeeType}.`)
            }
        },
        'Change Shift': (name, newShift) => {
            baristas[name].shift = newShift

            console.log(`${name} has updated his shift to: ${newShift}`)
        },
        'Learn': (name, newCoffeeType) => {
            if (baristas[name].coffeeType.includes(newCoffeeType)) {
                console.log(`${name} knows how to make ${newCoffeeType}.`)
            } else {
                baristas[name].coffeeType.push(newCoffeeType)
                console.log(`${name} has learned a new coffee type: ${newCoffeeType}.`)
            }
        }
    }

    for (let i = 0; i < numbOfBaristas; i++) {
        const [name, shift, coffeeType] = input.shift().split(' ')

        baristas[name] = {shift, coffeeType: coffeeType.split(',')}
    }

    for (const inputElement of input) {

        if (inputElement === 'Closed') {
            break
        }

        let [command, ...arr] = inputElement.split(' / ')
        baristaFunctions[command](...arr)
    }

    for (const baristasKey in baristas) {
        console.log(`Barista: ${baristasKey}, Shift: ${baristas[baristasKey].shift}, Drinks: ${baristas[baristasKey].coffeeType.join(', ')}`)
    }
}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']
)
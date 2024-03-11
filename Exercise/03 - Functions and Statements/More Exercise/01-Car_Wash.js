function solve(commandsArray) {
    function carWash(commandsArray) {
        let value = 0
        let commands = {
            'soap': value => value + 10,
            'water': value=> value * 1.2,
            'vacuum cleaner': value => value * 1.25,
            'mud': value => value * 0.9,
        }

        for (const element of commandsArray) {
            value = commands[element](value)
        }

        return `The car is ${value.toFixed(2)}% clean.`
    }

    console.log(carWash(commandsArray))
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
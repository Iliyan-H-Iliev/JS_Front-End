function solve(input) {
    let message = input.shift()

    const commands = {
        'TakeEven': () => {
            let result = ''
            for (let i = 0; i < message.length; i++) {
                if (i % 2 !== 0) {
                    continue
                }

                result += message[i]
            }
            message = result
            console.log(message)
        },
        'ChangeAll': (substring, replacement) => {
            let pattern = RegExp(substring, 'g')

            message = message.replace(pattern, replacement)
            console.log(message)

        },

        'Reverse': (substring) => {
            let pattern = RegExp(substring)

            if (!pattern.test(message)) {
                console.log('error')
                return
            }

            let revSubstring = substring.split('').reverse().join('')
            message = message.replace(substring, '') + revSubstring
            console.log(message)

        },
    }

    for (const element of input) {
        if (element === 'Buy') {
            break
        }

        let [command, ...res] = element.split('?')

        commands[command](...res)
    }

    console.log(`The cryptocurrency is: ${message}`)
}

solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"]
)
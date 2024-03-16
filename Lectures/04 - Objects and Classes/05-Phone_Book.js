function solve(input) {
    let phoneBook = {}

    for (const element of input) {
        let nameAndPhoneNumber = element.split(' ')
        phoneBook[nameAndPhoneNumber[0]] = nameAndPhoneNumber[1]
    }

    for (const phoneBookKey in phoneBook) {
        console.log(`${phoneBookKey} -> ${phoneBook[phoneBookKey]}`)
    }
}

solve(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
)
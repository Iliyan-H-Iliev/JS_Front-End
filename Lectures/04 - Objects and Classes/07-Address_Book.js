function solve(input) {
    const addressBook = {}

    for (const element of input) {
        const [name, address] = element.split(':')
        addressBook[name] = address
    }

    const arrayOfAddress = Object.entries(addressBook)

    arrayOfAddress.sort((a, b) => a[0].localeCompare(b[0]))

    const sortedAddressBook = arrayOfAddress.reduce((obj, array) => {
        obj[array[0]] = array[1]
        return obj
    }, {})

    for (const name in sortedAddressBook) {
        console.log(`${name} -> ${sortedAddressBook[name]}`)
    }
}

solve(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd']
)
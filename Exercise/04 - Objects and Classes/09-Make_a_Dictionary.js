function solve(input) {
    let dict = {}
    let dictArray = []

    // for (const row of input) {
    //     let jsonObject = JSON.parse(row)
    //     dictArray.push(Object.entries(jsonObject))
    // }

    input
        .map(JSON.parse)
        .forEach(x => dictArray.push(Object.entries(x)))

    let sortedDictArray  = dictArray
        .flat(1)
        .sort((a, b) => a[0].localeCompare(b[0]))

    sortedDictArray.forEach(arr => dict[arr[0]] = arr[1])

    for (const word in dict) {
        console.log(`Term: ${word} => Definition: ${dict[word]}`)
    }
}

solve([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)
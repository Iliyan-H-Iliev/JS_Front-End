function solve(jsonStr) {
    let person = JSON.parse(jsonStr)
    for (const personKey in person) {
        console.log(`${personKey}: ${person[personKey]}`)
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')
function solve(input) {
    let catsArray = []
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    input.map(line => {
        const [name, age] = line.split(' ')
        catsArray.push(new Cat(name, age))
    })

    for (const cat of catsArray) {
        cat.meow()
    }
}

solve(['Mellow 2', 'Tom 5'])
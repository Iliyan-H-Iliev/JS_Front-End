function solve(input) {
    let arrayOfHeroes = []

    for (const inputElement of input) {
        let [name, level, items] = inputElement.split(' / ')
        arrayOfHeroes.push(Object.entries({'Hero': name, 'level': Number(level), 'items': items}))
    }
    arrayOfHeroes.sort((a, b) => a[1][1] - b[1][1])

    arrayOfHeroes = arrayOfHeroes.map(hero => {
        let [name, level, items] = hero;
        return {
            'Hero': name[1],
            'level': level[1],
            'items': items[1]
        };
    })

    for (const hero of arrayOfHeroes) {
        console.log(`Hero: ${hero.Hero}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
    }
}

solve([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]
)
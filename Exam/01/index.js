function solve(input) {
    const MAX_BULLETS = 6
    const MAX_HP = 100
    const number = input.shift()

    const heroes = {}
    
    const commands = {
        'FireShot': (name, target) => {
            if (heroes[name].bullets <= 0) {
                console.log(`${name} doesn't have enough bullets to shoot at ${target}!`)
                return
            }

            heroes[name].bullets -= 1
            console.log(`${name} has successfully hit ${target} and now has ${heroes[name].bullets} bullets!`)
        },
        'TakeHit': (name, damage, attacker) => {
            heroes[name].hp -= Number(damage)

            if (heroes[name].hp <= 0) {
                delete heroes[name]
                console.log(`${name} was gunned down by ${attacker}!`)
                return
            }

            console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${heroes[name].hp} HP!`)

        },
        'Reload': (name) => {
            if (heroes[name].bullets >= MAX_BULLETS) {
                console.log(`${name}\'s pistol is fully loaded!`)
                return
            }


            console.log(`${name} reloaded ${MAX_BULLETS - heroes[name].bullets} bullets!`)
            heroes[name].bullets = MAX_BULLETS

        },
        'PatchUp': (name, amount) => {
            if (heroes[name].hp >= MAX_HP) {
                console.log(`${name} is in full health!`)
                return
            }

            let neededHp = MAX_HP - heroes[name].hp
            let amountRecovered = Number(amount) < neededHp ? Number(amount) : MAX_HP - heroes[name].hp

            heroes[name].hp += amountRecovered
            console.log(`${name} patched up and recovered ${amountRecovered} HP!`)
        },

    }

    for (let i = 0; i < number; i++) {
        let [name, hp, bullets] = input.shift().split(' ')
        hp = Number(hp)
        bullets = Number(bullets)
        heroes[name] = {hp, bullets}
    }

    for (const inputElement of input) {

        if (inputElement === 'Ride Off Into Sunset') {
            break
        }

        let [command, ...res] = inputElement.split(' - ')
        commands[command](...res)
    }

    for (const heroesKey in heroes) {
        console.log(`${heroesKey}\n HP: ${heroes[heroesKey].hp}\n Bullets: ${heroes[heroesKey].bullets}`)
    }
}

// solve((["2",
//     "Gus 101 0",
//     "Walt 100 6",
//     "FireShot - Gus - Bandit",
//     "TakeHit - Gus - 100 - Bandit",
//     "Reload - Walt",
//     "Ride Off Into Sunset"])
// )

// solve((["2",
//     "Jesse 100 4",
//     "Walt 100 5",
//     "FireShot - Jesse - Bandit",
//     "TakeHit - Walt - 30 - Bandit",
//     "PatchUp - Walt - 20" ,
//     "Reload - Jesse",
//     "Ride Off Into Sunset"])
// )

solve((["2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"])
)
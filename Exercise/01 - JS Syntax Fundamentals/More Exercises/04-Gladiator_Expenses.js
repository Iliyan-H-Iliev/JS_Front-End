function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmTimesBroken = 0
    let swordTimesBroken = 0
    let shieldTimesBroken = 0
    let armorTimesBroken = 0

    for (let i = 1; i < lostFights + 1; i++) {
        if (i % 2 === 0) {
            helmTimesBroken += 1
        }
        if (i % 3 === 0) {
            swordTimesBroken += 1
        }
        if (i % 6 === 0) {
            shieldTimesBroken += 1
        }
        if (i % 12 === 0) {
            armorTimesBroken += 1
        }
    }

    let spendAureus =
        helmTimesBroken * helmetPrice
        +
        swordTimesBroken * swordPrice
        +
        shieldTimesBroken * shieldPrice
        +
        armorTimesBroken * armorPrice

    console.log(`Gladiator expenses: ${spendAureus.toFixed(2)} aureus`)
}

solve(7,
2,
3,
4,
5
)

solve(23,
12.50,
21.50,
40,
200
)
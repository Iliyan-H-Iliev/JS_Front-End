function solve(fruitName, weightInGr, moneyPerKg) {
    let weightInKg = weightInGr / 1000

    console.log(`I need $${(weightInKg * moneyPerKg).toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitName}.`)
}

solve('orange', 2500, 1.80)
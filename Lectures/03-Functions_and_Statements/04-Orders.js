function solve(product, each) {
    let  products = {
        "coffee": 1.50,
        "water": 1.00,
        "coke": 1.40,
        'snacks': 2.00
    }

    function totalPrice(product, count) {
        return products[product] * count
    }

    console.log(totalPrice(product, each).toFixed(2))
}

solve('water', 5)
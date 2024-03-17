function solve(stock, order) {
    let products = {}

    function takeProductAndQuantity(arr) {
        let product = arr.shift()
        let quantity = arr.shift()

        return [product, Number(quantity)]
    }

    while (stock.length > 0) {
        const [product, quantity] = takeProductAndQuantity(stock)

        products[product] = quantity
    }

    while (order.length > 0) {
        const [product, quantity] = takeProductAndQuantity(order)

        if (!products[product]) {
            products[product] = 0
        }

        products[product] += quantity
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product]}`)
    }
}

solve([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]
)
function solve(mineShifts) {
    const priceBitcoin = 11949.16
    const priceOfGold = 67.51
    let firstDayOfBuyingBitcoin = null
    let totalMoney = 0
    let bitcoins = 0

    for (let i = 0; i < mineShifts.length; i++) {
        let dailyGold = mineShifts[i]

        if ((i + 1) % 3 === 0) {
            dailyGold *= 0.70
        }

        totalMoney += dailyGold * priceOfGold

        if (totalMoney >= priceBitcoin) {

            let buyingBitcoins = Math.floor(totalMoney / priceBitcoin)

            bitcoins += buyingBitcoins
            totalMoney -= priceBitcoin * buyingBitcoins

            if (!firstDayOfBuyingBitcoin) {
                firstDayOfBuyingBitcoin = i + 1
            }
        }
    }

    console.log( `Bought bitcoins: ${bitcoins}`)

    if (firstDayOfBuyingBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${firstDayOfBuyingBitcoin}`)
    }

    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}


solve([100, 200, 300])
solve([50, 100])
solve([3124.15, 504.212, 2511.124])
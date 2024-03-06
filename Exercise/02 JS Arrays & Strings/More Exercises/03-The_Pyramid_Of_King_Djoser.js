function solve(base, increment) {
    let requiredStones = 0
    let requiredMarble = 0
    let requiredLapisLazuli = 0
    let requiredGold = 0
    let pyramidHeight = 0
    let pyramidLayers = []

    for (let i = base; i >= 1 ; i-=2) {
        pyramidLayers.push(i)
    }

    pyramidHeight = pyramidLayers.length
    requiredGold = pyramidLayers.pop() ** 2

    for (let i = 0; i < pyramidLayers.length; i++) {
        let currentBase = pyramidLayers[i]
        let currentStone = (currentBase - 2) ** 2
        requiredStones += currentStone

        if ((i + 1) % 5 === 0) {
            requiredLapisLazuli += (currentBase ** 2) - currentStone
        } else {
            requiredMarble +=(currentBase ** 2) - currentStone
        }
    }

    requiredStones = Math.ceil(requiredStones * increment)
    requiredMarble = Math.ceil(requiredMarble * increment)
    requiredLapisLazuli = Math.ceil(requiredLapisLazuli * increment)
    requiredGold = Math.ceil(requiredGold * increment)
    pyramidHeight = Math.floor(pyramidHeight * increment)

    console.log(`Stone required: ${requiredStones}`)
    console.log(`Marble required: ${requiredMarble}`)
    console.log(`Lapis Lazuli required: ${requiredLapisLazuli}`)
    console.log(`Gold required: ${requiredGold}`)
    console.log(`Final pyramid height: ${pyramidHeight}`)
}


solve(11, 0.75)
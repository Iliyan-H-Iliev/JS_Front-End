function solve(currentAge) {
    let type = ""


    if (currentAge < 0) {
        type = 'out of bounds'
    } else if (currentAge <= 2) {
        type = 'baby'
    } else if (currentAge <= 13) {
        type = 'child'
    } else if (currentAge <= 19) {
        type = 'teenager'
    } else if (currentAge <= 65) {
        type = 'adult'
    } else {
        type = 'elder'
    }

    console.log(type)
}


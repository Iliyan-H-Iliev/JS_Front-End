function solve(array) {
    let user = array.shift()
    let password = user.split('').reverse().join('')

    for (let i = 0; i < array.length; i++) {
        if (array[i] === password) {
            console.log(`User ${user} logged in.`);
            return;
        } else if (i === 3) {
            console.log(`User ${user} blocked!`)
            return;
        } else {
            console.log("Incorrect password. Try again.")
        }
    }
}

solve(['Acer','login','go','let me in','recA'])

solve(['sunny','rainy','cloudy','sunny','not sunny'])

solve(['momo','omom'])
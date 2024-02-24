function solve(numb, o1, o2, o3, o4, o5 ) {
    let num = Number(numb)
    let operations = [o1, o2, o3, o4, o5]
    let actions = {
        'chop': (num) => num / 2,
        'dice': (num) => Math.sqrt(num),
        'spice': (num) => num + 1,
        'bake': (num) => num * 3,
        'fillet': (num) => num - num * 0.2,
    }
    for (let i = 0; i < operations.length; i++) {
        let act = operations[i]

        num = actions[act](num)
        console.log(num)
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
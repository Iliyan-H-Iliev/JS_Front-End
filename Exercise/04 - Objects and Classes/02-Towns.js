function solve(input) {
    const towns = []

    input.forEach(x => {
        const [town, latitude, longitude] = x.split(' | ')
            let city = {'town': town,
            'latitude': Number(latitude).toFixed(2),
            'longitude': Number(longitude).toFixed(2)
            }
        towns.push(
            city
        )
    })

    towns.forEach(x => console.log(x))
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)
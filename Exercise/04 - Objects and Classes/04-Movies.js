function solve(input) {

    const movies = {}

    for (const inputElement of input) {
        let details = []

        if (inputElement.includes('addMovie')) {
            details = inputElement.split('addMovie ')
            let movieName = details[1]
            movies[movieName] = {'name': movieName}
        } else if (inputElement.includes('directedBy')) {
            details = inputElement.split(' directedBy ')
            let movieName = details[0]
            let director = details[1]
            if (movies[movieName]) {
                movies[movieName]['director'] =  director
            }
        } else if (inputElement.includes('onDate')) {
            details = inputElement.split(' onDate ')
            let movieName = details[0]
            let date = details[1]
            if (movies[movieName]) {
                movies[movieName]['date'] = date
            }
        }
    }

    for (const movie in movies) {
            if (movies[movie].name && movies[movie].date && movies[movie].director) {
                console.log(JSON.stringify(movies[movie]))
            }
        }
}

solve([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
]
)

solve([
'addMovie The Avengers',
'addMovie Superman',
'The Avengers directedBy Anthony Russo',
'The Avengers onDate 30.07.2010',
'Captain America onDate 30.07.2010',
'Captain America directedBy Joe Russo'
]
)
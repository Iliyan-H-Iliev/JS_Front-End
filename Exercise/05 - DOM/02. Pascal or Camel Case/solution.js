function solve() {
    let textElement = document.getElementById('text')
    let namingConventionElement = document.getElementById('naming-convention')
    let resultFieldElement = document.getElementById('result')

    let result = ''

    function startWithUpperCase(arrayOfWords) {
        return arrayOfWords.map(x => x[0].toUpperCase() + x.slice(1)).join('')
    }

    let conventionNames = {
        'Camel Case': function (arrayOfWords) {
            return arrayOfWords.shift() + startWithUpperCase(arrayOfWords)
        },

        'Pascal Case': function (arrayOfWords) {
            return startWithUpperCase(arrayOfWords)
        }
    }

    if (!['Camel Case', 'Pascal Case'].includes(namingConventionElement.value)) {
        return resultFieldElement.textContent = 'Error!'
    }

    let arrayOfText = textElement.value.toLowerCase().split(' ')

    resultFieldElement.textContent = conventionNames[namingConventionElement.value](arrayOfText)
}
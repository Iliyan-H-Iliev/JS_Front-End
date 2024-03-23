function search() {
    let listElements = document.querySelectorAll('ul li')
    let searchElement = document.getElementById('searchText')
    let resultElement = document.getElementById('result')

    let matches = 0

    for (const element of listElements) {
        element.style.textDecoration = 'none'
        element.style.fontWeight = 'normal'

        if (element.textContent.includes(searchElement.value)) {
            element.style.textDecoration = 'underline'
            element.style.fontWeight = 'bold'
            matches++
        }
    }

    resultElement.textContent = `${matches} matches found`
}

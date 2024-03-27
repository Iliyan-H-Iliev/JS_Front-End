function deleteByEmail() {
    let tdEmailElements = document.querySelectorAll('tbody td:nth-child(2)');
    let searchedEmailElement = document.querySelector('label input[name="email"]')
    let resultElement = document.getElementById('result')

    let searchedEmail = searchedEmailElement.value
    let result = 'Not found.'

    for (const tdEmailElement of tdEmailElements) {
        if (searchedEmail === tdEmailElement.textContent) {
            tdEmailElement.parentElement.remove()
            result = 'Deleted.'
        }
    }

    resultElement.textContent = result
    searchedEmailElement.value = ''
}
function solve() {
    const sectionsUlElements = document.querySelectorAll('section ul')
    const resultElement = document.querySelector('.results-inner')
    const givenAnswers = []

    const answers = {
        'onclick': true,
        'JSON.stringify()': true,
        'A programming API for HTML and XML documents': true,
        'onmouseclick': false,
        'JSON.toString()': false,
        'The DOM is your source HTML': false,
    }

    Array.from(sectionsUlElements).forEach((ulElement, i) => {
        ulElement.addEventListener('click', (ev) => {
            if (!ev.target.className.includes('answer-')) {
                return;
            }
            const parentElement = ulElement.parentElement
            givenAnswers.push(answers[ev.target.textContent])
            parentElement.classList.add('hidden')
            parentElement.style.display = 'none'

            if (i === sectionsUlElements.length - 1) {
                const allCorrectAnswers = givenAnswers.filter(bool => bool === true)
                resultElement.parentElement.style.display = 'block'

                resultElement.querySelector('h1').textContent = allCorrectAnswers.length === sectionsUlElements.length
                    ? 'You are recognized as top JavaScript fan!'
                    : `You have ${allCorrectAnswers.length} right answers`

                return;
            }
            parentElement.nextElementSibling.classList.remove('hidden')
            parentElement.nextElementSibling.style.display = 'block'
        })
    })
}

function create(words) {
    const contentDivElement = document.getElementById('content')
    const contentFragment = document.createDocumentFragment()

    words.forEach(word => {
        const pElement = document.createElement('p')
        pElement.textContent = word
        pElement.style.display = 'none'

        const divElement = document.createElement('div')
        divElement.appendChild(pElement)

        contentFragment.appendChild(divElement)
    })

    contentDivElement.appendChild(contentFragment)

    contentDivElement.addEventListener('click', (e) => {
        if (e.target.tagName === 'DIV') {
            const pElement = e.target.querySelector('p')
            pElement.style.display = 'block'
        }
    })
}
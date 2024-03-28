function addItem() {
    const ulElement = document.getElementById('items')
    const newItemTextElement = document.getElementById('newItemText')
    const liElement = document.createElement('li')

    liElement.textContent = newItemTextElement.value
    const aElement = document.createElement('a')
    aElement.href = '#'
    aElement.textContent = '[Delete]'

    aElement.addEventListener('click', () => {
        liElement.remove()
    })

    liElement.appendChild(aElement)
    ulElement.appendChild(liElement)

    newItemTextElement.value = ' '
}
function addItem() {
    let newItemElement = document.getElementById('newItemText')
    let itemListElement = document.getElementById('items')

    let liElement = document.createElement('li')
    liElement.textContent = newItemElement.value

    itemListElement.appendChild(liElement)

    newItemElement.value = ''
}
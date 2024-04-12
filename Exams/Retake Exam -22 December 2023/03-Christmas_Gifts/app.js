const baseUrl = 'http://localhost:3030/jsonstore/gifts'

const loadPresentsButton = document.getElementById('load-presents')
loadPresentsButton.addEventListener('click', loadAllPresents)

const addPresentButton = document.getElementById('add-present')
addPresentButton.addEventListener('click', addPresent)

const editPresentButton = document.getElementById('edit-present')
editPresentButton.addEventListener('click', editGift)

function loadAllPresents() {
    const giftsContainer = document.getElementById('gift-list')
    const giftFragmentElement = document.createDocumentFragment()
    giftsContainer.innerHTML = ''


    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            for (const el of Object.values(data)) {
                giftFragmentElement.appendChild(createPresent(el))
            }
            giftsContainer.appendChild(giftFragmentElement)
        })
}

function createPresent(present) {
    const gift = present.gift
    const presentFor = present.for
    const price = present.price

    const giftPElement = document.createElement('p')
    giftPElement.textContent = gift

    const forPElement = document.createElement('p')
    forPElement.textContent = presentFor

    const pricePElement = document.createElement('p')
    pricePElement.textContent = price

    const contentContainerElement = document.createElement('div')
    contentContainerElement.classList.add('content')
    contentContainerElement.appendChild(giftPElement)
    contentContainerElement.appendChild(forPElement)
    contentContainerElement.appendChild(pricePElement)

    const changeButton = document.createElement('button')
    changeButton.classList.add('change-btn')
    changeButton.textContent = 'Change'
    changeButton.addEventListener('click', changeGift)

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-btn')
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', deleteGift)

    const buttonsContainerElement = document.createElement('div')
    buttonsContainerElement.classList.add('buttons-container')
    buttonsContainerElement.appendChild(changeButton)
    buttonsContainerElement.appendChild(deleteButton)

    const giftSockContainer = document.createElement('div')
    giftSockContainer.classList.add('gift-sock')
    giftSockContainer.id = present._id
    giftSockContainer.appendChild(contentContainerElement)
    giftSockContainer.appendChild(buttonsContainerElement)

    return giftSockContainer
}

function addPresent(ev) {

    const giftInputElement = document.getElementById('gift')
    const forInputElement = document.getElementById('for')
    const priceInputElement = document.getElementById('price')


    if (ev) {
        ev.preventDefault()
    }

    const gift = giftInputElement.value
    const presentFor = forInputElement.value
    const price = priceInputElement.value

    giftInputElement.value = ''
    forInputElement.value = ''
    priceInputElement.value = ''


    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({gift, for: presentFor, price})
    })
        .then(() => loadAllPresents())
}

function deleteGift(ev) {
    const gift = ev.currentTarget.parentElement.parentElement
    const giftId = gift.id

    fetch(`${baseUrl}/${giftId}`, {
        method: 'DELETE'
    })
        .then(() => loadAllPresents())
}

function editGift(ev) {
    const giftId = ev.currentTarget.getAttribute('data-id')

    const giftInputElement = document.getElementById('gift')
    const forInputElement = document.getElementById('for')
    const priceInputElement = document.getElementById('price')

    const gift = giftInputElement.value
    const presentFor = forInputElement.value
    const price = priceInputElement.value

    giftInputElement.value = ''
    forInputElement.value = ''
    priceInputElement.value = ''

    fetch(`${baseUrl}/${giftId}`, {
        method: 'PUT',
        body: JSON.stringify({gift, for: presentFor, price, _id: giftId})
    })
        .then(() => loadAllPresents())

    addPresentButton.disabled = false
    editPresentButton.disabled = true
    editPresentButton.removeAttribute('data-id')
}

function changeGift(ev) {
    const giftInputElement = document.getElementById('gift')
    const forInputElement = document.getElementById('for')
    const priceInputElement = document.getElementById('price')

    const giftElement = ev.currentTarget.parentElement.parentElement
    const giftId = giftElement.id
    const giftContent = giftElement.querySelector('.content')

    const [gift, giftFor, price] = Array.from(giftContent.children)
        .map(el => el.textContent)

    giftInputElement.value = gift
    forInputElement.value = giftFor
    priceInputElement.value = price

    addPresentButton.disabled = true
    editPresentButton.disabled = false
    editPresentButton.setAttribute('data-id', giftId)
    giftElement.remove()
}

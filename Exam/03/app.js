const baseUrl = 'http://localhost:3030/jsonstore/games'

const loadGamesButton = document.getElementById('load-games')
loadGamesButton.addEventListener('click', loadAllGames)

const addGameButton = document.getElementById('add-game')
addGameButton.addEventListener('click', addGame)

const editButton = document.getElementById('edit-game')
editButton.addEventListener('click', editGame)

function loadAllGames() {
    const gameListElement = document.getElementById('games-list')
    gameListElement.innerHTML = ''
    
    const listFragment = document.createDocumentFragment()
    
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            for (const game of Object.values(data)) {
                listFragment.appendChild(createGame(game))
            }
            gameListElement.appendChild(listFragment)
        })
}

function createGame(game) {
    const namePElement = document.createElement('p')
    namePElement.textContent = game.name
    
    const maxPlayersPElement = document.createElement('p')
    maxPlayersPElement.textContent = game.players
    
    const typePElement = document.createElement('p')
    typePElement.textContent = game.type
    
    const gameContainer = document.createElement('div')
    gameContainer.classList.add('content')
    gameContainer.appendChild(namePElement)
    gameContainer.appendChild(maxPlayersPElement)
    gameContainer.appendChild(typePElement)
    
    const changeButton = document.createElement('button')
    changeButton.classList.add('change-btn')
    changeButton.textContent = 'Change'
    changeButton.addEventListener('click', changeGame)
    
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-btn')
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', deleteGame)
    
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('buttons-container')
    buttonContainer.appendChild(changeButton)
    buttonContainer.appendChild(deleteButton)
    
    const gameMainContainer = document.createElement('div')
    gameMainContainer.id = game._id
    gameMainContainer.classList.add('board-game')
    gameMainContainer.appendChild(gameContainer)
    gameMainContainer.appendChild(buttonContainer)
    
    return gameMainContainer
}

function addGame() {
    const [name, type, players] = takeInput()
    
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({name, type, players})
    })
        .then(() => loadAllGames())
}

function editGame(ev) {
    const gameId = ev.currentTarget.getAttribute('data-id')
    
    const [name, type, players] = takeInput()
    
    fetch(`${baseUrl}/${gameId}`, {
        method: 'PUT',
        body: JSON.stringify({name, type, players, _id: gameId})
    })
        .then(() => loadAllGames())
    
    ev.currentTarget.removeAttribute('data-id')
}

function changeGame(ev) {
    const nameInputElement = document.getElementById('g-name')
    const typeInputElement = document.getElementById('type')
    const playersInputElement = document.getElementById('players')
    
    
    
    const grandParent = ev.currentTarget.parentElement.parentElement
    const gameId = grandParent.id
    
    const content = grandParent.querySelector('.content').children
    
    nameInputElement.value = content[0].textContent
    typeInputElement.value = content[2].textContent
    playersInputElement.value = content[1].textContent
    
    editButton.setAttribute('data-id', gameId)
    editButton.disabled = false
    addGameButton.disabled = true
}

function deleteGame(ev) {
    const gameId = ev.currentTarget.parentElement.parentElement.id

    fetch(`${baseUrl}/${gameId}`, {
        method: 'DELETE',
    })
        .then(() => loadAllGames())
}

function takeInput() {
    const nameInputElement = document.getElementById('g-name')
    const typeInputElement = document.getElementById('type')
    const playersInputElement = document.getElementById('players')

    const name = nameInputElement.value
    const type = typeInputElement.value
    const players = playersInputElement.value

    nameInputElement.value = ''
    typeInputElement.value = ''
    playersInputElement.value = ''
    
    return [name, type, players]
}
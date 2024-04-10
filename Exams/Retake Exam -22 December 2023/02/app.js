window.addEventListener("load", solve);

function solve() {

    const placeInputElement = document.getElementById('place')
    const actionInputElement = document.getElementById('action')
    const personInputElement = document.getElementById('person')
    const addButton = document.getElementById('add-btn')

    const taskListElement = document.getElementById('task-list')
    const doneListElement = document.getElementById('done-list')
    
    addButton.addEventListener('click', addTask)
    
    function addTask() {
        const place = placeInputElement.value
        const action = actionInputElement.value
        const person = personInputElement.value
        
        if (!place || !action || !person) {
            return
        }
        
        createTask(place, action, person)

        placeInputElement.value = ''
        actionInputElement.value = ''
        personInputElement.value = ''
        
    }

    function createTask(place, action, person) {

        const placePElement = document.createElement('p')
        placePElement.textContent = `Place:${place}`
        
        const actionPElement = document.createElement('p')
        actionPElement.textContent = `Action:${action}`
        
        const personPElement = document.createElement('p')
        personPElement.textContent = `Person:${person}`
        
        const articleElement = document.createElement('article')
        articleElement.appendChild(placePElement)
        articleElement.appendChild(actionPElement)
        articleElement.appendChild(personPElement)
        
        const editButton = document.createElement('button')
        editButton.classList.add('edit')
        editButton.textContent = 'Edit'
        editButton.addEventListener('click', editTask)
        
        const doneButton = document.createElement('button')
        doneButton.classList.add('done')
        doneButton.textContent = 'Done'
        doneButton.addEventListener('click', taskDone)
        
        const buttonsContainer = document.createElement('div')
        buttonsContainer.classList.add('buttons')
        buttonsContainer.appendChild(editButton)
        buttonsContainer.appendChild(doneButton)
        
        const liElement = document.createElement('li')
        liElement.classList.add('clean-task')
        liElement.appendChild(articleElement)
        liElement.appendChild(buttonsContainer)
        
        taskListElement.appendChild(liElement)
        
        function editTask() {
            placeInputElement.value = place
            actionInputElement.value = action
            personInputElement.value = person
            
            liElement.remove()
        }
        
        function taskDone() {
            doneListElement.appendChild(liElement)
            const deleteButton = document.createElement('button')
            deleteButton.classList.add('delete')
            deleteButton.textContent = 'Delete'
            deleteButton.addEventListener('click', () => {
                liElement.remove()
            })

            buttonsContainer.remove()
            liElement.appendChild(deleteButton)
            
        }
    }
}
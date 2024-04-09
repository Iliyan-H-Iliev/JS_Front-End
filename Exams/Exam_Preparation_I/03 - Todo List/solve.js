function attachEvents() {

    const TASK_URL = 'http://localhost:3030/jsonstore/tasks'

    const inputTaskElement = document.getElementById('title')
    const addButtonElement = document.getElementById('add-button')
    const loadButtonElement = document.getElementById('load-button')
    const taskUlElement = document.getElementById('todo-list')
    
    addButtonElement.addEventListener('click', addTask)

    loadButtonElement.addEventListener('click', loadAllTasks)
    
    

    function loadAllTasks(ev) {
        if (ev) {
            ev.preventDefault()
        }
        taskUlElement.innerHTML = ''
        
        fetch(TASK_URL)
            .then(res => res.json())
            .then(tasks => {
                for (const task of Object.values(tasks)) {
                    createTaskElement(task)
                }
            })
        
    }
    
    function createTaskElement(task) {
        const spanElement = document.createElement('span')
        spanElement.textContent = task.name
        
        const removeButton = document.createElement('button')
        removeButton.textContent = 'Remove'
        removeButton.addEventListener('click', removeTask)
        
        const editButton = document.createElement('button')
        editButton.textContent = 'Edit'
        editButton.addEventListener('click', editTask)
        
        const liElement = document.createElement('li')
        liElement.id = task._id
        liElement.appendChild(spanElement)
        liElement.appendChild(removeButton)
        liElement.appendChild(editButton)
        
        taskUlElement.appendChild(liElement)
    }
    
    function addTask(ev) {
        if (ev) {
            ev.preventDefault()
        }
        
        console.log('sad')
        const name = inputTaskElement.value
        inputTaskElement.value = ''
        
        fetch(TASK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name})
        })
            .then(() => loadAllTasks())
            .catch(err => console.log(err))
        
    }
    
    async function removeTask(ev) {
        const parentElement = ev.currentTarget.parentElement
        
        // try {
        //     await fetch(`${TASK_URL}/${parentElement.id}`, {
        //         method: 'DELETE'
        //     })
        //     loadAllTasks()
        // } catch (err) {
        //     console.error(err)
        // }
        
        fetch(`${TASK_URL}/${parentElement.id}`, {
            method: 'DELETE'
        })
            .then(() => loadAllTasks())
            .catch(err => console.error(err))
    }
    
    function editTask(ev) {
        const parentElement = ev.currentTarget.parentElement
        const [ span, removeBtn, editBtn ] = parentElement.children
        
        const inputElement = document.createElement('input')
        inputElement.value = span.textContent
        
        const submitButton = document.createElement('button')
        submitButton.textContent = 'Submit'
        submitButton.addEventListener('click', submitTask)
        
        parentElement.innerHTML = ''
        
        parentElement.appendChild(inputElement)
        parentElement.appendChild(removeBtn)
        parentElement.appendChild(submitButton)
    }
    
    function submitTask(ev) {
        const parentElement = ev.currentTarget.parentElement
        const id = parentElement.id
        const [ input, removeBtn, submitBtn ] = parentElement.children
        const name = input.value
        
        fetch(`${TASK_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({name})
        })
            .then(() => loadAllTasks())
            .catch(err => console.error(err))
        
    }    
}

attachEvents()
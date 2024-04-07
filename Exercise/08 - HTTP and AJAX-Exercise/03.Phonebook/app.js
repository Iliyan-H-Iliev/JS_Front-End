function attachEvents() {
    const phonebookURL = 'http://localhost:3030/jsonstore/phonebook'
    
    const phoneBookUlElement = document.getElementById('phonebook')
    const personElement = document.getElementById('person')
    const phoneElement = document.getElementById('phone')
    const createButtonElement = document.getElementById('btnCreate')
    const loadButtonElement = document.getElementById('btnLoad')
    
    loadButtonElement.addEventListener('click', () => {
        phoneBookUlElement.innerHTML = ''
        
        fetch(phonebookURL)
            .then(res => res.json())
            .then(data => {
                for (const dataKey in data) {
                    createElement(data[dataKey])
                }
            })
    })
    
    createButtonElement.addEventListener('click', () => {
        const name = personElement.value
        personElement.value = ''
        const phone = phoneElement.value
        phoneElement.value = ''
        
        
        fetch(phonebookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({person: name, phone: phone})
        })
            .then(res => res.json())
            .then(person => createElement(person))
    })
    
    function createElement(obj) {
        const liElement = document.createElement('li')
        liElement.textContent = `${obj.person}: ${obj.phone}`

        const deleteButton = document.createElement('button')
        deleteButton.id = obj._id
        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', del)
        liElement.appendChild(deleteButton)

        phoneBookUlElement.appendChild(liElement)
    }
    
    async function del(ev) {
        const parentTargetElement = document.getElementById(ev.target.id).parentElement
        const deleteElement = await fetch(`${phonebookURL}/${ev.target.id}`, {
            method: 'DELETE'
        })
        const res = await deleteElement.json()
        
        parentTargetElement.remove()
    }
}

attachEvents();
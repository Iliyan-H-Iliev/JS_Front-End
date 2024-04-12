const baseUrl = 'http://localhost:3030/jsonstore/tasks'

const loadVacationsButton = document.getElementById('load-vacations')
loadVacationsButton.addEventListener('click', loadAllVacations)

const addVacationButton = document.getElementById('add-vacation')
addVacationButton.addEventListener('click', addVacation)

const editVacationButton = document.getElementById('edit-vacation')
editVacationButton.addEventListener('click', editVacation)

function loadAllVacations() {
    const vacationsListElement = document.getElementById('list')
    vacationsListElement.innerHTML = ''
    const vacationFragment = document.createDocumentFragment()

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            for (const vacation of Object.values(data)) {
                vacationFragment.appendChild(createVacation(vacation))
            }

            vacationsListElement.appendChild(vacationFragment)
        })
}

function createVacation(vacation) {
    const nameH2Element = document.createElement('h2')
    nameH2Element.textContent = vacation.name

    const dateH3Element = document.createElement('h3')
    dateH3Element.textContent = vacation.date

    const daysH3Element = document.createElement('h3')
    daysH3Element.textContent = vacation.days

    const changeButton = document.createElement('button')
    changeButton.classList.add('change-btn')
    changeButton.textContent = 'Change'
    changeButton.addEventListener('click', changeVacation)

    const doneButton = document.createElement('button')
    doneButton.classList.add('done-btn')
    doneButton.textContent = 'Done'
    doneButton.addEventListener('click', doneVacation)

    const vacationContainerElement = document.createElement('div')
    vacationContainerElement.id = vacation._id
    vacationContainerElement.classList.add('container')

    vacationContainerElement.appendChild(nameH2Element)
    vacationContainerElement.appendChild(dateH3Element)
    vacationContainerElement.appendChild(daysH3Element)
    vacationContainerElement.appendChild(changeButton)
    vacationContainerElement.appendChild(doneButton)

    return vacationContainerElement
}

function addVacation() {
    const [name, days, date] = takeValues()

    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({name, days, date})
    })
        .then(() => loadAllVacations())

}

function changeVacation(ev) {

    const nameInputElement = document.getElementById('name')
    const numDaysInputElement = document.getElementById('num-days')
    const fromDateInputElement = document.getElementById('from-date')

    const formElement = nameInputElement.parentElement

    const parentElement = ev.currentTarget.parentElement
    const [nameElement, dateElement, daysElement] = parentElement.children
    formElement.id = parentElement.id

    nameInputElement.value = nameElement.textContent
    numDaysInputElement.value = daysElement.textContent
    fromDateInputElement.value = dateElement.textContent

    parentElement.remove()
    addVacationButton.disabled = true
    editVacationButton.disabled = false
}

function editVacation(ev) {
    const parent = ev.currentTarget.parentElement
    const vacationId = parent.id
    console.log(vacationId)

    const [name, days, date] = takeValues()

    fetch(`${baseUrl}/${vacationId}`, {
        method: 'PUT',
        body: JSON.stringify({name, days, date, _id: vacationId})
    })
        .then(() => loadAllVacations())

    parent.removeAttribute('id')

}

function doneVacation(ev) {
    const parent = ev.currentTarget.parentElement
    const vacationId = parent.id

    fetch(`${baseUrl}/${vacationId}`, {
        method: 'DELETE'
    })
        .then(() => loadAllVacations())
}

function takeValues() {
    const nameInputElement = document.getElementById('name')
    const numDaysInputElement = document.getElementById('num-days')
    const fromDateInputElement = document.getElementById('from-date')

    const name = nameInputElement.value
    const days = numDaysInputElement.value
    const date = fromDateInputElement.value

    nameInputElement.value = ''
    numDaysInputElement.value = ''
    fromDateInputElement.value = ''

    return [name, days, date]
}
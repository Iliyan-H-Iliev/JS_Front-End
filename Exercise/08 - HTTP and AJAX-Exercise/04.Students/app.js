function attachEvents() {
    const studentsURL = 'http://localhost:3030/jsonstore/collections/students'
    
    const tbodyElement = document.querySelector('table tbody')
    const submitButtonElement = document.getElementById('submit')
    const firstNameInputElement = document.querySelector('input[name=firstName]')
    const lastNameInputElement = document.querySelector('input[name=lastName]')
    const facultyNumberInputElement = document.querySelector('input[name=facultyNumber]')
    const gradeInputElement = document.querySelector('input[name=grade]')
    
    fetch(studentsURL)
        .then(res => res.json())
        .then(students => {
            for (const studentsKey in students) {
                createAndFillTr(students[studentsKey])
            }
        })
    
    submitButtonElement.addEventListener('click',(ev) => {
        const firstName = checkInput(firstNameInputElement.value)
        const lastName = checkInput(lastNameInputElement.value)
        const facultyNumber = checkInput(facultyNumberInputElement.value)
        const grade = checkInput(gradeInputElement.value)
        
        if (!firstName || !lastName || !facultyNumber || !grade) {
            return
        } 
        
        const student = {
            firstName,
            lastName,
            facultyNumber,
            grade
        }
        
        fetch(studentsURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(data => createAndFillTr(data))
        
        
    })
    
    function checkInput(input) {
        if (input.trim() === '') {
            return false
        }
        return input
    }

    
    function createAndFillTr(obj) {
        const firstNameTdElement = document.createElement('td')
        firstNameTdElement.textContent = obj.firstName
        
        const lastNameTdElement = document.createElement('td')
        lastNameTdElement.textContent = obj.lastName
        
        const facNumberTdElement = document.createElement('td')
        facNumberTdElement.textContent = obj.facultyNumber
        
        const gradeTdElement = document.createElement('td')
        gradeTdElement.textContent = obj.grade
        
        const trElement = document.createElement('tr')
        trElement.appendChild(firstNameTdElement)
        trElement.appendChild(lastNameTdElement)
        trElement.appendChild(facNumberTdElement)
        trElement.appendChild(gradeTdElement)
        
        tbodyElement.appendChild(trElement)
    }
}

attachEvents();
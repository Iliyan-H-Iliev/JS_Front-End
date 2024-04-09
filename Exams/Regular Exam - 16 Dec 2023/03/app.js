function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/tasks'
    
    const mealListElement = document.getElementById('list')

    const foodInputElement = document.getElementById('food')
    const timeInputElement = document.getElementById('time')
    const caloriesInputElement = document.getElementById('calories')
    
    const loadMealsButton = document.getElementById('load-meals')
    loadMealsButton.addEventListener('click', loadAllMeals)
    
    const addMealButton = document.getElementById('add-meal')
    addMealButton.addEventListener('click', addMeal)
    
    const editButton = document.getElementById('edit-meal')
    editButton.addEventListener('click', editMeal)
    
    
    
    function loadAllMeals() {
        mealListElement.innerHTML = ''
        
        fetch(baseUrl)
            .then(res => res.json())
            .then(meals => {
                for (const meal of Object.values(meals)) {
                    createMeal(meal)
                }
            })
    }
    
    function createMeal(meal) {
        const id = meal._id
        
        const foodH2element = document.createElement('h2')
        foodH2element.textContent = meal.food
        const timeH3element = document.createElement('h3')
        timeH3element.textContent = meal.time
        const caloriesH3element = document.createElement('h3')
        caloriesH3element.textContent = meal.calories
        
        const changeButton = document.createElement('button')
        changeButton.classList.add('change-meal')
        changeButton.textContent = 'Change'
        changeButton.addEventListener('click', editMeal)
        
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-meal')
        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', deleteMeal)
        
        const buttonDivElement = document.createElement('div')
        buttonDivElement.id = 'meal-buttons'
        buttonDivElement.appendChild(changeButton)
        buttonDivElement.appendChild(deleteButton)
        
        const mealDivElement = document.createElement('div')
        mealDivElement.classList.add('meal')
        mealDivElement.appendChild(foodH2element)
        mealDivElement.appendChild(timeH3element)
        mealDivElement.appendChild(caloriesH3element)
        mealDivElement.appendChild(buttonDivElement)
        
        mealListElement.appendChild(mealDivElement)
        
        function deleteMeal() {
            fetch(`${baseUrl}/${id}`, {
                method: 'DELETE'
            })
                .then(() => loadAllMeals())
        }
        
        function editMeal() {
            foodInputElement.value = meal.food
            timeInputElement.value = meal.time
            caloriesInputElement.value = meal.calories
            
            addMealButton.disabled = true
            editButton.disabled = false
            editButton.setAttribute('data-id', id)           
            
            mealDivElement.remove()
        }
    }
    
    function addMeal(ev) {
        const food = foodInputElement.value
        const time = timeInputElement.value
        const calories = caloriesInputElement.value
        
        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify({food, time, calories})
        })
            .then(() => loadAllMeals())

        foodInputElement.value = ''
        timeInputElement.value = ''
        caloriesInputElement.value = ''
    }
    
    function editMeal(ev) {
        const target = ev.currentTarget
        const id = target.getAttribute('data-id')
        
        const food = foodInputElement.value
        const time = timeInputElement.value
        const calories = caloriesInputElement.value

        foodInputElement.value = ''
        timeInputElement.value = ''
        caloriesInputElement.value = ''
        
        fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({food, time, calories, _id: id})
        }).then(() => loadAllMeals())

        addMealButton.disabled = false
        editButton.disabled = true
        editButton.removeAttribute('data-id')
    }
}

solve()
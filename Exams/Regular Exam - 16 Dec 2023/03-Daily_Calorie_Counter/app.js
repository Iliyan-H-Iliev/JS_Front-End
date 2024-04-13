// function solve() {
//     const baseUrl = 'http://localhost:3030/jsonstore/tasks'
//    
//     const mealListElement = document.getElementById('list')
//
//     const foodInputElement = document.getElementById('food')
//     const timeInputElement = document.getElementById('time')
//     const caloriesInputElement = document.getElementById('calories')
//    
//     const loadMealsButton = document.getElementById('load-meals')
//     loadMealsButton.addEventListener('click', loadAllMeals)
//    
//     const addMealButton = document.getElementById('add-meal')
//     addMealButton.addEventListener('click', addMeal)
//    
//     const editButton = document.getElementById('edit-meal')
//     editButton.addEventListener('click', editMeal)
//    
//    
//    
//     function loadAllMeals() {
//         mealListElement.innerHTML = ''
//        
//         fetch(baseUrl)
//             .then(res => res.json())
//             .then(meals => {
//                 for (const meal of Object.values(meals)) {
//                     createMeal(meal)
//                 }
//             })
//     }
//    
//     function createMeal(meal) {
//         const id = meal._id
//        
//         const foodH2element = document.createElement('h2')
//         foodH2element.textContent = meal.food
//         const timeH3element = document.createElement('h3')
//         timeH3element.textContent = meal.time
//         const caloriesH3element = document.createElement('h3')
//         caloriesH3element.textContent = meal.calories
//        
//         const changeButton = document.createElement('button')
//         changeButton.classList.add('change-meal')
//         changeButton.textContent = 'Change'
//         changeButton.addEventListener('click', editMeal)
//        
//         const deleteButton = document.createElement('button')
//         deleteButton.classList.add('delete-meal')
//         deleteButton.textContent = 'Delete'
//         deleteButton.addEventListener('click', deleteMeal)
//        
//         const buttonDivElement = document.createElement('div')
//         buttonDivElement.id = 'meal-buttons'
//         buttonDivElement.appendChild(changeButton)
//         buttonDivElement.appendChild(deleteButton)
//        
//         const mealDivElement = document.createElement('div')
//         mealDivElement.classList.add('meal')
//         mealDivElement.appendChild(foodH2element)
//         mealDivElement.appendChild(timeH3element)
//         mealDivElement.appendChild(caloriesH3element)
//         mealDivElement.appendChild(buttonDivElement)
//        
//         mealListElement.appendChild(mealDivElement)
//        
//         function deleteMeal() {
//             fetch(`${baseUrl}/${id}`, {
//                 method: 'DELETE'
//             })
//                 .then(() => loadAllMeals())
//         }
//        
//         function editMeal() {
//             foodInputElement.value = meal.food
//             timeInputElement.value = meal.time
//             caloriesInputElement.value = meal.calories
//            
//             addMealButton.disabled = true
//             editButton.disabled = false
//             editButton.setAttribute('data-id', id)           
//            
//             mealDivElement.remove()
//         }
//     }
//    
//     function addMeal(ev) {
//         const food = foodInputElement.value
//         const time = timeInputElement.value
//         const calories = caloriesInputElement.value
//        
//         fetch(baseUrl, {
//             method: 'POST',
//             body: JSON.stringify({food, time, calories})
//         })
//             .then(() => loadAllMeals())
//
//         foodInputElement.value = ''
//         timeInputElement.value = ''
//         caloriesInputElement.value = ''
//     }
//    
//     function editMeal(ev) {
//         const target = ev.currentTarget
//         const id = target.getAttribute('data-id')
//        
//         const food = foodInputElement.value
//         const time = timeInputElement.value
//         const calories = caloriesInputElement.value
//
//         foodInputElement.value = ''
//         timeInputElement.value = ''
//         caloriesInputElement.value = ''
//        
//         fetch(`${baseUrl}/${id}`, {
//             method: 'PUT',
//             body: JSON.stringify({food, time, calories, _id: id})
//         }).then(() => loadAllMeals())
//
//         addMealButton.disabled = false
//         editButton.disabled = true
//         editButton.removeAttribute('data-id')
//     }
// }
//
// solve()

const baseUrl = `http://localhost:3030/jsonstore/tasks`;

const loadMeals = document.getElementById('load-meals');
const listmeals = document.getElementById('list');
const addMeal = document.getElementById('add-meal');
const editMeal = document.getElementById('edit-meal');

const foodElement = document.getElementById('food');
const timeElement = document.getElementById('time');
const caloriesElement = document.getElementById('calories');

let currentMealId = null;

const loadMealsfuc = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    console.log(Object.values(data));
    listmeals.innerHTML = '';

    for (const meal of Object.values(data)) {
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-meal');

        const changeBtn = document.createElement('button');
        changeBtn.textContent = 'Change';
        changeBtn.classList.add('change-meal');

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('meal-buttons');
        buttonsDiv.appendChild(changeBtn);
        buttonsDiv.appendChild(deleteBtn);


        const foodElementH2 = document.createElement('h2');
        foodElementH2.textContent = meal.food;
        const timeElementH3 = document.createElement('h3');
        timeElementH3.textContent = meal.time;
        const caloriesElementH3 = document.createElement('h3');
        caloriesElementH3.textContent = meal.calories;


        const divlist = document.createElement('div');
        divlist.classList.add('meal');
        divlist.appendChild(foodElementH2);
        divlist.appendChild(timeElementH3);
        divlist.appendChild(caloriesElementH3);

        divlist.appendChild(buttonsDiv);

        listmeals.appendChild(divlist);

        changeBtn.addEventListener('click',  () => {
            currentMealId = meal._id;

            foodElement.value = meal.food;
            timeElement.value = meal.time;
            caloriesElement.value = meal.calories;

            editMeal.removeAttribute('disabled');
            addMeal.setAttribute('disabled', 'disabled');
            divlist.remove();




        });

        deleteBtn.addEventListener('click', async () => {
            await fetch(`${baseUrl}/${meal._id}`, {
                method: 'DELETE'
            });



            divlist.remove();
        });




    }
}
loadMeals.addEventListener('click', loadMealsfuc);

addMeal.addEventListener('click', async () => {
    const newMeal = getInputs();

    if (food === '' || time === '' || calories === '') {
        return;
    }

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newMeal)
    });
    if (!response.ok) {
        return;
    }
    loadMealsfuc();

    foodElement.value = '';
    timeElement.value = '';
    caloriesElement.value = '';

});

editMeal.addEventListener('click', async () => {
    const {food, calories, time} = getInputs();
    const response = await fetch(`${baseUrl}/${currentMealId}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            _id: currentMealId,
            food,
            calories,
            time
        })
    });
    if (!response.ok) {
        return;
    }
    loadMealsfuc();
    editMeal.setAttribute('disabled', 'disabled');
    addMeal.removeAttribute('disabled');
    currentMealId = null;
    clearInputs();
});



function getInputs() {
    const food = foodElement.value;
    const time = timeElement.value;
    const calories = caloriesElement.value;

    return { food, time, calories };
}

function clearInputs() {
    foodElement.value = '';
    timeElement.value = '';
    caloriesElement.value = '';
}
window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const deleteButtonElement = document.querySelector('#expenses button');
    
    const previewUlElement = document.getElementById('preview-list');
    const expensesUlElement = document.getElementById('expenses-list');
    
    const typeInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    
    deleteButtonElement.addEventListener('click', () => {
        location.reload();
    })
    
    addButtonElement.addEventListener('click', addExpense);
    
    function addExpense() {
        const type = typeInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;
        
        if (!type || !amount || !date) {
            return;
        }

        const typePElement = document.createElement('p');
        typePElement.textContent = `Type: ${type}`;
        
        const amountPElement = document.createElement('p');
        amountPElement.textContent = `Amount: ${amount}$`;
        
        const datePElement = document.createElement('p');
        datePElement.textContent = `Date: ${date}`;
        
        const articleElement = document.createElement('article');
        
        articleElement.appendChild(typePElement);
        articleElement.appendChild(amountPElement);
        articleElement.appendChild(datePElement);
        
        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('btn', 'edit');
        editButtonElement.textContent = 'edit';
        editButtonElement.addEventListener('click', editExpense);
        
        const okButtonElement = document.createElement('button');
        okButtonElement.classList.add('btn', 'ok');
        okButtonElement.textContent = 'ok';
        okButtonElement.addEventListener('click', clickOk);
        
        const divButtonElement = document.createElement('div');
        divButtonElement.classList.add('buttons');
        divButtonElement.appendChild(editButtonElement);
        divButtonElement.appendChild(okButtonElement);
        
        const liElement = document.createElement('li');
        liElement.classList.add('expense-item');
        liElement.appendChild(articleElement);
        liElement.appendChild(divButtonElement);
        
        previewUlElement.appendChild(liElement);
        addButtonElement.disabled = true;
        typeInputElement.value = '';
        amountInputElement.value = '';
        dateInputElement.value = '';
        
        function editExpense() {
            typeInputElement.value = type
            amountInputElement.value = amount
            dateInputElement.value = date
            
            liElement.remove();

            addButtonElement.disabled = false;
        }
        
        function clickOk() {
            divButtonElement.remove();
            expensesUlElement.appendChild(liElement);
            addButtonElement.disabled = false;
        }
    }
}

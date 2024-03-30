function addItem() {
    const menuElement = document.getElementById('menu')
    const newItemTextElement = document.getElementById('newItemText');
    const newItemValueElement = document.getElementById('newItemValue');
    const addButtonElement = document.querySelector('input[type=button][value=Add]')

    const optionElement = document.createElement('option')
    optionElement.textContent = newItemTextElement.value
    optionElement.value = newItemValueElement.value
    menuElement.appendChild(optionElement)

    newItemValueElement.value = ''
    newItemTextElement.value = ''
}
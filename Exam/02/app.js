window.addEventListener("load", solve);

function solve() {
  
  const ulCheckList = document.getElementById('check-list')
  const ulContactList = document.getElementById('contact-list')

  const nameInputElement = document.getElementById('name')
  const phoneInputElement = document.getElementById('phone')
  const categoryInputElement = document.getElementById('category')
  
  const addButton = document.getElementById('add-btn')
  addButton.addEventListener('click', createContact)
  
  function createContact() {
    const name = nameInputElement.value
    const phone = phoneInputElement.value
    const category = categoryInputElement.value
    
    if (!name || !phone || ! category) {
      return
    }
    
    nameInputElement.value = ''
    phoneInputElement.value = ''
    categoryInputElement.value = ''

    const namePElement = document.createElement('p')
    namePElement.textContent = `name:${name}`
    
    const phonePElement = document.createElement('p')
    phonePElement.textContent = `phone:${phone}`
    
    const categoryPElement = document.createElement('p')
    categoryPElement.textContent = `category:${category}`
    
    const articleElement = document.createElement('article')
    articleElement.appendChild(namePElement)
    articleElement.appendChild(phonePElement)
    articleElement.appendChild(categoryPElement)
    
    const editButton = document.createElement('button')
    editButton.classList.add('edit-btn')
    editButton.addEventListener('click', editContact)
    
    const saveButton = document.createElement('button')
    saveButton.classList.add('save-btn')
    saveButton.addEventListener('click', saveContact)
    
    const buttonsContainer = document.createElement('div')
    buttonsContainer.classList.add('buttons')
    buttonsContainer.appendChild(editButton)
    buttonsContainer.appendChild(saveButton)
    
    const liElement = document.createElement('li')
    liElement.appendChild(articleElement)
    liElement.appendChild(buttonsContainer)
    
    ulCheckList.appendChild(liElement)
    
    function editContact() {
      nameInputElement.value = name
      phoneInputElement.value = phone
      categoryInputElement.value = category
      
      liElement.remove()
    }
    
    function saveContact() {
      
      const deleteButton = document.createElement('button')
      deleteButton.classList.add('del-btn')
      deleteButton.addEventListener('click', () => {
        liElement.remove()
      })
      
      buttonsContainer.remove()
      liElement.appendChild(deleteButton)
      ulContactList.appendChild(liElement)
    }
    
  }
}
  
window.addEventListener("load", solve);

function solve() {
    const firstNameElement = document.getElementById('first-name')
    const lastNameElement = document.getElementById('last-name')
    const ageElement = document.getElementById('age')
    const storyTitleElement = document.getElementById('story-title')
    const genreElement = document.getElementById('genre')
    const storyInputElement = document.getElementById('story')
    const publishButtonElement = document.getElementById('form-btn')
    const ulPreviewList = document.getElementById('preview-list')

    function strChecker(string) {
        if (string.trim() === '') {
            return false;
        }
        return string;
    }

    publishButtonElement.addEventListener('click', (ev) => {
        const firstName = strChecker(firstNameElement.value);
        const lastName = strChecker(lastNameElement.value);
        const age = strChecker(ageElement.value);
        const storyTitle = strChecker(storyTitleElement.value);
        const storyInput = strChecker(storyInputElement.value);


        if (!firstName || !lastName || !age || !storyTitle || !storyInput) {
            ev.preventDefault();
            return;
        }

        const genre = genreElement.value

        const nameH4Element = document.createElement('h4')
        nameH4Element.textContent = `Name: ${firstName} ${lastName}`

        const agePElement = document.createElement('p')
        agePElement.textContent = `Age: ${age}`

        const titlePElement = document.createElement('p')
        titlePElement.textContent = `Title: ${storyTitle}`

        const genrePElement = document.createElement('p')
        genrePElement.textContent = `Genre: ${genreElement.value}`

        const storyPElement = document.createElement('p')
        storyPElement.textContent = `${storyInput}`

        const articleElement = document.createElement('article')
        articleElement.appendChild(nameH4Element)
        articleElement.appendChild(agePElement)
        articleElement.appendChild(titlePElement)
        articleElement.appendChild(genrePElement)
        articleElement.appendChild(storyPElement)

        const saveButtonElement = document.createElement('button')
        saveButtonElement.classList.add('save-btn')
        saveButtonElement.textContent = 'Save Story'

        const editButtonElement = document.createElement('button')
        editButtonElement.classList.add('edit-btn')
        editButtonElement.textContent = 'Edit Story'

        const deleteButtonElement = document.createElement('button')
        deleteButtonElement.classList.add('delete-btn')
        deleteButtonElement.textContent = 'Delete Story'

        const liElement = document.createElement('li')
        liElement.classList.add('story-info')
        liElement.appendChild(articleElement)
        liElement.appendChild(saveButtonElement)
        liElement.appendChild(editButtonElement)
        liElement.appendChild(deleteButtonElement)

        ulPreviewList.appendChild(liElement)

        firstNameElement.value = ''
        lastNameElement.value = ''
        ageElement.value = ''
        storyTitleElement.value = ''
        storyInputElement.value = ''

        publishButtonElement.disabled = true

        const saveStoryButtonElement = document.getElementsByClassName('save-btn').item(0)

        saveStoryButtonElement.addEventListener('click', () => {
            const mainDivElement = document.getElementById('main')

            const savedH1Element = document.createElement('h1')
            savedH1Element.textContent = 'Your scary story is saved!'

            Array.from(mainDivElement.children).forEach(element => element.remove())

            mainDivElement.appendChild(savedH1Element)

        })

        const editStoryButtonElement = document.getElementsByClassName('edit-btn').item(0)

        editStoryButtonElement.addEventListener('click', () => {
            const previewLiElement = document.querySelector('li.story-info')
            previewLiElement.remove()

            firstNameElement.value = firstName
            lastNameElement.value = lastName
            ageElement.value = age
            storyTitleElement.value = storyTitle
            genreElement.value = genre
            storyInputElement.value = storyInput

            publishButtonElement.disabled = false
        })

        const deleteStoryButtonElement = document.getElementsByClassName('delete-btn').item(0)

        deleteStoryButtonElement.addEventListener('click', () => {
            const previewLiElement = document.querySelector('li.story-info')
            previewLiElement.remove()
            publishButtonElement.disabled = false

        })
    })
}
function lockedProfile() {
    const showButtonsElements = document.querySelectorAll('.profile button')

    Array.from(showButtonsElements).forEach(button => {
        button.addEventListener('click', (e) => {
            const parentElement = e.currentTarget.parentElement
            const hiddenInformationElement = parentElement.querySelector('div')
            const lockedProfileElement = parentElement.querySelector('input[value=lock]')

            if (lockedProfileElement.checked) {
                return
            }

            if (button.textContent === 'Show more') {
                hiddenInformationElement.style.display = 'block'
                button.textContent = 'Hide it'
            } else {
                hiddenInformationElement.style.display = 'none'
                button.textContent = 'Show more'
            }
        })
    })
}
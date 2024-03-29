function validate() {
    const inputElement = document.getElementById('email')
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/

    inputElement.addEventListener('change', (ev) => {
        if (!pattern.test(ev.target.value)) {
            inputElement.classList.add('error')
        } else {
            inputElement.classList.remove('error')
        }
    })
}
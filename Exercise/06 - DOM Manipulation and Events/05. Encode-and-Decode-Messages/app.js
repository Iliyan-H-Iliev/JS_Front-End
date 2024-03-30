function encodeAndDecodeMessages() {
    const massageElements = document.querySelectorAll('textarea');
    const inputMassageElement = massageElements.item(0)
    const encodingButtonElement = inputMassageElement.nextElementSibling
    const outputMassageElement = massageElements.item(1)
    const decodingButtonElement = outputMassageElement.nextElementSibling

    encodingButtonElement.addEventListener('click', () => {
        outputMassageElement.value = Array
            .from(inputMassageElement.value)
            .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
            .join('')

        inputMassageElement.value = ''
    })

    decodingButtonElement.addEventListener('click', () => {
        outputMassageElement.value = Array
            .from(outputMassageElement.value)
            .map(char => String.fromCharCode(char.charCodeAt(0) - 1))
            .join('')
    })
}
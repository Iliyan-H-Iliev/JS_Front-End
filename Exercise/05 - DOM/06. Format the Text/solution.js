function solve() {
    let inputElement = document.getElementById('input');
    let outputElement = document.getElementById('output');
    let result = []

    let arrayOfInputText = inputElement.value.split(/(?<=\.)/);

    for (let i = 0; i < arrayOfInputText.length; i++) {

        let index = Math.floor(i / 3);

        if (!result[index]) {
            result[index] = [];
        }
        result[index].push(arrayOfInputText[i].trim());
    }

    for (const resultElement of result) {
        let text = resultElement.join(' ')
        const peElement = document.createElement('p')
        peElement.textContent = text
        outputElement.appendChild(peElement)
    }
}
function solve() {
    const tableElement = document.querySelector('table');
    const quickCheckButtonElement = document.querySelector('tfoot button:first-of-type');
    const clearButtonElement = document.querySelector('tfoot button:last-of-type');
    const resultMessageElement = document.querySelector('#check p');
    const trElements = document.querySelectorAll('tbody tr');

    const result = {
        true: () => {
            resultMessageElement.textContent = "You solve it! Congratulations!";
            resultMessageElement.style.color = 'green';
            tableElement.style.border = "2px solid green";

        },
        false: () => {
            resultMessageElement.textContent = "NOP! You are not done yet...";
            resultMessageElement.style.color = 'red';
            tableElement.style.border = "2px solid red";
        },
        clear: () => {
            resultMessageElement.textContent = "";
            resultMessageElement.style.color = 'none';
            tableElement.style.border = "";
        },
    }

    quickCheckButtonElement.addEventListener('click', () => {
        result.clear();
        const sudokoMatrix = [];
        let isCorrect = true;


        for (const trElement of trElements) {
            const row = [];
            const numbersAsString = Array.from(trElement.querySelectorAll('input[type=number]'));

            for (const number of numbersAsString) {

                if (number.value === '' || Number(number.value) < 1 || Number(number.value) > numbersAsString.length) {
                    isCorrect = false;
                    break;
                }

                row.push(Number(number.value));
            }

            if (!isCorrect || row.length !== new Set(row).size) {
                isCorrect = false;
                break;
            }
            sudokoMatrix.push(row);
        }

        if (!isCorrect) {
            result[isCorrect]();
            return;
        }

        for (let i = 0; i < sudokoMatrix.length - 1; i++) {
            for (let j = 0; j < sudokoMatrix[i].length; j++) {
                if (sudokoMatrix[i][j] === sudokoMatrix[i + 1][j]) {
                    isCorrect = false;
                    break;
                }
                if (!isCorrect) {
                    result[isCorrect]();
                    return;
                }
            }
        }

        result[isCorrect]();
    })

    clearButtonElement.addEventListener('click', () => {
        Array.from(tableElement.querySelectorAll('input[type=number]')).forEach(cell => cell.value = '');
        result.clear();
    })
}
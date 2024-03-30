function solve() {
    const furnitureInputElement = document.querySelector('textarea:first-of-type')
    const generateButtonElement = furnitureInputElement.nextElementSibling
    const outputTextElement = document.querySelector('textarea:last-of-type')
    const buyButtonElement = outputTextElement.nextElementSibling
    const tbodyElement = document.querySelector('tbody')


    generateButtonElement.addEventListener('click', () => {
        const furnitureDetails = JSON.parse(furnitureInputElement.value)

        for (const furniture of furnitureDetails) {
            const trElement = document.createElement('tr');

            const imgTd = document.createElement('td');
            const imgElement = document.createElement('img');
            imgElement.src = furniture.img;
            imgTd.appendChild(imgElement);

            const nameTd = document.createElement('td');
            const nameP = document.createElement('p');
            nameP.textContent = furniture.name;
            nameTd.appendChild(nameP);

            const priceTd = document.createElement('td');
            const priceP = document.createElement('p');
            priceP.textContent = furniture.price;
            priceTd.appendChild(priceP);

            const decFactorTd = document.createElement('td');
            const decFactorP = document.createElement('p');
            decFactorP.textContent = furniture.decFactor;
            decFactorTd.appendChild(decFactorP);

            const checkTd = document.createElement('td');
            const inputCheck = document.createElement('input');
            inputCheck.type = 'checkbox';
            checkTd.appendChild(inputCheck);

            trElement.appendChild(imgTd);
            trElement.appendChild(nameTd);
            trElement.appendChild(priceTd);
            trElement.appendChild(decFactorTd);
            trElement.appendChild(checkTd);

            tbodyElement.appendChild(trElement);
        }
    });

    buyButtonElement.addEventListener('click', () => {
        let result = [];
        const boughtFurniture = [];
        let totalPrice = 0;
        let totalFecFactor = 0;

        Array.from(tbodyElement.children).forEach(furniture => {

            if (!furniture.querySelector('input[type=checkbox]').checked) {
                return;
            }

            const furnitureElements = furniture.querySelectorAll('p');
            boughtFurniture.push(furnitureElements.item(0).textContent);
            totalPrice += Number(furnitureElements.item(1).textContent);
            totalFecFactor += Number(furnitureElements.item(2).textContent);
        })

        result.push(
            `Bought furniture: ${boughtFurniture.join(', ')}`,
            `Total price: ${totalPrice.toFixed(2)}`,
            `Average decoration factor: ${totalFecFactor / boughtFurniture.length}`,
        );

        outputTextElement.value = result.join('\n');
    })
}

function generateReport() {
    let thElements = document.querySelectorAll('table thead th');
    let trElements = document.querySelectorAll('table tbody tr');
    let outputElement = document.getElementById('output')

    let columns = Array.from(thElements).map(thElement => {
        let content = thElement.textContent.toLowerCase().trim();
        let checked = thElement.querySelector('input[type="checkbox"]').checked;
        return {name: content, checked: checked};
    })

    let rows = Array
        .from(trElements)
        .map(trElement => Array.from(trElement.querySelectorAll('td')));


    let result = rows.map(row => {
        let obj = {};

        for (let i = 0; i < columns.length; i++) {
            if (columns[i].checked) {
                obj[columns[i].name] = row[i].textContent;
            }
        }
        return obj;
    })

    outputElement.value = JSON.stringify(result, null, 2);
}
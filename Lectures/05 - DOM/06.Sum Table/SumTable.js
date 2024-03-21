function sumTable() {
    let trElements = document.querySelectorAll('table tr>td:nth-child(2n):not(#sum)')
    let sumElement = document.getElementById('sum')

    sumElement.textContent = Array
        .from(trElements)
        .map(x => x.textContent)
        .reduce((acc, x) => acc + Number(x), 0).toString()
}
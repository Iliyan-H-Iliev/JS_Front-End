function colorize() {
    let neededTrElements = document.querySelectorAll("table tr:nth-child(2n)")

    Array.from(neededTrElements).forEach(tr => tr.style.backgroundColor = 'Teal')
}
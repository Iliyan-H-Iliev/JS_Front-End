function extractText() {
    let list = document.querySelectorAll("ul li")
    let resultBox = document.getElementById('result')

    resultBox.value = Array.from(list).map(x => x.textContent).join('\n')
}

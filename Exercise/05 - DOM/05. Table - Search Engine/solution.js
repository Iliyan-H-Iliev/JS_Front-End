function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {

        let trElements = document.querySelectorAll('tbody tr');
        let searchElement = document.getElementById('searchField');

        for (const trElement of trElements) {
            trElement.classList.remove('select');
            for (const element of trElement.querySelectorAll('td')) {
                if (element.textContent.includes(searchElement.value)) {
                    trElement.classList.add('select');
                    break;
                }
            }
        }
        searchElement.value = '';
    }
}
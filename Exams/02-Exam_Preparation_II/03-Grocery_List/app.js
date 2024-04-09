function solve1522() {
    const GROCERY_URL = 'http://localhost:3030/jsonstore/grocery'

    const loadAllProductsBtn = document.getElementById('load-product')
    const updateProductsBtn = document.getElementById('update-product')
    const addProductsBtn = document.getElementById('add-button')

    const nameElement = document.getElementById('product')
    const countElement = document.getElementById('count')
    const priceElement = document.getElementById('price')

    const tBodyElement = document.getElementById('tbody')

    loadAllProductsBtn.addEventListener('click', loadAllProducts)

    addProductsBtn.addEventListener('click', (ev) => {

        ev.preventDefault();

        const product = nameElement.value;
        const count = countElement.value;
        const price = priceElement.value;

        fetch(GROCERY_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product: product, count: count, price: price })
        })
            .then(() => loadAllProducts())
    });

    function loadAllProducts(ev) {
        tBodyElement.innerHTML = ''
        
        if (ev) {
            ev.preventDefault()
        }

        fetch(GROCERY_URL, {
            method: 'GET',
            headers:{
            'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                for (const el of Object.values(data)) {
                    createElement(el)
                }
            })
    }

    function createElement(product) {
        const nameTdElement = document.createElement('td')
        nameTdElement.className = 'name'
        nameTdElement.textContent = product.product

        const countTdElement = document.createElement('td')
        countTdElement.className = 'count-product'
        countTdElement.textContent = product.count

        const priceTdElement = document.createElement('td')
        priceTdElement.className = 'product-price'
        priceTdElement.textContent = product.price

        const updateBtn = document.createElement('button')
        updateBtn.className = 'update'
        updateBtn.textContent = 'Update'
        updateBtn.addEventListener('click', updateProduct)

        const deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete'
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', deleteProduct)

        const buttonsTdElement = document.createElement('td')
        buttonsTdElement.className = 'btn'
        buttonsTdElement.appendChild(updateBtn)
        buttonsTdElement.appendChild(deleteBtn)


        const trElement = document.createElement('tr')
        trElement.id = product._id
        trElement.appendChild(nameTdElement)
        trElement.appendChild(countTdElement)
        trElement.appendChild(priceTdElement)
        trElement.appendChild(buttonsTdElement)

        tBodyElement.appendChild(trElement)
    }
    

    function deleteProduct(ev) {
        console.log('delete')
    }
    
    function updateProduct(ev) {
        console.log('update')
    }
}

solve1522()

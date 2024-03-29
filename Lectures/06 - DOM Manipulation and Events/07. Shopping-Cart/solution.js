function solve() {
    const allAddButtonElements = document.querySelectorAll('.product button');
    const textAreaElement = document.querySelector('textarea');
    const checkOutButtonElement = document.querySelector('.checkout');
    const products = {};
    let totalPrice = 0;

    Array.from(allAddButtonElements).forEach(button => {
        button.addEventListener('click', (ev) => {
            const productElement = button.parentElement.parentElement;
            const productNameElement = productElement.querySelector('.product-title');
            const productPriceElement = productElement.querySelector('.product-line-price');
            const productName = productNameElement.textContent;
            const productPrice = Number(productPriceElement.textContent);

            products[productName] = true;
            totalPrice += productPrice;

            textAreaElement.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
        });
    });

    checkOutButtonElement.addEventListener('click', () => {
        let allProducts = Object.keys(products);
        textAreaElement.value += `You bought ${allProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;
        checkOutButtonElement.disabled = 'disabled';
        Array.from(allAddButtonElements).forEach(button => button.disabled = 'disabled');
    });
}
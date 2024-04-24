let quantityInput = document.getElementById('quantity');
let priceInput = document.getElementById('price');
let totalDisplay = document.getElementById('total');
let statusDisplay = document.getElementById('status');
let totalCost = 0;

function calculateTotal() {
    let quantity = parseInt(quantityInput.value);
    let price = parseFloat(priceInput.value);

    if (isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
        statusDisplay.textContent = 'Por favor, insira valores válidos para quantidade e preço.';
        totalDisplay.textContent = '';
        return;
    }

    totalCost = quantity * price;
    totalDisplay.textContent = `Custo total: R$ ${totalCost.toFixed(2)}`;
    statusDisplay.textContent = '';
}
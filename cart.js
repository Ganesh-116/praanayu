window.onload = function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    let total = 0;

    // Display cart items
    cartItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `<span>${item.name}</span> <span>${item.price}</span>`;
        cartItemsContainer.appendChild(div);

        // Extract the price value and calculate total
        const priceValue = parseFloat(item.price.replace('₹', ''));
        total += priceValue;
    });

    // Update total price
    totalPriceElement.innerText = `₹${total.toFixed(2)}`;
};

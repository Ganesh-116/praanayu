// JavaScript for Express Medicine Delivery

let cart = [];
let total = 0;

function nextStep(stepId) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => {
        step.style.display = 'none';
    });

    // Show the selected step
    document.getElementById(stepId).style.display = 'block';
}

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";  // Clear existing items in cart display

    // Display each item in the cart
    cart.forEach((item) => {
        let cartItem = document.createElement("div");
        cartItem.innerHTML = `<p>${item.name} - ₹${item.price}</p>`;
        cartItems.appendChild(cartItem);
    });

    // Update total price display
    document.getElementById("totalPrice").innerText = total;
}

function completePayment() {
    const deliveryBoyPhone = "9876543210"; // Dummy delivery boy phone number

    // Display order details
    const orderDetails = `
        Order placed successfully!
        Total Amount: ₹${total}
        Delivery Boy's Phone: ${deliveryBoyPhone}
    `;
    document.getElementById("orderDetails").innerText = orderDetails;

    // Show order details step
    nextStep('orderDetailsStep');

    // Reset cart and total
    cart = [];
    total = 0;
    updateCart();
}

// scripts.js

// Example: Update token number periodically (mockup)
function updateTokenNumber() {
    // This function would interact with your backend to fetch the latest token number
    // For demonstration purposes, we'll simulate this with random numbers
    let tokenNumber = document.getElementById('token-number');
    let currentToken = parseInt(tokenNumber.innerText);
    tokenNumber.innerText = currentToken - 5; // Mockup token decrease
}

// Simulate token number update every 5 minutes
setInterval(updateTokenNumber, 300000); // 300000 ms = 5 minutes

// Example: Medicine search (simple client-side filtering)
document.getElementById('search').addEventListener('input', function() {
    let filter = this.value.toUpperCase();
    let items = document.querySelectorAll('.medicine-item');

    items.forEach(function(item) {
        let text = item.textContent || item.innerText;
        item.style.display = text.toUpperCase().includes(filter) ? '' : 'none';
    });
});// Function to update token number
function updateTokenNumber() {
    let tokenNumberElement = document.getElementById('token-number');
    
    // Simulate token number decrease (for demo purposes)
    let currentToken = parseInt(tokenNumberElement.innerText);
    if (currentToken > 0) {
        tokenNumberElement.innerText = currentToken - 1;
    }
}

// Update token number every 5 minutes (300000 ms)
setInterval(updateTokenNumber, 300000); // 300000 ms = 5 minutes
// Function to fetch and update the token number from the server
async function fetchTokenNumber() {
    try {
        const response = await fetch('/api/token');
        const data = await response.json();
        document.getElementById('token-number').innerText = data.token;
    } catch (error) {
        console.error('Error fetching token number:', error);
    }
}

// Function to handle token number update on click
async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.results[0]); // Display the random user data
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

// Call the function to fetch a random user
function redirectToPayment(slotTime) {
    if (slotTime) {
        // Store the selected time in local storage or pass it directly to the payment page
        localStorage.setItem('selectedSlot', slotTime);
    }
    // Redirect to the payment page
    window.location.href = 'payment.html';
}

// Load doctor profile on doctorProfile.html
if (document.getElementById('doctor-name')) {
    const doctorId = localStorage.getItem('selectedDoctor');
    const doctor = doctors.find(d => d.id == doctorId);
    document.getElementById('doctor-name').innerText = doctor.name;

    const timeSlots = document.getElementById('time-slots');
    doctor.slots.forEach(slot => {
        const slotDiv = document.createElement('div');
        slotDiv.innerText = slot.time;
        slotDiv.classList.add('time-slot', slot.status);
        slotDiv.onclick = () => redirectToPayment(slot.time);
        timeSlots.appendChild(slotDiv);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const selectedSlot = localStorage.getItem('selectedSlot');
    document.getElementById('selected-slot').innerText = `Selected Slot: ${selectedSlot}`;
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    fetch('/api/payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cardNumber, expiryDate, cvv })
    })
    .then(response => response.json())
    .then(data => {
        const message = document.getElementById('message');
        if (data.success) {
            message.textContent = 'Payment Successful! Token: ' + data.tokenNumber;
            message.style.color = 'green';
        } else {
            message.textContent = 'Payment Failed: ' + data.error;
            message.style.color = 'red';
        }
    })
    .catch(err => {
        const message = document.getElementById('message');
        message.textContent = 'Payment Failed: ' + err.message;
        message.style.color = 'red';
    });
});




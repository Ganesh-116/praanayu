function showDetails(type) {
    // Hide all details first
    document.getElementById("privateDetails").style.display = "none";
    document.getElementById("govtDetails").style.display = "none";

    // Show the selected ambulance details
    if (type === 'private') {
        document.getElementById("privateDetails").style.display = "block";
    } else if (type === 'govt') {
        document.getElementById("govtDetails").style.display = "block";
    }
}

function showPaymentSection() {
    document.getElementById("paymentSection").style.display = "block";
}

function completePayment() {
    // Hide payment section and show receipt
    document.getElementById("paymentSection").style.display = "none";
    document.getElementById("receipt").style.display = "block";
}

function validatePhoneNumber() {
    const phoneInput = document.getElementById('phone-number');
    const sendOtpButton = document.getElementById('send-otp');
    const isValid = phoneInput.value.length === 10 && !isNaN(phoneInput.value);
    sendOtpButton.disabled = !isValid;
}

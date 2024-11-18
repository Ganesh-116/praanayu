document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        // Here you can handle the form submission
        alert('Sign up successful!');
        // You might want to send data to the server here
    }
});
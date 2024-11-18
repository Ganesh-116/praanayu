const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const messageElement = document.getElementById('message');
const resultIcon = document.getElementById('result-icon');

const exchangeButton = document.getElementById('exchange-button');
const cancelButton = document.getElementById('cancel-button');
const slotButtons = document.querySelectorAll('.slot-button');
const backButtons = document.querySelectorAll('.back-button');

exchangeButton.addEventListener('click', () => {
    step1.classList.remove('active');
    step2.classList.add('active');
});

cancelButton.addEventListener('click', () => {
    step1.classList.remove('active');
    step3.classList.add('active');
    messageElement.textContent = 'Your appointment has been successfully canceled.';
    resultIcon.classList.add('fas', 'fa-times-circle');
});

slotButtons.forEach(button => {
    button.addEventListener('click', () => {
        step2.classList.remove('active');
        step3.classList.add('active');
        messageElement.textContent = 'Your appointment has been successfully exchanged.';
        resultIcon.classList.add('fas', 'fa-check-circle');
    });
});

backButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (step3.classList.contains('active')) {
            step3.classList.remove('active');
            step1.classList.add('active');
            resetIcons();
        } else if (step2.classList.contains('active')) {
            step2.classList.remove('active');
            step1.classList.add('active');
            resetIcons();
        }
    });
});

function resetIcons() {
    resultIcon.classList.remove('fas', 'fa-check-circle', 'fa-times-circle');
}

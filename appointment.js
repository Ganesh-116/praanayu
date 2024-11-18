// script.js
document.getElementById('upcoming-btn').addEventListener('click', function () {
    document.getElementById('upcoming-appointments').classList.add('active');
    document.getElementById('recent-appointments').classList.remove('active');
    this.classList.add('active');
    document.getElementById('recent-btn').classList.remove('active');
});

document.getElementById('recent-btn').addEventListener('click', function () {
    document.getElementById('recent-appointments').classList.add('active');
    document.getElementById('upcoming-appointments').classList.remove('active');
    this.classList.add('active');
    document.getElementById('upcoming-btn').classList.remove('active');
});

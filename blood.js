document.addEventListener("DOMContentLoaded", () => {
    const donateButton = document.querySelector('.donate-button');
    const bloodAvailableButton = document.querySelector('.blood-available-button');
    const bloodBankContainer = document.querySelector('.blood-bank-container');
    const bloodAvailabilityContainer = document.querySelector('.blood-availability-container');
    const donorDetailsContainer = document.querySelector('.donor-details-container');
    const confirmationContainer = document.querySelector('.confirmation-container');

    const backToMainFromBloodBanks = document.getElementById('back-to-main');
    const backToBloodBanksFromDonor = document.getElementById('back-to-blood-banks');
    const backToMainFromConfirmation = document.getElementById('back-to-main-confirmation');
    const backToMainFromAvailability = document.getElementById('back-to-main-availability');

    const bloodBankList = document.getElementById('blood-bank-list');
    const donorForm = document.getElementById('donor-form');
    const bloodAvailabilityList = document.getElementById('blood-availability-list');
    const bloodBankSearch = document.getElementById('blood-bank-search');

    // Event listeners for main buttons
    donateButton.addEventListener('click', () => {
        bloodBankContainer.style.display = 'block';
        document.querySelector('.button-container').style.display = 'none';
    });

    bloodAvailableButton.addEventListener('click', () => {
        bloodAvailabilityContainer.style.display = 'block';
        document.querySelector('.button-container').style.display = 'none';
    });

    // Event listeners for back buttons
    backToMainFromBloodBanks.addEventListener('click', () => {
        bloodBankContainer.style.display = 'none';
        document.querySelector('.button-container').style.display = 'flex';
    });

    backToBloodBanksFromDonor.addEventListener('click', () => {
        donorDetailsContainer.style.display = 'none';
        bloodBankContainer.style.display = 'block';
    });

    backToMainFromConfirmation.addEventListener('click', () => {
        confirmationContainer.style.display = 'none';
        document.querySelector('.button-container').style.display = 'flex';
    });

    backToMainFromAvailability.addEventListener('click', () => {
        bloodAvailabilityContainer.style.display = 'none';
        document.querySelector('.button-container').style.display = 'flex';
    });

    // Event listener for blood bank selection
    bloodBankList.addEventListener('click', (event) => {
        if (event.target.classList.contains('blood-bank')) {
            bloodBankContainer.style.display = 'none';
            donorDetailsContainer.style.display = 'block';
        }
    });

    // Donor form submission
    donorForm.addEventListener('submit', (event) => {
        event.preventDefault();
        donorDetailsContainer.style.display = 'none';
        confirmationContainer.style.display = 'block';
    });

    // Blood availability selection
    bloodAvailabilityList.addEventListener('click', (event) => {
        if (event.target.classList.contains('blood-group')) {
            alert(`Blood Group: ${event.target.dataset.group}\nUnits Available: ${event.target.dataset.units}\nLocation: ${event.target.dataset.location}`);
        }
    });

    // Blood bank search functionality
    bloodBankSearch.addEventListener('keyup', () => {
        const filter = bloodBankSearch.value.toLowerCase();
        const bloodBanks = bloodBankList.getElementsByClassName('blood-bank');

        for (let i = 0; i < bloodBanks.length; i++) {
            const bankName = bloodBanks[i].textContent.toLowerCase();
            if (bankName.includes(filter)) {
                bloodBanks[i].style.display = '';
            } else {
                bloodBanks[i].style.display = 'none';
            }
        }
    });
});

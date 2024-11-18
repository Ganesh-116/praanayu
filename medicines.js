const orderedMedicines = [
    { name: "Paracetamol", quantity: 2, dateOrdered: "2024-10-01" },
    { name: "Ibuprofen", quantity: 1, dateOrdered: "2024-09-20" },
];

const previousAppointments = [
    { date: "2024-10-05", doctor: "Dr. John Doe", department: "Cardiology" },
    { date: "2024-09-15", doctor: "Dr. Jane Smith", department: "Dermatology" },
];

function displayMedicines() {
    const medicinesList = document.getElementById("medicines-list");
    orderedMedicines.forEach(med => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <p class="bold">Medicine: ${med.name}</p>
            <p>Quantity: ${med.quantity}</p>
            <p>Date Ordered: ${med.dateOrdered}</p>
        `;
        medicinesList.appendChild(listItem);
    });
}
function displayAppointments() {
    const appointmentsList = document.getElementById("appointments-list");
    previousAppointments.forEach(app => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <p class="bold">Date: ${app.date}</p>
            <p>Doctor: ${app.doctor}</p>
            <p>Department: ${app.department}</p>
        `;
        appointmentsList.appendChild(listItem);
    });
}
displayMedicines();
displayAppointments();
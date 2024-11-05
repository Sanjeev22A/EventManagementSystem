document.addEventListener("DOMContentLoaded", function() {
    const serviceTypeSelect = document.getElementById("service-type");
    const numberOfAttendeesSelect = document.getElementById("number-of-attendees");
    const serviceDescription = document.getElementById("service-description");
    const priceDisplay = document.getElementById("calculated-price");

    const services = {
        basic: { pricePerPerson: 20, description: "Basic service includes essential features." },
        premium: { pricePerPerson: 50, description: "Premium service includes additional features." },
        luxury: { pricePerPerson: 100, description: "Luxury service includes all features and personal assistance." },
    };

    function updateServiceDetails() {
        const selectedService = serviceTypeSelect.value;
        const selectedAttendees = numberOfAttendeesSelect.value;

        if (selectedService) {
            const serviceInfo = services[selectedService];
            serviceDescription.textContent = serviceInfo.description;

            if (selectedAttendees) {
                const totalPrice = serviceInfo.pricePerPerson * selectedAttendees;
                priceDisplay.textContent = totalPrice.toFixed(2);
            }
        }
    }

    serviceTypeSelect.addEventListener("change", function() {
        updateServiceDetails();
    });

    numberOfAttendeesSelect.addEventListener("change", function() {
        updateServiceDetails();
    });
});

// EventBookingConfirmation.js

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve booking details from local storage
    const eventType = localStorage.getItem("eventType");
    const serviceName = localStorage.getItem("serviceName");
    const numAttendees = localStorage.getItem("numAttendees");
    const totalPrice = localStorage.getItem("totalPrice");

    // Display booking details in the confirmation page
    document.getElementById("event-type").textContent = eventType || "Not specified";
    document.getElementById("service-name").textContent = serviceName || "Not specified";
    document.getElementById("attendee-count").textContent = numAttendees || "0";
    document.getElementById("booking-price").textContent = totalPrice || "$0.00";

    // Redirect to the home page after a delay or provide a button to go back
    document.getElementById("redirect-home").addEventListener("click", function() {
        window.location.href = "/eventBookingHomePage"; // Change this to your actual home page URL
    });
});

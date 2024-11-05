// Select all "Book Now" buttons
document.querySelectorAll('.btn-book').forEach(button => {
    button.addEventListener('click', () => {
        // Get the event type from the button's data attribute
        const eventType = button.getAttribute('data-event-type');
        
        // Redirect to the booking page with the event type as a query parameter
        window.location.href = `bookingPage.html?event=${eventType}`;
    });
});

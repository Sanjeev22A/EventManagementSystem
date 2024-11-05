document.addEventListener("DOMContentLoaded", function() {
    const bookNowButton = document.getElementById("bookNow");
    bookNowButton.addEventListener("click", function() {
        window.location.href="registration.html";
        // Here you can add code to redirect to the booking page or open a modal.
    });

    const bookButtons = document.querySelectorAll('.btn-book');
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert("Event booked!");
            // Here you can add more functionality for booking an event.
        });
    });
});

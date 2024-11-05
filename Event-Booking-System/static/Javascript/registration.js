document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registrationForm = document.getElementById("registration-form");
    const switchToRegister = document.getElementById("switch-to-register");
    const switchToLogin = document.getElementById("switch-to-login");

    // Function to switch to registration form
    switchToRegister.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        loginForm.classList.remove("active");
        registrationForm.classList.add("active");
    });

    // Function to switch to login form
    switchToLogin.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        registrationForm.classList.remove("active");
        loginForm.classList.add("active");
    });
});

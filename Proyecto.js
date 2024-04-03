document.addEventListener("DOMContentLoaded", function() {
    var errorMessage = document.getElementById("errorMessage");
    var loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", function(event) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (email.trim() === "" || password.trim() === "") {
            errorMessage.innerText = "Por favor, completa todos los campos.";
            errorMessage.style.opacity = 1; // Mostrar el mensaje de error
            event.preventDefault(); // Evitar el envío del formulario
            setTimeout(function() {
                errorMessage.style.opacity = 0; os
            }, 3000);
        } else {
            errorMessage.innerText = ""; 
        }
    });
});
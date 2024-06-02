document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", validateForm);
});

function validateForm(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var contactMethodPhone = document.getElementById("contactMethodPhone").checked;
    var contactMethodEmail = document.getElementById("contactMethodEmail").checked;

    clearErrors();

    // Validation rules
    if (name.trim() === "") {
        showError("name", "Please enter your name");
        return;
    }

    if (name.trim().length < 4) {
        showError("name", "Name must have at least 4 words");
        return;
    }

    if (email.trim() === "") {
        showError("email", "Please enter your email");
        return;
    }

    if (!email.endsWith("@gmail.com") && !email.endsWith("@binus.ac.id")) {
        showError("email", "Invalid email format. Only @gmail.com and @binus.ac.id domains are allowed");
        return;
    }

    if (phone.trim() === "") {
        showError("phone", "Please enter your phone number");
        return;
    }

    if (message.trim() === "") {
        showError("message", "Please enter your message");
        return;
    }

    if (!contactMethodPhone && !contactMethodEmail) {
        showError("contactMethod", "Please select at least one preferred contact method");
        return;
    }

    // Form submission logic goes here
    // You can use the form data to send it to a server using AJAX or perform any other action

    alert("Form submitted successfully!");
}

function showError(field, errorMessage) {
    var errorDiv = document.getElementById(field + "Error");
    errorDiv.innerHTML = errorMessage;
}

function clearErrors() {
    var errors = document.getElementsByClassName("error");
    for (var i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }
}

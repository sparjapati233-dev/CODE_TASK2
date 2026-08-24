// =========================
// TECHPANDIT JAVASCRIPT
// =========================


// =========================
// LOGIN
// =========================

let loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let savedUser = JSON.parse(localStorage.getItem("techPanditUser"));

        if (!savedUser) {

            alert("No account found. Please sign up first.");

        } 
        else if (
            email === savedUser.email &&
            password === savedUser.password
        ) {

            alert("Login successful! Welcome to TechPandit.");

            window.location.href = "index.html";

        } 
        else {

            alert("Invalid email or password.");

        }

    });
}


// =========================
// SIGN UP
// =========================

let signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let fullName = document.getElementById("fullName").value;
        let email = document.getElementById("signupEmail").value;
        let password = document.getElementById("signupPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        // Check password
        if (password !== confirmPassword) {

            alert("Passwords do not match.");
            return;

        }

        // Create user object
        let user = {
            name: fullName,
            email: email,
            password: password
        };

        // Save user
        localStorage.setItem(
            "techPanditUser",
            JSON.stringify(user)
        );

        alert("Account created successfully!");

        window.location.href = "login.html";

    });
}


// =========================
// CONTACT FORM
// =========================

let contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for contacting TechPandit! We will get back to you soon.");

        contactForm.reset();

    });
}
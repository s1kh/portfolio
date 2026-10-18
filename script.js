const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});


// Contact Form Integration with Formspree

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formStatus.textContent = "Please fill in all fields.";
        return;
    }

    const formData = new FormData(contactForm);
    formStatus.textContent = "Sending message...";

    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            formStatus.textContent =
                "Thank you! Your message has been sent successfully.";

            contactForm.reset();
        } else {
            formStatus.textContent =
                "Oops! There was a problem submitting your form.";
        }
    } catch (error) {
        formStatus.textContent =
            "Oops! Network error. Please try again.";
    }
});
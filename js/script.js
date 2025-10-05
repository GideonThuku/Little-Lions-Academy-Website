// --- Mobile Navigation (Hamburger Menu) ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add click event listener to the hamburger menu
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation links container
    navLinks.classList.toggle('active');
});


// --- Contact Form Validation ---
// Check if the contactForm element exists on the current page to avoid errors
if (document.getElementById('contactForm')) {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    // Add submit event listener to the form
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from submitting the default way

        // Get values from the form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation to check if fields are empty
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            formStatus.textContent = 'Please fill out all fields.';
            formStatus.style.color = 'red';
            return; // Stop the function
        }

        // Validate the email format using a helper function
        if (!validateEmail(email)) {
            formStatus.textContent = 'Please enter a valid email address.';
            formStatus.style.color = 'red';
            return; // Stop the function
        }

        // If all validation passes, show a success message
        formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
        formStatus.style.color = 'green';

        // In a real-world scenario, you would send the data to a server here.
        // For this static site, we just clear the form after successful "submission".
        contactForm.reset(); 
    });
}

// Helper function to validate email using a regular expression
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
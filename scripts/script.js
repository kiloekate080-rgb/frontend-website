// scripts/script.js

// Function to validate form fields
function validateForm() {
    const form = document.getElementById('myForm');
    const email = form['email'].value;
    const password = form['password'].value;

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Check if password is empty
    if (password.trim() === '') {
        alert('Password cannot be empty.');
        return false;
    }

    return true; // Validation passed
}

// Event listener for form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Example of some interactivity
const toggleButton = document.getElementById('toggleButton');
const contentDiv = document.getElementById('content');

toggleButton.addEventListener('click', function() {
    contentDiv.classList.toggle('hidden'); // Toggle visibility of content
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Clear previous error and success messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    // Get field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate Name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate Email
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Email must contain "@".';
        isValid = false;
    }

    // Validate Message
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }

    // Show success or error messages
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Form submitted successfully!';
        // Optionally, clear the form fields after successful submission
        document.getElementById('contactForm').reset();
    }
});
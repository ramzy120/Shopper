// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {

    // Select the login form and inputs
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    
    // Handle form submission
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting immediately
  
      // Clear any previous error messages
      errorMessage.textContent = '';
  
      // Get the values of the email and password inputs
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Basic validation: Check if both fields are filled
      if (email === '' || password === '') {
        errorMessage.textContent = 'Please fill in both email and password.';
        errorMessage.style.color = 'red';
      } else {
        // Handle form submission (you can make an AJAX request to check credentials, for example)
        // For now, we'll just display a success message
        alert('Login successful!');
        // You can redirect to another page after successful login
        window.location.href = 'index.html'; // Change this to your actual dashboard page URL
      }
    });
  
  });
  
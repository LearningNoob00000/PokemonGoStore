// login.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Function to check if the entered email and password match any stored user data
    function verifyLogin(email, password) {
        // Retrieve user data string from localStorage
        const usersDataString = localStorage.getItem('usersData') || '';

        // Split the string into an array of user data
        const usersDataArray = usersDataString.split(';');

        // Find a user whose email and password match the entered ones
        return usersDataArray.some(userData => {
            const [storedEmail, storedPassword] = userData.split(',');
            return email === storedEmail && password === storedPassword;
        });
    }

    // Event listener for form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get the entered email and password
        const email = emailInput.value;
        const password = passwordInput.value;

        // Verify the login credentials
        if (verifyLogin(email, password)) {
            // Redirect user to index.html if login is successful
            localStorage.setItem('CurrentLogin', email);
            alert('Login successful!');
            window.location.href = 'index.html';
        } else {
            // Display error message if login fails
            alert('Invalid email or password. Please try again.');
        }
    });
});
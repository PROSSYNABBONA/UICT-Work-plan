document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation for demonstration purposes
        if (username === 'admin' && password === 'password') {
            // Redirect to the dashboard page upon successful login
            window.location.href = 'staff-registration.html';
        } else {
            // Show error message
            errorMessage.classList.remove('hidden');
        }
    });
});

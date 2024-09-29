// Signup function
function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
 
    if (username && password) {
        // Store credentials in localStorage
        localStorage.setItem('user', JSON.stringify({ username, password }));
        localStorage.setItem('loggedInUser', username);
        alert('Signup successful! Redirecting to Access Beta.');
        window.location.href = 'access-beta.html';
    } else {
        alert('Please enter both username and password.');
    }
}
 
// Login function
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
 
    const storedUser = JSON.parse(localStorage.getItem('user'));
 
    if (storedUser && username === storedUser.username && password === storedUser.password) {
        localStorage.setItem('loggedInUser', username);
        alert('Login successful! Redirecting to Access Beta.');
        window.location.href = 'access-beta.html';
    } else {
        alert('Invalid username or password.');
    }
}
 
// Show login popup
function showLoginPopup() {
    document.getElementById('popup-bg').style.display = 'block';
    document.getElementById('login-popup').style.display = 'block';
}
 
// Close login popup
function closeLoginPopup() {
    document.getElementById('popup-bg').style.display = 'none';
    document.getElementById('login-popup').style.display = 'none';
}

// Signup function
function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    alert('This site is no longer used.');
    alert('NilError: Cannot find A5 Engine.');
 
    if (username && password) {
        // Store credentials in localStorage
        localStorage.setItem('user', JSON.stringify({ username, password }));
        localStorage.setItem('loggedInUser', username);
        alert('This site is no longer used. Redirecting to Home Page.');
        window.location.href = 'index.html';
    } else {
        alert('NilError: Cannot Find: "_a5.login; user }; engine no longer exists!');
    }
}
 
// Login function
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
 
    const storedUser = JSON.parse(localStorage.getItem('user'));
 
    if (storedUser && username === storedUser.username && password === storedUser.password) {
        localStorage.setItem('loggedInUser', username);
        alert('This site is no longer used. Redirecting to Home Page.');
        window.location.href = 'index.html';
    } else {
        alert('Cannot find A5 Engine or it does not exist.');
        alert('NilError: api-v2 is unaccessable.');
        alert('Outdated! A5 Engine no longer exists, the new site now uses the A9 Engine.');
        alert('RefError: Expected at "_a5.token=EngineToken__ engine.a5 *cannot-be-found*"');
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

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark');
}
 
// Function to check if the input is a URL or a search query and redirect accordingly
function searchOrOpen() {
    const searchInput = document.getElementById('search-bar').value.trim();
    const searchResults = document.getElementById('search-results');
 
    if (!searchInput) {
        alert('Please enter a search query or URL.');
        return;
    }
 
    // Clear previous results
    searchResults.innerHTML = '';
 
    // If input contains a URL-like structure, open in a new tab
    if (searchInput.includes('.') && !searchInput.includes(' ')) {
        // Check if it already starts with 'http' or 'https'
        let formattedUrl = searchInput.startsWith('http') ? searchInput : 'https://' + searchInput;
        window.open(formattedUrl, '_blank');
    } else {
        // Simulate a Google search (Redirect to a real Google search)
        let searchQuery = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
        window.open(searchQuery, '_blank');
    }
}
 
// Bookmarks: Save to LocalStorage
function addBookmark() {
    const searchInput = document.getElementById('search-bar').value.trim();
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
 
    if (!searchInput) {
        alert('Please enter a URL or search term to bookmark.');
        return;
    }
 
    // Add new bookmark to array
    bookmarks.push(searchInput);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
 
    // Update bookmark display
    displayBookmarks();
}
 
// Function to display saved bookmarks
function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const bookmarksDiv = document.getElementById('bookmarks');
 
    bookmarksDiv.innerHTML = ''; // Clear the current list
 
    if (bookmarks.length === 0) {
        bookmarksDiv.innerHTML = '<p>No bookmarks saved.</p>';
    } else {
        bookmarks.forEach((bookmark, index) => {
            let bookmarkElement = document.createElement('div');
            bookmarkElement.innerHTML = `<a href="${bookmark}" target="_blank">${bookmark}</a> <button onclick="removeBookmark(${index})">Remove</button>`;
            bookmarksDiv.appendChild(bookmarkElement);
        });
    }
}
 
// Remove bookmark
function removeBookmark(index) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.splice(index, 1); // Remove the bookmark at the specified index
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    displayBookmarks(); // Update display after removal
}
 
// Function for popups (e.g., Beta Button and YouTube Button)
function showPopup(message, callback) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <p>${message}</p>
            <button class="popup-ok">OK</button>
        </div>
    `;
    document.body.appendChild(popup);
 
    // Add event listener to remove popup on OK button click
    popup.querySelector('.popup-ok').addEventListener('click', () => {
        document.body.removeChild(popup);
        if (callback) callback(); // Trigger callback if provided
    });
 
    // Animation to fade in the popup from the center
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);
}
 
// Function for the Beta button with a fake loading screen
function betaButtonClicked() {
    showPopup('You cannot access this page.', () => {
        // After popup is dismissed, show a fake loading screen
        showFakeLoadingScreen();
    });
}
 
// Fake loading screen function
function showFakeLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <p>Loading Assets...</p>
        </div>
    `;
    document.body.appendChild(loadingScreen);
 
    // Remove loading screen after 7 seconds
    setTimeout(() => {
        document.body.removeChild(loadingScreen);
    }, 7000);
}
 
// Set up event listeners on page load
document.addEventListener('DOMContentLoaded', () => {
    displayBookmarks(); // Display any saved bookmarks
 
    // Event listener for Beta Button
    document.getElementById('beta-button').addEventListener('click', betaButtonClicked);
 
    // Event listener for YouTube Button (with a popup)
    document.getElementById('youtube-button').addEventListener('click', () => {
        showPopup('This option is currently patched.');
    });
 
    // Event listener for the Search Bar
    document.getElementById('go-button').addEventListener('click', searchOrOpen);
});

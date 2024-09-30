// A3X Engine -- 2024
// v2024.9f

// A4X Coming Soon!

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');
    const homeButton = document.getElementById('home-button');
    const generalButton = document.getElementById('general-button');
    const darkModeToggle = document.getElementById('darkmode-toggle');
    const mainContent = document.getElementById('main-content');
    let darkMode = false;
 
    // Redirect to Home page
    homeButton.addEventListener('click', () => {
        window.location.href = 'https://unblockedv2.vercel.app/'; // Change this to the correct homepage URL
    });
 
    // Handle Search and URL input (now with Enter key support)
    searchBar.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchHandler();
        }
    });
 
    searchButton.addEventListener('click', () => {
        searchHandler();
    });
 
    function searchHandler() {
        const input = searchBar.value.trim();
        if (!input) {
            displaySearchError();
            return;
        }
 
        if (input.includes('.') && !input.includes(' ')) {
            const url = input.startsWith('http') ? input : 'https://' + input;
            window.open(url, '_blank');
        } else {
            const query = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
            window.open(query, '_blank');
        }
    }
 
    function displaySearchError() {
        searchBar.classList.add('error');
        searchBar.placeholder = 'You must enter a search query or URL';
        searchBar.style.color = 'red'; // Temporarily set the text color to red
        setTimeout(() => {
            searchBar.classList.remove('error');
            searchBar.placeholder = 'Search or enter a URL';
            searchBar.style.color = ''; // Reset the color back to default after error
        }, 4000);
    }
 
    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
    });
 
    // Display General button UI with animation
    generalButton.addEventListener('click', () => {
        mainContent.innerHTML = `
            <div class="popup general-popup">
                <div class="exit-button" id="exit-button">x</div>
                <button id="about-button">About</button>
                <button id="software-button">Software Update</button>
                <button id="developer-button">Developer</button>
            </div>
        `;
 
        const popup = document.querySelector('.general-popup');
        popup.style.opacity = '0'; // Start invisible
        popup.style.transform = 'scale(0.5)'; // Start small
        setTimeout(() => {
            popup.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            popup.style.opacity = '1'; // Fade in
            popup.style.transform = 'scale(1)'; // Scale to full size
        }, 0);
 
        document.getElementById('exit-button').addEventListener('click', () => {
            popup.style.opacity = '0'; // Fade out
            popup.style.transform = 'scale(0.5)'; // Shrink when closing
            setTimeout(() => {
                mainContent.innerHTML = ''; // Clear the popup content on exit after animation ends
            }, 500);
        });
 
        // About Button
        document.getElementById('about-button').addEventListener('click', () => {
            mainContent.innerHTML = `
                <div class="popup general-popup active">
                    <h3>About</h3>
                    <table>
                        <tr><td>Engine Version:</td><td>A3X</td></tr>
                        <tr><td>Trust Mobile Version:</td><td>1.2402994</td></tr>
                        <tr><td>Trust Computer Version:</td><td>1.2485738</td></tr>
                        <tr><td>NodeJS Version:</td><td>13.2.0</td></tr>
                        <tr><td>HTML:</td><td>5.0</td></tr>
                        <tr><td>XCode Version:</td><td>14.9.1</td></tr>
                        <tr><td>CEF:</td><td>6.3.2</td></tr>
                    </table>
                    <button class="back-button" id="back-button">Back</button>
                </div>
            `;
            backButtonHandler();
        });
 
        // Software Update Button
        document.getElementById('software-button').addEventListener('click', () => {
            mainContent.innerHTML = `
                <div class="popup general-popup active">
                    <h2>Software Update</h2>
                    <h4>A3X</h4>
                    <p>The engine is up to date.</p>
                    <button class="back-button" id="back-button">Back</button>
                </div>
            `;
            backButtonHandler();
        });
 
        // Developer Button
        document.getElementById('developer-button').addEventListener('click', () => {
            mainContent.innerHTML = `
                <div class="popup general-popup active">
                    <h3>Developer</h3>
                    <p>You are not a developer nor eligiable to become a developer.</p>
                    <p>The insider program will open soon.</p>
                    <button class="back-button" id="back-button">Back</button>
                </div>
            `;
            backButtonHandler();
        });
    });
 
    function backButtonHandler() {
        document.getElementById('back-button').addEventListener('click', () => {
            generalButton.click(); // Navigate back to the General menu
        });
    }
});

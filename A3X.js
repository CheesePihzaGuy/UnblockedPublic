// A3X Engine -- 2024

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
        window.location.href = 'https://your-homepage-url.com'; // Change this to the correct homepage URL
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
        openGeneralMenu();
    });

    function openGeneralMenu() {
        mainContent.innerHTML = `
            <div class="popup general-popup active">
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

        addGeneralMenuEventListeners();
    }

    function addGeneralMenuEventListeners() {
        document.getElementById('exit-button').addEventListener('click', () => {
            closePopup();
        });

        document.getElementById('about-button').addEventListener('click', () => {
            openAboutMenu();
        });

        document.getElementById('software-button').addEventListener('click', () => {
            openSoftwareUpdateMenu();
        });

        document.getElementById('developer-button').addEventListener('click', () => {
            openDeveloperMenu();
        });
    }

    function closePopup() {
        const popup = document.querySelector('.general-popup');
        popup.style.opacity = '0'; // Fade out
        popup.style.transform = 'scale(0.5)'; // Shrink when closing
        setTimeout(() => {
            mainContent.innerHTML = ''; // Clear the popup content on exit after animation ends
        }, 500);
    }

    function openAboutMenu() {
        mainContent.innerHTML = `
            <div class="popup general-popup active">
                <h3>About</h3>
                <table>
                    <tr><td>Engine Version:</td><td>A3X</td></tr>
                    <tr><td>Trust Mobile Version:</td><td>1.0</td></tr>
                    <tr><td>Trust Computer Version:</td><td>1.2</td></tr>
                    <tr><td>NodeJS Version:</td><td>16.13.0</td></tr>
                </table>
                <button class="back-button" id="back-button">Back</button>
            </div>
        `;
        addBackButtonHandler();
    }

    function openSoftwareUpdateMenu() {
        mainContent.innerHTML = `
            <div class="popup general-popup active">
                <h3>Software Update</h3>
                <p>Your software is up to date.</p>
                <button class="back-button" id="back-button">Back</button>
            </div>
        `;
        addBackButtonHandler();
    }

    function openDeveloperMenu() {
        mainContent.innerHTML = `
            <div class="popup general-popup active">
                <h3>Developer</h3>
                <p>Coming soon...</p>
                <button class="back-button" id="back-button">Back</button>
            </div>
        `;
        addBackButtonHandler();
    }

    function addBackButtonHandler() {
        document.getElementById('back-button').addEventListener('click', () => {
            openGeneralMenu(); // Navigate back to the General menu
        });
    }
});

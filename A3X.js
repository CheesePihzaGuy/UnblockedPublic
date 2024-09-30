// A3X Engine — 2024
 
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');
    const homeButton = document.getElementById('home-button');
    const generalButton = document.getElementById('general-button');
    const mainContent = document.getElementById('main-content');
 
    // Redirect to Home page
    homeButton.addEventListener('click', () => {
        window.location.href = 'https://your-homepage-url.com'; // Change this to the correct homepage URL
    });
 
    // Handle Search and URL input
    searchButton.addEventListener('click', () => {
        const input = searchBar.value.trim();
        if (!input) return alert('Please enter a search query or URL.');
 
        if (input.includes('.') && !input.includes(' ')) {
            const url = input.startsWith('http') ? input : 'https://' + input;
            window.open(url, '_blank');
        } else {
            const query = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
            window.open(query, '_blank');
        }
    });
 
    // Display General button UI
    generalButton.addEventListener('click', () => {
        mainContent.innerHTML = `
            <div class="popup active">
                <button id="about-button">About</button>
                <button id="software-button">Software Update</button>
                <button id="developer-button">Developer</button>
            </div>
        `;
 
        // About Button
        document.getElementById('about-button').addEventListener('click', () => {
            mainContent.innerHTML = `
                <div class="popup active">
                    <h3>About</h3>
                    <table>
                        <tr><td>Engine Version:</td><td>A3X</td></tr>
                        <tr><td>Trust Mobile Version:</td><td>1.0</td></tr>
                        <tr><td>Trust Computer Version:</td><td>1.2</td></tr>
                        <tr><td>NodeJS Version:</td><td>16.13</td></tr>
                        <tr><td>HTML Version:</td><td>5.0</td></tr>
                        <tr><td>Main Version:</td><td>2024.9</td></tr>
                    </table>
                    <button class="back-button">Back</button>
                </div>
            `;
 
            setupBackButton();
        });
 
        // Software Update Button
        document.getElementById('software-button').addEventListener('click', () => {
            mainContent.innerHTML = `
                <div class="popup active">
                    <h3>A3X</h3>
                    <p style="font-size: small;">You are up to date</p>
                    <button class="back-button">Back</button>
                </div>
            `;
 
            setupBackButton();
        });
 
        // Developer Button
        document.getElementById('developer-button').addEventListener('click', () => {
            mainContent.innerHTML = `
                <div class="popup active">
                    <p>You are not a developer nor eligible to become one.</p>
                    <p>Insider Program will open soon.</p>
                    <button class="back-button">Back</button>
                </div>
            `;
 
            setupBackButton();
        });
    });
 
    function setupBackButton() {
        document.querySelector('.back-button').addEventListener('click', () => {
            mainContent.innerHTML = `
                <div class="popup active">
                    <button id="about-button">About</button>
                    <button id="software-button">Software Update</button>
                    <button id="developer-button">Developer</button>
                </div>
            `;
        });
    }
});

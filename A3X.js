// Add event listeners for General Menu buttons
document.addEventListener('DOMContentLoaded', function () {
    const generalMenu = document.querySelector('.popup-box');
    const homeButton = document.getElementById('homeButton');
    const aboutButton = document.getElementById('aboutBtn');
    const softwareButton = document.getElementById('softwareBtn');
    const developerButton = document.getElementById('developerBtn');
    const exitButton = document.querySelector('.close');
    const exitGeneralMenuButton = document.querySelector('.exit-button');

    const searchBar = document.querySelector('.search-bar');
    const goButton = document.querySelector('.go-button');

    const popupContent = document.getElementById('popupContent');
    
    // Example Home URL - change it to your preferred homepage URL
    const homeURL = "https://unblockedv2.vercel.app"; 

    // Home Button functionality
    homeButton.addEventListener('click', function () {
        window.location.href = homeURL;
    });

    // About Button
    aboutButton.addEventListener('click', function () {
        popupContent.innerHTML = `
            <h3>About</h3>
            <table>
                <tr><td>Engine Version:</td><td>A3X</td></tr>
                <tr><td>Trust Mobile Version:</td><td>16</td></tr>
                <tr><td>Trust Computer Version:</td><td>22</td></tr>
                <tr><td>NodeJS Version:</td><td>8.0</td></tr>
                <tr><td>HTML Version:</td><td>5.0</td></tr>
                <tr><td>Proxy:</td><td>Unreleased</td></tr>
                <tr><td>Main Version:</td><td>2024.9f</td></tr>
            </table>
        `;
        generalMenu.style.display = 'block';
    });

    // Software Update Button
    softwareButton.addEventListener('click', function () {
        popupContent.innerHTML = `
            <h2>Software Update</h2>
            <h4>A3X</h4>
            <p style="font-size: small;">Software is up to date.</p>
        `;
        generalMenu.style.display = 'block';
    });

    // Developer Button
    developerButton.addEventListener('click', function () {
        popupContent.innerHTML = `
            <h3>Developer</h3>
            <p>You are not a developer nor eligible to become one.</p>
            <p>Insider Program will open soon.</p>
        `;
        generalMenu.style.display = 'block';
    });

    // Exit Button for Popups
    exitButton.addEventListener('click', function () {
        generalMenu.style.display = 'none';
    });

    exitGeneralMenuButton.addEventListener('click', function () {
        generalMenu.style.display = 'none';
    });

    // Search functionality
    goButton.addEventListener('click', function () {
        performSearch();
    });

    searchBar.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Function to perform search
    function performSearch() {
        const query = searchBar.value.trim();
        if (query) {
            window.location.href = `https://www.google.com/search?q=${query}`;
        } else {
            searchBar.value = '';
            searchBar.setAttribute('placeholder', 'You must enter a search query or URL');
            searchBar.style.color = 'red';
            setTimeout(() => {
                searchBar.setAttribute('placeholder', 'Search or enter URL');
                searchBar.style.color = '';
            }, 4000);
        }
    }
});

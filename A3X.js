// A3X Engine -- 2024
document.addEventListener('DOMContentLoaded', () => {
    // Main UI elements
    const searchBar = document.getElementById('searchBar');
    const goBtn = document.getElementById('goBtn');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.getElementById('body');

    // General Menu elements
    const generalBtn = document.getElementById('generalBtn');
    const generalMenu = document.getElementById('generalMenu');
    const closeGeneralMenu = document.getElementById('closeGeneralMenu');

    // Modals
    const aboutBtn = document.getElementById('aboutBtn');
    const aboutModal = document.getElementById('aboutModal');
    const closeAboutModal = document.getElementById('closeAboutModal');
    const softwareUpdateBtn = document.getElementById('softwareUpdateBtn');
    const softwareUpdateModal = document.getElementById('softwareUpdateModal');
    const closeSoftwareUpdateModal = document.getElementById('closeSoftwareUpdateModal');
    const developerBtn = document.getElementById('developerBtn');
    const developerModal = document.getElementById('developerModal');
    const closeDeveloperModal = document.getElementById('closeDeveloperModal');
    const exitGeneralBtn = document.getElementById('exitGeneralBtn');

    // Dark Mode toggle
    darkModeToggle.onclick = () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            darkModeToggle.textContent = 'Dark Mode';
        } else {
            body.classList.add('dark-mode');
            darkModeToggle.textContent = 'Light Mode';
        }
    };

    // Show General Menu
    generalBtn.onclick = () => {
        generalMenu.classList.remove('hidden');
    };

    // Close General Menu
    closeGeneralMenu.onclick = () => {
        generalMenu.classList.add('hidden');
    };

    // About Button & Modal
    aboutBtn.onclick = () => {
        generalMenu.classList.add('hidden');
        aboutModal.classList.remove('hidden');
    };
    closeAboutModal.onclick = () => {
        aboutModal.classList.add('hidden');
        generalMenu.classList.remove('hidden');
    };

    // Software Update Button & Modal
    softwareUpdateBtn.onclick = () => {
        generalMenu.classList.add('hidden');
        softwareUpdateModal.classList.remove('hidden');
    };
    closeSoftwareUpdateModal.onclick = () => {
        softwareUpdateModal.classList.add('hidden');
        generalMenu.classList.remove('hidden');
    };

    // Developer Button & Modal
    developerBtn.onclick = () => {
        generalMenu.classList.add('hidden');
        developerModal.classList.remove('hidden');
    };
    closeDeveloperModal.onclick = () => {
        developerModal.classList.add('hidden');
        generalMenu.classList.remove('hidden');
    };

    // Exit General Menu
    exitGeneralBtn.onclick = () => {
        generalMenu.classList.add('hidden');
    };

    // Handle Search with Go button or Enter key
    function handleSearch() {
        const query = searchBar.value.trim();
        if (!query) {
            searchBar.value = 'You must enter a search query or URL';
            searchBar.style.color = 'red';
            setTimeout(() => {
                searchBar.value = '';
                searchBar.style.color = '';
            }, 4000);
            return;
        }

        const url = query.includes('http://') || query.includes('https://') ? query : `https://${query}`;
        window.open(url, '_blank');
    }

    goBtn.onclick = handleSearch;
    searchBar.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });
});

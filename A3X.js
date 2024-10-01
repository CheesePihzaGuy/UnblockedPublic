// A3X Engine -- 2024

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const goBtn = document.getElementById('goBtn');
    const resultsContainer = document.getElementById('resultsContainer');
    
    const generalBtn = document.getElementById('generalBtn');
    const generalMenu = document.getElementById('generalMenu');
    const closeGeneralMenu = document.getElementById('closeGeneralMenu');
    
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
    
    // Show general menu
    generalBtn.onclick = () => {
        generalMenu.classList.remove('hidden');
    };

    // Close general menu
    closeGeneralMenu.onclick = () => {
        generalMenu.classList.add('hidden');
    };
    
    // Show About modal
    aboutBtn.onclick = () => {
        generalMenu.classList.add('hidden');
        aboutModal.classList.remove('hidden');
    };

    // Show Software Update modal
    softwareUpdateBtn.onclick = () => {
        generalMenu.classList.add('hidden');
        softwareUpdateModal.classList.remove('hidden');
    };

    // Show Developer modal
    developerBtn.onclick = () => {
        generalMenu.classList.add('hidden');
        developerModal.classList.remove('hidden');
    };

    // Close About modal
    closeAboutModal.onclick = () => {
        aboutModal.classList.add('hidden');
        generalMenu.classList.remove('hidden');
    };

    // Close Software Update modal
    closeSoftwareUpdateModal.onclick = () => {
        softwareUpdateModal.classList.add('hidden');
        generalMenu.classList.remove('hidden');
    };

    // Close Developer modal
    closeDeveloperModal.onclick = () => {
        developerModal.classList.add('hidden');
        generalMenu.classList.remove('hidden');
    };

    // Exit from the General Menu
    exitGeneralBtn.onclick = () => {
        generalMenu.classList.add('hidden');
    };

    // Handle search
    goBtn.onclick = handleSearch;
    searchBar.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    function handleSearch() {
        const query = searchBar.value.trim();
        if (!query) {
            searchBar.value = "You must enter a search query or URL";
            searchBar.style.color = "red";
            setTimeout(() => {
                searchBar.value = '';
                searchBar.style.color = '';
            }, 4000);
            return;
        }

        const url = query.includes('http://') || query.includes('https://') ? query : `https://${query}`;
        window.open(url, '_blank');
    }
});

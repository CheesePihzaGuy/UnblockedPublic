// DOM Elements
const generalBtn = document.getElementById('generalBtn');
const generalMenu = document.getElementById('generalMenu');
const closeBtn = document.querySelector('.close-btn');
const exitBtn = document.querySelector('.exit-btn');
const aboutBtn = document.getElementById('aboutBtn');
const softwareBtn = document.getElementById('softwareBtn');
const devBtn = document.getElementById('devBtn');
const aboutContent = document.getElementById('aboutContent');
const softwareContent = document.getElementById('softwareContent');
const developerContent = document.getElementById('developerContent');
const backBtns = document.querySelectorAll('.back-btn');
const homeBtn = document.getElementById('homeBtn');

// Ensure General Menu is hidden by default
window.addEventListener('DOMContentLoaded', () => {
    generalMenu.classList.add('hidden');
});

// Event Listeners
generalBtn.addEventListener('click', () => {
    generalMenu.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    generalMenu.classList.add('hidden');
});

exitBtn.addEventListener('click', () => {
    generalMenu.classList.add('hidden');
});

aboutBtn.addEventListener('click', () => {
    generalMenu.classList.add('hidden');
    aboutContent.classList.remove('hidden');
});

softwareBtn.addEventListener('click', () => {
    generalMenu.classList.add('hidden');
    softwareContent.classList.remove('hidden');
});

devBtn.addEventListener('click', () => {
    generalMenu.classList.add('hidden');
    developerContent.classList.remove('hidden');
});

// Back button functionality for popups
backBtns.forEach(backBtn => {
    backBtn.addEventListener('click', () => {
        aboutContent.classList.add('hidden');
        softwareContent.classList.add('hidden');
        developerContent.classList.add('hidden');
        generalMenu.classList.remove('hidden');
    });
});

// Home button functionality
homeBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

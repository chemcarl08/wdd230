function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
}

function updateLastModified() {
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;
}

const menuToggle = document.querySelector('#menuToggle');
const menuLinks = document.querySelector('#menuLinks');

menuToggle.addEventListener('click', function () {
    menuLinks.classList.toggle('active');
    menuToggle.textContent = menuLinks.classList.contains('active') ? '✖' : '≡';
});

// Dark mode toggle functionality using querySelector
const darkModeToggle = document.querySelector('#darkModeToggle');
const body = document.querySelector('body');

darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});
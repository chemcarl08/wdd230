function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
}

function updateLastModified() {
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('#menuToggle');
    const menuLinks = document.querySelector('#menuLinks');

    console.log(menuToggle);

    menuToggle.addEventListener('click', function () {
        console.log('Menu toggle clicked');
        menuLinks.classList.toggle('active');
        menuToggle.textContent = menuLinks.classList.contains('active') ? '✖' : '≡';
    });

    const darkModeToggle = document.querySelector('#darkModeToggle');
    const body = document.querySelector('body');

    console.log(darkModeToggle);

    darkModeToggle.addEventListener('click', function () {
        console.log('Dark mode toggle clicked');
        body.classList.toggle('dark-mode');
    });
});
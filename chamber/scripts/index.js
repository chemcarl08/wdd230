document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
    const menuToggle = document.querySelector('#menuToggle');
    const menuLinks = document.querySelector('#menuLinks');

    console.log(menuToggle);

    menuToggle.addEventListener('click', function () {
        console.log('Menu toggle clicked');
        menuLinks.classList.toggle('active');
        menuToggle.textContent = menuLinks.classList.contains('active') ? '✖' : '≡';
    });
    const visitMessage = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = new Date().getTime();

    if (lastVisit) {
        const diff = currentVisit - lastVisit;
        const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            visitMessage.textContent = 'Back so soon! Awesome!';
        } else if (diffDays === 1) {
            visitMessage.textContent = 'You last visited 1 day ago.';
        } else {
            visitMessage.textContent = `You last visited ${diffDays} days ago.`;
        }
    } else {
        visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
    }

    localStorage.setItem('lastVisit', currentVisit);
});
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

document.addEventListener('DOMContentLoaded', function () {
    const timestamp = new Date().toISOString();
    document.getElementById('timestamp').value = timestamp;
});

document.addEventListener('DOMContentLoaded', () => {
    const directory = document.getElementById('directory');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data, 'grid');

            gridViewButton.addEventListener('click', () => displayMembers(data, 'grid'));
            listViewButton.addEventListener('click', () => displayMembers(data, 'list'));
        });

    function displayMembers(members, view) {
        directory.innerHTML = '';
        directory.classList.toggle('grid', view === 'grid');
        directory.classList.toggle('list', view === 'list');

        members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('member');

            if (view === 'list') {
                memberElement.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name} Logo">
                    <div class="member-info">
                        <h3>${member.name}</h3>
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <a href="${member.website}" target="_blank">${member.website}</a>
                    </div>
                `;
            } else {
                memberElement.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name} Logo">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">${member.website}</a>
                `;
            }

            directory.appendChild(memberElement);
        });
    }
});
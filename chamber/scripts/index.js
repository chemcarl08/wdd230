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
    // meet banner
    const today = new Date().getDay();
    const banner = document.getElementById('meet-greet-banner');
    if (today >= 1 && today <= 3) { // 1 = Monday, 2 = Tuesday, 3 = Wednesday
        banner.style.display = 'block';
    }

    document.getElementById('close-banner').addEventListener('click', function () {
        banner.style.display = 'none';
    });

    // Fetch weather data
    const apiKey = 'd5cc5fb817ebb1044e5b548ee9d3eb69'; // Replace 'YOUR_API_KEY' with your actual API key
    const city = 'Saskatoon,CA';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const weatherContainer = document.getElementById('weather');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            weatherContainer.innerHTML = `<p>Current Temperature: ${temperature}°C</p><p>Weather: ${description}</p>`;
        });

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecastContainer = document.getElementById('forecast');
            let forecastHtml = '<h3>3-Day Forecast:</h3>';
            const forecastData = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);
            forecastData.forEach(item => {
                const date = new Date(item.dt * 1000).toLocaleDateString();
                const temp = item.main.temp;
                forecastHtml += `<p>${date}: ${temp}°C</p>`;
            });
            forecastContainer.innerHTML = forecastHtml;
        });

    // Spotlight members
    const spotlightContainer = document.getElementById('spotlight');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const silverGoldMembers = data.filter(member => member.membership === 'silver' || member.membership === 'gold');
            const selectedMembers = silverGoldMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

            let spotlightHtml = '<h2>Member Spotlight</h2>';
            selectedMembers.forEach(member => {
                spotlightHtml += `
                    <div class="spotlight-member">
                        <img src="images/${member.image}" alt="${member.name} Logo">
                        <h3>${member.name}</h3>
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <a href="${member.website}" target="_blank">${member.website}</a>
                    </div>
                `;
            });
            spotlightContainer.innerHTML = spotlightHtml;
        });
});


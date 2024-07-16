document.addEventListener('DOMContentLoaded', function () {
    // Set the current year
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Set the last modified date
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

    // Menu toggle
    const menuToggle = document.querySelector('#menuToggle');
    const menuLinks = document.querySelector('#menuLinks');

    console.log(menuToggle);

    menuToggle.addEventListener('click', function () {
        console.log('Menu toggle clicked');
        menuLinks.classList.toggle('active');
        menuToggle.textContent = menuLinks.classList.contains('active') ? '✖' : '≡';
    });

    // Dark mode toggle
    const darkModeToggle = document.querySelector('#darkModeToggle');
    const body = document.querySelector('body');

    console.log(darkModeToggle);

    darkModeToggle.addEventListener('click', function () {
        console.log('Dark mode toggle clicked');
        body.classList.toggle('dark-mode');
    });

    // Function to check if passwords match
    function checkPasswords() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;
        const passwordError = document.getElementById('passwordError');

        if (password !== confirmPassword) {
            passwordError.textContent = 'Passwords do not match.';
        } else {
            passwordError.textContent = '';
        }
    }

    document.getElementById('password').addEventListener('input', checkPasswords);
    document.getElementById('confirm_password').addEventListener('input', checkPasswords);

    document.getElementById('userForm').addEventListener('submit', function (event) {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            document.getElementById('password').value = '';
            document.getElementById('confirm_password').value = '';
            document.getElementById('password').focus();
            event.preventDefault();
        }
    });
});
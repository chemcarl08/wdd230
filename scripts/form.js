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

    const darkModeToggle = document.querySelector('#darkModeToggle');
    const body = document.querySelector('body');

    console.log(darkModeToggle);

    darkModeToggle.addEventListener('click', function () {
        console.log('Dark mode toggle clicked');
        body.classList.toggle('dark-mode');
    });

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
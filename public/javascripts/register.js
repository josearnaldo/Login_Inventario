// register.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="number"], input[type="password"]');

    form.addEventListener('submit', function (event) {
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Por favor, preencha todos os campos.');
        }
    });
});

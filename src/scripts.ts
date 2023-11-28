import $ from 'jquery';
import sum from './utils/sum/sum';
import { validateName } from './utils/sum/nameValidator/validateName';
import { validateEmail } from './utils/sum/emailValidator/validateEmail';
import { validatePassword } from './utils/sum/passwordValidator/validatePassword';
import { alertMessage } from './utils/sum/alertValidator/alert';
import { invalidAlert } from './utils/sum/invalidAlertValidator/invalidAlert';

// console.log('Ready for coding');

// console.log('Body jQuery node:', $('body'));
// console.log('Body javascript node:', document.querySelector('body'));
// console.log('2 + 3 =', sum(2, 3));


$('.form-container').html(`
    <form class="js-form">
        <label for="name">Name:</label>
        <br>
        <input type="text" name="name" class="name-input" required>
        <br>
        <br>
        <label for="email">E-mail:</label>
        <br>
        <input type="text" name="email" class="email-input" required>
        <br>
        <br>
        <label for="password">Password:</label>
        <br>
        <input type="text" name="password" class="password-input" required>
        <br>
        <br>
        <button class="submit-button">Submit</button>
    </form>
`);

$('.js-form').on('submit', (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('.name-input');
    const nameAttribute = nameInput.getAttribute('name');

    const emailInput = document.querySelector('.email-input');
    const emailAttribute = emailInput.getAttribute('name');


    const passwordInput = document.querySelector('.password-input');
    const passwordAttribute = passwordInput.getAttribute('name');


    const name = $('.name-input').val() as string;
    const email = $('.email-input').val() as string;
    const password = $('.password-input').val() as string;

    const isValidName = validateName(name);
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (isValidName && isValidEmail && isValidPassword) {
        alertMessage();
    } else if (!isValidName) {
        invalidAlert(name, nameAttribute);
    } else if (!isValidEmail) {
        invalidAlert(email, emailAttribute);
    } else if (!isValidPassword) {
        invalidAlert(password, passwordAttribute);
    }

    $('.name-input').val('');
    $('.email-input').val('');
    $('.password-input').val('');
});








// const fields = [
//     { input: '.name-input', validator: validateName, label: 'Name' },
//     { input: '.email-input', validator: validateEmail, label: 'Email' },
//     { input: '.password-input', validator: validatePassword, label: 'Password' }
// ];
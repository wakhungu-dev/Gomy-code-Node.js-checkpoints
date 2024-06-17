const generatePassword = require('generate-password');
const password = generatePassword.generate({
    length: 10,
    Numbers: true});
console.log(password);
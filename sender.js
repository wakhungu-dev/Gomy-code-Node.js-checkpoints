const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
// transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});
// mailOptions object
const mailOptions = {
    from: 'wakhungu22newton@gmail.com',
    to: 'newtonwakhungu5@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy sending email using node.js application!'
};
// sendMail method
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
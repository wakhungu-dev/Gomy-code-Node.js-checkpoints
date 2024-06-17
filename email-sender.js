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
    cc: 'mweroabdalla@gmail.com',
    bc: 'mnangat2312@gmail.com',
    subject: 'Sending html email using node.js application',
    html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: url(https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png);
        }
        .container {
            background-color: #fff;
            padding: 20px 40px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
      <img width='50px' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo">
        <h1>Thank You!</h1>
        <p>Dear Subscribers,</p>
        <p>Thank you so much for your support! Your encouragement and feedback mean the world to us.</p>
        <p>We look forward to continuing this journey with you.</p>
        <p>Best Regards,</p>
        <p><strong>Your Company/Name</strong></p>
    </div>
</body>
</html>
`
};
// sendMail method
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
# Node.js Guided Exercises

This repository contains a series of guided exercises to introduce you to Node.js. Each exercise is designed to help you understand different aspects of Node.js, from basic console logging to creating a server, working with the file system, generating passwords, and sending emails.

## Prerequisites

- Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- A code editor, such as Visual Studio Code, to write and manage your files.

## Table of Contents

1. [Hello World](#1-hello-world)
2. [Create a Server](#2-create-a-server)
3. [File System Operations](#3-file-system-operations)
4. [Password Generator](#4-password-generator)
5. [Email Sender](#5-email-sender)

## 1. Hello World

Create a simple Node.js program to print "HELLO WORLD" to the console.

### Instructions

1. Create a file named `hello-world.js`.
2. Add the following code:
    ```javascript
    console.log("HELLO WORLD");
    ```
3. Run the file:
    ```sh
    node hello-world.js
    ```

## 2. Create a Server

Create a Node.js server that responds with `<h1>Hello Node!!!!</h1>\n` when accessed.

### Instructions

1. Create a file named `server.js`.
2. Add the following code:
    ```javascript
    const http = require('http');

    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end('<h1>Hello Node!!!!</h1>\n');
    });

    server.listen(3000, () => {
      console.log('Server running at http://localhost:3000/');
    });
    ```
3. Run the server:
    ```sh
    node server.js
    ```

## 3. File System Operations

Create a file, write content to it, and read the content.

### Instructions

1. Create a file named `file-system.js`.
2. Add the following code:
    ```javascript
    const fs = require('fs');

    fs.writeFile('welcome.txt', 'Hello Node', (err) => {
      if (err) throw err;
      console.log('File has been created.');

      fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    });
    ```
3. Run the file:
    ```sh
    node file-system.js
    ```

## 4. Password Generator

Generate a random password using the `generate-password` package.

### Instructions

1. Install the `generate-password` package:
    ```sh
    npm install generate-password
    ```
2. Create a file named `password-generator.js`.
3. Add the following code:
    ```javascript
    const generatePassword = require('generate-password');

    const password = generatePassword.generate({
      length: 10,
      numbers: true
    });

    console.log(`Generated Password: ${password}`);
    ```
4. Run the file:
    ```sh
    node password-generator.js
    ```

## 5. Email Sender

Send an email using the `nodemailer` package.

### Instructions

1. Install the `nodemailer` package:
    ```sh
    npm install nodemailer
    ```
2. Create a file named `email-sender.js`.
3. Add the following code:
    ```javascript
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
      }
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'recipient-email@gmail.com',
      subject: 'Hello from Node.js',
      text: 'Hello world!'
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Email sent: ' + info.response);
    });
    ```

4. Create a README file:
    ```markdown
    # Email Sender

    This Node.js program sends an email using the `nodemailer` package.

    ## Instructions

    1. Install dependencies:
       ```sh
       npm install
       ```

    2. Update the email and password fields in `email-sender.js` with your credentials.

    3. Run the program:
       ```sh
       node email-sender.js
       ```

    ## Note

    For security reasons, it is recommended to use environment variables or a config file to store sensitive information like email passwords.
    ```

5. Run the file:
    ```sh
    node email-sender.js
    ```

---

This repository demonstrates basic to intermediate concepts in Node.js. Each exercise builds on the previous one, providing a solid foundation for further exploration and development in Node.js. Happy coding!

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shalee1664@gmail.com',
        pass: 'dqhyycsmgybfejzr' 
    },
    tls: {
        rejectUnauthorized: false
    }
});


let mailOptions = {
    from: 'shalee1664@gmail.com',
    to: 'waseemahmed116@gmail.com',
    subject: 'Testing Mail',
    text: 'Hello, how are you? Testing mail.'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Mail sent: ' + info.response);
});

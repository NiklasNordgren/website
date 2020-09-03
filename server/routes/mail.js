var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();

var transporter = nodemailer.createTransport({
    pool: true,
    host: 'send.one.com',
    port: 465,
    secure: true,
    auth: {
        user: 'send@niklasnordgren.com',
        pass: 'jgaoganjgj551HEHE51715h2'
    }
});

var mailOptions = {
    from: 'send@niklasnordgren.com',
    to: 'info@niklasnordgren.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

router.get('/', function (req, res, next) {

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

});

module.exports = router;

// mailgun.js
const mailgun = require('mailgun-js');

const DOMAIN = process.env.MAILGUN_DOMAIN;
const apiKey = process.env.MAILGUN_API_KEY;
const FROM_EMAIL = process.env.MAILGUN_EMAIL;

const mg = mailgun({ apiKey, domain: DOMAIN });

const sendEmail = (email) => {
  const data = {
    from: FROM_EMAIL,
    to: 'website.humboldtgrange501@gmail.com', 
    subject: 'New Grange Email List Subscriber',
    text: `A new person subscribed to our email list: ${email}`,
  };

  return new Promise((resolve, reject) => {
    mg.messages().send(data, function (error, body) {
      if (error) reject(error);
      else resolve(body);
    });
  });
};

module.exports = sendEmail;

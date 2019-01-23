const sendMail = (transporter, name, email, subject, message) => {
  const mail = {
    from: `name <${email}>`,
    to: 'dtuveson@sas.upenn.edu',
    subject: subject,
    text: message
  }

  transporter.sendMail(mail)
    .then((res) => {
      console.log('res: ' + res);
    })
    .catch((err) => {
      console.log('Error sending mail: ' + err);
    });
}

module.exports = sendMail;


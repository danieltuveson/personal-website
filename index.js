const express = require('express');
const bodyParser = require('body-parser');

const handlebars = require('express-handlebars');

const nodemailer = require('nodemailer');
const sendMail = require('./send-mail.js');
const mailerKeys = require('./keys.js');

// Setup
const app = express();
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

// Used for nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: mailerKeys.user,
    pass: mailerKeys.pass
  }
});


// Routes 
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/resume', (req, res) => {
  res.render('resume');
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  sendMail(transporter, name, email, subject, message);
  res.json(`Here\'s what u sent me bro: ${name}, ${email}, ${subject}, ${message}`);

});

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
  res.status(404);
  res.send('404');
});

app.use((req, res) => {
  console.log(err.stack);
  res.status(500);
  res.send('500');
});


app.listen(app.get('port'), () => {
  console.log(`Express started on http://localhost:${app.get('port')}; press Ctrl-C to terminate`);
});
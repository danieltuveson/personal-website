const express = require('express');
const handlebars = require('express-handlebars');


const app = express();
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);


app.get('/', (req, res) =>{
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
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
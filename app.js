const express = require('express');
const app = express();
const port = 3030;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data

let lastUsername = ""; // Temporary storage for the last username

app.get('/', (req, res) => {
  res.render('index', { title: 'Creative Bursts Photography' });
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', { title: 'Portfolio - Creative Bursts Photography' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact - Creative Bursts Photography' });
});

app.get('/clientLogin', (req, res) => {
  res.render('clientLogin', { title: 'Client Login - Creative Bursts Photography' });
});

app.post('/clientLogin', (req, res) => {
  lastUsername = req.body.username; // Store the username from the login form
  res.redirect('/fakeAccount'); // Redirect to the fake account page
});

app.get('/fakeDashboard', (req, res) => {
  res.render('fakeDashboard', { title: 'Dashboard - Creative Bursts Photography' });
});

app.get('/fakePayment', (req, res) => {
    res.render('fakePayment', { title: 'Payments - Creative Bursts Photography' });
});

app.get('/fakeAccount', (req, res) => {
  res.render('fakeAccount', { username: lastUsername, title: 'Account - Creative Bursts Photography' }); // Render the account page with the stored username
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

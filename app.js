const express = require('express');
const app = express();
const port = 3030;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data

let lastUsername = ""; // Temporary storage for the last username

app.get('/', (req, res) => {
  res.render('index', { title: 'Lacey Rahmani Photography' });
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', { title: 'Portfolio - Lacey Rahmani Photography' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact - Lacey Rahmani Photography' });
});

app.get('/clientLogin', (req, res) => {
  res.render('clientLogin', { title: 'Client Login - Lacey Rahmani Photography' });
});

app.post('/clientLogin', (req, res) => {
  lastUsername = req.body.username; // Store the username from the login form
  res.redirect('/fakeAccount'); // Redirect to the fake account page
});

app.get('/fakeDashboard', (req, res) => {
  res.render('fakeDashboard', { title: 'Dashboard - Lacey Rahmani Photography' });
});

app.get('/fakePayment', (req, res) => {
    res.render('fakePayment', { title: 'Payments - Lacey Rahmani Photography' });
});

app.get('/fakeAccount', (req, res) => {
  res.render('fakeAccount', { username: lastUsername, title: 'Account - Lacey Rahmani Photography' }); // Render the account page with the stored username
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

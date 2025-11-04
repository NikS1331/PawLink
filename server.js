// server.js
const express = require('express');
const app = express();
app.set('view engine','ejs');
app.set('views',__dirname+"/views");
// Simple route for the homepage

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/register', (req, res) => {
  res.render('register');
});
app.get('/ownerdashboard',(req,res) =>{
  res.render('ownerdashboard');
});
app.get('/sitterdashboard',(req,res) =>{
  res.render('sitterdashboard');
});

// Set the port
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

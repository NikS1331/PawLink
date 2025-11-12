const express = require('express');
const app=express();
app.use(express.json()); // for JSON payloads
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.set('views',__dirname+"/views");
// Simple route for the homepage

app.get('/', (req, res) => {
  res.render('welcome');
});
app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/ownerdashboard',(req,res) =>{
  res.render('ownerdashboard');
});
app.get('/sitterdashboard',(req,res) =>{
  res.render('sitterdashboard');
});

// Set the port
const PORT = 3000;



const bodyParser=require('bcrypt');
const{pet_sitters}=require('./models/pet_sitters');

//app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');


const registerRoutes = require('./routes/register');
app.use('/register', registerRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const http = require('http');
const User = require('./models/User.js');


dotenv.config();
const app = express();

app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}));
app.use(express.json());

const jwtSecretKey = 'asdflkjasiuhlkbj12lhjbalfjbsal114141vikachu';

mongoose.connect(process.env.MONGO_URL)
  .then(console.log("MongoDB connected!"))
;

app.get('/', (req, res) => {
  res.send("Hello from the backend! Welcome to the homepage!");
});

app.get('/cart', (req, res) => {
  res.send("Hello from the backend! Your cart has 3 items :)");
});




app.get('/account/login', (req, res) => {
  res.status(200).send("From Backend: Welcome to the login page");
});

app.post('/account/login', async (req, res) => {
  const {email, password} = req.body;
  try {
    const userDoc = await User.findOne({email: email});
    if(userDoc) {
      const isPasswordOk = bcrypt.compareSync(password, userDoc.password);
      console.log(isPasswordOk);

      if(isPasswordOk) {
        jwt.sign({id: userDoc.id, email: userDoc.email}, jwtSecretKey, {}, (err, token) => {
          if (err) throw err;
          res.cookie('token', token).json({msg: "From API: Password ok!"});
          console.log("User logged in! And cookie created!")
        })
      } else {
        res.json({msg: `From API: Oops, sorry!! Incorrect email/password combination!`});
        console.log("Wrong password!");
      }
    } else {
      res.json({msg: "User with that email does not exist!"})
      console.log("User with that email was not found");
    }
    
  } catch (error) {
    console.log(error.message);
  }
});




app.get('/account/register', (req, res) => {
  res.status(200);
  res.send('From backend: Welcome to the register page');
});

app.post('/account/register', async (req, res) => {
  const {name, email, password} = req.body;
  let bcryptSalt = bcrypt.genSaltSync(10);
  let hashPassword = bcrypt.hashSync(password, bcryptSalt);
  try {
    const userDoc = await User.create({
      name,
      email,
      password: hashPassword
    });
    console.log(userDoc);
    res.status(200).json(userDoc);
  } catch (err) {
    console.log(err.message)
    res.json("An error ocurred");
  }
});




const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.HOST_NAME}, with port: ${process.env.PORT}`);
});
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const http = require('http');
const User = require('./models/User.js');


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

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
        res.status(200);
        res.json({email, hashPassword: userDoc.password, msg: `Backend Response: Congrats!! User with email: ${email} was found! Secret password is ${userDoc.password}`});
        console.log("User logged in!")
      } else {
        res.json({msg: `Oops, sorry!! Incorrect email/password combination!`});
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
  }
});




const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.HOST_NAME}, with port: ${process.env.PORT}`);
});
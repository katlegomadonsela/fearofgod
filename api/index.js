const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const http = require('http');
const User = require('./models/User.js');

const bcryptSalt = bcrypt.genSaltSync(10);

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

app.get('/account/register', (req, res) => {
  res.send('Welcome to the register page');
  console.log(req.body);
});

app.post('/account/register', async (req, res) => {
  const {name, email, password} = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt)
    });
    console.log(userDoc);
    res.status(200).json(userDoc);
  } catch (err) {
    console.log(err.message)
  }
})

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.HOST_NAME}, with port: ${process.env.PORT}`);
});
const basicAuth = require('express-basic-auth');

const auth = basicAuth({
  users: {
    admin: '123',
    user: '456',
  },
});

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

app.get('/authenticate', auth, (req, res) => {
    if (req.auth.user === 'admin') {
      res.send('admin');
    } else if (req.auth.user === 'user') {
      res.send('user');
    }
  });
  
  // Request on Client
  
  const auth = async () => {
    try {
      const res = await axios.get('/authenticate', { auth: { username: 'admin', password: '123' } });
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const cookieParser = require('cookie-parser');

// A random key for signing the cookie
app.use(cookieParser('82e4e438a0705fabf61f9854e3b575af'));

app.get('/authenticate', auth, (req, res) => {
  const options = {
    httpOnly: true,
    signed: true,
  };

  if (req.auth.user === 'admin') {
    res.cookie('name', 'admin', options).send({ screen: 'admin' });
  } else if (req.auth.user === 'user') {
    res.cookie('name', 'user', options).send({ screen: 'user' });
  }
});
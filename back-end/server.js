const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/cookies', {
  useNewUrlParser: true
});

const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const cookieSchema = new mongoose.Schema({
  user: String,
  score: Number,
});

const Cookie = mongoose.model('Cookie', cookieSchema);

app.delete('/api/items/:id', async (req, res) => {
  try {
    await Cookie.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/items', async (req, res) => {
  try {
    let cookies = await Cookie.find();
    console.log(cookies);
    res.send(cookies);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//login function
app.get('/api/items/:user', async (req, res) => {
  try {
    let cookie = await Cookie.findOne({
	user: req.params.user});
    console.log("This is the cookie");
    console.log(req.params.user);
    console.log(cookie);
    res.send(cookie);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//for sign in function
app.post('/api/items', async (req, res) => {
  const cookie = new Cookie({
    user: req.body.user,
    score: req.body.score,
  });
  try {
    await cookie.save();
    res.send(cookie);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//for increasing the count
app.put('/api/items/:user', async(req, res) => {
  try{
   let cookie = await Cookie.findOne({
	user: req.params.user});
   console.log(req.params.user);
   console.log(cookie);
   cookie.score = cookie.score + 1;
   cookie.save();
   res.send(cookie);
  }catch(error){
   console.log(error);
   res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));

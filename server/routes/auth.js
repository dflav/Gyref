const router = require('express').Router();
const User = require('../model/User');
const { validRegister, validLogin } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  //validate user
  const { error } = validRegister(req.body);
  if (error) return res.status(400).send(error.details[0].message, req.body);

  //check if user exists
  const user = await User.findOne({ email });
  if (user) return res.status(400).send('User already exists');

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  //create new user
  const newUser = new User({
    name,
    email,
    password: hash
  });
  try {
    const savedUser = await newUser.save();
    res.send({ user: savedUser._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const { error } = validLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email });
  if (!user) return res.status(400).send('Email or password is wrong');

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).send('Email or password is wrong');

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);

  res.send('Logged in!');
});

module.exports = router;

const router = require('express').Router();
const User = require('../model/User');
const { validRegister } = require('../validation');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  //validate user
  const { error } = validRegister(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).send('User already exists');

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  //create new user
  const user = new User({
    name,
    email,
    password: hash
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

// router.post('/login', (req, res) => {});

module.exports = router;

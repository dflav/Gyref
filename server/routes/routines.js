const router = require('express').Router();
const User = require('../model/User');
const auth = require('../middleware/verifyToken');

router.put('/add', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { name, frequency, type, description, days } = req.body;
    user.workouts.push({ name, frequency, type, description, days });
    const workout = await user
      .save()
      .then(() => res.json('Workout Added'))
      .catch(err => res.status(400).json({ status: err }));
  } catch (err) {
    res.status(400).json({ status: err });
  }
});

module.exports = router;

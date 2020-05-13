const router = require('express').Router();
const User = require('../model/User');
const auth = require('../middleware/verifyToken');

router.put('/add', auth, (req, res) => {
  User.findById(req.user._id)
    .then(user => {
      const { date, description, duration, entries, exercise, sets } = req.body;

      user.logs.push({
        exercise,
        description,
        duration,
        date,
        sets,
        entries
      });

      user
        .save()
        .then(() => res.json('Log Added'))
        .catch(err => res.status(400).json({ status: err }));
    })
    .catch(err => res.status(400).json({ status: err }));
});

router.get('/list', auth, (req, res) => {
  User.findById(req.user._id)
    .then(user => {
      res.json(user.logs);
    })
    .catch(err => res.status(400).json({ status: err }));
});

router.delete('/delete/:id', auth, (req, res) => {
  User.findById(req.user._id).then(user =>
    user
      .updateOne({ $pull: { logs: { _id: req.params.id } } }, { safe: true })
      .then(() => res.json('Log Deleted'))
      .catch(err => res.status(400).json({ status: err }))
  );
});

module.exports = router;

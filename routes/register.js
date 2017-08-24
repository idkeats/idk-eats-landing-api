const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

/* Redirect to landing page */
router.get('/', (req, res, next) => {
  User.find({})
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).json({message: "Error retrieving user data.", err}));
});

router.post('/', (req, res, next) => {
  const user = new User(req.body);

  user.save()
    .then(newUser => res.status(200).json(newUser))
    .catch(err => res.status(400).json({message: "Error saving user", err}));
});

module.exports = router;

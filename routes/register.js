const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const mongooseHelpers = require('../modules/mongooseHelpers');

/* Redirect to landing page */
router.get('/', (req, res, next) => {
  // User.find({})
  //   .then(users => res.status(200).json(users))
  //   .catch(err => res.status(400).json({message: "Error retrieving user data.", err}));
  return res.redirect('https://idkeats.github.io');
  // const user = await mongooseHelpers.findOne(User, {_id: "599e8b96ba97e4502379ab03"}, next);
  // return res.json(allUsers);
  // console.log(allUsers);
  // return res.status(200).json(allUsers);
});

router.post('/', (req, res, next) => {
  const user = new User(req.body);

  user.save()
    .then(newUser => res.status(200).json(newUser))
    .catch(err => res.status(400).json({message: "Error saving user", err}));
});

router.post('/saveToken', (req, res, next) => {
  console.log(req.body);
  return res.status(200);
});

module.exports = router;

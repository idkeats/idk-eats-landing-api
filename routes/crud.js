const express = require('express');
const router = express.Router();
const mongooseHelpers = require('../modules/mongooseHelpers');
const TestUser = mongoose.model('TestUser');

/* Redirect to landing page */
router.get('/', async (req, res, next) => {
  const allUsers = await mongooseHelpers.find(TestUser, {}, next, 'notes')
});

module.exports = router;
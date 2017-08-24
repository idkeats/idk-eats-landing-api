var express = require('express');
var router = express.Router();

/* Redirect to landing page */
router.get('/', function(req, res, next) {
  res.redirect('https://idkeats.github.io/');
});

module.exports = router;

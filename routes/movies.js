var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  return res.status(200).json({
    title: "It",
    genre: "Horror",
    description: "Crazy clown eats kids"
  });
});

module.exports = router;

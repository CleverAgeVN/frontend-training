var express = require('express');
var router = express.Router();

/* Render signup form. */
router.get('/', function(req, res, next) {
  res.render('users/signup');
});

router.post('/', function(req, res, next) {
  
});

module.exports = router;

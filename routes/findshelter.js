var express = require('express');
var router = express.Router();

/* GET find shelter page. */
router.get('/', function(req, res, next) {
  res.render('findshelter');
});


module.exports = router;

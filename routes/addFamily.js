var express = require('express');
var router = express.Router();

/* GET Sign-up page. */
router.get('/', function(req, res, next) {
  res.render('addFamily');
});


module.exports = router;
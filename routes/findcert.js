var express = require('express');
var router = express.Router();

/* GET Find Cert page. */
router.get('/', function(req, res, next) {
  res.render('findcert');
});


module.exports = router;
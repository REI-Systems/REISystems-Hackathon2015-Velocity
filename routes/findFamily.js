var express = require('express');
var router = express.Router();


/* GET Shelters List page. */
router.get('/', function(req, res, next) {
    res.render('findFamily');
});

module.exports = router;
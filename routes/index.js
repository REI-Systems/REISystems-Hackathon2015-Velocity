var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

route.get('/', function(req, res){
   res.sendfile('./Public/index.html'); 
});

module.exports = router;

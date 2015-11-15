var express = require('express');
var router = express.Router();


/* GET Shelters List page. */
router.get('/', function(req, res, next) {
    var shelterjson = [
        {'name': 'Dogwood Elementary School', 'address': '2300 State Rte 4721', 'city':'Reston', 'state':'VA', 'zipcode':'20191', 'medicalassistance':true, 'foreignlanguage':true, 'fireandrecue': true}
        ];

  
  res.render('shelters',{title: 'Shelters List', shelterListdata: shelterjson});
    console.log(shelterjson);
});


module.exports = router;
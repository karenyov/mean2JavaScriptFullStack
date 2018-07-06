var express = require('express');
var router = express.Router();

/* GET home page. */
//configurando a rota
router.get('/', function(req, res, next) {
  var myList = [
    {
      name: 'Angular',
      price: 140,
      category: 'Front-End'
    },
    {
      name: 'Express',
      price: 180,
      category: 'Back-End'
    }
  ];
  res.json(myList);
});

module.exports = router;

var express = require('express');
var router = express.Router();

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

/* GET home page. */
//configurando a rota
router.get('/', function (req, res, next) {
  res.json(myList);
});

router.post('/', function (req, res) {
  var newItem = req.body;
  myList.push(newItem);
  res.json(myList);
});

router.delete('/:name', function (req, res) {
  var name = req.params['name'];
  var item = myList.find(item => item.name == name);
  if (item) {
    var index = myList.indexOf(item);
    myList.splice(index, 1);
    res.json(myList);
  }
});

module.exports = router;

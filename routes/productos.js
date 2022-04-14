var express = require('express');
var router = express.Router();
var l=["COCA COLA","CERVEZA PILSEN","tMAIZ MORADO"]
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send(l);
});

module.exports = router;
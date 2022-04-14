var express = require('express');
var router = express.Router();
var l=["primer cliente","segundo cliente","tercer cliente"]
/* GET users listing. */
router.get('/', function(req, res, next) {
    
    res.send(l)
    //res.send('jose');
});

module.exports = router;

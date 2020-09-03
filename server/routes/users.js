var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  let responseJson = {test: "hello wordl"};
  res.send(responseJson);

});

module.exports = router;

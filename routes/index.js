var express = require('express');
var router = express.Router();
var temperatureConvert = {
  farToCel: function(temp) {
    console.log(temp);
    console.log((+temp - 32) * 5 / 9);
    return (+temp - 32) * 5 / 9;
  },
  celToFar: function(temp) {
    return (+temp * 9 / 5) + 32;
  }
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

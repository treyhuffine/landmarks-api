var express = require('express');
var Firebase = require('firebase');
var router = express.Router();
var fbRef = new Firebase('https://treyhuffine-sample-apps.firebaseio.com/landmarks-app/locations');

router.get('/locations', function(req, res, next) {
  fbRef.once("value", function(snap) {
    res.json( { locations: snap.val() } );
  });
});
router.post('/locations', function(req, res, next) {
  fbRef.push(req.body);
  res.json(req.body);
});

module.exports = router;

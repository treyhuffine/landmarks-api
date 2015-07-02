var express = require('express');
var Firebase = require('firebase');
var _ = require('lodash');
var router = express.Router();
var fbRef = new Firebase('https://treyhuffine-sample-apps.firebaseio.com/landmarks-app/locations');

router.get('/locations', function(req, res, next) {
  fbRef.once("value", function(snap) {
    res.json( { locations: snap.val() } );
  });
});
router.post('/locations', function(req, res, next) {
  var newLocation = _.pick(req.body, ['year', 'description', 'name']);
  if (newLocation.name) {
    fbRef.push(newLocation, function(err) {
      if (err) {
        res.status(400);
      }
      else {
        res.json(newLocation);
      }
    });
  }
});

module.exports = router;

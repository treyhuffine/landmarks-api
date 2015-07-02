var express = require('express');
var Firebase = require('firebase');
var router = express.Router();

var fakeData = [
  { name: 'location1', description: 'Location 1', year: 1999 },
  { name: 'location2', description: 'Location 2', year: 1998 },
  { name: 'location3', description: 'Location 3', year: 1992 },
  { name: 'location4', description: 'Location 4', year: 1995 }
];

router.get('/locations', function(req, res, next) {
  res.json( { locations: fakeData } );
});
router.post('/locations', function(req, res, next) {
  res.json( fakeData[0] );
});

module.exports = router;

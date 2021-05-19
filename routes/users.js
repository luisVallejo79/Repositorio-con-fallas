var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    mensaje : 'respond with a resource',
    METHOD: 'GET'
  });
});

router.put('/', function(req, res, next) {
  res.json({
    mensaje : 'respond with a resource',
    METHOD: 'PUT'
  });
});

router.post('/', function(req, res, next) {

  const {nombre, estadoCivil} = req.body;
  res.json({
    mensaje : 'respond with a resource',
    METHOD: 'POST',
    nombre, estadoCivil
  });
});

router.delete('/', function(req, res, next) {
  res.json({
    mensaje : 'respond with a resource',
    METHOD: 'DELETE'
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    mensaje : 'respond with a resource',
    METHOD: 'GET'
  });
});

router.put('/', (req, res, next)=> {
  res.json({
    mensaje : 'respond with a resource',
    METHOD: 'PUT'
  });
});

router.post('/', (req, res, next)=> {

  const {nombre, email, password, rol} = req.body;
  const usuario = new Usuario( {nombre, email, password, rol} );

  //verificar si el correo existe


  //encriptar la contraseña
  
  const salt = bcryptjs.genSaltSync(10);

  usuario.password = bcryptjs.hashSync(password, salt);

  usuario.save();
  
  res.json({
    METHOD: 'POST',
    usuario
  });
});

router.delete('/', function(req, res, next) {
  res.json({
    mensaje : 'respond with a resource',
    METHOD: 'DELETE'
  });
});

module.exports = router;

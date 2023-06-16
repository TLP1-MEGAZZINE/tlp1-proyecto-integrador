const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controllers')

// RUTAS INICIALES
router.get('/index.html', controller.index)
router.get('/moreInfo.html', controller.moreInfo)
router.get('/inicio.html', controller.inicio)

// RUTAS DE REGISTRO-LOGIN
router.get('/registro-login/registro.html', controller.registro)
router.get('/registro-login/postulantes.html', controller.login)
router.get('/registro-login/login.html', controller.login)


// RUTAS PRINCIPAL
router.get('/principal/novedades.html', controller.novedades);
router.get('/principal/solicitudes.html', controller.solicitudes);

// EDITAR PERFILES
router.get('/editar-perfiles/perfilusuario.html', controller.perfilusuario);
router.get('/editar-perfiles/perfilpostulante.html', controller.perfilpostulante);
router.get('/editar-perfiles/perfilempresa.html', controller.perfilempresa);

module.exports = router;
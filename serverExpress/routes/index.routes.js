const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controllers')

router.get('/index.html', controller.index)
router.get('/moreInfo.html', controller.moreInfo)
router.get('/inicio.html', controller.inicio)


router.get('/registro-login/registro.html', controller.registro)
router.get('/registro-login/login.html', controller.login)


router.get('/principal/novedades.html', controller.novedades);
router.get('/principal/solicitudes.html', controller.solicitudes);

module.exports = router;
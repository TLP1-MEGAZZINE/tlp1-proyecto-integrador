const express = require('express');
const router = express.Router();
const { validarJWT } = require("../middlewares/autenticarToken")
const { protegerRuta } = require("../middlewares/protegerRuta")
const { ctrlFindUserBySession } = require("../controllers/user.controllers")
//SE IMPORTAN LOS CONTROLADORES PARA RENDERIZAR LAS VISTAS
const { index,
    inicio,
    masInfo,
    registro,
    login,
    solicitudes,
    novedades,
    perfil,
    perfilpostulante,
    perfilempresa, 
    file
} = require('../controllers/vista.controllers')

// RUTAS INICIALES
router.get('/index', index)
router.get('/mas-info', masInfo)


// RUTAS DE REGISTRO-LOGIN
router.get('/registro', registro)
router.get('/login', login)


// // RUTAS PRINCIPAL
router.get('/inicio', validarJWT, inicio)
router.get('/novedades', protegerRuta, novedades);
router.get('/solicitudes', protegerRuta, solicitudes);
router.get('/file', validarJWT, file)

// // EDITAR PERFILES
router.get('/perfil', protegerRuta, perfil, ctrlFindUserBySession);
router.get('/perfil/editar-perfil-usuario',protegerRuta,  perfilpostulante);
router.get('/perfil/editar-perfil-empresa',protegerRuta,  perfilempresa);

module.exports = router;
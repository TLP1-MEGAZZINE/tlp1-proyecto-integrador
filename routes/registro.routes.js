const express = require('express');
const router = express.Router();

//IMPORTAR CONTROLADORES
const metodoPost = require('../controllers/registro-user.controller')

// RUTAS GET REGISTRO DE USUARIO

router.get('/registro-user', (req, res) => {
    res.render('registro-login/registro-user')
});

router.get('/registro-data', (req, res) => {
    res.render('registro-login/registro-data')
})

router.get('/login', (req, res) => {
    res.render('registro-login/login')
})


//RUTAS POST
router.post('/registro-user', metodoPost.crearUsuario);

router.post('/registro-data', metodoPost.cargarInfoUsuario);

router.post('/registro-data', metodoPost.cargarCel)



module.exports = router;
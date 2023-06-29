const express = require('express');
const router = express.Router();

//IMPORTAR CONTROLADORES
const metodoPost = require('../controllers/registro-user.controller')

// RUTAS GET/RENDERIZAR VIEWS

router.get('/registro-user', (req, res) => {
    res.render('registro-login/registro-user')
});

router.get('/registro-data', (req, res) => {
    res.render('registro-login/registro-data')
})

router.get('/login', (req, res) => {
    res.render('registro-login/login')
})


//RUTAS POST/ CRUD
router.post('/registro-user', metodoPost.crearUsuario);

router.post('/login', metodoPost.loginUsuario)

module.exports = router;
const express = require('express');
const router = express.Router();

//IMPORTAR CONTROLADORES
const jwt = require('jsonwebtoken')
const { validatUser } = require("../validators/users.validation")

const {
crearUsuario,
loginUsuario
} = require('../controllers/registro.controller')

// RUTAS GET/RENDERIZAR VIEWS

router.get('/registro', (req, res) => {
    res.render('registro-login/registro')
});

router.get('/login', (req, res) => {
    res.render('registro-login/login')
})


//RUTAS POST/ CRUD
router.post('/registro', validatUser, crearUsuario);

router.post('/login', loginUsuario)


// ruta para validar el token
router.get('/api/validar-token', (req, res) => {

    const token = req.header('Authorization');

    if (!token) {
        return res.redirect('/login');
    }

    const isValidToken = jwt.verify(token, process.env.SECRET_KEY);

    if (!isValidToken) {
        return res.redirect('/login');
    }

    return res.json({ ok: true })
})

module.exports = router;
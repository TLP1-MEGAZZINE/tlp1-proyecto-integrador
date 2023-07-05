const express = require('express');
const router = express.Router();

//IMPORTAR CONTROLADORES
const jwt = require('jsonwebtoken')

const {
crearUsuario,
loginUsuario
} = require('../controllers/registro-user.controller')

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
router.post('/registro-user', crearUsuario);

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
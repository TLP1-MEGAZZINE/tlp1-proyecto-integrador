const express = require('express');
const router = express.Router();
const controller = require('../controllers/registro-user.controller')
const User = require('../models/users.model');
// RUTAS DE REGISTRO DE USUARIO

router.get('/registro-user', (req, res) => {
    res.render('registro-login/registro-user')
});

// REGISTRAR USUARIOS A LA DB HARDCODE
router.post('/registro-user', async (req, res) => {
    await User.sync()
    const createUser = await User.create({
        id_user: "3",
        user_name: "Agustinm12",
        user_email: "agustinmazza1236@live.com",
        user_password: "123456AD89"
    })
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Usuario añadido",
    })
});

router.get('/registro-data', (req, res) => {
    res.render('registro-login/registro-data')
})

router.get('/login', (req, res) => {
    res.render('registro-login/login')
})

module.exports = router;
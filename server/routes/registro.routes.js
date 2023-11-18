const express = require('express');
const router = express.Router();

//IMPORTAR CONTROLADORES
const jwt = require('jsonwebtoken')
const { validatUser } = require("../validators/users.validation")
const { validatUserReact } = require("../validators/user.validationReact")

//SE IMPORTAN LOS CONTROLADORES PARA REGISTRO Y LOGIN
const {
crearUsuario,
loginUsuario,
crearUser
} = require('../controllers/registro.controller');
const { validarJWT } = require('../middlewares/autenticarToken');

//RUTAS POST
router.post('/registro', validatUserReact, crearUser);

router.post('/login', loginUsuario)

// ruta para validar el token NO SE USA DE MOMENTO
router.get('/validar-token', (req, res) => {

    const token = req.headers.Authorization;

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

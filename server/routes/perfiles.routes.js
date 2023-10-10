const express = require('express');
const router = express.Router();
const controller = require('../controllers/vista.controllers')

router.get('/perfil', (req, res) => {
    return res.json(req.session);
    res.render('perfiles/perfil', { rol: req.session.rol })
})

router.get('/perfil/editar-perfil-usuario', (req, res) => {
    res.render('perfiles/editar-perfil-usuario')
})

router.get('/perfil/editar-perfil-empresa', (req, res) => {
    res.render('perfiles/editar-perfil-empresa')
})

module.exports = router;
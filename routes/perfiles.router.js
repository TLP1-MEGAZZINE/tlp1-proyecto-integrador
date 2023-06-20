const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controllers')

router.get('/perfil', (req, res) => {
    res.render('perfiles/perfil')
})

router.get('/perfil/editar-perfil-usuario', (req, res) => {
    res.render('perfiles/editar-perfil-usuario')
})

router.get('/perfil/editar-perfil-empresa', (req, res) => {
    res.render('perfiles/editar-perfil-empresa')
})

module.exports = router;
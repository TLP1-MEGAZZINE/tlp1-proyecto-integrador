const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controllers')

router.get('/novedades', (req, res) => {
    res.render('principal/novedades')
})

router.get('/solicitudes', (req, res) => {
    res.render('principal/solicitudes')
})

module.exports = router;
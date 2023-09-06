const express = require('express');
const router = express.Router();
const controller = require('../controllers/vista.controllers')

router.get('/novedades', (req, res) => {
    res.render('principal/novedades')
})

router.get('/solicitudes', (req, res) => {
    res.render('principal/solicitudes')
})

router.get('/cerrar-sesion', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error al cerrar sesión:', err);
            res.status(500).send('Error al cerrar sesión');
        } else {
            res.status(200).send('Sesión cerrada exitosamente');
            console.log("SESION CERRADA")
        }
    });
});

module.exports = router;
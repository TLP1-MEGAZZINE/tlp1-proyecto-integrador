const express = require('express');
const router = express.Router();

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
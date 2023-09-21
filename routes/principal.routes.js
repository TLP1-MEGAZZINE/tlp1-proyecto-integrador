const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { ctrlFindUsers } = require("../controllers/registro.controller")
const { crearPosteos } = require("../controllers/userActions.controller")
const { uploadImage } = require("../controllers/image.controller")

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

router.get("/findAll", ctrlFindUsers)

router.post("/file", upload.single("image"), uploadImage)


module.exports = router;
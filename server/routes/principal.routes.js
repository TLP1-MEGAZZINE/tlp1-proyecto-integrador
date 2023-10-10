const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { ctrlFindUsers } = require("../controllers/registro.controller")
const { crearPosteos, uploadImage } = require("../controllers/userActions.controller")

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

//RUTA PARA SUBIR ARCHIVOS(IMAGENES)
router.post("/file", upload.single("image"), uploadImage)

//LLAMAR A TODOS LOS USUARIOS
router.get("/findAll", ctrlFindUsers)

//CREAR POSTEOS
router.post("/createPost", crearPosteos)

module.exports = router;
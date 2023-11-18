const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { ctrlUploadImage, ctrlFindPfp } = require("../controllers/image.controller")
const {validarJWT} = require('../middlewares/autenticarToken');

//RUTA PARA SUBIR ARCHIVOS(IMAGENES)
router.post("/file", upload.single("image"), ctrlUploadImage)

router.post("/findPfp", validarJWT, ctrlFindPfp )

module.exports = router
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { ctrlUploadImage, ctrlFindPfp } = require("../controllers/image.controller")

//RUTA PARA SUBIR ARCHIVOS(IMAGENES)
router.post("/file", upload.single("image"), ctrlUploadImage)

router.get("/findPfp", ctrlFindPfp)

module.exports = router
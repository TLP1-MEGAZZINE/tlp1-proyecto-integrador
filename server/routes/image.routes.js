const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { ctrlUploadPfp, ctrlFindPfp, ctrlCreateFile, ctrlFindAllFiles } = require("../controllers/image.controller")
const { validarJWT } = require('../middlewares/autenticarToken');
//RUTA PARA SUBIR ARCHIVOS(IMAGENES)
router.post("/pfp", upload.single("url"), ctrlUploadPfp)

router.post("/findPfp", ctrlFindPfp)


router.post("/createFile", upload.single("url"), ctrlCreateFile)

router.get("/findAllFiles", ctrlFindAllFiles)



module.exports = router
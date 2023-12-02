const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { ctrlUploadPfp, ctrlFindPfp, ctrlCreateFile, ctrlFindAllFiles, ctrlfindAllImgs } = require("../controllers/files.controller")
const { validarJWT } = require('../middlewares/autenticarToken');
//RUTA PARA IMAGENES
router.post("/pfp", upload.single("url"), ctrlUploadPfp)

router.post("/findPfp", ctrlFindPfp)

router.post("/findAllImgs", ctrlfindAllImgs)


//RUTA PARA ARCHIVOS
router.post("/createFile", upload.single("url"), ctrlCreateFile)

router.get("/findAllFiles", ctrlFindAllFiles)



module.exports = router
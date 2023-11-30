const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { ctrlFindUsers,
    ctrlFindUserByName,
    ctrlDeleteUser,
    ctrlUpdateUser,
    ctrlFindUserInfo,
    ctrlFindEmpleador,
    ctrlFindPostulante,
    ctrlDestroyUser,
    ctrlFindContact,
    ctrlFindUserById,
    ctrlCreateDesc,
    ctrlUpdateDesc,
    ctrlFindDesc,
} = require("../controllers/user.controllers")

const { ctrlUpdateUserInfo, ctrlUpdateUserContact, ctrlForgotPassword } = require("../controllers/updateInfo.controller")
const { validateInfo } = require("../validators/info.validation")
const { validateContact } = require("../validators/contact.validation")

const { protegerRuta } = require("../middlewares/protegerRuta");
const { validarJWT } = require('../middlewares/autenticarToken');

//BUSCAR USUARIOS E INFORMACION
router.get("/findAll", ctrlFindUsers)

router.post("/findByName", ctrlFindUserByName)

router.post("/findUserById", ctrlFindUserById)

router.post("/findUserInfo", validarJWT, ctrlFindUserInfo) 

router.post("/findEmpleador", validarJWT, ctrlFindEmpleador) 

router.post("/findPostulante", validarJWT, ctrlFindPostulante) 

router.post("/findContact", validarJWT, ctrlFindContact)

router.post("/findDesc", ctrlFindDesc)

//CREATE

router.post("/createDesc", upload.single('url'), ctrlCreateDesc)

//ACTUALIZAR INFORMACION
router.put("/updateUser", validarJWT, ctrlUpdateUser)
router.put("/updateUserInfo", validarJWT, validateInfo, ctrlUpdateUserInfo)
router.put("/updateUserContact", validarJWT, validateContact, ctrlUpdateUserContact)
router.post("/forgotPassword", ctrlForgotPassword)
router.put("/updateDesc", ctrlUpdateDesc)

//ELIMINAR 
router.delete("/delete", ctrlDeleteUser)

router.delete("/destroyUser", ctrlDestroyUser)

module.exports = router;
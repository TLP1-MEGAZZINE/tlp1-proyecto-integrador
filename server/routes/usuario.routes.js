const express = require('express');
const router = express.Router();
const { ctrlFindUsers,
    ctrlFindUserByName,
    ctrlDeleteUser,
    ctrlUpdateUser,
    ctrlFindUserInfo,
    ctrlFindEmpleador,
    ctrlFindPostulante,
    ctrlDestroyUser,
    ctrlFindContact,
    ctrlFindUserById
} = require("../controllers/user.controllers")

const { ctrlUpdateUserInfo, ctrlUpdateUserContact } = require("../controllers/updateInfo.controller")
const { validateInfo } = require("../validators/info.validation")
const { validateContact } = require("../validators/contact.validation")

const { protegerRuta } = require("../middlewares/protegerRuta");
const { validarJWT } = require('../middlewares/autenticarToken');

//BUSCAR USUARIOS E INFORMACION
router.get("/findAll", ctrlFindUsers)

router.post("/findByName", ctrlFindUserByName)

router.delete("/delete", ctrlDeleteUser)

router.delete("/destroyUser", ctrlDestroyUser)

router.post("/findUserById", ctrlFindUserById)

router.post("/findUserInfo", validarJWT, ctrlFindUserInfo) //agregar ruta protegida

router.post("/findEmpleador", validarJWT, ctrlFindEmpleador) //agregar ruta protegida

router.post("/findPostulante", validarJWT, ctrlFindPostulante) //agregar ruta protegida

router.post("/findContact", validarJWT, ctrlFindContact)

//ACTUALIZAR INFORMACION
router.put("/updateUser", validarJWT, ctrlUpdateUser)
router.put("/updateUserInfo", validarJWT, validateInfo, ctrlUpdateUserInfo)
router.put("/updateUserContact", validarJWT, validateContact, ctrlUpdateUserContact)



module.exports = router;
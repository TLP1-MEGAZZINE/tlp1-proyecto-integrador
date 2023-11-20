const express = require('express');
const router = express.Router();

const { ctrlFindUsers,
    ctrlFindUserByName,
    ctrlDeleteUser,
    ctrlUpdateUser,
    ctrlFindUserInfo,
    ctrlFindEmpleador,
    ctrlFindPostulante,
    ctrlDestroyUser
} = require("../controllers/user.controllers")

const { ctrlUpdateUserInfo, ctrlUpdateUserContact } = require("../controllers/updateInfo.controller")

const { protegerRuta } = require("../middlewares/protegerRuta");
const { validarJWT } = require('../middlewares/autenticarToken');

//BUSCAR USUARIOS E INFORMACION
router.get("/findAll", ctrlFindUsers)

router.post("/findByName", ctrlFindUserByName)

router.delete("/delete", ctrlDeleteUser)

router.delete("/destroyUser", ctrlDestroyUser)

// router.get("/findUserById", findUserById)

router.post("/findUserInfo", ctrlFindUserInfo) //agregar ruta protegida

router.post("/findEmpleador", ctrlFindEmpleador) //agregar ruta protegida

router.post("/findPostulante", ctrlFindPostulante) //agregar ruta protegida



//ACTUALIZAR INFORMACION
router.put("/updateUser", ctrlUpdateUser)
router.put("/updateUserInfo", ctrlUpdateUserInfo)
router.put("/updateUserContact", ctrlUpdateUserContact)



module.exports = router;
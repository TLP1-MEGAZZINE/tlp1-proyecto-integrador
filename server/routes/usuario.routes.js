const express = require('express');
const router = express.Router();

const { ctrlFindUsers, ctrlFindUserByName, ctrlDeleteUser, ctrlUpdateUser, 
    ctrlFindUserBySession, ctrlFindUserInfo } = require("../controllers/user.controllers")
    
const { protegerRuta } = require("../middlewares/protegerRuta");
const { validarJWT } = require('../middlewares/autenticarToken');

//LLAMAR A TODOS LOS USUARIOS
router.get("/findAll", ctrlFindUsers)

router.post("/findByName", ctrlFindUserByName)

router.delete("/delete", ctrlDeleteUser)

// router.get("/findUserById", findUserById)

router.put("/update", ctrlUpdateUser)

router.get("/session", validarJWT, ctrlFindUserBySession)

router.get("/findUserInfo", ctrlFindUserInfo) //agregar ruta protegida

module.exports = router;
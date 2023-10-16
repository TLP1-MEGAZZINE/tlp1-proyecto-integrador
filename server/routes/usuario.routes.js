const express = require('express');
const router = express.Router();

const { ctrlFindUsers, ctrlFindUserByName, ctrlDeleteUser, ctrlUpdateUser, 
    ctrlFindUserBySession, ctrlMiControlador } = require("../controllers/user.controllers")
const { protegerRuta } = require("../middlewares/protegerRuta")

//LLAMAR A TODOS LOS USUARIOS
router.get("/findAll", ctrlFindUsers)

router.post("/findByName", ctrlFindUserByName)

router.delete("/delete", ctrlDeleteUser)

// router.get("/findUserById", findUserById)


router.put("/update", ctrlUpdateUser)

router.get("/session", ctrlFindUserBySession)

router.get("/miControlador", ctrlMiControlador)

module.exports = router;
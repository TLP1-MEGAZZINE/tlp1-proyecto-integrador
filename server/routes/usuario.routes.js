const express = require('express');
const router = express.Router();

const { ctrlFindUsers, ctrlFindUserByName, ctrlDeleteUser, ctrlUpdateUser } = require("../controllers/user.controllers")


//LLAMAR A TODOS LOS USUARIOS
router.get("/findAll", ctrlFindUsers)

router.post("/findByName", ctrlFindUserByName)

router.delete("/delete", ctrlDeleteUser)

// router.get("/findUserById", findUserById)

router.put("/update", ctrlUpdateUser)


module.exports = router;
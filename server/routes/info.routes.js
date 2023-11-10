const express = require('express');
const router = express.Router();
const { ctrlFindPaises, ctrlFindDepar, ctrlFindRubro } = require("../controllers/info.controller")

//CREAR POSTEOS
router.get("/findPaises", ctrlFindPaises)

router.get("/findDepar", ctrlFindDepar)

router.get("/findRubro", ctrlFindRubro)

module.exports = router;
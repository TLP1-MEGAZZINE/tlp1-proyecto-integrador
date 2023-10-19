const express = require('express');
const router = express.Router();
const {ctrlCrearPosteos, ctrlFindAllPosts, ctrlFindPostbyRubro, ctrlDeletePost, ctrlFindPostEmpresa, ctrlFindPostPostulante  } = require("../controllers/posts.controllers")


//CREAR POSTEOS
router.post("/createPost", ctrlCrearPosteos)

router.get("/findAllPosts", ctrlFindAllPosts)

router.post("/findPostbyRubro", ctrlFindPostbyRubro)

router.delete("/deletePost", ctrlDeletePost)

router.get("/findPostEmpresa", ctrlFindPostEmpresa)

router.get("/findPostPostulante", ctrlFindPostPostulante)

//vista

module.exports = router;
const express = require('express');
const router = express.Router();
const {ctrlCrearPosteos, ctrlFindAllPosts  } = require("../controllers/posts.controllers")

//CREAR POSTEOS
router.post("/createPost", ctrlCrearPosteos)

router.get("/findAllPosts", ctrlFindAllPosts)

module.exports = router;
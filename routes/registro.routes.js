const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controllers')

router.get('/registro-user', (req, res) => {
    res.render('registro-login/registro-user')
})

router.get('/registro-data', (req, res) => {
    res.render('registro-login/registro-data')
})

router.get('/login', (req, res) => {
    res.render('registro-login/login')
})

module.exports = router;
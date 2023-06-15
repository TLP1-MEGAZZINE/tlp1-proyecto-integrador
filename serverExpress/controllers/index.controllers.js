const path = require('path');
const controller = {}

controller.index = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/index.html'))
};

controller.inicio = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/inicio.html'))
};

controller.registro = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/registro-login/registro.html'))
}

controller.login = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/registro-login/login.html'))
}

controller.moreInfo = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/moreInfo.html'))
}

controller.novedades = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/principal/novedades.html'))
}

controller.solicitudes = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/principal/solicitudes.html'))
}

module.exports = controller
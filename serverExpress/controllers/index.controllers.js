const path = require('path');
const controller = {}


// RUTAS INICIALES
controller.index = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/index.html'))
};

controller.inicio = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/inicio.html'))
};

controller.moreInfo = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/moreInfo.html'))
}


// RUTAS DE REGISTRO-LOGIN

controller.registro = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/registro-login/registro.html'))
}

controller.registro = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/registro-login/postulantes.html'))
}

controller.login = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/registro-login/login.html'))
}

// RUTAS PRINCIPAL


controller.novedades = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/principal/novedades.html'))
}

controller.solicitudes = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/principal/solicitudes.html'))
}

// EDITAR PERFILES

controller.perfilusuario = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/editar-perfiles/perfilusuario.html'))
}

controller.perfilpostulante = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/editar-perfiles/perfilpostulante.html'))
}

controller.perfilempresa = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/editar-perfiles/perfilempresa.html'))
}

module.exports = controller
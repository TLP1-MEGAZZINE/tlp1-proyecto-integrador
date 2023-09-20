const vista = {}


// RUTAS INICIALES
vista.index = (req, res) => {
    res.render('index')
};

vista.masInfo = (req, res) => {
    res.render("mas-info")
};
// RUTAS DE REGISTRO-LOGIN

vista.registro = (req, res) => {
    res.render("./registro-login/registro")
}

vista.login = (req, res) => {
    res.render("./registro-login/login")
}

// RUTAS PRINCIPAL
vista.inicio = (req, res) => {
    res.render("inicio")
};

vista.novedades = (req, res) => {
    res.render("./principal/novedades")
}

vista.solicitudes = (req, res) => {
    res.render("./principal/solicitudes")
}

vista.file = (req, res) =>{
    res.render("imagen")
}

// EDITAR PERFILES

vista.perfil = (req, res) => {
    // return res.json(req.session)
    res.render("./perfiles/perfil", { rol: req.session.user.rol })
}

vista.perfilpostulante = (req, res) => {
    res.render("./perfiles/editar-perfil-usuario")
}

vista.perfilempresa = (req, res) => {
    res.render("./perfiles/editar-perfil-empresa")
}

module.exports = vista
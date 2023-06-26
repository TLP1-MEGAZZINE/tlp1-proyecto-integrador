//IMPORTAR LOS MODELOS DE LAS TABLAS DE LA BASE DE DATOS
const User = require('../models/users.model');
const UserInfo = require('../models/userData.model');
const Nro_cel = require('../models/celTel.model');

//CREAR EL OBJETO QUE CONTENDRA LOS METODOS POST
const metodoPost = {}

 


metodoPost.crearUsuario = async (req, res) => {
    await User.sync()
    const createUser = await User.create({
        id_user: "15",
        user_name: "Waagustin",
        user_email: "agdsdustinmazza12WE36@gmail.com",
        user_password: "13d234546dgAD89"
    })
    res.status(200).json({
        ok: true,
        status: 200,
        message: "Usuario añadido",
    })
};

metodoPost.cargarInfoUsuario = async (req, res) => {
    await UserInfo.sync()
    const chargeInfo = await UserInfo.create({
        id_info: "1",
        nombre: "agustin",
        apellido: "mazza",
        dni: "44876123",
        cuil: "20448761232",
        fecha_nacimiento: "10/04/2003",
        barrio: "Villa del carmen"
    })
    res.status(200).json({
        ok: true,
        status: 200,
        message: "Informacion añadida",
    })
};

metodoPost.cargarCel = async (req, res) => {
    await Nro_cel.sync()
    const chargeCel = await Nro_cel.create({
        id_cel: "1",
        num_cel: "3704563459"
    })
    res.status(200).json({
        ok: true,
        status: 200,
        message: "Nro añadido",
    })
};

module.exports = metodoPost;
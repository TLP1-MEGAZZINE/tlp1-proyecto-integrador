//IMPORTAR LOS MODELOS DE LAS TABLAS DE LA BASE DE DATOS
const { sequelize } = require('../db');
const { Users, createUser } = require('../models/users.model');
const UserInfo = require("../models/userInfo.model")
const Contacto = require('../models/contacto.model');
const Postulante = require('../models/postulantes.model');
const Empleador = require('../models/empleador.model');
const Particular = require("../models/particular.model")


const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { generarJWT } = require('../helpers/generarToken')


// const crearUsuario = () => {

// }


//CREAR EL OBJETO QUE CONTENDRA LOS METODOS POST
const metodoPost = {}

// METODO PARA CREAR UN USUARIO Y ENCRIPTAR SU PASSWORD
metodoPost.crearUsuario = async (req, res) => {

    await createUser(req.body)

}


// METODO PARA EL LOGIN

metodoPost.loginUsuario = async (req, res) => {

    const { user_name, user_email, user_password } = req.body
    try {

        //VERIFICAR SI EXISTE EL USUARIO

        const existeUsuario = await Users.findOne({
            where: {
                [Op.or]: [
                    { user_name },
                    { user_email }
                ]
            }
        });

        if (!existeUsuario) {
            return res.status(404).json({
                message: 'El usuario no existe',
            });
        }

        // Verificar si el usuario está activo
        if (!existeUsuario.estado) {
            return res.status(404).json({
                message: 'El usuario no está activo',
            });
        }

        // Verificar la contraseña
        const passwordValido = bcrypt.compareSync(user_password, existeUsuario.user_password);

        if (!passwordValido) {
            return res.status(400).json({
                message: 'La contraseña no es correcta',
            });
        }

        // Generar el JWT
        const token = await generarJWT(existeUsuario.id_user)

        req.session.user = existeUsuario;

        res.json({
            message: 'Iniciando sesión',
            token, // No necesitas un token JWT en este enfoque
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'Error al iniciar sesión',
        });

    }
};

module.exports = crearUsuario;
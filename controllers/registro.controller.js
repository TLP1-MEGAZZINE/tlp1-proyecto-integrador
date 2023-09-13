//IMPORTACIONES
const crearRegistroCompleto = require("../models/registro.model.js")


const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { generarJWT } = require('../helpers/generarToken');
const { User } = require("../models/users.model");
const { UserInfo } = require("../models/userInfo.model.js");


//CREAR EL OBJETO QUE CONTENDRA LOS METODOS POST
const metodoPost = {}

// METODO PARA CREAR UN USUARIO Y ENCRIPTAR SU PASSWORD
metodoPost.crearUsuario = async (req, res) => {

    const userData = req.body

    try {

        const registroCompleto = await crearRegistroCompleto(userData);

        if (!registroCompleto) {
            throw new Error("Error al crear el registro de usuario")
        } else {
            return res.status(200).json({ message: "Registro creado-controller" })
        }
    } catch (error) {
        console.log("Error del servidor", error)
    }
}


// METODO PARA EL LOGIN

metodoPost.loginUsuario = async (req, res) => {

    const { user_name, user_email, user_password } = req.body
    try {

        //VERIFICAR SI EXISTE EL USUARIO

        const existeUsuario = await User.findOne({
            where: {
                [Op.or]: [
                    { user_name },
                    { user_email }
                ]
            }, include: UserInfo
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

        req.session.user = {
            userId: existeUsuario.id_user,
            rol: existeUsuario.User_info.id_rol

        };

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

module.exports = metodoPost;
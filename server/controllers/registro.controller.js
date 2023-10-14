//IMPORTACIONES
const crearRegistroCompleto = require("../helpers/registro.helper.js")
const bcrypt = require('bcrypt');
// const { generarJWT } = require('../helpers/generarToken');
const { findUserByEmailOrUsername, findAllUser } = require("../models/users.model");


//CREAR EL OBJETO QUE CONTENDRA LOS METODOS POST
const registerLogin = {}

// METODO PARA CREAR UN USUARIO Y ENCRIPTAR SU PASSWORD
registerLogin.crearUsuario = async (req, res) => {

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
registerLogin.loginUsuario = async (req, res) => {

    const userCredentials = req.body
    
    try {

        //VERIFICAR SI EXISTE EL USUARIO

        const existeUsuario = await findUserByEmailOrUsername(userCredentials)

        if (!existeUsuario) {
            return res.status(404).json({
                message: 'El usuario no existe',
            });
        }

        // Verificar si el usuario está activo
        if (!existeUsuario.estado) {
            return res.status(404).json({
                message: 'La cuenta esta suspendida',
            });
        }

        // Verificar la contraseña
        const passwordValido = bcrypt.compareSync(userCredentials.user_password, existeUsuario.user_password);

        if (!passwordValido) {
            return res.status(400).json({
                message: 'La contraseña no es correcta',
            });
        }

        // Generar el JWT
        // const token = await generarJWT(existeUsuario.id_user)

        req.session.user = {
            id_user: existeUsuario.id_user,
            rol: existeUsuario.id_rol
        };

        res.json({
            message: 'Iniciando sesión',
            // token, // No necesitas un token JWT en este enfoque
        })

        console.log("SESION INICIADA");

    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'Error al iniciar sesión',
        });
    }
};

registerLogin.ctrlFindUsers = async (req, res) => {

    try {
        const users = await findAllUser()

        return res.status(200).json(users)

    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
};

module.exports = registerLogin;
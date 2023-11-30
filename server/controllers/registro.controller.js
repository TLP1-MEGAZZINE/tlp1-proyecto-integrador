//IMPORTACIONES
const bcrypt = require('bcrypt');
const { generarJWT } = require('../helpers/generarToken');
const { findUserByEmailOrUsername, } = require("../models/users.model");
const { createUser } = require("../models/users.model");
const { createInfoUser } = require("../models/userInfo.model");
const { createContacto } = require("../models/contacto.model");
const { createEmpleador } = require("../models/empleador.model");
const { createParticular } = require("../models/particular.model");
const { createPostulante } = require("../models/postulantes.model");
const {createDesc} = require("../models/descripcion.model")

//CREAR EL OBJETO QUE CONTENDRA LOS METODOS POST
const registerLogin = {}

registerLogin.crearUser = async (req, res) => {
    const userData = req.body

    try {
        const user = await createUser(userData);

        if (user) {
            const info = await createInfoUser(user.id_user);
            const contacto = await createContacto(user.id_user);

            if (info && contacto) {
                console.log(user.id_rol);

                if (user.id_rol == 1) {
                    const postulante = await createPostulante(user.id_user);
                    const descripcion = await createDesc(user.id_user);
                    return res.status(200).json({ message: "Registro creado-controller" })
                }

                if (user.id_rol == 2) {
                    const empleador = await createEmpleador(user.id_user);
                    return res.status(200).json({ message: "Registro creado-controller" })
                }

                if (user.id_rol == 3) {
                    const particular = await createParticular(user.id_user);
                    return res.status(200).json({ message: "Registro creado-controller" })
                }

            }
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
        const token = await generarJWT(existeUsuario.id_user, existeUsuario.id_rol, existeUsuario.user_name);

        console.log("SESION INICIADA");
        console.log({ token });

        // const cookieOptions = {
        //     expires: new Date(Date.now() + 60 * 60 * 1000),
        //     httpOnly: true,
        //     sameSite: "strict"
        // }

        return (
            //NO SE USA EN REACT
            // res.cookie('token', token, cookieOptions),
            // res.cookie('username', existeUsuario.user_name),
            // res.cookie('id_user', existeUsuario.id_user),
            // res.cookie("id_rol", existeUsuario.id_rol),

            res.status(200).json({ message: "Datos Correctos,iniciando sesión", id_user: existeUsuario.id_user, user_name: existeUsuario.user_name, id_rol: existeUsuario.id_rol, token })
        )

    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'Error al iniciar sesión',
        });
    }
};

module.exports = registerLogin;
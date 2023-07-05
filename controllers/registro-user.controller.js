//IMPORTAR LOS MODELOS DE LAS TABLAS DE LA BASE DE DATOS
// const sequelize = require('../db');
const User = require('../models/users.model');
const bcrypt = require('bcrypt');
const {generarJWT} = require('../helpers/generarToken')

//CREAR EL OBJETO QUE CONTENDRA LOS METODOS POST
const metodoPost = {}

// METODO PARA CREAR UN USUARIO Y ENCRIPTAR SU PASSWORD
metodoPost.crearUsuario = async (req, res) => {
    try {
        const { user_name, user_email, user_password } = req.body;
        // Se verifica si el usuario ya existe
        const emailExistente = await User.findOne({
            where: {
                user_email
            }
        });

        if (emailExistente) {
            throw ({ // throw siempre debe ejecutarse dentro de un try catch
                status: 400,
                message: 'El usuario o email ya existen',
            })
        };

        const user = new User({
            user_name,
            user_email,
            user_password
        });

        //ENCRIPTAR LA PASSWORD
        const salt = await bcrypt.genSalt(10)
        user.user_password = await bcrypt.hash(user_password, salt);

        // GUARDAR USUARIO EN LA DB
        const usuarioCreado = await user.save();



        if (!usuarioCreado) {
            throw ({
                status: 400,
                message: 'No se pudo crear un usuario'
            })
        }

        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json(error.message || 'Error del sevidor');
    }
};


// METODO PARA EL LOGIN

metodoPost.loginUsuario = async (req, res) => {
    
    const { user_name, user_email, user_password } = req.body
    try {
    //VERIFICAR SI EXISTE EL USUARIO
    const existeUsuario = await User.findOne({ user_name });
        
    if(!existeUsuario) {
        return res.status(400).json({
            message: 'El usuario no existe',
        });
    }

    // Verificar si el usuario está activo
    if(!existeUsuario.estado) {
        return res.status(400).json({
            message: 'El usuario no está activo',
        });
    }

    // Verificar la contraseña
    const passwordValido = bcrypt.compareSync(user_password, existeUsuario.user_password);

    if(!passwordValido) {
        return res.status(400).json({
            message: 'La contraseña no es válida',
        });
    }

    // Generar el JWT
    const token = await generarJWT(existeUsuario.id_user)

    res.json({
        message: 'Login correcto',
        token,
    })

} catch (error) {
    console.log(error);
    res.status(500).json({
        message: 'Error al iniciar sesión',
    });

}};

    // try {

    //     const user = await User.findOne({ user_name, user_email })

    //     if (!user) {
    //         res.status(404)
    //         res.send({ error: "El usuario no existe" })
    //     }

    //     const checkPass = await comparar(user_password, user.user_password)
    //     const tokenSesion = await tokenFirmado(user)

    //     if (checkPass) { // COMPARA LOS DATOS DEL USUARIO
    //         res.send({
    //             data: user,
    //             token: tokenSesion
    //         })
    //         return
    //     }

    //     if (!checkPass) {
    //         res.status(409)
    //         res.send({
    //             error: "Contraseña Inválida"
    //         })
    //         return
    //     }
    // } catch (error) {
    //     console.error(error)
    //     res.status(500).send({ error: "Error interno del servidor" })
    // }

module.exports = metodoPost;
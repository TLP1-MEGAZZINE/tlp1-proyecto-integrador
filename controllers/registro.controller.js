

//IMPORTAR LOS MODELOS DE LAS TABLAS DE LA BASE DE DATOS
const { sequelize } = require('../db');
const Users = require('../models/users.model');
const UserInfo = require("../models/userInfo.model")
const Contacto = require('../models/contacto.model');
const Postulante = require('../models/postulantesInfo.model');
const Empleador = require('../models/empleador.model');
const Particular = require("../models/particular.model")

const {
    findEmail,
    findUserName
} = require('../models/users.model')



const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { generarJWT } = require('../helpers/generarToken')

//CREAR EL OBJETO QUE CONTENDRA LOS METODOS POST
const metodoPost = {}

// METODO PARA CREAR UN USUARIO Y ENCRIPTAR SU PASSWORD
metodoPost.crearUsuario = async (req, res) => {

    sequelize.transaction(async (transaction) => {
        try {

            const { user_name, user_email, user_password } = req.body;

            // Se verifica si el usuario e email ya existen
            const userNameExistente = await findUserName

            const emailExistente = await findEmail

            if (emailExistente == user_email) {
                return res.status(403).json({
                    message: '¡El email ya esta registrado!',
                });

            } else {
                if (userNameExistente == user_name) {
                    return res.status(403).json({
                        message: '¡El nombre de usuario ya esta registrado!',
                    });
                }
            };

            //ENCRIPTAR LA PASSWORD
            const salt = await bcrypt.genSalt(10)
            const hashedPass = await bcrypt.hash(user_password, salt)

            //CREA USUARIO EN LA DB
            const user = await Users.create({
                user_name,
                user_email,
                user_password: hashedPass
            },
                { transaction }
            );

            const id_user = user.id_user
            let rol

            const { nombre, apellido, dni, cuil, fecha_nacimiento, id_genero, id_pais, id_rol, otro_pais, id_provincia } = req.body;

            const info = await UserInfo.create(
                {
                    id_user,
                    nombre,
                    apellido,
                    dni,
                    cuil,
                    fecha_nacimiento,
                    id_genero,
                    id_rol,
                    id_pais,
                    otro_pais,
                    id_provincia
                },
                { transaction }
            );

            // GUARDAR INFO EN LA DB

            const { num_tel, domicilio } = req.body;

            const contacto = await Contacto.create(
                {
                    id_user,
                    num_tel,
                    domicilio,
                },
                { transaction }
            );

            // GUARDAR INFO EN LA DB

            rol = info.id_rol
            if (rol == 1) {

                //CREAR POSTULANTE
                const { id_EstadoLaboral,
                    id_NivelEducacion,
                    id_rubro,
                    otro_rubro } = req.body;

                const postulante = await Postulante.create(
                    {
                        id_user,
                        id_EstadoLaboral,
                        id_NivelEducacion,
                        id_rubro,
                        otro_rubro
                    },
                    { transaction }
                );

                return res.json({ user, info, contacto, postulante });

            } else if (rol == 2) {
                //CREAR EMPLEADOR
                const { num_telEmpresa,
                    domicilioEmpresa,
                    nombre_empresa,
                    id_rubro,
                    otro_rubro
                } = req.body;

                const empleador = await Empleador.create(
                    {
                        id_user,
                        num_telEmpresa,
                        domicilioEmpresa,
                        nombre_empresa,
                        id_rubro,
                        otro_rubro
                    },
                    { transaction }
                );

                return res.json({ user, info, contacto, empleador });


            } else if (rol == 3) {

                //CREAR PARTICULAR

                const particular = await Particular.create(
                    {
                        id_user
                    },
                    { transaction }
                );
                return res.json({ user, info, contacto, particular });
            }


        } catch (error) {
            console.log("Error al crear registros", error);
            throw error
        }
    })
        .then(() => {
            console.log("transaccion completada con exito")
        })
        .catch((error) => {
            console.error("error al completar la transaccion:", error);
        })
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

module.exports = metodoPost;
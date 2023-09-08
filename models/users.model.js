const { DataTypes, sequelize } = require('../db');
const { encriptar } = require('../helpers/encriptar');

//MODELO DE USERINFO Y METODO PARA CREAR EL REGISTRO EN DICHA TABLA
const { createInfoUser, } = require("./userInfo.model")

const { createContacto, } = require("./contacto.model")

const { createParticular, } = require("./particular.model")

const { createEmpleador, } = require("./empleador.model")

const { createPostulante, } = require("./postulantes.model");

const userActions = {}

//CREAR MODELO DE USERS
userActions.Users = sequelize.define('Users', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            messge: 'El usuario ya existe'
        }
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            messge: 'El email ya existe'
        }
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Users"
});

userActions.Users.sync({ force: false }).then(() => {
    console.log('Tabla de usuarios creada')
})

userActions.createUser = async (body) => {

    return sequelize.transaction(async (transaction) => {
        try {

            const { user_name,
                user_email,
                user_password } = body

            // Se verifica si el usuario e email ya existen
            const userNameExistente = await userActions.Users.findOne({ where: { user_name: user_name } });

            const emailExistente = await userActions.Users.findOne({ where: { user_email: user_email } });

            if (emailExistente) {
                // return res.status(403).json({
                //     message: '¡El email ya esta registrado!',
                // });
                throw new Error("El email ya esta registrado")

            } else {
                if (userNameExistente) {
                    /*                 return res.status(403).json({
                                        message: '¡El nombre de usuario ya esta registrado!',
                                    });
                                } */
                    throw new Error("El username ya esta registrado")
                };

                //ENCRIPTAR LA PASSWORD
                const hashedPass = await encriptar(user_password)

                //CREA USUARIO EN LA DB
                const userData = await userActions.Users.create({
                    user_name,
                    user_email,
                    user_password: hashedPass
                },
                    { transaction }
                );

                const id_user = userData.id_user
                let rol

                // CREAR INFO DE USUARIO EN LA DB

                let info = await createInfoUser({ id_user, });

                // CREAR REGISTRO DE CONTACTO EN LA DB

                let contacto = await createContacto({ id_user, });

                // GUARDAR INFO POSTULANTE EN LA DB

                rol = info.id_rol
                if (rol == 1) {

                    //CREAR REGISTRO POSTULANTE

                    let postulante = await createPostulante({ id_user, })

                    return res.json({ userData, info, contacto, postulante });

                } else if (rol == 2) {
                    //CREAR EMPLEADOR

                    let empleador = await createEmpleador({ id_user, })

                    return res.json({ userData, info, contacto, empleador });


                } else if (rol == 3) {

                    //CREAR PARTICULAR

                    const particular = await createParticular({ id_user, })

                    return res.json({ userData, info, contacto, particular });
                }
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


module.exports = {userActions};
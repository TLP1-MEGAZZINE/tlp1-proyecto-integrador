const { DataTypes, sequelize } = require('../db');
const { encriptar } = require('../helpers/encriptar');

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

Users.sync({ force: false }).then(() => {
    console.log('Tabla de usuarios creada')
})

userActions.createUser = async (body) => {

    return sequelize.transaction(async (transaction) => {
        try {

            const { user_name,
                user_email,
                user_password } = body

            // Se verifica si el usuario e email ya existen
            const userNameExistente = await Users.findOne({ where: { user_name: user_name } });

            const emailExistente = await Users.findOne({ where: { user_email: user_email } });

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

                const { nombre, apellido, dni, cuil, fecha_nacimiento, id_genero, id_pais, id_rol, otro_pais, id_provincia } = body;

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





module.exports = userActions;
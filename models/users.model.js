const { DataTypes, sequelize } = require('../db');
const { encriptar } = require('../helpers/encriptar');

//CREAR MODELO DE USER
const User = sequelize.define('User', {
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
    tableName: "User",
    modelName: "User"
});

User.sync({ force: false }).then(() => {
    console.log('Tabla de usuarios creada')
})


async function createUser(userData) {
    try {
        //COMPROBAR SI EXISTEN REGISTROS
        const existeUsername = await User.findOne({
            where: {
                user_name: userData.user_name
            }
        })

        const existeEmail = await User.findOne({
            where: {
                user_email: userData.user_email
            }
        })

        if (existeEmail) {
            throw new Error("El email ya esta registrado")
        } else {
            if (existeUsername) {
                throw new Error("El username ya esta registrado")
            }
        }

        //ENCRIPTAR LA PASSWORD
        const hashedPass = await encriptar(userData.user_password)

        //CREA USUARIO EN LA DB
        return await User.create({
            user_name: userData.user_name,
            user_email: userData.user_email,
            user_password: hashedPass
        });

    } catch (error) {
        console.error("error")
        throw error
    }
}

module.exports =  {User, createUser }
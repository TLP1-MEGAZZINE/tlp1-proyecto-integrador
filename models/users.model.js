const { DataTypes, sequelize } = require('../config/db');
const { encriptar } = require('../helpers/encriptar');
const { Op, where } = require('sequelize');
const UserRol = require("./userRol.model")

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
    id_rol: {
        type: DataTypes.INTEGER,
        references: {
            model: "User_rol",
            key: "id_rol"
        },
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


//SERVICIO
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
            user_password: hashedPass,
            id_rol: userData.id_rol,
        });

    } catch (error) {
        console.error("error")
        throw error
    }
}

async function findUserByEmail(value) {
    return await User.findOne({
        where: { user_email: value }
    })
}

async function findUserByUserName(value) {
    return await User.findOne({
        where: { user_name: value }
    })
}

async function findUserByEmailOrUsername(userCredentials) {
    return await User.findOne({
        where: {
            [Op.or]: [
                { user_name: userCredentials.user_name },
                { user_email: userCredentials.user_email }
            ]
        }
    });
}

//FIND ALL USERS IN DB
async function findAllUser() {
    try {
        return await User.findAll({
            where: { estado: true },
            include: [{
                model: UserRol, // Modelo relacionado
                attributes: ['description'] // Atributos que deseas obtener del modelo relacionado
            }],
            attributes: { exclude: ['user_password', 'estado', 'id_rol'] }
        }) ?? null

    } catch (error) {
        console.log("Error al encontrar usuarios", error)
    }
};

module.exports = { User, createUser, findUserByEmail, findUserByUserName, findUserByEmailOrUsername, findAllUser }
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
});

User.sync({ force: false }).then(() => {
    console.log('Tabla de usuarios creada')
})

//SERVICIOS

//CREA USUARIO EN LA DB
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

//ACTUALIZAR USUARIO
async function actualizarUsuario(userId, newData) {
    try {
        const user = await findUserById(userId)

        if (!user) {
            throw new Error("User no encontrado")
        }

        return await user.update({
            user_name: newData.user_name,
            user_email: newData.user_email,
            user_password: newData.user_password,
        })



    } catch (error) {
        console.log("Error at update user ", error)

    }
}

//BUSCAR USUARIO POR EMAIL
async function findUserByEmail(value) {
    return await User.findOne({
        where: { user_email: value }
    })
}

//BUSCAR USUARIO POR NOMBRE DE USUARIO
async function findUserByUserName(value) {
    return await User.findOne({
        where: { user_name: value }
    })
}

//BUSCAR POR EMAIL O USERNAME
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

//FIND ONE USER IN DB
async function findUserById(userId) {
    try {
        return await User.findByPk(userId) ?? null

    } catch (error) {
        console.log("Error al encontrar usuario")
    }
};

//FIND ALL USERS IN DB
async function findAllUser() {
    try {
        return await User.findAll({
            where: { estado: true },
            attributes: { exclude: ['user_password', 'estado', 'id_rol',] },
            include: [{
                model: UserRol, // Modelo relacionado
                attributes: ['description'] // Atributos que deseas obtener del modelo relacionado
            }],
        })

    } catch (error) {
        console.log("Error al encontrar usuarios", error)
    }
};

//BUSCAR POR ROL
async function findUserByRole(value) {
    try {
        return await User.findOne({
            where: { id_rol: value }
        })
    } catch (error) {
        console.log("Error al encontrar usuario por rol", error)
    }
}

//BUSCAR POR LOCALIDAD

//BUSCAR POR RANGO ETAREO

//CAMBIAR LA CONTRASEÑA

//ELIMINAR USUARIO
async function deleteUser(userId) {

    const deletedUser = await findUserById(userId)

    if (!deleteUser) {
        console.log("El usuario que esta tratando de eliminar no existe");
    }

    try {
        deletedUser.update({
            where: { estado: 0 }
        })
    } catch (error) {
        console.log("Error al eliminar el usuario", error);
    }
}

module.exports = { User, createUser, findUserByEmail, findUserByUserName, findUserByEmailOrUsername, findAllUser, findUserByRole, deleteUser }
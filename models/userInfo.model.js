// const { request } = require('express');
const { DataTypes, sequelize } = require('../config/db');

const UserInfo = sequelize.define('User_info', {
    id_info: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id_user"
        },
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // unique: {
        //     args: true,
        //     messge: 'El dni ya esta registrado'
        // }
    },
    cuil: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // unique: {
        //     args: true,
        //     messge: 'El cuil ya esta registrado'
        // }
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    id_genero: {
        type: DataTypes.INTEGER,
        references: {
            model: "genero",
            key: "id_genero"
        }
    },
    id_pais: {
        type: DataTypes.INTEGER,
        references: {
            model: "nacionalidad",
            key: "id_pais"
        },
    },
    id_provincia: {
        type: DataTypes.INTEGER,
        references: {
            model: "Provincia",
            key: "id_provincia"
        },
    },
    otro_pais: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Users_info"
});

//SI NO FUNCIONA CAMBIAR EL FALSE A TRUE
UserInfo.sync({ force: false }).then(() => {
    console.log('Tabla de info usuario creada')
})

//FUNCION PARA CREAR REGISTRO EN USERINFO
async function createInfoUser(id_user, userData) {

    try {
        return await UserInfo.create({
            id_user: id_user,
            nombre: userData.nombre,
            apellido: userData.apellido,
            dni: userData.dni,
            cuil: userData.cuil,
            fecha_nacimiento: userData.fecha_nacimiento,
            id_genero: userData.id_genero,
            id_pais: userData.id_pais,
            otro_pais: userData.otro_pais,
            id_provincia: userData.id_provincia
        },
        );

    } catch (error) {
        console.log("Error al crear registro de user_info", error);
        throw error
    }
}

//BUSCAR POR RUBRO
async function findByRubro(data,) {
    try {
        return await UserInfo.findOne({
            where: { id_rol: data }
        })
    } catch (error) {
        console.log("Error al encontrar usuario por rubro", error)
    }
}

module.exports = { createInfoUser, UserInfo, findByRubro }
